System.register("q-bundled:///fs/cocos/animation/core/transform-array.js", ["../../core/math/vec3.js", "../../core/math/quat.js"], function (_export, _context) {
  "use strict";

  var Vec3, Quat, TRANSFORM_STRIDE_IN_FLOATS, TRANSFORM_STRIDE_IN_BYTES, ROTATION_OFFSET, SCALE_OFFSET, TransformArray;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      _export("TransformArray", TransformArray = /*#__PURE__*/function () {
        function TransformArray(bufferOrLength, byteOffset, length_) {
          this._data = void 0;
          if (typeof bufferOrLength === 'undefined') {
            this._data = new Float64Array();
          } else if (typeof bufferOrLength === 'number') {
            this._data = new Float64Array(TRANSFORM_STRIDE_IN_FLOATS * bufferOrLength);
          } else {
            this._data = new Float64Array(bufferOrLength, byteOffset, typeof length_ === 'number' ? TRANSFORM_STRIDE_IN_FLOATS * length_ : undefined);
          }
        }
        var _proto = TransformArray.prototype;
        _proto.getTransform = function getTransform(index, out) {
          var data = this._data;
          var position = out.position,
            rotation = out.rotation,
            scale = out.scale;
          var baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Vec3.fromArray(position, data, baseOffset);
          Quat.fromArray(rotation, data, baseOffset + ROTATION_OFFSET);
          Vec3.fromArray(scale, data, baseOffset + SCALE_OFFSET);
          return out;
        };
        _proto.getPosition = function getPosition(index, out) {
          var data = this._data;
          var baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Vec3.fromArray(out, data, baseOffset);
          return out;
        };
        _proto.getRotation = function getRotation(index, out) {
          var data = this._data;
          var baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Quat.fromArray(out, data, baseOffset + ROTATION_OFFSET);
          return out;
        };
        _proto.getScale = function getScale(index, out) {
          var data = this._data;
          var baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Vec3.fromArray(out, data, baseOffset + SCALE_OFFSET);
          return out;
        };
        _proto.setTransform = function setTransform(index, value) {
          var data = this._data;
          var position = value.position,
            rotation = value.rotation,
            scale = value.scale;
          var baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Vec3.toArray(data, position, baseOffset);
          Quat.toArray(data, rotation, baseOffset + ROTATION_OFFSET);
          Vec3.toArray(data, scale, baseOffset + SCALE_OFFSET);
        };
        _proto.setPosition = function setPosition(index, value) {
          var data = this._data;
          var baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Vec3.toArray(data, value, baseOffset);
        };
        _proto.setRotation = function setRotation(index, value) {
          var data = this._data;
          var baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Quat.toArray(data, value, baseOffset + ROTATION_OFFSET);
        };
        _proto.setScale = function setScale(index, value) {
          var data = this._data;
          var baseOffset = TRANSFORM_STRIDE_IN_FLOATS * index;
          Vec3.toArray(data, value, baseOffset + SCALE_OFFSET);
        }

        /**
         * Same algorithm as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
         * except for the the operating objects are transforms.
         */;
        _proto.copyWithin = function copyWithin(target, start, end) {
          this._data.copyWithin(target * TRANSFORM_STRIDE_IN_FLOATS, start * TRANSFORM_STRIDE_IN_FLOATS, typeof end === 'number' ? end * TRANSFORM_STRIDE_IN_FLOATS : undefined);
        }

        /**
         * Same algorithm as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill
         * except for the the operating objects are transforms.
         */;
        _proto.fill = function fill(value, start, end) {
          var _start, _end;
          var length = this.length;
          (_start = start) !== null && _start !== void 0 ? _start : start = 0;
          (_end = end) !== null && _end !== void 0 ? _end : end = length;
          if (start >= length) {
            return;
          }
          this.setTransform(start, value);
          for (var i = start + 1; i < end; ++i) {
            this.copyWithin(i, start, start + 1);
          }
        }

        /**
         * Same as `this.fill(Transform.ZERO, start, end)`.
         */;
        _proto.fillZero = function fillZero(start, end) {
          this._data.fill(0.0, typeof start === 'number' ? start * TRANSFORM_STRIDE_IN_FLOATS : undefined, typeof end === 'number' ? end * TRANSFORM_STRIDE_IN_FLOATS : undefined);
        }

        /**
         * Same algorithm as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set
         * except for:
         * - the the operating objects are transforms,
         * - plain array is not allowed.
         */;
        _proto.set = function set(transformArray, targetOffset) {
          this._data.set(transformArray._data, typeof targetOffset === 'number' ? targetOffset * TRANSFORM_STRIDE_IN_FLOATS : undefined);
        }

        /**
         * Same algorithm as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice
         * except for the the operating objects are transforms.
         */;
        _proto.slice = function slice(start, end) {
          var dataSliced = this._data.slice(typeof start === 'number' ? start * TRANSFORM_STRIDE_IN_FLOATS : undefined, typeof end === 'number' ? end * TRANSFORM_STRIDE_IN_FLOATS : undefined);
          return new TransformArray(dataSliced.buffer, dataSliced.byteOffset, dataSliced.length / TRANSFORM_STRIDE_IN_FLOATS);
        }

        /**
         * Copy a span of `source` into `this`.
         * Equivalent to `this.set(source.slice(sourceOffset, sourceOffset + size), targetOffset)`
         * except without perform the slicing.
         * */;
        _proto.copyRange = function copyRange(targetOffset, source, sourceOffset, size) {
          var sizeInFloats = TRANSFORM_STRIDE_IN_FLOATS * size;
          var targetFloats = this._data;
          var targetStartInFloats = TRANSFORM_STRIDE_IN_FLOATS * targetOffset;
          var sourceFloats = source._data;
          var sourceStartInFloats = TRANSFORM_STRIDE_IN_FLOATS * sourceOffset;
          for (var i = 0; i < sizeInFloats; ++i) {
            targetFloats[targetStartInFloats + i] = sourceFloats[sourceStartInFloats + i];
          }
        };
        _createClass(TransformArray, [{
          key: "buffer",
          get: function get() {
            return this._data.buffer;
          }
        }, {
          key: "byteLength",
          get: function get() {
            return this._data.byteLength;
          }
        }, {
          key: "byteOffset",
          get: function get() {
            return this._data.byteOffset;
          }
        }, {
          key: "length",
          get: function get() {
            return this._data.length / TRANSFORM_STRIDE_IN_FLOATS;
          }
        }], [{
          key: "BYTES_PER_ELEMENT",
          get: function get() {
            return TRANSFORM_STRIDE_IN_BYTES;
          }
        }]);
        return TransformArray;
      }());
    }
  };
});