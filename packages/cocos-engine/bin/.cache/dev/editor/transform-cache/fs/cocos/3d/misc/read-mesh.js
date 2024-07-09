System.register("q-bundled:///fs/cocos/3d/misc/read-mesh.js", ["../../gfx/index.js", "./buffer.js"], function (_export, _context) {
  "use strict";

  var AttributeName, Format, FormatInfos, readBuffer, _keyMap;
  function readMesh(mesh, iPrimitive = 0) {
    const out = {
      positions: []
    };
    const dataView = new DataView(mesh.data.buffer, mesh.data.byteOffset, mesh.data.byteLength);
    const struct = mesh.struct;
    const primitive = struct.primitives[iPrimitive];
    for (const idx of primitive.vertexBundelIndices) {
      const bundle = struct.vertexBundles[idx];
      let offset = bundle.view.offset;
      const {
        length,
        stride
      } = bundle.view;
      for (const attr of bundle.attributes) {
        const name = _keyMap[attr.name];
        if (name) {
          out[name] = (out[name] || []).concat(readBuffer(dataView, attr.format, offset, length, stride));
        }
        offset += FormatInfos[attr.format].size;
      }
    }
    const view = primitive.indexView;
    out.indices = readBuffer(dataView, Format[`R${view.stride * 8}UI`], view.offset, view.length);
    return out;
  }
  _export("readMesh", readMesh);
  return {
    setters: [function (_gfxIndexJs) {
      AttributeName = _gfxIndexJs.AttributeName;
      Format = _gfxIndexJs.Format;
      FormatInfos = _gfxIndexJs.FormatInfos;
    }, function (_bufferJs) {
      readBuffer = _bufferJs.readBuffer;
    }],
    execute: function () {
      (function (_keyMap) {
        _keyMap[_keyMap["positions"] = AttributeName.ATTR_POSITION] = "positions";
        _keyMap[_keyMap["normals"] = AttributeName.ATTR_NORMAL] = "normals";
        _keyMap[_keyMap["uvs"] = AttributeName.ATTR_TEX_COORD] = "uvs";
        _keyMap[_keyMap["colors"] = AttributeName.ATTR_COLOR] = "colors";
      })(_keyMap || (_keyMap = {}));
    }
  };
});