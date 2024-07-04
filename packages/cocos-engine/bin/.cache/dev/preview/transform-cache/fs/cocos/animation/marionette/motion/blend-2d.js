System.register("q-bundled:///fs/cocos/animation/marionette/motion/blend-2d.js", ["../../../core/index.js"], function (_export, _context) {
  "use strict";

  var approx, assertIsTrue, Vec2, blendSimpleDirectional, SimpleDirectionalIssueSameDirection, _DEV_NOTE, getGradientBandCartesianCoords, PRECOMPUTED_VIJ_DATA_STRIDE, PolarSpaceGradientBandInterpolator2D;
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
  /**
   * Validates the samples if they satisfied the requirements of simple directional algorithm.
   * @param samples Samples to validate.
   * @returns Issues the samples containing.
   */
  function validateSimpleDirectionalSamples(samples) {
    var nSamples = samples.length;
    var issues = [];
    var sameDirectionValidationFlag = new Array(samples.length).fill(false);
    samples.forEach(function (sample, iSample) {
      if (sameDirectionValidationFlag[iSample]) {
        return;
      }
      var sameDirectionSamples;
      for (var iCheckSample = 0; iCheckSample < nSamples; ++iCheckSample) {
        var checkSample = samples[iCheckSample];
        if (Vec2.equals(sample, checkSample, 1e-5)) {
          var _sameDirectionSamples;
          ((_sameDirectionSamples = sameDirectionSamples) !== null && _sameDirectionSamples !== void 0 ? _sameDirectionSamples : sameDirectionSamples = []).push(iCheckSample);
          sameDirectionValidationFlag[iCheckSample] = true;
        }
      }
      if (sameDirectionSamples) {
        sameDirectionSamples.unshift(iSample);
        issues.push(new SimpleDirectionalIssueSameDirection(sameDirectionSamples));
      }
    });
    return issues;
  }
  //#endregion

  /**
   * Cartesian Gradient Band Interpolation.
   * @param weights
   * @param thresholds
   * @param value
   */
  function sampleFreeformCartesian(weights, thresholds, value) {
    sampleFreeform(weights, thresholds, value, getGradientBandCartesianCoords);
  }
  function sampleFreeform(weights, samples, value, getGradientBandCoords) {
    weights.fill(0.0);
    var pIpInput = new Vec2(0, 0);
    var pIJ = new Vec2(0, 0);
    var sumInfluence = 0.0;
    var nSamples = samples.length;
    for (var iSample = 0; iSample < nSamples; ++iSample) {
      var influence = Number.MAX_VALUE;
      var outsideHull = false;
      for (var jSample = 0; jSample < nSamples; ++jSample) {
        if (iSample === jSample) {
          continue;
        }
        getGradientBandCoords(samples[iSample], samples[jSample], value, pIpInput, pIJ);
        var t = 1 - Vec2.dot(pIpInput, pIJ) / Vec2.lengthSqr(pIJ);
        if (t < 0) {
          outsideHull = true;
          break;
        }
        influence = Math.min(influence, t);
      }
      if (!outsideHull) {
        weights[iSample] = influence;
        sumInfluence += influence;
      }
    }
    if (sumInfluence > 0) {
      weights.forEach(function (influence, index) {
        return weights[index] = influence / sumInfluence;
      });
    }
  }
  /**
   * Solves the barycentric coordinates of `p` within triangle (0, `a`, `b`).
   * @param a Triangle vertex.
   * @param b Triangle vertex.
   * @param p Input vector.
   * @param resolutions The barycentric coordinates of `a` and `b`.
   * @returns
   */
  function solveBarycentric(a, b, p, resolutions) {
    // Let P = p - 0, A = a - 0, B = b - 0,
    // wA = (P x B) / (A x B)
    // wB = (P x A) / (B x A)
    var det = Vec2.cross(a, b);
    if (!det) {
      resolutions.wA = 0.0;
      resolutions.wB = 0.0;
    } else {
      resolutions.wA = Vec2.cross(p, b) / det;
      resolutions.wB = Vec2.cross(p, a) / -det;
    }
    return resolutions;
  }
  function signedAngle(v1, v2) {
    var angle = Vec2.angle(v1, v2);
    var determinate = v1.x * v2.y - v1.y * v2.x;
    return determinate < 0 ? -angle : angle;
  }
  _export({
    validateSimpleDirectionalSamples: validateSimpleDirectionalSamples,
    sampleFreeformCartesian: sampleFreeformCartesian
  });
  return {
    setters: [function (_coreIndexJs) {
      approx = _coreIndexJs.approx;
      assertIsTrue = _coreIndexJs.assertIsTrue;
      Vec2 = _coreIndexJs.Vec2;
    }],
    execute: function () {
      /**
       * Blends given samples using simple directional algorithm.
       * @param weights Result weights of each sample.
       * @param samples Every samples' parameter.
       * @param input Input parameter.
       */
      _export("blendSimpleDirectional", blendSimpleDirectional = function () {
        var CACHE_NORMALIZED_SAMPLE = new Vec2();
        var CACHE_BARYCENTRIC_SOLUTIONS = {
          wA: 0,
          wB: 0
        };
        return function blendSimpleDirectional(weights, samples, input) {
          assertIsTrue(weights.length === samples.length);
          if (samples.length === 0) {
            return;
          }
          if (samples.length === 1) {
            weights[0] = 1.0;
            return;
          }
          if (Vec2.strictEquals(input, Vec2.ZERO)) {
            var _iCenter = samples.findIndex(function (sample) {
              return Vec2.strictEquals(sample, Vec2.ZERO);
            });
            if (_iCenter >= 0) {
              weights[_iCenter] = 1.0;
            } else {
              weights.fill(1.0 / samples.length);
            }
            return;
          }

          // Finds out the sector the input point locates
          var iSectorStart = -1;
          var iSectorEnd = -1;
          var iCenter = -1;
          var lhsCosAngle = Number.NEGATIVE_INFINITY;
          var rhsCosAngle = Number.NEGATIVE_INFINITY;
          var inputX = input.x,
            inputY = input.y;
          for (var iSample = 0; iSample < samples.length; ++iSample) {
            var sample = samples[iSample];
            if (Vec2.equals(sample, Vec2.ZERO)) {
              iCenter = iSample;
              continue;
            }
            var sampleNormalized = Vec2.normalize(CACHE_NORMALIZED_SAMPLE, sample);
            var cosAngle = Vec2.dot(sampleNormalized, input);
            var sign = sampleNormalized.x * inputY - sampleNormalized.y * inputX;
            if (sign > 0) {
              if (cosAngle >= rhsCosAngle) {
                rhsCosAngle = cosAngle;
                iSectorStart = iSample;
              }
            } else if (cosAngle >= lhsCosAngle) {
              lhsCosAngle = cosAngle;
              iSectorEnd = iSample;
            }
          }
          var centerWeight = 0.0;
          if (iSectorStart < 0 || iSectorEnd < 0) {
            // Input fall at vertex.
            centerWeight = 1.0;
          } else {
            var _solveBarycentric = solveBarycentric(samples[iSectorStart], samples[iSectorEnd], input, CACHE_BARYCENTRIC_SOLUTIONS),
              wA = _solveBarycentric.wA,
              wB = _solveBarycentric.wB;
            var w1 = 0.0;
            var w2 = 0.0;
            var sum = wA + wB;
            if (sum > 1) {
              // Input fall at line C-A or C-B but not beyond C
              w1 = wA / sum;
              w2 = wB / sum;
            } else if (sum < 0) {
              // Input fall at line C-A or C-B but beyond A or B
              w1 = 0.0;
              w2 = 0.0;
              centerWeight = 1.0;
            } else {
              // Inside triangle
              w1 = wA;
              w2 = wB;
              centerWeight = 1.0 - sum;
            }
            weights[iSectorStart] = w1;
            weights[iSectorEnd] = w2;
          }

          // Center influence part
          if (centerWeight > 0.0) {
            if (iCenter >= 0) {
              weights[iCenter] = centerWeight;
            } else {
              var average = centerWeight / weights.length;
              for (var i = 0; i < weights.length; ++i) {
                weights[i] += average;
              }
            }
          }
        };
      }());
      /**
       * Simple directional issue representing some samples have same(or very similar) direction.
       */
      _export("SimpleDirectionalIssueSameDirection", SimpleDirectionalIssueSameDirection = function SimpleDirectionalIssueSameDirection(samples) {
        this.samples = samples;
      }); //#region Gradient Band Interpolation
      /**
       * In the following, two interpolation methods are implemented based on paper
       * [rune_skovbo_johansen_thesis.pdf](https://runevision.com/thesis/rune_skovbo_johansen_thesis.pdf).
       *
       * - Gradient brand interpolation in Cartesian space.
       *
       * - Gradient brand interpolation in polar space.
       *
       *   This is a variety of standard gradient brand interpolation
       *   which is suitable for velocity interpolation(the Cartesian one is not **WELL** suited as pointed out by the paper).
       *
       *   This type of method requires a motion to be placed at origin and
       *   the angles between adjacent points to be greater than 180°.
       */
      _DEV_NOTE = false;
      getGradientBandCartesianCoords = function getGradientBandCartesianCoords(pI, pJ, input, pIpInput, pIpJ) {
        Vec2.subtract(pIpInput, input, pI);
        Vec2.subtract(pIpJ, pJ, pI);
      };
      PRECOMPUTED_VIJ_DATA_STRIDE = 3;
      /**
       * The class tracking the polar space gradient band interpolation.
       * For code readers, throughout the implementation:
       * - Variable names like `V_IJ` denotes a vector pointing from example motion "I" to example motion "J";
       * - Variable names like `V_IX` denotes a vector pointing from example motion "I" to new velocity being queried, which is properly named "X".
       * For detail definitions see section 6.3 in [paper](https://runevision.com/thesis/rune_skovbo_johansen_thesis.pdf) .
       */
      _export("PolarSpaceGradientBandInterpolator2D", PolarSpaceGradientBandInterpolator2D = /*#__PURE__*/function () {
        function PolarSpaceGradientBandInterpolator2D(examples) {
          var angleMultiplier = PolarSpaceGradientBandInterpolator2D._ANGLE_MULTIPLIER;
          var nExamples = examples.length;
          var exampleMagnitudes = this._exampleMagnitudes = new Array(nExamples).fill(0.0);
          var exampleDirections = this._exampleDirections = examples.map(function (example, iExample) {
            var direction = Vec2.copy(new Vec2(), example);
            var magnitude = Vec2.len(direction);
            exampleMagnitudes[iExample] = magnitude;
            if (!approx(magnitude, 0.0, 1e-5)) {
              Vec2.multiplyScalar(direction, direction, 1.0 / magnitude);
            }
            return direction;
          });
          var precomputedVIJs = this._precomputedVIJs = new Float32Array(PRECOMPUTED_VIJ_DATA_STRIDE * nExamples * nExamples);
          for (var iExample = 0; iExample < nExamples; ++iExample) {
            var magnitudeI = exampleMagnitudes[iExample];
            var directionI = exampleDirections[iExample];
            for (var jExample = 0; jExample < nExamples; ++jExample) {
              if (iExample === jExample) {
                continue;
              }
              var magnitudeJ = exampleMagnitudes[jExample];
              var directionJ = exampleDirections[jExample];
              var averagedMagnitude = (magnitudeI + magnitudeJ) / 2;
              var pOutput = PRECOMPUTED_VIJ_DATA_STRIDE * (nExamples * iExample + jExample);
              precomputedVIJs[pOutput + 0] = (magnitudeJ - magnitudeI) / averagedMagnitude;
              precomputedVIJs[pOutput + 1] = signedAngle(directionI, directionJ) * angleMultiplier;
              precomputedVIJs[pOutput + 2] = averagedMagnitude;
            }
          }
          this._cacheVIXAngles = new Float32Array(nExamples);
        }
        var _proto = PolarSpaceGradientBandInterpolator2D.prototype;
        _proto.interpolate = function interpolate(weights, input) {
          var exampleDirections = this._exampleDirections,
            exampleMagnitudes = this._exampleMagnitudes,
            precomputedVIJs = this._precomputedVIJs,
            cacheVIXAngles = this._cacheVIXAngles;
          var cacheInputDirection = PolarSpaceGradientBandInterpolator2D._CACHE_INPUT_DIRECTION,
            cacheVIJ = PolarSpaceGradientBandInterpolator2D._CACHE_VIJ,
            cacheVIX = PolarSpaceGradientBandInterpolator2D._CACHE_VIX,
            angleMultiplier = PolarSpaceGradientBandInterpolator2D._ANGLE_MULTIPLIER;
          var nExamples = exampleDirections.length;
          assertIsTrue(weights.length === nExamples);

          // Specially handle 0/1 sample case, the algorithm is not defined for them.
          if (nExamples === 0) {
            return;
          } else if (nExamples === 1) {
            weights[0] = 1.0;
            return;
          }
          var vX = input;
          var magnitudeX = Vec2.len(vX);

          // Calculate $\angle(v_i, v_x) * \alpha$ for each example.
          // If either vector is zero, the angle is defined as zero.
          var vIXAngles = cacheVIXAngles;
          if (Vec2.equals(vX, Vec2.ZERO)) {
            for (var iExample = 0; iExample < nExamples; ++iExample) {
              vIXAngles[iExample] = 0.0;
            }
          } else {
            var directionX = Vec2.multiplyScalar(cacheInputDirection, vX, 1.0 / magnitudeX);
            for (var _iExample = 0; _iExample < nExamples; ++_iExample) {
              var directionI = exampleDirections[_iExample];
              if (Vec2.equals(directionI, Vec2.ZERO)) {
                vIXAngles[_iExample] = 0.0;
              } else {
                vIXAngles[_iExample] = signedAngle(directionI, directionX) * angleMultiplier;
              }
            }
          }

          // The polar space gradient band interpolation.
          var totalWeight = 0.0;
          for (var _iExample2 = 0; _iExample2 < nExamples; ++_iExample2) {
            var magnitudeI = exampleMagnitudes[_iExample2];
            var _directionI = exampleDirections[_iExample2];
            var minInfluence = Number.POSITIVE_INFINITY; // 1 - Math.abs(vIXAngles[iExample]) / Math.PI;
            for (var jExample = 0; jExample < nExamples; ++jExample) {
              if (_iExample2 === jExample) {
                continue;
              }
              var directionJ = exampleDirections[jExample];
              var precomputedDataIndex = PRECOMPUTED_VIJ_DATA_STRIDE * (nExamples * _iExample2 + jExample);
              var vIJMag = precomputedVIJs[precomputedDataIndex + 0],
                vIJAnglePrecomputed = precomputedVIJs[precomputedDataIndex + 1],
                averagedMagnitude = precomputedVIJs[precomputedDataIndex + 2];
              var vIJAngle = vIJAnglePrecomputed;
              var vIXAngle = vIXAngles[_iExample2];

              // Handle zero cases:
              // - If $v_i$(or $v_j$) is zero vector,
              //   the angle between v_i_j is defined to be the angle between $v_x$ and $v_j$(or $v_i$).
              // - If $v_x$ is zero vector,
              //   the angle between v_i_x is defined to be the angle between $v_i$ and $v_j$.
              if (Vec2.equals(_directionI, Vec2.ZERO)) {
                vIJAngle = vIXAngles[jExample];
                // And `vIXAngle` is 0 as computed above.
              } else if (Vec2.equals(directionJ, Vec2.ZERO)) {
                vIJAngle = vIXAngles[_iExample2];
              } else if (Vec2.equals(vX, Vec2.ZERO)) {
                vIXAngle = vIJAngle;
              }
              var vIJ = Vec2.set(cacheVIJ, vIJMag, vIJAngle);
              var vIX = Vec2.set(cacheVIX, (magnitudeX - magnitudeI) / averagedMagnitude, vIXAngle);

              // Calculate the influence.
              // Note we can't cache `len(vIJ)` due to above process of `vIJ.y`!
              var influence = 1.0 - Vec2.dot(vIX, vIJ) / Vec2.lengthSqr(vIJ);
              if (influence <= 0) {
                // The input is outside hull.
                minInfluence = 0.0;
                break; // No more iteration.
              }

              minInfluence = Math.min(minInfluence, influence);
            }
            weights[_iExample2] = minInfluence;
            totalWeight += minInfluence;
          }

          // Normalize the weights.
          if (totalWeight > 0) {
            for (var _iExample3 = 0; _iExample3 < nExamples; ++_iExample3) {
              weights[_iExample3] /= totalWeight;
            }
          } else {
            // This can happen if there no example at origin and the input is origin.
            // Just average weight to all examples.
            var averaged = 1.0 / nExamples;
            for (var _iExample4 = 0; _iExample4 < nExamples; ++_iExample4) {
              weights[_iExample4] = averaged;
            }
          }
        }

        /**
         * n*n Precomputed (\vec{p_i}{p_j}, (|p_i| + |p_j|) / 2).
         */;
        return PolarSpaceGradientBandInterpolator2D;
      }());
      PolarSpaceGradientBandInterpolator2D._CACHE_INPUT_DIRECTION = new Vec2();
      PolarSpaceGradientBandInterpolator2D._CACHE_VIJ = new Vec2();
      PolarSpaceGradientBandInterpolator2D._CACHE_VIX = new Vec2();
      PolarSpaceGradientBandInterpolator2D._ANGLE_MULTIPLIER = 1.0;
    }
  };
});