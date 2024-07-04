System.register("q-bundled:///fs/cocos/root.js", ["./core/index.js", "./rendering/deferred/deferred-pipeline.js", "./rendering/forward/forward-pipeline.js", "./rendering/debug-view.js", "./render-scene/scene/index.js", "./render-scene/scene/light.js", "./render-scene/core/render-scene.js", "./render-scene/core/render-window.js", "./gfx/index.js", "./rendering/define.js", "./xr/xr-enums.js"], function (_export, _context) {
  "use strict";

  var Pool, cclegacy, warnID, settings, Settings, macro, log, DeferredPipeline, createDefaultPipeline, DebugView, Camera, CameraType, TrackingType, LightType, RenderScene, RenderWindow, ColorAttachment, DepthStencilAttachment, RenderPassInfo, StoreOp, Feature, deviceManager, LegacyRenderMode, localDescriptorSetLayout_ResizeMaxJoints, UBOCamera, UBOGlobal, UBOLocal, UBOShadow, UBOWorldBound, XREye, XRPoseType, Root;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
    setters: [function (_coreIndexJs) {
      Pool = _coreIndexJs.Pool;
      cclegacy = _coreIndexJs.cclegacy;
      warnID = _coreIndexJs.warnID;
      settings = _coreIndexJs.settings;
      Settings = _coreIndexJs.Settings;
      macro = _coreIndexJs.macro;
      log = _coreIndexJs.log;
    }, function (_renderingDeferredDeferredPipelineJs) {
      DeferredPipeline = _renderingDeferredDeferredPipelineJs.DeferredPipeline;
    }, function (_renderingForwardForwardPipelineJs) {
      createDefaultPipeline = _renderingForwardForwardPipelineJs.createDefaultPipeline;
    }, function (_renderingDebugViewJs) {
      DebugView = _renderingDebugViewJs.DebugView;
    }, function (_renderSceneSceneIndexJs) {
      Camera = _renderSceneSceneIndexJs.Camera;
      CameraType = _renderSceneSceneIndexJs.CameraType;
      TrackingType = _renderSceneSceneIndexJs.TrackingType;
    }, function (_renderSceneSceneLightJs) {
      LightType = _renderSceneSceneLightJs.LightType;
    }, function (_renderSceneCoreRenderSceneJs) {
      RenderScene = _renderSceneCoreRenderSceneJs.RenderScene;
    }, function (_renderSceneCoreRenderWindowJs) {
      RenderWindow = _renderSceneCoreRenderWindowJs.RenderWindow;
    }, function (_gfxIndexJs) {
      ColorAttachment = _gfxIndexJs.ColorAttachment;
      DepthStencilAttachment = _gfxIndexJs.DepthStencilAttachment;
      RenderPassInfo = _gfxIndexJs.RenderPassInfo;
      StoreOp = _gfxIndexJs.StoreOp;
      Feature = _gfxIndexJs.Feature;
      deviceManager = _gfxIndexJs.deviceManager;
      LegacyRenderMode = _gfxIndexJs.LegacyRenderMode;
    }, function (_renderingDefineJs) {
      localDescriptorSetLayout_ResizeMaxJoints = _renderingDefineJs.localDescriptorSetLayout_ResizeMaxJoints;
      UBOCamera = _renderingDefineJs.UBOCamera;
      UBOGlobal = _renderingDefineJs.UBOGlobal;
      UBOLocal = _renderingDefineJs.UBOLocal;
      UBOShadow = _renderingDefineJs.UBOShadow;
      UBOWorldBound = _renderingDefineJs.UBOWorldBound;
    }, function (_xrXrEnumsJs) {
      XREye = _xrXrEnumsJs.XREye;
      XRPoseType = _xrXrEnumsJs.XRPoseType;
    }],
    execute: function () {
      /**
       * @en Initialization information for the Root
       * @zh Root 初始化描述信息
       */
      /**
       * @en Creation information for the Root
       * @zh 场景创建描述信息
       */
      /**
       * @en The root manager of the renderer which manages all device resources and the render pipeline.
       * @zh 基础渲染器管理类，管理所有设备相关的资源创建以及渲染管线。
       */
      _export("Root", Root = /*#__PURE__*/function () {
        /**
         * @en The constructor of the root, user shouldn't create the root instance, it's managed by the [[Director]].
         * @zh 构造函数，用户不应该自己创建任何 Root 对象，它是由 [[Director]] 管理的。
         * @param device GFX device
         */
        function Root(device) {
          var _this = this;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._createSceneFun = null;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._createWindowFun = null;
          this._device = void 0;
          this._windows = [];
          this._mainWindow = null;
          this._curWindow = null;
          this._tempWindow = null;
          this._usesCustomPipeline = true;
          this._pipeline = null;
          this._pipelineEvent = null;
          this._classicPipeline = null;
          this._customPipeline = null;
          this._batcher = null;
          this._dataPoolMgr = void 0;
          this._scenes = [];
          this._modelPools = new Map();
          this._cameraPool = null;
          this._lightPools = new Map();
          this._debugView = new DebugView();
          this._fpsTime = 0;
          this._frameCount = 0;
          this._fps = 0;
          this._fixedFPS = 0;
          this._useDeferredPipeline = false;
          this._fixedFPSFrameTime = 0;
          this._cumulativeTime = 0;
          this._frameTime = 0;
          this._cameraList = [];
          this._device = device;
          this._dataPoolMgr = cclegacy.internal.DataPoolManager && new cclegacy.internal.DataPoolManager(device);
          RenderScene.registerCreateFunc(this);
          RenderWindow.registerCreateFunc(this);
          this._cameraPool = new Pool(function () {
            return new Camera(_this._device);
          }, 4, function (cam) {
            return cam.destroy();
          });
        }

        /**
         * @en The initialization function, user shouldn't initialize the root, it's managed by the [[Director]].
         * @zh 初始化函数，用户不应该自己初始化 Root，它是由 [[Director]] 管理的。
         * @param info Root initialization information
         */
        var _proto = Root.prototype;
        _proto.initialize = function initialize(info) {
          var _this$_dataPoolMgr;
          var swapchain = deviceManager.swapchain;
          var colorAttachment = new ColorAttachment();
          colorAttachment.format = swapchain.colorTexture.format;
          var depthStencilAttachment = new DepthStencilAttachment();
          depthStencilAttachment.format = swapchain.depthStencilTexture.format;
          depthStencilAttachment.depthStoreOp = StoreOp.DISCARD;
          depthStencilAttachment.stencilStoreOp = StoreOp.DISCARD;
          var renderPassInfo = new RenderPassInfo([colorAttachment], depthStencilAttachment);
          this._mainWindow = this.createWindow({
            title: 'rootMainWindow',
            width: swapchain.width,
            height: swapchain.height,
            renderPassInfo: renderPassInfo,
            swapchain: swapchain
          });
          this._curWindow = this._mainWindow;
          var customJointTextureLayouts = settings.querySettings(Settings.Category.ANIMATION, 'customJointTextureLayouts') || [];
          (_this$_dataPoolMgr = this._dataPoolMgr) === null || _this$_dataPoolMgr === void 0 ? void 0 : _this$_dataPoolMgr.jointTexturePool.registerCustomTextureLayouts(customJointTextureLayouts);
          this._resizeMaxJointForDS();
        }

        /**
         * @en Destroy the root, user shouldn't invoke this function, it will cause undefined behavior.
         * @zh 销毁 Root，用户不应该调用此方法，会造成未知行为。
         */;
        _proto.destroy = function destroy() {
          this.destroyScenes();
          if (this._pipeline) {
            this._pipeline.destroy();
            this._pipeline = null;
            this._pipelineEvent = null;
          }
          if (this._batcher) {
            this._batcher.destroy();
            this._batcher = null;
          }
          this._curWindow = null;
          this._mainWindow = null;
          this.dataPoolManager.clear();
          if (cclegacy.rendering) {
            cclegacy.rendering.destroy();
          }
        }

        /**
         * @en Resize the on-screen render windows.
         * @zh 重置在屏窗口的大小。
         * @param width The new width of the window.
         * @param height The new height of the window.
         * @param windowId The system window ID, optional for now.
         */;
        _proto.resize = function resize(width, height, windowId) {
          for (var _iterator = _createForOfIteratorHelperLoose(this._windows), _step; !(_step = _iterator()).done;) {
            var window = _step.value;
            if (window.swapchain) {
              window.resize(width, height);
            }
          }
        }

        /**
         * @en Setup the render pipeline
         * @zh 设置渲染管线
         * @param rppl The render pipeline
         * @returns The setup is successful or not
         */;
        _proto.setRenderPipeline = function setRenderPipeline(rppl) {
          var internal = cclegacy.internal,
            director = cclegacy.director,
            rendering = cclegacy.rendering;
          //-----------------------------------------------
          // prepare classic pipeline
          //-----------------------------------------------
          if (rppl instanceof DeferredPipeline) {
            this._useDeferredPipeline = true;
          }
          var isCreateDefaultPipeline = false;
          if (!rppl) {
            rppl = createDefaultPipeline();
            isCreateDefaultPipeline = true;
          }

          // now cluster just enabled in deferred pipeline
          if (!this._useDeferredPipeline || !this.device.hasFeature(Feature.COMPUTE_SHADER)) {
            // disable cluster
            rppl.clusterEnabled = false;
          }
          rppl.bloomEnabled = false;

          //-----------------------------------------------
          // choose pipeline
          //-----------------------------------------------
          if (macro.CUSTOM_PIPELINE_NAME !== '' && rendering && this.usesCustomPipeline) {
            this._customPipeline = rendering.createCustomPipeline();
            isCreateDefaultPipeline = true;
            this._pipeline = this._customPipeline;
            this._pipelineEvent = rppl;
            log('Using custom pipeline');
          } else {
            this._classicPipeline = rppl;
            this._pipeline = this._classicPipeline;
            this._pipelineEvent = this._classicPipeline;
            this._usesCustomPipeline = false;
          }
          var renderMode = settings.querySettings(Settings.Category.RENDERING, 'renderMode');
          if (renderMode !== LegacyRenderMode.HEADLESS || this._classicPipeline) {
            if (!this._pipeline.activate(this._mainWindow.swapchain)) {
              if (isCreateDefaultPipeline) {
                this._pipeline.destroy();
              }
              this._classicPipeline = null;
              this._customPipeline = null;
              this._pipeline = null;
              this._pipelineEvent = null;
              return false;
            }
          }

          //-----------------------------------------------
          // pipeline initialization completed
          //-----------------------------------------------
          var scene = director.getScene();
          if (scene) {
            scene.globals.activate();
          }
          this.onGlobalPipelineStateChanged();
          if (!this._batcher && internal.Batcher2D) {
            this._batcher = new internal.Batcher2D(this);
            if (!this._batcher.initialize()) {
              this.destroy();
              return false;
            }
          }
          return true;
        }

        /**
         * @en Notify the pipeline and all scenes that the global pipeline state have been updated so that they can update their render data and states.
         * @zh 通知渲染管线和所有场景全局管线状态已更新，需要更新自身状态。
         */;
        _proto.onGlobalPipelineStateChanged = function onGlobalPipelineStateChanged() {
          for (var i = 0; i < this._scenes.length; i++) {
            this._scenes[i].onGlobalPipelineStateChanged();
          }
          if (this._pipeline.pipelineSceneData.skybox.enabled) {
            this._pipeline.pipelineSceneData.skybox.model.onGlobalPipelineStateChanged();
          }
          this._pipeline.onGlobalPipelineStateChanged();
        }

        /**
         * @en Active the render window as the [[curWindow]]
         * @zh 激活指定窗口为当前窗口 [[curWindow]]
         * @param window The render window to be activated
         */;
        _proto.activeWindow = function activeWindow(window) {
          this._curWindow = window;
        }

        /**
         * @en Reset the time cumulated
         * @zh 重置累计时间
         */;
        _proto.resetCumulativeTime = function resetCumulativeTime() {
          this._cumulativeTime = 0;
        }

        /**
         * @en The entry function of the render process for every frame.
         * @zh 用于每帧执行渲染流程的入口函数
         * @param deltaTime @en The delta time since last update. @zh 距离上一帧间隔时间
         */;
        _proto.frameMove = function frameMove(deltaTime) {
          var _globalThis$__globalX;
          this._frameTime = deltaTime;

          /*
          if (this._fixedFPSFrameTime > 0) {
               const elapsed = this._frameTime * 1000.0;
              if (this._fixedFPSFrameTime > elapsed) {
                   setTimeout(function () {}, this._fixedFPSFrameTime - elapsed);
              }
          }
          */

          ++this._frameCount;
          this._cumulativeTime += deltaTime;
          this._fpsTime += deltaTime;
          if (this._fpsTime > 1.0) {
            this._fps = this._frameCount;
            this._frameCount = 0;
            this._fpsTime = 0.0;
          }
          if ((_globalThis$__globalX = globalThis.__globalXR) !== null && _globalThis$__globalX !== void 0 && _globalThis$__globalX.isWebXR) {
            this._doWebXRFrameMove();
          } else {
            this._frameMoveBegin();
            this._frameMoveProcess();
            this._frameMoveEnd();
          }
        }

        /**
         * @en Create a render window
         * @zh 创建一个新的窗口
         * @param info @en The window creation information @zh 窗口描述信息
         */;
        _proto.createWindow = function createWindow(info) {
          var window = this._createWindowFun(this);
          window.initialize(this.device, info);
          this._windows.push(window);
          return window;
        }

        /**
         * @en Destroy a render window
         * @zh 销毁指定的窗口
         * @param window The render window to be destroyed
         */;
        _proto.destroyWindow = function destroyWindow(window) {
          for (var i = 0; i < this._windows.length; ++i) {
            if (this._windows[i] === window) {
              window.destroy();
              this._windows.splice(i, 1);
              return;
            }
          }
        }

        /**
         * @en Destroy all render windows
         * @zh 销毁全部窗口
         */;
        _proto.destroyWindows = function destroyWindows() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._windows), _step2; !(_step2 = _iterator2()).done;) {
            var window = _step2.value;
            window.destroy();
          }
          this._windows.length = 0;
        }

        /**
         * @en Create a render scene
         * @zh 创建渲染场景
         * @param info @en The creation information for render scene @zh 渲染场景描述信息
         */;
        _proto.createScene = function createScene(info) {
          var scene = this._createSceneFun(this);
          scene.initialize(info);
          this._scenes.push(scene);
          return scene;
        }

        /**
         * @en Destroy the given render scene
         * @zh 销毁指定的渲染场景
         * @param scene @en The render scene to be destroyed. @zh 要销毁的渲染场景
         */;
        _proto.destroyScene = function destroyScene(scene) {
          for (var i = 0; i < this._scenes.length; ++i) {
            if (this._scenes[i] === scene) {
              scene.destroy();
              this._scenes.splice(i, 1);
              return;
            }
          }
        }

        /**
         * @en Destroy all render scenes.
         * @zh 销毁全部场景。
         */;
        _proto.destroyScenes = function destroyScenes() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._scenes), _step3; !(_step3 = _iterator3()).done;) {
            var scene = _step3.value;
            scene.destroy();
          }
          this._scenes.length = 0;
        }

        /**
         * @en Create a model
         * @zh 创建模型
         * @param ModelCtor @en The class of the model @zh 模型的类
         * @returns The model created
         */;
        _proto.createModel = function createModel(ModelCtor) {
          var p = this._modelPools.get(ModelCtor);
          if (!p) {
            this._modelPools.set(ModelCtor, new Pool(function () {
              return new ModelCtor();
            }, 10, function (obj) {
              return obj.destroy();
            }));
            p = this._modelPools.get(ModelCtor);
          }
          var model = p.alloc();
          model.initialize();
          return model;
        }

        /**
         * @en Destroy the given model
         * @zh 销毁指定的模型
         * @param m @en The model to be destroyed @zh 要销毁的模型
         */;
        _proto.destroyModel = function destroyModel(m) {
          var p = this._modelPools.get(m.constructor);
          if (p) {
            p.free(m);
            if (m.scene) {
              m.scene.removeModel(m);
            }
          } else {
            warnID(1300, m.constructor.name);
          }
          m.destroy();
        }

        /**
         * @en Create a camera
         * @zh 创建一个相机
         * @returns The camera created.
         */;
        _proto.createCamera = function createCamera() {
          return this._cameraPool.alloc();
        }

        /**
         * @en Create a light source
         * @zh 创建光源
         * @param LightCtor @en The class of the light @zh 光源的类
         * @returns The light created
         */;
        _proto.createLight = function createLight(LightCtor) {
          var l = this._lightPools.get(LightCtor);
          if (!l) {
            this._lightPools.set(LightCtor, new Pool(function () {
              return new LightCtor();
            }, 4, function (obj) {
              return obj.destroy();
            }));
            l = this._lightPools.get(LightCtor);
          }
          var light = l.alloc();
          light.initialize();
          return light;
        }

        /**
         * @en Destroy the given light
         * @zh 销毁指定的光源
         * @param l @en The light to be destroyed @zh 要销毁的光源
         */;
        _proto.destroyLight = function destroyLight(l) {
          if (l.scene) {
            switch (l.type) {
              case LightType.DIRECTIONAL:
                l.scene.removeDirectionalLight(l);
                break;
              case LightType.SPHERE:
                l.scene.removeSphereLight(l);
                break;
              case LightType.SPOT:
                l.scene.removeSpotLight(l);
                break;
              case LightType.POINT:
                l.scene.removePointLight(l);
                break;
              case LightType.RANGED_DIRECTIONAL:
                l.scene.removeRangedDirLight(l);
                break;
              default:
                break;
            }
          }
          l.destroy();
        }

        /**
         * @en recycle the given light to light object pool
         * @zh 回收指定的光源到对象池
         * @param l @en The light to be recycled @zh 要回收的光源
         */;
        _proto.recycleLight = function recycleLight(l) {
          var p = this._lightPools.get(l.constructor);
          if (p) {
            p.free(l);
            if (l.scene) {
              switch (l.type) {
                case LightType.DIRECTIONAL:
                  l.scene.removeDirectionalLight(l);
                  break;
                case LightType.SPHERE:
                  l.scene.removeSphereLight(l);
                  break;
                case LightType.SPOT:
                  l.scene.removeSpotLight(l);
                  break;
                case LightType.POINT:
                  l.scene.removePointLight(l);
                  break;
                case LightType.RANGED_DIRECTIONAL:
                  l.scene.removeRangedDirLight(l);
                  break;
                default:
                  break;
              }
            }
          }
        };
        _proto._doWebXRFrameMove = function _doWebXRFrameMove() {
          var xr = globalThis.__globalXR;
          if (!xr) {
            return;
          }
          var windows = this._windows;
          var cameraList = this._cameraList;
          var viewCount = xr.webXRMatProjs ? xr.webXRMatProjs.length : 1;
          if (!xr.webXRWindowMap) {
            xr.webXRWindowMap = new Map();
          }
          var allcameras = [];
          var webxrHmdPoseInfos = xr.webxrHmdPoseInfos;
          for (var xrEye = 0; xrEye < viewCount; xrEye++) {
            for (var _iterator4 = _createForOfIteratorHelperLoose(windows), _step4; !(_step4 = _iterator4()).done;) {
              var window = _step4.value;
              allcameras = allcameras.concat(window.cameras);
              if (window.swapchain) {
                xr.webXRWindowMap.set(window, xrEye);
              }
            }
            if (webxrHmdPoseInfos) {
              var cameraPosition = [0, 0, 0];
              for (var i = 0; i < webxrHmdPoseInfos.length; i++) {
                var info = webxrHmdPoseInfos[i];
                if (info.code === XRPoseType.VIEW_LEFT && xrEye === XREye.LEFT || info.code === XRPoseType.VIEW_RIGHT && xrEye === XREye.RIGHT) {
                  cameraPosition[0] = info.position.x;
                  cameraPosition[1] = info.position.y;
                  cameraPosition[2] = info.position.z;
                  break;
                }
              }
              for (var _iterator5 = _createForOfIteratorHelperLoose(allcameras), _step5; !(_step5 = _iterator5()).done;) {
                var cam = _step5.value;
                if (cam.trackingType !== TrackingType.NO_TRACKING && cam.node) {
                  var isTrackingRotation = cam.trackingType === TrackingType.ROTATION;
                  if (isTrackingRotation) {
                    cameraPosition = [0, 0, 0];
                  }
                  cam.node.setPosition(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
                }
              }
            }
            allcameras.length = 0;
            this._frameMoveBegin();
            this._frameMoveProcess();
            for (var _i = cameraList.length - 1; _i >= 0; _i--) {
              var camera = cameraList[_i];
              var isMismatchedCam = xrEye === XREye.LEFT && camera.cameraType === CameraType.RIGHT_EYE || xrEye === XREye.RIGHT && camera.cameraType === CameraType.LEFT_EYE;
              if (isMismatchedCam) {
                // currently is left eye loop, so right camera do not need active
                cameraList.splice(_i, 1);
              }
            }
            this._frameMoveEnd();
          }
        };
        _proto._frameMoveBegin = function _frameMoveBegin() {
          for (var i = 0; i < this._scenes.length; ++i) {
            this._scenes[i].removeBatches();
          }
          this._cameraList.length = 0;
        };
        _proto._frameMoveProcess = function _frameMoveProcess() {
          var director = cclegacy.director;
          var windows = this._windows;
          var cameraList = this._cameraList;
          for (var i = 0; i < windows.length; i++) {
            var window = windows[i];
            window.extractRenderCameras(cameraList);
          }
          if (this._pipeline && cameraList.length > 0) {
            this._device.acquire([deviceManager.swapchain]);
            var scenes = this._scenes;
            var stamp = director.getTotalFrames();
            if (this._batcher) {
              this._batcher.update();
              this._batcher.uploadBuffers();
            }
            for (var _i2 = 0; _i2 < scenes.length; _i2++) {
              scenes[_i2].update(stamp);
            }
          }
        };
        _proto._frameMoveEnd = function _frameMoveEnd() {
          var director = cclegacy.director,
            Director = cclegacy.Director;
          var cameraList = this._cameraList;
          if (this._pipeline && cameraList.length > 0) {
            director.emit(Director.EVENT_BEFORE_COMMIT);
            cameraList.sort(function (a, b) {
              return a.priority - b.priority;
            });
            for (var i = 0; i < cameraList.length; ++i) {
              var _cameraList$i$geometr;
              (_cameraList$i$geometr = cameraList[i].geometryRenderer) === null || _cameraList$i$geometr === void 0 ? void 0 : _cameraList$i$geometr.update();
            }
            director.emit(Director.EVENT_BEFORE_RENDER);
            this._pipeline.render(cameraList);
            director.emit(Director.EVENT_AFTER_RENDER);
            this._device.present();
          }
          if (this._batcher) this._batcher.reset();
        };
        _proto._resizeMaxJointForDS = function _resizeMaxJointForDS() {
          // TODO: usedUBOVectorCount should be estimated more carefully, the UBOs used could vary in different scenes.
          var usedUBOVectorCount = Math.max((UBOGlobal.COUNT + UBOCamera.COUNT + UBOShadow.COUNT + UBOLocal.COUNT + UBOWorldBound.COUNT) / 4, 100);
          var maxJoints = Math.floor((deviceManager.gfxDevice.capabilities.maxVertexUniformVectors - usedUBOVectorCount) / 3);
          maxJoints = maxJoints < 256 ? maxJoints : 256;
          localDescriptorSetLayout_ResizeMaxJoints(maxJoints);
        };
        _createClass(Root, [{
          key: "device",
          get:
          /**
           * @en The GFX device
           * @zh GFX 设备
           */
          function get() {
            return this._device;
          }

          /**
           * @en The main window
           * @zh 主窗口
           */
        }, {
          key: "mainWindow",
          get: function get() {
            return this._mainWindow;
          }

          /**
           * @en The current active window
           * @zh 当前激活的窗口
           */
        }, {
          key: "curWindow",
          get: function get() {
            return this._curWindow;
          }

          /**
           * @e The temporary window for data transmission
           * @zh 临时窗口（用于数据传输）
           * @internal
           */,
          set: function set(window) {
            this._curWindow = window;
          }
        }, {
          key: "tempWindow",
          get: function get() {
            return this._tempWindow;
          }

          /**
           * @en The windows list
           * @zh 窗口列表
           */,
          set: function set(window) {
            this._tempWindow = window;
          }
        }, {
          key: "windows",
          get: function get() {
            return this._windows;
          }

          /**
           * @zh
           * 启用自定义渲染管线
           */
        }, {
          key: "usesCustomPipeline",
          get: function get() {
            return this._usesCustomPipeline;
          }

          /**
           * @en The render pipeline
           * @zh 渲染管线
           */
        }, {
          key: "pipeline",
          get: function get() {
            return this._pipeline;
          }

          /**
           * @en The custom render pipeline
           * @zh 自定义渲染管线
           */
        }, {
          key: "customPipeline",
          get: function get() {
            return this._customPipeline;
          }

          /**
           * @en The pipeline events
           * @zh 渲染管线事件
           */
        }, {
          key: "pipelineEvent",
          get: function get() {
            return this._pipelineEvent;
          }

          /**
           * @en The draw batch manager for 2D UI, for engine internal usage, user do not need to use this.
           * @zh 2D UI 渲染合批管理器，引擎内部使用，用户无需使用此接口
           */
        }, {
          key: "batcher2D",
          get: function get() {
            return this._batcher;
          }

          /**
           * @en Render scenes list
           * @zh 渲染场景列表
           */
        }, {
          key: "scenes",
          get: function get() {
            return this._scenes;
          }

          /**
           * @en The debug view manager for rendering
           * @zh 渲染调试管理器
           */
        }, {
          key: "debugView",
          get: function get() {
            return this._debugView;
          }

          /**
           * @en The time cumulated in seconds since the game began running.
           * @zh 累计时间（秒）。
           */
        }, {
          key: "cumulativeTime",
          get: function get() {
            return this._cumulativeTime;
          }

          /**
           * @en The current frame time in seconds.
           * @zh 帧时间（秒）。
           */
        }, {
          key: "frameTime",
          get: function get() {
            return this._frameTime;
          }

          /**
           * @en The frame count during the last second
           * @zh 一秒内的累计帧数
           */
        }, {
          key: "frameCount",
          get: function get() {
            return this._frameCount;
          }

          /**
           * @en The recent frame rate for the last second
           * @zh 当前每秒帧率
           */
        }, {
          key: "fps",
          get: function get() {
            return this._fps;
          }

          /**
           * @en The wanted frame rate set by user
           * @zh 每秒设定帧率
           */
        }, {
          key: "fixedFPS",
          get: function get() {
            return this._fixedFPS;
          }

          /**
           * @internal
           */,
          set: function set(fps) {
            if (fps > 0) {
              this._fixedFPS = fps;
              this._fixedFPSFrameTime = 1000.0 / fps;
            } else {
              this._fixedFPSFrameTime = 0;
            }
          }
        }, {
          key: "dataPoolManager",
          get: function get() {
            return this._dataPoolMgr;
          }

          /**
           * @en Whether the built-in deferred pipeline is used.
           * @zh 是否启用内置延迟渲染管线
           */
        }, {
          key: "useDeferredPipeline",
          get: function get() {
            return this._useDeferredPipeline;
          }
        }, {
          key: "cameraList",
          get: function get() {
            return this._cameraList;
          }
        }]);
        return Root;
      }());
      cclegacy.Root = Root;
    }
  };
});