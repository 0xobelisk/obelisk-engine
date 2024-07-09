System.register("q-bundled:///fs/cocos/core/data/utils/compact-value-type-array.js", ["../decorators/index.js", "../../math/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, Vec3, Quat, Vec4, Mat4, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _class3, StorageUnit, ElementType, elementTypeBits, CompactValueTypeArray, BuiltinElementTypeTraits;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function combineStorageUnitElementType(unit, elementType) {
    return (elementType << elementTypeBits) + unit;
  }
  function extractStorageUnitElementType(combined) {
    return {
      storageUnit: ~(-1 << elementTypeBits) & combined,
      elementType: combined >> elementTypeBits
    };
  }

  /**
   * @deprecated Since V3.5.0.
   */

  function getElementTraits(elementType) {
    return BuiltinElementTypeTraits[elementType];
  }
  function getStorageConstructor(unit) {
    switch (unit) {
      case StorageUnit.Uint8:
        return Uint8Array;
      case StorageUnit.Uint16:
        return Uint16Array;
      case StorageUnit.Uint32:
        return Uint32Array;
      case StorageUnit.Int8:
        return Int8Array;
      case StorageUnit.Int16:
        return Int16Array;
      case StorageUnit.Int32:
        return Int32Array;
      case StorageUnit.Float32:
        return Float32Array;
      case StorageUnit.Float64:
        return Float64Array;
    }
  }
  function isCompactValueTypeArray(value) {
    return value instanceof CompactValueTypeArray;
  }
  _export({
    combineStorageUnitElementType: combineStorageUnitElementType,
    extractStorageUnitElementType: extractStorageUnitElementType,
    isCompactValueTypeArray: isCompactValueTypeArray,
    StorageUnit: void 0,
    ElementType: void 0
  });
  return {
    setters: [function (_decoratorsIndexJs) {
      ccclass = _decoratorsIndexJs.ccclass;
      serializable = _decoratorsIndexJs.serializable;
    }, function (_mathIndexJs) {
      Vec3 = _mathIndexJs.Vec3;
      Quat = _mathIndexJs.Quat;
      Vec4 = _mathIndexJs.Vec4;
      Mat4 = _mathIndexJs.Mat4;
    }],
    execute: function () {
      (function (StorageUnit) {
        StorageUnit[StorageUnit["Uint8"] = 0] = "Uint8";
        StorageUnit[StorageUnit["Uint16"] = 1] = "Uint16";
        StorageUnit[StorageUnit["Uint32"] = 2] = "Uint32";
        StorageUnit[StorageUnit["Int8"] = 3] = "Int8";
        StorageUnit[StorageUnit["Int16"] = 4] = "Int16";
        StorageUnit[StorageUnit["Int32"] = 5] = "Int32";
        StorageUnit[StorageUnit["Float32"] = 6] = "Float32";
        StorageUnit[StorageUnit["Float64"] = 7] = "Float64";
      })(StorageUnit || _export("StorageUnit", StorageUnit = {}));
      (function (ElementType) {
        ElementType[ElementType["Scalar"] = 0] = "Scalar";
        ElementType[ElementType["Vec2"] = 1] = "Vec2";
        ElementType[ElementType["Vec3"] = 2] = "Vec3";
        ElementType[ElementType["Vec4"] = 3] = "Vec4";
        ElementType[ElementType["Quat"] = 4] = "Quat";
        ElementType[ElementType["Mat4"] = 5] = "Mat4";
      })(ElementType || _export("ElementType", ElementType = {}));
      elementTypeBits = 3;
      _export("CompactValueTypeArray", CompactValueTypeArray = (_dec = ccclass('cc.CompactValueTypeArray'), _dec(_class = (_class2 = (_class3 = class CompactValueTypeArray {
        constructor() {
          /**
           * Offset into the buffer, in bytes.
           */
          this._byteOffset = _initializer && _initializer();
          /**
           * Unit count this CVTA occupies.
           */
          this._unitCount = _initializer2 && _initializer2();
          /**
           * Element type this CVTA holds.
           */
          this._unitElement = _initializer3 && _initializer3();
          /**
           * Element count this CVTA holds.
           */
          this._length = _initializer4 && _initializer4();
        }
        /**
         * Returns the length in bytes that a buffer needs to encode the specified value array in form of CVTA.
         * @param values The value array.
         * @param unit Target element type.
         */
        static lengthFor(values, elementType, unit) {
          const elementTraits = getElementTraits(elementType);
          return elementTraits.requiredUnits * values.length * getStorageConstructor(unit).BYTES_PER_ELEMENT;
        }

        /**
         * Compresses the specified value array in form of CVTA into target buffer.
         * @param values The value array.
         * @param unit Target element type.
         * @param arrayBuffer Target buffer.
         * @param byteOffset Offset into target buffer.
         */
        static compress(values, elementType, unit, arrayBuffer, byteOffset, presumedByteOffset) {
          const elementTraits = getElementTraits(elementType);
          const storageConstructor = getStorageConstructor(unit);
          const unitCount = elementTraits.requiredUnits * values.length;
          const storage = new storageConstructor(arrayBuffer, byteOffset, unitCount);
          for (let i = 0; i < values.length; ++i) {
            elementTraits.compress(storage, i, values[i]);
          }
          const result = new CompactValueTypeArray();
          result._unitElement = combineStorageUnitElementType(unit, elementType);
          result._byteOffset = presumedByteOffset;
          result._unitCount = unitCount;
          result._length = values.length;
          return result;
        }

        /**
         * Decompresses this CVTA.
         * @param arrayBuffer The buffer this CVTA stored in.
         */
        decompress(arrayBuffer) {
          const {
            storageUnit,
            elementType
          } = extractStorageUnitElementType(this._unitElement);
          const elementTraits = getElementTraits(elementType);
          const storageConstructor = getStorageConstructor(storageUnit);
          const storage = new storageConstructor(arrayBuffer, this._byteOffset, this._unitCount);
          const result = new Array(this._length);
          for (let i = 0; i < this._length; ++i) {
            result[i] = elementTraits.decompress(storage, i);
          }
          return result;
        }
      }, _class3.StorageUnit = StorageUnit, _class3.ElementType = ElementType, _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_byteOffset", [serializable], function () {
        return 0;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_unitCount", [serializable], function () {
        return 0;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_unitElement", [serializable], function () {
        return combineStorageUnitElementType(StorageUnit.Uint8, ElementType.Scalar);
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_length", [serializable], function () {
        return 0;
      })), _class2)) || _class));
      BuiltinElementTypeTraits = {
        [ElementType.Scalar]: {
          requiredUnits: 1,
          compress(storage, index, value) {
            storage[index] = value;
          },
          decompress(storage, index) {
            return storage[index];
          }
        },
        [ElementType.Vec2]: {
          requiredUnits: 2,
          compress(storage, index, value) {
            storage[index * 2] = value.x;
            storage[index * 2 + 1] = value.y;
          },
          decompress(storage, index) {
            return new Vec3(storage[index * 2], storage[index * 2 + 1]);
          }
        },
        [ElementType.Vec3]: {
          requiredUnits: 3,
          compress(storage, index, value) {
            storage[index * 3] = value.x;
            storage[index * 3 + 1] = value.y;
            storage[index * 3 + 2] = value.z;
          },
          decompress(storage, index) {
            return new Vec3(storage[index * 3], storage[index * 3 + 1], storage[index * 3 + 2]);
          }
        },
        [ElementType.Vec4]: {
          requiredUnits: 4,
          compress(storage, index, value) {
            storage[index * 4] = value.x;
            storage[index * 4 + 1] = value.y;
            storage[index * 4 + 2] = value.z;
            storage[index * 4 + 3] = value.w;
          },
          decompress(storage, index) {
            return new Vec4(storage[index * 4], storage[index * 4 + 1], storage[index * 4 + 2], storage[index * 4 + 3]);
          }
        },
        [ElementType.Quat]: {
          requiredUnits: 4,
          compress(storage, index, value) {
            storage[index * 4] = value.x;
            storage[index * 4 + 1] = value.y;
            storage[index * 4 + 2] = value.z;
            storage[index * 4 + 3] = value.w;
          },
          decompress(storage, index) {
            return new Quat(storage[index * 4], storage[index * 4 + 1], storage[index * 4 + 2], storage[index * 4 + 3]);
          }
        },
        [ElementType.Mat4]: {
          requiredUnits: 16,
          compress(storage, index, value) {
            Mat4.toArray(storage, value, index * 16);
          },
          decompress(storage, index) {
            return Mat4.fromArray(new Mat4(), storage, index * 16);
          }
        }
      };
    }
  };
});