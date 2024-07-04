System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/foundation/authoring/input-authoring.js", ["../../../../../core/index.js", "../type-system.js", "../errors.js"], function (_export, _context) {
  "use strict";

  var Quat, Vec3, assertIsTrue, js, PoseGraphType, OperationOnFreestandingNodeError, _excluded, PoseGraphNodeInputManager, globalPoseGraphNodeInputManager;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  function insertPoseGraphNodeArrayElement(graph, node, inputKey, value) {
    var shell = graph.getShell(node);
    if (!shell) {
      throw new OperationOnFreestandingNodeError(node);
    }
    var propertyKey = inputKey[0],
      _inputKey$ = inputKey[1],
      elementIndex = _inputKey$ === void 0 ? -1 : _inputKey$;
    var property = node[propertyKey];
    if (!Array.isArray(property)) {
      return;
    }

    // Insert the element itself.
    property.splice(elementIndex, 0, value);

    // Update bindings for following elements.
    shell.moveArrayElementBindingForward(propertyKey, elementIndex + 1, false);
  }
  function deletePoseGraphNodeArrayElement(graph, node, inputKey) {
    var shell = graph.getShell(node);
    if (!shell) {
      throw new OperationOnFreestandingNodeError(node);
    }
    var propertyKey = inputKey[0],
      _inputKey$2 = inputKey[1],
      elementIndex = _inputKey$2 === void 0 ? -1 : _inputKey$2;
    var property = node[propertyKey];
    if (!Array.isArray(property)) {
      return;
    }
    if (elementIndex < 0 || elementIndex >= property.length) {
      return;
    }

    // Delete the binding.
    shell.deleteBinding(inputKey);

    // Delete the element itself.
    property.splice(elementIndex, 1);

    // Update bindings for following elements.
    shell.moveArrayElementBindingForward(propertyKey, elementIndex + 1, true);
  }
  function createDefaultInputValueByType(type) {
    switch (type) {
      default:
        assertIsTrue(false);
      // fallthrough
      case PoseGraphType.FLOAT:
      case PoseGraphType.INTEGER:
        return 0;
      case PoseGraphType.BOOLEAN:
        return false;
      case PoseGraphType.POSE:
        return null;
      case PoseGraphType.VEC3:
        return new Vec3();
      case PoseGraphType.QUAT:
        return new Quat();
    }
  }
  return {
    setters: [function (_coreIndexJs) {
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
      assertIsTrue = _coreIndexJs.assertIsTrue;
      js = _coreIndexJs.js;
    }, function (_typeSystemJs) {
      PoseGraphType = _typeSystemJs.PoseGraphType;
    }, function (_errorsJs) {
      OperationOnFreestandingNodeError = _errorsJs.OperationOnFreestandingNodeError;
    }],
    execute: function () {
      _excluded = ["arraySyncGroup"];
      // eslint-disable-next-line @typescript-eslint/ban-types
      /**
       * @zh 描述一个姿势图结点类属性在映射为结点输入时的选项。
       * @en Describes the options used
       * when a pose node class property is going to be mapped as node input(s).
       */
      // eslint-disable-next-line @typescript-eslint/ban-types
      PoseGraphNodeInputManager = /*#__PURE__*/function () {
        function PoseGraphNodeInputManager() {
          this._classInputMap = new WeakMap();
        }
        var _proto = PoseGraphNodeInputManager.prototype;
        _proto.setPropertyNodeInputRecord = function setPropertyNodeInputRecord(constructor, propertyKey, options) {
          var classInputRecord = this._classInputMap.get(constructor);
          if (!classInputRecord) {
            classInputRecord = {
              properties: {}
            };
            this._classInputMap.set(constructor, classInputRecord);
          }
          var arraySyncGroup = options.arraySyncGroup,
            unchanged = _objectWithoutPropertiesLoose(options, _excluded);
          var record = unchanged;
          var arraySyncGroupName = options.arraySyncGroup;
          if (arraySyncGroupName) {
            var _classInputRecord$arr, _classInputRecord$arr2;
            if (!classInputRecord.arraySyncGroups) {
              classInputRecord.arraySyncGroups = {};
            }
            var group = (_classInputRecord$arr2 = (_classInputRecord$arr = classInputRecord.arraySyncGroups)[arraySyncGroupName]) !== null && _classInputRecord$arr2 !== void 0 ? _classInputRecord$arr2 : _classInputRecord$arr[arraySyncGroupName] = {
              members: []
            };
            if (!group.members.includes(propertyKey)) {
              group.members.push(propertyKey);
            }
            record.arraySyncGroup = group;
          }
          classInputRecord.properties[propertyKey] = Object.freeze(record);
        };
        _proto.getInputKeys = function getInputKeys(object) {
          var _this = this;
          var result = [];
          var getInputKeysRecurse = function getInputKeysRecurse(constructor) {
            if (!constructor) {
              return;
            }
            getInputKeysRecurse(js.getSuper(constructor));
            var record = _this._classInputMap.get(constructor);
            if (!record) {
              return;
            }
            var _loop = function _loop() {
              var _Object$entries$_i = _Object$entries[_i],
                propertyKey = _Object$entries$_i[0];
              // Subclass's input mapping declaration overrides base's.
              if (result.findIndex(function (_ref) {
                var subClassPropertyKey = _ref[0];
                return propertyKey === subClassPropertyKey;
              }) >= 0) {
                return 1; // continue
              }
              var field = object[propertyKey];
              if (Array.isArray(field)) {
                for (var iElement = 0; iElement < field.length; ++iElement) {
                  result.push([propertyKey, iElement]);
                }
              } else {
                result.push([propertyKey]);
              }
            };
            for (var _i = 0, _Object$entries = Object.entries(record.properties); _i < _Object$entries.length; _i++) {
              if (_loop()) continue;
            }
          };
          getInputKeysRecurse(object.constructor);
          return result;
        };
        _proto.isPoseInput = function isPoseInput(object, key) {
          var propertyKey = key[0];
          var propertyInputRecord = this._getPropertyNodeInputRecord(object.constructor, propertyKey);
          if (!propertyInputRecord) {
            return false;
          }
          return propertyInputRecord.type === PoseGraphType.POSE;
        };
        _proto.getInputMetadata = function getInputMetadata(object, key) {
          var propertyKey = key[0],
            _key$ = key[1],
            elementIndex = _key$ === void 0 ? -1 : _key$;
          var propertyInputRecord = this._getPropertyNodeInputRecord(object.constructor, propertyKey);
          if (!propertyInputRecord) {
            return undefined;
          }
          var field = object[propertyKey];
          if (Array.isArray(field)) {
            if (elementIndex < 0 || elementIndex >= field.length) {
              return undefined;
            } else {
              var _propertyInputRecord$, _propertyInputRecord$2;
              var displayName = (_propertyInputRecord$ = (_propertyInputRecord$2 = propertyInputRecord.getArrayElementDisplayName) === null || _propertyInputRecord$2 === void 0 ? void 0 : _propertyInputRecord$2.call(object, elementIndex)) !== null && _propertyInputRecord$ !== void 0 ? _propertyInputRecord$ : propertyInputRecord.displayName;
              return {
                type: propertyInputRecord.type,
                displayName: displayName,
                deletable: !(propertyInputRecord.arraySyncGroup && propertyInputRecord.arraySyncGroupFollower),
                insertPoint: true
              };
            }
          }
          return {
            type: propertyInputRecord.type,
            displayName: propertyInputRecord.displayName
          };
        };
        _proto.hasInput = function hasInput(object, key) {
          var propertyKey = key[0],
            _key$2 = key[1],
            elementIndex = _key$2 === void 0 ? -1 : _key$2;
          var record = this._getPropertyNodeInputRecord(object.constructor, propertyKey);
          if (!record) {
            return false;
          }
          var field = object[propertyKey];
          if (Array.isArray(field)) {
            if (elementIndex < 0 || elementIndex >= field.length) {
              return false;
            }
          }
          return true;
        };
        _proto.getInputInsertInfos = function getInputInsertInfos(object) {
          var result = {};
          for (var _constructor = object.constructor; _constructor; _constructor = js.getSuper(_constructor)) {
            var classInputRecord = this._classInputMap.get(_constructor);
            if (!classInputRecord) {
              continue;
            }
            for (var propertyKey in classInputRecord.properties) {
              var propertyInputRecord = classInputRecord.properties[propertyKey];
              var property = object[propertyKey];
              if (Array.isArray(property)) {
                // Array sync group followers are not insert-able.
                if (propertyInputRecord.arraySyncGroup && propertyInputRecord.arraySyncGroupFollower) {
                  continue;
                }
                result[propertyKey] = {
                  displayName: propertyKey
                };
              }
            }
          }
          return result;
        };
        _proto.deleteInput = function deleteInput(graph, node, key) {
          var propertyKey = key[0],
            _key$3 = key[1],
            elementIndex = _key$3 === void 0 ? -1 : _key$3;
          var propertyInputRecord = this._getPropertyNodeInputRecord(node.constructor, propertyKey);
          if (!propertyInputRecord) {
            return;
          }
          var property = node[propertyKey];
          if (!Array.isArray(property)) {
            return;
          }
          if (elementIndex < 0 || elementIndex >= property.length) {
            return;
          }

          // If it's an array record and belongs to a sync group,
          // Perform the deletion on all group members.
          // > Note: currently we can only insert input to array.
          // eslint-disable-next-line no-constant-condition
          if (true) {
            var arraySyncGroup = propertyInputRecord.arraySyncGroup;
            if (arraySyncGroup) {
              this._deleteInputInArraySyncGroup(graph, node, arraySyncGroup, property.length, elementIndex);
              return;
            }
          }
          deletePoseGraphNodeArrayElement(graph, node, key);
        };
        _proto.insertInput = function insertInput(graph, node, insertId) {
          var propertyKey = insertId;
          var propertyInputRecord = this._getPropertyNodeInputRecord(node.constructor, propertyKey);
          if (!propertyInputRecord) {
            return;
          }
          var property = node[propertyKey];
          if (!Array.isArray(property)) {
            return;
          }
          var hint = property.length; // Always insert from back.

          // If it's an array record and belongs to a sync group,
          // Perform the insertion on all group members.
          // > Note: currently we can only insert input to array.
          // eslint-disable-next-line no-constant-condition
          if (true) {
            var arraySyncGroup = propertyInputRecord.arraySyncGroup;
            if (arraySyncGroup) {
              this._insertInputInArraySyncGroup(graph, node, arraySyncGroup, property.length, hint);
              return;
            }
          }
          insertPoseGraphNodeArrayElement(graph, node, [propertyKey, hint], createDefaultInputValueByType(propertyInputRecord.type));
        };
        _proto._getPropertyNodeInputRecord = function _getPropertyNodeInputRecord(constructor, propertyKey) {
          if (!constructor) {
            return undefined;
          }
          var classInputRecord = this._classInputMap.get(constructor);
          if (classInputRecord) {
            var record = classInputRecord.properties[propertyKey];
            if (record) {
              return record;
            }
          }
          return this._getPropertyNodeInputRecord(js.getSuper(constructor), propertyKey);
        };
        _proto._insertInputInArraySyncGroup = function _insertInputInArraySyncGroup(graph, node, syncGroup, expectedOriginalSyncLength, insertHint) {
          for (var iGroupMember = 0; iGroupMember < syncGroup.members.length; ++iGroupMember) {
            var syncedPropertyKey = syncGroup.members[iGroupMember];
            var syncedPropertyInputRecord = this._getPropertyNodeInputRecord(node.constructor, syncedPropertyKey);
            assertIsTrue(syncedPropertyInputRecord);
            var syncedProperty = node[syncedPropertyKey];
            if (!Array.isArray(syncedProperty) || syncedProperty.length !== expectedOriginalSyncLength) {
              // The property is declared with a "syncWith",
              // but the sync target property is not an array or does not have a matched length.
              // To avoid un-expectations, interrupt.
              continue;
            }
            insertPoseGraphNodeArrayElement(graph, node, [syncedPropertyKey, insertHint], createDefaultInputValueByType(syncedPropertyInputRecord.type));
          }
        };
        _proto._deleteInputInArraySyncGroup = function _deleteInputInArraySyncGroup(graph, node, syncGroup, expectedOriginalSyncLength, index) {
          for (var iGroupMember = 0; iGroupMember < syncGroup.members.length; ++iGroupMember) {
            var syncedPropertyKey = syncGroup.members[iGroupMember];
            var syncedPropertyInputRecord = this._getPropertyNodeInputRecord(node.constructor, syncedPropertyKey);
            assertIsTrue(syncedPropertyInputRecord);
            var syncedProperty = node[syncedPropertyKey];
            if (!Array.isArray(syncedProperty) || syncedProperty.length !== expectedOriginalSyncLength) {
              // The property is declared with a "syncWith",
              // but the sync target property is not an array or does not have a matched length.
              // To avoid un-expectations, interrupt.
              continue;
            }
            deletePoseGraphNodeArrayElement(graph, node, [syncedPropertyKey, index]);
          }
        };
        return PoseGraphNodeInputManager;
      }();
      _export("globalPoseGraphNodeInputManager", globalPoseGraphNodeInputManager = new PoseGraphNodeInputManager());
    }
  };
});