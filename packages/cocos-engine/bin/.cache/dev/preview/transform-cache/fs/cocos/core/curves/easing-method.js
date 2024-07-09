System.register("q-bundled:///fs/cocos/core/curves/easing-method.js", ["../algorithm/easing.js", "../data/utils/asserts.js"], function (_export, _context) {
  "use strict";

  var easing, assertIsTrue, _easingMethodFnMap, EasingMethod, easingMethodFnMap;
  function getEasingFn(easingMethod) {
    assertIsTrue(easingMethod in easingMethodFnMap);
    return easingMethodFnMap[easingMethod];
  }
  _export({
    getEasingFn: getEasingFn,
    EasingMethod: void 0
  });
  return {
    setters: [function (_algorithmEasingJs) {
      easing = _algorithmEasingJs;
    }, function (_dataUtilsAssertsJs) {
      assertIsTrue = _dataUtilsAssertsJs.assertIsTrue;
    }],
    execute: function () {
      (function (EasingMethod) {
        EasingMethod[EasingMethod["LINEAR"] = 0] = "LINEAR";
        EasingMethod[EasingMethod["CONSTANT"] = 1] = "CONSTANT";
        EasingMethod[EasingMethod["QUAD_IN"] = 2] = "QUAD_IN";
        EasingMethod[EasingMethod["QUAD_OUT"] = 3] = "QUAD_OUT";
        EasingMethod[EasingMethod["QUAD_IN_OUT"] = 4] = "QUAD_IN_OUT";
        EasingMethod[EasingMethod["QUAD_OUT_IN"] = 5] = "QUAD_OUT_IN";
        EasingMethod[EasingMethod["CUBIC_IN"] = 6] = "CUBIC_IN";
        EasingMethod[EasingMethod["CUBIC_OUT"] = 7] = "CUBIC_OUT";
        EasingMethod[EasingMethod["CUBIC_IN_OUT"] = 8] = "CUBIC_IN_OUT";
        EasingMethod[EasingMethod["CUBIC_OUT_IN"] = 9] = "CUBIC_OUT_IN";
        EasingMethod[EasingMethod["QUART_IN"] = 10] = "QUART_IN";
        EasingMethod[EasingMethod["QUART_OUT"] = 11] = "QUART_OUT";
        EasingMethod[EasingMethod["QUART_IN_OUT"] = 12] = "QUART_IN_OUT";
        EasingMethod[EasingMethod["QUART_OUT_IN"] = 13] = "QUART_OUT_IN";
        EasingMethod[EasingMethod["QUINT_IN"] = 14] = "QUINT_IN";
        EasingMethod[EasingMethod["QUINT_OUT"] = 15] = "QUINT_OUT";
        EasingMethod[EasingMethod["QUINT_IN_OUT"] = 16] = "QUINT_IN_OUT";
        EasingMethod[EasingMethod["QUINT_OUT_IN"] = 17] = "QUINT_OUT_IN";
        EasingMethod[EasingMethod["SINE_IN"] = 18] = "SINE_IN";
        EasingMethod[EasingMethod["SINE_OUT"] = 19] = "SINE_OUT";
        EasingMethod[EasingMethod["SINE_IN_OUT"] = 20] = "SINE_IN_OUT";
        EasingMethod[EasingMethod["SINE_OUT_IN"] = 21] = "SINE_OUT_IN";
        EasingMethod[EasingMethod["EXPO_IN"] = 22] = "EXPO_IN";
        EasingMethod[EasingMethod["EXPO_OUT"] = 23] = "EXPO_OUT";
        EasingMethod[EasingMethod["EXPO_IN_OUT"] = 24] = "EXPO_IN_OUT";
        EasingMethod[EasingMethod["EXPO_OUT_IN"] = 25] = "EXPO_OUT_IN";
        EasingMethod[EasingMethod["CIRC_IN"] = 26] = "CIRC_IN";
        EasingMethod[EasingMethod["CIRC_OUT"] = 27] = "CIRC_OUT";
        EasingMethod[EasingMethod["CIRC_IN_OUT"] = 28] = "CIRC_IN_OUT";
        EasingMethod[EasingMethod["CIRC_OUT_IN"] = 29] = "CIRC_OUT_IN";
        EasingMethod[EasingMethod["ELASTIC_IN"] = 30] = "ELASTIC_IN";
        EasingMethod[EasingMethod["ELASTIC_OUT"] = 31] = "ELASTIC_OUT";
        EasingMethod[EasingMethod["ELASTIC_IN_OUT"] = 32] = "ELASTIC_IN_OUT";
        EasingMethod[EasingMethod["ELASTIC_OUT_IN"] = 33] = "ELASTIC_OUT_IN";
        EasingMethod[EasingMethod["BACK_IN"] = 34] = "BACK_IN";
        EasingMethod[EasingMethod["BACK_OUT"] = 35] = "BACK_OUT";
        EasingMethod[EasingMethod["BACK_IN_OUT"] = 36] = "BACK_IN_OUT";
        EasingMethod[EasingMethod["BACK_OUT_IN"] = 37] = "BACK_OUT_IN";
        EasingMethod[EasingMethod["BOUNCE_IN"] = 38] = "BOUNCE_IN";
        EasingMethod[EasingMethod["BOUNCE_OUT"] = 39] = "BOUNCE_OUT";
        EasingMethod[EasingMethod["BOUNCE_IN_OUT"] = 40] = "BOUNCE_IN_OUT";
        EasingMethod[EasingMethod["BOUNCE_OUT_IN"] = 41] = "BOUNCE_OUT_IN";
        EasingMethod[EasingMethod["SMOOTH"] = 42] = "SMOOTH";
        EasingMethod[EasingMethod["FADE"] = 43] = "FADE";
      })(EasingMethod || _export("EasingMethod", EasingMethod = {}));
      easingMethodFnMap = (_easingMethodFnMap = {}, _easingMethodFnMap[EasingMethod.CONSTANT] = easing.constant, _easingMethodFnMap[EasingMethod.LINEAR] = easing.linear, _easingMethodFnMap[EasingMethod.QUAD_IN] = easing.quadIn, _easingMethodFnMap[EasingMethod.QUAD_OUT] = easing.quadOut, _easingMethodFnMap[EasingMethod.QUAD_IN_OUT] = easing.quadInOut, _easingMethodFnMap[EasingMethod.QUAD_OUT_IN] = easing.quadOutIn, _easingMethodFnMap[EasingMethod.CUBIC_IN] = easing.cubicIn, _easingMethodFnMap[EasingMethod.CUBIC_OUT] = easing.cubicOut, _easingMethodFnMap[EasingMethod.CUBIC_IN_OUT] = easing.cubicInOut, _easingMethodFnMap[EasingMethod.CUBIC_OUT_IN] = easing.cubicOutIn, _easingMethodFnMap[EasingMethod.QUART_IN] = easing.quartIn, _easingMethodFnMap[EasingMethod.QUART_OUT] = easing.quartOut, _easingMethodFnMap[EasingMethod.QUART_IN_OUT] = easing.quartInOut, _easingMethodFnMap[EasingMethod.QUART_OUT_IN] = easing.quartOutIn, _easingMethodFnMap[EasingMethod.QUINT_IN] = easing.quintIn, _easingMethodFnMap[EasingMethod.QUINT_OUT] = easing.quintOut, _easingMethodFnMap[EasingMethod.QUINT_IN_OUT] = easing.quintInOut, _easingMethodFnMap[EasingMethod.QUINT_OUT_IN] = easing.quintOutIn, _easingMethodFnMap[EasingMethod.SINE_IN] = easing.sineIn, _easingMethodFnMap[EasingMethod.SINE_OUT] = easing.sineOut, _easingMethodFnMap[EasingMethod.SINE_IN_OUT] = easing.sineInOut, _easingMethodFnMap[EasingMethod.SINE_OUT_IN] = easing.sineOutIn, _easingMethodFnMap[EasingMethod.EXPO_IN] = easing.expoIn, _easingMethodFnMap[EasingMethod.EXPO_OUT] = easing.expoOut, _easingMethodFnMap[EasingMethod.EXPO_IN_OUT] = easing.expoInOut, _easingMethodFnMap[EasingMethod.EXPO_OUT_IN] = easing.expoOutIn, _easingMethodFnMap[EasingMethod.CIRC_IN] = easing.circIn, _easingMethodFnMap[EasingMethod.CIRC_OUT] = easing.circOut, _easingMethodFnMap[EasingMethod.CIRC_IN_OUT] = easing.circInOut, _easingMethodFnMap[EasingMethod.CIRC_OUT_IN] = easing.circOutIn, _easingMethodFnMap[EasingMethod.ELASTIC_IN] = easing.elasticIn, _easingMethodFnMap[EasingMethod.ELASTIC_OUT] = easing.elasticOut, _easingMethodFnMap[EasingMethod.ELASTIC_IN_OUT] = easing.elasticInOut, _easingMethodFnMap[EasingMethod.ELASTIC_OUT_IN] = easing.elasticOutIn, _easingMethodFnMap[EasingMethod.BACK_IN] = easing.backIn, _easingMethodFnMap[EasingMethod.BACK_OUT] = easing.backOut, _easingMethodFnMap[EasingMethod.BACK_IN_OUT] = easing.backInOut, _easingMethodFnMap[EasingMethod.BACK_OUT_IN] = easing.backOutIn, _easingMethodFnMap[EasingMethod.BOUNCE_IN] = easing.bounceIn, _easingMethodFnMap[EasingMethod.BOUNCE_OUT] = easing.bounceOut, _easingMethodFnMap[EasingMethod.BOUNCE_IN_OUT] = easing.bounceInOut, _easingMethodFnMap[EasingMethod.BOUNCE_OUT_IN] = easing.bounceOutIn, _easingMethodFnMap[EasingMethod.SMOOTH] = easing.smooth, _easingMethodFnMap[EasingMethod.FADE] = easing.fade, _easingMethodFnMap);
    }
  };
});