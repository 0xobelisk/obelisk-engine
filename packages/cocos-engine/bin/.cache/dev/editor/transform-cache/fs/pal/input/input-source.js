System.register("q-bundled:///fs/pal/input/input-source.js", ["../../cocos/core/math/index.js"], function (_export, _context) {
  "use strict";

  var Vec2, Vec3, InputSource, InputSourceAxis1D, InputSourceAxis2D, InputSourceAxis3D, InputSourceQuat, CompositeInputSourceAxis1D, CompositeInputSourceAxis2D, CompositeInputSourceAxis3D, InputSourceButton, InputSourceDpad, InputSourceStick, InputSourceOrientation, InputSourcePosition, InputSourceTouch;
  _export({
    InputSource: void 0,
    InputSourceAxis1D: void 0,
    InputSourceAxis2D: void 0,
    InputSourceAxis3D: void 0,
    InputSourceQuat: void 0,
    CompositeInputSourceAxis1D: void 0,
    CompositeInputSourceAxis2D: void 0,
    CompositeInputSourceAxis3D: void 0,
    InputSourceButton: void 0,
    InputSourceDpad: void 0,
    InputSourceStick: void 0,
    InputSourceOrientation: void 0,
    InputSourcePosition: void 0,
    InputSourceTouch: void 0
  });
  return {
    setters: [function (_cocosCoreMathIndexJs) {
      Vec2 = _cocosCoreMathIndexJs.Vec2;
      Vec3 = _cocosCoreMathIndexJs.Vec3;
    }],
    execute: function () {
      /*
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
      /**
       * @en The abstract class for input source, which is used to control the input signal of a mono input source
       * @zh InputSource 抽象类，该类用于控制单一输入源的输入信号
       */
      _export("InputSource", InputSource = class InputSource {});
      /**
       * @en The class for input source of 1D Axis, which is used to control the input signal of a mono input source
       * @zh 1D 轴的 InputSource 类，该类用于控制单一输入源的输入信号
       */
      _export("InputSourceAxis1D", InputSourceAxis1D = class InputSourceAxis1D extends InputSource {
        /**
         * @en Get the signal value of the input source, ranged from -1 to 1
         * @zh 获取输入源的信号值，取值范围从 -1 到 1
         */
        getValue() {
          throw new Error('Method not implemented.');
        }
      });
      /**
       * @en The class for input source of 2D Axis, which is used to control the input signal of a mono input source
       * @zh 2D 轴的 InputSource 类，该类用于控制单一输入源的输入信号
       */
      _export("InputSourceAxis2D", InputSourceAxis2D = class InputSourceAxis2D extends InputSource {
        /**
         * @en Get the signal value of the input source, which returns a Vec2 object.
         * @zh 获取输入源的信号值，该方法返回一个 Vec2 对象
         */
        getValue() {
          throw new Error('Method not implemented.');
        }
      });
      /**
       * @en The class for input source of 3D Axis, which is used to control the input signal of a mono input source
       * @zh 3D 轴的 InputSource 类，该类用于控制单一输入源的输入信号
       */
      _export("InputSourceAxis3D", InputSourceAxis3D = class InputSourceAxis3D extends InputSource {
        /**
         * @en Get the signal value of the input source, which returns a Vec3 object.
         * @zh 获取输入源的信号值，该方法返回一个 Vec3 对象
         */
        getValue() {
          throw new Error('Method not implemented.');
        }
      });
      /**
       * @en The class for input source of Quaternion, which is used to control the input signal of a mono input source
       * @zh 四元数的 InputSource 类，该类用于控制单一输入源的输入信号
       */
      _export("InputSourceQuat", InputSourceQuat = class InputSourceQuat extends InputSource {
        /**
         * @en Get the signal value of the input source, which returns a Quat object.
         * @zh 获取输入源的信号值，该方法返回一个 Quat 对象
         */
        getValue() {
          throw new Error('Method not implemented.');
        }
      });
      /**
       * @en The class for input source of 1D Axis, which is used to control the input signal of a composite of multi input source
       * @zh 1D 轴的 InputSource 类，该类用于控制多个输入源组合的输入信号
       */
      _export("CompositeInputSourceAxis1D", CompositeInputSourceAxis1D = class CompositeInputSourceAxis1D extends InputSourceAxis1D {
        constructor(options) {
          super();
          /**
           * @en The input source object of positive 1D axis
           * @zh 1D 轴的正向的输入源对象
           */
          this.positive = void 0;
          /**
           * @en The input source object of negative 1D axis
           * @zh 1D 轴的负向的输入源对象
           */
          this.negative = void 0;
          this.positive = options.positive;
          this.negative = options.negative;
        }
        /**
         * @en Get the signal value of the input source, ranged from -1 to 1.
         * @zh 获取输入源的信号值，取值范围从 -1 到 1
         */
        getValue() {
          const positiveValue = this.positive.getValue();
          const negativeValue = this.negative.getValue();
          if (Math.abs(positiveValue) > Math.abs(negativeValue)) {
            return positiveValue;
          }
          return -negativeValue;
        }
      });
      /**
       * @en The class for input source of 2D Axis, which is used to control the input signal of a composite of multi input source
       * @zh 2D 轴的 InputSource 类，该类用于控制多个输入源组合的输入信号
       */
      _export("CompositeInputSourceAxis2D", CompositeInputSourceAxis2D = class CompositeInputSourceAxis2D extends InputSourceAxis2D {
        constructor(options) {
          super();
          /**
           * @en The input source object of up direction of 2D axis
           * @zh 2D 轴的向上的输入源对象
           */
          this.up = void 0;
          /**
           * @en The input source object of down direction of 2D axis
           * @zh 2D 轴的向下的输入源对象
           */
          this.down = void 0;
          /**
           * @en The input source object of left direction of 2D axis
           * @zh 2D 轴的向左的输入源对象
           */
          this.left = void 0;
          /**
           * @en The input source object of right direction of 2D axis
           * @zh 2D 轴的向右的输入源对象
           */
          this.right = void 0;
          /**
           * @en The composite input source object on the x axis of 2D axis
           * @zh 2D 轴在 x 轴上的组合输入源对象
           */
          this.xAxis = void 0;
          /**
           * @en The composite input source object on the y axis of 2D axis
           * @zh 2D 轴在 y 轴上的组合输入源对象
           */
          this.yAxis = void 0;
          this.up = options.up;
          this.down = options.down;
          this.left = options.left;
          this.right = options.right;
          this.xAxis = new CompositeInputSourceAxis1D({
            positive: this.right,
            negative: this.left
          });
          this.yAxis = new CompositeInputSourceAxis1D({
            positive: this.up,
            negative: this.down
          });
        }
        /**
         * @en Get the signal value of the input source, which returns a Vec2 object.
         * @zh 获取输入源的信号值，该方法返回一个 Vec2 对象
         */
        getValue() {
          return new Vec2(this.xAxis.getValue(), this.yAxis.getValue());
        }
      });
      /**
       * @en The class for input source of 3D Axis, which is used to control the input signal of a composite of multi input source
       * @zh 3D 轴的 InputSource 类，该类用于控制多个输入源组合的输入信号
       */
      _export("CompositeInputSourceAxis3D", CompositeInputSourceAxis3D = class CompositeInputSourceAxis3D extends InputSourceAxis3D {
        constructor(options) {
          super();
          /**
           * @en The input source object of up direction of 3D axis
           * @zh 3D 轴的向上的输入源对象
           */
          this.up = void 0;
          /**
           * @en The input source object of down direction of 3D axis
           * @zh 3D 轴的向下的输入源对象
           */
          this.down = void 0;
          /**
           * @en The input source object of left direction of 3D axis
           * @zh 3D 轴的向左的输入源对象
           */
          this.left = void 0;
          /**
           * @en The input source object of right direction of 3D axis
           * @zh 3D 轴的向右的输入源对象
           */
          this.right = void 0;
          /**
           * @en The input source object of forward direction of 3D axis
           * @zh 3D 轴的向前的输入源对象
           */
          this.forward = void 0;
          /**
           * @en The input source object of backward direction of 3D axis
           * @zh 3D 轴的向后的输入源对象
           */
          this.backward = void 0;
          /**
           * @en The composite input source object on the x axis of 3D axis
           * @zh 3D 轴在 x 轴上的组合输入源对象
           */
          this.xAxis = void 0;
          /**
           * @en The composite input source object on the y axis of 3D axis
           * @zh 3D 轴在 y 轴上的组合输入源对象
           */
          this.yAxis = void 0;
          /**
           * @en The composite input source object on the z axis of 3D axis
           * @zh 3D 轴在 z 轴上的组合输入源对象
           */
          this.zAxis = void 0;
          this.up = options.up;
          this.down = options.down;
          this.left = options.left;
          this.right = options.right;
          this.forward = options.forward;
          this.backward = options.backward;
          this.xAxis = new CompositeInputSourceAxis1D({
            positive: this.right,
            negative: this.left
          });
          this.yAxis = new CompositeInputSourceAxis1D({
            positive: this.up,
            negative: this.down
          });
          this.zAxis = new CompositeInputSourceAxis1D({
            positive: this.forward,
            negative: this.backward
          });
        }

        /**
         * @en Get the signal value of the input source, which returns a Vec3 object.
         * @zh 获取输入源的信号值，该方法返回一个 Vec3 对象
         */
        getValue() {
          return new Vec3(this.xAxis.getValue(), this.yAxis.getValue(), this.zAxis.getValue());
        }
      });
      /**
       * @en The class for input source of mono button, whose input signal value is ranged from 0 to 1
       * @zh 单一按键输入源类, 输入信号源的取值范围是 0 到 1
       */
      _export("InputSourceButton", InputSourceButton = class InputSourceButton extends InputSourceAxis1D {
        /**
         * @en Get the signal value of the input source, ranged from 0 to 1
         * @zh 获取输入源的信号值，取值范围从 0 到 1
         */
        getValue() {
          return super.getValue();
        }
      });
      /**
       * @en The class for input source of dpad, whose input signal value a Vec2 object
       * @zh 手柄方向键输入源类, 输入信号源的取值是一个 Vec2 对象
       */
      _export("InputSourceDpad", InputSourceDpad = class InputSourceDpad extends CompositeInputSourceAxis2D {});
      /**
       * @en The class for input source of stick, whose input signal value a Vec2 object
       * @zh 摇杆输入源类, 输入信号源的取值是一个 Vec2 对象
       */
      _export("InputSourceStick", InputSourceStick = class InputSourceStick extends CompositeInputSourceAxis2D {});
      /**
       * @en The class for input source of orientation, whose input signal value a Quat object
       * @zh 方向输入源类, 输入信号源的取值是一个 Quat 对象
       */
      _export("InputSourceOrientation", InputSourceOrientation = class InputSourceOrientation extends InputSourceQuat {
        /**
         * @en Get the signal value of the input source, which returns a Quat object.
         * @zh 获取输入源的信号值，该方法返回一个 Quat 对象
         */
        getValue() {
          return super.getValue();
        }
      });
      /**
       * @en The class for input source of position, whose input signal value a Vec3 object
       * @zh 坐标输入源类, 输入信号源的取值是一个 Vec3 对象
       */
      _export("InputSourcePosition", InputSourcePosition = class InputSourcePosition extends InputSourceAxis3D {
        /**
         * @en Get the signal value of the input source, which returns a Vec3 object.
         * @zh 获取输入源的信号值，该方法返回一个 Vec3 对象
         */
        getValue() {
          return super.getValue();
        }
      });
      /**
       * @en The class for input source of mono button touch, whose input signal value is ranged from 0 or 1
       * @zh 单一按键触摸输入源类, 输入信号源的取值范围是 0 或 1
       */
      _export("InputSourceTouch", InputSourceTouch = class InputSourceTouch extends InputSourceAxis1D {
        /**
         * @en Get the signal value of the input source, ranged from 0 or 1
         * @zh 获取输入源的信号值，取值范围从 0 或 1
         */
        getValue() {
          return super.getValue();
        }
      });
    }
  };
});