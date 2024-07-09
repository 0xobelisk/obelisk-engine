System.register("q-bundled:///fs/cocos/rendering/post-process/utils/pass-context.js", ["../../../../../virtual/internal%253Aconstants.js", "../../custom/types.js", "../../../gfx/index.js", "../../../render-scene/scene/index.js", "../../custom/define.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, LightInfo, QueueHint, ResourceResidency, SceneFlags, ClearFlagBit, Color, Format, LoadOp, Rect, StoreOp, Viewport, SKYBOX_FLAG, getRenderArea, Vec4, geometry, sphere, boundingBox, rangedDirLightBoundingBox, PassContext, passContext;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_customTypesJs) {
      LightInfo = _customTypesJs.LightInfo;
      QueueHint = _customTypesJs.QueueHint;
      ResourceResidency = _customTypesJs.ResourceResidency;
      SceneFlags = _customTypesJs.SceneFlags;
    }, function (_gfxIndexJs) {
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
      Color = _gfxIndexJs.Color;
      Format = _gfxIndexJs.Format;
      LoadOp = _gfxIndexJs.LoadOp;
      Rect = _gfxIndexJs.Rect;
      StoreOp = _gfxIndexJs.StoreOp;
      Viewport = _gfxIndexJs.Viewport;
    }, function (_renderSceneSceneIndexJs) {
      SKYBOX_FLAG = _renderSceneSceneIndexJs.SKYBOX_FLAG;
    }, function (_customDefineJs) {
      getRenderArea = _customDefineJs.getRenderArea;
    }, function (_coreIndexJs) {
      Vec4 = _coreIndexJs.Vec4;
      geometry = _coreIndexJs.geometry;
    }],
    execute: function () {
      sphere = geometry.Sphere.create(0, 0, 0, 1);
      boundingBox = new geometry.AABB();
      rangedDirLightBoundingBox = new geometry.AABB(0.0, 0.0, 0.0, 0.5, 0.5, 0.5);
      _export("PassContext", PassContext = /*#__PURE__*/function () {
        function PassContext() {
          this.clearFlag = ClearFlagBit.COLOR;
          this.clearColor = new Color();
          this.clearDepthColor = new Color();
          this.ppl = void 0;
          this.camera = void 0;
          this.material = void 0;
          this.pass = void 0;
          this.rasterWidth = 0;
          this.rasterHeight = 0;
          this.layoutName = '';
          this.shadingScale = 1;
          this.viewport = new Rect();
          this.passViewport = new Rect();
          this.passPathName = '';
          this.passVersion = 0;
          this.isFinalCamera = false;
          this.isFinalPass = false;
          this.depthSlotName = '';
          this.shadowPass = undefined;
          this.forwardPass = undefined;
          this.postProcess = void 0;
          this.maxSpotLights = 0xFFFFFFFF;
          this.maxSphereLights = 0xFFFFFFFF;
          this.maxPointLights = 0xFFFFFFFF;
          this.maxRangedDirLights = 0xFFFFFFFF;
        }
        var _proto = PassContext.prototype;
        _proto.setClearFlag = function setClearFlag(clearFlag) {
          this.clearFlag = clearFlag;
          return this;
        };
        _proto.setClearColor = function setClearColor(x, y, z, w) {
          Vec4.set(this.clearColor, x, y, z, w);
          return this;
        };
        _proto.setClearDepthColor = function setClearDepthColor(x, y, z, w) {
          Vec4.set(this.clearDepthColor, x, y, z, w);
          return this;
        };
        _proto.version = function version() {
          if (!EDITOR) {
            this.passPathName += "_" + this.pass.name + "_" + this.layoutName;
            this.pass.setVersion(this.passPathName, this.passVersion);
          }
          return this;
        };
        _proto.clearBlack = function clearBlack() {
          this.clearFlag = ClearFlagBit.COLOR;
          Vec4.set(passContext.clearColor, 0, 0, 0, 1);
        };
        _proto.addRenderPass = function addRenderPass(layoutName, passName) {
          var passViewport = this.passViewport;
          var pass = this.ppl.addRenderPass(passViewport.width, passViewport.height, layoutName);
          pass.name = passName;
          this.pass = pass;
          this.layoutName = layoutName;
          this.rasterWidth = passViewport.width;
          this.rasterHeight = passViewport.height;
          pass.setViewport(new Viewport(passViewport.x, passViewport.y, passViewport.width, passViewport.height));
          return this;
        };
        _proto.addSceneLights = function addSceneLights(queue, camera, flags) {
          if (flags === void 0) {
            flags = SceneFlags.BLEND;
          }
          if (this.maxPointLights === 0 && this.maxSphereLights === 0 && this.maxSpotLights === 0 && this.maxRangedDirLights === 0) {
            return;
          }
          var scene = camera.scene;
          var spotLights = scene.spotLights;
          var sphereLights = scene.sphereLights;
          var pointLights = scene.pointLights;
          var rangedDirLights = scene.rangedDirLights;
          var numSpotLights = Math.min(spotLights.length, this.maxSpotLights);
          var numSphereLights = Math.min(sphereLights.length, this.maxSphereLights);
          var numPointLights = Math.min(pointLights.length, this.maxPointLights);
          var numRangedDirLights = Math.min(rangedDirLights.length, this.maxRangedDirLights);
          for (var i = 0; i < numSpotLights; i++) {
            var light = spotLights[i];
            if (light.baked) {
              continue;
            }
            geometry.Sphere.set(sphere, light.position.x, light.position.y, light.position.z, light.range);
            if (geometry.intersect.sphereFrustum(sphere, camera.frustum)) {
              queue.addSceneOfCamera(camera, new LightInfo(light), flags);
            }
          }
          // sphere lights
          for (var _i = 0; _i < numSphereLights; _i++) {
            var _light = sphereLights[_i];
            if (_light.baked) {
              continue;
            }
            geometry.Sphere.set(sphere, _light.position.x, _light.position.y, _light.position.z, _light.range);
            if (geometry.intersect.sphereFrustum(sphere, camera.frustum)) {
              queue.addSceneOfCamera(camera, new LightInfo(_light), flags);
            }
          }
          // point lights
          for (var _i2 = 0; _i2 < numPointLights; _i2++) {
            var _light2 = pointLights[_i2];
            if (_light2.baked) {
              continue;
            }
            geometry.Sphere.set(sphere, _light2.position.x, _light2.position.y, _light2.position.z, _light2.range);
            if (geometry.intersect.sphereFrustum(sphere, camera.frustum)) {
              queue.addSceneOfCamera(camera, new LightInfo(_light2), flags);
            }
          }
          // ranged dir lights
          for (var _i3 = 0; _i3 < numRangedDirLights; _i3++) {
            var _light3 = rangedDirLights[_i3];
            geometry.AABB.transform(boundingBox, rangedDirLightBoundingBox, _light3.node.getWorldMatrix());
            if (geometry.intersect.aabbFrustum(boundingBox, camera.frustum)) {
              queue.addSceneOfCamera(camera, new LightInfo(_light3), flags);
            }
          }
        };
        _proto.updateViewPort = function updateViewPort() {
          var camera = this.camera;
          if (!camera) {
            return;
          }
          var shadingScale = 1;
          if (this.postProcess && (!EDITOR || this.postProcess.enableShadingScaleInEditor)) {
            shadingScale *= this.postProcess.shadingScale;
          }
          this.shadingScale = shadingScale;
          var area = getRenderArea(camera, camera.window.width * shadingScale, camera.window.height * shadingScale, null, 0, this.viewport);
          area.width = Math.floor(area.width);
          area.height = Math.floor(area.height);
        };
        _proto.updatePassViewPort = function updatePassViewPort(shadingScale, offsetScale) {
          if (shadingScale === void 0) {
            shadingScale = 1;
          }
          if (offsetScale === void 0) {
            offsetScale = 0;
          }
          this.passViewport.width = this.viewport.width * shadingScale;
          this.passViewport.height = this.viewport.height * shadingScale;
          this.passViewport.x = this.viewport.x * offsetScale;
          this.passViewport.y = this.viewport.y * offsetScale;
          return this;
        }

        // setViewport (x: number, y: number, w: number, h: number) {
        //     this.pass!.setViewport(new Viewport(x, y, w, h));
        //     return this;
        // }
        ;
        _proto.addRasterView = function addRasterView(name, format, offscreen, residency) {
          if (offscreen === void 0) {
            offscreen = true;
          }
          if (residency === void 0) {
            residency = ResourceResidency.MANAGED;
          }
          var ppl = this.ppl;
          var camera = this.camera;
          var pass = this.pass;
          if (!ppl || !camera || !pass) {
            return this;
          }
          if (!ppl.containsResource(name)) {
            if (format === Format.DEPTH_STENCIL) {
              ppl.addDepthStencil(name, format, this.rasterWidth, this.rasterHeight, ResourceResidency.MANAGED);
            } else if (offscreen) {
              ppl.addRenderTarget(name, format, this.rasterWidth, this.rasterHeight, residency || ResourceResidency.MANAGED);
            } else {
              ppl.addRenderWindow(name, format, this.rasterWidth, this.rasterHeight, camera.window);
            }
          }
          if (format !== Format.DEPTH_STENCIL) {
            if (!offscreen) {
              ppl.updateRenderWindow(name, camera.window);
            } else {
              ppl.updateRenderTarget(name, this.rasterWidth, this.rasterHeight);
            }
          } else {
            ppl.updateDepthStencil(name, this.rasterWidth, this.rasterHeight);
          }

          // let view: RasterView;
          if (format === Format.DEPTH_STENCIL) {
            var clearFlag = this.clearFlag & ClearFlagBit.DEPTH_STENCIL;
            var loadOp = LoadOp.CLEAR;
            if (clearFlag === ClearFlagBit.NONE) {
              loadOp = LoadOp.LOAD;
            }
            pass.addDepthStencil(name, loadOp, StoreOp.STORE, this.clearDepthColor.x, this.clearDepthColor.y, clearFlag);
          } else {
            var clearColor = new Color();
            clearColor.copy(this.clearColor);
            var _clearFlag = this.clearFlag & ClearFlagBit.COLOR;
            var _loadOp = LoadOp.CLEAR;
            if (_clearFlag === ClearFlagBit.NONE && !(this.clearFlag & SKYBOX_FLAG)) {
              _loadOp = LoadOp.LOAD;
            } else if (this.clearFlag & SKYBOX_FLAG) {
              clearColor.set(0, 0, 0, 1);
            }
            pass.addRenderTarget(name, _loadOp, StoreOp.STORE, clearColor);
          }
          return this;
        };
        _proto.setPassInput = function setPassInput(inputName, shaderName) {
          if (this.ppl.containsResource(inputName)) {
            this.pass.addTexture(inputName, shaderName);
          }
          return this;
        };
        _proto.blitScreen = function blitScreen(passIdx) {
          if (passIdx === void 0) {
            passIdx = 0;
          }
          this.pass.addQueue(QueueHint.RENDER_TRANSPARENT).addCameraQuad(this.camera, this.material, passIdx, SceneFlags.NONE);
          return this;
        };
        return PassContext;
      }());
      _export("passContext", passContext = new PassContext());
    }
  };
});