System.register("q-bundled:///fs/cocos/terrain/terrain.js", ["../core/data/decorators/index.js", "../../../virtual/internal%253Aconstants.js", "../asset/asset-manager/index.js", "../misc/model-renderer.js", "../asset/assets/index.js", "../asset/assets/asset-enum.js", "../asset/assets/material.js", "../asset/assets/rendering-sub-mesh.js", "../scene-graph/component.js", "../core/data/object.js", "../game/director.js", "../gfx/index.js", "../core/math/index.js", "../render-scene/index.js", "../core/global-exports.js", "./terrain-lod.js", "./terrain-asset.js", "../core/index.js", "../rendering/index.js", "../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, disallowMultiple, executeInEditMode, help, visible, type, serializable, editable, disallowAnimation, EDITOR, builtinResMgr, ModelRenderer, EffectAsset, Texture2D, Filter, PixelFormat, WrapMode, Material, RenderingSubMesh, Component, CCObject, isValid, director, AttributeName, BufferUsageBit, Format, MemoryUsageBit, PrimitiveMode, Attribute, BufferInfo, deviceManager, clamp, Rect, Size, Vec2, Vec3, Vec4, scene, legacyCC, TerrainLod, TerrainLodKey, TERRAIN_LOD_LEVELS, TERRAIN_LOD_MAX_DISTANCE, TerrainAsset, TerrainLayerInfo, TERRAIN_HEIGHT_BASE, TERRAIN_HEIGHT_FACTORY, TERRAIN_BLOCK_TILE_COMPLEXITY, TERRAIN_BLOCK_VERTEX_SIZE, TERRAIN_BLOCK_VERTEX_COMPLEXITY, TERRAIN_MAX_LAYER_COUNT, TERRAIN_HEIGHT_FMIN, TERRAIN_HEIGHT_FMAX, TERRAIN_MAX_BLEND_LAYERS, TERRAIN_DATA_VERSION5, CCFloat, PipelineEventType, MobilityMode, Node, TerrainRenderable, TerrainBlock, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _dec2, _class4, _class5, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _dec3, _class8, _class9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class12, _class13, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _initializer22, TERRAIN_EFFECT_UUID, TerrainInfo, TerrainLayer, TerrainBlockLightmapInfo, Terrain;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  _export("TerrainBlock", void 0);
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
      _export("TerrainInfo", TerrainInfo = (_dec = ccclass('cc.TerrainInfo'), _dec(_class = (_class2 = class TerrainInfo {
        constructor() {
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
        /**
         * @en terrain size
         * @zh 地形大小
         */
        get size() {
          const sz = new Size(0, 0);
          sz.width = this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
          sz.height = this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
          return sz;
        }

        /**
         * @en tile count
         * @zh 栅格数量
         */
        get tileCount() {
          const _tileCount = [0, 0];
          _tileCount[0] = this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY;
          _tileCount[1] = this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY;
          return _tileCount;
        }

        /**
         * @en vertex count
         * @zh 顶点数量
         */
        get vertexCount() {
          const _vertexCount = this.tileCount;
          _vertexCount[0] += 1;
          _vertexCount[1] += 1;
          return _vertexCount;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "tileSize", [serializable, editable], function () {
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
      _export("TerrainLayer", TerrainLayer = (_dec2 = ccclass('cc.TerrainLayer'), _dec2(_class4 = (_class5 = class TerrainLayer {
        constructor() {
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
        }
        /* [0, 1] */
      }, (_initializer5 = _applyDecoratedInitializer(_class5.prototype, "detailMap", [serializable, editable], function () {
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
      TerrainRenderable = class TerrainRenderable extends ModelRenderer {
        constructor(...args) {
          super(...args);
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._model = null;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._meshData = null;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._brushPass = null;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._brushMaterial = null;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._currentMaterial = null;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._currentMaterialLayers = 0;
          /**
           * @engineInternal
           */
          this._lightmap = null;
        }
        destroy() {
          // this._invalidMaterial();
          if (this._model != null) {
            legacyCC.director.root.destroyModel(this._model);
            this._model = null;
          }
          return super.destroy();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _destroyModel() {
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
         */
        _invalidMaterial() {
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
         */
        _updateMaterial(block, init) {
          if (this._meshData == null || this._model == null) {
            return false;
          }
          const nLayers = block.getMaxLayer();
          if (this._currentMaterial == null || nLayers !== this._currentMaterialLayers) {
            this._currentMaterial = new Material();
            this._currentMaterial.initialize({
              effectAsset: block.getTerrain().getEffectAsset(),
              defines: block._getMaterialDefines(nLayers)
            });
            if (this._brushMaterial !== null) {
              // Create brush material instance, avoid being destroyed by material gc
              const brushMaterialInstance = new Material();
              brushMaterialInstance.copy(this._brushMaterial);
              this._brushPass = null;
              if (brushMaterialInstance.passes !== null && brushMaterialInstance.passes.length > 0) {
                this._brushPass = brushMaterialInstance.passes[0];
                const passes = this._currentMaterial.passes;
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
         */
        _updateLightingmap(texture, uvParam) {
          if (this._model == null) {
            return;
          }
          this._lightmap = texture;
          this._updateReceiveDirLight();
          this._model.updateLightingmap(texture, uvParam);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _onMaterialModified(idx, mtl) {
          if (this._model == null) {
            return;
          }
          this._onRebuildPSO(idx, mtl || this._getBuiltinMaterial());
        }

        /**
         * @engineInternal
         */
        _onRebuildPSO(idx, material) {
          if (this._model) {
            this._model.setSubModelMaterial(idx, material);
          }
        }
        _clearMaterials() {
          if (this._model == null) {
            return;
          }
          this._onMaterialModified(0, null);
        }
        _onUpdateReceiveDirLight(visibility, forceClose = false) {
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
        }
        _updateReceiveDirLight() {
          const scene = this.node.scene;
          if (!scene || !scene.renderScene) {
            return;
          }
          const mainLight = scene.renderScene.mainLight;
          if (!mainLight) {
            return;
          }
          const visibility = mainLight.visibility;
          if (!mainLight.node) {
            return;
          }
          if (mainLight.node.mobility === MobilityMode.Static && this._lightmap) {
            this._onUpdateReceiveDirLight(visibility, true);
          } else {
            this._onUpdateReceiveDirLight(visibility);
          }
        }
        _getBuiltinMaterial() {
          return builtinResMgr.get('missing-material');
        }
      };
      /**
       * @en Terrain block light map info
       * @zh 地形块光照图信息
       */
      _export("TerrainBlockLightmapInfo", TerrainBlockLightmapInfo = (_dec3 = ccclass('cc.TerrainBlockLightmapInfo'), _dec3(_class8 = (_class9 = class TerrainBlockLightmapInfo {
        constructor() {
          this.texture = _initializer10 && _initializer10();
          this.UOff = _initializer11 && _initializer11();
          this.VOff = _initializer12 && _initializer12();
          this.UScale = _initializer13 && _initializer13();
          this.VScale = _initializer14 && _initializer14();
        }
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
      _export("TerrainBlock", TerrainBlock = class TerrainBlock {
        constructor(t, i, j) {
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
        build() {
          const gfxDevice = director.root.device;

          // vertex buffer
          const vertexData = new Float32Array(TERRAIN_BLOCK_VERTEX_SIZE * TERRAIN_BLOCK_VERTEX_COMPLEXITY * TERRAIN_BLOCK_VERTEX_COMPLEXITY);
          this._buildVertexData(vertexData);
          const vertexBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, TERRAIN_BLOCK_VERTEX_SIZE * Float32Array.BYTES_PER_ELEMENT * TERRAIN_BLOCK_VERTEX_COMPLEXITY * TERRAIN_BLOCK_VERTEX_COMPLEXITY, TERRAIN_BLOCK_VERTEX_SIZE * Float32Array.BYTES_PER_ELEMENT));
          vertexBuffer.update(vertexData);

          // build bounding box
          this._buildBoundingBox();

          // initialize renderable
          const gfxAttributes = [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_NORMAL, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RG32F)];
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
        }
        rebuild() {
          this._updateHeight();
          this._updateWeightMap();
          this._renderable._invalidMaterial();
          this._updateMaterial(false);
        }
        destroy() {
          this.visible = false;
          this._renderable._destroyModel();
          if (this._node != null && this._node.isValid) {
            this._node.destroy();
          }
          if (this._weightMap != null) {
            this._weightMap.destroy();
          }
        }
        update() {
          this._updateMaterial(false);
          if (this.lightmap !== this._renderable._lightmap) {
            this._renderable._updateLightingmap(this.lightmap, this.lightmapUVParam);
          }
          const useNormalMap = this._terrain.useNormalMap;
          const usePBR = this._terrain.usePBR;

          // eslint-disable-next-line arrow-body-style
          const getDetailTex = layer => {
            return layer !== null ? layer.detailMap : null;
          };
          const getNormalTex = layer => {
            let normalTex = layer !== null ? layer.normalMap : null;
            if (normalTex === null) {
              normalTex = builtinResMgr.get('normal-texture');
            }
            return normalTex;
          };
          const mtl = this._renderable._currentMaterial;
          if (mtl !== null) {
            const nLayers = this.getMaxLayer();
            const uvScale = new Vec4(1, 1, 1, 1);
            const roughness = new Vec4(1, 1, 1, 1);
            const metallic = new Vec4(0, 0, 0, 0);
            if (nLayers === 0) {
              if (this.layers[0] !== -1) {
                const l0 = this._terrain.getLayer(this.layers[0]);
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
              const l0 = this._terrain.getLayer(this.layers[0]);
              const l1 = this._terrain.getLayer(this.layers[1]);
              if (l0 !== null) {
                uvScale.x = 1.0 / l0.tileSize;
                roughness.x = l0.roughness;
                metallic.x = l0.metallic;
              }
              if (l1 !== null) {
                uvScale.y = 1.0 / l1.tileSize;
                roughness.y = l1.roughness;
                metallic.y = l1.metallic;
              }
              mtl.setProperty('weightMap', this._weightMap);
              mtl.setProperty('detailMap0', getDetailTex(l0));
              mtl.setProperty('detailMap1', getDetailTex(l1));
              if (useNormalMap) {
                mtl.setProperty('normalMap0', getNormalTex(l0));
                mtl.setProperty('normalMap1', getNormalTex(l1));
              }
            } else if (nLayers === 2) {
              const l0 = this._terrain.getLayer(this.layers[0]);
              const l1 = this._terrain.getLayer(this.layers[1]);
              const l2 = this._terrain.getLayer(this.layers[2]);
              if (l0 !== null) {
                uvScale.x = 1.0 / l0.tileSize;
                roughness.x = l0.roughness;
                metallic.x = l0.metallic;
              }
              if (l1 !== null) {
                uvScale.y = 1.0 / l1.tileSize;
                roughness.y = l1.roughness;
                metallic.y = l1.metallic;
              }
              if (l2 !== null) {
                uvScale.z = 1.0 / l2.tileSize;
                roughness.z = l2.roughness;
                metallic.z = l2.metallic;
              }
              mtl.setProperty('weightMap', this._weightMap);
              mtl.setProperty('detailMap0', getDetailTex(l0));
              mtl.setProperty('detailMap1', getDetailTex(l1));
              mtl.setProperty('detailMap2', getDetailTex(l2));
              if (useNormalMap) {
                mtl.setProperty('normalMap0', getNormalTex(l0));
                mtl.setProperty('normalMap1', getNormalTex(l1));
                mtl.setProperty('normalMap2', getNormalTex(l2));
              }
            } else if (nLayers === 3) {
              const l0 = this._terrain.getLayer(this.layers[0]);
              const l1 = this._terrain.getLayer(this.layers[1]);
              const l2 = this._terrain.getLayer(this.layers[2]);
              const l3 = this._terrain.getLayer(this.layers[3]);
              if (l0 !== null) {
                uvScale.x = 1.0 / l0.tileSize;
                roughness.x = l0.roughness;
                metallic.x = l0.metallic;
              }
              if (l1 !== null) {
                uvScale.y = 1.0 / l1.tileSize;
                roughness.y = l1.roughness;
                metallic.y = l1.metallic;
              }
              if (l2 !== null) {
                uvScale.z = 1.0 / l2.tileSize;
                roughness.z = l2.roughness;
                metallic.z = l2.metallic;
              }
              if (l3 !== null) {
                uvScale.w = 1.0 / l3.tileSize;
                roughness.w = l3.roughness;
                metallic.w = l3.metallic;
              }
              mtl.setProperty('weightMap', this._weightMap);
              mtl.setProperty('detailMap0', getDetailTex(l0));
              mtl.setProperty('detailMap1', getDetailTex(l1));
              mtl.setProperty('detailMap2', getDetailTex(l2));
              mtl.setProperty('detailMap3', getDetailTex(l3));
              if (useNormalMap) {
                mtl.setProperty('normalMap0', getNormalTex(l0));
                mtl.setProperty('normalMap1', getNormalTex(l1));
                mtl.setProperty('normalMap2', getNormalTex(l2));
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
         */
        _buildLodInfo() {
          const vertexData = new Float32Array(TERRAIN_BLOCK_VERTEX_SIZE * TERRAIN_BLOCK_VERTEX_COMPLEXITY * TERRAIN_BLOCK_VERTEX_COMPLEXITY);
          this._buildVertexData(vertexData);
          // update lod
          this._updateLodBuffer(vertexData);
          // update index buffer
          this._updateIndexBuffer();
        }

        /**
         * @engineInternal
         */
        _updateLevel(camPos) {
          const maxLevel = TERRAIN_LOD_LEVELS - 1;
          const bbMin = new Vec3();
          const bbMax = new Vec3();
          Vec3.add(bbMin, this._bbMin, this._terrain.node.getWorldPosition());
          Vec3.add(bbMax, this._bbMax, this._terrain.node.getWorldPosition());
          const d1 = Vec3.distance(bbMin, camPos);
          const d2 = Vec3.distance(bbMax, camPos);
          let d = Math.min(d1, d2);
          d -= this._terrain.LodBias;
          this._lodLevel = 0;
          while (this._lodLevel < maxLevel) {
            const ld1 = this._LevelDistances[this._lodLevel + 1];
            if (d <= ld1) {
              break;
            }
            ++this._lodLevel;
          }
        }
        setBrushMaterial(mtl) {
          if (this._renderable._brushMaterial !== mtl) {
            this._renderable._invalidMaterial();
            this._renderable._brushMaterial = mtl;
          }
        }
        _getBrushMaterial() {
          return this._renderable ? this._renderable._brushMaterial : null;
        }
        _getBrushPass() {
          return this._renderable ? this._renderable._brushPass : null;
        }

        /**
         * @en valid
         * @zh 是否有效
         */
        get valid() {
          if (this._terrain === null) {
            return false;
          }
          const blocks = this._terrain.getBlocks();
          for (let i = 0; i < blocks.length; ++i) {
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
        get material() {
          return this._renderable ? this._renderable._currentMaterial : null;
        }

        /**
         * @en get layers
         * @zh 获得纹理层索引
         */
        get layers() {
          return this._terrain.getBlockLayers(this._index[0], this._index[1]);
        }

        /**
         * @en get weight map
         * @zh 获得权重图
         */
        get weightmap() {
          return this._weightMap;
        }

        /**
         * @en get light map
         * @zh 获得光照图
         */
        get lightmap() {
          return this._lightmapInfo ? this._lightmapInfo.texture : null;
        }

        /**
         * @en get light map uv parameter
         * @zh 获得光照图纹理坐标参数
         */
        get lightmapUVParam() {
          if (this._lightmapInfo != null) {
            return new Vec4(this._lightmapInfo.UOff, this._lightmapInfo.VOff, this._lightmapInfo.UScale, this._lightmapInfo.VScale);
          }
          return new Vec4(0, 0, 0, 0);
        }

        /**
         * @zh 地形块的可见性
         * @en The visibility of the block
         */
        set visible(val) {
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
        get visible() {
          if (this._renderable._model !== null) {
            return this._renderable._model.scene !== null;
          }
          return false;
        }

        /**
         * @en get terrain owner
         * @zh 获得地形对象
         */
        getTerrain() {
          return this._terrain;
        }

        /**
         * @en get index
         * @zh 获得地形索引
         */
        getIndex() {
          return this._index;
        }

        /**
         * @en get rect bound
         * @zh 获得地形矩形包围体
         */
        getRect() {
          const rect = new Rect();
          rect.x = this._index[0] * TERRAIN_BLOCK_TILE_COMPLEXITY;
          rect.y = this._index[1] * TERRAIN_BLOCK_TILE_COMPLEXITY;
          rect.width = TERRAIN_BLOCK_TILE_COMPLEXITY;
          rect.height = TERRAIN_BLOCK_TILE_COMPLEXITY;
          return rect;
        }

        /**
         * @en set layer
         * @zh 设置纹理层
         */
        setLayer(index, layerId) {
          if (this.layers[index] !== layerId) {
            this._terrain.setBlockLayer(this._index[0], this._index[1], index, layerId);
            this._renderable._invalidMaterial();
            this._updateMaterial(false);
          }
        }

        /**
         * @en get layer
         * @zh 获得纹理层
         */
        getLayer(index) {
          return this.layers[index];
        }

        /**
         * @en get max layer index
         * @zh 获得最大纹理索引
         */
        getMaxLayer() {
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
        }
        _getMaterialDefines(nLayers) {
          let lightmapMacroValue = 1; /*static*/
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
        }

        _invalidMaterial() {
          this._renderable._invalidMaterial();
        }
        _updateMaterial(init) {
          if (this._renderable._updateMaterial(this, init)) {
            // Need set wrap mode clamp to border
            if (this.lightmap !== null) {
              this.lightmap.setWrapMode(WrapMode.CLAMP_TO_BORDER, WrapMode.CLAMP_TO_BORDER);
            }
            this._renderable._updateLightingmap(this.lightmap, this.lightmapUVParam);
          }
        }
        _updateHeight() {
          if (this._renderable._meshData == null) {
            return;
          }
          const vertexData = new Float32Array(TERRAIN_BLOCK_VERTEX_SIZE * TERRAIN_BLOCK_VERTEX_COMPLEXITY * TERRAIN_BLOCK_VERTEX_COMPLEXITY);
          this._buildVertexData(vertexData);
          this._renderable._meshData.vertexBuffers[0].update(vertexData);
          this._buildBoundingBox();
          this._renderable._model.createBoundingShape(this._bbMin, this._bbMax);
          this._renderable._model.updateWorldBound();
          this._updateLodBuffer(vertexData);
          this._updateIndexBuffer();
        }
        _updateWeightMap() {
          const nLayers = this.getMaxLayer();
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
          const weightData = new Uint8Array(this._terrain.weightMapSize * this._terrain.weightMapSize * 4);
          let weightIndex = 0;
          for (let j = 0; j < this._terrain.weightMapSize; ++j) {
            for (let i = 0; i < this._terrain.weightMapSize; ++i) {
              const x = this._index[0] * this._terrain.weightMapSize + i;
              const y = this._index[1] * this._terrain.weightMapSize + j;
              const w = this._terrain.getWeight(x, y);
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
         */
        _updateLightmap(info) {
          this._lightmapInfo = info;
          this._invalidMaterial();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _updateLod() {
          const key = new TerrainLodKey();
          key.level = this._lodLevel;
          key.north = this._lodLevel;
          key.south = this._lodLevel;
          key.west = this._lodLevel;
          key.east = this._lodLevel;
          if (this._index[0] > 0) {
            const n = this.getTerrain().getBlock(this._index[0] - 1, this._index[1]);
            key.west = n._lodLevel;
            if (key.west < this._lodLevel) {
              key.west = this._lodLevel;
            }
          }
          if (this._index[0] < this._terrain.info.blockCount[0] - 1) {
            const n = this.getTerrain().getBlock(this._index[0] + 1, this._index[1]);
            key.east = n._lodLevel;
            if (key.east < this._lodLevel) {
              key.east = this._lodLevel;
            }
          }
          if (this._index[1] > 0) {
            const n = this.getTerrain().getBlock(this._index[0], this._index[1] - 1);
            key.north = n._lodLevel;
            if (key.north < this._lodLevel) {
              key.north = this._lodLevel;
            }
          }
          if (this._index[1] < this._terrain.info.blockCount[1] - 1) {
            const n = this.getTerrain().getBlock(this._index[0], this._index[1] + 1);
            key.south = n._lodLevel;
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
         */
        _resetLod() {
          const key = new TerrainLodKey();
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
         */
        _updateIndexBuffer() {
          if (this._renderable._meshData === null) {
            return;
          }
          if (this._renderable._model === null) {
            return;
          }
          if (this._renderable._model.subModels.length === 0) {
            return;
          }
          const indexData = this._terrain._getIndexData(this._lodKey);
          if (indexData === null) {
            return;
          }
          const model = this._renderable._model.subModels[0];
          model.inputAssembler.firstIndex = indexData.start;
          model.inputAssembler.indexCount = indexData.size;
        }
        _getHeight(x, y, verts) {
          const idx = TERRAIN_BLOCK_VERTEX_COMPLEXITY * y + x;
          return verts[idx * TERRAIN_BLOCK_VERTEX_SIZE + 1];
        }
        _updateLodBuffer(vertices) {
          this._lodLevel = 0;
          this._lodKey = new TerrainLodKey();
          this._calcErrorMetrics(vertices);
          this._calcLevelDistances(vertices);
        }
        _calcErrorMetrics(vertices) {
          this._errorMetrics[0] = 0;
          for (let i = 1; i < TERRAIN_LOD_LEVELS; ++i) {
            this._errorMetrics[i] = this._calcErrorMetric(i, vertices);
          }
          for (let i = 2; i < TERRAIN_LOD_LEVELS; ++i) {
            this._errorMetrics[i] = Math.max(this._errorMetrics[i], this._errorMetrics[i - 1]);
          }
        }
        _calcErrorMetric(level, vertices) {
          let err = 0.0;
          const step = 1 << level;
          const xSectionVertices = TERRAIN_BLOCK_VERTEX_COMPLEXITY;
          const ySectionVertices = TERRAIN_BLOCK_VERTEX_COMPLEXITY;
          const xSides = xSectionVertices - 1 >> level;
          const ySides = ySectionVertices - 1 >> level;
          for (let y = 0; y < ySectionVertices; y += step) {
            for (let x = 0; x < xSides; ++x) {
              const x0 = x * step;
              const x1 = x0 + step;
              const xm = (x1 + x0) / 2;
              const h0 = this._getHeight(x0, y, vertices);
              const h1 = this._getHeight(x1, y, vertices);
              const hm = this._getHeight(xm, y, vertices);
              const hmi = (h0 + h1) / 2;
              const delta = Math.abs(hm - hmi);
              err = Math.max(err, delta);
            }
          }
          for (let x = 0; x < xSectionVertices; x += step) {
            for (let y = 0; y < ySides; ++y) {
              const y0 = y * step;
              const y1 = y0 + step;
              const ym = (y0 + y1) / 2;
              const h0 = this._getHeight(x, y0, vertices);
              const h1 = this._getHeight(x, y1, vertices);
              const hm = this._getHeight(x, ym, vertices);
              const hmi = (h0 + h1) / 2;
              const delta = Math.abs(hm - hmi);
              err = Math.max(err, delta);
            }
          }
          for (let y = 0; y < ySides; ++y) {
            const y0 = y * step;
            const y1 = y0 + step;
            const ym = (y0 + y1) / 2;
            for (let x = 0; x < xSides; ++x) {
              const x0 = x * step;
              const x1 = x0 + step;
              const xm = (x0 + x1) / 2;
              const h0 = this._getHeight(x0, y0, vertices);
              const h1 = this._getHeight(x1, y1, vertices);
              const hm = this._getHeight(xm, ym, vertices);
              const hmi = (h0 + h1) / 2;
              const delta = Math.abs(hm - hmi);
              err = Math.max(err, delta);
            }
          }
          return err;
        }
        _calcLevelDistances(vertices) {
          const pixelErr = 4;
          const resolution = 768;
          const c = 1.0 / (2 * pixelErr / resolution);
          for (let i = 1; i < TERRAIN_LOD_LEVELS; ++i) {
            const e = this._errorMetrics[i];
            const d = e * c;
            this._LevelDistances[i] = d;
          }
        }
        _buildVertexData(vertexData) {
          let index = 0;
          for (let j = 0; j < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++j) {
            for (let i = 0; i < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++i) {
              const x = this._index[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + i;
              const y = this._index[1] * TERRAIN_BLOCK_TILE_COMPLEXITY + j;
              const position = this._terrain.getPosition(x, y);
              const normal = this._terrain.getNormal(x, y);
              const uv = new Vec2(i / TERRAIN_BLOCK_TILE_COMPLEXITY, j / TERRAIN_BLOCK_TILE_COMPLEXITY);
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
        }
        _buildBoundingBox() {
          this._bbMin.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          this._bbMax.set(Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE);
          for (let j = 0; j < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++j) {
            for (let i = 0; i < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++i) {
              const x = this._index[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + i;
              const y = this._index[1] * TERRAIN_BLOCK_TILE_COMPLEXITY + j;
              const position = this._terrain.getPosition(x, y);
              Vec3.min(this._bbMin, this._bbMin, position);
              Vec3.max(this._bbMax, this._bbMax, position);
            }
          }
        }
      });
      /**
       * @en Terrain
       * @zh 地形组件
       */
      _export("Terrain", Terrain = (_dec4 = ccclass('cc.Terrain'), _dec5 = help('i18n:cc.Terrain'), _dec6 = type(TerrainAsset), _dec7 = type(EffectAsset), _dec8 = visible(false), _dec9 = type(TerrainBlockLightmapInfo), _dec10 = type(CCFloat), _dec11 = type(TerrainAsset), _dec12 = visible(true), _dec13 = type(EffectAsset), _dec14 = visible(true), _dec15 = type(TerrainInfo), _dec4(_class12 = _dec5(_class12 = executeInEditMode(_class12 = disallowMultiple(_class12 = (_class13 = class Terrain extends Component {
        constructor() {
          super();

          // initialize layers
          this.__asset = _initializer15 && _initializer15();
          this._effectAsset = _initializer16 && _initializer16();
          this._lightmapInfos = _initializer17 && _initializer17();
          this._receiveShadow = _initializer18 && _initializer18();
          this._useNormalmap = _initializer19 && _initializer19();
          this._usePBR = _initializer20 && _initializer20();
          this._lodEnable = _initializer21 && _initializer21();
          this._lodBias = _initializer22 && _initializer22();
          // when the terrain undo, __asset is changed by serialize, but the internal block is created by last asset, here saved last asset
          this._buitinAsset = null;
          this._tileSize = 1;
          this._blockCount = [1, 1];
          this._weightMapSize = 128;
          this._lightMapSize = 128;
          this._heights = new Uint16Array();
          this._weights = new Uint8Array();
          this._normals = new Float32Array();
          this._layerList = [];
          this._layerBuffer = [];
          this._blocks = [];
          this._lod = null;
          this._sharedIndexBuffer = null;
          this._sharedLodIndexBuffer = null;
          for (let i = 0; i < TERRAIN_MAX_LAYER_COUNT; ++i) {
            this._layerList.push(null);
          }
        }
        set _asset(value) {
          this.__asset = value;
          if (this._buitinAsset !== this.__asset) {
            this._buitinAsset = this.__asset;

            // destroy all block
            for (let i = 0; i < this._blocks.length; ++i) {
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
              for (let i = 0; i < TERRAIN_MAX_LAYER_COUNT; ++i) {
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

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        get _asset() {
          return this.__asset;
        }

        /**
         * @en Terrain effect asset
         * @zh 地形特效资源
         */
        set effectAsset(value) {
          if (this._effectAsset === value) {
            return;
          }
          this._effectAsset = value;
          for (let i = 0; i < this._blocks.length; ++i) {
            this._blocks[i]._invalidMaterial();
          }
        }
        get effectAsset() {
          return this._effectAsset;
        }

        /**
         * @en Receive shadow
         * @zh 是否接受阴影
         */
        get receiveShadow() {
          return this._receiveShadow;
        }
        set receiveShadow(val) {
          this._receiveShadow = val;
          for (let i = 0; i < this._blocks.length; i++) {
            this._blocks[i]._invalidMaterial();
          }
        }

        /**
         * @en Use normal map
         * @zh 是否使用法线贴图
         */
        get useNormalMap() {
          return this._useNormalmap;
        }
        set useNormalMap(val) {
          this._useNormalmap = val;
          for (let i = 0; i < this._blocks.length; i++) {
            this._blocks[i]._invalidMaterial();
          }
        }

        /**
         * @en Use pbr material
         * @zh 是否使用物理材质
         */
        get usePBR() {
          return this._usePBR;
        }
        set usePBR(val) {
          this._usePBR = val;
          for (let i = 0; i < this._blocks.length; i++) {
            this._blocks[i]._invalidMaterial();
          }
        }

        /**
         * @en Enable lod
         * @zh 是否允许lod
         */
        get lodEnable() {
          return this._lodEnable;
        }
        set lodEnable(val) {
          this._lodEnable = val;
          if (this._lodEnable && this._lod === null) {
            this._lod = new TerrainLod();
            if (this._sharedLodIndexBuffer === null) {
              this._sharedLodIndexBuffer = this._createSharedIndexBuffer();
            }

            // rebuild all block
            for (let i = 0; i < this._blocks.length; ++i) {
              this._blocks[i].destroy();
            }
            this._blocks = [];
            for (let j = 0; j < this._blockCount[1]; ++j) {
              for (let i = 0; i < this._blockCount[0]; ++i) {
                this._blocks.push(new TerrainBlock(this, i, j));
              }
            }
            for (let i = 0; i < this._blocks.length; ++i) {
              this._blocks[i].build();
            }
          }
          if (!this._lodEnable) {
            for (let i = 0; i < this._blocks.length; i++) {
              this._blocks[i]._resetLod();
            }
          }
        }

        /**
         * @en Lod bias
         * @zh Lod偏移距离
         */
        get LodBias() {
          return this._lodBias;
        }
        set LodBias(val) {
          this._lodBias = val;
        }

        /**
         * @en get terrain size
         * @zh 获得地形大小
         */
        get size() {
          const sz = new Size(0, 0);
          sz.width = this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
          sz.height = this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
          return sz;
        }

        /**
         * @en get tile size
         * @zh 获得栅格大小
         */
        get tileSize() {
          return this._tileSize;
        }

        /**
         * @en get tile count
         * @zh 获得栅格数量
         */
        get tileCount() {
          return [this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY, this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY];
        }

        /**
         * @en get vertex count
         * @zh 获得顶点数量
         */
        get vertexCount() {
          const _vertexCount = this.tileCount;
          _vertexCount[0] += 1;
          _vertexCount[1] += 1;
          return _vertexCount;
        }

        /**
         * @en get block count
         * @zh 获得地形块数量
         */
        get blockCount() {
          return this._blockCount;
        }

        /**
         * @en get light map size
         * @zh 获得光照图大小
         */
        get lightMapSize() {
          return this._lightMapSize;
        }

        /**
         * @en get weight map size
         * @zh 获得权重图大小
         */
        get weightMapSize() {
          return this._weightMapSize;
        }

        /**
         * @en get height buffer
         * @zh 获得高度缓存
         */
        get heights() {
          return this._heights;
        }

        /**
         * @en get weight buffer
         * @zh 获得权重缓存
         */
        get weights() {
          return this._weights;
        }

        /**
         * @en check valid
         * @zh 检测是否有效
         */
        get valid() {
          return this._blocks.length > 0;
        }

        /**
         * @en get terrain info
         * @zh 获得地形信息
         */
        get info() {
          const ti = new TerrainInfo();
          ti.tileSize = this.tileSize;
          ti.blockCount[0] = this.blockCount[0];
          ti.blockCount[1] = this.blockCount[1];
          ti.weightMapSize = this.weightMapSize;
          ti.lightMapSize = this.lightMapSize;
          return ti;
        }

        /**
         * @en build
         * @zh 构建地形
         */
        build(info) {
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
         */
        rebuild(info) {
          for (let i = 0; i < this._blocks.length; ++i) {
            this._blocks[i].destroy();
          }
          this._blocks = [];

          // reset lightmap
          this._resetLightmap(false);

          // build layer buffer
          this._rebuildLayerBuffer(info);

          // build heights and normals
          const heightsChanged = this._rebuildHeights(info);

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
          for (let j = 0; j < this._blockCount[1]; ++j) {
            for (let i = 0; i < this._blockCount[0]; ++i) {
              this._blocks.push(new TerrainBlock(this, i, j));
            }
          }
          for (let i = 0; i < this._blocks.length; ++i) {
            this._blocks[i].build();
          }
        }

        /**
         * @en import height field
         * @zh 导入高度图
         */
        importHeightField(hf, heightScale) {
          let index = 0;
          for (let j = 0; j < this.vertexCount[1]; ++j) {
            for (let i = 0; i < this.vertexCount[0]; ++i) {
              const u = i / this.tileCount[0];
              const v = j / this.tileCount[1];
              const h = hf.getAt(u * hf.w, v * hf.h) * heightScale;
              this._heights[index++] = h;
            }
          }
          this._buildNormals();

          // rebuild all blocks
          for (let i = 0; i < this._blocks.length; ++i) {
            this._blocks[i]._updateHeight();
          }
        }

        /**
         * @en export height field
         * @zh 导出高度图
         */
        exportHeightField(hf, heightScale) {
          let index = 0;
          for (let j = 0; j < hf.h; ++j) {
            for (let i = 0; i < hf.w; ++i) {
              const u = i / (hf.w - 1);
              const v = j / (hf.h - 1);
              const x = u * this.size.width;
              const y = v * this.size.height;
              const h = this.getHeightAt(x, y);
              if (h != null) {
                hf.data[index++] = h * heightScale;
              }
            }
          }
        }
        exportAsset() {
          const asset = new TerrainAsset();
          asset.tileSize = this.tileSize;
          asset.blockCount = this.blockCount;
          asset.lightMapSize = this.lightMapSize;
          asset.weightMapSize = this.weightMapSize;
          asset.heights = this.heights;
          asset.weights = this.weights;
          asset.layerBuffer = new Array(this._blocks.length * 4);
          for (let i = 0; i < this._blocks.length; ++i) {
            asset.layerBuffer[i * 4 + 0] = this._blocks[i].layers[0];
            asset.layerBuffer[i * 4 + 1] = this._blocks[i].layers[1];
            asset.layerBuffer[i * 4 + 2] = this._blocks[i].layers[2];
            asset.layerBuffer[i * 4 + 3] = this._blocks[i].layers[3];
          }
          this.exportLayerListToAsset(asset);
          return asset;
        }
        exportLayerListToAsset(asset) {
          asset.layerInfos.length = 0;
          for (let i = 0; i < this._layerList.length; ++i) {
            const temp = this._layerList[i];
            if (temp && temp.detailMap && isValid(temp.detailMap)) {
              const layer = new TerrainLayerInfo();
              layer.slot = i;
              layer.tileSize = temp.tileSize;
              layer.detailMap = temp.detailMap;
              layer.normalMap = temp.normalMap;
              layer.metallic = temp.metallic;
              layer.roughness = temp.roughness;
              asset.layerInfos.push(layer);
            }
          }
        }
        getEffectAsset() {
          if (this._effectAsset === null) {
            return legacyCC.EffectAsset.get(TERRAIN_EFFECT_UUID);
          }
          return this._effectAsset;
        }
        onEnable() {
          if (this._blocks.length === 0) {
            this._buildImp();
          }
          for (let i = 0; i < this._blocks.length; ++i) {
            this._blocks[i].visible = true;
          }
          legacyCC.director.root.pipelineEvent.on(PipelineEventType.RENDER_CAMERA_BEGIN, this.onUpdateFromCamera, this);
        }
        onDisable() {
          legacyCC.director.root.pipelineEvent.off(PipelineEventType.RENDER_CAMERA_BEGIN, this.onUpdateFromCamera, this);
          for (let i = 0; i < this._blocks.length; ++i) {
            this._blocks[i].visible = false;
          }
        }
        onDestroy() {
          for (let i = 0; i < this._blocks.length; ++i) {
            this._blocks[i].destroy();
          }
          this._blocks = [];
          for (let i = 0; i < this._layerList.length; ++i) {
            this._layerList[i] = null;
          }
          if (this._sharedIndexBuffer != null) {
            this._sharedIndexBuffer.destroy();
          }
          if (this._sharedLodIndexBuffer != null) {
            this._sharedLodIndexBuffer.destroy();
          }
        }
        onRestore() {
          this.onEnable();
          this._buildImp(true);
        }
        update(deltaTime) {
          for (let i = 0; i < this._blocks.length; ++i) {
            this._blocks[i].update();
          }
        }
        onUpdateFromCamera(cam) {
          if (!this.lodEnable || this._sharedLodIndexBuffer == null) {
            return;
          }
          if (cam.scene !== this._getRenderScene()) {
            return;
          }
          for (let i = 0; i < this._blocks.length; ++i) {
            this._blocks[i]._updateLevel(cam.position);
          }
          for (let i = 0; i < this._blocks.length; ++i) {
            this._blocks[i]._updateLod();
          }
        }

        /**
         * @en add layer
         * @zh 添加纹理层
         */
        addLayer(layer) {
          for (let i = 0; i < this._layerList.length; ++i) {
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
         */
        setLayer(i, layer) {
          this._layerList[i] = layer;
          if (this._asset) {
            this.exportLayerListToAsset(this._asset);
          }
        }

        /**
         * @en remove layer
         * @zh 移除纹理层
         */
        removeLayer(id) {
          this._layerList[id] = null;
          if (this._asset) {
            this.exportLayerListToAsset(this._asset);
          }
        }

        /**
         * @en get layer
         * @zh 获得纹理层
         */
        getLayer(id) {
          if (id === -1) {
            return null;
          }
          return this._layerList[id];
        }

        /**
         * @en get position
         * @zh 获得地形上的位置
         */
        getPosition(i, j) {
          const x = i * this._tileSize;
          const z = j * this._tileSize;
          const y = this.getHeight(i, j);
          return new Vec3(x, y, z);
        }
        getHeightField() {
          return this._heights;
        }

        /**
         * @en set height
         * @zh 设置地形上的高度
         */
        setHeight(i, j, h) {
          h = clamp(h, TERRAIN_HEIGHT_FMIN, TERRAIN_HEIGHT_FMAX);
          this._heights[j * this.vertexCount[0] + i] = TERRAIN_HEIGHT_BASE + h / TERRAIN_HEIGHT_FACTORY;
          if (EDITOR && this._asset) {
            this._asset.heights[j * this.vertexCount[0] + i] = TERRAIN_HEIGHT_BASE + h / TERRAIN_HEIGHT_FACTORY;
          }
        }

        /**
         * @en get height
         * @zh 获得地形上的高度
         */
        getHeight(i, j) {
          return (this._heights[j * this.vertexCount[0] + i] - TERRAIN_HEIGHT_BASE) * TERRAIN_HEIGHT_FACTORY;
        }

        /**
         * @en set height
         * @zh 设置高度
         */
        getHeightClamp(i, j) {
          i = clamp(i, 0, this.vertexCount[0] - 1);
          j = clamp(j, 0, this.vertexCount[1] - 1);
          return this.getHeight(i, j);
        }

        /**
         * @en get height by point
         * @zh 根据点的坐标获得高度
         */
        getHeightAt(x, y) {
          const fx = x / this.tileSize;
          const fy = y / this.tileSize;
          let ix0 = Math.floor(fx);
          let iz0 = Math.floor(fy);
          let ix1 = ix0 + 1;
          let iz1 = iz0 + 1;
          const dx = fx - ix0;
          const dz = fy - iz0;
          if (ix0 < 0 || ix0 > this.vertexCount[0] - 1 || iz0 < 0 || iz0 > this.vertexCount[1] - 1) {
            return null;
          }
          ix0 = clamp(ix0, 0, this.vertexCount[0] - 1);
          iz0 = clamp(iz0, 0, this.vertexCount[1] - 1);
          ix1 = clamp(ix1, 0, this.vertexCount[0] - 1);
          iz1 = clamp(iz1, 0, this.vertexCount[1] - 1);
          let a = this.getHeight(ix0, iz0);
          const b = this.getHeight(ix1, iz0);
          const c = this.getHeight(ix0, iz1);
          let d = this.getHeight(ix1, iz1);
          const m = (b + c) * 0.5;
          if (dx + dz <= 1.0) {
            d = m + (m - a);
          } else {
            a = m + (m - d);
          }
          const h1 = a * (1.0 - dx) + b * dx;
          const h2 = c * (1.0 - dx) + d * dx;
          const h = h1 * (1.0 - dz) + h2 * dz;
          return h;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _setNormal(i, j, n) {
          const index = j * this.vertexCount[0] + i;
          this._normals[index * 3 + 0] = n.x;
          this._normals[index * 3 + 1] = n.y;
          this._normals[index * 3 + 2] = n.z;
        }

        /**
         * @en get normal
         * @zh 获得法线
         */
        getNormal(i, j) {
          const index = j * this.vertexCount[0] + i;
          const n = new Vec3();
          n.x = this._normals[index * 3 + 0];
          n.y = this._normals[index * 3 + 1];
          n.z = this._normals[index * 3 + 2];
          return n;
        }

        /**
         * @en get normal by point
         * @zh 根据点的坐标获得法线
         */
        getNormalAt(x, y) {
          const fx = x / this.tileSize;
          const fy = y / this.tileSize;
          let ix0 = Math.floor(fx);
          let iz0 = Math.floor(fy);
          let ix1 = ix0 + 1;
          let iz1 = iz0 + 1;
          const dx = fx - ix0;
          const dz = fy - iz0;
          if (ix0 < 0 || ix0 > this.vertexCount[0] - 1 || iz0 < 0 || iz0 > this.vertexCount[1] - 1) {
            return null;
          }
          ix0 = clamp(ix0, 0, this.vertexCount[0] - 1);
          iz0 = clamp(iz0, 0, this.vertexCount[1] - 1);
          ix1 = clamp(ix1, 0, this.vertexCount[0] - 1);
          iz1 = clamp(iz1, 0, this.vertexCount[1] - 1);
          const a = this.getNormal(ix0, iz0);
          const b = this.getNormal(ix1, iz0);
          const c = this.getNormal(ix0, iz1);
          const d = this.getNormal(ix1, iz1);
          const m = new Vec3();
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
          const n1 = new Vec3();
          const n2 = new Vec3();
          const n = new Vec3();
          Vec3.lerp(n1, a, b, dx);
          Vec3.lerp(n2, c, d, dx);
          Vec3.lerp(n, n1, n2, dz);
          return n;
        }

        /**
         * @en set weight
         * @zh 设置权重
         */
        setWeight(i, j, w) {
          const index = j * this._weightMapSize * this._blockCount[0] + i;
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
         */
        getWeight(i, j) {
          const index = j * this._weightMapSize * this._blockCount[0] + i;
          const w = new Vec4();
          w.x = this._weights[index * 4 + 0] / 255.0;
          w.y = this._weights[index * 4 + 1] / 255.0;
          w.z = this._weights[index * 4 + 2] / 255.0;
          w.w = this._weights[index * 4 + 3] / 255.0;
          return w;
        }

        /**
         * @en get normal by point
         * @zh 根据点的坐标获得权重
         */
        getWeightAt(x, y) {
          const uWeightComplexity = this.weightMapSize * this.blockCount[0];
          const vWeightComplexity = this.weightMapSize * this.blockCount[1];
          if (uWeightComplexity === 0 || vWeightComplexity === 0) {
            return null;
          }
          const fx = x / uWeightComplexity;
          const fy = y / vWeightComplexity;
          let ix0 = Math.floor(fx);
          let iz0 = Math.floor(fy);
          let ix1 = ix0 + 1;
          let iz1 = iz0 + 1;
          const dx = fx - ix0;
          const dz = fy - iz0;
          if (ix0 < 0 || ix0 > uWeightComplexity - 1 || iz0 < 0 || iz0 > vWeightComplexity - 1) {
            return null;
          }
          ix0 = clamp(ix0, 0, uWeightComplexity - 1);
          iz0 = clamp(iz0, 0, vWeightComplexity - 1);
          ix1 = clamp(ix1, 0, uWeightComplexity - 1);
          iz1 = clamp(iz1, 0, vWeightComplexity - 1);
          let a = this.getWeight(ix0, iz0);
          const b = this.getWeight(ix1, iz0);
          const c = this.getWeight(ix0, iz1);
          let d = this.getWeight(ix1, iz1);
          const m = new Vec4();
          Vec4.add(m, b, c).multiplyScalar(0.5);
          if (dx + dz <= 1.0) {
            d = new Vec4();
            Vec4.subtract(d, m, a).add(m);
          } else {
            a = new Vec4();
            Vec4.subtract(a, m, d).add(m);
          }
          const n1 = new Vec4();
          const n2 = new Vec4();
          const n = new Vec4();
          Vec4.lerp(n1, a, b, dx);
          Vec4.lerp(n2, c, d, dx);
          Vec4.lerp(n, n1, n2, dz);
          return n;
        }

        /**
         * @en get max weight layer by point
         * @zh 根据点的坐标获得权重最大的纹理层
         */
        getMaxWeightLayerAt(x, y) {
          const uWeightComplexity = this.weightMapSize * this.blockCount[0];
          const vWeightComplexity = this.weightMapSize * this.blockCount[1];
          if (uWeightComplexity === 0 || vWeightComplexity === 0) {
            return null;
          }
          const fx = x / uWeightComplexity;
          const fy = y / vWeightComplexity;
          const ix0 = Math.floor(fx);
          const iz0 = Math.floor(fy);
          if (ix0 < 0 || ix0 > uWeightComplexity - 1 || iz0 < 0 || iz0 > vWeightComplexity - 1) {
            return null;
          }
          const w = this.getWeight(ix0, iz0);
          const bx = Math.floor(x / this.weightMapSize);
          const by = Math.floor(y / this.weightMapSize);
          const block = this.getBlock(bx, by);
          let i = 0;
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
         */
        getBlockLayers(i, j) {
          const layerIndex = (j * this._blockCount[0] + i) * TERRAIN_MAX_BLEND_LAYERS;
          return [this._layerBuffer[layerIndex], this._layerBuffer[layerIndex + 1], this._layerBuffer[layerIndex + 2], this._layerBuffer[layerIndex + 3]];
        }

        /**
         * @en get block layer
         * @zh 获得地形块纹理层
         */
        getBlockLayer(i, j, index) {
          const layerIndex = (j * this._blockCount[0] + i) * TERRAIN_MAX_BLEND_LAYERS;
          return this._layerBuffer[layerIndex + index];
        }

        /**
         * @en set block layer
         * @zh 获得地形块层
         */
        setBlockLayer(i, j, index, layerId) {
          const layerIndex = (j * this._blockCount[0] + i) * TERRAIN_MAX_BLEND_LAYERS;
          this._layerBuffer[layerIndex + index] = layerId;
        }

        /**
         * @en get block
         * @zh 获得地形块对象
         */
        getBlock(i, j) {
          return this._blocks[j * this._blockCount[0] + i];
        }

        /**
         * @en get all blocks
         * @zh 获得地形块缓存
         */
        getBlocks() {
          return this._blocks;
        }

        /**
         * @en ray check
         * @zh 射线检测
         * @param start ray start
         * @param dir ray direction
         * @param step ray step
         * @param worldSpace is world space
         */
        rayCheck(start, dir, step, worldSpace = true) {
          const MAX_COUNT = 2000;
          const trace = start;
          if (worldSpace) {
            Vec3.subtract(trace, start, this.node.getWorldPosition());
          }
          const delta = new Vec3();
          delta.set(dir);
          delta.multiplyScalar(step);
          let position = null;
          if (dir.equals(new Vec3(0, 1, 0))) {
            const y = this.getHeightAt(trace.x, trace.z);
            if (y != null && trace.y <= y) {
              position = new Vec3(trace.x, y, trace.z);
            }
          } else if (dir.equals(new Vec3(0, -1, 0))) {
            const y = this.getHeightAt(trace.x, trace.z);
            if (y != null && trace.y >= y) {
              position = new Vec3(trace.x, y, trace.z);
            }
          } else {
            let i = 0;

            // 优先大步进查找
            while (i++ < MAX_COUNT) {
              const y = this.getHeightAt(trace.x, trace.z);
              if (y != null && trace.y <= y) {
                break;
              }
              trace.add(dir);
            }

            // 穷举法
            while (i++ < MAX_COUNT) {
              const y = this.getHeightAt(trace.x, trace.z);
              if (y != null && trace.y <= y) {
                position = new Vec3(trace.x, y, trace.z);
                break;
              }
              trace.add(delta);
            }
          }
          return position;
        }

        /**
         * @deprecated since v3.5.1, this is an engine private interface that will be removed in the future.
         */
        _createSharedIndexBuffer() {
          // initialize shared index buffer
          const gfxDevice = deviceManager.gfxDevice;
          if (this._lod !== null) {
            const gfxBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, Uint16Array.BYTES_PER_ELEMENT * this._lod._indexBuffer.length, Uint16Array.BYTES_PER_ELEMENT));
            gfxBuffer.update(this._lod._indexBuffer);
            return gfxBuffer;
          } else {
            const indexData = new Uint16Array(TERRAIN_BLOCK_TILE_COMPLEXITY * TERRAIN_BLOCK_TILE_COMPLEXITY * 6);
            let index = 0;
            for (let j = 0; j < TERRAIN_BLOCK_TILE_COMPLEXITY; ++j) {
              for (let i = 0; i < TERRAIN_BLOCK_TILE_COMPLEXITY; ++i) {
                const a = j * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i;
                const b = j * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i + 1;
                const c = (j + 1) * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i;
                const d = (j + 1) * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i + 1;

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
            const gfxBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, Uint16Array.BYTES_PER_ELEMENT * indexData.length, Uint16Array.BYTES_PER_ELEMENT));
            gfxBuffer.update(indexData);
            return gfxBuffer;
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _getSharedIndexBuffer() {
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
         */
        _getIndexData(key) {
          if (this._sharedLodIndexBuffer !== null && this._lod !== null) {
            return this._lod.getIndexData(key);
          }
          return null;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _resetLightmap(enable) {
          this._lightmapInfos.length = 0;
          if (enable) {
            for (let i = 0; i < this._blockCount[0] * this._blockCount[1]; ++i) {
              this._lightmapInfos.push(new TerrainBlockLightmapInfo());
            }
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _updateLightmap(blockId, tex, uOff, vOff, uScale, vScale) {
          if (tex) {
            // ensure the lightmap infos is initialized
            if (this._lightmapInfos.length === 0) {
              for (let i = 0; i < this._blockCount[0] * this._blockCount[1]; ++i) {
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
         */
        _getLightmapInfo(i, j) {
          const index = j * this._blockCount[0] + i;
          return index < this._lightmapInfos.length ? this._lightmapInfos[index] : null;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _calcNormal(x, z) {
          let flip = 1;
          const here = this.getPosition(x, z);
          let right;
          let up;
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
          const normal = new Vec3();
          normal.set(up);
          normal.cross(right);
          normal.multiplyScalar(flip);
          normal.normalize();
          return normal;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _buildNormals() {
          let index = 0;
          for (let y = 0; y < this.vertexCount[1]; ++y) {
            for (let x = 0; x < this.vertexCount[0]; ++x) {
              const n = this._calcNormal(x, y);
              this._normals[index * 3 + 0] = n.x;
              this._normals[index * 3 + 1] = n.y;
              this._normals[index * 3 + 2] = n.z;
              index += 1;
            }
          }
        }
        _buildImp(restore = false) {
          if (this.valid) {
            return;
          }
          const terrainAsset = this.__asset;
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
            for (let i = 0; i < this._layerList.length; ++i) {
              this._layerList[i] = null;
            }
            if (terrainAsset.version < TERRAIN_DATA_VERSION5) {
              for (let i = 0; i < terrainAsset.layerBinaryInfos.length; ++i) {
                const layer = new TerrainLayer();
                const layerInfo = terrainAsset.layerBinaryInfos[i];
                layer.tileSize = layerInfo.tileSize;
                legacyCC.assetManager.loadAny(layerInfo.detailMapId, (err, asset) => {
                  layer.detailMap = asset;
                });
                if (layerInfo.normalMapId !== '') {
                  legacyCC.assetManager.loadAny(layerInfo.normalMapId, (err, asset) => {
                    layer.normalMap = asset;
                  });
                }
                layer.roughness = layerInfo.roughness;
                layer.metallic = layerInfo.metallic;
                this._layerList[layerInfo.slot] = layer;
              }
            } else {
              for (let i = 0; i < terrainAsset.layerInfos.length; ++i) {
                const layer = new TerrainLayer();
                const layerInfo = terrainAsset.layerInfos[i];
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
          const vertexCount = this.vertexCount[0] * this.vertexCount[1];
          if (this._heights === null || this._heights.length !== vertexCount) {
            this._heights = new Uint16Array(vertexCount);
            this._normals = new Float32Array(vertexCount * 3);
            for (let i = 0; i < vertexCount; ++i) {
              this._heights[i] = TERRAIN_HEIGHT_BASE;
              this._normals[i * 3 + 0] = 0;
              this._normals[i * 3 + 1] = 1;
              this._normals[i * 3 + 2] = 0;
            }
          }
          if (this._normals === null || this._normals.length !== vertexCount * 3) {
            this._normals = new Float32Array(vertexCount * 3);
            this._buildNormals();
          }

          // build layer buffer
          const layerBufferSize = this.blockCount[0] * this.blockCount[1] * TERRAIN_MAX_BLEND_LAYERS;
          if (this._layerBuffer === null || this._layerBuffer.length !== layerBufferSize) {
            this._layerBuffer = new Array(layerBufferSize);
            for (let i = 0; i < layerBufferSize; ++i) {
              this._layerBuffer[i] = -1;
            }
          }

          // build weights
          const weightMapComplexityU = this._weightMapSize * this._blockCount[0];
          const weightMapComplexityV = this._weightMapSize * this._blockCount[1];
          if (this._weights.length !== weightMapComplexityU * weightMapComplexityV * 4) {
            this._weights = new Uint8Array(weightMapComplexityU * weightMapComplexityV * 4);
            for (let i = 0; i < weightMapComplexityU * weightMapComplexityV; ++i) {
              this._weights[i * 4 + 0] = 255;
              this._weights[i * 4 + 1] = 0;
              this._weights[i * 4 + 2] = 0;
              this._weights[i * 4 + 3] = 0;
            }
          }

          // build blocks
          for (let j = 0; j < this._blockCount[1]; ++j) {
            for (let i = 0; i < this._blockCount[0]; ++i) {
              this._blocks.push(new TerrainBlock(this, i, j));
            }
          }
          for (let i = 0; i < this._blocks.length; ++i) {
            this._blocks[i].build();
          }
        }
        _rebuildHeights(info) {
          if (this.vertexCount[0] === info.vertexCount[0] && this.vertexCount[1] === info.vertexCount[1]) {
            return false;
          }
          const heights = new Uint16Array(info.vertexCount[0] * info.vertexCount[1]);
          for (let i = 0; i < heights.length; ++i) {
            heights[i] = TERRAIN_HEIGHT_BASE;
          }
          const w = Math.min(this.vertexCount[0], info.vertexCount[0]);
          const h = Math.min(this.vertexCount[1], info.vertexCount[1]);
          for (let j = 0; j < h; ++j) {
            for (let i = 0; i < w; ++i) {
              const index0 = j * info.vertexCount[0] + i;
              const index1 = j * this.vertexCount[0] + i;
              heights[index0] = this._heights[index1];
            }
          }
          this._heights = heights;
          return true;
        }
        _rebuildLayerBuffer(info) {
          if (this.blockCount[0] === info.blockCount[0] && this.blockCount[1] === info.blockCount[1]) {
            return false;
          }
          const layerBuffer = [];
          layerBuffer.length = info.blockCount[0] * info.blockCount[1] * TERRAIN_MAX_BLEND_LAYERS;
          for (let i = 0; i < layerBuffer.length; ++i) {
            layerBuffer[i] = -1;
          }
          const w = Math.min(this.blockCount[0], info.blockCount[0]);
          const h = Math.min(this.blockCount[1], info.blockCount[1]);
          for (let j = 0; j < h; ++j) {
            for (let i = 0; i < w; ++i) {
              const index0 = j * info.blockCount[0] + i;
              const index1 = j * this.blockCount[0] + i;
              for (let l = 0; l < TERRAIN_MAX_BLEND_LAYERS; ++l) {
                layerBuffer[index0 * TERRAIN_MAX_BLEND_LAYERS + l] = this._layerBuffer[index1 * TERRAIN_MAX_BLEND_LAYERS + l];
              }
            }
          }
          this._layerBuffer = layerBuffer;
          return true;
        }
        _rebuildWeights(info) {
          const oldWeightMapSize = this._weightMapSize;
          const oldWeightMapComplexityU = this._weightMapSize * this._blockCount[0];
          const oldWeightMapComplexityV = this._weightMapSize * this._blockCount[1];
          const weightMapComplexityU = info.weightMapSize * info.blockCount[0];
          const weightMapComplexityV = info.weightMapSize * info.blockCount[1];
          if (weightMapComplexityU === oldWeightMapComplexityU && weightMapComplexityV === oldWeightMapComplexityV) {
            return false;
          }
          const weights = new Uint8Array(weightMapComplexityU * weightMapComplexityV * 4);
          for (let i = 0; i < weightMapComplexityU * weightMapComplexityV; ++i) {
            weights[i * 4 + 0] = 255;
            weights[i * 4 + 1] = 0;
            weights[i * 4 + 2] = 0;
            weights[i * 4 + 3] = 0;
          }
          const w = Math.min(info.blockCount[0], this._blockCount[0]);
          const h = Math.min(info.blockCount[1], this._blockCount[1]);

          // get weight
          const getOldWeight = (_i, _j, _weights) => {
            const index = _j * oldWeightMapComplexityU + _i;
            const weight = new Vec4();
            weight.x = _weights[index * 4 + 0] / 255.0;
            weight.y = _weights[index * 4 + 1] / 255.0;
            weight.z = _weights[index * 4 + 2] / 255.0;
            weight.w = _weights[index * 4 + 3] / 255.0;
            return weight;
          };

          // sample weight
          const sampleOldWeight = (_x, _y, _xOff, _yOff, _weights) => {
            const ix0 = Math.floor(_x);
            const iz0 = Math.floor(_y);
            const ix1 = Math.min(ix0 + 1, oldWeightMapSize - 1);
            const iz1 = Math.min(iz0 + 1, oldWeightMapSize - 1);
            const dx = _x - ix0;
            const dz = _y - iz0;
            const a = getOldWeight(ix0 + _xOff, iz0 + _yOff, this._weights);
            const b = getOldWeight(ix1 + _xOff, iz0 + _yOff, this._weights);
            const c = getOldWeight(ix0 + _xOff, iz1 + _yOff, this._weights);
            const d = getOldWeight(ix1 + _xOff, iz1 + _yOff, this._weights);
            const m = new Vec4();
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
            const n1 = new Vec4();
            const n2 = new Vec4();
            const n = new Vec4();
            Vec4.lerp(n1, a, b, dx);
            Vec4.lerp(n2, c, d, dx);
            Vec4.lerp(n, n1, n2, dz);
            return n;
          };

          // fill new weights
          for (let j = 0; j < h; ++j) {
            for (let i = 0; i < w; ++i) {
              const uOff = i * oldWeightMapSize;
              const vOff = j * oldWeightMapSize;
              for (let v = 0; v < info.weightMapSize; ++v) {
                for (let u = 0; u < info.weightMapSize; ++u) {
                  let w;
                  if (info.weightMapSize === oldWeightMapSize) {
                    w = getOldWeight(u + uOff, v + vOff, this._weights);
                  } else {
                    const x = u / (info.weightMapSize - 1) * (oldWeightMapSize - 1);
                    const y = v / (info.weightMapSize - 1) * (oldWeightMapSize - 1);
                    w = sampleOldWeight(x, y, uOff, vOff, this._weights);
                  }
                  const du = i * info.weightMapSize + u;
                  const dv = j * info.weightMapSize + v;
                  const index = dv * weightMapComplexityU + du;
                  weights[index * 4 + 0] = w.x * 255;
                  weights[index * 4 + 1] = w.y * 255;
                  weights[index * 4 + 2] = w.z * 255;
                  weights[index * 4 + 3] = w.w * 255;
                }
              }
            }
          }
          this._weights = weights;
          return true;
        }
      }, (_initializer15 = _applyDecoratedInitializer(_class13.prototype, "__asset", [_dec6, serializable, disallowAnimation], function () {
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