System.register("q-bundled:///fs/cocos/scene-graph/prefab/prefab.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../serialization/instantiate-jit.js", "../../core/index.js", "../../core/value-types/index.js", "../../asset/assets/asset.js", "../node.js", "../../core/global-exports.js", "../../core/platform/debug.js", "../../core/utils/jsb-utils.js", "./utils.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, editable, SUPPORT_JIT, ALIPAY, RUNTIME_BASED, JSB, compile, js, Enum, Asset, Node, legacyCC, warnID, updateChildrenForDeserialize, utils, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _class3, OptimizationPolicy, Prefab;
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
    }, function (_virtualInternal253AconstantsJs) {
      SUPPORT_JIT = _virtualInternal253AconstantsJs.SUPPORT_JIT;
      ALIPAY = _virtualInternal253AconstantsJs.ALIPAY;
      RUNTIME_BASED = _virtualInternal253AconstantsJs.RUNTIME_BASED;
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_serializationInstantiateJitJs) {
      compile = _serializationInstantiateJitJs.compile;
    }, function (_coreIndexJs) {
      js = _coreIndexJs.js;
    }, function (_coreValueTypesIndexJs) {
      Enum = _coreValueTypesIndexJs.Enum;
    }, function (_assetAssetsAssetJs) {
      Asset = _assetAssetsAssetJs.Asset;
    }, function (_nodeJs) {
      Node = _nodeJs.Node;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_corePlatformDebugJs) {
      warnID = _corePlatformDebugJs.warnID;
    }, function (_coreUtilsJsbUtilsJs) {
      updateChildrenForDeserialize = _coreUtilsJsbUtilsJs.updateChildrenForDeserialize;
    }, function (_utilsJs) {
      utils = _utilsJs;
    }],
    execute: function () {
      /**
       * @en An enumeration used with the [[Prefab.optimizationPolicy]] to specify how to optimize the instantiate operation.
       * @zh Prefab 创建实例所用的优化策略，配合 [[Prefab.optimizationPolicy]] 使用。
       */
      OptimizationPolicy = Enum({
        /**
         * @en The optimization policy is automatically chosen based on the number of instantiations.
         * When you first create an instance, the behavior is the same as SINGLE_INSTANCE.
         * MULTI_INSTANCE will be automatically used after multiple creation.
         * @zh 根据创建次数自动调整优化策略。初次创建实例时，行为等同 SINGLE_INSTANCE，多次创建后将自动采用 MULTI_INSTANCE。
         */
        AUTO: 0,
        /**
         * @en Optimize for single instance creation.<br>
         * This option skips code generation for this prefab.
         * When this prefab will usually create only one instances, please select this option.
         * @zh 优化单次创建性能。<br>
         * 该选项会跳过针对这个 prefab 的代码生成优化操作。当该 prefab 加载后，一般只会创建一个实例时，请选择此项。
         */
        SINGLE_INSTANCE: 1,
        /**
         * @en Optimize for creating instances multiple times.<br>
         * This option enables code generation for this prefab.
         * When this prefab will usually create multiple instances, please select this option.
         * It is also recommended to select this option if the prefab instance in the scene
         * has Auto Sync enabled and there are multiple instances in the scene.
         * @zh 优化多次创建性能。<br>
         * 该选项会启用针对这个 prefab 的代码生成优化操作。当该 prefab 加载后，一般会创建多个实例时，请选择此项。如果该 prefab 在场景中的节点启用了自动关联，并且在场景中有多份实例，也建议选择此项。
         */
        MULTI_INSTANCE: 2
      });
      /**
       * @en Class for prefab handling.
       * @zh 预制资源类。
       */
      _export("Prefab", Prefab = (_dec = ccclass('cc.Prefab'), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(Prefab, _Asset);
        function Prefab() {
          var _this;
          _this = _Asset.call(this) || this;
          /**
           * @en The main [[Node]] in the prefab
           * @zh Prefab 中的根节点，[[Node]] 类型
           */
          _this.data = _initializer && _initializer();
          /**
           * @zh
           * 设置实例化这个 prefab 时所用的优化策略。根据使用情况设置为合适的值，能优化该 prefab 实例化所用的时间。推荐在编辑器的资源中设置。
           * @en
           * Indicates the optimization policy for instantiating this prefab.
           * Set to a suitable value based on usage, can optimize the time it takes to instantiate this prefab.
           * Suggest to set this policy in the editor's asset inspector.
           * @default Prefab.OptimizationPolicy.AUTO
           * @example
           * ```ts
           * import { Prefab } from 'cc';
           * prefab.optimizationPolicy = Prefab.OptimizationPolicy.MULTI_INSTANCE;
           * ```
           */
          _this.optimizationPolicy = _initializer2 && _initializer2();
          _this.persistent = _initializer3 && _initializer3();
          // Cache function to optimize instance creation.
          _this._createFunction = void 0;
          _this._instantiatedTimes = void 0;
          _this._createFunction = null;
          _this._instantiatedTimes = 0;
          return _this;
        }
        var _proto = Prefab.prototype;
        _proto.createNode = function createNode(cb) {
          var node = legacyCC.instantiate(this);
          node.name = this.name;
          cb(null, node);
        }

        /**
         * @en
         * Dynamically translation prefab data into minimized code.<br/>
         * This method will be called automatically before the first time the prefab being instantiated,<br/>
         * but you can re-call to refresh the create function once you modified the original prefab data in script.
         * @zh
         * 将预制数据动态转换为最小化代码。<br/>
         * 此方法将在第一次实例化预制件之前自动调用，<br/>
         * 但是您可以在脚本中修改原始预制数据后重新调用以刷新创建功能。
         */;
        _proto.compileCreateFunction = function compileCreateFunction() {
          this._createFunction = compile(this.data);
        }

        // just instantiate, will not initialize the Node, this will be called during Node's initialization.
        // @param {Node} [rootToRedirect] - specify an instantiated prefabRoot that all references to prefabRoot in prefab
        //                                  will redirect to
        /**
         * @engineInternal
         */;
        _proto._doInstantiate = function _doInstantiate(rootToRedirect) {
          if (!this.data._prefab) {
            // temp guard code
            warnID(3700);
          }
          if (!this._createFunction) {
            this.compileCreateFunction();
          }
          return this._createFunction(rootToRedirect); // this.data._instantiate();
        };
        _proto._instantiate = function _instantiate() {
          var node;
          var useJit = false;
          if (SUPPORT_JIT) {
            if (this.optimizationPolicy === OptimizationPolicy.SINGLE_INSTANCE) {
              useJit = false;
            } else if (this.optimizationPolicy === OptimizationPolicy.MULTI_INSTANCE) {
              useJit = true;
            } else {
              // auto
              useJit = this._instantiatedTimes + 1 >= Prefab.OptimizationPolicyThreshold;
            }
          }
          if (useJit) {
            // instantiate node
            node = this._doInstantiate();
            // initialize node
            this.data._instantiate(node);
          } else {
            // instantiate node
            node = this.data._instantiate();
          }
          ++this._instantiatedTimes;
          return node;
        };
        _proto.initDefault = function initDefault(uuid) {
          _Asset.prototype.initDefault.call(this, uuid);
          this.data = new Node();
          this.data.name = '(Missing Node)';
          var prefabInfo = new legacyCC._PrefabInfo();
          prefabInfo.asset = this;
          prefabInfo.root = this.data;
          this.data._prefab = prefabInfo;
        };
        _proto.validate = function validate() {
          return !!this.data;
        };
        _proto.onLoaded = function onLoaded() {
          var rootNode = this.data;
          utils.expandNestedPrefabInstanceNode(rootNode);
          utils.applyTargetOverrides(rootNode);
          if (JSB) {
            updateChildrenForDeserialize(rootNode);
          }
        };
        return Prefab;
      }(Asset), _class3.OptimizationPolicy = OptimizationPolicy, _class3.OptimizationPolicyThreshold = 3, _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "data", [serializable, editable], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "optimizationPolicy", [serializable, editable], function () {
        return OptimizationPolicy.AUTO;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "persistent", [serializable, editable], function () {
        return false;
      })), _class2)) || _class));
      js.value(Prefab, '_utils', utils);
      legacyCC.Prefab = Prefab;
      if (ALIPAY || RUNTIME_BASED) {
        legacyCC._Prefab = Prefab;
      } else {
        js.obsolete(legacyCC, 'cc._Prefab', 'Prefab');
      }
    }
  };
});