System.register("q-bundled:///fs/cocos/core/math/size.js", ["../data/class.js", "../value-types/value-type.js", "../global-exports.js"], function (_export, _context) {
  "use strict";

  var CCClass, ValueType, legacyCC, Size, _class;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function size(width = 0, height = 0) {
    return new Size(width, height);
  }
  _export({
    Size: void 0,
    size: size
  });
  return {
    setters: [function (_dataClassJs) {
      CCClass = _dataClassJs.CCClass;
    }, function (_valueTypesValueTypeJs) {
      ValueType = _valueTypesValueTypeJs.ValueType;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }],
    execute: function () {
      /**
       * @en Two dimensional size type representing the width and height.
       * @zh 二维尺寸。
       */
      _export("Size", Size = class Size extends ValueType {
        /**
         * @en Calculate the interpolation result between this size and another one with given ratio
         * @zh 根据指定的插值比率，从当前尺寸到目标尺寸之间做插值。
         * @param out Output Size.
         * @param from Original Size.
         * @param to Target Size.
         * @param ratio The interpolation coefficient.The range is [0,1].
         * @returns A vector consisting of linear interpolation of the width and height of the current size to the width and height of the target size at a specified interpolation ratio, respectively.
         */
        static lerp(out, from, to, ratio) {
          out.width = from.width + (to.width - from.width) * ratio;
          out.height = from.height + (to.height - from.height) * ratio;
          return out;
        }

        /**
         * @en Check whether `Size` a is equal to `Size` b.
         * @zh 判断两个尺寸是否相等。
         * @param a Size a.
         * @param b Size b.
         * @returns Returns `true' when both dimensions are equal in width and height; otherwise returns `false'.
         */
        static equals(a, b) {
          return a.width === b.width && a.height === b.height;
        }

        // compatibility with vector interfaces
        set x(val) {
          this.width = val;
        }
        get x() {
          return this.width;
        }
        set y(val) {
          this.height = val;
        }
        get y() {
          return this.height;
        }

        /**
         * @en Constructor a size from another one.
         * @zh 构造与指定尺寸相等的尺寸。
         * @param other Specified Size.
         */

        /**
         * @en Constructor a size with specified values.
         * @zh 构造具有指定宽度和高度的尺寸。
         * @param width width of the Size, default value is 0.
         * @param height height of the Size, default value is 0.
         */

        constructor(width, height) {
          super();
          if (typeof width === 'object') {
            this.width = width.width;
            this.height = width.height;
          } else {
            this.width = width || 0;
            this.height = height || 0;
          }
        }

        /**
         * @en clone the current `Size`.
         * @zh 克隆当前尺寸。
         */
        clone() {
          return new Size(this.width, this.height);
        }

        /**
         * @en Set values with another `Size`.
         * @zh 设置当前尺寸使其与指定的尺寸相等。
         * @param other Specified Size.
         * @returns `this`
         */

        /**
         * @en Set the value of each component of the current `Size`.
         * @zh 设置当前尺寸的具体参数。
         * @param width Specified width
         * @param height Specified height
         * @returns `this`
         */

        set(width, height) {
          if (typeof width === 'object') {
            this.height = width.height;
            this.width = width.width;
          } else {
            this.width = width || 0;
            this.height = height || 0;
          }
          return this;
        }

        /**
         * @en Check whether the current `Size` equals another one.
         * @zh 判断当前尺寸是否与指定尺寸的相等。
         * @param other Specified Size
         * @returns Returns `true' when both dimensions are equal in width and height; otherwise returns `false'.
         */
        equals(other) {
          return this.width === other.width && this.height === other.height;
        }

        /**
         * @en Calculate the interpolation result between this size and another one with given ratio
         * @zh 根据指定的插值比率，从当前尺寸到目标尺寸之间做插值。
         * @param to Target Size.
         * @param ratio The interpolation coefficient.The range is [0,1].
         */
        lerp(to, ratio) {
          this.width += (to.width - this.width) * ratio;
          this.height += (to.height - this.height) * ratio;
          return this;
        }

        /**
         * @en Return the information of the current size in string
         * @zh 返回当前尺寸的字符串表示。
         * @returns The information of the current size in string
         */
        toString() {
          return `(${this.width.toFixed(2)}, ${this.height.toFixed(2)})`;
        }
      });
      _class = Size;
      Size.ZERO = Object.freeze(new _class(0, 0));
      Size.ONE = Object.freeze(new _class(1, 1));
      CCClass.fastDefine('cc.Size', Size, {
        width: 0,
        height: 0
      });

      /**
       * @en Constructs a `Size` object.
       * @zh 等价于 `new Size(other)`。
       * @param other Specified Size.
       * @returns `new Size(other)`
       */

      /**
       * @en Constructs a `Size` object.
       * @zh 等价于 `new Size(x, y)`。
       * @param width Specified width
       * @param height Specified height
       * @returns `new Size(w, h)`
       */

      legacyCC.size = size;
      legacyCC.Size = Size;
    }
  };
});