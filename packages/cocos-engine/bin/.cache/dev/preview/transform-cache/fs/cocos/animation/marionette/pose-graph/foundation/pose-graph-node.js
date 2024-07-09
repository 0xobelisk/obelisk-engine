System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/foundation/pose-graph-node.js", ["../../../../core/index.js"], function (_export, _context) {
  "use strict";

  var EditorExtendable, PoseGraphNode;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreIndexJs) {
      EditorExtendable = _coreIndexJs.EditorExtendable;
    }],
    execute: function () {
      /**
       * @zh
       * 姿势图中的结点类。
       * @en
       * Class of node in pose graph.
       */
      _export("PoseGraphNode", PoseGraphNode = /*#__PURE__*/function (_EditorExtendable) {
        _inheritsLoose(PoseGraphNode, _EditorExtendable);
        function PoseGraphNode() {
          return _EditorExtendable.apply(this, arguments) || this;
        }
        return PoseGraphNode;
      }(EditorExtendable));
    }
  };
});