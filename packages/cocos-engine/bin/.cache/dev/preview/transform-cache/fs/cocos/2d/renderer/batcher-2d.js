System.register("q-bundled:///fs/cocos/2d/renderer/batcher-2d.js", ["../../../../virtual/internal%253Aconstants.js", "../../asset/assets/material.js", "../../gfx/index.js", "../../core/index.js", "./stencil-manager.js", "./draw-batch.js", "../../rendering/define.js", "./static-vb-accessor.js", "./vertex-format.js", "../assembler/utils.js", "../../render-scene/index.js", "../../asset/asset-manager/index.js", "../../asset/assets/index.js"], function (_export, _context) {
  "use strict";

  var DEBUG, JSB, Material, DescriptorSetInfo, BufferInfo, BufferUsageBit, MemoryUsageBit, deviceManager, PrimitiveMode, CachedArray, Pool, Mat4, cclegacy, assertIsTrue, assert, approx, EPSILON, Stage, StencilManager, DrawBatch2D, ModelLocalBindings, UBOLocal, StaticVBAccessor, getAttributeStride, vfmt, vfmtPosUvColor, updateOpacity, scene, builtinResMgr, RenderingSubMesh, _dsInfo, m4_1, Batcher2D, LocalDescriptorSet, DescriptorSetCache;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2019-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_assetAssetsMaterialJs) {
      Material = _assetAssetsMaterialJs.Material;
    }, function (_gfxIndexJs) {
      DescriptorSetInfo = _gfxIndexJs.DescriptorSetInfo;
      BufferInfo = _gfxIndexJs.BufferInfo;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      deviceManager = _gfxIndexJs.deviceManager;
      PrimitiveMode = _gfxIndexJs.PrimitiveMode;
    }, function (_coreIndexJs) {
      CachedArray = _coreIndexJs.CachedArray;
      Pool = _coreIndexJs.Pool;
      Mat4 = _coreIndexJs.Mat4;
      cclegacy = _coreIndexJs.cclegacy;
      assertIsTrue = _coreIndexJs.assertIsTrue;
      assert = _coreIndexJs.assert;
      approx = _coreIndexJs.approx;
      EPSILON = _coreIndexJs.EPSILON;
    }, function (_stencilManagerJs) {
      Stage = _stencilManagerJs.Stage;
      StencilManager = _stencilManagerJs.StencilManager;
    }, function (_drawBatchJs) {
      DrawBatch2D = _drawBatchJs.DrawBatch2D;
    }, function (_renderingDefineJs) {
      ModelLocalBindings = _renderingDefineJs.ModelLocalBindings;
      UBOLocal = _renderingDefineJs.UBOLocal;
    }, function (_staticVbAccessorJs) {
      StaticVBAccessor = _staticVbAccessorJs.StaticVBAccessor;
    }, function (_vertexFormatJs) {
      getAttributeStride = _vertexFormatJs.getAttributeStride;
      vfmt = _vertexFormatJs.vfmt;
      vfmtPosUvColor = _vertexFormatJs.vfmtPosUvColor;
    }, function (_assemblerUtilsJs) {
      updateOpacity = _assemblerUtilsJs.updateOpacity;
    }, function (_renderSceneIndexJs) {
      scene = _renderSceneIndexJs.scene;
    }, function (_assetAssetManagerIndexJs) {
      builtinResMgr = _assetAssetManagerIndexJs.builtinResMgr;
    }, function (_assetAssetsIndexJs) {
      RenderingSubMesh = _assetAssetsIndexJs.RenderingSubMesh;
    }],
    execute: function () {
      _dsInfo = new DescriptorSetInfo(null);
      m4_1 = new Mat4();
      /**
       * @en UI rendering process
       * @zh UI 渲染流程
       */
      _export("Batcher2D", Batcher2D = /*#__PURE__*/function () {
        function Batcher2D(_root) {
          var _this = this;
          this.device = void 0;
          this._screens = [];
          this._staticVBBuffer = null;
          this._bufferAccessors = new Map();
          this._drawBatchPool = void 0;
          this._batches = void 0;
          this._currBID = -1;
          this._indexStart = 0;
          this._emptyMaterial = new Material();
          this._currRenderData = null;
          this._currMaterial = this._emptyMaterial;
          this._currTexture = null;
          this._currSampler = null;
          this._currStaticRoot = null;
          this._currComponent = null;
          this._currTransform = null;
          this._currTextureHash = 0;
          this._currSamplerHash = 0;
          this._currLayer = 0;
          this._currDepthStencilStateStage = null;
          this._currIsStatic = false;
          this._currHash = 0;
          //for middleware
          this._currIsMiddleware = false;
          this._middlewareEnableBatch = false;
          this._middlewareBuffer = null;
          this._middlewareIndexStart = 0;
          this._middlewareIndexCount = 0;
          this._pOpacity = 1;
          this._opacityDirty = 0;
          // DescriptorSet Cache Map
          this._descriptorSetCache = new DescriptorSetCache();
          this._meshDataArray = [];
          // mask use
          this._maskClearModel = null;
          this._maskClearMtl = null;
          this._maskModelMesh = null;
          this._root = _root;
          this.device = _root.device;
          this._batches = new CachedArray(64);
          this._drawBatchPool = new Pool(function () {
            return new DrawBatch2D();
          }, 128, function (obj) {
            return obj.destroy(_this);
          });
        }
        var _proto = Batcher2D.prototype;
        _proto.initialize = function initialize() {
          return true;
        };
        _proto.destroy = function destroy() {
          for (var i = 0; i < this._batches.length; i++) {
            if (this._batches.array[i]) {
              this._batches.array[i].destroy(this);
            }
          }
          this._batches.destroy();
          for (var _iterator = _createForOfIteratorHelperLoose(this._bufferAccessors.values()), _step; !(_step = _iterator()).done;) {
            var accessor = _step.value;
            accessor.destroy();
          }
          this._bufferAccessors.clear();
          if (this._drawBatchPool) {
            this._drawBatchPool.destroy();
          }
          this._descriptorSetCache.destroy();
          StencilManager.sharedManager.destroy();
          if (this._maskClearModel && this._maskModelMesh) {
            cclegacy.director.root.destroyModel(this._maskClearModel);
            this._maskModelMesh.destroy();
          }
          if (this._maskClearMtl) {
            this._maskClearMtl.destroy();
          }
        };
        _proto.syncRootNodesToNative = function syncRootNodesToNative() {
          if (JSB) {
            var rootNodes = [];
            for (var _iterator2 = _createForOfIteratorHelperLoose(this._screens), _step2; !(_step2 = _iterator2()).done;) {
              var screen = _step2.value;
              rootNodes.push(screen.node);
            }
            this._nativeObj.syncRootNodesToNative(rootNodes);
          }
        }

        /**
         * @en
         * Add the managed Canvas.
         *
         * @zh
         * 添加屏幕组件管理。
         *
         * @param comp @en The render root of 2d.
         *             @zh 2d 渲染入口组件。
         */;
        _proto.addScreen = function addScreen(comp) {
          this._screens.push(comp);
          this._screens.sort(this._screenSort);
          if (JSB) {
            this.syncRootNodesToNative();
          }
        }

        /**
         * @zh
         * Removes the Canvas from the list.
         *
         * @param comp @en The target to removed.
         *             @zh 被移除的屏幕。
         */;
        _proto.removeScreen = function removeScreen(comp) {
          var idx = this._screens.indexOf(comp);
          if (idx === -1) {
            return;
          }
          this._screens.splice(idx, 1);
          if (JSB) {
            this.syncRootNodesToNative();
          }
        };
        _proto.sortScreens = function sortScreens() {
          this._screens.sort(this._screenSort);
          if (JSB) {
            this.syncRootNodesToNative();
          }
        };
        _proto.getFirstRenderCamera = function getFirstRenderCamera(node) {
          if (node.scene && node.scene.renderScene) {
            var cameras = node.scene.renderScene.cameras;
            for (var i = 0; i < cameras.length; i++) {
              var camera = cameras[i];
              if (camera.visibility & node.layer) {
                return camera;
              }
            }
          }
          return null;
        };
        _proto.update = function update() {
          if (JSB) {
            return;
          }
          var screens = this._screens;
          var offset = 0;
          for (var i = 0; i < screens.length; ++i) {
            var screen = screens[i];
            var _scene = screen._getRenderScene();
            if (!screen.enabledInHierarchy || !_scene) {
              continue;
            }
            // Reset state and walk
            this._opacityDirty = 0;
            this._pOpacity = 1;
            this.walk(screen.node);
            this.autoMergeBatches(this._currComponent);
            this.resetRenderStates();
            var batchPriority = 0;
            if (this._batches.length > offset) {
              for (; offset < this._batches.length; ++offset) {
                var batch = this._batches.array[offset];
                if (batch.model) {
                  var subModels = batch.model.subModels;
                  for (var j = 0; j < subModels.length; j++) {
                    subModels[j].priority = batchPriority++;
                  }
                } else {
                  batch.descriptorSet = this._descriptorSetCache.getDescriptorSet(batch);
                }
                _scene.addBatch(batch);
              }
            }
          }
        };
        _proto.uploadBuffers = function uploadBuffers() {
          if (JSB) {
            this._nativeObj.uploadBuffers();
          } else if (this._batches.length > 0) {
            var length = this._meshDataArray.length;
            for (var i = 0; i < length; i++) {
              this._meshDataArray[i].uploadBuffers();
            }
            for (var _iterator3 = _createForOfIteratorHelperLoose(this._bufferAccessors.values()), _step3; !(_step3 = _iterator3()).done;) {
              var accessor = _step3.value;
              accessor.uploadBuffers();
              accessor.reset();
            }
            this._descriptorSetCache.update();
          }
        };
        _proto.reset = function reset() {
          if (JSB) {
            this._nativeObj.reset();
          } else {
            for (var i = 0; i < this._batches.length; ++i) {
              var batch = this._batches.array[i];
              if (batch.isStatic) {
                continue;
              }
              batch.clear();
              this._drawBatchPool.free(batch);
            }
            // Reset buffer accessors
            for (var _iterator4 = _createForOfIteratorHelperLoose(this._bufferAccessors.values()), _step4; !(_step4 = _iterator4()).done;) {
              var accessor = _step4.value;
              accessor.reset();
            }
            var length = this._meshDataArray.length;
            for (var _i = 0; _i < length; _i++) {
              this._meshDataArray[_i].freeIAPool();
            }
            this._meshDataArray.length = 0;
            this._staticVBBuffer = null;
            this._currBID = -1;
            this._indexStart = 0;
            this._currHash = 0;
            this._currLayer = 0;
            this._currRenderData = null;
            this._currMaterial = this._emptyMaterial;
            this._currTexture = null;
            this._currSampler = null;
            this._currComponent = null;
            this._currTransform = null;
            this._batches.clear();
            StencilManager.sharedManager.reset();
          }
        }

        /**
         * @zh 如果有必要，为相应的顶点布局切换网格缓冲区。
         * @en Switch the mesh buffer for corresponding vertex layout if necessary.
         * @param attributes use VertexFormat.vfmtPosUvColor by default
         */;
        _proto.switchBufferAccessor = function switchBufferAccessor(attributes) {
          if (attributes === void 0) {
            attributes = vfmtPosUvColor;
          }
          var strideBytes = attributes === vfmtPosUvColor ? 36 /* 9x4 */ : getAttributeStride(attributes);
          // If current accessor not compatible with the requested attributes
          if (!this._staticVBBuffer || this._staticVBBuffer.vertexFormatBytes !== strideBytes) {
            var accessor = this._bufferAccessors.get(strideBytes);
            if (!accessor) {
              accessor = new StaticVBAccessor(this.device, attributes);
              this._bufferAccessors.set(strideBytes, accessor);
            }
            this._staticVBBuffer = accessor;
            this._currBID = -1;
          }
          return this._staticVBBuffer;
        };
        _proto.registerBufferAccessor = function registerBufferAccessor(key, accessor) {
          this._bufferAccessors.set(key, accessor);
        };
        _proto.updateBuffer = function updateBuffer(attributes, bid) {
          var accessor = this.switchBufferAccessor(attributes);
          // If accessor changed, then current bid will be reset to -1, this check will pass too
          if (this._currBID !== bid) {
            this._currBID = bid;
            this._indexStart = accessor.getMeshBuffer(bid).indexOffset;
          }
        }

        /**
         * @en
         * Render component data submission process of UI.
         * The submitted vertex data is the UI for world coordinates.
         * For example: The UI components except Graphics and UIModel.
         *
         * @zh
         * UI 渲染组件数据提交流程（针对提交的顶点数据是世界坐标的提交流程，例如：除 Graphics 和 UIModel 的大部分 ui 组件）。
         * 此处的数据最终会生成需要提交渲染的 model 数据。
         *
         * @param comp - The committed renderable component
         * @param renderData - The render data being committed
         * @param frame - Texture or sprite frame related to the draw batch, could be null
         * @param assembler - The assembler for the current component, could be null
         * @param transform - Node type transform, if passed, then batcher will consider it's using model matrix, could be null
         */;
        _proto.commitComp = function commitComp(comp, renderData, frame, assembler, transform) {
          var dataHash = 0;
          var mat;
          var bufferID = -1;
          if (renderData && renderData.chunk) {
            if (!renderData.isValid()) return;
            dataHash = renderData.dataHash;
            mat = renderData.material;
            bufferID = renderData.chunk.bufferId;
          }
          // Notice: A little hack, if it is for mask, not need update here, while control by stencilManger
          if (comp.stencilStage === Stage.ENTER_LEVEL || comp.stencilStage === Stage.ENTER_LEVEL_INVERTED) {
            this._insertMaskBatch(comp);
          } else {
            comp.stencilStage = StencilManager.sharedManager.stage;
          }
          var depthStencilStateStage = comp.stencilStage;
          if (this._currHash !== dataHash || dataHash === 0 || this._currMaterial !== mat || this._currDepthStencilStateStage !== depthStencilStateStage) {
            // Merge all previous data to a render batch, and update buffer for next render data
            this.autoMergeBatches(this._currComponent);
            if (renderData && !renderData._isMeshBuffer) {
              this.updateBuffer(renderData.vertexFormat, bufferID);
            }
            this._currRenderData = renderData;
            this._currHash = renderData ? renderData.dataHash : 0;
            this._currComponent = comp;
            this._currTransform = transform;
            this._currMaterial = comp.getRenderMaterial(0);
            this._currDepthStencilStateStage = depthStencilStateStage;
            this._currLayer = comp.node.layer;
            if (frame) {
              if (DEBUG) {
                assert(frame.isValid, 'frame should not be invalid, it may have been released');
              }
              this._currTexture = frame.getGFXTexture();
              this._currSampler = frame.getGFXSampler();
              this._currTextureHash = frame.getHash();
              this._currSamplerHash = this._currSampler.hash;
            } else {
              this._currTexture = null;
              this._currSampler = null;
              this._currTextureHash = 0;
              this._currSamplerHash = 0;
            }
          }
          assembler.fillBuffers(comp, this);
        }

        /**
         * @en
         * Render component data submission process for individual [[gfx.InputAssembler]]
         * @zh
         * 渲染组件中针对独立 [[gfx.InputAssembler]] 的提交流程
         * 例如：Spine 和 DragonBones 等包含动态数据和材质的组件在内部管理 IA 并提交批次
         * @param comp - The committed renderable component
         * @param ia - The committed [[gfx.InputAssembler]]
         * @param tex - The texture used
         * @param mat - The material used
         * @param [transform] - The related node transform if the render data is based on node's local coordinates
         * @deprecated since v3.6.2, please use [[commitMiddleware]] instead
         */;
        _proto.commitIA = function commitIA(renderComp, ia, tex, mat, transform) {
          // if the last comp is spriteComp, previous comps should be batched.
          if (this._currMaterial !== this._emptyMaterial) {
            this.autoMergeBatches(this._currComponent);
            this.resetRenderStates();
          }
          var depthStencil;
          var dssHash = 0;
          if (renderComp) {
            renderComp.stencilStage = StencilManager.sharedManager.stage;
            if (renderComp.customMaterial !== null) {
              depthStencil = StencilManager.sharedManager.getStencilStage(renderComp.stencilStage, mat);
            } else {
              depthStencil = StencilManager.sharedManager.getStencilStage(renderComp.stencilStage);
            }
            dssHash = StencilManager.sharedManager.getStencilHash(renderComp.stencilStage);
          }
          var curDrawBatch = this._currStaticRoot ? this._currStaticRoot._requireDrawBatch() : this._drawBatchPool.alloc();
          curDrawBatch.visFlags = renderComp.node.layer;
          curDrawBatch.inputAssembler = ia;
          curDrawBatch.useLocalData = transform || null;
          if (tex) {
            curDrawBatch.texture = tex.getGFXTexture();
            curDrawBatch.sampler = tex.getGFXSampler();
            curDrawBatch.textureHash = tex.getHash();
            curDrawBatch.samplerHash = curDrawBatch.sampler.hash;
          }
          curDrawBatch.fillPasses(mat || null, depthStencil, dssHash, null);
          this._batches.push(curDrawBatch);
        }

        /**
         * @en
         * Render component data submission process for middleware2d components
         * @zh
         * 渲染组件中针对2D中间件组件渲染数据的提交流程
         * 例如：Spine 和 DragonBones 包含动态数据和材质的组件
         * @param comp - The committed renderable component
         * @param meshBuffer - The MeshBuffer used
         * @param indexOffset - indices offset
         * @param indexCount - indices count
         * @param tex - The texture used
         * @param mat - The material used
         * @param enableBatch - component support multi draw batch or not
         */;
        _proto.commitMiddleware = function commitMiddleware(comp, meshBuffer, indexOffset, indexCount, tex, mat, enableBatch) {
          // check if need merge draw batch
          var texture = tex.getGFXTexture();
          if (enableBatch && this._middlewareEnableBatch && this._middlewareBuffer === meshBuffer && this._currTexture === texture && this._currMaterial.hash === mat.hash && this._middlewareIndexStart + this._middlewareIndexCount === indexOffset && this._currLayer === comp.node.layer) {
            this._middlewareIndexCount += indexCount;
          } else {
            this.autoMergeBatches(this._currComponent);
            this.resetRenderStates();
            this._currComponent = comp;
            this._currTexture = texture;
            this._currSampler = tex.getGFXSampler();
            this._currTextureHash = tex.getHash();
            this._currLayer = comp.node.layer;
            this._currSamplerHash = this._currSampler.hash;
            this._currHash = 0;
            this._currTransform = enableBatch ? null : comp.node;
            this._middlewareEnableBatch = enableBatch;
            this._middlewareBuffer = meshBuffer;
            this._currMaterial = mat;
            this._middlewareIndexStart = indexOffset;
            this._middlewareIndexCount = indexCount;
          }
          this._currIsMiddleware = true;
        }

        /**
         * @en
         * Render component data submission process of UI.
         * The submitted vertex data is the UI for local coordinates.
         * For example: The UI components of Graphics and UIModel.
         *
         * @zh
         * UI 渲染组件数据提交流程（针对例如： Graphics 和 UIModel 等数据量较为庞大的 ui 组件）。
         *
         * @param comp - The committed renderable component
         * @param model - The committed model
         * @param mat - The material used, could be null
         */;
        _proto.commitModel = function commitModel(comp, model, mat) {
          // if the last comp is spriteComp, previous comps should be batched.
          if (this._currMaterial !== this._emptyMaterial) {
            this.autoMergeBatches(this._currComponent);
            this.resetRenderStates();
          }
          var depthStencil;
          var dssHash = 0;
          if (mat) {
            // Notice: A little hack, if it is for mask, not need update here, while control by stencilManger
            if (comp.stencilStage === Stage.ENTER_LEVEL || comp.stencilStage === Stage.ENTER_LEVEL_INVERTED) {
              this._insertMaskBatch(comp);
            } else {
              comp.stencilStage = StencilManager.sharedManager.stage;
            }
            depthStencil = StencilManager.sharedManager.getStencilStage(comp.stencilStage, mat);
            dssHash = StencilManager.sharedManager.getStencilHash(comp.stencilStage);
          }
          var stamp = cclegacy.director.getTotalFrames();
          if (model) {
            model.updateTransform(stamp);
            model.updateUBOs(stamp);
          }
          for (var i = 0; i < model.subModels.length; i++) {
            var curDrawBatch = this._drawBatchPool.alloc();
            var subModel = model.subModels[i];
            curDrawBatch.visFlags = comp.node.layer;
            curDrawBatch.model = model;
            curDrawBatch.texture = null;
            curDrawBatch.sampler = null;
            curDrawBatch.useLocalData = null;
            if (!depthStencil) {
              depthStencil = null;
            }
            curDrawBatch.fillPasses(mat, depthStencil, dssHash, subModel.patches);
            curDrawBatch.inputAssembler = subModel.inputAssembler;
            curDrawBatch.model.visFlags = curDrawBatch.visFlags;
            curDrawBatch.descriptorSet = subModel.descriptorSet;
            this._batches.push(curDrawBatch);
          }
        };
        _proto.setupStaticBatch = function setupStaticBatch(staticComp, bufferAccessor) {
          this.finishMergeBatches();
          this._staticVBBuffer = bufferAccessor;
          this.currStaticRoot = staticComp;
        };
        _proto.endStaticBatch = function endStaticBatch() {
          this.finishMergeBatches();
          this.currStaticRoot = null;
          // Clear linear buffer to switch to the correct internal accessor
          this._staticVBBuffer = null;
          this.switchBufferAccessor();
        }

        /**
         * @en
         * Submit separate render data.
         * This data does not participate in the batch.
         *
         * @zh
         * 提交独立渲染数据.
         * @param comp @en The UIStaticBatch component.
         *             @zh 静态组件
         */;
        _proto.commitStaticBatch = function commitStaticBatch(comp) {
          this._batches.concat(comp.drawBatchList);
          this.finishMergeBatches();
        }

        /**
         * @en
         * End a section of render data and submit according to the batch condition.
         *
         * @zh
         * 根据合批条件，结束一段渲染数据并提交。
         */;
        _proto.autoMergeBatches = function autoMergeBatches(renderComp) {
          if (this._currIsMiddleware) {
            this.mergeBatchesForMiddleware(renderComp);
            return;
          }
          var mat = this._currMaterial;
          if (!mat) {
            return;
          }
          var ia;
          var rd = this._currRenderData;
          var accessor = this._staticVBBuffer;
          // Previous batch using mesh buffer
          if (rd && rd._isMeshBuffer) {
            ia = rd.requestIA(this.device);
            if (this._meshDataArray.indexOf(rd) === -1) {
              this._meshDataArray.push(rd);
            }
          } else if (accessor) {
            // Previous batch using static vb buffer
            var bid = this._currBID;
            var buf = accessor.getMeshBuffer(bid);
            if (!buf) {
              return;
            }
            var indexCount = buf.indexOffset - this._indexStart;
            if (indexCount <= 0) return;
            assertIsTrue(this._indexStart < buf.indexOffset);
            buf.setDirty();
            // Request ia
            ia = buf.requireFreeIA(this.device);
            ia.firstIndex = this._indexStart;
            ia.indexCount = indexCount;
            // Update index tracker and bid
            this._indexStart = buf.indexOffset;
          }
          this._currBID = -1;

          // Request ia failed
          if (!ia || !this._currTexture) {
            return;
          }
          var depthStencil;
          var dssHash = 0;
          if (renderComp) {
            if (renderComp.customMaterial !== null) {
              depthStencil = StencilManager.sharedManager.getStencilStage(renderComp.stencilStage, mat);
            } else {
              depthStencil = StencilManager.sharedManager.getStencilStage(renderComp.stencilStage);
            }
            dssHash = StencilManager.sharedManager.getStencilHash(renderComp.stencilStage);
          }
          var curDrawBatch = this._currStaticRoot ? this._currStaticRoot._requireDrawBatch() : this._drawBatchPool.alloc();
          curDrawBatch.visFlags = this._currLayer;
          curDrawBatch.texture = this._currTexture;
          curDrawBatch.sampler = this._currSampler;
          curDrawBatch.inputAssembler = ia;
          curDrawBatch.useLocalData = this._currTransform;
          curDrawBatch.textureHash = this._currTextureHash;
          curDrawBatch.samplerHash = this._currSamplerHash;
          curDrawBatch.fillPasses(mat, depthStencil, dssHash, null);
          this._batches.push(curDrawBatch);
        };
        _proto.mergeBatchesForMiddleware = function mergeBatchesForMiddleware(renderComp) {
          var depthStencil;
          var dssHash = 0;
          renderComp.stencilStage = StencilManager.sharedManager.stage;
          if (renderComp.customMaterial !== null) {
            depthStencil = StencilManager.sharedManager.getStencilStage(renderComp.stencilStage, this._currMaterial);
          } else {
            depthStencil = StencilManager.sharedManager.getStencilStage(renderComp.stencilStage);
          }
          dssHash = StencilManager.sharedManager.getStencilHash(renderComp.stencilStage);
          var curDrawBatch = this._currStaticRoot ? this._currStaticRoot._requireDrawBatch() : this._drawBatchPool.alloc();
          curDrawBatch.visFlags = renderComp.node.layer;
          var ia = this._middlewareBuffer.requireFreeIA(this.device);
          ia.firstIndex = this._middlewareIndexStart;
          ia.indexCount = this._middlewareIndexCount;
          curDrawBatch.inputAssembler = ia;
          curDrawBatch.useLocalData = this._currTransform;
          curDrawBatch.texture = this._currTexture;
          curDrawBatch.sampler = this._currSampler;
          curDrawBatch.textureHash = this._currTextureHash;
          curDrawBatch.samplerHash = this._currSamplerHash;
          curDrawBatch.fillPasses(this._currMaterial || null, depthStencil, dssHash, null);
          this._batches.push(curDrawBatch);
          this._currIsMiddleware = false;
          this._middlewareBuffer = null;
        }

        /**
         * @en
         * Force changes to current batch data and merge
         *
         * @zh
         * 强行修改当前批次数据并合并。
         *
         * @param material @en The material of the current batch.
         *                 @zh 当前批次的材质。
         * @param sprite @en Sprite frame of current batch.
         *               @zh 当前批次的精灵帧。
         */;
        _proto.forceMergeBatches = function forceMergeBatches(material, frame, renderComp) {
          this._currMaterial = material;
          if (frame) {
            this._currTexture = frame.getGFXTexture();
            this._currSampler = frame.getGFXSampler();
            this._currTextureHash = frame.getHash();
            this._currSamplerHash = this._currSampler.hash;
          } else {
            this._currTexture = this._currSampler = null;
            this._currTextureHash = this._currSamplerHash = 0;
          }
          this._currLayer = renderComp.node.layer;
          this.autoMergeBatches(renderComp);
        };
        _proto.resetRenderStates = function resetRenderStates() {
          this._currMaterial = this._emptyMaterial;
          this._currRenderData = null;
          this._currTexture = null;
          this._currComponent = null;
          this._currTransform = null;
          this._currTextureHash = 0;
          this._currSamplerHash = 0;
          this._currLayer = 0;
        }

        /**
         * @en
         * Forced to merge the data of the previous batch to start a new batch.
         *
         * @zh
         * 强制合并上一个批次的数据，开启新一轮合批。
         */;
        _proto.finishMergeBatches = function finishMergeBatches() {
          this.autoMergeBatches();
          this.resetRenderStates();
        }

        /**
         * @en
         * Force to change the current material.
         *
         * @zh
         * 强制刷新材质。
         */;
        _proto.flushMaterial = function flushMaterial(mat) {
          this._currMaterial = mat;
        };
        _proto.walk = function walk(node, level) {
          if (level === void 0) {
            level = 0;
          }
          if (!node.activeInHierarchy) {
            return;
          }
          var children = node.children;
          var uiProps = node._uiProps;
          var render = uiProps.uiComp;

          // Save opacity
          var parentOpacity = this._pOpacity;
          var opacity = parentOpacity;
          // TODO Always cascade ui property's local opacity before remove it
          var selfOpacity = render && render.color ? render.color.a / 255 : 1;
          this._pOpacity = opacity *= selfOpacity * uiProps.localOpacity;
          // TODO Set opacity to ui property's opacity before remove it
          uiProps.setOpacity(opacity);
          if (!approx(opacity, 0, EPSILON)) {
            if (uiProps.colorDirty) {
              // Cascade color dirty state
              this._opacityDirty++;
            }

            // Render assembler update logic
            if (render && render.enabledInHierarchy) {
              render.fillBuffers(this); // for rendering
            }

            // Update cascaded opacity to vertex buffer
            if (this._opacityDirty && render && !render.useVertexOpacity && render.renderData && render.renderData.vertexCount > 0) {
              // HARD COUPLING
              updateOpacity(render.renderData, opacity);
              var buffer = render.renderData.getMeshBuffer();
              if (buffer) {
                buffer.setDirty();
              }
            }
            if (children.length > 0 && !node._static) {
              for (var i = 0; i < children.length; ++i) {
                var child = children[i];
                this.walk(child, level);
              }
            }
            if (uiProps.colorDirty) {
              // Reduce cascaded color dirty state
              this._opacityDirty--;
              // Reset color dirty
              uiProps.colorDirty = false;
            }
          }
          // Restore opacity
          this._pOpacity = parentOpacity;

          // Post render assembler update logic
          // ATTENTION: Will also reset colorDirty inside postUpdateAssembler
          if (render && render.enabledInHierarchy) {
            render.postUpdateAssembler(this);
            if ((render.stencilStage === Stage.ENTER_LEVEL || render.stencilStage === Stage.ENTER_LEVEL_INVERTED) && StencilManager.sharedManager.getMaskStackSize() > 0) {
              this.autoMergeBatches(this._currComponent);
              this.resetRenderStates();
              StencilManager.sharedManager.exitMask();
            }
          }
          level += 1;
        };
        _proto._screenSort = function _screenSort(a, b) {
          return a.node.getSiblingIndex() - b.node.getSiblingIndex();
        }

        // TODO: Not a good way to do the job
        ;
        _proto._releaseDescriptorSetCache = function _releaseDescriptorSetCache(textureHash, sampler) {
          if (sampler === void 0) {
            sampler = null;
          }
          if (JSB) {
            this._nativeObj.releaseDescriptorSetCache(textureHash, sampler);
          } else {
            this._descriptorSetCache.releaseDescriptorSetCache(textureHash);
          }
        }

        // Mask use
        ;
        _proto._createClearModel = function _createClearModel() {
          if (!this._maskClearModel) {
            this._maskClearMtl = builtinResMgr.get('default-clear-stencil');
            this._maskClearModel = cclegacy.director.root.createModel(scene.Model);
            var stride = getAttributeStride(vfmt);
            var gfxDevice = deviceManager.gfxDevice;
            var vertexBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, 4 * stride, stride));
            var vb = new Float32Array([-1, -1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0]);
            vertexBuffer.update(vb);
            var indexBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, 6 * Uint16Array.BYTES_PER_ELEMENT, Uint16Array.BYTES_PER_ELEMENT));
            var ib = new Uint16Array([0, 1, 2, 2, 1, 3]);
            indexBuffer.update(ib);
            this._maskModelMesh = new RenderingSubMesh([vertexBuffer], vfmt, PrimitiveMode.TRIANGLE_LIST, indexBuffer);
            this._maskModelMesh.subMeshIdx = 0;
            this._maskClearModel.initSubModel(0, this._maskModelMesh, this._maskClearMtl);
          }
        };
        _proto._insertMaskBatch = function _insertMaskBatch(comp) {
          this.autoMergeBatches(this._currComponent);
          this.resetRenderStates();
          this._createClearModel();
          this._maskClearModel.node = this._maskClearModel.transform = comp.node;
          var _stencilManager = StencilManager.sharedManager;
          _stencilManager.pushMask(1); //not need object，only use length
          var stage = _stencilManager.clear(comp); //invert

          var depthStencil;
          var dssHash = 0;
          var mat = this._maskClearMtl;
          if (mat) {
            depthStencil = _stencilManager.getStencilStage(stage, mat);
            dssHash = _stencilManager.getStencilHash(stage);
          }
          var model = this._maskClearModel;
          var stamp = cclegacy.director.getTotalFrames();
          if (model) {
            model.updateTransform(stamp);
            model.updateUBOs(stamp);
          }
          for (var i = 0; i < model.subModels.length; i++) {
            var curDrawBatch = this._drawBatchPool.alloc();
            var subModel = model.subModels[i];
            curDrawBatch.visFlags = comp.node.layer;
            curDrawBatch.model = model;
            curDrawBatch.texture = null;
            curDrawBatch.sampler = null;
            curDrawBatch.useLocalData = null;
            if (!depthStencil) {
              depthStencil = null;
            }
            curDrawBatch.fillPasses(mat, depthStencil, dssHash, subModel.patches);
            curDrawBatch.inputAssembler = subModel.inputAssembler;
            curDrawBatch.model.visFlags = curDrawBatch.visFlags;
            curDrawBatch.descriptorSet = subModel.descriptorSet;
            this._batches.push(curDrawBatch);
          }
          _stencilManager.enableMask();
        }

        //sync mesh buffer to naive
        ;
        _proto.syncMeshBuffersToNative = function syncMeshBuffersToNative(accId, buffers) {
          if (JSB) {
            var nativeBuffers = buffers.map(function (buf) {
              return buf.nativeObj;
            });
            this._nativeObj.syncMeshBuffersToNative(accId, nativeBuffers);
          }
        };
        _createClass(Batcher2D, [{
          key: "nativeObj",
          get: function get() {
            return this._nativeObj;
          }
        }, {
          key: "currBufferAccessor",
          get: function get() {
            if (this._staticVBBuffer) return this._staticVBBuffer;
            // create if not set
            this._staticVBBuffer = this.switchBufferAccessor();
            return this._staticVBBuffer;
          }
        }, {
          key: "batches",
          get: function get() {
            return this._batches;
          }
        }, {
          key: "currStaticRoot",
          set: function set(value) {
            this._currStaticRoot = value;
          }
        }, {
          key: "currIsStatic",
          set: function set(value) {
            this._currIsStatic = value;
          }
        }]);
        return Batcher2D;
      }());
      LocalDescriptorSet = /*#__PURE__*/function () {
        function LocalDescriptorSet() {
          this._descriptorSet = null;
          this._transform = null;
          this._textureHash = 0;
          this._samplerHash = 0;
          this._localBuffer = null;
          this._transformUpdate = true;
          var device = deviceManager.gfxDevice;
          this._localData = new Float32Array(UBOLocal.COUNT);
          this._localBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOLocal.SIZE, UBOLocal.SIZE));
        }
        var _proto2 = LocalDescriptorSet.prototype;
        _proto2.initialize = function initialize(batch) {
          var device = deviceManager.gfxDevice;
          this._transform = batch.useLocalData;
          this._textureHash = batch.textureHash;
          this._samplerHash = batch.samplerHash;
          _dsInfo.layout = batch.passes[0].localSetLayout;
          this._descriptorSet = device.createDescriptorSet(_dsInfo);
          this._descriptorSet.bindBuffer(UBOLocal.BINDING, this._localBuffer);
          var binding = ModelLocalBindings.SAMPLER_SPRITE;
          this._descriptorSet.bindTexture(binding, batch.texture);
          this._descriptorSet.bindSampler(binding, batch.sampler);
          this._descriptorSet.update();
          this._transformUpdate = true;
        };
        _proto2.updateTransform = function updateTransform(transform) {
          if (transform === this._transform) return;
          this._transform = transform;
          this._transformUpdate = true;
          this.uploadLocalData();
        };
        _proto2.equals = function equals(transform, textureHash, samplerHash) {
          return this._transform === transform && this._textureHash === textureHash && this._samplerHash === samplerHash;
        };
        _proto2.reset = function reset() {
          this._transform = null;
          this._textureHash = 0;
          this._samplerHash = 0;
        };
        _proto2.destroy = function destroy() {
          if (this._localBuffer) {
            this._localBuffer.destroy();
            this._localBuffer = null;
          }
          if (this._descriptorSet) {
            this._descriptorSet.destroy();
            this._descriptorSet = null;
          }
          this._localData = null;
        };
        _proto2.isValid = function isValid() {
          return this._transform && this._transform.isValid;
        };
        _proto2.uploadLocalData = function uploadLocalData() {
          var node = this._transform;
          if (node.hasChangedFlags || node.isTransformDirty()) {
            node.updateWorldTransform();
            this._transformUpdate = true;
          }
          if (this._transformUpdate) {
            var worldMatrix = node.worldMatrix;
            Mat4.toArray(this._localData, worldMatrix, UBOLocal.MAT_WORLD_OFFSET);
            Mat4.invert(m4_1, worldMatrix);
            Mat4.transpose(m4_1, m4_1);
            if (!JSB) {
              // fix precision lost of webGL on android device
              // scale worldIT mat to around 1.0 by product its sqrt of determinant.
              var det = Mat4.determinant(m4_1);
              var factor = 1.0 / Math.sqrt(det);
              Mat4.multiplyScalar(m4_1, m4_1, factor);
            }
            Mat4.toArray(this._localData, m4_1, UBOLocal.MAT_WORLD_IT_OFFSET);
            this._localBuffer.update(this._localData);
            this._transformUpdate = false;
          }
        };
        _createClass(LocalDescriptorSet, [{
          key: "descriptorSet",
          get: function get() {
            return this._descriptorSet;
          }
        }]);
        return LocalDescriptorSet;
      }();
      DescriptorSetCache = /*#__PURE__*/function () {
        function DescriptorSetCache() {
          this._descriptorSetCache = new Map();
          this._dsCacheHashByTexture = new Map();
          this._localDescriptorSetCache = [];
          this._localCachePool = void 0;
          this._localCachePool = new Pool(function () {
            return new LocalDescriptorSet();
          }, 16, function (obj) {
            return obj.destroy();
          });
        }
        var _proto3 = DescriptorSetCache.prototype;
        _proto3.getDescriptorSet = function getDescriptorSet(batch) {
          var root = cclegacy.director.root;
          var hash;
          if (batch.useLocalData) {
            var caches = this._localDescriptorSetCache;
            for (var i = 0, len = caches.length; i < len; i++) {
              var cache = caches[i];
              if (cache.equals(batch.useLocalData, batch.textureHash, batch.samplerHash)) {
                return cache.descriptorSet;
              }
            }
            var localDs = this._localCachePool.alloc();
            localDs.initialize(batch);
            this._localDescriptorSetCache.push(localDs);
            return localDs.descriptorSet;
          } else {
            hash = batch.textureHash ^ batch.samplerHash;
            if (this._descriptorSetCache.has(hash)) {
              return this._descriptorSetCache.get(hash);
            } else {
              _dsInfo.layout = batch.passes[0].localSetLayout;
              var descriptorSet = deviceManager.gfxDevice.createDescriptorSet(_dsInfo);
              var binding = ModelLocalBindings.SAMPLER_SPRITE;
              descriptorSet.bindTexture(binding, batch.texture);
              descriptorSet.bindSampler(binding, batch.sampler);
              descriptorSet.update();
              this._descriptorSetCache.set(hash, descriptorSet);
              this._dsCacheHashByTexture.set(batch.textureHash, hash);
              return descriptorSet;
            }
          }
        };
        _proto3.update = function update() {
          var caches = this._localDescriptorSetCache;
          var length = caches.length;
          if (length === 0) {
            return;
          }
          var uselessArray = [];
          for (var i = 0; i < length; i++) {
            var value = caches[i];
            if (value.isValid()) {
              value.uploadLocalData();
            } else {
              value.reset();
              var pos = caches.indexOf(value);
              uselessArray.push(pos);
            }
          }
          for (var _i2 = uselessArray.length - 1; _i2 >= 0; _i2--) {
            var index = uselessArray[_i2];
            var localDs = caches[index];
            caches.splice(index, 1);
            this._localCachePool.free(localDs);
          }
        };
        _proto3.reset = function reset() {
          var caches = this._localDescriptorSetCache;
          var length = caches.length;
          for (var i = 0; i < length; i++) {
            var value = caches[i];
            this._localCachePool.free(value);
          }
          this._localDescriptorSetCache.length = 0;
        };
        _proto3.releaseDescriptorSetCache = function releaseDescriptorSetCache(textureHash) {
          var key = this._dsCacheHashByTexture.get(textureHash);
          if (key && this._descriptorSetCache.has(key)) {
            this._descriptorSetCache.get(key).destroy();
            this._descriptorSetCache["delete"](key);
            this._dsCacheHashByTexture["delete"](textureHash);
          }
        };
        _proto3.destroy = function destroy() {
          for (var _iterator5 = _createForOfIteratorHelperLoose(this._descriptorSetCache.values()), _step5; !(_step5 = _iterator5()).done;) {
            var value = _step5.value;
            value.destroy();
          }
          this._descriptorSetCache.clear();
          this._dsCacheHashByTexture.clear();
          this._localDescriptorSetCache.length = 0;
          this._localCachePool.destroy();
        };
        return DescriptorSetCache;
      }();
      cclegacy.internal.Batcher2D = Batcher2D;
    }
  };
});