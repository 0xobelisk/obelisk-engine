System.register("q-bundled:///fs/cocos/3d/models/baked-skinning-model.js", ["../../core/index.js", "../../gfx/index.js", "../../rendering/define.js", "../../render-scene/scene/model.js", "./morph-model.js", "../misc/joint-texture-sampler-info.js"], function (_export, _context) {
  "use strict";

  var cclegacy, BufferUsageBit, MemoryUsageBit, BufferInfo, INST_JOINT_ANIM_INFO, UBOSkinningAnimation, UBOSkinningTexture, UNIFORM_JOINT_TEXTURE_BINDING, ModelType, MorphModel, jointTextureSamplerInfo, myPatches, BakedSkinningModel;
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
  return {
    setters: [function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_gfxIndexJs) {
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      BufferInfo = _gfxIndexJs.BufferInfo;
    }, function (_renderingDefineJs) {
      INST_JOINT_ANIM_INFO = _renderingDefineJs.INST_JOINT_ANIM_INFO;
      UBOSkinningAnimation = _renderingDefineJs.UBOSkinningAnimation;
      UBOSkinningTexture = _renderingDefineJs.UBOSkinningTexture;
      UNIFORM_JOINT_TEXTURE_BINDING = _renderingDefineJs.UNIFORM_JOINT_TEXTURE_BINDING;
    }, function (_renderSceneSceneModelJs) {
      ModelType = _renderSceneSceneModelJs.ModelType;
    }, function (_morphModelJs) {
      MorphModel = _morphModelJs.MorphModel;
    }, function (_miscJointTextureSamplerInfoJs) {
      jointTextureSamplerInfo = _miscJointTextureSamplerInfoJs.jointTextureSamplerInfo;
    }],
    execute: function () {
      myPatches = [{
        name: 'CC_USE_SKINNING',
        value: true
      }, {
        name: 'CC_USE_BAKED_ANIMATION',
        value: true
      }];
      /**
       * @en
       * The skinning model that is using GPU baked animation.
       * @zh
       * GPU 预烘焙动画的蒙皮模型。
       */
      _export("BakedSkinningModel", BakedSkinningModel = /*#__PURE__*/function (_MorphModel) {
        _inheritsLoose(BakedSkinningModel, _MorphModel);
        function BakedSkinningModel() {
          var _this;
          _this = _MorphModel.call(this) || this;
          /**
           * @en The animation clip that have been uploaded
           * @zh 已被上传的动画片段
           */
          _this.uploadedAnim = undefined;
          // uninitialized
          _this._jointsMedium = void 0;
          _this._skeleton = null;
          _this._mesh = null;
          _this._dataPoolManager = void 0;
          _this._instAnimInfoIdx = -1;
          _this.type = ModelType.BAKED_SKINNING;
          _this._dataPoolManager = cclegacy.director.root.dataPoolManager;
          var jointTextureInfo = new Float32Array(4);
          var animInfo = _this._dataPoolManager.jointAnimationInfo.getData();
          _this._jointsMedium = {
            buffer: null,
            jointTextureInfo: jointTextureInfo,
            animInfo: animInfo,
            texture: null,
            boundsInfo: null
          };
          return _this;
        }
        var _proto = BakedSkinningModel.prototype;
        _proto.destroy = function destroy() {
          this.uploadedAnim = undefined; // uninitialized
          this._jointsMedium.boundsInfo = null;
          if (this._jointsMedium.buffer) {
            this._jointsMedium.buffer.destroy();
            this._jointsMedium.buffer = null;
          }
          this._applyJointTexture();
          _MorphModel.prototype.destroy.call(this);
        }

        // Override
        ;
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
          this._skeleton = skeleton;
          this._mesh = mesh;
          if (!skeleton || !skinningRoot || !mesh) {
            return;
          }
          this.transform = skinningRoot;
          var resMgr = this._dataPoolManager;
          this._jointsMedium.animInfo = resMgr.jointAnimationInfo.getData(skinningRoot.uuid);
          if (!this._jointsMedium.buffer) {
            this._jointsMedium.buffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, UBOSkinningTexture.SIZE, UBOSkinningTexture.SIZE));
          }
        }

        // Override
        ;
        _proto.updateTransform = function updateTransform(stamp) {
          _MorphModel.prototype.updateTransform.call(this, stamp);
          if (!this.uploadedAnim) {
            return;
          }
          var _this$_jointsMedium = this._jointsMedium,
            animInfo = _this$_jointsMedium.animInfo,
            boundsInfo = _this$_jointsMedium.boundsInfo;
          var skelBound = boundsInfo[animInfo.data[0]];
          var worldBounds = this._worldBounds;
          if (worldBounds && skelBound) {
            var node = this.transform;
            skelBound.transform(node._mat, node._pos, node._rot, node._scale, worldBounds);
          }
        }

        // Override, update fid buffer only when visible
        ;
        _proto.updateUBOs = function updateUBOs(stamp) {
          _MorphModel.prototype.updateUBOs.call(this, stamp);
          var info = this._jointsMedium.animInfo;
          var hasNonInstancingPass = false;
          var idx = this._instAnimInfoIdx;
          for (var i = 0; i < this._subModels.length; i++) {
            var subModel = this._subModels[i];
            if (idx >= 0) {
              var view = subModel.instancedAttributeBlock.views[idx];
              view[0] = info.data[0];
            } else {
              hasNonInstancingPass = true;
            }
          }
          if (hasNonInstancingPass && info.dirty) {
            info.buffer.update(info.data);
            info.dirty = false;
          }
          return true;
        }

        // Override
        ;
        _proto.getMacroPatches = function getMacroPatches(subModelIndex) {
          var patches = _MorphModel.prototype.getMacroPatches.call(this, subModelIndex);
          return patches ? patches.concat(myPatches) : myPatches;
        }

        /**
         * @en Pre-simulate and store the frames data of the given animation clip to a joint texture and upload it to GPU.
         * Normally, it's automatically managed by [[SkeletalAnimationState]].
         * But user can also use Joint Texture Layout Settings in the editor to manually organize the joint textures.
         * @zh 预计算并存储一个指定动画片段的完整帧数据到一张骨骼贴图上，并将其上传到 GPU。
         * 一般情况下 [[SkeletalAnimationState]] 会自动管理所有骨骼贴图，但用户也可以使用编辑器的骨骼贴图布局设置面板来手动管理所有骨骼贴图。
         * @param anim @en The animation clip to be uploaded to the joint texture. @zh 需要上传到骨骼贴图上的动画片段。
         * @returns void
         */;
        _proto.uploadAnimation = function uploadAnimation(anim) {
          if (!this._skeleton || !this._mesh || this.uploadedAnim === anim) {
            return;
          }
          this.uploadedAnim = anim;
          var resMgr = this._dataPoolManager;
          var texture = null;
          if (anim) {
            texture = resMgr.jointTexturePool.getSequencePoseTexture(this._skeleton, anim, this._mesh, this.transform);
            this._jointsMedium.boundsInfo = texture && texture.bounds.get(this._mesh.hash);
            this._modelBounds = null; // don't calc bounds again in Model
          } else {
            texture = resMgr.jointTexturePool.getDefaultPoseTexture(this._skeleton, this._mesh, this.transform);
            this._jointsMedium.boundsInfo = null;
            this._modelBounds = texture && texture.bounds.get(this._mesh.hash)[0];
          }
          this._applyJointTexture(texture);
        };
        _proto._applyJointTexture = function _applyJointTexture(texture) {
          if (texture === void 0) {
            texture = null;
          }
          var oldTex = this._jointsMedium.texture;
          if (oldTex && oldTex !== texture) {
            this._dataPoolManager.jointTexturePool.releaseHandle(oldTex);
          }
          this._jointsMedium.texture = texture;
          if (!texture) {
            return;
          }
          var _this$_jointsMedium2 = this._jointsMedium,
            buffer = _this$_jointsMedium2.buffer,
            jointTextureInfo = _this$_jointsMedium2.jointTextureInfo;
          jointTextureInfo[0] = texture.handle.texture.width;
          jointTextureInfo[1] = this._skeleton.joints.length;
          jointTextureInfo[2] = texture.pixelOffset + 0.1; // guard against floor() underflow
          jointTextureInfo[3] = 1 / jointTextureInfo[0];
          this.updateInstancedJointTextureInfo();
          if (buffer) {
            buffer.update(jointTextureInfo);
          }
          var tex = texture.handle.texture;
          for (var i = 0; i < this._subModels.length; ++i) {
            var descriptorSet = this._subModels[i].descriptorSet;
            descriptorSet.bindTexture(UNIFORM_JOINT_TEXTURE_BINDING, tex);
          }
        };
        _proto._updateLocalDescriptors = function _updateLocalDescriptors(submodelIdx, descriptorSet) {
          _MorphModel.prototype._updateLocalDescriptors.call(this, submodelIdx, descriptorSet);
          var _this$_jointsMedium3 = this._jointsMedium,
            buffer = _this$_jointsMedium3.buffer,
            texture = _this$_jointsMedium3.texture,
            animInfo = _this$_jointsMedium3.animInfo;
          descriptorSet.bindBuffer(UBOSkinningTexture.BINDING, buffer);
          descriptorSet.bindBuffer(UBOSkinningAnimation.BINDING, animInfo.buffer);
          if (texture) {
            var sampler = this._device.getSampler(jointTextureSamplerInfo);
            descriptorSet.bindTexture(UNIFORM_JOINT_TEXTURE_BINDING, texture.handle.texture);
            descriptorSet.bindSampler(UNIFORM_JOINT_TEXTURE_BINDING, sampler);
          }
        };
        _proto._updateInstancedAttributes = function _updateInstancedAttributes(attributes, subModel) {
          _MorphModel.prototype._updateInstancedAttributes.call(this, attributes, subModel);
          this._instAnimInfoIdx = subModel.getInstancedAttributeIndex(INST_JOINT_ANIM_INFO);
          this.updateInstancedJointTextureInfo();
        };
        _proto.updateInstancedJointTextureInfo = function updateInstancedJointTextureInfo() {
          var _this$_jointsMedium4 = this._jointsMedium,
            jointTextureInfo = _this$_jointsMedium4.jointTextureInfo,
            animInfo = _this$_jointsMedium4.animInfo;
          var idx = this._instAnimInfoIdx;
          for (var i = 0; i < this._subModels.length; i++) {
            var subModel = this._subModels[i];
            var views = subModel.instancedAttributeBlock.views;
            if (idx >= 0 && views.length > 0) {
              // update instancing data too
              var view = views[idx];
              view[0] = animInfo.data[0];
              view[1] = jointTextureInfo[1];
              view[2] = jointTextureInfo[2];
            }
          }
        };
        return BakedSkinningModel;
      }(MorphModel));
    }
  };
});