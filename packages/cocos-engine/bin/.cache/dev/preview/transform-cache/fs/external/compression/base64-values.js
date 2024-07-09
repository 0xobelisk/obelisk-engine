System.register("q-bundled:///fs/external/compression/base64-values.js", [], function (_export, _context) {
  "use strict";

  var BASE64_KEYS, BASE64_VALUES, i, _i;
  return {
    setters: [],
    execute: function () {
      BASE64_KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      BASE64_VALUES = new Array(123); // max char code in base64Keys
      for (i = 0; i < 123; ++i) {
        BASE64_VALUES[i] = 64; // fill with placeholder('=') index
      }

      for (_i = 0; _i < 64; ++_i) {
        BASE64_VALUES[BASE64_KEYS.charCodeAt(_i)] = _i;
      }
      _export("default", BASE64_VALUES);
    }
  };
});