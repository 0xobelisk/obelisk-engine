System.register("q-bundled:///fs/cocos/terrain/terrain.js", ["../core/data/decorators/index.js", "../../../virtual/internal%253Aconstants.js", "../asset/asset-manager/index.js", "../misc/model-renderer.js", "../asset/assets/index.js", "../asset/assets/asset-enum.js", "../asset/assets/material.js", "../asset/assets/rendering-sub-mesh.js", "../scene-graph/component.js", "../core/data/object.js", "../game/director.js", "../gfx/index.js", "../core/math/index.js", "../render-scene/index.js", "../core/global-exports.js", "./terrain-lod.js", "./terrain-asset.js", "../core/index.js", "../rendering/index.js", "../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, disallowMultiple, executeInEditMode, help, visible, type, serializable, editable, disallowAnimation, EDITOR, builtinResMgr, ModelRenderer, EffectAsset, Texture2D, Filter, PixelFormat, WrapMode, Material, RenderingSubMesh, Component, CCObject, isValid, director, AttributeName, BufferUsageBit, Format, MemoryUsageBit, PrimitiveMode, Attribute, BufferInfo, deviceManager, clamp, Rect, Size, Vec2, Vec3, Vec4, scene, legacyCC, TerrainLod, TerrainLodKey, TERRAIN_LOD_LEVELS, TERRAIN_LOD_MAX_DISTANCE, TerrainAsset, TerrainLayerInfo, TERRAIN_HEIGHT_BASE, TERRAIN_HEIGHT_FACTORY, TERRAIN_BLOCK_TILE_COMPLEXITY, TERRAIN_BLOCK_VERTEX_SIZE, TERRAIN_BLOCK_VERTEX_COMPLEXITY, TERRAIN_MAX_LAYER_COUNT, TERRAIN_HEIGHT_FMIN, TERRAIN_HEIGHT_FMAX, TERRAIN_MAX_BLEND_LAYERS, TERRAIN_DATA_VERSION5, CCFloat, PipelineEventType, MobilityMode, Node, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _dec2, _class4, _class5, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _dec3, _class8, _class9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class12, _class13, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _initializer22, TERRAIN_EFFECT_UUID, TerrainInfo, TerrainLayer, TerrainRenderable, TerrainBlockLightmapInfo, TerrainBlock, Terrain;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      help = _coreDataDecoratorsIndexJs.help;
      visible = _coreDataDecoratorsIndexJs.visible;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
      disallowAnimation = _coreDataDecoratorsIndexJs.disallowAnimation;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_assetAssetManagerIndexJs) {
      builtinResMgr = _assetAssetManagerIndexJs.builtinResMgr;
    }, function (_miscModelRendererJs) {
      ModelRenderer = _miscModelRendererJs.ModelRenderer;
    }, function (_assetAssetsIndexJs) {
      EffectAsset = _assetAssetsIndexJs.EffectAsset;
      Texture2D = _assetAssetsIndexJs.Texture2D;
    }, function (_assetAssetsAssetEnumJs) {
      Filter = _assetAssetsAssetEnumJs.Filter;
      PixelFormat = _assetAssetsAssetEnumJs.PixelFormat;
      WrapMode = _assetAssetsAssetEnumJs.WrapMode;
    }, function (_assetAssetsMaterialJs) {
      Material = _assetAssetsMaterialJs.Material;
    }, function (_assetAssetsRenderingSubMeshJs) {
      RenderingSubMesh = _assetAssetsRenderingSubMeshJs.RenderingSubMesh;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_coreDataObjectJs) {
      CCObject = _coreDataObjectJs.CCObject;
      isValid = _coreDataObjectJs.isValid;
    }, function (_gameDirectorJs) {
      director = _gameDirectorJs.director;
    }, function (_gfxIndexJs) {
      AttributeName = _gfxIndexJs.AttributeName;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      Format = _gfxIndexJs.Format;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      PrimitiveMode = _gfxIndexJs.PrimitiveMode;
      Attribute = _gfxIndexJs.Attribute;
      BufferInfo = _gfxIndexJs.BufferInfo;
      deviceManager = _gfxIndexJs.deviceManager;
    }, function (_coreMathIndexJs) {
      clamp = _coreMathIndexJs.clamp;
      Rect = _coreMathIndexJs.Rect;
      Size = _coreMathIndexJs.Size;
      Vec2 = _coreMathIndexJs.Vec2;
      Vec3 = _coreMathIndexJs.Vec3;
      Vec4 = _coreMathIndexJs.Vec4;
    }, function (_renderSceneIndexJs) {
      scene = _renderSceneIndexJs.scene;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_terrainLodJs) {
      TerrainLod = _terrainLodJs.TerrainLod;
      TerrainLodKey = _terrainLodJs.TerrainLodKey;
      TERRAIN_LOD_LEVELS = _terrainLodJs.TERRAIN_LOD_LEVELS;
      TERRAIN_LOD_MAX_DISTANCE = _terrainLodJs.TERRAIN_LOD_MAX_DISTANCE;
    }, function (_terrainAssetJs) {
      TerrainAsset = _terrainAssetJs.TerrainAsset;
      TerrainLayerInfo = _terrainAssetJs.TerrainLayerInfo;
      TERRAIN_HEIGHT_BASE = _terrainAssetJs.TERRAIN_HEIGHT_BASE;
      TERRAIN_HEIGHT_FACTORY = _terrainAssetJs.TERRAIN_HEIGHT_FACTORY;
      TERRAIN_BLOCK_TILE_COMPLEXITY = _terrainAssetJs.TERRAIN_BLOCK_TILE_COMPLEXITY;
      TERRAIN_BLOCK_VERTEX_SIZE = _terrainAssetJs.TERRAIN_BLOCK_VERTEX_SIZE;
      TERRAIN_BLOCK_VERTEX_COMPLEXITY = _terrainAssetJs.TERRAIN_BLOCK_VERTEX_COMPLEXITY;
      TERRAIN_MAX_LAYER_COUNT = _terrainAssetJs.TERRAIN_MAX_LAYER_COUNT;
      TERRAIN_HEIGHT_FMIN = _terrainAssetJs.TERRAIN_HEIGHT_FMIN;
      TERRAIN_HEIGHT_FMAX = _terrainAssetJs.TERRAIN_HEIGHT_FMAX;
      TERRAIN_MAX_BLEND_LAYERS = _terrainAssetJs.TERRAIN_MAX_BLEND_LAYERS;
      TERRAIN_DATA_VERSION5 = _terrainAssetJs.TERRAIN_DATA_VERSION5;
    }, function (_coreIndexJs) {
      CCFloat = _coreIndexJs.CCFloat;
    }, function (_renderingIndexJs) {
      PipelineEventType = _renderingIndexJs.PipelineEventType;
    }, function (_sceneGraphIndexJs) {
      MobilityMode = _sceneGraphIndexJs.MobilityMode;
      Node = _sceneGraphIndexJs.Node;
    }],
    execute: function () {
      // the same as dependentAssets: legacy/terrain.effect
      TERRAIN_EFFECT_UUID = '1d08ef62-a503-4ce2-8b9a-46c90873f7d3';
      /**
       * @en Terrain info
       * @zh 地形信息
       */
      _export("TerrainInfo", TerrainInfo = (_dec = ccclass('cc.TerrainInfo'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function TerrainInfo() {
          /**
           * @en tile size
           * @zh 栅格大小
           */
          this.tileSize = _initializer && _initializer();
          /**
           * @en block count
           * @zh 地形块的数量
           */
          this.blockCount = _initializer2 && _initializer2();
          /**
           * @en weight map size
           * @zh 权重图大小
           */
          this.weightMapSize = _initializer3 && _initializer3();
          /**
           * @en light map size
           * @zh 光照图大小
           */
          this.lightMapSize = _initializer4 && _initializer4();
        }
        _createClass(TerrainInfo, [{
          key: "size",
          get:
          /**
           * @en terrain size
           * @zh 地形大小
           */
          function get() {
            var sz = new Size(0, 0);
            sz.width = this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
            sz.height = this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
            return sz;
          }

          /**
           * @en tile count
           * @zh 栅格数量
           */
        }, {
          key: "tileCount",
          get: function get() {
            var _tileCount = [0, 0];
            _tileCount[0] = this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY;
            _tileCount[1] = this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY;
            return _tileCount;
          }

          /**
           * @en vertex count
           * @zh 顶点数量
           */
        }, {
          key: "vertexCount",
          get: function get() {
            var _vertexCount = this.tileCount;
            _vertexCount[0] += 1;
            _vertexCount[1] += 1;
            return _vertexCount;
          }
        }]);
        return TerrainInfo;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "tileSize", [serializable, editable], function () {
        return 1;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "blockCount", [serializable, editable], function () {
        return [1, 1];
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "weightMapSize", [serializable, editable], function () {
        return 128;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "lightMapSize", [serializable, editable], function () {
        return 128;
      })), _class2)) || _class));
      /**
       * @en Terrain layer
       * @zh 地形纹理层
       */
      _export("TerrainLayer", TerrainLayer = (_dec2 = ccclass('cc.TerrainLayer'), _dec2(_class4 = (_class5 = function TerrainLayer() {
        /**
         * @en detail texture
         * @zh 细节纹理
         */
        this.detailMap = _initializer5 && _initializer5();
        /**
         * @en normal texture
         * @zh 法线纹理
         */
        this.normalMap = _initializer6 && _initializer6();
        /**
         * @en tile size
         * @zh 平铺大小
         */
        this.tileSize = _initializer7 && _initializer7();
        /**
         * @en metallic
         * @zh 金属性
         */
        this.metallic = _initializer8 && _initializer8();
        /* [0, 1] */
        /**
         * @en roughness
         * @zh 粗糙度
         */
        this.roughness = _initializer9 && _initializer9();
      } /* [0, 1] */, (_initializer5 = _applyDecoratedInitializer(_class5.prototype, "detailMap", [serializable, editable], function () {
        return null;
      }), _initializer6 = _applyDecoratedInitializer(_class5.prototype, "normalMap", [serializable, editable], function () {
        return null;
      }), _initializer7 = _applyDecoratedInitializer(_class5.prototype, "tileSize", [serializable, editable], function () {
        return 1;
      }), _initializer8 = _applyDecoratedInitializer(_class5.prototype, "metallic", [serializable, editable], function () {
        return 0;
      }), _initializer9 = _applyDecoratedInitializer(_class5.prototype, "roughness", [serializable, editable], function () {
        return 1;
      })), _class5)) || _class4));
      /**
       * @en Terrain renderable
       * @zh 地形渲染组件
       */
      TerrainRenderable = /*#__PURE__*/function (_ModelRenderer) {
        _inheritsLoose(TerrainRenderable, _ModelRenderer);
        function TerrainRenderable() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ModelRenderer.call.apply(_ModelRenderer, [this].concat(args)) || this;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._model = null;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._meshData = null;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._brushPass = null;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._brushMaterial = null;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._currentMaterial = null;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._currentMaterialLayers = 0;
          /**
           * @engineInternal
           */
          _this._lightmap = null;
          return _this;
        }
        var _proto = TerrainRenderable.prototype;
        _proto.destroy = function destroy() {
          // this._invalidMaterial();
          if (this._model != null) {
            legacyCC.director.root.destroyModel(this._model);
            this._model = null;
          }
          return _ModelRenderer.prototype.destroy.call(this);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._destroyModel = function _destroyModel() {
          // this._invalidMaterial();
          if (this._model != null) {
            legacyCC.director.root.destroyModel(this._model);
            this._model = null;
          }
          if (this._meshData != null) {
            this._meshData.destroy();
            this._meshData = null;
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._invalidMaterial = function _invalidMaterial() {
          if (this._currentMaterial == null) {
            return;
          }
          this._clearMaterials();
          this._brushPass = null;
          this._currentMaterial = null;
          if (this._model != null) {
            this._model.enabled = false;
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._updateMaterial = function _updateMaterial(block, init) {
          if (this._meshData == null || this._model == null) {
            return false;
          }
          var nLayers = block.getMaxLayer();
          if (this._currentMaterial == null || nLayers !== this._currentMaterialLayers) {
            this._currentMaterial = new Material();
            this._currentMaterial.initialize({
              effectAsset: block.getTerrain().getEffectAsset(),
              defines: block._getMaterialDefines(nLayers)
            });
            if (this._brushMaterial !== null) {
              // Create brush material instance, avoid being destroyed by material gc
              var brushMaterialInstance = new Material();
              brushMaterialInstance.copy(this._brushMaterial);
              this._brushPass = null;
              if (brushMaterialInstance.passes !== null && brushMaterialInstance.passes.length > 0) {
                this._brushPass = brushMaterialInstance.passes[0];
                var passes = this._currentMaterial.passes;
                passes.push(this._brushPass);
                brushMaterialInstance.passes.pop();
              }
            }
            if (init) {
              this._model.initSubModel(0, this._meshData, this._currentMaterial);
            }
            this.setSharedMaterial(this._currentMaterial, 0);
            this._currentMaterialLayers = nLayers;
            this._model.enabled = true;
            this._model.receiveShadow = block.getTerrain().receiveShadow;
            return true;
          }
          return false;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._updateLightingmap = function _updateLightingmap(texture, uvParam) {
          if (this._model == null) {
            return;
          }
          this._lightmap = texture;
          this._updateReceiveDirLight();
          this._model.updateLightingmap(texture, uvParam);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._onMaterialModified = function _onMaterialModified(idx, mtl) {
          if (this._model == null) {
            return;
          }
          this._onRebuildPSO(idx, mtl || this._getBuiltinMaterial());
        }

        /**
         * @engineInternal
         */;
        _proto._onRebuildPSO = function _onRebuildPSO(idx, material) {
          if (this._model) {
            this._model.setSubModelMaterial(idx, material);
          }
        };
        _proto._clearMaterials = function _clearMaterials() {
          if (this._model == null) {
            return;
          }
          this._onMaterialModified(0, null);
        };
        _proto._onUpdateReceiveDirLight = function _onUpdateReceiveDirLight(visibility, forceClose) {
          if (forceClose === void 0) {
            forceClose = false;
          }
          if (!this._model) {
            return;
          }
          if (forceClose) {
            this._model.receiveDirLight = false;
            return;
          }
          if (this.node && (visibility & this.node.layer) === this.node.layer || visibility & this._model.visFlags) {
            this._model.receiveDirLight = true;
          } else {
            this._model.receiveDirLight = false;
          }
        };
        _proto._updateReceiveDirLight = function _updateReceiveDirLight() {
          var scene = this.node.scene;
          if (!scene || !scene.renderScene) {
            return;
          }
          var mainLight = scene.renderScene.mainLight;
          if (!mainLight) {
            return;
          }
          var visibility = mainLight.visibility;
          if (!mainLight.node) {
            return;
          }
          if (mainLight.node.mobility === MobilityMode.Static && this._lightmap) {
            this._onUpdateReceiveDirLight(visibility, true);
          } else {
            this._onUpdateReceiveDirLight(visibility);
          }
        };
        _proto._getBuiltinMaterial = function _getBuiltinMaterial() {
          return builtinResMgr.get('missing-material');
        };
        return TerrainRenderable;
      }(ModelRenderer);
      /**
       * @en Terrain block light map info
       * @zh 地形块光照图信息
       */
      _export("TerrainBlockLightmapInfo", TerrainBlockLightmapInfo = (_dec3 = ccclass('cc.TerrainBlockLightmapInfo'), _dec3(_class8 = (_class9 = function TerrainBlockLightmapInfo() {
        this.texture = _initializer10 && _initializer10();
        this.UOff = _initializer11 && _initializer11();
        this.VOff = _initializer12 && _initializer12();
        this.UScale = _initializer13 && _initializer13();
        this.VScale = _initializer14 && _initializer14();
      }, (_initializer10 = _applyDecoratedInitializer(_class9.prototype, "texture", [serializable, editable], function () {
        return null;
      }), _initializer11 = _applyDecoratedInitializer(_class9.prototype, "UOff", [serializable, editable], function () {
        return 0;
      }), _initializer12 = _applyDecoratedInitializer(_class9.prototype, "VOff", [serializable, editable], function () {
        return 0;
      }), _initializer13 = _applyDecoratedInitializer(_class9.prototype, "UScale", [serializable, editable], function () {
        return 0;
      }), _initializer14 = _applyDecoratedInitializer(_class9.prototype, "VScale", [serializable, editable], function () {
        return 0;
      })), _class9)) || _class8));
      /**
       * @en Terrain block
       * @zh 地形块
       */
      _export("TerrainBlock", TerrainBlock = /*#__PURE__*/function () {
        function TerrainBlock(t, i, j) {
          this._terrain = void 0;
          this._node = void 0;
          this._renderable = void 0;
          this._index = [1, 1];
          this._weightMap = null;
          this._lightmapInfo = null;
          this._lodLevel = 0;
          this._lodKey = new TerrainLodKey();
          this._errorMetrics = [0, 0, 0, 0];
          this._LevelDistances = [TERRAIN_LOD_MAX_DISTANCE, TERRAIN_LOD_MAX_DISTANCE, TERRAIN_LOD_MAX_DISTANCE, TERRAIN_LOD_MAX_DISTANCE];
          this._bbMin = new Vec3();
          this._bbMax = new Vec3();
          this._terrain = t;
          this._index[0] = i;
          this._index[1] = j;
          this._lightmapInfo = t._getLightmapInfo(i, j);
          this._node = new Node('TerrainBlock');
          this._node.setParent(this._terrain.node);
          this._node.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
          this._node.layer = this._terrain.node.layer;
          this._renderable = this._node.addComponent(TerrainRenderable);
        }
        var _proto2 = TerrainBlock.prototype;
        _proto2.build = function build() {
          var gfxDevice = director.root.device;

          // vertex buffer
          var vertexData = new Float32Array(TERRAIN_BLOCK_VERTEX_SIZE * TERRAIN_BLOCK_VERTEX_COMPLEXITY * TERRAIN_BLOCK_VERTEX_COMPLEXITY);
          this._buildVertexData(vertexData);
          var vertexBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, TERRAIN_BLOCK_VERTEX_SIZE * Float32Array.BYTES_PER_ELEMENT * TERRAIN_BLOCK_VERTEX_COMPLEXITY * TERRAIN_BLOCK_VERTEX_COMPLEXITY, TERRAIN_BLOCK_VERTEX_SIZE * Float32Array.BYTES_PER_ELEMENT));
          vertexBuffer.update(vertexData);

          // build bounding box
          this._buildBoundingBox();

          // initialize renderable
          var gfxAttributes = [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_NORMAL, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RG32F)];
          this._renderable._meshData = new RenderingSubMesh([vertexBuffer], gfxAttributes, PrimitiveMode.TRIANGLE_LIST, this._terrain._getSharedIndexBuffer(), null, false);
          this._renderable._model = legacyCC.director.root.createModel(scene.Model);
          this._renderable._model.createBoundingShape(this._bbMin, this._bbMax);
          this._renderable._model.node = this._renderable._model.transform = this._node;
          // ensure the terrain node is in the scene
          if (this._renderable.node.scene != null) {
            this.visible = true;
          }

          // reset weightMap
          this._updateWeightMap();

          // reset material
          this._updateMaterial(true);
          if (this._terrain.lodEnable) {
            // update lod
            this._updateLodBuffer(vertexData);
            // update index buffer
            this._updateIndexBuffer();
          }
        };
        _proto2.rebuild = function rebuild() {
          this._updateHeight();
          this._updateWeightMap();
          this._renderable._invalidMaterial();
          this._updateMaterial(false);
        };
        _proto2.destroy = function destroy() {
          this.visible = false;
          this._renderable._destroyModel();
          if (this._node != null && this._node.isValid) {
            this._node.destroy();
          }
          if (this._weightMap != null) {
            this._weightMap.destroy();
          }
        };
        _proto2.update = function update() {
          this._updateMaterial(false);
          if (this.lightmap !== this._renderable._lightmap) {
            this._renderable._updateLightingmap(this.lightmap, this.lightmapUVParam);
          }
          var useNormalMap = this._terrain.useNormalMap;
          var usePBR = this._terrain.usePBR;

          // eslint-disable-next-line arrow-body-style
          var getDetailTex = function getDetailTex(layer) {
            return layer !== null ? layer.detailMap : null;
          };
          var getNormalTex = function getNormalTex(layer) {
            var normalTex = layer !== null ? layer.normalMap : null;
            if (normalTex === null) {
              normalTex = builtinResMgr.get('normal-texture');
            }
            return normalTex;
          };
          var mtl = this._renderable._currentMaterial;
          if (mtl !== null) {
            var nLayers = this.getMaxLayer();
            var uvScale = new Vec4(1, 1, 1, 1);
            var roughness = new Vec4(1, 1, 1, 1);
            var metallic = new Vec4(0, 0, 0, 0);
            if (nLayers === 0) {
              if (this.layers[0] !== -1) {
                var l0 = this._terrain.getLayer(this.layers[0]);
                if (l0 !== null) {
                  uvScale.x = 1.0 / l0.tileSize;
                  roughness.x = l0.roughness;
                  metallic.x = l0.metallic;
                }
                mtl.setProperty('detailMap0', getDetailTex(l0));
                if (useNormalMap) {
                  mtl.setProperty('normalMap0', getNormalTex(l0));
                }
              } else {
                mtl.setProperty('detailMap0', builtinResMgr.get('default-texture'));
                if (useNormalMap) {
                  mtl.setProperty('normalMap0', builtinResMgr.get('normal-texture'));
                }
              }
            } else if (nLayers === 1) {
              var _l = this._terrain.getLayer(this.layers[0]);
              var l1 = this._terrain.getLayer(this.layers[1]);
              if (_l !== null) {
                uvScale.x = 1.0 / _l.tileSize;
                roughness.x = _l.roughness;
                metallic.x = _l.metallic;
              }
              if (l1 !== null) {
                uvScale.y = 1.0 / l1.tileSize;
                roughness.y = l1.roughness;
                metallic.y = l1.metallic;
              }
              mtl.setProperty('weightMap', this._weightMap);
              mtl.setProperty('detailMap0', getDetailTex(_l));
              mtl.setProperty('detailMap1', getDetailTex(l1));
              if (useNormalMap) {
                mtl.setProperty('normalMap0', getNormalTex(_l));
                mtl.setProperty('normalMap1', getNormalTex(l1));
              }
            } else if (nLayers === 2) {
              var _l2 = this._terrain.getLayer(this.layers[0]);
              var _l3 = this._terrain.getLayer(this.layers[1]);
              var l2 = this._terrain.getLayer(this.layers[2]);
              if (_l2 !== null) {
                uvScale.x = 1.0 / _l2.tileSize;
                roughness.x = _l2.roughness;
                metallic.x = _l2.metallic;
              }
              if (_l3 !== null) {
                uvScale.y = 1.0 / _l3.tileSize;
                roughness.y = _l3.roughness;
                metallic.y = _l3.metallic;
              }
              if (l2 !== null) {
                uvScale.z = 1.0 / l2.tileSize;
                roughness.z = l2.roughness;
                metallic.z = l2.metallic;
              }
              mtl.setProperty('weightMap', this._weightMap);
              mtl.setProperty('detailMap0', getDetailTex(_l2));
              mtl.setProperty('detailMap1', getDetailTex(_l3));
              mtl.setProperty('detailMap2', getDetailTex(l2));
              if (useNormalMap) {
                mtl.setProperty('normalMap0', getNormalTex(_l2));
                mtl.setProperty('normalMap1', getNormalTex(_l3));
                mtl.setProperty('normalMap2', getNormalTex(l2));
              }
            } else if (nLayers === 3) {
              var _l4 = this._terrain.getLayer(this.layers[0]);
              var _l5 = this._terrain.getLayer(this.layers[1]);
              var _l6 = this._terrain.getLayer(this.layers[2]);
              var l3 = this._terrain.getLayer(this.layers[3]);
              if (_l4 !== null) {
                uvScale.x = 1.0 / _l4.tileSize;
                roughness.x = _l4.roughness;
                metallic.x = _l4.metallic;
              }
              if (_l5 !== null) {
                uvScale.y = 1.0 / _l5.tileSize;
                roughness.y = _l5.roughness;
                metallic.y = _l5.metallic;
              }
              if (_l6 !== null) {
                uvScale.z = 1.0 / _l6.tileSize;
                roughness.z = _l6.roughness;
                metallic.z = _l6.metallic;
              }
              if (l3 !== null) {
                uvScale.w = 1.0 / l3.tileSize;
                roughness.w = l3.roughness;
                metallic.w = l3.metallic;
              }
              mtl.setProperty('weightMap', this._weightMap);
              mtl.setProperty('detailMap0', getDetailTex(_l4));
              mtl.setProperty('detailMap1', getDetailTex(_l5));
              mtl.setProperty('detailMap2', getDetailTex(_l6));
              mtl.setProperty('detailMap3', getDetailTex(l3));
              if (useNormalMap) {
                mtl.setProperty('normalMap0', getNormalTex(_l4));
                mtl.setProperty('normalMap1', getNormalTex(_l5));
                mtl.setProperty('normalMap2', getNormalTex(_l6));
                mtl.setProperty('normalMap3', getNormalTex(l3));
              }
            }
            mtl.setProperty('UVScale', uvScale);
            if (usePBR) {
              mtl.setProperty('roughness', roughness);
              mtl.setProperty('metallic', metallic);
            }
          }
        }

        /**
         * @engineInternal
         */;
        _proto2._buildLodInfo = function _buildLodInfo() {
          var vertexData = new Float32Array(TERRAIN_BLOCK_VERTEX_SIZE * TERRAIN_BLOCK_VERTEX_COMPLEXITY * TERRAIN_BLOCK_VERTEX_COMPLEXITY);
          this._buildVertexData(vertexData);
          // update lod
          this._updateLodBuffer(vertexData);
          // update index buffer
          this._updateIndexBuffer();
        }

        /**
         * @engineInternal
         */;
        _proto2._updateLevel = function _updateLevel(camPos) {
          var maxLevel = TERRAIN_LOD_LEVELS - 1;
          var bbMin = new Vec3();
          var bbMax = new Vec3();
          Vec3.add(bbMin, this._bbMin, this._terrain.node.getWorldPosition());
          Vec3.add(bbMax, this._bbMax, this._terrain.node.getWorldPosition());
          var d1 = Vec3.distance(bbMin, camPos);
          var d2 = Vec3.distance(bbMax, camPos);
          var d = Math.min(d1, d2);
          d -= this._terrain.LodBias;
          this._lodLevel = 0;
          while (this._lodLevel < maxLevel) {
            var ld1 = this._LevelDistances[this._lodLevel + 1];
            if (d <= ld1) {
              break;
            }
            ++this._lodLevel;
          }
        };
        _proto2.setBrushMaterial = function setBrushMaterial(mtl) {
          if (this._renderable._brushMaterial !== mtl) {
            this._renderable._invalidMaterial();
            this._renderable._brushMaterial = mtl;
          }
        };
        _proto2._getBrushMaterial = function _getBrushMaterial() {
          return this._renderable ? this._renderable._brushMaterial : null;
        };
        _proto2._getBrushPass = function _getBrushPass() {
          return this._renderable ? this._renderable._brushPass : null;
        }

        /**
         * @en valid
         * @zh 是否有效
         */;
        /**
         * @en get terrain owner
         * @zh 获得地形对象
         */
        _proto2.getTerrain = function getTerrain() {
          return this._terrain;
        }

        /**
         * @en get index
         * @zh 获得地形索引
         */;
        _proto2.getIndex = function getIndex() {
          return this._index;
        }

        /**
         * @en get rect bound
         * @zh 获得地形矩形包围体
         */;
        _proto2.getRect = function getRect() {
          var rect = new Rect();
          rect.x = this._index[0] * TERRAIN_BLOCK_TILE_COMPLEXITY;
          rect.y = this._index[1] * TERRAIN_BLOCK_TILE_COMPLEXITY;
          rect.width = TERRAIN_BLOCK_TILE_COMPLEXITY;
          rect.height = TERRAIN_BLOCK_TILE_COMPLEXITY;
          return rect;
        }

        /**
         * @en set layer
         * @zh 设置纹理层
         */;
        _proto2.setLayer = function setLayer(index, layerId) {
          if (this.layers[index] !== layerId) {
            this._terrain.setBlockLayer(this._index[0], this._index[1], index, layerId);
            this._renderable._invalidMaterial();
            this._updateMaterial(false);
          }
        }

        /**
         * @en get layer
         * @zh 获得纹理层
         */;
        _proto2.getLayer = function getLayer(index) {
          return this.layers[index];
        }

        /**
         * @en get max layer index
         * @zh 获得最大纹理索引
         */;
        _proto2.getMaxLayer = function getMaxLayer() {
          if (this.layers[3] >= 0) {
            return 3;
          }
          if (this.layers[2] >= 0) {
            return 2;
          }
          if (this.layers[1] >= 0) {
            return 1;
          }
          return 0;
        };
        _proto2._getMaterialDefines = function _getMaterialDefines(nLayers) {
          var lightmapMacroValue = 1; /*static*/
          if (this._terrain.node && this._terrain.node.scene) {
            if (this._terrain.node.scene.globals.bakedWithStationaryMainLight) {
              lightmapMacroValue = 2; /*stationary*/
            }
          }

          return {
            LAYERS: nLayers + 1,
            CC_USE_LIGHTMAP: this.lightmap !== null ? lightmapMacroValue : 0,
            USE_NORMALMAP: this._terrain.useNormalMap ? 1 : 0,
            USE_PBR: this._terrain.usePBR ? 1 : 0
            // CC_RECEIVE_SHADOW: this._terrain.receiveShadow ? 1 : 0,
          };
        };
        _proto2._invalidMaterial = function _invalidMaterial() {
          this._renderable._invalidMaterial();
        };
        _proto2._updateMaterial = function _updateMaterial(init) {
          if (this._renderable._updateMaterial(this, init)) {
            // Need set wrap mode clamp to border
            if (this.lightmap !== null) {
              this.lightmap.setWrapMode(WrapMode.CLAMP_TO_BORDER, WrapMode.CLAMP_TO_BORDER);
            }
            this._renderable._updateLightingmap(this.lightmap, this.lightmapUVParam);
          }
        };
        _proto2._updateHeight = function _updateHeight() {
          if (this._renderable._meshData == null) {
            return;
          }
          var vertexData = new Float32Array(TERRAIN_BLOCK_VERTEX_SIZE * TERRAIN_BLOCK_VERTEX_COMPLEXITY * TERRAIN_BLOCK_VERTEX_COMPLEXITY);
          this._buildVertexData(vertexData);
          this._renderable._meshData.vertexBuffers[0].update(vertexData);
          this._buildBoundingBox();
          this._renderable._model.createBoundingShape(this._bbMin, this._bbMax);
          this._renderable._model.updateWorldBound();
          this._updateLodBuffer(vertexData);
          this._updateIndexBuffer();
        };
        _proto2._updateWeightMap = function _updateWeightMap() {
          var nLayers = this.getMaxLayer();
          if (nLayers === 0) {
            if (this._weightMap != null) {
              this._weightMap.destroy();
              this._weightMap = null;
            }
            return;
          }
          if (this._weightMap == null) {
            this._weightMap = new Texture2D();
            this._weightMap.create(this._terrain.weightMapSize, this._terrain.weightMapSize, PixelFormat.RGBA8888);
            this._weightMap.setFilters(Filter.LINEAR, Filter.LINEAR);
            this._weightMap.setWrapMode(WrapMode.CLAMP_TO_EDGE, WrapMode.CLAMP_TO_EDGE);
          }
          var weightData = new Uint8Array(this._terrain.weightMapSize * this._terrain.weightMapSize * 4);
          var weightIndex = 0;
          for (var j = 0; j < this._terrain.weightMapSize; ++j) {
            for (var i = 0; i < this._terrain.weightMapSize; ++i) {
              var x = this._index[0] * this._terrain.weightMapSize + i;
              var y = this._index[1] * this._terrain.weightMapSize + j;
              var w = this._terrain.getWeight(x, y);
              weightData[weightIndex * 4 + 0] = Math.floor(w.x * 255);
              weightData[weightIndex * 4 + 1] = Math.floor(w.y * 255);
              weightData[weightIndex * 4 + 2] = Math.floor(w.z * 255);
              weightData[weightIndex * 4 + 3] = Math.floor(w.w * 255);
              weightIndex += 1;
            }
          }
          this._weightMap.uploadData(weightData);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto2._updateLightmap = function _updateLightmap(info) {
          this._lightmapInfo = info;
          this._invalidMaterial();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto2._updateLod = function _updateLod() {
          var key = new TerrainLodKey();
          key.level = this._lodLevel;
          key.north = this._lodLevel;
          key.south = this._lodLevel;
          key.west = this._lodLevel;
          key.east = this._lodLevel;
          if (this._index[0] > 0) {
            var n = this.getTerrain().getBlock(this._index[0] - 1, this._index[1]);
            key.west = n._lodLevel;
            if (key.west < this._lodLevel) {
              key.west = this._lodLevel;
            }
          }
          if (this._index[0] < this._terrain.info.blockCount[0] - 1) {
            var _n = this.getTerrain().getBlock(this._index[0] + 1, this._index[1]);
            key.east = _n._lodLevel;
            if (key.east < this._lodLevel) {
              key.east = this._lodLevel;
            }
          }
          if (this._index[1] > 0) {
            var _n2 = this.getTerrain().getBlock(this._index[0], this._index[1] - 1);
            key.north = _n2._lodLevel;
            if (key.north < this._lodLevel) {
              key.north = this._lodLevel;
            }
          }
          if (this._index[1] < this._terrain.info.blockCount[1] - 1) {
            var _n3 = this.getTerrain().getBlock(this._index[0], this._index[1] + 1);
            key.south = _n3._lodLevel;
            if (key.south < this._lodLevel) {
              key.south = this._lodLevel;
            }
          }
          if (this._lodKey.equals(key)) {
            return;
          }
          this._lodKey = key;
          this._updateIndexBuffer();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto2._resetLod = function _resetLod() {
          var key = new TerrainLodKey();
          key.level = 0;
          key.north = 0;
          key.south = 0;
          key.west = 0;
          key.east = 0;
          if (this._lodKey.equals(key)) {
            return;
          }
          this._lodKey = key;
          this._updateIndexBuffer();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto2._updateIndexBuffer = function _updateIndexBuffer() {
          if (this._renderable._meshData === null) {
            return;
          }
          if (this._renderable._model === null) {
            return;
          }
          if (this._renderable._model.subModels.length === 0) {
            return;
          }
          var indexData = this._terrain._getIndexData(this._lodKey);
          if (indexData === null) {
            return;
          }
          var model = this._renderable._model.subModels[0];
          model.inputAssembler.firstIndex = indexData.start;
          model.inputAssembler.indexCount = indexData.size;
        };
        _proto2._getHeight = function _getHeight(x, y, verts) {
          var idx = TERRAIN_BLOCK_VERTEX_COMPLEXITY * y + x;
          return verts[idx * TERRAIN_BLOCK_VERTEX_SIZE + 1];
        };
        _proto2._updateLodBuffer = function _updateLodBuffer(vertices) {
          this._lodLevel = 0;
          this._lodKey = new TerrainLodKey();
          this._calcErrorMetrics(vertices);
          this._calcLevelDistances(vertices);
        };
        _proto2._calcErrorMetrics = function _calcErrorMetrics(vertices) {
          this._errorMetrics[0] = 0;
          for (var i = 1; i < TERRAIN_LOD_LEVELS; ++i) {
            this._errorMetrics[i] = this._calcErrorMetric(i, vertices);
          }
          for (var _i2 = 2; _i2 < TERRAIN_LOD_LEVELS; ++_i2) {
            this._errorMetrics[_i2] = Math.max(this._errorMetrics[_i2], this._errorMetrics[_i2 - 1]);
          }
        };
        _proto2._calcErrorMetric = function _calcErrorMetric(level, vertices) {
          var err = 0.0;
          var step = 1 << level;
          var xSectionVertices = TERRAIN_BLOCK_VERTEX_COMPLEXITY;
          var ySectionVertices = TERRAIN_BLOCK_VERTEX_COMPLEXITY;
          var xSides = xSectionVertices - 1 >> level;
          var ySides = ySectionVertices - 1 >> level;
          for (var y = 0; y < ySectionVertices; y += step) {
            for (var x = 0; x < xSides; ++x) {
              var x0 = x * step;
              var x1 = x0 + step;
              var xm = (x1 + x0) / 2;
              var h0 = this._getHeight(x0, y, vertices);
              var h1 = this._getHeight(x1, y, vertices);
              var hm = this._getHeight(xm, y, vertices);
              var hmi = (h0 + h1) / 2;
              var delta = Math.abs(hm - hmi);
              err = Math.max(err, delta);
            }
          }
          for (var _x2 = 0; _x2 < xSectionVertices; _x2 += step) {
            for (var _y2 = 0; _y2 < ySides; ++_y2) {
              var y0 = _y2 * step;
              var y1 = y0 + step;
              var ym = (y0 + y1) / 2;
              var _h = this._getHeight(_x2, y0, vertices);
              var _h2 = this._getHeight(_x2, y1, vertices);
              var _hm = this._getHeight(_x2, ym, vertices);
              var _hmi = (_h + _h2) / 2;
              var _delta = Math.abs(_hm - _hmi);
              err = Math.max(err, _delta);
            }
          }
          for (var _y3 = 0; _y3 < ySides; ++_y3) {
            var _y4 = _y3 * step;
            var _y5 = _y4 + step;
            var _ym = (_y4 + _y5) / 2;
            for (var _x3 = 0; _x3 < xSides; ++_x3) {
              var _x4 = _x3 * step;
              var _x5 = _x4 + step;
              var _xm = (_x4 + _x5) / 2;
              var _h3 = this._getHeight(_x4, _y4, vertices);
              var _h4 = this._getHeight(_x5, _y5, vertices);
              var _hm2 = this._getHeight(_xm, _ym, vertices);
              var _hmi2 = (_h3 + _h4) / 2;
              var _delta2 = Math.abs(_hm2 - _hmi2);
              err = Math.max(err, _delta2);
            }
          }
          return err;
        };
        _proto2._calcLevelDistances = function _calcLevelDistances(vertices) {
          var pixelErr = 4;
          var resolution = 768;
          var c = 1.0 / (2 * pixelErr / resolution);
          for (var i = 1; i < TERRAIN_LOD_LEVELS; ++i) {
            var e = this._errorMetrics[i];
            var d = e * c;
            this._LevelDistances[i] = d;
          }
        };
        _proto2._buildVertexData = function _buildVertexData(vertexData) {
          var index = 0;
          for (var j = 0; j < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++j) {
            for (var i = 0; i < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++i) {
              var x = this._index[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + i;
              var y = this._index[1] * TERRAIN_BLOCK_TILE_COMPLEXITY + j;
              var position = this._terrain.getPosition(x, y);
              var normal = this._terrain.getNormal(x, y);
              var uv = new Vec2(i / TERRAIN_BLOCK_TILE_COMPLEXITY, j / TERRAIN_BLOCK_TILE_COMPLEXITY);
              vertexData[index++] = position.x;
              vertexData[index++] = position.y;
              vertexData[index++] = position.z;
              vertexData[index++] = normal.x;
              vertexData[index++] = normal.y;
              vertexData[index++] = normal.z;
              vertexData[index++] = uv.x;
              vertexData[index++] = uv.y;
            }
          }
        };
        _proto2._buildBoundingBox = function _buildBoundingBox() {
          this._bbMin.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          this._bbMax.set(Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE);
          for (var j = 0; j < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++j) {
            for (var i = 0; i < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++i) {
              var x = this._index[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + i;
              var y = this._index[1] * TERRAIN_BLOCK_TILE_COMPLEXITY + j;
              var position = this._terrain.getPosition(x, y);
              Vec3.min(this._bbMin, this._bbMin, position);
              Vec3.max(this._bbMax, this._bbMax, position);
            }
          }
        };
        _createClass(TerrainBlock, [{
          key: "valid",
          get: function get() {
            if (this._terrain === null) {
              return false;
            }
            var blocks = this._terrain.getBlocks();
            for (var i = 0; i < blocks.length; ++i) {
              if (blocks[i] === this) {
                return true;
              }
            }
            return false;
          }

          /**
           * @en get current material
           * @zh 获得当前的材质
           */
        }, {
          key: "material",
          get: function get() {
            return this._renderable ? this._renderable._currentMaterial : null;
          }

          /**
           * @en get layers
           * @zh 获得纹理层索引
           */
        }, {
          key: "layers",
          get: function get() {
            return this._terrain.getBlockLayers(this._index[0], this._index[1]);
          }

          /**
           * @en get weight map
           * @zh 获得权重图
           */
        }, {
          key: "weightmap",
          get: function get() {
            return this._weightMap;
          }

          /**
           * @en get light map
           * @zh 获得光照图
           */
        }, {
          key: "lightmap",
          get: function get() {
            return this._lightmapInfo ? this._lightmapInfo.texture : null;
          }

          /**
           * @en get light map uv parameter
           * @zh 获得光照图纹理坐标参数
           */
        }, {
          key: "lightmapUVParam",
          get: function get() {
            if (this._lightmapInfo != null) {
              return new Vec4(this._lightmapInfo.UOff, this._lightmapInfo.VOff, this._lightmapInfo.UScale, this._lightmapInfo.VScale);
            }
            return new Vec4(0, 0, 0, 0);
          }

          /**
           * @zh 地形块的可见性
           * @en The visibility of the block
           */
        }, {
          key: "visible",
          get: function get() {
            if (this._renderable._model !== null) {
              return this._renderable._model.scene !== null;
            }
            return false;
          },
          set: function set(val) {
            if (this._renderable._model !== null) {
              if (val) {
                if (this._terrain.node != null && this._terrain.node.scene != null && this._terrain.node.scene.renderScene != null && this._renderable._model.scene == null) {
                  this._terrain.node.scene.renderScene.addModel(this._renderable._model);
                }
              } else if (this._renderable._model.scene !== null) {
                this._renderable._model.scene.removeModel(this._renderable._model);
              }
            }
          }
        }]);
        return TerrainBlock;
      }());
      /**
       * @en Terrain
       * @zh 地形组件
       */
      _export("Terrain", Terrain = (_dec4 = ccclass('cc.Terrain'), _dec5 = help('i18n:cc.Terrain'), _dec6 = type(TerrainAsset), _dec7 = type(EffectAsset), _dec8 = visible(false), _dec9 = type(TerrainBlockLightmapInfo), _dec10 = type(CCFloat), _dec11 = type(TerrainAsset), _dec12 = visible(true), _dec13 = type(EffectAsset), _dec14 = visible(true), _dec15 = type(TerrainInfo), _dec4(_class12 = _dec5(_class12 = executeInEditMode(_class12 = disallowMultiple(_class12 = (_class13 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Terrain, _Component);
        function Terrain() {
          var _this2;
          _this2 = _Component.call(this) || this;

          // initialize layers
          _this2.__asset = _initializer15 && _initializer15();
          _this2._effectAsset = _initializer16 && _initializer16();
          _this2._lightmapInfos = _initializer17 && _initializer17();
          _this2._receiveShadow = _initializer18 && _initializer18();
          _this2._useNormalmap = _initializer19 && _initializer19();
          _this2._usePBR = _initializer20 && _initializer20();
          _this2._lodEnable = _initializer21 && _initializer21();
          _this2._lodBias = _initializer22 && _initializer22();
          // when the terrain undo, __asset is changed by serialize, but the internal block is created by last asset, here saved last asset
          _this2._buitinAsset = null;
          _this2._tileSize = 1;
          _this2._blockCount = [1, 1];
          _this2._weightMapSize = 128;
          _this2._lightMapSize = 128;
          _this2._heights = new Uint16Array();
          _this2._weights = new Uint8Array();
          _this2._normals = new Float32Array();
          _this2._layerList = [];
          _this2._layerBuffer = [];
          _this2._blocks = [];
          _this2._lod = null;
          _this2._sharedIndexBuffer = null;
          _this2._sharedLodIndexBuffer = null;
          for (var i = 0; i < TERRAIN_MAX_LAYER_COUNT; ++i) {
            _this2._layerList.push(null);
          }
          return _this2;
        }
        var _proto3 = Terrain.prototype;
        /**
         * @en build
         * @zh 构建地形
         */
        _proto3.build = function build(info) {
          this._tileSize = info.tileSize;
          this._blockCount[0] = info.blockCount[0];
          this._blockCount[1] = info.blockCount[1];
          this._weightMapSize = info.weightMapSize;
          this._lightMapSize = info.lightMapSize;
          return this._buildImp();
        }

        /**
         * @en rebuild
         * @zh 重建地形
         */;
        _proto3.rebuild = function rebuild(info) {
          for (var i = 0; i < this._blocks.length; ++i) {
            this._blocks[i].destroy();
          }
          this._blocks = [];

          // reset lightmap
          this._resetLightmap(false);

          // build layer buffer
          this._rebuildLayerBuffer(info);

          // build heights and normals
          var heightsChanged = this._rebuildHeights(info);

          // build weights
          this._rebuildWeights(info);

          // update info
          this._tileSize = info.tileSize;
          this._blockCount[0] = info.blockCount[0];
          this._blockCount[1] = info.blockCount[1];
          this._weightMapSize = info.weightMapSize;
          this._lightMapSize = info.lightMapSize;

          // build normals if heights changed
          if (heightsChanged) {
            this._normals = new Float32Array(this.heights.length * 3);
            this._buildNormals();
          }

          // build blocks
          for (var j = 0; j < this._blockCount[1]; ++j) {
            for (var _i3 = 0; _i3 < this._blockCount[0]; ++_i3) {
              this._blocks.push(new TerrainBlock(this, _i3, j));
            }
          }
          for (var _i4 = 0; _i4 < this._blocks.length; ++_i4) {
            this._blocks[_i4].build();
          }
        }

        /**
         * @en import height field
         * @zh 导入高度图
         */;
        _proto3.importHeightField = function importHeightField(hf, heightScale) {
          var index = 0;
          for (var j = 0; j < this.vertexCount[1]; ++j) {
            for (var i = 0; i < this.vertexCount[0]; ++i) {
              var u = i / this.tileCount[0];
              var v = j / this.tileCount[1];
              var h = hf.getAt(u * hf.w, v * hf.h) * heightScale;
              this._heights[index++] = h;
            }
          }
          this._buildNormals();

          // rebuild all blocks
          for (var _i5 = 0; _i5 < this._blocks.length; ++_i5) {
            this._blocks[_i5]._updateHeight();
          }
        }

        /**
         * @en export height field
         * @zh 导出高度图
         */;
        _proto3.exportHeightField = function exportHeightField(hf, heightScale) {
          var index = 0;
          for (var j = 0; j < hf.h; ++j) {
            for (var i = 0; i < hf.w; ++i) {
              var u = i / (hf.w - 1);
              var v = j / (hf.h - 1);
              var x = u * this.size.width;
              var y = v * this.size.height;
              var h = this.getHeightAt(x, y);
              if (h != null) {
                hf.data[index++] = h * heightScale;
              }
            }
          }
        };
        _proto3.exportAsset = function exportAsset() {
          var asset = new TerrainAsset();
          asset.tileSize = this.tileSize;
          asset.blockCount = this.blockCount;
          asset.lightMapSize = this.lightMapSize;
          asset.weightMapSize = this.weightMapSize;
          asset.heights = this.heights;
          asset.weights = this.weights;
          asset.layerBuffer = new Array(this._blocks.length * 4);
          for (var i = 0; i < this._blocks.length; ++i) {
            asset.layerBuffer[i * 4 + 0] = this._blocks[i].layers[0];
            asset.layerBuffer[i * 4 + 1] = this._blocks[i].layers[1];
            asset.layerBuffer[i * 4 + 2] = this._blocks[i].layers[2];
            asset.layerBuffer[i * 4 + 3] = this._blocks[i].layers[3];
          }
          this.exportLayerListToAsset(asset);
          return asset;
        };
        _proto3.exportLayerListToAsset = function exportLayerListToAsset(asset) {
          asset.layerInfos.length = 0;
          for (var i = 0; i < this._layerList.length; ++i) {
            var temp = this._layerList[i];
            if (temp && temp.detailMap && isValid(temp.detailMap)) {
              var layer = new TerrainLayerInfo();
              layer.slot = i;
              layer.tileSize = temp.tileSize;
              layer.detailMap = temp.detailMap;
              layer.normalMap = temp.normalMap;
              layer.metallic = temp.metallic;
              layer.roughness = temp.roughness;
              asset.layerInfos.push(layer);
            }
          }
        };
        _proto3.getEffectAsset = function getEffectAsset() {
          if (this._effectAsset === null) {
            return legacyCC.EffectAsset.get(TERRAIN_EFFECT_UUID);
          }
          return this._effectAsset;
        };
        _proto3.onEnable = function onEnable() {
          if (this._blocks.length === 0) {
            this._buildImp();
          }
          for (var i = 0; i < this._blocks.length; ++i) {
            this._blocks[i].visible = true;
          }
          legacyCC.director.root.pipelineEvent.on(PipelineEventType.RENDER_CAMERA_BEGIN, this.onUpdateFromCamera, this);
        };
        _proto3.onDisable = function onDisable() {
          legacyCC.director.root.pipelineEvent.off(PipelineEventType.RENDER_CAMERA_BEGIN, this.onUpdateFromCamera, this);
          for (var i = 0; i < this._blocks.length; ++i) {
            this._blocks[i].visible = false;
          }
        };
        _proto3.onDestroy = function onDestroy() {
          for (var i = 0; i < this._blocks.length; ++i) {
            this._blocks[i].destroy();
          }
          this._blocks = [];
          for (var _i6 = 0; _i6 < this._layerList.length; ++_i6) {
            this._layerList[_i6] = null;
          }
          if (this._sharedIndexBuffer != null) {
            this._sharedIndexBuffer.destroy();
          }
          if (this._sharedLodIndexBuffer != null) {
            this._sharedLodIndexBuffer.destroy();
          }
        };
        _proto3.onRestore = function onRestore() {
          this.onEnable();
          this._buildImp(true);
        };
        _proto3.update = function update(deltaTime) {
          for (var i = 0; i < this._blocks.length; ++i) {
            this._blocks[i].update();
          }
        };
        _proto3.onUpdateFromCamera = function onUpdateFromCamera(cam) {
          if (!this.lodEnable || this._sharedLodIndexBuffer == null) {
            return;
          }
          if (cam.scene !== this._getRenderScene()) {
            return;
          }
          for (var i = 0; i < this._blocks.length; ++i) {
            this._blocks[i]._updateLevel(cam.position);
          }
          for (var _i7 = 0; _i7 < this._blocks.length; ++_i7) {
            this._blocks[_i7]._updateLod();
          }
        }

        /**
         * @en add layer
         * @zh 添加纹理层
         */;
        _proto3.addLayer = function addLayer(layer) {
          for (var i = 0; i < this._layerList.length; ++i) {
            var _this$_layerList$i;
            if (this._layerList[i] === null || this._layerList[i] && ((_this$_layerList$i = this._layerList[i]) === null || _this$_layerList$i === void 0 ? void 0 : _this$_layerList$i.detailMap) === null) {
              this._layerList[i] = layer;
              if (this._asset) {
                this.exportLayerListToAsset(this._asset);
              }
              return i;
            }
          }
          return -1;
        }

        /**
         * @en set layer
         * @zh 设置纹理层
         */;
        _proto3.setLayer = function setLayer(i, layer) {
          this._layerList[i] = layer;
          if (this._asset) {
            this.exportLayerListToAsset(this._asset);
          }
        }

        /**
         * @en remove layer
         * @zh 移除纹理层
         */;
        _proto3.removeLayer = function removeLayer(id) {
          this._layerList[id] = null;
          if (this._asset) {
            this.exportLayerListToAsset(this._asset);
          }
        }

        /**
         * @en get layer
         * @zh 获得纹理层
         */;
        _proto3.getLayer = function getLayer(id) {
          if (id === -1) {
            return null;
          }
          return this._layerList[id];
        }

        /**
         * @en get position
         * @zh 获得地形上的位置
         */;
        _proto3.getPosition = function getPosition(i, j) {
          var x = i * this._tileSize;
          var z = j * this._tileSize;
          var y = this.getHeight(i, j);
          return new Vec3(x, y, z);
        };
        _proto3.getHeightField = function getHeightField() {
          return this._heights;
        }

        /**
         * @en set height
         * @zh 设置地形上的高度
         */;
        _proto3.setHeight = function setHeight(i, j, h) {
          h = clamp(h, TERRAIN_HEIGHT_FMIN, TERRAIN_HEIGHT_FMAX);
          this._heights[j * this.vertexCount[0] + i] = TERRAIN_HEIGHT_BASE + h / TERRAIN_HEIGHT_FACTORY;
          if (EDITOR && this._asset) {
            this._asset.heights[j * this.vertexCount[0] + i] = TERRAIN_HEIGHT_BASE + h / TERRAIN_HEIGHT_FACTORY;
          }
        }

        /**
         * @en get height
         * @zh 获得地形上的高度
         */;
        _proto3.getHeight = function getHeight(i, j) {
          return (this._heights[j * this.vertexCount[0] + i] - TERRAIN_HEIGHT_BASE) * TERRAIN_HEIGHT_FACTORY;
        }

        /**
         * @en set height
         * @zh 设置高度
         */;
        _proto3.getHeightClamp = function getHeightClamp(i, j) {
          i = clamp(i, 0, this.vertexCount[0] - 1);
          j = clamp(j, 0, this.vertexCount[1] - 1);
          return this.getHeight(i, j);
        }

        /**
         * @en get height by point
         * @zh 根据点的坐标获得高度
         */;
        _proto3.getHeightAt = function getHeightAt(x, y) {
          var fx = x / this.tileSize;
          var fy = y / this.tileSize;
          var ix0 = Math.floor(fx);
          var iz0 = Math.floor(fy);
          var ix1 = ix0 + 1;
          var iz1 = iz0 + 1;
          var dx = fx - ix0;
          var dz = fy - iz0;
          if (ix0 < 0 || ix0 > this.vertexCount[0] - 1 || iz0 < 0 || iz0 > this.vertexCount[1] - 1) {
            return null;
          }
          ix0 = clamp(ix0, 0, this.vertexCount[0] - 1);
          iz0 = clamp(iz0, 0, this.vertexCount[1] - 1);
          ix1 = clamp(ix1, 0, this.vertexCount[0] - 1);
          iz1 = clamp(iz1, 0, this.vertexCount[1] - 1);
          var a = this.getHeight(ix0, iz0);
          var b = this.getHeight(ix1, iz0);
          var c = this.getHeight(ix0, iz1);
          var d = this.getHeight(ix1, iz1);
          var m = (b + c) * 0.5;
          if (dx + dz <= 1.0) {
            d = m + (m - a);
          } else {
            a = m + (m - d);
          }
          var h1 = a * (1.0 - dx) + b * dx;
          var h2 = c * (1.0 - dx) + d * dx;
          var h = h1 * (1.0 - dz) + h2 * dz;
          return h;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto3._setNormal = function _setNormal(i, j, n) {
          var index = j * this.vertexCount[0] + i;
          this._normals[index * 3 + 0] = n.x;
          this._normals[index * 3 + 1] = n.y;
          this._normals[index * 3 + 2] = n.z;
        }

        /**
         * @en get normal
         * @zh 获得法线
         */;
        _proto3.getNormal = function getNormal(i, j) {
          var index = j * this.vertexCount[0] + i;
          var n = new Vec3();
          n.x = this._normals[index * 3 + 0];
          n.y = this._normals[index * 3 + 1];
          n.z = this._normals[index * 3 + 2];
          return n;
        }

        /**
         * @en get normal by point
         * @zh 根据点的坐标获得法线
         */;
        _proto3.getNormalAt = function getNormalAt(x, y) {
          var fx = x / this.tileSize;
          var fy = y / this.tileSize;
          var ix0 = Math.floor(fx);
          var iz0 = Math.floor(fy);
          var ix1 = ix0 + 1;
          var iz1 = iz0 + 1;
          var dx = fx - ix0;
          var dz = fy - iz0;
          if (ix0 < 0 || ix0 > this.vertexCount[0] - 1 || iz0 < 0 || iz0 > this.vertexCount[1] - 1) {
            return null;
          }
          ix0 = clamp(ix0, 0, this.vertexCount[0] - 1);
          iz0 = clamp(iz0, 0, this.vertexCount[1] - 1);
          ix1 = clamp(ix1, 0, this.vertexCount[0] - 1);
          iz1 = clamp(iz1, 0, this.vertexCount[1] - 1);
          var a = this.getNormal(ix0, iz0);
          var b = this.getNormal(ix1, iz0);
          var c = this.getNormal(ix0, iz1);
          var d = this.getNormal(ix1, iz1);
          var m = new Vec3();
          Vec3.add(m, b, c).multiplyScalar(0.5);
          if (dx + dz <= 1.0) {
            // d = m + (m - a);
            d.set(m);
            d.subtract(a);
            d.add(m);
          } else {
            // a = m + (m - d);
            a.set(m);
            a.subtract(d);
            a.add(m);
          }
          var n1 = new Vec3();
          var n2 = new Vec3();
          var n = new Vec3();
          Vec3.lerp(n1, a, b, dx);
          Vec3.lerp(n2, c, d, dx);
          Vec3.lerp(n, n1, n2, dz);
          return n;
        }

        /**
         * @en set weight
         * @zh 设置权重
         */;
        _proto3.setWeight = function setWeight(i, j, w) {
          var index = j * this._weightMapSize * this._blockCount[0] + i;
          this._weights[index * 4 + 0] = w.x * 255;
          this._weights[index * 4 + 1] = w.y * 255;
          this._weights[index * 4 + 2] = w.z * 255;
          this._weights[index * 4 + 3] = w.w * 255;
          if (EDITOR && this._asset) {
            this._asset.weights[index * 4 + 0] = w.x * 255;
            this._asset.weights[index * 4 + 1] = w.y * 255;
            this._asset.weights[index * 4 + 2] = w.z * 255;
            this._asset.weights[index * 4 + 3] = w.w * 255;
          }
        }

        /**
         * @en get weight
         * @zh 获得权重
         */;
        _proto3.getWeight = function getWeight(i, j) {
          var index = j * this._weightMapSize * this._blockCount[0] + i;
          var w = new Vec4();
          w.x = this._weights[index * 4 + 0] / 255.0;
          w.y = this._weights[index * 4 + 1] / 255.0;
          w.z = this._weights[index * 4 + 2] / 255.0;
          w.w = this._weights[index * 4 + 3] / 255.0;
          return w;
        }

        /**
         * @en get normal by point
         * @zh 根据点的坐标获得权重
         */;
        _proto3.getWeightAt = function getWeightAt(x, y) {
          var uWeightComplexity = this.weightMapSize * this.blockCount[0];
          var vWeightComplexity = this.weightMapSize * this.blockCount[1];
          if (uWeightComplexity === 0 || vWeightComplexity === 0) {
            return null;
          }
          var fx = x / uWeightComplexity;
          var fy = y / vWeightComplexity;
          var ix0 = Math.floor(fx);
          var iz0 = Math.floor(fy);
          var ix1 = ix0 + 1;
          var iz1 = iz0 + 1;
          var dx = fx - ix0;
          var dz = fy - iz0;
          if (ix0 < 0 || ix0 > uWeightComplexity - 1 || iz0 < 0 || iz0 > vWeightComplexity - 1) {
            return null;
          }
          ix0 = clamp(ix0, 0, uWeightComplexity - 1);
          iz0 = clamp(iz0, 0, vWeightComplexity - 1);
          ix1 = clamp(ix1, 0, uWeightComplexity - 1);
          iz1 = clamp(iz1, 0, vWeightComplexity - 1);
          var a = this.getWeight(ix0, iz0);
          var b = this.getWeight(ix1, iz0);
          var c = this.getWeight(ix0, iz1);
          var d = this.getWeight(ix1, iz1);
          var m = new Vec4();
          Vec4.add(m, b, c).multiplyScalar(0.5);
          if (dx + dz <= 1.0) {
            d = new Vec4();
            Vec4.subtract(d, m, a).add(m);
          } else {
            a = new Vec4();
            Vec4.subtract(a, m, d).add(m);
          }
          var n1 = new Vec4();
          var n2 = new Vec4();
          var n = new Vec4();
          Vec4.lerp(n1, a, b, dx);
          Vec4.lerp(n2, c, d, dx);
          Vec4.lerp(n, n1, n2, dz);
          return n;
        }

        /**
         * @en get max weight layer by point
         * @zh 根据点的坐标获得权重最大的纹理层
         */;
        _proto3.getMaxWeightLayerAt = function getMaxWeightLayerAt(x, y) {
          var uWeightComplexity = this.weightMapSize * this.blockCount[0];
          var vWeightComplexity = this.weightMapSize * this.blockCount[1];
          if (uWeightComplexity === 0 || vWeightComplexity === 0) {
            return null;
          }
          var fx = x / uWeightComplexity;
          var fy = y / vWeightComplexity;
          var ix0 = Math.floor(fx);
          var iz0 = Math.floor(fy);
          if (ix0 < 0 || ix0 > uWeightComplexity - 1 || iz0 < 0 || iz0 > vWeightComplexity - 1) {
            return null;
          }
          var w = this.getWeight(ix0, iz0);
          var bx = Math.floor(x / this.weightMapSize);
          var by = Math.floor(y / this.weightMapSize);
          var block = this.getBlock(bx, by);
          var i = 0;
          if (w.y > w[i] && block.getLayer(1) !== -1) {
            i = 1;
          }
          if (w.y > w[i] && block.getLayer(2) !== -1) {
            i = 2;
          }
          if (w.z > w[i] && block.getLayer(3) !== -1) {
            i = 3;
          }
          i = block.getLayer(i);
          return this.getLayer(i);
        }

        /**
         * @en get block layers
         * @zh 获得地形块纹理层
         */;
        _proto3.getBlockLayers = function getBlockLayers(i, j) {
          var layerIndex = (j * this._blockCount[0] + i) * TERRAIN_MAX_BLEND_LAYERS;
          return [this._layerBuffer[layerIndex], this._layerBuffer[layerIndex + 1], this._layerBuffer[layerIndex + 2], this._layerBuffer[layerIndex + 3]];
        }

        /**
         * @en get block layer
         * @zh 获得地形块纹理层
         */;
        _proto3.getBlockLayer = function getBlockLayer(i, j, index) {
          var layerIndex = (j * this._blockCount[0] + i) * TERRAIN_MAX_BLEND_LAYERS;
          return this._layerBuffer[layerIndex + index];
        }

        /**
         * @en set block layer
         * @zh 获得地形块层
         */;
        _proto3.setBlockLayer = function setBlockLayer(i, j, index, layerId) {
          var layerIndex = (j * this._blockCount[0] + i) * TERRAIN_MAX_BLEND_LAYERS;
          this._layerBuffer[layerIndex + index] = layerId;
        }

        /**
         * @en get block
         * @zh 获得地形块对象
         */;
        _proto3.getBlock = function getBlock(i, j) {
          return this._blocks[j * this._blockCount[0] + i];
        }

        /**
         * @en get all blocks
         * @zh 获得地形块缓存
         */;
        _proto3.getBlocks = function getBlocks() {
          return this._blocks;
        }

        /**
         * @en ray check
         * @zh 射线检测
         * @param start ray start
         * @param dir ray direction
         * @param step ray step
         * @param worldSpace is world space
         */;
        _proto3.rayCheck = function rayCheck(start, dir, step, worldSpace) {
          if (worldSpace === void 0) {
            worldSpace = true;
          }
          var MAX_COUNT = 2000;
          var trace = start;
          if (worldSpace) {
            Vec3.subtract(trace, start, this.node.getWorldPosition());
          }
          var delta = new Vec3();
          delta.set(dir);
          delta.multiplyScalar(step);
          var position = null;
          if (dir.equals(new Vec3(0, 1, 0))) {
            var y = this.getHeightAt(trace.x, trace.z);
            if (y != null && trace.y <= y) {
              position = new Vec3(trace.x, y, trace.z);
            }
          } else if (dir.equals(new Vec3(0, -1, 0))) {
            var _y6 = this.getHeightAt(trace.x, trace.z);
            if (_y6 != null && trace.y >= _y6) {
              position = new Vec3(trace.x, _y6, trace.z);
            }
          } else {
            var i = 0;

            // 优先大步进查找
            while (i++ < MAX_COUNT) {
              var _y7 = this.getHeightAt(trace.x, trace.z);
              if (_y7 != null && trace.y <= _y7) {
                break;
              }
              trace.add(dir);
            }

            // 穷举法
            while (i++ < MAX_COUNT) {
              var _y8 = this.getHeightAt(trace.x, trace.z);
              if (_y8 != null && trace.y <= _y8) {
                position = new Vec3(trace.x, _y8, trace.z);
                break;
              }
              trace.add(delta);
            }
          }
          return position;
        }

        /**
         * @deprecated since v3.5.1, this is an engine private interface that will be removed in the future.
         */;
        _proto3._createSharedIndexBuffer = function _createSharedIndexBuffer() {
          // initialize shared index buffer
          var gfxDevice = deviceManager.gfxDevice;
          if (this._lod !== null) {
            var gfxBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, Uint16Array.BYTES_PER_ELEMENT * this._lod._indexBuffer.length, Uint16Array.BYTES_PER_ELEMENT));
            gfxBuffer.update(this._lod._indexBuffer);
            return gfxBuffer;
          } else {
            var indexData = new Uint16Array(TERRAIN_BLOCK_TILE_COMPLEXITY * TERRAIN_BLOCK_TILE_COMPLEXITY * 6);
            var index = 0;
            for (var j = 0; j < TERRAIN_BLOCK_TILE_COMPLEXITY; ++j) {
              for (var i = 0; i < TERRAIN_BLOCK_TILE_COMPLEXITY; ++i) {
                var a = j * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i;
                var b = j * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i + 1;
                var c = (j + 1) * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i;
                var d = (j + 1) * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i + 1;

                // face 1
                indexData[index++] = a;
                indexData[index++] = c;
                indexData[index++] = b;
                // face 2
                indexData[index++] = b;
                indexData[index++] = c;
                indexData[index++] = d;
              }
            }
            var _gfxBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, Uint16Array.BYTES_PER_ELEMENT * indexData.length, Uint16Array.BYTES_PER_ELEMENT));
            _gfxBuffer.update(indexData);
            return _gfxBuffer;
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto3._getSharedIndexBuffer = function _getSharedIndexBuffer() {
          if (this._sharedLodIndexBuffer !== null) {
            return this._sharedLodIndexBuffer;
          }
          if (this._sharedIndexBuffer !== null) {
            return this._sharedIndexBuffer;
          }
          if (this.lodEnable && this._lod === null) {
            this._lod = new TerrainLod();
          }
          if (this._lod !== null) {
            this._sharedLodIndexBuffer = this._createSharedIndexBuffer();
            return this._sharedLodIndexBuffer;
          } else {
            this._sharedIndexBuffer = this._createSharedIndexBuffer();
            return this._sharedIndexBuffer;
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto3._getIndexData = function _getIndexData(key) {
          if (this._sharedLodIndexBuffer !== null && this._lod !== null) {
            return this._lod.getIndexData(key);
          }
          return null;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto3._resetLightmap = function _resetLightmap(enable) {
          this._lightmapInfos.length = 0;
          if (enable) {
            for (var i = 0; i < this._blockCount[0] * this._blockCount[1]; ++i) {
              this._lightmapInfos.push(new TerrainBlockLightmapInfo());
            }
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto3._updateLightmap = function _updateLightmap(blockId, tex, uOff, vOff, uScale, vScale) {
          if (tex) {
            // ensure the lightmap infos is initialized
            if (this._lightmapInfos.length === 0) {
              for (var i = 0; i < this._blockCount[0] * this._blockCount[1]; ++i) {
                this._lightmapInfos.push(new TerrainBlockLightmapInfo());
              }
            }
          } else if (this._lightmapInfos.length === 0) {
            return;
          }
          this._lightmapInfos[blockId].texture = tex;
          this._lightmapInfos[blockId].UOff = uOff;
          this._lightmapInfos[blockId].VOff = vOff;
          this._lightmapInfos[blockId].UScale = uScale;
          this._lightmapInfos[blockId].VScale = vScale;
          this._blocks[blockId]._updateLightmap(this._lightmapInfos[blockId]);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto3._getLightmapInfo = function _getLightmapInfo(i, j) {
          var index = j * this._blockCount[0] + i;
          return index < this._lightmapInfos.length ? this._lightmapInfos[index] : null;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto3._calcNormal = function _calcNormal(x, z) {
          var flip = 1;
          var here = this.getPosition(x, z);
          var right;
          var up;
          if (x < this.vertexCount[0] - 1) {
            right = this.getPosition(x + 1, z);
          } else {
            flip *= -1;
            right = this.getPosition(x - 1, z);
          }
          if (z < this.vertexCount[1] - 1) {
            up = this.getPosition(x, z + 1);
          } else {
            flip *= -1;
            up = this.getPosition(x, z - 1);
          }
          right.subtract(here);
          up.subtract(here);
          var normal = new Vec3();
          normal.set(up);
          normal.cross(right);
          normal.multiplyScalar(flip);
          normal.normalize();
          return normal;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto3._buildNormals = function _buildNormals() {
          var index = 0;
          for (var y = 0; y < this.vertexCount[1]; ++y) {
            for (var x = 0; x < this.vertexCount[0]; ++x) {
              var n = this._calcNormal(x, y);
              this._normals[index * 3 + 0] = n.x;
              this._normals[index * 3 + 1] = n.y;
              this._normals[index * 3 + 2] = n.z;
              index += 1;
            }
          }
        };
        _proto3._buildImp = function _buildImp(restore) {
          var _this3 = this;
          if (restore === void 0) {
            restore = false;
          }
          if (this.valid) {
            return;
          }
          var terrainAsset = this.__asset;
          if (this._buitinAsset !== terrainAsset) {
            this._buitinAsset = terrainAsset;
          }
          if (!restore && terrainAsset !== null) {
            this._tileSize = terrainAsset.tileSize;
            this._blockCount = terrainAsset.blockCount;
            this._weightMapSize = terrainAsset.weightMapSize;
            this._lightMapSize = terrainAsset.lightMapSize;
            this._heights = terrainAsset.heights;
            this._normals = terrainAsset.normals;
            this._weights = terrainAsset.weights;
            this._layerBuffer = terrainAsset.layerBuffer;

            // build layers
            for (var i = 0; i < this._layerList.length; ++i) {
              this._layerList[i] = null;
            }
            if (terrainAsset.version < TERRAIN_DATA_VERSION5) {
              var _loop = function _loop() {
                var layer = new TerrainLayer();
                var layerInfo = terrainAsset.layerBinaryInfos[_i8];
                layer.tileSize = layerInfo.tileSize;
                legacyCC.assetManager.loadAny(layerInfo.detailMapId, function (err, asset) {
                  layer.detailMap = asset;
                });
                if (layerInfo.normalMapId !== '') {
                  legacyCC.assetManager.loadAny(layerInfo.normalMapId, function (err, asset) {
                    layer.normalMap = asset;
                  });
                }
                layer.roughness = layerInfo.roughness;
                layer.metallic = layerInfo.metallic;
                _this3._layerList[layerInfo.slot] = layer;
              };
              for (var _i8 = 0; _i8 < terrainAsset.layerBinaryInfos.length; ++_i8) {
                _loop();
              }
            } else {
              for (var _i9 = 0; _i9 < terrainAsset.layerInfos.length; ++_i9) {
                var layer = new TerrainLayer();
                var layerInfo = terrainAsset.layerInfos[_i9];
                layer.tileSize = layerInfo.tileSize;
                layer.detailMap = layerInfo.detailMap;
                layer.normalMap = layerInfo.normalMap;
                layer.roughness = layerInfo.roughness;
                layer.metallic = layerInfo.metallic;
                this._layerList[layerInfo.slot] = layer;
              }
            }
          }
          if (this._blockCount[0] === 0 || this._blockCount[1] === 0) {
            return;
          }

          // build heights & normals
          var vertexCount = this.vertexCount[0] * this.vertexCount[1];
          if (this._heights === null || this._heights.length !== vertexCount) {
            this._heights = new Uint16Array(vertexCount);
            this._normals = new Float32Array(vertexCount * 3);
            for (var _i10 = 0; _i10 < vertexCount; ++_i10) {
              this._heights[_i10] = TERRAIN_HEIGHT_BASE;
              this._normals[_i10 * 3 + 0] = 0;
              this._normals[_i10 * 3 + 1] = 1;
              this._normals[_i10 * 3 + 2] = 0;
            }
          }
          if (this._normals === null || this._normals.length !== vertexCount * 3) {
            this._normals = new Float32Array(vertexCount * 3);
            this._buildNormals();
          }

          // build layer buffer
          var layerBufferSize = this.blockCount[0] * this.blockCount[1] * TERRAIN_MAX_BLEND_LAYERS;
          if (this._layerBuffer === null || this._layerBuffer.length !== layerBufferSize) {
            this._layerBuffer = new Array(layerBufferSize);
            for (var _i11 = 0; _i11 < layerBufferSize; ++_i11) {
              this._layerBuffer[_i11] = -1;
            }
          }

          // build weights
          var weightMapComplexityU = this._weightMapSize * this._blockCount[0];
          var weightMapComplexityV = this._weightMapSize * this._blockCount[1];
          if (this._weights.length !== weightMapComplexityU * weightMapComplexityV * 4) {
            this._weights = new Uint8Array(weightMapComplexityU * weightMapComplexityV * 4);
            for (var _i12 = 0; _i12 < weightMapComplexityU * weightMapComplexityV; ++_i12) {
              this._weights[_i12 * 4 + 0] = 255;
              this._weights[_i12 * 4 + 1] = 0;
              this._weights[_i12 * 4 + 2] = 0;
              this._weights[_i12 * 4 + 3] = 0;
            }
          }

          // build blocks
          for (var j = 0; j < this._blockCount[1]; ++j) {
            for (var _i13 = 0; _i13 < this._blockCount[0]; ++_i13) {
              this._blocks.push(new TerrainBlock(this, _i13, j));
            }
          }
          for (var _i14 = 0; _i14 < this._blocks.length; ++_i14) {
            this._blocks[_i14].build();
          }
        };
        _proto3._rebuildHeights = function _rebuildHeights(info) {
          if (this.vertexCount[0] === info.vertexCount[0] && this.vertexCount[1] === info.vertexCount[1]) {
            return false;
          }
          var heights = new Uint16Array(info.vertexCount[0] * info.vertexCount[1]);
          for (var i = 0; i < heights.length; ++i) {
            heights[i] = TERRAIN_HEIGHT_BASE;
          }
          var w = Math.min(this.vertexCount[0], info.vertexCount[0]);
          var h = Math.min(this.vertexCount[1], info.vertexCount[1]);
          for (var j = 0; j < h; ++j) {
            for (var _i15 = 0; _i15 < w; ++_i15) {
              var index0 = j * info.vertexCount[0] + _i15;
              var index1 = j * this.vertexCount[0] + _i15;
              heights[index0] = this._heights[index1];
            }
          }
          this._heights = heights;
          return true;
        };
        _proto3._rebuildLayerBuffer = function _rebuildLayerBuffer(info) {
          if (this.blockCount[0] === info.blockCount[0] && this.blockCount[1] === info.blockCount[1]) {
            return false;
          }
          var layerBuffer = [];
          layerBuffer.length = info.blockCount[0] * info.blockCount[1] * TERRAIN_MAX_BLEND_LAYERS;
          for (var i = 0; i < layerBuffer.length; ++i) {
            layerBuffer[i] = -1;
          }
          var w = Math.min(this.blockCount[0], info.blockCount[0]);
          var h = Math.min(this.blockCount[1], info.blockCount[1]);
          for (var j = 0; j < h; ++j) {
            for (var _i16 = 0; _i16 < w; ++_i16) {
              var index0 = j * info.blockCount[0] + _i16;
              var index1 = j * this.blockCount[0] + _i16;
              for (var l = 0; l < TERRAIN_MAX_BLEND_LAYERS; ++l) {
                layerBuffer[index0 * TERRAIN_MAX_BLEND_LAYERS + l] = this._layerBuffer[index1 * TERRAIN_MAX_BLEND_LAYERS + l];
              }
            }
          }
          this._layerBuffer = layerBuffer;
          return true;
        };
        _proto3._rebuildWeights = function _rebuildWeights(info) {
          var _this4 = this;
          var oldWeightMapSize = this._weightMapSize;
          var oldWeightMapComplexityU = this._weightMapSize * this._blockCount[0];
          var oldWeightMapComplexityV = this._weightMapSize * this._blockCount[1];
          var weightMapComplexityU = info.weightMapSize * info.blockCount[0];
          var weightMapComplexityV = info.weightMapSize * info.blockCount[1];
          if (weightMapComplexityU === oldWeightMapComplexityU && weightMapComplexityV === oldWeightMapComplexityV) {
            return false;
          }
          var weights = new Uint8Array(weightMapComplexityU * weightMapComplexityV * 4);
          for (var i = 0; i < weightMapComplexityU * weightMapComplexityV; ++i) {
            weights[i * 4 + 0] = 255;
            weights[i * 4 + 1] = 0;
            weights[i * 4 + 2] = 0;
            weights[i * 4 + 3] = 0;
          }
          var w = Math.min(info.blockCount[0], this._blockCount[0]);
          var h = Math.min(info.blockCount[1], this._blockCount[1]);

          // get weight
          var getOldWeight = function getOldWeight(_i, _j, _weights) {
            var index = _j * oldWeightMapComplexityU + _i;
            var weight = new Vec4();
            weight.x = _weights[index * 4 + 0] / 255.0;
            weight.y = _weights[index * 4 + 1] / 255.0;
            weight.z = _weights[index * 4 + 2] / 255.0;
            weight.w = _weights[index * 4 + 3] / 255.0;
            return weight;
          };

          // sample weight
          var sampleOldWeight = function sampleOldWeight(_x, _y, _xOff, _yOff, _weights) {
            var ix0 = Math.floor(_x);
            var iz0 = Math.floor(_y);
            var ix1 = Math.min(ix0 + 1, oldWeightMapSize - 1);
            var iz1 = Math.min(iz0 + 1, oldWeightMapSize - 1);
            var dx = _x - ix0;
            var dz = _y - iz0;
            var a = getOldWeight(ix0 + _xOff, iz0 + _yOff, _this4._weights);
            var b = getOldWeight(ix1 + _xOff, iz0 + _yOff, _this4._weights);
            var c = getOldWeight(ix0 + _xOff, iz1 + _yOff, _this4._weights);
            var d = getOldWeight(ix1 + _xOff, iz1 + _yOff, _this4._weights);
            var m = new Vec4();
            Vec4.add(m, b, c).multiplyScalar(0.5);
            if (dx + dz <= 1.0) {
              d.set(m);
              d.subtract(a);
              d.add(m);
            } else {
              a.set(m);
              a.subtract(d);
              a.add(m);
            }
            var n1 = new Vec4();
            var n2 = new Vec4();
            var n = new Vec4();
            Vec4.lerp(n1, a, b, dx);
            Vec4.lerp(n2, c, d, dx);
            Vec4.lerp(n, n1, n2, dz);
            return n;
          };

          // fill new weights
          for (var j = 0; j < h; ++j) {
            for (var _i17 = 0; _i17 < w; ++_i17) {
              var uOff = _i17 * oldWeightMapSize;
              var vOff = j * oldWeightMapSize;
              for (var v = 0; v < info.weightMapSize; ++v) {
                for (var u = 0; u < info.weightMapSize; ++u) {
                  var _w = void 0;
                  if (info.weightMapSize === oldWeightMapSize) {
                    _w = getOldWeight(u + uOff, v + vOff, this._weights);
                  } else {
                    var x = u / (info.weightMapSize - 1) * (oldWeightMapSize - 1);
                    var y = v / (info.weightMapSize - 1) * (oldWeightMapSize - 1);
                    _w = sampleOldWeight(x, y, uOff, vOff, this._weights);
                  }
                  var du = _i17 * info.weightMapSize + u;
                  var dv = j * info.weightMapSize + v;
                  var index = dv * weightMapComplexityU + du;
                  weights[index * 4 + 0] = _w.x * 255;
                  weights[index * 4 + 1] = _w.y * 255;
                  weights[index * 4 + 2] = _w.z * 255;
                  weights[index * 4 + 3] = _w.w * 255;
                }
              }
            }
          }
          this._weights = weights;
          return true;
        };
        _createClass(Terrain, [{
          key: "_asset",
          get:
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this.__asset;
          }

          /**
           * @en Terrain effect asset
           * @zh 地形特效资源
           */,
          set: function set(value) {
            this.__asset = value;
            if (this._buitinAsset !== this.__asset) {
              this._buitinAsset = this.__asset;

              // destroy all block
              for (var i = 0; i < this._blocks.length; ++i) {
                this._blocks[i].destroy();
              }
              this._blocks = [];

              // restore to default
              if (this.__asset === null) {
                this._effectAsset = null;
                this._lightmapInfos = [];
                this._receiveShadow = false;
                this._useNormalmap = false;
                this._usePBR = false;
                this._tileSize = 1;
                this._blockCount = [1, 1];
                this._weightMapSize = 128;
                this._lightMapSize = 128;
                this._heights = new Uint16Array();
                this._weights = new Uint8Array();
                this._normals = new Float32Array();
                this._layerBuffer = [];
                this._blocks = [];

                // initialize layers
                this._layerList = [];
                for (var _i18 = 0; _i18 < TERRAIN_MAX_LAYER_COUNT; ++_i18) {
                  this._layerList.push(null);
                }
              }

              // Ensure device is created
              if (deviceManager.gfxDevice) {
                // rebuild
                this._buildImp();
              }
            }
          }
        }, {
          key: "effectAsset",
          get: function get() {
            return this._effectAsset;
          }

          /**
           * @en Receive shadow
           * @zh 是否接受阴影
           */,
          set: function set(value) {
            if (this._effectAsset === value) {
              return;
            }
            this._effectAsset = value;
            for (var i = 0; i < this._blocks.length; ++i) {
              this._blocks[i]._invalidMaterial();
            }
          }
        }, {
          key: "receiveShadow",
          get: function get() {
            return this._receiveShadow;
          },
          set: function set(val) {
            this._receiveShadow = val;
            for (var i = 0; i < this._blocks.length; i++) {
              this._blocks[i]._invalidMaterial();
            }
          }

          /**
           * @en Use normal map
           * @zh 是否使用法线贴图
           */
        }, {
          key: "useNormalMap",
          get: function get() {
            return this._useNormalmap;
          },
          set: function set(val) {
            this._useNormalmap = val;
            for (var i = 0; i < this._blocks.length; i++) {
              this._blocks[i]._invalidMaterial();
            }
          }

          /**
           * @en Use pbr material
           * @zh 是否使用物理材质
           */
        }, {
          key: "usePBR",
          get: function get() {
            return this._usePBR;
          },
          set: function set(val) {
            this._usePBR = val;
            for (var i = 0; i < this._blocks.length; i++) {
              this._blocks[i]._invalidMaterial();
            }
          }

          /**
           * @en Enable lod
           * @zh 是否允许lod
           */
        }, {
          key: "lodEnable",
          get: function get() {
            return this._lodEnable;
          },
          set: function set(val) {
            this._lodEnable = val;
            if (this._lodEnable && this._lod === null) {
              this._lod = new TerrainLod();
              if (this._sharedLodIndexBuffer === null) {
                this._sharedLodIndexBuffer = this._createSharedIndexBuffer();
              }

              // rebuild all block
              for (var i = 0; i < this._blocks.length; ++i) {
                this._blocks[i].destroy();
              }
              this._blocks = [];
              for (var j = 0; j < this._blockCount[1]; ++j) {
                for (var _i19 = 0; _i19 < this._blockCount[0]; ++_i19) {
                  this._blocks.push(new TerrainBlock(this, _i19, j));
                }
              }
              for (var _i20 = 0; _i20 < this._blocks.length; ++_i20) {
                this._blocks[_i20].build();
              }
            }
            if (!this._lodEnable) {
              for (var _i21 = 0; _i21 < this._blocks.length; _i21++) {
                this._blocks[_i21]._resetLod();
              }
            }
          }

          /**
           * @en Lod bias
           * @zh Lod偏移距离
           */
        }, {
          key: "LodBias",
          get: function get() {
            return this._lodBias;
          },
          set: function set(val) {
            this._lodBias = val;
          }

          /**
           * @en get terrain size
           * @zh 获得地形大小
           */
        }, {
          key: "size",
          get: function get() {
            var sz = new Size(0, 0);
            sz.width = this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
            sz.height = this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
            return sz;
          }

          /**
           * @en get tile size
           * @zh 获得栅格大小
           */
        }, {
          key: "tileSize",
          get: function get() {
            return this._tileSize;
          }

          /**
           * @en get tile count
           * @zh 获得栅格数量
           */
        }, {
          key: "tileCount",
          get: function get() {
            return [this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY, this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY];
          }

          /**
           * @en get vertex count
           * @zh 获得顶点数量
           */
        }, {
          key: "vertexCount",
          get: function get() {
            var _vertexCount = this.tileCount;
            _vertexCount[0] += 1;
            _vertexCount[1] += 1;
            return _vertexCount;
          }

          /**
           * @en get block count
           * @zh 获得地形块数量
           */
        }, {
          key: "blockCount",
          get: function get() {
            return this._blockCount;
          }

          /**
           * @en get light map size
           * @zh 获得光照图大小
           */
        }, {
          key: "lightMapSize",
          get: function get() {
            return this._lightMapSize;
          }

          /**
           * @en get weight map size
           * @zh 获得权重图大小
           */
        }, {
          key: "weightMapSize",
          get: function get() {
            return this._weightMapSize;
          }

          /**
           * @en get height buffer
           * @zh 获得高度缓存
           */
        }, {
          key: "heights",
          get: function get() {
            return this._heights;
          }

          /**
           * @en get weight buffer
           * @zh 获得权重缓存
           */
        }, {
          key: "weights",
          get: function get() {
            return this._weights;
          }

          /**
           * @en check valid
           * @zh 检测是否有效
           */
        }, {
          key: "valid",
          get: function get() {
            return this._blocks.length > 0;
          }

          /**
           * @en get terrain info
           * @zh 获得地形信息
           */
        }, {
          key: "info",
          get: function get() {
            var ti = new TerrainInfo();
            ti.tileSize = this.tileSize;
            ti.blockCount[0] = this.blockCount[0];
            ti.blockCount[1] = this.blockCount[1];
            ti.weightMapSize = this.weightMapSize;
            ti.lightMapSize = this.lightMapSize;
            return ti;
          }
        }]);
        return Terrain;
      }(Component), (_initializer15 = _applyDecoratedInitializer(_class13.prototype, "__asset", [_dec6, serializable, disallowAnimation], function () {
        return null;
      }), _initializer16 = _applyDecoratedInitializer(_class13.prototype, "_effectAsset", [_dec7, serializable, disallowAnimation, _dec8], function () {
        return null;
      }), _initializer17 = _applyDecoratedInitializer(_class13.prototype, "_lightmapInfos", [_dec9, serializable, disallowAnimation], function () {
        return [];
      }), _initializer18 = _applyDecoratedInitializer(_class13.prototype, "_receiveShadow", [serializable, disallowAnimation], function () {
        return false;
      }), _initializer19 = _applyDecoratedInitializer(_class13.prototype, "_useNormalmap", [serializable, disallowAnimation], function () {
        return false;
      }), _initializer20 = _applyDecoratedInitializer(_class13.prototype, "_usePBR", [serializable, disallowAnimation], function () {
        return false;
      }), _initializer21 = _applyDecoratedInitializer(_class13.prototype, "_lodEnable", [serializable, disallowAnimation], function () {
        return false;
      }), _initializer22 = _applyDecoratedInitializer(_class13.prototype, "_lodBias", [_dec10, serializable, disallowAnimation], function () {
        return 0;
      }), _applyDecoratedDescriptor(_class13.prototype, "_asset", [_dec11, _dec12], Object.getOwnPropertyDescriptor(_class13.prototype, "_asset"), _class13.prototype), _applyDecoratedDescriptor(_class13.prototype, "effectAsset", [_dec13, _dec14], Object.getOwnPropertyDescriptor(_class13.prototype, "effectAsset"), _class13.prototype), _applyDecoratedDescriptor(_class13.prototype, "receiveShadow", [editable], Object.getOwnPropertyDescriptor(_class13.prototype, "receiveShadow"), _class13.prototype), _applyDecoratedDescriptor(_class13.prototype, "useNormalMap", [editable], Object.getOwnPropertyDescriptor(_class13.prototype, "useNormalMap"), _class13.prototype), _applyDecoratedDescriptor(_class13.prototype, "usePBR", [editable], Object.getOwnPropertyDescriptor(_class13.prototype, "usePBR"), _class13.prototype), _applyDecoratedDescriptor(_class13.prototype, "lodEnable", [editable], Object.getOwnPropertyDescriptor(_class13.prototype, "lodEnable"), _class13.prototype), _applyDecoratedDescriptor(_class13.prototype, "LodBias", [editable], Object.getOwnPropertyDescriptor(_class13.prototype, "LodBias"), _class13.prototype), _applyDecoratedDescriptor(_class13.prototype, "info", [_dec15], Object.getOwnPropertyDescriptor(_class13.prototype, "info"), _class13.prototype)), _class13)) || _class12) || _class12) || _class12) || _class12));
    }
  };
});