System.register("q-bundled:///fs/cocos/rendering/custom/compiler.js", ["../../../../virtual/internal%253Aconstants.js", "../../gfx/index.js", "../../core/index.js", "./effect.js", "./graph.js", "./types.js", "./define.js"], function (_export, _context) {
  "use strict";

  var DEBUG, LoadOp, StoreOp, assert, VectorGraphColorMap, DefaultVisitor, depthFirstSearch, ReferenceGraphView, AccessType, ResourceResidency, SceneFlags, hashCombineNum, hashCombineStr, PassVisitor, PassManagerVisitor, ResourceVisitor, ResourceUseContext, CompilerContext, Compiler, context, ResourceManagerVisitor;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /****************************************************************************
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
  function genHashValue(pass) {
    var hashCode = 0;
    for (var _iterator = _createForOfIteratorHelperLoose(pass.rasterViews), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
        name = _step$value[0],
        raster = _step$value[1];
      hashCode = hashCombineStr('raster', hashCode);
      hashCode = hashCombineStr(name, hashCode);
      hashCode = hashCombineStr(raster.slotName, hashCode);
      hashCode = hashCombineNum(raster.accessType, hashCode);
      hashCode = hashCombineNum(raster.attachmentType, hashCode);
      hashCode = hashCombineNum(raster.loadOp, hashCode);
      hashCode = hashCombineNum(raster.storeOp, hashCode);
      hashCode = hashCombineNum(raster.clearFlags, hashCode);
      hashCode = hashCombineNum(raster.clearColor.x, hashCode);
      hashCode = hashCombineNum(raster.clearColor.y, hashCode);
      hashCode = hashCombineNum(raster.clearColor.z, hashCode);
      hashCode = hashCombineNum(raster.clearColor.w, hashCode);
      hashCode = hashCombineNum(raster.slotID, hashCode);
      hashCode = hashCombineNum(raster.shaderStageFlags, hashCode);
    }
    for (var _iterator2 = _createForOfIteratorHelperLoose(pass.computeViews), _step2; !(_step2 = _iterator2()).done;) {
      var _step2$value = _step2.value,
        _name = _step2$value[0],
        computes = _step2$value[1];
      hashCode = hashCombineStr(_name, hashCode);
      for (var _iterator3 = _createForOfIteratorHelperLoose(computes), _step3; !(_step3 = _iterator3()).done;) {
        var compute = _step3.value;
        hashCode = hashCombineStr('compute', hashCode);
        hashCode = hashCombineStr(compute.name, hashCode);
        hashCode = hashCombineNum(compute.accessType, hashCode);
        hashCode = hashCombineNum(compute.clearFlags, hashCode);
        hashCode = hashCombineNum(compute.clearValueType, hashCode);
        hashCode = hashCombineNum(compute.clearValue.x, hashCode);
        hashCode = hashCombineNum(compute.clearValue.y, hashCode);
        hashCode = hashCombineNum(compute.clearValue.z, hashCode);
        hashCode = hashCombineNum(compute.clearValue.w, hashCode);
        hashCode = hashCombineNum(compute.shaderStageFlags, hashCode);
      }
    }
    hashCode = hashCombineNum(pass.width, hashCode);
    hashCode = hashCombineNum(pass.height, hashCode);
    hashCode = hashCombineNum(pass.viewport.left, hashCode);
    hashCode = hashCombineNum(pass.viewport.top, hashCode);
    hashCode = hashCombineNum(pass.viewport.width, hashCode);
    hashCode = hashCombineNum(pass.viewport.height, hashCode);
    hashCode = hashCombineNum(pass.viewport.minDepth, hashCode);
    hashCode = hashCombineNum(pass.viewport.maxDepth, hashCode);
    hashCode = hashCombineNum(pass.showStatistics ? 1 : 0, hashCode);
    pass.hashValue = hashCode;
  }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_gfxIndexJs) {
      LoadOp = _gfxIndexJs.LoadOp;
      StoreOp = _gfxIndexJs.StoreOp;
    }, function (_coreIndexJs) {
      assert = _coreIndexJs.assert;
    }, function (_effectJs) {
      VectorGraphColorMap = _effectJs.VectorGraphColorMap;
    }, function (_graphJs) {
      DefaultVisitor = _graphJs.DefaultVisitor;
      depthFirstSearch = _graphJs.depthFirstSearch;
      ReferenceGraphView = _graphJs.ReferenceGraphView;
    }, function (_typesJs) {
      AccessType = _typesJs.AccessType;
      ResourceResidency = _typesJs.ResourceResidency;
      SceneFlags = _typesJs.SceneFlags;
    }, function (_defineJs) {
      hashCombineNum = _defineJs.hashCombineNum;
      hashCombineStr = _defineJs.hashCombineStr;
    }],
    execute: function () {
      PassVisitor = /*#__PURE__*/function () {
        function PassVisitor(context) {
          this.queueID = 0xFFFFFFFF;
          this.sceneID = 0xFFFFFFFF;
          this.passID = 0xFFFFFFFF;
          this.dispatchID = 0xFFFFFFFF;
          // output resourcetexture id
          this.resID = 0xFFFFFFFF;
          this.context = void 0;
          this._currPass = null;
          this._resVisitor = void 0;
          this.context = context;
          this._resVisitor = new ResourceVisitor(this.context);
        }
        var _proto = PassVisitor.prototype;
        _proto._isRasterPass = function _isRasterPass(u) {
          return !!this.context.renderGraph.tryGetRasterPass(u);
        };
        _proto._isCopyPass = function _isCopyPass(u) {
          return !!this.context.renderGraph.tryGetCopy(u);
        };
        _proto._isCompute = function _isCompute(u) {
          return !!this.context.renderGraph.tryGetCompute(u);
        };
        _proto._isDispatch = function _isDispatch(u) {
          return !!this.context.renderGraph.tryGetDispatch(u);
        };
        _proto._isQueue = function _isQueue(u) {
          return !!this.context.renderGraph.tryGetQueue(u);
        };
        _proto._isShadowMap = function _isShadowMap(u) {
          var sceneData = this._getSceneData(u);
          if (sceneData) {
            return sceneData.light && !!sceneData.light.light && (sceneData.flags & SceneFlags.SHADOW_CASTER) !== 0;
          }
          return false;
        };
        _proto._getSceneData = function _getSceneData(u) {
          return this.context.renderGraph.tryGetScene(u);
        };
        _proto._isScene = function _isScene(u) {
          return !!this._getSceneData(u);
        };
        _proto._isBlit = function _isBlit(u) {
          return !!this.context.renderGraph.tryGetBlit(u);
        };
        _proto._useResourceInfo = function _useResourceInfo(input, raster) {
          if (!DEBUG) {
            return;
          }
          var resContext = this.context.resourceContext;
          var useContext = resContext.get(input);
          var resGraph = this.context.resourceGraph;
          // There are resources being used
          if (useContext) {
            var rasters = useContext.rasters;
            var passRaster = rasters.get(this.passID);
            if (passRaster === raster) {
              return;
            }
            var computes = useContext.computes;
            var isPreRaster = false;
            for (var _iterator4 = _createForOfIteratorHelperLoose(rasters), _step4; !(_step4 = _iterator4()).done;) {
              var _step4$value = _step4.value,
                passId = _step4$value[0],
                currRaster = _step4$value[1];
              if (passId > this.passID) {
                isPreRaster = true;
                // TODO: Shadow map is rather special, as it will be merged into one pass later, and then this determination can be removed.
                if (!this._isShadowMap(this.sceneID)) {
                  assert(currRaster.loadOp === LoadOp.LOAD, "The resource with name " + input + " is being used, and the pass that uses this resource must have loadOp set to 'load'");
                }
              }
            }
            for (var _iterator5 = _createForOfIteratorHelperLoose(computes), _step5; !(_step5 = _iterator5()).done;) {
              var _step5$value = _step5.value,
                _passId = _step5$value[0];
              if (_passId > this.passID) {
                isPreRaster = true;
                break;
              }
            }
            if (isPreRaster) {
              assert(raster.storeOp === StoreOp.STORE, "The resource " + input + " is being used, so storeOp needs to be set to 'store'");
            }
            rasters.set(this.passID, raster);
          } else {
            var resId = resGraph.vertex(input);
            var trait = resGraph.getTraits(resId);
            switch (trait.residency) {
              case ResourceResidency.PERSISTENT:
                assert(raster.storeOp === StoreOp.STORE, "Persistent resources must have storeOp set to 'store'.");
                break;
              default:
            }
            var _useContext = new ResourceUseContext();
            resContext.set(input, _useContext);
            _useContext.rasters.set(this.passID, raster);
          }
        };
        _proto._fetchValidPass = function _fetchValidPass() {
          var rg = this.context.renderGraph;
          var resContext = this.context.resourceContext;
          if (!DEBUG && rg.getValid(this.passID)) {
            rg.setValid(this.queueID, true);
            rg.setValid(this.sceneID, true);
            return;
          }
          var outputId = this.resID;
          var outputName = this.context.resourceGraph.vertexName(outputId);
          var readViews = new Map();
          var pass = this._currPass;
          var validPass = rg.getValid(this.passID);
          for (var _iterator6 = _createForOfIteratorHelperLoose(pass.rasterViews), _step6; !(_step6 = _iterator6()).done;) {
            var _step6$value = _step6.value,
              _readName = _step6$value[0],
              _raster2 = _step6$value[1];
            // find the pass
            if (_readName === outputName && _raster2.accessType !== AccessType.READ) {
              if (DEBUG) {
                this._useResourceInfo(_readName, _raster2);
              }
              rg.setValid(this.passID, true);
              rg.setValid(this.queueID, true);
              rg.setValid(this.sceneID, true);
              continue;
            }
            if (_raster2.accessType !== AccessType.WRITE) {
              readViews.set(_readName, _raster2);
            }
          }
          if (DEBUG && validPass) return;
          if (rg.getValid(this.sceneID)) {
            for (var _iterator7 = _createForOfIteratorHelperLoose(pass.rasterViews), _step7; !(_step7 = _iterator7()).done;) {
              var _step7$value = _step7.value,
                readName = _step7$value[0],
                raster = _step7$value[1];
              context.pipeline.resourceUses.push(readName);
            }
            var resourceGraph;
            var vertID;
            for (var _iterator8 = _createForOfIteratorHelperLoose(readViews), _step8; !(_step8 = _iterator8()).done;) {
              var _step8$value = _step8.value,
                rasterName = _step8$value[0],
                _raster = _step8$value[1];
              resourceGraph = this.context.resourceGraph;
              vertID = resourceGraph.find(rasterName);
              if (vertID !== 0xFFFFFFFF) {
                this._resVisitor.resID = vertID;
                resourceGraph.visitVertex(this._resVisitor, vertID);
              }
            }
            for (var _iterator9 = _createForOfIteratorHelperLoose(pass.computeViews), _step9; !(_step9 = _iterator9()).done;) {
              var _step9$value = _step9.value,
                computeName = _step9$value[0],
                cViews = _step9$value[1];
              if (DEBUG) {
                var resUseContext = resContext.get(computeName);
                if (!resUseContext) {
                  resUseContext = new ResourceUseContext();
                  resContext.set(computeName, resUseContext);
                }
                var computes = resUseContext.computes;
                var currUseComputes = computes.get(this.passID);
                if (currUseComputes) {
                  currUseComputes.push(cViews);
                } else {
                  computes.set(this.passID, [cViews]);
                }
              }
              resourceGraph = this.context.resourceGraph;
              vertID = resourceGraph.find(computeName);
              if (vertID !== 0xFFFFFFFF) {
                this._resVisitor.resID = vertID;
                resourceGraph.visitVertex(this._resVisitor, vertID);
              }
            }
            genHashValue(pass);
          }
        };
        _proto.applyID = function applyID(id, resId) {
          this.resID = resId;
          if (this._isRasterPass(id) || this._isCopyPass(id) || this._isCompute(id)) {
            this.passID = id;
          } else if (this._isQueue(id)) {
            this.queueID = id;
          } else if (this._isScene(id) || this._isBlit(id)) {
            this.sceneID = id;
          } else if (this._isDispatch(id)) {
            this.dispatchID = id;
          }
        };
        _proto.rasterPass = function rasterPass(pass) {
          // const rg = this.context.renderGraph;
          // Since the pass is valid, there is no need to continue traversing.
          // if (rg.getValid(this.passID)) {
          //     return;
          // }
          this._currPass = pass;
        };
        _proto.rasterSubpass = function rasterSubpass(value) {
          // noop
        };
        _proto.computeSubpass = function computeSubpass(value) {
          // noop
        };
        _proto.compute = function compute(value) {
          this._currPass = value;
          var rg = context.renderGraph;
          rg.setValid(this.passID, true);
        };
        _proto.resolve = function resolve(value) {
          // noop
        };
        _proto.copy = function copy(value) {
          var rg = context.renderGraph;
          if (rg.getValid(this.passID)) {
            return;
          }
          var resourceGraph = this.context.resourceGraph;
          this._currPass = value;
          var outputId = this.resID;
          var outputName = resourceGraph.vertexName(outputId);
          var vertID;
          for (var _iterator10 = _createForOfIteratorHelperLoose(value.copyPairs), _step10; !(_step10 = _iterator10()).done;) {
            var pair = _step10.value;
            if (pair.target === outputName) {
              rg.setValid(this.passID, true);
              vertID = resourceGraph.find(pair.source);
              if (vertID !== 0xFFFFFFFF) {
                this._resVisitor.resID = vertID;
                resourceGraph.visitVertex(this._resVisitor, vertID);
              }
            }
          }
        };
        _proto.move = function move(value) {
          // noop
        };
        _proto.raytrace = function raytrace(value) {
          // noop
        };
        _proto.queue = function queue(value) {
          // noop
        };
        _proto.scene = function scene(value) {
          this._fetchValidPass();
        };
        _proto.blit = function blit(value) {
          this._fetchValidPass();
        };
        _proto.dispatch = function dispatch(value) {
          var rg = this.context.renderGraph;
          rg.setValid(this.queueID, true);
          rg.setValid(this.dispatchID, true);
        };
        _proto.clear = function clear(value) {
          // noop
        };
        _proto.viewport = function viewport(value) {
          // noop
        };
        return PassVisitor;
      }();
      PassManagerVisitor = /*#__PURE__*/function (_DefaultVisitor) {
        _inheritsLoose(PassManagerVisitor, _DefaultVisitor);
        function PassManagerVisitor(context, resId) {
          var _this;
          _this = _DefaultVisitor.call(this) || this;
          _this._colorMap = void 0;
          _this._graphView = void 0;
          _this._passVisitor = void 0;
          _this._resId = 0xFFFFFFFF;
          _this._resId = resId;
          _this._passVisitor = new PassVisitor(context);
          _this._graphView = new ReferenceGraphView(context.renderGraph);
          _this._colorMap = new VectorGraphColorMap(context.renderGraph.numVertices());
          return _this;
        }
        var _proto2 = PassManagerVisitor.prototype;
        _proto2.discoverVertex = function discoverVertex(u, gv) {
          var g = gv.g;
          this._passVisitor.applyID(u, this.resId);
          g.visitVertex(this._passVisitor, u);
        };
        _createClass(PassManagerVisitor, [{
          key: "resId",
          get: function get() {
            return this._resId;
          },
          set: function set(value) {
            this._resId = value;
            this._colorMap.colors.length = context.renderGraph.numVertices();
          }
        }, {
          key: "graphView",
          get: function get() {
            return this._graphView;
          }
        }, {
          key: "colorMap",
          get: function get() {
            return this._colorMap;
          }
        }]);
        return PassManagerVisitor;
      }(DefaultVisitor);
      ResourceVisitor = /*#__PURE__*/function () {
        function ResourceVisitor(context) {
          this._context = void 0;
          this.resID = 0xFFFFFFFF;
          this._passManagerVis = void 0;
          this._context = context;
        }
        var _proto3 = ResourceVisitor.prototype;
        _proto3.managedBuffer = function managedBuffer(value) {
          // noop
        };
        _proto3.managedTexture = function managedTexture(value) {
          // noop
        };
        _proto3.managed = function managed(value) {
          this.dependency();
        };
        _proto3.persistentBuffer = function persistentBuffer(value) {
          // noop
        };
        _proto3.dependency = function dependency() {
          if (!this._passManagerVis) {
            this._passManagerVis = new PassManagerVisitor(this._context, this.resID);
          } else {
            this._passManagerVis.resId = this.resID;
          }
          depthFirstSearch(this._passManagerVis.graphView, this._passManagerVis, this._passManagerVis.colorMap);
        };
        _proto3.persistentTexture = function persistentTexture(value) {
          this.dependency();
        };
        _proto3.framebuffer = function framebuffer(value) {
          this.dependency();
        };
        _proto3.swapchain = function swapchain(value) {
          this.dependency();
        };
        _proto3.formatView = function formatView(value) {
          // noop
        };
        _proto3.subresourceView = function subresourceView(value) {
          // noop
        };
        return ResourceVisitor;
      }();
      ResourceUseContext = function ResourceUseContext() {
        // <passID, pass view>
        this.rasters = new Map();
        // <pass Use ID, compute views>
        this.computes = new Map();
      };
      CompilerContext = /*#__PURE__*/function () {
        function CompilerContext() {
          this.resourceGraph = void 0;
          this.pipeline = void 0;
          this.renderGraph = void 0;
          this.layoutGraph = void 0;
          this.resourceContext = void 0;
        }
        var _proto4 = CompilerContext.prototype;
        _proto4.set = function set(pipeline, resGraph, renderGraph, layoutGraph) {
          this.pipeline = pipeline;
          this.resourceGraph = resGraph;
          this.renderGraph = renderGraph;
          this.layoutGraph = layoutGraph;
          if (!this.resourceContext) {
            this.resourceContext = new Map();
          }
          this.resourceContext.clear();
        };
        return CompilerContext;
      }();
      _export("Compiler", Compiler = /*#__PURE__*/function () {
        function Compiler(pipeline, renderGraph, resGraph, layoutGraph) {
          this._resourceGraph = void 0;
          this._pipeline = void 0;
          this._layoutGraph = void 0;
          this._visitor = void 0;
          this._pipeline = pipeline;
          this._resourceGraph = resGraph;
          this._layoutGraph = layoutGraph;
          context.set(this._pipeline, this._resourceGraph, renderGraph, this._layoutGraph);
          this._visitor = new ResourceManagerVisitor(context);
        }
        var _proto5 = Compiler.prototype;
        _proto5.compile = function compile(rg) {
          context.set(this._pipeline, this._resourceGraph, rg, this._layoutGraph);
          context.pipeline.resourceUses.length = 0;
          this._visitor.colorMap.colors.length = context.resourceGraph.numVertices();
          depthFirstSearch(this._resourceGraph, this._visitor, this._visitor.colorMap);
          if (DEBUG) {
            var useContext = context.resourceContext;
            for (var _iterator11 = _createForOfIteratorHelperLoose(useContext), _step11; !(_step11 = _iterator11()).done;) {
              var _step11$value = _step11.value,
                name = _step11$value[0],
                use = _step11$value[1];
              var resId = this._resourceGraph.vertex(name);
              var trait = this._resourceGraph.getTraits(resId);
              var rasterArr = Array.from(use.rasters.keys());
              if (!rasterArr.length) {
                continue;
              }
              var min = rasterArr.reduce(function (prev, current) {
                return prev < current ? prev : current;
              });
              var firstRaster = use.rasters.get(min);
              switch (trait.residency) {
                case ResourceResidency.PERSISTENT:
                  assert(firstRaster.loadOp !== LoadOp.DISCARD, "The loadOp for persistent resources in the top-level pass cannot be set to 'discard'.");
                  break;
                case ResourceResidency.MANAGED:
                  assert(firstRaster.loadOp === LoadOp.CLEAR, "The loadOp for Managed resources in the top-level pass can only be set to 'clear'.");
                  break;
                default:
                  break;
              }
              var computeArr = Array.from(use.computes.keys());
              var max = rasterArr.reduce(function (prev, current) {
                return prev > current ? prev : current;
              });
              var maxCompute = -1;
              if (computeArr.length) {
                maxCompute = computeArr.reduce(function (prev, current) {
                  return prev > current ? prev : current;
                });
              }
              if (max > maxCompute) {
                var lastRaster = use.rasters.get(max);
                switch (trait.residency) {
                  case ResourceResidency.MANAGED:
                    // TODO
                    // assert(lastRaster.storeOp === StoreOp.DISCARD, `MANAGED resources that are not being used must be set to 'discard'.`);
                    break;
                  default:
                    break;
                }
              }
            }
          }
        };
        return Compiler;
      }());
      context = new CompilerContext();
      _export("ResourceManagerVisitor", ResourceManagerVisitor = /*#__PURE__*/function (_DefaultVisitor2) {
        _inheritsLoose(ResourceManagerVisitor, _DefaultVisitor2);
        function ResourceManagerVisitor(context) {
          var _this2;
          _this2 = _DefaultVisitor2.call(this) || this;
          _this2._colorMap = void 0;
          _this2._resourceGraph = void 0;
          _this2._resVisitor = void 0;
          _this2._colorMap = new VectorGraphColorMap(context.resourceGraph.numVertices());
          _this2._resourceGraph = context.resourceGraph;
          _this2._resVisitor = new ResourceVisitor(context);
          return _this2;
        }
        var _proto6 = ResourceManagerVisitor.prototype;
        _proto6.discoverVertex = function discoverVertex(u, gv) {
          var traits = this._resourceGraph.getTraits(u);
          if (traits.residency === ResourceResidency.MANAGED || traits.residency === ResourceResidency.MEMORYLESS) {
            return;
          }
          this._resVisitor.resID = u;
          this._resourceGraph.visitVertex(this._resVisitor, u);
        };
        _createClass(ResourceManagerVisitor, [{
          key: "colorMap",
          get: function get() {
            return this._colorMap;
          }
        }]);
        return ResourceManagerVisitor;
      }(DefaultVisitor));
    }
  };
});