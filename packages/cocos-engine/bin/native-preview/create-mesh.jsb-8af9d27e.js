System.register(['./find-7a03d1cc.js', './buffer-9511d9f4.js', './device-90bc7390.js', './index-ce98320e.js'], (function (exports) {
    'use strict';
    var readBuffer, AttributeName, FormatInfos, Format, legacyCC;
    return {
        setters: [function () {}, function (module) {
            readBuffer = module.r;
        }, function (module) {
            AttributeName = module.aN;
            FormatInfos = module.aO;
            Format = module.b;
        }, function (module) {
            legacyCC = module.l;
        }],
        execute: (function () {

            exports('r', readMesh);

            var _keyMap;
            (function (_keyMap) {
              _keyMap[_keyMap["positions"] = AttributeName.ATTR_POSITION] = "positions";
              _keyMap[_keyMap["normals"] = AttributeName.ATTR_NORMAL] = "normals";
              _keyMap[_keyMap["uvs"] = AttributeName.ATTR_TEX_COORD] = "uvs";
              _keyMap[_keyMap["colors"] = AttributeName.ATTR_COLOR] = "colors";
            })(_keyMap || (_keyMap = {}));
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

            const MeshUtils = exports('M', jsb.MeshUtils);
            const createMesh = exports('c', MeshUtils.createMesh);
            MeshUtils.createDynamicMesh;
            legacyCC.MeshUtils = jsb.MeshUtils;

        })
    };
}));
