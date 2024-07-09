System.register("q-bundled:///fs/cocos/animation/value-proxy-factories/uniform.js", ["../../core/data/decorators/index.js", "../../asset/asset-manager/index.js", "../../asset/assets/material.js", "../../asset/assets/texture-base.js", "../../gfx/index.js", "../../render-scene/core/pass.js", "../../render-scene/core/pass-utils.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, float, serializable, builtinResMgr, Material, TextureBase, deviceManager, Type, Pass, getDefaultFromType, getStringFromType, warn, warnID, _dec, _class, _class2, _initializer, _initializer2, _descriptor, UniformProxyFactory;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function isUniformArray(pass, name) {
    for (const block of pass.shaderInfo.blocks) {
      for (const uniform of block.members) {
        if (uniform.name === name) {
          return uniform.count > 1;
        }
      }
    }
    return false;
  }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      float = _coreDataDecoratorsIndexJs.float;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_assetAssetManagerIndexJs) {
      builtinResMgr = _assetAssetManagerIndexJs.builtinResMgr;
    }, function (_assetAssetsMaterialJs) {
      Material = _assetAssetsMaterialJs.Material;
    }, function (_assetAssetsTextureBaseJs) {
      TextureBase = _assetAssetsTextureBaseJs.TextureBase;
    }, function (_gfxIndexJs) {
      deviceManager = _gfxIndexJs.deviceManager;
      Type = _gfxIndexJs.Type;
    }, function (_renderSceneCorePassJs) {
      Pass = _renderSceneCorePassJs.Pass;
    }, function (_renderSceneCorePassUtilsJs) {
      getDefaultFromType = _renderSceneCorePassUtilsJs.getDefaultFromType;
      getStringFromType = _renderSceneCorePassUtilsJs.getStringFromType;
    }, function (_coreIndexJs) {
      warn = _coreIndexJs.warn;
      warnID = _coreIndexJs.warnID;
    }],
    execute: function () {
      /**
       * @en
       * Value proxy factory for setting uniform on material target.
       * @zh
       * 用于设置材质目标上指定 Uniform 的曲线值代理工厂。
       */
      _export("UniformProxyFactory", UniformProxyFactory = (_dec = ccclass('cc.animation.UniformProxyFactory'), _dec(_class = (_class2 = class UniformProxyFactory {
        constructor(uniformName, passIndex) {
          /**
           * @en Pass index.
           * @zh Pass 索引。
           */
          this.passIndex = _initializer && _initializer();
          /**
           * @en Uniform name.
           * @zh Uniform 名称。
           */
          this.uniformName = _initializer2 && _initializer2();
          /**
           * @en
           * Specify the aimed channel of the uniform.
           * Use this when you're aiming at a single channel of the uniform instead of who uniform.
           * For example, only green(1) channel of a color uniform.
           * @zh
           * 指定目标 Uniform 的通道。
           * 当你希望设置 Uniform 单独的通道而非整个 Uniform 时应该当使用此字段。
           * 例如，仅设置颜色 Uniform 的红色通道。
           */
          _initializerDefineProperty(this, "channelIndex", _descriptor, this);
          this.passIndex = passIndex || 0;
          this.uniformName = uniformName || '';
        }
        forTarget(target) {
          if (!(target instanceof Material)) {
            warnID(3940, target);
            return undefined;
          }
          const {
            passIndex,
            uniformName,
            channelIndex
          } = this;
          if (passIndex < 0 || passIndex >= target.passes.length) {
            warnID(3941, target.name, passIndex);
            return undefined;
          }
          const pass = target.passes[passIndex];
          const handle = pass.getHandle(uniformName);
          if (!handle) {
            warnID(3942, target.name, passIndex, uniformName);
            return undefined;
          }
          const type = Pass.getTypeFromHandle(handle);
          if (type < Type.SAMPLER1D) {
            const realHandle = channelIndex === undefined ? handle : pass.getHandle(uniformName, channelIndex, Type.FLOAT);
            if (!realHandle) {
              warnID(3943, target.name, passIndex, uniformName, channelIndex);
              return undefined;
            }
            if (isUniformArray(pass, uniformName)) {
              return {
                set: value => {
                  pass.setUniformArray(realHandle, value);
                }
              };
            }
            return {
              set: value => {
                pass.setUniform(realHandle, value);
              }
            };
          } else {
            const binding = Pass.getBindingFromHandle(handle);
            const prop = pass.properties[uniformName];
            const texName = prop && prop.value ? `${prop.value}${getStringFromType(prop.type)}` : getDefaultFromType(prop.type);
            let dftTex = builtinResMgr.get(texName);
            if (!dftTex) {
              warn(`Illegal texture default value: ${texName}.`);
              dftTex = builtinResMgr.get('default-texture');
            }
            return {
              set: value => {
                if (!value) {
                  value = dftTex;
                }
                const texture = value.getGFXTexture();
                if (!texture || !texture.width || !texture.height) {
                  return;
                }
                pass.bindTexture(binding, texture);
                if (value instanceof TextureBase) {
                  pass.bindSampler(binding, deviceManager.gfxDevice.getSampler(value.getSamplerInfo()));
                }
              }
            };
          }
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "passIndex", [serializable], function () {
        return 0;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "uniformName", [serializable], function () {
        return '';
      }), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "channelIndex", [float], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return undefined;
        }
      })), _class2)) || _class));
    }
  };
});