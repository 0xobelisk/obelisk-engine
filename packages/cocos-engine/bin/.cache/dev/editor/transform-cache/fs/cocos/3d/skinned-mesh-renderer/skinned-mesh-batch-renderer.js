System.register("q-bundled:///fs/cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/data/decorators/index.js", "../../animation/transform-utils.js", "../../asset/assets/asset-enum.js", "../../asset/assets/material.js", "../assets/mesh.js", "../assets/skeleton.js", "../../asset/assets/texture-2d.js", "../../core/index.js", "../../gfx/index.js", "../misc/buffer.js", "./skinned-mesh-renderer.js"], function (_export, _context) {
  "use strict";

  var EDITOR, ccclass, help, executeInEditMode, executionOrder, menu, tooltip, type, visible, override, serializable, editable, getWorldTransformUntilRoot, Filter, PixelFormat, Material, Mesh, Skeleton, Texture2D, CCString, Mat4, Vec2, Vec3, cclegacy, AttributeName, FormatInfos, Format, Type, Attribute, BufferTextureCopy, mapBuffer, readBuffer, writeBuffer, SkinnedMeshRenderer, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class4, _class5, _initializer7, _initializer8, _initializer9, repeat, batch_id, batch_uv, batch_extras_size, SkinnedMeshUnit, m4_local, m4_1, v3_1, SkinnedMeshBatchRenderer;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      visible = _coreDataDecoratorsIndexJs.visible;
      override = _coreDataDecoratorsIndexJs.override;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
    }, function (_animationTransformUtilsJs) {
      getWorldTransformUntilRoot = _animationTransformUtilsJs.getWorldTransformUntilRoot;
    }, function (_assetAssetsAssetEnumJs) {
      Filter = _assetAssetsAssetEnumJs.Filter;
      PixelFormat = _assetAssetsAssetEnumJs.PixelFormat;
    }, function (_assetAssetsMaterialJs) {
      Material = _assetAssetsMaterialJs.Material;
    }, function (_assetsMeshJs) {
      Mesh = _assetsMeshJs.Mesh;
    }, function (_assetsSkeletonJs) {
      Skeleton = _assetsSkeletonJs.Skeleton;
    }, function (_assetAssetsTexture2dJs) {
      Texture2D = _assetAssetsTexture2dJs.Texture2D;
    }, function (_coreIndexJs) {
      CCString = _coreIndexJs.CCString;
      Mat4 = _coreIndexJs.Mat4;
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_gfxIndexJs) {
      AttributeName = _gfxIndexJs.AttributeName;
      FormatInfos = _gfxIndexJs.FormatInfos;
      Format = _gfxIndexJs.Format;
      Type = _gfxIndexJs.Type;
      Attribute = _gfxIndexJs.Attribute;
      BufferTextureCopy = _gfxIndexJs.BufferTextureCopy;
    }, function (_miscBufferJs) {
      mapBuffer = _miscBufferJs.mapBuffer;
      readBuffer = _miscBufferJs.readBuffer;
      writeBuffer = _miscBufferJs.writeBuffer;
    }, function (_skinnedMeshRendererJs) {
      SkinnedMeshRenderer = _skinnedMeshRendererJs.SkinnedMeshRenderer;
    }],
    execute: function () {
      repeat = n => n - Math.floor(n);
      batch_id = new Attribute(AttributeName.ATTR_BATCH_ID, Format.R32F);
      batch_uv = new Attribute(AttributeName.ATTR_BATCH_UV, Format.RG32F);
      batch_extras_size = FormatInfos[batch_id.format].size + FormatInfos[batch_uv.format].size;
      _export("SkinnedMeshUnit", SkinnedMeshUnit = (_dec = ccclass('cc.SkinnedMeshUnit'), _dec2 = type(Mesh), _dec3 = type(Skeleton), _dec4 = type(Material), _dec5 = type(SkinnedMeshRenderer), _dec(_class = (_class2 = class SkinnedMeshUnit {
        constructor() {
          /**
           * @en Skinned mesh of this unit.
           * @zh 子蒙皮模型的网格模型。
           */
          this.mesh = _initializer && _initializer();
          /**
           * @en Skeleton of this unit.
           * @zh 子蒙皮模型的骨骼。
           */
          this.skeleton = _initializer2 && _initializer2();
          /**
           * @en Skinning material of this unit.
           * @zh 子蒙皮模型使用的材质。
           */
          this.material = _initializer3 && _initializer3();
          /**
           * @en Local transform matrix
           * @zh 本地变换矩阵
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._localTransform = _initializer4 && _initializer4();
          this._offset = _initializer5 && _initializer5();
          this._size = _initializer6 && _initializer6();
        }
        /**
         * @en UV offset on texture atlas.
         * @zh 在图集中的 uv 坐标偏移。
         */
        set offset(offset) {
          Vec2.copy(this._offset, offset);
        }
        get offset() {
          return this._offset;
        }

        /**
         * @en UV extent on texture atlas.
         * @zh 在图集中占的 UV 尺寸。
         */
        set size(size) {
          Vec2.copy(this._size, size);
        }
        get size() {
          return this._size;
        }

        /**
         * @en Convenient setter, copying all necessary information from target [[SkinnedMeshRenderer]] component.
         * @zh 复制目标 [[SkinnedMeshRenderer]] 的所有属性到本单元，方便快速配置。
         */
        set copyFrom(comp) {
          if (!comp) {
            return;
          }
          this.mesh = comp.mesh;
          this.skeleton = comp.skeleton;
          this.material = comp.getSharedMaterial(0);
          if (comp.skinningRoot) {
            getWorldTransformUntilRoot(comp.node, comp.skinningRoot, this._localTransform);
          }
        }
        get copyFrom() {
          return null;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "mesh", [_dec2], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "skeleton", [_dec3], function () {
        return null;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "material", [_dec4], function () {
        return null;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_localTransform", [serializable], function () {
        return new Mat4();
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_offset", [serializable], function () {
        return new Vec2(0, 0);
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_size", [serializable], function () {
        return new Vec2(1, 1);
      }), _applyDecoratedDescriptor(_class2.prototype, "offset", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "offset"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "size", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "size"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "copyFrom", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "copyFrom"), _class2.prototype)), _class2)) || _class));
      m4_local = new Mat4();
      m4_1 = new Mat4();
      v3_1 = new Vec3();
      /**
       * @en The skinned mesh batch renderer component, batches multiple skeleton-sharing [[SkinnedMeshRenderer]].
       * @zh 蒙皮模型合批组件，用于合并绘制共享同一骨骼资源的所有蒙皮网格。
       */
      _export("SkinnedMeshBatchRenderer", SkinnedMeshBatchRenderer = (_dec6 = ccclass('cc.SkinnedMeshBatchRenderer'), _dec7 = help('i18n:cc.SkinnedMeshBatchRenderer'), _dec8 = executionOrder(100), _dec9 = menu('Mesh/SkinnedMeshBatchRenderer'), _dec10 = tooltip('i18n:batched_skinning_model.atlas_size'), _dec11 = type([CCString]), _dec12 = tooltip('i18n:batched_skinning_model.batchable_texture_names'), _dec13 = type([SkinnedMeshUnit]), _dec14 = tooltip('i18n:batched_skinning_model.units'), _dec15 = visible(false), _dec16 = visible(false), _dec6(_class4 = _dec7(_class4 = _dec8(_class4 = executeInEditMode(_class4 = _dec9(_class4 = (_class5 = class SkinnedMeshBatchRenderer extends SkinnedMeshRenderer {
        constructor(...args) {
          super(...args);
          /**
           * @en Size of the generated texture atlas.
           * @zh 合图生成的最终图集的边长。
           */
          this.atlasSize = _initializer7 && _initializer7();
          /**
           * @en
           * Texture properties that will be actually using the generated atlas.<br>
           * The first unit's texture will be used if not specified.
           * @zh
           * 材质中真正参与合图的贴图属性，不参与的属性统一使用第一个 unit 的贴图。
           */
          this.batchableTextureNames = _initializer8 && _initializer8();
          /**
           * @en Source skinning model components, containing all the data to be batched.
           * @zh 合批前的子蒙皮模型数组，最主要的数据来源。
           */
          this.units = _initializer9 && _initializer9();
          this._textures = {};
          this._batchMaterial = null;
        }
        get mesh() {
          return super.mesh;
        }
        set mesh(val) {
          super.mesh = val;
        }
        get skeleton() {
          return super.skeleton;
        }
        set skeleton(val) {
          super.skeleton = val;
        }
        onLoad() {
          super.onLoad();
          this.cook();
        }
        onDestroy() {
          for (const tex in this._textures) {
            this._textures[tex].destroy();
          }
          this._textures = {};
          if (this._mesh) {
            this._mesh.destroy();
            this._mesh = null;
          }
          super.onDestroy();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _onMaterialModified(idx, material) {
          this.cookMaterials();
          super._onMaterialModified(idx, this.getMaterialInstance(idx));
        }
        cook() {
          this.cookMaterials();
          this.cookSkeletons();
          this.cookMeshes();
        }
        cookMaterials() {
          if (!this._batchMaterial) {
            this._batchMaterial = this.getSharedMaterial(0);
          }
          const mat = this.getMaterialInstance(0);
          if (!mat || !this._batchMaterial || !this._batchMaterial.effectAsset) {
            console.warn('incomplete batch material!');
            return;
          }
          mat.copy(this._batchMaterial);
          this.resizeAtlases();
          const tech = mat.effectAsset.techniques[mat.technique];
          for (let i = 0; i < tech.passes.length; i++) {
            const pass = tech.passes[i];
            if (!pass.properties) {
              continue;
            }
            for (const prop in pass.properties) {
              if (pass.properties[prop].type >= Type.SAMPLER1D) {
                // samplers
                let tex = null;
                if (this.batchableTextureNames.find(n => n === prop)) {
                  tex = this._textures[prop];
                  if (!tex) {
                    tex = this.createTexture(prop);
                  }
                  this.cookTextures(tex, prop, i);
                } else {
                  this.units.some(u => tex = u.material && u.material.getProperty(prop, i));
                }
                if (tex) {
                  mat.setProperty(prop, tex, i);
                }
              } else {
                // vectors
                const value = [];
                for (let u = 0; u < this.units.length; u++) {
                  const unit = this.units[u];
                  if (!unit.material) {
                    continue;
                  }
                  value.push(unit.material.getProperty(prop.slice(0, -3), i));
                }
                mat.setProperty(prop, value, i);
              }
            }
          }
        }
        cookSkeletons() {
          if (!this._skinningRoot) {
            console.warn('no skinning root specified!');
            return;
          }
          // merge joints accordingly
          const joints = [];
          const bindposes = [];
          for (let u = 0; u < this.units.length; u++) {
            const unit = this.units[u];
            if (!unit || !unit.skeleton) {
              continue;
            }
            const partial = unit.skeleton;
            Mat4.invert(m4_local, unit._localTransform);
            for (let i = 0; i < partial.joints.length; i++) {
              const path = partial.joints[i];
              const idx = joints.findIndex(p => p === path);
              if (idx >= 0) {
                if (EDITOR) {
                  // consistency check
                  Mat4.multiply(m4_1, partial.bindposes[i], m4_local);
                  if (!m4_1.equals(bindposes[idx])) {
                    console.warn(`${this.node.name}: Inconsistent bindpose at ${joints[idx]} in unit ${u}, artifacts may present`);
                  }
                }
                continue;
              }
              joints.push(path);
              // cancel out local transform
              bindposes.push(Mat4.multiply(new Mat4(), partial.bindposes[i] || Mat4.IDENTITY, m4_local));
            }
          }
          // sort the array to be more cache-friendly
          const idxMap = Array.from(Array(joints.length).keys()).sort((a, b) => {
            if (joints[a] > joints[b]) {
              return 1;
            }
            if (joints[a] < joints[b]) {
              return -1;
            }
            return 0;
          });
          const skeleton = new Skeleton();
          skeleton.joints = joints.map((_, idx, arr) => arr[idxMap[idx]]);
          skeleton.bindposes = bindposes.map((_, idx, arr) => arr[idxMap[idx]]);
          // apply
          if (this._skeleton) {
            this._skeleton.destroy();
          }
          this.skeleton = skeleton;
        }
        cookMeshes() {
          let isValid = false;
          for (let u = 0; u < this.units.length; u++) {
            const unit = this.units[u];
            if (unit.mesh) {
              isValid = true;
              break;
            }
          }
          if (!isValid || !this._skinningRoot) {
            return;
          }
          if (this._mesh) {
            this._mesh.destroyRenderingMesh();
          } else {
            this._mesh = new Mesh();
          }
          let posOffset = 0;
          let posFormat = Format.UNKNOWN;
          let normalOffset = 0;
          let normalFormat = Format.UNKNOWN;
          let tangentOffset = 0;
          let tangentFormat = Format.UNKNOWN;
          let uvOffset = 0;
          let uvFormat = Format.UNKNOWN;
          let jointOffset = 0;
          let jointFormat = Format.UNKNOWN;

          // prepare joint index map
          const jointIndexMap = new Array(this.units.length);
          const unitLen = this.units.length;
          for (let i = 0; i < unitLen; i++) {
            const unit = this.units[i];
            if (!unit || !unit.skeleton) {
              continue;
            }
            jointIndexMap[i] = unit.skeleton.joints.map(j => this._skeleton.joints.findIndex(ref => j === ref));
          }
          for (let i = 0; i < unitLen; i++) {
            const unit = this.units[i];
            if (!unit || !unit.mesh || !unit.mesh.data) {
              continue;
            }
            const newMesh = this._createUnitMesh(i, unit.mesh);
            const dataView = new DataView(newMesh.data.buffer);
            Mat4.invert(m4_local, unit._localTransform);
            Mat4.transpose(m4_local, m4_local);
            const {
              offset
            } = unit;
            const {
              size
            } = unit;
            for (let b = 0; b < newMesh.struct.vertexBundles.length; b++) {
              const bundle = newMesh.struct.vertexBundles[b];
              // apply local transform to mesh
              posOffset = bundle.view.offset;
              posFormat = Format.UNKNOWN;
              for (let a = 0; a < bundle.attributes.length; a++) {
                const attr = bundle.attributes[a];
                if (attr.name === AttributeName.ATTR_POSITION) {
                  posFormat = attr.format;
                  break;
                }
                posOffset += FormatInfos[attr.format].size;
              }
              if (posFormat) {
                const pos = readBuffer(dataView, posFormat, posOffset, bundle.view.length, bundle.view.stride);
                for (let j = 0; j < pos.length; j += 3) {
                  Vec3.fromArray(v3_1, pos, j);
                  Vec3.transformMat4(v3_1, v3_1, unit._localTransform);
                  Vec3.toArray(pos, v3_1, j);
                }
                writeBuffer(dataView, pos, posFormat, posOffset, bundle.view.stride);
              }
              normalOffset = bundle.view.offset;
              normalFormat = Format.UNKNOWN;
              for (let a = 0; a < bundle.attributes.length; a++) {
                const attr = bundle.attributes[a];
                if (attr.name === AttributeName.ATTR_NORMAL) {
                  normalFormat = attr.format;
                  break;
                }
                normalOffset += FormatInfos[attr.format].size;
              }
              if (normalFormat) {
                const normal = readBuffer(dataView, normalFormat, normalOffset, bundle.view.length, bundle.view.stride);
                for (let j = 0; j < normal.length; j += 3) {
                  Vec3.fromArray(v3_1, normal, j);
                  Vec3.transformMat4Normal(v3_1, v3_1, m4_local);
                  Vec3.toArray(normal, v3_1, j);
                }
                writeBuffer(dataView, normal, normalFormat, normalOffset, bundle.view.stride);
              }
              tangentOffset = bundle.view.offset;
              tangentFormat = Format.UNKNOWN;
              for (let a = 0; a < bundle.attributes.length; a++) {
                const attr = bundle.attributes[a];
                if (attr.name === AttributeName.ATTR_TANGENT) {
                  tangentFormat = attr.format;
                  break;
                }
                tangentOffset += FormatInfos[attr.format].size;
              }
              if (tangentFormat) {
                const tangent = readBuffer(dataView, tangentFormat, tangentOffset, bundle.view.length, bundle.view.stride);
                for (let j = 0; j < tangent.length; j += 3) {
                  Vec3.fromArray(v3_1, tangent, j);
                  Vec3.transformMat4Normal(v3_1, v3_1, m4_local);
                  Vec3.toArray(tangent, v3_1, j);
                }
                writeBuffer(dataView, tangent, tangentFormat, tangentOffset, bundle.view.stride);
              }
              // merge UV
              uvOffset = bundle.view.offset;
              uvFormat = Format.UNKNOWN;
              for (let a = 0; a < bundle.attributes.length; a++) {
                const attr = bundle.attributes[a];
                if (attr.name === AttributeName.ATTR_BATCH_UV) {
                  uvFormat = attr.format;
                  break;
                }
                uvOffset += FormatInfos[attr.format].size;
              }
              if (uvFormat) {
                mapBuffer(dataView, (cur, idx) => {
                  cur = repeat(cur); // warp to [0, 1] first
                  const comp = idx === 0 ? 'x' : 'y';
                  return cur * size[comp] + offset[comp];
                }, uvFormat, uvOffset, bundle.view.length, bundle.view.stride, dataView);
              }
              // merge joint indices
              const idxMap = jointIndexMap[i];
              if (!idxMap) {
                continue;
              }
              jointOffset = bundle.view.offset;
              jointFormat = Format.UNKNOWN;
              for (let a = 0; a < bundle.attributes.length; a++) {
                const attr = bundle.attributes[a];
                if (attr.name === AttributeName.ATTR_JOINTS) {
                  jointFormat = attr.format;
                  break;
                }
                jointOffset += FormatInfos[attr.format].size;
              }
              if (jointFormat) {
                mapBuffer(dataView, cur => idxMap[cur], jointFormat, jointOffset, bundle.view.length, bundle.view.stride, dataView);
              }
            }
            this._mesh.merge(newMesh);
          }
          this._onMeshChanged(this._mesh);
          this._updateModels();
        }
        cookTextures(target, prop, passIdx) {
          const texImages = [];
          const texImageRegions = [];
          const texBuffers = [];
          const texBufferRegions = [];
          for (let u = 0; u < this.units.length; u++) {
            const unit = this.units[u];
            if (!unit.material) {
              continue;
            }
            const partial = unit.material.getProperty(prop, passIdx);
            if (partial && partial.image && partial.image.data) {
              const region = new BufferTextureCopy();
              region.texOffset.x = unit.offset.x * this.atlasSize;
              region.texOffset.y = unit.offset.y * this.atlasSize;
              region.texExtent.width = unit.size.x * this.atlasSize;
              region.texExtent.height = unit.size.y * this.atlasSize;
              const {
                data
              } = partial.image;
              if (!ArrayBuffer.isView(data)) {
                texImages.push(data);
                texImageRegions.push(region);
              } else {
                texBuffers.push(data);
                texBufferRegions.push(region);
              }
            }
          }
          const gfxTex = target.getGFXTexture();
          const {
            device
          } = cclegacy.director.root;
          if (texBuffers.length > 0) {
            device.copyBuffersToTexture(texBuffers, gfxTex, texBufferRegions);
          }
          if (texImages.length > 0) {
            device.copyTexImagesToTexture(texImages, gfxTex, texImageRegions);
          }
        }
        createTexture(prop) {
          const tex = new Texture2D();
          tex.setFilters(Filter.LINEAR, Filter.LINEAR);
          tex.setMipFilter(Filter.NEAREST);
          tex.reset({
            width: this.atlasSize,
            height: this.atlasSize,
            format: PixelFormat.RGBA8888
          });
          this._textures[prop] = tex;
          return tex;
        }
        resizeAtlases() {
          for (const prop in this._textures) {
            const tex = this._textures[prop];
            tex.reset({
              width: this.atlasSize,
              height: this.atlasSize,
              format: PixelFormat.RGBA8888
            });
          }
        }
        _createUnitMesh(unitIdx, mesh) {
          // add batch ID to this temp mesh
          // first, update bookkeeping
          const newMeshStruct = JSON.parse(JSON.stringify(mesh.struct));
          const modifiedBundles = {};
          for (let p = 0; p < mesh.struct.primitives.length; p++) {
            const primitive = mesh.struct.primitives[p];
            let uvOffset = 0;
            let uvFormat = Format.UNKNOWN;
            let bundleIdx = 0;
            for (; bundleIdx < primitive.vertexBundelIndices.length; bundleIdx++) {
              const bundle = mesh.struct.vertexBundles[primitive.vertexBundelIndices[bundleIdx]];
              uvOffset = bundle.view.offset;
              uvFormat = Format.UNKNOWN;
              for (let a = 0; a < bundle.attributes.length; a++) {
                const attr = bundle.attributes[a];
                if (attr.name === AttributeName.ATTR_TEX_COORD) {
                  uvFormat = attr.format;
                  break;
                }
                uvOffset += FormatInfos[attr.format].size;
              }
              if (uvFormat) {
                break;
              }
            }
            if (modifiedBundles[bundleIdx] !== undefined) {
              continue;
            }
            modifiedBundles[bundleIdx] = [uvFormat, uvOffset];
            const newBundle = newMeshStruct.vertexBundles[bundleIdx]; // put the new UVs in the same bundle with original UVs
            newBundle.attributes.push(batch_id);
            newBundle.attributes.push(batch_uv);
            newBundle.view.offset = 0;
            newBundle.view.length += newBundle.view.count * batch_extras_size;
            newBundle.view.stride += batch_extras_size;
          }
          let totalLength = 0;
          for (let b = 0; b < newMeshStruct.vertexBundles.length; b++) {
            totalLength += newMeshStruct.vertexBundles[b].view.length;
          }
          for (let p = 0; p < newMeshStruct.primitives.length; p++) {
            const pm = newMeshStruct.primitives[p];
            if (pm.indexView) {
              pm.indexView.offset = totalLength;
              totalLength += pm.indexView.length;
            }
          }
          // now, we ride!
          const newMeshData = new Uint8Array(totalLength);
          const oldMeshData = mesh.data;
          const newDataView = new DataView(newMeshData.buffer);
          const oldDataView = new DataView(oldMeshData.buffer);
          const {
            isLittleEndian
          } = cclegacy.sys;
          for (const b in modifiedBundles) {
            const newBundle = newMeshStruct.vertexBundles[b];
            const oldBundle = mesh.struct.vertexBundles[b];
            const [uvFormat, uvOffset] = modifiedBundles[b];
            const uvs = readBuffer(oldDataView, uvFormat, uvOffset, oldBundle.view.length, oldBundle.view.stride);
            const oldView = oldBundle.view;
            const newView = newBundle.view;
            const oldStride = oldView.stride;
            const newStride = newView.stride;
            let oldOffset = oldView.offset;
            let newOffset = newView.offset;
            for (let j = 0; j < newView.count; j++) {
              const srcVertex = oldMeshData.subarray(oldOffset, oldOffset + oldStride);
              newMeshData.set(srcVertex, newOffset);
              // insert batch ID
              newDataView.setFloat32(newOffset + oldStride, unitIdx);
              // insert batch UV
              newDataView.setFloat32(newOffset + oldStride + 4, uvs[j * 2], isLittleEndian);
              newDataView.setFloat32(newOffset + oldStride + 8, uvs[j * 2 + 1], isLittleEndian);
              newOffset += newStride;
              oldOffset += oldStride;
            }
          }
          for (let k = 0; k < newMeshStruct.primitives.length; k++) {
            const oldPrimitive = mesh.struct.primitives[k];
            const newPrimitive = newMeshStruct.primitives[k];
            if (oldPrimitive.indexView && newPrimitive.indexView) {
              const oldStride = oldPrimitive.indexView.stride;
              const newStride = newPrimitive.indexView.stride;
              let oldOffset = oldPrimitive.indexView.offset;
              let newOffset = newPrimitive.indexView.offset;
              for (let j = 0; j < newPrimitive.indexView.count; j++) {
                const srcIndices = oldMeshData.subarray(oldOffset, oldOffset + oldStride);
                newMeshData.set(srcIndices, newOffset);
                newOffset += newStride;
                oldOffset += oldStride;
              }
            }
          }
          const newMesh = new Mesh();
          newMesh.reset({
            struct: newMeshStruct,
            data: newMeshData
          });
          return newMesh;
        }
      }, (_initializer7 = _applyDecoratedInitializer(_class5.prototype, "atlasSize", [serializable, _dec10], function () {
        return 1024;
      }), _initializer8 = _applyDecoratedInitializer(_class5.prototype, "batchableTextureNames", [_dec11, serializable, _dec12], function () {
        return [];
      }), _initializer9 = _applyDecoratedInitializer(_class5.prototype, "units", [_dec13, serializable, _dec14], function () {
        return [];
      }), _applyDecoratedDescriptor(_class5.prototype, "mesh", [override, _dec15], Object.getOwnPropertyDescriptor(_class5.prototype, "mesh"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "skeleton", [override, _dec16], Object.getOwnPropertyDescriptor(_class5.prototype, "skeleton"), _class5.prototype)), _class5)) || _class4) || _class4) || _class4) || _class4) || _class4));
    }
  };
});