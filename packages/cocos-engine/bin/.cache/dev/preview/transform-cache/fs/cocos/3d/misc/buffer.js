System.register("q-bundled:///fs/cocos/3d/misc/buffer.js", ["../../gfx/index.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var Format, FormatInfos, FormatType, sys, _typeMap2, _typeMap;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _getDataViewType(info) {
    var type = _typeMap[info.type] || _typeMap["default"];
    var bytes = info.size / info.count * 8;
    return "" + type + bytes;
  }

  // default params bahaves just like on an plain, compact Float32Array
  function writeBuffer(target, data, format, offset, stride) {
    if (format === void 0) {
      format = Format.R32F;
    }
    if (offset === void 0) {
      offset = 0;
    }
    if (stride === void 0) {
      stride = 0;
    }
    var info = FormatInfos[format];
    if (!stride) {
      stride = info.size;
    }
    var writer = "set" + _getDataViewType(info);
    var componentBytesLength = info.size / info.count;
    var nSeg = Math.floor(data.length / info.count);
    var isLittleEndian = sys.isLittleEndian;
    for (var iSeg = 0; iSeg < nSeg; ++iSeg) {
      var x = offset + stride * iSeg;
      for (var iComponent = 0; iComponent < info.count; ++iComponent) {
        var y = x + componentBytesLength * iComponent;
        target[writer](y, data[info.count * iSeg + iComponent], isLittleEndian);
      }
    }
  }
  function readBuffer(target, format, offset, length, stride, out) {
    if (format === void 0) {
      format = Format.R32F;
    }
    if (offset === void 0) {
      offset = 0;
    }
    if (length === void 0) {
      length = target.byteLength - offset;
    }
    if (stride === void 0) {
      stride = 0;
    }
    if (out === void 0) {
      out = [];
    }
    var info = FormatInfos[format];
    if (!stride) {
      stride = info.size;
    }
    var reader = "get" + _getDataViewType(info);
    var componentBytesLength = info.size / info.count;
    var nSeg = Math.floor(length / stride);
    var isLittleEndian = sys.isLittleEndian;
    for (var iSeg = 0; iSeg < nSeg; ++iSeg) {
      var x = offset + stride * iSeg;
      for (var iComponent = 0; iComponent < info.count; ++iComponent) {
        var y = x + componentBytesLength * iComponent;
        out[info.count * iSeg + iComponent] = target[reader](y, isLittleEndian);
      }
    }
    return out;
  }
  function mapBuffer(target, callback, format, offset, length, stride, out) {
    if (format === void 0) {
      format = Format.R32F;
    }
    if (offset === void 0) {
      offset = 0;
    }
    if (length === void 0) {
      length = target.byteLength - offset;
    }
    if (stride === void 0) {
      stride = 0;
    }
    if (!out) {
      out = new DataView(target.buffer.slice(target.byteOffset, target.byteOffset + target.byteLength));
    }
    var info = FormatInfos[format];
    if (!stride) {
      stride = info.size;
    }
    var writer = "set" + _getDataViewType(info);
    var reader = "get" + _getDataViewType(info);
    var componentBytesLength = info.size / info.count;
    var nSeg = Math.floor(length / stride);
    var isLittleEndian = sys.isLittleEndian;
    for (var iSeg = 0; iSeg < nSeg; ++iSeg) {
      var x = offset + stride * iSeg;
      for (var iComponent = 0; iComponent < info.count; ++iComponent) {
        var y = x + componentBytesLength * iComponent;
        var _cur = target[reader](y, isLittleEndian);
        // iComponent is usually more useful than y
        out[writer](y, callback(_cur, iComponent, target), isLittleEndian);
      }
    }
    return out;
  }
  _export({
    writeBuffer: writeBuffer,
    readBuffer: readBuffer,
    mapBuffer: mapBuffer
  });
  return {
    setters: [function (_gfxIndexJs) {
      Format = _gfxIndexJs.Format;
      FormatInfos = _gfxIndexJs.FormatInfos;
      FormatType = _gfxIndexJs.FormatType;
    }, function (_coreIndexJs) {
      sys = _coreIndexJs.sys;
    }],
    execute: function () {
      _typeMap = (_typeMap2 = {}, _typeMap2[FormatType.UNORM] = 'Uint', _typeMap2[FormatType.SNORM] = 'Int', _typeMap2[FormatType.UINT] = 'Uint', _typeMap2[FormatType.INT] = 'Int', _typeMap2[FormatType.UFLOAT] = 'Float', _typeMap2[FormatType.FLOAT] = 'Float', _typeMap2["default"] = 'Uint', _typeMap2);
    }
  };
});