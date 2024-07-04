System.register("q-bundled:///fs/cocos/serialization/deserialize.js", ["../../../virtual/internal%253Aconstants.js", "../core/index.js", "./deserialize-dynamic.js", "../asset/assets/asset.js", "./report-missing-class.js", "./compiled/builtin-value-type.js"], function (_export, _context) {
  "use strict";

  var EDITOR, TEST, PREVIEW, DEBUG, DEV, cclegacy, errorID, getError, js, assertIsTrue, deserializeDynamic, parseUuidDependenciesDynamic, Asset, defaultReportMissingClass, deserializeBuiltinValueType, deserializeBuiltinValueTypeInto, _class, FORCE_COMPILED, SUPPORT_MIN_FORMAT_VERSION, EMPTY_PLACEHOLDER, DataTypeID, CLASS_TYPE, CLASS_KEYS, CLASS_PROP_TYPE_OFFSET, MASK_CLASS, OBJ_DATA_MASK, CUSTOM_OBJ_DATA_CLASS, CUSTOM_OBJ_DATA_CONTENT, DICT_JSON_LAYOUT, ARRAY_ITEM_VALUES, Refs, File, PACKED_SECTIONS, Details, ASSIGNMENTS, FileInfo;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  //

  // Parse Functions
  function dereference(refs, instances, strings) {
    var dataLength = refs.length - 1;
    var i = 0;
    // owner is object
    var instanceOffset = refs[dataLength] * Refs.EACH_RECORD_LENGTH;
    for (; i < instanceOffset; i += Refs.EACH_RECORD_LENGTH) {
      var _owner = refs[i];
      var target = instances[refs[i + Refs.TARGET_OFFSET]];
      var keyIndex = refs[i + Refs.KEY_OFFSET];
      if (keyIndex >= 0) {
        _owner[strings[keyIndex]] = target;
      } else {
        _owner[~keyIndex] = target;
      }
    }
    // owner is instance index
    for (; i < dataLength; i += Refs.EACH_RECORD_LENGTH) {
      var _owner2 = instances[refs[i]];
      var _target = instances[refs[i + Refs.TARGET_OFFSET]];
      var _keyIndex = refs[i + Refs.KEY_OFFSET];
      if (_keyIndex >= 0) {
        _owner2[strings[_keyIndex]] = _target;
      } else {
        _owner2[~_keyIndex] = _target;
      }
    }
  }
  function deserializeCCObject(data, objectData) {
    var mask = data[File.SharedMasks][objectData[OBJ_DATA_MASK]];
    var clazz = mask[MASK_CLASS];
    var ctor = clazz[CLASS_TYPE];
    // if (!ctor) {
    //     return null;
    // }

    // eslint-disable-next-line new-cap
    var obj = new ctor();
    var keys = clazz[CLASS_KEYS];
    var classTypeOffset = clazz[CLASS_PROP_TYPE_OFFSET];
    var maskTypeOffset = mask[mask.length - 1];

    // parse simple type
    var i = MASK_CLASS + 1;
    for (; i < maskTypeOffset; ++i) {
      var _key = keys[mask[i]];
      obj[_key] = objectData[i];
    }

    // parse advanced type
    for (; i < objectData.length; ++i) {
      var _key2 = keys[mask[i]];
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      var type = clazz[mask[i] + classTypeOffset];
      var op = ASSIGNMENTS[type];
      op(data, obj, _key2, objectData[i]);
    }
    return obj;
  }
  function deserializeCustomCCObject(data, ctor, value) {
    // eslint-disable-next-line new-cap
    var obj = new ctor();
    if (obj._deserialize) {
      obj._deserialize(value, data[File.Context]);
    } else {
      errorID(5303, js.getClassName(ctor));
    }
    return obj;
  }
  function assignSimple(data, owner, key, value) {
    owner[key] = value;
  }
  function assignInstanceRef(data, owner, key, value) {
    if (value >= 0) {
      owner[key] = data[File.Instances][value];
    } else {
      data[File.Refs][~value * Refs.EACH_RECORD_LENGTH] = owner;
    }
  }
  function genArrayParser(parser) {
    return function (data, owner, key, value) {
      for (var i = 0; i < value.length; ++i) {
        parser(data, value, i, value[i]);
      }
      owner[key] = value;
    };
  }
  function parseAssetRefByInnerObj(data, owner, key, value) {
    owner[key] = null;
    data[File.DependObjs][value] = owner;
  }
  function parseClass(data, owner, key, value) {
    owner[key] = deserializeCCObject(data, value);
  }
  function parseCustomClass(data, owner, key, value) {
    var ctor = data[File.SharedClasses][value[CUSTOM_OBJ_DATA_CLASS]];
    owner[key] = deserializeCustomCCObject(data, ctor, value[CUSTOM_OBJ_DATA_CONTENT]);
  }
  function parseTRS(data, owner, key, value) {
    var typedArray = owner[key];
    typedArray.set(value);
  }
  function parseDict(data, owner, key, value) {
    var dict = value[DICT_JSON_LAYOUT];
    owner[key] = dict;
    for (var i = DICT_JSON_LAYOUT + 1; i < value.length; i += 3) {
      var subKey = value[i];
      var subType = value[i + 1];
      var subValue = value[i + 2];
      var op = ASSIGNMENTS[subType];
      op(data, dict, subKey, subValue);
    }
  }
  function parseArray(data, owner, key, value) {
    var array = value[ARRAY_ITEM_VALUES];
    for (var i = 0; i < array.length; ++i) {
      var subValue = array[i];
      var type = value[i + 1];
      if (type !== DataTypeID.SimpleType) {
        var op = ASSIGNMENTS[type];
        op(data, array, i, subValue);
      }
    }
    owner[key] = array;
  }
  function parseInstances(data) {
    var instances = data[File.Instances];
    var instanceTypes = data[File.InstanceTypes];
    var instanceTypesLen = instanceTypes === EMPTY_PLACEHOLDER ? 0 : instanceTypes.length;
    var rootIndex = instances[instances.length - 1];
    var normalObjectCount = instances.length - instanceTypesLen;
    if (typeof rootIndex !== 'number') {
      rootIndex = 0;
    } else {
      if (rootIndex < 0) {
        rootIndex = ~rootIndex;
      }
      --normalObjectCount;
    }

    // DataTypeID.Class

    var insIndex = 0;
    for (; insIndex < normalObjectCount; ++insIndex) {
      instances[insIndex] = deserializeCCObject(data, instances[insIndex]);
    }
    var classes = data[File.SharedClasses];
    for (var typeIndex = 0; typeIndex < instanceTypesLen; ++typeIndex, ++insIndex) {
      var type = instanceTypes[typeIndex];
      var eachData = instances[insIndex];
      if (type >= 0) {
        // class index for DataTypeID.CustomizedClass

        var ctor = classes[type]; // class
        instances[insIndex] = deserializeCustomCCObject(data, ctor, eachData);
      } else {
        // Other

        type = ~type;
        var op = ASSIGNMENTS[type];
        op(data, instances, insIndex, eachData);
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return rootIndex;
  }

  // const DESERIALIZE_AS = Attr.DELIMETER + 'deserializeAs';
  // function deserializeAs(klass: AnyCCClass, klassLayout: IClass) {
  //     var attrs = Attr.getClassAttrs(klass);
  //     let keys = klassLayout[CLASS_KEYS];
  //     for (let i = 0; i < keys.length; ++i) {
  //         let newKey = attrs[keys[i] + DESERIALIZE_AS];
  //         if (newKey) {
  //             // @ts-expect-error
  //             if (keys.includes(newKey)) {
  //                 // %s cannot be deserialized by property %s because %s was also present in the serialized data.
  //                 warnID(, newKey, keys[i], newKey);
  //             }
  //             else {
  //                 keys[i] = newKey;
  //             }
  //         }
  //     }
  // }

  /**
   * @en Deserializes a previously serialized object to reconstruct it to the original.
   * @zh 将序列化后的对象进行反序列化以使其复原。
   *
   * @param data Serialized data.
   * @param details - Additional loading result.
   * @param options Deserialization Options.
   * @return The original object.
   */
  function getMissingClass(hasCustomFinder, type, reportMissingClass) {
    if (!hasCustomFinder) {
      reportMissingClass(type);
    }
    return Object;
  }
  function doLookupClass(classFinder, type, container, index, silent, hasCustomFinder, reportMissingClass) {
    var klass = classFinder(type);
    if (!klass) {
      // if (klass.__FSA__) {
      //     deserializeAs(klass, klassLayout as IClass);
      // }
      if (silent) {
        // generate a lazy proxy for ctor
        container[index] = function (c, i, t) {
          return function proxy() {
            var actualClass = classFinder(t) || getMissingClass(hasCustomFinder, t, reportMissingClass);
            c[i] = actualClass;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return, new-cap
            return new actualClass();
          };
        }(container, index, type);
        return;
      } else {
        klass = getMissingClass(hasCustomFinder, type, reportMissingClass);
      }
    }
    container[index] = klass;
  }
  function lookupClasses(data, silent, customFinder, reportMissingClass) {
    var classFinder = customFinder || js.getClassById;
    var classes = data[File.SharedClasses];
    for (var i = 0; i < classes.length; ++i) {
      var klassLayout = classes[i];
      if (typeof klassLayout !== 'string') {
        if (DEBUG) {
          if (typeof klassLayout[CLASS_TYPE] === 'function') {
            throw new Error('Can not deserialize the same JSON data again.');
          }
        }
        var type = klassLayout[CLASS_TYPE];
        doLookupClass(classFinder, type, klassLayout, CLASS_TYPE, silent, customFinder, reportMissingClass);
      } else {
        doLookupClass(classFinder, klassLayout, classes, i, silent, customFinder, reportMissingClass);
      }
    }
  }
  function cacheMasks(data) {
    var masks = data[File.SharedMasks];
    if (masks) {
      var classes = data[File.SharedClasses];
      for (var i = 0; i < masks.length; ++i) {
        var mask = masks[i];
        mask[MASK_CLASS] = classes[mask[MASK_CLASS]];
      }
    }
  }
  function parseResult(data) {
    var instances = data[File.Instances];
    var sharedStrings = data[File.SharedStrings];
    var dependSharedUuids = data[File.SharedUuids];
    var dependObjs = data[File.DependObjs];
    var dependKeys = data[File.DependKeys];
    var dependUuids = data[File.DependUuidIndices];
    for (var i = 0; i < dependObjs.length; ++i) {
      var obj = dependObjs[i];
      if (typeof obj === 'number') {
        dependObjs[i] = instances[obj];
      } else {
        // assigned by DataTypeID.AssetRefByInnerObj or added by Details object directly in _deserialize
      }
      var _key3 = dependKeys[i];
      if (typeof _key3 === 'number') {
        if (_key3 >= 0) {
          _key3 = sharedStrings[_key3];
        } else {
          _key3 = ~_key3;
        }
        dependKeys[i] = _key3;
      } else {
        // added by Details object directly in _deserialize
      }
      var _uuid2 = dependUuids[i];
      if (typeof _uuid2 === 'number') {
        dependUuids[i] = dependSharedUuids[_uuid2];
      } else {
        // added by Details object directly in _deserialize
      }
    }
  }
  function isCompiledJson(json) {
    if (Array.isArray(json)) {
      var _version = json[0];
      // array[0] will not be a number in the editor version
      return typeof _version === 'number' || _version instanceof FileInfo;
    } else {
      return false;
    }
  }
  function initializeDeserializationContext(data, details, options) {
    var _options;
    details.init(data);
    (_options = options) !== null && _options !== void 0 ? _options : options = {};
    var version = data[File.Version];
    var preprocessed = false;
    if (typeof version === 'object') {
      preprocessed = version.preprocessed;
      version = version.version;
    }
    if (version < SUPPORT_MIN_FORMAT_VERSION) {
      throw new Error(getError(5304, version));
    }
    var context = options;
    context._version = version;
    context.result = details;
    data[File.Context] = context;
    if (!preprocessed) {
      var _options$reportMissin;
      lookupClasses(data, false, options.classFinder, (_options$reportMissin = options.reportMissingClass) !== null && _options$reportMissin !== void 0 ? _options$reportMissin : deserialize.reportMissingClass);
      cacheMasks(data);
    }
  }
  function deserialize(data, details, options) {
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }
    var isBorrowedDetails = false;
    if (!details) {
      var borrowedDetails = Details.pool.get();
      assertIsTrue(borrowedDetails, "Can not allocate deserialization details");
      details = borrowedDetails;
      isBorrowedDetails = true;
    }
    var res;
    if (!FORCE_COMPILED && !isCompiledJson(data)) {
      res = deserializeDynamic(data, details, options);
    } else {
      initializeDeserializationContext(data, details, options);
      var runtimeData = data;
      cclegacy.game._isCloning = true;
      var instances = runtimeData[File.Instances];
      var rootIndex = parseInstances(runtimeData);
      cclegacy.game._isCloning = false;
      if (runtimeData[File.Refs]) {
        dereference(runtimeData[File.Refs], instances, runtimeData[File.SharedStrings]);
      }
      parseResult(runtimeData);
      res = instances[rootIndex];
    }
    if (isBorrowedDetails) {
      Details.pool.put(details);
    }
    return res;
  }
  function unpackJSONs(data, classFinder, reportMissingClass) {
    if (data[File.Version] < SUPPORT_MIN_FORMAT_VERSION) {
      throw new Error(getError(5304, data[File.Version]));
    }
    lookupClasses(data, true, classFinder, reportMissingClass !== null && reportMissingClass !== void 0 ? reportMissingClass : deserialize.reportMissingClass);
    cacheMasks(data);
    var version = new FileInfo(data[File.Version]);
    var sharedUuids = data[File.SharedUuids];
    var sharedStrings = data[File.SharedStrings];
    var sharedClasses = data[File.SharedClasses];
    var sharedMasks = data[File.SharedMasks];
    var sections = data[PACKED_SECTIONS];
    for (var i = 0; i < sections.length; ++i) {
      var section = sections[i];
      section.unshift(version, sharedUuids, sharedStrings, sharedClasses, sharedMasks);
    }
    return sections;
  }
  function packCustomObjData(type, data, hasNativeDep) {
    return [SUPPORT_MIN_FORMAT_VERSION, EMPTY_PLACEHOLDER, EMPTY_PLACEHOLDER, [type], EMPTY_PLACEHOLDER, hasNativeDep ? [data, ~0] : [data], [0], EMPTY_PLACEHOLDER, [], [], []];
  }
  function hasNativeDep(data) {
    var instances = data[File.Instances];
    var rootInfo = instances[instances.length - 1];
    if (typeof rootInfo !== 'number') {
      return false;
    } else {
      return rootInfo < 0;
    }
  }
  function getDependUuidList(json) {
    var sharedUuids = json[File.SharedUuids];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return json[File.DependUuidIndices].map(function (index) {
      return sharedUuids[index];
    });
  }
  function parseUuidDependencies(serialized) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    if (!DEV || isCompiledJson(serialized)) {
      return getDependUuidList(serialized);
    } else {
      return parseUuidDependenciesDynamic(serialized);
    }
  }
  _export({
    dereference: dereference,
    isCompiledJson: isCompiledJson,
    deserialize: deserialize,
    unpackJSONs: unpackJSONs,
    packCustomObjData: packCustomObjData,
    hasNativeDep: hasNativeDep,
    parseUuidDependencies: parseUuidDependencies
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      TEST = _virtualInternal253AconstantsJs.TEST;
      PREVIEW = _virtualInternal253AconstantsJs.PREVIEW;
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
      DEV = _virtualInternal253AconstantsJs.DEV;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      errorID = _coreIndexJs.errorID;
      getError = _coreIndexJs.getError;
      js = _coreIndexJs.js;
      assertIsTrue = _coreIndexJs.assertIsTrue;
    }, function (_deserializeDynamicJs) {
      deserializeDynamic = _deserializeDynamicJs.deserializeDynamic;
      parseUuidDependenciesDynamic = _deserializeDynamicJs.parseUuidDependenciesDynamic;
    }, function (_assetAssetsAssetJs) {
      Asset = _assetAssetsAssetJs.Asset;
    }, function (_reportMissingClassJs) {
      defaultReportMissingClass = _reportMissingClassJs.reportMissingClass;
    }, function (_compiledBuiltinValueTypeJs) {
      deserializeBuiltinValueType = _compiledBuiltinValueTypeJs.deserializeBuiltinValueType;
      deserializeBuiltinValueTypeInto = _compiledBuiltinValueTypeJs.deserializeBuiltinValueTypeInto;
    }],
    execute: function () {
      FORCE_COMPILED = false; // TODO: BUILD;
      /** **************************************************************************
       * BUILT-IN TYPES / CONSTAINTS
       *************************************************************************** */
      SUPPORT_MIN_FORMAT_VERSION = 1;
      EMPTY_PLACEHOLDER = 0;
      /** **************************************************************************
       * TYPE DECLARATIONS
       *************************************************************************** */
      // Includes Bitwise NOT value.
      // Both T and U have non-negative integer ranges.
      // When the value >= 0 represents T
      // When the value is < 0, it represents ~U. Use ~x to extract the value of U.
      // Combines a boolean and a number into one value.
      // The number must >= 0.
      // When the value >= 0, the boolean is true, the number is value.
      // When the value < 0, the boolean is false, the number is ~value.
      // Indicates whether the asset depends on a native asset
      // When the value >= 0 represents the string index
      // When the value is < 0, it just represents non-negative integer. Use ~x to extract the value.
      // A reverse index used to assign current parsing object to target command buffer so it could be assembled later.
      // Should >= REF.OBJ_OFFSET
      // Used to index the current object
      // shared with the editor
      DataTypeID = {
        SimpleType: 0,
        InstanceRef: 1,
        Array_InstanceRef: 2,
        Array_AssetRefByInnerObj: 3,
        Class: 4,
        ValueTypeCreated: 5,
        AssetRefByInnerObj: 6,
        TRS: 7,
        ValueType: 8,
        Array_Class: 9,
        CustomizedClass: 10,
        Dict: 11,
        Array: 12,
        ARRAY_LENGTH: 13
      }; // Collection of all data types
      // class Index of DataTypeID.CustomizedClass or PrimitiveObjectTypeID
      // Includes normal CCClass and fast defined class
      // eslint-disable-next-line @typescript-eslint/ban-types
      // eslint-disable-next-line @typescript-eslint/ban-types
      /**
       * If the value type is different, different Classes will be generated
       */
      CLASS_TYPE = 0;
      CLASS_KEYS = 1;
      CLASS_PROP_TYPE_OFFSET = 2;
      /**
       * Mask is used to define the properties and types that need to be deserialized.
       * Instances of the same class may have different Masks due to different default properties removed.
       */
      MASK_CLASS = 0;
      OBJ_DATA_MASK = 0;
      CUSTOM_OBJ_DATA_CLASS = 0;
      CUSTOM_OBJ_DATA_CONTENT = 1;
      DICT_JSON_LAYOUT = 0;
      ARRAY_ITEM_VALUES = 0;
      Refs = {
        EACH_RECORD_LENGTH: 3,
        OWNER_OFFSET: 0,
        KEY_OFFSET: 1,
        TARGET_OFFSET: 2
      };
      File = {
        Version: 0,
        Context: 0,
        SharedUuids: 1,
        SharedStrings: 2,
        SharedClasses: 3,
        SharedMasks: 4,
        Instances: 5,
        InstanceTypes: 6,
        Refs: 7,
        DependObjs: 8,
        DependKeys: 9,
        DependUuidIndices: 10,
        ARRAY_LENGTH: 11
      }; // Main file structure
      /**
       * At runtime, we intruded the original file data and injected some helpers.
       */
      PACKED_SECTIONS = File.Instances;
      /** **************************************************************************
       * IMPLEMENTS
       *************************************************************************** */
      /**
       * @en Contains information collected during deserialization
       * @zh 包含反序列化时的一些信息。
       * @class Details
       */
      _export("Details", Details = /*#__PURE__*/function () {
        function Details() {
          /**
           * @en
           * the object list whose field needs to load asset by uuid
           * @zh
           * 对象列表，其中每个对象有属性需要通过 uuid 进行资源加载
           */
          this.uuidObjList = null;
          /**
           * @en
           * the corresponding field name which referenced to the asset
           * @zh
           * 引用着资源的字段名称
           */
          this.uuidPropList = null;
          /**
           * @en
           * list of the depends assets' uuid
           * @zh
           * 依赖资源的 uuid 列表
           */
          this.uuidList = null;
          /**
           * @en
           * list of the depends assets' type
           * @zh
           * 依赖的资源类型列表
           */
          this.uuidTypeList = [];
        }
        var _proto = Details.prototype;
        // eslint-disable-next-line @typescript-eslint/ban-types
        /**
         * @method init
         * @param {Object} data
         */
        _proto.init = function init(data) {
          if (FORCE_COMPILED || data) {
            this.uuidObjList = data[File.DependObjs];
            this.uuidPropList = data[File.DependKeys];
            this.uuidList = data[File.DependUuidIndices];
          } else {
            // could be used by deserialize-dynamic
            var used = this.uuidList;
            if (!used) {
              this.uuidList = [];
              this.uuidObjList = [];
              this.uuidPropList = [];
              this.uuidTypeList = [];
            }
          }
        }

        /**
         * @method reset
         */;
        _proto.reset = function reset() {
          if (FORCE_COMPILED) {
            this.uuidList = null;
            this.uuidObjList = null;
            this.uuidPropList = null;
          } else {
            // could be reused by deserialize-dynamic
            var used = this.uuidList;
            if (used) {
              this.uuidList.length = 0;
              this.uuidObjList.length = 0;
              this.uuidPropList.length = 0;
              this.uuidTypeList.length = 0;
            }
          }
        }

        /**
         * @method push
         * @param {Object} obj
         * @param {String} propName
         * @param {String} uuid
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        ;
        _proto.push = function push(obj, propName, uuid, type) {
          this.uuidObjList.push(obj);
          this.uuidPropList.push(propName);
          this.uuidList.push(uuid);
          this.uuidTypeList.push(type || '');
        };
        return Details;
      }());
      _class = Details;
      Details.pool = new js.Pool(function (obj) {
        obj.reset();
      }, 5);
      Details.pool.get = function () {
        return this._get() || new Details();
      };
      if (EDITOR || TEST) {
        Details.prototype.assignAssetsBy = function (getter) {
          for (var i = 0, len = this.uuidList.length; i < len; i++) {
            var obj = this.uuidObjList[i];
            var prop = this.uuidPropList[i];
            var _uuid = this.uuidList[i];
            var type = this.uuidTypeList[i];
            var _type = js.getClassById(type) || Asset;
            obj[prop] = getter(_uuid, {
              type: _type,
              owner: obj,
              prop: prop
            });
          }
        };
      }
      ASSIGNMENTS = new Array(DataTypeID.ARRAY_LENGTH);
      ASSIGNMENTS[DataTypeID.SimpleType] = assignSimple; // Only be used in the instances array
      ASSIGNMENTS[DataTypeID.InstanceRef] = assignInstanceRef;
      ASSIGNMENTS[DataTypeID.Array_InstanceRef] = genArrayParser(assignInstanceRef);
      ASSIGNMENTS[DataTypeID.Array_AssetRefByInnerObj] = genArrayParser(parseAssetRefByInnerObj);
      ASSIGNMENTS[DataTypeID.Class] = parseClass;
      ASSIGNMENTS[DataTypeID.ValueTypeCreated] = deserializeBuiltinValueTypeInto;
      ASSIGNMENTS[DataTypeID.AssetRefByInnerObj] = parseAssetRefByInnerObj;
      ASSIGNMENTS[DataTypeID.TRS] = parseTRS;
      ASSIGNMENTS[DataTypeID.ValueType] = deserializeBuiltinValueType;
      ASSIGNMENTS[DataTypeID.Array_Class] = genArrayParser(parseClass);
      ASSIGNMENTS[DataTypeID.CustomizedClass] = parseCustomClass;
      ASSIGNMENTS[DataTypeID.Dict] = parseDict;
      ASSIGNMENTS[DataTypeID.Array] = parseArray;
      deserialize.Details = Details;
      deserialize.reportMissingClass = defaultReportMissingClass;
      FileInfo = function FileInfo(version) {
        this.preprocessed = true;
        this.version = version;
      };
      if (PREVIEW) {
        deserialize.isCompiledJson = isCompiledJson;
      }
      if (EDITOR || TEST) {
        deserialize._macros = {
          EMPTY_PLACEHOLDER: EMPTY_PLACEHOLDER,
          CUSTOM_OBJ_DATA_CLASS: CUSTOM_OBJ_DATA_CLASS,
          CUSTOM_OBJ_DATA_CONTENT: CUSTOM_OBJ_DATA_CONTENT,
          CLASS_TYPE: CLASS_TYPE,
          CLASS_KEYS: CLASS_KEYS,
          CLASS_PROP_TYPE_OFFSET: CLASS_PROP_TYPE_OFFSET,
          MASK_CLASS: MASK_CLASS,
          OBJ_DATA_MASK: OBJ_DATA_MASK,
          DICT_JSON_LAYOUT: DICT_JSON_LAYOUT,
          ARRAY_ITEM_VALUES: ARRAY_ITEM_VALUES,
          PACKED_SECTIONS: PACKED_SECTIONS
        };
      }
      if (TEST) {
        cclegacy._Test.deserializeCompiled = {
          deserialize: deserialize,
          dereference: dereference,
          deserializeCCObject: deserializeCCObject,
          deserializeCustomCCObject: deserializeCustomCCObject,
          parseInstances: parseInstances,
          parseResult: parseResult,
          cacheMasks: cacheMasks,
          File: {
            Version: File.Version,
            Context: File.Context,
            SharedUuids: File.SharedUuids,
            SharedStrings: File.SharedStrings,
            SharedClasses: File.SharedClasses,
            SharedMasks: File.SharedMasks,
            Instances: File.Instances,
            InstanceTypes: File.InstanceTypes,
            Refs: File.Refs,
            DependObjs: File.DependObjs,
            DependKeys: File.DependKeys,
            DependUuidIndices: File.DependUuidIndices
            // ArrayLength: File.ArrayLength,
          },

          DataTypeID: {
            SimpleType: DataTypeID.SimpleType,
            InstanceRef: DataTypeID.InstanceRef,
            Array_InstanceRef: DataTypeID.Array_InstanceRef,
            Array_AssetRefByInnerObj: DataTypeID.Array_AssetRefByInnerObj,
            Class: DataTypeID.Class,
            ValueTypeCreated: DataTypeID.ValueTypeCreated,
            AssetRefByInnerObj: DataTypeID.AssetRefByInnerObj,
            TRS: DataTypeID.TRS,
            ValueType: DataTypeID.ValueType,
            Array_Class: DataTypeID.Array_Class,
            CustomizedClass: DataTypeID.CustomizedClass,
            Dict: DataTypeID.Dict,
            Array: DataTypeID.Array
          },
          unpackJSONs: unpackJSONs
        };
      }
      cclegacy.deserialize = deserialize;
    }
  };
});