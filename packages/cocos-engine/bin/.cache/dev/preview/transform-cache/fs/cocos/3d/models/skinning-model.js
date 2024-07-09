System.register("q-bundled:///fs/cocos/3d/models/skinning-model.js", ["../../core/index.js", "../../gfx/index.js", "../../rendering/define.js", "../../render-scene/scene/model.js", "../skeletal-animation/skeletal-animation-utils.js", "./morph-model.js", "../../animation/skeletal-animation-utils.js", "../../render-scene/index.js", "../../game/index.js", "../../asset/assets/asset-enum.js", "../../asset/assets/index.js"], function (_export, _context) {
  "use strict";

  var geometry, Mat4, Vec3, warnID, BufferUsageBit, MemoryUsageBit, BufferInfo, FormatFeatureBit, Format, UBOSkinning, UNIFORM_REALTIME_JOINT_TEXTURE_BINDING, ModelType, uploadJointData, MorphModel, deleteTransform, getTransform, getWorldMatrix, BatchingSchemes, director, PixelFormat, Texture2D, ImageAsset, uniformPatches, texturePatches, v3_min, v3_max, v3_1, v3_2, m4_1, ab_1, RealTimeJointTexture, SkinningModel;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
                                                                                                                                                                                                            http://www.cocos.com
                                                                                                                                                                                                           
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
  function getRelevantBuffers(outIndices, outBuffers, jointMaps, targetJoint) {
    for (var i = 0; i < jointMaps.length; i++) {
      var idxMap = jointMaps[i];
      var index = -1;
      for (var j = 0; j < idxMap.length; j++) {
        if (idxMap[j] === targetJoint) {
          index = j;
          break;
        }
      }
      if (index >= 0) {
        outBuffers.push(i);
        outIndices.push(index);
      }
    }
  }
  return {
    setters: [function (_coreIndexJs) {
      geometry = _coreIndexJs.geometry;
      Mat4 = _coreIndexJs.Mat4;
      Vec3 = _coreIndexJs.Vec3;
      warnID = _coreIndexJs.warnID;
    }, function (_gfxIndexJs) {
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      BufferInfo = _gfxIndexJs.BufferInfo;
      FormatFeatureBit = _gfxIndexJs.FormatFeatureBit;
      Format = _gfxIndexJs.Format;
    }, function (_renderingDefineJs) {
      UBOSkinning = _renderingDefineJs.UBOSkinning;
      UNIFORM_REALTIME_JOINT_TEXTURE_BINDING = _renderingDefineJs.UNIFORM_REALTIME_JOINT_TEXTURE_BINDING;
    }, function (_renderSceneSceneModelJs) {
      ModelType = _renderSceneSceneModelJs.ModelType;
    }, function (_skeletalAnimationSkeletalAnimationUtilsJs) {
      uploadJointData = _skeletalAnimationSkeletalAnimationUtilsJs.uploadJointData;
    }, function (_morphModelJs) {
      MorphModel = _morphModelJs.MorphModel;
    }, function (_animationSkeletalAnimationUtilsJs) {
      deleteTransform = _animationSkeletalAnimationUtilsJs.deleteTransform;
      getTransform = _animationSkeletalAnimationUtilsJs.getTransform;
      getWorldMatrix = _animationSkeletalAnimationUtilsJs.getWorldMatrix;
    }, function (_renderSceneIndexJs) {
      BatchingSchemes = _renderSceneIndexJs.BatchingSchemes;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
    }, function (_assetAssetsAssetEnumJs) {
      PixelFormat = _assetAssetsAssetEnumJs.PixelFormat;
    }, function (_assetAssetsIndexJs) {
      Texture2D = _assetAssetsIndexJs.Texture2D;
      ImageAsset = _assetAssetsIndexJs.ImageAsset;
    }],
    execute: function () {
      uniformPatches = [{
        name: 'CC_USE_SKINNING',
        value: true
      }, {
        name: 'CC_USE_REAL_TIME_JOINT_TEXTURE',
        value: false
      }];
      texturePatches = [{
        name: 'CC_USE_SKINNING',
        value: true
      }, {
        name: 'CC_USE_REAL_TIME_JOINT_TEXTURE',
        value: true
      }];
      v3_min = new Vec3();
      v3_max = new Vec3();
      v3_1 = new Vec3();
      v3_2 = new Vec3();
      m4_1 = new Mat4();
      ab_1 = new geometry.AABB();
      RealTimeJointTexture = function RealTimeJointTexture() {
        this._format = PixelFormat.RGBA32F;
        // default use float texture
        this._textures = [];
        this._buffers = [];
      };
      /**
       * @en
       * The skinning model that is using real-time pose calculation.
       * @zh
       * 实时计算动画的蒙皮模型。
       */
      RealTimeJointTexture.WIDTH = 256;
      RealTimeJointTexture.HEIGHT = 3;
      _export("SkinningModel", SkinningModel = /*#__PURE__*/function (_MorphModel) {
        _inheritsLoose(SkinningModel, _MorphModel);
        function SkinningModel() {
          var _this;
          _this = _MorphModel.call(this) || this;
          _this._buffers = [];
          _this._dataArray = [];
          _this._joints = [];
          _this._bufferIndices = null;
          _this._realTimeJointTexture = new RealTimeJointTexture();
          _this._realTimeTextureMode = false;
          _this.type = ModelType.SKINNING;
          return _this;
        }
        var _proto = SkinningModel.prototype;
        _proto.destroy = function destroy() {
          this.bindSkeleton();
          if (this._buffers.length) {
            for (var i = 0; i < this._buffers.length; i++) {
              this._buffers[i].destroy();
            }
            this._buffers.length = 0;
          }
          this._dataArray.length = 0;
          this._realTimeJointTexture._textures.forEach(function (tex) {
            tex.destroy();
          });
          this._realTimeJointTexture._textures.length = 0;
          this._realTimeJointTexture._buffers.length = 0;
          _MorphModel.prototype.destroy.call(this);
        }

        /**
         * @en Abstract function for [[BakedSkinningModel]], empty implementation.
         * @zh 由 [[BakedSkinningModel]] 继承的空函数。
         */;
        _proto.uploadAnimation = function uploadAnimation() {}

        /**
         * @en Bind the skeleton with its skinning root node and the mesh data.
         * @zh 在模型中绑定一个骨骼，需要提供骨骼的蒙皮根节点和蒙皮网格数据。
         * @param skeleton @en The skeleton to be bound @zh 要绑定的骨骼
         * @param skinningRoot @en The skinning root of the skeleton @zh 骨骼的蒙皮根节点
         * @param mesh @en The mesh @zh 蒙皮网格
         * @returns void
         */;
        _proto.bindSkeleton = function bindSkeleton(skeleton, skinningRoot, mesh) {
          if (skeleton === void 0) {
            skeleton = null;
          }
          if (skinningRoot === void 0) {
            skinningRoot = null;
          }
          if (mesh === void 0) {
            mesh = null;
          }
          for (var i = 0; i < this._joints.length; i++) {
            deleteTransform(this._joints[i].target);
          }
          this._bufferIndices = null;
          this._joints.length = 0;
          if (!skeleton || !skinningRoot || !mesh) {
            return;
          }
          this._realTimeTextureMode = false;
          if (UBOSkinning.JOINT_UNIFORM_CAPACITY < skeleton.joints.length) {
            this._realTimeTextureMode = true;
          }
          this.transform = skinningRoot;
          var boneSpaceBounds = mesh.getBoneSpaceBounds(skeleton);
          var jointMaps = mesh.struct.jointMaps;
          this._ensureEnoughBuffers(jointMaps && jointMaps.length || 1);
          this._bufferIndices = mesh.jointBufferIndices;
          this._initRealTimeJointTexture();
          for (var index = 0; index < skeleton.joints.length; index++) {
            var bound = boneSpaceBounds[index];
            var target = skinningRoot.getChildByPath(skeleton.joints[index]);
            if (!bound || !target) {
              continue;
            }
            var transform = getTransform(target, skinningRoot);
            var bindpose = skeleton.bindposes[index];
            var indices = [];
            var buffers = [];
            if (!jointMaps) {
              indices.push(index);
              buffers.push(0);
            } else {
              getRelevantBuffers(indices, buffers, jointMaps, index);
            }
            this._joints.push({
              indices: indices,
              buffers: buffers,
              bound: bound,
              target: target,
              bindpose: bindpose,
              transform: transform
            });
          }
        }

        /**
         * @en Update world transform and bounding boxes for the model
         * @zh 更新模型的世界矩阵和包围盒
         * @param stamp @en The update time stamp @zh 更新的时间戳
         */;
        _proto.updateTransform = function updateTransform(stamp) {
          var root = this.transform;
          if (root.hasChangedFlags || root.isTransformDirty()) {
            root.updateWorldTransform();
            this._localDataUpdated = true;
          }
          // update bounds
          Vec3.set(v3_min, Infinity, Infinity, Infinity);
          Vec3.set(v3_max, -Infinity, -Infinity, -Infinity);
          for (var i = 0; i < this._joints.length; i++) {
            var _this$_joints$i = this._joints[i],
              bound = _this$_joints$i.bound,
              transform = _this$_joints$i.transform;
            var worldMatrix = getWorldMatrix(transform, stamp);
            geometry.AABB.transform(ab_1, bound, worldMatrix);
            ab_1.getBoundary(v3_1, v3_2);
            Vec3.min(v3_min, v3_min, v3_1);
            Vec3.max(v3_max, v3_max, v3_2);
          }
          var worldBounds = this._worldBounds;
          if (this._modelBounds && worldBounds) {
            geometry.AABB.fromPoints(this._modelBounds, v3_min, v3_max);
            this._modelBounds.transform(root._mat, root._pos, root._rot, root._scale, this._worldBounds);
          }
        }

        /**
         * @en Update uniform buffer objects for rendering.
         * @zh 更新用于渲染的 UBO
         * @param stamp @en The update time stamp @zh 更新的时间戳
         * @returns @en successful or not @zh 更新是否成功
         */;
        _proto.updateUBOs = function updateUBOs(stamp) {
          _MorphModel.prototype.updateUBOs.call(this, stamp);
          for (var i = 0; i < this._joints.length; i++) {
            var _this$_joints$i2 = this._joints[i],
              indices = _this$_joints$i2.indices,
              buffers = _this$_joints$i2.buffers,
              transform = _this$_joints$i2.transform,
              bindpose = _this$_joints$i2.bindpose;
            Mat4.multiply(m4_1, transform.world, bindpose);
            for (var b = 0; b < buffers.length; b++) {
              uploadJointData(this._dataArray[buffers[b]], indices[b] * 12, m4_1, i === 0);
            }
          }
          if (this._realTimeTextureMode) {
            this._updateRealTimeJointTextureBuffer();
          } else {
            for (var _b = 0; _b < this._buffers.length; _b++) {
              this._buffers[_b].update(this._dataArray[_b]);
            }
          }
          return true;
        }

        /**
         * @en Initialize sub model with the sub mesh data and the material
         * @zh 用子网格数据和材质初始化一个子模型
         * @param idx @en The index of the sub model to be initialized @zh 需要初始化的子模型序号
         * @param subMeshData @en The sub mesh data @zh 子网格数据
         * @param mat @en The material @zh 子模型材质
         */;
        _proto.initSubModel = function initSubModel(idx, subMeshData, mat) {
          var original = subMeshData.vertexBuffers;
          var iaInfo = subMeshData.iaInfo;
          iaInfo.vertexBuffers = subMeshData.jointMappedBuffers;
          _MorphModel.prototype.initSubModel.call(this, idx, subMeshData, mat);
          iaInfo.vertexBuffers = original;
        }

        // override
        ;
        _proto.getMacroPatches = function getMacroPatches(subModelIndex) {
          var superMacroPatches = _MorphModel.prototype.getMacroPatches.call(this, subModelIndex);
          var myPatches = uniformPatches;
          if (this._realTimeTextureMode) {
            myPatches = texturePatches;
          }
          if (superMacroPatches) {
            return myPatches.concat(superMacroPatches);
          }
          return myPatches;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._updateLocalDescriptors = function _updateLocalDescriptors(submodelIdx, descriptorSet) {
          _MorphModel.prototype._updateLocalDescriptors.call(this, submodelIdx, descriptorSet);
          var idx = this._bufferIndices[submodelIdx];
          if (this._realTimeTextureMode) {
            this._bindRealTimeJointTexture(idx, descriptorSet);
          } else {
            var buffer = this._buffers[idx];
            if (buffer) {
              descriptorSet.bindBuffer(UBOSkinning.BINDING, buffer);
            }
          }
        };
        _proto._updateInstancedAttributes = function _updateInstancedAttributes(attributes, subModel) {
          var pass = subModel.passes[0];
          if (pass.batchingScheme !== BatchingSchemes.NONE) {
            // TODO(holycanvas): #9203 better to print the complete path instead of only the current node
            warnID(3936, this.node.getPathInHierarchy());
          }
          _MorphModel.prototype._updateInstancedAttributes.call(this, attributes, subModel);
        };
        _proto._ensureEnoughBuffers = function _ensureEnoughBuffers(count) {
          if (this._buffers.length) {
            for (var i = 0; i < this._buffers.length; i++) {
              this._buffers[i].destroy();
            }
            this._buffers.length = 0;
          }
          if (this._dataArray.length) this._dataArray.length = 0;
          if (!this._realTimeTextureMode) {
            for (var _i = 0; _i < count; _i++) {
              this._buffers[_i] = this._device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOSkinning.SIZE, UBOSkinning.SIZE));
              var maxJoints = UBOSkinning.JOINT_UNIFORM_CAPACITY;
              this._dataArray[_i] = new Float32Array(12 * maxJoints);
            }
          } else {
            for (var _i2 = 0; _i2 < count; _i2++) {
              var _maxJoints = RealTimeJointTexture.WIDTH;
              this._dataArray[_i2] = new Float32Array(12 * _maxJoints);
            }
          }
        };
        _proto._initRealTimeJointTexture = function _initRealTimeJointTexture() {
          if (this._realTimeJointTexture._textures.length) {
            this._realTimeJointTexture._textures.forEach(function (tex) {
              tex.destroy();
            });
            this._realTimeJointTexture._textures.length = 0;
          }
          this._realTimeJointTexture._buffers.length = 0;
          if (!this._realTimeTextureMode) return;
          var gfxDevice = director.root.device;
          var width = RealTimeJointTexture.WIDTH;
          var height = RealTimeJointTexture.HEIGHT;
          var hasFeatureFloatTexture = gfxDevice.getFormatFeatures(Format.RGBA32F) & FormatFeatureBit.SAMPLED_TEXTURE;
          if (hasFeatureFloatTexture === 0) {
            this._realTimeJointTexture._format = PixelFormat.RGBA8888;
            width = 4 * RealTimeJointTexture.WIDTH;
          }
          var textures = this._realTimeJointTexture._textures;
          var buffers = this._realTimeJointTexture._buffers;
          var pixelFormat = this._realTimeJointTexture._format;
          for (var i = 0; i < this._dataArray.length; i++) {
            buffers[i] = new Float32Array(4 * RealTimeJointTexture.HEIGHT * RealTimeJointTexture.WIDTH);
            var arrayBuffer = buffers[i];
            var updateView = pixelFormat === PixelFormat.RGBA32F ? arrayBuffer : new Uint8Array(arrayBuffer.buffer);
            var image = new ImageAsset({
              width: width,
              height: height,
              _data: updateView,
              _compressed: false,
              format: pixelFormat
            });
            var texture = new Texture2D();
            texture.setFilters(Texture2D.Filter.NEAREST, Texture2D.Filter.NEAREST);
            texture.setMipFilter(Texture2D.Filter.NONE);
            texture.setWrapMode(Texture2D.WrapMode.CLAMP_TO_EDGE, Texture2D.WrapMode.CLAMP_TO_EDGE, Texture2D.WrapMode.CLAMP_TO_EDGE);
            texture.image = image;
            textures[i] = texture;
          }
        };
        _proto._bindRealTimeJointTexture = function _bindRealTimeJointTexture(idx, descriptorSet) {
          if (!this._realTimeTextureMode) return;
          var jointTexture = this._realTimeJointTexture._textures[idx];
          if (jointTexture) {
            var gfxTexture = jointTexture.getGFXTexture();
            var sampler = jointTexture.getGFXSampler();
            descriptorSet.bindTexture(UNIFORM_REALTIME_JOINT_TEXTURE_BINDING, gfxTexture);
            descriptorSet.bindSampler(UNIFORM_REALTIME_JOINT_TEXTURE_BINDING, sampler);
          }
        };
        _proto._updateRealTimeJointTextureBuffer = function _updateRealTimeJointTextureBuffer() {
          if (!this._realTimeTextureMode) return;
          var textures = this._realTimeJointTexture._textures;
          var buffers = this._realTimeJointTexture._buffers;
          for (var idx = 0; idx < textures.length; idx++) {
            var arrayBuffer = buffers[idx];
            var src = this._dataArray[idx];
            var count = src.length / 12; // mat3x4
            var idxSrc = 0;
            var idxDst = 0;
            for (var i = 0; i < count; i++) {
              idxDst = 4 * i;
              arrayBuffer[idxDst++] = src[idxSrc++];
              arrayBuffer[idxDst++] = src[idxSrc++];
              arrayBuffer[idxDst++] = src[idxSrc++];
              arrayBuffer[idxDst++] = src[idxSrc++];
              idxDst = 4 * (i + RealTimeJointTexture.WIDTH);
              arrayBuffer[idxDst++] = src[idxSrc++];
              arrayBuffer[idxDst++] = src[idxSrc++];
              arrayBuffer[idxDst++] = src[idxSrc++];
              arrayBuffer[idxDst++] = src[idxSrc++];
              idxDst = 4 * (i + 2 * RealTimeJointTexture.WIDTH);
              arrayBuffer[idxDst++] = src[idxSrc++];
              arrayBuffer[idxDst++] = src[idxSrc++];
              arrayBuffer[idxDst++] = src[idxSrc++];
              arrayBuffer[idxDst++] = src[idxSrc++];
            }
            var pixelFormat = this._realTimeJointTexture._format;
            var updateView = pixelFormat === PixelFormat.RGBA32F ? arrayBuffer : new Uint8Array(arrayBuffer.buffer);
            textures[idx].uploadData(updateView);
          }
        };
        return SkinningModel;
      }(MorphModel));
    }
  };
});