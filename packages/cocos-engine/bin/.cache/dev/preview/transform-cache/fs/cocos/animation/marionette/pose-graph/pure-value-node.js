System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pure-value-node.js", ["./foundation/pose-graph-node.js"], function (_export, _context) {
  "use strict";

  var PoseGraphNode, PureValueNode, SingleOutputPVNode;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_foundationPoseGraphNodeJs) {
      PoseGraphNode = _foundationPoseGraphNodeJs.PoseGraphNode;
    }],
    execute: function () {
      /**
       * Base class of all pure value nodes in pose graph.
       *
       * Pure value nodes are nodes in pose graph that yields non-pose-object value(s).
       *
       * Sometimes, pure values nodes are also abbreviated as pv nodes.
       */
      _export("PureValueNode", PureValueNode = /*#__PURE__*/function (_PoseGraphNode) {
        _inheritsLoose(PureValueNode, _PoseGraphNode);
        function PureValueNode(outputTypes) {
          var _this;
          _this = _PoseGraphNode.call(this) || this;
          _this._outputTypes = [];
          _this._outputTypes = outputTypes;
          return _this;
        }
        var _proto = PureValueNode.prototype;
        _proto.getOutputType = function getOutputType(outputIndex) {
          return this._outputTypes[outputIndex];
        };
        _proto.link = function link(context) {};
        _createClass(PureValueNode, [{
          key: "outputCount",
          get: function get() {
            return this._outputTypes.length;
          }
        }]);
        return PureValueNode;
      }(PoseGraphNode));
      _export("SingleOutputPVNode", SingleOutputPVNode = /*#__PURE__*/function (_PureValueNode) {
        _inheritsLoose(SingleOutputPVNode, _PureValueNode);
        function SingleOutputPVNode(outputType) {
          return _PureValueNode.call(this, [outputType]) || this;
        }
        var _proto2 = SingleOutputPVNode.prototype;
        _proto2.selfEvaluate = function selfEvaluate(outputs) {
          outputs[0] = this.selfEvaluateDefaultOutput();
        };
        return SingleOutputPVNode;
      }(PureValueNode));
    }
  };
});