System.register("q-bundled:///fs/cocos/animation/value-proxy-factories/uniform.js", ["../../core/data/decorators/index.js", "../../asset/asset-manager/index.js", "../../asset/assets/material.js", "../../asset/assets/texture-base.js", "../../gfx/index.js", "../../render-scene/core/pass.js", "../../render-scene/core/pass-utils.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, _float, serializable, builtinResMgr, Material, TextureBase, deviceManager, Type, Pass, getDefaultFromType, getStringFromType, warn, warnID, _dec, _class, _class2, _initializer, _initializer2, _descriptor, UniformProxyFactory;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
    for (var _iterator = _createForOfIteratorHelperLoose(pass.shaderInfo.blocks), _step; !(_step = _iterator()).done;) {
      var block = _step.value;
      for (var _iterator2 = _createForOfIteratorHelperLoose(block.members), _step2; !(_step2 = _iterator2()).done;) {
        var uniform = _step2.value;
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
      _float = _coreDataDecoratorsIndexJs.float;
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
      _export("UniformProxyFactory", UniformProxyFactory = (_dec = ccclass('cc.animation.UniformProxyFactory'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function UniformProxyFactory(uniformName, passIndex) {
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
        var _proto = UniformProxyFactory.prototype;
        _proto.forTarget = function forTarget(target) {
          if (!(target instanceof Material)) {
            warnID(3940, target);
            return undefined;
          }
          var passIndex = this.passIndex,
            uniformName = this.uniformName,
            channelIndex = this.channelIndex;
          if (passIndex < 0 || passIndex >= target.passes.length) {
            warnID(3941, target.name, passIndex);
            return undefined;
          }
          var pass = target.passes[passIndex];
          var handle = pass.getHandle(uniformName);
          if (!handle) {
            warnID(3942, target.name, passIndex, uniformName);
            return undefined;
          }
          var type = Pass.getTypeFromHandle(handle);
          if (type < Type.SAMPLER1D) {
            var realHandle = channelIndex === undefined ? handle : pass.getHandle(uniformName, channelIndex, Type.FLOAT);
            if (!realHandle) {
              warnID(3943, target.name, passIndex, uniformName, channelIndex);
              return undefined;
            }
            if (isUniformArray(pass, uniformName)) {
              return {
                set: function set(value) {
                  pass.setUniformArray(realHandle, value);
                }
              };
            }
            return {
              set: function set(value) {
                pass.setUniform(realHandle, value);
              }
            };
          } else {
            var binding = Pass.getBindingFromHandle(handle);
            var prop = pass.properties[uniformName];
            var texName = prop && prop.value ? "" + prop.value + getStringFromType(prop.type) : getDefaultFromType(prop.type);
            var dftTex = builtinResMgr.get(texName);
            if (!dftTex) {
              warn("Illegal texture default value: " + texName + ".");
              dftTex = builtinResMgr.get('default-texture');
            }
            return {
              set: function set(value) {
                if (!value) {
                  value = dftTex;
                }
                var texture = value.getGFXTexture();
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
        };
        return UniformProxyFactory;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "passIndex", [serializable], function () {
        return 0;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "uniformName", [serializable], function () {
        return '';
      }), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "channelIndex", [_float], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      })), _class2)) || _class));
    }
  };
});