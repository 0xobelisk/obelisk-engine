System.register("q-bundled:///fs/cocos/render-scene/core/render-scene.js", ["../../scene-graph/node-enum.js"], function (_export, _context) {
  "use strict";

  var TransformBit, RenderScene, LODInfo, LodStateCache;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
    setters: [function (_sceneGraphNodeEnumJs) {
      TransformBit = _sceneGraphNodeEnumJs.TransformBit;
    }],
    execute: function () {
      /**
       * @en The result of one raycast operation
       * @zh 一次射线检测的结果
       */
      /**
       * @en The render scene which is created by the [[Root]] and provides all basic render scene elements for the render process.
       * It manages:
       * 1. [[Camera]]s
       * 2. [[Light]]s
       * 3. Renderable objects: [[renderer.Model]]s and `DrawBatchs`
       * @zh 渲染场景，由 [[Root]] 创建，并提供用于渲染流程的所有场景基础元素。它管理：
       * 1. [[Camera]]s：相机
       * 2. [[Light]]s：光源
       * 3. 渲染元素：[[renderer.Model]]s 和 `DrawBatchs`
       */
      _export("RenderScene", RenderScene = /*#__PURE__*/function () {
        /**
         * Register the creation function of the render scene to root.
         * @internal
         */
        RenderScene.registerCreateFunc = function registerCreateFunc(root) {
          root._createSceneFun = function (_root) {
            return new RenderScene(_root);
          };
        };
        function RenderScene(root) {
          this._root = void 0;
          this._name = '';
          this._cameras = [];
          this._models = [];
          this._lodGroups = [];
          // LOD Group gathered
          this._batches = [];
          this._directionalLights = [];
          this._sphereLights = [];
          this._spotLights = [];
          this._pointLights = [];
          this._rangedDirLights = [];
          this._mainLight = null;
          this._modelId = 0;
          this._lodStateCache = null;
          this._root = root;
        }

        /**
         * @en Initialize the render scene
         * @zh 初始化渲染场景
         * @returns Successful
         */
        var _proto = RenderScene.prototype;
        _proto.initialize = function initialize(info) {
          this._name = info.name;
          this._lodStateCache = new LodStateCache(this);
          return true;
        }

        /**
         * @en The update process of the render scene, it updates all rendering related data for the lights and the models.
         * @zh 渲染场景的更新流程，会更新所有光源和模型的渲染相关数据。
         * @param stamp The update time stamp
         * @returns void
         */;
        _proto.update = function update(stamp) {
          var mainLight = this._mainLight;
          if (mainLight) {
            mainLight.update();
          }
          var sphereLights = this._sphereLights;
          for (var i = 0; i < sphereLights.length; i++) {
            var light = sphereLights[i];
            light.update();
          }
          var spotLights = this._spotLights;
          for (var _i = 0; _i < spotLights.length; _i++) {
            var _light = spotLights[_i];
            _light.update();
          }
          var pointLights = this._pointLights;
          for (var _i2 = 0; _i2 < pointLights.length; _i2++) {
            var _light2 = pointLights[_i2];
            _light2.update();
          }
          var rangedDirLights = this._rangedDirLights;
          for (var _i3 = 0; _i3 < rangedDirLights.length; _i3++) {
            var _light3 = rangedDirLights[_i3];
            _light3.update();
          }
          var models = this._models;
          for (var _i4 = 0; _i4 < models.length; _i4++) {
            var model = models[_i4];
            if (model.enabled) {
              model.updateTransform(stamp);
              model.updateUBOs(stamp);
            }
          }
          this._lodStateCache.updateLodState();
        }

        /**
         * @en Destroy the render scene, dangerous, please do not invoke manually.
         * @zh 销毁渲染场景，请不要手动销毁，会造成未知行为。
         */;
        _proto.destroy = function destroy() {
          this.removeCameras();
          this.removeSphereLights();
          this.removeSpotLights();
          this.removeRangedDirLights();
          this.removeModels();
          this.removeLODGroups();
          this._lodStateCache.clearCache();
        };
        _proto.isCulledByLod = function isCulledByLod(camera, model) {
          return this._lodStateCache.isLodModelCulled(camera, model);
        }

        /**
         * @en Attach a camera to the render scene
         * @zh 向渲染场景挂载一个相机
         */;
        _proto.addCamera = function addCamera(cam) {
          cam.attachToScene(this);
          this._cameras.push(cam);
          this._lodStateCache.addCamera(cam);
        }

        /**
         * @en Detach a camera to the render scene
         * @zh 从渲染场景移除一个相机
         */;
        _proto.removeCamera = function removeCamera(camera) {
          for (var i = 0; i < this._cameras.length; ++i) {
            if (this._cameras[i] === camera) {
              this._cameras.splice(i, 1);
              camera.detachFromScene();
              this._lodStateCache.removeCamera(camera);
              return;
            }
          }
        }

        /**
         * @en Detach all cameras to the render scene
         * @zh 从渲染场景移除所有相机
         */;
        _proto.removeCameras = function removeCameras() {
          for (var _iterator = _createForOfIteratorHelperLoose(this._cameras), _step; !(_step = _iterator()).done;) {
            var camera = _step.value;
            camera.detachFromScene();
            this._lodStateCache.removeCamera(camera);
          }
          this._cameras.splice(0);
        }

        /**
         * @en Sets the main light source for the render scene
         * @zh 给渲染场景设置主光源
         * @param dl The main directional light source
         */;
        _proto.setMainLight = function setMainLight(dl) {
          this._mainLight = dl;
          if (this._mainLight) this._mainLight.activate();
        }

        /**
         * @en Remove the main light source from the render scene
         * @zh 从渲染场景移除主光源
         * @param dl The main directional light source, if it's not the actual main light, nothing happens.
         */;
        _proto.unsetMainLight = function unsetMainLight(dl) {
          if (this._mainLight === dl) {
            var dlList = this._directionalLights;
            if (dlList.length) {
              this.setMainLight(dlList[dlList.length - 1]);
              if (this._mainLight.node) {
                // trigger update
                this._mainLight.node.hasChangedFlags |= TransformBit.ROTATION;
              }
              return;
            }
            this.setMainLight(null);
          }
        }

        /**
         * @en Add a directional light source, only one directional light is active and act as the main light source.
         * @zh 增加一个方向光源，场景中只会有一个方向光是起效的，并且会作为主光源。
         * @param dl The directional light.
         */;
        _proto.addDirectionalLight = function addDirectionalLight(dl) {
          dl.attachToScene(this);
          this._directionalLights.push(dl);
        }

        /**
         * @en Remove a directional light source.
         * @zh 删除一个方向光源。
         * @param dl The directional light.
         */;
        _proto.removeDirectionalLight = function removeDirectionalLight(dl) {
          for (var i = 0; i < this._directionalLights.length; ++i) {
            if (this._directionalLights[i] === dl) {
              dl.detachFromScene();
              this._directionalLights.splice(i, 1);
              return;
            }
          }
        }

        /**
         * @en Add a sphere light source.
         * @zh 增加一个球面光源。
         * @param pl The sphere light.
         */;
        _proto.addSphereLight = function addSphereLight(pl) {
          pl.attachToScene(this);
          this._sphereLights.push(pl);
        }

        /**
         * @en Remove a sphere light source.
         * @zh 删除一个球面光源。
         * @param pl The sphere light.
         */;
        _proto.removeSphereLight = function removeSphereLight(pl) {
          for (var i = 0; i < this._sphereLights.length; ++i) {
            if (this._sphereLights[i] === pl) {
              pl.detachFromScene();
              this._sphereLights.splice(i, 1);
              return;
            }
          }
        }

        /**
         * @en Add a spot light source.
         * @zh 增加一个聚光灯光源。
         * @param sl The spot light.
         */;
        _proto.addSpotLight = function addSpotLight(sl) {
          sl.attachToScene(this);
          this._spotLights.push(sl);
        }

        /**
         * @en Remove a spot light source.
         * @zh 删除一个聚光灯光源。
         * @param sl The spot light.
         */;
        _proto.removeSpotLight = function removeSpotLight(sl) {
          for (var i = 0; i < this._spotLights.length; ++i) {
            if (this._spotLights[i] === sl) {
              sl.detachFromScene();
              this._spotLights.splice(i, 1);
              return;
            }
          }
        }

        /**
         * @en Remove all sphere light sources.
         * @zh 删除所有球面光源。
         */;
        _proto.removeSphereLights = function removeSphereLights() {
          for (var i = 0; i < this._sphereLights.length; ++i) {
            this._sphereLights[i].detachFromScene();
          }
          this._sphereLights.length = 0;
        }

        /**
         * @en Remove all spot light sources.
         * @zh 删除所有聚光灯光源。
         */;
        _proto.removeSpotLights = function removeSpotLights() {
          for (var i = 0; i < this._spotLights.length; ++i) {
            this._spotLights[i].detachFromScene();
          }
          this._spotLights.length = 0;
        }

        /**
         * @en Add a point light source.
         * @zh 增加一个点光源。
         * @param pl @en The point light. @zh 点光源。
         */;
        _proto.addPointLight = function addPointLight(pl) {
          pl.attachToScene(this);
          this._pointLights.push(pl);
        }

        /**
         * @en Remove a sphere light source.
         * @zh 删除一个点光源。
         * @param pl @en The point light. @zh 点光源。
         */;
        _proto.removePointLight = function removePointLight(pl) {
          for (var i = 0; i < this._pointLights.length; ++i) {
            if (this._pointLights[i] === pl) {
              pl.detachFromScene();
              this._pointLights.splice(i, 1);
              return;
            }
          }
        }

        /**
         * @en Remove all point light sources.
         * @zh 删除所有点光源。
         */;
        _proto.removePointLights = function removePointLights() {
          for (var i = 0; i < this._pointLights.length; ++i) {
            this._pointLights[i].detachFromScene();
          }
          this._pointLights.length = 0;
        }

        /**
         * @en Add a ranged directional light source.
         * @zh 增加一个范围平行光源。
         * @param l @en The ranged directional light. @zh 范围平行光。
         */;
        _proto.addRangedDirLight = function addRangedDirLight(l) {
          l.attachToScene(this);
          this._rangedDirLights.push(l);
        }

        /**
         * @en Remove a ranged directional light source.
         * @zh 删除一个范围平行光源。
         * @param l @en The ranged directional light. @zh 范围平行光。
         */;
        _proto.removeRangedDirLight = function removeRangedDirLight(l) {
          for (var i = 0; i < this._rangedDirLights.length; ++i) {
            if (this._rangedDirLights[i] === l) {
              l.detachFromScene();
              this._rangedDirLights.splice(i, 1);
              return;
            }
          }
        }

        /**
         * @en Remove all ranged directional light sources.
         * @zh 删除所有范围平行光源。
         */;
        _proto.removeRangedDirLights = function removeRangedDirLights() {
          for (var i = 0; i < this._rangedDirLights.length; ++i) {
            this._rangedDirLights[i].detachFromScene();
          }
          this._rangedDirLights.length = 0;
        }

        /**
         * @en Add a model, all models attached to the render scene will be submitted for rendering.
         * @zh 增加一个模型，渲染场景上挂载的所有模型都会被提交渲染。
         * @param m The model.
         */;
        _proto.addModel = function addModel(m) {
          m.attachToScene(this);
          this._models.push(m);
        }

        /**
         * @en Remove a model, model removed will no longer be submitted for rendering.
         * @zh 删除一个模型，移除的模型将不再被提交渲染。
         * @param m The model.
         */;
        _proto.removeModel = function removeModel(model) {
          for (var i = 0; i < this._models.length; ++i) {
            if (this._models[i] === model) {
              this._lodStateCache.removeModel(model);
              model.detachFromScene();
              this._models.splice(i, 1);
              return;
            }
          }
        }

        /**
         * @en Remove all models.
         * @zh 删除所有模型。
         */;
        _proto.removeModels = function removeModels() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._models), _step2; !(_step2 = _iterator2()).done;) {
            var m = _step2.value;
            this._lodStateCache.removeModel(m);
            m.detachFromScene();
            m.destroy();
          }
          this._models.length = 0;
        }

        /**
         * @en Add a draw batch of 2d objects, all draw batches attached to the render scene will be submitted for rendering.
         * @zh 增加一个 2D 渲染批次，渲染场景上挂载的所有 2D 渲染批次都会被提交渲染。
         * @param batch The draw batch.
         * @internal
         * @deprecated since v3.6.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.addBatch = function addBatch(batch) {
          this._batches.push(batch);
        }

        /**
         * @en Remove a draw batch of 2d objects, draw batch removed will no longer be submitted for rendering.
         * @zh 删除一个 2D 渲染批次，移除的 2D 渲染批次将不再被提交渲染。
         * @param batch The draw batch.
         * @internal
         * @deprecated since v3.6.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.removeBatch = function removeBatch(batch) {
          for (var i = 0; i < this._batches.length; ++i) {
            if (this._batches[i] === batch) {
              this._batches.splice(i, 1);
              return;
            }
          }
        }

        /**
         * @en Remove all 2d draw batches.
         * @zh 删除所有 2D 渲染批次。
         * @internal
         * @deprecated since v3.6.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.removeBatches = function removeBatches() {
          this._batches.length = 0;
        }

        /**
         * @engineInternal
         * @en Add a LOD group， all LOD groups attached to the render scene will be submitted for rendering.
         * @zh 增加一个LOD 组，渲染场景上挂载的所有LOD 组都会被提交渲染。
         * @param lodGroup the LOD group
         */;
        _proto.addLODGroup = function addLODGroup(lodGroup) {
          this._lodGroups.push(lodGroup);
          lodGroup.attachToScene(this);
          this._lodStateCache.addLodGroup(lodGroup);
        }

        /**
         * @engineInternal
         * @en Remove a LOD group, the LOD group removed will no longer be submitted for rendering.
         * @zh 删除一个LOD 组，移除的LOD 组将不再被提交渲染。
         * @param lodGroup the LOD group
         */;
        _proto.removeLODGroup = function removeLODGroup(lodGroup) {
          var index = this._lodGroups.indexOf(lodGroup);
          if (index >= 0) {
            this._lodGroups.splice(index, 1);
            lodGroup.detachFromScene();
            this._lodStateCache.removeLodGroup(lodGroup);
          }
        }

        /**
         * @engineInternal
         * @en Remove all LOD groups.
         * @zh 删除所有LOD 组。
         */;
        _proto.removeLODGroups = function removeLODGroups() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._lodGroups), _step3; !(_step3 = _iterator3()).done;) {
            var group = _step3.value;
            this._lodStateCache.removeLodGroup(group);
          }
          this._lodGroups.length = 0;
        }

        /**
         * @en Notify all models that the global pipeline state have been updated so that they can update their render data and states.
         * @zh 通知所有模型全局管线状态已更新，需要更新自身状态。
         */;
        _proto.onGlobalPipelineStateChanged = function onGlobalPipelineStateChanged() {
          for (var _iterator4 = _createForOfIteratorHelperLoose(this._models), _step4; !(_step4 = _iterator4()).done;) {
            var m = _step4.value;
            m.onGlobalPipelineStateChanged();
          }
        }

        /**
         * @en Generate a new model id.
         * @zh 生成一个新的模型 ID
         * @returns The model id
         */;
        _proto.generateModelId = function generateModelId() {
          return this._modelId++;
        };
        _createClass(RenderScene, [{
          key: "root",
          get:
          /**
           * @en The root manager of the renderer.
           * @zh 基础渲染管理器。
           */
          function get() {
            return this._root;
          }

          /**
           * @en The name of the render scene.
           * @zh 渲染场景的名称。
           */
        }, {
          key: "name",
          get: function get() {
            return this._name;
          }

          /**
           * @en All cameras of the render scene.
           * @zh 渲染场景管理的所有相机。
           */
        }, {
          key: "cameras",
          get: function get() {
            return this._cameras;
          }

          /**
           * @en The main directional light source of the render scene.
           * @zh 渲染场景管理的主方向光源。
           */
        }, {
          key: "mainLight",
          get: function get() {
            return this._mainLight;
          }

          /**
           * @en All sphere light sources of the render scene.
           * @zh 渲染场景管理的所有球面光源。
           */
        }, {
          key: "sphereLights",
          get: function get() {
            return this._sphereLights;
          }

          /**
           * @en All spot light sources of the render scene.
           * @zh 渲染场景管理的所有聚光灯光源。
           */
        }, {
          key: "spotLights",
          get: function get() {
            return this._spotLights;
          }

          /**
           * @en All point light sources of the render scene.
           * @zh 渲染场景管理的所有点光源。
           */
        }, {
          key: "pointLights",
          get: function get() {
            return this._pointLights;
          }

          /**
           * @en All ranged directional light sources of the render scene.
           * @zh 渲染场景管理的所有范围平行光光源。
           */
        }, {
          key: "rangedDirLights",
          get: function get() {
            return this._rangedDirLights;
          }

          /**
           * @en All active models of the render scene.
           * @zh 渲染场景管理的所有模型。
           */
        }, {
          key: "models",
          get: function get() {
            return this._models;
          }

          /**
           * @en All active 2d draw batches of the render scene.
           * @zh 渲染场景管理的所有 2D 渲染批次对象。
           */
        }, {
          key: "batches",
          get: function get() {
            return this._batches;
          }

          /**
           * @engineInternal
           * @en All LOD groups of the render scene.
           * @zh 渲染场景管理的所有 LOD 组。
           */
        }, {
          key: "lodGroups",
          get: function get() {
            return this._lodGroups;
          }
        }]);
        return RenderScene;
      }());
      LODInfo = function LODInfo() {
        /**
         * @zh 当前使用哪一级的 LOD, -1 表示没有层级被使用
         * @en Which level of LOD is currently in use, -1 means no levels are used
         */
        this.usedLevel = -1;
        this.lastUsedLevel = -1;
        this.transformDirty = true;
      };
      /**
       * @zh 管理LODGroup的使用状态，包含使用层级及其上的model可见相机列表；便于判断当前model是否被LODGroup裁剪
       * @en Manage the usage status of LODGroup, including the usage level and the list of visible cameras on its models;
       * easy to determine whether the current mod is cropped by LODGroup。
       */
      LodStateCache = /*#__PURE__*/function () {
        function LodStateCache(scene) {
          this._renderScene = null;
          /**
           * @zh LOD使用的model集合以及每个model当前能被看到的相机列表；包含每个LODGroup的每一级LOD
           * @en The set of models used by the LOD and the list of cameras that each models can currently be seen,
           *  contains each level of LOD for each LODGroup.
           */
          this._modelsInLODGroup = new Map();
          /**
            * @zh 指定相机下，LODGroup使用哪一级的LOD
            * @en Specify which level of LOD is used by the LODGroup under the camera.
            */
          this._lodStateInCamera = new Map();
          /**
            * @zh 上一帧添加的lodgroup
            * @en The lodgroup added in the previous frame.
            */
          this._newAddedLodGroupVec = new Array();
          this._levelModels = new Map();
          this._renderScene = scene;
        }
        var _proto2 = LodStateCache.prototype;
        _proto2.addCamera = function addCamera(camera) {
          var needRegisterChanged = false;
          for (var _iterator5 = _createForOfIteratorHelperLoose(this._renderScene.lodGroups), _step5; !(_step5 = _iterator5()).done;) {
            var lodGroup = _step5.value;
            var layer = lodGroup.node.layer;
            if ((camera.visibility & layer) === layer) {
              if (!this._lodStateInCamera.has(camera)) {
                this._lodStateInCamera.set(camera, new Map());
              }
              break;
            }
          }
        };
        _proto2.removeCamera = function removeCamera(camera) {
          if (this._lodStateInCamera.has(camera)) {
            this._lodStateInCamera["delete"](camera);
          }
        };
        _proto2.addLodGroup = function addLodGroup(lodGroup) {
          this._newAddedLodGroupVec.push(lodGroup);
          for (var _iterator6 = _createForOfIteratorHelperLoose(this._renderScene.cameras), _step6; !(_step6 = _iterator6()).done;) {
            var camera = _step6.value;
            if (this._lodStateInCamera.has(camera)) {
              continue;
            }
            var layer = lodGroup.node.layer;
            if ((camera.visibility & layer) === layer) {
              this._lodStateInCamera.set(camera, new Map());
            }
          }
        };
        _proto2.removeLodGroup = function removeLodGroup(lodGroup) {
          for (var index = 0; index < lodGroup.lodCount; index++) {
            var lod = lodGroup.lodDataArray[index];
            for (var _iterator7 = _createForOfIteratorHelperLoose(lod.models), _step7; !(_step7 = _iterator7()).done;) {
              var model = _step7.value;
              this._modelsInLODGroup["delete"](model);
            }
          }
          for (var _iterator8 = _createForOfIteratorHelperLoose(this._lodStateInCamera), _step8; !(_step8 = _iterator8()).done;) {
            var visibleCamera = _step8.value;
            visibleCamera[1]["delete"](lodGroup);
          }
          this._levelModels["delete"](lodGroup);
        };
        _proto2.removeModel = function removeModel(model) {
          if (this._modelsInLODGroup.has(model)) {
            this._modelsInLODGroup["delete"](model);
          }
        }

        // Update list of visible cameras on _modelsInLODGroup and update lod usage level under specified camera.
        ;
        _proto2.updateLodState = function updateLodState() {
          var _this = this;
          // insert vecAddedLodGroup's model into modelsByAnyLODGroup
          for (var _iterator9 = _createForOfIteratorHelperLoose(this._newAddedLodGroupVec), _step9; !(_step9 = _iterator9()).done;) {
            var addedLodGroup = _step9.value;
            var levelModels = this._levelModels.get(addedLodGroup);
            if (!levelModels) {
              levelModels = new Map();
              this._levelModels.set(addedLodGroup, levelModels);
            }
            for (var index = 0; index < addedLodGroup.lodCount; index++) {
              var lodModels = levelModels.get(index);
              if (!lodModels) {
                lodModels = new Array();
              }
              var lod = addedLodGroup.lodDataArray[index];
              for (var _iterator11 = _createForOfIteratorHelperLoose(lod.models), _step11; !(_step11 = _iterator11()).done;) {
                var model = _step11.value;
                var modelInfo = this._modelsInLODGroup.get(model);
                if (!modelInfo) {
                  modelInfo = new Map();
                }
                this._modelsInLODGroup.set(model, modelInfo);
                lodModels.push(model);
              }
              levelModels.set(index, lodModels);
            }
          }
          this._newAddedLodGroupVec.length = 0;

          // update current visible lod index & model's visible cameras list
          var _loop = function _loop() {
              var lodGroup = _step10.value;
              if (lodGroup.enabled) {
                var lodLevels = lodGroup.getLockedLODLevels();
                var count = lodLevels.length;
                // count > 0, indicating that the user force to use certain layers of
                // lod
                if (count > 0) {
                  // Update the dirty flag to make it easier to update the visible
                  // index of lod after lifting the forced use of lod.
                  if (lodGroup.node.hasChangedFlags > 0) {
                    for (var _iterator12 = _createForOfIteratorHelperLoose(_this._lodStateInCamera), _step12; !(_step12 = _iterator12()).done;) {
                      var visibleCamera = _step12.value;
                      var lodInfo = visibleCamera[1].get(lodGroup);
                      if (!lodInfo) {
                        lodInfo = new LODInfo();
                        visibleCamera[1].set(lodGroup, lodInfo);
                      }
                      lodInfo.transformDirty = true;
                    }
                  }
                  // Update the visible camera list of all models on lodGroup when the
                  // visible level changes.
                  if (lodGroup.isLockLevelChanged()) {
                    lodGroup.resetLockChangeFlag();
                    var _lodModels = _this._levelModels.get(lodGroup);
                    if (_lodModels) {
                      _lodModels.forEach(function (vecArray, index) {
                        vecArray.forEach(function (model) {
                          var modelInfo = _this._modelsInLODGroup.get(model);
                          if (modelInfo) {
                            modelInfo.clear();
                          }
                        });
                      });
                      for (var _iterator13 = _createForOfIteratorHelperLoose(lodLevels), _step13; !(_step13 = _iterator13()).done;) {
                        var visibleIndex = _step13.value;
                        var vecModels = _lodModels.get(visibleIndex);
                        if (vecModels) {
                          vecModels.forEach(function (model) {
                            var modelInfo = _this._modelsInLODGroup.get(model);
                            if (modelInfo && model.node && model.node.active) {
                              for (var _iterator14 = _createForOfIteratorHelperLoose(_this._lodStateInCamera), _step14; !(_step14 = _iterator14()).done;) {
                                var _visibleCamera = _step14.value;
                                modelInfo.set(_visibleCamera[0], true);
                              }
                            }
                          });
                        }
                      }
                    }
                  }
                  return 0; // continue
                }

                // Normal Process, no LOD is forced.
                var hasUpdated = false;
                for (var _iterator15 = _createForOfIteratorHelperLoose(_this._lodStateInCamera), _step15; !(_step15 = _iterator15()).done;) {
                  var _visibleCamera2 = _step15.value;
                  var _lodInfo = _visibleCamera2[1].get(lodGroup);
                  if (!_lodInfo) {
                    _lodInfo = new LODInfo();
                    _visibleCamera2[1].set(lodGroup, _lodInfo);
                  }
                  var cameraChangeFlags = _visibleCamera2[0].node.hasChangedFlags;
                  var lodChangeFlags = lodGroup.node.hasChangedFlags;
                  // Changes in the camera matrix or changes in the matrix of the node
                  // where lodGroup is located or the transformDirty marker is true,
                  // etc. All need to recalculate the visible level of LOD.
                  if (cameraChangeFlags > 0 || lodChangeFlags > 0 || _lodInfo.transformDirty) {
                    if (_lodInfo.transformDirty) {
                      _lodInfo.transformDirty = false;
                    }
                    var _index = lodGroup.getVisibleLODLevel(_visibleCamera2[0]);
                    if (_index !== _lodInfo.usedLevel) {
                      _lodInfo.lastUsedLevel = _lodInfo.usedLevel;
                      _lodInfo.usedLevel = _index;
                      hasUpdated = true;
                    }
                  }
                }
                var _lodModels2 = _this._levelModels.get(lodGroup);
                if (!_lodModels2) {
                  return 0; // continue
                }

                // The LOD of the last frame is forced to be used, the list of visible
                // cameras of modelInfo needs to be updated.
                if (lodGroup.isLockLevelChanged()) {
                  lodGroup.resetLockChangeFlag();
                  _lodModels2.forEach(function (vecArray, index) {
                    vecArray.forEach(function (model) {
                      var modelInfo = _this._modelsInLODGroup.get(model);
                      if (modelInfo) {
                        modelInfo.clear();
                      }
                    });
                  });
                  hasUpdated = true;
                } else if (hasUpdated) {
                  _this._lodStateInCamera.forEach(function (lodState, camera) {
                    var lodInfo = lodState.get(lodGroup);
                    if (lodInfo && lodInfo.usedLevel !== lodInfo.lastUsedLevel) {
                      var _vecModels = _lodModels2.get(lodInfo.lastUsedLevel);
                      if (_vecModels) {
                        _vecModels.forEach(function (model) {
                          var modelInfo = _this._modelsInLODGroup.get(model);
                          if (modelInfo) {
                            modelInfo.clear();
                          }
                        });
                      }
                    }
                  });
                }
                if (hasUpdated) {
                  _this._lodStateInCamera.forEach(function (lodState, camera) {
                    var lodInfo = lodState.get(lodGroup);
                    if (lodInfo) {
                      var usedLevel = lodInfo.usedLevel;
                      var _vecModels2 = _lodModels2.get(usedLevel);
                      if (_vecModels2) {
                        _vecModels2.forEach(function (model) {
                          var modelInfo = _this._modelsInLODGroup.get(model);
                          if (modelInfo && model.node && model.node.active) {
                            modelInfo.set(camera, true);
                          }
                        });
                      }
                    }
                  });
                }
              }
            },
            _ret;
          for (var _iterator10 = _createForOfIteratorHelperLoose(this._renderScene.lodGroups), _step10; !(_step10 = _iterator10()).done;) {
            _ret = _loop();
            if (_ret === 0) continue;
          }
        };
        _proto2.isLodModelCulled = function isLodModelCulled(camera, model) {
          var modelInfo = this._modelsInLODGroup.get(model);
          if (!modelInfo) {
            return false;
          }
          return !modelInfo.has(camera);
        };
        _proto2.clearCache = function clearCache() {
          this._levelModels.clear();
          this._modelsInLODGroup.clear();
          this._lodStateInCamera.clear();
          this._newAddedLodGroupVec.length = 0;
        };
        _proto2.isLodGroupVisibleByCamera = function isLodGroupVisibleByCamera(lodGroup, camera) {
          var layer = lodGroup.node.layer;
          return (camera.visibility & layer) === layer;
        };
        return LodStateCache;
      }();
    }
  };
});