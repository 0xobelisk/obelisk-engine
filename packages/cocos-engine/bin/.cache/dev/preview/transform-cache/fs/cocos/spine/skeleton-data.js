System.register("q-bundled:///fs/cocos/spine/skeleton-data.js", ["../../../virtual/internal%253Aconstants.js", "../core/index.js", "./skeleton-cache.js", "./lib/spine-core.js", "../core/data/decorators/index.js", "../core/global-exports.js", "../asset/assets/index.js", "../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, CCString, Enum, error, SkeletonCache, spine, ccclass, serializable, type, legacyCC, Texture2D, Asset, Node, _dec, _dec2, _dec3, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, SkeletonData;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_coreIndexJs) {
      CCString = _coreIndexJs.CCString;
      Enum = _coreIndexJs.Enum;
      error = _coreIndexJs.error;
    }, function (_skeletonCacheJs) {
      SkeletonCache = _skeletonCacheJs.default;
    }, function (_libSpineCoreJs) {
      spine = _libSpineCoreJs.default;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_assetAssetsIndexJs) {
      Texture2D = _assetAssetsIndexJs.Texture2D;
      Asset = _assetAssetsIndexJs.Asset;
    }, function (_sceneGraphIndexJs) {
      Node = _sceneGraphIndexJs.Node;
    }],
    execute: function () {
      /**
       * @en The skeleton data of spine.
       * @zh Spine 的骨骼数据。
       * @class SkeletonData
       * @extends Asset
       */
      _export("SkeletonData", SkeletonData = (_dec = ccclass('sp.SkeletonData'), _dec2 = type([Texture2D]), _dec3 = type([CCString]), _dec(_class = (_class2 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(SkeletonData, _Asset);
        function SkeletonData() {
          var _this;
          _this = _Asset.call(this) || this;
          /**
           * @en See http://en.esotericsoftware.com/spine-json-format
           * @zh 可查看 Spine 官方文档 http://zh.esotericsoftware.com/spine-json-format
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._skeletonJson = _initializer && _initializer();
          /**
           * @en Texture array.
           * @zh 纹理数组。
           */
          _this.textures = _initializer2 && _initializer2();
          /**
           * @en Texture name array.
           * @zh 纹理名称数组。
           * @private
           */
          _this.textureNames = _initializer3 && _initializer3();
          /**
           * @en
           * A scale can be specified on the JSON or binary loader which will scale the bone positions,
           * image sizes, and animation translations.
           * This can be useful when using different sized images than were used when design ing the skeleton
           * in Spine. For example, if using images that are half the size than were used in Spine,
           * a scale of 0.5 can be used. This is commonly used for games that can run with either low or high
           * resolution texture atlases.
           * see http://en.esotericsoftware.com/spine-using-runtimes#Scaling
           * @zh 在 JSON 或二进制加载器上可以指定一个缩放比例，该缩放比例将缩放骨头位置、图像大小和动画平移。
           * 这在使用与 Spine 中设计骨架不同大小的图像时非常有用。例如，如果使用的图像大小是 Spine 中使用的
           * 图像大小的一半，可以使用 0.5 的缩放比例。这在游戏中经常使用，因为游戏可以使用低分辨率或高分辨率
           * 的纹理图集。可查看 Spine 官方文档：
           * http://zh.esotericsoftware.com/spine-using-runtimes#Scaling
           */
          _this.scale = _initializer4 && _initializer4();
          /**
           * @en A string describing atlas.
           * @zh 描述图集信息的字符串。
           */
          _this._atlasText = _initializer5 && _initializer5();
          _this._buffer = void 0;
          _this._skeletonCache = null;
          _this._skinsEnum = null;
          _this._animsEnum = null;
          _this.reset();
          return _this;
        }

        /**
         * @internal
         * @deprecated Since v3.7.2, this is an engine private interface that will be removed in the future.
         */
        var _proto = SkeletonData.prototype;
        _proto.createNode = function createNode(callback) {
          var node = new Node(this.name);
          var skeleton = node.addComponent('cc.Skeleton');
          skeleton.skeletonData = this;
          return callback(null, node);
        }
        /**
         * @en Resets skeleton data state.
         * @zh 重置数据。
         */;
        _proto.reset = function reset() {
          this._skeletonCache = null;
          if (EDITOR_NOT_IN_PREVIEW) {
            this._skinsEnum = null;
            this._animsEnum = null;
          }
        }
        /**
         * @internal Since v3.7.2, this is an engine private function, only works in editor.
         * @en Reset skeleton skin and animation enumeration.
         * @zh 重置皮肤和动画枚举。
         */;
        _proto.resetEnums = function resetEnums() {
          if (EDITOR_NOT_IN_PREVIEW) {
            this._skinsEnum = null;
            this._animsEnum = null;
          }
        }

        /**
         * @en Gets the included SkeletonData used in spine runtime.<br>
         * Returns a sp.spine.SkeletonData object.
         * @zh 获取 Spine Runtime 使用的 SkeletonData。<br>
         * 返回一个 p.spine.SkeletonData 对象。
         * @param quiet @en If vaulue is false, feedback information will be printed when an error occurs.
         *              @zh 值为 false 时，当发生错误时将打印出反馈信息。
         */;
        _proto.getRuntimeData = function getRuntimeData(quiet) {
          if (this._skeletonCache) {
            return this._skeletonCache;
          }
          if (!(this.textures && this.textures.length > 0) && this.textureNames && this.textureNames.length > 0) {
            if (!quiet) {
              error(this.name + " no textures found!");
            }
            return null;
          }
          var spData = spine.wasmUtil.querySpineSkeletonDataByUUID(this._uuid);
          if (spData) {
            this._skeletonCache = spData;
          } else if (this.skeletonJsonStr) {
            this._skeletonCache = spine.wasmUtil.createSpineSkeletonDataWithJson(this.skeletonJsonStr, this._atlasText);
            spine.wasmUtil.registerSpineSkeletonDataWithUUID(this._skeletonCache, this._uuid);
          } else {
            var rawData = new Uint8Array(this._nativeAsset);
            var byteSize = rawData.length;
            var ptr = spine.wasmUtil.queryStoreMemory(byteSize);
            var wasmMem = spine.wasmUtil.wasm.HEAPU8.subarray(ptr, ptr + byteSize);
            wasmMem.set(rawData);
            this._skeletonCache = spine.wasmUtil.createSpineSkeletonDataWithBinary(byteSize, this._atlasText);
            spine.wasmUtil.registerSpineSkeletonDataWithUUID(this._skeletonCache, this._uuid);
          }
          return this._skeletonCache;
        }

        /**
         * @internal Since v3.7.2, this is an engine private function, it only works in editor.
         */;
        _proto.getSkinsEnum = function getSkinsEnum() {
          if (this._skinsEnum /* && Object.keys(this._skinsEnum).length > 0 */) {
            return this._skinsEnum;
          }
          var sd = this.getRuntimeData(true);
          if (sd) {
            var skins = sd.skins;
            var enumDef = {};
            for (var i = 0; i < skins.length; i++) {
              var name = skins[i].name;
              enumDef[name] = i;
            }
            return this._skinsEnum = Enum(enumDef);
          }
          return null;
        }
        /**
         * @internal Since v3.7.2, this is an engine private function, it only works in editor.
         */;
        _proto.getAnimsEnum = function getAnimsEnum() {
          if (this._animsEnum && Object.keys(this._animsEnum).length > 1) {
            return this._animsEnum;
          }
          var sd = this.getRuntimeData(true);
          if (sd) {
            var enumDef = {
              '<None>': 0
            };
            var anims = sd.animations;
            for (var i = 0; i < anims.length; i++) {
              var name = anims[i].name;
              enumDef[name] = i + 1;
            }
            return this._animsEnum = Enum(enumDef);
          }
          return null;
        }
        /**
         * @en Destroy skeleton data.
         * @zh 销毁 skeleton data。
         */;
        _proto.destroy = function destroy() {
          SkeletonCache.sharedCache.destroyCachedAnimations(this._uuid);
          if (this._skeletonCache) {
            spine.wasmUtil.registerSpineSkeletonDataWithUUID(this._skeletonCache, this._uuid);
          }
          return _Asset.prototype.destroy.call(this);
        };
        _createClass(SkeletonData, [{
          key: "skeletonJsonStr",
          get:
          /**
           * @en A string parsed from the _skeletonJson.
           * @zh 从 _skeletonJson 中解析出的字符串。
           */
          function get() {
            if (this._skeletonJson) {
              return JSON.stringify(this._skeletonJson);
            }
            return '';
          }

          /**
           * @en See http://en.esotericsoftware.com/spine-json-format
           * @zh 可查看 Spine 官方文档 http://zh.esotericsoftware.com/spine-json-format
           */
        }, {
          key: "skeletonJson",
          get: function get() {
            return this._skeletonJson;
          },
          set: function set(value) {
            this.reset();
            if (typeof value === 'string') {
              this._skeletonJson = JSON.parse(value);
            } else {
              this._skeletonJson = value;
            }
            // If create by manual, uuid is empty.
            if (!this._uuid && value.skeleton) {
              this._uuid = value.skeleton.hash;
            }
          }

          /**
           * @en An atlas text description.
           * @zh Atlas 文本描述。
           */
        }, {
          key: "atlasText",
          get: function get() {
            return this._atlasText;
          },
          set: function set(value) {
            this._atlasText = value;
            this.reset();
          }
        }, {
          key: "_nativeAsset",
          get:
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._buffer;
          },
          set: function set(bin) {
            this._buffer = bin;
            this.reset();
          }
        }]);
        return SkeletonData;
      }(Asset), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_skeletonJson", [serializable], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "textures", [serializable, _dec2], function () {
        return [];
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "textureNames", [serializable, _dec3], function () {
        return [];
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "scale", [serializable], function () {
        return 1;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_atlasText", [serializable], function () {
        return '';
      })), _class2)) || _class));
      legacyCC.internal.SpineSkeletonData = SkeletonData;
    }
  };
});