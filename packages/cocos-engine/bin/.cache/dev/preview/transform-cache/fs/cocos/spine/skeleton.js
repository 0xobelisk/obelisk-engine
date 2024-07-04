System.register("q-bundled:///fs/cocos/spine/skeleton.js", ["../../../virtual/internal%253Aconstants.js", "../core/data/decorators/index.js", "../asset/assets/index.js", "../core/platform/debug.js", "../core/value-types/enum.js", "../scene-graph/index.js", "../core/index.js", "./skeleton-data.js", "../2d/index.js", "../gfx/index.js", "../render-scene/index.js", "../asset/asset-manager/index.js", "../core/global-exports.js", "./skeleton-system.js", "../2d/renderer/render-entity.js", "./attach-util.js", "./lib/instantiated.js", "./lib/spine-core.js", "./skeleton-cache.js", "./track-entry-listeners.js", "../core/internal-index.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, JSB, ccclass, executeInEditMode, help, menu, serializable, type, displayName, override, displayOrder, editable, tooltip, Material, error, logID, warn, Enum, ccenum, Node, NodeEventType, CCObject, Color, RecyclePool, js, SkeletonData, Graphics, UIRenderer, BlendOp, MaterialInstance, builtinResMgr, legacyCC, SkeletonSystem, RenderEntity, RenderEntityType, AttachUtil, SPINE_WASM, spine, SkeletonCache, TrackEntryListeners, setPropertyEnumType, _dec, _dec2, _class, _class2, _initializer, _initializer2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class4, _class5, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _class6, spineTag, CachedFrameTime, CUSTOM_SLOT_TEXTURE_BEGIN, _slotTextureID, timeScale, AnimationCacheMode, DefaultSkinsEnum, DefaultAnimsEnum, SpineMaterialType, SpineSocket, Skeleton;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  _export({
    AnimationCacheMode: void 0,
    DefaultSkinsEnum: void 0,
    DefaultAnimsEnum: void 0,
    SpineMaterialType: void 0
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
      displayName = _coreDataDecoratorsIndexJs.displayName;
      override = _coreDataDecoratorsIndexJs.override;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      editable = _coreDataDecoratorsIndexJs.editable;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
    }, function (_assetAssetsIndexJs) {
      Material = _assetAssetsIndexJs.Material;
    }, function (_corePlatformDebugJs) {
      error = _corePlatformDebugJs.error;
      logID = _corePlatformDebugJs.logID;
      warn = _corePlatformDebugJs.warn;
    }, function (_coreValueTypesEnumJs) {
      Enum = _coreValueTypesEnumJs.Enum;
      ccenum = _coreValueTypesEnumJs.ccenum;
    }, function (_sceneGraphIndexJs) {
      Node = _sceneGraphIndexJs.Node;
      NodeEventType = _sceneGraphIndexJs.NodeEventType;
    }, function (_coreIndexJs) {
      CCObject = _coreIndexJs.CCObject;
      Color = _coreIndexJs.Color;
      RecyclePool = _coreIndexJs.RecyclePool;
      js = _coreIndexJs.js;
    }, function (_skeletonDataJs) {
      SkeletonData = _skeletonDataJs.SkeletonData;
    }, function (_dIndexJs) {
      Graphics = _dIndexJs.Graphics;
      UIRenderer = _dIndexJs.UIRenderer;
    }, function (_gfxIndexJs) {
      BlendOp = _gfxIndexJs.BlendOp;
    }, function (_renderSceneIndexJs) {
      MaterialInstance = _renderSceneIndexJs.MaterialInstance;
    }, function (_assetAssetManagerIndexJs) {
      builtinResMgr = _assetAssetManagerIndexJs.builtinResMgr;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_skeletonSystemJs) {
      SkeletonSystem = _skeletonSystemJs.SkeletonSystem;
    }, function (_dRendererRenderEntityJs) {
      RenderEntity = _dRendererRenderEntityJs.RenderEntity;
      RenderEntityType = _dRendererRenderEntityJs.RenderEntityType;
    }, function (_attachUtilJs) {
      AttachUtil = _attachUtilJs.AttachUtil;
    }, function (_libInstantiatedJs) {
      SPINE_WASM = _libInstantiatedJs.SPINE_WASM;
    }, function (_libSpineCoreJs) {
      spine = _libSpineCoreJs.default;
    }, function (_skeletonCacheJs) {
      SkeletonCache = _skeletonCacheJs.default;
    }, function (_trackEntryListenersJs) {
      TrackEntryListeners = _trackEntryListenersJs.TrackEntryListeners;
    }, function (_coreInternalIndexJs) {
      setPropertyEnumType = _coreInternalIndexJs.setPropertyEnumType;
    }],
    execute: function () {
      spineTag = SPINE_WASM;
      CachedFrameTime = 1 / 60;
      CUSTOM_SLOT_TEXTURE_BEGIN = 10000;
      _slotTextureID = CUSTOM_SLOT_TEXTURE_BEGIN;
      /**
       * @en
       * Animation playback rate.
       * @zh
       * 动画播放速率。
       */
      _export("timeScale", timeScale = 1.0);
      /**
       * @en Enum for animation cache mode type.
       * @zh Spine 动画缓存类型。
       */
      (function (AnimationCacheMode) {
        AnimationCacheMode[AnimationCacheMode["UNSET"] = -1] = "UNSET";
        AnimationCacheMode[AnimationCacheMode["REALTIME"] = 0] = "REALTIME";
        AnimationCacheMode[AnimationCacheMode["SHARED_CACHE"] = 1] = "SHARED_CACHE";
        AnimationCacheMode[AnimationCacheMode["PRIVATE_CACHE"] = 2] = "PRIVATE_CACHE";
      })(AnimationCacheMode || _export("AnimationCacheMode", AnimationCacheMode = {}));
      ccenum(AnimationCacheMode);
      (function (DefaultSkinsEnum) {
        DefaultSkinsEnum[DefaultSkinsEnum["default"] = 0] = "default";
      })(DefaultSkinsEnum || _export("DefaultSkinsEnum", DefaultSkinsEnum = {}));
      ccenum(DefaultSkinsEnum);

      /**
       * @engineInternal
       */
      (function (DefaultAnimsEnum) {
        DefaultAnimsEnum[DefaultAnimsEnum["<None>"] = 0] = "<None>";
      })(DefaultAnimsEnum || _export("DefaultAnimsEnum", DefaultAnimsEnum = {}));
      ccenum(DefaultAnimsEnum);

      /**
       * @engineInternal
       */
      (function (SpineMaterialType) {
        SpineMaterialType[SpineMaterialType["COLORED_TEXTURED"] = 0] = "COLORED_TEXTURED";
        SpineMaterialType[SpineMaterialType["TWO_COLORED"] = 1] = "TWO_COLORED";
      })(SpineMaterialType || _export("SpineMaterialType", SpineMaterialType = {}));
      /**
       * @engineInternal
       */
      /**
       * @en
       * The Sockets attached to bones, synchronous transform with spine animation.
       * @zh
       * Spine 挂点，可附着在目标骨骼上随 spine 动画一起运动。
       * @class SpineSocket
       */
      _export("SpineSocket", SpineSocket = (_dec = ccclass('sp.Skeleton.SpineSocket'), _dec2 = type(Node), _dec(_class = (_class2 = function SpineSocket(path, target) {
        if (path === void 0) {
          path = '';
        }
        if (target === void 0) {
          target = null;
        }
        /**
         * @en Path of the target joint.
         * @zh 此挂点的目标骨骼路径。
         */
        this.path = _initializer && _initializer();
        /**
         * @en Transform output node.
         * @zh 此挂点的变换信息输出节点。
         */
        this.target = _initializer2 && _initializer2();
        this.path = path;
        this.target = target;
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "path", [serializable, editable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "target", [_dec2, editable, serializable], function () {
        return null;
      })), _class2)) || _class));
      js.setClassAlias(SpineSocket, 'sp.Skeleton.SpineSocket');

      /**
       * @en
       * The skeleton of Spine <br/>
       * <br/>
       * (Skeleton has a reference to a SkeletonData and stores the state for skeleton instance,
       * which consists of the current pose's bone SRT, slot colors, and which slot attachments are visible. <br/>
       * Multiple skeletons can use the same SkeletonData which includes all animations, skins, and attachments.) <br/>
       * Cocos Creator supports spine versions lower than 3.8.99.
       * @zh
       * Spine 骨骼动画 <br/>
       * <br/>
       * (Skeleton 具有对骨骼数据的引用并且存储了骨骼实例的状态，
       * 它由当前的骨骼动作，slot 颜色，和可见的 slot attachments 组成。<br/>
       * 多个 Skeleton 可以使用相同的骨骼数据，其中包括所有的动画，皮肤和 attachments。
       * Cocos Creator 支持 spine 版本最高到3.8.99。
       * @class Skeleton
       * @extends UIRenderer
       */
      _export("Skeleton", Skeleton = (_dec3 = ccclass('sp.Skeleton'), _dec4 = help('i18n:cc.Spine'), _dec5 = menu('Spine/Skeleton'), _dec6 = type(SkeletonData), _dec7 = displayName('SkeletonData'), _dec8 = displayName('Default Skin'), _dec9 = type(DefaultSkinsEnum), _dec10 = tooltip('i18n:COMPONENT.skeleton.default_skin'), _dec11 = displayName('Animation'), _dec12 = type(DefaultAnimsEnum), _dec13 = tooltip('i18n:COMPONENT.skeleton.animation'), _dec14 = displayName('Animation Cache Mode'), _dec15 = tooltip('i18n:COMPONENT.skeleton.animation_cache_mode'), _dec16 = type(AnimationCacheMode), _dec17 = tooltip('i18n:COMPONENT.skeleton.premultipliedAlpha'), _dec18 = tooltip('i18n:COMPONENT.skeleton.loop'), _dec19 = tooltip('i18n:COMPONENT.skeleton.time_scale'), _dec20 = tooltip('i18n:COMPONENT.skeleton.use_tint'), _dec21 = tooltip('i18n:COMPONENT.skeleton.enabled_batch'), _dec22 = type([SpineSocket]), _dec23 = tooltip('i18n:animation.sockets'), _dec24 = tooltip('i18n:COMPONENT.skeleton.debug_slots'), _dec25 = tooltip('i18n:COMPONENT.skeleton.debug_bones'), _dec26 = tooltip('i18n:COMPONENT.skeleton.debug_mesh'), _dec27 = type(Material), _dec28 = displayOrder(0), _dec29 = displayName('CustomMaterial'), _dec3(_class4 = _dec4(_class4 = _dec5(_class4 = executeInEditMode(_class4 = (_class5 = (_class6 = /*#__PURE__*/function (_UIRenderer) {
        _inheritsLoose(Skeleton, _UIRenderer);
        function Skeleton() {
          var _this;
          _this = _UIRenderer.call(this) || this;
          _this._skeletonData = _initializer3 && _initializer3();
          _this.defaultSkin = _initializer4 && _initializer4();
          _this.defaultAnimation = _initializer5 && _initializer5();
          /**
           * @en Indicates whether to enable premultiplied alpha.
           * You should disable this option when image's transparent area appears to have opaque pixels,
           * or enable this option when image's half transparent area appears to be darken.
           * @zh 是否启用贴图预乘。
           * 当图片的透明区域出现色块时需要关闭该选项，当图片的半透明区域颜色变黑时需要启用该选项。
           */
          _this._premultipliedAlpha = _initializer6 && _initializer6();
          _this._timeScale = _initializer7 && _initializer7();
          _this._preCacheMode = _initializer8 && _initializer8();
          _this._cacheMode = _initializer9 && _initializer9();
          _this._sockets = _initializer10 && _initializer10();
          _this._useTint = _initializer11 && _initializer11();
          _this._debugMesh = _initializer12 && _initializer12();
          _this._debugBones = _initializer13 && _initializer13();
          _this._debugSlots = _initializer14 && _initializer14();
          _this._enableBatch = _initializer15 && _initializer15();
          _this._runtimeData = null;
          _this._skeleton = null;
          _this._instance = null;
          _this._state = null;
          _this._textures = [];
          _this._skeletonInfo = null;
          // Animation name
          _this._animationName = '';
          _this._skinName = '';
          _this._drawList = new RecyclePool(function () {
            return {
              material: null,
              texture: null,
              indexOffset: 0,
              indexCount: 0
            };
          }, 1);
          _this._materialCache = {};
          _this.paused = false;
          _this._enumSkins = Enum({});
          _this._enumAnimations = Enum({});
          _this.attachUtil = void 0;
          _this._socketNodes = new Map();
          _this._cachedSockets = new Map();
          /**
           * @engineInternal
           */
          _this._startEntry = void 0;
          /**
           * @engineInternal
           */
          _this._endEntry = void 0;
          // Paused or playing state
          _this._paused = false;
          // Below properties will effect when cache mode is SHARED_CACHE or PRIVATE_CACHE.
          // accumulate time
          _this._accTime = 0;
          // Play times counter
          _this._playCount = 0;
          // Skeleton cache
          _this._skeletonCache = null;
          _this._animCache = null;
          _this._animationQueue = [];
          // Head animation info of
          _this._headAniInfo = null;
          // Is animation complete.
          _this._isAniComplete = true;
          // Play times
          _this._playTimes = 0;
          /**
           * @engineInternal
           */
          _this._curFrame = null;
          // Is need update skeltonData
          _this._needUpdateSkeltonData = true;
          _this._listener = null;
          /**
           * @engineInternal
           */
          _this._debugRenderer = null;
          /**
           * @engineInternal
           */
          _this._startSlotIndex = void 0;
          /**
           * @engineInternal
           */
          _this._endSlotIndex = void 0;
          _this._slotTextures = null;
          _this._vLength = 0;
          _this._vBuffer = null;
          _this._iLength = 0;
          _this._iBuffer = null;
          _this._model = void 0;
          _this._tempColor = {
            r: 0,
            g: 0,
            b: 0,
            a: 0
          };
          /**
           * @en Whether play animations in loop mode.
           * @zh 是否循环播放当前骨骼动画。
           */
          _this.loop = _initializer16 && _initializer16();
          _this._useVertexOpacity = true;
          _this._startEntry = {
            animation: {
              name: ''
            },
            trackIndex: 0
          };
          _this._endEntry = {
            animation: {
              name: ''
            },
            trackIndex: 0
          };
          _this._startSlotIndex = -1;
          _this._endSlotIndex = -1;
          if (!JSB) {
            _this._instance = new spine.SkeletonInstance();
            _this._instance.dtRate = _this._timeScale * timeScale;
            _this._instance.isCache = _this.isAnimationCached();
          }
          _this.attachUtil = new AttachUtil();
          return _this;
        }

        /**
         * @engineInternal
         */
        var _proto = Skeleton.prototype;
        _proto.__preload = function __preload() {
          _UIRenderer.prototype.__preload.call(this);
          this._updateSkeletonData();
          this._updateDebugDraw();
        }

        /**
         * @engineInternal
         */;
        _proto.onRestore = function onRestore() {
          this.updateMaterial();
          this.markForUpdateRenderData();
        }

        /**
         * @en Gets the animation state object.
         * @zh 获取动画状态。
         * @method getState
         * @return {sp.spine.AnimationState} state
         */;
        _proto.getState = function getState() {
          return this._state;
        }

        /**
         * @en Be called when component state becomes available.
         * @zh 组件状态变为可用时调用。
         */;
        _proto.onEnable = function onEnable() {
          _UIRenderer.prototype.onEnable.call(this);
          if (this._instance) {
            this._instance.enable = true;
          }
          this._flushAssembler();
          SkeletonSystem.getInstance().add(this);
        }
        /**
         * @en Be called when component state becomes disabled.
         * @zh 组件状态变为禁用状态时调用。
         */;
        _proto.onDisable = function onDisable() {
          _UIRenderer.prototype.onDisable.call(this);
          if (this._instance) {
            this._instance.enable = false;
          }
          SkeletonSystem.getInstance().remove(this);
        };
        _proto.onDestroy = function onDestroy() {
          var _this$_slotTextures;
          this._drawList.destroy();
          this.destroyRenderData();
          this._cleanMaterialCache();
          this._vBuffer = null;
          this._iBuffer = null;
          this.attachUtil.reset();
          //this._textures.length = 0;
          (_this$_slotTextures = this._slotTextures) === null || _this$_slotTextures === void 0 ? void 0 : _this$_slotTextures.clear();
          this._slotTextures = null;
          this._cachedSockets.clear();
          this._socketNodes.clear();
          //if (this._cacheMode == AnimationCacheMode.PRIVATE_CACHE) this._animCache?.destroy();
          this._animCache = null;
          SkeletonSystem.getInstance().remove(this);
          if (!JSB && this._instance) {
            this._instance.destroy();
            this._instance = null;
          }
          this._destroySkeletonInfo(this._skeletonCache);
          this._skeletonCache = null;
          _UIRenderer.prototype.onDestroy.call(this);
        }

        /**
         * @en Clear animation and set to setup pose, default value of track index is 0.
         * @zh 清除指定动画并还原到初始姿势, 默认清除 track索引 为0的动画。
         * @param {NUmber} [trackIndex] @en track index. @zh track 的索引。
         */;
        _proto.clearAnimation = function clearAnimation(trackIndex) {
          if (!this.isAnimationCached()) {
            this.clearTrack(trackIndex || 0);
            this.setToSetupPose();
          }
        }

        /**
         * @en Clear all animations and set to setup pose.
         * @zh 清除所有动画并还原到初始姿势。
         */;
        _proto.clearAnimations = function clearAnimations() {
          if (!this.isAnimationCached()) {
            this.clearTracks();
            this.setToSetupPose();
          }
        };
        _proto._updateSkeletonData = function _updateSkeletonData() {
          var skeletonData = this._skeletonData;
          if (!skeletonData) {
            this._runtimeData = null;
            this._state = null;
            this._skeleton = null;
            this._textures = [];
            this._refreshInspector();
            return;
          }
          if (this._instance) {
            this._instance.dtRate = this._timeScale * timeScale;
          }
          this._needUpdateSkeltonData = false;
          //const data = this.skeletonData?.getRuntimeData();
          //if (!data) return;
          //this.setSkeletonData(data);
          this._runtimeData = skeletonData.getRuntimeData();
          if (!this._runtimeData) return;
          this.setSkeletonData(this._runtimeData);
          this._textures = skeletonData.textures;
          this._refreshInspector();
          if (this.defaultAnimation) this.animation = this.defaultAnimation.toString();
          if (this.defaultSkin && this.defaultSkin !== '') this.setSkin(this.defaultSkin);
          this._updateUseTint();
          this._indexBoneSockets();
          this._updateSocketBindings();
          this.attachUtil.init(this);
          this._preCacheMode = this._cacheMode;
        }

        /**
         * @en
         * Sets runtime skeleton data to sp.Skeleton.<br>
         * This method is different from the `skeletonData` property. This method is passed in the raw data provided by the
         *  Spine runtime, and the skeletonData type is the asset type provided by Creator.
         * @zh
         * 设置底层运行时用到的 SkeletonData。<br>
         * 这个接口有别于 `skeletonData` 属性，这个接口传入的是 Spine runtime 提供的原始数据，而 skeletonData 的类型是 Creator 提供的资源类型。
         * @param skeletonData @en The skeleton data contains the skeleton information (bind pose bones, slots, draw order, attachments,
         * skins, etc) and animations but does not hold any state. @zh 骨架数据(SkeletonData)包含骨架信息(绑定pose的骨骼、槽位、绘制顺序、附件、
         * 皮肤等)和动画, 但不保存任何状态。
         */;
        _proto.setSkeletonData = function setSkeletonData(skeletonData) {
          if (!EDITOR_NOT_IN_PREVIEW) {
            var preSkeletonCache = this._skeletonCache;
            if (this._cacheMode === AnimationCacheMode.SHARED_CACHE) {
              this._skeletonCache = SkeletonCache.sharedCache;
            } else if (this._cacheMode === AnimationCacheMode.PRIVATE_CACHE) {
              this._skeletonCache = new SkeletonCache();
              this._skeletonCache.enablePrivateMode();
            } else {
              this._skeletonCache = null;
            }
            //cache mode may be changed
            if (preSkeletonCache !== this._skeletonCache) {
              this._destroySkeletonInfo(preSkeletonCache);
            }
          }
          if (this.isAnimationCached()) {
            if (this.debugBones || this.debugSlots) {
              warn('Debug bones or slots is invalid in cached mode');
            }
            var skeletonInfo = this._skeletonCache.getSkeletonInfo(this._skeletonData);
            if (this._skeletonInfo !== skeletonInfo) {
              this._destroySkeletonInfo(this._skeletonCache);
              this._skeletonInfo = this._skeletonCache.createSkeletonInfo(this._skeletonData);
              this._skeleton = this._skeletonInfo.skeleton;
            }
          } else {
            this._skeleton = this._instance.initSkeleton(skeletonData);
            this._state = this._instance.getAnimationState();
            this._instance.setPremultipliedAlpha(this._premultipliedAlpha);
          }
          // Recreate render data and mark dirty
          this._flushAssembler();
        }

        /**
         * @en Sets slots visible range.
         * @zh 设置骨骼插槽可视范围。
         * @param {Number} startSlotIndex @en start slot index. @zh 开始插槽的索引。
         * @param {Number} endSlotIndex @en end slot index. @zh 结束插槽的索引。
         */;
        _proto.setSlotsRange = function setSlotsRange(startSlotIndex, endSlotIndex) {
          if (this.isAnimationCached()) {
            warn('Slots visible range can not be modified in cached mode.');
          } else {
            this._startSlotIndex = startSlotIndex;
            this._endSlotIndex = endSlotIndex;
          }
        }

        /**
         * @en
         * Returns the attachment for the slot and attachment name.
         * The skeleton looks first in its skin, then in the skeleton data’s default skin.<br>
         * Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Attachment object.
         * @zh
         * 通过 slot 和 attachment 的名称获取 attachment。Skeleton 优先查找它的皮肤，然后才是 Skeleton Data 中默认的皮肤。<br>
         * 返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Attachment 对象。
         *
         * @method getAttachment
         * @param {String} slotName @en slot name. @zh 插槽的名字。
         * @param {String} attachmentName @en attachment name. @en 附件的名称。
         * @return {sp.spine.Attachment}
         */;
        _proto.getAttachment = function getAttachment(slotName, attachmentName) {
          if (this._skeleton) {
            return this._skeleton.getAttachmentByName(slotName, attachmentName);
          }
          return null;
        }

        /**
         * @en
         * Sets the attachment for the slot and attachment name.
         * The skeleton looks first in its skin, then in the skeleton data’s default skin.
         * @zh
         * 通过 slot 和 attachment 的名字来设置 attachment。
         * Skeleton 优先查找它的皮肤，然后才是 Skeleton Data 中默认的皮肤。
         * @method setAttachment
         * @param {String} slotName @en slot name. @zh 插槽的名字。
         * @param {String} attachmentName @en attachment name. @en 附件的名称。
         */;
        _proto.setAttachment = function setAttachment(slotName, attachmentName) {
          if (this._skeleton) {
            this._skeleton.setAttachment(slotName, attachmentName);
          }
          this.invalidAnimationCache();
        }

        /**
         * @en
         * Get Texture Atlas used in attachments.
         * @zh
         * 获取附件图集。
         * @param regionAttachment @en An attachment type of RegionAttachment or BoundingBoxAttachment. @zh RegionAttachment 或 BoundingBoxAttachment 的附件。
         * @return @en TextureRegion contains texture and atlas text information. @zh TextureRegion包含纹理和图集文本信息。
         */;
        _proto.getTextureAtlas = function getTextureAtlas(regionAttachment) {
          return regionAttachment.region;
        }
        /**
         * @en Set the current animation. Any queued animations are cleared.<br>
         * @zh 设置当前动画。队列中的任何的动画将被清除。<br>
         * @param trackIndex @en Index of track. @zh 动画通道索引。
         * @param name @en The name of animation. @zh 动画名称。
         * @param loop @en Use loop mode or not. @zh 是否使用循环播放模式。
         */;
        _proto.setAnimation = function setAnimation(trackIndex, name, loop) {
          if (!(typeof name === 'string')) {
            logID(7511);
            return null;
          }
          var animation = this._skeleton.data.findAnimation(name);
          if (!animation) {
            logID(7509, name);
            return null;
          }
          var trackEntry = null;
          if (loop === undefined) loop = true;
          this._playTimes = loop ? 0 : 1;
          if (this.isAnimationCached()) {
            if (trackIndex !== 0) {
              warn('Track index can not greater than 0 in cached mode.');
            }
            if (!this._skeletonCache) return null;
            var cache = this._skeletonCache.getAnimationCache(this._skeletonData.uuid, name);
            if (!cache) {
              var _cache;
              cache = this._skeletonCache.initAnimationCache(this.skeletonData.uuid, this._skeletonData, name);
              (_cache = cache) === null || _cache === void 0 ? void 0 : _cache.setSkin(this._skinName);
            }
            if (cache) {
              this._animationName = name;
              this._isAniComplete = false;
              this._accTime = 0;
              this._playCount = 0;
              this._animCache = cache;
              if (this._socketNodes.size > 0) {
                this._animCache.enableCacheAttachedInfo();
              }
              this._animCache.updateToFrame(0);
              this._curFrame = this._animCache.frames[0];
            }
          } else {
            this._animationName = name;
            trackEntry = this._instance.setAnimation(trackIndex, name, loop);
          }
          this.markForUpdateRenderData();
          return trackEntry;
        }
        /**
         * @en Adds an animation to be played delay seconds after the current or last queued animation.<br>
         * Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry object.
         * @zh 添加一个动画到动画队列尾部，还可以延迟指定的秒数。<br>
         * 返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry 对象。
         * @param trackIndex @en Index of trackEntry. @zh TrackEntry 索引。
         * @param name @en The name of animation. @zh 动画名称。
         * @param loop @en Set play animation in a loop. @zh 是否循环播放。
         * @param delay @en Delay time of animation start. @zh 动画开始的延迟时间。
         * @return {sp.spine.TrackEntry}
         */;
        _proto.addAnimation = function addAnimation(trackIndex, name, loop, delay) {
          delay = delay || 0;
          if (this.isAnimationCached()) {
            if (trackIndex !== 0) {
              warn('Track index can not greater than 0 in cached mode.');
            }
            this._animationQueue.push({
              animationName: name,
              loop: loop,
              delay: delay
            });
            return null;
          } else if (this._skeleton) {
            var _this$_state;
            var animation = this._skeleton.data.findAnimation(name);
            if (!animation) {
              logID(7510, name);
              return null;
            }
            return (_this$_state = this._state) === null || _this$_state === void 0 ? void 0 : _this$_state.addAnimationWith(trackIndex, animation, loop, delay);
          }
          return null;
        }
        /**
         * @en Find animation with specified name.
         * @zh 查找指定名称的动画
         * @param name @en The name of animation. @zh 动画名称。
         * @returns {sp.spine.Animation}
         */;
        _proto.findAnimation = function findAnimation(name) {
          if (this._skeleton) {
            return this._skeleton.data.findAnimation(name);
          }
          return null;
        }
        /**
         * @en Returns track entry by trackIndex.<br>
         * Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry object.
         * @zh 通过 track 索引获取 TrackEntry。<br>
         * 返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry 对象。
         * @param trackIndex @en The index of trackEntry. @zh TrackEntry 索引。
         * @return {sp.spine.TrackEntry}
         */;
        _proto.getCurrent = function getCurrent(trackIndex) {
          if (this.isAnimationCached()) {
            warn('\'getCurrent\' interface can not be invoked in cached mode.');
          } else if (this._state) {
            return this._state.getCurrent(trackIndex);
          }
          return null;
        }

        /**
         * @en
         * Finds a skin by name and makes it the active skin.
         * This does a string comparison for every skin.<br>
         * Note that setting the skin does not change which attachments are visible.<br>
         * Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Skin object.
         * @zh
         * 按名称查找皮肤，激活该皮肤。这里对每个皮肤的名称进行了比较。<br>
         * 注意：设置皮肤不会改变 attachment 的可见性。<br>
         * 返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Skin 对象。
         *
         * @param skinName @en The name of skin. @zh 皮肤名称。
         */;
        _proto.setSkin = function setSkin(name) {
          if (this._skeleton) this._skeleton.setSkinByName(name);
          this._instance.setSkin(name);
          if (this.isAnimationCached()) {
            if (this._animCache) {
              this._animCache.setSkin(name);
            }
          }
          this._skinName = name;
          this.invalidAnimationCache();
        }

        /**
         * @en Update skeleton animation.
         * @zh 更新骨骼动画。
         * @param dt @en delta time. @zh 时间差。
         */;
        _proto.updateAnimation = function updateAnimation(dt) {
          this.markForUpdateRenderData();
          if (EDITOR_NOT_IN_PREVIEW) return;
          if (this.paused) return;
          if (this.isAnimationCached()) {
            // On realTime mode, dt is multiplied at native side.
            dt *= this._timeScale * timeScale;
            if (this._isAniComplete) {
              var _this$_headAniInfo;
              if (this._animationQueue.length === 0 && !this._headAniInfo) {
                var frameCache = this._animCache;
                if (frameCache && frameCache.isInvalid()) {
                  frameCache.updateToFrame(0);
                  var frames = frameCache.frames;
                  this._curFrame = frames[frames.length - 1];
                }
                return;
              }
              if (!this._headAniInfo) {
                this._headAniInfo = this._animationQueue.shift();
              }
              this._accTime += dt;
              if (this._accTime > ((_this$_headAniInfo = this._headAniInfo) === null || _this$_headAniInfo === void 0 ? void 0 : _this$_headAniInfo.delay)) {
                var aniInfo = this._headAniInfo;
                this._headAniInfo = null;
                this.setAnimation(0, aniInfo === null || aniInfo === void 0 ? void 0 : aniInfo.animationName, aniInfo === null || aniInfo === void 0 ? void 0 : aniInfo.loop);
              }
              return;
            }
            this._updateCache(dt);
          } else {
            this._instance.updateAnimation(dt);
          }
        };
        _proto._updateCache = function _updateCache(dt) {
          var frameCache = this._animCache;
          if (!frameCache.isInited()) {
            return;
          }
          var frames = frameCache.frames;
          var frameTime = SkeletonCache.FrameTime;
          // Animation Start, the event different from _customMaterial inner event,
          // It has no event object.
          if (this._accTime === 0 && this._playCount === 0) {
            this._startEntry.animation.name = this._animationName;
            if (this._listener && this._listener.start) {
              this._listener.start(this._startEntry);
            }
          }
          this._accTime += dt;
          var frameIdx = Math.floor(this._accTime / frameTime);
          if (!frameCache.isCompleted) {
            frameCache.updateToFrame(frameIdx);
          }
          this._curFrame = frames[frameIdx];
          if (this._curFrame !== undefined) {
            this.attachUtil.updateSkeletonBones(this._curFrame.boneInfos);
          }
          if (frameCache.isCompleted && frameIdx >= frames.length) {
            this._playCount++;
            if (this._playTimes > 0 && this._playCount >= this._playTimes) {
              // set frame to end frame.
              this._curFrame = frames[frames.length - 1];
              this._accTime = 0;
              this._playCount = 0;
              this._isAniComplete = true;
              this._emitCacheCompleteEvent();
              return;
            }
            this._accTime = 0;
            frameIdx = 0;
            this._curFrame = frames[frameIdx];
            this._emitCacheCompleteEvent();
          }
        };
        _proto._emitCacheCompleteEvent = function _emitCacheCompleteEvent() {
          if (!this._listener) return;
          this._endEntry.animation.name = this._animationName;
          if (this._listener.complete) this._listener.complete(this._endEntry);
          if (this._listener.end) this._listener.end(this._endEntry);
        }

        /**
         * @engineInternal
         */;
        _proto.updateRenderData = function updateRenderData() {
          if (this.isAnimationCached()) {
            if (!this._curFrame) return null;
            var model = this._curFrame.model;
            return model;
          } else {
            var _model = this._instance.updateRenderData();
            return _model;
          }
        };
        _proto._flushAssembler = function _flushAssembler() {
          var assembler = Skeleton.Assembler.getAssembler(this);
          if (this._assembler !== assembler) {
            this._assembler = assembler;
          }
          if (this._skeleton && this._assembler) {
            this._renderData = this._assembler.createData(this);
            this.markForUpdateRenderData();
            this._updateColor();
          }
        };
        _proto._render = function _render(batcher) {
          var indicesCount = 0;
          if (this.renderData && this._drawList.length > 0) {
            var rd = this.renderData;
            var chunk = rd.chunk;
            var accessor = chunk.vertexAccessor;
            var meshBuffer = rd.getMeshBuffer();
            var origin = meshBuffer.indexOffset;
            // Fill index buffer
            for (var i = 0; i < this._drawList.length; i++) {
              var dc = this._drawList.data[i];
              if (dc.texture) {
                batcher.commitMiddleware(this, meshBuffer, origin + dc.indexOffset, dc.indexCount, dc.texture, dc.material, this._enableBatch);
              }
              indicesCount += dc.indexCount;
            }
            var subIndices = rd.indices.subarray(0, indicesCount);
            accessor.appendIndices(chunk.bufferId, subIndices);
            accessor.getMeshBuffer(chunk.bufferId).setDirty();
          }
        }

        /**
         * @engineInternal
         */;
        _proto.requestDrawData = function requestDrawData(material, textureID, indexOffset, indexCount) {
          var draw = this._drawList.add();
          draw.material = material;
          if (textureID < CUSTOM_SLOT_TEXTURE_BEGIN) {
            draw.texture = this._textures[textureID];
          } else {
            var _this$_slotTextures2;
            var texture = (_this$_slotTextures2 = this._slotTextures) === null || _this$_slotTextures2 === void 0 ? void 0 : _this$_slotTextures2.get(textureID);
            if (texture) draw.texture = texture;
          }
          draw.indexOffset = indexOffset;
          draw.indexCount = indexCount;
          return draw;
        };
        _proto._updateBuiltinMaterial = function _updateBuiltinMaterial() {
          var material = builtinResMgr.get('default-spine-material');
          return material;
        }
        /**
         * @engineInternal
         */;
        _proto.updateMaterial = function updateMaterial() {
          var mat;
          if (this._customMaterial) mat = this._customMaterial;else mat = this._updateBuiltinMaterial();
          this.setSharedMaterial(mat, 0);
          this._cleanMaterialCache();
        };
        _proto.getMaterialTemplate = function getMaterialTemplate() {
          if (this.customMaterial !== null) return this.customMaterial;
          if (this.material) return this.material;
          this.updateMaterial();
          return this.material;
        };
        _proto._cleanMaterialCache = function _cleanMaterialCache() {
          for (var val in this._materialCache) {
            this._materialCache[val].destroy();
          }
          this._materialCache = {};
        }

        /**
         * @engineInternal
         */;
        _proto.getMaterialForBlendAndTint = function getMaterialForBlendAndTint(src, dst, type) {
          var key = type + "/" + src + "/" + dst;
          var inst = this._materialCache[key];
          if (inst) {
            return inst;
          }
          var material = this.getMaterialTemplate();
          var matInfo = {
            parent: material,
            subModelIdx: 0,
            owner: this
          };
          inst = new MaterialInstance(matInfo);
          this._materialCache[key] = inst;
          inst.overridePipelineStates({
            blendState: {
              blendColor: Color.WHITE,
              targets: [{
                blendEq: BlendOp.ADD,
                blendAlphaEq: BlendOp.ADD,
                blendSrc: src,
                blendDst: dst,
                blendSrcAlpha: src,
                blendDstAlpha: dst
              }]
            }
          });
          var useTwoColor = false;
          if (type === SpineMaterialType.TWO_COLORED) {
            useTwoColor = true;
          }
          var useLocal = !this._enableBatch;
          inst.recompileShaders({
            TWO_COLORED: useTwoColor,
            USE_LOCAL: useLocal
          });
          return inst;
        }

        // update animation list for editor
        ;
        _proto._updateAnimEnum = function _updateAnimEnum() {
          var animEnum;
          if (this.skeletonData) {
            animEnum = this.skeletonData.getAnimsEnum();
          } else {
            animEnum = DefaultAnimsEnum;
          }

          // reset enum type
          this._enumAnimations = Enum({});
          Object.assign(this._enumAnimations, animEnum);
          Enum.update(this._enumAnimations);
          setPropertyEnumType(this, '_animationIndex', this._enumAnimations);
        }
        // update skin list for editor
        ;
        _proto._updateSkinEnum = function _updateSkinEnum() {
          var skinEnum;
          if (this.skeletonData) {
            skinEnum = this.skeletonData.getSkinsEnum();
          } else {
            skinEnum = DefaultSkinsEnum;
          }
          this._enumSkins = Enum({});
          Object.assign(this._enumSkins, skinEnum);
          Enum.update(this._enumSkins);
          setPropertyEnumType(this, '_defaultSkinIndex', this._enumSkins);
        };
        _proto._refreshInspector = function _refreshInspector() {
          if (EDITOR_NOT_IN_PREVIEW) {
            // update inspector
            this._updateAnimEnum();
            this._updateSkinEnum();
            // TODO: refresh inspector
            // Editor.Utils.refreshSelectedInspector('node', this.node.uuid);
          }
        }

        /**
         * @en Call this method to destroy the rendering data.
         * @zh 调用该方法销毁渲染数据。
         */;
        _proto.destroyRenderData = function destroyRenderData() {
          this._drawList.reset();
          _UIRenderer.prototype.destroyRenderData.call(this);
        };
        _proto.createRenderEntity = function createRenderEntity() {
          var renderEntity = new RenderEntity(RenderEntityType.DYNAMIC);
          renderEntity.setUseLocal(true);
          return renderEntity;
        }
        /**
         * @en Mark to re-update the rendering data, usually used to force refresh the display.
         * @zh 标记重新更新渲染数据，一般用于强制刷新显示。
         */;
        _proto.markForUpdateRenderData = function markForUpdateRenderData(enable) {
          if (enable === void 0) {
            enable = true;
          }
          _UIRenderer.prototype.markForUpdateRenderData.call(this, enable);
          if (this._debugRenderer) {
            this._debugRenderer.markForUpdateRenderData(enable);
          }
        }

        /**
         * @engineInternal
         */;
        _proto.syncAttachedNode = function syncAttachedNode() {
          // sync attached node matrix
          this.attachUtil._syncAttachedNode();
        }

        /**
         * @en Whether in cached mode.
         * @zh 当前是否处于缓存模式。
         */;
        _proto.isAnimationCached = function isAnimationCached() {
          if (EDITOR_NOT_IN_PREVIEW) return false;
          return this._cacheMode !== AnimationCacheMode.REALTIME;
        }
        /**
         * @en
         * It's best to set cache mode before set property 'dragonAsset', or will waste some cpu time.
         * If set the mode in editor, then no need to worry about order problem.
         * @zh
         * 若想切换渲染模式，最好在设置'dragonAsset'之前，先设置好渲染模式，否则有运行时开销。
         * 若在编辑中设置渲染模式，则无需担心设置次序的问题。
         *
         * @example
         * skeleton.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
         */;
        _proto.setAnimationCacheMode = function setAnimationCacheMode(cacheMode) {
          if (this._preCacheMode !== cacheMode) {
            this._cacheMode = cacheMode;
            this._preCacheMode = cacheMode;
            if (this._instance) {
              this._instance.isCache = this.isAnimationCached();
            }
            this._updateSkeletonData();
            this.markForUpdateRenderData();
          }
        }

        /**
         * @en Sets the bones and slots to the setup pose.
         * @zh 还原到起始动作。
         */;
        _proto.setToSetupPose = function setToSetupPose() {
          if (this._skeleton) {
            this._skeleton.setToSetupPose();
          }
        }

        /**
         * @en
         * Sets the bones to the setup pose,
         * using the values from the `BoneData` list in the `SkeletonData`.
         * @zh
         * 设置 bone 到起始动作。
         * 使用 SkeletonData 中的 BoneData 列表中的值。
         */;
        _proto.setBonesToSetupPose = function setBonesToSetupPose() {
          if (this._skeleton) {
            this._skeleton.setBonesToSetupPose();
          }
        }

        /**
         * @en
         * Sets the slots to the setup pose,
         * using the values from the `SlotData` list in the `SkeletonData`.
         * @zh
         * 设置 slot 到起始动作。
         * 使用 SkeletonData 中的 SlotData 列表中的值。
         */;
        _proto.setSlotsToSetupPose = function setSlotsToSetupPose() {
          if (this._skeleton) {
            this._skeleton.setSlotsToSetupPose();
          }
        }

        /**
         * @en
         * Invalidates the animation cache, which is then recomputed on each frame.
         * @zh
         * 使动画缓存失效，之后会在每帧重新计算。
         * @method invalidAnimationCache
         */;
        _proto.invalidAnimationCache = function invalidAnimationCache() {
          if (!this.isAnimationCached()) return;
          if (this._skeletonCache) {
            this._skeletonCache.invalidAnimationCache(this._skeletonData.uuid);
          }
        }

        /**
         * @en
         * Finds a bone by name.
         * This does a string comparison for every bone.<br>
         * Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Bone object.
         * @zh
         * 通过名称查找 bone。
         * 这里对每个 bone 的名称进行了对比。<br>
         * 返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Bone 对象。
         *
         * @param boneName @en The name of bone. @zh 骨骼名称。
         */;
        _proto.findBone = function findBone(boneName) {
          if (this._skeleton) {
            return this._skeleton.findBone(boneName);
          }
          return null;
        }

        /**
         * @en
         * Finds a slot by name. This does a string comparison for every slot.<br>
         * Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Slot object.
         * @zh
         * 通过名称查找 slot。这里对每个 slot 的名称进行了比较。<br>
         * 返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Slot 对象。
         *
         * @param slotName @en The name of slot. @zh 插槽名称。
         */;
        _proto.findSlot = function findSlot(slotName) {
          if (this._skeleton) {
            return this._skeleton.findSlot(slotName);
          }
          return null;
        }

        // ANIMATION
        /**
         * @en
         * Mix applies all keyframe values,
         * interpolated for the specified time and mixed with the current values.
         * @zh 为所有关键帧设定混合及混合时间（从当前值开始差值）。
         * @param fromAnimation @en Mix start animation. @zh 过渡起始动画。
         * @param toAnimation @en Mix end animation. @zh 过渡结束动画。
         * @param duration @ Time of animation mix. @zh 动画过渡时间。
         */;
        _proto.setMix = function setMix(fromAnimation, toAnimation, duration) {
          if (this.isAnimationCached()) {
            warn('cached mode not support setMix!!!');
            return;
          }
          if (this._state) {
            this._instance.setMix(fromAnimation, toAnimation, duration);
            //this._state.data.setMix(fromAnimation, toAnimation, duration);
          }
        }

        /**
         * @en Clears all tracks of animation state.
         * @zh 清除所有 track 的动画状态。
         */;
        _proto.clearTracks = function clearTracks() {
          if (this.isAnimationCached()) {
            warn('\'clearTracks\' interface can not be invoked in cached mode.');
          } else if (this._state) {
            this._state.clearTracks();
            this.setToSetupPose();
          }
        }

        /**
         * @en Clears track of animation state by trackIndex.
         * @zh 清除出指定 track 的动画状态。
         * @param trackIndex @en Index of track. @zh 动画通道索引。
         */;
        _proto.clearTrack = function clearTrack(trackIndex) {
          if (this.isAnimationCached()) {
            warn('\'clearTrack\' interface can not be invoked in cached mode.');
          } else if (this._state) {
            this._state.clearTrack(trackIndex);
            if (EDITOR_NOT_IN_PREVIEW) {
              this._state.update(0);
            }
          }
        }

        /**
         * @en Computes the world SRT from the local SRT for each bone.
         * @zh 重新更新所有骨骼的世界 Transform，
         * 当获取 bone 的数值未更新时，即可使用该函数进行更新数值。
         * @example
         * var bone = spine.findBone('head');
         * cc.log(bone.worldX); // return 0;
         * spine.updateWorldTransform();
         * bone = spine.findBone('head');
         * cc.log(bone.worldX); // return -23.12;
         */;
        _proto.updateWorldTransform = function updateWorldTransform() {
          if (!this.isAnimationCached()) return;
          if (this._skeleton) {
            this._skeleton.updateWorldTransform();
          }
        };
        _proto._verifySockets = function _verifySockets(sockets) {
          for (var i = 0, l = sockets.length; i < l; i++) {
            var target = sockets[i].target;
            if (target) {
              if (!target.parent || target.parent !== this.node) {
                error("Target node " + target.name + " is expected to be a direct child of " + this.node.name);
                continue;
              }
            }
          }
          var uniqueSocketNode = new Map();
          sockets.forEach(function (x) {
            if (x.target) {
              if (uniqueSocketNode.get(x.target)) {
                error("Target node " + x.target.name + " has existed.");
              } else {
                uniqueSocketNode.set(x.target, true);
              }
            }
          });
        };
        _proto._updateSocketBindings = function _updateSocketBindings() {
          if (!this._skeleton) return;
          this._socketNodes.clear();
          for (var i = 0, l = this._sockets.length; i < l; i++) {
            var socket = this._sockets[i];
            if (socket.path && socket.target) {
              var boneIdx = this._cachedSockets.get(socket.path);
              if (!boneIdx) {
                error("Skeleton data does not contain path " + socket.path);
                continue;
              }
              this._socketNodes.set(boneIdx, socket.target);
            }
          }
        };
        _proto._indexBoneSockets = function _indexBoneSockets() {
          if (!this._skeleton) {
            return;
          }
          this._cachedSockets.clear();
          var bones = this._skeleton.bones;
          var getBoneName = function getBoneName(bone) {
            if (bone.parent == null) return bone.data.name || '<Unamed>';
            return getBoneName(bones[bone.parent.data.index]) + "/" + bone.data.name;
          };
          for (var i = 0, l = bones.length; i < l; i++) {
            var bd = bones[i].data;
            var boneName = getBoneName(bones[i]);
            this._cachedSockets.set(boneName, bd.index);
          }
        }

        /**
         * @en Query all bones that can attach sockets.
         * @zh 查询所有可以添加挂点的所有骨骼。
         * @return String typed array of bones's path.
         */;
        _proto.querySockets = function querySockets() {
          if (!this._skeleton) {
            return [];
          }
          if (this._cachedSockets.size === 0) {
            this._indexBoneSockets();
          }
          if (this._cachedSockets.size > 0) {
            return Array.from(this._cachedSockets.keys()).sort();
          }
          return [];
        }

        // if change use tint mode, just clear material cache
        ;
        _proto._updateUseTint = function _updateUseTint() {
          this._cleanMaterialCache();
          this.destroyRenderData();
          if (!JSB) {
            if (!this.isAnimationCached()) {
              this._instance.setUseTint(this._useTint);
            }
          }
          if (this._assembler && this._skeleton) {
            this._renderData = this._assembler.createData(this);
            this.markForUpdateRenderData();
          }
        }

        // if change use batch mode, just clear material cache
        ;
        _proto._updateBatch = function _updateBatch() {
          this._cleanMaterialCache();
          this.markForUpdateRenderData();
        };
        _proto._updateDebugDraw = function _updateDebugDraw() {
          if (this.debugBones || this.debugSlots || this.debugMesh) {
            if (!this._debugRenderer) {
              var debugDrawNode = new Node('DEBUG_DRAW_NODE');
              debugDrawNode.layer = this.node.layer;
              debugDrawNode.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
              var debugDraw = debugDrawNode.addComponent(Graphics);
              debugDraw.lineWidth = 5;
              debugDraw.strokeColor = new Color(255, 0, 0, 255);
              this._debugRenderer = debugDraw;
              debugDrawNode.parent = this.node;
              this.node.on(NodeEventType.LAYER_CHANGED, this._applyLayer, this);
            }
            if (this.isAnimationCached()) {
              warn('Debug bones or slots is invalid in cached mode');
            } else if (!JSB) {
              this._instance.setDebugMode(true);
            }
          } else if (this._debugRenderer) {
            this.node.off(NodeEventType.LAYER_CHANGED, this._applyLayer, this);
            this._debugRenderer.node.destroy();
            this._debugRenderer = null;
            if (!this.isAnimationCached()) {
              if (this._instance) {
                this._instance.setDebugMode(false);
              }
            }
          }
        };
        _proto._updateUITransform = function _updateUITransform() {
          var uiTrans = this.node._uiProps.uiTransformComp;
          var skeletonData = this._runtimeData;
          if (!skeletonData) {
            uiTrans.setContentSize(100, 100);
            uiTrans.anchorX = 0.5;
            uiTrans.anchorX = 0.5;
            return;
          }
          var width = skeletonData.width;
          var height = skeletonData.height;
          if (width && height) {
            uiTrans.setContentSize(width, height);
            if (width !== 0) uiTrans.anchorX = Math.abs(skeletonData.x) / width;
            if (height !== 0) uiTrans.anchorY = Math.abs(skeletonData.y) / height;
          }
        }

        /**
         * @engineInternal
         */;
        _proto._updateColor = function _updateColor() {
          var a = this.node._uiProps.opacity;
          // eslint-disable-next-line max-len
          if (this._tempColor.r === this._color.r && this._tempColor.g === this.color.g && this._tempColor.b === this.color.b && this._tempColor.a === a) {
            return;
          }
          this.node._uiProps.colorDirty = true;
          this._tempColor.r = this._color.r;
          this._tempColor.g = this._color.g;
          this._tempColor.b = this._color.b;
          this._tempColor.a = a;
          var r = this._color.r / 255.0;
          var g = this._color.g / 255.0;
          var b = this._color.b / 255.0;
          this._instance.setColor(r, g, b, a);
        }

        /**
         * @en Sets vertex effect delegate.
         * @zh 设置顶点特效动画代理。
         * @param effectDelegate @en Vertex effect delegate. @zh 顶点特效代理。
         */;
        _proto.setVertexEffectDelegate = function setVertexEffectDelegate(effectDelegate) {
          if (!this._instance) {
            return;
          }
          if (!effectDelegate) {
            this._instance.clearEffect();
            return;
          }
          var effectType = effectDelegate === null || effectDelegate === void 0 ? void 0 : effectDelegate.getEffectType();
          if (effectType === 'jitter') {
            var jitterEffect = effectDelegate === null || effectDelegate === void 0 ? void 0 : effectDelegate.getJitterVertexEffect();
            this._instance.setJitterEffect(jitterEffect);
          } else if (effectType === 'swirl') {
            var swirlEffect = effectDelegate === null || effectDelegate === void 0 ? void 0 : effectDelegate.getJitterVertexEffect();
            this._instance.setSwirlEffect(swirlEffect);
          }
        };
        _proto._ensureListener = function _ensureListener() {
          if (!this._listener) {
            this._listener = new TrackEntryListeners();
          }
        }

        /**
         * @en Sets the start event listener.
         * @zh 用来设置开始播放动画的事件监听。
         * @param listener @en Listener for registering callback functions. @zh 监听器对象，可注册回调方法。
         */;
        _proto.setStartListener = function setStartListener(listener) {
          this._ensureListener();
          var listenerID = TrackEntryListeners.addListener(listener);
          this._instance.setListener(listenerID, spine.EventType.start);
          this._listener.start = listener;
        }

        /**
         * @en Sets the interrupt event listener.
         * @zh 用来设置动画被打断的事件监听。
         * @param listener @en Listener for registering callback functions. @zh 监听器对象，可注册回调方法。
         */;
        _proto.setInterruptListener = function setInterruptListener(listener) {
          this._ensureListener();
          var listenerID = TrackEntryListeners.addListener(listener);
          this._instance.setListener(listenerID, spine.EventType.interrupt);
          this._listener.interrupt = listener;
        }

        /**
         * @en Sets the end event listener.
         * @zh 用来设置动画播放完后的事件监听。
         * @param listener @en Listener for registering callback functions. @zh 监听器对象，可注册回调方法。
         */;
        _proto.setEndListener = function setEndListener(listener) {
          this._ensureListener();
          var listenerID = TrackEntryListeners.addListener(listener);
          this._instance.setListener(listenerID, spine.EventType.end);
          this._listener.end = listener;
        }

        /**
         * @en Sets the dispose event listener.
         * @zh 用来设置动画将被销毁的事件监听。
         * @param listener @en Listener for registering callback functions. @zh 监听器对象，可注册回调方法。
         */;
        _proto.setDisposeListener = function setDisposeListener(listener) {
          this._ensureListener();
          var listenerID = TrackEntryListeners.addListener(listener);
          this._instance.setListener(listenerID, spine.EventType.dispose);
          this._listener.dispose = listener;
        }

        /**
         * @en Sets the complete event listener.
         * @zh 用来设置动画播放一次循环结束后的事件监听。
         * @param listener @en Listener for registering callback functions. @zh 监听器对象，可注册回调方法。
         */;
        _proto.setCompleteListener = function setCompleteListener(listener) {
          this._ensureListener();
          var listenerID = TrackEntryListeners.addListener(listener);
          this._instance.setListener(listenerID, spine.EventType.complete);
          this._listener.complete = listener;
        }

        /**
         * @en Sets the animation event listener.
         * @zh 用来设置动画播放过程中帧事件的监听。
         * @param listener @en Listener for registering callback functions. @zh 监听器对象，可注册回调方法。
         */;
        _proto.setEventListener = function setEventListener(listener) {
          this._ensureListener();
          var listenerID = TrackEntryListeners.addListener(listener);
          this._instance.setListener(listenerID, spine.EventType.event);
          this._listener.event = listener;
        }

        /**
         * @en Sets the start event listener for specified TrackEntry.
         * @zh 用来为指定的 TrackEntry 设置动画开始播放的事件监听。
         * @param entry @en Animation track entry. @zh Track entry。
         * @param listener @en Listener for registering callback functions. @zh 监听器对象，可注册回调方法。
         */;
        _proto.setTrackStartListener = function setTrackStartListener(entry, listener) {
          TrackEntryListeners.getListeners(entry, this._instance).start = listener;
        }

        /**
         * @en Sets the interrupt event listener for specified TrackEntry.
         * @zh 用来为指定的 TrackEntry 设置动画被打断的事件监听。
         * @param entry
         * @param listener @en Listener for registering callback functions. @zh 监听器对象，可注册回调方法。
         */;
        _proto.setTrackInterruptListener = function setTrackInterruptListener(entry, listener) {
          TrackEntryListeners.getListeners(entry, this._instance).interrupt = listener;
        }

        /**
         * @en Sets the end event listener for specified TrackEntry.
         * @zh 用来为指定的 TrackEntry 设置动画播放结束的事件监听。
         * @param entry
         * @param listener @en Listener for registering callback functions. @zh 监听器对象，可注册回调方法。
         */;
        _proto.setTrackEndListener = function setTrackEndListener(entry, listener) {
          TrackEntryListeners.getListeners(entry, this._instance).end = listener;
        }

        /**
         * @en Sets the dispose event listener for specified TrackEntry.
         * @zh 用来为指定的 TrackEntry 设置动画即将被销毁的事件监听。
         * @param entry
         * @param listener @en Listener for registering callback functions. @zh 监听器对象，可注册回调方法。
         */;
        _proto.setTrackDisposeListener = function setTrackDisposeListener(entry, listener) {
          TrackEntryListeners.getListeners(entry, this._instance).dispose = listener;
        }

        /**
         * @en Sets the complete event listener for specified TrackEntry.
         * @zh 用来为指定的 TrackEntry 设置动画一次循环播放结束的事件监听。
         * @param entry @en AnimationState track. @zn 动画轨道属性。
         * @param listener @en Listener for registering callback functions. @zh 监听器对象，可注册回调方法。
         */;
        _proto.setTrackCompleteListener = function setTrackCompleteListener(entry, listener) {
          var onComplete = function onComplete(trackEntry) {
            var loopCount = Math.floor(trackEntry.trackTime / trackEntry.animationEnd);
            var listenerID = TrackEntryListeners.addListener(listener);
            listener(trackEntry, loopCount);
            // this._instance.setListener(listenerID, spine.EventType.event);
            // this._listener!.event = listener;
          };

          TrackEntryListeners.getListeners(entry, this._instance).complete = onComplete;
        }

        /**
         * @en Sets the event listener for specified TrackEntry.
         * @zh 用来为指定的 TrackEntry 设置动画帧事件的监听。
         * @param entry
         * @param listener @en Listener for registering callback functions. @zh 监听器对象，可注册回调方法。
         */;
        _proto.setTrackEventListener = function setTrackEventListener(entry, listener) {
          TrackEntryListeners.getListeners(entry, this._instance).event = listener;
        }

        /**
         * @engineInternal
        */;
        _proto.getDebugShapes = function getDebugShapes() {
          return this._instance.getDebugShapes();
        }

        /**
         * @en Set texture for slot, this function can be use to changing local skin.
         * @zh 为 slot 设置贴图纹理，可使用该该方法实现局部换装功能。
         * @param slotName @en The name of slot. @zh Slot 名字。
         * @param tex2d @en The texture will show on the slot. @zh 在该 Slot 上显示的 2D 纹理。
         * @param createNew @en Whether to create new Attachment. If value is false, all sp.Skeleton share the
         * same attachment will be changed. @zh 是否需要创建新的 attachment，如果值为 false, 所有共享相同 attachment
         * 的组件都将受影响。
         */;
        _proto.setSlotTexture = function setSlotTexture(slotName, tex2d, createNew) {
          if (this.isAnimationCached()) {
            error("Cached mode can't change texture of slot");
            return;
          }
          var slot = this.findSlot(slotName);
          if (!slot) {
            error("No slot named:" + slotName);
            return;
          }
          var width = tex2d.width;
          var height = tex2d.height;
          var createNewAttachment = createNew || false;
          this._instance.resizeSlotRegion(slotName, width, height, createNewAttachment);
          if (!this._slotTextures) this._slotTextures = new Map();
          var textureID = 0;
          this._slotTextures.forEach(function (value, key) {
            if (value === tex2d) textureID = key;
          });
          if (textureID === 0) {
            textureID = ++_slotTextureID;
            this._slotTextures.set(textureID, tex2d);
          }
          this._instance.setSlotTexture(slotName, textureID);
        };
        _proto._destroySkeletonInfo = function _destroySkeletonInfo(skeletonCache) {
          if (skeletonCache && this._skeletonInfo) {
            skeletonCache.destroySkeleton(this._skeletonInfo.assetUUID);
            this._skeletonInfo = null;
          }
        };
        _proto._applyLayer = function _applyLayer() {
          if (this._debugRenderer) {
            this._debugRenderer.node.layer = this.node.layer;
          }
        };
        _createClass(Skeleton, [{
          key: "drawList",
          get: function get() {
            return this._drawList;
          }

          /**
           * @en
           * The skeleton data contains the skeleton information (bind pose bones, slots, draw order,
           * attachments, skins, etc) and animations but does not hold any state.<br/>
           * Multiple skeletons can share the same skeleton data.
           * @zh
           * 骨骼数据包含了骨骼信息（绑定骨骼动作，slots，渲染顺序，
           * attachments，皮肤等等）和动画但不持有任何状态。<br/>
           * 多个 Skeleton 可以共用相同的骨骼数据。
           * @property {sp.SkeletonData} skeletonData
           */
        }, {
          key: "skeletonData",
          get: function get() {
            return this._skeletonData;
          },
          set: function set(value) {
            if (value) value.resetEnums();
            if (this._skeletonData !== value) {
              this.destroyRenderData();
              this._skeletonData = value;
              this.defaultSkin = '';
              this.defaultAnimation = '';
              this._animationName = '';
              this._skinName = '';
              this._updateSkeletonData();
              this._updateUITransform();
            }
          }

          /**
           * @engineInternal
           */
        }, {
          key: "_defaultSkinIndex",
          get: function get() {
            if (this.skeletonData) {
              var skinsEnum = this.skeletonData.getSkinsEnum();
              if (skinsEnum) {
                if (this.defaultSkin === '') {
                  // eslint-disable-next-line no-prototype-builtins
                  if (skinsEnum.hasOwnProperty(0)) {
                    this._defaultSkinIndex = 0;
                    return 0;
                  }
                } else {
                  var skinIndex = skinsEnum[this.defaultSkin];
                  if (skinIndex !== undefined) {
                    return skinIndex;
                  }
                }
              }
            }
            return 0;
          }
          /**
           * @engineInternal
           */,
          set: function set(value) {
            var skinsEnum;
            if (this.skeletonData) {
              skinsEnum = this.skeletonData.getSkinsEnum();
            }
            if (!skinsEnum) {
              error(this.name + " skin enums are invalid");
              return;
            }
            var skinName = skinsEnum[value];
            if (skinName !== undefined) {
              this.defaultSkin = String(skinName);
              this.setSkin(this.defaultSkin);
              this._refreshInspector();
              this.markForUpdateRenderData();
            } else {
              error(this.name + " skin enums are invalid");
            }
          }

          // value of 0 represents no animation
          /**
           * @engineInternal
           */
        }, {
          key: "_animationIndex",
          get: function get() {
            var animationName = EDITOR_NOT_IN_PREVIEW ? this.defaultAnimation : this.animation;
            if (this.skeletonData) {
              if (animationName) {
                var animsEnum = this.skeletonData.getAnimsEnum();
                if (animsEnum) {
                  var animIndex = animsEnum[animationName];
                  if (animIndex !== undefined) {
                    return animIndex;
                  }
                }
              } else {
                this._refreshInspector();
              }
            }
            return 0;
          }
          /**
           * @engineInternal
           */,
          set: function set(value) {
            var animsEnum;
            if (this.skeletonData) {
              animsEnum = this.skeletonData.getAnimsEnum();
            }
            if (!animsEnum) {
              error(this.name + " animation enums are invalid");
              return;
            }
            var animName = String(animsEnum[value]);
            if (animName !== undefined) {
              this.animation = animName;
              if (EDITOR_NOT_IN_PREVIEW) {
                this.defaultAnimation = animName;
                this._refreshInspector();
              } else {
                this.animation = animName;
              }
            } else {
              error(this.name + " animation enums are invalid");
            }
          }

          /**
           * @en Animation mode, with options for real-time mode, private cached, or public cached mode.
           * @zh 动画模式，可选实时模式，私有 cached 或公共 cached 模式。
           */
        }, {
          key: "defaultCacheMode",
          get: function get() {
            return this._cacheMode;
          },
          set: function set(mode) {
            this._cacheMode = mode;
            this.setAnimationCacheMode(this._cacheMode);
          }

          /**
           * @en Whether premultipliedAlpha enabled.
           * @zh 是否启用 alpha 预乘。
           */
        }, {
          key: "premultipliedAlpha",
          get: function get() {
            return this._premultipliedAlpha;
          },
          set: function set(v) {
            if (v !== this._premultipliedAlpha) {
              this._premultipliedAlpha = v;
              this._instance.setPremultipliedAlpha(v);
              this.markForUpdateRenderData();
            }
          }
        }, {
          key: "timeScale",
          get:
          /**
           * @en The time scale of this skeleton.
           * @zh 当前骨骼中所有动画的时间缩放率。
           */
          function get() {
            return this._timeScale;
          },
          set: function set(value) {
            if (value !== this._timeScale) {
              this._timeScale = value;
              if (this._instance) {
                this._instance.dtRate = this._timeScale * timeScale;
              }
            }
          }
          /**
           * @en Enabled two color tint.
           * @zh 是否启用染色效果。
           */
        }, {
          key: "useTint",
          get: function get() {
            return this._useTint;
          },
          set: function set(value) {
            if (value !== this._useTint) {
              this._useTint = value;
              this._updateUseTint();
            }
          }

          /**
           * @en If rendering a large number of identical textures and simple skeletal animations,
           * enabling batching can reduce the number of draw calls and improve rendering performance.
           * @zh 如果渲染大量相同纹理，且结构简单的骨骼动画，开启合批可以降低 draw call 数量提升渲染性能。
           */
        }, {
          key: "enableBatch",
          get: function get() {
            return this._enableBatch;
          },
          set: function set(value) {
            if (value !== this._enableBatch) {
              this._enableBatch = value;
              this._updateBatch();
            }
          }
          /**
           * @en
           * The bone sockets this animation component maintains.<br>
           * A SpineSocket object contains a path reference to bone, and a target node.
           * @zh
           * 当前动画组件维护的挂点数组。一个挂点组件包括动画节点路径和目标节点。
           */
        }, {
          key: "sockets",
          get: function get() {
            return this._sockets;
          },
          set: function set(val) {
            if (EDITOR_NOT_IN_PREVIEW) {
              this._verifySockets(val);
            }
            this._sockets = val;
            this._updateSocketBindings();
            this.attachUtil.init(this);
          }

          /**
           * @en Indicates whether open debug slots.
           * @zh 是否显示 slot 的 debug 信息。
           */
        }, {
          key: "debugSlots",
          get: function get() {
            return this._debugSlots;
          },
          set: function set(v) {
            if (v !== this._debugSlots) {
              this._debugSlots = v;
              this._updateDebugDraw();
              this.markForUpdateRenderData();
            }
          }

          /**
           * @en Indicates whether open debug bones.
           * @zh 是否显示 bone 的 debug 信息。
           */
        }, {
          key: "debugBones",
          get: function get() {
            return this._debugBones;
          },
          set: function set(v) {
            if (v !== this._debugBones) {
              this._debugBones = v;
              this._updateDebugDraw();
              this.markForUpdateRenderData();
            }
          }

          /**
           * @en Indicates whether open debug mesh.
           * @zh 是否显示 mesh 的 debug 信息。
           */
        }, {
          key: "debugMesh",
          get: function get() {
            return this._debugMesh;
          },
          set: function set(value) {
            if (value !== this._debugMesh) {
              this._debugMesh = value;
              this._updateDebugDraw();
              this.markForUpdateRenderData();
            }
          }
        }, {
          key: "socketNodes",
          get: function get() {
            return this._socketNodes;
          }

          /**
           * @en The name of current playing animation.
           * @zh 当前播放的动画名称。
           * @property {String} animation
           */
        }, {
          key: "animation",
          get: function get() {
            return this._animationName;
          },
          set: function set(value) {
            if (value) {
              this.setAnimation(0, value, this.loop);
            } else {
              this.clearAnimation(0);
            }
          }

          /**
           * @en The customMaterial。
           * @zh 用户自定材质。
           */
        }, {
          key: "customMaterial",
          get: function get() {
            return this._customMaterial;
          },
          set: function set(val) {
            this._customMaterial = val;
            this.updateMaterial();
            this.markForUpdateRenderData();
          }
        }]);
        return Skeleton;
      }(UIRenderer), _class6.SpineSocket = SpineSocket, _class6.AnimationCacheMode = AnimationCacheMode, _class6), (_initializer3 = _applyDecoratedInitializer(_class5.prototype, "_skeletonData", [serializable], function () {
        return null;
      }), _initializer4 = _applyDecoratedInitializer(_class5.prototype, "defaultSkin", [serializable], function () {
        return '';
      }), _initializer5 = _applyDecoratedInitializer(_class5.prototype, "defaultAnimation", [serializable], function () {
        return '';
      }), _initializer6 = _applyDecoratedInitializer(_class5.prototype, "_premultipliedAlpha", [serializable], function () {
        return true;
      }), _initializer7 = _applyDecoratedInitializer(_class5.prototype, "_timeScale", [serializable], function () {
        return 1;
      }), _initializer8 = _applyDecoratedInitializer(_class5.prototype, "_preCacheMode", [serializable], function () {
        return AnimationCacheMode.UNSET;
      }), _initializer9 = _applyDecoratedInitializer(_class5.prototype, "_cacheMode", [serializable], function () {
        return AnimationCacheMode.REALTIME;
      }), _initializer10 = _applyDecoratedInitializer(_class5.prototype, "_sockets", [serializable], function () {
        return [];
      }), _initializer11 = _applyDecoratedInitializer(_class5.prototype, "_useTint", [serializable], function () {
        return false;
      }), _initializer12 = _applyDecoratedInitializer(_class5.prototype, "_debugMesh", [serializable], function () {
        return false;
      }), _initializer13 = _applyDecoratedInitializer(_class5.prototype, "_debugBones", [serializable], function () {
        return false;
      }), _initializer14 = _applyDecoratedInitializer(_class5.prototype, "_debugSlots", [serializable], function () {
        return false;
      }), _initializer15 = _applyDecoratedInitializer(_class5.prototype, "_enableBatch", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class5.prototype, "skeletonData", [editable, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class5.prototype, "skeletonData"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "_defaultSkinIndex", [_dec8, _dec9, _dec10], Object.getOwnPropertyDescriptor(_class5.prototype, "_defaultSkinIndex"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "_animationIndex", [_dec11, _dec12, _dec13], Object.getOwnPropertyDescriptor(_class5.prototype, "_animationIndex"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "defaultCacheMode", [_dec14, _dec15, editable, _dec16], Object.getOwnPropertyDescriptor(_class5.prototype, "defaultCacheMode"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "premultipliedAlpha", [editable, _dec17], Object.getOwnPropertyDescriptor(_class5.prototype, "premultipliedAlpha"), _class5.prototype), _initializer16 = _applyDecoratedInitializer(_class5.prototype, "loop", [serializable, _dec18], function () {
        return true;
      }), _applyDecoratedDescriptor(_class5.prototype, "timeScale", [_dec19, editable], Object.getOwnPropertyDescriptor(_class5.prototype, "timeScale"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "useTint", [editable, _dec20], Object.getOwnPropertyDescriptor(_class5.prototype, "useTint"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "enableBatch", [editable, _dec21], Object.getOwnPropertyDescriptor(_class5.prototype, "enableBatch"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "sockets", [_dec22, _dec23], Object.getOwnPropertyDescriptor(_class5.prototype, "sockets"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "debugSlots", [editable, _dec24], Object.getOwnPropertyDescriptor(_class5.prototype, "debugSlots"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "debugBones", [editable, _dec25], Object.getOwnPropertyDescriptor(_class5.prototype, "debugBones"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "debugMesh", [editable, _dec26], Object.getOwnPropertyDescriptor(_class5.prototype, "debugMesh"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "customMaterial", [override, _dec27, _dec28, _dec29], Object.getOwnPropertyDescriptor(_class5.prototype, "customMaterial"), _class5.prototype)), _class5)) || _class4) || _class4) || _class4) || _class4));
      legacyCC.internal.SpineSkeleton = Skeleton;
    }
  };
});