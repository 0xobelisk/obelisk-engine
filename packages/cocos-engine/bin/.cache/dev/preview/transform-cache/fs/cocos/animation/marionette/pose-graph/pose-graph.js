System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-graph.js", ["../../../core/index.js", "../../../core/data/decorators/index.js", "../../define.js", "./foundation/node-shell.js", "./foundation/errors.js", "./graph-output-node.js"], function (_export, _context) {
  "use strict";

  var EditorExtendable, assertIsTrue, error, js, ccclass, serializable, CLASS_NAME_PREFIX_ANIM, PoseGraphNodeShell, AddNonFreestandingNodeError, PoseGraphOutputNode, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, PoseGraph;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      EditorExtendable = _coreIndexJs.EditorExtendable;
      assertIsTrue = _coreIndexJs.assertIsTrue;
      error = _coreIndexJs.error;
      js = _coreIndexJs.js;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_foundationNodeShellJs) {
      PoseGraphNodeShell = _foundationNodeShellJs.PoseGraphNodeShell;
    }, function (_foundationErrorsJs) {
      AddNonFreestandingNodeError = _foundationErrorsJs.AddNonFreestandingNodeError;
    }, function (_graphOutputNodeJs) {
      PoseGraphOutputNode = _graphOutputNodeJs.PoseGraphOutputNode;
    }],
    execute: function () {
      /**
       * @zh
       * 姿势图。
       * @en
       * Pose graph.
       */
      _export("PoseGraph", PoseGraph = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseGraph"), _dec(_class = (_class2 = /*#__PURE__*/function (_EditorExtendable) {
        _inheritsLoose(PoseGraph, _EditorExtendable);
        function PoseGraph() {
          var _this;
          _this = _EditorExtendable.call(this) || this;
          _this._outputNode = _initializer && _initializer();
          _this._nodes = _initializer2 && _initializer2();
          _this._shells = _initializer3 && _initializer3();
          _this._shellMap = _initializer4 && _initializer4();
          _this.addNode(_this._outputNode);
          return _this;
        }

        /**
         * @zh 姿势图的输出结点。
         * @en The pose graph's output node.
         */
        var _proto = PoseGraph.prototype;
        /**
         * // TODO: HACK
         * @internal
         */
        _proto.__callOnAfterDeserializeRecursive = function __callOnAfterDeserializeRecursive() {
          assertIsTrue(this._nodes.length === this._shells.length);
          for (var iNode = 0; iNode < this._nodes.length; ++iNode) {
            var _node$__callOnAfterDe;
            var node = this._nodes[iNode];
            var shell = this._shells[iNode];
            this._shellMap.set(node, shell);
            (_node$__callOnAfterDe = node.__callOnAfterDeserializeRecursive) === null || _node$__callOnAfterDe === void 0 ? void 0 : _node$__callOnAfterDe.call(node);
          }
        }

        /**
         * @zh 获取所有结点。
         * @en Gets all nodes.
         * @returns @zh 用于遍历所有结点的迭代器。 @en The iterator to iterate all nodes.
         */;
        _proto.nodes = function nodes() {
          return this._nodes.values();
        }

        /**
         * @zh 添加一个结点到图中。
         * @en Adds a node into graph.
         * @param node @zh 要添加的结点。 @en Node to add.
         * @returns `node`
         *
         * @note
         * @zh 注意，要添加的结点必须是“独立”的，也就是说它不能已经在任何图中。否则会抛出异常。
         * @en Note, the node to add should be "freestanding",
         * means it should not been already in any graph. Otherwise, an exception would be thrown.
         */;
        _proto.addNode = function addNode(node) {
          if (this._shellMap.has(node)) {
            throw new AddNonFreestandingNodeError(node);
          }
          var shell = new PoseGraphNodeShell();
          this._shells.push(shell);
          this._nodes.push(node);
          this._shellMap.set(node, shell);
          return node;
        }

        /**
         * @zh 将指定的结点从图中移除。
         * @en Removes specified node from the graph.
         * @param removal @zh 要移除的结点。 @en The node to remove.
         *
         * @note
         * @zh 如果要移除的结点不在图中或该结点是图的输出结点，则此方法不会生效。
         * @en If the removal node is not within graph or is the output node of graph,
         * this method takes no effect.
         */;
        _proto.removeNode = function removeNode(removal) {
          if (removal === this._outputNode) {
            error("Can not remove the output node.");
            return;
          }
          var nodeIndex = this._nodes.indexOf(removal);
          if (nodeIndex < 0) {
            return;
          }

          // This should be true.
          assertIsTrue(this._shellMap.has(removal));

          // Disconnect from others.
          for (var _iterator = _createForOfIteratorHelperLoose(this._shells), _step; !(_step = _iterator()).done;) {
            var shell = _step.value;
            shell.deleteBindingTo(removal);
          }

          // Remove from graph.
          js.array.removeAt(this._shells, nodeIndex);
          js.array.removeAt(this._nodes, nodeIndex);
          this._shellMap["delete"](removal);
        }

        /**
         * @zh
         * 获取指定结点在姿势图中的外壳。
         * @en
         * Gets the specified node's shell in pose graph.
         * @internal
         */;
        _proto.getShell = function getShell(node) {
          return this._shellMap.get(node);
        };
        _createClass(PoseGraph, [{
          key: "outputNode",
          get: function get() {
            return this._outputNode;
          }
        }]);
        return PoseGraph;
      }(EditorExtendable), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_outputNode", [serializable], function () {
        return new PoseGraphOutputNode();
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_nodes", [serializable], function () {
        return [];
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_shells", [serializable], function () {
        return [];
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_shellMap", [serializable], function () {
        return new Map();
      })), _class2)) || _class));
    }
  };
});