System.register("q-bundled:///fs/cocos/asset/assets/asset.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "../asset-manager/helper.js"], function (_export, _context) {
  "use strict";

  var EDITOR, PREVIEW, _decorator, Eventify, path, debug, getError, CCObject, cclegacy, getUrlWithUuid, _dec, _class, _class2, _initializer, ccclass, serializable, property, Asset;
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
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      PREVIEW = _virtualInternal253AconstantsJs.PREVIEW;
    }, function (_coreIndexJs) {
      _decorator = _coreIndexJs._decorator;
      Eventify = _coreIndexJs.Eventify;
      path = _coreIndexJs.path;
      debug = _coreIndexJs.debug;
      getError = _coreIndexJs.getError;
      CCObject = _coreIndexJs.CCObject;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_assetManagerHelperJs) {
      getUrlWithUuid = _assetManagerHelperJs.getUrlWithUuid;
    }],
    execute: function () {
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      property = _decorator.property;
      /**
       * @en
       * Base class for handling assets used in Creator.<br/>
       *
       * You may want to override:<br/>
       * - createNode<br/>
       * - getset functions of _nativeAsset<br/>
       * - `Object._serialize`<br/>
       * - `Object._deserialize`<br/>
       * @zh
       * Creator 中的资源基类。<br/>
       *
       * 您可能需要重写：<br/>
       * - createNode <br/>
       * - _nativeAsset 的 getset 方法<br/>
       * - `Object._serialize`<br/>
       * - `Object._deserialize`<br/>
       *
       * @class Asset
       * @extends CCObject
       */
      _export("Asset", Asset = (_dec = ccclass('cc.Asset'), _dec(_class = (_class2 = /*#__PURE__*/function (_Eventify) {
        _inheritsLoose(Asset, _Eventify);
        /**
         * 应 AssetDB 要求提供这个方法。
         * @internal
         * @method deserialize
         * @param {String} data
         * @return {Asset}
         */
        Asset.deserialize = function deserialize(data) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return cclegacy.deserialize(data);
        }

        /**
         * @en
         * Whether the asset is loaded or not
         * @zh
         * 该资源是否已经成功加载。
         *
         * @deprecated since v3.3
         */;

        function Asset() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Eventify.call.apply(_Eventify, [this].concat(args)) || this;
          _this.loaded = true;
          /**
           * @en
           * Serializable url for native asset. For internal usage.
           * @zh
           * 用于本机资产的可序列化URL。供内部使用。
           * @default ""
           *
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._native = _initializer && _initializer();
          /**
           * @en
           * Path to native dependency.
           * @zh
           * 原生依赖的路径。
           *
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          _this._nativeUrl = '';
          _this._file = null;
          _this._ref = 0;
          Object.defineProperty(_assertThisInitialized(_this), '_uuid', {
            value: '',
            writable: true
            // enumerable is false by default, to avoid uuid being assigned to empty string during destroy
          });

          if (EDITOR || PREVIEW) {
            Object.defineProperty(_assertThisInitialized(_this), 'isDefault', {
              value: false,
              writable: true
            });
          }
          return _this;
        }

        /**
         * @en
         * Returns the string representation of the object.<br>
         * The `Asset` object overrides the `toString()` method of the `Object` object.<br>
         * JavaScript calls the toString() method automatically<br>
         * when an asset is to be represented as a text value or when a texture is referred to in a string concatenation.<br>
         * <br>
         * For assets of the native type, it will return `this.nativeUrl`.<br>
         * Otherwise, an empty string is returned.<br>
         * This method may be overwritten by subclasses.
         * @zh
         * 返回对象的字符串表示形式。<br>
         * `Asset` 对象将会重写 `Object` 对象的 `toString()` 方法。<br>
         * 当资源要表示为文本值时或在字符串连接时引用时，<br>
         * JavaScript 会自动调用 toString() 方法。<br>
         * <br>
         * 对于原始类型的资源，它将返回`this.nativeUrl`。<br>
         * 否则，返回空字符串。<br>
         * 子类可能会覆盖此方法。
         * @method toString
         * @returns @en String representation of this asset. @zh 此资源的字符串表示。
         */
        var _proto = Asset.prototype;
        _proto.toString = function toString() {
          return this.nativeUrl;
        }

        /**
         * 应 AssetDB 要求提供这个方法。
         * 返回一个序列化后的对象
         *
         * @method serialize
         * @returns {String}
         * @private
         */;
        _proto.serialize = function serialize() {}

        /**
         * @en
         * Set native file name for this asset.
         * @zh
         * 为此资源设置原始文件名。
         * @seealso nativeUrl
         *
         * @param filename
         * @param inLibrary
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._setRawAsset = function _setRawAsset(filename, inLibrary) {
          if (inLibrary === void 0) {
            inLibrary = true;
          }
          if (inLibrary !== false) {
            this._native = filename || '';
          } else {
            this._native = "/" + filename; // simply use '/' to tag location where is not in the library
          }
        }

        /**
         * @en
         * Create a new node using this asset in the scene.<br/>
         * If this type of asset don't have its corresponding node type, this method should be null.
         * @zh
         * 使用该资源在场景中创建一个新节点。<br/>
         * 如果这类资源没有相应的节点类型，该方法应该是空的。
         */;
        /**
         * @en
         * Increase the reference count. This will prevent assets from being automatically recycled.
         * When you no longer need to hold the asset, you need to using [[decRef]] to decrease the refCount.
         *
         * @zh
         * 增加资源的引用。这将阻止资源被自动释放。当你不再需要持有该资源时，你需要调用 [[decRef]] 来减少引用计数。
         *
         * @returns @en The asset itself. @zh 此资源本身。
         *
         */
        _proto.addRef = function addRef() {
          this._ref++;
          return this;
        }

        /**
         * @en
         * Decrease the reference count and it will be auto released when refCount equals 0.
         *
         * @zh
         * 减少资源的引用，如果引用数量为 0，则将自动释放该资源。
         *
         * @return @en The asset itself. @zh 此资源本身。
         *
         */;
        _proto.decRef = function decRef(autoRelease) {
          if (autoRelease === void 0) {
            autoRelease = true;
          }
          if (this._ref > 0) {
            this._ref--;
          }
          if (autoRelease) {
            cclegacy.assetManager._releaseManager.tryRelease(this);
          }
          return this;
        }

        /**
         * @en
         * A callback after the asset is loaded that you can use to initialize the asset's internal data.
         *
         * @zh
         * 资源加载后的回调，你可以用于初始化资源的内部数据。
         *
         * @deprecated Since v3.7, this is an internal engine interface and you should not call this interface under any circumstances.
         */;
        _proto.onLoaded = function onLoaded() {}

        /**
         * @en
         * Initializes default asset.
         *
         * @zh
         * 初始化为默认资源。
         *
         * @deprecated Since v3.7, this is an internal engine interface and you should not call this interface under any circumstances.
         */;
        _proto.initDefault = function initDefault(uuid) {
          if (uuid) {
            this._uuid = uuid;
          }
          this.isDefault = true;
        }

        /**
         * @en
         * Used to verify this asset is an available asset.
         *
         * @zh
         * 用于验证此资源是否为可用资源。
         *
         * @returns @zh 是否是可用资源。@en Whether this asset is available or not.
         * @deprecated Since v3.7, this is an internal engine interface and you should not call this interface under any circumstances.
         */;
        _proto.validate = function validate() {
          return true;
        }

        /**
         * @en
         * Destroy this asset and its internal data.
         *
         * @zh
         * 销毁此资源以及其内部数据。
         */;
        _proto.destroy = function destroy() {
          debug(getError(12101, this._uuid));
          return _Eventify.prototype.destroy.call(this);
        };
        _createClass(Asset, [{
          key: "nativeUrl",
          get:
          /**
           * @en
           * Returns the url of this asset's native object, will return an empty string if this asset does not have any native dependency.
           * @zh
           * 返回该资源对应的目标平台资源的 URL，如果此资源没有原生依赖将返回一个空字符串。
           * @readOnly
           */
          function get() {
            if (!this._nativeUrl) {
              if (!this._native) return '';
              var name = this._native;
              if (name.charCodeAt(0) === 47) {
                // '/'
                // remove library tag
                // not imported in library, just created on-the-fly
                return name.slice(1);
              }
              if (name.charCodeAt(0) === 46) {
                // '.'
                // imported in dir where json exist
                this._nativeUrl = getUrlWithUuid(this._uuid, {
                  nativeExt: name,
                  isNative: true
                });
              } else {
                // imported in an independent dir
                this._nativeUrl = getUrlWithUuid(this._uuid, {
                  __nativeName__: name,
                  nativeExt: path.extname(name),
                  isNative: true
                });
              }
            }
            return this._nativeUrl;
          }

          /**
           * @en
           * The UUID of this asset.
           *
           * @zh
           * 资源的 UUID。
           */
        }, {
          key: "uuid",
          get: function get() {
            return this._uuid;
          }

          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future, please use `nativeAsset` instead.
           */
        }, {
          key: "_nativeAsset",
          get: function get() {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return this._file;
          },
          set: function set(obj) {
            this._file = obj;
          }

          /**
           * @en
           * The underlying native asset of this asset if one is available.<br>
           * This property can be used to access additional details or functionality related to the asset.<br>
           * This property will be initialized by the loader if `_native` is available.
           * @zh
           * 此资源的基础资源（如果有）。 此属性可用于访问与资源相关的其他详细信息或功能。<br>
           * 如果`_native`可用，则此属性将由加载器初始化。
           */
        }, {
          key: "nativeAsset",
          get: function get() {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return this._file;
          }
        }, {
          key: "_nativeDep",
          get:
          /**
           * @en
           * Get native dependency information.
           *
           * @zh
           * 获取原生依赖信息。
           *
           * @returns @en The native dependency information. @zh 原生依赖信息。
           *
           * @deprecated Since v3.7, this is an internal engine interface and you should not call this interface under any circumstances.
           */
          function get() {
            if (this._native) {
              return {
                __isNative__: true,
                uuid: this._uuid,
                ext: this._native
              };
            }
            return undefined;
          }

          /**
           * @en
           * Current reference count to this asset.
           *
           * @zh
           * 当前该资源被引用的数量。
           */
        }, {
          key: "refCount",
          get: function get() {
            return this._ref;
          }
        }]);
        return Asset;
      }(Eventify(CCObject)), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_native", [serializable], function () {
        return '';
      }), _applyDecoratedDescriptor(_class2.prototype, "_nativeAsset", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_nativeAsset"), _class2.prototype)), _class2)) || _class));
      /**
       * @param error - null or the error info
       * @param node - the created node or null
       */
      Asset.prototype.createNode = null;
      cclegacy.Asset = Asset;
    }
  };
});