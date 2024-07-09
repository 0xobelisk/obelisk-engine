System.register("q-bundled:///fs/cocos/rendering/custom/graph.js", [], function (_export, _context) {
  "use strict";

  var _Symbol$iterator, _Symbol$iterator2, _Symbol$iterator3, _Symbol$iterator4, _Symbol$iterator5, _Symbol$iterator6, directional, parallel, traversal, ED, EPD, OutE, OutEP, OutEI, OutEPI, InEI, InEPI, AdjI, AdjPI, NoTermination, GraphColor, VertexInfo, DefaultVisitor, ReferenceGraphView;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  //--------------------------------------------------------------------------
  // Help Functions
  //--------------------------------------------------------------------------
  function reindexEdgeList(el, u) {
    for (var _iterator = _createForOfIteratorHelperLoose(el), _step; !(_step = _iterator()).done;) {
      var _e = _step.value;
      if (_e.target > u) {
        --_e.target;
      }
    }
  }
  function removeAllEdgesFromList(edges, el, v) {
    var sz = el.length;
    for (var i = 0; i !== sz; ++i) {
      var oe = el[i];
      if (oe.target === v) {
        // NOTE: Wihtout this skip, this loop will double-delete
        // properties of loop edges. This solution is based on the
        // observation that the incidence edges of a vertex with a loop
        // are adjacent in the out edge list. This *may* actually hold
        // for multisets also.
        var skip = i + 1 !== sz && oe.edge === el[i + 1].edge;
        edges["delete"](oe.edge);
        if (skip) {
          ++i;
        }
      }
    }
  }
  function getPath(g, v) {
    if (v === g.nullVertex()) {
      return '';
    }
    var paths = [];
    for (; v !== g.nullVertex(); v = g.getParent(v)) {
      paths.push(g.vertexName(v));
    }
    var path = '';
    for (var i = paths.length; i-- > 0;) {
      path += '/';
      path += paths[i];
    }
    return path;
  }
  function findRelative(g, v, path) {
    var pseudo = g.nullVertex();
    var names = path.split('/');
    if (names.length === 0) {
      // empty string
      return v;
    }
    var curr = v;
    var start = 0;
    if (names[0] === '') {
      // absolute path
      // reset v to pseudo root
      curr = pseudo;
      // skip pseudo root
      ++start;
    }
    // locating begins
    for (var i = start; i !== names.length; ++i) {
      var _name = names[i];
      if (_name === '') {
        // empty name, do nothing
        continue;
      }
      if (_name === '.') {
        // current node, do nothing
        continue;
      }
      if (_name === '..') {
        // parent node
        if (curr === pseudo) {
          // current node is pseudo already, return not found
          return pseudo;
        }
        curr = g.getParent(curr);
        continue;
      }
      curr = g.locateChild(curr, _name);
      if (curr === pseudo) {
        // child not found
        return pseudo;
      }
    }
    return curr;
  }

  //=======================================================================
  // DFS
  // Based on boost/graph/depth_first_search.hpp
  //=======================================================================

  //=======================================================================
  // Copyright 1997, 1998, 1999, 2000 University of Notre Dame.
  // Copyright 2003 Bruce Barr
  // Authors: Andrew Lumsdaine, Lie-Quan Lee, Jeremy G. Siek
  //
  // Distributed under the Boost Software License, Version 1.0. (See
  // accompanying file LICENSE_1_0.txt or copy at
  // http://www.boost.org/LICENSE_1_0.txt)
  //=======================================================================

  function getDefaultStartingVertex(g) {
    var iter = g.vertices();
    var v = iter.next();
    if (v.done) {
      return g.nullVertex();
    } else {
      return v.value;
    }
  }
  function depthFirstVisitImpl(g, u, visitor, color, func) {
    var srcE = null;
    var ei = null;
    var stack = new Array();
    color.put(u, GraphColor.GRAY);
    visitor.discoverVertex(u, g);
    ei = g.outEdges(u);
    if (func.terminate(u, g)) {
      // If this vertex terminates the search, we push empty range
      stack.push(new VertexInfo(u, null, null));
    } else {
      stack.push(new VertexInfo(u, null, ei));
    }
    while (stack.length) {
      var back = stack.pop();
      u = back.v;
      srcE = back.e;
      ei = back.iter;
      // finish_edge has to be called here, not after the
      // loop. Think of the pop as the return from a recursive call.
      if (srcE !== null) {
        visitor.finishEdge(srcE, g);
      }
      if (ei) {
        // has out edges
        for (var ev = ei.next(); !ev.done; ev = ei.next()) {
          var _e2 = ev.value;
          var _v = _e2.target;
          visitor.examineEdge(_e2, g);
          var vColor = color.get(_v);
          if (vColor === GraphColor.WHITE) {
            visitor.treeEdge(_e2, g);
            srcE = _e2;
            stack.push(new VertexInfo(u, srcE, ei));
            u = _v;
            color.put(u, GraphColor.GRAY);
            visitor.discoverVertex(u, g);
            ei = g.outEdges(u);
            if (func.terminate(u, g)) {
              break;
            }
          } else {
            if (vColor === GraphColor.GRAY) {
              visitor.backEdge(_e2, g);
            } else {
              visitor.forwardOrCrossEdge(_e2, g);
            }
            visitor.finishEdge(_e2, g);
          }
        }
      }
      color.put(u, GraphColor.BLACK);
      visitor.finishVertex(u, g);
    }
  }
  function depthFirstSearch(g, visitor, color, startVertex) {
    if (startVertex === void 0) {
      startVertex = null;
    }
    // get start vertex
    startVertex = startVertex || getDefaultStartingVertex(g);
    // graph is empty, do nothing
    if (startVertex === null || g.numVertices() === 0) {
      return;
    }
    // initialize vertex and color map
    for (var _iterator2 = _createForOfIteratorHelperLoose(g.vertices()), _step2; !(_step2 = _iterator2()).done;) {
      var _u = _step2.value;
      color.put(_u, GraphColor.WHITE);
      visitor.initializeVertex(_u, g);
    }
    // start DFS
    var terminator = new NoTermination();
    // try starting from startVertex
    if (startVertex !== getDefaultStartingVertex(g)) {
      visitor.startVertex(startVertex, g);
      depthFirstVisitImpl(g, startVertex, visitor, color, terminator);
    }
    // try starting from each vertex
    for (var _iterator3 = _createForOfIteratorHelperLoose(g.vertices()), _step3; !(_step3 = _iterator3()).done;) {
      var _u2 = _step3.value;
      // if vertex is not visited, start DFS
      if (color.get(_u2) === GraphColor.WHITE) {
        visitor.startVertex(_u2, g);
        depthFirstVisitImpl(g, _u2, visitor, color, terminator);
      }
    }
  }
  function depthFirstVisit(g, u, visitor, color, func) {
    if (func === void 0) {
      func = new NoTermination();
    }
    visitor.startVertex(u, g);
    depthFirstVisitImpl(g, u, visitor, color, func);
  }
  _export({
    reindexEdgeList: reindexEdgeList,
    removeAllEdgesFromList: removeAllEdgesFromList,
    getPath: getPath,
    findRelative: findRelative,
    depthFirstSearch: depthFirstSearch,
    depthFirstVisit: depthFirstVisit,
    GraphColor: void 0
  });
  return {
    setters: [],
    execute: function () {
      /****************************************************************************
       Copyright (c) 2021-2023 Xiamen Yaji Software Co., Ltd.
      
       http://www.cocos.com
      
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
      ****************************************************************************/
      _export("directional", directional = {
        undirected: 0,
        directed: 1,
        bidirectional: 2
      });
      _export("parallel", parallel = {
        disallow: 0,
        allow: 1
      });
      _export("traversal", traversal = {
        none: 0,
        incidence: 1,
        bidirectional: 2,
        adjacency: 4,
        vertex_list: 8,
        edge_list: 16
      }); //--------------------------------------------------------------------------
      // Vertex
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // Vertex Descriptor
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // Edge
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // Edge Descriptor
      //--------------------------------------------------------------------------
      _export("ED", ED = /*#__PURE__*/function () {
        function ED(source, target) {
          this.source = void 0;
          this.target = void 0;
          this.source = source;
          this.target = target;
        }
        var _proto = ED.prototype;
        _proto.equals = function equals(rhs) {
          return this.source === rhs.source && this.target === rhs.target;
        };
        return ED;
      }()); // Edge Descriptor with Property
      _export("EPD", EPD = /*#__PURE__*/function () {
        function EPD(source, target, edge) {
          this.source = void 0;
          this.target = void 0;
          this.edge = void 0;
          this.source = source;
          this.target = target;
          this.edge = edge;
        }
        var _proto2 = EPD.prototype;
        _proto2.equals = function equals(rhs) {
          return this.edge === rhs.edge;
        };
        return EPD;
      }()); // Edge Descriptor
      //--------------------------------------------------------------------------
      // OutEdge
      //--------------------------------------------------------------------------
      // OutEdge
      _export("OutE", OutE = /*#__PURE__*/function () {
        function OutE(target) {
          this.target = void 0;
          this.target = target;
        }
        var _proto3 = OutE.prototype;
        _proto3.equals = function equals(rhs) {
          return this.target === rhs.target;
        };
        return OutE;
      }()); // OutEdge(Property)
      _export("OutEP", OutEP = /*#__PURE__*/function () {
        function OutEP(target, edge) {
          this.target = void 0;
          this.edge = void 0;
          this.target = target;
          this.edge = edge;
        }
        var _proto4 = OutEP.prototype;
        _proto4.equals = function equals(rhs) {
          return this.target === rhs.target;
        };
        _proto4.getProperty = function getProperty() {
          return this.edge.getProperty();
        };
        return OutEP;
      }()); //--------------------------------------------------------------------------
      // OutEdge Iterator
      //--------------------------------------------------------------------------
      _Symbol$iterator = Symbol.iterator;
      _export("OutEI", OutEI = /*#__PURE__*/function () {
        function OutEI(iterator, source) {
          this.iterator = void 0;
          this.source = void 0;
          this.iterator = iterator;
          this.source = source;
        }
        var _proto5 = OutEI.prototype;
        _proto5[_Symbol$iterator] = function () {
          return this;
        };
        _proto5.next = function next() {
          var res = this.iterator.next();
          if (res.done) {
            return {
              value: undefined,
              done: true
            };
          } else {
            return {
              value: new ED(this.source, res.value.target),
              done: false
            };
          }
        };
        return OutEI;
      }()); // OutEdge(Property) Iterator
      _Symbol$iterator2 = Symbol.iterator;
      _export("OutEPI", OutEPI = /*#__PURE__*/function () {
        function OutEPI(iterator, source) {
          this.iterator = void 0;
          this.source = void 0;
          this.iterator = iterator;
          this.source = source;
        }
        var _proto6 = OutEPI.prototype;
        _proto6[_Symbol$iterator2] = function () {
          return this;
        };
        _proto6.next = function next() {
          var res = this.iterator.next();
          if (res.done) {
            return {
              value: undefined,
              done: true
            };
          } else {
            return {
              value: new EPD(this.source, res.value.target, res.value.edge),
              done: false
            };
          }
        };
        return OutEPI;
      }()); // OutEdge Iterator
      _Symbol$iterator3 = Symbol.iterator;
      //--------------------------------------------------------------------------
      // InEdge Iterator
      //--------------------------------------------------------------------------
      // InEdge Iterator
      _export("InEI", InEI = /*#__PURE__*/function () {
        function InEI(iterator, source) {
          this.iterator = void 0;
          this.source = void 0;
          this.iterator = iterator;
          this.source = source;
        }
        var _proto7 = InEI.prototype;
        _proto7[_Symbol$iterator3] = function () {
          return this;
        };
        _proto7.next = function next() {
          var res = this.iterator.next();
          if (res.done) {
            return {
              value: undefined,
              done: true
            };
          } else {
            return {
              value: new ED(res.value.target, this.source),
              done: false
            };
          }
        };
        return InEI;
      }()); // InEdge(Property) Iterator
      _Symbol$iterator4 = Symbol.iterator;
      _export("InEPI", InEPI = /*#__PURE__*/function () {
        function InEPI(iterator, source) {
          this.iterator = void 0;
          this.source = void 0;
          this.iterator = iterator;
          this.source = source;
        }
        var _proto8 = InEPI.prototype;
        _proto8[_Symbol$iterator4] = function () {
          return this;
        };
        _proto8.next = function next() {
          var res = this.iterator.next();
          if (res.done) {
            return {
              value: undefined,
              done: true
            };
          } else {
            return {
              value: new EPD(res.value.target, this.source, res.value.edge),
              done: false
            };
          }
        };
        return InEPI;
      }()); // InEdge Iterator
      //--------------------------------------------------------------------------
      // Graph
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // IncidenceGraph
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // BidirectionalGraph
      //--------------------------------------------------------------------------
      _Symbol$iterator5 = Symbol.iterator;
      //--------------------------------------------------------------------------
      // AdjacencyGraph
      //--------------------------------------------------------------------------
      // Adjacency Iterator
      _export("AdjI", AdjI = /*#__PURE__*/function () {
        function AdjI(graph, iterator) {
          this.graph = void 0;
          this.iterator = void 0;
          this.graph = graph;
          this.iterator = iterator;
        }
        var _proto9 = AdjI.prototype;
        _proto9[_Symbol$iterator5] = function () {
          return this;
        };
        _proto9.next = function next() {
          var res = this.iterator.next();
          if (res.done) {
            return {
              value: undefined,
              done: true
            };
          } else {
            return {
              value: this.graph.target(res.value),
              done: false
            };
          }
        };
        return AdjI;
      }());
      _Symbol$iterator6 = Symbol.iterator;
      _export("AdjPI", AdjPI = /*#__PURE__*/function () {
        function AdjPI(graph, iterator) {
          this.graph = void 0;
          this.iterator = void 0;
          this.graph = graph;
          this.iterator = iterator;
        }
        var _proto10 = AdjPI.prototype;
        _proto10[_Symbol$iterator6] = function () {
          return this;
        };
        _proto10.next = function next() {
          var res = this.iterator.next();
          if (res.done) {
            return {
              value: undefined,
              done: true
            };
          } else {
            return {
              value: this.graph.target(res.value),
              done: false
            };
          }
        };
        return AdjPI;
      }()); // Adjacency Iterator
      // AdjacencyGraph
      //--------------------------------------------------------------------------
      // VertexListGraph
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // EdgeListGraph
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // MutableGraph
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // PropertyMap
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // PropertyGraph
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // NamedGraph
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // ComponentGraph
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // PolymorphicGraph
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // ReferenceGraph
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // MutableReferenceGraph
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // ParentGraph
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // AddressableGraph
      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------
      // UuidGraph
      //--------------------------------------------------------------------------
      NoTermination = /*#__PURE__*/function () {
        function NoTermination() {}
        var _proto11 = NoTermination.prototype;
        _proto11.terminate = function terminate(v, g) {
          return false;
        };
        return NoTermination;
      }();
      (function (GraphColor) {
        GraphColor[GraphColor["WHITE"] = 0] = "WHITE";
        GraphColor[GraphColor["GRAY"] = 1] = "GRAY";
        GraphColor[GraphColor["GREEN"] = 2] = "GREEN";
        GraphColor[GraphColor["RED"] = 3] = "RED";
        GraphColor[GraphColor["BLACK"] = 4] = "BLACK";
      })(GraphColor || _export("GraphColor", GraphColor = {}));
      VertexInfo = function VertexInfo(v, e, iter) {
        this.v = void 0;
        this.e = void 0;
        this.iter = void 0;
        this.v = v;
        this.e = e;
        this.iter = iter;
      };
      _export("DefaultVisitor", DefaultVisitor = /*#__PURE__*/function () {
        function DefaultVisitor() {}
        var _proto12 = DefaultVisitor.prototype;
        _proto12.initializeVertex = function initializeVertex(v, g) {
          // do nothing
        };
        _proto12.startVertex = function startVertex(v, g) {
          // do nothing
        };
        _proto12.discoverVertex = function discoverVertex(v, g) {
          // do nothing
        };
        _proto12.examineEdge = function examineEdge(e, g) {
          // do nothing
        };
        _proto12.treeEdge = function treeEdge(e, g) {
          // do nothing
        };
        _proto12.backEdge = function backEdge(e, g) {
          // do nothing
        };
        _proto12.forwardOrCrossEdge = function forwardOrCrossEdge(e, g) {
          // do nothing
        };
        _proto12.finishEdge = function finishEdge(e, g) {
          // do nothing
        };
        _proto12.finishVertex = function finishVertex(v, g) {
          // do nothing
        };
        return DefaultVisitor;
      }());
      _export("ReferenceGraphView", ReferenceGraphView = /*#__PURE__*/function () {
        function ReferenceGraphView(g) {
          this.directed_category = void 0;
          this.edge_parallel_category = void 0;
          this.traversal_category = void 0;
          this.g = void 0;
          this.g = g;
          this.directed_category = directional.directed;
          this.edge_parallel_category = parallel.allow;
          this.traversal_category = traversal.incidence | traversal.vertex_list;
        }
        var _proto13 = ReferenceGraphView.prototype;
        _proto13.nullVertex = function nullVertex() {
          return this.g.nullVertex();
        };
        _proto13.edge = function edge(u, v) {
          return this.g.reference(u, v);
        };
        _proto13.source = function source(e) {
          return this.g.parent(e);
        };
        _proto13.target = function target(e) {
          return this.g.child(e);
        };
        _proto13.outEdges = function outEdges(v) {
          return this.g.children(v);
        };
        _proto13.outDegree = function outDegree(v) {
          return this.g.numChildren(v);
        };
        _proto13.vertices = function vertices() {
          return this.g.vertices();
        };
        _proto13.numVertices = function numVertices() {
          return this.g.numVertices();
        };
        return ReferenceGraphView;
      }());
    }
  };
});