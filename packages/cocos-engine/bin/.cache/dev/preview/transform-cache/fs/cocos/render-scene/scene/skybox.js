System.register("q-bundled:///fs/cocos/render-scene/scene/skybox.js", ["../../asset/asset-manager/builtin-res-mgr.js", "../../asset/assets/material.js", "../../rendering/define.js", "../core/material-instance.js", "../../gfx/index.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var builtinResMgr, Material, UNIFORM_ENVIRONMENT_BINDING, UNIFORM_DIFFUSEMAP_BINDING, MaterialInstance, deviceManager, Enum, cclegacy, skybox_mesh, skybox_material, EnvironmentLightingType, Skybox;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
    setters: [function (_assetAssetManagerBuiltinResMgrJs) {
      builtinResMgr = _assetAssetManagerBuiltinResMgrJs.builtinResMgr;
    }, function (_assetAssetsMaterialJs) {
      Material = _assetAssetsMaterialJs.Material;
    }, function (_renderingDefineJs) {
      UNIFORM_ENVIRONMENT_BINDING = _renderingDefineJs.UNIFORM_ENVIRONMENT_BINDING;
      UNIFORM_DIFFUSEMAP_BINDING = _renderingDefineJs.UNIFORM_DIFFUSEMAP_BINDING;
    }, function (_coreMaterialInstanceJs) {
      MaterialInstance = _coreMaterialInstanceJs.MaterialInstance;
    }, function (_gfxIndexJs) {
      deviceManager = _gfxIndexJs.deviceManager;
    }, function (_coreIndexJs) {
      Enum = _coreIndexJs.Enum;
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      skybox_mesh = null;
      skybox_material = null;
      _export("EnvironmentLightingType", EnvironmentLightingType = Enum({
        /**
         * @zh
         * 半球漫反射
         * @en
         * hemisphere diffuse
         * @readonly
         */
        HEMISPHERE_DIFFUSE: 0,
        /**
         * @zh
         * 半球漫反射和环境反射
         * @en
         * hemisphere diffuse and Environment reflection
         * @readonly
         */
        AUTOGEN_HEMISPHERE_DIFFUSE_WITH_REFLECTION: 1,
        /**
         * @zh
         * 漫反射卷积图和环境反射
         * @en
         * diffuse convolution map and environment reflection
         * @readonly
         */
        DIFFUSEMAP_WITH_REFLECTION: 2
      }));
      /**
       * @en The skybox configuration of the render scene,
       * currently some rendering options like hdr and ibl lighting configuration is also here.
       * @zh 渲染场景的天空盒配置，目前一些渲染配置，比如 HDR 模式和环境光照配置也在 Skybox 中。
       */
      _export("Skybox", Skybox = /*#__PURE__*/function () {
        function Skybox() {
          this._envmapLDR = null;
          this._envmapHDR = null;
          this._diffuseMapLDR = null;
          this._diffuseMapHDR = null;
          this._globalDSManager = null;
          this._model = null;
          this._default = null;
          this._enabled = false;
          this._useIBL = false;
          this._useHDR = true;
          this._useDiffuseMap = false;
          this._editableMaterial = null;
          this._activated = false;
          this._reflectionHDR = null;
          this._reflectionLDR = null;
          this._rotationAngle = 0;
        }
        var _proto = Skybox.prototype;
        _proto.initialize = function initialize(skyboxInfo) {
          this._activated = false;
          this._enabled = skyboxInfo.enabled;
          this._useIBL = skyboxInfo.useIBL;
          this._useDiffuseMap = skyboxInfo.applyDiffuseMap;
          this._useHDR = skyboxInfo.useHDR;
        }

        /**
         * @en Set the environment maps for HDR and LDR mode
         * @zh 为 HDR 和 LDR 模式设置环境贴图
         * @param envmapHDR @en Environment map for HDR mode @zh HDR 模式下的环境贴图
         * @param envmapLDR @en Environment map for LDR mode @zh LDR 模式下的环境贴图
         */;
        _proto.setEnvMaps = function setEnvMaps(envmapHDR, envmapLDR) {
          this._envmapHDR = envmapHDR;
          this._envmapLDR = envmapLDR;
          this._updateGlobalBinding();
          this._updatePipeline();
        }

        /**
         * @en Set the diffuse maps
         * @zh 设置环境光漫反射贴图
         * @param diffuseMapHDR @en Diffuse map for HDR mode @zh HDR 模式下的漫反射贴图
         * @param diffuseMapLDR  @en Diffuse map for LDR mode @zh LDR 模式下的漫反射贴图
         */;
        _proto.setDiffuseMaps = function setDiffuseMaps(diffuseMapHDR, diffuseMapLDR) {
          this._diffuseMapHDR = diffuseMapHDR;
          this._diffuseMapLDR = diffuseMapLDR;
          this._updateGlobalBinding();
          this._updatePipeline();
        }

        /**
         * @en Set custom skybox material
         * @zh 设置自定义的天空盒材质
         * @param skyboxMat  @en Skybox material @zh 天空盒材质
         */;
        _proto.setSkyboxMaterial = function setSkyboxMaterial(skyboxMat) {
          if (skyboxMat) {
            this._editableMaterial = new MaterialInstance({
              parent: skyboxMat
            });
            this._editableMaterial.recompileShaders({
              USE_RGBE_CUBEMAP: this.isRGBE
            });
          } else {
            this._editableMaterial = null;
          }
          this._updatePipeline();
        }

        /**
         * @en Set the environment reflection convolution map
         * @zh 设置环境反射卷积图
         * @param reflectionHDR  @en Reflection convolution map for HDR mode @zh HDR 模式下的反射卷积图
         * @param reflectionLDR  @en Reflection convolution map for LDR mode @zh LDR 模式下的反射卷积图
         */;
        _proto.setReflectionMaps = function setReflectionMaps(reflectionHDR, reflectionLDR) {
          this._reflectionHDR = reflectionHDR;
          this._reflectionLDR = reflectionLDR;
          this._updateGlobalBinding();
          this._updatePipeline();
        }

        /**
         * @en Set skybox rotation angle
         * @zh 设置天空盒旋转角度
         * @param angle  @en rotation angle @zh 旋转角度
         */;
        _proto.setRotationAngle = function setRotationAngle(angle) {
          this._rotationAngle = angle;
        };
        _proto.getRotationAngle = function getRotationAngle() {
          return this._rotationAngle;
        };
        _proto.updateMaterialRenderInfo = function updateMaterialRenderInfo() {
          this._updateGlobalBinding();
          this._updatePipeline();
        };
        _proto.activate = function activate() {
          var pipeline = cclegacy.director.root.pipeline;
          this._globalDSManager = pipeline.globalDSManager;
          this._default = builtinResMgr.get('default-cube-texture');
          if (!this._model) {
            this._model = cclegacy.director.root.createModel(cclegacy.renderer.scene.Model);
            //The skybox material has added properties of 'environmentMap' that need local ubo
            //this._model._initLocalDescriptors = () => {};
            //this._model._initWorldBoundDescriptors = () => {};
          }

          var isRGBE = this._default.isRGBE;
          var isUseConvolutionMap = this._default.isUsingOfflineMipmaps();
          if (this.envmap) {
            isRGBE = this.envmap.isRGBE;
            isUseConvolutionMap = this.envmap.isUsingOfflineMipmaps();
          }
          if (!skybox_material) {
            var mat = new Material();
            mat.initialize({
              effectName: 'pipeline/skybox',
              defines: {
                USE_RGBE_CUBEMAP: isRGBE
              }
            });
            skybox_material = new MaterialInstance({
              parent: mat
            });
          }
          if (this.enabled) {
            if (!skybox_mesh) {
              skybox_mesh = cclegacy.utils.createMesh(cclegacy.primitives.box({
                width: 2,
                height: 2,
                length: 2
              }));
            }
            if (this._editableMaterial) {
              this._model.initSubModel(0, skybox_mesh.renderingSubMeshes[0], this._editableMaterial);
            } else {
              this._model.initSubModel(0, skybox_mesh.renderingSubMeshes[0], skybox_material);
            }
          }
          if (!this.envmap) {
            this.envmap = this._default;
          }
          if (!this.diffuseMap) {
            this.diffuseMap = this._default;
          }
          this._updateGlobalBinding();
          this._updatePipeline();
          this._activated = true;
        };
        _proto._updatePipeline = function _updatePipeline() {
          var root = cclegacy.director.root;
          var pipeline = root.pipeline;
          var useIBLValue = this.useIBL ? this.isRGBE ? 2 : 1 : 0;
          var useDiffuseMapValue = this.useIBL && this.useDiffuseMap && this.diffuseMap && this.diffuseMap !== this._default ? this.isRGBE ? 2 : 1 : 0;
          var useHDRValue = this.useHDR;
          var useConvMapValue = this.useConvolutionMap;
          if (pipeline.macros.CC_USE_IBL !== useIBLValue || pipeline.macros.CC_USE_DIFFUSEMAP !== useDiffuseMapValue || pipeline.macros.CC_USE_HDR !== useHDRValue || pipeline.macros.CC_IBL_CONVOLUTED !== useConvMapValue) {
            pipeline.macros.CC_USE_IBL = useIBLValue;
            pipeline.macros.CC_USE_DIFFUSEMAP = useDiffuseMapValue;
            pipeline.macros.CC_USE_HDR = useHDRValue;
            pipeline.macros.CC_IBL_CONVOLUTED = useConvMapValue;
            if (this._activated) {
              root.onGlobalPipelineStateChanged();
            }
          }
          if (this.enabled) {
            var envmap = this.envmap ? this.envmap : this._default;
            var skyboxMat = this._editableMaterial ? this._editableMaterial : skybox_material;
            if (skyboxMat) {
              skyboxMat.setProperty('environmentMap', envmap);
              skyboxMat.recompileShaders({
                USE_RGBE_CUBEMAP: this.isRGBE
              });
            }
            if (this._model) {
              this._model.setSubModelMaterial(0, skyboxMat);
              this._updateSubModes();
            }
          }
        };
        _proto._updateGlobalBinding = function _updateGlobalBinding() {
          if (this._globalDSManager) {
            var device = deviceManager.gfxDevice;
            if (this.reflectionMap) {
              var texture = this.reflectionMap.getGFXTexture();
              var sampler = device.getSampler(this.reflectionMap.getSamplerInfo());
              this._globalDSManager.bindSampler(UNIFORM_ENVIRONMENT_BINDING, sampler);
              this._globalDSManager.bindTexture(UNIFORM_ENVIRONMENT_BINDING, texture);
            } else {
              var envmap = this.envmap ? this.envmap : this._default;
              if (envmap) {
                var _texture = envmap.getGFXTexture();
                var _sampler = device.getSampler(envmap.getSamplerInfo());
                this._globalDSManager.bindSampler(UNIFORM_ENVIRONMENT_BINDING, _sampler);
                this._globalDSManager.bindTexture(UNIFORM_ENVIRONMENT_BINDING, _texture);
              }
            }
            var diffuseMap = this.diffuseMap ? this.diffuseMap : this._default;
            if (diffuseMap) {
              var _texture2 = diffuseMap.getGFXTexture();
              var _sampler2 = device.getSampler(diffuseMap.getSamplerInfo());
              this._globalDSManager.bindSampler(UNIFORM_DIFFUSEMAP_BINDING, _sampler2);
              this._globalDSManager.bindTexture(UNIFORM_DIFFUSEMAP_BINDING, _texture2);
            }
            this._globalDSManager.update();
          }
        };
        _proto._updateSubModes = function _updateSubModes() {
          if (this._model) {
            var subModels = this._model.subModels;
            for (var i = 0; i < subModels.length; i++) {
              subModels[i].update();
            }
          }
        };
        _createClass(Skybox, [{
          key: "model",
          get:
          /**
           * @en The Model object of the skybox
           * @zh 天空盒的 Model 对象
           */
          function get() {
            return this._model;
          }

          /**
           * @en Whether activate skybox in the scene
           * @zh 是否启用天空盒？
           */
        }, {
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(val) {
            this._enabled = val;
            if (val) this.activate();else this._updatePipeline();
          }

          /**
           * @en Whether HDR mode is enabled
           * @zh 是否启用HDR？
           */
        }, {
          key: "useHDR",
          get: function get() {
            return this._useHDR;
          },
          set: function set(val) {
            this._useHDR = val;
            this.setEnvMaps(this._envmapHDR, this._envmapLDR);
          }

          /**
           * @en Whether use image based lighting for PBR materials
           * @zh 是否启用IBL？
           */
        }, {
          key: "useIBL",
          get: function get() {
            return this._useIBL;
          },
          set: function set(val) {
            this._useIBL = val;
            this._updatePipeline();
          }

          /**
           * @en Whether use diffuse convolution map lighting
           * @zh 是否为IBL启用漫反射卷积图？
           */
        }, {
          key: "useDiffuseMap",
          get: function get() {
            return this._useDiffuseMap;
          },
          set: function set(val) {
            this._useDiffuseMap = val;
            this._updatePipeline();
          }

          /**
           * @en Whether enable RGBE data support in skybox shader
           * @zh 是否需要开启 shader 内的 RGBE 数据支持？
           */
        }, {
          key: "isRGBE",
          get: function get() {
            if (this.envmap) {
              return this.envmap.isRGBE;
            } else {
              return false;
            }
          }

          /**
           * @en Whether to use offline baked convolutional maps
           * @zh 是否使用离线烘焙的卷积图？
           */
        }, {
          key: "useConvolutionMap",
          get: function get() {
            if (this.reflectionMap) {
              return this.reflectionMap.isUsingOfflineMipmaps();
            }
            if (this.envmap) {
              return this.envmap.isUsingOfflineMipmaps();
            }
            return false;
          }

          /**
           * @en The texture cube used for the skybox
           * @zh 使用的立方体贴图
           */
        }, {
          key: "envmap",
          get: function get() {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              return this._envmapHDR;
            } else {
              return this._envmapLDR;
            }
          },
          set: function set(val) {
            var root = cclegacy.director.root;
            var isHDR = root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              this.setEnvMaps(val, this._envmapLDR);
            } else {
              this.setEnvMaps(this._envmapHDR, val);
            }
          }

          /**
           * @en The texture cube used diffuse convolution map
           * @zh 使用的漫反射卷积图
           */
        }, {
          key: "diffuseMap",
          get: function get() {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              return this._diffuseMapHDR;
            } else {
              return this._diffuseMapLDR;
            }
          },
          set: function set(val) {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              this.setDiffuseMaps(val, this._diffuseMapLDR);
            } else {
              this.setDiffuseMaps(this._diffuseMapHDR, val);
            }
          }
        }, {
          key: "reflectionMap",
          get: function get() {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              return this._reflectionHDR;
            } else {
              return this._reflectionLDR;
            }
          }
        }, {
          key: "editableMaterial",
          get: function get() {
            return this._editableMaterial;
          }
        }]);
        return Skybox;
      }());
      cclegacy.Skybox = Skybox;
    }
  };
});