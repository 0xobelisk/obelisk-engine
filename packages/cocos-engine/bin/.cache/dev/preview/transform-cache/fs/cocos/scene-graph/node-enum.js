System.register("q-bundled:///fs/cocos/scene-graph/node-enum.js", ["../core/global-exports.js", "../core/value-types/index.js"], function (_export, _context) {
  "use strict";

  var legacyCC, Enum, NodeSpace, TransformBit, MobilityMode;
  _export({
    NodeSpace: void 0,
    TransformBit: void 0
  });
  return {
    setters: [function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_coreValueTypesIndexJs) {
      Enum = _coreValueTypesIndexJs.Enum;
    }],
    execute: function () {
      (function (NodeSpace) {
        NodeSpace[NodeSpace["LOCAL"] = 0] = "LOCAL";
        NodeSpace[NodeSpace["WORLD"] = 1] = "WORLD";
      })(NodeSpace || _export("NodeSpace", NodeSpace = {}));
      (function (TransformBit) {
        TransformBit[TransformBit["NONE"] = 0] = "NONE";
        TransformBit[TransformBit["POSITION"] = 1] = "POSITION";
        TransformBit[TransformBit["ROTATION"] = 2] = "ROTATION";
        TransformBit[TransformBit["SCALE"] = 4] = "SCALE";
        TransformBit[TransformBit["RS"] = TransformBit.ROTATION | TransformBit.SCALE] = "RS";
        TransformBit[TransformBit["TRS"] = TransformBit.POSITION | TransformBit.ROTATION | TransformBit.SCALE] = "TRS";
        TransformBit[TransformBit["TRS_MASK"] = ~TransformBit.TRS] = "TRS_MASK";
      })(TransformBit || _export("TransformBit", TransformBit = {}));
      legacyCC.internal.TransformBit = TransformBit;

      /**
       * @en Node's mobility
       * @zh 节点的移动性
       */
      _export("MobilityMode", MobilityMode = Enum({
        /**
         * @en Static node
         * @zh 静态节点
         */
        Static: 0,
        /**
         * @en Stationary node
         * @zh 固定节点
         */
        Stationary: 1,
        /**
         * @en Movable node
         * @zh 可移动节点
         */
        Movable: 2
      }));
    }
  };
});