(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

!function () {
  function e(e) {
    this.message = e;
  }
  var t = "undefined" != typeof exports ? exports : "undefined" != typeof self ? self : $.global,
    r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  e.prototype = new Error(), e.prototype.name = "InvalidCharacterError", t.btoa || (t.btoa = function (t) {
    for (var o, n, a = String(t), i = 0, f = r, c = ""; a.charAt(0 | i) || (f = "=", i % 1); c += f.charAt(63 & o >> 8 - i % 1 * 8)) {
      if (n = a.charCodeAt(i += .75), n > 255) throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      o = o << 8 | n;
    }
    return c;
  }), t.atob || (t.atob = function (t) {
    var o = String(t).replace(/[=]+$/, "");
    if (o.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");
    for (var n, a, i = 0, f = 0, c = ""; a = o.charAt(f++); ~a && (n = i % 4 ? 64 * n + a : a, i++ % 4) ? c += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) a = r.indexOf(a);
    return c;
  });
}();

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (n) {
  "use strict";

  function t(n, t) {
    var r = (65535 & n) + (65535 & t);
    return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
  }
  function r(n, t) {
    return n << t | n >>> 32 - t;
  }
  function e(n, e, o, u, c, f) {
    return t(r(t(t(e, n), t(u, f)), c), o);
  }
  function o(n, t, r, o, u, c, f) {
    return e(t & r | ~t & o, n, t, u, c, f);
  }
  function u(n, t, r, o, u, c, f) {
    return e(t & o | r & ~o, n, t, u, c, f);
  }
  function c(n, t, r, o, u, c, f) {
    return e(t ^ r ^ o, n, t, u, c, f);
  }
  function f(n, t, r, o, u, c, f) {
    return e(r ^ (t | ~o), n, t, u, c, f);
  }
  function i(n, r) {
    n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r;
    var e,
      i,
      a,
      d,
      h,
      l = 1732584193,
      g = -271733879,
      v = -1732584194,
      m = 271733878;
    for (e = 0; e < n.length; e += 16) i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h);
    return [l, g, v, m];
  }
  function a(n) {
    var t,
      r = "",
      e = 32 * n.length;
    for (t = 0; t < e; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
    return r;
  }
  function d(n) {
    var t,
      r = [];
    for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
    var e = 8 * n.length;
    for (t = 0; t < e; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
    return r;
  }
  function h(n) {
    return a(i(d(n), 8 * n.length));
  }
  function l(n, t) {
    var r,
      e,
      o = d(n),
      u = [],
      c = [];
    for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r];
    return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640));
  }
  function g(n) {
    var t,
      r,
      e = "";
    for (r = 0; r < n.length; r += 1) t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
    return e;
  }
  function v(n) {
    return unescape(encodeURIComponent(n));
  }
  function m(n) {
    return h(v(n));
  }
  function p(n) {
    return g(m(n));
  }
  function s(n, t) {
    return l(v(n), v(t));
  }
  function C(n, t) {
    return g(s(n, t));
  }
  function A(n, t, r) {
    return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n);
  }
  "function" == typeof define && define.amd ? define(function () {
    return A;
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = A : n.md5 = A;
}(void 0);

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = {
  arraybufferToString: function arraybufferToString(arrayBuffer) {
    var byteArray = new Uint8Array(arrayBuffer);
    var str = [];
    str.length = byteArray.length;
    var currentStrIndex = 0;
    var currenStrCode = 0;
    var firstByteCode = 0;
    var arrayLength = byteArray.length;
    for (var index = 0; index < arrayLength; index++) {
      firstByteCode = byteArray[index];
      if (firstByteCode > 251 && firstByteCode < 254 && index + 5 < arrayLength) {
        currenStrCode = (firstByteCode - 252) * 1073741824 + (byteArray[++index] - 128 << 24) + (byteArray[++index] - 128 << 18) + (byteArray[++index] - 128 << 12) + (byteArray[++index] - 128 << 6) + byteArray[++index] - 128;
      } else if (firstByteCode > 247 && firstByteCode < 252 && index + 4 < arrayLength) {
        currenStrCode = (firstByteCode - 248 << 24) + (byteArray[++index] - 128 << 18) + (byteArray[++index] - 128 << 12) + (byteArray[++index] - 128 << 6) + byteArray[++index] - 128;
      } else if (firstByteCode > 239 && firstByteCode < 248 && index + 3 < arrayLength) {
        currenStrCode = (firstByteCode - 240 << 18) + (byteArray[++index] - 128 << 12) + (byteArray[++index] - 128 << 6) + byteArray[++index] - 128;
      } else if (firstByteCode > 223 && firstByteCode < 240 && index + 2 < arrayLength) {
        currenStrCode = (firstByteCode - 224 << 12) + (byteArray[++index] - 128 << 6) + byteArray[++index] - 128;
      } else if (firstByteCode > 191 && firstByteCode < 224 && index + 1 < arrayLength) {
        currenStrCode = (firstByteCode - 192 << 6) + byteArray[++index] - 128;
      } else {
        currenStrCode = firstByteCode;
      }
      str[currentStrIndex++] = String.fromCharCode(currenStrCode);
    }
    str.length = currentStrIndex;
    return str.join('');
  },
  stringToArraybuffer: function stringToArraybuffer(string) {
    var length = string.length;
    var byteArray = new Array(6 * length);
    var actualLength = 0;
    for (var index = 0; index < length; index++) {
      var code = string.charCodeAt(index);
      if (code < 0x80) {
        byteArray[actualLength++] = code;
      } else if (code < 0x800) {
        byteArray[actualLength++] = 192 + (code >>> 6);
        byteArray[actualLength++] = 128 + (code & 63);
      } else if (code < 0x10000) {
        byteArray[actualLength++] = 224 + (code >>> 12);
        byteArray[actualLength++] = 128 + (code >>> 6 & 63);
        byteArray[actualLength++] = 128 + (code & 63);
      } else if (code < 0x200000) {
        byteArray[actualLength++] = 240 + (code >>> 18);
        byteArray[actualLength++] = 128 + (code >>> 12 & 63);
        byteArray[actualLength++] = 128 + (code >>> 6 & 63);
        byteArray[actualLength++] = 128 + (code & 63);
      } else if (code < 0x4000000) {
        byteArray[actualLength++] = 248 + (code >>> 24);
        byteArray[actualLength++] = 128 + (code >>> 18 & 63);
        byteArray[actualLength++] = 128 + (code >>> 12 & 63);
        byteArray[actualLength++] = 128 + (code >>> 6 & 63);
        byteArray[actualLength++] = 128 + (code & 63);
      } else if (code < 0x4000000) {
        byteArray[actualLength++] = 252 + (code >>> 30);
        byteArray[actualLength++] = 128 + (code >>> 24 & 63);
        byteArray[actualLength++] = 128 + (code >>> 18 & 63);
        byteArray[actualLength++] = 128 + (code >>> 12 & 63);
        byteArray[actualLength++] = 128 + (code >>> 6 & 63);
        byteArray[actualLength++] = 128 + (code & 63);
      }
    }
    byteArray.length = actualLength;
    return new Uint8Array(byteArray).buffer;
  }
};

},{}],4:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLAudioElement2 = _interopRequireDefault(require("./HTMLAudioElement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Audio = exports["default"] = function (_HTMLAudioElement) {
  function Audio(url) {
    _classCallCheck(this, Audio);
    return _callSuper(this, Audio, [url]);
  }
  _inherits(Audio, _HTMLAudioElement);
  return _createClass(Audio);
}(_HTMLAudioElement2["default"]);

},{"./HTMLAudioElement":15}],5:[function(require,module,exports){
(function (global){(function (){
"use strict";

var _util = _interopRequireDefault(require("../util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (global) {
  (function (factory) {
    if (typeof define === "function" && define.amd) {
      define(["exports"], factory);
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof exports.nodeName !== "string") {
      factory(exports);
    } else {
      factory(global);
    }
  })(function (exports) {
    "use strict";

    exports.URL = global.URL || global.webkitURL;
    if (global.Blob && global.URL) {
      try {
        new Blob();
        return;
      } catch (e) {}
    }
    var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MozBlobBuilder || function () {
      var get_class = function get_class(object) {
          return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
        },
        FakeBlobBuilder = function BlobBuilder() {
          this.data = [];
          this._arrayBuffer = new ArrayBuffer();
        },
        FakeBlob = function Blob(data, type, encoding) {
          this.data = data;
          this.size = data.length;
          this.type = type;
          this.encoding = encoding;
          this._arrayBuffer = new ArrayBuffer();
        },
        FBB_proto = FakeBlobBuilder.prototype,
        FB_proto = FakeBlob.prototype,
        FileReaderSync = global.FileReaderSync,
        FileException = function FileException(type) {
          this.code = this[this.name = type];
        },
        file_ex_codes = ("NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR " + "NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR").split(" "),
        file_ex_code = file_ex_codes.length,
        real_URL = global.URL || global.webkitURL || exports,
        real_create_object_URL = real_URL.createObjectURL,
        real_revoke_object_URL = real_URL.revokeObjectURL,
        URL = real_URL,
        btoa = global.btoa,
        atob = global.atob,
        ArrayBuffer = global.ArrayBuffer,
        Uint8Array = global.Uint8Array,
        origin = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
      FakeBlob.fake = FB_proto.fake = true;
      while (file_ex_code--) {
        FileException.prototype[file_ex_codes[file_ex_code]] = file_ex_code + 1;
      }
      if (!real_URL.createObjectURL) {
        URL = exports.URL = function (uri) {
          var uri_info = document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
            uri_origin;
          uri_info.href = uri;
          if (!("origin" in uri_info)) {
            if (uri_info.protocol.toLowerCase() === "data:") {
              uri_info.origin = null;
            } else {
              uri_origin = uri.match(origin);
              uri_info.origin = uri_origin && uri_origin[1];
            }
          }
          return uri_info;
        };
      }
      URL.createObjectURL = function (blob) {
        var type = blob.type,
          data_URI_header;
        if (type === null) {
          type = "application/octet-stream";
        }
        if (blob instanceof FakeBlob) {
          data_URI_header = "data:" + type;
          if (blob.encoding === "base64") {
            return data_URI_header + ";base64," + blob.data;
          } else if (blob.encoding === "URI") {
            return data_URI_header + "," + decodeURIComponent(blob.data);
          }
          if (btoa) {
            return data_URI_header + ";base64," + btoa(blob.data);
          } else {
            return data_URI_header + "," + encodeURIComponent(blob.data);
          }
        } else if (real_create_object_URL) {
          return real_create_object_URL.call(real_URL, blob);
        }
      };
      URL.revokeObjectURL = function (object_URL) {
        if (object_URL.substring(0, 5) !== "data:" && real_revoke_object_URL) {
          real_revoke_object_URL.call(real_URL, object_URL);
        }
      };
      FBB_proto.append = function (data) {
        var bb = this.data;
        if (data instanceof ArrayBuffer) {
          var str = "",
            buf = new Uint8Array(data),
            i = 0,
            buf_len = buf.length;
          for (; i < buf_len; i++) {
            str += String.fromCharCode(buf[i]);
          }
          bb.push(str);
          this._arrayBuffer = data.slice(0);
        } else if (get_class(data) === "Blob" || get_class(data) === "File") {
          if (FileReaderSync) {
            var fr = new FileReaderSync();
            bb.push(fr.readAsBinaryString(data));
            this._arrayBuffer = data.arrayBuffer();
          } else {
            throw new FileException("NOT_READABLE_ERR");
          }
        } else if (data instanceof FakeBlob) {
          if (data.encoding === "base64" && atob) {
            bb.push(atob(data.data));
          } else if (data.encoding === "URI") {
            bb.push(decodeURIComponent(data.data));
          } else if (data.encoding === "raw") {
            bb.push(data.data);
          }
          this._arrayBuffer = data._arrayBuffer.slice(0);
        } else {
          if (typeof data !== "string") {
            data += "";
          }
          bb.push(unescape(encodeURIComponent(data)));
          this._arrayBuffer = _util["default"].stringToArraybuffer();
        }
      };
      FBB_proto.getBlob = function (type) {
        if (!arguments.length) {
          type = null;
        }
        var blob = new FakeBlob(this.data.join(""), type, "raw");
        blob._arrayBuffer = this._arrayBuffer;
        return blob;
      };
      FBB_proto.toString = function () {
        return "[object BlobBuilder]";
      };
      FB_proto.slice = function (start, end, type) {
        var args = arguments.length;
        if (args < 3) {
          type = null;
        }
        var blob = new FakeBlob(this.data.slice(start, args > 1 ? end : this.data.length), type, this.encoding);
        var arrayBuffer = this._arrayBuffer;
        if (arrayBuffer instanceof ArrayBuffer) {
          blob._arrayBuffer = this._arrayBuffer.slice(start, end);
        }
        return blob;
      };
      FB_proto.toString = function () {
        return "[object Blob]";
      };
      FB_proto.close = function () {
        this.size = 0;
        delete this.data;
      };
      FB_proto.arrayBuffer = function () {
        return this._arrayBuffer.slice(0);
      };
      return FakeBlobBuilder;
    }();
    exports.Blob = function (blobParts, options) {
      var type = options ? options.type || "" : "";
      var builder = new BlobBuilder();
      if (blobParts) {
        for (var i = 0, len = blobParts.length; i < len; i++) {
          if (Uint8Array && blobParts[i] instanceof Uint8Array) {
            builder.append(blobParts[i].buffer);
          } else {
            builder.append(blobParts[i]);
          }
        }
      }
      var blob = builder.getBlob(type);
      if (!blob.slice && blob.webkitSlice) {
        blob.slice = blob.webkitSlice;
      }
      return blob;
    };
    var getPrototypeOf = Object.getPrototypeOf || function (object) {
      return object.__proto__;
    };
    exports.Blob.prototype = getPrototypeOf(new exports.Blob());
  });
})(typeof self !== "undefined" && self || typeof window !== "undefined" && window || typeof global !== "undefined" && global || (void 0).content || void 0);

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../util":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DOMTokenList = exports["default"] = function () {
  function DOMTokenList() {
    _classCallCheck(this, DOMTokenList);
    this.length = 0;
  }
  return _createClass(DOMTokenList, [{
    key: "add",
    value: function add() {
      console.warn("DOMTokenList add isn't implemented!");
    }
  }, {
    key: "contains",
    value: function contains() {
      console.warn("DOMTokenList contains isn't implemented!");
    }
  }, {
    key: "entries",
    value: function entries() {
      console.warn("DOMTokenList entries isn't implemented!");
    }
  }, {
    key: "forEach",
    value: function forEach() {
      console.warn("DOMTokenList forEach isn't implemented!");
    }
  }, {
    key: "item",
    value: function item() {
      console.warn("DOMTokenList item isn't implemented!");
    }
  }, {
    key: "keys",
    value: function keys() {
      console.warn("DOMTokenList keys isn't implemented!");
    }
  }, {
    key: "remove",
    value: function remove() {
      console.warn("DOMTokenList remove isn't implemented!");
    }
  }, {
    key: "replace",
    value: function replace() {
      console.warn("DOMTokenList replace isn't implemented!");
    }
  }, {
    key: "supports",
    value: function supports() {
      console.warn("DOMTokenList supports isn't implemented!");
    }
  }, {
    key: "toggle",
    value: function toggle() {}
  }, {
    key: "value",
    value: function value() {
      console.warn("DOMTokenList value isn't implemented!");
    }
  }, {
    key: "values",
    value: function values() {
      console.warn("DOMTokenList values isn't implemented!");
    }
  }]);
}();

},{}],7:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Event2 = _interopRequireDefault(require("./Event"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var DeviceMotionEvent = exports["default"] = function (_Event) {
  function DeviceMotionEvent(initArgs) {
    var _this;
    _classCallCheck(this, DeviceMotionEvent);
    _this = _callSuper(this, DeviceMotionEvent, ['devicemotion']);
    if (initArgs) {
      _this._acceleration = initArgs.acceleration ? initArgs.acceleration : {
        x: 0,
        y: 0,
        z: 0
      };
      _this._accelerationIncludingGravity = initArgs.accelerationIncludingGravity ? initArgs.accelerationIncludingGravity : {
        x: 0,
        y: 0,
        z: 0
      };
      _this._rotationRate = initArgs.rotationRate ? initArgs.rotationRate : {
        alpha: 0,
        beta: 0,
        gamma: 0
      };
      _this._interval = initArgs.interval;
    } else {
      _this._acceleration = {
        x: 0,
        y: 0,
        z: 0
      };
      _this._accelerationIncludingGravity = {
        x: 0,
        y: 0,
        z: 0
      };
      _this._rotationRate = {
        alpha: 0,
        beta: 0,
        gamma: 0
      };
      _this._interval = 0;
    }
    return _this;
  }
  _inherits(DeviceMotionEvent, _Event);
  return _createClass(DeviceMotionEvent, [{
    key: "acceleration",
    get: function get() {
      return this._acceleration;
    }
  }, {
    key: "accelerationIncludingGravity",
    get: function get() {
      return this._accelerationIncludingGravity;
    }
  }, {
    key: "rotationRate",
    get: function get() {
      return this._rotationRate;
    }
  }, {
    key: "interval",
    get: function get() {
      return this._interval;
    }
  }]);
}(_Event2["default"]);

},{"./Event":10}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Audio = _interopRequireDefault(require("./Audio"));
var _FontFaceSet = _interopRequireDefault(require("./FontFaceSet"));
var _Node2 = _interopRequireDefault(require("./Node"));
var _NodeList = _interopRequireDefault(require("./NodeList"));
var _HTMLAnchorElement = _interopRequireDefault(require("./HTMLAnchorElement"));
var _HTMLElement = _interopRequireDefault(require("./HTMLElement"));
var _HTMLHtmlElement = _interopRequireDefault(require("./HTMLHtmlElement"));
var _HTMLBodyElement = _interopRequireDefault(require("./HTMLBodyElement"));
var _HTMLHeadElement = _interopRequireDefault(require("./HTMLHeadElement"));
var _HTMLCanvasElement = _interopRequireDefault(require("./HTMLCanvasElement"));
var _HTMLVideoElement = _interopRequireDefault(require("./HTMLVideoElement"));
var _HTMLScriptElement = _interopRequireDefault(require("./HTMLScriptElement"));
var _HTMLStyleElement = _interopRequireDefault(require("./HTMLStyleElement"));
var _HTMLInputElement = _interopRequireDefault(require("./HTMLInputElement"));
var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _html = new _HTMLHtmlElement["default"]();
var Document = exports["default"] = function (_Node) {
  function Document() {
    var _this;
    _classCallCheck(this, Document);
    _this = _callSuper(this, Document);
    _defineProperty(_this, "head", new _HTMLHeadElement["default"](_html));
    _defineProperty(_this, "body", new _HTMLBodyElement["default"](_html));
    _defineProperty(_this, "fonts", new _FontFaceSet["default"]());
    _defineProperty(_this, "cookie", "");
    _defineProperty(_this, "documentElement", _html);
    _defineProperty(_this, "readyState", "complete");
    _defineProperty(_this, "visibilityState", "visible");
    _defineProperty(_this, "hidden", false);
    _defineProperty(_this, "style", {});
    _defineProperty(_this, "location", window.location);
    _defineProperty(_this, "ontouchstart", null);
    _defineProperty(_this, "ontouchmove", null);
    _defineProperty(_this, "ontouchend", null);
    _html.appendChild(_this.head);
    _html.appendChild(_this.body);
    _WeakMap["default"].get(_this).scripts = [];
    return _this;
  }
  _inherits(Document, _Node);
  return _createClass(Document, [{
    key: "characterSet",
    get: function get() {
      return "UTF-8";
    }
  }, {
    key: "scripts",
    get: function get() {
      return _WeakMap["default"].get(this).scripts.slice(0);
    }
  }, {
    key: "createElement",
    value: function createElement(tagName) {
      if (typeof tagName !== "string") {
        return null;
      }
      tagName = tagName.toUpperCase();
      if (tagName === 'CANVAS') {
        return new _HTMLCanvasElement["default"]();
      } else if (tagName === 'IMG') {
        return new Image();
      } else if (tagName === 'VIDEO') {
        return new _HTMLVideoElement["default"]();
      } else if (tagName === 'SCRIPT') {
        return new _HTMLScriptElement["default"]();
      } else if (tagName === "INPUT") {
        return new _HTMLInputElement["default"]();
      } else if (tagName === "AUDIO") {
        return new _Audio["default"]();
      } else if (tagName === "STYLE") {
        return new _HTMLStyleElement["default"]();
      } else if (tagName === "A") {
        return new _HTMLAnchorElement["default"]();
      }
      return new _HTMLElement["default"](tagName);
    }
  }, {
    key: "createElementNS",
    value: function createElementNS(namespaceURI, qualifiedName, options) {
      return this.createElement(qualifiedName);
    }
  }, {
    key: "createEvent",
    value: function createEvent(type) {
      if (window[type]) {
        return new window[type]();
      }
      return null;
    }
  }, {
    key: "createTextNode",
    value: function createTextNode() {
      console.warn("document.createTextNode() is not support!");
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent() {
      if (_html.dispatchEvent.apply(_html, arguments)) {
        return _get(_getPrototypeOf(Document.prototype), "dispatchEvent", this).apply(this, arguments);
      }
      return false;
    }
  }, {
    key: "appendChild",
    value: function appendChild(node) {
      var nodeName = node.nodeName;
      if (nodeName === "SCRIPT") {
        _WeakMap["default"].get(this).scripts.push(node);
      }
      return _get(_getPrototypeOf(Document.prototype), "appendChild", this).call(this, node);
    }
  }, {
    key: "removeChild",
    value: function removeChild(node) {
      var nodeName = node.nodeName;
      if (nodeName === "SCRIPT") {
        var scripts = _WeakMap["default"].get(this).scripts;
        for (var index = 0, length = scripts.length; index < length; ++index) {
          if (node === scripts[index]) {
            scripts.slice(index, 1);
            break;
          }
        }
      }
      return _get(_getPrototypeOf(Document.prototype), "removeChild", this).call(this, node);
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'getElementById' on 'Document': 1 argument required, but only 0 present.";
      }
      var rootElement = this.documentElement;
      var elementArr = [].concat(rootElement.childNodes);
      var element;
      if (id === "canvas" || id === "glcanvas") {
        while (element = elementArr.pop()) {
          if (element.id === "canvas" || element.id === "glcanvas") {
            return element;
          }
          elementArr = elementArr.concat(element.childNodes);
        }
      } else {
        while (element = elementArr.pop()) {
          if (element.id === id) {
            return element;
          }
          elementArr = elementArr.concat(element.childNodes);
        }
      }
      return null;
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(names) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'getElementsByClassName' on 'Document': 1 argument required, but only 0 present.";
      }
      if (typeof names !== "string" && names instanceof String) {
        return new _NodeList["default"]();
      }
      return this.documentElement.getElementsByClassName(names);
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'getElementsByTagName' on 'Document': 1 argument required, but only 0 present.";
      }
      tagName = tagName.toUpperCase();
      var rootElement = this.documentElement;
      var result = new _NodeList["default"]();
      switch (tagName) {
        case "HEAD":
          {
            result.push(document.head);
            break;
          }
        case "BODY":
          {
            result.push(document.body);
            break;
          }
        default:
          {
            result = result.concat(rootElement.getElementsByTagName(tagName));
          }
      }
      return result;
    }
  }, {
    key: "getElementsByName",
    value: function getElementsByName(name) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'getElementsByName' on 'Document': 1 argument required, but only 0 present.";
      }
      var elementArr = [].concat(this.childNodes);
      var result = new _NodeList["default"]();
      var element;
      while (element = elementArr.pop()) {
        if (element.name === name) {
          result.push(element);
        }
        elementArr = elementArr.concat(element.childNodes);
      }
      return result;
    }
  }, {
    key: "querySelector",
    value: function querySelector(selectors) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'querySelectorAll' on 'Document': 1 argument required, but only 0 present.";
      }
      var nodeList = new _NodeList["default"]();
      switch (selectors) {
        case null:
        case undefined:
        case NaN:
        case true:
        case false:
        case "":
          return null;
      }
      if (typeof selectors !== "string" && selectors instanceof String) {
        throw "Uncaught DOMException: Failed to execute 'querySelectorAll' on 'Document': '" + selectors + "' is not a valid selector.";
      }
      var reg = /^[A-Za-z]+$/;
      var result = selectors.match(reg);
      if (result) {
        return this.getElementsByTagName(selectors);
      }
      reg = /^\.[A-Za-z$_][A-Za-z$_0-9\- ]*$/;
      result = selectors.match(reg);
      if (result) {
        var selectorArr = selectors.split(" ");
        var selector = selectorArr.shift();
        nodeList = this.getElementsByClassName(selector.substr(1));
        var length = selectorArr.length;
        if (length) {
          selectors = selectorArr.join(" ");
          length = nodeList.length;
          for (var index = 0; index < length; index++) {
            var subNodeList = nodeList[index].querySelector(selectors);
            if (subNodeList.length) {
              return subNodeList[0];
            }
          }
        }
        return nodeList[0];
      }
      reg = /^#[A-Za-z$_][A-Za-z$_0-9\-]*$/;
      result = selectors.match(reg);
      if (result) {
        var element = this.getElementById(selectors.substr(1));
        if (element) {
          nodeList.push(element);
        }
      }
      if (selectors === "*") {
        return this.getElementsByTagName(selectors);
      }
      return nodeList[0];
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(selectors) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'querySelectorAll' on 'Document': 1 argument required, but only 0 present.";
      }
      var nodeList = new _NodeList["default"]();
      switch (selectors) {
        case null:
        case undefined:
        case NaN:
        case true:
        case false:
        case "":
          return nodeList;
      }
      if (typeof selectors !== "string" && selectors instanceof String) {
        throw "Uncaught DOMException: Failed to execute 'querySelectorAll' on 'Document': '" + selectors + "' is not a valid selector.";
      }
      var reg = /^[A-Za-z]+$/;
      var result = selectors.match(reg);
      if (result) {
        return this.getElementsByTagName(selectors);
      }
      reg = /^\.[A-Za-z$_][A-Za-z$_0-9\-]*$/;
      result = selectors.match(reg);
      if (result) {
        return this.getElementsByClassName(selectors.substr(1));
      }
      reg = /^#[A-Za-z$_][A-Za-z$_0-9\-]*$/;
      result = selectors.match(reg);
      if (result) {
        var element = this.getElementById(selectors.substr(1));
        if (element) {
          nodeList.push(element);
        }
      }
      if (selectors === "*") {
        return this.getElementsByTagName(selectors);
      }
      return nodeList;
    }
  }]);
}(_Node2["default"]);

},{"./Audio":4,"./FontFaceSet":13,"./HTMLAnchorElement":14,"./HTMLBodyElement":16,"./HTMLCanvasElement":17,"./HTMLElement":18,"./HTMLHeadElement":19,"./HTMLHtmlElement":20,"./HTMLInputElement":22,"./HTMLScriptElement":24,"./HTMLStyleElement":25,"./HTMLVideoElement":26,"./Node":32,"./NodeList":33,"./util/WeakMap":55}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Node2 = _interopRequireDefault(require("./Node"));
var _NodeList = _interopRequireDefault(require("./NodeList"));
var _DOMTokenList = _interopRequireDefault(require("./DOMToken\u200BList"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Element = exports["default"] = function (_Node) {
  function Element(tagName) {
    var _this;
    _classCallCheck(this, Element);
    _this = _callSuper(this, Element, [tagName]);
    _defineProperty(_this, "className", '');
    _defineProperty(_this, "children", []);
    _defineProperty(_this, "classList", new _DOMTokenList["default"]());
    _defineProperty(_this, "value", 1);
    _defineProperty(_this, "content", "");
    _defineProperty(_this, "scrollLeft", 0);
    _defineProperty(_this, "scrollTop", 0);
    _defineProperty(_this, "clientLeft", 0);
    _defineProperty(_this, "clientTop", 0);
    return _this;
  }
  _inherits(Element, _Node);
  return _createClass(Element, [{
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      return {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        top: 0,
        left: 0,
        bottom: window.innerHeight,
        right: window.innerWidth
      };
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      tagName = tagName.toUpperCase();
      var result = new _NodeList["default"]();
      var childNodes = this.childNodes;
      var length = childNodes.length;
      for (var index = 0; index < length; index++) {
        var element = childNodes[index];
        if (element.tagName === tagName || tagName === "*") {
          result.push(element);
        }
        result = result.concat(element);
      }
      return result;
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(names) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'getElementsByClassName' on 'Document': 1 argument required, but only 0 present.";
      }
      var result = new _NodeList["default"]();
      if (typeof names !== "string" && names instanceof String) {
        return result;
      }
      var elementArr = [].concat(this.childNodes);
      var element;
      while (element = elementArr.pop()) {
        var classStr = element["class"];
        if (classStr) {
          var classArr = classStr.split(" ");
          var length = classArr.length;
          for (var index = 0; index < length; index++) {
            if (classArr[index] === names) {
              result.push(element);
              break;
            }
          }
        }
        elementArr = elementArr.concat(element.childNodes);
      }
      return result;
    }
  }, {
    key: "querySelector",
    value: function querySelector(selectors) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'querySelectorAll' on 'Document': 1 argument required, but only 0 present.";
      }
      var nodeList = new _NodeList["default"]();
      switch (selectors) {
        case null:
        case undefined:
        case NaN:
        case true:
        case false:
        case "":
          return null;
      }
      if (typeof selectors !== "string" && selectors instanceof String) {
        throw "Uncaught DOMException: Failed to execute 'querySelectorAll' on 'Document': '" + selectors + "' is not a valid selector.";
      }
      var reg = /^[A-Za-z]+$/;
      var result = selectors.match(reg);
      if (result) {
        return this.getElementsByTagName(selectors);
      }
      reg = /^.[A-Za-z$_][A-Za-z$_0-9\- ]*$/;
      result = selectors.match(reg);
      if (result) {
        var selectorArr = selectors.split(" ");
        var selector = selectorArr.shift();
        nodeList = this.getElementsByClassName(selector.substr(1));
        var length = selectorArr.length;
        if (length) {
          selectors = selectorArr.join(" ");
          length = nodeList.length;
          for (var index = 0; index < length; index++) {
            var subNodeList = nodeList[index].querySelector(selectors);
            if (subNodeList.length) {
              return subNodeList[0];
            }
          }
        }
        return nodeList[0];
      }
      reg = /^#[A-Za-z$_][A-Za-z$_0-9\-]*$/;
      result = selectors.match(reg);
      if (result) {
        var element = this.getElementById(selectors.substr(1));
        if (element) {
          nodeList.push(element);
        }
      }
      if (selectors === "*") {
        return this.getElementsByTagName(selectors);
      }
      return nodeList[0];
    }
  }, {
    key: "add",
    value: function add() {}
  }, {
    key: "requestFullscreen",
    value: function requestFullscreen() {}
  }, {
    key: "removeAttribute",
    value: function removeAttribute(attrName) {
      if (attrName === "style") {
        for (var styleName in this["style"]) {
          this["style"][styleName] = "";
        }
      } else {
        this[attrName] = "";
      }
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {
      if (name === "style") {
        if (typeof value == "undefined" || value == null || value == "") {
          for (var styleName in this["style"]) {
            this["style"][styleName] = "";
          }
        } else {
          value = value.replace(/\s*/g, "");
          var valueArray = value.split(";");
          for (var index in valueArray) {
            if (valueArray[index] != "") {
              var valueTemp = valueArray[index].split(":");
              this["style"][valueTemp[0]] = valueTemp[1];
            }
          }
        }
      } else {
        this[name] = value;
      }
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(name) {
      var attributeValue = null;
      if (name == "style") {
        attributeValue = JSON.stringify(this["style"]);
      } else {
        attributeValue = this[name];
      }
      return attributeValue;
    }
  }, {
    key: "setAttributeNS",
    value: function setAttributeNS(ns, name, value) {
      this.setAttribute(name, value);
    }
  }, {
    key: "focus",
    value: function focus() {}
  }, {
    key: "blur",
    value: function blur() {}
  }, {
    key: "lastChild",
    get: function get() {
      var lastChild = this.childNodes[this.childNodes.length - 1];
      return lastChild ? lastChild : this.innerHTML ? new HTMLElement() : undefined;
    }
  }, {
    key: "firstChild",
    get: function get() {
      var child = this.childNodes[0];
      return child ? child : this.innerHTML ? new HTMLElement() : undefined;
    }
  }, {
    key: "firstElementChild",
    get: function get() {
      var child = this.childNodes[0];
      return child ? child : this.innerHTML ? new HTMLElement() : undefined;
    }
  }, {
    key: "clientHeight",
    get: function get() {
      var style = this.style || {};
      return parseInt(style.fontSize || "0");
    }
  }, {
    key: "tagName",
    get: function get() {
      return this.nodeName;
    }
  }]);
}(_Node2["default"]);

},{"./DOMToken​List":6,"./Node":32,"./NodeList":33}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Event = exports["default"] = function () {
  function Event(type, eventInit) {
    _classCallCheck(this, Event);
    this._type = type;
    this._target = null;
    this._eventPhase = 2;
    this._currentTarget = null;
    this._canceled = false;
    this._stopped = false;
    this._passiveListener = null;
    this._timeStamp = Date.now();
  }
  return _createClass(Event, [{
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "target",
    get: function get() {
      return this._target;
    }
  }, {
    key: "currentTarget",
    get: function get() {
      return this._currentTarget;
    }
  }, {
    key: "isTrusted",
    get: function get() {
      return false;
    }
  }, {
    key: "timeStamp",
    get: function get() {
      return this._timeStamp;
    },
    set: function set(value) {
      if (this.type.indexOf("touch")) {
        this._timeStamp = value;
      }
    }
  }, {
    key: "composedPath",
    value: function composedPath() {
      var currentTarget = this._currentTarget;
      if (currentTarget === null) {
        return [];
      }
      return [currentTarget];
    }
  }, {
    key: "eventPhase",
    get: function get() {
      return this._eventPhase;
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation() {}
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this._stopped = true;
    }
  }, {
    key: "bubbles",
    get: function get() {
      return false;
    }
  }, {
    key: "cancelable",
    get: function get() {
      return true;
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      if (this._passiveListener !== null) {
        console.warn("Event#preventDefault() was called from a passive listener:", this._passiveListener);
        return;
      }
      if (!this.cancelable) {
        return;
      }
      this._canceled = true;
    }
  }, {
    key: "defaultPrevented",
    get: function get() {
      return this._canceled;
    }
  }, {
    key: "composed",
    get: function get() {
      return false;
    }
  }]);
}();
Event.NONE = 0;
Event.CAPTURING_PHASE = 1;
Event.AT_TARGET = 2;
Event.BUBBLING_PHASE = 3;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _TouchEvent = _interopRequireDefault(require("./TouchEvent"));
var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
var _DeviceMotionEvent = _interopRequireDefault(require("./DeviceMotionEvent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _listenerStat = {};
var _onTouchStart = function _onTouchStart(e) {
  var event = new _TouchEvent["default"]("touchstart");
  window.dispatchEvent(Object.assign(event, e));
};
var _onTouchMove = function _onTouchMove(e) {
  var event = new _TouchEvent["default"]("touchmove");
  window.dispatchEvent(Object.assign(event, e));
};
var _onTouchCancel = function _onTouchCancel(e) {
  var event = new _TouchEvent["default"]("touchcancel");
  window.dispatchEvent(Object.assign(event, e));
};
var _onTouchEnd = function _onTouchEnd(e) {
  var event = new _TouchEvent["default"]("touchend");
  window.dispatchEvent(Object.assign(event, e));
};
var _systemInfo = ral.getSystemInfoSync();
var _isAndroid = _systemInfo.platform.toLowerCase() === "android";
var _alpha = 0.8;
var _gravity = [0, 0, 0];
var _onAccelerometerChange = function _onAccelerometerChange(e) {
  if (_isAndroid) {
    e.x *= -10;
    e.y *= -10;
    e.z *= -10;
  } else {
    e.x *= 10;
    e.y *= 10;
    e.z *= 10;
  }
  _gravity[0] = _alpha * _gravity[0] + (1 - _alpha) * e.x;
  _gravity[1] = _alpha * _gravity[1] + (1 - _alpha) * e.y;
  _gravity[2] = _alpha * _gravity[2] + (1 - _alpha) * e.z;
  var event = new _DeviceMotionEvent["default"]({
    acceleration: {
      x: e.x - _gravity[0],
      y: e.y - _gravity[1],
      z: e.z - _gravity[2]
    },
    accelerationIncludingGravity: {
      x: e.x,
      y: e.y,
      z: e.z
    }
  });
  window.dispatchEvent(event);
};
var EventTarget = exports["default"] = function () {
  function EventTarget() {
    _classCallCheck(this, EventTarget);
    _WeakMap["default"].set(this, {});
  }
  return _createClass(EventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var privateThis = _WeakMap["default"].get(this);
      if (!privateThis) {
        _WeakMap["default"].set(this, privateThis = {});
      }
      var events = _WeakMap["default"].get(privateThis);
      if (!events) {
        _WeakMap["default"].set(privateThis, events = {});
      }
      if (!events[type]) {
        events[type] = [];
      }
      var listenerArray = events[type];
      var length = listenerArray.length;
      for (var index = 0; index < length; ++index) {
        if (listenerArray[index] === listener) {
          return;
        }
      }
      listenerArray.push(listener);
      if (_listenerStat[type]) {
        ++_listenerStat[type];
      } else {
        _listenerStat[type] = 1;
        switch (type) {
          case "touchstart":
            {
              ral.onTouchStart(_onTouchStart);
              break;
            }
          case "touchmove":
            {
              ral.onTouchMove(_onTouchMove);
              break;
            }
          case "touchcancel":
            {
              ral.onTouchCancel(_onTouchCancel);
              break;
            }
          case "touchend":
            {
              ral.onTouchEnd(_onTouchEnd);
              break;
            }
          case "devicemotion":
            {
              ral.onAccelerometerChange(_onAccelerometerChange);
              ral.startAccelerometer();
              break;
            }
        }
      }
      if (options.capture) {}
      if (options.once) {}
      if (options.passive) {}
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener) {
      var privateThis = _WeakMap["default"].get(this);
      var events;
      if (privateThis) {
        events = _WeakMap["default"].get(privateThis);
      }
      if (events) {
        var listeners = events[type];
        if (listeners && listeners.length > 0) {
          for (var i = listeners.length; i--; i > 0) {
            if (listeners[i] === listener) {
              listeners.splice(i, 1);
              if (--_listenerStat[type] === 0) {
                switch (type) {
                  case "touchstart":
                    {
                      ral.offTouchStart(_onTouchStart);
                      break;
                    }
                  case "touchmove":
                    {
                      ral.offTouchMove(_onTouchMove);
                      break;
                    }
                  case "touchcancel":
                    {
                      ral.offTouchCancel(_onTouchCancel);
                      break;
                    }
                  case "touchend":
                    {
                      ral.offTouchEnd(_onTouchEnd);
                      break;
                    }
                  case "devicemotion":
                    {
                      ral.offAccelerometerChange(_onAccelerometerChange);
                      ral.stopAccelerometer();
                      break;
                    }
                }
              }
              break;
            }
          }
        }
      }
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      event._target = event._currentTarget = this;
      if (event instanceof _TouchEvent["default"]) {
        var toucheArray = event.touches;
        var length = toucheArray.length;
        for (var index = 0; index < length; ++index) {
          toucheArray[index].target = this;
        }
        toucheArray = event.changedTouches;
        length = toucheArray.length;
        for (var _index = 0; _index < length; ++_index) {
          toucheArray[_index].target = this;
        }
      }
      var callback = this["on" + event.type];
      if (typeof callback === "function") {
        callback.call(this, event);
      }
      var privateThis = _WeakMap["default"].get(this);
      var events;
      if (privateThis) {
        events = _WeakMap["default"].get(privateThis);
      }
      if (events) {
        var listeners = events[event.type];
        if (listeners) {
          for (var i = 0; i < listeners.length; i++) {
            listeners[i].call(this, event);
          }
        }
      }
      event._target = event._currentTarget = null;
      return true;
    }
  }]);
}();

},{"./DeviceMotionEvent":7,"./TouchEvent":35,"./util/WeakMap":55}],12:[function(require,module,exports){
"use strict";

var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FontFace = function () {
  function FontFace(family, source, descriptors) {
    _classCallCheck(this, FontFace);
    this.family = family;
    this.source = source;
    this.descriptors = descriptors;
    var self = this;
    var _selfPrivate = {
      status: "unloaded",
      _status: "unloaded",
      load: function load() {
        this.status = "loading";
        var source;
        if (self.source.match(/url\(\s*'\s*(.*?)\s*'\s*\)/)) {
          source = self.source;
        } else {
          source = "url('" + self.source + "')";
        }
        var family = ral.loadFont(self.family, source);
        if (family) {
          this._status = "loaded";
        } else {
          this._status = "error";
        }
        setTimeout(function () {
          var status = _selfPrivate.status = _selfPrivate._status;
          if (status === "loaded") {
            _selfPrivate.loadResolve();
          } else {
            _selfPrivate.loadReject();
          }
        });
      }
    };
    _WeakMap["default"].set(this, _selfPrivate);
    _selfPrivate.loaded = new Promise(function (resolve, reject) {
      _selfPrivate.loadResolve = resolve;
      _selfPrivate.loadReject = reject;
    });
  }
  return _createClass(FontFace, [{
    key: "status",
    get: function get() {
      return _WeakMap["default"].get(this).status;
    }
  }, {
    key: "loaded",
    get: function get() {
      return _WeakMap["default"].get(this).loaded;
    }
  }, {
    key: "load",
    value: function load() {
      _WeakMap["default"].get(this).load();
      return _WeakMap["default"].get(this).loaded;
    }
  }]);
}();
module.exports = FontFace;

},{"./util/WeakMap":55}],13:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("./EventTarget"));
var _Event = _interopRequireDefault(require("./Event"));
var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var FontFaceSet = exports["default"] = function (_EventTarget) {
  function FontFaceSet() {
    var _this;
    _classCallCheck(this, FontFaceSet);
    _this = _callSuper(this, FontFaceSet);
    var self = _this;
    _WeakMap["default"].get(_this).status = "loaded";
    _WeakMap["default"].get(_this).ready = new Promise(function (resolve, reject) {
      _WeakMap["default"].get(self).readyResolve = resolve;
      _WeakMap["default"].get(self).readyReject = reject;
    });
    _WeakMap["default"].get(_this).fontFaceSet = [];
    return _this;
  }
  _inherits(FontFaceSet, _EventTarget);
  return _createClass(FontFaceSet, [{
    key: "status",
    get: function get() {
      return _WeakMap["default"].get(this).status;
    }
  }, {
    key: "ready",
    get: function get() {
      return _WeakMap["default"].get(this).ready;
    }
  }, {
    key: "add",
    value: function add(fontFace) {
      _WeakMap["default"].get(this).fontFaceSet.push(fontFace);
    }
  }, {
    key: "check",
    value: function check() {
      console.warn("FontFaceSet.check() not implements");
    }
  }, {
    key: "clear",
    value: function clear() {
      console.warn("FontFaceSet.clear() not implements");
    }
  }, {
    key: "delete",
    value: function _delete() {
      console.warn("FontFaceSet.delete() not implements");
    }
  }, {
    key: "load",
    value: function load() {
      var self = this;
      _WeakMap["default"].get(this).status = "loading";
      this.dispatchEvent(new _Event["default"]('loading'));
      return new Promise(function (resolve, reject) {
        var fontFaceSet = _WeakMap["default"].get(self).fontFaceSet;
        if (fontFaceSet) {
          for (var index in fontFaceSet) {
            var fontFace = fontFaceSet[index];
            var status = _WeakMap["default"].get(fontFace).status;
            if (status === "unloaded" || status === "error") {
              fontFace.load();
              if (_WeakMap["default"].get(fontFace)._status !== "loaded") {
                break;
              }
            }
          }
          _WeakMap["default"].get(self).status = "loaded";
          _WeakMap["default"].get(self).readyResolve([].concat(_WeakMap["default"].get(self).fontFaceSet));
          resolve([].concat(_WeakMap["default"].get(self).fontFaceSet));
          self.dispatchEvent(new _Event["default"]('loadingdone'));
          return;
        }
        _WeakMap["default"].get(self).status = "loaded";
        _WeakMap["default"].get(self).readyReject();
        reject();
        self.dispatchEvent(new _Event["default"]('loadingerror'));
      });
    }
  }]);
}(_EventTarget2["default"]);

},{"./Event":10,"./EventTarget":11,"./util/WeakMap":55}],14:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var HTMLAnchorElement = exports["default"] = function (_HTMLElement) {
  function HTMLAnchorElement() {
    var _this;
    _classCallCheck(this, HTMLAnchorElement);
    _this = _callSuper(this, HTMLAnchorElement, ["A"]);
    _WeakMap["default"].get(_this).protocol = ":";
    return _this;
  }
  _inherits(HTMLAnchorElement, _HTMLElement);
  return _createClass(HTMLAnchorElement, [{
    key: "protocol",
    get: function get() {
      return _WeakMap["default"].get(this).protocol;
    }
  }]);
}(_HTMLElement2["default"]);

},{"./HTMLElement":18,"./util/WeakMap":55}],15:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLMediaElement2 = _interopRequireDefault(require("./HTMLMediaElement"));
var _Event = _interopRequireDefault(require("./Event"));
var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var HTMLAudioElement = exports["default"] = function (_HTMLMediaElement) {
  function HTMLAudioElement(url) {
    var _this;
    _classCallCheck(this, HTMLAudioElement);
    _this = _callSuper(this, HTMLAudioElement, [url, 'AUDIO']);
    var innerAudioContext = ral.createInnerAudioContext();
    innerAudioContext.onCanplay(function () {
      _WeakMap["default"].get(this).duration = innerAudioContext.duration;
      this.dispatchEvent(new _Event["default"]("canplay"));
      this.dispatchEvent(new _Event["default"]("canplaythrough"));
      this.dispatchEvent(new _Event["default"]("durationchange"));
      this.dispatchEvent(new _Event["default"]("loadedmetadata"));
      this.dispatchEvent(new _Event["default"]("loadeddata"));
    }.bind(_this));
    innerAudioContext.onPlay(function () {
      this.dispatchEvent(new _Event["default"]("play"));
      this.dispatchEvent(new _Event["default"]("playing"));
    }.bind(_this));
    innerAudioContext.onPause(function () {
      this.dispatchEvent(new _Event["default"]("pause"));
    }.bind(_this));
    innerAudioContext.onEnded(function () {
      this.dispatchEvent(new _Event["default"]("ended"));
    }.bind(_this));
    innerAudioContext.onError(function () {
      _WeakMap["default"].get(this).duration = NaN;
      this.dispatchEvent(new _Event["default"]("error"));
      this.dispatchEvent(new _Event["default"]("emptied"));
    }.bind(_this));
    innerAudioContext.onWaiting(function () {
      this.dispatchEvent(new _Event["default"]("waiting"));
    }.bind(_this));
    innerAudioContext.onSeeked(function () {
      this.dispatchEvent(new _Event["default"]("seeked"));
    }.bind(_this));
    innerAudioContext.onSeeking(function () {
      this.dispatchEvent(new _Event["default"]("seeking"));
    }.bind(_this));
    innerAudioContext.onTimeUpdate(function () {
      this.dispatchEvent(new _Event["default"]("timeupdate"));
    }.bind(_this));
    innerAudioContext.src = url;
    _WeakMap["default"].get(_this).innerAudioContext = innerAudioContext;
    _WeakMap["default"].get(_this).duration = NaN;
    return _this;
  }
  _inherits(HTMLAudioElement, _HTMLMediaElement);
  return _createClass(HTMLAudioElement, [{
    key: "currentTime",
    get: function get() {
      return _WeakMap["default"].get(this).innerAudioContext.currentTime;
    },
    set: function set(value) {
      _WeakMap["default"].get(this).innerAudioContext.seek(value);
    }
  }, {
    key: "loop",
    get: function get() {
      return _get(_getPrototypeOf(HTMLAudioElement.prototype), "loop", this);
    },
    set: function set(value) {
      _set(_getPrototypeOf(HTMLAudioElement.prototype), "loop", value, this, true);
      _WeakMap["default"].get(this).innerAudioContext.loop = value;
    }
  }, {
    key: "volume",
    get: function get() {
      return _get(_getPrototypeOf(HTMLAudioElement.prototype), "volume", this);
    },
    set: function set(value) {
      _set(_getPrototypeOf(HTMLAudioElement.prototype), "volume", value, this, true);
      _WeakMap["default"].get(this).innerAudioContext.volume = value;
      this.dispatchEvent(new _Event["default"]("volumechange"));
    }
  }, {
    key: "canPlayType",
    value: function canPlayType() {
      var mediaType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      if (typeof mediaType !== 'string') {
        return '';
      }
      if (mediaType.indexOf('audio/mpeg') > -1 || mediaType.indexOf('audio/mp4')) {
        return 'probably';
      }
      return '';
    }
  }, {
    key: "src",
    get: function get() {
      return _get(_getPrototypeOf(HTMLAudioElement.prototype), "src", this);
    },
    set: function set(value) {
      _set(_getPrototypeOf(HTMLAudioElement.prototype), "src", value, this, true);
      this.dispatchEvent(new _Event["default"]("loadstart"));
      _WeakMap["default"].get(this).innerAudioContext.src = value;
    }
  }, {
    key: "load",
    value: function load() {
      this.dispatchEvent(new _Event["default"]("loadstart"));
      _WeakMap["default"].get(this).innerAudioContext.src = _get(_getPrototypeOf(HTMLAudioElement.prototype), "src", this);
    }
  }, {
    key: "pause",
    value: function pause() {
      _WeakMap["default"].get(this).innerAudioContext.pause();
    }
  }, {
    key: "play",
    value: function play() {
      _WeakMap["default"].get(this).innerAudioContext.play();
      this.dispatchEvent(new _Event["default"]("progress"));
    }
  }]);
}(_HTMLMediaElement2["default"]);

},{"./Event":10,"./HTMLMediaElement":23,"./util/WeakMap":55}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HTMLBodyElement = exports["default"] = function (_HTMLElement) {
  function HTMLBodyElement(parentNode) {
    var _this;
    _classCallCheck(this, HTMLBodyElement);
    _this = _callSuper(this, HTMLBodyElement, ["BODY"]);
    _defineProperty(_this, "parentNode", null);
    _this.parentNode = parentNode;
    return _this;
  }
  _inherits(HTMLBodyElement, _HTMLElement);
  return _createClass(HTMLBodyElement);
}(_HTMLElement2["default"]);

},{"./HTMLElement.js":18}],17:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
var _ImageData = _interopRequireDefault(require("./ImageData"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
if (ral.getFeatureProperty("HTMLCanvasElement", "spec") === "vivo_platform_support") {
  var HTMLCanvasElement = window.HTMLCanvasElement;
  module.exports = HTMLCanvasElement;
} else {
  var CANVAS_DEFAULT_WIDTH = 300;
  var CANVAS_DEFAULT_HEIGHT = 150;
  window.ral = window.ral || {};
  var _createCanvas = ral.createCanvas;
  var _HTMLCanvasElement = function (_HTMLElement) {
    function _HTMLCanvasElement(width, height) {
      var _this;
      _classCallCheck(this, _HTMLCanvasElement);
      _this = _callSuper(this, _HTMLCanvasElement, ['CANVAS']);
      _this.id = 'glcanvas';
      _this.type = 'canvas';
      _this.top = 0;
      _this.left = 0;
      if (typeof ral.getFeatureProperty("ral.createCanvas", "spec") === "undefined") {
        var canvas = _createCanvas();
        canvas.__proto__.__proto__ = _HTMLCanvasElement.prototype;
        Object.keys(_this).forEach(function (key) {
          canvas[key] = this[key];
        }.bind(_this));
        canvas.width = width >= 0 ? Math.ceil(width) : CANVAS_DEFAULT_WIDTH;
        canvas.height = height >= 0 ? Math.ceil(height) : CANVAS_DEFAULT_HEIGHT;
        canvas._targetID = _this._targetID;
        canvas._listenerCount = _this._listenerCount;
        canvas._listeners = _this._listeners;
        return _possibleConstructorReturn(_this, canvas);
      } else {
        _this._width = width ? Math.ceil(width) : CANVAS_DEFAULT_WIDTH;
        _this._height = height ? Math.ceil(height) : CANVAS_DEFAULT_HEIGHT;
        _this._context2D = null;
        _this._dataInner = null;
        _this._alignment = _this._width % 2 === 0 ? 8 : 4;
      }
      return _this;
    }
    _inherits(_HTMLCanvasElement, _HTMLElement);
    return _createClass(_HTMLCanvasElement, [{
      key: "getContext",
      value: function getContext(name, opts) {
        var self = this;
        if (name === 'webgl' || name === 'experimental-webgl') {
          return window.__gl;
        } else if (name === '2d') {
          if (!this._context2D) {
            this._context2D = new CanvasRenderingContext2D(this.width, this.height);
            this._context2D._innerCanvas = this;
          }
          return this._context2D;
        }
        return null;
      }
    }, {
      key: "_data",
      get: function get() {
        if (this._context2D === null) {
          return null;
        }
        if (!this._dataInner) {
          var data = this._context2D._getData();
          this._dataInner = new _ImageData["default"](data, this.width, this.height);
        }
        return this._dataInner;
      }
    }, {
      key: "clientWidth",
      get: function get() {
        return this.width;
      }
    }, {
      key: "clientHeight",
      get: function get() {
        return this.height;
      }
    }, {
      key: "width",
      get: function get() {
        return this._width;
      },
      set: function set(width) {
        width = parseInt(width);
        if (isNaN(width)) {
          width = CANVAS_DEFAULT_WIDTH;
        } else if (width < 0) {
          width = CANVAS_DEFAULT_WIDTH;
        }
        this._width = width;
        this._alignment = this._width % 2 === 0 ? 8 : 4;
        if (this._context2D) {
          this._context2D._width = width;
        }
        this._dataInner = null;
      }
    }, {
      key: "height",
      get: function get() {
        return this._height;
      },
      set: function set(height) {
        height = parseInt(height);
        if (isNaN(height)) {
          height = CANVAS_DEFAULT_HEIGHT;
        } else if (height < 0) {
          height = CANVAS_DEFAULT_HEIGHT;
        }
        this._height = height;
        if (this._context2D) {
          this._context2D._height = height;
        }
        this._dataInner = null;
      }
    }]);
  }(_HTMLElement2["default"]);
  module.exports = _HTMLCanvasElement;
}

},{"./HTMLElement":18,"./ImageData":28}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Element2 = _interopRequireDefault(require("./Element"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HTMLElement = exports["default"] = function (_Element) {
  function HTMLElement(tagName) {
    var _this;
    _classCallCheck(this, HTMLElement);
    _this = _callSuper(this, HTMLElement, [tagName]);
    _defineProperty(_this, "className", '');
    _defineProperty(_this, "childern", []);
    _defineProperty(_this, "style", {
      width: "".concat(window.innerWidth, "px"),
      height: "".concat(window.innerHeight, "px")
    });
    _defineProperty(_this, "insertBefore", function () {});
    _defineProperty(_this, "innerHTML", '');
    return _this;
  }
  _inherits(HTMLElement, _Element);
  return _createClass(HTMLElement, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this[name] = value;
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(name) {
      return this[name];
    }
  }, {
    key: "clientWidth",
    get: function get() {
      var ret = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
      return Number.isNaN(ret) ? 0 : ret;
    }
  }, {
    key: "clientHeight",
    get: function get() {
      var ret = parseInt(this.style.fontSize, 10);
      return Number.isNaN(ret) ? 0 : ret;
    }
  }]);
}(_Element2["default"]);

},{"./Element":9}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HTMLHeadElement = exports["default"] = function (_HTMLElement) {
  function HTMLHeadElement(parentNode) {
    var _this;
    _classCallCheck(this, HTMLHeadElement);
    _this = _callSuper(this, HTMLHeadElement, ["HEAD"]);
    _defineProperty(_this, "parentNode", null);
    _this.parentNode = parentNode;
    return _this;
  }
  _inherits(HTMLHeadElement, _HTMLElement);
  return _createClass(HTMLHeadElement);
}(_HTMLElement2["default"]);

},{"./HTMLElement.js":18}],20:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var HTMLHtmlElement = exports["default"] = function (_HTMLElement) {
  function HTMLHtmlElement() {
    _classCallCheck(this, HTMLHtmlElement);
    return _callSuper(this, HTMLHtmlElement, ["HTML"]);
  }
  _inherits(HTMLHtmlElement, _HTMLElement);
  return _createClass(HTMLHtmlElement, [{
    key: "version",
    get: function get() {
      return "";
    }
  }]);
}(_HTMLElement2["default"]);

},{"./HTMLElement":18}],21:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
var _Event = _interopRequireDefault(require("./Event"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
if (ral.getFeatureProperty("HTMLImageElement", "spec") === "vivo_platform_support") {
  var HTMLImageElement = window.HTMLImageElement;
  module.exports = HTMLImageElement;
} else {
  window.ral = window.ral || {};
  var _creteImage = ral.createImage;
  var _image;
  var _setter;
  var _getter;
  if (typeof ral.getFeatureProperty("ral.createImage", "spec") === "undefined") {
    _image = _creteImage();
    var _descriptor = Object.getOwnPropertyDescriptor(_image.__proto__, "src");
    _setter = _descriptor.set;
    _getter = _descriptor.get;
  }
  var _HTMLImageElement = function (_HTMLElement) {
    function _HTMLImageElement(width, height, isCalledFromImage) {
      var _this;
      _classCallCheck(this, _HTMLImageElement);
      if (!isCalledFromImage) {
        throw new TypeError("Illegal constructor, use 'new Image(w, h); instead!'");
      }
      _this = _callSuper(this, _HTMLImageElement, ['IMG']);
      _this.complete = false;
      _this.crossOrigin = null;
      _this.naturalWidth = 0;
      _this.naturalHeight = 0;
      _this.width = width || 0;
      _this.height = height || 0;
      if (typeof ral.getFeatureProperty("ral.createImage", "spec") === "undefined") {
        var image = _creteImage();
        Object.keys(_this).forEach(function (key) {
          image[key] = this[key];
        }.bind(_this));
        image._onload = function () {
          this.complete = true;
          this.naturalWidth = this.width;
          this.naturalHeight = this.height;
          this.dispatchEvent(new _Event["default"]("load"));
        }.bind(image);
        image._onerror = function () {
          this.dispatchEvent(new _Event["default"]("error"));
        }.bind(image);
        Object.defineProperty(image, "src", {
          configurable: true,
          enumerable: true,
          get: function get() {
            return _getter.call(this);
          },
          set: function set(value) {
            this.complete = false;
            return _setter.call(this, value);
          }
        });
        return _possibleConstructorReturn(_this, image);
      }
      return _this;
    }
    _inherits(_HTMLImageElement, _HTMLElement);
    return _createClass(_HTMLImageElement, [{
      key: "getBoundingClientRect",
      value: function getBoundingClientRect() {
        return new DOMRect(0, 0, this.width, this.height);
      }
    }, {
      key: "src",
      get: function get() {
        return this._src;
      },
      set: function set(src) {
        var _this2 = this;
        this._src = src;
        if (src === "") {
          this.width = 0;
          this.height = 0;
          this._data = null;
          this._imageMeta = null;
          this.complete = true;
          this._glFormat = this._glInternalFormat = 0x1908;
          this.crossOrigin = null;
          return;
        }
        ral.loadImageData(src, function (info) {
          if (!info) {
            var _event = new _Event["default"]('error');
            _this2.dispatchEvent(_event);
            return;
          }
          _this2._imageMeta = info;
          _this2.width = _this2.naturalWidth = info.width;
          _this2.height = _this2.naturalHeight = info.height;
          _this2._data = info.data;
          _this2._glFormat = info.glFormat;
          _this2._glInternalFormat = info.glInternalFormat;
          _this2._glType = info.glType;
          _this2._numberOfMipmaps = info.numberOfMipmaps;
          _this2._compressed = info.compressed;
          _this2._bpp = info.bpp;
          _this2._premultiplyAlpha = info.premultiplyAlpha;
          _this2._alignment = 1;
          if ((_this2._numberOfMipmaps == 0 || _this2._numberOfMipmaps == 1) && !_this2._compressed) {
            var bytesPerRow = _this2.width * _this2._bpp / 8;
            if (bytesPerRow % 8 == 0) _this2._alignment = 8;else if (bytesPerRow % 4 == 0) _this2._alignment = 4;else if (bytesPerRow % 2 == 0) _this2._alignment = 2;
          }
          _this2.complete = true;
          var event = new _Event["default"]('load');
          _this2.dispatchEvent(event);
        });
      }
    }, {
      key: "clientWidth",
      get: function get() {
        return this.width;
      }
    }, {
      key: "clientHeight",
      get: function get() {
        return this.height;
      }
    }]);
  }(_HTMLElement2["default"]);
  module.exports = _HTMLImageElement;
}

},{"./Event":10,"./HTMLElement":18}],22:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
window.ral = window.ral || {};
var HTMLInputElement = exports["default"] = function (_HTMLElement) {
  function HTMLInputElement() {
    _classCallCheck(this, HTMLInputElement);
    return _callSuper(this, HTMLInputElement, ["INPUT"]);
  }
  _inherits(HTMLInputElement, _HTMLElement);
  return _createClass(HTMLInputElement, [{
    key: "focus",
    value: function focus() {
      _get(_getPrototypeOf(HTMLInputElement.prototype), "focus", this).call(this);
      if (!this.target.editable) {
        return;
      }
      var that = this;
      var onKeyboardInput = function onKeyboardInput(res) {
        var str = res ? res.value : "";
        that.inputTarget.text = str;
        that.target.event("input");
      };
      var onKeyboardConfirm = function onKeyboardConfirm(res) {
        var str = res ? res.value : "";
        that.target.text = str;
        that.target.event("input");
        that.target.focus = false;
        ral.offKeyboardConfirm(onKeyboardConfirm);
        ral.offKeyboardInput(onKeyboardInput);
        ral.hideKeyboard({});
      };
      ral.offKeyboardInput(onKeyboardInput);
      ral.offKeyboardConfirm(onKeyboardConfirm);
      ral.showKeyboard({
        defaultValue: this.value,
        maxLength: this.maxLength,
        multiple: this.target.multiline,
        confirmHold: false,
        inputType: this.target.type,
        success: function success(res) {},
        fail: function fail(res) {}
      });
      ral.onKeyboardInput(onKeyboardInput);
      ral.onKeyboardConfirm(onKeyboardConfirm);
    }
  }, {
    key: "blur",
    value: function blur() {
      _get(_getPrototypeOf(HTMLInputElement.prototype), "blur", this).call(this);
      ral.hideKeyboard({});
    }
  }]);
}(_HTMLElement2["default"]);

},{"./HTMLElement":18}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
var _MediaError = _interopRequireDefault(require("./MediaError"));
var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HTMLMediaElement = exports["default"] = function (_HTMLElement) {
  function HTMLMediaElement(url, type) {
    var _this;
    _classCallCheck(this, HTMLMediaElement);
    _this = _callSuper(this, HTMLMediaElement, [type]);
    _defineProperty(_this, "audioTracks", undefined);
    _defineProperty(_this, "autoplay", false);
    _defineProperty(_this, "controller", null);
    _defineProperty(_this, "controls", false);
    _defineProperty(_this, "crossOrigin", null);
    _defineProperty(_this, "defaultMuted", false);
    _defineProperty(_this, "defaultPlaybackRate", 1.0);
    _defineProperty(_this, "mediaGroup", undefined);
    _defineProperty(_this, "mediaKeys", null);
    _defineProperty(_this, "mozAudioChannelType", undefined);
    _defineProperty(_this, "muted", false);
    _defineProperty(_this, "networkState", HTMLMediaElement.NETWORK_EMPTY);
    _defineProperty(_this, "playbackRate", 1);
    _defineProperty(_this, "preload", "auto");
    _defineProperty(_this, "loop", false);
    Object.assign(_WeakMap["default"].get(_this), {
      buffered: undefined,
      currentSrc: url || "",
      duration: 0,
      ended: false,
      error: null,
      initialTime: 0,
      paused: true,
      readyState: HTMLMediaElement.HAVE_NOTHING,
      volume: 1.0,
      currentTime: 0
    });
    _this.addEventListener("ended", function () {
      _WeakMap["default"].get(this).ended = true;
    });
    _this.addEventListener("play", function () {
      _WeakMap["default"].get(this).ended = false;
      _WeakMap["default"].get(this).error = null;
      _WeakMap["default"].get(this).paused = false;
    });
    _this.addEventListener("error", function () {
      _WeakMap["default"].get(this).error = true;
      _WeakMap["default"].get(this).ended = true;
      _WeakMap["default"].get(this).paused = false;
    });
    return _this;
  }
  _inherits(HTMLMediaElement, _HTMLElement);
  return _createClass(HTMLMediaElement, [{
    key: "currentTime",
    get: function get() {
      return _WeakMap["default"].get(this).currentTime;
    },
    set: function set(value) {
      _WeakMap["default"].get(this).currentTime = value;
    }
  }, {
    key: "src",
    get: function get() {
      return _WeakMap["default"].get(this).currentSrc;
    },
    set: function set(value) {
      _WeakMap["default"].get(this).currentSrc = value;
    }
  }, {
    key: "buffered",
    get: function get() {
      return _WeakMap["default"].get(this).buffered;
    }
  }, {
    key: "currentSrc",
    get: function get() {
      return _WeakMap["default"].get(this).currentSrc;
    }
  }, {
    key: "duration",
    get: function get() {
      return _WeakMap["default"].get(this).duration;
    }
  }, {
    key: "ended",
    get: function get() {
      return _WeakMap["default"].get(this).ended;
    }
  }, {
    key: "error",
    get: function get() {
      return _WeakMap["default"].get(this).error;
    }
  }, {
    key: "initialTime",
    get: function get() {
      return _WeakMap["default"].get(this).initialTime;
    }
  }, {
    key: "paused",
    get: function get() {
      return _WeakMap["default"].get(this).paused;
    }
  }, {
    key: "volume",
    get: function get() {
      return _WeakMap["default"].get(this).volume;
    },
    set: function set(value) {
      _WeakMap["default"].get(this).volume = value;
    }
  }, {
    key: "canPlayType",
    value: function canPlayType(mediaType) {
      return 'maybe';
    }
  }, {
    key: "captureStream",
    value: function captureStream() {}
  }, {
    key: "fastSeek",
    value: function fastSeek() {}
  }, {
    key: "load",
    value: function load() {}
  }, {
    key: "pause",
    value: function pause() {}
  }, {
    key: "play",
    value: function play() {}
  }], [{
    key: "NETWORK_EMPTY",
    get: function get() {
      return 0;
    }
  }, {
    key: "NETWORK_IDLE",
    get: function get() {
      return 1;
    }
  }, {
    key: "NETWORK_LOADING",
    get: function get() {
      return 2;
    }
  }, {
    key: "NETWORK_NO_SOURCE",
    get: function get() {
      return 3;
    }
  }, {
    key: "HAVE_NOTHING",
    get: function get() {
      return 0;
    }
  }, {
    key: "HAVE_METADATA",
    get: function get() {
      return 1;
    }
  }, {
    key: "HAVE_CURRENT_DATA",
    get: function get() {
      return 2;
    }
  }, {
    key: "HAVE_FUTURE_DATA",
    get: function get() {
      return 3;
    }
  }, {
    key: "HAVE_ENOUGH_DATA",
    get: function get() {
      return 4;
    }
  }]);
}(_HTMLElement2["default"]);

},{"./HTMLElement":18,"./MediaError":30,"./util/WeakMap":55}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
var _Event = _interopRequireDefault(require("./Event"));
var _FileCache = _interopRequireDefault(require("./util/FileCache"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _BASE64_NAME = "data:application/javascript;base64,";
var _URI_NAME = "data:application/javascript,";
var _getPathFromBase64String = function _getPathFromBase64String(src) {
  if (src === null || src === undefined) {
    return src;
  }
  if (src.startsWith(_BASE64_NAME)) {
    var content = src.substring(_BASE64_NAME.length);
    var source = window.atob(content);
    var len = source.length;
    if (len > 0) {
      return _getDiskPathFromArrayBuffer(source, len);
    } else {
      return src;
    }
  } else if (src.startsWith(_URI_NAME)) {
    var _content = src.substring(_URI_NAME.length);
    var _source = decodeURIComponent(_content);
    var _len = _source.length;
    if (_len > 0) {
      return _getDiskPathFromArrayBuffer(_source, _len);
    } else {
      return src;
    }
  } else {
    return src;
  }
};
function _getDiskPathFromArrayBuffer(source, len) {
  var arrayBuffer = new ArrayBuffer(len);
  var uint8Array = new Uint8Array(arrayBuffer);
  for (var i = 0; i < len; i++) {
    uint8Array[i] = source.charCodeAt(i);
  }
  return _FileCache["default"].getCache(arrayBuffer);
}
var HTMLScriptElement = exports["default"] = function (_HTMLElement) {
  function HTMLScriptElement() {
    var _this;
    _classCallCheck(this, HTMLScriptElement);
    _this = _callSuper(this, HTMLScriptElement, ['SCRIPT']);
    _defineProperty(_this, "noModule", false);
    var self = _this;
    var onAppend = function onAppend() {
      self.removeEventListener("append", onAppend);
      var src = _getPathFromBase64String(self.src);
      require(src);
      self.dispatchEvent(new _Event["default"]('load'));
    };
    _this.addEventListener("append", onAppend);
    return _this;
  }
  _inherits(HTMLScriptElement, _HTMLElement);
  return _createClass(HTMLScriptElement);
}(_HTMLElement2["default"]);
Object.defineProperty(HTMLScriptElement.prototype, "noModule", {
  get: function get() {
    throw new TypeError(message, "Illegal invocation");
  },
  set: function set(value) {
    throw new TypeError(message, "Illegal invocation");
  }
});

},{"./Event":10,"./HTMLElement":18,"./util/FileCache":54}],25:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _FontFace = _interopRequireDefault(require("./FontFace"));
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var HTMLStyleElement = exports["default"] = function (_HTMLElement) {
  function HTMLStyleElement() {
    var _this;
    _classCallCheck(this, HTMLStyleElement);
    _this = _callSuper(this, HTMLStyleElement, ["STYLE"]);
    var self = _this;
    var onAppend = function onAppend() {
      self.removeEventListener("append", onAppend);
      var textContent = self.textContent || self.innerHTML || "";
      var fontFaceStr = "";
      var start = 0;
      var length = textContent.length;
      var flag = 0;
      for (var index = 0; index < length; ++index) {
        if (start > 0) {
          if (textContent[index] === "{") {
            flag++;
          } else if (textContent[index] === "}") {
            flag--;
            if (flag === 0) {
              fontFaceStr = textContent.substring(start, index + 1);
              break;
            } else if (flag < 0) {
              break;
            }
          }
        } else {
          if (textContent[index] === "@" && textContent.substr(index, "@font-face".length) === "@font-face") {
            index += 9;
            start = index + 1;
          }
        }
      }
      if (fontFaceStr) {
        var fontFamily;
        var _length = fontFaceStr.length;
        var _start = fontFaceStr.indexOf("font-family");
        if (_start === -1) {
          return;
        }
        _start += "font-family".length + 1;
        var end = _start;
        for (; end < _length; ++end) {
          if (fontFaceStr[end] === ";") {
            fontFamily = fontFaceStr.substring(_start, end).trim();
            break;
          } else if (fontFaceStr[end] === ":") {
            _start = end + 1;
          }
        }
        if (!fontFamily) {
          return;
        }
        end = fontFaceStr.indexOf("url(");
        _start = 0;
        var source;
        for (; end < _length; ++end) {
          if (fontFaceStr[end] === "'" || fontFaceStr[end] === '"') {
            if (_start > 0) {
              source = fontFaceStr.substring(_start, end).trim();
              break;
            }
            _start = end + 1;
          }
        }
        if (source) {
          var fontFace = new _FontFace["default"](fontFamily, source);
          fontFace.load();
          document.fonts.add(fontFace);
        }
      }
    };
    _this.addEventListener("append", onAppend);
    return _this;
  }
  _inherits(HTMLStyleElement, _HTMLElement);
  return _createClass(HTMLStyleElement);
}(_HTMLElement2["default"]);

},{"./FontFace":12,"./HTMLElement":18}],26:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLMediaElement2 = _interopRequireDefault(require("./HTMLMediaElement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var HTMLVideoElement = exports["default"] = function (_HTMLMediaElement) {
  function HTMLVideoElement() {
    _classCallCheck(this, HTMLVideoElement);
    return _callSuper(this, HTMLVideoElement, ['VIDEO']);
  }
  _inherits(HTMLVideoElement, _HTMLMediaElement);
  return _createClass(HTMLVideoElement, [{
    key: "canPlayType",
    value: function canPlayType(type) {
      return type === 'video/mp4';
    }
  }]);
}(_HTMLMediaElement2["default"]);

},{"./HTMLMediaElement":23}],27:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _HTMLImageElement2 = _interopRequireDefault(require("./HTMLImageElement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
if (ral.getFeatureProperty("Image", "spec") === "vivo_platform_support") {
  var Image = window.Image;
  module.exports = Image;
} else {
  var _Image = window.Image;
  var _Image2 = function (_HTMLImageElement) {
    function _Image2(width, height) {
      _classCallCheck(this, _Image2);
      return _callSuper(this, _Image2, [width, height, true]);
    }
    _inherits(_Image2, _HTMLImageElement);
    return _createClass(_Image2);
  }(_HTMLImageElement2["default"]);
  var _creteImage = ral.createImage;
  if (_creteImage) {
    _Image.prototype.__proto__ = _Image2.prototype;
  }
  module.exports = _Image2;
}

},{"./HTMLImageElement":21}],28:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ImageData = function () {
  function ImageData(array, width, height) {
    _classCallCheck(this, ImageData);
    if (typeof array === 'number' && typeof width == 'number') {
      height = width;
      width = array;
      array = null;
    }
    if (array === null) {
      this._data = new Uint8ClampedArray(width * height * 4);
    } else {
      this._data = array;
    }
    this._width = width;
    this._height = height;
  }
  return _createClass(ImageData, [{
    key: "data",
    get: function get() {
      return this._data;
    }
  }, {
    key: "width",
    get: function get() {
      return this._width;
    }
  }, {
    key: "height",
    get: function get() {
      return this._height;
    }
  }]);
}();
module.exports = ImageData;

},{}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Location = exports["default"] = function () {
  function Location() {
    _classCallCheck(this, Location);
    _defineProperty(this, "ancestorOrigins", "");
    _defineProperty(this, "hash", "");
    _defineProperty(this, "host", "");
    _defineProperty(this, "hostname", "");
    _defineProperty(this, "href", "");
    _defineProperty(this, "origin", "");
    _defineProperty(this, "password", "");
    _defineProperty(this, "pathname", "");
    _defineProperty(this, "port", "");
    _defineProperty(this, "protocol", "");
    _defineProperty(this, "search", "");
    _defineProperty(this, "username", "");
  }
  return _createClass(Location, [{
    key: "assign",
    value: function assign() {}
  }, {
    key: "reload",
    value: function reload() {}
  }, {
    key: "replace",
    value: function replace() {}
  }, {
    key: "toString",
    value: function toString() {
      return "";
    }
  }]);
}();

},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var MEDIA_ERR_ABORTED = 1;
var MEDIA_ERR_NETWORK = 2;
var MEDIA_ERR_DECODE = 3;
var MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
var MediaError = exports["default"] = function () {
  function MediaError() {
    _classCallCheck(this, MediaError);
  }
  return _createClass(MediaError, [{
    key: "code",
    get: function get() {
      return MEDIA_ERR_ABORTED;
    }
  }, {
    key: "message",
    get: function get() {
      return "";
    }
  }]);
}();
module.exports = MediaError;

},{}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Navigator = exports["default"] = _createClass(function Navigator(platform, language) {
  _classCallCheck(this, Navigator);
  _defineProperty(this, "platform", "");
  _defineProperty(this, "language", "");
  _defineProperty(this, "appVersion", '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');
  _defineProperty(this, "userAgent", 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 NetType/WIFI Language/zh_CN');
  _defineProperty(this, "onLine", true);
  _defineProperty(this, "maxTouchPoints", 10);
  _defineProperty(this, "geolocation", {
    getCurrentPosition: function getCurrentPosition() {},
    watchPosition: function watchPosition() {},
    clearWatch: function clearWatch() {}
  });
  this.platform = platform;
  this.language = language;
});

},{}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("./EventTarget"));
var _Event = _interopRequireDefault(require("./Event"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Node = exports["default"] = function (_EventTarget) {
  function Node(nodeName) {
    var _this;
    _classCallCheck(this, Node);
    _this = _callSuper(this, Node);
    _defineProperty(_this, "childNodes", []);
    _defineProperty(_this, "parentNode", null);
    _defineProperty(_this, "_nodeName", "");
    _this._nodeName = nodeName;
    return _this;
  }
  _inherits(Node, _EventTarget);
  return _createClass(Node, [{
    key: "appendChild",
    value: function appendChild(node) {
      this.childNodes.push(node);
      node.parentNode = this;
      var nodeName = node.nodeName;
      if (nodeName === "SCRIPT" || nodeName === "STYLE") {
        node.dispatchEvent(new _Event["default"]("append"));
      }
      return node;
    }
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var copyNode = Object.create(this);
      Object.assign(copyNode, this);
      copyNode.parentNode = null;
      return copyNode;
    }
  }, {
    key: "removeChild",
    value: function removeChild(node) {
      var index = this.childNodes.findIndex(function (child) {
        return child === node;
      });
      if (index > -1) {
        var _node = this.childNodes.splice(index, 1)[0];
        _node.parentNode = null;
        return _node;
      }
      return null;
    }
  }, {
    key: "contains",
    value: function contains(node) {
      return this.childNodes.indexOf(node) > -1;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent() {
      var result = true;
      var length = this.childNodes.length;
      for (var index = length - 1; result && index >= 0; --index) {
        var _this$childNodes$inde;
        result = (_this$childNodes$inde = this.childNodes[index]).dispatchEvent.apply(_this$childNodes$inde, arguments);
      }
      if (result) {
        return _get(_getPrototypeOf(Node.prototype), "dispatchEvent", this).apply(this, arguments);
      }
      return false;
    }
  }, {
    key: "nodeName",
    get: function get() {
      return this._nodeName;
    }
  }]);
}(_EventTarget2["default"]);

},{"./Event":10,"./EventTarget":11}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var NodeList = exports["default"] = function () {
  function NodeList() {
    _classCallCheck(this, NodeList);
    _WeakMap["default"].set(this, {
      array: []
    });
    return new Proxy(this, {
      get: function get(target, key) {
        if (_typeof(key) === "symbol") {
          return function () {
            return "";
          };
        }
        if (/^[0-9]*$/.test(key)) {
          return _WeakMap["default"].get(target).array[key];
        }
        var result = target[key];
        if (typeof result === "function") {
          result = result.bind(target);
        }
        return result;
      }
    });
  }
  return _createClass(NodeList, [{
    key: "push",
    value: function push(element) {
      _WeakMap["default"].get(this).array.push(element);
    }
  }, {
    key: "item",
    value: function item(index) {
      return _WeakMap["default"].get(this).array[index];
    }
  }, {
    key: "length",
    get: function get() {
      return _WeakMap["default"].get(this).array.length;
    }
  }, {
    key: "concat",
    value: function concat() {
      var array = _WeakMap["default"].get(this).array;
      return array.concat.apply(array, arguments);
    }
  }]);
}();

},{"./util/WeakMap":55}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
window.ral = window.ral || {};
var Screen = exports["default"] = function () {
  function Screen() {
    _classCallCheck(this, Screen);
    _defineProperty(this, "availTop", 0);
    _defineProperty(this, "availLeft", 0);
    _defineProperty(this, "availHeight", window.innerHeight);
    _defineProperty(this, "availWidth", window.innerWidth);
    _defineProperty(this, "colorDepth", 8);
    _defineProperty(this, "pixelDepth", 0);
    _defineProperty(this, "left", 0);
    _defineProperty(this, "top", 0);
    _defineProperty(this, "width", window.innerWidth);
    _defineProperty(this, "height", window.innerHeight);
    _defineProperty(this, "orientation", {
      type: 'portrait-primary'
    });
  }
  return _createClass(Screen, [{
    key: "onorientationchange",
    value: function onorientationchange() {}
  }]);
}();

},{}],35:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Event2 = _interopRequireDefault(require("./Event"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var TouchEvent = exports["default"] = function (_Event) {
  function TouchEvent(type) {
    var _this;
    _classCallCheck(this, TouchEvent);
    _this = _callSuper(this, TouchEvent, [type]);
    _this.touches = [];
    _this.targetTouches = [];
    _this.changedTouches = [];
    return _this;
  }
  _inherits(TouchEvent, _Event);
  return _createClass(TouchEvent);
}(_Event2["default"]);

},{"./Event":10}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Event = _interopRequireDefault(require("./Event"));
var _FileCache = _interopRequireDefault(require("./util/FileCache"));
var _XMLHttpRequestEventTarget = _interopRequireDefault(require("./XMLHttpRequestEventTarget"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var fsm = ral.getFileSystemManager();
var _XMLHttpRequest = window.XMLHttpRequest;
window.ral = window.ral || {};
var XMLHttpRequest = exports["default"] = function (_XMLHttpRequestEventT) {
  function XMLHttpRequest() {
    var _this;
    _classCallCheck(this, XMLHttpRequest);
    _this = _callSuper(this, XMLHttpRequest, [new _XMLHttpRequest()]);
    _defineProperty(_this, "_isLocal", false);
    _defineProperty(_this, "_readyState", void 0);
    _defineProperty(_this, "_response", void 0);
    _defineProperty(_this, "_responseText", void 0);
    _defineProperty(_this, "_responseURL", void 0);
    _defineProperty(_this, "_responseXML", void 0);
    _defineProperty(_this, "_status", void 0);
    _defineProperty(_this, "_statusText", void 0);
    var xhr = _this._xhr;
    xhr.onreadystatechange = function (e) {
      var event = new _Event["default"]("readystatechange");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_this);
    return _this;
  }
  _inherits(XMLHttpRequest, _XMLHttpRequestEventT);
  return _createClass(XMLHttpRequest, [{
    key: "readyState",
    get: function get() {
      if (this._isLocal) {
        return this._readyState;
      } else {
        return this._xhr.readyState;
      }
    }
  }, {
    key: "response",
    get: function get() {
      if (this._isLocal) {
        return this._response;
      } else {
        return this._xhr.response;
      }
    }
  }, {
    key: "responseText",
    get: function get() {
      if (this._isLocal) {
        return this._responseText;
      } else {
        return this._xhr.responseText;
      }
    }
  }, {
    key: "responseType",
    get: function get() {
      return this._xhr.responseType;
    },
    set: function set(value) {
      this._xhr.responseType = value;
    }
  }, {
    key: "responseURL",
    get: function get() {
      if (this._isLocal) {
        return this._responseURL;
      } else {
        return this._xhr.responseURL;
      }
    }
  }, {
    key: "responseXML",
    get: function get() {
      if (this._isLocal) {
        return this._responseXML;
      } else {
        return this._xhr.responseXML;
      }
    }
  }, {
    key: "status",
    get: function get() {
      if (this._isLocal) {
        return this._status;
      } else {
        return this._xhr.status;
      }
    }
  }, {
    key: "statusText",
    get: function get() {
      if (this._isLocal) {
        return this._statusText;
      } else {
        return this._xhr.statusText;
      }
    }
  }, {
    key: "timeout",
    get: function get() {
      return this._xhr.timeout;
    },
    set: function set(value) {
      this._xhr.timeout = value;
    }
  }, {
    key: "upload",
    get: function get() {
      return this._xhr.upload;
    }
  }, {
    key: "withCredentials",
    get: function get() {
      return this._xhr.withCredentials;
    },
    set: function set(value) {
      this._xhr.withCredentials = value;
    }
  }, {
    key: "abort",
    value: function abort() {
      this._xhr.abort();
    }
  }, {
    key: "getAllResponseHeaders",
    value: function getAllResponseHeaders() {
      return this._xhr.getAllResponseHeaders();
    }
  }, {
    key: "getResponseHeader",
    value: function getResponseHeader(name) {
      return this._xhr.getResponseHeader(name);
    }
  }, {
    key: "open",
    value: function open(method, url, async, user, password) {
      if (typeof url === "string") {
        var _url = url.toLocaleString();
        if (_url.startsWith("http://") || _url.startsWith("https://")) {
          var _this$_xhr;
          this._isLocal = false;
          return (_this$_xhr = this._xhr).open.apply(_this$_xhr, arguments);
        }
      }
      this._isLocal = true;
      this._url = url;
    }
  }, {
    key: "overrideMimeType",
    value: function overrideMimeType() {
      var _this$_xhr2;
      return (_this$_xhr2 = this._xhr).overrideMimeType.apply(_this$_xhr2, arguments);
    }
  }, {
    key: "send",
    value: function send() {
      if (this._isLocal) {
        var self = this;
        var isBinary = this._xhr.responseType === "arraybuffer";
        fsm.readFile({
          filePath: this._url,
          encoding: isBinary ? "binary" : "utf8",
          success: function success(res) {
            self._status = 200;
            self._readyState = 4;
            self._response = self._responseText = res.data;
            if (isBinary) {
              _FileCache["default"].setCache(self._url, res.data);
            }
            var eventProgressStart = new _Event["default"]("progress");
            eventProgressStart.loaded = 0;
            eventProgressStart.total = isBinary ? res.data.byteLength : res.data.length;
            var eventProgressEnd = new _Event["default"]("progress");
            eventProgressEnd.loaded = eventProgressStart.total;
            eventProgressEnd.total = eventProgressStart.total;
            self.dispatchEvent(new _Event["default"]("loadstart"));
            self.dispatchEvent(eventProgressStart);
            self.dispatchEvent(eventProgressEnd);
            self.dispatchEvent(new _Event["default"]("load"));
          },
          fail: function (res) {
            if (res.errCode === 1) {
              self._status = 404;
              self._readyState = 4;
              self.dispatchEvent(new _Event["default"]("loadstart"));
              self.dispatchEvent(new _Event["default"]("load"));
            } else {
              this.dispatchEvent(new _Event["default"]("error"));
            }
          }.bind(this),
          complete: function () {
            this.dispatchEvent(new _Event["default"]("loadend"));
          }.bind(this)
        });
      } else {
        var _this$_xhr3;
        (_this$_xhr3 = this._xhr).send.apply(_this$_xhr3, arguments);
      }
    }
  }, {
    key: "setRequestHeader",
    value: function setRequestHeader() {
      var _this$_xhr4;
      (_this$_xhr4 = this._xhr).setRequestHeader.apply(_this$_xhr4, arguments);
    }
  }]);
}(_XMLHttpRequestEventTarget["default"]);

},{"./Event":10,"./XMLHttpRequestEventTarget":37,"./util/FileCache":54}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("./EventTarget"));
var _Event = _interopRequireDefault(require("./Event"));
var _FileCache = _interopRequireDefault(require("./util/FileCache"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var XMLHttpRequestEventTarget = exports["default"] = function (_EventTarget) {
  function XMLHttpRequestEventTarget(xhr) {
    var _this;
    _classCallCheck(this, XMLHttpRequestEventTarget);
    _this = _callSuper(this, XMLHttpRequestEventTarget);
    _defineProperty(_this, "_xhr", void 0);
    _this._xhr = xhr;
    xhr.onabort = function (e) {
      var event = new _Event["default"]("abort");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_this);
    xhr.onerror = function (e) {
      var event = new _Event["default"]("error");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_this);
    xhr.onload = function (e) {
      if (this.response instanceof ArrayBuffer) {
        _FileCache["default"].setItem(this.response, this._url);
      }
      var event = new _Event["default"]("load");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_this);
    xhr.onloadstart = function (e) {
      var event = new _Event["default"]("loadstart");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_this);
    xhr.onprogress = function (e) {
      var event = new _Event["default"]("progress");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_this);
    xhr.ontimeout = function (e) {
      var event = new _Event["default"]("timeout");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_this);
    xhr.onloadend = function (e) {
      var event = new _Event["default"]("loadend");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_this);
    return _this;
  }
  _inherits(XMLHttpRequestEventTarget, _EventTarget);
  return _createClass(XMLHttpRequestEventTarget);
}(_EventTarget2["default"]);

},{"./Event":10,"./EventTarget":11,"./util/FileCache":54}],38:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var AnalyserNode = function (_AudioNode) {
  function AnalyserNode(context, options) {
    var _this;
    _classCallCheck(this, AnalyserNode);
    _this = _callSuper(this, AnalyserNode, [context]);
    _this._fftSize;
    _this.frequencyBinCount;
    _this.minDecibels;
    _this.maxDecibels;
    _this.smoothingTimeConstant;
    return _this;
  }
  _inherits(AnalyserNode, _AudioNode);
  return _createClass(AnalyserNode, [{
    key: "getFloatFrequencyData",
    value: function getFloatFrequencyData(array) {}
  }, {
    key: "getByteFrequencyData",
    value: function getByteFrequencyData(dataArray) {
      return new Uint8Array(dataArray.length);
    }
  }, {
    key: "getFloatTimeDomainData",
    value: function getFloatTimeDomainData(dataArray) {}
  }, {
    key: "getByteTimeDomainData",
    value: function getByteTimeDomainData(dataArray) {}
  }, {
    key: "fftSize",
    get: function get() {
      return this._fftSize;
    },
    set: function set(value) {
      this._fftSize = value;
      this.frequencyBinCount = value / 2;
    }
  }]);
}(_AudioNode2["default"]);
var _default = exports["default"] = AnalyserNode;

},{"./AudioNode":44}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _FileCache = _interopRequireDefault(require("../util/FileCache"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AudioBuffer = function () {
  function AudioBuffer(context, buffer, callback) {
    _classCallCheck(this, AudioBuffer);
    this.context = context;
    this.url = "";
    this._sampleRate = 48000;
    this._length = 386681;
    this._duration = 0;
    this._numberOfChannels = 48000;
    _FileCache["default"].getPath(buffer, function (url) {
      if (!url) {
        return;
      }
      this.url = url;
      var innerAudioContext = ral.createInnerAudioContext();
      innerAudioContext.src = url;
      innerAudioContext.onCanplay(function () {
        this.audioBuffer._duration = this.innerAudioContext.duration;
        this.innerAudioContext.destroy();
        callback(this.audioBuffer);
      }.bind({
        audioBuffer: this,
        innerAudioContext: innerAudioContext
      }));
    }.bind(this));
  }
  return _createClass(AudioBuffer, [{
    key: "sampleRate",
    get: function get() {
      return this._sampleRate;
    }
  }, {
    key: "length",
    get: function get() {
      return this._length;
    }
  }, {
    key: "duration",
    get: function get() {
      return this._duration;
    }
  }, {
    key: "numberOfChannels",
    get: function get() {
      return this._numberOfChannels;
    }
  }]);
}();
var _default = exports["default"] = AudioBuffer;

},{"../util/FileCache":54}],40:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
var _WeakMap = _interopRequireDefault(require("../util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var _destroy = function _destroy() {
  var innerAudioContext = _WeakMap["default"].get(this.sourceNode).innerAudioContext;
  if (innerAudioContext !== null) {
    innerAudioContext.destroy();
    var audioBufferSourceNodeArray = _WeakMap["default"].get(this.audioContext).audioBufferSourceNodeArray;
    var length = audioBufferSourceNodeArray.length;
    for (var i = 0; i < length; ++i) {
      if (_WeakMap["default"].get(audioBufferSourceNodeArray[i]).innerAudioContext == innerAudioContext) {
        audioBufferSourceNodeArray.splice(i, 1);
        break;
      }
    }
    _WeakMap["default"].get(this.sourceNode).innerAudioContext = null;
  }
};
var AudioBufferSourceNode = function (_AudioNode) {
  function AudioBufferSourceNode(context, options) {
    var _this;
    _classCallCheck(this, AudioBufferSourceNode);
    _this = _callSuper(this, AudioBufferSourceNode, [context]);
    _this.buffer = null;
    _this.detune = new _AudioParam["default"]({
      value: 0
    });
    _this._loop = false;
    _this.loopStart = 0;
    _this.loopEnd = 0;
    _this._playbackRate = new _AudioParam["default"]({
      value: 1.0
    });
    var innerAudioContext = ral.createInnerAudioContext();
    _WeakMap["default"].get(_this).innerAudioContext = innerAudioContext;
    innerAudioContext.onEnded(_destroy.bind({
      sourceNode: _this,
      audioContext: context
    }));
    innerAudioContext.onStop(_destroy.bind({
      sourceNode: _this,
      audioContext: context
    }));
    return _this;
  }
  _inherits(AudioBufferSourceNode, _AudioNode);
  return _createClass(AudioBufferSourceNode, [{
    key: "start",
    value: function start(when, offset, duration) {
      if (this.buffer) {
        var innerAudioContext = _WeakMap["default"].get(this).innerAudioContext;
        if (innerAudioContext === null) {
          return;
        }
        innerAudioContext.src = this.buffer.url;
        if (!offset || typeof offset !== 'number' || offset <= 0) {
          innerAudioContext.startTime = 0;
        } else {
          innerAudioContext.startTime = offset;
        }
        if (!when || typeof when !== 'number' || when <= 0) {
          innerAudioContext.play();
        } else {
          setTimeout(function () {
            var audioContext = _WeakMap["default"].get(this).innerAudioContext;
            if (audioContext !== null) {
              audioContext.play();
            }
          }.bind(this), when * 1000);
        }
      }
    }
  }, {
    key: "stop",
    value: function stop(when) {
      var innerAudioContext = _WeakMap["default"].get(this).innerAudioContext;
      if (innerAudioContext === null) {
        return;
      }
      if (!when || typeof when !== 'number' || when <= 0) {
        innerAudioContext.stop();
      } else {
        setTimeout(function () {
          var audioContext = _WeakMap["default"].get(this).innerAudioContext;
          if (audioContext !== null) {
            audioContext.stop();
          }
        }.bind(this), when * 1000);
      }
    }
  }, {
    key: "onended",
    value: function onended() {}
  }, {
    key: "playbackRate",
    get: function get() {
      return this._playbackRate;
    },
    set: function set(value) {
      console.warn("playbackRate nonsupport");
      this._playbackRate = value;
    }
  }, {
    key: "loop",
    get: function get() {
      return this._loop;
    },
    set: function set(value) {
      var innerAudioContext = _WeakMap["default"].get(this).innerAudioContext;
      if (innerAudioContext === null) {
        return;
      }
      this._loop = value;
      innerAudioContext.loop = value;
    }
  }]);
}(_AudioNode2["default"]);
var _default = exports["default"] = AudioBufferSourceNode;

},{"../util/WeakMap":55,"./AudioNode":44,"./AudioParam":45}],41:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _BaseAudioContext2 = _interopRequireDefault(require("./BaseAudioContext"));
var _MediaElementAudioSourceNode = _interopRequireDefault(require("./MediaElementAudioSourceNode"));
var _WeakMap = _interopRequireDefault(require("../util/WeakMap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var AudioContext = function (_BaseAudioContext) {
  function AudioContext(options) {
    var _this;
    _classCallCheck(this, AudioContext);
    _this = _callSuper(this, AudioContext);
    _this.baseLatency;
    _this.outputLatency;
    return _this;
  }
  _inherits(AudioContext, _BaseAudioContext);
  return _createClass(AudioContext, [{
    key: "close",
    value: function close() {
      var audioBufferSourceNodeArray = _WeakMap["default"].get(this).audioBufferSourceNodeArray;
      audioBufferSourceNodeArray.forEach(function (element) {
        _WeakMap["default"].get(element).innerAudioContext.destroy();
        _WeakMap["default"].get(element).innerAudioContext = null;
      });
      array.length = 0;
    }
  }, {
    key: "createMediaElementSource",
    value: function createMediaElementSource(myMediaElement) {
      return new _MediaElementAudioSourceNode["default"](this, {
        mediaElement: myMediaElement
      });
    }
  }, {
    key: "createMediaStreamSource",
    value: function createMediaStreamSource() {}
  }, {
    key: "createMediaStreamDestination",
    value: function createMediaStreamDestination() {}
  }, {
    key: "createMediaStreamTrackSource",
    value: function createMediaStreamTrackSource() {}
  }, {
    key: "getOutputTimestamp",
    value: function getOutputTimestamp() {}
  }, {
    key: "resume",
    value: function resume() {}
  }, {
    key: "suspend",
    value: function suspend() {}
  }]);
}(_BaseAudioContext2["default"]);
var _default = exports["default"] = AudioContext;

},{"../util/WeakMap":55,"./BaseAudioContext":47,"./MediaElementAudioSourceNode":50}],42:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var AudioDestinationNode = function (_AudioNode) {
  function AudioDestinationNode(context) {
    var _this;
    _classCallCheck(this, AudioDestinationNode);
    _this = _callSuper(this, AudioDestinationNode, [context]);
    _this.maxChannelCount = 2;
    return _this;
  }
  _inherits(AudioDestinationNode, _AudioNode);
  return _createClass(AudioDestinationNode);
}(_AudioNode2["default"]);
var _default = exports["default"] = AudioDestinationNode;

},{"./AudioNode":44}],43:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var AudioListener = function (_AudioNode) {
  function AudioListener(context) {
    var _this;
    _classCallCheck(this, AudioListener);
    _this = _callSuper(this, AudioListener, [context]);
    _this.positionX = new _AudioParam["default"]({
      value: 0
    });
    _this.positionY = new _AudioParam["default"]({
      value: 0
    });
    _this.positionZ = new _AudioParam["default"]({
      value: 0
    });
    _this.forwardX = new _AudioParam["default"]({
      value: 0
    });
    _this.forwardY = new _AudioParam["default"]({
      value: 0
    });
    _this.forwardZ = new _AudioParam["default"]({
      value: -1
    });
    _this.upX = new _AudioParam["default"]({
      value: 0
    });
    _this.upY = new _AudioParam["default"]({
      value: 1
    });
    _this.upZ = new _AudioParam["default"]({
      value: 0
    });
    return _this;
  }
  _inherits(AudioListener, _AudioNode);
  return _createClass(AudioListener, [{
    key: "setOrientation",
    value: function setOrientation(x, y, z) {}
  }, {
    key: "setPosition",
    value: function setPosition(x, y, z) {
      x = x || 0;
      y = y || 0;
      z = z || 0;
      this.positionX.value = x;
      this.positionY.value = y;
      this.positionZ.value = z;
    }
  }]);
}(_AudioNode2["default"]);
var _default = exports["default"] = AudioListener;

},{"./AudioNode":44,"./AudioParam":45}],44:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("../EventTarget"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var AudioNode = function (_EventTarget) {
  function AudioNode(context) {
    var _this;
    _classCallCheck(this, AudioNode);
    _this = _callSuper(this, AudioNode);
    _this._context = context;
    _this.numberOfInputs = 1;
    _this.numberOfOutputs = 1;
    _this.channelCount = 2;
    _this.channelCountMode = "explicit";
    _this.channelInterpretation = "speakers";
    return _this;
  }
  _inherits(AudioNode, _EventTarget);
  return _createClass(AudioNode, [{
    key: "connect",
    value: function connect(destination, outputIndex, inputIndex) {}
  }, {
    key: "disconnect",
    value: function disconnect() {}
  }, {
    key: "isNumber",
    value: function isNumber(obj) {
      return typeof obj === 'number' || obj instanceof Number;
    }
  }, {
    key: "context",
    get: function get() {
      return this._context;
    }
  }]);
}(_EventTarget2["default"]);
var _default = exports["default"] = AudioNode;

},{"../EventTarget":11}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AudioParam = function () {
  function AudioParam() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, AudioParam);
    this.automationRate = options.automationRate || "a-rate";
    this._defaultValue = options.defaultValue || 1;
    this._maxValue = options.maxValue || Number.MAX_VALUE;
    this._minValue = options.minValue || -Number.MAX_VALUE;
    this.value = options.value || 1;
  }
  return _createClass(AudioParam, [{
    key: "defaultValue",
    get: function get() {
      return this._defaultValue;
    }
  }, {
    key: "maxValue",
    get: function get() {
      return this._maxValue;
    }
  }, {
    key: "minValue",
    get: function get() {
      return this._minValue;
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      value = Math.min(this._maxValue, value);
      this._value = Math.max(this._minValue, value);
    }
  }, {
    key: "setValueAtTime",
    value: function setValueAtTime(value, startTime) {
      this.value = value;
    }
  }, {
    key: "linearRampToValueAtTime",
    value: function linearRampToValueAtTime(value, endTime) {
      if (endTime < 0) {
        return;
      }
      var k = value / endTime;
      var self = this;
      var func = function func(dt) {
        dt = dt / 1000;
        if (dt > endTime) {
          dt = endTime;
        }
        if (dt < 0) {
          dt = 0;
        }
        endTime -= dt;
        self.value += dt * k;
        if (endTime > 0) {
          requestAnimationFrame(func);
        }
      };
      requestAnimationFrame(func);
    }
  }, {
    key: "exponentialRampToValueAtTime",
    value: function exponentialRampToValueAtTime() {}
  }, {
    key: "setTargetAtTime",
    value: function setTargetAtTime(target, startTime, timeConstant) {
      this.value = target;
    }
  }, {
    key: "setValueCurveAtTime",
    value: function setValueCurveAtTime() {}
  }, {
    key: "cancelScheduledValues",
    value: function cancelScheduledValues() {}
  }, {
    key: "cancelAndHoldAtTime",
    value: function cancelAndHoldAtTime() {}
  }]);
}();
var _default = exports["default"] = AudioParam;

},{}],46:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var AudioScheduledSourceNode = function (_AudioNode) {
  function AudioScheduledSourceNode(context) {
    _classCallCheck(this, AudioScheduledSourceNode);
    return _callSuper(this, AudioScheduledSourceNode, [context]);
  }
  _inherits(AudioScheduledSourceNode, _AudioNode);
  return _createClass(AudioScheduledSourceNode, [{
    key: "onended",
    value: function onended(event) {}
  }, {
    key: "start",
    value: function start(when, offset, duration) {}
  }, {
    key: "stop",
    value: function stop(when) {}
  }]);
}(_AudioNode2["default"]);
var _default = exports["default"] = AudioScheduledSourceNode;

},{"./AudioNode":44}],47:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("../EventTarget"));
var _AudioListener = _interopRequireDefault(require("./AudioListener"));
var _PeriodicWave = _interopRequireDefault(require("./PeriodicWave"));
var _AudioBuffer = _interopRequireDefault(require("./AudioBuffer"));
var _WeakMap = _interopRequireDefault(require("../util/WeakMap"));
var _DynamicsCompressorNode = _interopRequireDefault(require("./DynamicsCompressorNode"));
var _AudioBufferSourceNode = _interopRequireDefault(require("./AudioBufferSourceNode"));
var _AudioDestinationNode = _interopRequireDefault(require("./AudioDestinationNode"));
var _OscillatorNode = _interopRequireDefault(require("./OscillatorNode"));
var _AnalyserNode = _interopRequireDefault(require("./AnalyserNode"));
var _PannerNode = _interopRequireDefault(require("./PannerNode"));
var _GainNode = _interopRequireDefault(require("./GainNode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var BaseAudioContext = function (_EventTarget) {
  function BaseAudioContext() {
    var _this;
    _classCallCheck(this, BaseAudioContext);
    _this = _callSuper(this, BaseAudioContext);
    _this.audioWorklet;
    _this.currentTime = 0;
    _this.destination = new _AudioDestinationNode["default"](_this);
    _this.listener = new _AudioListener["default"](_this);
    _this.sampleRate;
    _this.state = "running";
    _WeakMap["default"].get(_this).audioBufferSourceNodeArray = [];
    return _this;
  }
  _inherits(BaseAudioContext, _EventTarget);
  return _createClass(BaseAudioContext, [{
    key: "createAnalyser",
    value: function createAnalyser() {
      return new _AnalyserNode["default"](this);
    }
  }, {
    key: "createBiquadFilter",
    value: function createBiquadFilter() {}
  }, {
    key: "createBuffer",
    value: function createBuffer() {}
  }, {
    key: "createBufferSource",
    value: function createBufferSource() {
      var sourceNode = new _AudioBufferSourceNode["default"](this);
      _WeakMap["default"].get(this).audioBufferSourceNodeArray.push(sourceNode);
      return sourceNode;
    }
  }, {
    key: "createConstantSource",
    value: function createConstantSource() {}
  }, {
    key: "createChannelMerger",
    value: function createChannelMerger() {}
  }, {
    key: "createChannelSplitter",
    value: function createChannelSplitter() {}
  }, {
    key: "createConvolver",
    value: function createConvolver() {}
  }, {
    key: "createDelay",
    value: function createDelay() {}
  }, {
    key: "createDynamicsCompressor",
    value: function createDynamicsCompressor() {
      return new _DynamicsCompressorNode["default"](this);
    }
  }, {
    key: "createGain",
    value: function createGain() {
      return new _GainNode["default"](this);
    }
  }, {
    key: "createIIRFilter",
    value: function createIIRFilter() {}
  }, {
    key: "createOscillator",
    value: function createOscillator() {
      return new _OscillatorNode["default"](this);
    }
  }, {
    key: "createPanner",
    value: function createPanner() {
      return new _PannerNode["default"](this);
    }
  }, {
    key: "createPeriodicWave",
    value: function createPeriodicWave() {
      return new _PeriodicWave["default"](this);
    }
  }, {
    key: "createScriptProcessor",
    value: function createScriptProcessor() {}
  }, {
    key: "createStereoPanner",
    value: function createStereoPanner() {}
  }, {
    key: "createWaveShaper",
    value: function createWaveShaper() {}
  }, {
    key: "decodeAudioData",
    value: function decodeAudioData(audioData, callFunc) {
      new _AudioBuffer["default"](this, audioData, callFunc);
    }
  }, {
    key: "onstatechange",
    value: function onstatechange() {}
  }]);
}(_EventTarget2["default"]);
var _default = exports["default"] = BaseAudioContext;

},{"../EventTarget":11,"../util/WeakMap":55,"./AnalyserNode":38,"./AudioBuffer":39,"./AudioBufferSourceNode":40,"./AudioDestinationNode":42,"./AudioListener":43,"./DynamicsCompressorNode":48,"./GainNode":49,"./OscillatorNode":51,"./PannerNode":52,"./PeriodicWave":53}],48:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var DynamicsCompressorNode = function (_AudioNode) {
  function DynamicsCompressorNode(context) {
    var _this;
    _classCallCheck(this, DynamicsCompressorNode);
    _this = _callSuper(this, DynamicsCompressorNode, [context]);
    _this._threshold = new _AudioParam["default"]({
      value: -24,
      defaultValue: -24,
      maxValue: 0,
      minValue: -100
    });
    _this._knee = new _AudioParam["default"]({
      value: 30,
      defaultValue: 30,
      maxValue: 40,
      minValue: 0
    });
    _this._ratio = new _AudioParam["default"]({
      value: 12,
      defaultValue: 12,
      maxValue: 20,
      minValue: 1
    });
    _this._reduction = new _AudioParam["default"]({
      value: 0,
      defaultValue: 0,
      maxValue: 0,
      minValue: -20
    });
    _this._attack = new _AudioParam["default"]({
      value: 0.003,
      defaultValue: 0.003,
      maxValue: 1,
      minValue: 0
    });
    _this._release = new _AudioParam["default"]({
      value: 0.25,
      defaultValue: 0.25,
      maxValue: 1,
      minValue: 0
    });
    return _this;
  }
  _inherits(DynamicsCompressorNode, _AudioNode);
  return _createClass(DynamicsCompressorNode, [{
    key: "threshold",
    get: function get() {
      return this._threshold;
    }
  }, {
    key: "keen",
    get: function get() {
      return this._keen;
    }
  }, {
    key: "ratio",
    get: function get() {
      return this._ratio;
    }
  }, {
    key: "reduction",
    get: function get() {
      return this._reduction;
    }
  }, {
    key: "attack",
    get: function get() {
      return this._attack;
    }
  }, {
    key: "release",
    get: function get() {
      return this._release;
    }
  }]);
}(_AudioNode2["default"]);
var _default = exports["default"] = DynamicsCompressorNode;

},{"./AudioNode":44,"./AudioParam":45}],49:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var GainNode = function (_AudioNode) {
  function GainNode(context, options) {
    var _this;
    _classCallCheck(this, GainNode);
    _this = _callSuper(this, GainNode, [context]);
    _this._gain = options && options.gain || new _AudioParam["default"]();
    return _this;
  }
  _inherits(GainNode, _AudioNode);
  return _createClass(GainNode, [{
    key: "gain",
    get: function get() {
      return this._gain;
    }
  }]);
}(_AudioNode2["default"]);
var _default = exports["default"] = GainNode;

},{"./AudioNode":44,"./AudioParam":45}],50:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var MediaElementAudioSourceNode = function (_AudioNode) {
  function MediaElementAudioSourceNode(context, options) {
    _classCallCheck(this, MediaElementAudioSourceNode);
    return _callSuper(this, MediaElementAudioSourceNode, [context]);
  }
  _inherits(MediaElementAudioSourceNode, _AudioNode);
  return _createClass(MediaElementAudioSourceNode);
}(_AudioNode2["default"]);
var _default = exports["default"] = MediaElementAudioSourceNode;

},{"./AudioNode":44}],51:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioScheduledSourceNode = _interopRequireDefault(require("./AudioScheduledSourceNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var types = {
  "sine": 0,
  "square": 0,
  "sawtooth": 0,
  "triangle": 0,
  "custom": 0
};
var OscillatorNode = function (_AudioScheduledSource) {
  function OscillatorNode(context, options) {
    var _this;
    _classCallCheck(this, OscillatorNode);
    _this = _callSuper(this, OscillatorNode);
    options = options || {};
    _this.frequency = new _AudioParam["default"]({
      value: _this.isNumber(options.frequency) ? options.frequency : 440
    });
    _this.detune = new _AudioParam["default"]({
      value: _this.isNumber(options.detune) ? options.detune : 0
    });
    _this.type = options.type in types ? options.type : "sine";
    return _this;
  }
  _inherits(OscillatorNode, _AudioScheduledSource);
  return _createClass(OscillatorNode, [{
    key: "setPeriodicWave",
    value: function setPeriodicWave(wave) {}
  }, {
    key: "start",
    value: function start(when) {}
  }, {
    key: "stop",
    value: function stop(wen) {}
  }]);
}(_AudioScheduledSourceNode["default"]);
var _default = exports["default"] = OscillatorNode;

},{"./AudioParam":45,"./AudioScheduledSourceNode":46}],52:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var PannerNode = function (_AudioNode) {
  function PannerNode(context, options) {
    var _this;
    _classCallCheck(this, PannerNode);
    _this = _callSuper(this, PannerNode, [context]);
    _this.coneInnerAngle = 360;
    _this.coneOuterAngle = 360;
    _this.coneOuterGain = 0;
    _this.distanceModel = "inverse";
    _this.maxDistance = 10000;
    _this.orientationX = new _AudioParam["default"]({
      value: 1
    });
    _this.orientationY = new _AudioParam["default"]({
      value: 0
    });
    _this.orientationZ = new _AudioParam["default"]({
      value: 0
    });
    _this.panningModel = "equalpower";
    _this.positionX = new _AudioParam["default"]({
      value: 0
    });
    _this.positionY = new _AudioParam["default"]({
      value: 0
    });
    _this.positionZ = new _AudioParam["default"]({
      value: 0
    });
    _this.refDistance = 1;
    _this.rolloffFactor = 1;
    return _this;
  }
  _inherits(PannerNode, _AudioNode);
  return _createClass(PannerNode, [{
    key: "setPosition",
    value: function setPosition(x, y, z) {
      this.positionX = x;
      this.positionY = y;
      this.positionZ = z;
    }
  }, {
    key: "setOrientation",
    value: function setOrientation(x, y, z) {
      this.orientationX = x;
      this.orientationY = y;
      this.orientationZ = z;
    }
  }, {
    key: "setVelocity",
    value: function setVelocity() {}
  }]);
}(_AudioNode2["default"]);
var _default = exports["default"] = PannerNode;

},{"./AudioNode":44,"./AudioParam":45}],53:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var PeriodicWave = _createClass(function PeriodicWave(context, options) {
  _classCallCheck(this, PeriodicWave);
});
var _default = exports["default"] = PeriodicWave;

},{}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var md5 = require("../../lib/md5.min");
var fileMgr = ral.getFileSystemManager();
var cacheDir = ral.env.USER_DATA_PATH + "/fileCache/";
var FileCache = function () {
  function FileCache() {
    _classCallCheck(this, FileCache);
    this._caches = {};
  }
  return _createClass(FileCache, [{
    key: "getCache",
    value: function getCache(data) {
      var key = FileCache._genDataKey(data);
      if (key in this._caches) {
        return this._caches[key];
      } else {
        return "";
      }
    }
  }, {
    key: "setCache",
    value: function setCache(path, data) {
      var key = FileCache._genDataKey(data);
      this._caches[key] = path;
    }
  }, {
    key: "setItem",
    value: function setItem(data, path, key, callBack) {
      key = key || FileCache._genDataKey(data);
      var caches = this._caches;
      if (key in caches) {
        callBack && callBack(caches[key]);
        return;
      }
      if (!path) {
        path = cacheDir + key;
        fileMgr.writeFile({
          filePath: path,
          data: data,
          encoding: "binary",
          success: function success() {
            caches[key] = path;
            callBack && callBack(path);
          },
          fail: function fail() {
            callBack && callBack();
            throw path + "writeFile fail!";
          }
        });
      }
    }
  }, {
    key: "getPath",
    value: function getPath(data, callBack) {
      var key = FileCache._genDataKey(data);
      var caches = this._caches;
      if (key in caches) {
        callBack(caches[key]);
      } else {
        this.setItem(data, undefined, key, callBack);
      }
    }
  }], [{
    key: "_genDataKey",
    value: function _genDataKey(data) {
      var view = new DataView(data);
      var length = view.byteLength / 4;
      var count = 10;
      var space = length / count;
      var key = "length:" + length;
      key += "first:" + view.getInt32(0);
      key += "last:" + view.getInt32(length - 1);
      while (count--) {
        key += count + ":" + view.getInt32(Math.floor(space * count));
      }
      return md5(key);
    }
  }]);
}();
try {
  fileMgr.accessSync(cacheDir);
  fileMgr.rmdirSync(cacheDir, true);
} catch (e) {}
fileMgr.mkdirSync(cacheDir, true);
var _default = exports["default"] = new FileCache();

},{"../../lib/md5.min":2}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = new WeakMap();

},{}],56:[function(require,module,exports){
"use strict";

var _Audio = _interopRequireDefault(require("./Audio"));
var _AudioContext = _interopRequireDefault(require("./audioContext/AudioContext"));
var _DeviceMotionEvent = _interopRequireDefault(require("./DeviceMotionEvent"));
var _Document = _interopRequireDefault(require("./Document"));
var _Event = _interopRequireDefault(require("./Event"));
var _FontFace = _interopRequireDefault(require("./FontFace"));
var _FontFaceSet = _interopRequireDefault(require("./FontFaceSet"));
var _EventTarget = _interopRequireDefault(require("./EventTarget"));
var _HTMLElement = _interopRequireDefault(require("./HTMLElement"));
var _HTMLAudioElement = _interopRequireDefault(require("./HTMLAudioElement"));
var _HTMLCanvasElement = _interopRequireDefault(require("./HTMLCanvasElement"));
var _HTMLImageElement = _interopRequireDefault(require("./HTMLImageElement"));
var _HTMLVideoElement = _interopRequireDefault(require("./HTMLVideoElement"));
var _Image = _interopRequireDefault(require("./Image"));
var _Location = _interopRequireDefault(require("./Location"));
var _Navigator = _interopRequireDefault(require("./Navigator"));
var _Screen = _interopRequireDefault(require("./Screen"));
var _TouchEvent = _interopRequireDefault(require("./TouchEvent"));
var _XMLHttpRequest = _interopRequireDefault(require("./XMLHttpRequest"));
var _HTMLScriptElement = _interopRequireDefault(require("./HTMLScriptElement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
window.ral = window.ral || {};
var _systemInfo = window.ral.getSystemInfoSync();
window.clientTop = 0;
window.clientLeft = 0;
window.devicePixelRatio = _systemInfo.pixelRatio;
window.document = new _Document["default"]();
window.frameElement = null;
window.fullScreen = true;
window.innerHeight = _systemInfo.windowHeight;
window.innerWidth = _systemInfo.windowWidth;
window.length = 0;
window.location = new _Location["default"]();
window.name = "runtime";
window.navigator = new _Navigator["default"](_systemInfo.platform, _systemInfo.language);
window.outerHeight = _systemInfo.windowHeight;
window.outerWidth = _systemInfo.windowWidth;
window.pageXOffset = 0;
window.pageYOffset = 0;
window.parent = window;
window.screen = new _Screen["default"]();
window.screenLeft = 0;
window.screenTop = 0;
window.screenX = 0;
window.screenY = 0;
window.scrollX = 0;
window.scrollY = 0;
window.self = window;
window.top = window;
window.window = window;
window.alert = window.console.error;
var _require = require('../lib/base64.min.js'),
  btoa = _require.btoa,
  atob = _require.atob;
window.atob = atob;
window.btoa = btoa;
window.close = function () {
  console.warn("window.close() is deprecated!");
};
window.print = window.console.log;
window.addEventListener = _EventTarget["default"].prototype.addEventListener.bind(window);
window.removeEventListener = _EventTarget["default"].prototype.removeEventListener.bind(window);
var _dispatchEvent = _EventTarget["default"].prototype.dispatchEvent;
window.dispatchEvent = function (event) {
  if (window.document.dispatchEvent(event)) {
    return _dispatchEvent.apply(this || window, arguments);
  }
  return false;
};
window.getComputedStyle = function () {
  return {
    position: 'absolute',
    left: '0px',
    top: '0px',
    height: '0px',
    paddingLeft: 0,
    getPropertyValue: function getPropertyValue(key) {
      return this[key];
    }
  };
};
ral.onWindowResize && ral.onWindowResize(function (width, height) {
  window.innerWidth = width;
  window.innerHeight = height;
  window.outerWidth = window.innerWidth;
  window.outerHeight = window.innerHeight;
  window.screen.availWidth = window.innerWidth;
  window.screen.availHeight = window.innerHeight;
  window.screen.width = window.innerWidth;
  window.screen.height = window.innerHeight;
  var event = new _Event["default"]("resize");
  window.dispatchEvent(event);
});
ral.onDeviceOrientationChange && ral.onDeviceOrientationChange(function (res) {
  if (res.value === "portrait") {
    window.orientation = 0;
  } else if (res.value === "landscape") {
    window.orientation = 90;
  } else if (res.value === "landscapeReverse") {
    window.orientation = -90;
  } else if (res.value === "portraitReverse") {
    window.orientation = 180;
  }
});
window.stop = function () {
  console.warn("window.stop() not implemented");
};
window.Audio = _Audio["default"];
window.AudioContext = _AudioContext["default"];
window.DeviceMotionEvent = _DeviceMotionEvent["default"];
window.Event = _Event["default"];
window.FontFace = _FontFace["default"];
window.FontFaceSet = _FontFaceSet["default"];
window.HTMLElement = _HTMLElement["default"];
window.HTMLAudioElement = _HTMLAudioElement["default"];
window.HTMLCanvasElement = _HTMLCanvasElement["default"];
window.HTMLImageElement = _HTMLImageElement["default"];
window.HTMLVideoElement = _HTMLVideoElement["default"];
window.Image = _Image["default"];
window.TouchEvent = _TouchEvent["default"];
window.XMLHttpRequest = _XMLHttpRequest["default"];
window.HTMLScriptElement = _HTMLScriptElement["default"];
if (!window.Blob || !window.URL) {
  var _require2 = require('./Blob.js'),
    Blob = _require2.Blob,
    URL = _require2.URL;
  window.Blob = Blob;
  window.URL = URL;
}
if (!window.DOMParser) {
  window.DOMParser = require('./xmldom/dom-parser.js').DOMParser;
}

},{"../lib/base64.min.js":1,"./Audio":4,"./Blob.js":5,"./DeviceMotionEvent":7,"./Document":8,"./Event":10,"./EventTarget":11,"./FontFace":12,"./FontFaceSet":13,"./HTMLAudioElement":15,"./HTMLCanvasElement":17,"./HTMLElement":18,"./HTMLImageElement":21,"./HTMLScriptElement":24,"./HTMLVideoElement":26,"./Image":27,"./Location":29,"./Navigator":31,"./Screen":34,"./TouchEvent":35,"./XMLHttpRequest":36,"./audioContext/AudioContext":41,"./xmldom/dom-parser.js":57}],57:[function(require,module,exports){
"use strict";

function DOMParser(options) {
  this.options = options || {
    locator: {}
  };
}
DOMParser.prototype.parseFromString = function (source, mimeType) {
  var options = this.options;
  var sax = new XMLReader();
  var domBuilder = options.domBuilder || new DOMHandler();
  var errorHandler = options.errorHandler;
  var locator = options.locator;
  var defaultNSMap = options.xmlns || {};
  var isHTML = /\/x?html?$/.test(mimeType);
  var entityMap = isHTML ? htmlEntity.entityMap : {
    'lt': '<',
    'gt': '>',
    'amp': '&',
    'quot': '"',
    'apos': "'"
  };
  if (locator) {
    domBuilder.setDocumentLocator(locator);
  }
  sax.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
  sax.domBuilder = options.domBuilder || domBuilder;
  if (isHTML) {
    defaultNSMap[''] = 'http://www.w3.org/1999/xhtml';
  }
  defaultNSMap.xml = defaultNSMap.xml || 'http://www.w3.org/XML/1998/namespace';
  if (source) {
    sax.parse(source, defaultNSMap, entityMap);
  } else {
    sax.errorHandler.error("invalid doc source");
  }
  return domBuilder.doc;
};
function buildErrorHandler(errorImpl, domBuilder, locator) {
  if (!errorImpl) {
    if (domBuilder instanceof DOMHandler) {
      return domBuilder;
    }
    errorImpl = domBuilder;
  }
  var errorHandler = {};
  var isCallback = errorImpl instanceof Function;
  locator = locator || {};
  function build(key) {
    var fn = errorImpl[key];
    if (!fn && isCallback) {
      fn = errorImpl.length == 2 ? function (msg) {
        errorImpl(key, msg);
      } : errorImpl;
    }
    errorHandler[key] = fn && function (msg) {
      fn('[xmldom ' + key + ']\t' + msg + _locator(locator));
    } || function () {};
  }
  build('warning');
  build('error');
  build('fatalError');
  return errorHandler;
}
function DOMHandler() {
  this.cdata = false;
}
function position(locator, node) {
  node.lineNumber = locator.lineNumber;
  node.columnNumber = locator.columnNumber;
}
DOMHandler.prototype = {
  startDocument: function startDocument() {
    this.doc = new DOMImplementation().createDocument(null, null, null);
    if (this.locator) {
      this.doc.documentURI = this.locator.systemId;
    }
  },
  startElement: function startElement(namespaceURI, localName, qName, attrs) {
    var doc = this.doc;
    var el = doc.createElementNS(namespaceURI, qName || localName);
    var len = attrs.length;
    appendElement(this, el);
    this.currentElement = el;
    this.locator && position(this.locator, el);
    for (var i = 0; i < len; i++) {
      var namespaceURI = attrs.getURI(i);
      var value = attrs.getValue(i);
      var qName = attrs.getQName(i);
      var attr = doc.createAttributeNS(namespaceURI, qName);
      this.locator && position(attrs.getLocator(i), attr);
      attr.value = attr.nodeValue = value;
      el.setAttributeNode(attr);
    }
  },
  endElement: function endElement(namespaceURI, localName, qName) {
    var current = this.currentElement;
    var tagName = current.tagName;
    this.currentElement = current.parentNode;
  },
  startPrefixMapping: function startPrefixMapping(prefix, uri) {},
  endPrefixMapping: function endPrefixMapping(prefix) {},
  processingInstruction: function processingInstruction(target, data) {
    var ins = this.doc.createProcessingInstruction(target, data);
    this.locator && position(this.locator, ins);
    appendElement(this, ins);
  },
  ignorableWhitespace: function ignorableWhitespace(ch, start, length) {},
  characters: function characters(chars, start, length) {
    chars = _toString.apply(this, arguments);
    if (chars) {
      if (this.cdata) {
        var charNode = this.doc.createCDATASection(chars);
      } else {
        var charNode = this.doc.createTextNode(chars);
      }
      if (this.currentElement) {
        this.currentElement.appendChild(charNode);
      } else if (/^\s*$/.test(chars)) {
        this.doc.appendChild(charNode);
      }
      this.locator && position(this.locator, charNode);
    }
  },
  skippedEntity: function skippedEntity(name) {},
  endDocument: function endDocument() {
    this.doc.normalize();
  },
  setDocumentLocator: function setDocumentLocator(locator) {
    if (this.locator = locator) {
      locator.lineNumber = 0;
    }
  },
  comment: function comment(chars, start, length) {
    chars = _toString.apply(this, arguments);
    var comm = this.doc.createComment(chars);
    this.locator && position(this.locator, comm);
    appendElement(this, comm);
  },
  startCDATA: function startCDATA() {
    this.cdata = true;
  },
  endCDATA: function endCDATA() {
    this.cdata = false;
  },
  startDTD: function startDTD(name, publicId, systemId) {
    var impl = this.doc.implementation;
    if (impl && impl.createDocumentType) {
      var dt = impl.createDocumentType(name, publicId, systemId);
      this.locator && position(this.locator, dt);
      appendElement(this, dt);
    }
  },
  warning: function warning(error) {
    console.warn('[xmldom warning]\t' + error, _locator(this.locator));
  },
  error: function error(_error) {
    console.error('[xmldom error]\t' + _error, _locator(this.locator));
  },
  fatalError: function fatalError(error) {
    console.error('[xmldom fatalError]\t' + error, _locator(this.locator));
    throw error;
  }
};
function _locator(l) {
  if (l) {
    return '\n@' + (l.systemId || '') + '#[line:' + l.lineNumber + ',col:' + l.columnNumber + ']';
  }
}
function _toString(chars, start, length) {
  if (typeof chars == 'string') {
    return chars.substr(start, length);
  } else {
    if (chars.length >= start + length || start) {
      return new java.lang.String(chars, start, length) + '';
    }
    return chars;
  }
}
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (key) {
  DOMHandler.prototype[key] = function () {
    return null;
  };
});
function appendElement(hander, node) {
  if (!hander.currentElement) {
    hander.doc.appendChild(node);
  } else {
    hander.currentElement.appendChild(node);
  }
}
var htmlEntity = require('./entities');
var XMLReader = require('./sax').XMLReader;
var DOMImplementation = exports.DOMImplementation = require('./dom').DOMImplementation;
exports.XMLSerializer = require('./dom').XMLSerializer;
exports.DOMParser = DOMParser;

},{"./dom":58,"./entities":59,"./sax":60}],58:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function copy(src, dest) {
  for (var p in src) {
    dest[p] = src[p];
  }
}
function _extends(Class, Super) {
  var pt = Class.prototype;
  if (!(pt instanceof Super)) {
    var t = function t() {};
    ;
    t.prototype = Super.prototype;
    t = new t();
    copy(pt, t);
    Class.prototype = pt = t;
  }
  if (pt.constructor != Class) {
    if (typeof Class != 'function') {
      console.error("unknow Class:" + Class);
    }
    pt.constructor = Class;
  }
}
var htmlns = 'http://www.w3.org/1999/xhtml';
var NodeType = {};
var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
var TEXT_NODE = NodeType.TEXT_NODE = 3;
var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
var ExceptionCode = {};
var ExceptionMessage = {};
var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
function DOMException(code, message) {
  if (message instanceof Error) {
    var error = message;
  } else {
    error = this;
    Error.call(this, ExceptionMessage[code]);
    this.message = ExceptionMessage[code];
    if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
  }
  error.code = code;
  if (message) this.message = this.message + ": " + message;
  return error;
}
;
DOMException.prototype = Error.prototype;
copy(ExceptionCode, DOMException);
function NodeList() {}
;
NodeList.prototype = {
  length: 0,
  item: function item(index) {
    return this[index] || null;
  },
  toString: function toString(isHTML, nodeFilter) {
    for (var buf = [], i = 0; i < this.length; i++) {
      serializeToString(this[i], buf, isHTML, nodeFilter);
    }
    return buf.join('');
  }
};
function LiveNodeList(node, refresh) {
  this._node = node;
  this._refresh = refresh;
  _updateLiveList(this);
}
function _updateLiveList(list) {
  var inc = list._node._inc || list._node.ownerDocument._inc;
  if (list._inc != inc) {
    var ls = list._refresh(list._node);
    __set__(list, 'length', ls.length);
    copy(ls, list);
    list._inc = inc;
  }
}
LiveNodeList.prototype.item = function (i) {
  _updateLiveList(this);
  return this[i];
};
_extends(LiveNodeList, NodeList);
function NamedNodeMap() {}
;
function _findNodeIndex(list, node) {
  var i = list.length;
  while (i--) {
    if (list[i] === node) {
      return i;
    }
  }
}
function _addNamedNode(el, list, newAttr, oldAttr) {
  if (oldAttr) {
    list[_findNodeIndex(list, oldAttr)] = newAttr;
  } else {
    list[list.length++] = newAttr;
  }
  if (el) {
    newAttr.ownerElement = el;
    var doc = el.ownerDocument;
    if (doc) {
      oldAttr && _onRemoveAttribute(doc, el, oldAttr);
      _onAddAttribute(doc, el, newAttr);
    }
  }
}
function _removeNamedNode(el, list, attr) {
  var i = _findNodeIndex(list, attr);
  if (i >= 0) {
    var lastIndex = list.length - 1;
    while (i < lastIndex) {
      list[i] = list[++i];
    }
    list.length = lastIndex;
    if (el) {
      var doc = el.ownerDocument;
      if (doc) {
        _onRemoveAttribute(doc, el, attr);
        attr.ownerElement = null;
      }
    }
  } else {
    throw DOMException(NOT_FOUND_ERR, new Error(el.tagName + '@' + attr));
  }
}
NamedNodeMap.prototype = {
  length: 0,
  item: NodeList.prototype.item,
  getNamedItem: function getNamedItem(key) {
    var i = this.length;
    while (i--) {
      var attr = this[i];
      if (attr.nodeName == key) {
        return attr;
      }
    }
  },
  setNamedItem: function setNamedItem(attr) {
    var el = attr.ownerElement;
    if (el && el != this._ownerElement) {
      throw new DOMException(INUSE_ATTRIBUTE_ERR);
    }
    var oldAttr = this.getNamedItem(attr.nodeName);
    _addNamedNode(this._ownerElement, this, attr, oldAttr);
    return oldAttr;
  },
  setNamedItemNS: function setNamedItemNS(attr) {
    var el = attr.ownerElement,
      oldAttr;
    if (el && el != this._ownerElement) {
      throw new DOMException(INUSE_ATTRIBUTE_ERR);
    }
    oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
    _addNamedNode(this._ownerElement, this, attr, oldAttr);
    return oldAttr;
  },
  removeNamedItem: function removeNamedItem(key) {
    var attr = this.getNamedItem(key);
    _removeNamedNode(this._ownerElement, this, attr);
    return attr;
  },
  removeNamedItemNS: function removeNamedItemNS(namespaceURI, localName) {
    var attr = this.getNamedItemNS(namespaceURI, localName);
    _removeNamedNode(this._ownerElement, this, attr);
    return attr;
  },
  getNamedItemNS: function getNamedItemNS(namespaceURI, localName) {
    var i = this.length;
    while (i--) {
      var node = this[i];
      if (node.localName == localName && node.namespaceURI == namespaceURI) {
        return node;
      }
    }
    return null;
  }
};
function DOMImplementation(features) {
  this._features = {};
  if (features) {
    for (var feature in features) {
      this._features = features[feature];
    }
  }
}
;
DOMImplementation.prototype = {
  hasFeature: function hasFeature(feature, version) {
    var versions = this._features[feature.toLowerCase()];
    if (versions && (!version || version in versions)) {
      return true;
    } else {
      return false;
    }
  },
  createDocument: function createDocument(namespaceURI, qualifiedName, doctype) {
    var doc = new Document();
    doc.implementation = this;
    doc.childNodes = new NodeList();
    doc.doctype = doctype;
    if (doctype) {
      doc.appendChild(doctype);
    }
    if (qualifiedName) {
      var root = doc.createElementNS(namespaceURI, qualifiedName);
      doc.appendChild(root);
    }
    return doc;
  },
  createDocumentType: function createDocumentType(qualifiedName, publicId, systemId) {
    var node = new DocumentType();
    node.name = qualifiedName;
    node.nodeName = qualifiedName;
    node.publicId = publicId;
    node.systemId = systemId;
    return node;
  }
};
function Node() {}
;
Node.prototype = {
  firstChild: null,
  lastChild: null,
  previousSibling: null,
  nextSibling: null,
  attributes: null,
  parentNode: null,
  childNodes: null,
  ownerDocument: null,
  nodeValue: null,
  namespaceURI: null,
  prefix: null,
  localName: null,
  insertBefore: function insertBefore(newChild, refChild) {
    return _insertBefore(this, newChild, refChild);
  },
  replaceChild: function replaceChild(newChild, oldChild) {
    this.insertBefore(newChild, oldChild);
    if (oldChild) {
      this.removeChild(oldChild);
    }
  },
  removeChild: function removeChild(oldChild) {
    return _removeChild(this, oldChild);
  },
  appendChild: function appendChild(newChild) {
    return this.insertBefore(newChild, null);
  },
  hasChildNodes: function hasChildNodes() {
    return this.firstChild != null;
  },
  cloneNode: function cloneNode(deep) {
    return _cloneNode(this.ownerDocument || this, this, deep);
  },
  normalize: function normalize() {
    var child = this.firstChild;
    while (child) {
      var next = child.nextSibling;
      if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
        this.removeChild(next);
        child.appendData(next.data);
      } else {
        child.normalize();
        child = next;
      }
    }
  },
  isSupported: function isSupported(feature, version) {
    return this.ownerDocument.implementation.hasFeature(feature, version);
  },
  hasAttributes: function hasAttributes() {
    return this.attributes.length > 0;
  },
  lookupPrefix: function lookupPrefix(namespaceURI) {
    var el = this;
    while (el) {
      var map = el._nsMap;
      if (map) {
        for (var n in map) {
          if (map[n] == namespaceURI) {
            return n;
          }
        }
      }
      el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
    }
    return null;
  },
  lookupNamespaceURI: function lookupNamespaceURI(prefix) {
    var el = this;
    while (el) {
      var map = el._nsMap;
      if (map) {
        if (prefix in map) {
          return map[prefix];
        }
      }
      el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
    }
    return null;
  },
  isDefaultNamespace: function isDefaultNamespace(namespaceURI) {
    var prefix = this.lookupPrefix(namespaceURI);
    return prefix == null;
  }
};
function _xmlEncoder(c) {
  return c == '<' && '&lt;' || c == '>' && '&gt;' || c == '&' && '&amp;' || c == '"' && '&quot;' || '&#' + c.charCodeAt() + ';';
}
copy(NodeType, Node);
copy(NodeType, Node.prototype);
function _visitNode(node, callback) {
  if (callback(node)) {
    return true;
  }
  if (node = node.firstChild) {
    do {
      if (_visitNode(node, callback)) {
        return true;
      }
    } while (node = node.nextSibling);
  }
}
function Document() {}
function _onAddAttribute(doc, el, newAttr) {
  doc && doc._inc++;
  var ns = newAttr.namespaceURI;
  if (ns == 'http://www.w3.org/2000/xmlns/') {
    el._nsMap[newAttr.prefix ? newAttr.localName : ''] = newAttr.value;
  }
}
function _onRemoveAttribute(doc, el, newAttr, remove) {
  doc && doc._inc++;
  var ns = newAttr.namespaceURI;
  if (ns == 'http://www.w3.org/2000/xmlns/') {
    delete el._nsMap[newAttr.prefix ? newAttr.localName : ''];
  }
}
function _onUpdateChild(doc, el, newChild) {
  if (doc && doc._inc) {
    doc._inc++;
    var cs = el.childNodes;
    if (newChild) {
      cs[cs.length++] = newChild;
    } else {
      var child = el.firstChild;
      var i = 0;
      while (child) {
        cs[i++] = child;
        child = child.nextSibling;
      }
      cs.length = i;
    }
  }
}
function _removeChild(parentNode, child) {
  var previous = child.previousSibling;
  var next = child.nextSibling;
  if (previous) {
    previous.nextSibling = next;
  } else {
    parentNode.firstChild = next;
  }
  if (next) {
    next.previousSibling = previous;
  } else {
    parentNode.lastChild = previous;
  }
  _onUpdateChild(parentNode.ownerDocument, parentNode);
  return child;
}
function _insertBefore(parentNode, newChild, nextChild) {
  var cp = newChild.parentNode;
  if (cp) {
    cp.removeChild(newChild);
  }
  if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
    var newFirst = newChild.firstChild;
    if (newFirst == null) {
      return newChild;
    }
    var newLast = newChild.lastChild;
  } else {
    newFirst = newLast = newChild;
  }
  var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;
  newFirst.previousSibling = pre;
  newLast.nextSibling = nextChild;
  if (pre) {
    pre.nextSibling = newFirst;
  } else {
    parentNode.firstChild = newFirst;
  }
  if (nextChild == null) {
    parentNode.lastChild = newLast;
  } else {
    nextChild.previousSibling = newLast;
  }
  do {
    newFirst.parentNode = parentNode;
  } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
  _onUpdateChild(parentNode.ownerDocument || parentNode, parentNode);
  if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
    newChild.firstChild = newChild.lastChild = null;
  }
  return newChild;
}
function _appendSingleChild(parentNode, newChild) {
  var cp = newChild.parentNode;
  if (cp) {
    var pre = parentNode.lastChild;
    cp.removeChild(newChild);
    var pre = parentNode.lastChild;
  }
  var pre = parentNode.lastChild;
  newChild.parentNode = parentNode;
  newChild.previousSibling = pre;
  newChild.nextSibling = null;
  if (pre) {
    pre.nextSibling = newChild;
  } else {
    parentNode.firstChild = newChild;
  }
  parentNode.lastChild = newChild;
  _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
  return newChild;
}
Document.prototype = {
  nodeName: '#document',
  nodeType: DOCUMENT_NODE,
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function insertBefore(newChild, refChild) {
    if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
      var child = newChild.firstChild;
      while (child) {
        var next = child.nextSibling;
        this.insertBefore(child, refChild);
        child = next;
      }
      return newChild;
    }
    if (this.documentElement == null && newChild.nodeType == ELEMENT_NODE) {
      this.documentElement = newChild;
    }
    return _insertBefore(this, newChild, refChild), newChild.ownerDocument = this, newChild;
  },
  removeChild: function removeChild(oldChild) {
    if (this.documentElement == oldChild) {
      this.documentElement = null;
    }
    return _removeChild(this, oldChild);
  },
  importNode: function importNode(importedNode, deep) {
    return _importNode(this, importedNode, deep);
  },
  getElementById: function getElementById(id) {
    var rtv = null;
    _visitNode(this.documentElement, function (node) {
      if (node.nodeType == ELEMENT_NODE) {
        if (node.getAttribute('id') == id) {
          rtv = node;
          return true;
        }
      }
    });
    return rtv;
  },
  createElement: function createElement(tagName) {
    var node = new Element();
    node.ownerDocument = this;
    node.nodeName = tagName;
    node.tagName = tagName;
    node.childNodes = new NodeList();
    var attrs = node.attributes = new NamedNodeMap();
    attrs._ownerElement = node;
    return node;
  },
  createDocumentFragment: function createDocumentFragment() {
    var node = new DocumentFragment();
    node.ownerDocument = this;
    node.childNodes = new NodeList();
    return node;
  },
  createTextNode: function createTextNode(data) {
    var node = new Text();
    node.ownerDocument = this;
    node.appendData(data);
    return node;
  },
  createComment: function createComment(data) {
    var node = new Comment();
    node.ownerDocument = this;
    node.appendData(data);
    return node;
  },
  createCDATASection: function createCDATASection(data) {
    var node = new CDATASection();
    node.ownerDocument = this;
    node.appendData(data);
    return node;
  },
  createProcessingInstruction: function createProcessingInstruction(target, data) {
    var node = new ProcessingInstruction();
    node.ownerDocument = this;
    node.tagName = node.target = target;
    node.nodeValue = node.data = data;
    return node;
  },
  createAttribute: function createAttribute(name) {
    var node = new Attr();
    node.ownerDocument = this;
    node.name = name;
    node.nodeName = name;
    node.localName = name;
    node.specified = true;
    return node;
  },
  createEntityReference: function createEntityReference(name) {
    var node = new EntityReference();
    node.ownerDocument = this;
    node.nodeName = name;
    return node;
  },
  createElementNS: function createElementNS(namespaceURI, qualifiedName) {
    var node = new Element();
    var pl = qualifiedName.split(':');
    var attrs = node.attributes = new NamedNodeMap();
    node.childNodes = new NodeList();
    node.ownerDocument = this;
    node.nodeName = qualifiedName;
    node.tagName = qualifiedName;
    node.namespaceURI = namespaceURI;
    if (pl.length == 2) {
      node.prefix = pl[0];
      node.localName = pl[1];
    } else {
      node.localName = qualifiedName;
    }
    attrs._ownerElement = node;
    return node;
  },
  createAttributeNS: function createAttributeNS(namespaceURI, qualifiedName) {
    var node = new Attr();
    var pl = qualifiedName.split(':');
    node.ownerDocument = this;
    node.nodeName = qualifiedName;
    node.name = qualifiedName;
    node.namespaceURI = namespaceURI;
    node.specified = true;
    if (pl.length == 2) {
      node.prefix = pl[0];
      node.localName = pl[1];
    } else {
      node.localName = qualifiedName;
    }
    return node;
  }
};
_extends(Document, Node);
function Element() {
  this._nsMap = {};
}
;
Element.prototype = {
  nodeType: ELEMENT_NODE,
  hasAttribute: function hasAttribute(name) {
    return this.getAttributeNode(name) != null;
  },
  getAttribute: function getAttribute(name) {
    var attr = this.getAttributeNode(name);
    return attr && attr.value || '';
  },
  getAttributeNode: function getAttributeNode(name) {
    return this.attributes.getNamedItem(name);
  },
  setAttribute: function setAttribute(name, value) {
    var attr = this.ownerDocument.createAttribute(name);
    attr.value = attr.nodeValue = "" + value;
    this.setAttributeNode(attr);
  },
  removeAttribute: function removeAttribute(name) {
    var attr = this.getAttributeNode(name);
    attr && this.removeAttributeNode(attr);
  },
  appendChild: function appendChild(newChild) {
    if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
      return this.insertBefore(newChild, null);
    } else {
      return _appendSingleChild(this, newChild);
    }
  },
  setAttributeNode: function setAttributeNode(newAttr) {
    return this.attributes.setNamedItem(newAttr);
  },
  setAttributeNodeNS: function setAttributeNodeNS(newAttr) {
    return this.attributes.setNamedItemNS(newAttr);
  },
  removeAttributeNode: function removeAttributeNode(oldAttr) {
    return this.attributes.removeNamedItem(oldAttr.nodeName);
  },
  removeAttributeNS: function removeAttributeNS(namespaceURI, localName) {
    var old = this.getAttributeNodeNS(namespaceURI, localName);
    old && this.removeAttributeNode(old);
  },
  hasAttributeNS: function hasAttributeNS(namespaceURI, localName) {
    return this.getAttributeNodeNS(namespaceURI, localName) != null;
  },
  getAttributeNS: function getAttributeNS(namespaceURI, localName) {
    var attr = this.getAttributeNodeNS(namespaceURI, localName);
    return attr && attr.value || '';
  },
  setAttributeNS: function setAttributeNS(namespaceURI, qualifiedName, value) {
    var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
    attr.value = attr.nodeValue = "" + value;
    this.setAttributeNode(attr);
  },
  getAttributeNodeNS: function getAttributeNodeNS(namespaceURI, localName) {
    return this.attributes.getNamedItemNS(namespaceURI, localName);
  },
  getElementsByTagName: function getElementsByTagName(tagName) {
    return new LiveNodeList(this, function (base) {
      var ls = [];
      _visitNode(base, function (node) {
        if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)) {
          ls.push(node);
        }
      });
      return ls;
    });
  },
  getElementsByTagNameNS: function getElementsByTagNameNS(namespaceURI, localName) {
    return new LiveNodeList(this, function (base) {
      var ls = [];
      _visitNode(base, function (node) {
        if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)) {
          ls.push(node);
        }
      });
      return ls;
    });
  }
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
_extends(Element, Node);
function Attr() {}
;
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr, Node);
function CharacterData() {}
;
CharacterData.prototype = {
  data: '',
  substringData: function substringData(offset, count) {
    return this.data.substring(offset, offset + count);
  },
  appendData: function appendData(text) {
    text = this.data + text;
    this.nodeValue = this.data = text;
    this.length = text.length;
  },
  insertData: function insertData(offset, text) {
    this.replaceData(offset, 0, text);
  },
  appendChild: function appendChild(newChild) {
    throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
  },
  deleteData: function deleteData(offset, count) {
    this.replaceData(offset, count, "");
  },
  replaceData: function replaceData(offset, count, text) {
    var start = this.data.substring(0, offset);
    var end = this.data.substring(offset + count);
    text = start + text + end;
    this.nodeValue = this.data = text;
    this.length = text.length;
  }
};
_extends(CharacterData, Node);
function Text() {}
;
Text.prototype = {
  nodeName: "#text",
  nodeType: TEXT_NODE,
  splitText: function splitText(offset) {
    var text = this.data;
    var newText = text.substring(offset);
    text = text.substring(0, offset);
    this.data = this.nodeValue = text;
    this.length = text.length;
    var newNode = this.ownerDocument.createTextNode(newText);
    if (this.parentNode) {
      this.parentNode.insertBefore(newNode, this.nextSibling);
    }
    return newNode;
  }
};
_extends(Text, CharacterData);
function Comment() {}
;
Comment.prototype = {
  nodeName: "#comment",
  nodeType: COMMENT_NODE
};
_extends(Comment, CharacterData);
function CDATASection() {}
;
CDATASection.prototype = {
  nodeName: "#cdata-section",
  nodeType: CDATA_SECTION_NODE
};
_extends(CDATASection, CharacterData);
function DocumentType() {}
;
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType, Node);
function Notation() {}
;
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation, Node);
function Entity() {}
;
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity, Node);
function EntityReference() {}
;
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference, Node);
function DocumentFragment() {}
;
DocumentFragment.prototype.nodeName = "#document-fragment";
DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment, Node);
function ProcessingInstruction() {}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction, Node);
function XMLSerializer() {}
XMLSerializer.prototype.serializeToString = function (node, isHtml, nodeFilter) {
  return nodeSerializeToString.call(node, isHtml, nodeFilter);
};
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(isHtml, nodeFilter) {
  var buf = [];
  var refNode = this.nodeType == 9 && this.documentElement || this;
  var prefix = refNode.prefix;
  var uri = refNode.namespaceURI;
  if (uri && prefix == null) {
    var prefix = refNode.lookupPrefix(uri);
    if (prefix == null) {
      var visibleNamespaces = [{
        namespace: uri,
        prefix: null
      }];
    }
  }
  serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
  return buf.join('');
}
function needNamespaceDefine(node, isHTML, visibleNamespaces) {
  var prefix = node.prefix || '';
  var uri = node.namespaceURI;
  if (!prefix && !uri) {
    return false;
  }
  if (prefix === "xml" && uri === "http://www.w3.org/XML/1998/namespace" || uri == 'http://www.w3.org/2000/xmlns/') {
    return false;
  }
  var i = visibleNamespaces.length;
  while (i--) {
    var ns = visibleNamespaces[i];
    if (ns.prefix == prefix) {
      return ns.namespace != uri;
    }
  }
  return true;
}
function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
  if (nodeFilter) {
    node = nodeFilter(node);
    if (node) {
      if (typeof node == 'string') {
        buf.push(node);
        return;
      }
    } else {
      return;
    }
  }
  switch (node.nodeType) {
    case ELEMENT_NODE:
      if (!visibleNamespaces) visibleNamespaces = [];
      var startVisibleNamespaces = visibleNamespaces.length;
      var attrs = node.attributes;
      var len = attrs.length;
      var child = node.firstChild;
      var nodeName = node.tagName;
      isHTML = htmlns === node.namespaceURI || isHTML;
      buf.push('<', nodeName);
      for (var i = 0; i < len; i++) {
        var attr = attrs.item(i);
        if (attr.prefix == 'xmlns') {
          visibleNamespaces.push({
            prefix: attr.localName,
            namespace: attr.value
          });
        } else if (attr.nodeName == 'xmlns') {
          visibleNamespaces.push({
            prefix: '',
            namespace: attr.value
          });
        }
      }
      for (var i = 0; i < len; i++) {
        var attr = attrs.item(i);
        if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
          var prefix = attr.prefix || '';
          var uri = attr.namespaceURI;
          var ns = prefix ? ' xmlns:' + prefix : " xmlns";
          buf.push(ns, '="', uri, '"');
          visibleNamespaces.push({
            prefix: prefix,
            namespace: uri
          });
        }
        serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
      }
      if (needNamespaceDefine(node, isHTML, visibleNamespaces)) {
        var prefix = node.prefix || '';
        var uri = node.namespaceURI;
        var ns = prefix ? ' xmlns:' + prefix : " xmlns";
        buf.push(ns, '="', uri, '"');
        visibleNamespaces.push({
          prefix: prefix,
          namespace: uri
        });
      }
      if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
        buf.push('>');
        if (isHTML && /^script$/i.test(nodeName)) {
          while (child) {
            if (child.data) {
              buf.push(child.data);
            } else {
              serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
            }
            child = child.nextSibling;
          }
        } else {
          while (child) {
            serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
            child = child.nextSibling;
          }
        }
        buf.push('</', nodeName, '>');
      } else {
        buf.push('/>');
      }
      return;
    case DOCUMENT_NODE:
    case DOCUMENT_FRAGMENT_NODE:
      var child = node.firstChild;
      while (child) {
        serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
        child = child.nextSibling;
      }
      return;
    case ATTRIBUTE_NODE:
      return buf.push(' ', node.name, '="', node.value.replace(/[<&"]/g, _xmlEncoder), '"');
    case TEXT_NODE:
      return buf.push(node.data.replace(/[<&]/g, _xmlEncoder));
    case CDATA_SECTION_NODE:
      return buf.push('<![CDATA[', node.data, ']]>');
    case COMMENT_NODE:
      return buf.push("<!--", node.data, "-->");
    case DOCUMENT_TYPE_NODE:
      var pubid = node.publicId;
      var sysid = node.systemId;
      buf.push('<!DOCTYPE ', node.name);
      if (pubid) {
        buf.push(' PUBLIC "', pubid);
        if (sysid && sysid != '.') {
          buf.push('" "', sysid);
        }
        buf.push('">');
      } else if (sysid && sysid != '.') {
        buf.push(' SYSTEM "', sysid, '">');
      } else {
        var sub = node.internalSubset;
        if (sub) {
          buf.push(" [", sub, "]");
        }
        buf.push(">");
      }
      return;
    case PROCESSING_INSTRUCTION_NODE:
      return buf.push("<?", node.target, " ", node.data, "?>");
    case ENTITY_REFERENCE_NODE:
      return buf.push('&', node.nodeName, ';');
    default:
      buf.push('??', node.nodeName);
  }
}
function _importNode(doc, node, deep) {
  var node2;
  switch (node.nodeType) {
    case ELEMENT_NODE:
      node2 = node.cloneNode(false);
      node2.ownerDocument = doc;
    case DOCUMENT_FRAGMENT_NODE:
      break;
    case ATTRIBUTE_NODE:
      deep = true;
      break;
  }
  if (!node2) {
    node2 = node.cloneNode(false);
  }
  node2.ownerDocument = doc;
  node2.parentNode = null;
  if (deep) {
    var child = node.firstChild;
    while (child) {
      node2.appendChild(_importNode(doc, child, deep));
      child = child.nextSibling;
    }
  }
  return node2;
}
function _cloneNode(doc, node, deep) {
  var node2 = new node.constructor();
  for (var n in node) {
    var v = node[n];
    if (_typeof(v) != 'object') {
      if (v != node2[n]) {
        node2[n] = v;
      }
    }
  }
  if (node.childNodes) {
    node2.childNodes = new NodeList();
  }
  node2.ownerDocument = doc;
  switch (node2.nodeType) {
    case ELEMENT_NODE:
      var attrs = node.attributes;
      var attrs2 = node2.attributes = new NamedNodeMap();
      var len = attrs.length;
      attrs2._ownerElement = node2;
      for (var i = 0; i < len; i++) {
        node2.setAttributeNode(_cloneNode(doc, attrs.item(i), true));
      }
      break;
      ;
    case ATTRIBUTE_NODE:
      deep = true;
  }
  if (deep) {
    var child = node.firstChild;
    while (child) {
      node2.appendChild(_cloneNode(doc, child, deep));
      child = child.nextSibling;
    }
  }
  return node2;
}
function __set__(object, key, value) {
  object[key] = value;
}
try {
  if (Object.defineProperty) {
    var getTextContent = function getTextContent(node) {
      switch (node.nodeType) {
        case ELEMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          var buf = [];
          node = node.firstChild;
          while (node) {
            if (node.nodeType !== 7 && node.nodeType !== 8) {
              buf.push(getTextContent(node));
            }
            node = node.nextSibling;
          }
          return buf.join('');
        default:
          return node.nodeValue;
      }
    };
    Object.defineProperty(LiveNodeList.prototype, 'length', {
      get: function get() {
        _updateLiveList(this);
        return this.$$length;
      }
    });
    Object.defineProperty(Node.prototype, 'textContent', {
      get: function get() {
        return getTextContent(this);
      },
      set: function set(data) {
        switch (this.nodeType) {
          case ELEMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE:
            while (this.firstChild) {
              this.removeChild(this.firstChild);
            }
            if (data || String(data)) {
              this.appendChild(this.ownerDocument.createTextNode(data));
            }
            break;
          default:
            this.data = data;
            this.value = data;
            this.nodeValue = data;
        }
      }
    });
    __set__ = function __set__(object, key, value) {
      object['$$' + key] = value;
    };
  }
} catch (e) {}
exports.DOMImplementation = DOMImplementation;
exports.XMLSerializer = XMLSerializer;

},{}],59:[function(require,module,exports){
"use strict";

exports.entityMap = {
  lt: '<',
  gt: '>',
  amp: '&',
  quot: '"',
  apos: "'",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  nbsp: " ",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  times: "×",
  divide: "÷",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  'int': "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  fnof: "ƒ",
  circ: "ˆ",
  tilde: "˜",
  ensp: " ",
  emsp: " ",
  thinsp: " ",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  bull: "•",
  hellip: "…",
  permil: "‰",
  prime: "′",
  Prime: "″",
  lsaquo: "‹",
  rsaquo: "›",
  oline: "‾",
  euro: "€",
  trade: "™",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦"
};

},{}],60:[function(require,module,exports){
"use strict";

var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp('^' + nameStartChar.source + nameChar.source + '*(?:\:' + nameStartChar.source + nameChar.source + '*)?$');
var S_TAG = 0;
var S_ATTR = 1;
var S_ATTR_SPACE = 2;
var S_EQ = 3;
var S_ATTR_NOQUOT_VALUE = 4;
var S_ATTR_END = 5;
var S_TAG_SPACE = 6;
var S_TAG_CLOSE = 7;
function XMLReader() {}
XMLReader.prototype = {
  parse: function parse(source, defaultNSMap, entityMap) {
    var domBuilder = this.domBuilder;
    domBuilder.startDocument();
    _copy(defaultNSMap, defaultNSMap = {});
    _parse(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);
    domBuilder.endDocument();
  }
};
function _parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
  function fixedFromCharCode(code) {
    if (code > 0xffff) {
      code -= 0x10000;
      var surrogate1 = 0xd800 + (code >> 10),
        surrogate2 = 0xdc00 + (code & 0x3ff);
      return String.fromCharCode(surrogate1, surrogate2);
    } else {
      return String.fromCharCode(code);
    }
  }
  function entityReplacer(a) {
    var k = a.slice(1, -1);
    if (k in entityMap) {
      return entityMap[k];
    } else if (k.charAt(0) === '#') {
      return fixedFromCharCode(parseInt(k.substr(1).replace('x', '0x')));
    } else {
      errorHandler.error('entity not found:' + a);
      return a;
    }
  }
  function appendText(end) {
    if (end > start) {
      var xt = source.substring(start, end).replace(/&#?\w+;/g, entityReplacer);
      locator && position(start);
      domBuilder.characters(xt, 0, end - start);
      start = end;
    }
  }
  function position(p, m) {
    while (p >= lineEnd && (m = linePattern.exec(source))) {
      lineStart = m.index;
      lineEnd = lineStart + m[0].length;
      locator.lineNumber++;
    }
    locator.columnNumber = p - lineStart + 1;
  }
  var lineStart = 0;
  var lineEnd = 0;
  var linePattern = /.*(?:\r\n?|\n)|.*$/g;
  var locator = domBuilder.locator;
  var parseStack = [{
    currentNSMap: defaultNSMapCopy
  }];
  var closeMap = {};
  var start = 0;
  while (true) {
    try {
      var tagStart = source.indexOf('<', start);
      if (tagStart < 0) {
        if (!source.substr(start).match(/^\s*$/)) {
          var doc = domBuilder.doc;
          var text = doc.createTextNode(source.substr(start));
          doc.appendChild(text);
          domBuilder.currentElement = text;
        }
        return;
      }
      if (tagStart > start) {
        appendText(tagStart);
      }
      switch (source.charAt(tagStart + 1)) {
        case '/':
          var end = source.indexOf('>', tagStart + 3);
          var tagName = source.substring(tagStart + 2, end);
          var config = parseStack.pop();
          if (end < 0) {
            tagName = source.substring(tagStart + 2).replace(/[\s<].*/, '');
            errorHandler.error("end tag name: " + tagName + ' is not complete:' + config.tagName);
            end = tagStart + 1 + tagName.length;
          } else if (tagName.match(/\s</)) {
            tagName = tagName.replace(/[\s<].*/, '');
            errorHandler.error("end tag name: " + tagName + ' maybe not complete');
            end = tagStart + 1 + tagName.length;
          }
          var localNSMap = config.localNSMap;
          var endMatch = config.tagName == tagName;
          var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
          if (endIgnoreCaseMach) {
            domBuilder.endElement(config.uri, config.localName, tagName);
            if (localNSMap) {
              for (var prefix in localNSMap) {
                domBuilder.endPrefixMapping(prefix);
              }
            }
            if (!endMatch) {
              errorHandler.fatalError("end tag name: " + tagName + ' is not match the current start tagName:' + config.tagName);
            }
          } else {
            parseStack.push(config);
          }
          end++;
          break;
        case '?':
          locator && position(tagStart);
          end = parseInstruction(source, tagStart, domBuilder);
          break;
        case '!':
          locator && position(tagStart);
          end = parseDCC(source, tagStart, domBuilder, errorHandler);
          break;
        default:
          locator && position(tagStart);
          var el = new ElementAttributes();
          var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
          var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
          var len = el.length;
          if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
            el.closed = true;
            if (!entityMap.nbsp) {
              errorHandler.warning('unclosed xml attribute');
            }
          }
          if (locator && len) {
            var locator2 = copyLocator(locator, {});
            for (var i = 0; i < len; i++) {
              var a = el[i];
              position(a.offset);
              a.locator = copyLocator(locator, {});
            }
            domBuilder.locator = locator2;
            if (appendElement(el, domBuilder, currentNSMap)) {
              parseStack.push(el);
            }
            domBuilder.locator = locator;
          } else {
            if (appendElement(el, domBuilder, currentNSMap)) {
              parseStack.push(el);
            }
          }
          if (el.uri === 'http://www.w3.org/1999/xhtml' && !el.closed) {
            end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
          } else {
            end++;
          }
      }
    } catch (e) {
      errorHandler.error('element parse error: ' + e);
      end = -1;
    }
    if (end > start) {
      start = end;
    } else {
      appendText(Math.max(tagStart, start) + 1);
    }
  }
}
function copyLocator(f, t) {
  t.lineNumber = f.lineNumber;
  t.columnNumber = f.columnNumber;
  return t;
}
function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
  var attrName;
  var value;
  var p = ++start;
  var s = S_TAG;
  while (true) {
    var c = source.charAt(p);
    switch (c) {
      case '=':
        if (s === S_ATTR) {
          attrName = source.slice(start, p);
          s = S_EQ;
        } else if (s === S_ATTR_SPACE) {
          s = S_EQ;
        } else {
          throw new Error('attribute equal must after attrName');
        }
        break;
      case '\'':
      case '"':
        if (s === S_EQ || s === S_ATTR) {
          if (s === S_ATTR) {
            errorHandler.warning('attribute value must after "="');
            attrName = source.slice(start, p);
          }
          start = p + 1;
          p = source.indexOf(c, start);
          if (p > 0) {
            value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
            el.add(attrName, value, start - 1);
            s = S_ATTR_END;
          } else {
            throw new Error('attribute value no end \'' + c + '\' match');
          }
        } else if (s == S_ATTR_NOQUOT_VALUE) {
          value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
          el.add(attrName, value, start);
          errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ')!!');
          start = p + 1;
          s = S_ATTR_END;
        } else {
          throw new Error('attribute value must after "="');
        }
        break;
      case '/':
        switch (s) {
          case S_TAG:
            el.setTagName(source.slice(start, p));
          case S_ATTR_END:
          case S_TAG_SPACE:
          case S_TAG_CLOSE:
            s = S_TAG_CLOSE;
            el.closed = true;
          case S_ATTR_NOQUOT_VALUE:
          case S_ATTR:
          case S_ATTR_SPACE:
            break;
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case '':
        errorHandler.error('unexpected end of input');
        if (s == S_TAG) {
          el.setTagName(source.slice(start, p));
        }
        return p;
      case '>':
        switch (s) {
          case S_TAG:
            el.setTagName(source.slice(start, p));
          case S_ATTR_END:
          case S_TAG_SPACE:
          case S_TAG_CLOSE:
            break;
          case S_ATTR_NOQUOT_VALUE:
          case S_ATTR:
            value = source.slice(start, p);
            if (value.slice(-1) === '/') {
              el.closed = true;
              value = value.slice(0, -1);
            }
          case S_ATTR_SPACE:
            if (s === S_ATTR_SPACE) {
              value = attrName;
            }
            if (s == S_ATTR_NOQUOT_VALUE) {
              errorHandler.warning('attribute "' + value + '" missed quot(")!!');
              el.add(attrName, value.replace(/&#?\w+;/g, entityReplacer), start);
            } else {
              if (currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !value.match(/^(?:disabled|checked|selected)$/i)) {
                errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
              }
              el.add(value, value, start);
            }
            break;
          case S_EQ:
            throw new Error('attribute value missed!!');
        }
        return p;
      case "\x80":
        c = ' ';
      default:
        if (c <= ' ') {
          switch (s) {
            case S_TAG:
              el.setTagName(source.slice(start, p));
              s = S_TAG_SPACE;
              break;
            case S_ATTR:
              attrName = source.slice(start, p);
              s = S_ATTR_SPACE;
              break;
            case S_ATTR_NOQUOT_VALUE:
              var value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
              errorHandler.warning('attribute "' + value + '" missed quot(")!!');
              el.add(attrName, value, start);
            case S_ATTR_END:
              s = S_TAG_SPACE;
              break;
          }
        } else {
          switch (s) {
            case S_ATTR_SPACE:
              var tagName = el.tagName;
              if (currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
              }
              el.add(attrName, attrName, start);
              start = p;
              s = S_ATTR;
              break;
            case S_ATTR_END:
              errorHandler.warning('attribute space is required"' + attrName + '"!!');
            case S_TAG_SPACE:
              s = S_ATTR;
              start = p;
              break;
            case S_EQ:
              s = S_ATTR_NOQUOT_VALUE;
              start = p;
              break;
            case S_TAG_CLOSE:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
        }
    }
    p++;
  }
}
function appendElement(el, domBuilder, currentNSMap) {
  var tagName = el.tagName;
  var localNSMap = null;
  var i = el.length;
  while (i--) {
    var a = el[i];
    var qName = a.qName;
    var value = a.value;
    var nsp = qName.indexOf(':');
    if (nsp > 0) {
      var prefix = a.prefix = qName.slice(0, nsp);
      var localName = qName.slice(nsp + 1);
      var nsPrefix = prefix === 'xmlns' && localName;
    } else {
      localName = qName;
      prefix = null;
      nsPrefix = qName === 'xmlns' && '';
    }
    a.localName = localName;
    if (nsPrefix !== false) {
      if (localNSMap == null) {
        localNSMap = {};
        _copy(currentNSMap, currentNSMap = {});
      }
      currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
      a.uri = 'http://www.w3.org/2000/xmlns/';
      domBuilder.startPrefixMapping(nsPrefix, value);
    }
  }
  var i = el.length;
  while (i--) {
    a = el[i];
    var prefix = a.prefix;
    if (prefix) {
      if (prefix === 'xml') {
        a.uri = 'http://www.w3.org/XML/1998/namespace';
      }
      if (prefix !== 'xmlns') {
        a.uri = currentNSMap[prefix || ''];
      }
    }
  }
  var nsp = tagName.indexOf(':');
  if (nsp > 0) {
    prefix = el.prefix = tagName.slice(0, nsp);
    localName = el.localName = tagName.slice(nsp + 1);
  } else {
    prefix = null;
    localName = el.localName = tagName;
  }
  var ns = el.uri = currentNSMap[prefix || ''];
  domBuilder.startElement(ns, localName, tagName, el);
  if (el.closed) {
    domBuilder.endElement(ns, localName, tagName);
    if (localNSMap) {
      for (prefix in localNSMap) {
        domBuilder.endPrefixMapping(prefix);
      }
    }
  } else {
    el.currentNSMap = currentNSMap;
    el.localNSMap = localNSMap;
    return true;
  }
}
function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
  if (/^(?:script|textarea)$/i.test(tagName)) {
    var elEndStart = source.indexOf('</' + tagName + '>', elStartEnd);
    var text = source.substring(elStartEnd + 1, elEndStart);
    if (/[&<]/.test(text)) {
      if (/^script$/i.test(tagName)) {
        domBuilder.characters(text, 0, text.length);
        return elEndStart;
      }
      text = text.replace(/&#?\w+;/g, entityReplacer);
      domBuilder.characters(text, 0, text.length);
      return elEndStart;
    }
  }
  return elStartEnd + 1;
}
function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
  var pos = closeMap[tagName];
  if (pos == null) {
    pos = source.lastIndexOf('</' + tagName + '>');
    if (pos < elStartEnd) {
      pos = source.lastIndexOf('</' + tagName);
    }
    closeMap[tagName] = pos;
  }
  return pos < elStartEnd;
}
function _copy(source, target) {
  for (var n in source) {
    target[n] = source[n];
  }
}
function parseDCC(source, start, domBuilder, errorHandler) {
  var next = source.charAt(start + 2);
  switch (next) {
    case '-':
      if (source.charAt(start + 3) === '-') {
        var end = source.indexOf('-->', start + 4);
        if (end > start) {
          domBuilder.comment(source, start + 4, end - start - 4);
          return end + 3;
        } else {
          errorHandler.error("Unclosed comment");
          return -1;
        }
      } else {
        return -1;
      }
    default:
      if (source.substr(start + 3, 6) == 'CDATA[') {
        var end = source.indexOf(']]>', start + 9);
        domBuilder.startCDATA();
        domBuilder.characters(source, start + 9, end - start - 9);
        domBuilder.endCDATA();
        return end + 3;
      }
      var matchs = split(source, start);
      var len = matchs.length;
      if (len > 1 && /!doctype/i.test(matchs[0][0])) {
        var name = matchs[1][0];
        var pubid = len > 3 && /^public$/i.test(matchs[2][0]) && matchs[3][0];
        var sysid = len > 4 && matchs[4][0];
        var lastMatch = matchs[len - 1];
        domBuilder.startDTD(name, pubid && pubid.replace(/^(['"])(.*?)\1$/, '$2'), sysid && sysid.replace(/^(['"])(.*?)\1$/, '$2'));
        domBuilder.endDTD();
        return lastMatch.index + lastMatch[0].length;
      }
  }
  return -1;
}
function parseInstruction(source, start, domBuilder) {
  var end = source.indexOf('?>', start);
  if (end) {
    var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    if (match) {
      var len = match[0].length;
      domBuilder.processingInstruction(match[1], match[2]);
      return end + 2;
    } else {
      return -1;
    }
  }
  return -1;
}
function ElementAttributes(source) {}
ElementAttributes.prototype = {
  setTagName: function setTagName(tagName) {
    if (!tagNamePattern.test(tagName)) {
      throw new Error('invalid tagName:' + tagName);
    }
    this.tagName = tagName;
  },
  add: function add(qName, value, offset) {
    if (!tagNamePattern.test(qName)) {
      throw new Error('invalid attribute:' + qName);
    }
    this[this.length++] = {
      qName: qName,
      value: value,
      offset: offset
    };
  },
  length: 0,
  getLocalName: function getLocalName(i) {
    return this[i].localName;
  },
  getLocator: function getLocator(i) {
    return this[i].locator;
  },
  getQName: function getQName(i) {
    return this[i].qName;
  },
  getURI: function getURI(i) {
    return this[i].uri;
  },
  getValue: function getValue(i) {
    return this[i].value;
  }
};
function split(source, start) {
  var match;
  var buf = [];
  var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  reg.lastIndex = start;
  reg.exec(source);
  while (match = reg.exec(source)) {
    buf.push(match);
    if (match[1]) return buf;
  }
}
exports.XMLReader = XMLReader;

},{}]},{},[56]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ3ZWItYWRhcHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG4hZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBlKGUpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBlO1xuICB9XG4gIHZhciB0ID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZXhwb3J0cyA/IGV4cG9ydHMgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6ICQuZ2xvYmFsLFxuICAgIHIgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCI7XG4gIGUucHJvdG90eXBlID0gbmV3IEVycm9yKCksIGUucHJvdG90eXBlLm5hbWUgPSBcIkludmFsaWRDaGFyYWN0ZXJFcnJvclwiLCB0LmJ0b2EgfHwgKHQuYnRvYSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgbywgbiwgYSA9IFN0cmluZyh0KSwgaSA9IDAsIGYgPSByLCBjID0gXCJcIjsgYS5jaGFyQXQoMCB8IGkpIHx8IChmID0gXCI9XCIsIGkgJSAxKTsgYyArPSBmLmNoYXJBdCg2MyAmIG8gPj4gOCAtIGkgJSAxICogOCkpIHtcbiAgICAgIGlmIChuID0gYS5jaGFyQ29kZUF0KGkgKz0gLjc1KSwgbiA+IDI1NSkgdGhyb3cgbmV3IGUoXCInYnRvYScgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGVuY29kZWQgY29udGFpbnMgY2hhcmFjdGVycyBvdXRzaWRlIG9mIHRoZSBMYXRpbjEgcmFuZ2UuXCIpO1xuICAgICAgbyA9IG8gPDwgOCB8IG47XG4gICAgfVxuICAgIHJldHVybiBjO1xuICB9KSwgdC5hdG9iIHx8ICh0LmF0b2IgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBvID0gU3RyaW5nKHQpLnJlcGxhY2UoL1s9XSskLywgXCJcIik7XG4gICAgaWYgKG8ubGVuZ3RoICUgNCA9PSAxKSB0aHJvdyBuZXcgZShcIidhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO1xuICAgIGZvciAodmFyIG4sIGEsIGkgPSAwLCBmID0gMCwgYyA9IFwiXCI7IGEgPSBvLmNoYXJBdChmKyspOyB+YSAmJiAobiA9IGkgJSA0ID8gNjQgKiBuICsgYSA6IGEsIGkrKyAlIDQpID8gYyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSAmIG4gPj4gKC0yICogaSAmIDYpKSA6IDApIGEgPSByLmluZGV4T2YoYSk7XG4gICAgcmV0dXJuIGM7XG4gIH0pO1xufSgpO1xuXG59LHt9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG4hZnVuY3Rpb24gKG4pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgZnVuY3Rpb24gdChuLCB0KSB7XG4gICAgdmFyIHIgPSAoNjU1MzUgJiBuKSArICg2NTUzNSAmIHQpO1xuICAgIHJldHVybiAobiA+PiAxNikgKyAodCA+PiAxNikgKyAociA+PiAxNikgPDwgMTYgfCA2NTUzNSAmIHI7XG4gIH1cbiAgZnVuY3Rpb24gcihuLCB0KSB7XG4gICAgcmV0dXJuIG4gPDwgdCB8IG4gPj4+IDMyIC0gdDtcbiAgfVxuICBmdW5jdGlvbiBlKG4sIGUsIG8sIHUsIGMsIGYpIHtcbiAgICByZXR1cm4gdChyKHQodChlLCBuKSwgdCh1LCBmKSksIGMpLCBvKTtcbiAgfVxuICBmdW5jdGlvbiBvKG4sIHQsIHIsIG8sIHUsIGMsIGYpIHtcbiAgICByZXR1cm4gZSh0ICYgciB8IH50ICYgbywgbiwgdCwgdSwgYywgZik7XG4gIH1cbiAgZnVuY3Rpb24gdShuLCB0LCByLCBvLCB1LCBjLCBmKSB7XG4gICAgcmV0dXJuIGUodCAmIG8gfCByICYgfm8sIG4sIHQsIHUsIGMsIGYpO1xuICB9XG4gIGZ1bmN0aW9uIGMobiwgdCwgciwgbywgdSwgYywgZikge1xuICAgIHJldHVybiBlKHQgXiByIF4gbywgbiwgdCwgdSwgYywgZik7XG4gIH1cbiAgZnVuY3Rpb24gZihuLCB0LCByLCBvLCB1LCBjLCBmKSB7XG4gICAgcmV0dXJuIGUociBeICh0IHwgfm8pLCBuLCB0LCB1LCBjLCBmKTtcbiAgfVxuICBmdW5jdGlvbiBpKG4sIHIpIHtcbiAgICBuW3IgPj4gNV0gfD0gMTI4IDw8IHIgJSAzMiwgblsxNCArIChyICsgNjQgPj4+IDkgPDwgNCldID0gcjtcbiAgICB2YXIgZSxcbiAgICAgIGksXG4gICAgICBhLFxuICAgICAgZCxcbiAgICAgIGgsXG4gICAgICBsID0gMTczMjU4NDE5MyxcbiAgICAgIGcgPSAtMjcxNzMzODc5LFxuICAgICAgdiA9IC0xNzMyNTg0MTk0LFxuICAgICAgbSA9IDI3MTczMzg3ODtcbiAgICBmb3IgKGUgPSAwOyBlIDwgbi5sZW5ndGg7IGUgKz0gMTYpIGkgPSBsLCBhID0gZywgZCA9IHYsIGggPSBtLCBnID0gZihnID0gZihnID0gZihnID0gZihnID0gYyhnID0gYyhnID0gYyhnID0gYyhnID0gdShnID0gdShnID0gdShnID0gdShnID0gbyhnID0gbyhnID0gbyhnID0gbyhnLCB2ID0gbyh2LCBtID0gbyhtLCBsID0gbyhsLCBnLCB2LCBtLCBuW2VdLCA3LCAtNjgwODc2OTM2KSwgZywgdiwgbltlICsgMV0sIDEyLCAtMzg5NTY0NTg2KSwgbCwgZywgbltlICsgMl0sIDE3LCA2MDYxMDU4MTkpLCBtLCBsLCBuW2UgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKSwgdiA9IG8odiwgbSA9IG8obSwgbCA9IG8obCwgZywgdiwgbSwgbltlICsgNF0sIDcsIC0xNzY0MTg4OTcpLCBnLCB2LCBuW2UgKyA1XSwgMTIsIDEyMDAwODA0MjYpLCBsLCBnLCBuW2UgKyA2XSwgMTcsIC0xNDczMjMxMzQxKSwgbSwgbCwgbltlICsgN10sIDIyLCAtNDU3MDU5ODMpLCB2ID0gbyh2LCBtID0gbyhtLCBsID0gbyhsLCBnLCB2LCBtLCBuW2UgKyA4XSwgNywgMTc3MDAzNTQxNiksIGcsIHYsIG5bZSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpLCBsLCBnLCBuW2UgKyAxMF0sIDE3LCAtNDIwNjMpLCBtLCBsLCBuW2UgKyAxMV0sIDIyLCAtMTk5MDQwNDE2MiksIHYgPSBvKHYsIG0gPSBvKG0sIGwgPSBvKGwsIGcsIHYsIG0sIG5bZSArIDEyXSwgNywgMTgwNDYwMzY4MiksIGcsIHYsIG5bZSArIDEzXSwgMTIsIC00MDM0MTEwMSksIGwsIGcsIG5bZSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKSwgbSwgbCwgbltlICsgMTVdLCAyMiwgMTIzNjUzNTMyOSksIHYgPSB1KHYsIG0gPSB1KG0sIGwgPSB1KGwsIGcsIHYsIG0sIG5bZSArIDFdLCA1LCAtMTY1Nzk2NTEwKSwgZywgdiwgbltlICsgNl0sIDksIC0xMDY5NTAxNjMyKSwgbCwgZywgbltlICsgMTFdLCAxNCwgNjQzNzE3NzEzKSwgbSwgbCwgbltlXSwgMjAsIC0zNzM4OTczMDIpLCB2ID0gdSh2LCBtID0gdShtLCBsID0gdShsLCBnLCB2LCBtLCBuW2UgKyA1XSwgNSwgLTcwMTU1ODY5MSksIGcsIHYsIG5bZSArIDEwXSwgOSwgMzgwMTYwODMpLCBsLCBnLCBuW2UgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KSwgbSwgbCwgbltlICsgNF0sIDIwLCAtNDA1NTM3ODQ4KSwgdiA9IHUodiwgbSA9IHUobSwgbCA9IHUobCwgZywgdiwgbSwgbltlICsgOV0sIDUsIDU2ODQ0NjQzOCksIGcsIHYsIG5bZSArIDE0XSwgOSwgLTEwMTk4MDM2OTApLCBsLCBnLCBuW2UgKyAzXSwgMTQsIC0xODczNjM5NjEpLCBtLCBsLCBuW2UgKyA4XSwgMjAsIDExNjM1MzE1MDEpLCB2ID0gdSh2LCBtID0gdShtLCBsID0gdShsLCBnLCB2LCBtLCBuW2UgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KSwgZywgdiwgbltlICsgMl0sIDksIC01MTQwMzc4NCksIGwsIGcsIG5bZSArIDddLCAxNCwgMTczNTMyODQ3MyksIG0sIGwsIG5bZSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KSwgdiA9IGModiwgbSA9IGMobSwgbCA9IGMobCwgZywgdiwgbSwgbltlICsgNV0sIDQsIC0zNzg1NTgpLCBnLCB2LCBuW2UgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKSwgbCwgZywgbltlICsgMTFdLCAxNiwgMTgzOTAzMDU2MiksIG0sIGwsIG5bZSArIDE0XSwgMjMsIC0zNTMwOTU1NiksIHYgPSBjKHYsIG0gPSBjKG0sIGwgPSBjKGwsIGcsIHYsIG0sIG5bZSArIDFdLCA0LCAtMTUzMDk5MjA2MCksIGcsIHYsIG5bZSArIDRdLCAxMSwgMTI3Mjg5MzM1MyksIGwsIGcsIG5bZSArIDddLCAxNiwgLTE1NTQ5NzYzMiksIG0sIGwsIG5bZSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKSwgdiA9IGModiwgbSA9IGMobSwgbCA9IGMobCwgZywgdiwgbSwgbltlICsgMTNdLCA0LCA2ODEyNzkxNzQpLCBnLCB2LCBuW2VdLCAxMSwgLTM1ODUzNzIyMiksIGwsIGcsIG5bZSArIDNdLCAxNiwgLTcyMjUyMTk3OSksIG0sIGwsIG5bZSArIDZdLCAyMywgNzYwMjkxODkpLCB2ID0gYyh2LCBtID0gYyhtLCBsID0gYyhsLCBnLCB2LCBtLCBuW2UgKyA5XSwgNCwgLTY0MDM2NDQ4NyksIGcsIHYsIG5bZSArIDEyXSwgMTEsIC00MjE4MTU4MzUpLCBsLCBnLCBuW2UgKyAxNV0sIDE2LCA1MzA3NDI1MjApLCBtLCBsLCBuW2UgKyAyXSwgMjMsIC05OTUzMzg2NTEpLCB2ID0gZih2LCBtID0gZihtLCBsID0gZihsLCBnLCB2LCBtLCBuW2VdLCA2LCAtMTk4NjMwODQ0KSwgZywgdiwgbltlICsgN10sIDEwLCAxMTI2ODkxNDE1KSwgbCwgZywgbltlICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpLCBtLCBsLCBuW2UgKyA1XSwgMjEsIC01NzQzNDA1NSksIHYgPSBmKHYsIG0gPSBmKG0sIGwgPSBmKGwsIGcsIHYsIG0sIG5bZSArIDEyXSwgNiwgMTcwMDQ4NTU3MSksIGcsIHYsIG5bZSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpLCBsLCBnLCBuW2UgKyAxMF0sIDE1LCAtMTA1MTUyMyksIG0sIGwsIG5bZSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpLCB2ID0gZih2LCBtID0gZihtLCBsID0gZihsLCBnLCB2LCBtLCBuW2UgKyA4XSwgNiwgMTg3MzMxMzM1OSksIGcsIHYsIG5bZSArIDE1XSwgMTAsIC0zMDYxMTc0NCksIGwsIGcsIG5bZSArIDZdLCAxNSwgLTE1NjAxOTgzODApLCBtLCBsLCBuW2UgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KSwgdiA9IGYodiwgbSA9IGYobSwgbCA9IGYobCwgZywgdiwgbSwgbltlICsgNF0sIDYsIC0xNDU1MjMwNzApLCBnLCB2LCBuW2UgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSksIGwsIGcsIG5bZSArIDJdLCAxNSwgNzE4Nzg3MjU5KSwgbSwgbCwgbltlICsgOV0sIDIxLCAtMzQzNDg1NTUxKSwgbCA9IHQobCwgaSksIGcgPSB0KGcsIGEpLCB2ID0gdCh2LCBkKSwgbSA9IHQobSwgaCk7XG4gICAgcmV0dXJuIFtsLCBnLCB2LCBtXTtcbiAgfVxuICBmdW5jdGlvbiBhKG4pIHtcbiAgICB2YXIgdCxcbiAgICAgIHIgPSBcIlwiLFxuICAgICAgZSA9IDMyICogbi5sZW5ndGg7XG4gICAgZm9yICh0ID0gMDsgdCA8IGU7IHQgKz0gOCkgciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5bdCA+PiA1XSA+Pj4gdCAlIDMyICYgMjU1KTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBmdW5jdGlvbiBkKG4pIHtcbiAgICB2YXIgdCxcbiAgICAgIHIgPSBbXTtcbiAgICBmb3IgKHJbKG4ubGVuZ3RoID4+IDIpIC0gMV0gPSB2b2lkIDAsIHQgPSAwOyB0IDwgci5sZW5ndGg7IHQgKz0gMSkgclt0XSA9IDA7XG4gICAgdmFyIGUgPSA4ICogbi5sZW5ndGg7XG4gICAgZm9yICh0ID0gMDsgdCA8IGU7IHQgKz0gOCkgclt0ID4+IDVdIHw9ICgyNTUgJiBuLmNoYXJDb2RlQXQodCAvIDgpKSA8PCB0ICUgMzI7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgZnVuY3Rpb24gaChuKSB7XG4gICAgcmV0dXJuIGEoaShkKG4pLCA4ICogbi5sZW5ndGgpKTtcbiAgfVxuICBmdW5jdGlvbiBsKG4sIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIGUsXG4gICAgICBvID0gZChuKSxcbiAgICAgIHUgPSBbXSxcbiAgICAgIGMgPSBbXTtcbiAgICBmb3IgKHVbMTVdID0gY1sxNV0gPSB2b2lkIDAsIG8ubGVuZ3RoID4gMTYgJiYgKG8gPSBpKG8sIDggKiBuLmxlbmd0aCkpLCByID0gMDsgciA8IDE2OyByICs9IDEpIHVbcl0gPSA5MDk1MjI0ODYgXiBvW3JdLCBjW3JdID0gMTU0OTU1NjgyOCBeIG9bcl07XG4gICAgcmV0dXJuIGUgPSBpKHUuY29uY2F0KGQodCkpLCA1MTIgKyA4ICogdC5sZW5ndGgpLCBhKGkoYy5jb25jYXQoZSksIDY0MCkpO1xuICB9XG4gIGZ1bmN0aW9uIGcobikge1xuICAgIHZhciB0LFxuICAgICAgcixcbiAgICAgIGUgPSBcIlwiO1xuICAgIGZvciAociA9IDA7IHIgPCBuLmxlbmd0aDsgciArPSAxKSB0ID0gbi5jaGFyQ29kZUF0KHIpLCBlICs9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiLmNoYXJBdCh0ID4+PiA0ICYgMTUpICsgXCIwMTIzNDU2Nzg5YWJjZGVmXCIuY2hhckF0KDE1ICYgdCk7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZnVuY3Rpb24gdihuKSB7XG4gICAgcmV0dXJuIHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChuKSk7XG4gIH1cbiAgZnVuY3Rpb24gbShuKSB7XG4gICAgcmV0dXJuIGgodihuKSk7XG4gIH1cbiAgZnVuY3Rpb24gcChuKSB7XG4gICAgcmV0dXJuIGcobShuKSk7XG4gIH1cbiAgZnVuY3Rpb24gcyhuLCB0KSB7XG4gICAgcmV0dXJuIGwodihuKSwgdih0KSk7XG4gIH1cbiAgZnVuY3Rpb24gQyhuLCB0KSB7XG4gICAgcmV0dXJuIGcocyhuLCB0KSk7XG4gIH1cbiAgZnVuY3Rpb24gQShuLCB0LCByKSB7XG4gICAgcmV0dXJuIHQgPyByID8gcyh0LCBuKSA6IEModCwgbikgOiByID8gbShuKSA6IHAobik7XG4gIH1cbiAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEE7XG4gIH0pIDogXCJvYmplY3RcIiA9PSAodHlwZW9mIG1vZHVsZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG1vZHVsZSkpICYmIG1vZHVsZS5leHBvcnRzID8gbW9kdWxlLmV4cG9ydHMgPSBBIDogbi5tZDUgPSBBO1xufSh2b2lkIDApO1xuXG59LHt9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgYXJyYXlidWZmZXJUb1N0cmluZzogZnVuY3Rpb24gYXJyYXlidWZmZXJUb1N0cmluZyhhcnJheUJ1ZmZlcikge1xuICAgIHZhciBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG4gICAgdmFyIHN0ciA9IFtdO1xuICAgIHN0ci5sZW5ndGggPSBieXRlQXJyYXkubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50U3RySW5kZXggPSAwO1xuICAgIHZhciBjdXJyZW5TdHJDb2RlID0gMDtcbiAgICB2YXIgZmlyc3RCeXRlQ29kZSA9IDA7XG4gICAgdmFyIGFycmF5TGVuZ3RoID0gYnl0ZUFycmF5Lmxlbmd0aDtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGZpcnN0Qnl0ZUNvZGUgPSBieXRlQXJyYXlbaW5kZXhdO1xuICAgICAgaWYgKGZpcnN0Qnl0ZUNvZGUgPiAyNTEgJiYgZmlyc3RCeXRlQ29kZSA8IDI1NCAmJiBpbmRleCArIDUgPCBhcnJheUxlbmd0aCkge1xuICAgICAgICBjdXJyZW5TdHJDb2RlID0gKGZpcnN0Qnl0ZUNvZGUgLSAyNTIpICogMTA3Mzc0MTgyNCArIChieXRlQXJyYXlbKytpbmRleF0gLSAxMjggPDwgMjQpICsgKGJ5dGVBcnJheVsrK2luZGV4XSAtIDEyOCA8PCAxOCkgKyAoYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4IDw8IDEyKSArIChieXRlQXJyYXlbKytpbmRleF0gLSAxMjggPDwgNikgKyBieXRlQXJyYXlbKytpbmRleF0gLSAxMjg7XG4gICAgICB9IGVsc2UgaWYgKGZpcnN0Qnl0ZUNvZGUgPiAyNDcgJiYgZmlyc3RCeXRlQ29kZSA8IDI1MiAmJiBpbmRleCArIDQgPCBhcnJheUxlbmd0aCkge1xuICAgICAgICBjdXJyZW5TdHJDb2RlID0gKGZpcnN0Qnl0ZUNvZGUgLSAyNDggPDwgMjQpICsgKGJ5dGVBcnJheVsrK2luZGV4XSAtIDEyOCA8PCAxOCkgKyAoYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4IDw8IDEyKSArIChieXRlQXJyYXlbKytpbmRleF0gLSAxMjggPDwgNikgKyBieXRlQXJyYXlbKytpbmRleF0gLSAxMjg7XG4gICAgICB9IGVsc2UgaWYgKGZpcnN0Qnl0ZUNvZGUgPiAyMzkgJiYgZmlyc3RCeXRlQ29kZSA8IDI0OCAmJiBpbmRleCArIDMgPCBhcnJheUxlbmd0aCkge1xuICAgICAgICBjdXJyZW5TdHJDb2RlID0gKGZpcnN0Qnl0ZUNvZGUgLSAyNDAgPDwgMTgpICsgKGJ5dGVBcnJheVsrK2luZGV4XSAtIDEyOCA8PCAxMikgKyAoYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4IDw8IDYpICsgYnl0ZUFycmF5WysraW5kZXhdIC0gMTI4O1xuICAgICAgfSBlbHNlIGlmIChmaXJzdEJ5dGVDb2RlID4gMjIzICYmIGZpcnN0Qnl0ZUNvZGUgPCAyNDAgJiYgaW5kZXggKyAyIDwgYXJyYXlMZW5ndGgpIHtcbiAgICAgICAgY3VycmVuU3RyQ29kZSA9IChmaXJzdEJ5dGVDb2RlIC0gMjI0IDw8IDEyKSArIChieXRlQXJyYXlbKytpbmRleF0gLSAxMjggPDwgNikgKyBieXRlQXJyYXlbKytpbmRleF0gLSAxMjg7XG4gICAgICB9IGVsc2UgaWYgKGZpcnN0Qnl0ZUNvZGUgPiAxOTEgJiYgZmlyc3RCeXRlQ29kZSA8IDIyNCAmJiBpbmRleCArIDEgPCBhcnJheUxlbmd0aCkge1xuICAgICAgICBjdXJyZW5TdHJDb2RlID0gKGZpcnN0Qnl0ZUNvZGUgLSAxOTIgPDwgNikgKyBieXRlQXJyYXlbKytpbmRleF0gLSAxMjg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW5TdHJDb2RlID0gZmlyc3RCeXRlQ29kZTtcbiAgICAgIH1cbiAgICAgIHN0cltjdXJyZW50U3RySW5kZXgrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGN1cnJlblN0ckNvZGUpO1xuICAgIH1cbiAgICBzdHIubGVuZ3RoID0gY3VycmVudFN0ckluZGV4O1xuICAgIHJldHVybiBzdHIuam9pbignJyk7XG4gIH0sXG4gIHN0cmluZ1RvQXJyYXlidWZmZXI6IGZ1bmN0aW9uIHN0cmluZ1RvQXJyYXlidWZmZXIoc3RyaW5nKSB7XG4gICAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gICAgdmFyIGJ5dGVBcnJheSA9IG5ldyBBcnJheSg2ICogbGVuZ3RoKTtcbiAgICB2YXIgYWN0dWFsTGVuZ3RoID0gMDtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgIGlmIChjb2RlIDwgMHg4MCkge1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gY29kZTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ODAwKSB7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxOTIgKyAoY29kZSA+Pj4gNik7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSAmIDYzKTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4MTAwMDApIHtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDIyNCArIChjb2RlID4+PiAxMik7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSA+Pj4gNiAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlICYgNjMpO1xuICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHgyMDAwMDApIHtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDI0MCArIChjb2RlID4+PiAxOCk7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSA+Pj4gMTIgJiA2Myk7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSA+Pj4gNiAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlICYgNjMpO1xuICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHg0MDAwMDAwKSB7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAyNDggKyAoY29kZSA+Pj4gMjQpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgPj4+IDE4ICYgNjMpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgPj4+IDEyICYgNjMpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgPj4+IDYgJiA2Myk7XG4gICAgICAgIGJ5dGVBcnJheVthY3R1YWxMZW5ndGgrK10gPSAxMjggKyAoY29kZSAmIDYzKTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4NDAwMDAwMCkge1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMjUyICsgKGNvZGUgPj4+IDMwKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlID4+PiAyNCAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlID4+PiAxOCAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlID4+PiAxMiAmIDYzKTtcbiAgICAgICAgYnl0ZUFycmF5W2FjdHVhbExlbmd0aCsrXSA9IDEyOCArIChjb2RlID4+PiA2ICYgNjMpO1xuICAgICAgICBieXRlQXJyYXlbYWN0dWFsTGVuZ3RoKytdID0gMTI4ICsgKGNvZGUgJiA2Myk7XG4gICAgICB9XG4gICAgfVxuICAgIGJ5dGVBcnJheS5sZW5ndGggPSBhY3R1YWxMZW5ndGg7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ5dGVBcnJheSkuYnVmZmVyO1xuICB9XG59O1xuXG59LHt9XSw0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0hUTUxBdWRpb0VsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MQXVkaW9FbGVtZW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgQXVkaW8gPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfSFRNTEF1ZGlvRWxlbWVudCkge1xuICBmdW5jdGlvbiBBdWRpbyh1cmwpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW8pO1xuICAgIHJldHVybiBfY2FsbFN1cGVyKHRoaXMsIEF1ZGlvLCBbdXJsXSk7XG4gIH1cbiAgX2luaGVyaXRzKEF1ZGlvLCBfSFRNTEF1ZGlvRWxlbWVudCk7XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoQXVkaW8pO1xufShfSFRNTEF1ZGlvRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0hUTUxBdWRpb0VsZW1lbnRcIjoxNX1dLDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChnbG9iYWwpeyhmdW5jdGlvbiAoKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX3V0aWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlsXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICBkZWZpbmUoW1wiZXhwb3J0c1wiXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICgodHlwZW9mIGV4cG9ydHMgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihleHBvcnRzKSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGV4cG9ydHMubm9kZU5hbWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGZhY3RvcnkoZXhwb3J0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZhY3RvcnkoZ2xvYmFsKTtcbiAgICB9XG4gIH0pKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBleHBvcnRzLlVSTCA9IGdsb2JhbC5VUkwgfHwgZ2xvYmFsLndlYmtpdFVSTDtcbiAgICBpZiAoZ2xvYmFsLkJsb2IgJiYgZ2xvYmFsLlVSTCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgdmFyIEJsb2JCdWlsZGVyID0gZ2xvYmFsLkJsb2JCdWlsZGVyIHx8IGdsb2JhbC5XZWJLaXRCbG9iQnVpbGRlciB8fCBnbG9iYWwuTW96QmxvYkJ1aWxkZXIgfHwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGdldF9jbGFzcyA9IGZ1bmN0aW9uIGdldF9jbGFzcyhvYmplY3QpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkubWF0Y2goL15cXFtvYmplY3RcXHMoLiopXFxdJC8pWzFdO1xuICAgICAgICB9LFxuICAgICAgICBGYWtlQmxvYkJ1aWxkZXIgPSBmdW5jdGlvbiBCbG9iQnVpbGRlcigpIHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgICB0aGlzLl9hcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcigpO1xuICAgICAgICB9LFxuICAgICAgICBGYWtlQmxvYiA9IGZ1bmN0aW9uIEJsb2IoZGF0YSwgdHlwZSwgZW5jb2RpbmcpIHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICAgIHRoaXMuc2l6ZSA9IGRhdGEubGVuZ3RoO1xuICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgICAgdGhpcy5lbmNvZGluZyA9IGVuY29kaW5nO1xuICAgICAgICAgIHRoaXMuX2FycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIEZCQl9wcm90byA9IEZha2VCbG9iQnVpbGRlci5wcm90b3R5cGUsXG4gICAgICAgIEZCX3Byb3RvID0gRmFrZUJsb2IucHJvdG90eXBlLFxuICAgICAgICBGaWxlUmVhZGVyU3luYyA9IGdsb2JhbC5GaWxlUmVhZGVyU3luYyxcbiAgICAgICAgRmlsZUV4Y2VwdGlvbiA9IGZ1bmN0aW9uIEZpbGVFeGNlcHRpb24odHlwZSkge1xuICAgICAgICAgIHRoaXMuY29kZSA9IHRoaXNbdGhpcy5uYW1lID0gdHlwZV07XG4gICAgICAgIH0sXG4gICAgICAgIGZpbGVfZXhfY29kZXMgPSAoXCJOT1RfRk9VTkRfRVJSIFNFQ1VSSVRZX0VSUiBBQk9SVF9FUlIgTk9UX1JFQURBQkxFX0VSUiBFTkNPRElOR19FUlIgXCIgKyBcIk5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUiBJTlZBTElEX1NUQVRFX0VSUiBTWU5UQVhfRVJSXCIpLnNwbGl0KFwiIFwiKSxcbiAgICAgICAgZmlsZV9leF9jb2RlID0gZmlsZV9leF9jb2Rlcy5sZW5ndGgsXG4gICAgICAgIHJlYWxfVVJMID0gZ2xvYmFsLlVSTCB8fCBnbG9iYWwud2Via2l0VVJMIHx8IGV4cG9ydHMsXG4gICAgICAgIHJlYWxfY3JlYXRlX29iamVjdF9VUkwgPSByZWFsX1VSTC5jcmVhdGVPYmplY3RVUkwsXG4gICAgICAgIHJlYWxfcmV2b2tlX29iamVjdF9VUkwgPSByZWFsX1VSTC5yZXZva2VPYmplY3RVUkwsXG4gICAgICAgIFVSTCA9IHJlYWxfVVJMLFxuICAgICAgICBidG9hID0gZ2xvYmFsLmJ0b2EsXG4gICAgICAgIGF0b2IgPSBnbG9iYWwuYXRvYixcbiAgICAgICAgQXJyYXlCdWZmZXIgPSBnbG9iYWwuQXJyYXlCdWZmZXIsXG4gICAgICAgIFVpbnQ4QXJyYXkgPSBnbG9iYWwuVWludDhBcnJheSxcbiAgICAgICAgb3JpZ2luID0gL15bXFx3LV0rOlxcLypcXFs/W1xcd1xcLjotXStcXF0/KD86OlswLTldKyk/LztcbiAgICAgIEZha2VCbG9iLmZha2UgPSBGQl9wcm90by5mYWtlID0gdHJ1ZTtcbiAgICAgIHdoaWxlIChmaWxlX2V4X2NvZGUtLSkge1xuICAgICAgICBGaWxlRXhjZXB0aW9uLnByb3RvdHlwZVtmaWxlX2V4X2NvZGVzW2ZpbGVfZXhfY29kZV1dID0gZmlsZV9leF9jb2RlICsgMTtcbiAgICAgIH1cbiAgICAgIGlmICghcmVhbF9VUkwuY3JlYXRlT2JqZWN0VVJMKSB7XG4gICAgICAgIFVSTCA9IGV4cG9ydHMuVVJMID0gZnVuY3Rpb24gKHVyaSkge1xuICAgICAgICAgIHZhciB1cmlfaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiwgXCJhXCIpLFxuICAgICAgICAgICAgdXJpX29yaWdpbjtcbiAgICAgICAgICB1cmlfaW5mby5ocmVmID0gdXJpO1xuICAgICAgICAgIGlmICghKFwib3JpZ2luXCIgaW4gdXJpX2luZm8pKSB7XG4gICAgICAgICAgICBpZiAodXJpX2luZm8ucHJvdG9jb2wudG9Mb3dlckNhc2UoKSA9PT0gXCJkYXRhOlwiKSB7XG4gICAgICAgICAgICAgIHVyaV9pbmZvLm9yaWdpbiA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1cmlfb3JpZ2luID0gdXJpLm1hdGNoKG9yaWdpbik7XG4gICAgICAgICAgICAgIHVyaV9pbmZvLm9yaWdpbiA9IHVyaV9vcmlnaW4gJiYgdXJpX29yaWdpblsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHVyaV9pbmZvO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgVVJMLmNyZWF0ZU9iamVjdFVSTCA9IGZ1bmN0aW9uIChibG9iKSB7XG4gICAgICAgIHZhciB0eXBlID0gYmxvYi50eXBlLFxuICAgICAgICAgIGRhdGFfVVJJX2hlYWRlcjtcbiAgICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0eXBlID0gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmxvYiBpbnN0YW5jZW9mIEZha2VCbG9iKSB7XG4gICAgICAgICAgZGF0YV9VUklfaGVhZGVyID0gXCJkYXRhOlwiICsgdHlwZTtcbiAgICAgICAgICBpZiAoYmxvYi5lbmNvZGluZyA9PT0gXCJiYXNlNjRcIikge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFfVVJJX2hlYWRlciArIFwiO2Jhc2U2NCxcIiArIGJsb2IuZGF0YTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGJsb2IuZW5jb2RpbmcgPT09IFwiVVJJXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhX1VSSV9oZWFkZXIgKyBcIixcIiArIGRlY29kZVVSSUNvbXBvbmVudChibG9iLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYnRvYSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFfVVJJX2hlYWRlciArIFwiO2Jhc2U2NCxcIiArIGJ0b2EoYmxvYi5kYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFfVVJJX2hlYWRlciArIFwiLFwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGJsb2IuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlYWxfY3JlYXRlX29iamVjdF9VUkwpIHtcbiAgICAgICAgICByZXR1cm4gcmVhbF9jcmVhdGVfb2JqZWN0X1VSTC5jYWxsKHJlYWxfVVJMLCBibG9iKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwgPSBmdW5jdGlvbiAob2JqZWN0X1VSTCkge1xuICAgICAgICBpZiAob2JqZWN0X1VSTC5zdWJzdHJpbmcoMCwgNSkgIT09IFwiZGF0YTpcIiAmJiByZWFsX3Jldm9rZV9vYmplY3RfVVJMKSB7XG4gICAgICAgICAgcmVhbF9yZXZva2Vfb2JqZWN0X1VSTC5jYWxsKHJlYWxfVVJMLCBvYmplY3RfVVJMKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIEZCQl9wcm90by5hcHBlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgYmIgPSB0aGlzLmRhdGE7XG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICB2YXIgc3RyID0gXCJcIixcbiAgICAgICAgICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGRhdGEpLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBidWZfbGVuID0gYnVmLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKDsgaSA8IGJ1Zl9sZW47IGkrKykge1xuICAgICAgICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYmIucHVzaChzdHIpO1xuICAgICAgICAgIHRoaXMuX2FycmF5QnVmZmVyID0gZGF0YS5zbGljZSgwKTtcbiAgICAgICAgfSBlbHNlIGlmIChnZXRfY2xhc3MoZGF0YSkgPT09IFwiQmxvYlwiIHx8IGdldF9jbGFzcyhkYXRhKSA9PT0gXCJGaWxlXCIpIHtcbiAgICAgICAgICBpZiAoRmlsZVJlYWRlclN5bmMpIHtcbiAgICAgICAgICAgIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyU3luYygpO1xuICAgICAgICAgICAgYmIucHVzaChmci5yZWFkQXNCaW5hcnlTdHJpbmcoZGF0YSkpO1xuICAgICAgICAgICAgdGhpcy5fYXJyYXlCdWZmZXIgPSBkYXRhLmFycmF5QnVmZmVyKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBGaWxlRXhjZXB0aW9uKFwiTk9UX1JFQURBQkxFX0VSUlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIEZha2VCbG9iKSB7XG4gICAgICAgICAgaWYgKGRhdGEuZW5jb2RpbmcgPT09IFwiYmFzZTY0XCIgJiYgYXRvYikge1xuICAgICAgICAgICAgYmIucHVzaChhdG9iKGRhdGEuZGF0YSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5lbmNvZGluZyA9PT0gXCJVUklcIikge1xuICAgICAgICAgICAgYmIucHVzaChkZWNvZGVVUklDb21wb25lbnQoZGF0YS5kYXRhKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmVuY29kaW5nID09PSBcInJhd1wiKSB7XG4gICAgICAgICAgICBiYi5wdXNoKGRhdGEuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2FycmF5QnVmZmVyID0gZGF0YS5fYXJyYXlCdWZmZXIuc2xpY2UoMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBkYXRhICs9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJiLnB1c2godW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpKSk7XG4gICAgICAgICAgdGhpcy5fYXJyYXlCdWZmZXIgPSBfdXRpbFtcImRlZmF1bHRcIl0uc3RyaW5nVG9BcnJheWJ1ZmZlcigpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgRkJCX3Byb3RvLmdldEJsb2IgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICB0eXBlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYmxvYiA9IG5ldyBGYWtlQmxvYih0aGlzLmRhdGEuam9pbihcIlwiKSwgdHlwZSwgXCJyYXdcIik7XG4gICAgICAgIGJsb2IuX2FycmF5QnVmZmVyID0gdGhpcy5fYXJyYXlCdWZmZXI7XG4gICAgICAgIHJldHVybiBibG9iO1xuICAgICAgfTtcbiAgICAgIEZCQl9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiW29iamVjdCBCbG9iQnVpbGRlcl1cIjtcbiAgICAgIH07XG4gICAgICBGQl9wcm90by5zbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kLCB0eXBlKSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgaWYgKGFyZ3MgPCAzKSB7XG4gICAgICAgICAgdHlwZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJsb2IgPSBuZXcgRmFrZUJsb2IodGhpcy5kYXRhLnNsaWNlKHN0YXJ0LCBhcmdzID4gMSA/IGVuZCA6IHRoaXMuZGF0YS5sZW5ndGgpLCB0eXBlLCB0aGlzLmVuY29kaW5nKTtcbiAgICAgICAgdmFyIGFycmF5QnVmZmVyID0gdGhpcy5fYXJyYXlCdWZmZXI7XG4gICAgICAgIGlmIChhcnJheUJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgYmxvYi5fYXJyYXlCdWZmZXIgPSB0aGlzLl9hcnJheUJ1ZmZlci5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvYjtcbiAgICAgIH07XG4gICAgICBGQl9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiW29iamVjdCBCbG9iXVwiO1xuICAgICAgfTtcbiAgICAgIEZCX3Byb3RvLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgfTtcbiAgICAgIEZCX3Byb3RvLmFycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXlCdWZmZXIuc2xpY2UoMCk7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIEZha2VCbG9iQnVpbGRlcjtcbiAgICB9KCk7XG4gICAgZXhwb3J0cy5CbG9iID0gZnVuY3Rpb24gKGJsb2JQYXJ0cywgb3B0aW9ucykge1xuICAgICAgdmFyIHR5cGUgPSBvcHRpb25zID8gb3B0aW9ucy50eXBlIHx8IFwiXCIgOiBcIlwiO1xuICAgICAgdmFyIGJ1aWxkZXIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcbiAgICAgIGlmIChibG9iUGFydHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJsb2JQYXJ0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGlmIChVaW50OEFycmF5ICYmIGJsb2JQYXJ0c1tpXSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIGJ1aWxkZXIuYXBwZW5kKGJsb2JQYXJ0c1tpXS5idWZmZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWlsZGVyLmFwcGVuZChibG9iUGFydHNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGJsb2IgPSBidWlsZGVyLmdldEJsb2IodHlwZSk7XG4gICAgICBpZiAoIWJsb2Iuc2xpY2UgJiYgYmxvYi53ZWJraXRTbGljZSkge1xuICAgICAgICBibG9iLnNsaWNlID0gYmxvYi53ZWJraXRTbGljZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBibG9iO1xuICAgIH07XG4gICAgdmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIHJldHVybiBvYmplY3QuX19wcm90b19fO1xuICAgIH07XG4gICAgZXhwb3J0cy5CbG9iLnByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKG5ldyBleHBvcnRzLkJsb2IoKSk7XG4gIH0pO1xufSkodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZiB8fCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdyB8fCB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCB8fCAodm9pZCAwKS5jb250ZW50IHx8IHZvaWQgMCk7XG5cbn0pLmNhbGwodGhpcyl9KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbn0se1wiLi4vdXRpbFwiOjN9XSw2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIERPTVRva2VuTGlzdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBET01Ub2tlbkxpc3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERPTVRva2VuTGlzdCk7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICB9XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoRE9NVG9rZW5MaXN0LCBbe1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IGFkZCBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbnRhaW5zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnRhaW5zKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IGNvbnRhaW5zIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZW50cmllc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbnRyaWVzKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IGVudHJpZXMgaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JFYWNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvckVhY2goKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3QgZm9yRWFjaCBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIml0ZW1cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXRlbSgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCBpdGVtIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwia2V5c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IGtleXMgaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IHJlbW92ZSBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlcGxhY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbGFjZSgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCByZXBsYWNlIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3VwcG9ydHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3VwcG9ydHMoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3Qgc3VwcG9ydHMgaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0b2dnbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlKCkge31cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCB2YWx1ZSBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3QgdmFsdWVzIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH1dKTtcbn0oKTtcblxufSx7fV0sNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9FdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgRGV2aWNlTW90aW9uRXZlbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfRXZlbnQpIHtcbiAgZnVuY3Rpb24gRGV2aWNlTW90aW9uRXZlbnQoaW5pdEFyZ3MpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERldmljZU1vdGlvbkV2ZW50KTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgRGV2aWNlTW90aW9uRXZlbnQsIFsnZGV2aWNlbW90aW9uJ10pO1xuICAgIGlmIChpbml0QXJncykge1xuICAgICAgX3RoaXMuX2FjY2VsZXJhdGlvbiA9IGluaXRBcmdzLmFjY2VsZXJhdGlvbiA/IGluaXRBcmdzLmFjY2VsZXJhdGlvbiA6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMFxuICAgICAgfTtcbiAgICAgIF90aGlzLl9hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5ID0gaW5pdEFyZ3MuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eSA/IGluaXRBcmdzLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkgOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDBcbiAgICAgIH07XG4gICAgICBfdGhpcy5fcm90YXRpb25SYXRlID0gaW5pdEFyZ3Mucm90YXRpb25SYXRlID8gaW5pdEFyZ3Mucm90YXRpb25SYXRlIDoge1xuICAgICAgICBhbHBoYTogMCxcbiAgICAgICAgYmV0YTogMCxcbiAgICAgICAgZ2FtbWE6IDBcbiAgICAgIH07XG4gICAgICBfdGhpcy5faW50ZXJ2YWwgPSBpbml0QXJncy5pbnRlcnZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMuX2FjY2VsZXJhdGlvbiA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMFxuICAgICAgfTtcbiAgICAgIF90aGlzLl9hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5ID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB6OiAwXG4gICAgICB9O1xuICAgICAgX3RoaXMuX3JvdGF0aW9uUmF0ZSA9IHtcbiAgICAgICAgYWxwaGE6IDAsXG4gICAgICAgIGJldGE6IDAsXG4gICAgICAgIGdhbW1hOiAwXG4gICAgICB9O1xuICAgICAgX3RoaXMuX2ludGVydmFsID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9pbmhlcml0cyhEZXZpY2VNb3Rpb25FdmVudCwgX0V2ZW50KTtcbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhEZXZpY2VNb3Rpb25FdmVudCwgW3tcbiAgICBrZXk6IFwiYWNjZWxlcmF0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWNjZWxlcmF0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicm90YXRpb25SYXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcm90YXRpb25SYXRlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbnRlcnZhbFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludGVydmFsO1xuICAgIH1cbiAgfV0pO1xufShfRXZlbnQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9FdmVudFwiOjEwfV0sODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9BdWRpbyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9cIikpO1xudmFyIF9Gb250RmFjZVNldCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9udEZhY2VTZXRcIikpO1xudmFyIF9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTm9kZVwiKSk7XG52YXIgX05vZGVMaXN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ob2RlTGlzdFwiKSk7XG52YXIgX0hUTUxBbmNob3JFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MQW5jaG9yRWxlbWVudFwiKSk7XG52YXIgX0hUTUxFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG52YXIgX0hUTUxIdG1sRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEh0bWxFbGVtZW50XCIpKTtcbnZhciBfSFRNTEJvZHlFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MQm9keUVsZW1lbnRcIikpO1xudmFyIF9IVE1MSGVhZEVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxIZWFkRWxlbWVudFwiKSk7XG52YXIgX0hUTUxDYW52YXNFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MQ2FudmFzRWxlbWVudFwiKSk7XG52YXIgX0hUTUxWaWRlb0VsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxWaWRlb0VsZW1lbnRcIikpO1xudmFyIF9IVE1MU2NyaXB0RWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTFNjcmlwdEVsZW1lbnRcIikpO1xudmFyIF9IVE1MU3R5bGVFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MU3R5bGVFbGVtZW50XCIpKTtcbnZhciBfSFRNTElucHV0RWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTElucHV0RWxlbWVudFwiKSk7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvV2Vha01hcFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHsgX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKTsgfSBlbHNlIHsgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTsgaWYgKCFiYXNlKSByZXR1cm47IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7IGlmIChkZXNjLmdldCkgeyByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzYy52YWx1ZTsgfTsgfSByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7IHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7IG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhazsgfSByZXR1cm4gb2JqZWN0OyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbnZhciBfaHRtbCA9IG5ldyBfSFRNTEh0bWxFbGVtZW50W1wiZGVmYXVsdFwiXSgpO1xudmFyIERvY3VtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX05vZGUpIHtcbiAgZnVuY3Rpb24gRG9jdW1lbnQoKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEb2N1bWVudCk7XG4gICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIERvY3VtZW50KTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwiaGVhZFwiLCBuZXcgX0hUTUxIZWFkRWxlbWVudFtcImRlZmF1bHRcIl0oX2h0bWwpKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwiYm9keVwiLCBuZXcgX0hUTUxCb2R5RWxlbWVudFtcImRlZmF1bHRcIl0oX2h0bWwpKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwiZm9udHNcIiwgbmV3IF9Gb250RmFjZVNldFtcImRlZmF1bHRcIl0oKSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcImNvb2tpZVwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwiZG9jdW1lbnRFbGVtZW50XCIsIF9odG1sKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwicmVhZHlTdGF0ZVwiLCBcImNvbXBsZXRlXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJ2aXNpYmlsaXR5U3RhdGVcIiwgXCJ2aXNpYmxlXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJoaWRkZW5cIiwgZmFsc2UpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJzdHlsZVwiLCB7fSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcImxvY2F0aW9uXCIsIHdpbmRvdy5sb2NhdGlvbik7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcIm9udG91Y2hzdGFydFwiLCBudWxsKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwib250b3VjaG1vdmVcIiwgbnVsbCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcIm9udG91Y2hlbmRcIiwgbnVsbCk7XG4gICAgX2h0bWwuYXBwZW5kQ2hpbGQoX3RoaXMuaGVhZCk7XG4gICAgX2h0bWwuYXBwZW5kQ2hpbGQoX3RoaXMuYm9keSk7XG4gICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChfdGhpcykuc2NyaXB0cyA9IFtdO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfaW5oZXJpdHMoRG9jdW1lbnQsIF9Ob2RlKTtcbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhEb2N1bWVudCwgW3tcbiAgICBrZXk6IFwiY2hhcmFjdGVyU2V0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJVVEYtOFwiO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzY3JpcHRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5zY3JpcHRzLnNsaWNlKDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVFbGVtZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0YWdOYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdGFnTmFtZSA9IHRhZ05hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGlmICh0YWdOYW1lID09PSAnQ0FOVkFTJykge1xuICAgICAgICByZXR1cm4gbmV3IF9IVE1MQ2FudmFzRWxlbWVudFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gJ0lNRycpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbWFnZSgpO1xuICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSAnVklERU8nKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0hUTUxWaWRlb0VsZW1lbnRbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09ICdTQ1JJUFQnKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0hUTUxTY3JpcHRFbGVtZW50W1wiZGVmYXVsdFwiXSgpO1xuICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcIklOUFVUXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfSFRNTElucHV0RWxlbWVudFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJBVURJT1wiKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0F1ZGlvW1wiZGVmYXVsdFwiXSgpO1xuICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcIlNUWUxFXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfSFRNTFN0eWxlRWxlbWVudFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJBXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfSFRNTEFuY2hvckVsZW1lbnRbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IF9IVE1MRWxlbWVudFtcImRlZmF1bHRcIl0odGFnTmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUVsZW1lbnROU1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVFbGVtZW50KHF1YWxpZmllZE5hbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFdmVudCh0eXBlKSB7XG4gICAgICBpZiAod2luZG93W3R5cGVdKSB7XG4gICAgICAgIHJldHVybiBuZXcgd2luZG93W3R5cGVdKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlVGV4dE5vZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlVGV4dE5vZGUoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgpIGlzIG5vdCBzdXBwb3J0IVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzcGF0Y2hFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KCkge1xuICAgICAgaWYgKF9odG1sLmRpc3BhdGNoRXZlbnQuYXBwbHkoX2h0bWwsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKERvY3VtZW50LnByb3RvdHlwZSksIFwiZGlzcGF0Y2hFdmVudFwiLCB0aGlzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRDaGlsZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRDaGlsZChub2RlKSB7XG4gICAgICB2YXIgbm9kZU5hbWUgPSBub2RlLm5vZGVOYW1lO1xuICAgICAgaWYgKG5vZGVOYW1lID09PSBcIlNDUklQVFwiKSB7XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc2NyaXB0cy5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKERvY3VtZW50LnByb3RvdHlwZSksIFwiYXBwZW5kQ2hpbGRcIiwgdGhpcykuY2FsbCh0aGlzLCBub2RlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQ2hpbGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSkge1xuICAgICAgdmFyIG5vZGVOYW1lID0gbm9kZS5ub2RlTmFtZTtcbiAgICAgIGlmIChub2RlTmFtZSA9PT0gXCJTQ1JJUFRcIikge1xuICAgICAgICB2YXIgc2NyaXB0cyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc2NyaXB0cztcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW5ndGggPSBzY3JpcHRzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgICBpZiAobm9kZSA9PT0gc2NyaXB0c1tpbmRleF0pIHtcbiAgICAgICAgICAgIHNjcmlwdHMuc2xpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoRG9jdW1lbnQucHJvdG90eXBlKSwgXCJyZW1vdmVDaGlsZFwiLCB0aGlzKS5jYWxsKHRoaXMsIG5vZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRFbGVtZW50QnlJZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRFbGVtZW50QnlJZChpZCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudEJ5SWQnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIHZhciByb290RWxlbWVudCA9IHRoaXMuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgdmFyIGVsZW1lbnRBcnIgPSBbXS5jb25jYXQocm9vdEVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICB2YXIgZWxlbWVudDtcbiAgICAgIGlmIChpZCA9PT0gXCJjYW52YXNcIiB8fCBpZCA9PT0gXCJnbGNhbnZhc1wiKSB7XG4gICAgICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudEFyci5wb3AoKSkge1xuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09PSBcImNhbnZhc1wiIHx8IGVsZW1lbnQuaWQgPT09IFwiZ2xjYW52YXNcIikge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsZW1lbnRBcnIgPSBlbGVtZW50QXJyLmNvbmNhdChlbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnRBcnIucG9wKCkpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbGVtZW50QXJyID0gZWxlbWVudEFyci5jb25jYXQoZWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEVsZW1lbnRzQnlDbGFzc05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lcykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudHNCeUNsYXNzTmFtZScgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBuYW1lcyAhPT0gXCJzdHJpbmdcIiAmJiBuYW1lcyBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG5hbWVzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RWxlbWVudHNCeVRhZ05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudHNCeVRhZ05hbWUnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICB2YXIgcm9vdEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHZhciByZXN1bHQgPSBuZXcgX05vZGVMaXN0W1wiZGVmYXVsdFwiXSgpO1xuICAgICAgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgICAgIGNhc2UgXCJIRUFEXCI6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZG9jdW1lbnQuaGVhZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJCT0RZXCI6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZG9jdW1lbnQuYm9keSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChyb290RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RWxlbWVudHNCeU5hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeU5hbWUobmFtZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudHNCeU5hbWUnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIHZhciBlbGVtZW50QXJyID0gW10uY29uY2F0KHRoaXMuY2hpbGROb2Rlcyk7XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIHZhciBlbGVtZW50O1xuICAgICAgd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50QXJyLnBvcCgpKSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50QXJyID0gZWxlbWVudEFyci5jb25jYXQoZWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInF1ZXJ5U2VsZWN0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcXVlcnlTZWxlY3RvcihzZWxlY3RvcnMpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IFR5cGVFcnJvcjogRmFpbGVkIHRvIGV4ZWN1dGUgJ3F1ZXJ5U2VsZWN0b3JBbGwnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cbiAgICAgIHZhciBub2RlTGlzdCA9IG5ldyBfTm9kZUxpc3RbXCJkZWZhdWx0XCJdKCk7XG4gICAgICBzd2l0Y2ggKHNlbGVjdG9ycykge1xuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICBjYXNlIE5hTjpcbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICBjYXNlIFwiXCI6XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gXCJzdHJpbmdcIiAmJiBzZWxlY3RvcnMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgdGhyb3cgXCJVbmNhdWdodCBET01FeGNlcHRpb246IEZhaWxlZCB0byBleGVjdXRlICdxdWVyeVNlbGVjdG9yQWxsJyBvbiAnRG9jdW1lbnQnOiAnXCIgKyBzZWxlY3RvcnMgKyBcIicgaXMgbm90IGEgdmFsaWQgc2VsZWN0b3IuXCI7XG4gICAgICB9XG4gICAgICB2YXIgcmVnID0gL15bQS1aYS16XSskLztcbiAgICAgIHZhciByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3JzKTtcbiAgICAgIH1cbiAgICAgIHJlZyA9IC9eXFwuW0EtWmEteiRfXVtBLVphLXokXzAtOVxcLSBdKiQvO1xuICAgICAgcmVzdWx0ID0gc2VsZWN0b3JzLm1hdGNoKHJlZyk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvckFyciA9IHNlbGVjdG9ycy5zcGxpdChcIiBcIik7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yQXJyLnNoaWZ0KCk7XG4gICAgICAgIG5vZGVMaXN0ID0gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yLnN1YnN0cigxKSk7XG4gICAgICAgIHZhciBsZW5ndGggPSBzZWxlY3RvckFyci5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGgpIHtcbiAgICAgICAgICBzZWxlY3RvcnMgPSBzZWxlY3RvckFyci5qb2luKFwiIFwiKTtcbiAgICAgICAgICBsZW5ndGggPSBub2RlTGlzdC5sZW5ndGg7XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIHN1Yk5vZGVMaXN0ID0gbm9kZUxpc3RbaW5kZXhdLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzKTtcbiAgICAgICAgICAgIGlmIChzdWJOb2RlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN1Yk5vZGVMaXN0WzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZUxpc3RbMF07XG4gICAgICB9XG4gICAgICByZWcgPSAvXiNbQS1aYS16JF9dW0EtWmEteiRfMC05XFwtXSokLztcbiAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLnN1YnN0cigxKSk7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgbm9kZUxpc3QucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdG9ycyA9PT0gXCIqXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3JzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlTGlzdFswXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicXVlcnlTZWxlY3RvckFsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBxdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAncXVlcnlTZWxlY3RvckFsbCcgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuICAgICAgdmFyIG5vZGVMaXN0ID0gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIHN3aXRjaCAoc2VsZWN0b3JzKSB7XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIGNhc2UgTmFOOlxuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICByZXR1cm4gbm9kZUxpc3Q7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gXCJzdHJpbmdcIiAmJiBzZWxlY3RvcnMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgdGhyb3cgXCJVbmNhdWdodCBET01FeGNlcHRpb246IEZhaWxlZCB0byBleGVjdXRlICdxdWVyeVNlbGVjdG9yQWxsJyBvbiAnRG9jdW1lbnQnOiAnXCIgKyBzZWxlY3RvcnMgKyBcIicgaXMgbm90IGEgdmFsaWQgc2VsZWN0b3IuXCI7XG4gICAgICB9XG4gICAgICB2YXIgcmVnID0gL15bQS1aYS16XSskLztcbiAgICAgIHZhciByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3JzKTtcbiAgICAgIH1cbiAgICAgIHJlZyA9IC9eXFwuW0EtWmEteiRfXVtBLVphLXokXzAtOVxcLV0qJC87XG4gICAgICByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZWxlY3RvcnMuc3Vic3RyKDEpKTtcbiAgICAgIH1cbiAgICAgIHJlZyA9IC9eI1tBLVphLXokX11bQS1aYS16JF8wLTlcXC1dKiQvO1xuICAgICAgcmVzdWx0ID0gc2VsZWN0b3JzLm1hdGNoKHJlZyk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50QnlJZChzZWxlY3RvcnMuc3Vic3RyKDEpKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBub2RlTGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2VsZWN0b3JzID09PSBcIipcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3RvcnMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGVMaXN0O1xuICAgIH1cbiAgfV0pO1xufShfTm9kZTJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0F1ZGlvXCI6NCxcIi4vRm9udEZhY2VTZXRcIjoxMyxcIi4vSFRNTEFuY2hvckVsZW1lbnRcIjoxNCxcIi4vSFRNTEJvZHlFbGVtZW50XCI6MTYsXCIuL0hUTUxDYW52YXNFbGVtZW50XCI6MTcsXCIuL0hUTUxFbGVtZW50XCI6MTgsXCIuL0hUTUxIZWFkRWxlbWVudFwiOjE5LFwiLi9IVE1MSHRtbEVsZW1lbnRcIjoyMCxcIi4vSFRNTElucHV0RWxlbWVudFwiOjIyLFwiLi9IVE1MU2NyaXB0RWxlbWVudFwiOjI0LFwiLi9IVE1MU3R5bGVFbGVtZW50XCI6MjUsXCIuL0hUTUxWaWRlb0VsZW1lbnRcIjoyNixcIi4vTm9kZVwiOjMyLFwiLi9Ob2RlTGlzdFwiOjMzLFwiLi91dGlsL1dlYWtNYXBcIjo1NX1dLDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05vZGVcIikpO1xudmFyIF9Ob2RlTGlzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTm9kZUxpc3RcIikpO1xudmFyIF9ET01Ub2tlbkxpc3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RPTVRva2VuXFx1MjAwQkxpc3RcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgRWxlbWVudCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9Ob2RlKSB7XG4gIGZ1bmN0aW9uIEVsZW1lbnQodGFnTmFtZSkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRWxlbWVudCk7XG4gICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIEVsZW1lbnQsIFt0YWdOYW1lXSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcImNsYXNzTmFtZVwiLCAnJyk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcImNoaWxkcmVuXCIsIFtdKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwiY2xhc3NMaXN0XCIsIG5ldyBfRE9NVG9rZW5MaXN0W1wiZGVmYXVsdFwiXSgpKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwidmFsdWVcIiwgMSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcImNvbnRlbnRcIiwgXCJcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcInNjcm9sbExlZnRcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcInNjcm9sbFRvcFwiLCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwiY2xpZW50TGVmdFwiLCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwiY2xpZW50VG9wXCIsIDApO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfaW5oZXJpdHMoRWxlbWVudCwgX05vZGUpO1xuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEVsZW1lbnQsIFt7XG4gICAga2V5OiBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICByaWdodDogd2luZG93LmlubmVyV2lkdGhcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEVsZW1lbnRzQnlUYWdOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpIHtcbiAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIHZhciBjaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzO1xuICAgICAgdmFyIGxlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGNoaWxkTm9kZXNbaW5kZXhdO1xuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSB0YWdOYW1lIHx8IHRhZ05hbWUgPT09IFwiKlwiKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEVsZW1lbnRzQnlDbGFzc05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lcykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudHNCeUNsYXNzTmFtZScgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdCA9IG5ldyBfTm9kZUxpc3RbXCJkZWZhdWx0XCJdKCk7XG4gICAgICBpZiAodHlwZW9mIG5hbWVzICE9PSBcInN0cmluZ1wiICYmIG5hbWVzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICB2YXIgZWxlbWVudEFyciA9IFtdLmNvbmNhdCh0aGlzLmNoaWxkTm9kZXMpO1xuICAgICAgdmFyIGVsZW1lbnQ7XG4gICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnRBcnIucG9wKCkpIHtcbiAgICAgICAgdmFyIGNsYXNzU3RyID0gZWxlbWVudFtcImNsYXNzXCJdO1xuICAgICAgICBpZiAoY2xhc3NTdHIpIHtcbiAgICAgICAgICB2YXIgY2xhc3NBcnIgPSBjbGFzc1N0ci5zcGxpdChcIiBcIik7XG4gICAgICAgICAgdmFyIGxlbmd0aCA9IGNsYXNzQXJyLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NBcnJbaW5kZXhdID09PSBuYW1lcykge1xuICAgICAgICAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnRBcnIgPSBlbGVtZW50QXJyLmNvbmNhdChlbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicXVlcnlTZWxlY3RvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBxdWVyeVNlbGVjdG9yKHNlbGVjdG9ycykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAncXVlcnlTZWxlY3RvckFsbCcgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuICAgICAgdmFyIG5vZGVMaXN0ID0gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIHN3aXRjaCAoc2VsZWN0b3JzKSB7XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIGNhc2UgTmFOOlxuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3JzICE9PSBcInN0cmluZ1wiICYmIHNlbGVjdG9ycyBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IERPTUV4Y2VwdGlvbjogRmFpbGVkIHRvIGV4ZWN1dGUgJ3F1ZXJ5U2VsZWN0b3JBbGwnIG9uICdEb2N1bWVudCc6ICdcIiArIHNlbGVjdG9ycyArIFwiJyBpcyBub3QgYSB2YWxpZCBzZWxlY3Rvci5cIjtcbiAgICAgIH1cbiAgICAgIHZhciByZWcgPSAvXltBLVphLXpdKyQvO1xuICAgICAgdmFyIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3RvcnMpO1xuICAgICAgfVxuICAgICAgcmVnID0gL14uW0EtWmEteiRfXVtBLVphLXokXzAtOVxcLSBdKiQvO1xuICAgICAgcmVzdWx0ID0gc2VsZWN0b3JzLm1hdGNoKHJlZyk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvckFyciA9IHNlbGVjdG9ycy5zcGxpdChcIiBcIik7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yQXJyLnNoaWZ0KCk7XG4gICAgICAgIG5vZGVMaXN0ID0gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yLnN1YnN0cigxKSk7XG4gICAgICAgIHZhciBsZW5ndGggPSBzZWxlY3RvckFyci5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGgpIHtcbiAgICAgICAgICBzZWxlY3RvcnMgPSBzZWxlY3RvckFyci5qb2luKFwiIFwiKTtcbiAgICAgICAgICBsZW5ndGggPSBub2RlTGlzdC5sZW5ndGg7XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIHN1Yk5vZGVMaXN0ID0gbm9kZUxpc3RbaW5kZXhdLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzKTtcbiAgICAgICAgICAgIGlmIChzdWJOb2RlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN1Yk5vZGVMaXN0WzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZUxpc3RbMF07XG4gICAgICB9XG4gICAgICByZWcgPSAvXiNbQS1aYS16JF9dW0EtWmEteiRfMC05XFwtXSokLztcbiAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLnN1YnN0cigxKSk7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgbm9kZUxpc3QucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdG9ycyA9PT0gXCIqXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3JzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlTGlzdFswXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWVzdEZ1bGxzY3JlZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdEZ1bGxzY3JlZW4oKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUF0dHJpYnV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpIHtcbiAgICAgIGlmIChhdHRyTmFtZSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiB0aGlzW1wic3R5bGVcIl0pIHtcbiAgICAgICAgICB0aGlzW1wic3R5bGVcIl1bc3R5bGVOYW1lXSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNbYXR0ck5hbWVdID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0QXR0cmlidXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgICAgaWYgKG5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09IFwidW5kZWZpbmVkXCIgfHwgdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIHRoaXNbXCJzdHlsZVwiXSkge1xuICAgICAgICAgICAgdGhpc1tcInN0eWxlXCJdW3N0eWxlTmFtZV0gPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xccyovZywgXCJcIik7XG4gICAgICAgICAgdmFyIHZhbHVlQXJyYXkgPSB2YWx1ZS5zcGxpdChcIjtcIik7XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdmFsdWVBcnJheSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlQXJyYXlbaW5kZXhdICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgdmFyIHZhbHVlVGVtcCA9IHZhbHVlQXJyYXlbaW5kZXhdLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgICAgdGhpc1tcInN0eWxlXCJdW3ZhbHVlVGVtcFswXV0gPSB2YWx1ZVRlbXBbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEF0dHJpYnV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgICAgdmFyIGF0dHJpYnV0ZVZhbHVlID0gbnVsbDtcbiAgICAgIGlmIChuYW1lID09IFwic3R5bGVcIikge1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXNbXCJzdHlsZVwiXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXNbbmFtZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEF0dHJpYnV0ZU5TXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZU5TKG5zLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmx1clwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJsYXN0Q2hpbGRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBsYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgcmV0dXJuIGxhc3RDaGlsZCA/IGxhc3RDaGlsZCA6IHRoaXMuaW5uZXJIVE1MID8gbmV3IEhUTUxFbGVtZW50KCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpcnN0Q2hpbGRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgIHJldHVybiBjaGlsZCA/IGNoaWxkIDogdGhpcy5pbm5lckhUTUwgPyBuZXcgSFRNTEVsZW1lbnQoKSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmlyc3RFbGVtZW50Q2hpbGRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgIHJldHVybiBjaGlsZCA/IGNoaWxkIDogdGhpcy5pbm5lckhUTUwgPyBuZXcgSFRNTEVsZW1lbnQoKSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xpZW50SGVpZ2h0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgc3R5bGUgPSB0aGlzLnN0eWxlIHx8IHt9O1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHN0eWxlLmZvbnRTaXplIHx8IFwiMFwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGFnTmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZU5hbWU7XG4gICAgfVxuICB9XSk7XG59KF9Ob2RlMltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vRE9NVG9rZW7igItMaXN0XCI6NixcIi4vTm9kZVwiOjMyLFwiLi9Ob2RlTGlzdFwiOjMzfV0sMTA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgRXZlbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXZlbnQodHlwZSwgZXZlbnRJbml0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50KTtcbiAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICB0aGlzLl90YXJnZXQgPSBudWxsO1xuICAgIHRoaXMuX2V2ZW50UGhhc2UgPSAyO1xuICAgIHRoaXMuX2N1cnJlbnRUYXJnZXQgPSBudWxsO1xuICAgIHRoaXMuX2NhbmNlbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fc3RvcHBlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3Bhc3NpdmVMaXN0ZW5lciA9IG51bGw7XG4gICAgdGhpcy5fdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEV2ZW50LCBbe1xuICAgIGtleTogXCJ0eXBlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGFyZ2V0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjdXJyZW50VGFyZ2V0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3VycmVudFRhcmdldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNUcnVzdGVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRpbWVTdGFtcFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RpbWVTdGFtcDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBpZiAodGhpcy50eXBlLmluZGV4T2YoXCJ0b3VjaFwiKSkge1xuICAgICAgICB0aGlzLl90aW1lU3RhbXAgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9zZWRQYXRoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvc2VkUGF0aCgpIHtcbiAgICAgIHZhciBjdXJyZW50VGFyZ2V0ID0gdGhpcy5fY3VycmVudFRhcmdldDtcbiAgICAgIGlmIChjdXJyZW50VGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbY3VycmVudFRhcmdldF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV2ZW50UGhhc2VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ldmVudFBoYXNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wUHJvcGFnYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKCkge31cbiAgfSwge1xuICAgIGtleTogXCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkge1xuICAgICAgdGhpcy5fc3RvcHBlZCA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJ1YmJsZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuY2VsYWJsZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInByZXZlbnREZWZhdWx0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KCkge1xuICAgICAgaWYgKHRoaXMuX3Bhc3NpdmVMaXN0ZW5lciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJFdmVudCNwcmV2ZW50RGVmYXVsdCgpIHdhcyBjYWxsZWQgZnJvbSBhIHBhc3NpdmUgbGlzdGVuZXI6XCIsIHRoaXMuX3Bhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jYW5jZWxhYmxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NhbmNlbGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVmYXVsdFByZXZlbnRlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NhbmNlbGVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb3NlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfV0pO1xufSgpO1xuRXZlbnQuTk9ORSA9IDA7XG5FdmVudC5DQVBUVVJJTkdfUEhBU0UgPSAxO1xuRXZlbnQuQVRfVEFSR0VUID0gMjtcbkV2ZW50LkJVQkJMSU5HX1BIQVNFID0gMztcblxufSx7fV0sMTE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfVG91Y2hFdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVG91Y2hFdmVudFwiKSk7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvV2Vha01hcFwiKSk7XG52YXIgX0RldmljZU1vdGlvbkV2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9EZXZpY2VNb3Rpb25FdmVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgX2xpc3RlbmVyU3RhdCA9IHt9O1xudmFyIF9vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiBfb25Ub3VjaFN0YXJ0KGUpIHtcbiAgdmFyIGV2ZW50ID0gbmV3IF9Ub3VjaEV2ZW50W1wiZGVmYXVsdFwiXShcInRvdWNoc3RhcnRcIik7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbn07XG52YXIgX29uVG91Y2hNb3ZlID0gZnVuY3Rpb24gX29uVG91Y2hNb3ZlKGUpIHtcbiAgdmFyIGV2ZW50ID0gbmV3IF9Ub3VjaEV2ZW50W1wiZGVmYXVsdFwiXShcInRvdWNobW92ZVwiKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xufTtcbnZhciBfb25Ub3VjaENhbmNlbCA9IGZ1bmN0aW9uIF9vblRvdWNoQ2FuY2VsKGUpIHtcbiAgdmFyIGV2ZW50ID0gbmV3IF9Ub3VjaEV2ZW50W1wiZGVmYXVsdFwiXShcInRvdWNoY2FuY2VsXCIpO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG59O1xudmFyIF9vblRvdWNoRW5kID0gZnVuY3Rpb24gX29uVG91Y2hFbmQoZSkge1xuICB2YXIgZXZlbnQgPSBuZXcgX1RvdWNoRXZlbnRbXCJkZWZhdWx0XCJdKFwidG91Y2hlbmRcIik7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbn07XG52YXIgX3N5c3RlbUluZm8gPSByYWwuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbnZhciBfaXNBbmRyb2lkID0gX3N5c3RlbUluZm8ucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gXCJhbmRyb2lkXCI7XG52YXIgX2FscGhhID0gMC44O1xudmFyIF9ncmF2aXR5ID0gWzAsIDAsIDBdO1xudmFyIF9vbkFjY2VsZXJvbWV0ZXJDaGFuZ2UgPSBmdW5jdGlvbiBfb25BY2NlbGVyb21ldGVyQ2hhbmdlKGUpIHtcbiAgaWYgKF9pc0FuZHJvaWQpIHtcbiAgICBlLnggKj0gLTEwO1xuICAgIGUueSAqPSAtMTA7XG4gICAgZS56ICo9IC0xMDtcbiAgfSBlbHNlIHtcbiAgICBlLnggKj0gMTA7XG4gICAgZS55ICo9IDEwO1xuICAgIGUueiAqPSAxMDtcbiAgfVxuICBfZ3Jhdml0eVswXSA9IF9hbHBoYSAqIF9ncmF2aXR5WzBdICsgKDEgLSBfYWxwaGEpICogZS54O1xuICBfZ3Jhdml0eVsxXSA9IF9hbHBoYSAqIF9ncmF2aXR5WzFdICsgKDEgLSBfYWxwaGEpICogZS55O1xuICBfZ3Jhdml0eVsyXSA9IF9hbHBoYSAqIF9ncmF2aXR5WzJdICsgKDEgLSBfYWxwaGEpICogZS56O1xuICB2YXIgZXZlbnQgPSBuZXcgX0RldmljZU1vdGlvbkV2ZW50W1wiZGVmYXVsdFwiXSh7XG4gICAgYWNjZWxlcmF0aW9uOiB7XG4gICAgICB4OiBlLnggLSBfZ3Jhdml0eVswXSxcbiAgICAgIHk6IGUueSAtIF9ncmF2aXR5WzFdLFxuICAgICAgejogZS56IC0gX2dyYXZpdHlbMl1cbiAgICB9LFxuICAgIGFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHk6IHtcbiAgICAgIHg6IGUueCxcbiAgICAgIHk6IGUueSxcbiAgICAgIHo6IGUuelxuICAgIH1cbiAgfSk7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG52YXIgRXZlbnRUYXJnZXQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXZlbnRUYXJnZXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50VGFyZ2V0KTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uc2V0KHRoaXMsIHt9KTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEV2ZW50VGFyZ2V0LCBbe1xuICAgIGtleTogXCJhZGRFdmVudExpc3RlbmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcyk7XG4gICAgICBpZiAoIXByaXZhdGVUaGlzKSB7XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5zZXQodGhpcywgcHJpdmF0ZVRoaXMgPSB7fSk7XG4gICAgICB9XG4gICAgICB2YXIgZXZlbnRzID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChwcml2YXRlVGhpcyk7XG4gICAgICBpZiAoIWV2ZW50cykge1xuICAgICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uc2V0KHByaXZhdGVUaGlzLCBldmVudHMgPSB7fSk7XG4gICAgICB9XG4gICAgICBpZiAoIWV2ZW50c1t0eXBlXSkge1xuICAgICAgICBldmVudHNbdHlwZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIHZhciBsaXN0ZW5lckFycmF5ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVyQXJyYXkubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICBpZiAobGlzdGVuZXJBcnJheVtpbmRleF0gPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0ZW5lckFycmF5LnB1c2gobGlzdGVuZXIpO1xuICAgICAgaWYgKF9saXN0ZW5lclN0YXRbdHlwZV0pIHtcbiAgICAgICAgKytfbGlzdGVuZXJTdGF0W3R5cGVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2xpc3RlbmVyU3RhdFt0eXBlXSA9IDE7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJ0b3VjaHN0YXJ0XCI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJhbC5vblRvdWNoU3RhcnQoX29uVG91Y2hTdGFydCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJ0b3VjaG1vdmVcIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmFsLm9uVG91Y2hNb3ZlKF9vblRvdWNoTW92ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJ0b3VjaGNhbmNlbFwiOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByYWwub25Ub3VjaENhbmNlbChfb25Ub3VjaENhbmNlbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJ0b3VjaGVuZFwiOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByYWwub25Ub3VjaEVuZChfb25Ub3VjaEVuZCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJkZXZpY2Vtb3Rpb25cIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmFsLm9uQWNjZWxlcm9tZXRlckNoYW5nZShfb25BY2NlbGVyb21ldGVyQ2hhbmdlKTtcbiAgICAgICAgICAgICAgcmFsLnN0YXJ0QWNjZWxlcm9tZXRlcigpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuY2FwdHVyZSkge31cbiAgICAgIGlmIChvcHRpb25zLm9uY2UpIHt9XG4gICAgICBpZiAob3B0aW9ucy5wYXNzaXZlKSB7fVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVFdmVudExpc3RlbmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcyk7XG4gICAgICB2YXIgZXZlbnRzO1xuICAgICAgaWYgKHByaXZhdGVUaGlzKSB7XG4gICAgICAgIGV2ZW50cyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQocHJpdmF0ZVRoaXMpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50cykge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IGxpc3RlbmVycy5sZW5ndGg7IGktLTsgaSA+IDApIHtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnNbaV0gPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGlmICgtLV9saXN0ZW5lclN0YXRbdHlwZV0gPT09IDApIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaHN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByYWwub2ZmVG91Y2hTdGFydChfb25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY2FzZSBcInRvdWNobW92ZVwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmFsLm9mZlRvdWNoTW92ZShfb25Ub3VjaE1vdmUpO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2hjYW5jZWxcIjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJhbC5vZmZUb3VjaENhbmNlbChfb25Ub3VjaENhbmNlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaGVuZFwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmFsLm9mZlRvdWNoRW5kKF9vblRvdWNoRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY2FzZSBcImRldmljZW1vdGlvblwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmFsLm9mZkFjY2VsZXJvbWV0ZXJDaGFuZ2UoX29uQWNjZWxlcm9tZXRlckNoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgICAgcmFsLnN0b3BBY2NlbGVyb21ldGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRpc3BhdGNoRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2hFdmVudCgpIHtcbiAgICAgIHZhciBldmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICBldmVudC5fdGFyZ2V0ID0gZXZlbnQuX2N1cnJlbnRUYXJnZXQgPSB0aGlzO1xuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgX1RvdWNoRXZlbnRbXCJkZWZhdWx0XCJdKSB7XG4gICAgICAgIHZhciB0b3VjaGVBcnJheSA9IGV2ZW50LnRvdWNoZXM7XG4gICAgICAgIHZhciBsZW5ndGggPSB0b3VjaGVBcnJheS5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgICB0b3VjaGVBcnJheVtpbmRleF0udGFyZ2V0ID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0b3VjaGVBcnJheSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuICAgICAgICBsZW5ndGggPSB0b3VjaGVBcnJheS5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIF9pbmRleCA9IDA7IF9pbmRleCA8IGxlbmd0aDsgKytfaW5kZXgpIHtcbiAgICAgICAgICB0b3VjaGVBcnJheVtfaW5kZXhdLnRhcmdldCA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBjYWxsYmFjayA9IHRoaXNbXCJvblwiICsgZXZlbnQudHlwZV07XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICB9XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpO1xuICAgICAgdmFyIGV2ZW50cztcbiAgICAgIGlmIChwcml2YXRlVGhpcykge1xuICAgICAgICBldmVudHMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHByaXZhdGVUaGlzKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudHMpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IGV2ZW50c1tldmVudC50eXBlXTtcbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbaV0uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC5fdGFyZ2V0ID0gZXZlbnQuX2N1cnJlbnRUYXJnZXQgPSBudWxsO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XSk7XG59KCk7XG5cbn0se1wiLi9EZXZpY2VNb3Rpb25FdmVudFwiOjcsXCIuL1RvdWNoRXZlbnRcIjozNSxcIi4vdXRpbC9XZWFrTWFwXCI6NTV9XSwxMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIEZvbnRGYWNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGb250RmFjZShmYW1pbHksIHNvdXJjZSwgZGVzY3JpcHRvcnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9udEZhY2UpO1xuICAgIHRoaXMuZmFtaWx5ID0gZmFtaWx5O1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMuZGVzY3JpcHRvcnMgPSBkZXNjcmlwdG9ycztcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIF9zZWxmUHJpdmF0ZSA9IHtcbiAgICAgIHN0YXR1czogXCJ1bmxvYWRlZFwiLFxuICAgICAgX3N0YXR1czogXCJ1bmxvYWRlZFwiLFxuICAgICAgbG9hZDogZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBcImxvYWRpbmdcIjtcbiAgICAgICAgdmFyIHNvdXJjZTtcbiAgICAgICAgaWYgKHNlbGYuc291cmNlLm1hdGNoKC91cmxcXChcXHMqJ1xccyooLio/KVxccyonXFxzKlxcKS8pKSB7XG4gICAgICAgICAgc291cmNlID0gc2VsZi5zb3VyY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc291cmNlID0gXCJ1cmwoJ1wiICsgc2VsZi5zb3VyY2UgKyBcIicpXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZhbWlseSA9IHJhbC5sb2FkRm9udChzZWxmLmZhbWlseSwgc291cmNlKTtcbiAgICAgICAgaWYgKGZhbWlseSkge1xuICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IFwibG9hZGVkXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc3RhdHVzID0gXCJlcnJvclwiO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBzdGF0dXMgPSBfc2VsZlByaXZhdGUuc3RhdHVzID0gX3NlbGZQcml2YXRlLl9zdGF0dXM7XG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJsb2FkZWRcIikge1xuICAgICAgICAgICAgX3NlbGZQcml2YXRlLmxvYWRSZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9zZWxmUHJpdmF0ZS5sb2FkUmVqZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5zZXQodGhpcywgX3NlbGZQcml2YXRlKTtcbiAgICBfc2VsZlByaXZhdGUubG9hZGVkID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgX3NlbGZQcml2YXRlLmxvYWRSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIF9zZWxmUHJpdmF0ZS5sb2FkUmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoRm9udEZhY2UsIFt7XG4gICAga2V5OiBcInN0YXR1c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc3RhdHVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmxvYWRlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5sb2FkKCk7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5sb2FkZWQ7XG4gICAgfVxuICB9XSk7XG59KCk7XG5tb2R1bGUuZXhwb3J0cyA9IEZvbnRGYWNlO1xuXG59LHtcIi4vdXRpbC9XZWFrTWFwXCI6NTV9XSwxMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9FdmVudFRhcmdldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50VGFyZ2V0XCIpKTtcbnZhciBfRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcbnZhciBfV2Vha01hcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9XZWFrTWFwXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgRm9udEZhY2VTZXQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfRXZlbnRUYXJnZXQpIHtcbiAgZnVuY3Rpb24gRm9udEZhY2VTZXQoKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb250RmFjZVNldCk7XG4gICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIEZvbnRGYWNlU2V0KTtcbiAgICB2YXIgc2VsZiA9IF90aGlzO1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoX3RoaXMpLnN0YXR1cyA9IFwibG9hZGVkXCI7XG4gICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChfdGhpcykucmVhZHkgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLnJlYWR5UmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLnJlYWR5UmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoX3RoaXMpLmZvbnRGYWNlU2V0ID0gW107XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9pbmhlcml0cyhGb250RmFjZVNldCwgX0V2ZW50VGFyZ2V0KTtcbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhGb250RmFjZVNldCwgW3tcbiAgICBrZXk6IFwic3RhdHVzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5zdGF0dXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlYWR5XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5yZWFkeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChmb250RmFjZSkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5mb250RmFjZVNldC5wdXNoKGZvbnRGYWNlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2hlY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJGb250RmFjZVNldC5jaGVjaygpIG5vdCBpbXBsZW1lbnRzXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkZvbnRGYWNlU2V0LmNsZWFyKCkgbm90IGltcGxlbWVudHNcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlbGV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsZXRlKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRm9udEZhY2VTZXQuZGVsZXRlKCkgbm90IGltcGxlbWVudHNcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc3RhdHVzID0gXCJsb2FkaW5nXCI7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oJ2xvYWRpbmcnKSk7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZm9udEZhY2VTZXQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLmZvbnRGYWNlU2V0O1xuICAgICAgICBpZiAoZm9udEZhY2VTZXQpIHtcbiAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBmb250RmFjZVNldCkge1xuICAgICAgICAgICAgdmFyIGZvbnRGYWNlID0gZm9udEZhY2VTZXRbaW5kZXhdO1xuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoZm9udEZhY2UpLnN0YXR1cztcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IFwidW5sb2FkZWRcIiB8fCBzdGF0dXMgPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgICBmb250RmFjZS5sb2FkKCk7XG4gICAgICAgICAgICAgIGlmIChfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KGZvbnRGYWNlKS5fc3RhdHVzICE9PSBcImxvYWRlZFwiKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5zdGF0dXMgPSBcImxvYWRlZFwiO1xuICAgICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoc2VsZikucmVhZHlSZXNvbHZlKFtdLmNvbmNhdChfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLmZvbnRGYWNlU2V0KSk7XG4gICAgICAgICAgcmVzb2x2ZShbXS5jb25jYXQoX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5mb250RmFjZVNldCkpO1xuICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXSgnbG9hZGluZ2RvbmUnKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoc2VsZikuc3RhdHVzID0gXCJsb2FkZWRcIjtcbiAgICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5yZWFkeVJlamVjdCgpO1xuICAgICAgICByZWplY3QoKTtcbiAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKCdsb2FkaW5nZXJyb3InKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcbn0oX0V2ZW50VGFyZ2V0MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vRXZlbnRUYXJnZXRcIjoxMSxcIi4vdXRpbC9XZWFrTWFwXCI6NTV9XSwxNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbnZhciBfV2Vha01hcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9XZWFrTWFwXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgSFRNTEFuY2hvckVsZW1lbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgZnVuY3Rpb24gSFRNTEFuY2hvckVsZW1lbnQoKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MQW5jaG9yRWxlbWVudCk7XG4gICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIEhUTUxBbmNob3JFbGVtZW50LCBbXCJBXCJdKTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF90aGlzKS5wcm90b2NvbCA9IFwiOlwiO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfaW5oZXJpdHMoSFRNTEFuY2hvckVsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoSFRNTEFuY2hvckVsZW1lbnQsIFt7XG4gICAga2V5OiBcInByb3RvY29sXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5wcm90b2NvbDtcbiAgICB9XG4gIH1dKTtcbn0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vSFRNTEVsZW1lbnRcIjoxOCxcIi4vdXRpbC9XZWFrTWFwXCI6NTV9XSwxNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MTWVkaWFFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTE1lZGlhRWxlbWVudFwiKSk7XG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvV2Vha01hcFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7IGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LnNldCkgeyBzZXQgPSBSZWZsZWN0LnNldDsgfSBlbHNlIHsgc2V0ID0gZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikgeyB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpOyB2YXIgZGVzYzsgaWYgKGJhc2UpIHsgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpOyBpZiAoZGVzYy5zZXQpIHsgZGVzYy5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpOyByZXR1cm4gdHJ1ZTsgfSBlbHNlIGlmICghZGVzYy53cml0YWJsZSkgeyByZXR1cm4gZmFsc2U7IH0gfSBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyZWNlaXZlciwgcHJvcGVydHkpOyBpZiAoZGVzYykgeyBpZiAoIWRlc2Mud3JpdGFibGUpIHsgcmV0dXJuIGZhbHNlOyB9IGRlc2MudmFsdWUgPSB2YWx1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgZGVzYyk7IH0gZWxzZSB7IF9kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIHZhbHVlKTsgfSByZXR1cm4gdHJ1ZTsgfTsgfSByZXR1cm4gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcik7IH1cbmZ1bmN0aW9uIF9zZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyLCBpc1N0cmljdCkgeyB2YXIgcyA9IHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTsgaWYgKCFzICYmIGlzU3RyaWN0KSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ2ZhaWxlZCB0byBzZXQgcHJvcGVydHknKTsgfSByZXR1cm4gdmFsdWU7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2dldCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCk7IH0gZWxzZSB7IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7IGlmICghYmFzZSkgcmV0dXJuOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpOyBpZiAoZGVzYy5nZXQpIHsgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7IH0gcmV0dXJuIGRlc2MudmFsdWU7IH07IH0gcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkgeyB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkgeyBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7IH0gcmV0dXJuIG9iamVjdDsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIEhUTUxBdWRpb0VsZW1lbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfSFRNTE1lZGlhRWxlbWVudCkge1xuICBmdW5jdGlvbiBIVE1MQXVkaW9FbGVtZW50KHVybCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTEF1ZGlvRWxlbWVudCk7XG4gICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIEhUTUxBdWRpb0VsZW1lbnQsIFt1cmwsICdBVURJTyddKTtcbiAgICB2YXIgaW5uZXJBdWRpb0NvbnRleHQgPSByYWwuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkNhbnBsYXkoZnVuY3Rpb24gKCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5kdXJhdGlvbiA9IGlubmVyQXVkaW9Db250ZXh0LmR1cmF0aW9uO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwiY2FucGxheVwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJjYW5wbGF5dGhyb3VnaFwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJkdXJhdGlvbmNoYW5nZVwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkZWRtZXRhZGF0YVwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkZWRkYXRhXCIpKTtcbiAgICB9LmJpbmQoX3RoaXMpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vblBsYXkoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwicGxheVwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJwbGF5aW5nXCIpKTtcbiAgICB9LmJpbmQoX3RoaXMpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vblBhdXNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInBhdXNlXCIpKTtcbiAgICB9LmJpbmQoX3RoaXMpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVuZGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImVuZGVkXCIpKTtcbiAgICB9LmJpbmQoX3RoaXMpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZHVyYXRpb24gPSBOYU47XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJlcnJvclwiKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJlbXB0aWVkXCIpKTtcbiAgICB9LmJpbmQoX3RoaXMpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vbldhaXRpbmcoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwid2FpdGluZ1wiKSk7XG4gICAgfS5iaW5kKF90aGlzKSk7XG4gICAgaW5uZXJBdWRpb0NvbnRleHQub25TZWVrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwic2Vla2VkXCIpKTtcbiAgICB9LmJpbmQoX3RoaXMpKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vblNlZWtpbmcoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwic2Vla2luZ1wiKSk7XG4gICAgfS5iaW5kKF90aGlzKSk7XG4gICAgaW5uZXJBdWRpb0NvbnRleHQub25UaW1lVXBkYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInRpbWV1cGRhdGVcIikpO1xuICAgIH0uYmluZChfdGhpcykpO1xuICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHVybDtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF90aGlzKS5pbm5lckF1ZGlvQ29udGV4dCA9IGlubmVyQXVkaW9Db250ZXh0O1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoX3RoaXMpLmR1cmF0aW9uID0gTmFOO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfaW5oZXJpdHMoSFRNTEF1ZGlvRWxlbWVudCwgX0hUTUxNZWRpYUVsZW1lbnQpO1xuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEhUTUxBdWRpb0VsZW1lbnQsIFt7XG4gICAga2V5OiBcImN1cnJlbnRUaW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dC5jdXJyZW50VGltZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0LnNlZWsodmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb29wXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoSFRNTEF1ZGlvRWxlbWVudC5wcm90b3R5cGUpLCBcImxvb3BcIiwgdGhpcyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoSFRNTEF1ZGlvRWxlbWVudC5wcm90b3R5cGUpLCBcImxvb3BcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dC5sb29wID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZvbHVtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKEhUTUxBdWRpb0VsZW1lbnQucHJvdG90eXBlKSwgXCJ2b2x1bWVcIiwgdGhpcyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoSFRNTEF1ZGlvRWxlbWVudC5wcm90b3R5cGUpLCBcInZvbHVtZVwiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0LnZvbHVtZSA9IHZhbHVlO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwidm9sdW1lY2hhbmdlXCIpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuUGxheVR5cGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUGxheVR5cGUoKSB7XG4gICAgICB2YXIgbWVkaWFUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICAgIGlmICh0eXBlb2YgbWVkaWFUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBpZiAobWVkaWFUeXBlLmluZGV4T2YoJ2F1ZGlvL21wZWcnKSA+IC0xIHx8IG1lZGlhVHlwZS5pbmRleE9mKCdhdWRpby9tcDQnKSkge1xuICAgICAgICByZXR1cm4gJ3Byb2JhYmx5JztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3JjXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoSFRNTEF1ZGlvRWxlbWVudC5wcm90b3R5cGUpLCBcInNyY1wiLCB0aGlzKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihIVE1MQXVkaW9FbGVtZW50LnByb3RvdHlwZSksIFwic3JjXCIsIHZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRzdGFydFwiKSk7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2Fkc3RhcnRcIikpO1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dC5zcmMgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihIVE1MQXVkaW9FbGVtZW50LnByb3RvdHlwZSksIFwic3JjXCIsIHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwYXVzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5uZXJBdWRpb0NvbnRleHQucGF1c2UoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicGxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dC5wbGF5KCk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJwcm9ncmVzc1wiKSk7XG4gICAgfVxuICB9XSk7XG59KF9IVE1MTWVkaWFFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vSFRNTE1lZGlhRWxlbWVudFwiOjIzLFwiLi91dGlsL1dlYWtNYXBcIjo1NX1dLDE2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnQuanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgSFRNTEJvZHlFbGVtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gIGZ1bmN0aW9uIEhUTUxCb2R5RWxlbWVudChwYXJlbnROb2RlKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MQm9keUVsZW1lbnQpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBIVE1MQm9keUVsZW1lbnQsIFtcIkJPRFlcIl0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJwYXJlbnROb2RlXCIsIG51bGwpO1xuICAgIF90aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfaW5oZXJpdHMoSFRNTEJvZHlFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEhUTUxCb2R5RWxlbWVudCk7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0hUTUxFbGVtZW50LmpzXCI6MTh9XSwxNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbnZhciBfSW1hZ2VEYXRhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9JbWFnZURhdGFcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmlmIChyYWwuZ2V0RmVhdHVyZVByb3BlcnR5KFwiSFRNTENhbnZhc0VsZW1lbnRcIiwgXCJzcGVjXCIpID09PSBcInZpdm9fcGxhdGZvcm1fc3VwcG9ydFwiKSB7XG4gIHZhciBIVE1MQ2FudmFzRWxlbWVudCA9IHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudDtcbiAgbW9kdWxlLmV4cG9ydHMgPSBIVE1MQ2FudmFzRWxlbWVudDtcbn0gZWxzZSB7XG4gIHZhciBDQU5WQVNfREVGQVVMVF9XSURUSCA9IDMwMDtcbiAgdmFyIENBTlZBU19ERUZBVUxUX0hFSUdIVCA9IDE1MDtcbiAgd2luZG93LnJhbCA9IHdpbmRvdy5yYWwgfHwge307XG4gIHZhciBfY3JlYXRlQ2FudmFzID0gcmFsLmNyZWF0ZUNhbnZhcztcbiAgdmFyIF9IVE1MQ2FudmFzRWxlbWVudCA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgICBmdW5jdGlvbiBfSFRNTENhbnZhc0VsZW1lbnQod2lkdGgsIGhlaWdodCkge1xuICAgICAgdmFyIF90aGlzO1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9IVE1MQ2FudmFzRWxlbWVudCk7XG4gICAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgX0hUTUxDYW52YXNFbGVtZW50LCBbJ0NBTlZBUyddKTtcbiAgICAgIF90aGlzLmlkID0gJ2dsY2FudmFzJztcbiAgICAgIF90aGlzLnR5cGUgPSAnY2FudmFzJztcbiAgICAgIF90aGlzLnRvcCA9IDA7XG4gICAgICBfdGhpcy5sZWZ0ID0gMDtcbiAgICAgIGlmICh0eXBlb2YgcmFsLmdldEZlYXR1cmVQcm9wZXJ0eShcInJhbC5jcmVhdGVDYW52YXNcIiwgXCJzcGVjXCIpID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBfY3JlYXRlQ2FudmFzKCk7XG4gICAgICAgIGNhbnZhcy5fX3Byb3RvX18uX19wcm90b19fID0gX0hUTUxDYW52YXNFbGVtZW50LnByb3RvdHlwZTtcbiAgICAgICAgT2JqZWN0LmtleXMoX3RoaXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIGNhbnZhc1trZXldID0gdGhpc1trZXldO1xuICAgICAgICB9LmJpbmQoX3RoaXMpKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGggPj0gMCA/IE1hdGguY2VpbCh3aWR0aCkgOiBDQU5WQVNfREVGQVVMVF9XSURUSDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodCA+PSAwID8gTWF0aC5jZWlsKGhlaWdodCkgOiBDQU5WQVNfREVGQVVMVF9IRUlHSFQ7XG4gICAgICAgIGNhbnZhcy5fdGFyZ2V0SUQgPSBfdGhpcy5fdGFyZ2V0SUQ7XG4gICAgICAgIGNhbnZhcy5fbGlzdGVuZXJDb3VudCA9IF90aGlzLl9saXN0ZW5lckNvdW50O1xuICAgICAgICBjYW52YXMuX2xpc3RlbmVycyA9IF90aGlzLl9saXN0ZW5lcnM7XG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgY2FudmFzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLl93aWR0aCA9IHdpZHRoID8gTWF0aC5jZWlsKHdpZHRoKSA6IENBTlZBU19ERUZBVUxUX1dJRFRIO1xuICAgICAgICBfdGhpcy5faGVpZ2h0ID0gaGVpZ2h0ID8gTWF0aC5jZWlsKGhlaWdodCkgOiBDQU5WQVNfREVGQVVMVF9IRUlHSFQ7XG4gICAgICAgIF90aGlzLl9jb250ZXh0MkQgPSBudWxsO1xuICAgICAgICBfdGhpcy5fZGF0YUlubmVyID0gbnVsbDtcbiAgICAgICAgX3RoaXMuX2FsaWdubWVudCA9IF90aGlzLl93aWR0aCAlIDIgPT09IDAgPyA4IDogNDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgX2luaGVyaXRzKF9IVE1MQ2FudmFzRWxlbWVudCwgX0hUTUxFbGVtZW50KTtcbiAgICByZXR1cm4gX2NyZWF0ZUNsYXNzKF9IVE1MQ2FudmFzRWxlbWVudCwgW3tcbiAgICAgIGtleTogXCJnZXRDb250ZXh0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udGV4dChuYW1lLCBvcHRzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKG5hbWUgPT09ICd3ZWJnbCcgfHwgbmFtZSA9PT0gJ2V4cGVyaW1lbnRhbC13ZWJnbCcpIHtcbiAgICAgICAgICByZXR1cm4gd2luZG93Ll9fZ2w7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJzJkJykge1xuICAgICAgICAgIGlmICghdGhpcy5fY29udGV4dDJEKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0MkQgPSBuZXcgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQyRC5faW5uZXJDYW52YXMgPSB0aGlzO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dDJEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfZGF0YVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb250ZXh0MkQgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2RhdGFJbm5lcikge1xuICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fY29udGV4dDJELl9nZXREYXRhKCk7XG4gICAgICAgICAgdGhpcy5fZGF0YUlubmVyID0gbmV3IF9JbWFnZURhdGFbXCJkZWZhdWx0XCJdKGRhdGEsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUlubmVyO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbGllbnRXaWR0aFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpZHRoO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbGllbnRIZWlnaHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIndpZHRoXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHdpZHRoKSB7XG4gICAgICAgIHdpZHRoID0gcGFyc2VJbnQod2lkdGgpO1xuICAgICAgICBpZiAoaXNOYU4od2lkdGgpKSB7XG4gICAgICAgICAgd2lkdGggPSBDQU5WQVNfREVGQVVMVF9XSURUSDtcbiAgICAgICAgfSBlbHNlIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICB3aWR0aCA9IENBTlZBU19ERUZBVUxUX1dJRFRIO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuX2FsaWdubWVudCA9IHRoaXMuX3dpZHRoICUgMiA9PT0gMCA/IDggOiA0O1xuICAgICAgICBpZiAodGhpcy5fY29udGV4dDJEKSB7XG4gICAgICAgICAgdGhpcy5fY29udGV4dDJELl93aWR0aCA9IHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGFJbm5lciA9IG51bGw7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImhlaWdodFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoaGVpZ2h0KSB7XG4gICAgICAgIGhlaWdodCA9IHBhcnNlSW50KGhlaWdodCk7XG4gICAgICAgIGlmIChpc05hTihoZWlnaHQpKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gQ0FOVkFTX0RFRkFVTFRfSEVJR0hUO1xuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICBoZWlnaHQgPSBDQU5WQVNfREVGQVVMVF9IRUlHSFQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBpZiAodGhpcy5fY29udGV4dDJEKSB7XG4gICAgICAgICAgdGhpcy5fY29udGV4dDJELl9oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGF0YUlubmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XSk7XG4gIH0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuICBtb2R1bGUuZXhwb3J0cyA9IF9IVE1MQ2FudmFzRWxlbWVudDtcbn1cblxufSx7XCIuL0hUTUxFbGVtZW50XCI6MTgsXCIuL0ltYWdlRGF0YVwiOjI4fV0sMTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0VsZW1lbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgSFRNTEVsZW1lbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfRWxlbWVudCkge1xuICBmdW5jdGlvbiBIVE1MRWxlbWVudCh0YWdOYW1lKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MRWxlbWVudCk7XG4gICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIEhUTUxFbGVtZW50LCBbdGFnTmFtZV0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJjbGFzc05hbWVcIiwgJycpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJjaGlsZGVyblwiLCBbXSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcInN0eWxlXCIsIHtcbiAgICAgIHdpZHRoOiBcIlwiLmNvbmNhdCh3aW5kb3cuaW5uZXJXaWR0aCwgXCJweFwiKSxcbiAgICAgIGhlaWdodDogXCJcIi5jb25jYXQod2luZG93LmlubmVySGVpZ2h0LCBcInB4XCIpXG4gICAgfSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcImluc2VydEJlZm9yZVwiLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcImlubmVySFRNTFwiLCAnJyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9pbmhlcml0cyhIVE1MRWxlbWVudCwgX0VsZW1lbnQpO1xuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEhUTUxFbGVtZW50LCBbe1xuICAgIGtleTogXCJzZXRBdHRyaWJ1dGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEF0dHJpYnV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXNbbmFtZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsaWVudFdpZHRoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcmV0ID0gcGFyc2VJbnQodGhpcy5zdHlsZS5mb250U2l6ZSwgMTApICogdGhpcy5pbm5lckhUTUwubGVuZ3RoO1xuICAgICAgcmV0dXJuIE51bWJlci5pc05hTihyZXQpID8gMCA6IHJldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xpZW50SGVpZ2h0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcmV0ID0gcGFyc2VJbnQodGhpcy5zdHlsZS5mb250U2l6ZSwgMTApO1xuICAgICAgcmV0dXJuIE51bWJlci5pc05hTihyZXQpID8gMCA6IHJldDtcbiAgICB9XG4gIH1dKTtcbn0oX0VsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9FbGVtZW50XCI6OX1dLDE5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnQuanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgSFRNTEhlYWRFbGVtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gIGZ1bmN0aW9uIEhUTUxIZWFkRWxlbWVudChwYXJlbnROb2RlKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MSGVhZEVsZW1lbnQpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBIVE1MSGVhZEVsZW1lbnQsIFtcIkhFQURcIl0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJwYXJlbnROb2RlXCIsIG51bGwpO1xuICAgIF90aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfaW5oZXJpdHMoSFRNTEhlYWRFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEhUTUxIZWFkRWxlbWVudCk7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0hUTUxFbGVtZW50LmpzXCI6MTh9XSwyMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgSFRNTEh0bWxFbGVtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gIGZ1bmN0aW9uIEhUTUxIdG1sRWxlbWVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTEh0bWxFbGVtZW50KTtcbiAgICByZXR1cm4gX2NhbGxTdXBlcih0aGlzLCBIVE1MSHRtbEVsZW1lbnQsIFtcIkhUTUxcIl0pO1xuICB9XG4gIF9pbmhlcml0cyhIVE1MSHRtbEVsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoSFRNTEh0bWxFbGVtZW50LCBbe1xuICAgIGtleTogXCJ2ZXJzaW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1dKTtcbn0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vSFRNTEVsZW1lbnRcIjoxOH1dLDIxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnRcIikpO1xudmFyIF9FdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmlmIChyYWwuZ2V0RmVhdHVyZVByb3BlcnR5KFwiSFRNTEltYWdlRWxlbWVudFwiLCBcInNwZWNcIikgPT09IFwidml2b19wbGF0Zm9ybV9zdXBwb3J0XCIpIHtcbiAgdmFyIEhUTUxJbWFnZUVsZW1lbnQgPSB3aW5kb3cuSFRNTEltYWdlRWxlbWVudDtcbiAgbW9kdWxlLmV4cG9ydHMgPSBIVE1MSW1hZ2VFbGVtZW50O1xufSBlbHNlIHtcbiAgd2luZG93LnJhbCA9IHdpbmRvdy5yYWwgfHwge307XG4gIHZhciBfY3JldGVJbWFnZSA9IHJhbC5jcmVhdGVJbWFnZTtcbiAgdmFyIF9pbWFnZTtcbiAgdmFyIF9zZXR0ZXI7XG4gIHZhciBfZ2V0dGVyO1xuICBpZiAodHlwZW9mIHJhbC5nZXRGZWF0dXJlUHJvcGVydHkoXCJyYWwuY3JlYXRlSW1hZ2VcIiwgXCJzcGVjXCIpID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgX2ltYWdlID0gX2NyZXRlSW1hZ2UoKTtcbiAgICB2YXIgX2Rlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9pbWFnZS5fX3Byb3RvX18sIFwic3JjXCIpO1xuICAgIF9zZXR0ZXIgPSBfZGVzY3JpcHRvci5zZXQ7XG4gICAgX2dldHRlciA9IF9kZXNjcmlwdG9yLmdldDtcbiAgfVxuICB2YXIgX0hUTUxJbWFnZUVsZW1lbnQgPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gICAgZnVuY3Rpb24gX0hUTUxJbWFnZUVsZW1lbnQod2lkdGgsIGhlaWdodCwgaXNDYWxsZWRGcm9tSW1hZ2UpIHtcbiAgICAgIHZhciBfdGhpcztcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfSFRNTEltYWdlRWxlbWVudCk7XG4gICAgICBpZiAoIWlzQ2FsbGVkRnJvbUltYWdlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGNvbnN0cnVjdG9yLCB1c2UgJ25ldyBJbWFnZSh3LCBoKTsgaW5zdGVhZCEnXCIpO1xuICAgICAgfVxuICAgICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIF9IVE1MSW1hZ2VFbGVtZW50LCBbJ0lNRyddKTtcbiAgICAgIF90aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICBfdGhpcy5jcm9zc09yaWdpbiA9IG51bGw7XG4gICAgICBfdGhpcy5uYXR1cmFsV2lkdGggPSAwO1xuICAgICAgX3RoaXMubmF0dXJhbEhlaWdodCA9IDA7XG4gICAgICBfdGhpcy53aWR0aCA9IHdpZHRoIHx8IDA7XG4gICAgICBfdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgMDtcbiAgICAgIGlmICh0eXBlb2YgcmFsLmdldEZlYXR1cmVQcm9wZXJ0eShcInJhbC5jcmVhdGVJbWFnZVwiLCBcInNwZWNcIikgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFyIGltYWdlID0gX2NyZXRlSW1hZ2UoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoX3RoaXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIGltYWdlW2tleV0gPSB0aGlzW2tleV07XG4gICAgICAgIH0uYmluZChfdGhpcykpO1xuICAgICAgICBpbWFnZS5fb25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMubmF0dXJhbFdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgICB0aGlzLm5hdHVyYWxIZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkXCIpKTtcbiAgICAgICAgfS5iaW5kKGltYWdlKTtcbiAgICAgICAgaW1hZ2UuX29uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwiZXJyb3JcIikpO1xuICAgICAgICB9LmJpbmQoaW1hZ2UpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW1hZ2UsIFwic3JjXCIsIHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfZ2V0dGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIF9zZXR0ZXIuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBpbWFnZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIF9pbmhlcml0cyhfSFRNTEltYWdlRWxlbWVudCwgX0hUTUxFbGVtZW50KTtcbiAgICByZXR1cm4gX2NyZWF0ZUNsYXNzKF9IVE1MSW1hZ2VFbGVtZW50LCBbe1xuICAgICAga2V5OiBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBET01SZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3JjXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NyYztcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldChzcmMpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3NyYyA9IHNyYztcbiAgICAgICAgaWYgKHNyYyA9PT0gXCJcIikge1xuICAgICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgICB0aGlzLl9kYXRhID0gbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbWFnZU1ldGEgPSBudWxsO1xuICAgICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX2dsRm9ybWF0ID0gdGhpcy5fZ2xJbnRlcm5hbEZvcm1hdCA9IDB4MTkwODtcbiAgICAgICAgICB0aGlzLmNyb3NzT3JpZ2luID0gbnVsbDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmFsLmxvYWRJbWFnZURhdGEoc3JjLCBmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgdmFyIF9ldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKCdlcnJvcicpO1xuICAgICAgICAgICAgX3RoaXMyLmRpc3BhdGNoRXZlbnQoX2V2ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3RoaXMyLl9pbWFnZU1ldGEgPSBpbmZvO1xuICAgICAgICAgIF90aGlzMi53aWR0aCA9IF90aGlzMi5uYXR1cmFsV2lkdGggPSBpbmZvLndpZHRoO1xuICAgICAgICAgIF90aGlzMi5oZWlnaHQgPSBfdGhpczIubmF0dXJhbEhlaWdodCA9IGluZm8uaGVpZ2h0O1xuICAgICAgICAgIF90aGlzMi5fZGF0YSA9IGluZm8uZGF0YTtcbiAgICAgICAgICBfdGhpczIuX2dsRm9ybWF0ID0gaW5mby5nbEZvcm1hdDtcbiAgICAgICAgICBfdGhpczIuX2dsSW50ZXJuYWxGb3JtYXQgPSBpbmZvLmdsSW50ZXJuYWxGb3JtYXQ7XG4gICAgICAgICAgX3RoaXMyLl9nbFR5cGUgPSBpbmZvLmdsVHlwZTtcbiAgICAgICAgICBfdGhpczIuX251bWJlck9mTWlwbWFwcyA9IGluZm8ubnVtYmVyT2ZNaXBtYXBzO1xuICAgICAgICAgIF90aGlzMi5fY29tcHJlc3NlZCA9IGluZm8uY29tcHJlc3NlZDtcbiAgICAgICAgICBfdGhpczIuX2JwcCA9IGluZm8uYnBwO1xuICAgICAgICAgIF90aGlzMi5fcHJlbXVsdGlwbHlBbHBoYSA9IGluZm8ucHJlbXVsdGlwbHlBbHBoYTtcbiAgICAgICAgICBfdGhpczIuX2FsaWdubWVudCA9IDE7XG4gICAgICAgICAgaWYgKChfdGhpczIuX251bWJlck9mTWlwbWFwcyA9PSAwIHx8IF90aGlzMi5fbnVtYmVyT2ZNaXBtYXBzID09IDEpICYmICFfdGhpczIuX2NvbXByZXNzZWQpIHtcbiAgICAgICAgICAgIHZhciBieXRlc1BlclJvdyA9IF90aGlzMi53aWR0aCAqIF90aGlzMi5fYnBwIC8gODtcbiAgICAgICAgICAgIGlmIChieXRlc1BlclJvdyAlIDggPT0gMCkgX3RoaXMyLl9hbGlnbm1lbnQgPSA4O2Vsc2UgaWYgKGJ5dGVzUGVyUm93ICUgNCA9PSAwKSBfdGhpczIuX2FsaWdubWVudCA9IDQ7ZWxzZSBpZiAoYnl0ZXNQZXJSb3cgJSAyID09IDApIF90aGlzMi5fYWxpZ25tZW50ID0gMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3RoaXMyLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXSgnbG9hZCcpO1xuICAgICAgICAgIF90aGlzMi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsaWVudFdpZHRoXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsaWVudEhlaWdodFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgICAgIH1cbiAgICB9XSk7XG4gIH0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuICBtb2R1bGUuZXhwb3J0cyA9IF9IVE1MSW1hZ2VFbGVtZW50O1xufVxuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vSFRNTEVsZW1lbnRcIjoxOH1dLDIyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXQoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkgeyBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpOyB9IGVsc2UgeyBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikgeyB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpOyBpZiAoIWJhc2UpIHJldHVybjsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTsgaWYgKGRlc2MuZ2V0KSB7IHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjLnZhbHVlOyB9OyB9IHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHsgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHsgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrOyB9IHJldHVybiBvYmplY3Q7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbndpbmRvdy5yYWwgPSB3aW5kb3cucmFsIHx8IHt9O1xudmFyIEhUTUxJbnB1dEVsZW1lbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgZnVuY3Rpb24gSFRNTElucHV0RWxlbWVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTElucHV0RWxlbWVudCk7XG4gICAgcmV0dXJuIF9jYWxsU3VwZXIodGhpcywgSFRNTElucHV0RWxlbWVudCwgW1wiSU5QVVRcIl0pO1xuICB9XG4gIF9pbmhlcml0cyhIVE1MSW5wdXRFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEhUTUxJbnB1dEVsZW1lbnQsIFt7XG4gICAga2V5OiBcImZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUpLCBcImZvY3VzXCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICBpZiAoIXRoaXMudGFyZ2V0LmVkaXRhYmxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHZhciBvbktleWJvYXJkSW5wdXQgPSBmdW5jdGlvbiBvbktleWJvYXJkSW5wdXQocmVzKSB7XG4gICAgICAgIHZhciBzdHIgPSByZXMgPyByZXMudmFsdWUgOiBcIlwiO1xuICAgICAgICB0aGF0LmlucHV0VGFyZ2V0LnRleHQgPSBzdHI7XG4gICAgICAgIHRoYXQudGFyZ2V0LmV2ZW50KFwiaW5wdXRcIik7XG4gICAgICB9O1xuICAgICAgdmFyIG9uS2V5Ym9hcmRDb25maXJtID0gZnVuY3Rpb24gb25LZXlib2FyZENvbmZpcm0ocmVzKSB7XG4gICAgICAgIHZhciBzdHIgPSByZXMgPyByZXMudmFsdWUgOiBcIlwiO1xuICAgICAgICB0aGF0LnRhcmdldC50ZXh0ID0gc3RyO1xuICAgICAgICB0aGF0LnRhcmdldC5ldmVudChcImlucHV0XCIpO1xuICAgICAgICB0aGF0LnRhcmdldC5mb2N1cyA9IGZhbHNlO1xuICAgICAgICByYWwub2ZmS2V5Ym9hcmRDb25maXJtKG9uS2V5Ym9hcmRDb25maXJtKTtcbiAgICAgICAgcmFsLm9mZktleWJvYXJkSW5wdXQob25LZXlib2FyZElucHV0KTtcbiAgICAgICAgcmFsLmhpZGVLZXlib2FyZCh7fSk7XG4gICAgICB9O1xuICAgICAgcmFsLm9mZktleWJvYXJkSW5wdXQob25LZXlib2FyZElucHV0KTtcbiAgICAgIHJhbC5vZmZLZXlib2FyZENvbmZpcm0ob25LZXlib2FyZENvbmZpcm0pO1xuICAgICAgcmFsLnNob3dLZXlib2FyZCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLm1heExlbmd0aCxcbiAgICAgICAgbXVsdGlwbGU6IHRoaXMudGFyZ2V0Lm11bHRpbGluZSxcbiAgICAgICAgY29uZmlybUhvbGQ6IGZhbHNlLFxuICAgICAgICBpbnB1dFR5cGU6IHRoaXMudGFyZ2V0LnR5cGUsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7fSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChyZXMpIHt9XG4gICAgICB9KTtcbiAgICAgIHJhbC5vbktleWJvYXJkSW5wdXQob25LZXlib2FyZElucHV0KTtcbiAgICAgIHJhbC5vbktleWJvYXJkQ29uZmlybShvbktleWJvYXJkQ29uZmlybSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlKSwgXCJibHVyXCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICByYWwuaGlkZUtleWJvYXJkKHt9KTtcbiAgICB9XG4gIH1dKTtcbn0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vSFRNTEVsZW1lbnRcIjoxOH1dLDIzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnRcIikpO1xudmFyIF9NZWRpYUVycm9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZWRpYUVycm9yXCIpKTtcbnZhciBfV2Vha01hcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9XZWFrTWFwXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIEhUTUxNZWRpYUVsZW1lbnQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgZnVuY3Rpb24gSFRNTE1lZGlhRWxlbWVudCh1cmwsIHR5cGUpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxNZWRpYUVsZW1lbnQpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBIVE1MTWVkaWFFbGVtZW50LCBbdHlwZV0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJhdWRpb1RyYWNrc1wiLCB1bmRlZmluZWQpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJhdXRvcGxheVwiLCBmYWxzZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcImNvbnRyb2xsZXJcIiwgbnVsbCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcImNvbnRyb2xzXCIsIGZhbHNlKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwiY3Jvc3NPcmlnaW5cIiwgbnVsbCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcImRlZmF1bHRNdXRlZFwiLCBmYWxzZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcImRlZmF1bHRQbGF5YmFja1JhdGVcIiwgMS4wKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwibWVkaWFHcm91cFwiLCB1bmRlZmluZWQpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJtZWRpYUtleXNcIiwgbnVsbCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcIm1vekF1ZGlvQ2hhbm5lbFR5cGVcIiwgdW5kZWZpbmVkKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwibXV0ZWRcIiwgZmFsc2UpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJuZXR3b3JrU3RhdGVcIiwgSFRNTE1lZGlhRWxlbWVudC5ORVRXT1JLX0VNUFRZKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwicGxheWJhY2tSYXRlXCIsIDEpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwibG9vcFwiLCBmYWxzZSk7XG4gICAgT2JqZWN0LmFzc2lnbihfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF90aGlzKSwge1xuICAgICAgYnVmZmVyZWQ6IHVuZGVmaW5lZCxcbiAgICAgIGN1cnJlbnRTcmM6IHVybCB8fCBcIlwiLFxuICAgICAgZHVyYXRpb246IDAsXG4gICAgICBlbmRlZDogZmFsc2UsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIGluaXRpYWxUaW1lOiAwLFxuICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgcmVhZHlTdGF0ZTogSFRNTE1lZGlhRWxlbWVudC5IQVZFX05PVEhJTkcsXG4gICAgICB2b2x1bWU6IDEuMCxcbiAgICAgIGN1cnJlbnRUaW1lOiAwXG4gICAgfSk7XG4gICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZW5kZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJwbGF5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZW5kZWQgPSBmYWxzZTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZXJyb3IgPSBudWxsO1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5wYXVzZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBfdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5lcnJvciA9IHRydWU7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmVuZGVkID0gdHJ1ZTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykucGF1c2VkID0gZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9pbmhlcml0cyhIVE1MTWVkaWFFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEhUTUxNZWRpYUVsZW1lbnQsIFt7XG4gICAga2V5OiBcImN1cnJlbnRUaW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5jdXJyZW50VGltZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmN1cnJlbnRUaW1lID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNyY1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuY3VycmVudFNyYztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmN1cnJlbnRTcmMgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYnVmZmVyZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmJ1ZmZlcmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjdXJyZW50U3JjXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5jdXJyZW50U3JjO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkdXJhdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZHVyYXRpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVuZGVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5lbmRlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXJyb3JcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmVycm9yO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbml0aWFsVGltZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5pdGlhbFRpbWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBhdXNlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykucGF1c2VkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2b2x1bWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLnZvbHVtZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLnZvbHVtZSA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5QbGF5VHlwZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5QbGF5VHlwZShtZWRpYVR5cGUpIHtcbiAgICAgIHJldHVybiAnbWF5YmUnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYXB0dXJlU3RyZWFtXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhcHR1cmVTdHJlYW0oKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImZhc3RTZWVrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZhc3RTZWVrKCkge31cbiAgfSwge1xuICAgIGtleTogXCJsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInBhdXNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge31cbiAgfSwge1xuICAgIGtleTogXCJwbGF5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7fVxuICB9XSwgW3tcbiAgICBrZXk6IFwiTkVUV09SS19FTVBUWVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIk5FVFdPUktfSURMRVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIk5FVFdPUktfTE9BRElOR1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIk5FVFdPUktfTk9fU09VUkNFXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gMztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiSEFWRV9OT1RISU5HXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiSEFWRV9NRVRBREFUQVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkhBVkVfQ1VSUkVOVF9EQVRBXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiSEFWRV9GVVRVUkVfREFUQVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkhBVkVfRU5PVUdIX0RBVEFcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiA0O1xuICAgIH1cbiAgfV0pO1xufShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9IVE1MRWxlbWVudFwiOjE4LFwiLi9NZWRpYUVycm9yXCI6MzAsXCIuL3V0aWwvV2Vha01hcFwiOjU1fV0sMjQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG52YXIgX0ZpbGVDYWNoZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9GaWxlQ2FjaGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgX0JBU0U2NF9OQU1FID0gXCJkYXRhOmFwcGxpY2F0aW9uL2phdmFzY3JpcHQ7YmFzZTY0LFwiO1xudmFyIF9VUklfTkFNRSA9IFwiZGF0YTphcHBsaWNhdGlvbi9qYXZhc2NyaXB0LFwiO1xudmFyIF9nZXRQYXRoRnJvbUJhc2U2NFN0cmluZyA9IGZ1bmN0aW9uIF9nZXRQYXRoRnJvbUJhc2U2NFN0cmluZyhzcmMpIHtcbiAgaWYgKHNyYyA9PT0gbnVsbCB8fCBzcmMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzcmM7XG4gIH1cbiAgaWYgKHNyYy5zdGFydHNXaXRoKF9CQVNFNjRfTkFNRSkpIHtcbiAgICB2YXIgY29udGVudCA9IHNyYy5zdWJzdHJpbmcoX0JBU0U2NF9OQU1FLmxlbmd0aCk7XG4gICAgdmFyIHNvdXJjZSA9IHdpbmRvdy5hdG9iKGNvbnRlbnQpO1xuICAgIHZhciBsZW4gPSBzb3VyY2UubGVuZ3RoO1xuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICByZXR1cm4gX2dldERpc2tQYXRoRnJvbUFycmF5QnVmZmVyKHNvdXJjZSwgbGVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNyYztcbiAgICB9XG4gIH0gZWxzZSBpZiAoc3JjLnN0YXJ0c1dpdGgoX1VSSV9OQU1FKSkge1xuICAgIHZhciBfY29udGVudCA9IHNyYy5zdWJzdHJpbmcoX1VSSV9OQU1FLmxlbmd0aCk7XG4gICAgdmFyIF9zb3VyY2UgPSBkZWNvZGVVUklDb21wb25lbnQoX2NvbnRlbnQpO1xuICAgIHZhciBfbGVuID0gX3NvdXJjZS5sZW5ndGg7XG4gICAgaWYgKF9sZW4gPiAwKSB7XG4gICAgICByZXR1cm4gX2dldERpc2tQYXRoRnJvbUFycmF5QnVmZmVyKF9zb3VyY2UsIF9sZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3JjO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3JjO1xuICB9XG59O1xuZnVuY3Rpb24gX2dldERpc2tQYXRoRnJvbUFycmF5QnVmZmVyKHNvdXJjZSwgbGVuKSB7XG4gIHZhciBhcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihsZW4pO1xuICB2YXIgdWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHVpbnQ4QXJyYXlbaV0gPSBzb3VyY2UuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gX0ZpbGVDYWNoZVtcImRlZmF1bHRcIl0uZ2V0Q2FjaGUoYXJyYXlCdWZmZXIpO1xufVxudmFyIEhUTUxTY3JpcHRFbGVtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gIGZ1bmN0aW9uIEhUTUxTY3JpcHRFbGVtZW50KCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTFNjcmlwdEVsZW1lbnQpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBIVE1MU2NyaXB0RWxlbWVudCwgWydTQ1JJUFQnXSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcIm5vTW9kdWxlXCIsIGZhbHNlKTtcbiAgICB2YXIgc2VsZiA9IF90aGlzO1xuICAgIHZhciBvbkFwcGVuZCA9IGZ1bmN0aW9uIG9uQXBwZW5kKCkge1xuICAgICAgc2VsZi5yZW1vdmVFdmVudExpc3RlbmVyKFwiYXBwZW5kXCIsIG9uQXBwZW5kKTtcbiAgICAgIHZhciBzcmMgPSBfZ2V0UGF0aEZyb21CYXNlNjRTdHJpbmcoc2VsZi5zcmMpO1xuICAgICAgcmVxdWlyZShzcmMpO1xuICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKCdsb2FkJykpO1xuICAgIH07XG4gICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImFwcGVuZFwiLCBvbkFwcGVuZCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9pbmhlcml0cyhIVE1MU2NyaXB0RWxlbWVudCwgX0hUTUxFbGVtZW50KTtcbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhIVE1MU2NyaXB0RWxlbWVudCk7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MU2NyaXB0RWxlbWVudC5wcm90b3R5cGUsIFwibm9Nb2R1bGVcIiwge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG1lc3NhZ2UsIFwiSWxsZWdhbCBpbnZvY2F0aW9uXCIpO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IobWVzc2FnZSwgXCJJbGxlZ2FsIGludm9jYXRpb25cIik7XG4gIH1cbn0pO1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vSFRNTEVsZW1lbnRcIjoxOCxcIi4vdXRpbC9GaWxlQ2FjaGVcIjo1NH1dLDI1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0ZvbnRGYWNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb250RmFjZVwiKSk7XG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbnZhciBIVE1MU3R5bGVFbGVtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gIGZ1bmN0aW9uIEhUTUxTdHlsZUVsZW1lbnQoKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MU3R5bGVFbGVtZW50KTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgSFRNTFN0eWxlRWxlbWVudCwgW1wiU1RZTEVcIl0pO1xuICAgIHZhciBzZWxmID0gX3RoaXM7XG4gICAgdmFyIG9uQXBwZW5kID0gZnVuY3Rpb24gb25BcHBlbmQoKSB7XG4gICAgICBzZWxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhcHBlbmRcIiwgb25BcHBlbmQpO1xuICAgICAgdmFyIHRleHRDb250ZW50ID0gc2VsZi50ZXh0Q29udGVudCB8fCBzZWxmLmlubmVySFRNTCB8fCBcIlwiO1xuICAgICAgdmFyIGZvbnRGYWNlU3RyID0gXCJcIjtcbiAgICAgIHZhciBzdGFydCA9IDA7XG4gICAgICB2YXIgbGVuZ3RoID0gdGV4dENvbnRlbnQubGVuZ3RoO1xuICAgICAgdmFyIGZsYWcgPSAwO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICBpZiAoc3RhcnQgPiAwKSB7XG4gICAgICAgICAgaWYgKHRleHRDb250ZW50W2luZGV4XSA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIGZsYWcrKztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRleHRDb250ZW50W2luZGV4XSA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIGZsYWctLTtcbiAgICAgICAgICAgIGlmIChmbGFnID09PSAwKSB7XG4gICAgICAgICAgICAgIGZvbnRGYWNlU3RyID0gdGV4dENvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0LCBpbmRleCArIDEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmxhZyA8IDApIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0ZXh0Q29udGVudFtpbmRleF0gPT09IFwiQFwiICYmIHRleHRDb250ZW50LnN1YnN0cihpbmRleCwgXCJAZm9udC1mYWNlXCIubGVuZ3RoKSA9PT0gXCJAZm9udC1mYWNlXCIpIHtcbiAgICAgICAgICAgIGluZGV4ICs9IDk7XG4gICAgICAgICAgICBzdGFydCA9IGluZGV4ICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb250RmFjZVN0cikge1xuICAgICAgICB2YXIgZm9udEZhbWlseTtcbiAgICAgICAgdmFyIF9sZW5ndGggPSBmb250RmFjZVN0ci5sZW5ndGg7XG4gICAgICAgIHZhciBfc3RhcnQgPSBmb250RmFjZVN0ci5pbmRleE9mKFwiZm9udC1mYW1pbHlcIik7XG4gICAgICAgIGlmIChfc3RhcnQgPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9zdGFydCArPSBcImZvbnQtZmFtaWx5XCIubGVuZ3RoICsgMTtcbiAgICAgICAgdmFyIGVuZCA9IF9zdGFydDtcbiAgICAgICAgZm9yICg7IGVuZCA8IF9sZW5ndGg7ICsrZW5kKSB7XG4gICAgICAgICAgaWYgKGZvbnRGYWNlU3RyW2VuZF0gPT09IFwiO1wiKSB7XG4gICAgICAgICAgICBmb250RmFtaWx5ID0gZm9udEZhY2VTdHIuc3Vic3RyaW5nKF9zdGFydCwgZW5kKS50cmltKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2UgaWYgKGZvbnRGYWNlU3RyW2VuZF0gPT09IFwiOlwiKSB7XG4gICAgICAgICAgICBfc3RhcnQgPSBlbmQgKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvbnRGYW1pbHkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZW5kID0gZm9udEZhY2VTdHIuaW5kZXhPZihcInVybChcIik7XG4gICAgICAgIF9zdGFydCA9IDA7XG4gICAgICAgIHZhciBzb3VyY2U7XG4gICAgICAgIGZvciAoOyBlbmQgPCBfbGVuZ3RoOyArK2VuZCkge1xuICAgICAgICAgIGlmIChmb250RmFjZVN0cltlbmRdID09PSBcIidcIiB8fCBmb250RmFjZVN0cltlbmRdID09PSAnXCInKSB7XG4gICAgICAgICAgICBpZiAoX3N0YXJ0ID4gMCkge1xuICAgICAgICAgICAgICBzb3VyY2UgPSBmb250RmFjZVN0ci5zdWJzdHJpbmcoX3N0YXJ0LCBlbmQpLnRyaW0oKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfc3RhcnQgPSBlbmQgKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgdmFyIGZvbnRGYWNlID0gbmV3IF9Gb250RmFjZVtcImRlZmF1bHRcIl0oZm9udEZhbWlseSwgc291cmNlKTtcbiAgICAgICAgICBmb250RmFjZS5sb2FkKCk7XG4gICAgICAgICAgZG9jdW1lbnQuZm9udHMuYWRkKGZvbnRGYWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImFwcGVuZFwiLCBvbkFwcGVuZCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9pbmhlcml0cyhIVE1MU3R5bGVFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEhUTUxTdHlsZUVsZW1lbnQpO1xufShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9Gb250RmFjZVwiOjEyLFwiLi9IVE1MRWxlbWVudFwiOjE4fV0sMjY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfSFRNTE1lZGlhRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxNZWRpYUVsZW1lbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbnZhciBIVE1MVmlkZW9FbGVtZW50ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoX0hUTUxNZWRpYUVsZW1lbnQpIHtcbiAgZnVuY3Rpb24gSFRNTFZpZGVvRWxlbWVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTFZpZGVvRWxlbWVudCk7XG4gICAgcmV0dXJuIF9jYWxsU3VwZXIodGhpcywgSFRNTFZpZGVvRWxlbWVudCwgWydWSURFTyddKTtcbiAgfVxuICBfaW5oZXJpdHMoSFRNTFZpZGVvRWxlbWVudCwgX0hUTUxNZWRpYUVsZW1lbnQpO1xuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEhUTUxWaWRlb0VsZW1lbnQsIFt7XG4gICAga2V5OiBcImNhblBsYXlUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblBsYXlUeXBlKHR5cGUpIHtcbiAgICAgIHJldHVybiB0eXBlID09PSAndmlkZW8vbXA0JztcbiAgICB9XG4gIH1dKTtcbn0oX0hUTUxNZWRpYUVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbn0se1wiLi9IVE1MTWVkaWFFbGVtZW50XCI6MjN9XSwyNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxudmFyIF9IVE1MSW1hZ2VFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEltYWdlRWxlbWVudFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuaWYgKHJhbC5nZXRGZWF0dXJlUHJvcGVydHkoXCJJbWFnZVwiLCBcInNwZWNcIikgPT09IFwidml2b19wbGF0Zm9ybV9zdXBwb3J0XCIpIHtcbiAgdmFyIEltYWdlID0gd2luZG93LkltYWdlO1xuICBtb2R1bGUuZXhwb3J0cyA9IEltYWdlO1xufSBlbHNlIHtcbiAgdmFyIF9JbWFnZSA9IHdpbmRvdy5JbWFnZTtcbiAgdmFyIF9JbWFnZTIgPSBmdW5jdGlvbiAoX0hUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICBmdW5jdGlvbiBfSW1hZ2UyKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfSW1hZ2UyKTtcbiAgICAgIHJldHVybiBfY2FsbFN1cGVyKHRoaXMsIF9JbWFnZTIsIFt3aWR0aCwgaGVpZ2h0LCB0cnVlXSk7XG4gICAgfVxuICAgIF9pbmhlcml0cyhfSW1hZ2UyLCBfSFRNTEltYWdlRWxlbWVudCk7XG4gICAgcmV0dXJuIF9jcmVhdGVDbGFzcyhfSW1hZ2UyKTtcbiAgfShfSFRNTEltYWdlRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcbiAgdmFyIF9jcmV0ZUltYWdlID0gcmFsLmNyZWF0ZUltYWdlO1xuICBpZiAoX2NyZXRlSW1hZ2UpIHtcbiAgICBfSW1hZ2UucHJvdG90eXBlLl9fcHJvdG9fXyA9IF9JbWFnZTIucHJvdG90eXBlO1xuICB9XG4gIG1vZHVsZS5leHBvcnRzID0gX0ltYWdlMjtcbn1cblxufSx7XCIuL0hUTUxJbWFnZUVsZW1lbnRcIjoyMX1dLDI4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIEltYWdlRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSW1hZ2VEYXRhKGFycmF5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEltYWdlRGF0YSk7XG4gICAgaWYgKHR5cGVvZiBhcnJheSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHdpZHRoID09ICdudW1iZXInKSB7XG4gICAgICBoZWlnaHQgPSB3aWR0aDtcbiAgICAgIHdpZHRoID0gYXJyYXk7XG4gICAgICBhcnJheSA9IG51bGw7XG4gICAgfVxuICAgIGlmIChhcnJheSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fZGF0YSA9IG5ldyBVaW50OENsYW1wZWRBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gYXJyYXk7XG4gICAgfVxuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoSW1hZ2VEYXRhLCBbe1xuICAgIGtleTogXCJkYXRhXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid2lkdGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGVpZ2h0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgIH1cbiAgfV0pO1xufSgpO1xubW9kdWxlLmV4cG9ydHMgPSBJbWFnZURhdGE7XG5cbn0se31dLDI5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbnZhciBMb2NhdGlvbiA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMb2NhdGlvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYXRpb24pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFuY2VzdG9yT3JpZ2luc1wiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoYXNoXCIsIFwiXCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhvc3RcIiwgXCJcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaG9zdG5hbWVcIiwgXCJcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaHJlZlwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvcmlnaW5cIiwgXCJcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicGFzc3dvcmRcIiwgXCJcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicGF0aG5hbWVcIiwgXCJcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicG9ydFwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwcm90b2NvbFwiLCBcIlwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzZWFyY2hcIiwgXCJcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidXNlcm5hbWVcIiwgXCJcIik7XG4gIH1cbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhMb2NhdGlvbiwgW3tcbiAgICBrZXk6IFwiYXNzaWduXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFzc2lnbigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbG9hZCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVwbGFjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlKCkge31cbiAgfSwge1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfV0pO1xufSgpO1xuXG59LHt9XSwzMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbnZhciBNRURJQV9FUlJfQUJPUlRFRCA9IDE7XG52YXIgTUVESUFfRVJSX05FVFdPUksgPSAyO1xudmFyIE1FRElBX0VSUl9ERUNPREUgPSAzO1xudmFyIE1FRElBX0VSUl9TUkNfTk9UX1NVUFBPUlRFRCA9IDQ7XG52YXIgTWVkaWFFcnJvciA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNZWRpYUVycm9yKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZWRpYUVycm9yKTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKE1lZGlhRXJyb3IsIFt7XG4gICAga2V5OiBcImNvZGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBNRURJQV9FUlJfQUJPUlRFRDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWVzc2FnZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XSk7XG59KCk7XG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhRXJyb3I7XG5cbn0se31dLDMxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbnZhciBOYXZpZ2F0b3IgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9jcmVhdGVDbGFzcyhmdW5jdGlvbiBOYXZpZ2F0b3IocGxhdGZvcm0sIGxhbmd1YWdlKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOYXZpZ2F0b3IpO1xuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwbGF0Zm9ybVwiLCBcIlwiKTtcbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibGFuZ3VhZ2VcIiwgXCJcIik7XG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFwcFZlcnNpb25cIiwgJzUuMCAoaVBob25lOyBDUFUgaVBob25lIE9TIDlfMSBsaWtlIE1hYyBPUyBYKSBBcHBsZVdlYktpdC82MDEuMS40NiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vOS4wIE1vYmlsZS8xM0IxNDMgU2FmYXJpLzYwMS4xJyk7XG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInVzZXJBZ2VudFwiLCAnTW96aWxsYS81LjAgKGlQaG9uZTsgQ1BVIGlQaG9uZSBPUyAxMF8zXzEgbGlrZSBNYWMgT1MgWCkgQXBwbGVXZWJLaXQvNjAzLjEuMzAgKEtIVE1MLCBsaWtlIEdlY2tvKSBNb2JpbGUvMTRFODMwMSBOZXRUeXBlL1dJRkkgTGFuZ3VhZ2UvemhfQ04nKTtcbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib25MaW5lXCIsIHRydWUpO1xuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtYXhUb3VjaFBvaW50c1wiLCAxMCk7XG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdlb2xvY2F0aW9uXCIsIHtcbiAgICBnZXRDdXJyZW50UG9zaXRpb246IGZ1bmN0aW9uIGdldEN1cnJlbnRQb3NpdGlvbigpIHt9LFxuICAgIHdhdGNoUG9zaXRpb246IGZ1bmN0aW9uIHdhdGNoUG9zaXRpb24oKSB7fSxcbiAgICBjbGVhcldhdGNoOiBmdW5jdGlvbiBjbGVhcldhdGNoKCkge31cbiAgfSk7XG4gIHRoaXMucGxhdGZvcm0gPSBwbGF0Zm9ybTtcbiAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xufSk7XG5cbn0se31dLDMyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0V2ZW50VGFyZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRUYXJnZXRcIikpO1xudmFyIF9FdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCk7IH0gZWxzZSB7IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7IGlmICghYmFzZSkgcmV0dXJuOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpOyBpZiAoZGVzYy5nZXQpIHsgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7IH0gcmV0dXJuIGRlc2MudmFsdWU7IH07IH0gcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkgeyB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkgeyBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7IH0gcmV0dXJuIG9iamVjdDsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgTm9kZSA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICBmdW5jdGlvbiBOb2RlKG5vZGVOYW1lKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlKTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgTm9kZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcImNoaWxkTm9kZXNcIiwgW10pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJwYXJlbnROb2RlXCIsIG51bGwpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJfbm9kZU5hbWVcIiwgXCJcIik7XG4gICAgX3RoaXMuX25vZGVOYW1lID0gbm9kZU5hbWU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9pbmhlcml0cyhOb2RlLCBfRXZlbnRUYXJnZXQpO1xuICByZXR1cm4gX2NyZWF0ZUNsYXNzKE5vZGUsIFt7XG4gICAga2V5OiBcImFwcGVuZENoaWxkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZENoaWxkKG5vZGUpIHtcbiAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgbm9kZS5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgIHZhciBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWU7XG4gICAgICBpZiAobm9kZU5hbWUgPT09IFwiU0NSSVBUXCIgfHwgbm9kZU5hbWUgPT09IFwiU1RZTEVcIikge1xuICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJhcHBlbmRcIikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsb25lTm9kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZU5vZGUoKSB7XG4gICAgICB2YXIgY29weU5vZGUgPSBPYmplY3QuY3JlYXRlKHRoaXMpO1xuICAgICAgT2JqZWN0LmFzc2lnbihjb3B5Tm9kZSwgdGhpcyk7XG4gICAgICBjb3B5Tm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgIHJldHVybiBjb3B5Tm9kZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQ2hpbGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSkge1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmZpbmRJbmRleChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkID09PSBub2RlO1xuICAgICAgfSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB2YXIgX25vZGUgPSB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKVswXTtcbiAgICAgICAgX25vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIHJldHVybiBfbm9kZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb250YWluc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb250YWlucyhub2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobm9kZSkgPiAtMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzcGF0Y2hFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHRydWU7XG4gICAgICB2YXIgbGVuZ3RoID0gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gbGVuZ3RoIC0gMTsgcmVzdWx0ICYmIGluZGV4ID49IDA7IC0taW5kZXgpIHtcbiAgICAgICAgdmFyIF90aGlzJGNoaWxkTm9kZXMkaW5kZTtcbiAgICAgICAgcmVzdWx0ID0gKF90aGlzJGNoaWxkTm9kZXMkaW5kZSA9IHRoaXMuY2hpbGROb2Rlc1tpbmRleF0pLmRpc3BhdGNoRXZlbnQuYXBwbHkoX3RoaXMkY2hpbGROb2RlcyRpbmRlLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTm9kZS5wcm90b3R5cGUpLCBcImRpc3BhdGNoRXZlbnRcIiwgdGhpcykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibm9kZU5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ub2RlTmFtZTtcbiAgICB9XG4gIH1dKTtcbn0oX0V2ZW50VGFyZ2V0MltcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vRXZlbnRUYXJnZXRcIjoxMX1dLDMzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvV2Vha01hcFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgTm9kZUxpc3QgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm9kZUxpc3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGVMaXN0KTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uc2V0KHRoaXMsIHtcbiAgICAgIGFycmF5OiBbXVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgUHJveHkodGhpcywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgaWYgKF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIikge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICgvXlswLTldKiQvLnRlc3Qoa2V5KSkge1xuICAgICAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRhcmdldCkuYXJyYXlba2V5XTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQuYmluZCh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhOb2RlTGlzdCwgW3tcbiAgICBrZXk6IFwicHVzaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoKGVsZW1lbnQpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXJyYXkucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXRlbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpdGVtKGluZGV4KSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5hcnJheVtpbmRleF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxlbmd0aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXJyYXkubGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb25jYXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29uY2F0KCkge1xuICAgICAgdmFyIGFycmF5ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5hcnJheTtcbiAgICAgIHJldHVybiBhcnJheS5jb25jYXQuYXBwbHkoYXJyYXksIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XSk7XG59KCk7XG5cbn0se1wiLi91dGlsL1dlYWtNYXBcIjo1NX1dLDM0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbndpbmRvdy5yYWwgPSB3aW5kb3cucmFsIHx8IHt9O1xudmFyIFNjcmVlbiA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTY3JlZW4oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNjcmVlbik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXZhaWxUb3BcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXZhaWxMZWZ0XCIsIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImF2YWlsSGVpZ2h0XCIsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXZhaWxXaWR0aFwiLCB3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY29sb3JEZXB0aFwiLCA4KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwaXhlbERlcHRoXCIsIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImxlZnRcIiwgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidG9wXCIsIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndpZHRoXCIsIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoZWlnaHRcIiwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvcmllbnRhdGlvblwiLCB7XG4gICAgICB0eXBlOiAncG9ydHJhaXQtcHJpbWFyeSdcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKFNjcmVlbiwgW3tcbiAgICBrZXk6IFwib25vcmllbnRhdGlvbmNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbm9yaWVudGF0aW9uY2hhbmdlKCkge31cbiAgfV0pO1xufSgpO1xuXG59LHt9XSwzNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9FdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgVG91Y2hFdmVudCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9FdmVudCkge1xuICBmdW5jdGlvbiBUb3VjaEV2ZW50KHR5cGUpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvdWNoRXZlbnQpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBUb3VjaEV2ZW50LCBbdHlwZV0pO1xuICAgIF90aGlzLnRvdWNoZXMgPSBbXTtcbiAgICBfdGhpcy50YXJnZXRUb3VjaGVzID0gW107XG4gICAgX3RoaXMuY2hhbmdlZFRvdWNoZXMgPSBbXTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2luaGVyaXRzKFRvdWNoRXZlbnQsIF9FdmVudCk7XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoVG91Y2hFdmVudCk7XG59KF9FdmVudDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0V2ZW50XCI6MTB9XSwzNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9FdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRcIikpO1xudmFyIF9GaWxlQ2FjaGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvRmlsZUNhY2hlXCIpKTtcbnZhciBfWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbnZhciBmc20gPSByYWwuZ2V0RmlsZVN5c3RlbU1hbmFnZXIoKTtcbnZhciBfWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3Q7XG53aW5kb3cucmFsID0gd2luZG93LnJhbCB8fCB7fTtcbnZhciBYTUxIdHRwUmVxdWVzdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9YTUxIdHRwUmVxdWVzdEV2ZW50VCkge1xuICBmdW5jdGlvbiBYTUxIdHRwUmVxdWVzdCgpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFhNTEh0dHBSZXF1ZXN0KTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgWE1MSHR0cFJlcXVlc3QsIFtuZXcgX1hNTEh0dHBSZXF1ZXN0KCldKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwiX2lzTG9jYWxcIiwgZmFsc2UpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJfcmVhZHlTdGF0ZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJfcmVzcG9uc2VcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwiX3Jlc3BvbnNlVGV4dFwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJfcmVzcG9uc2VVUkxcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwiX3Jlc3BvbnNlWE1MXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KF90aGlzLCBcIl9zdGF0dXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX3RoaXMsIFwiX3N0YXR1c1RleHRcIiwgdm9pZCAwKTtcbiAgICB2YXIgeGhyID0gX3RoaXMuX3hocjtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwicmVhZHlzdGF0ZWNoYW5nZVwiKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG4gICAgfS5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2luaGVyaXRzKFhNTEh0dHBSZXF1ZXN0LCBfWE1MSHR0cFJlcXVlc3RFdmVudFQpO1xuICByZXR1cm4gX2NyZWF0ZUNsYXNzKFhNTEh0dHBSZXF1ZXN0LCBbe1xuICAgIGtleTogXCJyZWFkeVN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5faXNMb2NhbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZHlTdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94aHIucmVhZHlTdGF0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzcG9uc2VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0xvY2FsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94aHIucmVzcG9uc2U7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc3BvbnNlVGV4dFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuX2lzTG9jYWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94aHIucmVzcG9uc2VUZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNwb25zZVR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl94aHIucmVzcG9uc2VUeXBlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzcG9uc2VVUkxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0xvY2FsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVVSTDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94aHIucmVzcG9uc2VVUkw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc3BvbnNlWE1MXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5faXNMb2NhbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VYTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnJlc3BvbnNlWE1MO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0dXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0xvY2FsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnN0YXR1cztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdHVzVGV4dFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuX2lzTG9jYWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXR1c1RleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnN0YXR1c1RleHQ7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRpbWVvdXRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl94aHIudGltZW91dDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLl94aHIudGltZW91dCA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGxvYWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl94aHIudXBsb2FkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3aXRoQ3JlZGVudGlhbHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl94aHIud2l0aENyZWRlbnRpYWxzO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuX3hoci53aXRoQ3JlZGVudGlhbHMgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWJvcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgICB0aGlzLl94aHIuYWJvcnQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbFJlc3BvbnNlSGVhZGVycygpIHtcbiAgICAgIHJldHVybiB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFJlc3BvbnNlSGVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlc3BvbnNlSGVhZGVyKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl94aHIuZ2V0UmVzcG9uc2VIZWFkZXIobmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9wZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbihtZXRob2QsIHVybCwgYXN5bmMsIHVzZXIsIHBhc3N3b3JkKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgX3VybCA9IHVybC50b0xvY2FsZVN0cmluZygpO1xuICAgICAgICBpZiAoX3VybC5zdGFydHNXaXRoKFwiaHR0cDovL1wiKSB8fCBfdXJsLnN0YXJ0c1dpdGgoXCJodHRwczovL1wiKSkge1xuICAgICAgICAgIHZhciBfdGhpcyRfeGhyO1xuICAgICAgICAgIHRoaXMuX2lzTG9jYWwgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gKF90aGlzJF94aHIgPSB0aGlzLl94aHIpLm9wZW4uYXBwbHkoX3RoaXMkX3hociwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5faXNMb2NhbCA9IHRydWU7XG4gICAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm92ZXJyaWRlTWltZVR5cGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3ZlcnJpZGVNaW1lVHlwZSgpIHtcbiAgICAgIHZhciBfdGhpcyRfeGhyMjtcbiAgICAgIHJldHVybiAoX3RoaXMkX3hocjIgPSB0aGlzLl94aHIpLm92ZXJyaWRlTWltZVR5cGUuYXBwbHkoX3RoaXMkX3hocjIsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0xvY2FsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGlzQmluYXJ5ID0gdGhpcy5feGhyLnJlc3BvbnNlVHlwZSA9PT0gXCJhcnJheWJ1ZmZlclwiO1xuICAgICAgICBmc20ucmVhZEZpbGUoe1xuICAgICAgICAgIGZpbGVQYXRoOiB0aGlzLl91cmwsXG4gICAgICAgICAgZW5jb2Rpbmc6IGlzQmluYXJ5ID8gXCJiaW5hcnlcIiA6IFwidXRmOFwiLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICBzZWxmLl9zdGF0dXMgPSAyMDA7XG4gICAgICAgICAgICBzZWxmLl9yZWFkeVN0YXRlID0gNDtcbiAgICAgICAgICAgIHNlbGYuX3Jlc3BvbnNlID0gc2VsZi5fcmVzcG9uc2VUZXh0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBpZiAoaXNCaW5hcnkpIHtcbiAgICAgICAgICAgICAgX0ZpbGVDYWNoZVtcImRlZmF1bHRcIl0uc2V0Q2FjaGUoc2VsZi5fdXJsLCByZXMuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXZlbnRQcm9ncmVzc1N0YXJ0ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJwcm9ncmVzc1wiKTtcbiAgICAgICAgICAgIGV2ZW50UHJvZ3Jlc3NTdGFydC5sb2FkZWQgPSAwO1xuICAgICAgICAgICAgZXZlbnRQcm9ncmVzc1N0YXJ0LnRvdGFsID0gaXNCaW5hcnkgPyByZXMuZGF0YS5ieXRlTGVuZ3RoIDogcmVzLmRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGV2ZW50UHJvZ3Jlc3NFbmQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgZXZlbnRQcm9ncmVzc0VuZC5sb2FkZWQgPSBldmVudFByb2dyZXNzU3RhcnQudG90YWw7XG4gICAgICAgICAgICBldmVudFByb2dyZXNzRW5kLnRvdGFsID0gZXZlbnRQcm9ncmVzc1N0YXJ0LnRvdGFsO1xuICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZHN0YXJ0XCIpKTtcbiAgICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChldmVudFByb2dyZXNzU3RhcnQpO1xuICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50UHJvZ3Jlc3NFbmQpO1xuICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZFwiKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmVyckNvZGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgc2VsZi5fc3RhdHVzID0gNDA0O1xuICAgICAgICAgICAgICBzZWxmLl9yZWFkeVN0YXRlID0gNDtcbiAgICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZHN0YXJ0XCIpKTtcbiAgICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZFwiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJlcnJvclwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkZW5kXCIpKTtcbiAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX3RoaXMkX3hocjM7XG4gICAgICAgIChfdGhpcyRfeGhyMyA9IHRoaXMuX3hocikuc2VuZC5hcHBseShfdGhpcyRfeGhyMywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0UmVxdWVzdEhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKCkge1xuICAgICAgdmFyIF90aGlzJF94aHI0O1xuICAgICAgKF90aGlzJF94aHI0ID0gdGhpcy5feGhyKS5zZXRSZXF1ZXN0SGVhZGVyLmFwcGx5KF90aGlzJF94aHI0LCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfV0pO1xufShfWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFtcImRlZmF1bHRcIl0pO1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFwiOjM3LFwiLi91dGlsL0ZpbGVDYWNoZVwiOjU0fV0sMzc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRXZlbnRUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFRhcmdldFwiKSk7XG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG52YXIgX0ZpbGVDYWNoZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9GaWxlQ2FjaGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICBmdW5jdGlvbiBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0KHhocikge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCk7XG4gICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfdGhpcywgXCJfeGhyXCIsIHZvaWQgMCk7XG4gICAgX3RoaXMuX3hociA9IHhocjtcbiAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImFib3J0XCIpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbiAgICB9LmJpbmQoX3RoaXMpO1xuICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwiZXJyb3JcIik7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xuICAgIH0uYmluZChfdGhpcyk7XG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAodGhpcy5yZXNwb25zZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgIF9GaWxlQ2FjaGVbXCJkZWZhdWx0XCJdLnNldEl0ZW0odGhpcy5yZXNwb25zZSwgdGhpcy5fdXJsKTtcbiAgICAgIH1cbiAgICAgIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZFwiKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG4gICAgfS5iaW5kKF90aGlzKTtcbiAgICB4aHIub25sb2Fkc3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2Fkc3RhcnRcIik7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xuICAgIH0uYmluZChfdGhpcyk7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJwcm9ncmVzc1wiKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG4gICAgfS5iaW5kKF90aGlzKTtcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwidGltZW91dFwiKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG4gICAgfS5iaW5kKF90aGlzKTtcbiAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZGVuZFwiKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG4gICAgfS5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2luaGVyaXRzKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQsIF9FdmVudFRhcmdldCk7XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCk7XG59KF9FdmVudFRhcmdldDJbXCJkZWZhdWx0XCJdKTtcblxufSx7XCIuL0V2ZW50XCI6MTAsXCIuL0V2ZW50VGFyZ2V0XCI6MTEsXCIuL3V0aWwvRmlsZUNhY2hlXCI6NTR9XSwzODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbnZhciBBbmFseXNlck5vZGUgPSBmdW5jdGlvbiAoX0F1ZGlvTm9kZSkge1xuICBmdW5jdGlvbiBBbmFseXNlck5vZGUoY29udGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5hbHlzZXJOb2RlKTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgQW5hbHlzZXJOb2RlLCBbY29udGV4dF0pO1xuICAgIF90aGlzLl9mZnRTaXplO1xuICAgIF90aGlzLmZyZXF1ZW5jeUJpbkNvdW50O1xuICAgIF90aGlzLm1pbkRlY2liZWxzO1xuICAgIF90aGlzLm1heERlY2liZWxzO1xuICAgIF90aGlzLnNtb290aGluZ1RpbWVDb25zdGFudDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2luaGVyaXRzKEFuYWx5c2VyTm9kZSwgX0F1ZGlvTm9kZSk7XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoQW5hbHlzZXJOb2RlLCBbe1xuICAgIGtleTogXCJnZXRGbG9hdEZyZXF1ZW5jeURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RmxvYXRGcmVxdWVuY3lEYXRhKGFycmF5KSB7fVxuICB9LCB7XG4gICAga2V5OiBcImdldEJ5dGVGcmVxdWVuY3lEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5dGVGcmVxdWVuY3lEYXRhKGRhdGFBcnJheSkge1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGFBcnJheS5sZW5ndGgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRGbG9hdFRpbWVEb21haW5EYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZsb2F0VGltZURvbWFpbkRhdGEoZGF0YUFycmF5KSB7fVxuICB9LCB7XG4gICAga2V5OiBcImdldEJ5dGVUaW1lRG9tYWluRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeXRlVGltZURvbWFpbkRhdGEoZGF0YUFycmF5KSB7fVxuICB9LCB7XG4gICAga2V5OiBcImZmdFNpemVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9mZnRTaXplO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuX2ZmdFNpemUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZnJlcXVlbmN5QmluQ291bnQgPSB2YWx1ZSAvIDI7XG4gICAgfVxuICB9XSk7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEFuYWx5c2VyTm9kZTtcblxufSx7XCIuL0F1ZGlvTm9kZVwiOjQ0fV0sMzk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfRmlsZUNhY2hlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbC9GaWxlQ2FjaGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxudmFyIEF1ZGlvQnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBdWRpb0J1ZmZlcihjb250ZXh0LCBidWZmZXIsIGNhbGxiYWNrKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1ZGlvQnVmZmVyKTtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudXJsID0gXCJcIjtcbiAgICB0aGlzLl9zYW1wbGVSYXRlID0gNDgwMDA7XG4gICAgdGhpcy5fbGVuZ3RoID0gMzg2NjgxO1xuICAgIHRoaXMuX2R1cmF0aW9uID0gMDtcbiAgICB0aGlzLl9udW1iZXJPZkNoYW5uZWxzID0gNDgwMDA7XG4gICAgX0ZpbGVDYWNoZVtcImRlZmF1bHRcIl0uZ2V0UGF0aChidWZmZXIsIGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgdmFyIGlubmVyQXVkaW9Db250ZXh0ID0gcmFsLmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSB1cmw7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkNhbnBsYXkoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmF1ZGlvQnVmZmVyLl9kdXJhdGlvbiA9IHRoaXMuaW5uZXJBdWRpb0NvbnRleHQuZHVyYXRpb247XG4gICAgICAgIHRoaXMuaW5uZXJBdWRpb0NvbnRleHQuZGVzdHJveSgpO1xuICAgICAgICBjYWxsYmFjayh0aGlzLmF1ZGlvQnVmZmVyKTtcbiAgICAgIH0uYmluZCh7XG4gICAgICAgIGF1ZGlvQnVmZmVyOiB0aGlzLFxuICAgICAgICBpbm5lckF1ZGlvQ29udGV4dDogaW5uZXJBdWRpb0NvbnRleHRcbiAgICAgIH0pKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoQXVkaW9CdWZmZXIsIFt7XG4gICAga2V5OiBcInNhbXBsZVJhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zYW1wbGVSYXRlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsZW5ndGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImR1cmF0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZHVyYXRpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlck9mQ2hhbm5lbHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9udW1iZXJPZkNoYW5uZWxzO1xuICAgIH1cbiAgfV0pO1xufSgpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBdWRpb0J1ZmZlcjtcblxufSx7XCIuLi91dGlsL0ZpbGVDYWNoZVwiOjU0fV0sNDA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbnZhciBfQXVkaW9QYXJhbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9QYXJhbVwiKSk7XG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlsL1dlYWtNYXBcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbnZhciBfZGVzdHJveSA9IGZ1bmN0aW9uIF9kZXN0cm95KCkge1xuICB2YXIgaW5uZXJBdWRpb0NvbnRleHQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMuc291cmNlTm9kZSkuaW5uZXJBdWRpb0NvbnRleHQ7XG4gIGlmIChpbm5lckF1ZGlvQ29udGV4dCAhPT0gbnVsbCkge1xuICAgIGlubmVyQXVkaW9Db250ZXh0LmRlc3Ryb3koKTtcbiAgICB2YXIgYXVkaW9CdWZmZXJTb3VyY2VOb2RlQXJyYXkgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMuYXVkaW9Db250ZXh0KS5hdWRpb0J1ZmZlclNvdXJjZU5vZGVBcnJheTtcbiAgICB2YXIgbGVuZ3RoID0gYXVkaW9CdWZmZXJTb3VyY2VOb2RlQXJyYXkubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KGF1ZGlvQnVmZmVyU291cmNlTm9kZUFycmF5W2ldKS5pbm5lckF1ZGlvQ29udGV4dCA9PSBpbm5lckF1ZGlvQ29udGV4dCkge1xuICAgICAgICBhdWRpb0J1ZmZlclNvdXJjZU5vZGVBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMuc291cmNlTm9kZSkuaW5uZXJBdWRpb0NvbnRleHQgPSBudWxsO1xuICB9XG59O1xudmFyIEF1ZGlvQnVmZmVyU291cmNlTm9kZSA9IGZ1bmN0aW9uIChfQXVkaW9Ob2RlKSB7XG4gIGZ1bmN0aW9uIEF1ZGlvQnVmZmVyU291cmNlTm9kZShjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdWRpb0J1ZmZlclNvdXJjZU5vZGUpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBBdWRpb0J1ZmZlclNvdXJjZU5vZGUsIFtjb250ZXh0XSk7XG4gICAgX3RoaXMuYnVmZmVyID0gbnVsbDtcbiAgICBfdGhpcy5kZXR1bmUgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICBfdGhpcy5sb29wU3RhcnQgPSAwO1xuICAgIF90aGlzLmxvb3BFbmQgPSAwO1xuICAgIF90aGlzLl9wbGF5YmFja1JhdGUgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAxLjBcbiAgICB9KTtcbiAgICB2YXIgaW5uZXJBdWRpb0NvbnRleHQgPSByYWwuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF90aGlzKS5pbm5lckF1ZGlvQ29udGV4dCA9IGlubmVyQXVkaW9Db250ZXh0O1xuICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uRW5kZWQoX2Rlc3Ryb3kuYmluZCh7XG4gICAgICBzb3VyY2VOb2RlOiBfdGhpcyxcbiAgICAgIGF1ZGlvQ29udGV4dDogY29udGV4dFxuICAgIH0pKTtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5vblN0b3AoX2Rlc3Ryb3kuYmluZCh7XG4gICAgICBzb3VyY2VOb2RlOiBfdGhpcyxcbiAgICAgIGF1ZGlvQ29udGV4dDogY29udGV4dFxuICAgIH0pKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2luaGVyaXRzKEF1ZGlvQnVmZmVyU291cmNlTm9kZSwgX0F1ZGlvTm9kZSk7XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoQXVkaW9CdWZmZXJTb3VyY2VOb2RlLCBbe1xuICAgIGtleTogXCJzdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCh3aGVuLCBvZmZzZXQsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAodGhpcy5idWZmZXIpIHtcbiAgICAgICAgdmFyIGlubmVyQXVkaW9Db250ZXh0ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dDtcbiAgICAgICAgaWYgKGlubmVyQXVkaW9Db250ZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHRoaXMuYnVmZmVyLnVybDtcbiAgICAgICAgaWYgKCFvZmZzZXQgfHwgdHlwZW9mIG9mZnNldCAhPT0gJ251bWJlcicgfHwgb2Zmc2V0IDw9IDApIHtcbiAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5zdGFydFRpbWUgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlubmVyQXVkaW9Db250ZXh0LnN0YXJ0VGltZSA9IG9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXdoZW4gfHwgdHlwZW9mIHdoZW4gIT09ICdudW1iZXInIHx8IHdoZW4gPD0gMCkge1xuICAgICAgICAgIGlubmVyQXVkaW9Db250ZXh0LnBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhdWRpb0NvbnRleHQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0O1xuICAgICAgICAgICAgaWYgKGF1ZGlvQ29udGV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBhdWRpb0NvbnRleHQucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0uYmluZCh0aGlzKSwgd2hlbiAqIDEwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCh3aGVuKSB7XG4gICAgICB2YXIgaW5uZXJBdWRpb0NvbnRleHQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0O1xuICAgICAgaWYgKGlubmVyQXVkaW9Db250ZXh0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghd2hlbiB8fCB0eXBlb2Ygd2hlbiAhPT0gJ251bWJlcicgfHwgd2hlbiA8PSAwKSB7XG4gICAgICAgIGlubmVyQXVkaW9Db250ZXh0LnN0b3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBhdWRpb0NvbnRleHQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmlubmVyQXVkaW9Db250ZXh0O1xuICAgICAgICAgIGlmIChhdWRpb0NvbnRleHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGF1ZGlvQ29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyksIHdoZW4gKiAxMDAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25lbmRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbmVuZGVkKCkge31cbiAgfSwge1xuICAgIGtleTogXCJwbGF5YmFja1JhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wbGF5YmFja1JhdGU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgY29uc29sZS53YXJuKFwicGxheWJhY2tSYXRlIG5vbnN1cHBvcnRcIik7XG4gICAgICB0aGlzLl9wbGF5YmFja1JhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9vcFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvb3A7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIGlubmVyQXVkaW9Db250ZXh0ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5pbm5lckF1ZGlvQ29udGV4dDtcbiAgICAgIGlmIChpbm5lckF1ZGlvQ29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9sb29wID0gdmFsdWU7XG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5sb29wID0gdmFsdWU7XG4gICAgfVxuICB9XSk7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEF1ZGlvQnVmZmVyU291cmNlTm9kZTtcblxufSx7XCIuLi91dGlsL1dlYWtNYXBcIjo1NSxcIi4vQXVkaW9Ob2RlXCI6NDQsXCIuL0F1ZGlvUGFyYW1cIjo0NX1dLDQxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0Jhc2VBdWRpb0NvbnRleHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9CYXNlQXVkaW9Db250ZXh0XCIpKTtcbnZhciBfTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGVcIikpO1xudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbC9XZWFrTWFwXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgQXVkaW9Db250ZXh0ID0gZnVuY3Rpb24gKF9CYXNlQXVkaW9Db250ZXh0KSB7XG4gIGZ1bmN0aW9uIEF1ZGlvQ29udGV4dChvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdWRpb0NvbnRleHQpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBBdWRpb0NvbnRleHQpO1xuICAgIF90aGlzLmJhc2VMYXRlbmN5O1xuICAgIF90aGlzLm91dHB1dExhdGVuY3k7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9pbmhlcml0cyhBdWRpb0NvbnRleHQsIF9CYXNlQXVkaW9Db250ZXh0KTtcbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhBdWRpb0NvbnRleHQsIFt7XG4gICAga2V5OiBcImNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgdmFyIGF1ZGlvQnVmZmVyU291cmNlTm9kZUFycmF5ID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5hdWRpb0J1ZmZlclNvdXJjZU5vZGVBcnJheTtcbiAgICAgIGF1ZGlvQnVmZmVyU291cmNlTm9kZUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChlbGVtZW50KS5pbm5lckF1ZGlvQ29udGV4dC5kZXN0cm95KCk7XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoZWxlbWVudCkuaW5uZXJBdWRpb0NvbnRleHQgPSBudWxsO1xuICAgICAgfSk7XG4gICAgICBhcnJheS5sZW5ndGggPSAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKG15TWVkaWFFbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IF9NZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGVbXCJkZWZhdWx0XCJdKHRoaXMsIHtcbiAgICAgICAgbWVkaWFFbGVtZW50OiBteU1lZGlhRWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVNZWRpYVN0cmVhbURlc3RpbmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU1lZGlhU3RyZWFtRGVzdGluYXRpb24oKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZU1lZGlhU3RyZWFtVHJhY2tTb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTWVkaWFTdHJlYW1UcmFja1NvdXJjZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0T3V0cHV0VGltZXN0YW1wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE91dHB1dFRpbWVzdGFtcCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzdW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3VtZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic3VzcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdXNwZW5kKCkge31cbiAgfV0pO1xufShfQmFzZUF1ZGlvQ29udGV4dDJbXCJkZWZhdWx0XCJdKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXVkaW9Db250ZXh0O1xuXG59LHtcIi4uL3V0aWwvV2Vha01hcFwiOjU1LFwiLi9CYXNlQXVkaW9Db250ZXh0XCI6NDcsXCIuL01lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZVwiOjUwfV0sNDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgQXVkaW9EZXN0aW5hdGlvbk5vZGUgPSBmdW5jdGlvbiAoX0F1ZGlvTm9kZSkge1xuICBmdW5jdGlvbiBBdWRpb0Rlc3RpbmF0aW9uTm9kZShjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdWRpb0Rlc3RpbmF0aW9uTm9kZSk7XG4gICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIEF1ZGlvRGVzdGluYXRpb25Ob2RlLCBbY29udGV4dF0pO1xuICAgIF90aGlzLm1heENoYW5uZWxDb3VudCA9IDI7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9pbmhlcml0cyhBdWRpb0Rlc3RpbmF0aW9uTm9kZSwgX0F1ZGlvTm9kZSk7XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoQXVkaW9EZXN0aW5hdGlvbk5vZGUpO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBdWRpb0Rlc3RpbmF0aW9uTm9kZTtcblxufSx7XCIuL0F1ZGlvTm9kZVwiOjQ0fV0sNDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbnZhciBfQXVkaW9QYXJhbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9QYXJhbVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIEF1ZGlvTGlzdGVuZXIgPSBmdW5jdGlvbiAoX0F1ZGlvTm9kZSkge1xuICBmdW5jdGlvbiBBdWRpb0xpc3RlbmVyKGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1ZGlvTGlzdGVuZXIpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBBdWRpb0xpc3RlbmVyLCBbY29udGV4dF0pO1xuICAgIF90aGlzLnBvc2l0aW9uWCA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5wb3NpdGlvblkgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMucG9zaXRpb25aID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLmZvcndhcmRYID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLmZvcndhcmRZID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLmZvcndhcmRaID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogLTFcbiAgICB9KTtcbiAgICBfdGhpcy51cFggPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMudXBZID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMVxuICAgIH0pO1xuICAgIF90aGlzLnVwWiA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2luaGVyaXRzKEF1ZGlvTGlzdGVuZXIsIF9BdWRpb05vZGUpO1xuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEF1ZGlvTGlzdGVuZXIsIFt7XG4gICAga2V5OiBcInNldE9yaWVudGF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKHgsIHksIHopIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0UG9zaXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UG9zaXRpb24oeCwgeSwgeikge1xuICAgICAgeCA9IHggfHwgMDtcbiAgICAgIHkgPSB5IHx8IDA7XG4gICAgICB6ID0geiB8fCAwO1xuICAgICAgdGhpcy5wb3NpdGlvblgudmFsdWUgPSB4O1xuICAgICAgdGhpcy5wb3NpdGlvblkudmFsdWUgPSB5O1xuICAgICAgdGhpcy5wb3NpdGlvbloudmFsdWUgPSB6O1xuICAgIH1cbiAgfV0pO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBdWRpb0xpc3RlbmVyO1xuXG59LHtcIi4vQXVkaW9Ob2RlXCI6NDQsXCIuL0F1ZGlvUGFyYW1cIjo0NX1dLDQ0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0V2ZW50VGFyZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL0V2ZW50VGFyZ2V0XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgQXVkaW9Ob2RlID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICBmdW5jdGlvbiBBdWRpb05vZGUoY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9Ob2RlKTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgQXVkaW9Ob2RlKTtcbiAgICBfdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgX3RoaXMubnVtYmVyT2ZJbnB1dHMgPSAxO1xuICAgIF90aGlzLm51bWJlck9mT3V0cHV0cyA9IDE7XG4gICAgX3RoaXMuY2hhbm5lbENvdW50ID0gMjtcbiAgICBfdGhpcy5jaGFubmVsQ291bnRNb2RlID0gXCJleHBsaWNpdFwiO1xuICAgIF90aGlzLmNoYW5uZWxJbnRlcnByZXRhdGlvbiA9IFwic3BlYWtlcnNcIjtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2luaGVyaXRzKEF1ZGlvTm9kZSwgX0V2ZW50VGFyZ2V0KTtcbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhBdWRpb05vZGUsIFt7XG4gICAga2V5OiBcImNvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdChkZXN0aW5hdGlvbiwgb3V0cHV0SW5kZXgsIGlucHV0SW5kZXgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjb25uZWN0KCkge31cbiAgfSwge1xuICAgIGtleTogXCJpc051bWJlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc051bWJlcihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJyB8fCBvYmogaW5zdGFuY2VvZiBOdW1iZXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbnRleHRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xuICAgIH1cbiAgfV0pO1xufShfRXZlbnRUYXJnZXQyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEF1ZGlvTm9kZTtcblxufSx7XCIuLi9FdmVudFRhcmdldFwiOjExfV0sNDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgQXVkaW9QYXJhbSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXVkaW9QYXJhbSgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1ZGlvUGFyYW0pO1xuICAgIHRoaXMuYXV0b21hdGlvblJhdGUgPSBvcHRpb25zLmF1dG9tYXRpb25SYXRlIHx8IFwiYS1yYXRlXCI7XG4gICAgdGhpcy5fZGVmYXVsdFZhbHVlID0gb3B0aW9ucy5kZWZhdWx0VmFsdWUgfHwgMTtcbiAgICB0aGlzLl9tYXhWYWx1ZSA9IG9wdGlvbnMubWF4VmFsdWUgfHwgTnVtYmVyLk1BWF9WQUxVRTtcbiAgICB0aGlzLl9taW5WYWx1ZSA9IG9wdGlvbnMubWluVmFsdWUgfHwgLU51bWJlci5NQVhfVkFMVUU7XG4gICAgdGhpcy52YWx1ZSA9IG9wdGlvbnMudmFsdWUgfHwgMTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEF1ZGlvUGFyYW0sIFt7XG4gICAga2V5OiBcImRlZmF1bHRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRWYWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWF4VmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXhWYWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWluVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9taW5WYWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IE1hdGgubWluKHRoaXMuX21heFZhbHVlLCB2YWx1ZSk7XG4gICAgICB0aGlzLl92YWx1ZSA9IE1hdGgubWF4KHRoaXMuX21pblZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFZhbHVlQXRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlQXRUaW1lKHZhbHVlLCBzdGFydFRpbWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibGluZWFyUmFtcFRvVmFsdWVBdFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGluZWFyUmFtcFRvVmFsdWVBdFRpbWUodmFsdWUsIGVuZFRpbWUpIHtcbiAgICAgIGlmIChlbmRUaW1lIDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgayA9IHZhbHVlIC8gZW5kVGltZTtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBmdW5jID0gZnVuY3Rpb24gZnVuYyhkdCkge1xuICAgICAgICBkdCA9IGR0IC8gMTAwMDtcbiAgICAgICAgaWYgKGR0ID4gZW5kVGltZSkge1xuICAgICAgICAgIGR0ID0gZW5kVGltZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHQgPCAwKSB7XG4gICAgICAgICAgZHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVuZFRpbWUgLT0gZHQ7XG4gICAgICAgIHNlbGYudmFsdWUgKz0gZHQgKiBrO1xuICAgICAgICBpZiAoZW5kVGltZSA+IDApIHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuYyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuYyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VGFyZ2V0QXRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRhcmdldEF0VGltZSh0YXJnZXQsIHN0YXJ0VGltZSwgdGltZUNvbnN0YW50KSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGFyZ2V0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRWYWx1ZUN1cnZlQXRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlQ3VydmVBdFRpbWUoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNhbmNlbFNjaGVkdWxlZFZhbHVlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5jZWxTY2hlZHVsZWRWYWx1ZXMoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNhbmNlbEFuZEhvbGRBdFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuY2VsQW5kSG9sZEF0VGltZSgpIHt9XG4gIH1dKTtcbn0oKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXVkaW9QYXJhbTtcblxufSx7fV0sNDY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgZnVuY3Rpb24gQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlKGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlKTtcbiAgICByZXR1cm4gX2NhbGxTdXBlcih0aGlzLCBBdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGUsIFtjb250ZXh0XSk7XG4gIH1cbiAgX2luaGVyaXRzKEF1ZGlvU2NoZWR1bGVkU291cmNlTm9kZSwgX0F1ZGlvTm9kZSk7XG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlLCBbe1xuICAgIGtleTogXCJvbmVuZGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uZW5kZWQoZXZlbnQpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQod2hlbiwgb2Zmc2V0LCBkdXJhdGlvbikge31cbiAgfSwge1xuICAgIGtleTogXCJzdG9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3Aod2hlbikge31cbiAgfV0pO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGU7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0NH1dLDQ3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0V2ZW50VGFyZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL0V2ZW50VGFyZ2V0XCIpKTtcbnZhciBfQXVkaW9MaXN0ZW5lciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9MaXN0ZW5lclwiKSk7XG52YXIgX1BlcmlvZGljV2F2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUGVyaW9kaWNXYXZlXCIpKTtcbnZhciBfQXVkaW9CdWZmZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvQnVmZmVyXCIpKTtcbnZhciBfV2Vha01hcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWwvV2Vha01hcFwiKSk7XG52YXIgX0R5bmFtaWNzQ29tcHJlc3Nvck5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0R5bmFtaWNzQ29tcHJlc3Nvck5vZGVcIikpO1xudmFyIF9BdWRpb0J1ZmZlclNvdXJjZU5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvQnVmZmVyU291cmNlTm9kZVwiKSk7XG52YXIgX0F1ZGlvRGVzdGluYXRpb25Ob2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb0Rlc3RpbmF0aW9uTm9kZVwiKSk7XG52YXIgX09zY2lsbGF0b3JOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Pc2NpbGxhdG9yTm9kZVwiKSk7XG52YXIgX0FuYWx5c2VyTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQW5hbHlzZXJOb2RlXCIpKTtcbnZhciBfUGFubmVyTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUGFubmVyTm9kZVwiKSk7XG52YXIgX0dhaW5Ob2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9HYWluTm9kZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIEJhc2VBdWRpb0NvbnRleHQgPSBmdW5jdGlvbiAoX0V2ZW50VGFyZ2V0KSB7XG4gIGZ1bmN0aW9uIEJhc2VBdWRpb0NvbnRleHQoKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCYXNlQXVkaW9Db250ZXh0KTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgQmFzZUF1ZGlvQ29udGV4dCk7XG4gICAgX3RoaXMuYXVkaW9Xb3JrbGV0O1xuICAgIF90aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBfQXVkaW9EZXN0aW5hdGlvbk5vZGVbXCJkZWZhdWx0XCJdKF90aGlzKTtcbiAgICBfdGhpcy5saXN0ZW5lciA9IG5ldyBfQXVkaW9MaXN0ZW5lcltcImRlZmF1bHRcIl0oX3RoaXMpO1xuICAgIF90aGlzLnNhbXBsZVJhdGU7XG4gICAgX3RoaXMuc3RhdGUgPSBcInJ1bm5pbmdcIjtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF90aGlzKS5hdWRpb0J1ZmZlclNvdXJjZU5vZGVBcnJheSA9IFtdO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfaW5oZXJpdHMoQmFzZUF1ZGlvQ29udGV4dCwgX0V2ZW50VGFyZ2V0KTtcbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhCYXNlQXVkaW9Db250ZXh0LCBbe1xuICAgIGtleTogXCJjcmVhdGVBbmFseXNlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVBbmFseXNlcigpIHtcbiAgICAgIHJldHVybiBuZXcgX0FuYWx5c2VyTm9kZVtcImRlZmF1bHRcIl0odGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUJpcXVhZEZpbHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCaXF1YWRGaWx0ZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUJ1ZmZlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCdWZmZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUJ1ZmZlclNvdXJjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCdWZmZXJTb3VyY2UoKSB7XG4gICAgICB2YXIgc291cmNlTm9kZSA9IG5ldyBfQXVkaW9CdWZmZXJTb3VyY2VOb2RlW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXVkaW9CdWZmZXJTb3VyY2VOb2RlQXJyYXkucHVzaChzb3VyY2VOb2RlKTtcbiAgICAgIHJldHVybiBzb3VyY2VOb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVDb25zdGFudFNvdXJjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDb25zdGFudFNvdXJjZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlQ2hhbm5lbE1lcmdlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDaGFubmVsTWVyZ2VyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVDaGFubmVsU3BsaXR0ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbFNwbGl0dGVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVDb252b2x2ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ29udm9sdmVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVEZWxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVEZWxheSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlRHluYW1pY3NDb21wcmVzc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUR5bmFtaWNzQ29tcHJlc3NvcigpIHtcbiAgICAgIHJldHVybiBuZXcgX0R5bmFtaWNzQ29tcHJlc3Nvck5vZGVbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVHYWluXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUdhaW4oKSB7XG4gICAgICByZXR1cm4gbmV3IF9HYWluTm9kZVtcImRlZmF1bHRcIl0odGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUlJUkZpbHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVJSVJGaWx0ZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZU9zY2lsbGF0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlT3NjaWxsYXRvcigpIHtcbiAgICAgIHJldHVybiBuZXcgX09zY2lsbGF0b3JOb2RlW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlUGFubmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVBhbm5lcigpIHtcbiAgICAgIHJldHVybiBuZXcgX1Bhbm5lck5vZGVbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVQZXJpb2RpY1dhdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUGVyaW9kaWNXYXZlKCkge1xuICAgICAgcmV0dXJuIG5ldyBfUGVyaW9kaWNXYXZlW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlU2NyaXB0UHJvY2Vzc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVNjcmlwdFByb2Nlc3NvcigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlU3RlcmVvUGFubmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVN0ZXJlb1Bhbm5lcigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlV2F2ZVNoYXBlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVXYXZlU2hhcGVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJkZWNvZGVBdWRpb0RhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVjb2RlQXVkaW9EYXRhKGF1ZGlvRGF0YSwgY2FsbEZ1bmMpIHtcbiAgICAgIG5ldyBfQXVkaW9CdWZmZXJbXCJkZWZhdWx0XCJdKHRoaXMsIGF1ZGlvRGF0YSwgY2FsbEZ1bmMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbnN0YXRlY2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uc3RhdGVjaGFuZ2UoKSB7fVxuICB9XSk7XG59KF9FdmVudFRhcmdldDJbXCJkZWZhdWx0XCJdKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQmFzZUF1ZGlvQ29udGV4dDtcblxufSx7XCIuLi9FdmVudFRhcmdldFwiOjExLFwiLi4vdXRpbC9XZWFrTWFwXCI6NTUsXCIuL0FuYWx5c2VyTm9kZVwiOjM4LFwiLi9BdWRpb0J1ZmZlclwiOjM5LFwiLi9BdWRpb0J1ZmZlclNvdXJjZU5vZGVcIjo0MCxcIi4vQXVkaW9EZXN0aW5hdGlvbk5vZGVcIjo0MixcIi4vQXVkaW9MaXN0ZW5lclwiOjQzLFwiLi9EeW5hbWljc0NvbXByZXNzb3JOb2RlXCI6NDgsXCIuL0dhaW5Ob2RlXCI6NDksXCIuL09zY2lsbGF0b3JOb2RlXCI6NTEsXCIuL1Bhbm5lck5vZGVcIjo1MixcIi4vUGVyaW9kaWNXYXZlXCI6NTN9XSw0ODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xudmFyIF9BdWRpb1BhcmFtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1BhcmFtXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgRHluYW1pY3NDb21wcmVzc29yTm9kZSA9IGZ1bmN0aW9uIChfQXVkaW9Ob2RlKSB7XG4gIGZ1bmN0aW9uIER5bmFtaWNzQ29tcHJlc3Nvck5vZGUoY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHluYW1pY3NDb21wcmVzc29yTm9kZSk7XG4gICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIER5bmFtaWNzQ29tcHJlc3Nvck5vZGUsIFtjb250ZXh0XSk7XG4gICAgX3RoaXMuX3RocmVzaG9sZCA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IC0yNCxcbiAgICAgIGRlZmF1bHRWYWx1ZTogLTI0LFxuICAgICAgbWF4VmFsdWU6IDAsXG4gICAgICBtaW5WYWx1ZTogLTEwMFxuICAgIH0pO1xuICAgIF90aGlzLl9rbmVlID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMzAsXG4gICAgICBkZWZhdWx0VmFsdWU6IDMwLFxuICAgICAgbWF4VmFsdWU6IDQwLFxuICAgICAgbWluVmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5fcmF0aW8gPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAxMixcbiAgICAgIGRlZmF1bHRWYWx1ZTogMTIsXG4gICAgICBtYXhWYWx1ZTogMjAsXG4gICAgICBtaW5WYWx1ZTogMVxuICAgIH0pO1xuICAgIF90aGlzLl9yZWR1Y3Rpb24gPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgZGVmYXVsdFZhbHVlOiAwLFxuICAgICAgbWF4VmFsdWU6IDAsXG4gICAgICBtaW5WYWx1ZTogLTIwXG4gICAgfSk7XG4gICAgX3RoaXMuX2F0dGFjayA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDAuMDAzLFxuICAgICAgZGVmYXVsdFZhbHVlOiAwLjAwMyxcbiAgICAgIG1heFZhbHVlOiAxLFxuICAgICAgbWluVmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5fcmVsZWFzZSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDAuMjUsXG4gICAgICBkZWZhdWx0VmFsdWU6IDAuMjUsXG4gICAgICBtYXhWYWx1ZTogMSxcbiAgICAgIG1pblZhbHVlOiAwXG4gICAgfSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9pbmhlcml0cyhEeW5hbWljc0NvbXByZXNzb3JOb2RlLCBfQXVkaW9Ob2RlKTtcbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhEeW5hbWljc0NvbXByZXNzb3JOb2RlLCBbe1xuICAgIGtleTogXCJ0aHJlc2hvbGRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90aHJlc2hvbGQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImtlZW5cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9rZWVuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyYXRpb1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JhdGlvO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWR1Y3Rpb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWR1Y3Rpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImF0dGFja1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dGFjaztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVsZWFzZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbGVhc2U7XG4gICAgfVxuICB9XSk7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IER5bmFtaWNzQ29tcHJlc3Nvck5vZGU7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0NCxcIi4vQXVkaW9QYXJhbVwiOjQ1fV0sNDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcbnZhciBfQXVkaW9QYXJhbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9QYXJhbVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIEdhaW5Ob2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgZnVuY3Rpb24gR2Fpbk5vZGUoY29udGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2Fpbk5vZGUpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBHYWluTm9kZSwgW2NvbnRleHRdKTtcbiAgICBfdGhpcy5fZ2FpbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5nYWluIHx8IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2luaGVyaXRzKEdhaW5Ob2RlLCBfQXVkaW9Ob2RlKTtcbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhHYWluTm9kZSwgW3tcbiAgICBrZXk6IFwiZ2FpblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dhaW47XG4gICAgfVxuICB9XSk7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEdhaW5Ob2RlO1xuXG59LHtcIi4vQXVkaW9Ob2RlXCI6NDQsXCIuL0F1ZGlvUGFyYW1cIjo0NX1dLDUwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0F1ZGlvTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvTm9kZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxudmFyIE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZSA9IGZ1bmN0aW9uIChfQXVkaW9Ob2RlKSB7XG4gIGZ1bmN0aW9uIE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZShjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZSk7XG4gICAgcmV0dXJuIF9jYWxsU3VwZXIodGhpcywgTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlLCBbY29udGV4dF0pO1xuICB9XG4gIF9pbmhlcml0cyhNZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGUsIF9BdWRpb05vZGUpO1xuICByZXR1cm4gX2NyZWF0ZUNsYXNzKE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZSk7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZTtcblxufSx7XCIuL0F1ZGlvTm9kZVwiOjQ0fV0sNTE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGVcIikpO1xudmFyIF9BdWRpb1BhcmFtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1BhcmFtXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG52YXIgdHlwZXMgPSB7XG4gIFwic2luZVwiOiAwLFxuICBcInNxdWFyZVwiOiAwLFxuICBcInNhd3Rvb3RoXCI6IDAsXG4gIFwidHJpYW5nbGVcIjogMCxcbiAgXCJjdXN0b21cIjogMFxufTtcbnZhciBPc2NpbGxhdG9yTm9kZSA9IGZ1bmN0aW9uIChfQXVkaW9TY2hlZHVsZWRTb3VyY2UpIHtcbiAgZnVuY3Rpb24gT3NjaWxsYXRvck5vZGUoY29udGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT3NjaWxsYXRvck5vZGUpO1xuICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBPc2NpbGxhdG9yTm9kZSk7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgX3RoaXMuZnJlcXVlbmN5ID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogX3RoaXMuaXNOdW1iZXIob3B0aW9ucy5mcmVxdWVuY3kpID8gb3B0aW9ucy5mcmVxdWVuY3kgOiA0NDBcbiAgICB9KTtcbiAgICBfdGhpcy5kZXR1bmUgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiBfdGhpcy5pc051bWJlcihvcHRpb25zLmRldHVuZSkgPyBvcHRpb25zLmRldHVuZSA6IDBcbiAgICB9KTtcbiAgICBfdGhpcy50eXBlID0gb3B0aW9ucy50eXBlIGluIHR5cGVzID8gb3B0aW9ucy50eXBlIDogXCJzaW5lXCI7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9pbmhlcml0cyhPc2NpbGxhdG9yTm9kZSwgX0F1ZGlvU2NoZWR1bGVkU291cmNlKTtcbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhPc2NpbGxhdG9yTm9kZSwgW3tcbiAgICBrZXk6IFwic2V0UGVyaW9kaWNXYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBlcmlvZGljV2F2ZSh3YXZlKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInN0YXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KHdoZW4pIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKHdlbikge31cbiAgfV0pO1xufShfQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IE9zY2lsbGF0b3JOb2RlO1xuXG59LHtcIi4vQXVkaW9QYXJhbVwiOjQ1LFwiLi9BdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGVcIjo0Nn1dLDUyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX0F1ZGlvTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvTm9kZVwiKSk7XG52YXIgX0F1ZGlvUGFyYW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvUGFyYW1cIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7IHJldHVybiBvID0gX2dldFByb3RvdHlwZU9mKG8pLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdChvLCBlIHx8IFtdLCBfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpIDogby5hcHBseSh0LCBlKSk7IH1cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyB0cnkgeyB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IH0gY2F0Y2ggKHQpIHt9IHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHJldHVybiAhIXQ7IH0pKCk7IH1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbnZhciBQYW5uZXJOb2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgZnVuY3Rpb24gUGFubmVyTm9kZShjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYW5uZXJOb2RlKTtcbiAgICBfdGhpcyA9IF9jYWxsU3VwZXIodGhpcywgUGFubmVyTm9kZSwgW2NvbnRleHRdKTtcbiAgICBfdGhpcy5jb25lSW5uZXJBbmdsZSA9IDM2MDtcbiAgICBfdGhpcy5jb25lT3V0ZXJBbmdsZSA9IDM2MDtcbiAgICBfdGhpcy5jb25lT3V0ZXJHYWluID0gMDtcbiAgICBfdGhpcy5kaXN0YW5jZU1vZGVsID0gXCJpbnZlcnNlXCI7XG4gICAgX3RoaXMubWF4RGlzdGFuY2UgPSAxMDAwMDtcbiAgICBfdGhpcy5vcmllbnRhdGlvblggPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAxXG4gICAgfSk7XG4gICAgX3RoaXMub3JpZW50YXRpb25ZID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLm9yaWVudGF0aW9uWiA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5wYW5uaW5nTW9kZWwgPSBcImVxdWFscG93ZXJcIjtcbiAgICBfdGhpcy5wb3NpdGlvblggPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMucG9zaXRpb25ZID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLnBvc2l0aW9uWiA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5yZWZEaXN0YW5jZSA9IDE7XG4gICAgX3RoaXMucm9sbG9mZkZhY3RvciA9IDE7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9pbmhlcml0cyhQYW5uZXJOb2RlLCBfQXVkaW9Ob2RlKTtcbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhQYW5uZXJOb2RlLCBbe1xuICAgIGtleTogXCJzZXRQb3NpdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3NpdGlvbih4LCB5LCB6KSB7XG4gICAgICB0aGlzLnBvc2l0aW9uWCA9IHg7XG4gICAgICB0aGlzLnBvc2l0aW9uWSA9IHk7XG4gICAgICB0aGlzLnBvc2l0aW9uWiA9IHo7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldE9yaWVudGF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKHgsIHksIHopIHtcbiAgICAgIHRoaXMub3JpZW50YXRpb25YID0geDtcbiAgICAgIHRoaXMub3JpZW50YXRpb25ZID0geTtcbiAgICAgIHRoaXMub3JpZW50YXRpb25aID0gejtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VmVsb2NpdHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmVsb2NpdHkoKSB7fVxuICB9XSk7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IFBhbm5lck5vZGU7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0NCxcIi4vQXVkaW9QYXJhbVwiOjQ1fV0sNTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG52YXIgUGVyaW9kaWNXYXZlID0gX2NyZWF0ZUNsYXNzKGZ1bmN0aW9uIFBlcmlvZGljV2F2ZShjb250ZXh0LCBvcHRpb25zKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQZXJpb2RpY1dhdmUpO1xufSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IFBlcmlvZGljV2F2ZTtcblxufSx7fV0sNTQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgbWQ1ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9tZDUubWluXCIpO1xudmFyIGZpbGVNZ3IgPSByYWwuZ2V0RmlsZVN5c3RlbU1hbmFnZXIoKTtcbnZhciBjYWNoZURpciA9IHJhbC5lbnYuVVNFUl9EQVRBX1BBVEggKyBcIi9maWxlQ2FjaGUvXCI7XG52YXIgRmlsZUNhY2hlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGaWxlQ2FjaGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpbGVDYWNoZSk7XG4gICAgdGhpcy5fY2FjaGVzID0ge307XG4gIH1cbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhGaWxlQ2FjaGUsIFt7XG4gICAga2V5OiBcImdldENhY2hlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENhY2hlKGRhdGEpIHtcbiAgICAgIHZhciBrZXkgPSBGaWxlQ2FjaGUuX2dlbkRhdGFLZXkoZGF0YSk7XG4gICAgICBpZiAoa2V5IGluIHRoaXMuX2NhY2hlcykge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVzW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0Q2FjaGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q2FjaGUocGF0aCwgZGF0YSkge1xuICAgICAgdmFyIGtleSA9IEZpbGVDYWNoZS5fZ2VuRGF0YUtleShkYXRhKTtcbiAgICAgIHRoaXMuX2NhY2hlc1trZXldID0gcGF0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0SXRlbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJdGVtKGRhdGEsIHBhdGgsIGtleSwgY2FsbEJhY2spIHtcbiAgICAgIGtleSA9IGtleSB8fCBGaWxlQ2FjaGUuX2dlbkRhdGFLZXkoZGF0YSk7XG4gICAgICB2YXIgY2FjaGVzID0gdGhpcy5fY2FjaGVzO1xuICAgICAgaWYgKGtleSBpbiBjYWNoZXMpIHtcbiAgICAgICAgY2FsbEJhY2sgJiYgY2FsbEJhY2soY2FjaGVzW2tleV0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgcGF0aCA9IGNhY2hlRGlyICsga2V5O1xuICAgICAgICBmaWxlTWdyLndyaXRlRmlsZSh7XG4gICAgICAgICAgZmlsZVBhdGg6IHBhdGgsXG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBlbmNvZGluZzogXCJiaW5hcnlcIixcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgICAgICAgY2FjaGVzW2tleV0gPSBwYXRoO1xuICAgICAgICAgICAgY2FsbEJhY2sgJiYgY2FsbEJhY2socGF0aCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKCkge1xuICAgICAgICAgICAgY2FsbEJhY2sgJiYgY2FsbEJhY2soKTtcbiAgICAgICAgICAgIHRocm93IHBhdGggKyBcIndyaXRlRmlsZSBmYWlsIVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFBhdGhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGF0aChkYXRhLCBjYWxsQmFjaykge1xuICAgICAgdmFyIGtleSA9IEZpbGVDYWNoZS5fZ2VuRGF0YUtleShkYXRhKTtcbiAgICAgIHZhciBjYWNoZXMgPSB0aGlzLl9jYWNoZXM7XG4gICAgICBpZiAoa2V5IGluIGNhY2hlcykge1xuICAgICAgICBjYWxsQmFjayhjYWNoZXNba2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEl0ZW0oZGF0YSwgdW5kZWZpbmVkLCBrZXksIGNhbGxCYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJfZ2VuRGF0YUtleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2VuRGF0YUtleShkYXRhKSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhkYXRhKTtcbiAgICAgIHZhciBsZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGggLyA0O1xuICAgICAgdmFyIGNvdW50ID0gMTA7XG4gICAgICB2YXIgc3BhY2UgPSBsZW5ndGggLyBjb3VudDtcbiAgICAgIHZhciBrZXkgPSBcImxlbmd0aDpcIiArIGxlbmd0aDtcbiAgICAgIGtleSArPSBcImZpcnN0OlwiICsgdmlldy5nZXRJbnQzMigwKTtcbiAgICAgIGtleSArPSBcImxhc3Q6XCIgKyB2aWV3LmdldEludDMyKGxlbmd0aCAtIDEpO1xuICAgICAgd2hpbGUgKGNvdW50LS0pIHtcbiAgICAgICAga2V5ICs9IGNvdW50ICsgXCI6XCIgKyB2aWV3LmdldEludDMyKE1hdGguZmxvb3Ioc3BhY2UgKiBjb3VudCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1kNShrZXkpO1xuICAgIH1cbiAgfV0pO1xufSgpO1xudHJ5IHtcbiAgZmlsZU1nci5hY2Nlc3NTeW5jKGNhY2hlRGlyKTtcbiAgZmlsZU1nci5ybWRpclN5bmMoY2FjaGVEaXIsIHRydWUpO1xufSBjYXRjaCAoZSkge31cbmZpbGVNZ3IubWtkaXJTeW5jKGNhY2hlRGlyLCB0cnVlKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbmV3IEZpbGVDYWNoZSgpO1xuXG59LHtcIi4uLy4uL2xpYi9tZDUubWluXCI6Mn1dLDU1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IG5ldyBXZWFrTWFwKCk7XG5cbn0se31dLDU2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX0F1ZGlvID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1wiKSk7XG52YXIgX0F1ZGlvQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYXVkaW9Db250ZXh0L0F1ZGlvQ29udGV4dFwiKSk7XG52YXIgX0RldmljZU1vdGlvbkV2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9EZXZpY2VNb3Rpb25FdmVudFwiKSk7XG52YXIgX0RvY3VtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Eb2N1bWVudFwiKSk7XG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG52YXIgX0ZvbnRGYWNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb250RmFjZVwiKSk7XG52YXIgX0ZvbnRGYWNlU2V0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb250RmFjZVNldFwiKSk7XG52YXIgX0V2ZW50VGFyZ2V0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFRhcmdldFwiKSk7XG52YXIgX0hUTUxFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG52YXIgX0hUTUxBdWRpb0VsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxBdWRpb0VsZW1lbnRcIikpO1xudmFyIF9IVE1MQ2FudmFzRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTENhbnZhc0VsZW1lbnRcIikpO1xudmFyIF9IVE1MSW1hZ2VFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MSW1hZ2VFbGVtZW50XCIpKTtcbnZhciBfSFRNTFZpZGVvRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTFZpZGVvRWxlbWVudFwiKSk7XG52YXIgX0ltYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9JbWFnZVwiKSk7XG52YXIgX0xvY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Mb2NhdGlvblwiKSk7XG52YXIgX05hdmlnYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTmF2aWdhdG9yXCIpKTtcbnZhciBfU2NyZWVuID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9TY3JlZW5cIikpO1xudmFyIF9Ub3VjaEV2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ub3VjaEV2ZW50XCIpKTtcbnZhciBfWE1MSHR0cFJlcXVlc3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1hNTEh0dHBSZXF1ZXN0XCIpKTtcbnZhciBfSFRNTFNjcmlwdEVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxTY3JpcHRFbGVtZW50XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxud2luZG93LnJhbCA9IHdpbmRvdy5yYWwgfHwge307XG52YXIgX3N5c3RlbUluZm8gPSB3aW5kb3cucmFsLmdldFN5c3RlbUluZm9TeW5jKCk7XG53aW5kb3cuY2xpZW50VG9wID0gMDtcbndpbmRvdy5jbGllbnRMZWZ0ID0gMDtcbndpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID0gX3N5c3RlbUluZm8ucGl4ZWxSYXRpbztcbndpbmRvdy5kb2N1bWVudCA9IG5ldyBfRG9jdW1lbnRbXCJkZWZhdWx0XCJdKCk7XG53aW5kb3cuZnJhbWVFbGVtZW50ID0gbnVsbDtcbndpbmRvdy5mdWxsU2NyZWVuID0gdHJ1ZTtcbndpbmRvdy5pbm5lckhlaWdodCA9IF9zeXN0ZW1JbmZvLndpbmRvd0hlaWdodDtcbndpbmRvdy5pbm5lcldpZHRoID0gX3N5c3RlbUluZm8ud2luZG93V2lkdGg7XG53aW5kb3cubGVuZ3RoID0gMDtcbndpbmRvdy5sb2NhdGlvbiA9IG5ldyBfTG9jYXRpb25bXCJkZWZhdWx0XCJdKCk7XG53aW5kb3cubmFtZSA9IFwicnVudGltZVwiO1xud2luZG93Lm5hdmlnYXRvciA9IG5ldyBfTmF2aWdhdG9yW1wiZGVmYXVsdFwiXShfc3lzdGVtSW5mby5wbGF0Zm9ybSwgX3N5c3RlbUluZm8ubGFuZ3VhZ2UpO1xud2luZG93Lm91dGVySGVpZ2h0ID0gX3N5c3RlbUluZm8ud2luZG93SGVpZ2h0O1xud2luZG93Lm91dGVyV2lkdGggPSBfc3lzdGVtSW5mby53aW5kb3dXaWR0aDtcbndpbmRvdy5wYWdlWE9mZnNldCA9IDA7XG53aW5kb3cucGFnZVlPZmZzZXQgPSAwO1xud2luZG93LnBhcmVudCA9IHdpbmRvdztcbndpbmRvdy5zY3JlZW4gPSBuZXcgX1NjcmVlbltcImRlZmF1bHRcIl0oKTtcbndpbmRvdy5zY3JlZW5MZWZ0ID0gMDtcbndpbmRvdy5zY3JlZW5Ub3AgPSAwO1xud2luZG93LnNjcmVlblggPSAwO1xud2luZG93LnNjcmVlblkgPSAwO1xud2luZG93LnNjcm9sbFggPSAwO1xud2luZG93LnNjcm9sbFkgPSAwO1xud2luZG93LnNlbGYgPSB3aW5kb3c7XG53aW5kb3cudG9wID0gd2luZG93O1xud2luZG93LndpbmRvdyA9IHdpbmRvdztcbndpbmRvdy5hbGVydCA9IHdpbmRvdy5jb25zb2xlLmVycm9yO1xudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi4vbGliL2Jhc2U2NC5taW4uanMnKSxcbiAgYnRvYSA9IF9yZXF1aXJlLmJ0b2EsXG4gIGF0b2IgPSBfcmVxdWlyZS5hdG9iO1xud2luZG93LmF0b2IgPSBhdG9iO1xud2luZG93LmJ0b2EgPSBidG9hO1xud2luZG93LmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLndhcm4oXCJ3aW5kb3cuY2xvc2UoKSBpcyBkZXByZWNhdGVkIVwiKTtcbn07XG53aW5kb3cucHJpbnQgPSB3aW5kb3cuY29uc29sZS5sb2c7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciA9IF9FdmVudFRhcmdldFtcImRlZmF1bHRcIl0ucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIuYmluZCh3aW5kb3cpO1xud2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBfRXZlbnRUYXJnZXRbXCJkZWZhdWx0XCJdLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLmJpbmQod2luZG93KTtcbnZhciBfZGlzcGF0Y2hFdmVudCA9IF9FdmVudFRhcmdldFtcImRlZmF1bHRcIl0ucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQ7XG53aW5kb3cuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAod2luZG93LmRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpKSB7XG4gICAgcmV0dXJuIF9kaXNwYXRjaEV2ZW50LmFwcGx5KHRoaXMgfHwgd2luZG93LCBhcmd1bWVudHMpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG53aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAnMHB4JyxcbiAgICB0b3A6ICcwcHgnLFxuICAgIGhlaWdodDogJzBweCcsXG4gICAgcGFkZGluZ0xlZnQ6IDAsXG4gICAgZ2V0UHJvcGVydHlWYWx1ZTogZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZShrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgfVxuICB9O1xufTtcbnJhbC5vbldpbmRvd1Jlc2l6ZSAmJiByYWwub25XaW5kb3dSZXNpemUoZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgd2luZG93LmlubmVyV2lkdGggPSB3aWR0aDtcbiAgd2luZG93LmlubmVySGVpZ2h0ID0gaGVpZ2h0O1xuICB3aW5kb3cub3V0ZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB3aW5kb3cub3V0ZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB3aW5kb3cuc2NyZWVuLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHdpbmRvdy5zY3JlZW4uaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInJlc2l6ZVwiKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufSk7XG5yYWwub25EZXZpY2VPcmllbnRhdGlvbkNoYW5nZSAmJiByYWwub25EZXZpY2VPcmllbnRhdGlvbkNoYW5nZShmdW5jdGlvbiAocmVzKSB7XG4gIGlmIChyZXMudmFsdWUgPT09IFwicG9ydHJhaXRcIikge1xuICAgIHdpbmRvdy5vcmllbnRhdGlvbiA9IDA7XG4gIH0gZWxzZSBpZiAocmVzLnZhbHVlID09PSBcImxhbmRzY2FwZVwiKSB7XG4gICAgd2luZG93Lm9yaWVudGF0aW9uID0gOTA7XG4gIH0gZWxzZSBpZiAocmVzLnZhbHVlID09PSBcImxhbmRzY2FwZVJldmVyc2VcIikge1xuICAgIHdpbmRvdy5vcmllbnRhdGlvbiA9IC05MDtcbiAgfSBlbHNlIGlmIChyZXMudmFsdWUgPT09IFwicG9ydHJhaXRSZXZlcnNlXCIpIHtcbiAgICB3aW5kb3cub3JpZW50YXRpb24gPSAxODA7XG4gIH1cbn0pO1xud2luZG93LnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUud2FybihcIndpbmRvdy5zdG9wKCkgbm90IGltcGxlbWVudGVkXCIpO1xufTtcbndpbmRvdy5BdWRpbyA9IF9BdWRpb1tcImRlZmF1bHRcIl07XG53aW5kb3cuQXVkaW9Db250ZXh0ID0gX0F1ZGlvQ29udGV4dFtcImRlZmF1bHRcIl07XG53aW5kb3cuRGV2aWNlTW90aW9uRXZlbnQgPSBfRGV2aWNlTW90aW9uRXZlbnRbXCJkZWZhdWx0XCJdO1xud2luZG93LkV2ZW50ID0gX0V2ZW50W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5Gb250RmFjZSA9IF9Gb250RmFjZVtcImRlZmF1bHRcIl07XG53aW5kb3cuRm9udEZhY2VTZXQgPSBfRm9udEZhY2VTZXRbXCJkZWZhdWx0XCJdO1xud2luZG93LkhUTUxFbGVtZW50ID0gX0hUTUxFbGVtZW50W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5IVE1MQXVkaW9FbGVtZW50ID0gX0hUTUxBdWRpb0VsZW1lbnRbXCJkZWZhdWx0XCJdO1xud2luZG93LkhUTUxDYW52YXNFbGVtZW50ID0gX0hUTUxDYW52YXNFbGVtZW50W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5IVE1MSW1hZ2VFbGVtZW50ID0gX0hUTUxJbWFnZUVsZW1lbnRbXCJkZWZhdWx0XCJdO1xud2luZG93LkhUTUxWaWRlb0VsZW1lbnQgPSBfSFRNTFZpZGVvRWxlbWVudFtcImRlZmF1bHRcIl07XG53aW5kb3cuSW1hZ2UgPSBfSW1hZ2VbXCJkZWZhdWx0XCJdO1xud2luZG93LlRvdWNoRXZlbnQgPSBfVG91Y2hFdmVudFtcImRlZmF1bHRcIl07XG53aW5kb3cuWE1MSHR0cFJlcXVlc3QgPSBfWE1MSHR0cFJlcXVlc3RbXCJkZWZhdWx0XCJdO1xud2luZG93LkhUTUxTY3JpcHRFbGVtZW50ID0gX0hUTUxTY3JpcHRFbGVtZW50W1wiZGVmYXVsdFwiXTtcbmlmICghd2luZG93LkJsb2IgfHwgIXdpbmRvdy5VUkwpIHtcbiAgdmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJy4vQmxvYi5qcycpLFxuICAgIEJsb2IgPSBfcmVxdWlyZTIuQmxvYixcbiAgICBVUkwgPSBfcmVxdWlyZTIuVVJMO1xuICB3aW5kb3cuQmxvYiA9IEJsb2I7XG4gIHdpbmRvdy5VUkwgPSBVUkw7XG59XG5pZiAoIXdpbmRvdy5ET01QYXJzZXIpIHtcbiAgd2luZG93LkRPTVBhcnNlciA9IHJlcXVpcmUoJy4veG1sZG9tL2RvbS1wYXJzZXIuanMnKS5ET01QYXJzZXI7XG59XG5cbn0se1wiLi4vbGliL2Jhc2U2NC5taW4uanNcIjoxLFwiLi9BdWRpb1wiOjQsXCIuL0Jsb2IuanNcIjo1LFwiLi9EZXZpY2VNb3Rpb25FdmVudFwiOjcsXCIuL0RvY3VtZW50XCI6OCxcIi4vRXZlbnRcIjoxMCxcIi4vRXZlbnRUYXJnZXRcIjoxMSxcIi4vRm9udEZhY2VcIjoxMixcIi4vRm9udEZhY2VTZXRcIjoxMyxcIi4vSFRNTEF1ZGlvRWxlbWVudFwiOjE1LFwiLi9IVE1MQ2FudmFzRWxlbWVudFwiOjE3LFwiLi9IVE1MRWxlbWVudFwiOjE4LFwiLi9IVE1MSW1hZ2VFbGVtZW50XCI6MjEsXCIuL0hUTUxTY3JpcHRFbGVtZW50XCI6MjQsXCIuL0hUTUxWaWRlb0VsZW1lbnRcIjoyNixcIi4vSW1hZ2VcIjoyNyxcIi4vTG9jYXRpb25cIjoyOSxcIi4vTmF2aWdhdG9yXCI6MzEsXCIuL1NjcmVlblwiOjM0LFwiLi9Ub3VjaEV2ZW50XCI6MzUsXCIuL1hNTEh0dHBSZXF1ZXN0XCI6MzYsXCIuL2F1ZGlvQ29udGV4dC9BdWRpb0NvbnRleHRcIjo0MSxcIi4veG1sZG9tL2RvbS1wYXJzZXIuanNcIjo1N31dLDU3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBET01QYXJzZXIob3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHtcbiAgICBsb2NhdG9yOiB7fVxuICB9O1xufVxuRE9NUGFyc2VyLnByb3RvdHlwZS5wYXJzZUZyb21TdHJpbmcgPSBmdW5jdGlvbiAoc291cmNlLCBtaW1lVHlwZSkge1xuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgdmFyIHNheCA9IG5ldyBYTUxSZWFkZXIoKTtcbiAgdmFyIGRvbUJ1aWxkZXIgPSBvcHRpb25zLmRvbUJ1aWxkZXIgfHwgbmV3IERPTUhhbmRsZXIoKTtcbiAgdmFyIGVycm9ySGFuZGxlciA9IG9wdGlvbnMuZXJyb3JIYW5kbGVyO1xuICB2YXIgbG9jYXRvciA9IG9wdGlvbnMubG9jYXRvcjtcbiAgdmFyIGRlZmF1bHROU01hcCA9IG9wdGlvbnMueG1sbnMgfHwge307XG4gIHZhciBpc0hUTUwgPSAvXFwveD9odG1sPyQvLnRlc3QobWltZVR5cGUpO1xuICB2YXIgZW50aXR5TWFwID0gaXNIVE1MID8gaHRtbEVudGl0eS5lbnRpdHlNYXAgOiB7XG4gICAgJ2x0JzogJzwnLFxuICAgICdndCc6ICc+JyxcbiAgICAnYW1wJzogJyYnLFxuICAgICdxdW90JzogJ1wiJyxcbiAgICAnYXBvcyc6IFwiJ1wiXG4gIH07XG4gIGlmIChsb2NhdG9yKSB7XG4gICAgZG9tQnVpbGRlci5zZXREb2N1bWVudExvY2F0b3IobG9jYXRvcik7XG4gIH1cbiAgc2F4LmVycm9ySGFuZGxlciA9IGJ1aWxkRXJyb3JIYW5kbGVyKGVycm9ySGFuZGxlciwgZG9tQnVpbGRlciwgbG9jYXRvcik7XG4gIHNheC5kb21CdWlsZGVyID0gb3B0aW9ucy5kb21CdWlsZGVyIHx8IGRvbUJ1aWxkZXI7XG4gIGlmIChpc0hUTUwpIHtcbiAgICBkZWZhdWx0TlNNYXBbJyddID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuICB9XG4gIGRlZmF1bHROU01hcC54bWwgPSBkZWZhdWx0TlNNYXAueG1sIHx8ICdodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2UnO1xuICBpZiAoc291cmNlKSB7XG4gICAgc2F4LnBhcnNlKHNvdXJjZSwgZGVmYXVsdE5TTWFwLCBlbnRpdHlNYXApO1xuICB9IGVsc2Uge1xuICAgIHNheC5lcnJvckhhbmRsZXIuZXJyb3IoXCJpbnZhbGlkIGRvYyBzb3VyY2VcIik7XG4gIH1cbiAgcmV0dXJuIGRvbUJ1aWxkZXIuZG9jO1xufTtcbmZ1bmN0aW9uIGJ1aWxkRXJyb3JIYW5kbGVyKGVycm9ySW1wbCwgZG9tQnVpbGRlciwgbG9jYXRvcikge1xuICBpZiAoIWVycm9ySW1wbCkge1xuICAgIGlmIChkb21CdWlsZGVyIGluc3RhbmNlb2YgRE9NSGFuZGxlcikge1xuICAgICAgcmV0dXJuIGRvbUJ1aWxkZXI7XG4gICAgfVxuICAgIGVycm9ySW1wbCA9IGRvbUJ1aWxkZXI7XG4gIH1cbiAgdmFyIGVycm9ySGFuZGxlciA9IHt9O1xuICB2YXIgaXNDYWxsYmFjayA9IGVycm9ySW1wbCBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuICBsb2NhdG9yID0gbG9jYXRvciB8fCB7fTtcbiAgZnVuY3Rpb24gYnVpbGQoa2V5KSB7XG4gICAgdmFyIGZuID0gZXJyb3JJbXBsW2tleV07XG4gICAgaWYgKCFmbiAmJiBpc0NhbGxiYWNrKSB7XG4gICAgICBmbiA9IGVycm9ySW1wbC5sZW5ndGggPT0gMiA/IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgZXJyb3JJbXBsKGtleSwgbXNnKTtcbiAgICAgIH0gOiBlcnJvckltcGw7XG4gICAgfVxuICAgIGVycm9ySGFuZGxlcltrZXldID0gZm4gJiYgZnVuY3Rpb24gKG1zZykge1xuICAgICAgZm4oJ1t4bWxkb20gJyArIGtleSArICddXFx0JyArIG1zZyArIF9sb2NhdG9yKGxvY2F0b3IpKTtcbiAgICB9IHx8IGZ1bmN0aW9uICgpIHt9O1xuICB9XG4gIGJ1aWxkKCd3YXJuaW5nJyk7XG4gIGJ1aWxkKCdlcnJvcicpO1xuICBidWlsZCgnZmF0YWxFcnJvcicpO1xuICByZXR1cm4gZXJyb3JIYW5kbGVyO1xufVxuZnVuY3Rpb24gRE9NSGFuZGxlcigpIHtcbiAgdGhpcy5jZGF0YSA9IGZhbHNlO1xufVxuZnVuY3Rpb24gcG9zaXRpb24obG9jYXRvciwgbm9kZSkge1xuICBub2RlLmxpbmVOdW1iZXIgPSBsb2NhdG9yLmxpbmVOdW1iZXI7XG4gIG5vZGUuY29sdW1uTnVtYmVyID0gbG9jYXRvci5jb2x1bW5OdW1iZXI7XG59XG5ET01IYW5kbGVyLnByb3RvdHlwZSA9IHtcbiAgc3RhcnREb2N1bWVudDogZnVuY3Rpb24gc3RhcnREb2N1bWVudCgpIHtcbiAgICB0aGlzLmRvYyA9IG5ldyBET01JbXBsZW1lbnRhdGlvbigpLmNyZWF0ZURvY3VtZW50KG51bGwsIG51bGwsIG51bGwpO1xuICAgIGlmICh0aGlzLmxvY2F0b3IpIHtcbiAgICAgIHRoaXMuZG9jLmRvY3VtZW50VVJJID0gdGhpcy5sb2NhdG9yLnN5c3RlbUlkO1xuICAgIH1cbiAgfSxcbiAgc3RhcnRFbGVtZW50OiBmdW5jdGlvbiBzdGFydEVsZW1lbnQobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUsIHFOYW1lLCBhdHRycykge1xuICAgIHZhciBkb2MgPSB0aGlzLmRvYztcbiAgICB2YXIgZWwgPSBkb2MuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcU5hbWUgfHwgbG9jYWxOYW1lKTtcbiAgICB2YXIgbGVuID0gYXR0cnMubGVuZ3RoO1xuICAgIGFwcGVuZEVsZW1lbnQodGhpcywgZWwpO1xuICAgIHRoaXMuY3VycmVudEVsZW1lbnQgPSBlbDtcbiAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLCBlbCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIG5hbWVzcGFjZVVSSSA9IGF0dHJzLmdldFVSSShpKTtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJzLmdldFZhbHVlKGkpO1xuICAgICAgdmFyIHFOYW1lID0gYXR0cnMuZ2V0UU5hbWUoaSk7XG4gICAgICB2YXIgYXR0ciA9IGRvYy5jcmVhdGVBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIHFOYW1lKTtcbiAgICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbihhdHRycy5nZXRMb2NhdG9yKGkpLCBhdHRyKTtcbiAgICAgIGF0dHIudmFsdWUgPSBhdHRyLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgZWwuc2V0QXR0cmlidXRlTm9kZShhdHRyKTtcbiAgICB9XG4gIH0sXG4gIGVuZEVsZW1lbnQ6IGZ1bmN0aW9uIGVuZEVsZW1lbnQobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUsIHFOYW1lKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRFbGVtZW50O1xuICAgIHZhciB0YWdOYW1lID0gY3VycmVudC50YWdOYW1lO1xuICAgIHRoaXMuY3VycmVudEVsZW1lbnQgPSBjdXJyZW50LnBhcmVudE5vZGU7XG4gIH0sXG4gIHN0YXJ0UHJlZml4TWFwcGluZzogZnVuY3Rpb24gc3RhcnRQcmVmaXhNYXBwaW5nKHByZWZpeCwgdXJpKSB7fSxcbiAgZW5kUHJlZml4TWFwcGluZzogZnVuY3Rpb24gZW5kUHJlZml4TWFwcGluZyhwcmVmaXgpIHt9LFxuICBwcm9jZXNzaW5nSW5zdHJ1Y3Rpb246IGZ1bmN0aW9uIHByb2Nlc3NpbmdJbnN0cnVjdGlvbih0YXJnZXQsIGRhdGEpIHtcbiAgICB2YXIgaW5zID0gdGhpcy5kb2MuY3JlYXRlUHJvY2Vzc2luZ0luc3RydWN0aW9uKHRhcmdldCwgZGF0YSk7XG4gICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvciwgaW5zKTtcbiAgICBhcHBlbmRFbGVtZW50KHRoaXMsIGlucyk7XG4gIH0sXG4gIGlnbm9yYWJsZVdoaXRlc3BhY2U6IGZ1bmN0aW9uIGlnbm9yYWJsZVdoaXRlc3BhY2UoY2gsIHN0YXJ0LCBsZW5ndGgpIHt9LFxuICBjaGFyYWN0ZXJzOiBmdW5jdGlvbiBjaGFyYWN0ZXJzKGNoYXJzLCBzdGFydCwgbGVuZ3RoKSB7XG4gICAgY2hhcnMgPSBfdG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoY2hhcnMpIHtcbiAgICAgIGlmICh0aGlzLmNkYXRhKSB7XG4gICAgICAgIHZhciBjaGFyTm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUNEQVRBU2VjdGlvbihjaGFycyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2hhck5vZGUgPSB0aGlzLmRvYy5jcmVhdGVUZXh0Tm9kZShjaGFycyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXJyZW50RWxlbWVudCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNoYXJOb2RlKTtcbiAgICAgIH0gZWxzZSBpZiAoL15cXHMqJC8udGVzdChjaGFycykpIHtcbiAgICAgICAgdGhpcy5kb2MuYXBwZW5kQ2hpbGQoY2hhck5vZGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvciwgY2hhck5vZGUpO1xuICAgIH1cbiAgfSxcbiAgc2tpcHBlZEVudGl0eTogZnVuY3Rpb24gc2tpcHBlZEVudGl0eShuYW1lKSB7fSxcbiAgZW5kRG9jdW1lbnQ6IGZ1bmN0aW9uIGVuZERvY3VtZW50KCkge1xuICAgIHRoaXMuZG9jLm5vcm1hbGl6ZSgpO1xuICB9LFxuICBzZXREb2N1bWVudExvY2F0b3I6IGZ1bmN0aW9uIHNldERvY3VtZW50TG9jYXRvcihsb2NhdG9yKSB7XG4gICAgaWYgKHRoaXMubG9jYXRvciA9IGxvY2F0b3IpIHtcbiAgICAgIGxvY2F0b3IubGluZU51bWJlciA9IDA7XG4gICAgfVxuICB9LFxuICBjb21tZW50OiBmdW5jdGlvbiBjb21tZW50KGNoYXJzLCBzdGFydCwgbGVuZ3RoKSB7XG4gICAgY2hhcnMgPSBfdG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB2YXIgY29tbSA9IHRoaXMuZG9jLmNyZWF0ZUNvbW1lbnQoY2hhcnMpO1xuICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsIGNvbW0pO1xuICAgIGFwcGVuZEVsZW1lbnQodGhpcywgY29tbSk7XG4gIH0sXG4gIHN0YXJ0Q0RBVEE6IGZ1bmN0aW9uIHN0YXJ0Q0RBVEEoKSB7XG4gICAgdGhpcy5jZGF0YSA9IHRydWU7XG4gIH0sXG4gIGVuZENEQVRBOiBmdW5jdGlvbiBlbmRDREFUQSgpIHtcbiAgICB0aGlzLmNkYXRhID0gZmFsc2U7XG4gIH0sXG4gIHN0YXJ0RFREOiBmdW5jdGlvbiBzdGFydERURChuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpIHtcbiAgICB2YXIgaW1wbCA9IHRoaXMuZG9jLmltcGxlbWVudGF0aW9uO1xuICAgIGlmIChpbXBsICYmIGltcGwuY3JlYXRlRG9jdW1lbnRUeXBlKSB7XG4gICAgICB2YXIgZHQgPSBpbXBsLmNyZWF0ZURvY3VtZW50VHlwZShuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpO1xuICAgICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvciwgZHQpO1xuICAgICAgYXBwZW5kRWxlbWVudCh0aGlzLCBkdCk7XG4gICAgfVxuICB9LFxuICB3YXJuaW5nOiBmdW5jdGlvbiB3YXJuaW5nKGVycm9yKSB7XG4gICAgY29uc29sZS53YXJuKCdbeG1sZG9tIHdhcm5pbmddXFx0JyArIGVycm9yLCBfbG9jYXRvcih0aGlzLmxvY2F0b3IpKTtcbiAgfSxcbiAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKF9lcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1t4bWxkb20gZXJyb3JdXFx0JyArIF9lcnJvciwgX2xvY2F0b3IodGhpcy5sb2NhdG9yKSk7XG4gIH0sXG4gIGZhdGFsRXJyb3I6IGZ1bmN0aW9uIGZhdGFsRXJyb3IoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbeG1sZG9tIGZhdGFsRXJyb3JdXFx0JyArIGVycm9yLCBfbG9jYXRvcih0aGlzLmxvY2F0b3IpKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbmZ1bmN0aW9uIF9sb2NhdG9yKGwpIHtcbiAgaWYgKGwpIHtcbiAgICByZXR1cm4gJ1xcbkAnICsgKGwuc3lzdGVtSWQgfHwgJycpICsgJyNbbGluZTonICsgbC5saW5lTnVtYmVyICsgJyxjb2w6JyArIGwuY29sdW1uTnVtYmVyICsgJ10nO1xuICB9XG59XG5mdW5jdGlvbiBfdG9TdHJpbmcoY2hhcnMsIHN0YXJ0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiBjaGFycyA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBjaGFycy5zdWJzdHIoc3RhcnQsIGxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGNoYXJzLmxlbmd0aCA+PSBzdGFydCArIGxlbmd0aCB8fCBzdGFydCkge1xuICAgICAgcmV0dXJuIG5ldyBqYXZhLmxhbmcuU3RyaW5nKGNoYXJzLCBzdGFydCwgbGVuZ3RoKSArICcnO1xuICAgIH1cbiAgICByZXR1cm4gY2hhcnM7XG4gIH1cbn1cblwiZW5kRFRELHN0YXJ0RW50aXR5LGVuZEVudGl0eSxhdHRyaWJ1dGVEZWNsLGVsZW1lbnREZWNsLGV4dGVybmFsRW50aXR5RGVjbCxpbnRlcm5hbEVudGl0eURlY2wscmVzb2x2ZUVudGl0eSxnZXRFeHRlcm5hbFN1YnNldCxub3RhdGlvbkRlY2wsdW5wYXJzZWRFbnRpdHlEZWNsXCIucmVwbGFjZSgvXFx3Ky9nLCBmdW5jdGlvbiAoa2V5KSB7XG4gIERPTUhhbmRsZXIucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59KTtcbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnQoaGFuZGVyLCBub2RlKSB7XG4gIGlmICghaGFuZGVyLmN1cnJlbnRFbGVtZW50KSB7XG4gICAgaGFuZGVyLmRvYy5hcHBlbmRDaGlsZChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICBoYW5kZXIuY3VycmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIH1cbn1cbnZhciBodG1sRW50aXR5ID0gcmVxdWlyZSgnLi9lbnRpdGllcycpO1xudmFyIFhNTFJlYWRlciA9IHJlcXVpcmUoJy4vc2F4JykuWE1MUmVhZGVyO1xudmFyIERPTUltcGxlbWVudGF0aW9uID0gZXhwb3J0cy5ET01JbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vZG9tJykuRE9NSW1wbGVtZW50YXRpb247XG5leHBvcnRzLlhNTFNlcmlhbGl6ZXIgPSByZXF1aXJlKCcuL2RvbScpLlhNTFNlcmlhbGl6ZXI7XG5leHBvcnRzLkRPTVBhcnNlciA9IERPTVBhcnNlcjtcblxufSx7XCIuL2RvbVwiOjU4LFwiLi9lbnRpdGllc1wiOjU5LFwiLi9zYXhcIjo2MH1dLDU4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBjb3B5KHNyYywgZGVzdCkge1xuICBmb3IgKHZhciBwIGluIHNyYykge1xuICAgIGRlc3RbcF0gPSBzcmNbcF07XG4gIH1cbn1cbmZ1bmN0aW9uIF9leHRlbmRzKENsYXNzLCBTdXBlcikge1xuICB2YXIgcHQgPSBDbGFzcy5wcm90b3R5cGU7XG4gIGlmICghKHB0IGluc3RhbmNlb2YgU3VwZXIpKSB7XG4gICAgdmFyIHQgPSBmdW5jdGlvbiB0KCkge307XG4gICAgO1xuICAgIHQucHJvdG90eXBlID0gU3VwZXIucHJvdG90eXBlO1xuICAgIHQgPSBuZXcgdCgpO1xuICAgIGNvcHkocHQsIHQpO1xuICAgIENsYXNzLnByb3RvdHlwZSA9IHB0ID0gdDtcbiAgfVxuICBpZiAocHQuY29uc3RydWN0b3IgIT0gQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIENsYXNzICE9ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1bmtub3cgQ2xhc3M6XCIgKyBDbGFzcyk7XG4gICAgfVxuICAgIHB0LmNvbnN0cnVjdG9yID0gQ2xhc3M7XG4gIH1cbn1cbnZhciBodG1sbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG52YXIgTm9kZVR5cGUgPSB7fTtcbnZhciBFTEVNRU5UX05PREUgPSBOb2RlVHlwZS5FTEVNRU5UX05PREUgPSAxO1xudmFyIEFUVFJJQlVURV9OT0RFID0gTm9kZVR5cGUuQVRUUklCVVRFX05PREUgPSAyO1xudmFyIFRFWFRfTk9ERSA9IE5vZGVUeXBlLlRFWFRfTk9ERSA9IDM7XG52YXIgQ0RBVEFfU0VDVElPTl9OT0RFID0gTm9kZVR5cGUuQ0RBVEFfU0VDVElPTl9OT0RFID0gNDtcbnZhciBFTlRJVFlfUkVGRVJFTkNFX05PREUgPSBOb2RlVHlwZS5FTlRJVFlfUkVGRVJFTkNFX05PREUgPSA1O1xudmFyIEVOVElUWV9OT0RFID0gTm9kZVR5cGUuRU5USVRZX05PREUgPSA2O1xudmFyIFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERSA9IE5vZGVUeXBlLlBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERSA9IDc7XG52YXIgQ09NTUVOVF9OT0RFID0gTm9kZVR5cGUuQ09NTUVOVF9OT0RFID0gODtcbnZhciBET0NVTUVOVF9OT0RFID0gTm9kZVR5cGUuRE9DVU1FTlRfTk9ERSA9IDk7XG52YXIgRE9DVU1FTlRfVFlQRV9OT0RFID0gTm9kZVR5cGUuRE9DVU1FTlRfVFlQRV9OT0RFID0gMTA7XG52YXIgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSA9IE5vZGVUeXBlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgPSAxMTtcbnZhciBOT1RBVElPTl9OT0RFID0gTm9kZVR5cGUuTk9UQVRJT05fTk9ERSA9IDEyO1xudmFyIEV4Y2VwdGlvbkNvZGUgPSB7fTtcbnZhciBFeGNlcHRpb25NZXNzYWdlID0ge307XG52YXIgSU5ERVhfU0laRV9FUlIgPSBFeGNlcHRpb25Db2RlLklOREVYX1NJWkVfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbMV0gPSBcIkluZGV4IHNpemUgZXJyb3JcIiwgMSk7XG52YXIgRE9NU1RSSU5HX1NJWkVfRVJSID0gRXhjZXB0aW9uQ29kZS5ET01TVFJJTkdfU0laRV9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsyXSA9IFwiRE9NU3RyaW5nIHNpemUgZXJyb3JcIiwgMik7XG52YXIgSElFUkFSQ0hZX1JFUVVFU1RfRVJSID0gRXhjZXB0aW9uQ29kZS5ISUVSQVJDSFlfUkVRVUVTVF9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVszXSA9IFwiSGllcmFyY2h5IHJlcXVlc3QgZXJyb3JcIiwgMyk7XG52YXIgV1JPTkdfRE9DVU1FTlRfRVJSID0gRXhjZXB0aW9uQ29kZS5XUk9OR19ET0NVTUVOVF9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVs0XSA9IFwiV3JvbmcgZG9jdW1lbnRcIiwgNCk7XG52YXIgSU5WQUxJRF9DSEFSQUNURVJfRVJSID0gRXhjZXB0aW9uQ29kZS5JTlZBTElEX0NIQVJBQ1RFUl9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVs1XSA9IFwiSW52YWxpZCBjaGFyYWN0ZXJcIiwgNSk7XG52YXIgTk9fREFUQV9BTExPV0VEX0VSUiA9IEV4Y2VwdGlvbkNvZGUuTk9fREFUQV9BTExPV0VEX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzZdID0gXCJObyBkYXRhIGFsbG93ZWRcIiwgNik7XG52YXIgTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSID0gRXhjZXB0aW9uQ29kZS5OT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVs3XSA9IFwiTm8gbW9kaWZpY2F0aW9uIGFsbG93ZWRcIiwgNyk7XG52YXIgTk9UX0ZPVU5EX0VSUiA9IEV4Y2VwdGlvbkNvZGUuTk9UX0ZPVU5EX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzhdID0gXCJOb3QgZm91bmRcIiwgOCk7XG52YXIgTk9UX1NVUFBPUlRFRF9FUlIgPSBFeGNlcHRpb25Db2RlLk5PVF9TVVBQT1JURURfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbOV0gPSBcIk5vdCBzdXBwb3J0ZWRcIiwgOSk7XG52YXIgSU5VU0VfQVRUUklCVVRFX0VSUiA9IEV4Y2VwdGlvbkNvZGUuSU5VU0VfQVRUUklCVVRFX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzEwXSA9IFwiQXR0cmlidXRlIGluIHVzZVwiLCAxMCk7XG52YXIgSU5WQUxJRF9TVEFURV9FUlIgPSBFeGNlcHRpb25Db2RlLklOVkFMSURfU1RBVEVfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbMTFdID0gXCJJbnZhbGlkIHN0YXRlXCIsIDExKTtcbnZhciBTWU5UQVhfRVJSID0gRXhjZXB0aW9uQ29kZS5TWU5UQVhfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbMTJdID0gXCJTeW50YXggZXJyb3JcIiwgMTIpO1xudmFyIElOVkFMSURfTU9ESUZJQ0FUSU9OX0VSUiA9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbMTNdID0gXCJJbnZhbGlkIG1vZGlmaWNhdGlvblwiLCAxMyk7XG52YXIgTkFNRVNQQUNFX0VSUiA9IEV4Y2VwdGlvbkNvZGUuTkFNRVNQQUNFX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzE0XSA9IFwiSW52YWxpZCBuYW1lc3BhY2VcIiwgMTQpO1xudmFyIElOVkFMSURfQUNDRVNTX0VSUiA9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9BQ0NFU1NfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbMTVdID0gXCJJbnZhbGlkIGFjY2Vzc1wiLCAxNSk7XG5mdW5jdGlvbiBET01FeGNlcHRpb24oY29kZSwgbWVzc2FnZSkge1xuICBpZiAobWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgdmFyIGVycm9yID0gbWVzc2FnZTtcbiAgfSBlbHNlIHtcbiAgICBlcnJvciA9IHRoaXM7XG4gICAgRXJyb3IuY2FsbCh0aGlzLCBFeGNlcHRpb25NZXNzYWdlW2NvZGVdKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBFeGNlcHRpb25NZXNzYWdlW2NvZGVdO1xuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRE9NRXhjZXB0aW9uKTtcbiAgfVxuICBlcnJvci5jb2RlID0gY29kZTtcbiAgaWYgKG1lc3NhZ2UpIHRoaXMubWVzc2FnZSA9IHRoaXMubWVzc2FnZSArIFwiOiBcIiArIG1lc3NhZ2U7XG4gIHJldHVybiBlcnJvcjtcbn1cbjtcbkRPTUV4Y2VwdGlvbi5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5jb3B5KEV4Y2VwdGlvbkNvZGUsIERPTUV4Y2VwdGlvbik7XG5mdW5jdGlvbiBOb2RlTGlzdCgpIHt9XG47XG5Ob2RlTGlzdC5wcm90b3R5cGUgPSB7XG4gIGxlbmd0aDogMCxcbiAgaXRlbTogZnVuY3Rpb24gaXRlbShpbmRleCkge1xuICAgIHJldHVybiB0aGlzW2luZGV4XSB8fCBudWxsO1xuICB9LFxuICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoaXNIVE1MLCBub2RlRmlsdGVyKSB7XG4gICAgZm9yICh2YXIgYnVmID0gW10sIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgc2VyaWFsaXplVG9TdHJpbmcodGhpc1tpXSwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmLmpvaW4oJycpO1xuICB9XG59O1xuZnVuY3Rpb24gTGl2ZU5vZGVMaXN0KG5vZGUsIHJlZnJlc2gpIHtcbiAgdGhpcy5fbm9kZSA9IG5vZGU7XG4gIHRoaXMuX3JlZnJlc2ggPSByZWZyZXNoO1xuICBfdXBkYXRlTGl2ZUxpc3QodGhpcyk7XG59XG5mdW5jdGlvbiBfdXBkYXRlTGl2ZUxpc3QobGlzdCkge1xuICB2YXIgaW5jID0gbGlzdC5fbm9kZS5faW5jIHx8IGxpc3QuX25vZGUub3duZXJEb2N1bWVudC5faW5jO1xuICBpZiAobGlzdC5faW5jICE9IGluYykge1xuICAgIHZhciBscyA9IGxpc3QuX3JlZnJlc2gobGlzdC5fbm9kZSk7XG4gICAgX19zZXRfXyhsaXN0LCAnbGVuZ3RoJywgbHMubGVuZ3RoKTtcbiAgICBjb3B5KGxzLCBsaXN0KTtcbiAgICBsaXN0Ll9pbmMgPSBpbmM7XG4gIH1cbn1cbkxpdmVOb2RlTGlzdC5wcm90b3R5cGUuaXRlbSA9IGZ1bmN0aW9uIChpKSB7XG4gIF91cGRhdGVMaXZlTGlzdCh0aGlzKTtcbiAgcmV0dXJuIHRoaXNbaV07XG59O1xuX2V4dGVuZHMoTGl2ZU5vZGVMaXN0LCBOb2RlTGlzdCk7XG5mdW5jdGlvbiBOYW1lZE5vZGVNYXAoKSB7fVxuO1xuZnVuY3Rpb24gX2ZpbmROb2RlSW5kZXgobGlzdCwgbm9kZSkge1xuICB2YXIgaSA9IGxpc3QubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKGxpc3RbaV0gPT09IG5vZGUpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gX2FkZE5hbWVkTm9kZShlbCwgbGlzdCwgbmV3QXR0ciwgb2xkQXR0cikge1xuICBpZiAob2xkQXR0cikge1xuICAgIGxpc3RbX2ZpbmROb2RlSW5kZXgobGlzdCwgb2xkQXR0cildID0gbmV3QXR0cjtcbiAgfSBlbHNlIHtcbiAgICBsaXN0W2xpc3QubGVuZ3RoKytdID0gbmV3QXR0cjtcbiAgfVxuICBpZiAoZWwpIHtcbiAgICBuZXdBdHRyLm93bmVyRWxlbWVudCA9IGVsO1xuICAgIHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50O1xuICAgIGlmIChkb2MpIHtcbiAgICAgIG9sZEF0dHIgJiYgX29uUmVtb3ZlQXR0cmlidXRlKGRvYywgZWwsIG9sZEF0dHIpO1xuICAgICAgX29uQWRkQXR0cmlidXRlKGRvYywgZWwsIG5ld0F0dHIpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gX3JlbW92ZU5hbWVkTm9kZShlbCwgbGlzdCwgYXR0cikge1xuICB2YXIgaSA9IF9maW5kTm9kZUluZGV4KGxpc3QsIGF0dHIpO1xuICBpZiAoaSA+PSAwKSB7XG4gICAgdmFyIGxhc3RJbmRleCA9IGxpc3QubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAoaSA8IGxhc3RJbmRleCkge1xuICAgICAgbGlzdFtpXSA9IGxpc3RbKytpXTtcbiAgICB9XG4gICAgbGlzdC5sZW5ndGggPSBsYXN0SW5kZXg7XG4gICAgaWYgKGVsKSB7XG4gICAgICB2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcbiAgICAgIGlmIChkb2MpIHtcbiAgICAgICAgX29uUmVtb3ZlQXR0cmlidXRlKGRvYywgZWwsIGF0dHIpO1xuICAgICAgICBhdHRyLm93bmVyRWxlbWVudCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IERPTUV4Y2VwdGlvbihOT1RfRk9VTkRfRVJSLCBuZXcgRXJyb3IoZWwudGFnTmFtZSArICdAJyArIGF0dHIpKTtcbiAgfVxufVxuTmFtZWROb2RlTWFwLnByb3RvdHlwZSA9IHtcbiAgbGVuZ3RoOiAwLFxuICBpdGVtOiBOb2RlTGlzdC5wcm90b3R5cGUuaXRlbSxcbiAgZ2V0TmFtZWRJdGVtOiBmdW5jdGlvbiBnZXROYW1lZEl0ZW0oa2V5KSB7XG4gICAgdmFyIGkgPSB0aGlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgYXR0ciA9IHRoaXNbaV07XG4gICAgICBpZiAoYXR0ci5ub2RlTmFtZSA9PSBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGF0dHI7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZXROYW1lZEl0ZW06IGZ1bmN0aW9uIHNldE5hbWVkSXRlbShhdHRyKSB7XG4gICAgdmFyIGVsID0gYXR0ci5vd25lckVsZW1lbnQ7XG4gICAgaWYgKGVsICYmIGVsICE9IHRoaXMuX293bmVyRWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihJTlVTRV9BVFRSSUJVVEVfRVJSKTtcbiAgICB9XG4gICAgdmFyIG9sZEF0dHIgPSB0aGlzLmdldE5hbWVkSXRlbShhdHRyLm5vZGVOYW1lKTtcbiAgICBfYWRkTmFtZWROb2RlKHRoaXMuX293bmVyRWxlbWVudCwgdGhpcywgYXR0ciwgb2xkQXR0cik7XG4gICAgcmV0dXJuIG9sZEF0dHI7XG4gIH0sXG4gIHNldE5hbWVkSXRlbU5TOiBmdW5jdGlvbiBzZXROYW1lZEl0ZW1OUyhhdHRyKSB7XG4gICAgdmFyIGVsID0gYXR0ci5vd25lckVsZW1lbnQsXG4gICAgICBvbGRBdHRyO1xuICAgIGlmIChlbCAmJiBlbCAhPSB0aGlzLl9vd25lckVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oSU5VU0VfQVRUUklCVVRFX0VSUik7XG4gICAgfVxuICAgIG9sZEF0dHIgPSB0aGlzLmdldE5hbWVkSXRlbU5TKGF0dHIubmFtZXNwYWNlVVJJLCBhdHRyLmxvY2FsTmFtZSk7XG4gICAgX2FkZE5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsIHRoaXMsIGF0dHIsIG9sZEF0dHIpO1xuICAgIHJldHVybiBvbGRBdHRyO1xuICB9LFxuICByZW1vdmVOYW1lZEl0ZW06IGZ1bmN0aW9uIHJlbW92ZU5hbWVkSXRlbShrZXkpIHtcbiAgICB2YXIgYXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtKGtleSk7XG4gICAgX3JlbW92ZU5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsIHRoaXMsIGF0dHIpO1xuICAgIHJldHVybiBhdHRyO1xuICB9LFxuICByZW1vdmVOYW1lZEl0ZW1OUzogZnVuY3Rpb24gcmVtb3ZlTmFtZWRJdGVtTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICB2YXIgYXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpO1xuICAgIF9yZW1vdmVOYW1lZE5vZGUodGhpcy5fb3duZXJFbGVtZW50LCB0aGlzLCBhdHRyKTtcbiAgICByZXR1cm4gYXR0cjtcbiAgfSxcbiAgZ2V0TmFtZWRJdGVtTlM6IGZ1bmN0aW9uIGdldE5hbWVkSXRlbU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgdmFyIGkgPSB0aGlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgbm9kZSA9IHRoaXNbaV07XG4gICAgICBpZiAobm9kZS5sb2NhbE5hbWUgPT0gbG9jYWxOYW1lICYmIG5vZGUubmFtZXNwYWNlVVJJID09IG5hbWVzcGFjZVVSSSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5mdW5jdGlvbiBET01JbXBsZW1lbnRhdGlvbihmZWF0dXJlcykge1xuICB0aGlzLl9mZWF0dXJlcyA9IHt9O1xuICBpZiAoZmVhdHVyZXMpIHtcbiAgICBmb3IgKHZhciBmZWF0dXJlIGluIGZlYXR1cmVzKSB7XG4gICAgICB0aGlzLl9mZWF0dXJlcyA9IGZlYXR1cmVzW2ZlYXR1cmVdO1xuICAgIH1cbiAgfVxufVxuO1xuRE9NSW1wbGVtZW50YXRpb24ucHJvdG90eXBlID0ge1xuICBoYXNGZWF0dXJlOiBmdW5jdGlvbiBoYXNGZWF0dXJlKGZlYXR1cmUsIHZlcnNpb24pIHtcbiAgICB2YXIgdmVyc2lvbnMgPSB0aGlzLl9mZWF0dXJlc1tmZWF0dXJlLnRvTG93ZXJDYXNlKCldO1xuICAgIGlmICh2ZXJzaW9ucyAmJiAoIXZlcnNpb24gfHwgdmVyc2lvbiBpbiB2ZXJzaW9ucykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxuICBjcmVhdGVEb2N1bWVudDogZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnQobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCBkb2N0eXBlKSB7XG4gICAgdmFyIGRvYyA9IG5ldyBEb2N1bWVudCgpO1xuICAgIGRvYy5pbXBsZW1lbnRhdGlvbiA9IHRoaXM7XG4gICAgZG9jLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcbiAgICBkb2MuZG9jdHlwZSA9IGRvY3R5cGU7XG4gICAgaWYgKGRvY3R5cGUpIHtcbiAgICAgIGRvYy5hcHBlbmRDaGlsZChkb2N0eXBlKTtcbiAgICB9XG4gICAgaWYgKHF1YWxpZmllZE5hbWUpIHtcbiAgICAgIHZhciByb290ID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUpO1xuICAgICAgZG9jLmFwcGVuZENoaWxkKHJvb3QpO1xuICAgIH1cbiAgICByZXR1cm4gZG9jO1xuICB9LFxuICBjcmVhdGVEb2N1bWVudFR5cGU6IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50VHlwZShxdWFsaWZpZWROYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBEb2N1bWVudFR5cGUoKTtcbiAgICBub2RlLm5hbWUgPSBxdWFsaWZpZWROYW1lO1xuICAgIG5vZGUubm9kZU5hbWUgPSBxdWFsaWZpZWROYW1lO1xuICAgIG5vZGUucHVibGljSWQgPSBwdWJsaWNJZDtcbiAgICBub2RlLnN5c3RlbUlkID0gc3lzdGVtSWQ7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG5mdW5jdGlvbiBOb2RlKCkge31cbjtcbk5vZGUucHJvdG90eXBlID0ge1xuICBmaXJzdENoaWxkOiBudWxsLFxuICBsYXN0Q2hpbGQ6IG51bGwsXG4gIHByZXZpb3VzU2libGluZzogbnVsbCxcbiAgbmV4dFNpYmxpbmc6IG51bGwsXG4gIGF0dHJpYnV0ZXM6IG51bGwsXG4gIHBhcmVudE5vZGU6IG51bGwsXG4gIGNoaWxkTm9kZXM6IG51bGwsXG4gIG93bmVyRG9jdW1lbnQ6IG51bGwsXG4gIG5vZGVWYWx1ZTogbnVsbCxcbiAgbmFtZXNwYWNlVVJJOiBudWxsLFxuICBwcmVmaXg6IG51bGwsXG4gIGxvY2FsTmFtZTogbnVsbCxcbiAgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbiBpbnNlcnRCZWZvcmUobmV3Q2hpbGQsIHJlZkNoaWxkKSB7XG4gICAgcmV0dXJuIF9pbnNlcnRCZWZvcmUodGhpcywgbmV3Q2hpbGQsIHJlZkNoaWxkKTtcbiAgfSxcbiAgcmVwbGFjZUNoaWxkOiBmdW5jdGlvbiByZXBsYWNlQ2hpbGQobmV3Q2hpbGQsIG9sZENoaWxkKSB7XG4gICAgdGhpcy5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsIG9sZENoaWxkKTtcbiAgICBpZiAob2xkQ2hpbGQpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2hpbGQob2xkQ2hpbGQpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlQ2hpbGQ6IGZ1bmN0aW9uIHJlbW92ZUNoaWxkKG9sZENoaWxkKSB7XG4gICAgcmV0dXJuIF9yZW1vdmVDaGlsZCh0aGlzLCBvbGRDaGlsZCk7XG4gIH0sXG4gIGFwcGVuZENoaWxkOiBmdW5jdGlvbiBhcHBlbmRDaGlsZChuZXdDaGlsZCkge1xuICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShuZXdDaGlsZCwgbnVsbCk7XG4gIH0sXG4gIGhhc0NoaWxkTm9kZXM6IGZ1bmN0aW9uIGhhc0NoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RDaGlsZCAhPSBudWxsO1xuICB9LFxuICBjbG9uZU5vZGU6IGZ1bmN0aW9uIGNsb25lTm9kZShkZWVwKSB7XG4gICAgcmV0dXJuIF9jbG9uZU5vZGUodGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMsIHRoaXMsIGRlZXApO1xuICB9LFxuICBub3JtYWxpemU6IGZ1bmN0aW9uIG5vcm1hbGl6ZSgpIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICB2YXIgbmV4dCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgaWYgKG5leHQgJiYgbmV4dC5ub2RlVHlwZSA9PSBURVhUX05PREUgJiYgY2hpbGQubm9kZVR5cGUgPT0gVEVYVF9OT0RFKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQobmV4dCk7XG4gICAgICAgIGNoaWxkLmFwcGVuZERhdGEobmV4dC5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLm5vcm1hbGl6ZSgpO1xuICAgICAgICBjaGlsZCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBpc1N1cHBvcnRlZDogZnVuY3Rpb24gaXNTdXBwb3J0ZWQoZmVhdHVyZSwgdmVyc2lvbikge1xuICAgIHJldHVybiB0aGlzLm93bmVyRG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZShmZWF0dXJlLCB2ZXJzaW9uKTtcbiAgfSxcbiAgaGFzQXR0cmlidXRlczogZnVuY3Rpb24gaGFzQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aCA+IDA7XG4gIH0sXG4gIGxvb2t1cFByZWZpeDogZnVuY3Rpb24gbG9va3VwUHJlZml4KG5hbWVzcGFjZVVSSSkge1xuICAgIHZhciBlbCA9IHRoaXM7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICB2YXIgbWFwID0gZWwuX25zTWFwO1xuICAgICAgaWYgKG1hcCkge1xuICAgICAgICBmb3IgKHZhciBuIGluIG1hcCkge1xuICAgICAgICAgIGlmIChtYXBbbl0gPT0gbmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsID0gZWwubm9kZVR5cGUgPT0gQVRUUklCVVRFX05PREUgPyBlbC5vd25lckRvY3VtZW50IDogZWwucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIGxvb2t1cE5hbWVzcGFjZVVSSTogZnVuY3Rpb24gbG9va3VwTmFtZXNwYWNlVVJJKHByZWZpeCkge1xuICAgIHZhciBlbCA9IHRoaXM7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICB2YXIgbWFwID0gZWwuX25zTWFwO1xuICAgICAgaWYgKG1hcCkge1xuICAgICAgICBpZiAocHJlZml4IGluIG1hcCkge1xuICAgICAgICAgIHJldHVybiBtYXBbcHJlZml4XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWwgPSBlbC5ub2RlVHlwZSA9PSBBVFRSSUJVVEVfTk9ERSA/IGVsLm93bmVyRG9jdW1lbnQgOiBlbC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgaXNEZWZhdWx0TmFtZXNwYWNlOiBmdW5jdGlvbiBpc0RlZmF1bHROYW1lc3BhY2UobmFtZXNwYWNlVVJJKSB7XG4gICAgdmFyIHByZWZpeCA9IHRoaXMubG9va3VwUHJlZml4KG5hbWVzcGFjZVVSSSk7XG4gICAgcmV0dXJuIHByZWZpeCA9PSBudWxsO1xuICB9XG59O1xuZnVuY3Rpb24gX3htbEVuY29kZXIoYykge1xuICByZXR1cm4gYyA9PSAnPCcgJiYgJyZsdDsnIHx8IGMgPT0gJz4nICYmICcmZ3Q7JyB8fCBjID09ICcmJyAmJiAnJmFtcDsnIHx8IGMgPT0gJ1wiJyAmJiAnJnF1b3Q7JyB8fCAnJiMnICsgYy5jaGFyQ29kZUF0KCkgKyAnOyc7XG59XG5jb3B5KE5vZGVUeXBlLCBOb2RlKTtcbmNvcHkoTm9kZVR5cGUsIE5vZGUucHJvdG90eXBlKTtcbmZ1bmN0aW9uIF92aXNpdE5vZGUobm9kZSwgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrKG5vZGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICBkbyB7XG4gICAgICBpZiAoX3Zpc2l0Tm9kZShub2RlLCBjYWxsYmFjaykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSB3aGlsZSAobm9kZSA9IG5vZGUubmV4dFNpYmxpbmcpO1xuICB9XG59XG5mdW5jdGlvbiBEb2N1bWVudCgpIHt9XG5mdW5jdGlvbiBfb25BZGRBdHRyaWJ1dGUoZG9jLCBlbCwgbmV3QXR0cikge1xuICBkb2MgJiYgZG9jLl9pbmMrKztcbiAgdmFyIG5zID0gbmV3QXR0ci5uYW1lc3BhY2VVUkk7XG4gIGlmIChucyA9PSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nKSB7XG4gICAgZWwuX25zTWFwW25ld0F0dHIucHJlZml4ID8gbmV3QXR0ci5sb2NhbE5hbWUgOiAnJ10gPSBuZXdBdHRyLnZhbHVlO1xuICB9XG59XG5mdW5jdGlvbiBfb25SZW1vdmVBdHRyaWJ1dGUoZG9jLCBlbCwgbmV3QXR0ciwgcmVtb3ZlKSB7XG4gIGRvYyAmJiBkb2MuX2luYysrO1xuICB2YXIgbnMgPSBuZXdBdHRyLm5hbWVzcGFjZVVSSTtcbiAgaWYgKG5zID09ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycpIHtcbiAgICBkZWxldGUgZWwuX25zTWFwW25ld0F0dHIucHJlZml4ID8gbmV3QXR0ci5sb2NhbE5hbWUgOiAnJ107XG4gIH1cbn1cbmZ1bmN0aW9uIF9vblVwZGF0ZUNoaWxkKGRvYywgZWwsIG5ld0NoaWxkKSB7XG4gIGlmIChkb2MgJiYgZG9jLl9pbmMpIHtcbiAgICBkb2MuX2luYysrO1xuICAgIHZhciBjcyA9IGVsLmNoaWxkTm9kZXM7XG4gICAgaWYgKG5ld0NoaWxkKSB7XG4gICAgICBjc1tjcy5sZW5ndGgrK10gPSBuZXdDaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNoaWxkID0gZWwuZmlyc3RDaGlsZDtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBjc1tpKytdID0gY2hpbGQ7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgICBjcy5sZW5ndGggPSBpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gX3JlbW92ZUNoaWxkKHBhcmVudE5vZGUsIGNoaWxkKSB7XG4gIHZhciBwcmV2aW91cyA9IGNoaWxkLnByZXZpb3VzU2libGluZztcbiAgdmFyIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgaWYgKHByZXZpb3VzKSB7XG4gICAgcHJldmlvdXMubmV4dFNpYmxpbmcgPSBuZXh0O1xuICB9IGVsc2Uge1xuICAgIHBhcmVudE5vZGUuZmlyc3RDaGlsZCA9IG5leHQ7XG4gIH1cbiAgaWYgKG5leHQpIHtcbiAgICBuZXh0LnByZXZpb3VzU2libGluZyA9IHByZXZpb3VzO1xuICB9IGVsc2Uge1xuICAgIHBhcmVudE5vZGUubGFzdENoaWxkID0gcHJldmlvdXM7XG4gIH1cbiAgX29uVXBkYXRlQ2hpbGQocGFyZW50Tm9kZS5vd25lckRvY3VtZW50LCBwYXJlbnROb2RlKTtcbiAgcmV0dXJuIGNoaWxkO1xufVxuZnVuY3Rpb24gX2luc2VydEJlZm9yZShwYXJlbnROb2RlLCBuZXdDaGlsZCwgbmV4dENoaWxkKSB7XG4gIHZhciBjcCA9IG5ld0NoaWxkLnBhcmVudE5vZGU7XG4gIGlmIChjcCkge1xuICAgIGNwLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgfVxuICBpZiAobmV3Q2hpbGQubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICB2YXIgbmV3Rmlyc3QgPSBuZXdDaGlsZC5maXJzdENoaWxkO1xuICAgIGlmIChuZXdGaXJzdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuICAgIHZhciBuZXdMYXN0ID0gbmV3Q2hpbGQubGFzdENoaWxkO1xuICB9IGVsc2Uge1xuICAgIG5ld0ZpcnN0ID0gbmV3TGFzdCA9IG5ld0NoaWxkO1xuICB9XG4gIHZhciBwcmUgPSBuZXh0Q2hpbGQgPyBuZXh0Q2hpbGQucHJldmlvdXNTaWJsaW5nIDogcGFyZW50Tm9kZS5sYXN0Q2hpbGQ7XG4gIG5ld0ZpcnN0LnByZXZpb3VzU2libGluZyA9IHByZTtcbiAgbmV3TGFzdC5uZXh0U2libGluZyA9IG5leHRDaGlsZDtcbiAgaWYgKHByZSkge1xuICAgIHByZS5uZXh0U2libGluZyA9IG5ld0ZpcnN0O1xuICB9IGVsc2Uge1xuICAgIHBhcmVudE5vZGUuZmlyc3RDaGlsZCA9IG5ld0ZpcnN0O1xuICB9XG4gIGlmIChuZXh0Q2hpbGQgPT0gbnVsbCkge1xuICAgIHBhcmVudE5vZGUubGFzdENoaWxkID0gbmV3TGFzdDtcbiAgfSBlbHNlIHtcbiAgICBuZXh0Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gbmV3TGFzdDtcbiAgfVxuICBkbyB7XG4gICAgbmV3Rmlyc3QucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gIH0gd2hpbGUgKG5ld0ZpcnN0ICE9PSBuZXdMYXN0ICYmIChuZXdGaXJzdCA9IG5ld0ZpcnN0Lm5leHRTaWJsaW5nKSk7XG4gIF9vblVwZGF0ZUNoaWxkKHBhcmVudE5vZGUub3duZXJEb2N1bWVudCB8fCBwYXJlbnROb2RlLCBwYXJlbnROb2RlKTtcbiAgaWYgKG5ld0NoaWxkLm5vZGVUeXBlID09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICBuZXdDaGlsZC5maXJzdENoaWxkID0gbmV3Q2hpbGQubGFzdENoaWxkID0gbnVsbDtcbiAgfVxuICByZXR1cm4gbmV3Q2hpbGQ7XG59XG5mdW5jdGlvbiBfYXBwZW5kU2luZ2xlQ2hpbGQocGFyZW50Tm9kZSwgbmV3Q2hpbGQpIHtcbiAgdmFyIGNwID0gbmV3Q2hpbGQucGFyZW50Tm9kZTtcbiAgaWYgKGNwKSB7XG4gICAgdmFyIHByZSA9IHBhcmVudE5vZGUubGFzdENoaWxkO1xuICAgIGNwLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICB2YXIgcHJlID0gcGFyZW50Tm9kZS5sYXN0Q2hpbGQ7XG4gIH1cbiAgdmFyIHByZSA9IHBhcmVudE5vZGUubGFzdENoaWxkO1xuICBuZXdDaGlsZC5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcHJlO1xuICBuZXdDaGlsZC5uZXh0U2libGluZyA9IG51bGw7XG4gIGlmIChwcmUpIHtcbiAgICBwcmUubmV4dFNpYmxpbmcgPSBuZXdDaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnROb2RlLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgfVxuICBwYXJlbnROb2RlLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xuICBfb25VcGRhdGVDaGlsZChwYXJlbnROb2RlLm93bmVyRG9jdW1lbnQsIHBhcmVudE5vZGUsIG5ld0NoaWxkKTtcbiAgcmV0dXJuIG5ld0NoaWxkO1xufVxuRG9jdW1lbnQucHJvdG90eXBlID0ge1xuICBub2RlTmFtZTogJyNkb2N1bWVudCcsXG4gIG5vZGVUeXBlOiBET0NVTUVOVF9OT0RFLFxuICBkb2N0eXBlOiBudWxsLFxuICBkb2N1bWVudEVsZW1lbnQ6IG51bGwsXG4gIF9pbmM6IDEsXG4gIGluc2VydEJlZm9yZTogZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCByZWZDaGlsZCkge1xuICAgIGlmIChuZXdDaGlsZC5ub2RlVHlwZSA9PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICB2YXIgY2hpbGQgPSBuZXdDaGlsZC5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIHZhciBuZXh0ID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIHRoaXMuaW5zZXJ0QmVmb3JlKGNoaWxkLCByZWZDaGlsZCk7XG4gICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZG9jdW1lbnRFbGVtZW50ID09IG51bGwgJiYgbmV3Q2hpbGQubm9kZVR5cGUgPT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9IG5ld0NoaWxkO1xuICAgIH1cbiAgICByZXR1cm4gX2luc2VydEJlZm9yZSh0aGlzLCBuZXdDaGlsZCwgcmVmQ2hpbGQpLCBuZXdDaGlsZC5vd25lckRvY3VtZW50ID0gdGhpcywgbmV3Q2hpbGQ7XG4gIH0sXG4gIHJlbW92ZUNoaWxkOiBmdW5jdGlvbiByZW1vdmVDaGlsZChvbGRDaGlsZCkge1xuICAgIGlmICh0aGlzLmRvY3VtZW50RWxlbWVudCA9PSBvbGRDaGlsZCkge1xuICAgICAgdGhpcy5kb2N1bWVudEVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gX3JlbW92ZUNoaWxkKHRoaXMsIG9sZENoaWxkKTtcbiAgfSxcbiAgaW1wb3J0Tm9kZTogZnVuY3Rpb24gaW1wb3J0Tm9kZShpbXBvcnRlZE5vZGUsIGRlZXApIHtcbiAgICByZXR1cm4gX2ltcG9ydE5vZGUodGhpcywgaW1wb3J0ZWROb2RlLCBkZWVwKTtcbiAgfSxcbiAgZ2V0RWxlbWVudEJ5SWQ6IGZ1bmN0aW9uIGdldEVsZW1lbnRCeUlkKGlkKSB7XG4gICAgdmFyIHJ0diA9IG51bGw7XG4gICAgX3Zpc2l0Tm9kZSh0aGlzLmRvY3VtZW50RWxlbWVudCwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykgPT0gaWQpIHtcbiAgICAgICAgICBydHYgPSBub2RlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJ0djtcbiAgfSxcbiAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lKSB7XG4gICAgdmFyIG5vZGUgPSBuZXcgRWxlbWVudCgpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS5ub2RlTmFtZSA9IHRhZ05hbWU7XG4gICAgbm9kZS50YWdOYW1lID0gdGFnTmFtZTtcbiAgICBub2RlLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcbiAgICB2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXMgPSBuZXcgTmFtZWROb2RlTWFwKCk7XG4gICAgYXR0cnMuX293bmVyRWxlbWVudCA9IG5vZGU7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQ6IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSB7XG4gICAgdmFyIG5vZGUgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS5jaGlsZE5vZGVzID0gbmV3IE5vZGVMaXN0KCk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIGNyZWF0ZVRleHROb2RlOiBmdW5jdGlvbiBjcmVhdGVUZXh0Tm9kZShkYXRhKSB7XG4gICAgdmFyIG5vZGUgPSBuZXcgVGV4dCgpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS5hcHBlbmREYXRhKGRhdGEpO1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICBjcmVhdGVDb21tZW50OiBmdW5jdGlvbiBjcmVhdGVDb21tZW50KGRhdGEpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBDb21tZW50KCk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLmFwcGVuZERhdGEoZGF0YSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIGNyZWF0ZUNEQVRBU2VjdGlvbjogZnVuY3Rpb24gY3JlYXRlQ0RBVEFTZWN0aW9uKGRhdGEpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBDREFUQVNlY3Rpb24oKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUuYXBwZW5kRGF0YShkYXRhKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlUHJvY2Vzc2luZ0luc3RydWN0aW9uOiBmdW5jdGlvbiBjcmVhdGVQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24odGFyZ2V0LCBkYXRhKSB7XG4gICAgdmFyIG5vZGUgPSBuZXcgUHJvY2Vzc2luZ0luc3RydWN0aW9uKCk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLnRhZ05hbWUgPSBub2RlLnRhcmdldCA9IHRhcmdldDtcbiAgICBub2RlLm5vZGVWYWx1ZSA9IG5vZGUuZGF0YSA9IGRhdGE7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIGNyZWF0ZUF0dHJpYnV0ZTogZnVuY3Rpb24gY3JlYXRlQXR0cmlidXRlKG5hbWUpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBBdHRyKCk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLm5hbWUgPSBuYW1lO1xuICAgIG5vZGUubm9kZU5hbWUgPSBuYW1lO1xuICAgIG5vZGUubG9jYWxOYW1lID0gbmFtZTtcbiAgICBub2RlLnNwZWNpZmllZCA9IHRydWU7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIGNyZWF0ZUVudGl0eVJlZmVyZW5jZTogZnVuY3Rpb24gY3JlYXRlRW50aXR5UmVmZXJlbmNlKG5hbWUpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBFbnRpdHlSZWZlcmVuY2UoKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUubm9kZU5hbWUgPSBuYW1lO1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICBjcmVhdGVFbGVtZW50TlM6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBFbGVtZW50KCk7XG4gICAgdmFyIHBsID0gcXVhbGlmaWVkTmFtZS5zcGxpdCgnOicpO1xuICAgIHZhciBhdHRycyA9IG5vZGUuYXR0cmlidXRlcyA9IG5ldyBOYW1lZE5vZGVNYXAoKTtcbiAgICBub2RlLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUubm9kZU5hbWUgPSBxdWFsaWZpZWROYW1lO1xuICAgIG5vZGUudGFnTmFtZSA9IHF1YWxpZmllZE5hbWU7XG4gICAgbm9kZS5uYW1lc3BhY2VVUkkgPSBuYW1lc3BhY2VVUkk7XG4gICAgaWYgKHBsLmxlbmd0aCA9PSAyKSB7XG4gICAgICBub2RlLnByZWZpeCA9IHBsWzBdO1xuICAgICAgbm9kZS5sb2NhbE5hbWUgPSBwbFsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5sb2NhbE5hbWUgPSBxdWFsaWZpZWROYW1lO1xuICAgIH1cbiAgICBhdHRycy5fb3duZXJFbGVtZW50ID0gbm9kZTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlQXR0cmlidXRlTlM6IGZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSkge1xuICAgIHZhciBub2RlID0gbmV3IEF0dHIoKTtcbiAgICB2YXIgcGwgPSBxdWFsaWZpZWROYW1lLnNwbGl0KCc6Jyk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLm5vZGVOYW1lID0gcXVhbGlmaWVkTmFtZTtcbiAgICBub2RlLm5hbWUgPSBxdWFsaWZpZWROYW1lO1xuICAgIG5vZGUubmFtZXNwYWNlVVJJID0gbmFtZXNwYWNlVVJJO1xuICAgIG5vZGUuc3BlY2lmaWVkID0gdHJ1ZTtcbiAgICBpZiAocGwubGVuZ3RoID09IDIpIHtcbiAgICAgIG5vZGUucHJlZml4ID0gcGxbMF07XG4gICAgICBub2RlLmxvY2FsTmFtZSA9IHBsWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmxvY2FsTmFtZSA9IHF1YWxpZmllZE5hbWU7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG59O1xuX2V4dGVuZHMoRG9jdW1lbnQsIE5vZGUpO1xuZnVuY3Rpb24gRWxlbWVudCgpIHtcbiAgdGhpcy5fbnNNYXAgPSB7fTtcbn1cbjtcbkVsZW1lbnQucHJvdG90eXBlID0ge1xuICBub2RlVHlwZTogRUxFTUVOVF9OT0RFLFxuICBoYXNBdHRyaWJ1dGU6IGZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlTm9kZShuYW1lKSAhPSBudWxsO1xuICB9LFxuICBnZXRBdHRyaWJ1dGU6IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gICAgdmFyIGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGUobmFtZSk7XG4gICAgcmV0dXJuIGF0dHIgJiYgYXR0ci52YWx1ZSB8fCAnJztcbiAgfSxcbiAgZ2V0QXR0cmlidXRlTm9kZTogZnVuY3Rpb24gZ2V0QXR0cmlidXRlTm9kZShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0obmFtZSk7XG4gIH0sXG4gIHNldEF0dHJpYnV0ZTogZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIGF0dHIgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKG5hbWUpO1xuICAgIGF0dHIudmFsdWUgPSBhdHRyLm5vZGVWYWx1ZSA9IFwiXCIgKyB2YWx1ZTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5vZGUoYXR0cik7XG4gIH0sXG4gIHJlbW92ZUF0dHJpYnV0ZTogZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHtcbiAgICB2YXIgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZShuYW1lKTtcbiAgICBhdHRyICYmIHRoaXMucmVtb3ZlQXR0cmlidXRlTm9kZShhdHRyKTtcbiAgfSxcbiAgYXBwZW5kQ2hpbGQ6IGZ1bmN0aW9uIGFwcGVuZENoaWxkKG5ld0NoaWxkKSB7XG4gICAgaWYgKG5ld0NoaWxkLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsIG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX2FwcGVuZFNpbmdsZUNoaWxkKHRoaXMsIG5ld0NoaWxkKTtcbiAgICB9XG4gIH0sXG4gIHNldEF0dHJpYnV0ZU5vZGU6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZU5vZGUobmV3QXR0cikge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuc2V0TmFtZWRJdGVtKG5ld0F0dHIpO1xuICB9LFxuICBzZXRBdHRyaWJ1dGVOb2RlTlM6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZU5vZGVOUyhuZXdBdHRyKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcy5zZXROYW1lZEl0ZW1OUyhuZXdBdHRyKTtcbiAgfSxcbiAgcmVtb3ZlQXR0cmlidXRlTm9kZTogZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlTm9kZShvbGRBdHRyKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcy5yZW1vdmVOYW1lZEl0ZW0ob2xkQXR0ci5ub2RlTmFtZSk7XG4gIH0sXG4gIHJlbW92ZUF0dHJpYnV0ZU5TOiBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuICAgIHZhciBvbGQgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSk7XG4gICAgb2xkICYmIHRoaXMucmVtb3ZlQXR0cmlidXRlTm9kZShvbGQpO1xuICB9LFxuICBoYXNBdHRyaWJ1dGVOUzogZnVuY3Rpb24gaGFzQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpICE9IG51bGw7XG4gIH0sXG4gIGdldEF0dHJpYnV0ZU5TOiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuICAgIHZhciBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpO1xuICAgIHJldHVybiBhdHRyICYmIGF0dHIudmFsdWUgfHwgJyc7XG4gIH0sXG4gIHNldEF0dHJpYnV0ZU5TOiBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIGF0dHIgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKTtcbiAgICBhdHRyLnZhbHVlID0gYXR0ci5ub2RlVmFsdWUgPSBcIlwiICsgdmFsdWU7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpO1xuICB9LFxuICBnZXRBdHRyaWJ1dGVOb2RlTlM6IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpO1xuICB9LFxuICBnZXRFbGVtZW50c0J5VGFnTmFtZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSkge1xuICAgIHJldHVybiBuZXcgTGl2ZU5vZGVMaXN0KHRoaXMsIGZ1bmN0aW9uIChiYXNlKSB7XG4gICAgICB2YXIgbHMgPSBbXTtcbiAgICAgIF92aXNpdE5vZGUoYmFzZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgIT09IGJhc2UgJiYgbm9kZS5ub2RlVHlwZSA9PSBFTEVNRU5UX05PREUgJiYgKHRhZ05hbWUgPT09ICcqJyB8fCBub2RlLnRhZ05hbWUgPT0gdGFnTmFtZSkpIHtcbiAgICAgICAgICBscy5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBscztcbiAgICB9KTtcbiAgfSxcbiAgZ2V0RWxlbWVudHNCeVRhZ05hbWVOUzogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuICAgIHJldHVybiBuZXcgTGl2ZU5vZGVMaXN0KHRoaXMsIGZ1bmN0aW9uIChiYXNlKSB7XG4gICAgICB2YXIgbHMgPSBbXTtcbiAgICAgIF92aXNpdE5vZGUoYmFzZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgIT09IGJhc2UgJiYgbm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFICYmIChuYW1lc3BhY2VVUkkgPT09ICcqJyB8fCBub2RlLm5hbWVzcGFjZVVSSSA9PT0gbmFtZXNwYWNlVVJJKSAmJiAobG9jYWxOYW1lID09PSAnKicgfHwgbm9kZS5sb2NhbE5hbWUgPT0gbG9jYWxOYW1lKSkge1xuICAgICAgICAgIGxzLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGxzO1xuICAgIH0pO1xuICB9XG59O1xuRG9jdW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlUYWdOYW1lID0gRWxlbWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWU7XG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyA9IEVsZW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlUYWdOYW1lTlM7XG5fZXh0ZW5kcyhFbGVtZW50LCBOb2RlKTtcbmZ1bmN0aW9uIEF0dHIoKSB7fVxuO1xuQXR0ci5wcm90b3R5cGUubm9kZVR5cGUgPSBBVFRSSUJVVEVfTk9ERTtcbl9leHRlbmRzKEF0dHIsIE5vZGUpO1xuZnVuY3Rpb24gQ2hhcmFjdGVyRGF0YSgpIHt9XG47XG5DaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSA9IHtcbiAgZGF0YTogJycsXG4gIHN1YnN0cmluZ0RhdGE6IGZ1bmN0aW9uIHN1YnN0cmluZ0RhdGEob2Zmc2V0LCBjb3VudCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc3Vic3RyaW5nKG9mZnNldCwgb2Zmc2V0ICsgY291bnQpO1xuICB9LFxuICBhcHBlbmREYXRhOiBmdW5jdGlvbiBhcHBlbmREYXRhKHRleHQpIHtcbiAgICB0ZXh0ID0gdGhpcy5kYXRhICsgdGV4dDtcbiAgICB0aGlzLm5vZGVWYWx1ZSA9IHRoaXMuZGF0YSA9IHRleHQ7XG4gICAgdGhpcy5sZW5ndGggPSB0ZXh0Lmxlbmd0aDtcbiAgfSxcbiAgaW5zZXJ0RGF0YTogZnVuY3Rpb24gaW5zZXJ0RGF0YShvZmZzZXQsIHRleHQpIHtcbiAgICB0aGlzLnJlcGxhY2VEYXRhKG9mZnNldCwgMCwgdGV4dCk7XG4gIH0sXG4gIGFwcGVuZENoaWxkOiBmdW5jdGlvbiBhcHBlbmRDaGlsZChuZXdDaGlsZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihFeGNlcHRpb25NZXNzYWdlW0hJRVJBUkNIWV9SRVFVRVNUX0VSUl0pO1xuICB9LFxuICBkZWxldGVEYXRhOiBmdW5jdGlvbiBkZWxldGVEYXRhKG9mZnNldCwgY291bnQpIHtcbiAgICB0aGlzLnJlcGxhY2VEYXRhKG9mZnNldCwgY291bnQsIFwiXCIpO1xuICB9LFxuICByZXBsYWNlRGF0YTogZnVuY3Rpb24gcmVwbGFjZURhdGEob2Zmc2V0LCBjb3VudCwgdGV4dCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuZGF0YS5zdWJzdHJpbmcoMCwgb2Zmc2V0KTtcbiAgICB2YXIgZW5kID0gdGhpcy5kYXRhLnN1YnN0cmluZyhvZmZzZXQgKyBjb3VudCk7XG4gICAgdGV4dCA9IHN0YXJ0ICsgdGV4dCArIGVuZDtcbiAgICB0aGlzLm5vZGVWYWx1ZSA9IHRoaXMuZGF0YSA9IHRleHQ7XG4gICAgdGhpcy5sZW5ndGggPSB0ZXh0Lmxlbmd0aDtcbiAgfVxufTtcbl9leHRlbmRzKENoYXJhY3RlckRhdGEsIE5vZGUpO1xuZnVuY3Rpb24gVGV4dCgpIHt9XG47XG5UZXh0LnByb3RvdHlwZSA9IHtcbiAgbm9kZU5hbWU6IFwiI3RleHRcIixcbiAgbm9kZVR5cGU6IFRFWFRfTk9ERSxcbiAgc3BsaXRUZXh0OiBmdW5jdGlvbiBzcGxpdFRleHQob2Zmc2V0KSB7XG4gICAgdmFyIHRleHQgPSB0aGlzLmRhdGE7XG4gICAgdmFyIG5ld1RleHQgPSB0ZXh0LnN1YnN0cmluZyhvZmZzZXQpO1xuICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygwLCBvZmZzZXQpO1xuICAgIHRoaXMuZGF0YSA9IHRoaXMubm9kZVZhbHVlID0gdGV4dDtcbiAgICB0aGlzLmxlbmd0aCA9IHRleHQubGVuZ3RoO1xuICAgIHZhciBuZXdOb2RlID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ld1RleHQpO1xuICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgdGhpcy5uZXh0U2libGluZyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdOb2RlO1xuICB9XG59O1xuX2V4dGVuZHMoVGV4dCwgQ2hhcmFjdGVyRGF0YSk7XG5mdW5jdGlvbiBDb21tZW50KCkge31cbjtcbkNvbW1lbnQucHJvdG90eXBlID0ge1xuICBub2RlTmFtZTogXCIjY29tbWVudFwiLFxuICBub2RlVHlwZTogQ09NTUVOVF9OT0RFXG59O1xuX2V4dGVuZHMoQ29tbWVudCwgQ2hhcmFjdGVyRGF0YSk7XG5mdW5jdGlvbiBDREFUQVNlY3Rpb24oKSB7fVxuO1xuQ0RBVEFTZWN0aW9uLnByb3RvdHlwZSA9IHtcbiAgbm9kZU5hbWU6IFwiI2NkYXRhLXNlY3Rpb25cIixcbiAgbm9kZVR5cGU6IENEQVRBX1NFQ1RJT05fTk9ERVxufTtcbl9leHRlbmRzKENEQVRBU2VjdGlvbiwgQ2hhcmFjdGVyRGF0YSk7XG5mdW5jdGlvbiBEb2N1bWVudFR5cGUoKSB7fVxuO1xuRG9jdW1lbnRUeXBlLnByb3RvdHlwZS5ub2RlVHlwZSA9IERPQ1VNRU5UX1RZUEVfTk9ERTtcbl9leHRlbmRzKERvY3VtZW50VHlwZSwgTm9kZSk7XG5mdW5jdGlvbiBOb3RhdGlvbigpIHt9XG47XG5Ob3RhdGlvbi5wcm90b3R5cGUubm9kZVR5cGUgPSBOT1RBVElPTl9OT0RFO1xuX2V4dGVuZHMoTm90YXRpb24sIE5vZGUpO1xuZnVuY3Rpb24gRW50aXR5KCkge31cbjtcbkVudGl0eS5wcm90b3R5cGUubm9kZVR5cGUgPSBFTlRJVFlfTk9ERTtcbl9leHRlbmRzKEVudGl0eSwgTm9kZSk7XG5mdW5jdGlvbiBFbnRpdHlSZWZlcmVuY2UoKSB7fVxuO1xuRW50aXR5UmVmZXJlbmNlLnByb3RvdHlwZS5ub2RlVHlwZSA9IEVOVElUWV9SRUZFUkVOQ0VfTk9ERTtcbl9leHRlbmRzKEVudGl0eVJlZmVyZW5jZSwgTm9kZSk7XG5mdW5jdGlvbiBEb2N1bWVudEZyYWdtZW50KCkge31cbjtcbkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLm5vZGVOYW1lID0gXCIjZG9jdW1lbnQtZnJhZ21lbnRcIjtcbkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLm5vZGVUeXBlID0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERTtcbl9leHRlbmRzKERvY3VtZW50RnJhZ21lbnQsIE5vZGUpO1xuZnVuY3Rpb24gUHJvY2Vzc2luZ0luc3RydWN0aW9uKCkge31cblByb2Nlc3NpbmdJbnN0cnVjdGlvbi5wcm90b3R5cGUubm9kZVR5cGUgPSBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREU7XG5fZXh0ZW5kcyhQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24sIE5vZGUpO1xuZnVuY3Rpb24gWE1MU2VyaWFsaXplcigpIHt9XG5YTUxTZXJpYWxpemVyLnByb3RvdHlwZS5zZXJpYWxpemVUb1N0cmluZyA9IGZ1bmN0aW9uIChub2RlLCBpc0h0bWwsIG5vZGVGaWx0ZXIpIHtcbiAgcmV0dXJuIG5vZGVTZXJpYWxpemVUb1N0cmluZy5jYWxsKG5vZGUsIGlzSHRtbCwgbm9kZUZpbHRlcik7XG59O1xuTm9kZS5wcm90b3R5cGUudG9TdHJpbmcgPSBub2RlU2VyaWFsaXplVG9TdHJpbmc7XG5mdW5jdGlvbiBub2RlU2VyaWFsaXplVG9TdHJpbmcoaXNIdG1sLCBub2RlRmlsdGVyKSB7XG4gIHZhciBidWYgPSBbXTtcbiAgdmFyIHJlZk5vZGUgPSB0aGlzLm5vZGVUeXBlID09IDkgJiYgdGhpcy5kb2N1bWVudEVsZW1lbnQgfHwgdGhpcztcbiAgdmFyIHByZWZpeCA9IHJlZk5vZGUucHJlZml4O1xuICB2YXIgdXJpID0gcmVmTm9kZS5uYW1lc3BhY2VVUkk7XG4gIGlmICh1cmkgJiYgcHJlZml4ID09IG51bGwpIHtcbiAgICB2YXIgcHJlZml4ID0gcmVmTm9kZS5sb29rdXBQcmVmaXgodXJpKTtcbiAgICBpZiAocHJlZml4ID09IG51bGwpIHtcbiAgICAgIHZhciB2aXNpYmxlTmFtZXNwYWNlcyA9IFt7XG4gICAgICAgIG5hbWVzcGFjZTogdXJpLFxuICAgICAgICBwcmVmaXg6IG51bGxcbiAgICAgIH1dO1xuICAgIH1cbiAgfVxuICBzZXJpYWxpemVUb1N0cmluZyh0aGlzLCBidWYsIGlzSHRtbCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMpO1xuICByZXR1cm4gYnVmLmpvaW4oJycpO1xufVxuZnVuY3Rpb24gbmVlZE5hbWVzcGFjZURlZmluZShub2RlLCBpc0hUTUwsIHZpc2libGVOYW1lc3BhY2VzKSB7XG4gIHZhciBwcmVmaXggPSBub2RlLnByZWZpeCB8fCAnJztcbiAgdmFyIHVyaSA9IG5vZGUubmFtZXNwYWNlVVJJO1xuICBpZiAoIXByZWZpeCAmJiAhdXJpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChwcmVmaXggPT09IFwieG1sXCIgJiYgdXJpID09PSBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiIHx8IHVyaSA9PSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpID0gdmlzaWJsZU5hbWVzcGFjZXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIG5zID0gdmlzaWJsZU5hbWVzcGFjZXNbaV07XG4gICAgaWYgKG5zLnByZWZpeCA9PSBwcmVmaXgpIHtcbiAgICAgIHJldHVybiBucy5uYW1lc3BhY2UgIT0gdXJpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHNlcmlhbGl6ZVRvU3RyaW5nKG5vZGUsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcykge1xuICBpZiAobm9kZUZpbHRlcikge1xuICAgIG5vZGUgPSBub2RlRmlsdGVyKG5vZGUpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICBpZiAodHlwZW9mIG5vZGUgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgYnVmLnB1c2gobm9kZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcbiAgICBjYXNlIEVMRU1FTlRfTk9ERTpcbiAgICAgIGlmICghdmlzaWJsZU5hbWVzcGFjZXMpIHZpc2libGVOYW1lc3BhY2VzID0gW107XG4gICAgICB2YXIgc3RhcnRWaXNpYmxlTmFtZXNwYWNlcyA9IHZpc2libGVOYW1lc3BhY2VzLmxlbmd0aDtcbiAgICAgIHZhciBhdHRycyA9IG5vZGUuYXR0cmlidXRlcztcbiAgICAgIHZhciBsZW4gPSBhdHRycy5sZW5ndGg7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICB2YXIgbm9kZU5hbWUgPSBub2RlLnRhZ05hbWU7XG4gICAgICBpc0hUTUwgPSBodG1sbnMgPT09IG5vZGUubmFtZXNwYWNlVVJJIHx8IGlzSFRNTDtcbiAgICAgIGJ1Zi5wdXNoKCc8Jywgbm9kZU5hbWUpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgYXR0ciA9IGF0dHJzLml0ZW0oaSk7XG4gICAgICAgIGlmIChhdHRyLnByZWZpeCA9PSAneG1sbnMnKSB7XG4gICAgICAgICAgdmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7XG4gICAgICAgICAgICBwcmVmaXg6IGF0dHIubG9jYWxOYW1lLFxuICAgICAgICAgICAgbmFtZXNwYWNlOiBhdHRyLnZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXR0ci5ub2RlTmFtZSA9PSAneG1sbnMnKSB7XG4gICAgICAgICAgdmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7XG4gICAgICAgICAgICBwcmVmaXg6ICcnLFxuICAgICAgICAgICAgbmFtZXNwYWNlOiBhdHRyLnZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGF0dHIgPSBhdHRycy5pdGVtKGkpO1xuICAgICAgICBpZiAobmVlZE5hbWVzcGFjZURlZmluZShhdHRyLCBpc0hUTUwsIHZpc2libGVOYW1lc3BhY2VzKSkge1xuICAgICAgICAgIHZhciBwcmVmaXggPSBhdHRyLnByZWZpeCB8fCAnJztcbiAgICAgICAgICB2YXIgdXJpID0gYXR0ci5uYW1lc3BhY2VVUkk7XG4gICAgICAgICAgdmFyIG5zID0gcHJlZml4ID8gJyB4bWxuczonICsgcHJlZml4IDogXCIgeG1sbnNcIjtcbiAgICAgICAgICBidWYucHVzaChucywgJz1cIicsIHVyaSwgJ1wiJyk7XG4gICAgICAgICAgdmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7XG4gICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgIG5hbWVzcGFjZTogdXJpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VyaWFsaXplVG9TdHJpbmcoYXR0ciwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIsIHZpc2libGVOYW1lc3BhY2VzKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTmFtZXNwYWNlRGVmaW5lKG5vZGUsIGlzSFRNTCwgdmlzaWJsZU5hbWVzcGFjZXMpKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSBub2RlLnByZWZpeCB8fCAnJztcbiAgICAgICAgdmFyIHVyaSA9IG5vZGUubmFtZXNwYWNlVVJJO1xuICAgICAgICB2YXIgbnMgPSBwcmVmaXggPyAnIHhtbG5zOicgKyBwcmVmaXggOiBcIiB4bWxuc1wiO1xuICAgICAgICBidWYucHVzaChucywgJz1cIicsIHVyaSwgJ1wiJyk7XG4gICAgICAgIHZpc2libGVOYW1lc3BhY2VzLnB1c2goe1xuICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgIG5hbWVzcGFjZTogdXJpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGNoaWxkIHx8IGlzSFRNTCAmJiAhL14oPzptZXRhfGxpbmt8aW1nfGJyfGhyfGlucHV0KSQvaS50ZXN0KG5vZGVOYW1lKSkge1xuICAgICAgICBidWYucHVzaCgnPicpO1xuICAgICAgICBpZiAoaXNIVE1MICYmIC9ec2NyaXB0JC9pLnRlc3Qobm9kZU5hbWUpKSB7XG4gICAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuZGF0YSkge1xuICAgICAgICAgICAgICBidWYucHVzaChjaGlsZC5kYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlcmlhbGl6ZVRvU3RyaW5nKGNoaWxkLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICBzZXJpYWxpemVUb1N0cmluZyhjaGlsZCwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIsIHZpc2libGVOYW1lc3BhY2VzKTtcbiAgICAgICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJ1Zi5wdXNoKCc8LycsIG5vZGVOYW1lLCAnPicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnVmLnB1c2goJy8+Jyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBET0NVTUVOVF9OT0RFOlxuICAgIGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcbiAgICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBzZXJpYWxpemVUb1N0cmluZyhjaGlsZCwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIsIHZpc2libGVOYW1lc3BhY2VzKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICBjYXNlIEFUVFJJQlVURV9OT0RFOlxuICAgICAgcmV0dXJuIGJ1Zi5wdXNoKCcgJywgbm9kZS5uYW1lLCAnPVwiJywgbm9kZS52YWx1ZS5yZXBsYWNlKC9bPCZcIl0vZywgX3htbEVuY29kZXIpLCAnXCInKTtcbiAgICBjYXNlIFRFWFRfTk9ERTpcbiAgICAgIHJldHVybiBidWYucHVzaChub2RlLmRhdGEucmVwbGFjZSgvWzwmXS9nLCBfeG1sRW5jb2RlcikpO1xuICAgIGNhc2UgQ0RBVEFfU0VDVElPTl9OT0RFOlxuICAgICAgcmV0dXJuIGJ1Zi5wdXNoKCc8IVtDREFUQVsnLCBub2RlLmRhdGEsICddXT4nKTtcbiAgICBjYXNlIENPTU1FTlRfTk9ERTpcbiAgICAgIHJldHVybiBidWYucHVzaChcIjwhLS1cIiwgbm9kZS5kYXRhLCBcIi0tPlwiKTtcbiAgICBjYXNlIERPQ1VNRU5UX1RZUEVfTk9ERTpcbiAgICAgIHZhciBwdWJpZCA9IG5vZGUucHVibGljSWQ7XG4gICAgICB2YXIgc3lzaWQgPSBub2RlLnN5c3RlbUlkO1xuICAgICAgYnVmLnB1c2goJzwhRE9DVFlQRSAnLCBub2RlLm5hbWUpO1xuICAgICAgaWYgKHB1YmlkKSB7XG4gICAgICAgIGJ1Zi5wdXNoKCcgUFVCTElDIFwiJywgcHViaWQpO1xuICAgICAgICBpZiAoc3lzaWQgJiYgc3lzaWQgIT0gJy4nKSB7XG4gICAgICAgICAgYnVmLnB1c2goJ1wiIFwiJywgc3lzaWQpO1xuICAgICAgICB9XG4gICAgICAgIGJ1Zi5wdXNoKCdcIj4nKTtcbiAgICAgIH0gZWxzZSBpZiAoc3lzaWQgJiYgc3lzaWQgIT0gJy4nKSB7XG4gICAgICAgIGJ1Zi5wdXNoKCcgU1lTVEVNIFwiJywgc3lzaWQsICdcIj4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzdWIgPSBub2RlLmludGVybmFsU3Vic2V0O1xuICAgICAgICBpZiAoc3ViKSB7XG4gICAgICAgICAgYnVmLnB1c2goXCIgW1wiLCBzdWIsIFwiXVwiKTtcbiAgICAgICAgfVxuICAgICAgICBidWYucHVzaChcIj5cIik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREU6XG4gICAgICByZXR1cm4gYnVmLnB1c2goXCI8P1wiLCBub2RlLnRhcmdldCwgXCIgXCIsIG5vZGUuZGF0YSwgXCI/PlwiKTtcbiAgICBjYXNlIEVOVElUWV9SRUZFUkVOQ0VfTk9ERTpcbiAgICAgIHJldHVybiBidWYucHVzaCgnJicsIG5vZGUubm9kZU5hbWUsICc7Jyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJ1Zi5wdXNoKCc/PycsIG5vZGUubm9kZU5hbWUpO1xuICB9XG59XG5mdW5jdGlvbiBfaW1wb3J0Tm9kZShkb2MsIG5vZGUsIGRlZXApIHtcbiAgdmFyIG5vZGUyO1xuICBzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcbiAgICBjYXNlIEVMRU1FTlRfTk9ERTpcbiAgICAgIG5vZGUyID0gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgbm9kZTIub3duZXJEb2N1bWVudCA9IGRvYztcbiAgICBjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFUVFJJQlVURV9OT0RFOlxuICAgICAgZGVlcCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgfVxuICBpZiAoIW5vZGUyKSB7XG4gICAgbm9kZTIgPSBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gIH1cbiAgbm9kZTIub3duZXJEb2N1bWVudCA9IGRvYztcbiAgbm9kZTIucGFyZW50Tm9kZSA9IG51bGw7XG4gIGlmIChkZWVwKSB7XG4gICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgbm9kZTIuYXBwZW5kQ2hpbGQoX2ltcG9ydE5vZGUoZG9jLCBjaGlsZCwgZGVlcCkpO1xuICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vZGUyO1xufVxuZnVuY3Rpb24gX2Nsb25lTm9kZShkb2MsIG5vZGUsIGRlZXApIHtcbiAgdmFyIG5vZGUyID0gbmV3IG5vZGUuY29uc3RydWN0b3IoKTtcbiAgZm9yICh2YXIgbiBpbiBub2RlKSB7XG4gICAgdmFyIHYgPSBub2RlW25dO1xuICAgIGlmIChfdHlwZW9mKHYpICE9ICdvYmplY3QnKSB7XG4gICAgICBpZiAodiAhPSBub2RlMltuXSkge1xuICAgICAgICBub2RlMltuXSA9IHY7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChub2RlLmNoaWxkTm9kZXMpIHtcbiAgICBub2RlMi5jaGlsZE5vZGVzID0gbmV3IE5vZGVMaXN0KCk7XG4gIH1cbiAgbm9kZTIub3duZXJEb2N1bWVudCA9IGRvYztcbiAgc3dpdGNoIChub2RlMi5ub2RlVHlwZSkge1xuICAgIGNhc2UgRUxFTUVOVF9OT0RFOlxuICAgICAgdmFyIGF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgdmFyIGF0dHJzMiA9IG5vZGUyLmF0dHJpYnV0ZXMgPSBuZXcgTmFtZWROb2RlTWFwKCk7XG4gICAgICB2YXIgbGVuID0gYXR0cnMubGVuZ3RoO1xuICAgICAgYXR0cnMyLl9vd25lckVsZW1lbnQgPSBub2RlMjtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbm9kZTIuc2V0QXR0cmlidXRlTm9kZShfY2xvbmVOb2RlKGRvYywgYXR0cnMuaXRlbShpKSwgdHJ1ZSkpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgICA7XG4gICAgY2FzZSBBVFRSSUJVVEVfTk9ERTpcbiAgICAgIGRlZXAgPSB0cnVlO1xuICB9XG4gIGlmIChkZWVwKSB7XG4gICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgbm9kZTIuYXBwZW5kQ2hpbGQoX2Nsb25lTm9kZShkb2MsIGNoaWxkLCBkZWVwKSk7XG4gICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbm9kZTI7XG59XG5mdW5jdGlvbiBfX3NldF9fKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xufVxudHJ5IHtcbiAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICAgIHZhciBnZXRUZXh0Q29udGVudCA9IGZ1bmN0aW9uIGdldFRleHRDb250ZW50KG5vZGUpIHtcbiAgICAgIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuICAgICAgICBjYXNlIEVMRU1FTlRfTk9ERTpcbiAgICAgICAgY2FzZSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuICAgICAgICAgIHZhciBidWYgPSBbXTtcbiAgICAgICAgICBub2RlID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gNyAmJiBub2RlLm5vZGVUeXBlICE9PSA4KSB7XG4gICAgICAgICAgICAgIGJ1Zi5wdXNoKGdldFRleHRDb250ZW50KG5vZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYnVmLmpvaW4oJycpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBub2RlLm5vZGVWYWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaXZlTm9kZUxpc3QucHJvdG90eXBlLCAnbGVuZ3RoJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIF91cGRhdGVMaXZlTGlzdCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRsZW5ndGg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCAndGV4dENvbnRlbnQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGdldFRleHRDb250ZW50KHRoaXMpO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KGRhdGEpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm5vZGVUeXBlKSB7XG4gICAgICAgICAgY2FzZSBFTEVNRU5UX05PREU6XG4gICAgICAgICAgY2FzZSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YSB8fCBTdHJpbmcoZGF0YSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMubm9kZVZhbHVlID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIF9fc2V0X18gPSBmdW5jdGlvbiBfX3NldF9fKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICAgICAgb2JqZWN0WyckJCcgKyBrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxufSBjYXRjaCAoZSkge31cbmV4cG9ydHMuRE9NSW1wbGVtZW50YXRpb24gPSBET01JbXBsZW1lbnRhdGlvbjtcbmV4cG9ydHMuWE1MU2VyaWFsaXplciA9IFhNTFNlcmlhbGl6ZXI7XG5cbn0se31dLDU5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLmVudGl0eU1hcCA9IHtcbiAgbHQ6ICc8JyxcbiAgZ3Q6ICc+JyxcbiAgYW1wOiAnJicsXG4gIHF1b3Q6ICdcIicsXG4gIGFwb3M6IFwiJ1wiLFxuICBBZ3JhdmU6IFwiw4BcIixcbiAgQWFjdXRlOiBcIsOBXCIsXG4gIEFjaXJjOiBcIsOCXCIsXG4gIEF0aWxkZTogXCLDg1wiLFxuICBBdW1sOiBcIsOEXCIsXG4gIEFyaW5nOiBcIsOFXCIsXG4gIEFFbGlnOiBcIsOGXCIsXG4gIENjZWRpbDogXCLDh1wiLFxuICBFZ3JhdmU6IFwiw4hcIixcbiAgRWFjdXRlOiBcIsOJXCIsXG4gIEVjaXJjOiBcIsOKXCIsXG4gIEV1bWw6IFwiw4tcIixcbiAgSWdyYXZlOiBcIsOMXCIsXG4gIElhY3V0ZTogXCLDjVwiLFxuICBJY2lyYzogXCLDjlwiLFxuICBJdW1sOiBcIsOPXCIsXG4gIEVUSDogXCLDkFwiLFxuICBOdGlsZGU6IFwiw5FcIixcbiAgT2dyYXZlOiBcIsOSXCIsXG4gIE9hY3V0ZTogXCLDk1wiLFxuICBPY2lyYzogXCLDlFwiLFxuICBPdGlsZGU6IFwiw5VcIixcbiAgT3VtbDogXCLDllwiLFxuICBPc2xhc2g6IFwiw5hcIixcbiAgVWdyYXZlOiBcIsOZXCIsXG4gIFVhY3V0ZTogXCLDmlwiLFxuICBVY2lyYzogXCLDm1wiLFxuICBVdW1sOiBcIsOcXCIsXG4gIFlhY3V0ZTogXCLDnVwiLFxuICBUSE9STjogXCLDnlwiLFxuICBzemxpZzogXCLDn1wiLFxuICBhZ3JhdmU6IFwiw6BcIixcbiAgYWFjdXRlOiBcIsOhXCIsXG4gIGFjaXJjOiBcIsOiXCIsXG4gIGF0aWxkZTogXCLDo1wiLFxuICBhdW1sOiBcIsOkXCIsXG4gIGFyaW5nOiBcIsOlXCIsXG4gIGFlbGlnOiBcIsOmXCIsXG4gIGNjZWRpbDogXCLDp1wiLFxuICBlZ3JhdmU6IFwiw6hcIixcbiAgZWFjdXRlOiBcIsOpXCIsXG4gIGVjaXJjOiBcIsOqXCIsXG4gIGV1bWw6IFwiw6tcIixcbiAgaWdyYXZlOiBcIsOsXCIsXG4gIGlhY3V0ZTogXCLDrVwiLFxuICBpY2lyYzogXCLDrlwiLFxuICBpdW1sOiBcIsOvXCIsXG4gIGV0aDogXCLDsFwiLFxuICBudGlsZGU6IFwiw7FcIixcbiAgb2dyYXZlOiBcIsOyXCIsXG4gIG9hY3V0ZTogXCLDs1wiLFxuICBvY2lyYzogXCLDtFwiLFxuICBvdGlsZGU6IFwiw7VcIixcbiAgb3VtbDogXCLDtlwiLFxuICBvc2xhc2g6IFwiw7hcIixcbiAgdWdyYXZlOiBcIsO5XCIsXG4gIHVhY3V0ZTogXCLDulwiLFxuICB1Y2lyYzogXCLDu1wiLFxuICB1dW1sOiBcIsO8XCIsXG4gIHlhY3V0ZTogXCLDvVwiLFxuICB0aG9ybjogXCLDvlwiLFxuICB5dW1sOiBcIsO/XCIsXG4gIG5ic3A6IFwiIFwiLFxuICBpZXhjbDogXCLCoVwiLFxuICBjZW50OiBcIsKiXCIsXG4gIHBvdW5kOiBcIsKjXCIsXG4gIGN1cnJlbjogXCLCpFwiLFxuICB5ZW46IFwiwqVcIixcbiAgYnJ2YmFyOiBcIsKmXCIsXG4gIHNlY3Q6IFwiwqdcIixcbiAgdW1sOiBcIsKoXCIsXG4gIGNvcHk6IFwiwqlcIixcbiAgb3JkZjogXCLCqlwiLFxuICBsYXF1bzogXCLCq1wiLFxuICBub3Q6IFwiwqxcIixcbiAgc2h5OiBcIsKtwq1cIixcbiAgcmVnOiBcIsKuXCIsXG4gIG1hY3I6IFwiwq9cIixcbiAgZGVnOiBcIsKwXCIsXG4gIHBsdXNtbjogXCLCsVwiLFxuICBzdXAyOiBcIsKyXCIsXG4gIHN1cDM6IFwiwrNcIixcbiAgYWN1dGU6IFwiwrRcIixcbiAgbWljcm86IFwiwrVcIixcbiAgcGFyYTogXCLCtlwiLFxuICBtaWRkb3Q6IFwiwrdcIixcbiAgY2VkaWw6IFwiwrhcIixcbiAgc3VwMTogXCLCuVwiLFxuICBvcmRtOiBcIsK6XCIsXG4gIHJhcXVvOiBcIsK7XCIsXG4gIGZyYWMxNDogXCLCvFwiLFxuICBmcmFjMTI6IFwiwr1cIixcbiAgZnJhYzM0OiBcIsK+XCIsXG4gIGlxdWVzdDogXCLCv1wiLFxuICB0aW1lczogXCLDl1wiLFxuICBkaXZpZGU6IFwiw7dcIixcbiAgZm9yYWxsOiBcIuKIgFwiLFxuICBwYXJ0OiBcIuKIglwiLFxuICBleGlzdDogXCLiiINcIixcbiAgZW1wdHk6IFwi4oiFXCIsXG4gIG5hYmxhOiBcIuKIh1wiLFxuICBpc2luOiBcIuKIiFwiLFxuICBub3RpbjogXCLiiIlcIixcbiAgbmk6IFwi4oiLXCIsXG4gIHByb2Q6IFwi4oiPXCIsXG4gIHN1bTogXCLiiJFcIixcbiAgbWludXM6IFwi4oiSXCIsXG4gIGxvd2FzdDogXCLiiJdcIixcbiAgcmFkaWM6IFwi4oiaXCIsXG4gIHByb3A6IFwi4oidXCIsXG4gIGluZmluOiBcIuKInlwiLFxuICBhbmc6IFwi4oigXCIsXG4gIGFuZDogXCLiiKdcIixcbiAgb3I6IFwi4oioXCIsXG4gIGNhcDogXCLiiKlcIixcbiAgY3VwOiBcIuKIqlwiLFxuICAnaW50JzogXCLiiKtcIixcbiAgdGhlcmU0OiBcIuKItFwiLFxuICBzaW06IFwi4oi8XCIsXG4gIGNvbmc6IFwi4omFXCIsXG4gIGFzeW1wOiBcIuKJiFwiLFxuICBuZTogXCLiiaBcIixcbiAgZXF1aXY6IFwi4omhXCIsXG4gIGxlOiBcIuKJpFwiLFxuICBnZTogXCLiiaVcIixcbiAgc3ViOiBcIuKKglwiLFxuICBzdXA6IFwi4oqDXCIsXG4gIG5zdWI6IFwi4oqEXCIsXG4gIHN1YmU6IFwi4oqGXCIsXG4gIHN1cGU6IFwi4oqHXCIsXG4gIG9wbHVzOiBcIuKKlVwiLFxuICBvdGltZXM6IFwi4oqXXCIsXG4gIHBlcnA6IFwi4oqlXCIsXG4gIHNkb3Q6IFwi4ouFXCIsXG4gIEFscGhhOiBcIs6RXCIsXG4gIEJldGE6IFwizpJcIixcbiAgR2FtbWE6IFwizpNcIixcbiAgRGVsdGE6IFwizpRcIixcbiAgRXBzaWxvbjogXCLOlVwiLFxuICBaZXRhOiBcIs6WXCIsXG4gIEV0YTogXCLOl1wiLFxuICBUaGV0YTogXCLOmFwiLFxuICBJb3RhOiBcIs6ZXCIsXG4gIEthcHBhOiBcIs6aXCIsXG4gIExhbWJkYTogXCLOm1wiLFxuICBNdTogXCLOnFwiLFxuICBOdTogXCLOnVwiLFxuICBYaTogXCLOnlwiLFxuICBPbWljcm9uOiBcIs6fXCIsXG4gIFBpOiBcIs6gXCIsXG4gIFJobzogXCLOoVwiLFxuICBTaWdtYTogXCLOo1wiLFxuICBUYXU6IFwizqRcIixcbiAgVXBzaWxvbjogXCLOpVwiLFxuICBQaGk6IFwizqZcIixcbiAgQ2hpOiBcIs6nXCIsXG4gIFBzaTogXCLOqFwiLFxuICBPbWVnYTogXCLOqVwiLFxuICBhbHBoYTogXCLOsVwiLFxuICBiZXRhOiBcIs6yXCIsXG4gIGdhbW1hOiBcIs6zXCIsXG4gIGRlbHRhOiBcIs60XCIsXG4gIGVwc2lsb246IFwizrVcIixcbiAgemV0YTogXCLOtlwiLFxuICBldGE6IFwizrdcIixcbiAgdGhldGE6IFwizrhcIixcbiAgaW90YTogXCLOuVwiLFxuICBrYXBwYTogXCLOulwiLFxuICBsYW1iZGE6IFwizrtcIixcbiAgbXU6IFwizrxcIixcbiAgbnU6IFwizr1cIixcbiAgeGk6IFwizr5cIixcbiAgb21pY3JvbjogXCLOv1wiLFxuICBwaTogXCLPgFwiLFxuICByaG86IFwiz4FcIixcbiAgc2lnbWFmOiBcIs+CXCIsXG4gIHNpZ21hOiBcIs+DXCIsXG4gIHRhdTogXCLPhFwiLFxuICB1cHNpbG9uOiBcIs+FXCIsXG4gIHBoaTogXCLPhlwiLFxuICBjaGk6IFwiz4dcIixcbiAgcHNpOiBcIs+IXCIsXG4gIG9tZWdhOiBcIs+JXCIsXG4gIHRoZXRhc3ltOiBcIs+RXCIsXG4gIHVwc2loOiBcIs+SXCIsXG4gIHBpdjogXCLPllwiLFxuICBPRWxpZzogXCLFklwiLFxuICBvZWxpZzogXCLFk1wiLFxuICBTY2Fyb246IFwixaBcIixcbiAgc2Nhcm9uOiBcIsWhXCIsXG4gIFl1bWw6IFwixbhcIixcbiAgZm5vZjogXCLGklwiLFxuICBjaXJjOiBcIsuGXCIsXG4gIHRpbGRlOiBcIsucXCIsXG4gIGVuc3A6IFwi4oCCXCIsXG4gIGVtc3A6IFwi4oCDXCIsXG4gIHRoaW5zcDogXCLigIlcIixcbiAgenduajogXCLigIxcIixcbiAgendqOiBcIuKAjVwiLFxuICBscm06IFwi4oCOXCIsXG4gIHJsbTogXCLigI9cIixcbiAgbmRhc2g6IFwi4oCTXCIsXG4gIG1kYXNoOiBcIuKAlFwiLFxuICBsc3F1bzogXCLigJhcIixcbiAgcnNxdW86IFwi4oCZXCIsXG4gIHNicXVvOiBcIuKAmlwiLFxuICBsZHF1bzogXCLigJxcIixcbiAgcmRxdW86IFwi4oCdXCIsXG4gIGJkcXVvOiBcIuKAnlwiLFxuICBkYWdnZXI6IFwi4oCgXCIsXG4gIERhZ2dlcjogXCLigKFcIixcbiAgYnVsbDogXCLigKJcIixcbiAgaGVsbGlwOiBcIuKAplwiLFxuICBwZXJtaWw6IFwi4oCwXCIsXG4gIHByaW1lOiBcIuKAslwiLFxuICBQcmltZTogXCLigLNcIixcbiAgbHNhcXVvOiBcIuKAuVwiLFxuICByc2FxdW86IFwi4oC6XCIsXG4gIG9saW5lOiBcIuKAvlwiLFxuICBldXJvOiBcIuKCrFwiLFxuICB0cmFkZTogXCLihKJcIixcbiAgbGFycjogXCLihpBcIixcbiAgdWFycjogXCLihpFcIixcbiAgcmFycjogXCLihpJcIixcbiAgZGFycjogXCLihpNcIixcbiAgaGFycjogXCLihpRcIixcbiAgY3JhcnI6IFwi4oa1XCIsXG4gIGxjZWlsOiBcIuKMiFwiLFxuICByY2VpbDogXCLijIlcIixcbiAgbGZsb29yOiBcIuKMilwiLFxuICByZmxvb3I6IFwi4oyLXCIsXG4gIGxvejogXCLil4pcIixcbiAgc3BhZGVzOiBcIuKZoFwiLFxuICBjbHViczogXCLimaNcIixcbiAgaGVhcnRzOiBcIuKZpVwiLFxuICBkaWFtczogXCLimaZcIlxufTtcblxufSx7fV0sNjA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBuYW1lU3RhcnRDaGFyID0gL1tBLVpfYS16XFx4QzAtXFx4RDZcXHhEOC1cXHhGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRF0vO1xudmFyIG5hbWVDaGFyID0gbmV3IFJlZ0V4cChcIltcXFxcLVxcXFwuMC05XCIgKyBuYW1lU3RhcnRDaGFyLnNvdXJjZS5zbGljZSgxLCAtMSkgKyBcIlxcXFx1MDBCN1xcXFx1MDMwMC1cXFxcdTAzNkZcXFxcdTIwM0YtXFxcXHUyMDQwXVwiKTtcbnZhciB0YWdOYW1lUGF0dGVybiA9IG5ldyBSZWdFeHAoJ14nICsgbmFtZVN0YXJ0Q2hhci5zb3VyY2UgKyBuYW1lQ2hhci5zb3VyY2UgKyAnKig/OlxcOicgKyBuYW1lU3RhcnRDaGFyLnNvdXJjZSArIG5hbWVDaGFyLnNvdXJjZSArICcqKT8kJyk7XG52YXIgU19UQUcgPSAwO1xudmFyIFNfQVRUUiA9IDE7XG52YXIgU19BVFRSX1NQQUNFID0gMjtcbnZhciBTX0VRID0gMztcbnZhciBTX0FUVFJfTk9RVU9UX1ZBTFVFID0gNDtcbnZhciBTX0FUVFJfRU5EID0gNTtcbnZhciBTX1RBR19TUEFDRSA9IDY7XG52YXIgU19UQUdfQ0xPU0UgPSA3O1xuZnVuY3Rpb24gWE1MUmVhZGVyKCkge31cblhNTFJlYWRlci5wcm90b3R5cGUgPSB7XG4gIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShzb3VyY2UsIGRlZmF1bHROU01hcCwgZW50aXR5TWFwKSB7XG4gICAgdmFyIGRvbUJ1aWxkZXIgPSB0aGlzLmRvbUJ1aWxkZXI7XG4gICAgZG9tQnVpbGRlci5zdGFydERvY3VtZW50KCk7XG4gICAgX2NvcHkoZGVmYXVsdE5TTWFwLCBkZWZhdWx0TlNNYXAgPSB7fSk7XG4gICAgX3BhcnNlKHNvdXJjZSwgZGVmYXVsdE5TTWFwLCBlbnRpdHlNYXAsIGRvbUJ1aWxkZXIsIHRoaXMuZXJyb3JIYW5kbGVyKTtcbiAgICBkb21CdWlsZGVyLmVuZERvY3VtZW50KCk7XG4gIH1cbn07XG5mdW5jdGlvbiBfcGFyc2Uoc291cmNlLCBkZWZhdWx0TlNNYXBDb3B5LCBlbnRpdHlNYXAsIGRvbUJ1aWxkZXIsIGVycm9ySGFuZGxlcikge1xuICBmdW5jdGlvbiBmaXhlZEZyb21DaGFyQ29kZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPiAweGZmZmYpIHtcbiAgICAgIGNvZGUgLT0gMHgxMDAwMDtcbiAgICAgIHZhciBzdXJyb2dhdGUxID0gMHhkODAwICsgKGNvZGUgPj4gMTApLFxuICAgICAgICBzdXJyb2dhdGUyID0gMHhkYzAwICsgKGNvZGUgJiAweDNmZik7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShzdXJyb2dhdGUxLCBzdXJyb2dhdGUyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGVudGl0eVJlcGxhY2VyKGEpIHtcbiAgICB2YXIgayA9IGEuc2xpY2UoMSwgLTEpO1xuICAgIGlmIChrIGluIGVudGl0eU1hcCkge1xuICAgICAgcmV0dXJuIGVudGl0eU1hcFtrXTtcbiAgICB9IGVsc2UgaWYgKGsuY2hhckF0KDApID09PSAnIycpIHtcbiAgICAgIHJldHVybiBmaXhlZEZyb21DaGFyQ29kZShwYXJzZUludChrLnN1YnN0cigxKS5yZXBsYWNlKCd4JywgJzB4JykpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JIYW5kbGVyLmVycm9yKCdlbnRpdHkgbm90IGZvdW5kOicgKyBhKTtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhcHBlbmRUZXh0KGVuZCkge1xuICAgIGlmIChlbmQgPiBzdGFydCkge1xuICAgICAgdmFyIHh0ID0gc291cmNlLnN1YnN0cmluZyhzdGFydCwgZW5kKS5yZXBsYWNlKC8mIz9cXHcrOy9nLCBlbnRpdHlSZXBsYWNlcik7XG4gICAgICBsb2NhdG9yICYmIHBvc2l0aW9uKHN0YXJ0KTtcbiAgICAgIGRvbUJ1aWxkZXIuY2hhcmFjdGVycyh4dCwgMCwgZW5kIC0gc3RhcnQpO1xuICAgICAgc3RhcnQgPSBlbmQ7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHBvc2l0aW9uKHAsIG0pIHtcbiAgICB3aGlsZSAocCA+PSBsaW5lRW5kICYmIChtID0gbGluZVBhdHRlcm4uZXhlYyhzb3VyY2UpKSkge1xuICAgICAgbGluZVN0YXJ0ID0gbS5pbmRleDtcbiAgICAgIGxpbmVFbmQgPSBsaW5lU3RhcnQgKyBtWzBdLmxlbmd0aDtcbiAgICAgIGxvY2F0b3IubGluZU51bWJlcisrO1xuICAgIH1cbiAgICBsb2NhdG9yLmNvbHVtbk51bWJlciA9IHAgLSBsaW5lU3RhcnQgKyAxO1xuICB9XG4gIHZhciBsaW5lU3RhcnQgPSAwO1xuICB2YXIgbGluZUVuZCA9IDA7XG4gIHZhciBsaW5lUGF0dGVybiA9IC8uKig/Olxcclxcbj98XFxuKXwuKiQvZztcbiAgdmFyIGxvY2F0b3IgPSBkb21CdWlsZGVyLmxvY2F0b3I7XG4gIHZhciBwYXJzZVN0YWNrID0gW3tcbiAgICBjdXJyZW50TlNNYXA6IGRlZmF1bHROU01hcENvcHlcbiAgfV07XG4gIHZhciBjbG9zZU1hcCA9IHt9O1xuICB2YXIgc3RhcnQgPSAwO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgdGFnU3RhcnQgPSBzb3VyY2UuaW5kZXhPZignPCcsIHN0YXJ0KTtcbiAgICAgIGlmICh0YWdTdGFydCA8IDApIHtcbiAgICAgICAgaWYgKCFzb3VyY2Uuc3Vic3RyKHN0YXJ0KS5tYXRjaCgvXlxccyokLykpIHtcbiAgICAgICAgICB2YXIgZG9jID0gZG9tQnVpbGRlci5kb2M7XG4gICAgICAgICAgdmFyIHRleHQgPSBkb2MuY3JlYXRlVGV4dE5vZGUoc291cmNlLnN1YnN0cihzdGFydCkpO1xuICAgICAgICAgIGRvYy5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgICBkb21CdWlsZGVyLmN1cnJlbnRFbGVtZW50ID0gdGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGFnU3RhcnQgPiBzdGFydCkge1xuICAgICAgICBhcHBlbmRUZXh0KHRhZ1N0YXJ0KTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoc291cmNlLmNoYXJBdCh0YWdTdGFydCArIDEpKSB7XG4gICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgIHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignPicsIHRhZ1N0YXJ0ICsgMyk7XG4gICAgICAgICAgdmFyIHRhZ05hbWUgPSBzb3VyY2Uuc3Vic3RyaW5nKHRhZ1N0YXJ0ICsgMiwgZW5kKTtcbiAgICAgICAgICB2YXIgY29uZmlnID0gcGFyc2VTdGFjay5wb3AoKTtcbiAgICAgICAgICBpZiAoZW5kIDwgMCkge1xuICAgICAgICAgICAgdGFnTmFtZSA9IHNvdXJjZS5zdWJzdHJpbmcodGFnU3RhcnQgKyAyKS5yZXBsYWNlKC9bXFxzPF0uKi8sICcnKTtcbiAgICAgICAgICAgIGVycm9ySGFuZGxlci5lcnJvcihcImVuZCB0YWcgbmFtZTogXCIgKyB0YWdOYW1lICsgJyBpcyBub3QgY29tcGxldGU6JyArIGNvbmZpZy50YWdOYW1lKTtcbiAgICAgICAgICAgIGVuZCA9IHRhZ1N0YXJ0ICsgMSArIHRhZ05hbWUubGVuZ3RoO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZS5tYXRjaCgvXFxzPC8pKSB7XG4gICAgICAgICAgICB0YWdOYW1lID0gdGFnTmFtZS5yZXBsYWNlKC9bXFxzPF0uKi8sICcnKTtcbiAgICAgICAgICAgIGVycm9ySGFuZGxlci5lcnJvcihcImVuZCB0YWcgbmFtZTogXCIgKyB0YWdOYW1lICsgJyBtYXliZSBub3QgY29tcGxldGUnKTtcbiAgICAgICAgICAgIGVuZCA9IHRhZ1N0YXJ0ICsgMSArIHRhZ05hbWUubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbG9jYWxOU01hcCA9IGNvbmZpZy5sb2NhbE5TTWFwO1xuICAgICAgICAgIHZhciBlbmRNYXRjaCA9IGNvbmZpZy50YWdOYW1lID09IHRhZ05hbWU7XG4gICAgICAgICAgdmFyIGVuZElnbm9yZUNhc2VNYWNoID0gZW5kTWF0Y2ggfHwgY29uZmlnLnRhZ05hbWUgJiYgY29uZmlnLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSB0YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKGVuZElnbm9yZUNhc2VNYWNoKSB7XG4gICAgICAgICAgICBkb21CdWlsZGVyLmVuZEVsZW1lbnQoY29uZmlnLnVyaSwgY29uZmlnLmxvY2FsTmFtZSwgdGFnTmFtZSk7XG4gICAgICAgICAgICBpZiAobG9jYWxOU01hcCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBwcmVmaXggaW4gbG9jYWxOU01hcCkge1xuICAgICAgICAgICAgICAgIGRvbUJ1aWxkZXIuZW5kUHJlZml4TWFwcGluZyhwcmVmaXgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVuZE1hdGNoKSB7XG4gICAgICAgICAgICAgIGVycm9ySGFuZGxlci5mYXRhbEVycm9yKFwiZW5kIHRhZyBuYW1lOiBcIiArIHRhZ05hbWUgKyAnIGlzIG5vdCBtYXRjaCB0aGUgY3VycmVudCBzdGFydCB0YWdOYW1lOicgKyBjb25maWcudGFnTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlU3RhY2sucHVzaChjb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbmQrKztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnPyc6XG4gICAgICAgICAgbG9jYXRvciAmJiBwb3NpdGlvbih0YWdTdGFydCk7XG4gICAgICAgICAgZW5kID0gcGFyc2VJbnN0cnVjdGlvbihzb3VyY2UsIHRhZ1N0YXJ0LCBkb21CdWlsZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnISc6XG4gICAgICAgICAgbG9jYXRvciAmJiBwb3NpdGlvbih0YWdTdGFydCk7XG4gICAgICAgICAgZW5kID0gcGFyc2VEQ0Moc291cmNlLCB0YWdTdGFydCwgZG9tQnVpbGRlciwgZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBsb2NhdG9yICYmIHBvc2l0aW9uKHRhZ1N0YXJ0KTtcbiAgICAgICAgICB2YXIgZWwgPSBuZXcgRWxlbWVudEF0dHJpYnV0ZXMoKTtcbiAgICAgICAgICB2YXIgY3VycmVudE5TTWFwID0gcGFyc2VTdGFja1twYXJzZVN0YWNrLmxlbmd0aCAtIDFdLmN1cnJlbnROU01hcDtcbiAgICAgICAgICB2YXIgZW5kID0gcGFyc2VFbGVtZW50U3RhcnRQYXJ0KHNvdXJjZSwgdGFnU3RhcnQsIGVsLCBjdXJyZW50TlNNYXAsIGVudGl0eVJlcGxhY2VyLCBlcnJvckhhbmRsZXIpO1xuICAgICAgICAgIHZhciBsZW4gPSBlbC5sZW5ndGg7XG4gICAgICAgICAgaWYgKCFlbC5jbG9zZWQgJiYgZml4U2VsZkNsb3NlZChzb3VyY2UsIGVuZCwgZWwudGFnTmFtZSwgY2xvc2VNYXApKSB7XG4gICAgICAgICAgICBlbC5jbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFlbnRpdHlNYXAubmJzcCkge1xuICAgICAgICAgICAgICBlcnJvckhhbmRsZXIud2FybmluZygndW5jbG9zZWQgeG1sIGF0dHJpYnV0ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobG9jYXRvciAmJiBsZW4pIHtcbiAgICAgICAgICAgIHZhciBsb2NhdG9yMiA9IGNvcHlMb2NhdG9yKGxvY2F0b3IsIHt9KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFyIGEgPSBlbFtpXTtcbiAgICAgICAgICAgICAgcG9zaXRpb24oYS5vZmZzZXQpO1xuICAgICAgICAgICAgICBhLmxvY2F0b3IgPSBjb3B5TG9jYXRvcihsb2NhdG9yLCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb21CdWlsZGVyLmxvY2F0b3IgPSBsb2NhdG9yMjtcbiAgICAgICAgICAgIGlmIChhcHBlbmRFbGVtZW50KGVsLCBkb21CdWlsZGVyLCBjdXJyZW50TlNNYXApKSB7XG4gICAgICAgICAgICAgIHBhcnNlU3RhY2sucHVzaChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb21CdWlsZGVyLmxvY2F0b3IgPSBsb2NhdG9yO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYXBwZW5kRWxlbWVudChlbCwgZG9tQnVpbGRlciwgY3VycmVudE5TTWFwKSkge1xuICAgICAgICAgICAgICBwYXJzZVN0YWNrLnB1c2goZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWwudXJpID09PSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcgJiYgIWVsLmNsb3NlZCkge1xuICAgICAgICAgICAgZW5kID0gcGFyc2VIdG1sU3BlY2lhbENvbnRlbnQoc291cmNlLCBlbmQsIGVsLnRhZ05hbWUsIGVudGl0eVJlcGxhY2VyLCBkb21CdWlsZGVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5kKys7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9ySGFuZGxlci5lcnJvcignZWxlbWVudCBwYXJzZSBlcnJvcjogJyArIGUpO1xuICAgICAgZW5kID0gLTE7XG4gICAgfVxuICAgIGlmIChlbmQgPiBzdGFydCkge1xuICAgICAgc3RhcnQgPSBlbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcGVuZFRleHQoTWF0aC5tYXgodGFnU3RhcnQsIHN0YXJ0KSArIDEpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY29weUxvY2F0b3IoZiwgdCkge1xuICB0LmxpbmVOdW1iZXIgPSBmLmxpbmVOdW1iZXI7XG4gIHQuY29sdW1uTnVtYmVyID0gZi5jb2x1bW5OdW1iZXI7XG4gIHJldHVybiB0O1xufVxuZnVuY3Rpb24gcGFyc2VFbGVtZW50U3RhcnRQYXJ0KHNvdXJjZSwgc3RhcnQsIGVsLCBjdXJyZW50TlNNYXAsIGVudGl0eVJlcGxhY2VyLCBlcnJvckhhbmRsZXIpIHtcbiAgdmFyIGF0dHJOYW1lO1xuICB2YXIgdmFsdWU7XG4gIHZhciBwID0gKytzdGFydDtcbiAgdmFyIHMgPSBTX1RBRztcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgYyA9IHNvdXJjZS5jaGFyQXQocCk7XG4gICAgc3dpdGNoIChjKSB7XG4gICAgICBjYXNlICc9JzpcbiAgICAgICAgaWYgKHMgPT09IFNfQVRUUikge1xuICAgICAgICAgIGF0dHJOYW1lID0gc291cmNlLnNsaWNlKHN0YXJ0LCBwKTtcbiAgICAgICAgICBzID0gU19FUTtcbiAgICAgICAgfSBlbHNlIGlmIChzID09PSBTX0FUVFJfU1BBQ0UpIHtcbiAgICAgICAgICBzID0gU19FUTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSBlcXVhbCBtdXN0IGFmdGVyIGF0dHJOYW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdcXCcnOlxuICAgICAgY2FzZSAnXCInOlxuICAgICAgICBpZiAocyA9PT0gU19FUSB8fCBzID09PSBTX0FUVFIpIHtcbiAgICAgICAgICBpZiAocyA9PT0gU19BVFRSKSB7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIHZhbHVlIG11c3QgYWZ0ZXIgXCI9XCInKTtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gc291cmNlLnNsaWNlKHN0YXJ0LCBwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhcnQgPSBwICsgMTtcbiAgICAgICAgICBwID0gc291cmNlLmluZGV4T2YoYywgc3RhcnQpO1xuICAgICAgICAgIGlmIChwID4gMCkge1xuICAgICAgICAgICAgdmFsdWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApLnJlcGxhY2UoLyYjP1xcdys7L2csIGVudGl0eVJlcGxhY2VyKTtcbiAgICAgICAgICAgIGVsLmFkZChhdHRyTmFtZSwgdmFsdWUsIHN0YXJ0IC0gMSk7XG4gICAgICAgICAgICBzID0gU19BVFRSX0VORDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgdmFsdWUgbm8gZW5kIFxcJycgKyBjICsgJ1xcJyBtYXRjaCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzID09IFNfQVRUUl9OT1FVT1RfVkFMVUUpIHtcbiAgICAgICAgICB2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCkucmVwbGFjZSgvJiM/XFx3KzsvZywgZW50aXR5UmVwbGFjZXIpO1xuICAgICAgICAgIGVsLmFkZChhdHRyTmFtZSwgdmFsdWUsIHN0YXJ0KTtcbiAgICAgICAgICBlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJyArIGF0dHJOYW1lICsgJ1wiIG1pc3NlZCBzdGFydCBxdW90KCcgKyBjICsgJykhIScpO1xuICAgICAgICAgIHN0YXJ0ID0gcCArIDE7XG4gICAgICAgICAgcyA9IFNfQVRUUl9FTkQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgdmFsdWUgbXVzdCBhZnRlciBcIj1cIicpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIHN3aXRjaCAocykge1xuICAgICAgICAgIGNhc2UgU19UQUc6XG4gICAgICAgICAgICBlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCwgcCkpO1xuICAgICAgICAgIGNhc2UgU19BVFRSX0VORDpcbiAgICAgICAgICBjYXNlIFNfVEFHX1NQQUNFOlxuICAgICAgICAgIGNhc2UgU19UQUdfQ0xPU0U6XG4gICAgICAgICAgICBzID0gU19UQUdfQ0xPU0U7XG4gICAgICAgICAgICBlbC5jbG9zZWQgPSB0cnVlO1xuICAgICAgICAgIGNhc2UgU19BVFRSX05PUVVPVF9WQUxVRTpcbiAgICAgICAgICBjYXNlIFNfQVRUUjpcbiAgICAgICAgICBjYXNlIFNfQVRUUl9TUEFDRTpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdHRyaWJ1dGUgaW52YWxpZCBjbG9zZSBjaGFyKCcvJylcIik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcnOlxuICAgICAgICBlcnJvckhhbmRsZXIuZXJyb3IoJ3VuZXhwZWN0ZWQgZW5kIG9mIGlucHV0Jyk7XG4gICAgICAgIGlmIChzID09IFNfVEFHKSB7XG4gICAgICAgICAgZWwuc2V0VGFnTmFtZShzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcDtcbiAgICAgIGNhc2UgJz4nOlxuICAgICAgICBzd2l0Y2ggKHMpIHtcbiAgICAgICAgICBjYXNlIFNfVEFHOlxuICAgICAgICAgICAgZWwuc2V0VGFnTmFtZShzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApKTtcbiAgICAgICAgICBjYXNlIFNfQVRUUl9FTkQ6XG4gICAgICAgICAgY2FzZSBTX1RBR19TUEFDRTpcbiAgICAgICAgICBjYXNlIFNfVEFHX0NMT1NFOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOlxuICAgICAgICAgIGNhc2UgU19BVFRSOlxuICAgICAgICAgICAgdmFsdWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnNsaWNlKC0xKSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgIGVsLmNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgU19BVFRSX1NQQUNFOlxuICAgICAgICAgICAgaWYgKHMgPT09IFNfQVRUUl9TUEFDRSkge1xuICAgICAgICAgICAgICB2YWx1ZSA9IGF0dHJOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMgPT0gU19BVFRSX05PUVVPVF9WQUxVRSkge1xuICAgICAgICAgICAgICBlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJyArIHZhbHVlICsgJ1wiIG1pc3NlZCBxdW90KFwiKSEhJyk7XG4gICAgICAgICAgICAgIGVsLmFkZChhdHRyTmFtZSwgdmFsdWUucmVwbGFjZSgvJiM/XFx3KzsvZywgZW50aXR5UmVwbGFjZXIpLCBzdGFydCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoY3VycmVudE5TTWFwWycnXSAhPT0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnIHx8ICF2YWx1ZS5tYXRjaCgvXig/OmRpc2FibGVkfGNoZWNrZWR8c2VsZWN0ZWQpJC9pKSkge1xuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInICsgdmFsdWUgKyAnXCIgbWlzc2VkIHZhbHVlISEgXCInICsgdmFsdWUgKyAnXCIgaW5zdGVhZCEhJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWwuYWRkKHZhbHVlLCB2YWx1ZSwgc3RhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBTX0VROlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgdmFsdWUgbWlzc2VkISEnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcDtcbiAgICAgIGNhc2UgXCJcXHg4MFwiOlxuICAgICAgICBjID0gJyAnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGMgPD0gJyAnKSB7XG4gICAgICAgICAgc3dpdGNoIChzKSB7XG4gICAgICAgICAgICBjYXNlIFNfVEFHOlxuICAgICAgICAgICAgICBlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCwgcCkpO1xuICAgICAgICAgICAgICBzID0gU19UQUdfU1BBQ0U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTX0FUVFI6XG4gICAgICAgICAgICAgIGF0dHJOYW1lID0gc291cmNlLnNsaWNlKHN0YXJ0LCBwKTtcbiAgICAgICAgICAgICAgcyA9IFNfQVRUUl9TUEFDRTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNfQVRUUl9OT1FVT1RfVkFMVUU6XG4gICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCkucmVwbGFjZSgvJiM/XFx3KzsvZywgZW50aXR5UmVwbGFjZXIpO1xuICAgICAgICAgICAgICBlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJyArIHZhbHVlICsgJ1wiIG1pc3NlZCBxdW90KFwiKSEhJyk7XG4gICAgICAgICAgICAgIGVsLmFkZChhdHRyTmFtZSwgdmFsdWUsIHN0YXJ0KTtcbiAgICAgICAgICAgIGNhc2UgU19BVFRSX0VORDpcbiAgICAgICAgICAgICAgcyA9IFNfVEFHX1NQQUNFO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpdGNoIChzKSB7XG4gICAgICAgICAgICBjYXNlIFNfQVRUUl9TUEFDRTpcbiAgICAgICAgICAgICAgdmFyIHRhZ05hbWUgPSBlbC50YWdOYW1lO1xuICAgICAgICAgICAgICBpZiAoY3VycmVudE5TTWFwWycnXSAhPT0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnIHx8ICFhdHRyTmFtZS5tYXRjaCgvXig/OmRpc2FibGVkfGNoZWNrZWR8c2VsZWN0ZWQpJC9pKSkge1xuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInICsgYXR0ck5hbWUgKyAnXCIgbWlzc2VkIHZhbHVlISEgXCInICsgYXR0ck5hbWUgKyAnXCIgaW5zdGVhZDIhIScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsLmFkZChhdHRyTmFtZSwgYXR0ck5hbWUsIHN0YXJ0KTtcbiAgICAgICAgICAgICAgc3RhcnQgPSBwO1xuICAgICAgICAgICAgICBzID0gU19BVFRSO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU19BVFRSX0VORDpcbiAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBzcGFjZSBpcyByZXF1aXJlZFwiJyArIGF0dHJOYW1lICsgJ1wiISEnKTtcbiAgICAgICAgICAgIGNhc2UgU19UQUdfU1BBQ0U6XG4gICAgICAgICAgICAgIHMgPSBTX0FUVFI7XG4gICAgICAgICAgICAgIHN0YXJ0ID0gcDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNfRVE6XG4gICAgICAgICAgICAgIHMgPSBTX0FUVFJfTk9RVU9UX1ZBTFVFO1xuICAgICAgICAgICAgICBzdGFydCA9IHA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTX1RBR19DTE9TRTpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZWxlbWVudHMgY2xvc2VkIGNoYXJhY3RlciAnLycgYW5kICc+JyBtdXN0IGJlIGNvbm5lY3RlZCB0b1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcCsrO1xuICB9XG59XG5mdW5jdGlvbiBhcHBlbmRFbGVtZW50KGVsLCBkb21CdWlsZGVyLCBjdXJyZW50TlNNYXApIHtcbiAgdmFyIHRhZ05hbWUgPSBlbC50YWdOYW1lO1xuICB2YXIgbG9jYWxOU01hcCA9IG51bGw7XG4gIHZhciBpID0gZWwubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGEgPSBlbFtpXTtcbiAgICB2YXIgcU5hbWUgPSBhLnFOYW1lO1xuICAgIHZhciB2YWx1ZSA9IGEudmFsdWU7XG4gICAgdmFyIG5zcCA9IHFOYW1lLmluZGV4T2YoJzonKTtcbiAgICBpZiAobnNwID4gMCkge1xuICAgICAgdmFyIHByZWZpeCA9IGEucHJlZml4ID0gcU5hbWUuc2xpY2UoMCwgbnNwKTtcbiAgICAgIHZhciBsb2NhbE5hbWUgPSBxTmFtZS5zbGljZShuc3AgKyAxKTtcbiAgICAgIHZhciBuc1ByZWZpeCA9IHByZWZpeCA9PT0gJ3htbG5zJyAmJiBsb2NhbE5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsTmFtZSA9IHFOYW1lO1xuICAgICAgcHJlZml4ID0gbnVsbDtcbiAgICAgIG5zUHJlZml4ID0gcU5hbWUgPT09ICd4bWxucycgJiYgJyc7XG4gICAgfVxuICAgIGEubG9jYWxOYW1lID0gbG9jYWxOYW1lO1xuICAgIGlmIChuc1ByZWZpeCAhPT0gZmFsc2UpIHtcbiAgICAgIGlmIChsb2NhbE5TTWFwID09IG51bGwpIHtcbiAgICAgICAgbG9jYWxOU01hcCA9IHt9O1xuICAgICAgICBfY29weShjdXJyZW50TlNNYXAsIGN1cnJlbnROU01hcCA9IHt9KTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnROU01hcFtuc1ByZWZpeF0gPSBsb2NhbE5TTWFwW25zUHJlZml4XSA9IHZhbHVlO1xuICAgICAgYS51cmkgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nO1xuICAgICAgZG9tQnVpbGRlci5zdGFydFByZWZpeE1hcHBpbmcobnNQcmVmaXgsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgdmFyIGkgPSBlbC5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBhID0gZWxbaV07XG4gICAgdmFyIHByZWZpeCA9IGEucHJlZml4O1xuICAgIGlmIChwcmVmaXgpIHtcbiAgICAgIGlmIChwcmVmaXggPT09ICd4bWwnKSB7XG4gICAgICAgIGEudXJpID0gJ2h0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZSc7XG4gICAgICB9XG4gICAgICBpZiAocHJlZml4ICE9PSAneG1sbnMnKSB7XG4gICAgICAgIGEudXJpID0gY3VycmVudE5TTWFwW3ByZWZpeCB8fCAnJ107XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBuc3AgPSB0YWdOYW1lLmluZGV4T2YoJzonKTtcbiAgaWYgKG5zcCA+IDApIHtcbiAgICBwcmVmaXggPSBlbC5wcmVmaXggPSB0YWdOYW1lLnNsaWNlKDAsIG5zcCk7XG4gICAgbG9jYWxOYW1lID0gZWwubG9jYWxOYW1lID0gdGFnTmFtZS5zbGljZShuc3AgKyAxKTtcbiAgfSBlbHNlIHtcbiAgICBwcmVmaXggPSBudWxsO1xuICAgIGxvY2FsTmFtZSA9IGVsLmxvY2FsTmFtZSA9IHRhZ05hbWU7XG4gIH1cbiAgdmFyIG5zID0gZWwudXJpID0gY3VycmVudE5TTWFwW3ByZWZpeCB8fCAnJ107XG4gIGRvbUJ1aWxkZXIuc3RhcnRFbGVtZW50KG5zLCBsb2NhbE5hbWUsIHRhZ05hbWUsIGVsKTtcbiAgaWYgKGVsLmNsb3NlZCkge1xuICAgIGRvbUJ1aWxkZXIuZW5kRWxlbWVudChucywgbG9jYWxOYW1lLCB0YWdOYW1lKTtcbiAgICBpZiAobG9jYWxOU01hcCkge1xuICAgICAgZm9yIChwcmVmaXggaW4gbG9jYWxOU01hcCkge1xuICAgICAgICBkb21CdWlsZGVyLmVuZFByZWZpeE1hcHBpbmcocHJlZml4KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWwuY3VycmVudE5TTWFwID0gY3VycmVudE5TTWFwO1xuICAgIGVsLmxvY2FsTlNNYXAgPSBsb2NhbE5TTWFwO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZUh0bWxTcGVjaWFsQ29udGVudChzb3VyY2UsIGVsU3RhcnRFbmQsIHRhZ05hbWUsIGVudGl0eVJlcGxhY2VyLCBkb21CdWlsZGVyKSB7XG4gIGlmICgvXig/OnNjcmlwdHx0ZXh0YXJlYSkkL2kudGVzdCh0YWdOYW1lKSkge1xuICAgIHZhciBlbEVuZFN0YXJ0ID0gc291cmNlLmluZGV4T2YoJzwvJyArIHRhZ05hbWUgKyAnPicsIGVsU3RhcnRFbmQpO1xuICAgIHZhciB0ZXh0ID0gc291cmNlLnN1YnN0cmluZyhlbFN0YXJ0RW5kICsgMSwgZWxFbmRTdGFydCk7XG4gICAgaWYgKC9bJjxdLy50ZXN0KHRleHQpKSB7XG4gICAgICBpZiAoL15zY3JpcHQkL2kudGVzdCh0YWdOYW1lKSkge1xuICAgICAgICBkb21CdWlsZGVyLmNoYXJhY3RlcnModGV4dCwgMCwgdGV4dC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gZWxFbmRTdGFydDtcbiAgICAgIH1cbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyYjP1xcdys7L2csIGVudGl0eVJlcGxhY2VyKTtcbiAgICAgIGRvbUJ1aWxkZXIuY2hhcmFjdGVycyh0ZXh0LCAwLCB0ZXh0Lmxlbmd0aCk7XG4gICAgICByZXR1cm4gZWxFbmRTdGFydDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVsU3RhcnRFbmQgKyAxO1xufVxuZnVuY3Rpb24gZml4U2VsZkNsb3NlZChzb3VyY2UsIGVsU3RhcnRFbmQsIHRhZ05hbWUsIGNsb3NlTWFwKSB7XG4gIHZhciBwb3MgPSBjbG9zZU1hcFt0YWdOYW1lXTtcbiAgaWYgKHBvcyA9PSBudWxsKSB7XG4gICAgcG9zID0gc291cmNlLmxhc3RJbmRleE9mKCc8LycgKyB0YWdOYW1lICsgJz4nKTtcbiAgICBpZiAocG9zIDwgZWxTdGFydEVuZCkge1xuICAgICAgcG9zID0gc291cmNlLmxhc3RJbmRleE9mKCc8LycgKyB0YWdOYW1lKTtcbiAgICB9XG4gICAgY2xvc2VNYXBbdGFnTmFtZV0gPSBwb3M7XG4gIH1cbiAgcmV0dXJuIHBvcyA8IGVsU3RhcnRFbmQ7XG59XG5mdW5jdGlvbiBfY29weShzb3VyY2UsIHRhcmdldCkge1xuICBmb3IgKHZhciBuIGluIHNvdXJjZSkge1xuICAgIHRhcmdldFtuXSA9IHNvdXJjZVtuXTtcbiAgfVxufVxuZnVuY3Rpb24gcGFyc2VEQ0Moc291cmNlLCBzdGFydCwgZG9tQnVpbGRlciwgZXJyb3JIYW5kbGVyKSB7XG4gIHZhciBuZXh0ID0gc291cmNlLmNoYXJBdChzdGFydCArIDIpO1xuICBzd2l0Y2ggKG5leHQpIHtcbiAgICBjYXNlICctJzpcbiAgICAgIGlmIChzb3VyY2UuY2hhckF0KHN0YXJ0ICsgMykgPT09ICctJykge1xuICAgICAgICB2YXIgZW5kID0gc291cmNlLmluZGV4T2YoJy0tPicsIHN0YXJ0ICsgNCk7XG4gICAgICAgIGlmIChlbmQgPiBzdGFydCkge1xuICAgICAgICAgIGRvbUJ1aWxkZXIuY29tbWVudChzb3VyY2UsIHN0YXJ0ICsgNCwgZW5kIC0gc3RhcnQgLSA0KTtcbiAgICAgICAgICByZXR1cm4gZW5kICsgMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlcnJvckhhbmRsZXIuZXJyb3IoXCJVbmNsb3NlZCBjb21tZW50XCIpO1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoc291cmNlLnN1YnN0cihzdGFydCArIDMsIDYpID09ICdDREFUQVsnKSB7XG4gICAgICAgIHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignXV0+Jywgc3RhcnQgKyA5KTtcbiAgICAgICAgZG9tQnVpbGRlci5zdGFydENEQVRBKCk7XG4gICAgICAgIGRvbUJ1aWxkZXIuY2hhcmFjdGVycyhzb3VyY2UsIHN0YXJ0ICsgOSwgZW5kIC0gc3RhcnQgLSA5KTtcbiAgICAgICAgZG9tQnVpbGRlci5lbmRDREFUQSgpO1xuICAgICAgICByZXR1cm4gZW5kICsgMztcbiAgICAgIH1cbiAgICAgIHZhciBtYXRjaHMgPSBzcGxpdChzb3VyY2UsIHN0YXJ0KTtcbiAgICAgIHZhciBsZW4gPSBtYXRjaHMubGVuZ3RoO1xuICAgICAgaWYgKGxlbiA+IDEgJiYgLyFkb2N0eXBlL2kudGVzdChtYXRjaHNbMF1bMF0pKSB7XG4gICAgICAgIHZhciBuYW1lID0gbWF0Y2hzWzFdWzBdO1xuICAgICAgICB2YXIgcHViaWQgPSBsZW4gPiAzICYmIC9ecHVibGljJC9pLnRlc3QobWF0Y2hzWzJdWzBdKSAmJiBtYXRjaHNbM11bMF07XG4gICAgICAgIHZhciBzeXNpZCA9IGxlbiA+IDQgJiYgbWF0Y2hzWzRdWzBdO1xuICAgICAgICB2YXIgbGFzdE1hdGNoID0gbWF0Y2hzW2xlbiAtIDFdO1xuICAgICAgICBkb21CdWlsZGVyLnN0YXJ0RFREKG5hbWUsIHB1YmlkICYmIHB1YmlkLnJlcGxhY2UoL14oWydcIl0pKC4qPylcXDEkLywgJyQyJyksIHN5c2lkICYmIHN5c2lkLnJlcGxhY2UoL14oWydcIl0pKC4qPylcXDEkLywgJyQyJykpO1xuICAgICAgICBkb21CdWlsZGVyLmVuZERURCgpO1xuICAgICAgICByZXR1cm4gbGFzdE1hdGNoLmluZGV4ICsgbGFzdE1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiBwYXJzZUluc3RydWN0aW9uKHNvdXJjZSwgc3RhcnQsIGRvbUJ1aWxkZXIpIHtcbiAgdmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCc/PicsIHN0YXJ0KTtcbiAgaWYgKGVuZCkge1xuICAgIHZhciBtYXRjaCA9IHNvdXJjZS5zdWJzdHJpbmcoc3RhcnQsIGVuZCkubWF0Y2goL148XFw/KFxcUyopXFxzKihbXFxzXFxTXSo/KVxccyokLyk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICB2YXIgbGVuID0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgZG9tQnVpbGRlci5wcm9jZXNzaW5nSW5zdHJ1Y3Rpb24obWF0Y2hbMV0sIG1hdGNoWzJdKTtcbiAgICAgIHJldHVybiBlbmQgKyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIEVsZW1lbnRBdHRyaWJ1dGVzKHNvdXJjZSkge31cbkVsZW1lbnRBdHRyaWJ1dGVzLnByb3RvdHlwZSA9IHtcbiAgc2V0VGFnTmFtZTogZnVuY3Rpb24gc2V0VGFnTmFtZSh0YWdOYW1lKSB7XG4gICAgaWYgKCF0YWdOYW1lUGF0dGVybi50ZXN0KHRhZ05hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdGFnTmFtZTonICsgdGFnTmFtZSk7XG4gICAgfVxuICAgIHRoaXMudGFnTmFtZSA9IHRhZ05hbWU7XG4gIH0sXG4gIGFkZDogZnVuY3Rpb24gYWRkKHFOYW1lLCB2YWx1ZSwgb2Zmc2V0KSB7XG4gICAgaWYgKCF0YWdOYW1lUGF0dGVybi50ZXN0KHFOYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGF0dHJpYnV0ZTonICsgcU5hbWUpO1xuICAgIH1cbiAgICB0aGlzW3RoaXMubGVuZ3RoKytdID0ge1xuICAgICAgcU5hbWU6IHFOYW1lLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgb2Zmc2V0OiBvZmZzZXRcbiAgICB9O1xuICB9LFxuICBsZW5ndGg6IDAsXG4gIGdldExvY2FsTmFtZTogZnVuY3Rpb24gZ2V0TG9jYWxOYW1lKGkpIHtcbiAgICByZXR1cm4gdGhpc1tpXS5sb2NhbE5hbWU7XG4gIH0sXG4gIGdldExvY2F0b3I6IGZ1bmN0aW9uIGdldExvY2F0b3IoaSkge1xuICAgIHJldHVybiB0aGlzW2ldLmxvY2F0b3I7XG4gIH0sXG4gIGdldFFOYW1lOiBmdW5jdGlvbiBnZXRRTmFtZShpKSB7XG4gICAgcmV0dXJuIHRoaXNbaV0ucU5hbWU7XG4gIH0sXG4gIGdldFVSSTogZnVuY3Rpb24gZ2V0VVJJKGkpIHtcbiAgICByZXR1cm4gdGhpc1tpXS51cmk7XG4gIH0sXG4gIGdldFZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZShpKSB7XG4gICAgcmV0dXJuIHRoaXNbaV0udmFsdWU7XG4gIH1cbn07XG5mdW5jdGlvbiBzcGxpdChzb3VyY2UsIHN0YXJ0KSB7XG4gIHZhciBtYXRjaDtcbiAgdmFyIGJ1ZiA9IFtdO1xuICB2YXIgcmVnID0gLydbXiddKyd8XCJbXlwiXStcInxbXlxcczw+XFwvPV0rPT98KFxcLz9cXHMqPnw8KS9nO1xuICByZWcubGFzdEluZGV4ID0gc3RhcnQ7XG4gIHJlZy5leGVjKHNvdXJjZSk7XG4gIHdoaWxlIChtYXRjaCA9IHJlZy5leGVjKHNvdXJjZSkpIHtcbiAgICBidWYucHVzaChtYXRjaCk7XG4gICAgaWYgKG1hdGNoWzFdKSByZXR1cm4gYnVmO1xuICB9XG59XG5leHBvcnRzLlhNTFJlYWRlciA9IFhNTFJlYWRlcjtcblxufSx7fV19LHt9LFs1Nl0pO1xuIl0sImZpbGUiOiJ3ZWItYWRhcHRlci5qcyJ9
