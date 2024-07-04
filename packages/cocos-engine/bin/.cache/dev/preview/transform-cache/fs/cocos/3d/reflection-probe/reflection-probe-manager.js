System.register("q-bundled:///fs/cocos/3d/reflection-probe/reflection-probe-manager.js", ["../framework/mesh-renderer.js", "./reflection-probe-enum.js", "../../asset/assets/index.js", "../../asset/assets/asset-enum.js", "../../core/index.js", "../../render-scene/scene/reflection-probe.js", "../../scene-graph/layers.js"], function (_export, _context) {
  "use strict";

  var MeshRenderer, ReflectionProbeType, ImageAsset, Texture2D, PixelFormat, Vec3, geometry, cclegacy, ProbeType, Layers, REFLECTION_PROBE_DEFAULT_MASK, ReflectionProbeManager;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable max-len */ /*
                                                                                                                                                                                                                                                                                                                                                                                                                          Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                         
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
    setters: [function (_frameworkMeshRendererJs) {
      MeshRenderer = _frameworkMeshRendererJs.MeshRenderer;
    }, function (_reflectionProbeEnumJs) {
      ReflectionProbeType = _reflectionProbeEnumJs.ReflectionProbeType;
    }, function (_assetAssetsIndexJs) {
      ImageAsset = _assetAssetsIndexJs.ImageAsset;
      Texture2D = _assetAssetsIndexJs.Texture2D;
    }, function (_assetAssetsAssetEnumJs) {
      PixelFormat = _assetAssetsAssetEnumJs.PixelFormat;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      geometry = _coreIndexJs.geometry;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_renderSceneSceneReflectionProbeJs) {
      ProbeType = _renderSceneSceneReflectionProbeJs.ProbeType;
    }, function (_sceneGraphLayersJs) {
      Layers = _sceneGraphLayersJs.Layers;
    }],
    execute: function () {
      REFLECTION_PROBE_DEFAULT_MASK = Layers.makeMaskExclude([Layers.BitMask.UI_2D, Layers.BitMask.UI_3D, Layers.BitMask.GIZMOS, Layers.BitMask.EDITOR, Layers.BitMask.SCENE_GIZMO, Layers.BitMask.PROFILER, Layers.Enum.IGNORE_RAYCAST]);
      _export("ReflectionProbeManager", ReflectionProbeManager = /*#__PURE__*/function () {
        function ReflectionProbeManager() {
          this._probes = [];
          /**
           * @en
           * All models in the scene that use cube type reflection probe.
           * @zh
           * 场景中所有使用cube类型反射探针的模型
           */
          this._useCubeModels = new Map();
          /**
           * @en
           * All models in the scene that use planar type reflection probe.
           * @zh
           * 场景中所有使用planar类型反射探针的模型
           */
          this._usePlanarModels = new Map();
          this._updateForRuntime = true;
          this._dataTexture = null;
          this._registeredEvent = false;
        }
        var _proto = ReflectionProbeManager.prototype;
        /**
         * @engineInternal
         */
        _proto.registerEvent = function registerEvent() {
          if (!this._registeredEvent) {
            cclegacy.director.on(cclegacy.Director.EVENT_BEFORE_UPDATE, this.onUpdateProbes, this);
            this._registeredEvent = true;
          }
        }

        /**
         * @en Refresh all reflection probe.
         * @zh 刷新所有反射探针。
         */;
        _proto.onUpdateProbes = function onUpdateProbes() {
          if (this._probes.length === 0) return;
          var scene = cclegacy.director.getScene();
          if (!scene || !scene.renderScene) {
            return;
          }
          var models = scene.renderScene.models;
          for (var i = 0; i < models.length; i++) {
            var model = models[i];
            if (!model.node) continue;
            if (model.node.layer & REFLECTION_PROBE_DEFAULT_MASK) {
              if (model.reflectionProbeType === ReflectionProbeType.BAKED_CUBEMAP || this._isUsedBlending(model)) {
                this.selectReflectionProbe(model);
              } else if (model.reflectionProbeType === ReflectionProbeType.PLANAR_REFLECTION) {
                this.selectPlanarReflectionProbe(model);
              }
            }
          }
        }

        /**
         * @en filter models that use planar reflection.
         * @zh 筛选使用平面反射的模型
         */;
        _proto.filterModelsForPlanarReflection = function filterModelsForPlanarReflection() {
          if (this._probes.length === 0) return;
          var scene = cclegacy.director.getScene();
          if (!scene || !scene.renderScene) {
            return;
          }
          var models = scene.renderScene.models;
          for (var i = 0; i < models.length; i++) {
            var model = models[i];
            if (!model.node) continue;
            if (model.node.layer & REFLECTION_PROBE_DEFAULT_MASK && model.reflectionProbeType === ReflectionProbeType.PLANAR_REFLECTION) {
              this.selectPlanarReflectionProbe(model);
            }
          }
        }

        /**
         * @engineInternal
         */;
        _proto.clearPlanarReflectionMap = function clearPlanarReflectionMap(probe) {
          for (var _iterator = _createForOfIteratorHelperLoose(this._usePlanarModels.entries()), _step; !(_step = _iterator()).done;) {
            var entry = _step.value;
            if (entry[1] === probe) {
              this._updatePlanarMapOfModel(entry[0], null, null);
            }
          }
        }

        /**
         * @engineInternal
         */;
        _proto.register = function register(probe) {
          var index = this._probes.indexOf(probe);
          if (index === -1) {
            this._probes.push(probe);
            this.updateProbeData();
          }
        }

        /**
         * @engineInternal
         */;
        _proto.unregister = function unregister(probe) {
          for (var i = 0; i < this._probes.length; i++) {
            if (this._probes[i] === probe) {
              var del = this._probes.splice(i, 1);
              if (del[0]) {
                this._removeDependentModels(del[0]);
              }
              break;
            }
          }
          this.updateProbeData();
        }

        /**
         * @engineInternal
         */;
        _proto.exists = function exists(probeId) {
          if (this._probes.length === 0) return false;
          for (var i = 0; i < this._probes.length; i++) {
            if (this._probes[i].getProbeId() === probeId) {
              return true;
            }
          }
          return false;
        }

        /**
         * @engineInternal
         */;
        _proto.getNewReflectionProbeId = function getNewReflectionProbeId() {
          var probeId = 0;
          // eslint-disable-next-line no-constant-condition
          while (true) {
            if (this.exists(probeId)) {
              probeId++;
            } else {
              return probeId;
            }
          }
        }

        /**
         * @en Get all reflection probes in the scene.
         * @zh 获取场景中所有的反射探针
         */;
        _proto.getProbes = function getProbes() {
          return this._probes;
        }

        /**
         * @en Get reflection probe by id.
         * @zh 根据id获取反射探针
         */;
        _proto.getProbeById = function getProbeById(probeId) {
          for (var i = 0; i < this._probes.length; i++) {
            if (this._probes[i].getProbeId() === probeId) {
              return this._probes[i];
            }
          }
          return null;
        }

        /**
         * @engineInternal
         */;
        _proto.clearAll = function clearAll() {
          this._probes = [];
        }

        /**
         * @engineInternal
         */;
        _proto.getProbeByCamera = function getProbeByCamera(camera) {
          for (var i = 0; i < this._probes.length; i++) {
            if (this._probes[i].camera === camera) {
              return this._probes[i];
            }
          }
          return null;
        }

        /**
         * @en Update the cubemap captured by the reflection probe.
         * @zh 更新反射探针捕获的cubemap
         * @param probe update the texture for this probe
         */;
        _proto.updateBakedCubemap = function updateBakedCubemap(probe) {
          var models = this._getModelsByProbe(probe);
          if (!probe.cubemap) return;
          for (var i = 0; i < models.length; i++) {
            var model = models[i];
            this._updateCubemapOfModel(model, probe);
          }
          probe.needRefresh = false;
          //if used for blend,when baked end need refresh cubemap
          if (models.length === 0) {
            for (var _iterator2 = _createForOfIteratorHelperLoose(this._useCubeModels.entries()), _step2; !(_step2 = _iterator2()).done;) {
              var entry = _step2.value;
              if (entry[0].reflectionProbeBlendId === probe.getProbeId()) {
                this._updateBlendCubemap(entry[0], probe);
              }
            }
          }
        }

        /**
         * @en Update the plane reflection map for reflection probe render.
         * @zh 更新反射探针渲染的平面反射贴图
         * @param probe update the texture for this probe
         */;
        _proto.updatePlanarMap = function updatePlanarMap(probe, texture) {
          if (!probe.node || !probe.node.scene) return;
          var models = this._getModelsByProbe(probe);
          for (var i = 0; i < models.length; i++) {
            this._updatePlanarMapOfModel(models[i], texture, probe);
          }
          if (probe.previewPlane) {
            var meshRender = probe.previewPlane.getComponent(MeshRenderer);
            if (meshRender) {
              meshRender.updateProbePlanarMap(texture);
            }
          }
        }

        /**
         * @en Update objects using reflection probe for planar reflection.
         * @zh 更新使用反射探针进行平面反射的物体。
         * @param probe update the model for reflection probe
         * @engineInternal
         */;
        _proto.selectPlanarReflectionProbe = function selectPlanarReflectionProbe(model) {
          if (!model.node || !model.worldBounds || model.reflectionProbeType !== ReflectionProbeType.PLANAR_REFLECTION) return;
          for (var i = 0; i < this._probes.length; i++) {
            var probe = this._probes[i];
            if (probe.probeType !== ProbeType.PLANAR) continue;
            if (model.node.layer & REFLECTION_PROBE_DEFAULT_MASK) {
              model.updateWorldBound();
              if (geometry.intersect.aabbWithAABB(model.worldBounds, probe.boundingBox)) {
                this._usePlanarModels.set(model, probe);
              } else if (this._usePlanarModels.has(model)) {
                var old = this._usePlanarModels.get(model);
                if (old === probe) {
                  this._usePlanarModels["delete"](model);
                  this._updatePlanarMapOfModel(model, null, null);
                }
              }
            }
          }
          for (var _i = 0; _i < this._probes.length; _i++) {
            if (this._probes[_i].probeType === ProbeType.PLANAR) {
              if (!this._probes[_i].realtimePlanarTexture) {
                this.updatePlanarMap(this._probes[_i], null);
              } else {
                this.updatePlanarMap(this._probes[_i], this._probes[_i].realtimePlanarTexture.getGFXTexture());
              }
            }
          }
        }

        /**
         * @en Selecting the appropriate reflection probe for the model, it will use the closest one based on distance.
         * @zh 为模型选择适用的反射探针，会使用距离最近的。
         * @param model select for this model
         */;
        _proto.selectReflectionProbe = function selectReflectionProbe(model) {
          if (model.node && model.worldBounds && model.node.layer & REFLECTION_PROBE_DEFAULT_MASK) {
            model.updateWorldBound();
            var nearest = this._getNearestProbe(model);
            if (!nearest) {
              //not in the range of any probe,set default texture for the model
              this._updateCubemapOfModel(model, null);
              this._useCubeModels["delete"](model);
            } else if (this._useCubeModels.has(model)) {
              var old = this._useCubeModels.get(model);
              // if used other probe,reset texture
              if (old !== nearest) {
                this._useCubeModels.set(model, nearest);
              }
              nearest.needRefresh = true;
            } else {
              this._useCubeModels.set(model, nearest);
              nearest.needRefresh = true;
            }
          }
          for (var i = 0; i < this._probes.length; i++) {
            if (this._probes[i].needRefresh && this._probes[i].probeType === ProbeType.CUBE || this._isUsedBlending(model)) {
              this.updateBakedCubemap(this._probes[i]);
            }
          }
        }

        /**
         * @en Update the preview sphere of the Reflection Probe cube mode.
         * @zh 更新反射探针cube模式的预览球
         */;
        _proto.updatePreviewSphere = function updatePreviewSphere(probe) {
          if (!probe || !probe.previewSphere) return;
          var meshRender = probe.previewSphere.getComponent(MeshRenderer);
          if (meshRender) {
            meshRender.updateProbeCubemap(probe.cubemap);
            meshRender.updateReflectionProbeId(probe.getProbeId());
          }
        }

        /**
         * @en Update the preview plane of the Reflection Probe planar mode.
         * @zh 更新反射探针预览平面
         */;
        _proto.updatePreviewPlane = function updatePreviewPlane(probe) {
          if (!probe || !probe.previewPlane) return;
          var meshRender = probe.previewPlane.getComponent(MeshRenderer);
          if (meshRender) {
            if (probe.realtimePlanarTexture) {
              this.updatePlanarMap(probe, probe.realtimePlanarTexture.getGFXTexture());
            }
          }
        }

        /**
         * @en Update reflection probe data of model bind.
         * @zh 更新模型绑定的反射探针数据。
         */;
        _proto.updateProbeData = function updateProbeData() {
          if (this._probes.length === 0) return;
          var maxId = this.getMaxProbeId();
          var height = maxId + 1;
          var dataWidth = 3;
          if (this._dataTexture) {
            this._dataTexture.destroy();
          }
          var buffer = new Float32Array(4 * dataWidth * height);
          var bufferOffset = 0;
          for (var i = 0; i <= maxId; i++) {
            var probe = this.getProbeById(i);
            if (!probe) {
              bufferOffset += 4 * dataWidth;
              continue;
            }
            if (probe.probeType === ProbeType.CUBE) {
              //world pos
              buffer[bufferOffset] = probe.node.worldPosition.x;
              buffer[bufferOffset + 1] = probe.node.worldPosition.y;
              buffer[bufferOffset + 2] = probe.node.worldPosition.z;
              buffer[bufferOffset + 3] = 0.0;
              buffer[bufferOffset + 4] = probe.size.x;
              buffer[bufferOffset + 5] = probe.size.y;
              buffer[bufferOffset + 6] = probe.size.z;
              buffer[bufferOffset + 7] = 0.0;
              var mipAndUseRGBE = probe.isRGBE() ? 1000 : 0;
              buffer[bufferOffset + 8] = probe.cubemap ? probe.cubemap.mipmapLevel + mipAndUseRGBE : 1.0 + mipAndUseRGBE;
            } else {
              //plane.xyz;
              buffer[bufferOffset] = probe.node.up.x;
              buffer[bufferOffset + 1] = probe.node.up.y;
              buffer[bufferOffset + 2] = probe.node.up.z;
              buffer[bufferOffset + 3] = 1.0;
              //plane.w;
              buffer[bufferOffset + 4] = 1.0;
              //planarReflectionDepthScale
              buffer[bufferOffset + 5] = 1.0;
              buffer[bufferOffset + 6] = 0.0;
              buffer[bufferOffset + 7] = 0.0;
              //mipCount;
              buffer[bufferOffset + 8] = 1.0;
            }
            bufferOffset += 4 * dataWidth;
          }
          var updateView = new Uint8Array(buffer.buffer);
          var image = new ImageAsset({
            _data: updateView,
            _compressed: false,
            width: dataWidth * 4,
            height: height,
            format: PixelFormat.RGBA8888
          });
          this._dataTexture = new Texture2D();
          this._dataTexture.setFilters(Texture2D.Filter.NONE, Texture2D.Filter.NONE);
          this._dataTexture.setMipFilter(Texture2D.Filter.NONE);
          this._dataTexture.setWrapMode(Texture2D.WrapMode.CLAMP_TO_EDGE, Texture2D.WrapMode.CLAMP_TO_EDGE, Texture2D.WrapMode.CLAMP_TO_EDGE);
          this._dataTexture.image = image;
          this._dataTexture.uploadData(updateView);
          for (var _i2 = 0; _i2 < this._probes.length; _i2++) {
            var _probe = this._probes[_i2];
            var models = this._getModelsByProbe(_probe);
            for (var j = 0; j < models.length; j++) {
              var meshRender = models[j].node.getComponent(MeshRenderer);
              if (meshRender) {
                meshRender.updateReflectionProbeDataMap(this._dataTexture);
              }
            }
          }
        }

        /**
         * @en get max value of probe id.
         * @zh 获取反射探针id的最大值。
         */;
        _proto.getMaxProbeId = function getMaxProbeId() {
          if (this._probes.length === 0) {
            return -1;
          }
          if (this._probes.length === 1) {
            return this._probes[0].getProbeId();
          }
          this._probes.sort(function (a, b) {
            return a.getProbeId() - b.getProbeId();
          });
          return this._probes[this._probes.length - 1].getProbeId();
        }
        /**
         * @en Get the reflection probe used by the model.
         * @zh 获取模型使用的反射探针。
         */;
        _proto.getUsedReflectionProbe = function getUsedReflectionProbe(model, planarReflection) {
          if (planarReflection) {
            if (this._usePlanarModels.has(model)) {
              return this._usePlanarModels.get(model);
            }
          } else if (this._useCubeModels.has(model)) {
            return this._useCubeModels.get(model);
          }
          return null;
        }

        /**
         * @en Set reflection probe used by the model.
         * @zh 手动设置模型使用的反射探针。
         * @param model set the probe for this model
         * @param probe reflection probe to be set
         * @param blendProbe reflection probe for blend
         */;
        _proto.setReflectionProbe = function setReflectionProbe(model, probe, blendProbe) {
          if (blendProbe === void 0) {
            blendProbe = null;
          }
          if (!probe) return;
          this._useCubeModels.set(model, probe);
          this._updateCubemapOfModel(model, probe);
          if (blendProbe) {
            this._updateBlendProbeInfo(model, probe, blendProbe);
          }
        }

        /**
         * @engineInternal
         */;
        _proto.updateProbeOfModels = function updateProbeOfModels() {
          if (this._probes.length === 0) return;
          var scene = cclegacy.director.getScene();
          if (!scene || !scene.renderScene) {
            return;
          }
          var models = scene.renderScene.models;
          for (var i = 0; i < models.length; i++) {
            var model = models[i];
            if (!model.node) continue;
            if (model.node.layer & REFLECTION_PROBE_DEFAULT_MASK) {
              if (model.reflectionProbeType === ReflectionProbeType.BAKED_CUBEMAP || model.reflectionProbeType === ReflectionProbeType.PLANAR_REFLECTION || this._isUsedBlending(model)) {
                model.updateReflectionProbeId();
              }
            }
          }
        }

        /**
         * @en
         * select the probe with the nearest distance.
         * @zh
         * 选择距离最近的probe。
         * @param model select the probe for this model
         */;
        _proto._getNearestProbe = function _getNearestProbe(model) {
          if (!model.node || !model.worldBounds || this._probes.length === 0) return null;
          var nearestProbe = null;
          var minDistance = Infinity;
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._probes), _step3; !(_step3 = _iterator3()).done;) {
            var probe = _step3.value;
            if (probe.probeType !== ProbeType.CUBE || !probe.validate() || !geometry.intersect.aabbWithAABB(model.worldBounds, probe.boundingBox)) {
              continue;
            }
            var distance = Vec3.distance(model.node.worldPosition, probe.node.worldPosition);
            if (distance < minDistance) {
              minDistance = distance;
              nearestProbe = probe;
            }
          }
          return nearestProbe;
        };
        _proto._getBlendProbe = function _getBlendProbe(model) {
          if (!model || !model.node || !model.worldBounds || this._probes.length < 2) {
            return null;
          }
          var temp = [];
          for (var i = 0; i < this._probes.length; i++) {
            if (this._probes[i].probeType !== ProbeType.CUBE || !this._probes[i].validate() || !geometry.intersect.aabbWithAABB(model.worldBounds, this._probes[i].boundingBox)) {
              continue;
            }
            temp.push(this._probes[i]);
          }
          temp.sort(function (a, b) {
            var aDistance = Vec3.distance(model.node.worldPosition, a.node.worldPosition);
            var bDistance = Vec3.distance(model.node.worldPosition, b.node.worldPosition);
            return aDistance - bDistance;
          });
          return temp.length > 1 ? temp[1] : null;
        };
        _proto._getModelsByProbe = function _getModelsByProbe(probe) {
          var models = [];
          var useModels = this._useCubeModels;
          if (probe.probeType === ProbeType.PLANAR) {
            useModels = this._usePlanarModels;
          }
          for (var _iterator4 = _createForOfIteratorHelperLoose(useModels.entries()), _step4; !(_step4 = _iterator4()).done;) {
            var entry = _step4.value;
            if (entry[1] === probe) {
              models.push(entry[0]);
            }
          }
          return models;
        };
        _proto._removeDependentModels = function _removeDependentModels(probe) {
          for (var _iterator5 = _createForOfIteratorHelperLoose(this._useCubeModels.keys()), _step5; !(_step5 = _iterator5()).done;) {
            var key = _step5.value;
            var p = this._useCubeModels.get(key);
            if (p !== undefined && p === probe) {
              this._useCubeModels["delete"](key);
              this.selectReflectionProbe(key);
            }
          }
          for (var _iterator6 = _createForOfIteratorHelperLoose(this._usePlanarModels.keys()), _step6; !(_step6 = _iterator6()).done;) {
            var _key = _step6.value;
            var _p = this._usePlanarModels.get(_key);
            if (_p !== undefined && _p === probe) {
              this._usePlanarModels["delete"](_key);
              this.selectPlanarReflectionProbe(_key);
            }
          }
        };
        _proto._updateCubemapOfModel = function _updateCubemapOfModel(model, probe) {
          var node = model.node;
          if (!node) {
            return;
          }
          var meshRender = node.getComponent(MeshRenderer);
          if (!meshRender) {
            return;
          }
          meshRender.updateProbeCubemap(probe ? probe.cubemap : null);
          meshRender.updateReflectionProbeId(probe && probe.cubemap ? probe.getProbeId() : -1);
          if (probe) {
            meshRender.updateReflectionProbeDataMap(this._dataTexture);
            if (this._isUsedBlending(model)) {
              var blendProbe = this._getBlendProbe(model);
              this._updateBlendProbeInfo(model, probe, blendProbe);
            }
          }
        };
        _proto._updatePlanarMapOfModel = function _updatePlanarMapOfModel(model, texture, probe) {
          var meshRender = model.node.getComponent(MeshRenderer);
          if (meshRender) {
            meshRender.updateProbePlanarMap(texture);
            if (probe) {
              meshRender.updateReflectionProbeId(probe.getProbeId());
              meshRender.updateReflectionProbeDataMap(this._dataTexture);
            } else {
              meshRender.updateReflectionProbeId(-1);
            }
          }
        };
        _proto._isUsedBlending = function _isUsedBlending(model) {
          if (model.reflectionProbeType === ReflectionProbeType.BLEND_PROBES || model.reflectionProbeType === ReflectionProbeType.BLEND_PROBES_AND_SKYBOX) {
            return true;
          }
          return false;
        };
        _proto._updateBlendProbeInfo = function _updateBlendProbeInfo(model, probe, blendProbe) {
          var node = model.node;
          if (!node) {
            return;
          }
          var meshRender = node.getComponent(MeshRenderer);
          if (!meshRender) {
            return;
          }
          if (blendProbe) {
            meshRender.updateReflectionProbeBlendId(blendProbe.getProbeId());
            meshRender.updateProbeBlendCubemap(blendProbe.cubemap);
            meshRender.updateReflectionProbeBlendWeight(this._calculateBlendWeight(model, probe, blendProbe));
          } else {
            meshRender.updateReflectionProbeBlendId(-1);
            if (model.reflectionProbeType === ReflectionProbeType.BLEND_PROBES_AND_SKYBOX) {
              meshRender.updateReflectionProbeBlendWeight(this._calculateBlendWeight(model, probe, blendProbe));
            }
          }
        };
        _proto._updateBlendCubemap = function _updateBlendCubemap(model, probe) {
          var node = model.node;
          if (!node) {
            return;
          }
          if (!this._isUsedBlending(model)) {
            return;
          }
          var meshRender = node.getComponent(MeshRenderer);
          if (meshRender) {
            meshRender.updateProbeBlendCubemap(probe.cubemap);
          }
        };
        _proto._calculateBlendWeight = function _calculateBlendWeight(model, probe, blendProbe) {
          if (blendProbe) {
            var d1 = Vec3.distance(model.node.worldPosition, probe.node.worldPosition);
            var d2 = Vec3.distance(model.node.worldPosition, blendProbe.node.worldPosition);
            return 1.0 - d2 / (d1 + d2);
          }
          if (model.reflectionProbeType === ReflectionProbeType.BLEND_PROBES) {
            return 0.0;
          } else if (model.reflectionProbeType === ReflectionProbeType.BLEND_PROBES_AND_SKYBOX) {
            return this._calculateBlendOfSkybox(model.worldBounds, probe.boundingBox);
          }
          return 0.0;
        };
        _proto._calculateBlendOfSkybox = function _calculateBlendOfSkybox(aabb1, aabb2) {
          if (!aabb1) return 1.0;
          var aMin = new Vec3();
          var aMax = new Vec3();
          var bMin = new Vec3();
          var bMax = new Vec3();
          Vec3.subtract(aMin, aabb1.center, aabb1.halfExtents);
          Vec3.add(aMax, aabb1.center, aabb1.halfExtents);
          Vec3.subtract(bMin, aabb2.center, aabb2.halfExtents);
          Vec3.add(bMax, aabb2.center, aabb2.halfExtents);
          var inside = aMin.x <= bMax.x && aMax.x >= bMin.x && aMin.y <= bMax.y && aMax.y >= bMin.y && aMin.z <= bMax.z && aMax.z >= bMin.z;
          if (inside) {
            var fullSize = new Vec3();
            Vec3.multiplyScalar(fullSize, aabb1.halfExtents, 2.0);
            var boundaryXAdd = aMin.x + fullSize.x <= bMax.x && aMax.x + fullSize.x >= bMin.x;
            var boundaryXSub = aMin.x - fullSize.x <= bMax.x && aMax.x - fullSize.x >= bMin.x;
            var boundaryYAdd = aMin.y + fullSize.y <= bMax.y && aMax.y + fullSize.y >= bMin.y;
            var boundaryYSub = aMin.y - fullSize.y <= bMax.y && aMax.y - fullSize.y >= bMin.y;
            var boundaryZAdd = aMin.z + fullSize.z <= bMax.z && aMax.z + fullSize.z >= bMin.z;
            var boundaryZSub = aMin.z - fullSize.z <= bMax.z && aMax.z - fullSize.z >= bMin.z;
            var weights = [];
            if (!boundaryXAdd) {
              var offset = aMax.x - bMax.x;
              weights.push(offset / fullSize.x);
            }
            if (!boundaryXSub) {
              var _offset = Math.abs(aMin.x - bMin.x);
              weights.push(_offset / fullSize.x);
            }
            if (!boundaryYAdd) {
              var _offset2 = aMax.y - bMax.y;
              weights.push(_offset2 / fullSize.y);
            }
            if (!boundaryYSub) {
              var _offset3 = Math.abs(aMin.y - bMin.y);
              weights.push(_offset3 / fullSize.y);
            }
            if (!boundaryZAdd) {
              var _offset4 = aMax.z - bMax.z;
              weights.push(_offset4 / fullSize.z);
            }
            if (!boundaryZSub) {
              var _offset5 = Math.abs(aMin.z - bMin.z);
              weights.push(_offset5 / fullSize.z);
            }
            if (weights.length > 0) {
              weights.sort(function (a, b) {
                return b - a;
              });
              return weights[0];
            } else {
              return 0.0;
            }
          }
          return 1.0;
        };
        _createClass(ReflectionProbeManager, [{
          key: "updateForRuntime",
          get: function get() {
            return this._updateForRuntime;
          },
          set:
          /**
           * @en Set and get whether to detect objects leaving or entering the reflection probe's bounding box at runtime.
           * @zh 设置和获取是否在运行时检测物体离开或者进入反射探针的包围盒。
           */
          function set(val) {
            this._updateForRuntime = val;
          }
        }]);
        return ReflectionProbeManager;
      }());
      ReflectionProbeManager.probeManager = void 0;
      ReflectionProbeManager.probeManager = new ReflectionProbeManager();
      cclegacy.internal.reflectionProbeManager = ReflectionProbeManager.probeManager;
    }
  };
});