System.register("q-bundled:///fs/cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/data/decorators/index.js", "../../animation/transform-utils.js", "../../asset/assets/asset-enum.js", "../../asset/assets/material.js", "../assets/mesh.js", "../assets/skeleton.js", "../../asset/assets/texture-2d.js", "../../core/index.js", "../../gfx/index.js", "../misc/buffer.js", "./skinned-mesh-renderer.js"], function (_export, _context) {
  "use strict";

  var EDITOR, ccclass, help, executeInEditMode, executionOrder, menu, tooltip, type, visible, override, serializable, editable, getWorldTransformUntilRoot, Filter, PixelFormat, Material, Mesh, Skeleton, Texture2D, CCString, Mat4, Vec2, Vec3, cclegacy, AttributeName, FormatInfos, Format, Type, Attribute, BufferTextureCopy, mapBuffer, readBuffer, writeBuffer, SkinnedMeshRenderer, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class4, _class5, _initializer7, _initializer8, _initializer9, repeat, batch_id, batch_uv, batch_extras_size, SkinnedMeshUnit, m4_local, m4_1, v3_1, SkinnedMeshBatchRenderer;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
      repeat = function repeat(n) {
        return n - Math.floor(n);
      };
      batch_id = new Attribute(AttributeName.ATTR_BATCH_ID, Format.R32F);
      batch_uv = new Attribute(AttributeName.ATTR_BATCH_UV, Format.RG32F);
      batch_extras_size = FormatInfos[batch_id.format].size + FormatInfos[batch_uv.format].size;
      _export("SkinnedMeshUnit", SkinnedMeshUnit = (_dec = ccclass('cc.SkinnedMeshUnit'), _dec2 = type(Mesh), _dec3 = type(Skeleton), _dec4 = type(Material), _dec5 = type(SkinnedMeshRenderer), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function SkinnedMeshUnit() {
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
        _createClass(SkinnedMeshUnit, [{
          key: "offset",
          get: function get() {
            return this._offset;
          }

          /**
           * @en UV extent on texture atlas.
           * @zh 在图集中占的 UV 尺寸。
           */,
          set:
          /**
           * @en UV offset on texture atlas.
           * @zh 在图集中的 uv 坐标偏移。
           */
          function set(offset) {
            Vec2.copy(this._offset, offset);
          }
        }, {
          key: "size",
          get: function get() {
            return this._size;
          }

          /**
           * @en Convenient setter, copying all necessary information from target [[SkinnedMeshRenderer]] component.
           * @zh 复制目标 [[SkinnedMeshRenderer]] 的所有属性到本单元，方便快速配置。
           */,
          set: function set(size) {
            Vec2.copy(this._size, size);
          }
        }, {
          key: "copyFrom",
          get: function get() {
            return null;
          },
          set: function set(comp) {
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
        }]);
        return SkinnedMeshUnit;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "mesh", [_dec2], function () {
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
      _export("SkinnedMeshBatchRenderer", SkinnedMeshBatchRenderer = (_dec6 = ccclass('cc.SkinnedMeshBatchRenderer'), _dec7 = help('i18n:cc.SkinnedMeshBatchRenderer'), _dec8 = executionOrder(100), _dec9 = menu('Mesh/SkinnedMeshBatchRenderer'), _dec10 = tooltip('i18n:batched_skinning_model.atlas_size'), _dec11 = type([CCString]), _dec12 = tooltip('i18n:batched_skinning_model.batchable_texture_names'), _dec13 = type([SkinnedMeshUnit]), _dec14 = tooltip('i18n:batched_skinning_model.units'), _dec15 = visible(false), _dec16 = visible(false), _dec6(_class4 = _dec7(_class4 = _dec8(_class4 = executeInEditMode(_class4 = _dec9(_class4 = (_class5 = /*#__PURE__*/function (_SkinnedMeshRenderer) {
        _inheritsLoose(SkinnedMeshBatchRenderer, _SkinnedMeshRenderer);
        function SkinnedMeshBatchRenderer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SkinnedMeshRenderer.call.apply(_SkinnedMeshRenderer, [this].concat(args)) || this;
          /**
           * @en Size of the generated texture atlas.
           * @zh 合图生成的最终图集的边长。
           */
          _this.atlasSize = _initializer7 && _initializer7();
          /**
           * @en
           * Texture properties that will be actually using the generated atlas.<br>
           * The first unit's texture will be used if not specified.
           * @zh
           * 材质中真正参与合图的贴图属性，不参与的属性统一使用第一个 unit 的贴图。
           */
          _this.batchableTextureNames = _initializer8 && _initializer8();
          /**
           * @en Source skinning model components, containing all the data to be batched.
           * @zh 合批前的子蒙皮模型数组，最主要的数据来源。
           */
          _this.units = _initializer9 && _initializer9();
          _this._textures = {};
          _this._batchMaterial = null;
          return _this;
        }
        var _proto = SkinnedMeshBatchRenderer.prototype;
        _proto.onLoad = function onLoad() {
          _SkinnedMeshRenderer.prototype.onLoad.call(this);
          this.cook();
        };
        _proto.onDestroy = function onDestroy() {
          for (var tex in this._textures) {
            this._textures[tex].destroy();
          }
          this._textures = {};
          if (this._mesh) {
            this._mesh.destroy();
            this._mesh = null;
          }
          _SkinnedMeshRenderer.prototype.onDestroy.call(this);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._onMaterialModified = function _onMaterialModified(idx, material) {
          this.cookMaterials();
          _SkinnedMeshRenderer.prototype._onMaterialModified.call(this, idx, this.getMaterialInstance(idx));
        };
        _proto.cook = function cook() {
          this.cookMaterials();
          this.cookSkeletons();
          this.cookMeshes();
        };
        _proto.cookMaterials = function cookMaterials() {
          var _this2 = this;
          if (!this._batchMaterial) {
            this._batchMaterial = this.getSharedMaterial(0);
          }
          var mat = this.getMaterialInstance(0);
          if (!mat || !this._batchMaterial || !this._batchMaterial.effectAsset) {
            console.warn('incomplete batch material!');
            return;
          }
          mat.copy(this._batchMaterial);
          this.resizeAtlases();
          var tech = mat.effectAsset.techniques[mat.technique];
          var _loop = function _loop(i) {
            var pass = tech.passes[i];
            if (!pass.properties) {
              return 1; // continue
            }
            var _loop2 = function _loop2(prop) {
              if (pass.properties[prop].type >= Type.SAMPLER1D) {
                // samplers
                var tex = null;
                if (_this2.batchableTextureNames.find(function (n) {
                  return n === prop;
                })) {
                  tex = _this2._textures[prop];
                  if (!tex) {
                    tex = _this2.createTexture(prop);
                  }
                  _this2.cookTextures(tex, prop, i);
                } else {
                  _this2.units.some(function (u) {
                    return tex = u.material && u.material.getProperty(prop, i);
                  });
                }
                if (tex) {
                  mat.setProperty(prop, tex, i);
                }
              } else {
                // vectors
                var value = [];
                for (var u = 0; u < _this2.units.length; u++) {
                  var unit = _this2.units[u];
                  if (!unit.material) {
                    continue;
                  }
                  value.push(unit.material.getProperty(prop.slice(0, -3), i));
                }
                mat.setProperty(prop, value, i);
              }
            };
            for (var prop in pass.properties) {
              _loop2(prop);
            }
          };
          for (var i = 0; i < tech.passes.length; i++) {
            if (_loop(i)) continue;
          }
        };
        _proto.cookSkeletons = function cookSkeletons() {
          var _this3 = this;
          if (!this._skinningRoot) {
            console.warn('no skinning root specified!');
            return;
          }
          // merge joints accordingly
          var joints = [];
          var bindposes = [];
          for (var u = 0; u < this.units.length; u++) {
            var unit = this.units[u];
            if (!unit || !unit.skeleton) {
              continue;
            }
            var partial = unit.skeleton;
            Mat4.invert(m4_local, unit._localTransform);
            var _loop3 = function _loop3() {
              var path = partial.joints[i];
              var idx = joints.findIndex(function (p) {
                return p === path;
              });
              if (idx >= 0) {
                if (EDITOR) {
                  // consistency check
                  Mat4.multiply(m4_1, partial.bindposes[i], m4_local);
                  if (!m4_1.equals(bindposes[idx])) {
                    console.warn(_this3.node.name + ": Inconsistent bindpose at " + joints[idx] + " in unit " + u + ", artifacts may present");
                  }
                }
                return 1; // continue
              }
              joints.push(path);
              // cancel out local transform
              bindposes.push(Mat4.multiply(new Mat4(), partial.bindposes[i] || Mat4.IDENTITY, m4_local));
            };
            for (var i = 0; i < partial.joints.length; i++) {
              if (_loop3()) continue;
            }
          }
          // sort the array to be more cache-friendly
          var idxMap = Array.from(Array(joints.length).keys()).sort(function (a, b) {
            if (joints[a] > joints[b]) {
              return 1;
            }
            if (joints[a] < joints[b]) {
              return -1;
            }
            return 0;
          });
          var skeleton = new Skeleton();
          skeleton.joints = joints.map(function (_, idx, arr) {
            return arr[idxMap[idx]];
          });
          skeleton.bindposes = bindposes.map(function (_, idx, arr) {
            return arr[idxMap[idx]];
          });
          // apply
          if (this._skeleton) {
            this._skeleton.destroy();
          }
          this.skeleton = skeleton;
        };
        _proto.cookMeshes = function cookMeshes() {
          var _this4 = this;
          var isValid = false;
          for (var u = 0; u < this.units.length; u++) {
            var unit = this.units[u];
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
          var posOffset = 0;
          var posFormat = Format.UNKNOWN;
          var normalOffset = 0;
          var normalFormat = Format.UNKNOWN;
          var tangentOffset = 0;
          var tangentFormat = Format.UNKNOWN;
          var uvOffset = 0;
          var uvFormat = Format.UNKNOWN;
          var jointOffset = 0;
          var jointFormat = Format.UNKNOWN;

          // prepare joint index map
          var jointIndexMap = new Array(this.units.length);
          var unitLen = this.units.length;
          for (var i = 0; i < unitLen; i++) {
            var _unit = this.units[i];
            if (!_unit || !_unit.skeleton) {
              continue;
            }
            jointIndexMap[i] = _unit.skeleton.joints.map(function (j) {
              return _this4._skeleton.joints.findIndex(function (ref) {
                return j === ref;
              });
            });
          }
          var _loop4 = function _loop4() {
            var unit = _this4.units[_i];
            if (!unit || !unit.mesh || !unit.mesh.data) {
              return 1; // continue
            }
            var newMesh = _this4._createUnitMesh(_i, unit.mesh);
            var dataView = new DataView(newMesh.data.buffer);
            Mat4.invert(m4_local, unit._localTransform);
            Mat4.transpose(m4_local, m4_local);
            var offset = unit.offset;
            var size = unit.size;
            var _loop5 = function _loop5() {
              var bundle = newMesh.struct.vertexBundles[b];
              // apply local transform to mesh
              posOffset = bundle.view.offset;
              posFormat = Format.UNKNOWN;
              for (var a = 0; a < bundle.attributes.length; a++) {
                var attr = bundle.attributes[a];
                if (attr.name === AttributeName.ATTR_POSITION) {
                  posFormat = attr.format;
                  break;
                }
                posOffset += FormatInfos[attr.format].size;
              }
              if (posFormat) {
                var pos = readBuffer(dataView, posFormat, posOffset, bundle.view.length, bundle.view.stride);
                for (var j = 0; j < pos.length; j += 3) {
                  Vec3.fromArray(v3_1, pos, j);
                  Vec3.transformMat4(v3_1, v3_1, unit._localTransform);
                  Vec3.toArray(pos, v3_1, j);
                }
                writeBuffer(dataView, pos, posFormat, posOffset, bundle.view.stride);
              }
              normalOffset = bundle.view.offset;
              normalFormat = Format.UNKNOWN;
              for (var _a = 0; _a < bundle.attributes.length; _a++) {
                var _attr = bundle.attributes[_a];
                if (_attr.name === AttributeName.ATTR_NORMAL) {
                  normalFormat = _attr.format;
                  break;
                }
                normalOffset += FormatInfos[_attr.format].size;
              }
              if (normalFormat) {
                var normal = readBuffer(dataView, normalFormat, normalOffset, bundle.view.length, bundle.view.stride);
                for (var _j = 0; _j < normal.length; _j += 3) {
                  Vec3.fromArray(v3_1, normal, _j);
                  Vec3.transformMat4Normal(v3_1, v3_1, m4_local);
                  Vec3.toArray(normal, v3_1, _j);
                }
                writeBuffer(dataView, normal, normalFormat, normalOffset, bundle.view.stride);
              }
              tangentOffset = bundle.view.offset;
              tangentFormat = Format.UNKNOWN;
              for (var _a2 = 0; _a2 < bundle.attributes.length; _a2++) {
                var _attr2 = bundle.attributes[_a2];
                if (_attr2.name === AttributeName.ATTR_TANGENT) {
                  tangentFormat = _attr2.format;
                  break;
                }
                tangentOffset += FormatInfos[_attr2.format].size;
              }
              if (tangentFormat) {
                var tangent = readBuffer(dataView, tangentFormat, tangentOffset, bundle.view.length, bundle.view.stride);
                for (var _j2 = 0; _j2 < tangent.length; _j2 += 3) {
                  Vec3.fromArray(v3_1, tangent, _j2);
                  Vec3.transformMat4Normal(v3_1, v3_1, m4_local);
                  Vec3.toArray(tangent, v3_1, _j2);
                }
                writeBuffer(dataView, tangent, tangentFormat, tangentOffset, bundle.view.stride);
              }
              // merge UV
              uvOffset = bundle.view.offset;
              uvFormat = Format.UNKNOWN;
              for (var _a3 = 0; _a3 < bundle.attributes.length; _a3++) {
                var _attr3 = bundle.attributes[_a3];
                if (_attr3.name === AttributeName.ATTR_BATCH_UV) {
                  uvFormat = _attr3.format;
                  break;
                }
                uvOffset += FormatInfos[_attr3.format].size;
              }
              if (uvFormat) {
                mapBuffer(dataView, function (cur, idx) {
                  cur = repeat(cur); // warp to [0, 1] first
                  var comp = idx === 0 ? 'x' : 'y';
                  return cur * size[comp] + offset[comp];
                }, uvFormat, uvOffset, bundle.view.length, bundle.view.stride, dataView);
              }
              // merge joint indices
              var idxMap = jointIndexMap[_i];
              if (!idxMap) {
                return 1; // continue
              }
              jointOffset = bundle.view.offset;
              jointFormat = Format.UNKNOWN;
              for (var _a4 = 0; _a4 < bundle.attributes.length; _a4++) {
                var _attr4 = bundle.attributes[_a4];
                if (_attr4.name === AttributeName.ATTR_JOINTS) {
                  jointFormat = _attr4.format;
                  break;
                }
                jointOffset += FormatInfos[_attr4.format].size;
              }
              if (jointFormat) {
                mapBuffer(dataView, function (cur) {
                  return idxMap[cur];
                }, jointFormat, jointOffset, bundle.view.length, bundle.view.stride, dataView);
              }
            };
            for (var b = 0; b < newMesh.struct.vertexBundles.length; b++) {
              if (_loop5()) continue;
            }
            _this4._mesh.merge(newMesh);
          };
          for (var _i = 0; _i < unitLen; _i++) {
            if (_loop4()) continue;
          }
          this._onMeshChanged(this._mesh);
          this._updateModels();
        };
        _proto.cookTextures = function cookTextures(target, prop, passIdx) {
          var texImages = [];
          var texImageRegions = [];
          var texBuffers = [];
          var texBufferRegions = [];
          for (var u = 0; u < this.units.length; u++) {
            var unit = this.units[u];
            if (!unit.material) {
              continue;
            }
            var partial = unit.material.getProperty(prop, passIdx);
            if (partial && partial.image && partial.image.data) {
              var region = new BufferTextureCopy();
              region.texOffset.x = unit.offset.x * this.atlasSize;
              region.texOffset.y = unit.offset.y * this.atlasSize;
              region.texExtent.width = unit.size.x * this.atlasSize;
              region.texExtent.height = unit.size.y * this.atlasSize;
              var data = partial.image.data;
              if (!ArrayBuffer.isView(data)) {
                texImages.push(data);
                texImageRegions.push(region);
              } else {
                texBuffers.push(data);
                texBufferRegions.push(region);
              }
            }
          }
          var gfxTex = target.getGFXTexture();
          var _ref = cclegacy.director.root,
            device = _ref.device;
          if (texBuffers.length > 0) {
            device.copyBuffersToTexture(texBuffers, gfxTex, texBufferRegions);
          }
          if (texImages.length > 0) {
            device.copyTexImagesToTexture(texImages, gfxTex, texImageRegions);
          }
        };
        _proto.createTexture = function createTexture(prop) {
          var tex = new Texture2D();
          tex.setFilters(Filter.LINEAR, Filter.LINEAR);
          tex.setMipFilter(Filter.NEAREST);
          tex.reset({
            width: this.atlasSize,
            height: this.atlasSize,
            format: PixelFormat.RGBA8888
          });
          this._textures[prop] = tex;
          return tex;
        };
        _proto.resizeAtlases = function resizeAtlases() {
          for (var prop in this._textures) {
            var tex = this._textures[prop];
            tex.reset({
              width: this.atlasSize,
              height: this.atlasSize,
              format: PixelFormat.RGBA8888
            });
          }
        };
        _proto._createUnitMesh = function _createUnitMesh(unitIdx, mesh) {
          // add batch ID to this temp mesh
          // first, update bookkeeping
          var newMeshStruct = JSON.parse(JSON.stringify(mesh.struct));
          var modifiedBundles = {};
          for (var p = 0; p < mesh.struct.primitives.length; p++) {
            var primitive = mesh.struct.primitives[p];
            var uvOffset = 0;
            var uvFormat = Format.UNKNOWN;
            var bundleIdx = 0;
            for (; bundleIdx < primitive.vertexBundelIndices.length; bundleIdx++) {
              var bundle = mesh.struct.vertexBundles[primitive.vertexBundelIndices[bundleIdx]];
              uvOffset = bundle.view.offset;
              uvFormat = Format.UNKNOWN;
              for (var a = 0; a < bundle.attributes.length; a++) {
                var attr = bundle.attributes[a];
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
            var newBundle = newMeshStruct.vertexBundles[bundleIdx]; // put the new UVs in the same bundle with original UVs
            newBundle.attributes.push(batch_id);
            newBundle.attributes.push(batch_uv);
            newBundle.view.offset = 0;
            newBundle.view.length += newBundle.view.count * batch_extras_size;
            newBundle.view.stride += batch_extras_size;
          }
          var totalLength = 0;
          for (var b = 0; b < newMeshStruct.vertexBundles.length; b++) {
            totalLength += newMeshStruct.vertexBundles[b].view.length;
          }
          for (var _p = 0; _p < newMeshStruct.primitives.length; _p++) {
            var pm = newMeshStruct.primitives[_p];
            if (pm.indexView) {
              pm.indexView.offset = totalLength;
              totalLength += pm.indexView.length;
            }
          }
          // now, we ride!
          var newMeshData = new Uint8Array(totalLength);
          var oldMeshData = mesh.data;
          var newDataView = new DataView(newMeshData.buffer);
          var oldDataView = new DataView(oldMeshData.buffer);
          var isLittleEndian = cclegacy.sys.isLittleEndian;
          for (var _b in modifiedBundles) {
            var _newBundle = newMeshStruct.vertexBundles[_b];
            var oldBundle = mesh.struct.vertexBundles[_b];
            var _modifiedBundles$_b = modifiedBundles[_b],
              _uvFormat = _modifiedBundles$_b[0],
              _uvOffset = _modifiedBundles$_b[1];
            var uvs = readBuffer(oldDataView, _uvFormat, _uvOffset, oldBundle.view.length, oldBundle.view.stride);
            var oldView = oldBundle.view;
            var newView = _newBundle.view;
            var oldStride = oldView.stride;
            var newStride = newView.stride;
            var oldOffset = oldView.offset;
            var newOffset = newView.offset;
            for (var j = 0; j < newView.count; j++) {
              var srcVertex = oldMeshData.subarray(oldOffset, oldOffset + oldStride);
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
          for (var k = 0; k < newMeshStruct.primitives.length; k++) {
            var oldPrimitive = mesh.struct.primitives[k];
            var newPrimitive = newMeshStruct.primitives[k];
            if (oldPrimitive.indexView && newPrimitive.indexView) {
              var _oldStride = oldPrimitive.indexView.stride;
              var _newStride = newPrimitive.indexView.stride;
              var _oldOffset = oldPrimitive.indexView.offset;
              var _newOffset = newPrimitive.indexView.offset;
              for (var _j3 = 0; _j3 < newPrimitive.indexView.count; _j3++) {
                var srcIndices = oldMeshData.subarray(_oldOffset, _oldOffset + _oldStride);
                newMeshData.set(srcIndices, _newOffset);
                _newOffset += _newStride;
                _oldOffset += _oldStride;
              }
            }
          }
          var newMesh = new Mesh();
          newMesh.reset({
            struct: newMeshStruct,
            data: newMeshData
          });
          return newMesh;
        };
        _createClass(SkinnedMeshBatchRenderer, [{
          key: "mesh",
          get: function get() {
            return _SkinnedMeshRenderer.prototype.mesh;
          },
          set: function set(val) {
            this.mesh = val;
          }
        }, {
          key: "skeleton",
          get: function get() {
            return _SkinnedMeshRenderer.prototype.skeleton;
          },
          set: function set(val) {
            this.skeleton = val;
          }
        }]);
        return SkinnedMeshBatchRenderer;
      }(SkinnedMeshRenderer), (_initializer7 = _applyDecoratedInitializer(_class5.prototype, "atlasSize", [serializable, _dec10], function () {
        return 1024;
      }), _initializer8 = _applyDecoratedInitializer(_class5.prototype, "batchableTextureNames", [_dec11, serializable, _dec12], function () {
        return [];
      }), _initializer9 = _applyDecoratedInitializer(_class5.prototype, "units", [_dec13, serializable, _dec14], function () {
        return [];
      }), _applyDecoratedDescriptor(_class5.prototype, "mesh", [override, _dec15], Object.getOwnPropertyDescriptor(_class5.prototype, "mesh"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "skeleton", [override, _dec16], Object.getOwnPropertyDescriptor(_class5.prototype, "skeleton"), _class5.prototype)), _class5)) || _class4) || _class4) || _class4) || _class4) || _class4));
    }
  };
});