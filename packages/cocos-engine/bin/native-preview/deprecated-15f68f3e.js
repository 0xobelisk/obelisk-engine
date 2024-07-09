System.register(['./node-event-18d96a1b.js', './index-ce98320e.js', './skeleton.jsb-04631524.js', './builtin-res-mgr.jsb-c9e8e53a.js', './mesh-renderer-ea94cc01.js', './mesh.jsb-cea8fe4b.js', './find-7a03d1cc.js', './buffer-9511d9f4.js', './device-90bc7390.js'], (function (exports) {
    'use strict';
    var _applyDecoratedDescriptor, legacyCC, ccclass, type, applyDecoratedInitializer, executionOrder, assertIsTrue, Mat4, Vec3, override, Vec2, serializable, CCString, setClassAlias, Skeleton, Node, Material, Texture2D, Filter, PixelFormat, MeshRenderer, Mesh, readBuffer, writeBuffer, mapBuffer, Attribute, AttributeName, Format, FormatInfos, Type, BufferTextureCopy;
    return {
        setters: [function (module) {
            _applyDecoratedDescriptor = module.H;
        }, function (module) {
            legacyCC = module.l;
            ccclass = module.by;
            type = module.bw;
            applyDecoratedInitializer = module.bx;
            executionOrder = module.cs;
            assertIsTrue = module.bu;
            Mat4 = module.s;
            Vec3 = module.n;
            override = module.bd;
            Vec2 = module.V;
            serializable = module.bf;
            CCString = module.aw;
            setClassAlias = module.cj;
        }, function (module) {
            Skeleton = module.S;
        }, function (module) {
            Node = module.Q;
            Material = module.ap;
            Texture2D = module.am;
            Filter = module.aR;
            PixelFormat = module.aS;
        }, function (module) {
            MeshRenderer = module.M;
        }, function (module) {
            Mesh = module.M;
        }, function () {}, function (module) {
            readBuffer = module.r;
            writeBuffer = module.w;
            mapBuffer = module.m;
        }, function (module) {
            Attribute = module.ao;
            AttributeName = module.aN;
            Format = module.b;
            FormatInfos = module.aO;
            Type = module.T;
            BufferTextureCopy = module.a1;
        }],
        execute: (function () {

            exports({
                c: getWorldTransformUntilRoot,
                g: getPathFromRoot
            });

            const SkinningModel = jsb.SkinningModel;
            legacyCC.SkinningModel = jsb.SkinningModel;

            const BakedSkinningModel = jsb.BakedSkinningModel;
            legacyCC.BakedSkinningModel = jsb.BakedSkinningModel;
            jsb.MorphModel;
            const bakedSkinningModelProto = BakedSkinningModel.prototype;
            bakedSkinningModelProto._ctor = function () {
              jsb.Model.prototype._ctor.call(this);
              this.uploadedAnim = undefined;
              this._dataPoolManager = legacyCC.director.root.dataPoolManager;
              const jointTextureInfo = new Float32Array(4);
              const animInfo = this._dataPoolManager.jointAnimationInfo.getData();
              this._jointsMedium = {
                buffer: null,
                jointTextureInfo,
                animInfo,
                texture: null,
                boundsInfo: null
              };
              this._skeleton = null;
              this._mesh = null;
            };
            const oldDestroy = bakedSkinningModelProto.destroy;
            bakedSkinningModelProto.destroy = function () {
              this.uploadedAnim = undefined;
              this._jointsMedium.boundsInfo = null;
              this._applyJointTexture();
              oldDestroy.call(this);
            };
            const oldBindSkeleton = bakedSkinningModelProto.bindSkeleton;
            bakedSkinningModelProto.bindSkeleton = function (skeleton = null, skinningRoot = null, mesh = null) {
              this._skeleton = skeleton;
              this._mesh = mesh;
              if (!skeleton || !skinningRoot || !mesh) {
                return;
              }
              this.transform = skinningRoot;
              const resMgr = this._dataPoolManager;
              this._jointsMedium.animInfo = resMgr.jointAnimationInfo.getData(skinningRoot.uuid);
              const animInfo = this._jointsMedium.animInfo;
              this.syncAnimInfoForJS(animInfo.buffer, animInfo.data, animInfo.dirtyForJSB);
              oldBindSkeleton.apply(this, arguments);
            };
            bakedSkinningModelProto.uploadAnimation = function (anim) {
              var _texture;
              if (!this._skeleton || !this._mesh || this.uploadedAnim === anim) {
                return;
              }
              this.uploadedAnim = anim;
              this.setUploadedAnimForJS(!!anim);
              const resMgr = this._dataPoolManager;
              let texture = null;
              let modelBounds = null;
              if (anim) {
                texture = resMgr.jointTexturePool.getSequencePoseTexture(this._skeleton, anim, this._mesh, this.transform);
                this._jointsMedium.boundsInfo = texture && texture.bounds.get(this._mesh.hash);
                modelBounds = null;
              } else {
                texture = resMgr.jointTexturePool.getDefaultPoseTexture(this._skeleton, this._mesh, this.transform);
                this._jointsMedium.boundsInfo = null;
                modelBounds = texture && texture.bounds.get(this._mesh.hash)[0];
              }
              this._applyJointTexture(texture);
              const {
                jointTextureInfo
              } = this._jointsMedium;
              const tex = (_texture = texture) === null || _texture === void 0 ? void 0 : _texture.handle.texture;
              this.syncDataForJS(this._jointsMedium.boundsInfo, modelBounds, jointTextureInfo[0], jointTextureInfo[1], jointTextureInfo[2], jointTextureInfo[3], tex, this._jointsMedium.animInfo.data);
            };
            bakedSkinningModelProto._applyJointTexture = function (texture = null) {
              const oldTex = this._jointsMedium.texture;
              if (oldTex && oldTex !== texture) {
                this._dataPoolManager.jointTexturePool.releaseHandle(oldTex);
              }
              this._jointsMedium.texture = texture;
              if (!texture) {
                return;
              }
              const {
                jointTextureInfo
              } = this._jointsMedium;
              jointTextureInfo[0] = texture.handle.texture.width;
              jointTextureInfo[1] = this._skeleton.joints.length;
              jointTextureInfo[2] = texture.pixelOffset + 0.1;
              jointTextureInfo[3] = 1 / jointTextureInfo[0];
            };

            var _dec$1, _dec2$1, _dec3$1, _dec4$1, _dec5$1, _dec6$1, _class$1, _class2$1, _initializer$1, _initializer2$1;
            let SkinnedMeshRenderer = exports('S', (_dec$1 = ccclass('cc.SkinnedMeshRenderer'), _dec2$1 = executionOrder(100), _dec3$1 = type(Skeleton), _dec4$1 = type(Node), _dec5$1 = type(Skeleton), _dec6$1 = type(Node), _dec$1(_class$1 = _dec2$1(_class$1 = (_class2$1 = class SkinnedMeshRenderer extends MeshRenderer {
              get skeleton() {
                return this._skeleton;
              }
              set skeleton(val) {
                if (val === this._skeleton) {
                  return;
                }
                this._skeleton = val;
                this._update();
              }
              get skinningRoot() {
                return this._skinningRoot;
              }
              set skinningRoot(value) {
                if (value === this._skinningRoot) {
                  return;
                }
                this._skinningRoot = value;
                this._tryBindAnimation();
                this._update();
              }
              get model() {
                return this._model;
              }
              constructor() {
                super();
                this._skeleton = _initializer$1 && _initializer$1();
                this._skinningRoot = _initializer2$1 && _initializer2$1();
                this._clip = null;
                this.associatedAnimation = null;
                this._modelType = BakedSkinningModel;
              }
              onLoad() {
                super.onLoad();
                this._tryBindAnimation();
              }
              onDestroy() {
                if (this.associatedAnimation) {
                  this.associatedAnimation.notifySkinnedMeshRemoved(this);
                  assertIsTrue(this.associatedAnimation === null);
                }
                super.onDestroy();
              }
              uploadAnimation(clip) {
                this._clip = clip;
                if (this.model && this.model.uploadAnimation) {
                  this.model.uploadAnimation(clip);
                }
              }
              setUseBakedAnimation(val = true, force = false) {
                const modelType = val ? BakedSkinningModel : SkinningModel;
                if (!force && this._modelType === modelType) {
                  return;
                }
                this._modelType = modelType;
                if (this._model) {
                  legacyCC.director.root.destroyModel(this._model);
                  this._model = null;
                  this._models.length = 0;
                  this._updateModels();
                  this._updateCastShadow();
                  this._updateReceiveShadow();
                  this._updateUseLightProbe();
                  if (this.enabledInHierarchy) {
                    this._attachToScene();
                  }
                }
              }
              setSharedMaterial(material, index) {
                super.setSharedMaterial(material, index);
                if (this._modelType === SkinningModel) {
                  this.getMaterialInstance(index);
                }
              }
              _updateModelParams() {
                this._update();
                super._updateModelParams();
              }
              _tryBindAnimation() {
                const {
                  _skinningRoot: skinningRoot
                } = this;
                if (!skinningRoot) {
                  return;
                }
                let skinningRootIsParent = false;
                for (let current = this.node; current; current = current.parent) {
                  if (current === skinningRoot) {
                    skinningRootIsParent = true;
                    break;
                  }
                }
                if (!skinningRootIsParent) {
                  return;
                }
                const animation = skinningRoot.getComponent('cc.SkeletalAnimation');
                if (animation && animation.enabledInHierarchy) {
                  animation.notifySkinnedMeshAdded(this);
                } else {
                  this.setUseBakedAnimation(false);
                }
              }
              _update() {
                if (this.model) {
                  this.model.bindSkeleton(this._skeleton, this._skinningRoot, this._mesh);
                  if (this.model.uploadAnimation) {
                    this.model.uploadAnimation(this._clip);
                  }
                }
              }
            }, (_initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "_skeleton", [_dec3$1], function () {
              return null;
            }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "_skinningRoot", [_dec4$1], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "skeleton", [_dec5$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "skeleton"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "skinningRoot", [_dec6$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "skinningRoot"), _class2$1.prototype)), _class2$1)) || _class$1) || _class$1));

            const m4_1 = new Mat4();
            function getPathFromRoot(target, root) {
              let node = target;
              let path = '';
              while (node !== null && node !== root) {
                path = `${node.name}/${path}`;
                node = node.parent;
              }
              return path.slice(0, -1);
            }
            function getWorldTransformUntilRoot(target, root, outMatrix) {
              Mat4.identity(outMatrix);
              while (target !== root) {
                Mat4.fromRTS(m4_1, target.rotation, target.position, target.scale);
                Mat4.multiply(outMatrix, m4_1, outMatrix);
                target = target.parent;
              }
              return outMatrix;
            }

            var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _dec6, _dec7, _dec8, _dec9, _class4, _class5, _initializer7, _initializer8, _initializer9;
            const repeat = n => n - Math.floor(n);
            const batch_id = new Attribute(AttributeName.ATTR_BATCH_ID, Format.R32F);
            const batch_uv = new Attribute(AttributeName.ATTR_BATCH_UV, Format.RG32F);
            const batch_extras_size = FormatInfos[batch_id.format].size + FormatInfos[batch_uv.format].size;
            let SkinnedMeshUnit = exports('b', (_dec = ccclass('cc.SkinnedMeshUnit'), _dec2 = type(Mesh), _dec3 = type(Skeleton), _dec4 = type(Material), _dec5 = type(SkinnedMeshRenderer), _dec(_class = (_class2 = class SkinnedMeshUnit {
              constructor() {
                this.mesh = _initializer && _initializer();
                this.skeleton = _initializer2 && _initializer2();
                this.material = _initializer3 && _initializer3();
                this._localTransform = _initializer4 && _initializer4();
                this._offset = _initializer5 && _initializer5();
                this._size = _initializer6 && _initializer6();
              }
              set offset(offset) {
                Vec2.copy(this._offset, offset);
              }
              get offset() {
                return this._offset;
              }
              set size(size) {
                Vec2.copy(this._size, size);
              }
              get size() {
                return this._size;
              }
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
            }, (_initializer = applyDecoratedInitializer(_class2.prototype, "mesh", [_dec2], function () {
              return null;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "skeleton", [_dec3], function () {
              return null;
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "material", [_dec4], function () {
              return null;
            }), _initializer4 = applyDecoratedInitializer(_class2.prototype, "_localTransform", [serializable], function () {
              return new Mat4();
            }), _initializer5 = applyDecoratedInitializer(_class2.prototype, "_offset", [serializable], function () {
              return new Vec2(0, 0);
            }), _initializer6 = applyDecoratedInitializer(_class2.prototype, "_size", [serializable], function () {
              return new Vec2(1, 1);
            }), _applyDecoratedDescriptor(_class2.prototype, "copyFrom", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "copyFrom"), _class2.prototype)), _class2)) || _class));
            const m4_local = new Mat4();
            new Mat4();
            const v3_1 = new Vec3();
            let SkinnedMeshBatchRenderer = exports('a', (_dec6 = ccclass('cc.SkinnedMeshBatchRenderer'), _dec7 = executionOrder(100), _dec8 = type([CCString]), _dec9 = type([SkinnedMeshUnit]), _dec6(_class4 = _dec7(_class4 = (_class5 = class SkinnedMeshBatchRenderer extends SkinnedMeshRenderer {
              constructor(...args) {
                super(...args);
                this.atlasSize = _initializer7 && _initializer7();
                this.batchableTextureNames = _initializer8 && _initializer8();
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
                      continue;
                    }
                    joints.push(path);
                    bindposes.push(Mat4.multiply(new Mat4(), partial.bindposes[i] || Mat4.IDENTITY, m4_local));
                  }
                }
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
                        cur = repeat(cur);
                        const comp = idx === 0 ? 'x' : 'y';
                        return cur * size[comp] + offset[comp];
                      }, uvFormat, uvOffset, bundle.view.length, bundle.view.stride, dataView);
                    }
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
                } = legacyCC.director.root;
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
                  const newBundle = newMeshStruct.vertexBundles[bundleIdx];
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
                const newMeshData = new Uint8Array(totalLength);
                const oldMeshData = mesh.data;
                const newDataView = new DataView(newMeshData.buffer);
                const oldDataView = new DataView(oldMeshData.buffer);
                const {
                  isLittleEndian
                } = legacyCC.sys;
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
                    newDataView.setFloat32(newOffset + oldStride, unitIdx);
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
            }, (_initializer7 = applyDecoratedInitializer(_class5.prototype, "atlasSize", [serializable], function () {
              return 1024;
            }), _initializer8 = applyDecoratedInitializer(_class5.prototype, "batchableTextureNames", [_dec8, serializable], function () {
              return [];
            }), _initializer9 = applyDecoratedInitializer(_class5.prototype, "units", [_dec9, serializable], function () {
              return [];
            }), _applyDecoratedDescriptor(_class5.prototype, "mesh", [override], Object.getOwnPropertyDescriptor(_class5.prototype, "mesh"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "skeleton", [override], Object.getOwnPropertyDescriptor(_class5.prototype, "skeleton"), _class5.prototype)), _class5)) || _class4) || _class4));

            legacyCC.SkinningModelComponent = SkinnedMeshRenderer;
            setClassAlias(SkinnedMeshRenderer, 'cc.SkinningModelComponent');
            legacyCC.SkinningModelUnit = SkinnedMeshUnit;
            setClassAlias(SkinnedMeshUnit, 'cc.SkinningModelUnit');
            legacyCC.BatchedSkinningModelComponent = SkinnedMeshBatchRenderer;
            setClassAlias(SkinnedMeshBatchRenderer, 'cc.BatchedSkinningModelComponent');

        })
    };
}));
