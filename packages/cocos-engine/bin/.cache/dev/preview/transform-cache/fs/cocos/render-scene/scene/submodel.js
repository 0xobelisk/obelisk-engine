System.register("q-bundled:///fs/cocos/render-scene/scene/submodel.js", ["../../rendering/define.js", "../core/pass.js", "../../gfx/index.js", "../../core/index.js", "../../rendering/pass-phase.js"], function (_export, _context) {
  "use strict";

  var RenderPriority, UNIFORM_REFLECTION_TEXTURE_BINDING, UNIFORM_REFLECTION_STORAGE_BINDING, INST_MAT_WORLD, INST_SH, UBOSH, isEnableEffect, BatchingSchemes, DescriptorSetInfo, TextureType, TextureUsageBit, TextureInfo, Format, Filter, Address, SamplerInfo, deviceManager, Attribute, Feature, FormatInfos, getTypedArrayConstructor, errorID, cclegacy, getPhaseID, _dsInfo, MAX_PASS_COUNT, SubModel;
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
    setters: [function (_renderingDefineJs) {
      RenderPriority = _renderingDefineJs.RenderPriority;
      UNIFORM_REFLECTION_TEXTURE_BINDING = _renderingDefineJs.UNIFORM_REFLECTION_TEXTURE_BINDING;
      UNIFORM_REFLECTION_STORAGE_BINDING = _renderingDefineJs.UNIFORM_REFLECTION_STORAGE_BINDING;
      INST_MAT_WORLD = _renderingDefineJs.INST_MAT_WORLD;
      INST_SH = _renderingDefineJs.INST_SH;
      UBOSH = _renderingDefineJs.UBOSH;
      isEnableEffect = _renderingDefineJs.isEnableEffect;
    }, function (_corePassJs) {
      BatchingSchemes = _corePassJs.BatchingSchemes;
    }, function (_gfxIndexJs) {
      DescriptorSetInfo = _gfxIndexJs.DescriptorSetInfo;
      TextureType = _gfxIndexJs.TextureType;
      TextureUsageBit = _gfxIndexJs.TextureUsageBit;
      TextureInfo = _gfxIndexJs.TextureInfo;
      Format = _gfxIndexJs.Format;
      Filter = _gfxIndexJs.Filter;
      Address = _gfxIndexJs.Address;
      SamplerInfo = _gfxIndexJs.SamplerInfo;
      deviceManager = _gfxIndexJs.deviceManager;
      Attribute = _gfxIndexJs.Attribute;
      Feature = _gfxIndexJs.Feature;
      FormatInfos = _gfxIndexJs.FormatInfos;
      getTypedArrayConstructor = _gfxIndexJs.getTypedArrayConstructor;
    }, function (_coreIndexJs) {
      errorID = _coreIndexJs.errorID;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_renderingPassPhaseJs) {
      getPhaseID = _renderingPassPhaseJs.getPhaseID;
    }],
    execute: function () {
      _dsInfo = new DescriptorSetInfo(null);
      MAX_PASS_COUNT = 8;
      /**
       * @en A sub part of the model, it describes how to render a specific sub mesh.
       * It contains geometry information in [[RenderingSubMesh]] and all sort of rendering configuration like shaders, macro patches, passes etc.
       * @zh 组成模型对象的子模型，它用来描述如何渲染模型的一个子网格。
       * 它包含 [[RenderingSubMesh]] 代表的几何网格信息和所有渲染需要的数据，比如着色器程序，着色器宏定义，渲染 pass，等。
       */
      _export("SubModel", SubModel = /*#__PURE__*/function () {
        function SubModel() {
          this._device = null;
          this._passes = null;
          this._shaders = null;
          this._subMesh = null;
          this._patches = null;
          this._priority = RenderPriority.DEFAULT;
          this._inputAssembler = null;
          this._descriptorSet = null;
          this._worldBoundDescriptorSet = null;
          this._reflectionTex = null;
          this._reflectionSampler = null;
          this._instancedAttributeBlock = {
            buffer: null,
            views: [],
            attributes: []
          };
          this._instancedWorldMatrixIndex = -1;
          this._instancedSHIndex = -1;
          this._useReflectionProbeType = 0;
        }
        var _proto = SubModel.prototype;
        /**
         * @en
         * init sub model
         * @zh
         * 子模型初始化
         * @param subMesh @en The sub mesh @zh 子网格资源
         * @param passes @en The passes @zh 渲染的 passes
         * @param patches @en The shader's macro @zh 着色器的宏定义
         */
        _proto.initialize = function initialize(subMesh, passes, patches) {
          if (patches === void 0) {
            patches = null;
          }
          var root = cclegacy.director.root;
          this._device = deviceManager.gfxDevice;
          _dsInfo.layout = passes[0].localSetLayout;
          this._inputAssembler = this._device.createInputAssembler(subMesh.iaInfo);
          this._descriptorSet = this._device.createDescriptorSet(_dsInfo);
          var pipeline = cclegacy.director.root.pipeline;
          var occlusionPass = pipeline.pipelineSceneData.getOcclusionQueryPass();
          if (occlusionPass) {
            var occlusionDSInfo = new DescriptorSetInfo(null);
            occlusionDSInfo.layout = occlusionPass.localSetLayout;
            this._worldBoundDescriptorSet = this._device.createDescriptorSet(occlusionDSInfo);
          }
          this._subMesh = subMesh;
          this._patches = patches ? patches.sort() : null;
          this._passes = passes;
          this._flushPassInfo();
          this.priority = RenderPriority.DEFAULT;
          var r = cclegacy.rendering;
          // initialize resources for reflection material
          if ((!r || !r.enableEffectImport) && passes[0].phase === getPhaseID('reflection') || isEnableEffect() && passes[0].phaseID === r.getPhaseID(r.getPassID('default'), 'reflection')) {
            var texWidth = root.mainWindow.width;
            var texHeight = root.mainWindow.height;
            var minSize = 512;
            if (texHeight < texWidth) {
              texWidth = minSize * texWidth / texHeight;
              texHeight = minSize;
            } else {
              texWidth = minSize;
              texHeight = minSize * texHeight / texWidth;
            }
            this._reflectionTex = this._device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.STORAGE | TextureUsageBit.TRANSFER_SRC | TextureUsageBit.SAMPLED, Format.RGBA8, texWidth, texHeight));
            this.descriptorSet.bindTexture(UNIFORM_REFLECTION_TEXTURE_BINDING, this._reflectionTex);
            this._reflectionSampler = this._device.getSampler(new SamplerInfo(Filter.LINEAR, Filter.LINEAR, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP));
            this.descriptorSet.bindSampler(UNIFORM_REFLECTION_TEXTURE_BINDING, this._reflectionSampler);
            this.descriptorSet.bindTexture(UNIFORM_REFLECTION_STORAGE_BINDING, this._reflectionTex);
          }
        }

        /**
         * @en
         * destroy sub model
         * @zh
         * 销毁子模型
         */;
        _proto.destroy = function destroy() {
          var _this$_worldBoundDesc;
          this._descriptorSet.destroy();
          this._descriptorSet = null;
          this._inputAssembler.destroy();
          this._inputAssembler = null;
          (_this$_worldBoundDesc = this._worldBoundDescriptorSet) === null || _this$_worldBoundDesc === void 0 ? void 0 : _this$_worldBoundDesc.destroy();
          this._worldBoundDescriptorSet = null;
          this.priority = RenderPriority.DEFAULT;
          this._patches = null;
          this._subMesh = null;
          this._passes = null;
          this._shaders = null;
          if (this._reflectionTex) this._reflectionTex.destroy();
          this._reflectionTex = null;
          this._reflectionSampler = null;
        }

        /**
         * @en
         * update sub model
         * @zh
         * 更新子模型
         */;
        _proto.update = function update() {
          var _this$_worldBoundDesc2;
          for (var i = 0; i < this._passes.length; ++i) {
            var pass = this._passes[i];
            pass.update();
          }
          this._descriptorSet.update();
          (_this$_worldBoundDesc2 = this._worldBoundDescriptorSet) === null || _this$_worldBoundDesc2 === void 0 ? void 0 : _this$_worldBoundDesc2.update();
        }

        /**
         * @en Pipeline changed callback
         * @zh 管线更新回调
         */;
        _proto.onPipelineStateChanged = function onPipelineStateChanged() {
          var passes = this._passes;
          if (!passes) {
            return;
          }
          for (var i = 0; i < passes.length; i++) {
            var pass = passes[i];
            pass.beginChangeStatesSilently();
            pass.tryCompile(); // force update shaders
            pass.endChangeStatesSilently();
          }
          this._flushPassInfo();
        }

        /**
         * @en Shader macro changed callback
         * @zh Shader 宏更新回调
         */;
        _proto.onMacroPatchesStateChanged = function onMacroPatchesStateChanged(patches) {
          if (!patches && !this._patches) {
            return;
          } else if (patches) {
            patches = patches.sort();
            // Sorting on shorter patches outperforms hashing, with negative optimization on longer global patches.
            if (this._patches && patches.length === this._patches.length) {
              var patchesStateUnchanged = JSON.stringify(patches) === JSON.stringify(this._patches);
              if (patchesStateUnchanged) return;
            }
          }
          this._patches = patches;
          var passes = this._passes;
          if (!passes) {
            return;
          }
          for (var i = 0; i < passes.length; i++) {
            var pass = passes[i];
            pass.beginChangeStatesSilently();
            pass.tryCompile(); // force update shaders
            pass.endChangeStatesSilently();
          }
          this._flushPassInfo();
        }

        /**
         * @en
         * geometry changed callback
         * @zh
         * 几何数据改变后的回调
         */;
        _proto.onGeometryChanged = function onGeometryChanged() {
          if (!this._subMesh) {
            return;
          }

          // update draw info
          var drawInfo = this._subMesh.drawInfo;

          // to invoke getter/setter function for wasm object
          if (this._inputAssembler && drawInfo) {
            var dirtyDrawInfo = this._inputAssembler.drawInfo;
            Object.keys(drawInfo).forEach(function (key) {
              dirtyDrawInfo[key] = drawInfo[key];
            });
            this._inputAssembler.drawInfo = dirtyDrawInfo;
          }
        }

        /**
         * @en
         * get instanced attribute index
         * @zh
         * 获取硬件实例化相关索引
         */
        /**
         * @internal
         */;
        _proto.getInstancedAttributeIndex = function getInstancedAttributeIndex(name) {
          var attributes = this.instancedAttributeBlock.attributes;
          for (var i = 0; i < attributes.length; i++) {
            if (attributes[i].name === name) {
              return i;
            }
          }
          return -1;
        }

        /**
         * @en
         * update instancing related data, invoked by model
         * @zh
         * 更新硬件实例化相关数据，一般由model调用
         */
        /**
         * @internal
         */;
        _proto.updateInstancedWorldMatrix = function updateInstancedWorldMatrix(mat, idx) {
          var attrs = this.instancedAttributeBlock.views;
          var v1 = attrs[idx];
          var v2 = attrs[idx + 1];
          var v3 = attrs[idx + 2];
          v1[0] = mat.m00;
          v1[1] = mat.m01;
          v1[2] = mat.m02;
          v1[3] = mat.m12;
          v2[0] = mat.m04;
          v2[1] = mat.m05;
          v2[2] = mat.m06;
          v2[3] = mat.m13;
          v3[0] = mat.m08;
          v3[1] = mat.m09;
          v3[2] = mat.m10;
          v3[3] = mat.m14;
        }

        /**
         * @en
         * update instancing SH data, invoked by model
         * @zh
         * 更新硬件实例化球谐数据，一般由model调用
         */
        /**
         * @internal
         */;
        _proto.updateInstancedSH = function updateInstancedSH(data, idx) {
          var attrs = this.instancedAttributeBlock.views;
          var count = (UBOSH.SH_QUADRATIC_R_OFFSET - UBOSH.SH_LINEAR_CONST_R_OFFSET) / 4;
          var offset = 0;
          for (var i = idx; i < idx + count; i++) {
            for (var k = 0; k < 4; k++) {
              attrs[i][k] = data[offset++];
            }
          }
        }

        /**
         * @en
         * update instancing related data, invoked by model
         * @zh
         * 更新硬件实例化相关数据，一般由model调用
         */
        /**
         * @internal
         */;
        _proto.UpdateInstancedAttributes = function UpdateInstancedAttributes(attributes) {
          // initialize subModelWorldMatrixIndex
          this.instancedWorldMatrixIndex = -1;
          this.instancedSHIndex = -1;
          var pass = this.passes[0];
          if (!pass.device.hasFeature(Feature.INSTANCED_ARRAYS)) {
            return;
          }
          // free old data

          var size = 0;
          for (var j = 0; j < attributes.length; j++) {
            var attribute = attributes[j];
            if (!attribute.isInstanced) {
              continue;
            }
            size += FormatInfos[attribute.format].size;
          }
          var attrs = this.instancedAttributeBlock;
          attrs.buffer = new Uint8Array(size);
          attrs.views.length = attrs.attributes.length = 0;
          var offset = 0;
          for (var _j = 0; _j < attributes.length; _j++) {
            var _attribute = attributes[_j];
            if (!_attribute.isInstanced) {
              continue;
            }
            var attr = new Attribute();
            attr.format = _attribute.format;
            attr.name = _attribute.name;
            attr.isNormalized = _attribute.isNormalized;
            attr.location = _attribute.location;
            attrs.attributes.push(attr);
            var info = FormatInfos[_attribute.format];
            var typeViewArray = new (getTypedArrayConstructor(info))(attrs.buffer.buffer, offset, info.count);
            attrs.views.push(typeViewArray);
            offset += info.size;
          }
          if (pass.batchingScheme === BatchingSchemes.INSTANCING) {
            pass.getInstancedBuffer().destroy();
          } // instancing IA changed
          this.instancedWorldMatrixIndex = this.getInstancedAttributeIndex(INST_MAT_WORLD);
          this.instancedSHIndex = this.getInstancedAttributeIndex(INST_SH);
        };
        _proto._flushPassInfo = function _flushPassInfo() {
          var passes = this._passes;
          if (!passes) {
            return;
          }
          if (!this._shaders) {
            this._shaders = [];
          }
          this._shaders.length = passes.length;
          for (var i = 0, len = passes.length; i < len; i++) {
            this._shaders[i] = passes[i].getShaderVariant(this.patches);
          }
        };
        _createClass(SubModel, [{
          key: "passes",
          get: function get() {
            return this._passes;
          }

          /**
           * @en Shaders for the sub-model, each shader corresponds to one of the [[passes]]
           * @zh 子模型的着色器程序列表，每个着色器程序对应其中一个渲染 [[passes]]
           */,
          set:
          /**
           * @en
           * sub model's passes
           * @zh
           * 子模型的 passes
           * @param passes @en The passes @zh 设置的 passes
           */
          /**
           * @en Render passes for the sub-model
           * @zh 子模型的渲染 pass
           */
          function set(passes) {
            var passLengh = passes.length;
            if (passLengh > MAX_PASS_COUNT) {
              errorID(12004, MAX_PASS_COUNT);
              return;
            }
            this._passes = passes;
            this._flushPassInfo();

            // DS layout might change too
            if (this._descriptorSet) {
              this._descriptorSet.destroy();
              _dsInfo.layout = passes[0].localSetLayout;
              this._descriptorSet = this._device.createDescriptorSet(_dsInfo);
            }
          }
        }, {
          key: "shaders",
          get: function get() {
            return this._shaders;
          }

          /**
           * @en The rendering sub mesh for the sub-model, each sub-model can only have one sub mesh.
           * @zh 用于渲染的子网格对象，每个子模型只能包含一个子网格。
           */
        }, {
          key: "subMesh",
          get: function get() {
            return this._subMesh;
          }

          /**
           * @en The rendering priority of the sub-model
           * @zh 子模型的渲染优先级
           */,
          set: function set(subMesh) {
            this._inputAssembler.destroy();
            this._inputAssembler = this._device.createInputAssembler(subMesh.iaInfo);
            this._subMesh = subMesh;
          }
        }, {
          key: "priority",
          get: function get() {
            return this._priority;
          }

          /**
           * @en The low level input assembler which contains geometry data
           * @zh 底层渲染用的输入汇集器，包含几何信息
           */,
          set: function set(val) {
            this._priority = val;
          }
        }, {
          key: "inputAssembler",
          get: function get() {
            return this._inputAssembler;
          }

          /**
           * @en The descriptor set used for sub-model rendering
           * @zh 底层渲染子模型用的描述符集组
           */
        }, {
          key: "descriptorSet",
          get: function get() {
            return this._descriptorSet;
          }

          /**
           * @en The descriptor set for world bound
           * @zh 用于存储世界包围盒的描述符集组
           */
        }, {
          key: "worldBoundDescriptorSet",
          get: function get() {
            return this._worldBoundDescriptorSet;
          }

          /**
           * @en The macro patches for the shaders
           * @zh 着色器程序所用的宏定义组合
           */
        }, {
          key: "patches",
          get: function get() {
            return this._patches;
          }

          /**
           * @en The instance attribute block, access by sub model
           * @zh 硬件实例化属性，通过子模型访问
           */
        }, {
          key: "instancedAttributeBlock",
          get: function get() {
            return this._instancedAttributeBlock;
          }

          /**
           * @en Get or set instance matrix id, access by sub model
           * @zh 获取或者设置硬件实例化中的矩阵索引，通过子模型访问
           */
        }, {
          key: "instancedWorldMatrixIndex",
          get: function get() {
            return this._instancedWorldMatrixIndex;
          }

          /**
           * @en Get or set instance SH id, access by sub model
           * @zh 获取或者设置硬件实例化中的球谐索引，通过子模型访问
           */,
          set: function set(val) {
            this._instancedWorldMatrixIndex = val;
          }
        }, {
          key: "instancedSHIndex",
          get: function get() {
            return this._instancedSHIndex;
          }

          /**
           * @en Gets or sets the type of reflection probe, Used to process instance
           * @zh 获取或设置使用反射探针的类型，用于处理instance
           */,
          set: function set(val) {
            this._instancedSHIndex = val;
          }
        }, {
          key: "useReflectionProbeType",
          get: function get() {
            return this._useReflectionProbeType;
          },
          set: function set(val) {
            this._useReflectionProbeType = val;
          }
        }]);
        return SubModel;
      }());
    }
  };
});