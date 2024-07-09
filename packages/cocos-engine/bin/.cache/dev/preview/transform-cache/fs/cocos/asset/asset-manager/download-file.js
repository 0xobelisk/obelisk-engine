System.register("q-bundled:///fs/cocos/asset/asset-manager/download-file.js", [], function (_export, _context) {
  "use strict";

  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function downloadFile(url, options, onProgress, onComplete) {
    var xhr = new XMLHttpRequest();
    var errInfo = "download failed: " + url + ", status: ";
    xhr.open('GET', url, true);
    if (options.xhrResponseType !== undefined) {
      xhr.responseType = options.xhrResponseType;
    }
    if (options.xhrWithCredentials !== undefined) {
      xhr.withCredentials = options.xhrWithCredentials;
    }
    if (options.xhrMimeType !== undefined && xhr.overrideMimeType) {
      xhr.overrideMimeType(options.xhrMimeType);
    }
    if (options.xhrTimeout !== undefined) {
      xhr.timeout = options.xhrTimeout;
    }
    if (options.xhrHeader) {
      for (var header in options.xhrHeader) {
        xhr.setRequestHeader(header, options.xhrHeader[header]);
      }
    }
    xhr.onload = function () {
      if (xhr.status === 200 || xhr.status === 0) {
        if (onComplete) {
          onComplete(null, xhr.response);
        }
      } else if (onComplete) {
        onComplete(new Error("" + errInfo + xhr.status + "(no response)"));
      }
    };
    if (onProgress) {
      xhr.onprogress = function (e) {
        if (e.lengthComputable) {
          onProgress(e.loaded, e.total);
        }
      };
    }
    xhr.onerror = function () {
      if (onComplete) {
        onComplete(new Error("" + errInfo + xhr.status + "(error)"));
      }
    };
    xhr.ontimeout = function () {
      if (onComplete) {
        onComplete(new Error("" + errInfo + xhr.status + "(time out)"));
      }
    };
    xhr.onabort = function () {
      if (onComplete) {
        onComplete(new Error("" + errInfo + xhr.status + "(abort)"));
      }
    };
    xhr.send(null);
    return xhr;
  }
  _export("default", downloadFile);
  return {
    setters: [],
    execute: function () {}
  };
});