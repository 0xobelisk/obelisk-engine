System.register("q-bundled:///fs/cocos/particle/renderer/particle-system-renderer-cpu.js", ["../../../../virtual/internal%253Aconstants.js", "../../asset/asset-manager/index.js", "../../gfx/index.js", "../../core/index.js", "../../render-scene/core/material-instance.js", "../enum.js", "../particle.js", "./particle-system-renderer-base.js", "../noise.js", "../particle-general-function.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, builtinResMgr, AttributeName, Format, Attribute, FormatInfos, Mat4, Vec2, Vec3, Vec4, pseudoRandom, Quat, EPSILON, approx, RecyclePool, warn, MaterialInstance, AlignmentSpace, RenderMode, Space, Particle, PARTICLE_MODULE_ORDER, PARTICLE_MODULE_NAME, ParticleSystemRendererBase, ParticleNoise, isCurveTwoValues, PVData, ParticleSystemRendererCPU, _tempNodeScale, _tempAttribUV, _tempWorldTrans, _tempParentInverse, _node_rot, _node_euler, _anim_module, _uvs, CC_USE_WORLD_SPACE, CC_RENDER_MODE, ROTATION_OVER_TIME_MODULE_ENABLE, INSTANCE_PARTICLE, RENDER_MODE_BILLBOARD, RENDER_MODE_STRETCHED_BILLBOARD, RENDER_MODE_HORIZONTAL_BILLBOARD, RENDER_MODE_VERTICAL_BILLBOARD, RENDER_MODE_MESH, _vertex_attrs, _vertex_attrs_stretch, _vertex_attrs_mesh, _vertex_attrs_ins, _vertex_attrs_stretch_ins, _vertex_attrs_mesh_ins, _matInsInfo;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
  _export({
    PVData: void 0,
    default: void 0
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_assetAssetManagerIndexJs) {
      builtinResMgr = _assetAssetManagerIndexJs.builtinResMgr;
    }, function (_gfxIndexJs) {
      AttributeName = _gfxIndexJs.AttributeName;
      Format = _gfxIndexJs.Format;
      Attribute = _gfxIndexJs.Attribute;
      FormatInfos = _gfxIndexJs.FormatInfos;
    }, function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      Vec4 = _coreIndexJs.Vec4;
      pseudoRandom = _coreIndexJs.pseudoRandom;
      Quat = _coreIndexJs.Quat;
      EPSILON = _coreIndexJs.EPSILON;
      approx = _coreIndexJs.approx;
      RecyclePool = _coreIndexJs.RecyclePool;
      warn = _coreIndexJs.warn;
    }, function (_renderSceneCoreMaterialInstanceJs) {
      MaterialInstance = _renderSceneCoreMaterialInstanceJs.MaterialInstance;
    }, function (_enumJs) {
      AlignmentSpace = _enumJs.AlignmentSpace;
      RenderMode = _enumJs.RenderMode;
      Space = _enumJs.Space;
    }, function (_particleJs) {
      Particle = _particleJs.Particle;
      PARTICLE_MODULE_ORDER = _particleJs.PARTICLE_MODULE_ORDER;
      PARTICLE_MODULE_NAME = _particleJs.PARTICLE_MODULE_NAME;
    }, function (_particleSystemRendererBaseJs) {
      ParticleSystemRendererBase = _particleSystemRendererBaseJs.ParticleSystemRendererBase;
    }, function (_noiseJs) {
      ParticleNoise = _noiseJs.ParticleNoise;
    }, function (_particleGeneralFunctionJs) {
      isCurveTwoValues = _particleGeneralFunctionJs.isCurveTwoValues;
    }],
    execute: function () {
      _tempNodeScale = new Vec4();
      _tempAttribUV = new Vec3();
      _tempWorldTrans = new Mat4();
      _tempParentInverse = new Mat4();
      _node_rot = new Quat();
      _node_euler = new Vec3();
      _anim_module = ['_colorOverLifetimeModule', '_sizeOvertimeModule', '_velocityOvertimeModule', '_forceOvertimeModule', '_limitVelocityOvertimeModule', '_rotationOvertimeModule', '_textureAnimationModule', '_noiseModule'];
      _uvs = [0, 0,
      // bottom-left
      1, 0,
      // bottom-right
      0, 1,
      // top-left
      1, 1 // top-right
      ];
      CC_USE_WORLD_SPACE = 'CC_USE_WORLD_SPACE';
      CC_RENDER_MODE = 'CC_RENDER_MODE';
      ROTATION_OVER_TIME_MODULE_ENABLE = 'ROTATION_OVER_TIME_MODULE_ENABLE';
      INSTANCE_PARTICLE = 'CC_INSTANCE_PARTICLE';
      RENDER_MODE_BILLBOARD = 0;
      RENDER_MODE_STRETCHED_BILLBOARD = 1;
      RENDER_MODE_HORIZONTAL_BILLBOARD = 2;
      RENDER_MODE_VERTICAL_BILLBOARD = 3;
      RENDER_MODE_MESH = 4;
      _vertex_attrs = [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F),
      // position
      new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F),
      // uv,frame idx
      new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F),
      // size
      new Attribute(AttributeName.ATTR_TEX_COORD2, Format.RGB32F),
      // rotation
      new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true) // color
      ];
      _vertex_attrs_stretch = [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F),
      // position
      new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F),
      // uv,frame idx
      new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F),
      // size
      new Attribute(AttributeName.ATTR_TEX_COORD2, Format.RGB32F),
      // rotation
      new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true),
      // color
      new Attribute(AttributeName.ATTR_COLOR1, Format.RGB32F) // particle velocity
      ];
      _vertex_attrs_mesh = [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F),
      // particle position
      new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F),
      // uv,frame idx
      new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F),
      // size
      new Attribute(AttributeName.ATTR_TEX_COORD2, Format.RGB32F),
      // rotation
      new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true),
      // particle color
      new Attribute(AttributeName.ATTR_TEX_COORD3, Format.RGB32F),
      // mesh position
      new Attribute(AttributeName.ATTR_NORMAL, Format.RGB32F),
      // mesh normal
      new Attribute(AttributeName.ATTR_COLOR1, Format.RGBA8, true) // mesh color
      ];
      _vertex_attrs_ins = [new Attribute(AttributeName.ATTR_TEX_COORD4, Format.RGBA32F, false, 0, true),
      // position,frame idx
      new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F, false, 0, true),
      // size
      new Attribute(AttributeName.ATTR_TEX_COORD2, Format.RGB32F, false, 0, true),
      // rotation
      new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true, 0, true),
      // color
      new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F, false, 1) // uv
      ];
      _vertex_attrs_stretch_ins = [new Attribute(AttributeName.ATTR_TEX_COORD4, Format.RGBA32F, false, 0, true),
      // position,frame idx
      new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F, false, 0, true),
      // size
      new Attribute(AttributeName.ATTR_TEX_COORD2, Format.RGB32F, false, 0, true),
      // rotation
      new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true, 0, true),
      // color
      new Attribute(AttributeName.ATTR_COLOR1, Format.RGB32F, false, 0, true),
      // particle velocity
      new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F, false, 1) // uv
      ];
      _vertex_attrs_mesh_ins = [new Attribute(AttributeName.ATTR_TEX_COORD4, Format.RGBA32F, false, 0, true),
      // particle position,frame idx
      new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F, false, 0, true),
      // size
      new Attribute(AttributeName.ATTR_TEX_COORD2, Format.RGB32F, false, 0, true),
      // rotation
      new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true, 0, true),
      // particle color
      new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F, false, 1),
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
      _export("PVData", PVData = class PVData {
        constructor() {
          this.position = void 0;
          this.texcoord = void 0;
          this.size = void 0;
          this.rotation = void 0;
          this.color = void 0;
          this.velocity = void 0;
          this.position = new Vec3();
          this.texcoord = new Vec3();
          this.size = new Vec3();
          this.rotation = new Vec3();
          this.color = 0;
          this.velocity = null;
        }
      });
      _export("default", ParticleSystemRendererCPU = class ParticleSystemRendererCPU extends ParticleSystemRendererBase {
        constructor(info) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          super(info);
          this._defines = void 0;
          this._trailDefines = void 0;
          this._frameTile_velLenScale = void 0;
          this._tmp_velLenScale = void 0;
          this._defaultMat = null;
          this._node_scale = void 0;
          this._particleVertexData = void 0;
          this._particles = null;
          this._defaultTrailMat = null;
          this._updateList = new Map();
          this._animateList = new Map();
          this._runAnimateList = new Array();
          this._fillDataFunc = null;
          this._uScaleHandle = 0;
          this._uLenHandle = 0;
          this._uNodeRotHandle = 0;
          this._alignSpace = AlignmentSpace.View;
          this._inited = false;
          this._localMat = new Mat4();
          this._gravity = new Vec4();
          this.noise = new ParticleNoise();
          this._model = null;
          this._frameTile_velLenScale = new Vec4(1, 1, 0, 0);
          this._tmp_velLenScale = this._frameTile_velLenScale.clone();
          this._node_scale = new Vec3();
          this._particleVertexData = new PVData();
          this._defines = {
            CC_USE_WORLD_SPACE: true,
            CC_USE_BILLBOARD: true,
            CC_USE_STRETCHED_BILLBOARD: false,
            CC_USE_HORIZONTAL_BILLBOARD: false,
            CC_USE_VERTICAL_BILLBOARD: false
          };
          this._trailDefines = {
            CC_USE_WORLD_SPACE: true
            // CC_DRAW_WIRE_FRAME: true,   // <wireframe debug>
          };
        }

        onInit(ps) {
          super.onInit(ps);
          this._particles = new RecyclePool(() => new Particle(this), 16);
          this._setVertexAttrib();
          this._setFillFunc();
          this._initModuleList();
          this._initModel();
          this.updateMaterialParams();
          this.updateTrailMaterial();
          this.setVertexAttributes();
          this._inited = true;
        }
        clear() {
          super.clear();
          this._particles.reset();
          if (this._particleSystem && this._particleSystem._trailModule) {
            this._particleSystem._trailModule.clear();
          }
          this.updateRenderData();
          this._model.enabled = false;
        }
        updateRenderMode() {
          this._setVertexAttrib();
          this._setFillFunc();
          this.updateMaterialParams();
          this.setVertexAttributes();
        }
        onDestroy() {
          var _this$_particles;
          (_this$_particles = this._particles) === null || _this$_particles === void 0 ? void 0 : _this$_particles.destroy();
          super.onDestroy();
        }
        getFreeParticle() {
          if (this._particleSystem && this._particles.length >= this._particleSystem.capacity) {
            return null;
          }
          return this._particles.add();
        }
        getDefaultTrailMaterial() {
          return this._defaultTrailMat;
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setNewParticle(p) {}
        _initModuleList() {
          _anim_module.forEach(val => {
            if (!this._particleSystem) {
              return;
            }
            const pm = this._particleSystem[val];
            if (pm && pm.enable) {
              if (pm.needUpdate) {
                this._updateList[pm.name] = pm;
              }
              if (pm.needAnimate) {
                this._animateList[pm.name] = pm;
              }
            }
          });

          // reorder
          this._runAnimateList.length = 0;
          for (let i = 0, len = PARTICLE_MODULE_ORDER.length; i < len; i++) {
            const p = this._animateList[PARTICLE_MODULE_ORDER[i]];
            if (p) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              this._runAnimateList.push(p);
            }
          }
        }
        enableModule(name, val, pm) {
          if (val) {
            if (pm.needUpdate) {
              this._updateList[pm.name] = pm;
            }
            if (pm.needAnimate) {
              this._animateList[pm.name] = pm;
            }
          } else {
            delete this._animateList[name];
            delete this._updateList[name];
          }
          // reorder
          this._runAnimateList.length = 0;
          for (let i = 0, len = PARTICLE_MODULE_ORDER.length; i < len; i++) {
            const p = this._animateList[PARTICLE_MODULE_ORDER[i]];
            if (p) {
              this._runAnimateList.push(p);
            }
          }
          this.updateMaterialParams();
        }
        updateAlignSpace(space) {
          this._alignSpace = space;
        }
        getDefaultMaterial() {
          return this._defaultMat;
        }
        updateRotation(pass) {
          if (pass) {
            this.doUpdateRotation(pass);
          }
        }
        doUpdateRotation(pass) {
          const mode = this._renderInfo.renderMode;
          if (mode !== RenderMode.Mesh && this._alignSpace === AlignmentSpace.View) {
            return;
          }
          if (this._alignSpace === AlignmentSpace.Local) {
            var _this$_particleSystem;
            (_this$_particleSystem = this._particleSystem) === null || _this$_particleSystem === void 0 ? void 0 : _this$_particleSystem.node.getRotation(_node_rot);
          } else if (this._alignSpace === AlignmentSpace.World) {
            var _this$_particleSystem2;
            (_this$_particleSystem2 = this._particleSystem) === null || _this$_particleSystem2 === void 0 ? void 0 : _this$_particleSystem2.node.getWorldRotation(_node_rot);
          } else if (this._alignSpace === AlignmentSpace.View) {
            var _this$_particleSystem3, _this$_particleSystem4;
            // Quat.fromEuler(_node_rot, 0.0, 0.0, 0.0);
            _node_rot.set(0.0, 0.0, 0.0, 1.0);
            const cameraLst = (_this$_particleSystem3 = this._particleSystem) === null || _this$_particleSystem3 === void 0 ? void 0 : (_this$_particleSystem4 = _this$_particleSystem3.node.scene.renderScene) === null || _this$_particleSystem4 === void 0 ? void 0 : _this$_particleSystem4.cameras;
            if (cameraLst !== undefined) {
              for (let i = 0; i < (cameraLst === null || cameraLst === void 0 ? void 0 : cameraLst.length); ++i) {
                const camera = cameraLst[i];
                // eslint-disable-next-line max-len
                const checkCamera = !EDITOR_NOT_IN_PREVIEW ? (camera.visibility & this._particleSystem.node.layer) === this._particleSystem.node.layer : camera.name === 'Editor Camera';
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
        }
        updateScale(pass) {
          if (pass) {
            this.doUpdateScale(pass);
          }
        }
        doUpdateScale(pass) {
          var _this$_particleSystem5, _this$_particleSystem6, _this$_particleSystem7;
          const nodeScale = this._node_scale;
          switch ((_this$_particleSystem5 = this._particleSystem) === null || _this$_particleSystem5 === void 0 ? void 0 : _this$_particleSystem5.scaleSpace) {
            case Space.Local:
              (_this$_particleSystem6 = this._particleSystem) === null || _this$_particleSystem6 === void 0 ? void 0 : _this$_particleSystem6.node.getScale(nodeScale);
              break;
            case Space.World:
              (_this$_particleSystem7 = this._particleSystem) === null || _this$_particleSystem7 === void 0 ? void 0 : _this$_particleSystem7.node.getWorldScale(nodeScale);
              break;
            default:
              break;
          }
          // NOTE: the `_node_scale` should be a Vec3, but we implement `scale` uniform property as a Vec4,
          // here we pass a temperate Vec4 object to prevent creating Vec4 object every time we set uniform.
          pass.setUniform(this._uScaleHandle, _tempNodeScale.set(nodeScale.x, nodeScale.y, nodeScale.z));
        }
        updateParticles(dt) {
          const ps = this._particleSystem;
          if (!ps) {
            return this._particles.length;
          }
          ps.node.getWorldMatrix(_tempWorldTrans);
          const mat = ps.getMaterialInstance(0) || this._defaultMat;
          const pass = mat.passes[0];
          this.doUpdateScale(pass);
          this.doUpdateRotation(pass);
          this._updateList.forEach((value, key) => {
            value.update(ps.simulationSpace, _tempWorldTrans);
          });
          const trailModule = ps._trailModule;
          const trailEnable = trailModule && trailModule.enable;
          if (trailEnable) {
            trailModule.update();
          }
          const useGravity = !ps.gravityModifier.isZero();
          if (useGravity) {
            if (ps.simulationSpace === Space.Local) {
              const r = ps.node.getRotation();
              Mat4.fromQuat(this._localMat, r);
              this._localMat.transpose(); // just consider rotation, use transpose as invert
            }

            if (ps.node.parent) {
              const r = ps.node.parent.getWorldRotation();
              Mat4.fromQuat(_tempParentInverse, r);
              _tempParentInverse.transpose();
            }
          }
          for (let i = 0; i < this._particles.length; ++i) {
            const p = this._particles.data[i];
            p.remainingLifetime -= dt;
            Vec3.set(p.animatedVelocity, 0, 0, 0);
            if (p.remainingLifetime < 0.0) {
              if (trailEnable) {
                trailModule.removeParticle(p);
              }
              this._particles.removeAt(i);
              --i;
              continue;
            }

            // apply gravity when both the mode is not Constant and the value is not 0.
            if (useGravity) {
              const rand = isCurveTwoValues(ps.gravityModifier) ? pseudoRandom(p.randomSeed) : 0;
              if (ps.simulationSpace === Space.Local) {
                const time = 1 - p.remainingLifetime / p.startLifetime;
                const gravityFactor = -ps.gravityModifier.evaluate(time, rand) * 9.8 * dt;
                this._gravity.x = 0.0;
                this._gravity.y = gravityFactor;
                this._gravity.z = 0.0;
                this._gravity.w = 1.0;
                if (!approx(gravityFactor, 0.0, EPSILON)) {
                  if (ps.node.parent) {
                    this._gravity = this._gravity.transformMat4(_tempParentInverse);
                  }
                  this._gravity = this._gravity.transformMat4(this._localMat);
                  p.velocity.x += this._gravity.x;
                  p.velocity.y += this._gravity.y;
                  p.velocity.z += this._gravity.z;
                }
              } else {
                // apply gravity.
                p.velocity.y -= ps.gravityModifier.evaluate(1 - p.remainingLifetime / p.startLifetime, rand) * 9.8 * dt;
              }
            }
            Vec3.copy(p.ultimateVelocity, p.velocity);
            this._runAnimateList.forEach(value => {
              value.animate(p, dt);
            });
            Vec3.scaleAndAdd(p.position, p.position, p.ultimateVelocity, dt); // apply velocity.
            if (trailEnable) {
              trailModule.animate(p, dt);
            }
          }
          this._model.enabled = this._particles.length > 0;
          return this._particles.length;
        }
        getNoisePreview(out, width, height) {
          this._runAnimateList.forEach(value => {
            if (value.name === PARTICLE_MODULE_NAME.NOISE) {
              const m = value;
              m.getNoisePreview(out, this._particleSystem, width, height);
            }
          });
        }

        // internal function
        updateRenderData() {
          // update vertex buffer
          let idx = 0;
          for (let i = 0; i < this._particles.length; ++i) {
            const p = this._particles.data[i];
            let fi = 0;
            const textureModule = this._particleSystem._textureAnimationModule;
            if (textureModule && textureModule.enable) {
              fi = p.frameIndex;
            }
            idx = i * 4;
            this._fillDataFunc(p, idx, fi);
          }
        }
        beforeRender() {
          // because we use index buffer, per particle index count = 6.
          this._model.updateIA(this._particles.length);
        }
        getParticleCount() {
          return this._particles.length;
        }
        onMaterialModified(index, material) {
          if (!this._inited) {
            return;
          }
          if (index === 0) {
            this.updateMaterialParams();
          } else {
            this.updateTrailMaterial();
          }
        }
        onRebuildPSO(index, material) {
          if (this._model && index === 0) {
            this._model.setSubModelMaterial(0, material);
          }
          const trailModule = this._particleSystem._trailModule;
          const trailModel = trailModule === null || trailModule === void 0 ? void 0 : trailModule.getModel();
          if (trailModel && index === 1) {
            trailModel.setSubModelMaterial(0, material);
          }
        }
        _setFillFunc() {
          if (this._renderInfo.renderMode === RenderMode.Mesh) {
            this._fillDataFunc = this._fillMeshData;
          } else if (this._renderInfo.renderMode === RenderMode.StrecthedBillboard) {
            this._fillDataFunc = this._fillStrecthedData;
          } else {
            this._fillDataFunc = this._fillNormalData;
          }
        }
        _fillMeshData(p, idx, fi) {
          const i = idx / 4;
          Vec3.copy(this._particleVertexData.position, p.position);
          _tempAttribUV.z = fi;
          Vec3.copy(this._particleVertexData.texcoord, _tempAttribUV);
          Vec3.copy(this._particleVertexData.size, p.size);
          Vec3.copy(this._particleVertexData.rotation, p.rotation);
          this._particleVertexData.color = p.color._val;
          this._model.addParticleVertexData(i, this._particleVertexData);
        }
        _fillStrecthedData(p, idx, fi) {
          if (!this._useInstance) {
            for (let j = 0; j < 4; ++j) {
              // four verts per particle.
              Vec3.copy(this._particleVertexData.position, p.position);
              _tempAttribUV.x = _uvs[2 * j];
              _tempAttribUV.y = _uvs[2 * j + 1];
              _tempAttribUV.z = fi;
              Vec3.copy(this._particleVertexData.texcoord, _tempAttribUV);
              Vec3.copy(this._particleVertexData.size, p.size);
              Vec3.copy(this._particleVertexData.rotation, p.rotation);
              this._particleVertexData.color = p.color._val;
              this._particleVertexData.velocity = p.ultimateVelocity;
              this._model.addParticleVertexData(idx++, this._particleVertexData);
            }
          } else {
            this._fillStrecthedDataIns(p, idx, fi);
          }
        }
        _fillStrecthedDataIns(p, idx, fi) {
          const i = idx / 4;
          Vec3.copy(this._particleVertexData.position, p.position);
          _tempAttribUV.z = fi;
          Vec3.copy(this._particleVertexData.texcoord, _tempAttribUV);
          Vec3.copy(this._particleVertexData.size, p.size);
          Vec3.copy(this._particleVertexData.rotation, p.rotation);
          this._particleVertexData.color = p.color._val;
          this._particleVertexData.velocity = p.ultimateVelocity;
          this._model.addParticleVertexData(i, this._particleVertexData);
        }
        _fillNormalData(p, idx, fi) {
          if (!this._useInstance) {
            for (let j = 0; j < 4; ++j) {
              // four verts per particle.
              Vec3.copy(this._particleVertexData.position, p.position);
              _tempAttribUV.x = _uvs[2 * j];
              _tempAttribUV.y = _uvs[2 * j + 1];
              _tempAttribUV.z = fi;
              Vec3.copy(this._particleVertexData.texcoord, _tempAttribUV);
              Vec3.copy(this._particleVertexData.size, p.size);
              Vec3.copy(this._particleVertexData.rotation, p.rotation);
              this._particleVertexData.color = p.color._val;
              this._model.addParticleVertexData(idx++, this._particleVertexData);
            }
          } else {
            this._fillNormalDataIns(p, idx, fi);
          }
        }
        _fillNormalDataIns(p, idx, fi) {
          const i = idx / 4;
          Vec3.copy(this._particleVertexData.position, p.position);
          _tempAttribUV.z = fi;
          Vec3.copy(this._particleVertexData.texcoord, _tempAttribUV);
          Vec3.copy(this._particleVertexData.size, p.size);
          Vec3.copy(this._particleVertexData.rotation, p.rotation);
          this._particleVertexData.color = p.color._val;
          this._model.addParticleVertexData(i, this._particleVertexData);
        }
        updateVertexAttrib() {
          if (this._renderInfo.renderMode !== RenderMode.Mesh) {
            return;
          }
          if (this._renderInfo.mesh) {
            const format = this._renderInfo.mesh.readAttributeFormat(0, AttributeName.ATTR_COLOR);
            if (format) {
              let type = Format.RGBA8;
              for (let i = 0; i < FormatInfos.length; ++i) {
                if (FormatInfos[i].name === format.name) {
                  type = i;
                  break;
                }
              }
              this._vertAttrs[7] = new Attribute(AttributeName.ATTR_COLOR1, type, true, !this._useInstance ? 0 : 1);
            } else {
              // mesh without vertex color
              const type = Format.RGBA8;
              this._vertAttrs[7] = new Attribute(AttributeName.ATTR_COLOR1, type, true, !this._useInstance ? 0 : 1);
            }
          }
        }
        _setVertexAttrib() {
          if (!this._useInstance) {
            switch (this._renderInfo.renderMode) {
              case RenderMode.StrecthedBillboard:
                this._vertAttrs = _vertex_attrs_stretch.slice();
                break;
              case RenderMode.Mesh:
                this._vertAttrs = _vertex_attrs_mesh.slice();
                break;
              default:
                this._vertAttrs = _vertex_attrs.slice();
            }
          } else {
            this._setVertexAttribIns();
          }
        }
        _setVertexAttribIns() {
          switch (this._renderInfo.renderMode) {
            case RenderMode.StrecthedBillboard:
              this._vertAttrs = _vertex_attrs_stretch_ins.slice();
              break;
            case RenderMode.Mesh:
              this._vertAttrs = _vertex_attrs_mesh_ins.slice();
              break;
            default:
              this._vertAttrs = _vertex_attrs_ins.slice();
          }
        }
        updateMaterialParams() {
          if (!this._particleSystem) {
            return;
          }
          const ps = this._particleSystem;
          const shareMaterial = ps.sharedMaterial;
          if (shareMaterial != null) {
            this._renderInfo.mainTexture = shareMaterial.getProperty('mainTexture', 0);
          }
          if (ps.sharedMaterial == null && this._defaultMat == null) {
            _matInsInfo.parent = builtinResMgr.get('default-particle-material');
            _matInsInfo.owner = this._particleSystem;
            _matInsInfo.subModelIdx = 0;
            this._defaultMat = new MaterialInstance(_matInsInfo);
            _matInsInfo.parent = null;
            _matInsInfo.owner = null;
            _matInsInfo.subModelIdx = 0;
            if (this._renderInfo.mainTexture !== null) {
              this._defaultMat.setProperty('mainTexture', this._renderInfo.mainTexture);
            }
          }
          const mat = ps.getMaterialInstance(0) || this._defaultMat;
          if (ps.simulationSpace === Space.World) {
            this._defines[CC_USE_WORLD_SPACE] = true;
          } else {
            this._defines[CC_USE_WORLD_SPACE] = false;
          }
          const pass = mat.passes[0];
          this._uScaleHandle = pass.getHandle('scale');
          this._uLenHandle = pass.getHandle('frameTile_velLenScale');
          this._uNodeRotHandle = pass.getHandle('nodeRotation');
          const renderMode = this._renderInfo.renderMode;
          const vlenScale = this._frameTile_velLenScale;
          if (renderMode === RenderMode.Billboard) {
            this._defines[CC_RENDER_MODE] = RENDER_MODE_BILLBOARD;
          } else if (renderMode === RenderMode.StrecthedBillboard) {
            this._defines[CC_RENDER_MODE] = RENDER_MODE_STRETCHED_BILLBOARD;
            vlenScale.z = this._renderInfo.velocityScale;
            vlenScale.w = this._renderInfo.lengthScale;
          } else if (renderMode === RenderMode.HorizontalBillboard) {
            this._defines[CC_RENDER_MODE] = RENDER_MODE_HORIZONTAL_BILLBOARD;
          } else if (renderMode === RenderMode.VerticalBillboard) {
            this._defines[CC_RENDER_MODE] = RENDER_MODE_VERTICAL_BILLBOARD;
          } else if (renderMode === RenderMode.Mesh) {
            this._defines[CC_RENDER_MODE] = RENDER_MODE_MESH;
          } else {
            warn(`particle system renderMode ${renderMode} not support.`);
          }
          const textureModule = ps._textureAnimationModule;
          if (textureModule && textureModule.enable) {
            Vec4.copy(this._tmp_velLenScale, vlenScale); // fix textureModule switch bug
            Vec2.set(this._tmp_velLenScale, textureModule.numTilesX, textureModule.numTilesY);
            pass.setUniform(this._uLenHandle, this._tmp_velLenScale);
          } else {
            pass.setUniform(this._uLenHandle, vlenScale);
          }
          let enable = false;
          const roationModule = this._particleSystem._rotationOvertimeModule;
          enable = roationModule ? roationModule.enable : false;
          this._defines[ROTATION_OVER_TIME_MODULE_ENABLE] = enable;
          this._defines[INSTANCE_PARTICLE] = this._useInstance;
          mat.recompileShaders(this._defines);
          if (this._model) {
            this._model.updateMaterial(mat);
          }
        }
        updateTrailMaterial() {
          if (!this._particleSystem) {
            return;
          }
          const ps = this._particleSystem;
          const trailModule = ps._trailModule;
          if (trailModule && trailModule.enable) {
            if (ps.simulationSpace === Space.World || trailModule.space === Space.World) {
              this._trailDefines[CC_USE_WORLD_SPACE] = true;
            } else {
              this._trailDefines[CC_USE_WORLD_SPACE] = false;
            }
            let mat = ps.getMaterialInstance(1);
            if (mat === null && this._defaultTrailMat === null) {
              _matInsInfo.parent = builtinResMgr.get('default-trail-material');
              _matInsInfo.owner = this._particleSystem;
              _matInsInfo.subModelIdx = 1;
              this._defaultTrailMat = new MaterialInstance(_matInsInfo);
              _matInsInfo.parent = null;
              _matInsInfo.owner = null;
              _matInsInfo.subModelIdx = 0;
            }
            mat = mat || this._defaultTrailMat;
            mat.recompileShaders(this._trailDefines);
            trailModule.updateMaterial();
          }
        }
        setUseInstance(value) {
          if (this._useInstance === value) {
            return;
          }
          this._useInstance = value;
          if (this._model) {
            this._model.useInstance = value;
            this._model.doDestroy();
          }
          this.updateRenderMode();
        }
      });
    }
  };
});