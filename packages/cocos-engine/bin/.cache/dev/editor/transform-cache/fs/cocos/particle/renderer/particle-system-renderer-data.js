System.register("q-bundled:///fs/cocos/particle/renderer/particle-system-renderer-data.js", ["../../core/data/decorators/index.js", "../../3d/index.js", "../../asset/assets/index.js", "../enum.js", "./particle-system-renderer-cpu.js", "./particle-system-renderer-gpu.js", "../../game/director.js", "../../gfx/index.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, tooltip, displayOrder, type, serializable, disallowAnimation, visible, Mesh, Material, AlignmentSpace, RenderMode, ParticleSystemRendererCPU, ParticleSystemRendererGPU, director, Format, FormatFeatureBit, errorID, warnID, cclegacy, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _class3, ParticleSystemRenderer;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function isSupportGPUParticle() {
    const device = director.root.device;
    if (device.capabilities.maxVertexTextureUnits >= 8 && device.getFormatFeatures(Format.RGBA32F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE)) {
      return true;
    }
    cclegacy.warn('Maybe the device has restrictions on vertex textures or does not support float textures.');
    return false;
  }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      disallowAnimation = _coreDataDecoratorsIndexJs.disallowAnimation;
      visible = _coreDataDecoratorsIndexJs.visible;
    }, function (_dIndexJs) {
      Mesh = _dIndexJs.Mesh;
    }, function (_assetAssetsIndexJs) {
      Material = _assetAssetsIndexJs.Material;
    }, function (_enumJs) {
      AlignmentSpace = _enumJs.AlignmentSpace;
      RenderMode = _enumJs.RenderMode;
    }, function (_particleSystemRendererCpuJs) {
      ParticleSystemRendererCPU = _particleSystemRendererCpuJs.default;
    }, function (_particleSystemRendererGpuJs) {
      ParticleSystemRendererGPU = _particleSystemRendererGpuJs.default;
    }, function (_gameDirectorJs) {
      director = _gameDirectorJs.director;
    }, function (_gfxIndexJs) {
      Format = _gfxIndexJs.Format;
      FormatFeatureBit = _gfxIndexJs.FormatFeatureBit;
    }, function (_coreIndexJs) {
      errorID = _coreIndexJs.errorID;
      warnID = _coreIndexJs.warnID;
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      _export("default", ParticleSystemRenderer = (_dec = ccclass('cc.ParticleSystemRenderer'), _dec2 = type(RenderMode), _dec3 = displayOrder(0), _dec4 = tooltip('i18n:particleSystemRenderer.renderMode'), _dec5 = displayOrder(1), _dec6 = tooltip('i18n:particleSystemRenderer.velocityScale'), _dec7 = displayOrder(2), _dec8 = tooltip('i18n:particleSystemRenderer.lengthScale'), _dec9 = type(RenderMode), _dec10 = type(Mesh), _dec11 = displayOrder(7), _dec12 = tooltip('i18n:particleSystemRenderer.mesh'), _dec13 = type(Material), _dec14 = displayOrder(8), _dec15 = visible(false), _dec16 = tooltip('i18n:particleSystemRenderer.particleMaterial'), _dec17 = type(Material), _dec18 = displayOrder(8), _dec19 = visible(function () {
        return !this._useGPU;
      }), _dec20 = type(Material), _dec21 = displayOrder(8), _dec22 = visible(function () {
        return this._useGPU;
      }), _dec23 = type(Material), _dec24 = displayOrder(9), _dec25 = visible(function () {
        return !this._useGPU;
      }), _dec26 = tooltip('i18n:particleSystemRenderer.trailMaterial'), _dec27 = displayOrder(10), _dec28 = tooltip('i18n:particleSystemRenderer.useGPU'), _dec29 = type(AlignmentSpace), _dec30 = displayOrder(10), _dec31 = tooltip('i18n:particle_system.alignSpace'), _dec(_class = (_class2 = (_class3 = class ParticleSystemRenderer {
        constructor() {
          this._renderMode = _initializer && _initializer();
          this._velocityScale = _initializer2 && _initializer2();
          this._lengthScale = _initializer3 && _initializer3();
          this._mesh = _initializer4 && _initializer4();
          this._cpuMaterial = _initializer5 && _initializer5();
          this._gpuMaterial = _initializer6 && _initializer6();
          this._mainTexture = _initializer7 && _initializer7();
          this._useGPU = _initializer8 && _initializer8();
          this._alignSpace = _initializer9 && _initializer9();
          this._particleSystem = null;
        }
        /**
         * @zh 设定粒子生成模式。
         */
        get renderMode() {
          return this._renderMode;
        }
        set renderMode(val) {
          if (this._renderMode === val) {
            return;
          }
          this._renderMode = val;
          if (this._particleSystem) {
            this._particleSystem.processor.updateRenderMode();
          }
        }

        /**
         * @zh 在粒子生成方式为 StrecthedBillboard 时,对粒子在运动方向上按速度大小进行拉伸。
         */
        get velocityScale() {
          return this._velocityScale;
        }
        set velocityScale(val) {
          this._velocityScale = val;
          if (this._particleSystem) {
            this._particleSystem.processor.updateMaterialParams();
          }
          // this._updateModel();
        }

        /**
         * @zh 在粒子生成方式为 StrecthedBillboard 时,对粒子在运动方向上按粒子大小进行拉伸。
         */
        get lengthScale() {
          return this._lengthScale;
        }
        set lengthScale(val) {
          this._lengthScale = val;
          if (this._particleSystem) {
            this._particleSystem.processor.updateMaterialParams();
          }
          // this._updateModel();
        }

        /**
         * @zh 粒子发射的模型。
         */
        get mesh() {
          return this._mesh;
        }
        set mesh(val) {
          this._mesh = val;
          if (this._particleSystem) {
            this._particleSystem.processor.setVertexAttributes();
          }
        }

        /**
         * @zh 粒子使用的材质。
         */
        get particleMaterial() {
          if (!this._particleSystem) {
            return null;
          }
          return this._particleSystem.getSharedMaterial(0);
        }
        set particleMaterial(val) {
          if (this._particleSystem) {
            this._particleSystem.setSharedMaterial(val, 0);
          }
        }

        /**
         * @en particle cpu material
         * @zh 粒子使用的cpu材质。
         */
        get cpuMaterial() {
          return this._cpuMaterial;
        }
        set cpuMaterial(val) {
          if (val === null) {
            return;
          } else {
            const effectName = val.effectName;
            if (effectName.indexOf('particle') === -1 || effectName.indexOf('particle-gpu') !== -1) {
              warnID(6035);
              return;
            }
          }
          this._cpuMaterial = val;
          this.particleMaterial = this._cpuMaterial;
        }
        /**
         * @en particle gpu material
         * @zh 粒子使用的gpu材质。
         */
        get gpuMaterial() {
          return this._gpuMaterial;
        }
        set gpuMaterial(val) {
          if (val === null) {
            return;
          } else {
            const effectName = val.effectName;
            if (effectName.indexOf('particle-gpu') === -1) {
              warnID(6035);
              return;
            }
          }
          this._gpuMaterial = val;
          this.particleMaterial = this._gpuMaterial;
        }
        /**
         * @en particle trail material
         * @zh 拖尾使用的材质。
         */
        get trailMaterial() {
          if (!this._particleSystem) {
            return null;
          }
          return this._particleSystem.getSharedMaterial(1);
        }
        set trailMaterial(val) {
          if (this._particleSystem) {
            this._particleSystem.setSharedMaterial(val, 1);
          }
        }
        get mainTexture() {
          return this._mainTexture;
        }
        set mainTexture(val) {
          this._mainTexture = val;
        }
        get useGPU() {
          return this._useGPU;
        }
        set useGPU(val) {
          if (this._useGPU === val) {
            return;
          }
          if (!isSupportGPUParticle()) {
            this._useGPU = false;
          } else {
            this._useGPU = val;
          }
          this._switchProcessor();
        }

        /**
         * @en Particle alignment space option. Includes world, local and view.
         * @zh 粒子对齐空间选择。包括世界空间，局部空间和视角空间。
         */
        get alignSpace() {
          return this._alignSpace;
        }
        set alignSpace(val) {
          this._alignSpace = val;
          this._particleSystem.processor.updateAlignSpace(this._alignSpace);
        }
        // ParticleSystem

        create(ps) {
          // if particle system is null we run the old routine
          // else if particle system is not null we do nothing
          if (this._particleSystem === null) {
            this._particleSystem = ps;
          } else if (this._particleSystem !== ps) {
            errorID(6033);
          }
        }
        onInit(ps) {
          this.create(ps);
          const useGPU = this._useGPU && isSupportGPUParticle();
          if (!this._particleSystem.processor) {
            this._particleSystem.processor = useGPU ? new ParticleSystemRendererGPU(this) : new ParticleSystemRendererCPU(this);
            this._particleSystem.processor.updateAlignSpace(this.alignSpace);
            this._particleSystem.processor.onInit(ps);
          } else {
            errorID(6034);
          }
          if (!useGPU) {
            if (this.particleMaterial && this.particleMaterial.effectName.indexOf('particle-gpu') !== -1) {
              this.particleMaterial = null;
              warnID(6035);
            }
            this.cpuMaterial = this.particleMaterial;
          } else {
            this.gpuMaterial = this.particleMaterial;
          }
        }
        _switchProcessor() {
          if (!this._particleSystem) {
            return;
          }
          if (this._particleSystem.processor) {
            this._particleSystem.processor.detachFromScene();
            this._particleSystem.processor.clear();
            this._particleSystem.processor = null;
          }
          const useGPU = this._useGPU && isSupportGPUParticle();
          if (!useGPU && this.cpuMaterial) {
            this.particleMaterial = this.cpuMaterial;
          }
          if (useGPU && this.gpuMaterial) {
            this.particleMaterial = this.gpuMaterial;
          }
          this._particleSystem.processor = useGPU ? new ParticleSystemRendererGPU(this) : new ParticleSystemRendererCPU(this);
          this._particleSystem.processor.updateAlignSpace(this.alignSpace);
          this._particleSystem.processor.onInit(this._particleSystem);
          this._particleSystem.processor.onEnable();
          this._particleSystem.bindModule();
        }
      }, _class3.AlignmentSpace = AlignmentSpace, _class3), (_applyDecoratedDescriptor(_class2.prototype, "renderMode", [_dec2, _dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "renderMode"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "velocityScale", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "velocityScale"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "lengthScale", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "lengthScale"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_renderMode", [_dec9, serializable], function () {
        return RenderMode.Billboard;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_velocityScale", [serializable], function () {
        return 1;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_lengthScale", [serializable], function () {
        return 1;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_mesh", [serializable], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "mesh", [_dec10, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "mesh"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "particleMaterial", [_dec13, _dec14, disallowAnimation, _dec15, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "particleMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "cpuMaterial", [_dec17, _dec18, disallowAnimation, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "cpuMaterial"), _class2.prototype), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_cpuMaterial", [serializable], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "gpuMaterial", [_dec20, _dec21, disallowAnimation, _dec22], Object.getOwnPropertyDescriptor(_class2.prototype, "gpuMaterial"), _class2.prototype), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_gpuMaterial", [serializable], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "trailMaterial", [_dec23, _dec24, disallowAnimation, _dec25, _dec26], Object.getOwnPropertyDescriptor(_class2.prototype, "trailMaterial"), _class2.prototype), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_mainTexture", [serializable], function () {
        return null;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_useGPU", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class2.prototype, "useGPU", [_dec27, _dec28], Object.getOwnPropertyDescriptor(_class2.prototype, "useGPU"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "alignSpace", [_dec29, _dec30, _dec31], Object.getOwnPropertyDescriptor(_class2.prototype, "alignSpace"), _class2.prototype), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_alignSpace", [serializable], function () {
        return AlignmentSpace.View;
      })), _class2)) || _class));
    }
  };
});