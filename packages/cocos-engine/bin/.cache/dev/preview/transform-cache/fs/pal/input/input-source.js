System.register("q-bundled:///fs/pal/input/input-source.js", ["../../cocos/core/math/index.js"], function (_export, _context) {
  "use strict";

  var Vec2, Vec3, InputSource, InputSourceAxis1D, InputSourceAxis2D, InputSourceAxis3D, InputSourceQuat, CompositeInputSourceAxis1D, CompositeInputSourceAxis2D, CompositeInputSourceAxis3D, InputSourceButton, InputSourceDpad, InputSourceStick, InputSourceOrientation, InputSourcePosition, InputSourceTouch;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2022 Chukong Technologies Inc.
                                                                                                                                                                                                            Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
                                                                                                                                                                                                            http://www.cocos.com
                                                                                                                                                                                                           
                                                                                                                                                                                                            Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                            of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                            in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                                            use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                                            of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                                            subject to the following conditions:
                                                                                                                                                                                                           
                                                                                                                                                                                                            The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                            all copies or substantial portions of the Software.
                                                                                                                                                                                                           
                                                                                                                                                                                                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                            THE SOFTWARE.
                                                                                                                                                                                                           */
  return {
    setters: [function (_cocosCoreMathIndexJs) {
      Vec2 = _cocosCoreMathIndexJs.Vec2;
      Vec3 = _cocosCoreMathIndexJs.Vec3;
    }],
    execute: function () {
      /**
       * @en The abstract class for input source, which is used to control the input signal of a mono input source
       * @zh InputSource 抽象类，该类用于控制单一输入源的输入信号
       */
      _export("InputSource", InputSource = function InputSource() {});
      /**
       * @en The class for input source of 1D Axis, which is used to control the input signal of a mono input source
       * @zh 1D 轴的 InputSource 类，该类用于控制单一输入源的输入信号
       */
      _export("InputSourceAxis1D", InputSourceAxis1D = /*#__PURE__*/function (_InputSource) {
        _inheritsLoose(InputSourceAxis1D, _InputSource);
        function InputSourceAxis1D() {
          return _InputSource.apply(this, arguments) || this;
        }
        var _proto = InputSourceAxis1D.prototype;
        /**
         * @en Get the signal value of the input source, ranged from -1 to 1
         * @zh 获取输入源的信号值，取值范围从 -1 到 1
         */
        _proto.getValue = function getValue() {
          throw new Error('Method not implemented.');
        };
        return InputSourceAxis1D;
      }(InputSource));
      /**
       * @en The class for input source of 2D Axis, which is used to control the input signal of a mono input source
       * @zh 2D 轴的 InputSource 类，该类用于控制单一输入源的输入信号
       */
      _export("InputSourceAxis2D", InputSourceAxis2D = /*#__PURE__*/function (_InputSource2) {
        _inheritsLoose(InputSourceAxis2D, _InputSource2);
        function InputSourceAxis2D() {
          return _InputSource2.apply(this, arguments) || this;
        }
        var _proto2 = InputSourceAxis2D.prototype;
        /**
         * @en Get the signal value of the input source, which returns a Vec2 object.
         * @zh 获取输入源的信号值，该方法返回一个 Vec2 对象
         */
        _proto2.getValue = function getValue() {
          throw new Error('Method not implemented.');
        };
        return InputSourceAxis2D;
      }(InputSource));
      /**
       * @en The class for input source of 3D Axis, which is used to control the input signal of a mono input source
       * @zh 3D 轴的 InputSource 类，该类用于控制单一输入源的输入信号
       */
      _export("InputSourceAxis3D", InputSourceAxis3D = /*#__PURE__*/function (_InputSource3) {
        _inheritsLoose(InputSourceAxis3D, _InputSource3);
        function InputSourceAxis3D() {
          return _InputSource3.apply(this, arguments) || this;
        }
        var _proto3 = InputSourceAxis3D.prototype;
        /**
         * @en Get the signal value of the input source, which returns a Vec3 object.
         * @zh 获取输入源的信号值，该方法返回一个 Vec3 对象
         */
        _proto3.getValue = function getValue() {
          throw new Error('Method not implemented.');
        };
        return InputSourceAxis3D;
      }(InputSource));
      /**
       * @en The class for input source of Quaternion, which is used to control the input signal of a mono input source
       * @zh 四元数的 InputSource 类，该类用于控制单一输入源的输入信号
       */
      _export("InputSourceQuat", InputSourceQuat = /*#__PURE__*/function (_InputSource4) {
        _inheritsLoose(InputSourceQuat, _InputSource4);
        function InputSourceQuat() {
          return _InputSource4.apply(this, arguments) || this;
        }
        var _proto4 = InputSourceQuat.prototype;
        /**
         * @en Get the signal value of the input source, which returns a Quat object.
         * @zh 获取输入源的信号值，该方法返回一个 Quat 对象
         */
        _proto4.getValue = function getValue() {
          throw new Error('Method not implemented.');
        };
        return InputSourceQuat;
      }(InputSource));
      /**
       * @en The class for input source of 1D Axis, which is used to control the input signal of a composite of multi input source
       * @zh 1D 轴的 InputSource 类，该类用于控制多个输入源组合的输入信号
       */
      _export("CompositeInputSourceAxis1D", CompositeInputSourceAxis1D = /*#__PURE__*/function (_InputSourceAxis1D) {
        _inheritsLoose(CompositeInputSourceAxis1D, _InputSourceAxis1D);
        function CompositeInputSourceAxis1D(options) {
          var _this;
          _this = _InputSourceAxis1D.call(this) || this;
          /**
           * @en The input source object of positive 1D axis
           * @zh 1D 轴的正向的输入源对象
           */
          _this.positive = void 0;
          /**
           * @en The input source object of negative 1D axis
           * @zh 1D 轴的负向的输入源对象
           */
          _this.negative = void 0;
          _this.positive = options.positive;
          _this.negative = options.negative;
          return _this;
        }
        /**
         * @en Get the signal value of the input source, ranged from -1 to 1.
         * @zh 获取输入源的信号值，取值范围从 -1 到 1
         */
        var _proto5 = CompositeInputSourceAxis1D.prototype;
        _proto5.getValue = function getValue() {
          var positiveValue = this.positive.getValue();
          var negativeValue = this.negative.getValue();
          if (Math.abs(positiveValue) > Math.abs(negativeValue)) {
            return positiveValue;
          }
          return -negativeValue;
        };
        return CompositeInputSourceAxis1D;
      }(InputSourceAxis1D));
      /**
       * @en The class for input source of 2D Axis, which is used to control the input signal of a composite of multi input source
       * @zh 2D 轴的 InputSource 类，该类用于控制多个输入源组合的输入信号
       */
      _export("CompositeInputSourceAxis2D", CompositeInputSourceAxis2D = /*#__PURE__*/function (_InputSourceAxis2D) {
        _inheritsLoose(CompositeInputSourceAxis2D, _InputSourceAxis2D);
        function CompositeInputSourceAxis2D(options) {
          var _this2;
          _this2 = _InputSourceAxis2D.call(this) || this;
          /**
           * @en The input source object of up direction of 2D axis
           * @zh 2D 轴的向上的输入源对象
           */
          _this2.up = void 0;
          /**
           * @en The input source object of down direction of 2D axis
           * @zh 2D 轴的向下的输入源对象
           */
          _this2.down = void 0;
          /**
           * @en The input source object of left direction of 2D axis
           * @zh 2D 轴的向左的输入源对象
           */
          _this2.left = void 0;
          /**
           * @en The input source object of right direction of 2D axis
           * @zh 2D 轴的向右的输入源对象
           */
          _this2.right = void 0;
          /**
           * @en The composite input source object on the x axis of 2D axis
           * @zh 2D 轴在 x 轴上的组合输入源对象
           */
          _this2.xAxis = void 0;
          /**
           * @en The composite input source object on the y axis of 2D axis
           * @zh 2D 轴在 y 轴上的组合输入源对象
           */
          _this2.yAxis = void 0;
          _this2.up = options.up;
          _this2.down = options.down;
          _this2.left = options.left;
          _this2.right = options.right;
          _this2.xAxis = new CompositeInputSourceAxis1D({
            positive: _this2.right,
            negative: _this2.left
          });
          _this2.yAxis = new CompositeInputSourceAxis1D({
            positive: _this2.up,
            negative: _this2.down
          });
          return _this2;
        }
        /**
         * @en Get the signal value of the input source, which returns a Vec2 object.
         * @zh 获取输入源的信号值，该方法返回一个 Vec2 对象
         */
        var _proto6 = CompositeInputSourceAxis2D.prototype;
        _proto6.getValue = function getValue() {
          return new Vec2(this.xAxis.getValue(), this.yAxis.getValue());
        };
        return CompositeInputSourceAxis2D;
      }(InputSourceAxis2D));
      /**
       * @en The class for input source of 3D Axis, which is used to control the input signal of a composite of multi input source
       * @zh 3D 轴的 InputSource 类，该类用于控制多个输入源组合的输入信号
       */
      _export("CompositeInputSourceAxis3D", CompositeInputSourceAxis3D = /*#__PURE__*/function (_InputSourceAxis3D) {
        _inheritsLoose(CompositeInputSourceAxis3D, _InputSourceAxis3D);
        function CompositeInputSourceAxis3D(options) {
          var _this3;
          _this3 = _InputSourceAxis3D.call(this) || this;
          /**
           * @en The input source object of up direction of 3D axis
           * @zh 3D 轴的向上的输入源对象
           */
          _this3.up = void 0;
          /**
           * @en The input source object of down direction of 3D axis
           * @zh 3D 轴的向下的输入源对象
           */
          _this3.down = void 0;
          /**
           * @en The input source object of left direction of 3D axis
           * @zh 3D 轴的向左的输入源对象
           */
          _this3.left = void 0;
          /**
           * @en The input source object of right direction of 3D axis
           * @zh 3D 轴的向右的输入源对象
           */
          _this3.right = void 0;
          /**
           * @en The input source object of forward direction of 3D axis
           * @zh 3D 轴的向前的输入源对象
           */
          _this3.forward = void 0;
          /**
           * @en The input source object of backward direction of 3D axis
           * @zh 3D 轴的向后的输入源对象
           */
          _this3.backward = void 0;
          /**
           * @en The composite input source object on the x axis of 3D axis
           * @zh 3D 轴在 x 轴上的组合输入源对象
           */
          _this3.xAxis = void 0;
          /**
           * @en The composite input source object on the y axis of 3D axis
           * @zh 3D 轴在 y 轴上的组合输入源对象
           */
          _this3.yAxis = void 0;
          /**
           * @en The composite input source object on the z axis of 3D axis
           * @zh 3D 轴在 z 轴上的组合输入源对象
           */
          _this3.zAxis = void 0;
          _this3.up = options.up;
          _this3.down = options.down;
          _this3.left = options.left;
          _this3.right = options.right;
          _this3.forward = options.forward;
          _this3.backward = options.backward;
          _this3.xAxis = new CompositeInputSourceAxis1D({
            positive: _this3.right,
            negative: _this3.left
          });
          _this3.yAxis = new CompositeInputSourceAxis1D({
            positive: _this3.up,
            negative: _this3.down
          });
          _this3.zAxis = new CompositeInputSourceAxis1D({
            positive: _this3.forward,
            negative: _this3.backward
          });
          return _this3;
        }

        /**
         * @en Get the signal value of the input source, which returns a Vec3 object.
         * @zh 获取输入源的信号值，该方法返回一个 Vec3 对象
         */
        var _proto7 = CompositeInputSourceAxis3D.prototype;
        _proto7.getValue = function getValue() {
          return new Vec3(this.xAxis.getValue(), this.yAxis.getValue(), this.zAxis.getValue());
        };
        return CompositeInputSourceAxis3D;
      }(InputSourceAxis3D));
      /**
       * @en The class for input source of mono button, whose input signal value is ranged from 0 to 1
       * @zh 单一按键输入源类, 输入信号源的取值范围是 0 到 1
       */
      _export("InputSourceButton", InputSourceButton = /*#__PURE__*/function (_InputSourceAxis1D2) {
        _inheritsLoose(InputSourceButton, _InputSourceAxis1D2);
        function InputSourceButton() {
          return _InputSourceAxis1D2.apply(this, arguments) || this;
        }
        var _proto8 = InputSourceButton.prototype;
        /**
         * @en Get the signal value of the input source, ranged from 0 to 1
         * @zh 获取输入源的信号值，取值范围从 0 到 1
         */
        _proto8.getValue = function getValue() {
          return _InputSourceAxis1D2.prototype.getValue.call(this);
        };
        return InputSourceButton;
      }(InputSourceAxis1D));
      /**
       * @en The class for input source of dpad, whose input signal value a Vec2 object
       * @zh 手柄方向键输入源类, 输入信号源的取值是一个 Vec2 对象
       */
      _export("InputSourceDpad", InputSourceDpad = /*#__PURE__*/function (_CompositeInputSource) {
        _inheritsLoose(InputSourceDpad, _CompositeInputSource);
        function InputSourceDpad() {
          return _CompositeInputSource.apply(this, arguments) || this;
        }
        return InputSourceDpad;
      }(CompositeInputSourceAxis2D));
      /**
       * @en The class for input source of stick, whose input signal value a Vec2 object
       * @zh 摇杆输入源类, 输入信号源的取值是一个 Vec2 对象
       */
      _export("InputSourceStick", InputSourceStick = /*#__PURE__*/function (_CompositeInputSource2) {
        _inheritsLoose(InputSourceStick, _CompositeInputSource2);
        function InputSourceStick() {
          return _CompositeInputSource2.apply(this, arguments) || this;
        }
        return InputSourceStick;
      }(CompositeInputSourceAxis2D));
      /**
       * @en The class for input source of orientation, whose input signal value a Quat object
       * @zh 方向输入源类, 输入信号源的取值是一个 Quat 对象
       */
      _export("InputSourceOrientation", InputSourceOrientation = /*#__PURE__*/function (_InputSourceQuat) {
        _inheritsLoose(InputSourceOrientation, _InputSourceQuat);
        function InputSourceOrientation() {
          return _InputSourceQuat.apply(this, arguments) || this;
        }
        var _proto9 = InputSourceOrientation.prototype;
        /**
         * @en Get the signal value of the input source, which returns a Quat object.
         * @zh 获取输入源的信号值，该方法返回一个 Quat 对象
         */
        _proto9.getValue = function getValue() {
          return _InputSourceQuat.prototype.getValue.call(this);
        };
        return InputSourceOrientation;
      }(InputSourceQuat));
      /**
       * @en The class for input source of position, whose input signal value a Vec3 object
       * @zh 坐标输入源类, 输入信号源的取值是一个 Vec3 对象
       */
      _export("InputSourcePosition", InputSourcePosition = /*#__PURE__*/function (_InputSourceAxis3D2) {
        _inheritsLoose(InputSourcePosition, _InputSourceAxis3D2);
        function InputSourcePosition() {
          return _InputSourceAxis3D2.apply(this, arguments) || this;
        }
        var _proto10 = InputSourcePosition.prototype;
        /**
         * @en Get the signal value of the input source, which returns a Vec3 object.
         * @zh 获取输入源的信号值，该方法返回一个 Vec3 对象
         */
        _proto10.getValue = function getValue() {
          return _InputSourceAxis3D2.prototype.getValue.call(this);
        };
        return InputSourcePosition;
      }(InputSourceAxis3D));
      /**
       * @en The class for input source of mono button touch, whose input signal value is ranged from 0 or 1
       * @zh 单一按键触摸输入源类, 输入信号源的取值范围是 0 或 1
       */
      _export("InputSourceTouch", InputSourceTouch = /*#__PURE__*/function (_InputSourceAxis1D3) {
        _inheritsLoose(InputSourceTouch, _InputSourceAxis1D3);
        function InputSourceTouch() {
          return _InputSourceAxis1D3.apply(this, arguments) || this;
        }
        var _proto11 = InputSourceTouch.prototype;
        /**
         * @en Get the signal value of the input source, ranged from 0 or 1
         * @zh 获取输入源的信号值，取值范围从 0 或 1
         */
        _proto11.getValue = function getValue() {
          return _InputSourceAxis1D3.prototype.getValue.call(this);
        };
        return InputSourceTouch;
      }(InputSourceAxis1D));
    }
  };
});