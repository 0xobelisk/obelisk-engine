System.register("q-bundled:///fs/cocos/particle/noise.js", ["../core/math/index.js"], function (_export, _context) {
  "use strict";

  var Vec2, Vec3, ParticleNoise;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             https://www.cocos.com/
                                                                                                                                                                                                                                                                                                                                                                                            
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
    setters: [function (_coreMathIndexJs) {
      Vec2 = _coreMathIndexJs.Vec2;
      Vec3 = _coreMathIndexJs.Vec3;
    }],
    execute: function () {
      /**
       * @en Noise generation class.
       * @zh 此类生成噪声纹理。
       */
      _export("ParticleNoise", ParticleNoise = /*#__PURE__*/function () {
        function ParticleNoise(permutation) {
          this.permutation = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
          this.accSpeed = new Vec3();
          this.noiseSpeed = new Vec3();
          this.noiseFrequency = 0.0;
          this.noiseAbs = new Vec3();
          this.noiseAmplitude = new Vec3();
          this.octaves = new Vec3();
          this.dt = 0.0;
          this.point = new Vec3();
          this.result = new Vec3();
          this.mixOut = new Vec2();
          if (permutation) {
            this.permutation = permutation;
          }
        }

        /**
         * @en Noise generation function.
         * @zh 噪声生成函数。
         * @param x @en Relative X coordinate. @zh 纹理坐标在 X 轴的偏移量。
         * @param y @en Relative Y coordinate. @zh 纹理坐标在 Y 轴的偏移量。
         * @param z @en Relative Z coordinate. @zh 纹理坐标在 Z 轴的偏移量。
         * @param min @en Min pixel value. @zh 像素最小值。
         * @param max @en Max pixel value. @zh 像素最大值。
         * @returns @en Texture pixel generated. @zh 返回生成的噪声纹理值。
         */
        var _proto = ParticleNoise.prototype;
        _proto.noise = function noise(x, y, z, min, max) {
          if (min === void 0) {
            min = 0;
          }
          if (max === void 0) {
            max = 1;
          }
          var p = new Array(512);
          for (var i = 0; i < 256; i++) {
            p[256 + i] = p[i] = this.permutation[i];
          }
          var X = Math.floor(x) & 255; // FIND UNIT CUBE THAT
          var Y = Math.floor(y) & 255; // CONTAINS POINT.
          var Z = Math.floor(z) & 255;
          x -= Math.floor(x); // FIND RELATIVE X,Y,Z
          y -= Math.floor(y); // OF POINT IN CUBE.
          z -= Math.floor(z);
          var u = this.fade(x); // COMPUTE FADE CURVES
          var v = this.fade(y); // FOR EACH OF X,Y,Z.
          var w = this.fade(z);
          var A = p[X] + Y;
          var AA = p[A] + Z;
          var AB = p[A + 1] + Z; // HASH COORDINATES OF
          var B = p[X + 1] + Y;
          var BA = p[B] + Z;
          var BB = p[B + 1] + Z; // THE 8 CUBE CORNERS,

          // The perlin noise value 0 -> 1
          var val = this.scale(this.lerp(w, this.lerp(v, this.lerp(u, this.grad(p[AA], x, y, z),
          // AND ADD
          this.grad(p[BA], x - 1, y, z)),
          // BLENDED
          this.lerp(u, this.grad(p[AB], x, y - 1, z),
          // RESULTS
          this.grad(p[BB], x - 1, y - 1, z))),
          // FROM  8
          this.lerp(v, this.lerp(u, this.grad(p[AA + 1], x, y, z - 1),
          // CORNERS
          this.grad(p[BA + 1], x - 1, y, z - 1)),
          // OF CUBE
          this.lerp(u, this.grad(p[AB + 1], x, y - 1, z - 1), this.grad(p[BB + 1], x - 1, y - 1, z - 1)))));
          return min + val * (max - min);
        };
        _proto.fade = function fade(t) {
          return t * t * t * (t * (t * 6 - 15) + 10);
        };
        _proto.lerp = function lerp(t, a, b) {
          return a + t * (b - a);
        };
        _proto.grad = function grad(hash, x, y, z) {
          var h = hash & 15; // CONVERT LO 4 BITS OF HASH CODE
          var u = h < 8 ? x : y; // INTO 12 this.gradIENT DIRECTIONS.
          var v = h < 4 ? y : h === 12 || h === 14 ? x : z;
          return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
        };
        _proto.scale = function scale(n) {
          return (1 + n) / 2;
        };
        /**
         * @en Set texture rolling speed.
         * @zh 设置纹理滚动速度。
         * @param x @en X axis roll speed. @zh X 轴滚动速度。
         * @param y @en Y axis roll speed. @zh Y 轴滚动速度。
         * @param z @en Z axis roll speed. @zh Z 轴滚动速度。
         */
        _proto.setSpeed = function setSpeed(x, y, z) {
          this.noiseSpeed.set(x, y, z);
        }

        /**
         * @en Set noise frequency.
         * @zh 设置生成的噪声频率。
         * @param f @en Noise texture frequency. @zh 噪声频率。
         */;
        _proto.setFrequency = function setFrequency(f) {
          this.noiseFrequency = f;
        }

        /**
         * @zh 将最终噪声值重新映射到不同的范围。
         * @en The curve that describes how the final noise values are transformed.
         * @param x @en X value transformed. @zh X 轴上噪声值的偏移。
         * @param y @en Y value transformed. @zh Y 轴上噪声值的偏移。
         * @param z @en Z value transformed. @zh Z 轴上噪声值的偏移。
         * @deprecated since v3.6.0
         */;
        _proto.setAbs = function setAbs(x, y, z) {
          this.noiseAbs.set(x, y, z);
        }

        /**
         * @en Set noise amplititude.
         * @zh 设置噪声强度。
         * @param x @en Noise amplititude on X axis. @zh X 轴上的噪声强度。
         * @param y @en Noise amplititude on Y axis. @zh Y 轴上的噪声强度。
         * @param z @en Noise amplititude on Z axis. @zh Z 轴上的噪声强度。
         */;
        _proto.setAmplititude = function setAmplititude(x, y, z) {
          this.noiseAmplitude.set(x, y, z);
        }

        /**
         * @en Specify how many layers of overlapping noise are combined to produce the final noise values.
         * @zh 指定组合多少层重叠噪声来产生最终噪声值。
         * @param x @en Layer count. @zh 噪声层数。
         * @param y @en For each additional noise layer, reduce the strength by this proportion. @zh 每一层的噪声强度衰减比例。
         * @param z @en For each additional noise layer, adjust the frequency by this multiplier. @zh 对于每个附加的噪声层，按此乘数调整频率。
         */;
        _proto.setOctaves = function setOctaves(x, y, z) {
          this.octaves.set(x, y, z);
        }

        /**
         * @en Set update interval time.
         * @zh 设置更新间隔时间。
         * @param t @en Update interval time. @zh 更新的间隔时间。
         */;
        _proto.setTime = function setTime(t) {
          this.dt = t;
        }

        /**
         * @en Set noise texture sample point.
         * @zh 设置噪声纹理的采样点。
         * @param p @en Sample point of noise texture. @zh 噪声纹理采样点。
         */;
        _proto.setSamplePoint = function setSamplePoint(p) {
          this.point.set(p);
        }

        /**
         * @en Get the sample pixel.
         * @zh 获取采样的像素。
         * @returns @en The sample result. @zh 纹理采样结果。
         */;
        _proto.getResult = function getResult() {
          return this.result;
        };
        _proto.getNoise = function getNoise(sx, sy, sz, time, offset, noiseFrequency, octaves) {
          var frequency = noiseFrequency;
          var sum = 0.0;
          sum += this.noise(sx * frequency, sy * frequency, sz * frequency, -1.0, 1.0);
          if (octaves.x === 1) {
            return sum;
          }
          var amplitude = 1.0;
          var range = 1.0;
          for (var i = 1; i < octaves.x; ++i) {
            amplitude *= octaves.y;
            frequency *= octaves.z;
            range += amplitude;
            sum += this.noise(sx * frequency, sy * frequency, sz * frequency, -1.0, 1.0) * amplitude;
          }
          return sum / range;
        };
        _proto.getNoiseMix = function getNoiseMix(out, point, time, offSpeed, noiseFrequency, octaves) {
          out.x = this.getNoise(point.x, point.y, point.z, time, offSpeed, noiseFrequency, octaves);
          out.y = this.getNoise(point.y, point.z, point.x, time, offSpeed, noiseFrequency, octaves);
        }

        /**
         * @en Sample pixel from noise texture.
         * @zh 从噪声纹理采样像素。
         */;
        _proto.getNoiseParticle = function getNoiseParticle() {
          this.accSpeed.set(this.noiseSpeed.x * this.dt, this.noiseSpeed.y * this.dt, this.noiseSpeed.z * this.dt);
          var axisOffset = 1000.0;
          // eslint-disable-next-line max-len
          var sampX = this.getNoise(this.point.z + this.accSpeed.x, this.point.y, this.point.x, this.dt, this.accSpeed, this.noiseFrequency, this.octaves);
          // eslint-disable-next-line max-len
          var sampY = this.getNoise(this.point.x + axisOffset, this.point.z + this.accSpeed.y, this.point.y, this.dt, this.accSpeed, this.noiseFrequency, this.octaves);
          // eslint-disable-next-line max-len
          var sampZ = this.getNoise(this.point.y, this.point.x + axisOffset, this.point.z + this.accSpeed.z, this.dt, this.accSpeed, this.noiseFrequency, this.octaves);
          this.result.set(sampX * this.noiseAmplitude.x, sampY * this.noiseAmplitude.y, sampZ * this.noiseAmplitude.z);
        }

        /**
         * @en Generate noise texture preview.
         * @zh 生成噪声纹理的预览。
         * @param out @en Noise pixel array. @zh 噪声像素 RGB 数组。
         * @param width @en Texture width. @zh 纹理宽度。
         * @param height @en Texture height. @zh 纹理高度。
         */;
        _proto.getPreview = function getPreview(out, width, height) {
          for (var h = 0; h < height; ++h) {
            for (var w = 0; w < width; ++w) {
              var sampx = (w - width * 0.5) / width + this.noiseSpeed.x * this.dt;
              var sampy = (h - height * 0.5) / height + this.noiseSpeed.y * this.dt;
              var pix = this.getNoise(sampx, sampy, 0.0, this.dt, this.accSpeed, this.noiseFrequency, this.octaves);
              out[h * width + w] = (pix + 1.0) * 0.5;
            }
          }
        };
        return ParticleNoise;
      }());
    }
  };
});