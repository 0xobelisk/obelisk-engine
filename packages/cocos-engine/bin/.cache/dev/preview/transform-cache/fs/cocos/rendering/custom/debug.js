System.register("q-bundled:///fs/cocos/rendering/custom/debug.js", ["../../core/index.js", "./graph.js", "./render-graph.js", "./types.js"], function (_export, _context) {
  "use strict";

  var assert, DefaultVisitor, getRenderGraphValueName, getQueueHintName, enableDebug, oss, space, PrePrintVisitor, PostPrintVisitor, RenderGraphPrintVisitor;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /*
                                                                                                                                                                                       Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                      
                                                                                                                                                                                       https://www.cocos.com/
                                                                                                                                                                                      
                                                                                                                                                                                       Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                       of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                       in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                       use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                       of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                       subject to the following conditions:
                                                                                                                                                                                      
                                                                                                                                                                                       The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                       all copies or substantial portions of the Software.
                                                                                                                                                                                      
                                                                                                                                                                                       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                       THE SOFTWARE.
                                                                                                                                                                                      */ /* eslint-disable max-len */
  return {
    setters: [function (_coreIndexJs) {
      assert = _coreIndexJs.assert;
    }, function (_graphJs) {
      DefaultVisitor = _graphJs.DefaultVisitor;
    }, function (_renderGraphJs) {
      getRenderGraphValueName = _renderGraphJs.getRenderGraphValueName;
    }, function (_typesJs) {
      getQueueHintName = _typesJs.getQueueHintName;
    }],
    execute: function () {
      _export("enableDebug", enableDebug = true);
      oss = '';
      space = '';
      PrePrintVisitor = /*#__PURE__*/function () {
        function PrePrintVisitor(g) {
          this.g = void 0;
          this.g = g;
        }
        var _proto = PrePrintVisitor.prototype;
        _proto.clear = function clear(value) {
          // do nothing
        };
        _proto.viewport = function viewport(value) {
          // do nothing
        };
        _proto.rasterPass = function rasterPass(value) {
          oss += space + "width = " + value.width + "\n";
          oss += space + "height = " + value.height + "\n";
          for (var _iterator = _createForOfIteratorHelperLoose(value.rasterViews), _step; !(_step = _iterator()).done;) {
            var rasterView = _step.value;
            oss += space + "\"" + rasterView[0] + "\": RasterView\n";
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(value.computeViews), _step2; !(_step2 = _iterator2()).done;) {
            var computeView = _step2.value;
            oss += space + "\"" + computeView[0] + "\": ComputeView[]\n";
          }
        };
        _proto.rasterSubpass = function rasterSubpass(value) {};
        _proto.computeSubpass = function computeSubpass(value) {};
        _proto.compute = function compute(value) {
          for (var _iterator3 = _createForOfIteratorHelperLoose(value.computeViews), _step3; !(_step3 = _iterator3()).done;) {
            var computeView = _step3.value;
            oss += space + "\"" + computeView[0] + "\": ComputeView[]\n";
          }
        };
        _proto.copy = function copy(value) {
          if (value.copyPairs.length === 1) {
            var pair = value.copyPairs[0];
            oss += space + "source = \"" + pair.source + "\"\n";
            oss += space + "target = \"" + pair.target + "\"\n";
          } else {
            var i = 0;
            oss += space + "sources = [";
            for (var _iterator4 = _createForOfIteratorHelperLoose(value.copyPairs), _step4; !(_step4 = _iterator4()).done;) {
              var _pair = _step4.value;
              if (i++) {
                oss += ', ';
              }
              oss += "\"" + _pair.source + "\"";
            }
            oss += ']\n';
            oss += space + "targets = [";
            for (var _iterator5 = _createForOfIteratorHelperLoose(value.copyPairs), _step5; !(_step5 = _iterator5()).done;) {
              var _pair2 = _step5.value;
              if (i++) {
                oss += ', ';
              }
              oss += "\"" + _pair2.target + "\"";
            }
            oss += ']\n';
          }
        };
        _proto.move = function move(value) {
          if (value.movePairs.length === 1) {
            var pair = value.movePairs[0];
            oss += space + "source = \"" + pair.source + "\"\n";
            oss += space + "target = \"" + pair.target + "\"\n";
          } else {
            var i = 0;
            oss += space + "sources = [";
            for (var _iterator6 = _createForOfIteratorHelperLoose(value.movePairs), _step6; !(_step6 = _iterator6()).done;) {
              var _pair3 = _step6.value;
              if (i++) {
                oss += ', ';
              }
              oss += "\"" + _pair3.source + "\"";
            }
            oss += ']\n';
            oss += space + "targets = [";
            for (var _iterator7 = _createForOfIteratorHelperLoose(value.movePairs), _step7; !(_step7 = _iterator7()).done;) {
              var _pair4 = _step7.value;
              if (i++) {
                oss += ', ';
              }
              oss += "\"" + _pair4.target + "\"";
            }
            oss += ']\n';
          }
        };
        _proto.raytrace = function raytrace(value) {
          for (var _iterator8 = _createForOfIteratorHelperLoose(value.computeViews), _step8; !(_step8 = _iterator8()).done;) {
            var computeView = _step8.value;
            oss += space + "\"" + computeView[0] + "\": ComputeView[]\n";
          }
        };
        _proto.queue = function queue(value) {
          oss += space + "hint = " + getQueueHintName(value.hint) + "\n";
        };
        _proto.scene = function scene(value) {
          oss += space + "scenes = [";
          var i = 0;
          for (var _iterator9 = _createForOfIteratorHelperLoose(value.scenes), _step9; !(_step9 = _iterator9()).done;) {
            var scene = _step9.value;
            if (i++) {
              oss += ', ';
            }
            oss += "\"" + scene + "\"";
          }
          oss += ']\n';
        };
        _proto.blit = function blit(value) {};
        _proto.dispatch = function dispatch(value) {
          var _value$material;
          oss += space + "material = \"" + ((_value$material = value.material) === null || _value$material === void 0 ? void 0 : _value$material.name) + "\"\n";
          oss += space + "passID = \"" + value.passID + "\"\n";
          oss += space + "groupX = " + value.threadGroupCountX + "\n";
          oss += space + "groupY = " + value.threadGroupCountY + "\n";
          oss += space + "groupZ = " + value.threadGroupCountZ + "\n";
        };
        return PrePrintVisitor;
      }();
      PostPrintVisitor = /*#__PURE__*/function () {
        function PostPrintVisitor(g) {
          this.g = void 0;
          this.g = g;
        }
        var _proto2 = PostPrintVisitor.prototype;
        _proto2.clear = function clear(value) {
          // do nothing
        };
        _proto2.viewport = function viewport(value) {
          // do nothing
        };
        _proto2.rasterPass = function rasterPass(value) {
          // post raster pass
        };
        _proto2.rasterSubpass = function rasterSubpass(value) {};
        _proto2.computeSubpass = function computeSubpass(value) {};
        _proto2.compute = function compute(value) {};
        _proto2.copy = function copy(value) {};
        _proto2.move = function move(value) {};
        _proto2.raytrace = function raytrace(value) {};
        _proto2.queue = function queue(value) {
          // collect scene results
        };
        _proto2.scene = function scene(value) {
          // scene command list finished
        };
        _proto2.blit = function blit(value) {};
        _proto2.dispatch = function dispatch(value) {};
        return PostPrintVisitor;
      }();
      _export("RenderGraphPrintVisitor", RenderGraphPrintVisitor = /*#__PURE__*/function (_DefaultVisitor) {
        _inheritsLoose(RenderGraphPrintVisitor, _DefaultVisitor);
        function RenderGraphPrintVisitor(g) {
          var _this;
          _this = _DefaultVisitor.call(this) || this;
          _this.preVertexVisitor = void 0;
          _this.postVertexVisitor = void 0;
          _this.preVertexVisitor = new PrePrintVisitor(g);
          _this.postVertexVisitor = new PostPrintVisitor(g);
          return _this;
        }
        var _proto3 = RenderGraphPrintVisitor.prototype;
        _proto3.initializeVertex = function initializeVertex(v, gv) {
          // initialization
        };
        _proto3.startVertex = function startVertex(v, gv) {
          var g = gv.g;
          // passes begin
          // assert(g.holds(RenderGraphValue.RasterPass, v)
          //     || g.holds(RenderGraphValue.Compute, v)
          //     || g.holds(RenderGraphValue.Copy, v)
          //     || g.holds(RenderGraphValue.Move, v)
          //     || g.holds(RenderGraphValue.Raytrace, v));
        };
        _proto3.discoverVertex = function discoverVertex(v, gv) {
          var g = gv.g;
          oss += space + "\"" + g.getName(v) + "\": " + getRenderGraphValueName(g.id(v)) + " {\n";
          space += '    ';
          g.visitVertex(this.preVertexVisitor, v);
        };
        _proto3.backEdge = function backEdge(e, gv) {
          assert(false);
        };
        _proto3.forwardOrCrossEdge = function forwardOrCrossEdge(e, gv) {
          assert(false);
        };
        _proto3.finishEdge = function finishEdge(e, gv) {
          var g = gv.g;
        };
        _proto3.finishVertex = function finishVertex(v, gv) {
          var g = gv.g;
          g.visitVertex(this.postVertexVisitor, v);
          space = space.substring(0, space.length - 4);
          oss += space + "}\n";
        };
        _proto3.print = function print() {
          return oss;
        };
        return RenderGraphPrintVisitor;
      }(DefaultVisitor));
    }
  };
});