System.register("q-bundled:///fs/cocos/animation/core/transform-array.js", ["../../core/math/vec3.js", "../../core/math/quat.js"], function (_export, _context) {
  "use strict";

  var Vec3, Quat, TransformArray, TRANSFORM_STRIDE_IN_FLOATS, TRANSFORM_STRIDE_IN_BYTES, ROTATION_OFFSET, SCALE_OFFSET;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  _export("TransformArray", void 0);
  return {
    setters: [function (_coreMathVec3Js) {
      Vec3 = _coreMathVec3Js.Vec3;
    }, function (_coreMathQuatJs) {
      Quat = _coreMathQuatJs.Quat;
    }],
    execute: function () {
      TRANSFORM_STRIDE_IN_FLOATS = 10;
      TRANSFORM_STRIDE_IN_BYTES = Float64Array.BYTES_PER_ELEMENT * TRANSFORM_STRIDE_IN_FLOATS;
      ROTATION_OFFSET = 3;
      SCALE_OFFSET = ROTATION_OFFSET + 4;
      /**
       * Array-buffer-based transform array.
       */
      _export("TransformArray", TransformArray = class TransformArray {
        static get BYTES_PER_ELEMENT() {
          return TRANSFORM_STRIDE_IN_BYTES;
        }
        constructor(bufferOrLength, byteOffset, length_) {
          this._data = void 0;
          if (typeof bufferOrLength === 'undefined') {
            this._data = new Float64Array();
          } else if (typeof bufferOrLength === 'number') {
            this._data = new Float64Array(TRANSFORM_STRIDE_IN_FLOATS * bufferOrLength);
          } else {
            this._data = new Float64Array(bufferOrLength, byteOffset, typeof length_ === 'number' ? TRANSFORM_STRIDE_IN_FLOATS * length_ : undefined);
          }
        }
        get buffer() {
          return this._data.buffer;
        }
        get byteLength() {
          return this._data.byteLength;
        }
        get byteOffset() {
          return this._data.byteOffset;
        }
        get length() {
          return this._data.length / TRANSFORM_STRIDE_IN_FLOATS;
        }
        getTransform(index, out) {
          const {
            _data: data
          } = this;
          const {
            position,
            rotation,
            scale
          } = out;
          const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Vec3.fromArray(position, data, baseOffset);
          Quat.fromArray(rotation, data, baseOffset + ROTATION_OFFSET);
          Vec3.fromArray(scale, data, baseOffset + SCALE_OFFSET);
          return out;
        }
        getPosition(index, out) {
          const {
            _data: data
          } = this;
          const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Vec3.fromArray(out, data, baseOffset);
          return out;
        }
        getRotation(index, out) {
          const {
            _data: data
          } = this;
          const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Quat.fromArray(out, data, baseOffset + ROTATION_OFFSET);
          return out;
        }
        getScale(index, out) {
          const {
            _data: data
          } = this;
          const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Vec3.fromArray(out, data, baseOffset + SCALE_OFFSET);
          return out;
        }
        setTransform(index, value) {
          const {
            _data: data
          } = this;
          const {
            position,
            rotation,
            scale
          } = value;
          const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Vec3.toArray(data, position, baseOffset);
          Quat.toArray(data, rotation, baseOffset + ROTATION_OFFSET);
          Vec3.toArray(data, scale, baseOffset + SCALE_OFFSET);
        }
        setPosition(index, value) {
          const {
            _data: data
          } = this;
          const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Vec3.toArray(data, value, baseOffset);
        }
        setRotation(index, value) {
          const {
            _data: data
          } = this;
          const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Quat.toArray(data, value, baseOffset + ROTATION_OFFSET);
        }
        setScale(index, value) {
          const {
            _data: data
          } = this;
          const baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Vec3.toArray(data, value, baseOffset + SCALE_OFFSET);
        }

        /**
         * Same algorithm as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
         * except for the the operating objects are transforms.
         */
        copyWithin(target, start, end) {
          this._data.copyWithin(target * TRANSFORM_STRIDE_IN_FLOATS, start * TRANSFORM_STRIDE_IN_FLOATS, typeof end === 'number' ? end * TRANSFORM_STRIDE_IN_FLOATS : undefined);
        }

        /**
         * Same algorithm as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill
         * except for the the operating objects are transforms.
         */
        fill(value, start, end) {
          var _start, _end;
          const {
            length
          } = this;
          (_start = start) !== null && _start !== void 0 ? _start : start = 0;
          (_end = end) !== null && _end !== void 0 ? _end : end = length;
          if (start >= length) {
            return;
          }
          this.setTransform(start, value);
          for (let i = start + 1; i < end; ++i) {
            this.copyWithin(i, start, start + 1);
          }
        }

        /**
         * Same as `this.fill(Transform.ZERO, start, end)`.
         */
        fillZero(start, end) {
          this._data.fill(0.0, typeof start === 'number' ? start * TRANSFORM_STRIDE_IN_FLOATS : undefined, typeof end === 'number' ? end * TRANSFORM_STRIDE_IN_FLOATS : undefined);
        }

        /**
         * Same algorithm as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set
         * except for:
         * - the the operating objects are transforms,
         * - plain array is not allowed.
         */
        set(transformArray, targetOffset) {
          this._data.set(transformArray._data, typeof targetOffset === 'number' ? targetOffset * TRANSFORM_STRIDE_IN_FLOATS : undefined);
        }

        /**
         * Same algorithm as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice
         * except for the the operating objects are transforms.
         */
        slice(start, end) {
          const dataSliced = this._data.slice(typeof start === 'number' ? start * TRANSFORM_STRIDE_IN_FLOATS : undefined, typeof end === 'number' ? end * TRANSFORM_STRIDE_IN_FLOATS : undefined);
          return new TransformArray(dataSliced.buffer, dataSliced.byteOffset, dataSliced.length / TRANSFORM_STRIDE_IN_FLOATS);
        }

        /**
         * Copy a span of `source` into `this`.
         * Equivalent to `this.set(source.slice(sourceOffset, sourceOffset + size), targetOffset)`
         * except without perform the slicing.
         * */
        copyRange(targetOffset, source, sourceOffset, size) {
          const sizeInFloats = TRANSFORM_STRIDE_IN_FLOATS * size;
          const targetFloats = this._data;
          const targetStartInFloats = TRANSFORM_STRIDE_IN_FLOATS * targetOffset;
          const sourceFloats = source._data;
          const sourceStartInFloats = TRANSFORM_STRIDE_IN_FLOATS * sourceOffset;
          for (let i = 0; i < sizeInFloats; ++i) {
            targetFloats[targetStartInFloats + i] = sourceFloats[sourceStartInFloats + i];
          }
        }
      });
    }
  };
});