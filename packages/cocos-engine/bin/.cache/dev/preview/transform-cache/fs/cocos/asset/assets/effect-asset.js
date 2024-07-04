System.register("q-bundled:///fs/cocos/asset/assets/effect-asset.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../gfx/index.js", "../../render-scene/core/program-lib.js", "./asset.js", "../../core/index.js", "../../render-scene/core/program-utils.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, editable, editorOnly, EDITOR_NOT_IN_PREVIEW, deviceManager, programLib, Asset, cclegacy, warnID, addEffectDefaultProperties, getCombinationDefines, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _class3, legacyBuiltinEffectNames, EffectAsset;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
      editorOnly = _coreDataDecoratorsIndexJs.editorOnly;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_gfxIndexJs) {
      deviceManager = _gfxIndexJs.deviceManager;
    }, function (_renderSceneCoreProgramLibJs) {
      programLib = _renderSceneCoreProgramLibJs.programLib;
    }, function (_assetJs) {
      Asset = _assetJs.Asset;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      warnID = _coreIndexJs.warnID;
    }, function (_renderSceneCoreProgramUtilsJs) {
      addEffectDefaultProperties = _renderSceneCoreProgramUtilsJs.addEffectDefaultProperties;
      getCombinationDefines = _renderSceneCoreProgramUtilsJs.getCombinationDefines;
    }],
    execute: function () {
      legacyBuiltinEffectNames = ['planar-shadow', 'skybox', 'deferred-lighting', 'bloom', 'hbao', 'copy-pass', 'post-process', 'profiler', 'splash-screen', 'unlit', 'sprite', 'particle', 'particle-gpu', 'particle-trail', 'billboard', 'terrain', 'graphics', 'clear-stencil', 'spine', 'occlusion-query', 'geometry-renderer', 'debug-renderer', 'ssss-blur', 'float-output-process'];
      /**
       * @en Effect asset is the base template for instantiating material, all effects should be unique globally.
       * All effects are managed in a static map of EffectAsset.
       * @zh Effect 资源，作为材质实例初始化的模板，每个 effect 资源都应是全局唯一的。
       * 所有 Effect 资源都由此类的一个静态对象管理。
       */
      _export("EffectAsset", EffectAsset = (_dec = ccclass('cc.EffectAsset'), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(EffectAsset, _Asset);
        function EffectAsset() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;
          /**
           * @en The techniques used by the current effect.
           * @zh 当前 effect 的所有可用 technique。
           */
          _this.techniques = _initializer && _initializer();
          /**
           * @en The shaders used by the current effect.
           * @zh 当前 effect 使用的所有 shader。
           */
          _this.shaders = _initializer2 && _initializer2();
          /**
           * @en The preprocess macro combinations for the shader
           * @zh 每个 shader 需要预编译的宏定义组合。
           */
          _this.combinations = _initializer3 && _initializer3();
          /**
           * @en Whether to hide in editor mode.
           * @zh 是否在编辑器内隐藏。
           */
          _this.hideInEditor = _initializer4 && _initializer4();
          return _this;
        }
        /**
         * @en Register the effect asset to the static map.
         * @zh 将指定 effect 注册到全局管理器。
         *
         * @param asset @en The effect asset to be registered. @zh 待注册的 effect asset。
         */
        EffectAsset.register = function register(asset) {
          EffectAsset._effects[asset.name] = asset;
          EffectAsset._layoutValid = false;
        }

        /**
         * @en Unregister the effect asset from the static map
         * @zh 将指定 effect 从全局管理器移除。
         *
         * @param asset - @en The effect asset to be removed. @zh 待移除的 effect asset。
         */;
        EffectAsset.remove = function remove(asset) {
          if (typeof asset !== 'string') {
            if (EffectAsset._effects[asset.name] && EffectAsset._effects[asset.name] === asset) {
              delete EffectAsset._effects[asset.name];
            }
          } else {
            if (EffectAsset._effects[asset]) {
              delete EffectAsset._effects[asset];
              return;
            }
            for (var n in EffectAsset._effects) {
              if (EffectAsset._effects[n]._uuid === asset) {
                delete EffectAsset._effects[n];
                return;
              }
            }
          }
        }

        /**
         * @en Gets the effect asset by the given name.
         * @zh 获取指定名字的 effect 资源。
         *
         * @param name - @en The name of effect you want to get. @zh 想要获取的 effect 的名字。
         * @returns @en The effect. @zh 你查询的 effect.
         */;
        EffectAsset.get = function get(name) {
          if (EffectAsset._effects[name]) {
            return EffectAsset._effects[name];
          }
          for (var n in EffectAsset._effects) {
            if (EffectAsset._effects[n]._uuid === name) {
              return EffectAsset._effects[n];
            }
          }
          if (legacyBuiltinEffectNames.includes(name)) {
            warnID(16101, name);
          }
          return null;
        }

        /**
         * @en Gets all registered effect assets.
         * @zh 获取所有已注册的 effect 资源。
         * @returns @en All registered effects. @zh 所有已注册的 effect 资源。
         */;
        EffectAsset.getAll = function getAll() {
          return EffectAsset._effects;
        }

        /**
         * @engineInternal
         */;
        /**
         * @engineInternal
         */
        EffectAsset.isLayoutValid = function isLayoutValid() {
          return EffectAsset._layoutValid;
        }
        /**
         * @engineInternal
         */;
        EffectAsset.setLayoutValid = function setLayoutValid() {
          EffectAsset._layoutValid = true;
        }
        /**
         * @engineInternal
         */;
        var _proto = EffectAsset.prototype;
        /**
         * @en The loaded callback which should be invoked by the [[AssetManager]], will automatically register the effect.
         * @zh 通过 [[AssetManager]] 加载完成时的回调，将自动注册 effect 资源。
         */
        _proto.onLoaded = function onLoaded() {
          if (cclegacy.rendering && cclegacy.rendering.enableEffectImport) {
            addEffectDefaultProperties(this);
            var _programLib = cclegacy.rendering.programLib;
            _programLib.addEffect(this);
            _programLib.init(deviceManager.gfxDevice);
          } else {
            programLib.register(this);
          }
          EffectAsset.register(this);
          if (!EDITOR_NOT_IN_PREVIEW) {
            cclegacy.game.once(cclegacy.Game.EVENT_RENDERER_INITED, this._precompile, this);
          }
        }

        /**
         * @engineInternal
         */;
        _proto._precompile = function _precompile() {
          var _this2 = this;
          if (cclegacy.rendering && cclegacy.rendering.enableEffectImport) {
            cclegacy.rendering.programLib.precompileEffect(deviceManager.gfxDevice, this);
            return;
          }
          var root = cclegacy.director.root;
          var _loop = function _loop() {
            var shader = _this2.shaders[i];
            var combination = _this2.combinations[i];
            if (!combination) {
              return 1; // continue
            }
            var defines = getCombinationDefines(combination);
            defines.forEach(function (defines) {
              return programLib.getGFXShader(deviceManager.gfxDevice, shader.name, defines, root.pipeline);
            });
          };
          for (var i = 0; i < this.shaders.length; i++) {
            if (_loop()) continue;
          }
        };
        _proto.destroy = function destroy() {
          EffectAsset.remove(this);
          return _Asset.prototype.destroy.call(this);
        };
        _proto.initDefault = function initDefault(uuid) {
          _Asset.prototype.initDefault.call(this, uuid);
          var effect = EffectAsset.get('builtin-unlit');
          this.name = 'builtin-unlit';
          this.shaders = effect.shaders;
          this.combinations = effect.combinations;
          this.techniques = effect.techniques;
        };
        _proto.validate = function validate() {
          return this.techniques.length > 0 && this.shaders.length > 0;
        };
        return EffectAsset;
      }(Asset), _class3._effects = {}, _class3._layoutValid = true, _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "techniques", [serializable, editable], function () {
        return [];
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "shaders", [serializable, editable], function () {
        return [];
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "combinations", [serializable, editable], function () {
        return [];
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "hideInEditor", [serializable, editorOnly], function () {
        return false;
      })), _class2)) || _class));
      cclegacy.EffectAsset = EffectAsset;
    }
  };
});