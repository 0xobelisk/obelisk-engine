System.register("q-bundled:///fs/cocos/rendering/custom/custom-pipeline.js", ["pal/system-info", "../../gfx/base/define.js", "../../render-scene/scene/index.js", "./types.js", "./define.js", "./utils.js", "../../core/index.js", "../../core/geometry/aabb.js", "../define.js"], function (_export, _context) {
  "use strict";

  var systemInfo, Color, Format, LoadOp, Rect, StoreOp, Viewport, CSMLevel, CameraUsage, CopyPair, LightInfo, QueueHint, ResourceResidency, SceneFlags, buildBloomPass, buildForwardPass, buildFxaaPass, buildPostprocessPass, buildSSSSPass, buildToneMappingPass, buildTransparencyPass, buildUIPass, hasSkinObject, buildHBAOPasses, buildCopyPass, getRenderArea, buildReflectionProbePasss, isUICamera, assert, cclegacy, geometry, AABB, supportsR32FloatTexture, CustomPipelineBuilder, WindowInfo, SceneInfo, TestPipelineBuilder, copyPair, pairs;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  _export({
    CustomPipelineBuilder: void 0,
    TestPipelineBuilder: void 0
  });
  return {
    setters: [function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_gfxBaseDefineJs) {
      Color = _gfxBaseDefineJs.Color;
      Format = _gfxBaseDefineJs.Format;
      LoadOp = _gfxBaseDefineJs.LoadOp;
      Rect = _gfxBaseDefineJs.Rect;
      StoreOp = _gfxBaseDefineJs.StoreOp;
      Viewport = _gfxBaseDefineJs.Viewport;
    }, function (_renderSceneSceneIndexJs) {
      CSMLevel = _renderSceneSceneIndexJs.CSMLevel;
      CameraUsage = _renderSceneSceneIndexJs.CameraUsage;
    }, function (_typesJs) {
      CopyPair = _typesJs.CopyPair;
      LightInfo = _typesJs.LightInfo;
      QueueHint = _typesJs.QueueHint;
      ResourceResidency = _typesJs.ResourceResidency;
      SceneFlags = _typesJs.SceneFlags;
    }, function (_defineJs) {
      buildBloomPass = _defineJs.buildBloomPass;
      buildForwardPass = _defineJs.buildForwardPass;
      buildFxaaPass = _defineJs.buildFxaaPass;
      buildPostprocessPass = _defineJs.buildPostprocessPass;
      buildSSSSPass = _defineJs.buildSSSSPass;
      buildToneMappingPass = _defineJs.buildToneMappingPass;
      buildTransparencyPass = _defineJs.buildTransparencyPass;
      buildUIPass = _defineJs.buildUIPass;
      hasSkinObject = _defineJs.hasSkinObject;
      buildHBAOPasses = _defineJs.buildHBAOPasses;
      buildCopyPass = _defineJs.buildCopyPass;
      getRenderArea = _defineJs.getRenderArea;
      buildReflectionProbePasss = _defineJs.buildReflectionProbePasss;
    }, function (_utilsJs) {
      isUICamera = _utilsJs.isUICamera;
    }, function (_coreIndexJs) {
      assert = _coreIndexJs.assert;
      cclegacy = _coreIndexJs.cclegacy;
      geometry = _coreIndexJs.geometry;
    }, function (_coreGeometryAabbJs) {
      AABB = _coreGeometryAabbJs.AABB;
    }, function (_defineJs2) {
      supportsR32FloatTexture = _defineJs2.supportsR32FloatTexture;
    }],
    execute: function () {
      copyPair = new CopyPair();
      pairs = [copyPair];
      _export("CustomPipelineBuilder", CustomPipelineBuilder = class CustomPipelineBuilder {
        setup(cameras, ppl) {
          for (let i = 0; i < cameras.length; i++) {
            const camera = cameras[i];
            if (camera.scene === null) {
              continue;
            }
            const isGameView = camera.cameraUsage === CameraUsage.GAME || camera.cameraUsage === CameraUsage.GAME_VIEW;
            if (!isGameView) {
              // forward pass
              buildForwardPass(camera, ppl, isGameView);
              // reflection probe pass
              buildReflectionProbePasss(camera, ppl);
              continue;
            }
            // TODO: There is currently no effective way to judge the ui camera. Let’s do this first.
            if (!isUICamera(camera)) {
              const hasDeferredTransparencyObjects = hasSkinObject(ppl);
              // forward pass
              const forwardInfo = buildForwardPass(camera, ppl, isGameView, !hasDeferredTransparencyObjects);
              // reflection probe pass
              buildReflectionProbePasss(camera, ppl);
              const area = getRenderArea(camera, camera.window.width, camera.window.height);
              const width = area.width;
              const height = area.height;
              if (!ppl.containsResource('copyTexTest')) {
                ppl.addRenderTarget('copyTexTest', Format.RGBA16F, width, height, ResourceResidency.PERSISTENT);
              }
              copyPair.source = forwardInfo.rtName;
              copyPair.target = 'copyTexTest';
              buildCopyPass(ppl, pairs);

              // skin pass
              const skinInfo = buildSSSSPass(camera, ppl, 'copyTexTest', forwardInfo.dsName);
              // deferred transparency objects
              const deferredTransparencyInfo = buildTransparencyPass(camera, ppl, skinInfo.rtName, skinInfo.dsName, hasDeferredTransparencyObjects);
              // hbao pass
              const hbaoInfo = buildHBAOPasses(camera, ppl, deferredTransparencyInfo.rtName, deferredTransparencyInfo.dsName);
              // tone map pass
              const toneMappingInfo = buildToneMappingPass(camera, ppl, hbaoInfo.rtName, hbaoInfo.dsName);
              // fxaa pass
              const fxaaInfo = buildFxaaPass(camera, ppl, toneMappingInfo.rtName, toneMappingInfo.dsName);
              // bloom passes
              // todo: bloom need to be rendered before tone-mapping
              const bloomInfo = buildBloomPass(camera, ppl, fxaaInfo.rtName);
              // Present Pass
              buildPostprocessPass(camera, ppl, bloomInfo.rtName);
              continue;
            }
            // render ui
            buildUIPass(camera, ppl);
          }
        }
      });
      WindowInfo = class WindowInfo {
        constructor(id, width, height) {
          this.id = 0xFFFFFFFF;
          this.width = 0;
          this.height = 0;
          this.id = id;
          this.width = width;
          this.height = height;
        }
      };
      SceneInfo = class SceneInfo {
        constructor(pipelineSceneData) {
          this.pipelineSceneData = void 0;
          this.punctualLights = [];
          this.spotLights = [];
          this.shadows = void 0;
          this.pipelineSceneData = pipelineSceneData;
          this.shadows = pipelineSceneData.shadows;
        }
        reset() {
          this.punctualLights.length = 0;
          this.spotLights.length = 0;
        }
      };
      _export("TestPipelineBuilder", TestPipelineBuilder = class TestPipelineBuilder {
        constructor(pipelineSceneData) {
          this._windows = new Map();
          this._sceneInfo = void 0;
          // context
          this._tiled = systemInfo.isMobile;
          this._flipY = cclegacy.director.root.device.capabilities.screenSpaceSignY;
          this._area = new Rect(0, 0, 1, 1);
          this._sphere = geometry.Sphere.create(0, 0, 0, 1);
          this._rangedDirLightBoundingBox = new AABB(0.0, 0.0, 0.0, 0.5, 0.5, 0.5);
          this._viewport = new Viewport();
          this._tmpBoundingBox = new AABB();
          this._sceneInfo = new SceneInfo(pipelineSceneData);
        }

        // interface
        setup(cameras, ppl) {
          for (let i = 0; i < cameras.length; i++) {
            const camera = cameras[i];
            if (camera.scene === null || camera.window === null) {
              continue;
            }
            if (camera.cameraUsage !== CameraUsage.GAME) {
              buildForwardPass(camera, ppl, false);
              continue;
            }
            ppl.update(camera);
            const info = this.prepareGameCamera(ppl, camera);
            this.prepareSceneInfo(camera.scene, camera.frustum, this._sceneInfo);
            this.buildForward(ppl, camera, info.id, info.width, info.height);
          }
        }
        // implementation
        prepareSceneInfo(scene, frustum, sceneInfo) {
          // clear scene info
          sceneInfo.reset();
          // spot lights
          for (let i = 0; i < scene.spotLights.length; i++) {
            const light = scene.spotLights[i];
            if (light.baked) {
              continue;
            }
            geometry.Sphere.set(this._sphere, light.position.x, light.position.y, light.position.z, light.range);
            if (geometry.intersect.sphereFrustum(this._sphere, frustum)) {
              sceneInfo.punctualLights.push(light);
              sceneInfo.spotLights.push(light);
            }
          }
          // sphere lights
          for (let i = 0; i < scene.sphereLights.length; i++) {
            const light = scene.sphereLights[i];
            if (light.baked) {
              continue;
            }
            geometry.Sphere.set(this._sphere, light.position.x, light.position.y, light.position.z, light.range);
            if (geometry.intersect.sphereFrustum(this._sphere, frustum)) {
              sceneInfo.punctualLights.push(light);
            }
          }
          // point lights
          for (let i = 0; i < scene.pointLights.length; i++) {
            const light = scene.pointLights[i];
            if (light.baked) {
              continue;
            }
            geometry.Sphere.set(this._sphere, light.position.x, light.position.y, light.position.z, light.range);
            if (geometry.intersect.sphereFrustum(this._sphere, frustum)) {
              sceneInfo.punctualLights.push(light);
            }
          }
          // ranged dir lights
          for (let i = 0; i < scene.rangedDirLights.length; i++) {
            const light = scene.rangedDirLights[i];
            AABB.transform(this._tmpBoundingBox, this._rangedDirLightBoundingBox, light.node.getWorldMatrix());
            if (geometry.intersect.aabbFrustum(this._tmpBoundingBox, frustum)) {
              sceneInfo.punctualLights.push(light);
            }
          }
        }
        prepareGameCamera(ppl, camera) {
          let info = this._windows.get(camera.window);
          if (info !== undefined) {
            let width = camera.window.width;
            let height = camera.window.height;
            if (width === 0) {
              width = 1;
            }
            if (height === 0) {
              height = 1;
            }
            if (info.width === width && info.height === height) {
              return info;
            }
            info.width = width;
            info.height = height;
            this.updateGameCamera(ppl, camera, info.id, info.width, info.height);
            return info;
          }
          const id = this._windows.size;
          info = new WindowInfo(id, camera.window.width ? camera.window.width : 1, camera.window.height ? camera.window.height : 1);
          this.initGameCamera(ppl, camera, info.id, info.width, info.height);
          this._windows.set(camera.window, info);
          return info;
        }
        initGameCamera(ppl, camera, id, width, height) {
          const device = ppl.device;
          // Main Target
          ppl.addRenderWindow(`Color${id}`, Format.BGRA8, width, height, camera.window);
          ppl.addDepthStencil(`DepthStencil${id}`, Format.DEPTH_STENCIL, width, height);
          // CSM
          const shadowFormat = supportsR32FloatTexture(device) ? Format.R32F : Format.RGBA8;
          const shadowSize = this._sceneInfo.shadows.size;
          ppl.addRenderTarget(`ShadowMap${id}`, shadowFormat, shadowSize.x, shadowSize.y);
          ppl.addRenderTarget(`SpotShadowMap${id}0`, shadowFormat, shadowSize.x, shadowSize.y);
          ppl.addRenderTarget(`SpotShadowMap${id}1`, shadowFormat, shadowSize.x, shadowSize.y);
          ppl.addRenderTarget(`SpotShadowMap${id}2`, shadowFormat, shadowSize.x, shadowSize.y);
          ppl.addRenderTarget(`SpotShadowMap${id}3`, shadowFormat, shadowSize.x, shadowSize.y);
          ppl.addDepthStencil(`ShadowDepth${id}`, Format.DEPTH_STENCIL, shadowSize.x, shadowSize.y);
          ppl.addDepthStencil(`SpotLightShadowDepth${id}0`, Format.DEPTH_STENCIL, shadowSize.x, shadowSize.y);
          ppl.addDepthStencil(`SpotLightShadowDepth${id}1`, Format.DEPTH_STENCIL, shadowSize.x, shadowSize.y);
          ppl.addDepthStencil(`SpotLightShadowDepth${id}2`, Format.DEPTH_STENCIL, shadowSize.x, shadowSize.y);
          ppl.addDepthStencil(`SpotLightShadowDepth${id}3`, Format.DEPTH_STENCIL, shadowSize.x, shadowSize.y);
        }
        updateGameCamera(ppl, camera, id, width, height) {
          // Main Target
          ppl.updateRenderWindow(`Color${id}`, camera.window);
          ppl.updateDepthStencil(`DepthStencil${id}`, width, height);
          // CSM
          const shadowSize = this._sceneInfo.shadows.size;
          ppl.updateRenderTarget(`ShadowMap${id}`, shadowSize.x, shadowSize.y);
          ppl.updateRenderTarget(`SpotShadowMap${id}0`, shadowSize.x, shadowSize.y);
          ppl.updateRenderTarget(`SpotShadowMap${id}1`, shadowSize.x, shadowSize.y);
          ppl.updateRenderTarget(`SpotShadowMap${id}2`, shadowSize.x, shadowSize.y);
          ppl.updateRenderTarget(`SpotShadowMap${id}3`, shadowSize.x, shadowSize.y);
          ppl.updateDepthStencil(`ShadowDepth${id}`, shadowSize.x, shadowSize.y);
          ppl.updateDepthStencil(`SpotLightShadowDepth${id}0`, shadowSize.x, shadowSize.y);
          ppl.updateDepthStencil(`SpotLightShadowDepth${id}1`, shadowSize.x, shadowSize.y);
          ppl.updateDepthStencil(`SpotLightShadowDepth${id}2`, shadowSize.x, shadowSize.y);
          ppl.updateDepthStencil(`SpotLightShadowDepth${id}3`, shadowSize.x, shadowSize.y);
        }
        buildForwardTiled(ppl, camera, id, width, height, sceneInfo) {
          assert(this._tiled);
          assert(camera.scene !== null);
          // init
          const scene = camera.scene;
          const mainLight = scene.mainLight;

          // CSM
          // MainLight ShadowMapPass
          // if (mainLight && mainLight.shadowEnabled) {
          //     if (mainLight.shadowFixedArea) {
          //     } else {
          //     }
          // }

          // Forward Lighting
          {
            const pass = ppl.addRenderPass(width, height, 'default');
            pass.addRenderTarget(`Color${id}`, LoadOp.CLEAR);
            pass.addDepthStencil(`DepthStencil${id}`, LoadOp.CLEAR);
            pass.addQueue(QueueHint.NONE).addSceneOfCamera(camera, new LightInfo(), SceneFlags.OPAQUE | SceneFlags.MASK);
            pass.addQueue(QueueHint.RENDER_TRANSPARENT).addSceneOfCamera(camera, new LightInfo(), SceneFlags.BLEND);
          }
        }
        buildForward(ppl, camera, id, width, height) {
          assert(camera.scene !== null);
          if (camera.scene === null) {
            return;
          }
          const scene = camera.scene;
          const mainLight = scene.mainLight;

          // CSM
          if (mainLight && mainLight.shadowEnabled) {
            this.buildCascadedShadowMapPass(ppl, id, mainLight, camera);
          }

          // Forward Lighting
          {
            const pass = ppl.addRenderPass(width, height, 'default');
            pass.addRenderTarget(`Color${id}`, LoadOp.CLEAR);
            pass.addDepthStencil(`DepthStencil${id}`, LoadOp.CLEAR);
            pass.addTexture(`ShadowMap${id}`, 'cc_shadowMap');
            pass.addQueue(QueueHint.NONE).addSceneOfCamera(camera, new LightInfo(), SceneFlags.OPAQUE | SceneFlags.MASK);
            pass.addQueue(QueueHint.RENDER_TRANSPARENT).addSceneOfCamera(camera, new LightInfo(), SceneFlags.BLEND);
          }
        }
        buildCascadedShadowMapPass(ppl, id, light, camera) {
          const width = this._sceneInfo.shadows.size.x;
          const height = this._sceneInfo.shadows.size.y;
          const pass = ppl.addRenderPass(width, height, 'default');
          pass.addRenderTarget(`ShadowMap${id}`, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, 1));
          pass.addDepthStencil(`ShadowDepth${id}`, LoadOp.CLEAR, StoreOp.DISCARD);
          if (light.shadowFixedArea) {
            const queue = pass.addQueue(QueueHint.NONE, 'shadow-caster');
            // queue.addSceneCulledByDirectionalLight(camera,
            //     SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER,
            //     light, 0);
            queue.addSceneOfCamera(camera, new LightInfo(light, 0), SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER);
          } else {
            const csmLevel = ppl.pipelineSceneData.csmSupported ? light.csmLevel : 1;
            for (let level = 0; level !== csmLevel; ++level) {
              this.getMainLightViewport(light, width, height, level, this._viewport);
              const queue = pass.addQueue(QueueHint.NONE, 'shadow-caster');
              queue.setViewport(this._viewport);
              // queue.addSceneCulledByDirectionalLight(camera,
              //     SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER,
              //     light, level);
              queue.addSceneOfCamera(camera, new LightInfo(light, level), SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER);
            }
          }
        }
        getViewport(area, w, h, vp) {
          vp.left = Math.trunc(area.x * w);
          vp.top = Math.trunc(area.y * h);
          vp.width = Math.trunc(area.width * w);
          vp.height = Math.trunc(area.height * h);
          vp.left = Math.max(0, vp.left);
          vp.top = Math.max(0, vp.top);
          vp.width = Math.max(1, vp.width);
          vp.height = Math.max(1, vp.height);
        }
        getMainLightViewport(light, w, h, level, vp) {
          if (light.shadowFixedArea || light.csmLevel === CSMLevel.LEVEL_1) {
            vp.left = 0;
            vp.top = 0;
            vp.width = Math.trunc(w);
            vp.height = Math.trunc(h);
          } else {
            vp.left = Math.trunc(level % 2 * 0.5 * w);
            if (this._flipY) {
              vp.top = Math.trunc((1 - Math.floor(level / 2)) * 0.5 * h);
            } else {
              vp.top = Math.trunc(Math.floor(level / 2) * 0.5 * h);
            }
            vp.width = Math.trunc(0.5 * w);
            vp.height = Math.trunc(0.5 * h);
          }
          vp.left = Math.max(0, vp.left);
          vp.top = Math.max(0, vp.top);
          vp.width = Math.max(1, vp.width);
          vp.height = Math.max(1, vp.height);
        }
      });
    }
  };
});