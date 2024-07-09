System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/ik/two-bone-ik-debugger.js", ["../../../../../3d/index.js", "../../../../../3d/misc/index.js", "../../../../../asset/assets/index.js", "../../../../../core/index.js", "../../../../../core/global-exports.js", "../../../../../gfx/index.js", "../../../../../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var MeshRenderer, createMesh, Material, Color, legacyCC, PrimitiveMode, Node, TwoBoneIKDebugger, debuggerMap;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function debugTwoBoneIKDraw(key, a, b, c) {
    if (typeof key !== 'object' || !key) {
      return;
    }
    var ikDebugger = debuggerMap.get(key);
    if (!ikDebugger) {
      ikDebugger = new TwoBoneIKDebugger();
      debuggerMap.set(key, ikDebugger);
    }
    ikDebugger.draw(a, b, c);
  }
  _export("debugTwoBoneIKDraw", debugTwoBoneIKDraw);
  return {
    setters: [function (_dIndexJs) {
      MeshRenderer = _dIndexJs.MeshRenderer;
    }, function (_dMiscIndexJs) {
      createMesh = _dMiscIndexJs.createMesh;
    }, function (_assetAssetsIndexJs) {
      Material = _assetAssetsIndexJs.Material;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_gfxIndexJs) {
      PrimitiveMode = _gfxIndexJs.PrimitiveMode;
    }, function (_sceneGraphIndexJs) {
      Node = _sceneGraphIndexJs.Node;
    }],
    execute: function () {
      _export("TwoBoneIKDebugger", TwoBoneIKDebugger = /*#__PURE__*/function () {
        function TwoBoneIKDebugger() {
          this._node = void 0;
          this._meshRenderer = void 0;
          var node = new Node();
          legacyCC.director.getScene().addChild(node);
          var meshRenderer = node.addComponent(MeshRenderer);
          meshRenderer.material = function () {
            var material = new Material();
            material.reset({
              effectName: 'builtin-unlit',
              states: {
                primitive: PrimitiveMode.LINE_LIST
              },
              defines: {
                USE_VERTEX_COLOR: true
              }
            });
            return material;
          }();
          this._node = node;
          this._meshRenderer = meshRenderer;
        }
        var _proto = TwoBoneIKDebugger.prototype;
        _proto.draw = function draw(a, b, c) {
          var color1 = Color.RED;
          var color2 = Color.BLUE;
          var positions = [a.x, a.y, a.z, b.x, b.y, b.z, b.x, b.y, b.z, c.x, c.y, c.z];
          var colors = [color1.x, color1.y, color1.z, color1.w, color1.x, color1.y, color1.z, color1.w, color2.x, color2.y, color2.z, color2.w, color2.x, color2.y, color2.z, color2.w];
          var mesh = createMesh({
            positions: positions,
            colors: colors,
            primitiveMode: PrimitiveMode.LINE_LIST
          });
          this._meshRenderer.mesh = mesh;
        };
        return TwoBoneIKDebugger;
      }()); // eslint-disable-next-line @typescript-eslint/ban-types
      debuggerMap = new WeakMap();
    }
  };
});