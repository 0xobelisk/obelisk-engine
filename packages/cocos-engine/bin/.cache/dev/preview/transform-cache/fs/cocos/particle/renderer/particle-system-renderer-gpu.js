System.register("q-bundled:///fs/cocos/particle/renderer/particle-system-renderer-gpu.js", ["../../../../virtual/internal%253Aconstants.js", "../../asset/asset-manager/index.js", "../../gfx/index.js", "../../core/index.js", "../../render-scene/core/material-instance.js", "../enum.js", "../particle.js", "../animator/gradient-range.js", "../../render-scene/core/pass.js", "../animator/curve-range.js", "./particle-system-renderer-base.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, builtinResMgr, AttributeName, Format, Attribute, API, deviceManager, FormatInfos, Mat4, Vec2, Vec4, Quat, Vec3, warn, MaterialInstance, AlignmentSpace, RenderMode, Space, Particle, packGradientRange, Pass, packCurveRangeXYZ, packCurveRangeZ, packCurveRangeXYZW, packCurveRangeN, packCurveRangeXY, ParticleSystemRendererBase, _tempNodeScale, _tempWorldTrans, _tempVec4, _world_rot, _node_rot, _node_euler, _sample_num, _sample_interval, CC_USE_WORLD_SPACE, CC_RENDER_MODE, RENDER_MODE_BILLBOARD, RENDER_MODE_STRETCHED_BILLBOARD, RENDER_MODE_HORIZONTAL_BILLBOARD, RENDER_MODE_VERTICAL_BILLBOARD, RENDER_MODE_MESH, COLOR_OVER_TIME_MODULE_ENABLE, ROTATION_OVER_TIME_MODULE_ENABLE, SIZE_OVER_TIME_MODULE_ENABLE, VELOCITY_OVER_TIME_MODULE_ENABLE, FORCE_OVER_TIME_MODULE_ENABLE, TEXTURE_ANIMATION_MODULE_ENABLE, USE_VK_SHADER, INSTANCE_PARTICLE, _vert_attr_name, _gpu_vert_attr, _gpu_vert_attr_mesh, _gpu_vert_attr_ins, _gpu_vert_attr_mesh_ins, _matInsInfo, ParticleSystemRendererGPU;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_assetAssetManagerIndexJs) {
      builtinResMgr = _assetAssetManagerIndexJs.builtinResMgr;
    }, function (_gfxIndexJs) {
      AttributeName = _gfxIndexJs.AttributeName;
      Format = _gfxIndexJs.Format;
      Attribute = _gfxIndexJs.Attribute;
      API = _gfxIndexJs.API;
      deviceManager = _gfxIndexJs.deviceManager;
      FormatInfos = _gfxIndexJs.FormatInfos;
    }, function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      Vec2 = _coreIndexJs.Vec2;
      Vec4 = _coreIndexJs.Vec4;
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
      warn = _coreIndexJs.warn;
    }, function (_renderSceneCoreMaterialInstanceJs) {
      MaterialInstance = _renderSceneCoreMaterialInstanceJs.MaterialInstance;
    }, function (_enumJs) {
      AlignmentSpace = _enumJs.AlignmentSpace;
      RenderMode = _enumJs.RenderMode;
      Space = _enumJs.Space;
    }, function (_particleJs) {
      Particle = _particleJs.Particle;
    }, function (_animatorGradientRangeJs) {
      packGradientRange = _animatorGradientRangeJs.packGradientRange;
    }, function (_renderSceneCorePassJs) {
      Pass = _renderSceneCorePassJs.Pass;
    }, function (_animatorCurveRangeJs) {
      packCurveRangeXYZ = _animatorCurveRangeJs.packCurveRangeXYZ;
      packCurveRangeZ = _animatorCurveRangeJs.packCurveRangeZ;
      packCurveRangeXYZW = _animatorCurveRangeJs.packCurveRangeXYZW;
      packCurveRangeN = _animatorCurveRangeJs.packCurveRangeN;
      packCurveRangeXY = _animatorCurveRangeJs.packCurveRangeXY;
    }, function (_particleSystemRendererBaseJs) {
      ParticleSystemRendererBase = _particleSystemRendererBaseJs.ParticleSystemRendererBase;
    }],
    execute: function () {
      _tempNodeScale = new Vec4();
      _tempWorldTrans = new Mat4();
      _tempVec4 = new Vec4();
      _world_rot = new Quat();
      _node_rot = new Quat();
      _node_euler = new Vec3();
      _sample_num = 32;
      _sample_interval = 1.0 / _sample_num;
      CC_USE_WORLD_SPACE = 'CC_USE_WORLD_SPACE';
      CC_RENDER_MODE = 'CC_RENDER_MODE';
      RENDER_MODE_BILLBOARD = 0;
      RENDER_MODE_STRETCHED_BILLBOARD = 1;
      RENDER_MODE_HORIZONTAL_BILLBOARD = 2;
      RENDER_MODE_VERTICAL_BILLBOARD = 3;
      RENDER_MODE_MESH = 4;
      COLOR_OVER_TIME_MODULE_ENABLE = 'COLOR_OVER_TIME_MODULE_ENABLE';
      ROTATION_OVER_TIME_MODULE_ENABLE = 'ROTATION_OVER_TIME_MODULE_ENABLE';
      SIZE_OVER_TIME_MODULE_ENABLE = 'SIZE_OVER_TIME_MODULE_ENABLE';
      VELOCITY_OVER_TIME_MODULE_ENABLE = 'VELOCITY_OVER_TIME_MODULE_ENABLE';
      FORCE_OVER_TIME_MODULE_ENABLE = 'FORCE_OVER_TIME_MODULE_ENABLE';
      TEXTURE_ANIMATION_MODULE_ENABLE = 'TEXTURE_ANIMATION_MODULE_ENABLE';
      USE_VK_SHADER = 'USE_VK_SHADER';
      INSTANCE_PARTICLE = 'CC_INSTANCE_PARTICLE';
      _vert_attr_name = {
        POSITION_STARTTIME: 'a_position_starttime',
        VERT_SIZE_UV: 'a_size_uv',
        VERT_ROTATION_UV: 'a_rotation_uv',
        COLOR: 'a_color',
        DIR_LIFE: 'a_dir_life',
        RANDOM_SEED: 'a_rndSeed',
        VERT_SIZE_FID: 'a_size_fid',
        VERT_ROTATION: 'a_rotation',
        VERT_UV: 'a_uv'
      };
      _gpu_vert_attr = [new Attribute(_vert_attr_name.POSITION_STARTTIME, Format.RGBA32F), new Attribute(_vert_attr_name.VERT_SIZE_UV, Format.RGBA32F), new Attribute(_vert_attr_name.VERT_ROTATION_UV, Format.RGBA32F), new Attribute(_vert_attr_name.COLOR, Format.RGBA32F), new Attribute(_vert_attr_name.DIR_LIFE, Format.RGBA32F), new Attribute(_vert_attr_name.RANDOM_SEED, Format.R32F)];
      _gpu_vert_attr_mesh = [new Attribute(_vert_attr_name.POSITION_STARTTIME, Format.RGBA32F), new Attribute(_vert_attr_name.VERT_SIZE_UV, Format.RGBA32F), new Attribute(_vert_attr_name.VERT_ROTATION_UV, Format.RGBA32F), new Attribute(_vert_attr_name.COLOR, Format.RGBA32F), new Attribute(_vert_attr_name.DIR_LIFE, Format.RGBA32F), new Attribute(_vert_attr_name.RANDOM_SEED, Format.R32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F),
      // uv,frame idx
      new Attribute(AttributeName.ATTR_TEX_COORD3, Format.RGB32F),
      // mesh position
      new Attribute(AttributeName.ATTR_NORMAL, Format.RGB32F),
      // mesh normal
      new Attribute(AttributeName.ATTR_COLOR1, Format.RGBA8, true) // mesh color
      ];
      _gpu_vert_attr_ins = [new Attribute(_vert_attr_name.POSITION_STARTTIME, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.VERT_SIZE_FID, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.VERT_ROTATION, Format.RGB32F, false, 0, true), new Attribute(_vert_attr_name.COLOR, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.DIR_LIFE, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.RANDOM_SEED, Format.R32F, false, 0, true), new Attribute(_vert_attr_name.VERT_UV, Format.RGB32F, false, 1)];
      _gpu_vert_attr_mesh_ins = [new Attribute(_vert_attr_name.POSITION_STARTTIME, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.VERT_SIZE_FID, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.VERT_ROTATION, Format.RGB32F, false, 0, true), new Attribute(_vert_attr_name.COLOR, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.DIR_LIFE, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.RANDOM_SEED, Format.R32F, false, 0, true), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F, false, 1),
      // mesh uv
      new Attribute(AttributeName.ATTR_TEX_COORD3, Format.RGB32F, false, 1),
      // mesh position
      new Attribute(AttributeName.ATTR_NORMAL, Format.RGB32F, false, 1),
      // mesh normal
      new Attribute(AttributeName.ATTR_COLOR1, Format.RGBA8, true, 1) // mesh color
      ];
      _matInsInfo = {
        parent: null,
        owner: null,
        subModelIdx: 0
      };
      _export("default", ParticleSystemRendererGPU = /*#__PURE__*/function (_ParticleSystemRender) {
        _inheritsLoose(ParticleSystemRendererGPU, _ParticleSystemRender);
        function ParticleSystemRendererGPU(info) {
          var _this;
          _this = _ParticleSystemRender.call(this, info) || this;
          _this._defines = void 0;
          _this._frameTile_velLenScale = void 0;
          _this._unifrom_velLenScale = void 0;
          _this._tmp_velLenScale = void 0;
          _this._node_scale = void 0;
          _this._vertAttrs = [];
          _this._defaultMat = null;
          _this._particleNum = 0;
          _this._tempParticle = null;
          _this._colorTexture = null;
          _this._forceTexture = null;
          _this._velocityTexture = null;
          _this._rotationTexture = null;
          _this._sizeTexture = null;
          _this._animTexture = null;
          _this._colorData = null;
          _this._forceData = null;
          _this._velocityData = null;
          _this._rotationData = null;
          _this._sizeData = null;
          _this._animData = null;
          _this._uTimeHandle = 0;
          _this._uRotHandle = 0;
          _this._uNodeRotHandle = 0;
          _this._alignSpace = AlignmentSpace.View;
          _this._inited = false;
          _this._frameTile_velLenScale = new Vec4(1, 1, 0, 0);
          _this._unifrom_velLenScale = _this._frameTile_velLenScale.clone();
          _this._tmp_velLenScale = _this._frameTile_velLenScale.clone();
          _this._node_scale = new Vec3();
          _this._defines = {
            CC_USE_WORLD_SPACE: true,
            CC_USE_BILLBOARD: true,
            CC_USE_STRETCHED_BILLBOARD: false,
            CC_USE_HORIZONTAL_BILLBOARD: false,
            CC_USE_VERTICAL_BILLBOARD: false,
            COLOR_OVER_TIME_MODULE_ENABLE: false
          };
          _this._tempParticle = new Particle(null);
          _this._particleNum = 0;
          return _this;
        }
        var _proto = ParticleSystemRendererGPU.prototype;
        _proto.onInit = function onInit(ps) {
          _ParticleSystemRender.prototype.onInit.call(this, ps);
          this._setVertexAttrib();
          this._initModel();
          this.updateMaterialParams();
          this.setVertexAttributes();
          this._inited = true;
        };
        _proto.updateRenderMode = function updateRenderMode() {
          this._setVertexAttrib();
          this.updateMaterialParams();
          this.setVertexAttributes();
        };
        _proto.setVertexAttributes = function setVertexAttributes() {
          _ParticleSystemRender.prototype.setVertexAttributes.call(this);
          this._model.constructAttributeIndex();
        };
        _proto.clear = function clear() {
          _ParticleSystemRender.prototype.clear.call(this);
          this._particleNum = 0;
          this.updateRenderData();
        };
        _proto.onDestroy = function onDestroy() {
          _ParticleSystemRender.prototype.onDestroy.call(this);
          if (this._forceTexture) this._forceTexture.destroy();
          if (this._velocityTexture) this._velocityTexture.destroy();
          if (this._colorTexture) this._colorTexture.destroy();
          if (this._sizeTexture) this._sizeTexture.destroy();
          if (this._rotationTexture) this._rotationTexture.destroy();
          if (this._animTexture) this._animTexture.destroy();
          this._forceData = null;
          this._velocityData = null;
          this._colorData = null;
          this._sizeData = null;
          this._rotationData = null;
          this._animData = null;
        };
        _proto.enableModule = function enableModule(name, val, pm) {
          var _this$_particleSystem;
          var mat = ((_this$_particleSystem = this._particleSystem) === null || _this$_particleSystem === void 0 ? void 0 : _this$_particleSystem.getMaterialInstance(0)) || this._defaultMat;
          if (!mat) {
            return;
          }
          this.initShaderUniform(mat);
          mat.recompileShaders(this._defines);
          if (this._model) {
            this._model.setSubModelMaterial(0, mat);
          }
        };
        _proto.getFreeParticle = function getFreeParticle() {
          var _this$_particleSystem2;
          if (this._particleSystem && this._particleNum >= ((_this$_particleSystem2 = this._particleSystem) === null || _this$_particleSystem2 === void 0 ? void 0 : _this$_particleSystem2.capacity)) {
            return null;
          }
          return this._tempParticle;
        };
        _proto.setNewParticle = function setNewParticle(p) {
          if (!this._particleSystem) {
            return;
          }
          this._model.addGPUParticleVertexData(p, this._particleNum, this._particleSystem.time);
          this._particleNum++;
        };
        _proto.getDefaultMaterial = function getDefaultMaterial() {
          return this._defaultMat;
        };
        _proto.updateRotation = function updateRotation(pass) {
          if (pass) {
            this.doUpdateRotation(pass);
          }
        };
        _proto.doUpdateRotation = function doUpdateRotation(pass) {
          var mode = this._renderInfo.renderMode;
          if (mode !== RenderMode.Mesh && this._alignSpace === AlignmentSpace.View) {
            return;
          }
          if (this._alignSpace === AlignmentSpace.Local) {
            var _this$_particleSystem3;
            (_this$_particleSystem3 = this._particleSystem) === null || _this$_particleSystem3 === void 0 ? void 0 : _this$_particleSystem3.node.getRotation(_node_rot);
          } else if (this._alignSpace === AlignmentSpace.World) {
            var _this$_particleSystem4;
            (_this$_particleSystem4 = this._particleSystem) === null || _this$_particleSystem4 === void 0 ? void 0 : _this$_particleSystem4.node.getWorldRotation(_node_rot);
          } else if (this._alignSpace === AlignmentSpace.View) {
            var _this$_particleSystem5, _this$_particleSystem6;
            // Quat.fromEuler(_node_rot, 0.0, 0.0, 0.0);
            _node_rot.set(0.0, 0.0, 0.0, 1.0);
            var cameraLst = (_this$_particleSystem5 = this._particleSystem) === null || _this$_particleSystem5 === void 0 ? void 0 : (_this$_particleSystem6 = _this$_particleSystem5.node.scene.renderScene) === null || _this$_particleSystem6 === void 0 ? void 0 : _this$_particleSystem6.cameras;
            if (cameraLst !== undefined && this._particleSystem) {
              for (var i = 0; i < (cameraLst === null || cameraLst === void 0 ? void 0 : cameraLst.length); ++i) {
                var camera = cameraLst[i];
                // eslint-disable-next-line max-len
                var checkCamera = !EDITOR_NOT_IN_PREVIEW ? (camera.visibility & this._particleSystem.node.layer) === this._particleSystem.node.layer : camera.name === 'Editor Camera';
                if (checkCamera) {
                  Quat.fromViewUp(_node_rot, camera.forward);
                  break;
                }
              }
            }
          } else {
            _node_rot.set(0.0, 0.0, 0.0, 1.0);
          }
          pass.setUniform(this._uNodeRotHandle, _node_rot);
        };
        _proto.updateScale = function updateScale(pass) {
          if (pass) {
            this.doUpdateScale(pass);
          }
        };
        _proto.doUpdateScale = function doUpdateScale(pass) {
          var _this$_particleSystem7;
          var nodeScale = this._node_scale;
          switch ((_this$_particleSystem7 = this._particleSystem) === null || _this$_particleSystem7 === void 0 ? void 0 : _this$_particleSystem7.scaleSpace) {
            case Space.Local:
              this._particleSystem.node.getScale(nodeScale);
              break;
            case Space.World:
              this._particleSystem.node.getWorldScale(nodeScale);
              break;
            default:
              break;
          }
          // NOTE: the `_node_scale` should be a Vec3, but we implement `scale` uniform property as a Vec4,
          // here we pass a temperate Vec4 object to prevent creating Vec4 object every time we set uniform.
          pass.setUniform(pass.getHandle('scale'), _tempNodeScale.set(nodeScale.x, nodeScale.y, nodeScale.z));
        };
        _proto.updateParticles = function updateParticles(dt) {
          if (!this._particleSystem) {
            return this._particleNum;
          }
          if (EDITOR_NOT_IN_PREVIEW) {
            var mat = this._particleSystem.getMaterialInstance(0) || this._defaultMat;
            this._particleSystem.node.getWorldMatrix(_tempWorldTrans);
            switch (this._particleSystem.scaleSpace) {
              case Space.Local:
                this._particleSystem.node.getScale(this._node_scale);
                break;
              case Space.World:
                this._particleSystem.node.getWorldScale(this._node_scale);
                break;
              default:
                break;
            }
            this.initShaderUniform(mat);
          }
          this._particleNum = this._model.updateGPUParticles(this._particleNum, this._particleSystem.time, dt);
          this.updateShaderUniform(dt);
          this._model.enabled = this._particleNum > 0;
          return this._particleNum;
        }

        // internal function
        ;
        _proto.updateRenderData = function updateRenderData() {};
        _proto.beforeRender = function beforeRender() {
          // update vertex buffer
          this._model.updateIA(this._particleNum);
        };
        _proto.updateAlignSpace = function updateAlignSpace(space) {
          this._alignSpace = space;
        };
        _proto.updateShaderUniform = function updateShaderUniform(dt) {
          if (!this._particleSystem) {
            return;
          }
          var mat = this._particleSystem.getMaterialInstance(0) || this._defaultMat;
          if (!mat) {
            return;
          }
          var pass = mat.passes[0];
          _tempVec4.x = this._particleSystem.time;
          _tempVec4.y = dt;
          pass.setUniform(this._uTimeHandle, _tempVec4);
          this._particleSystem.node.getWorldRotation(_world_rot);
          pass.setUniform(this._uRotHandle, _world_rot);
          this.doUpdateRotation(pass);
        };
        _proto.initShaderUniform = function initShaderUniform(mat) {
          var _this$_particleSystem8, _this$_particleSystem9, _this$_particleSystem10, _this$_particleSystem11, _this$_particleSystem12, _this$_particleSystem13;
          var pass = mat.passes[0];
          this._uTimeHandle = pass.getHandle('u_timeDelta');
          this._uRotHandle = pass.getHandle('u_worldRot');
          this._uNodeRotHandle = pass.getHandle('nodeRotation');
          this.doUpdateScale(pass);
          pass.setUniform(pass.getHandle('frameTile_velLenScale'), this._unifrom_velLenScale);
          _tempVec4.x = _sample_num;
          _tempVec4.y = _sample_interval;
          pass.setUniform(pass.getHandle('u_sampleInfo'), _tempVec4);
          var enable = false;
          // force
          var forceModule = (_this$_particleSystem8 = this._particleSystem) === null || _this$_particleSystem8 === void 0 ? void 0 : _this$_particleSystem8._forceOvertimeModule;
          enable = forceModule ? forceModule.enable : false;
          this._defines[FORCE_OVER_TIME_MODULE_ENABLE] = enable;
          if (enable) {
            var packed = packCurveRangeXYZ(this._forceTexture, this._forceData, _sample_num, forceModule.x, forceModule.y, forceModule.z);
            this._forceTexture = packed.texture;
            this._forceData = packed.texdata;
            var handle = pass.getHandle('force_over_time_tex0');
            var binding = Pass.getBindingFromHandle(handle);
            pass.bindSampler(binding, this._forceTexture.getGFXSampler());
            pass.bindTexture(binding, this._forceTexture.getGFXTexture());
            var spaceHandle = pass.getHandle('u_force_space');
            pass.setUniform(spaceHandle, forceModule.space);
            var modeHandle = pass.getHandle('u_force_mode');
            pass.setUniform(modeHandle, this._forceTexture.height);
          }

          // velocity
          var velocityModule = (_this$_particleSystem9 = this._particleSystem) === null || _this$_particleSystem9 === void 0 ? void 0 : _this$_particleSystem9._velocityOvertimeModule;
          enable = velocityModule ? velocityModule.enable : false;
          this._defines[VELOCITY_OVER_TIME_MODULE_ENABLE] = enable;
          if (enable) {
            var _packed = packCurveRangeXYZW(this._velocityTexture, this._velocityData, _sample_num, velocityModule.x, velocityModule.y, velocityModule.z, velocityModule.speedModifier);
            this._velocityTexture = _packed.texture;
            this._velocityData = _packed.texdata;
            var _handle = pass.getHandle('velocity_over_time_tex0');
            var _binding = Pass.getBindingFromHandle(_handle);
            pass.bindSampler(_binding, this._velocityTexture.getGFXSampler());
            pass.bindTexture(_binding, this._velocityTexture.getGFXTexture());
            var _spaceHandle = pass.getHandle('u_velocity_space');
            pass.setUniform(_spaceHandle, velocityModule.space);
            var _modeHandle = pass.getHandle('u_velocity_mode');
            pass.setUniform(_modeHandle, this._velocityTexture.height);
          }

          // color module
          var colorModule = (_this$_particleSystem10 = this._particleSystem) === null || _this$_particleSystem10 === void 0 ? void 0 : _this$_particleSystem10._colorOverLifetimeModule;
          enable = colorModule ? colorModule.enable : false;
          this._defines[COLOR_OVER_TIME_MODULE_ENABLE] = enable;
          if (enable) {
            var _packed2 = packGradientRange(this._colorTexture, this._colorData, _sample_num, colorModule.color);
            this._colorTexture = _packed2.texture;
            this._colorData = _packed2.texdata;
            var _handle2 = pass.getHandle('color_over_time_tex0');
            var _binding2 = Pass.getBindingFromHandle(_handle2);
            pass.bindSampler(_binding2, this._colorTexture.getGFXSampler());
            pass.bindTexture(_binding2, this._colorTexture.getGFXTexture());
            var _modeHandle2 = pass.getHandle('u_color_mode');
            pass.setUniform(_modeHandle2, this._colorTexture.height);
          }

          // rotation module
          var roationModule = (_this$_particleSystem11 = this._particleSystem) === null || _this$_particleSystem11 === void 0 ? void 0 : _this$_particleSystem11._rotationOvertimeModule;
          enable = roationModule ? roationModule.enable : false;
          this._defines[ROTATION_OVER_TIME_MODULE_ENABLE] = enable;
          if (enable) {
            var _packed3;
            if (roationModule.separateAxes) {
              // eslint-disable-next-line max-len
              _packed3 = packCurveRangeXYZ(this._rotationTexture, this._rotationData, _sample_num, roationModule.x, roationModule.y, roationModule.z);
            } else {
              _packed3 = packCurveRangeZ(this._rotationTexture, this._rotationData, _sample_num, roationModule.z);
            }
            this._rotationTexture = _packed3.texture;
            this._rotationData = _packed3.texdata;
            if (this._rotationTexture) {
              var _handle3 = pass.getHandle('rotation_over_time_tex0');
              var _binding3 = Pass.getBindingFromHandle(_handle3);
              pass.bindSampler(_binding3, this._rotationTexture.getGFXSampler());
              pass.bindTexture(_binding3, this._rotationTexture.getGFXTexture());
              var _modeHandle3 = pass.getHandle('u_rotation_mode');
              pass.setUniform(_modeHandle3, this._rotationTexture.height);
            }
          }

          // size module
          var sizeModule = (_this$_particleSystem12 = this._particleSystem) === null || _this$_particleSystem12 === void 0 ? void 0 : _this$_particleSystem12._sizeOvertimeModule;
          enable = sizeModule ? sizeModule.enable : false;
          this._defines[SIZE_OVER_TIME_MODULE_ENABLE] = enable;
          if (enable) {
            var _packed4;
            if (sizeModule.separateAxes) {
              _packed4 = packCurveRangeXYZ(this._sizeTexture, this._sizeData, _sample_num, sizeModule.x, sizeModule.y, sizeModule.z, true);
            } else {
              _packed4 = packCurveRangeN(this._sizeTexture, this._sizeData, _sample_num, sizeModule.size, true);
            }
            this._sizeTexture = _packed4.texture;
            this._sizeData = _packed4.texdata;
            if (this._sizeTexture) {
              var _handle4 = pass.getHandle('size_over_time_tex0');
              var _binding4 = Pass.getBindingFromHandle(_handle4);
              pass.bindSampler(_binding4, this._sizeTexture.getGFXSampler());
              pass.bindTexture(_binding4, this._sizeTexture.getGFXTexture());
              var _modeHandle4 = pass.getHandle('u_size_mode');
              pass.setUniform(_modeHandle4, this._sizeTexture.height);
            }
          }

          // texture module
          var textureModule = (_this$_particleSystem13 = this._particleSystem) === null || _this$_particleSystem13 === void 0 ? void 0 : _this$_particleSystem13._textureAnimationModule;
          enable = textureModule ? textureModule.enable : false;
          this._defines[TEXTURE_ANIMATION_MODULE_ENABLE] = enable;
          if (enable) {
            // eslint-disable-next-line max-len
            var _packed5 = packCurveRangeXY(this._animTexture, this._animData, _sample_num, textureModule.startFrame, textureModule.frameOverTime, true);
            this._animTexture = _packed5.texture;
            this._animData = _packed5.texdata;
            var _handle5 = pass.getHandle('texture_animation_tex0');
            var _binding5 = Pass.getBindingFromHandle(_handle5);
            pass.bindSampler(_binding5, this._animTexture.getGFXSampler());
            pass.bindTexture(_binding5, this._animTexture.getGFXTexture());
            var infoHandle = pass.getHandle('u_anim_info');
            _tempVec4.x = this._animTexture.height;
            _tempVec4.y = textureModule.numTilesX * textureModule.numTilesY;
            _tempVec4.z = textureModule.cycleCount;
            pass.setUniform(infoHandle, _tempVec4);
          }
          this._defines[USE_VK_SHADER] = deviceManager.gfxDevice.gfxAPI === API.VULKAN;
          this._defines[INSTANCE_PARTICLE] = this._useInstance;
        };
        _proto.getParticleCount = function getParticleCount() {
          return this._particleNum;
        };
        _proto.onMaterialModified = function onMaterialModified(index, material) {
          if (!this._inited) {
            return;
          }
          this.updateMaterialParams();
        };
        _proto.onRebuildPSO = function onRebuildPSO(index, material) {
          if (this._model && index === 0) {
            this._model.setSubModelMaterial(0, material);
          }
        };
        _proto.updateVertexAttrib = function updateVertexAttrib() {
          if (this._renderInfo.renderMode !== RenderMode.Mesh) {
            return;
          }
          if (this._renderInfo.mesh) {
            var format = this._renderInfo.mesh.readAttributeFormat(0, AttributeName.ATTR_COLOR);
            if (format) {
              var type = Format.RGBA8;
              for (var i = 0; i < FormatInfos.length; ++i) {
                if (FormatInfos[i].name === format.name) {
                  type = i;
                  break;
                }
              }
              this._vertAttrs[9] = new Attribute(AttributeName.ATTR_COLOR1, type, true, !this._useInstance ? 0 : 1);
            } else {
              // mesh without vertex color
              var _type = Format.RGBA8;
              this._vertAttrs[9] = new Attribute(AttributeName.ATTR_COLOR1, _type, true, !this._useInstance ? 0 : 1);
            }
          }
        };
        _proto._setVertexAttrib = function _setVertexAttrib() {
          if (!this._useInstance) {
            switch (this._renderInfo.renderMode) {
              case RenderMode.StrecthedBillboard:
                this._vertAttrs = _gpu_vert_attr.slice();
                break;
              case RenderMode.Mesh:
                this._vertAttrs = _gpu_vert_attr_mesh.slice();
                break;
              default:
                this._vertAttrs = _gpu_vert_attr.slice();
            }
          } else {
            this._setVertexAttribIns();
          }
        };
        _proto._setVertexAttribIns = function _setVertexAttribIns() {
          switch (this._renderInfo.renderMode) {
            case RenderMode.StrecthedBillboard:
              this._vertAttrs = _gpu_vert_attr_ins.slice();
              break;
            case RenderMode.Mesh:
              this._vertAttrs = _gpu_vert_attr_mesh_ins.slice();
              break;
            default:
              this._vertAttrs = _gpu_vert_attr_ins.slice();
          }
        };
        _proto.updateMaterialParams = function updateMaterialParams() {
          if (!this._particleSystem) {
            return;
          }
          var ps = this._particleSystem;
          var shareMaterial = ps.sharedMaterial;
          if (shareMaterial !== null) {
            this._renderInfo.mainTexture = shareMaterial.getProperty('mainTexture', 0);
          }
          if (ps.sharedMaterial == null && this._defaultMat == null) {
            _matInsInfo.parent = builtinResMgr.get('default-particle-gpu-material');
            _matInsInfo.owner = ps;
            _matInsInfo.subModelIdx = 0;
            this._defaultMat = new MaterialInstance(_matInsInfo);
            _matInsInfo.parent = null;
            _matInsInfo.owner = null;
            _matInsInfo.subModelIdx = 0;
            if (this._renderInfo.mainTexture !== null) {
              this._defaultMat.setProperty('mainTexture', this._renderInfo.mainTexture);
            }
          }
          var mat = ps.getMaterialInstance(0) || this._defaultMat;
          ps.node.getWorldMatrix(_tempWorldTrans);
          if (ps.simulationSpace === Space.World) {
            this._defines[CC_USE_WORLD_SPACE] = true;
          } else {
            this._defines[CC_USE_WORLD_SPACE] = false;
          }
          var renderMode = this._renderInfo.renderMode;
          if (renderMode === RenderMode.Billboard) {
            this._defines[CC_RENDER_MODE] = RENDER_MODE_BILLBOARD;
          } else if (renderMode === RenderMode.StrecthedBillboard) {
            this._defines[CC_RENDER_MODE] = RENDER_MODE_STRETCHED_BILLBOARD;
            this._frameTile_velLenScale.z = this._renderInfo.velocityScale;
            this._frameTile_velLenScale.w = this._renderInfo.lengthScale;
          } else if (renderMode === RenderMode.HorizontalBillboard) {
            this._defines[CC_RENDER_MODE] = RENDER_MODE_HORIZONTAL_BILLBOARD;
          } else if (renderMode === RenderMode.VerticalBillboard) {
            this._defines[CC_RENDER_MODE] = RENDER_MODE_VERTICAL_BILLBOARD;
          } else if (renderMode === RenderMode.Mesh) {
            this._defines[CC_RENDER_MODE] = RENDER_MODE_MESH;
          } else {
            warn("particle system renderMode " + renderMode + " not support.");
          }
          var textureModule = ps._textureAnimationModule;
          if (textureModule && textureModule.enable) {
            Vec2.set(this._frameTile_velLenScale, textureModule.numTilesX, textureModule.numTilesY);
            Vec4.copy(this._unifrom_velLenScale, this._frameTile_velLenScale);
          } else {
            this._tmp_velLenScale.z = this._frameTile_velLenScale.z;
            this._tmp_velLenScale.w = this._frameTile_velLenScale.w;
            Vec4.copy(this._unifrom_velLenScale, this._tmp_velLenScale);
          }
          this.initShaderUniform(mat);
          mat.recompileShaders(this._defines);
          if (this._model) {
            this._model.updateMaterial(mat);
          }
        };
        _proto.setUseInstance = function setUseInstance(value) {
          if (this._useInstance === value) {
            return;
          }
          this._useInstance = value;
          if (this._model) {
            this._model.useInstance = value;
            this._model.doDestroy();
          }
          this.updateRenderMode();
        };
        _proto.getNoisePreview = function getNoisePreview(out, width, height) {};
        return ParticleSystemRendererGPU;
      }(ParticleSystemRendererBase));
    }
  };
});