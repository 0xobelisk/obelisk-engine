System.register("q-bundled:///fs/cocos/rendering/custom/render-graph.js", ["./graph.js", "../../gfx/index.js", "./types.js", "../../core/memop/index.js"], function (_export, _context) {
  "use strict";

  var AdjI, ED, InEI, OutE, OutEI, directional, parallel, reindexEdgeList, traversal, AccessFlagBit, ClearFlagBit, Color, Format, LoadOp, SampleCount, ShaderStageFlagBit, StoreOp, TextureFlagBit, TextureType, Viewport, AccessType, AttachmentType, ClearValueType, LightInfo, QueueHint, ResourceDimension, ResourceFlags, ResourceResidency, SceneFlags, RecyclePool, ClearValue, RasterView, ComputeView, ResourceDesc, ResourceTraits, RenderSwapchain, ResourceStates, ManagedBuffer, PersistentBuffer, ManagedTexture, PersistentTexture, ManagedResource, Subpass, SubpassGraphVertex, SubpassGraphNameMap, SubpassGraphSubpassMap, SubpassGraphComponent, SubpassGraph, RasterSubpass, ComputeSubpass, RasterPass, PersistentRenderPassAndFramebuffer, FormatView, SubresourceView, ResourceGraphValue, ResourceGraphVertex, ResourceGraphNameMap, ResourceGraphDescMap, ResourceGraphTraitsMap, ResourceGraphStatesMap, ResourceGraphSamplerMap, ResourceGraphComponent, ResourceGraph, ComputePass, ResolvePass, CopyPass, MovePass, RaytracePass, ClearView, RenderQueue, CullingFlags, SceneData, Dispatch, Blit, RenderData, RenderGraphValue, RenderGraphVertex, RenderGraphNameMap, RenderGraphLayoutMap, RenderGraphDataMap, RenderGraphValidMap, RenderGraphComponent, RenderGraph, RenderGraphObjectPoolSettings, RenderGraphObjectPool;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
                                                                                                                                                                                      ****************************************************************************/ /**
                                                                                                                                                                                                                                                                     * ========================= !DO NOT CHANGE THE FOLLOWING SECTION MANUALLY! =========================
                                                                                                                                                                                                                                                                     * The following section is auto-generated.
                                                                                                                                                                                                                                                                     * ========================= !DO NOT CHANGE THE FOLLOWING SECTION MANUALLY! =========================
                                                                                                                                                                                                                                                                     */ /* eslint-disable max-len */
  function getResourceGraphValueName(e) {
    switch (e) {
      case ResourceGraphValue.Managed:
        return 'Managed';
      case ResourceGraphValue.ManagedBuffer:
        return 'ManagedBuffer';
      case ResourceGraphValue.ManagedTexture:
        return 'ManagedTexture';
      case ResourceGraphValue.PersistentBuffer:
        return 'PersistentBuffer';
      case ResourceGraphValue.PersistentTexture:
        return 'PersistentTexture';
      case ResourceGraphValue.Framebuffer:
        return 'Framebuffer';
      case ResourceGraphValue.Swapchain:
        return 'Swapchain';
      case ResourceGraphValue.FormatView:
        return 'FormatView';
      case ResourceGraphValue.SubresourceView:
        return 'SubresourceView';
      default:
        return '';
    }
  }
  function getRenderGraphValueName(e) {
    switch (e) {
      case RenderGraphValue.RasterPass:
        return 'RasterPass';
      case RenderGraphValue.RasterSubpass:
        return 'RasterSubpass';
      case RenderGraphValue.ComputeSubpass:
        return 'ComputeSubpass';
      case RenderGraphValue.Compute:
        return 'Compute';
      case RenderGraphValue.Resolve:
        return 'Resolve';
      case RenderGraphValue.Copy:
        return 'Copy';
      case RenderGraphValue.Move:
        return 'Move';
      case RenderGraphValue.Raytrace:
        return 'Raytrace';
      case RenderGraphValue.Queue:
        return 'Queue';
      case RenderGraphValue.Scene:
        return 'Scene';
      case RenderGraphValue.Blit:
        return 'Blit';
      case RenderGraphValue.Dispatch:
        return 'Dispatch';
      case RenderGraphValue.Clear:
        return 'Clear';
      case RenderGraphValue.Viewport:
        return 'Viewport';
      default:
        return '';
    }
  }
  _export({
    getResourceGraphValueName: getResourceGraphValueName,
    getRenderGraphValueName: getRenderGraphValueName,
    CullingFlags: void 0
  });
  return {
    setters: [function (_graphJs) {
      AdjI = _graphJs.AdjI;
      ED = _graphJs.ED;
      InEI = _graphJs.InEI;
      OutE = _graphJs.OutE;
      OutEI = _graphJs.OutEI;
      directional = _graphJs.directional;
      parallel = _graphJs.parallel;
      reindexEdgeList = _graphJs.reindexEdgeList;
      traversal = _graphJs.traversal;
    }, function (_gfxIndexJs) {
      AccessFlagBit = _gfxIndexJs.AccessFlagBit;
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
      Color = _gfxIndexJs.Color;
      Format = _gfxIndexJs.Format;
      LoadOp = _gfxIndexJs.LoadOp;
      SampleCount = _gfxIndexJs.SampleCount;
      ShaderStageFlagBit = _gfxIndexJs.ShaderStageFlagBit;
      StoreOp = _gfxIndexJs.StoreOp;
      TextureFlagBit = _gfxIndexJs.TextureFlagBit;
      TextureType = _gfxIndexJs.TextureType;
      Viewport = _gfxIndexJs.Viewport;
    }, function (_typesJs) {
      AccessType = _typesJs.AccessType;
      AttachmentType = _typesJs.AttachmentType;
      ClearValueType = _typesJs.ClearValueType;
      LightInfo = _typesJs.LightInfo;
      QueueHint = _typesJs.QueueHint;
      ResourceDimension = _typesJs.ResourceDimension;
      ResourceFlags = _typesJs.ResourceFlags;
      ResourceResidency = _typesJs.ResourceResidency;
      SceneFlags = _typesJs.SceneFlags;
    }, function (_coreMemopIndexJs) {
      RecyclePool = _coreMemopIndexJs.RecyclePool;
    }],
    execute: function () {
      _export("ClearValue", ClearValue = /*#__PURE__*/function () {
        function ClearValue(x, y, z, w) {
          if (x === void 0) {
            x = 0;
          }
          if (y === void 0) {
            y = 0;
          }
          if (z === void 0) {
            z = 0;
          }
          if (w === void 0) {
            w = 0;
          }
          this.x = void 0;
          this.y = void 0;
          this.z = void 0;
          this.w = void 0;
          this.x = x;
          this.y = y;
          this.z = z;
          this.w = w;
        }
        var _proto = ClearValue.prototype;
        _proto.reset = function reset(x, y, z, w) {
          if (x === void 0) {
            x = 0;
          }
          if (y === void 0) {
            y = 0;
          }
          if (z === void 0) {
            z = 0;
          }
          if (w === void 0) {
            w = 0;
          }
          this.x = x;
          this.y = y;
          this.z = z;
          this.w = w;
        };
        return ClearValue;
      }());
      _export("RasterView", RasterView = /*#__PURE__*/function () {
        function RasterView(slotName, accessType, attachmentType, loadOp, storeOp, clearFlags, clearColor, shaderStageFlags) {
          if (slotName === void 0) {
            slotName = '';
          }
          if (accessType === void 0) {
            accessType = AccessType.WRITE;
          }
          if (attachmentType === void 0) {
            attachmentType = AttachmentType.RENDER_TARGET;
          }
          if (loadOp === void 0) {
            loadOp = LoadOp.LOAD;
          }
          if (storeOp === void 0) {
            storeOp = StoreOp.STORE;
          }
          if (clearFlags === void 0) {
            clearFlags = ClearFlagBit.ALL;
          }
          if (clearColor === void 0) {
            clearColor = new Color();
          }
          if (shaderStageFlags === void 0) {
            shaderStageFlags = ShaderStageFlagBit.NONE;
          }
          this.slotName = void 0;
          this.slotName1 = '';
          this.accessType = void 0;
          this.attachmentType = void 0;
          this.loadOp = void 0;
          this.storeOp = void 0;
          this.clearFlags = void 0;
          this.clearColor = void 0;
          this.slotID = 0;
          this.shaderStageFlags = void 0;
          this.slotName = slotName;
          this.accessType = accessType;
          this.attachmentType = attachmentType;
          this.loadOp = loadOp;
          this.storeOp = storeOp;
          this.clearFlags = clearFlags;
          this.clearColor = clearColor;
          this.shaderStageFlags = shaderStageFlags;
        }
        var _proto2 = RasterView.prototype;
        _proto2.reset = function reset(slotName, accessType, attachmentType, loadOp, storeOp, clearFlags, shaderStageFlags) {
          if (slotName === void 0) {
            slotName = '';
          }
          if (accessType === void 0) {
            accessType = AccessType.WRITE;
          }
          if (attachmentType === void 0) {
            attachmentType = AttachmentType.RENDER_TARGET;
          }
          if (loadOp === void 0) {
            loadOp = LoadOp.LOAD;
          }
          if (storeOp === void 0) {
            storeOp = StoreOp.STORE;
          }
          if (clearFlags === void 0) {
            clearFlags = ClearFlagBit.ALL;
          }
          if (shaderStageFlags === void 0) {
            shaderStageFlags = ShaderStageFlagBit.NONE;
          }
          this.slotName = slotName;
          this.slotName1 = '';
          this.accessType = accessType;
          this.attachmentType = attachmentType;
          this.loadOp = loadOp;
          this.storeOp = storeOp;
          this.clearFlags = clearFlags;
          this.clearColor.reset();
          this.slotID = 0;
          this.shaderStageFlags = shaderStageFlags;
        };
        return RasterView;
      }());
      _export("ComputeView", ComputeView = /*#__PURE__*/function () {
        function ComputeView(name, accessType, clearFlags, clearValueType, clearValue, shaderStageFlags) {
          if (name === void 0) {
            name = '';
          }
          if (accessType === void 0) {
            accessType = AccessType.READ;
          }
          if (clearFlags === void 0) {
            clearFlags = ClearFlagBit.NONE;
          }
          if (clearValueType === void 0) {
            clearValueType = ClearValueType.NONE;
          }
          if (clearValue === void 0) {
            clearValue = new ClearValue();
          }
          if (shaderStageFlags === void 0) {
            shaderStageFlags = ShaderStageFlagBit.NONE;
          }
          this.name = void 0;
          this.accessType = void 0;
          this.plane = 0;
          this.clearFlags = void 0;
          this.clearValueType = void 0;
          this.clearValue = void 0;
          this.shaderStageFlags = void 0;
          this.name = name;
          this.accessType = accessType;
          this.clearFlags = clearFlags;
          this.clearValueType = clearValueType;
          this.clearValue = clearValue;
          this.shaderStageFlags = shaderStageFlags;
        }
        var _proto3 = ComputeView.prototype;
        _proto3.reset = function reset(name, accessType, clearFlags, clearValueType, shaderStageFlags) {
          if (name === void 0) {
            name = '';
          }
          if (accessType === void 0) {
            accessType = AccessType.READ;
          }
          if (clearFlags === void 0) {
            clearFlags = ClearFlagBit.NONE;
          }
          if (clearValueType === void 0) {
            clearValueType = ClearValueType.NONE;
          }
          if (shaderStageFlags === void 0) {
            shaderStageFlags = ShaderStageFlagBit.NONE;
          }
          this.name = name;
          this.accessType = accessType;
          this.plane = 0;
          this.clearFlags = clearFlags;
          this.clearValueType = clearValueType;
          this.clearValue.reset();
          this.shaderStageFlags = shaderStageFlags;
        };
        return ComputeView;
      }());
      _export("ResourceDesc", ResourceDesc = /*#__PURE__*/function () {
        function ResourceDesc() {
          this.dimension = ResourceDimension.BUFFER;
          this.alignment = 0;
          this.width = 0;
          this.height = 0;
          this.depthOrArraySize = 0;
          this.mipLevels = 0;
          this.format = Format.UNKNOWN;
          this.sampleCount = SampleCount.X1;
          this.textureFlags = TextureFlagBit.NONE;
          this.flags = ResourceFlags.NONE;
          this.viewType = TextureType.TEX2D;
        }
        var _proto4 = ResourceDesc.prototype;
        _proto4.reset = function reset() {
          this.dimension = ResourceDimension.BUFFER;
          this.alignment = 0;
          this.width = 0;
          this.height = 0;
          this.depthOrArraySize = 0;
          this.mipLevels = 0;
          this.format = Format.UNKNOWN;
          this.sampleCount = SampleCount.X1;
          this.textureFlags = TextureFlagBit.NONE;
          this.flags = ResourceFlags.NONE;
          this.viewType = TextureType.TEX2D;
        };
        return ResourceDesc;
      }());
      _export("ResourceTraits", ResourceTraits = /*#__PURE__*/function () {
        function ResourceTraits(residency) {
          if (residency === void 0) {
            residency = ResourceResidency.MANAGED;
          }
          this.residency = void 0;
          this.residency = residency;
        }
        var _proto5 = ResourceTraits.prototype;
        _proto5.reset = function reset(residency) {
          if (residency === void 0) {
            residency = ResourceResidency.MANAGED;
          }
          this.residency = residency;
        };
        return ResourceTraits;
      }());
      _export("RenderSwapchain", RenderSwapchain = /*#__PURE__*/function () {
        function RenderSwapchain(swapchain) {
          if (swapchain === void 0) {
            swapchain = null;
          }
          /*pointer*/
          this.swapchain = void 0;
          /*pointer*/
          this.renderWindow = null;
          this.currentID = 0;
          this.numBackBuffers = 0;
          this.generation = 0xFFFFFFFF;
          this.swapchain = swapchain;
        }
        var _proto6 = RenderSwapchain.prototype;
        _proto6.reset = function reset(swapchain) {
          if (swapchain === void 0) {
            swapchain = null;
          }
          this.swapchain = swapchain;
          this.renderWindow = null;
          this.currentID = 0;
          this.numBackBuffers = 0;
          this.generation = 0xFFFFFFFF;
        };
        return RenderSwapchain;
      }());
      _export("ResourceStates", ResourceStates = /*#__PURE__*/function () {
        function ResourceStates() {
          this.states = AccessFlagBit.NONE;
        }
        var _proto7 = ResourceStates.prototype;
        _proto7.reset = function reset() {
          this.states = AccessFlagBit.NONE;
        };
        return ResourceStates;
      }());
      _export("ManagedBuffer", ManagedBuffer = /*#__PURE__*/function () {
        function ManagedBuffer(buffer) {
          if (buffer === void 0) {
            buffer = null;
          }
          /*refcount*/
          this.buffer = void 0;
          this.fenceValue = 0;
          this.buffer = buffer;
        }
        var _proto8 = ManagedBuffer.prototype;
        _proto8.reset = function reset(buffer) {
          if (buffer === void 0) {
            buffer = null;
          }
          this.buffer = buffer;
          this.fenceValue = 0;
        };
        return ManagedBuffer;
      }());
      _export("PersistentBuffer", PersistentBuffer = /*#__PURE__*/function () {
        function PersistentBuffer(buffer) {
          if (buffer === void 0) {
            buffer = null;
          }
          /*refcount*/
          this.buffer = void 0;
          this.fenceValue = 0;
          this.buffer = buffer;
        }
        var _proto9 = PersistentBuffer.prototype;
        _proto9.reset = function reset(buffer) {
          if (buffer === void 0) {
            buffer = null;
          }
          this.buffer = buffer;
          this.fenceValue = 0;
        };
        return PersistentBuffer;
      }());
      _export("ManagedTexture", ManagedTexture = /*#__PURE__*/function () {
        function ManagedTexture(texture) {
          if (texture === void 0) {
            texture = null;
          }
          /*refcount*/
          this.texture = void 0;
          this.fenceValue = 0;
          this.texture = texture;
        }
        var _proto10 = ManagedTexture.prototype;
        _proto10.reset = function reset(texture) {
          if (texture === void 0) {
            texture = null;
          }
          this.texture = texture;
          this.fenceValue = 0;
        };
        return ManagedTexture;
      }());
      _export("PersistentTexture", PersistentTexture = /*#__PURE__*/function () {
        function PersistentTexture(texture) {
          if (texture === void 0) {
            texture = null;
          }
          /*refcount*/
          this.texture = void 0;
          this.fenceValue = 0;
          this.texture = texture;
        }
        var _proto11 = PersistentTexture.prototype;
        _proto11.reset = function reset(texture) {
          if (texture === void 0) {
            texture = null;
          }
          this.texture = texture;
          this.fenceValue = 0;
        };
        return PersistentTexture;
      }());
      _export("ManagedResource", ManagedResource = /*#__PURE__*/function () {
        function ManagedResource() {
          this.unused = 0;
        }
        var _proto12 = ManagedResource.prototype;
        _proto12.reset = function reset() {
          this.unused = 0;
        };
        return ManagedResource;
      }());
      _export("Subpass", Subpass = /*#__PURE__*/function () {
        function Subpass() {
          this.rasterViews = new Map();
          this.computeViews = new Map();
          this.resolvePairs = [];
        }
        var _proto13 = Subpass.prototype;
        _proto13.reset = function reset() {
          this.rasterViews.clear();
          this.computeViews.clear();
          this.resolvePairs.length = 0;
        };
        return Subpass;
      }()); //=================================================================
      // SubpassGraph
      //=================================================================
      // Graph Concept
      _export("SubpassGraphVertex", SubpassGraphVertex = function SubpassGraphVertex() {
        this._outEdges = [];
        this._inEdges = [];
      }); //-----------------------------------------------------------------
      // PropertyGraph Concept
      _export("SubpassGraphNameMap", SubpassGraphNameMap = /*#__PURE__*/function () {
        function SubpassGraphNameMap(names) {
          this._names = void 0;
          this.names = names;
          this._names = names;
        }
        var _proto14 = SubpassGraphNameMap.prototype;
        _proto14.get = function get(v) {
          return this._names[v];
        };
        _proto14.set = function set(v, names) {
          this._names[v] = names;
        };
        return SubpassGraphNameMap;
      }());
      _export("SubpassGraphSubpassMap", SubpassGraphSubpassMap = /*#__PURE__*/function () {
        function SubpassGraphSubpassMap(subpasses) {
          this._subpasses = void 0;
          this.subpasses = subpasses;
          this._subpasses = subpasses;
        }
        var _proto15 = SubpassGraphSubpassMap.prototype;
        _proto15.get = function get(v) {
          return this._subpasses[v];
        };
        return SubpassGraphSubpassMap;
      }()); //-----------------------------------------------------------------
      // ComponentGraph Concept
      _export("SubpassGraphComponent", SubpassGraphComponent = {
        Name: 0,
        Subpass: 1
      });
      //-----------------------------------------------------------------
      // SubpassGraph Implementation
      _export("SubpassGraph", SubpassGraph = /*#__PURE__*/function () {
        function SubpassGraph() {
          // type edge_descriptor = ED;
          this.directed_category = directional.bidirectional;
          this.edge_parallel_category = parallel.allow;
          this.traversal_category = traversal.incidence | traversal.bidirectional | traversal.adjacency | traversal.vertex_list;
          this.components = ['Name', 'Subpass'];
          this._vertices = [];
          this._names = [];
          this._subpasses = [];
        }
        var _proto16 = SubpassGraph.prototype;
        //-----------------------------------------------------------------
        // Graph
        // type vertex_descriptor = number;
        _proto16.nullVertex = function nullVertex() {
          return 0xFFFFFFFF;
        };
        //-----------------------------------------------------------------
        // IncidenceGraph
        // type out_edge_iterator = OutEI;
        // type degree_size_type = number;
        _proto16.edge = function edge(u, v) {
          for (var _iterator = _createForOfIteratorHelperLoose(this._vertices[u]._outEdges), _step; !(_step = _iterator()).done;) {
            var oe = _step.value;
            if (v === oe.target) {
              return true;
            }
          }
          return false;
        };
        _proto16.source = function source(e) {
          return e.source;
        };
        _proto16.target = function target(e) {
          return e.target;
        };
        _proto16.outEdges = function outEdges(v) {
          return new OutEI(this._vertices[v]._outEdges.values(), v);
        };
        _proto16.outDegree = function outDegree(v) {
          return this._vertices[v]._outEdges.length;
        }
        //-----------------------------------------------------------------
        // BidirectionalGraph
        // type in_edge_iterator = InEI;
        ;
        _proto16.inEdges = function inEdges(v) {
          return new InEI(this._vertices[v]._inEdges.values(), v);
        };
        _proto16.inDegree = function inDegree(v) {
          return this._vertices[v]._inEdges.length;
        };
        _proto16.degree = function degree(v) {
          return this.outDegree(v) + this.inDegree(v);
        }
        //-----------------------------------------------------------------
        // AdjacencyGraph
        // type adjacency_iterator = AdjI;
        ;
        _proto16.adjacentVertices = function adjacentVertices(v) {
          return new AdjI(this, this.outEdges(v));
        }
        //-----------------------------------------------------------------
        // VertexListGraph
        ;
        _proto16.vertices = function vertices() {
          return this._vertices.keys();
        };
        _proto16.numVertices = function numVertices() {
          return this._vertices.length;
        }
        //-----------------------------------------------------------------
        // EdgeListGraph
        ;
        _proto16.numEdges = function numEdges() {
          var numEdges = 0;
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.vertices()), _step2; !(_step2 = _iterator2()).done;) {
            var v = _step2.value;
            numEdges += this.outDegree(v);
          }
          return numEdges;
        }
        //-----------------------------------------------------------------
        // MutableGraph
        ;
        _proto16.clear = function clear() {
          // ComponentGraph
          this._names.length = 0;
          this._subpasses.length = 0;
          // Graph Vertices
          this._vertices.length = 0;
        };
        _proto16.addVertex = function addVertex(name, subpass) {
          var vert = new SubpassGraphVertex();
          var v = this._vertices.length;
          this._vertices.push(vert);
          this._names.push(name);
          this._subpasses.push(subpass);
          return v;
        };
        _proto16.clearVertex = function clearVertex(v) {
          var vert = this._vertices[v];
          // clear out edges
          for (var _iterator3 = _createForOfIteratorHelperLoose(vert._outEdges), _step3; !(_step3 = _iterator3()).done;) {
            var oe = _step3.value;
            var target = this._vertices[oe.target];
            for (var i = 0; i !== target._inEdges.length;) {
              // remove all edges
              if (target._inEdges[i].target === v) {
                target._inEdges.splice(i, 1);
              } else {
                ++i;
              }
            }
          }
          vert._outEdges.length = 0;

          // clear in edges
          for (var _iterator4 = _createForOfIteratorHelperLoose(vert._inEdges), _step4; !(_step4 = _iterator4()).done;) {
            var ie = _step4.value;
            var source = this._vertices[ie.target];
            for (var _i = 0; _i !== source._outEdges.length;) {
              // remove all edges
              if (source._outEdges[_i].target === v) {
                source._outEdges.splice(_i, 1);
              } else {
                ++_i;
              }
            }
          }
          vert._inEdges.length = 0;
        };
        _proto16.removeVertex = function removeVertex(u) {
          this._vertices.splice(u, 1);
          this._names.splice(u, 1);
          this._subpasses.splice(u, 1);
          var sz = this._vertices.length;
          if (u === sz) {
            return;
          }
          for (var v = 0; v !== sz; ++v) {
            var vert = this._vertices[v];
            reindexEdgeList(vert._outEdges, u);
            reindexEdgeList(vert._inEdges, u);
          }
        };
        _proto16.addEdge = function addEdge(u, v) {
          // update in/out edge list
          this._vertices[u]._outEdges.push(new OutE(v));
          this._vertices[v]._inEdges.push(new OutE(u));
          return new ED(u, v);
        };
        _proto16.removeEdges = function removeEdges(u, v) {
          var source = this._vertices[u];
          // remove out edges of u
          for (var i = 0; i !== source._outEdges.length;) {
            // remove all edges
            if (source._outEdges[i].target === v) {
              source._outEdges.splice(i, 1);
            } else {
              ++i;
            }
          }
          // remove in edges of v
          var target = this._vertices[v];
          for (var _i2 = 0; _i2 !== target._inEdges.length;) {
            // remove all edges
            if (target._inEdges[_i2].target === u) {
              target._inEdges.splice(_i2, 1);
            } else {
              ++_i2;
            }
          }
        };
        _proto16.removeEdge = function removeEdge(e) {
          var u = e.source;
          var v = e.target;
          var source = this._vertices[u];
          for (var i = 0; i !== source._outEdges.length;) {
            if (source._outEdges[i].target === v) {
              source._outEdges.splice(i, 1);
              break; // remove one edge
            } else {
              ++i;
            }
          }
          var target = this._vertices[v];
          for (var _i3 = 0; _i3 !== target._inEdges.length;) {
            if (target._inEdges[_i3].target === u) {
              target._inEdges.splice(_i3, 1);
              break; // remove one edge
            } else {
              ++_i3;
            }
          }
        }
        //-----------------------------------------------------------------
        // NamedGraph
        ;
        _proto16.vertexName = function vertexName(v) {
          return this._names[v];
        };
        _proto16.vertexNameMap = function vertexNameMap() {
          return new SubpassGraphNameMap(this._names);
        }
        //-----------------------------------------------------------------
        // PropertyGraph
        ;
        _proto16.get = function get(tag) {
          switch (tag) {
            // Components
            case 'Name':
              return new SubpassGraphNameMap(this._names);
            case 'Subpass':
              return new SubpassGraphSubpassMap(this._subpasses);
            default:
              throw Error('property map not found');
          }
        }
        //-----------------------------------------------------------------
        // ComponentGraph
        ;
        _proto16.component = function component(id, v) {
          switch (id) {
            case SubpassGraphComponent.Name:
              return this._names[v];
            case SubpassGraphComponent.Subpass:
              return this._subpasses[v];
            default:
              throw Error('component not found');
          }
        };
        _proto16.componentMap = function componentMap(id) {
          switch (id) {
            case SubpassGraphComponent.Name:
              return new SubpassGraphNameMap(this._names);
            case SubpassGraphComponent.Subpass:
              return new SubpassGraphSubpassMap(this._subpasses);
            default:
              throw Error('component map not found');
          }
        };
        _proto16.getName = function getName(v) {
          return this._names[v];
        };
        _proto16.setName = function setName(v, value) {
          this._names[v] = value;
        };
        _proto16.getSubpass = function getSubpass(v) {
          return this._subpasses[v];
        };
        return SubpassGraph;
      }());
      _export("RasterSubpass", RasterSubpass = /*#__PURE__*/function () {
        function RasterSubpass(subpassID, count, quality) {
          if (subpassID === void 0) {
            subpassID = 0xFFFFFFFF;
          }
          if (count === void 0) {
            count = 1;
          }
          if (quality === void 0) {
            quality = 0;
          }
          this.rasterViews = new Map();
          this.computeViews = new Map();
          this.resolvePairs = [];
          this.viewport = new Viewport();
          this.subpassID = void 0;
          this.count = void 0;
          this.quality = void 0;
          this.showStatistics = false;
          this.subpassID = subpassID;
          this.count = count;
          this.quality = quality;
        }
        var _proto17 = RasterSubpass.prototype;
        _proto17.reset = function reset(subpassID, count, quality) {
          if (subpassID === void 0) {
            subpassID = 0xFFFFFFFF;
          }
          if (count === void 0) {
            count = 1;
          }
          if (quality === void 0) {
            quality = 0;
          }
          this.rasterViews.clear();
          this.computeViews.clear();
          this.resolvePairs.length = 0;
          this.viewport.reset();
          this.subpassID = subpassID;
          this.count = count;
          this.quality = quality;
          this.showStatistics = false;
        };
        return RasterSubpass;
      }());
      _export("ComputeSubpass", ComputeSubpass = /*#__PURE__*/function () {
        function ComputeSubpass(subpassID) {
          if (subpassID === void 0) {
            subpassID = 0xFFFFFFFF;
          }
          this.rasterViews = new Map();
          this.computeViews = new Map();
          this.subpassID = void 0;
          this.subpassID = subpassID;
        }
        var _proto18 = ComputeSubpass.prototype;
        _proto18.reset = function reset(subpassID) {
          if (subpassID === void 0) {
            subpassID = 0xFFFFFFFF;
          }
          this.rasterViews.clear();
          this.computeViews.clear();
          this.subpassID = subpassID;
        };
        return ComputeSubpass;
      }());
      _export("RasterPass", RasterPass = /*#__PURE__*/function () {
        function RasterPass() {
          this.rasterViews = new Map();
          this.computeViews = new Map();
          this.attachmentIndexMap = new Map();
          this.textures = new Map();
          this.subpassGraph = new SubpassGraph();
          this.width = 0;
          this.height = 0;
          this.count = 1;
          this.quality = 0;
          this.viewport = new Viewport();
          this.versionName = '';
          this.version = 0;
          this.hashValue = 0;
          this.showStatistics = false;
        }
        var _proto19 = RasterPass.prototype;
        _proto19.reset = function reset() {
          this.rasterViews.clear();
          this.computeViews.clear();
          this.attachmentIndexMap.clear();
          this.textures.clear();
          this.subpassGraph.clear();
          this.width = 0;
          this.height = 0;
          this.count = 1;
          this.quality = 0;
          this.viewport.reset();
          this.versionName = '';
          this.version = 0;
          this.hashValue = 0;
          this.showStatistics = false;
        };
        return RasterPass;
      }());
      _export("PersistentRenderPassAndFramebuffer", PersistentRenderPassAndFramebuffer = /*#__PURE__*/function () {
        function PersistentRenderPassAndFramebuffer(renderPass, framebuffer) {
          if (renderPass === void 0) {
            renderPass = null;
          }
          if (framebuffer === void 0) {
            framebuffer = null;
          }
          /*refcount*/
          this.renderPass = void 0;
          /*refcount*/
          this.framebuffer = void 0;
          this.clearColors = [];
          this.clearDepth = 0;
          this.clearStencil = 0;
          this.renderPass = renderPass;
          this.framebuffer = framebuffer;
        }
        var _proto20 = PersistentRenderPassAndFramebuffer.prototype;
        _proto20.reset = function reset(renderPass, framebuffer) {
          if (renderPass === void 0) {
            renderPass = null;
          }
          if (framebuffer === void 0) {
            framebuffer = null;
          }
          this.renderPass = renderPass;
          this.framebuffer = framebuffer;
          this.clearColors.length = 0;
          this.clearDepth = 0;
          this.clearStencil = 0;
        };
        return PersistentRenderPassAndFramebuffer;
      }());
      _export("FormatView", FormatView = /*#__PURE__*/function () {
        function FormatView() {
          this.format = Format.UNKNOWN;
        }
        var _proto21 = FormatView.prototype;
        _proto21.reset = function reset() {
          this.format = Format.UNKNOWN;
        };
        return FormatView;
      }());
      _export("SubresourceView", SubresourceView = /*#__PURE__*/function () {
        function SubresourceView() {
          /*refcount*/
          this.textureView = null;
          this.format = Format.UNKNOWN;
          this.indexOrFirstMipLevel = 0;
          this.numMipLevels = 0;
          this.firstArraySlice = 0;
          this.numArraySlices = 0;
          this.firstPlane = 0;
          this.numPlanes = 0;
        }
        var _proto22 = SubresourceView.prototype;
        _proto22.reset = function reset() {
          this.textureView = null;
          this.format = Format.UNKNOWN;
          this.indexOrFirstMipLevel = 0;
          this.numMipLevels = 0;
          this.firstArraySlice = 0;
          this.numArraySlices = 0;
          this.firstPlane = 0;
          this.numPlanes = 0;
        };
        return SubresourceView;
      }()); //=================================================================
      // ResourceGraph
      //=================================================================
      // PolymorphicGraph Concept
      _export("ResourceGraphValue", ResourceGraphValue = {
        Managed: 0,
        ManagedBuffer: 1,
        ManagedTexture: 2,
        PersistentBuffer: 3,
        PersistentTexture: 4,
        Framebuffer: 5,
        Swapchain: 6,
        FormatView: 7,
        SubresourceView: 8
      });
      //-----------------------------------------------------------------
      // Graph Concept
      _export("ResourceGraphVertex", ResourceGraphVertex = function ResourceGraphVertex(id, object) {
        this._outEdges = [];
        this._inEdges = [];
        this._id = void 0;
        this._object = void 0;
        this.id = id;
        this.object = object;
        this._id = id;
        this._object = object;
      }); //-----------------------------------------------------------------
      // PropertyGraph Concept
      _export("ResourceGraphNameMap", ResourceGraphNameMap = /*#__PURE__*/function () {
        function ResourceGraphNameMap(names) {
          this._names = void 0;
          this.names = names;
          this._names = names;
        }
        var _proto23 = ResourceGraphNameMap.prototype;
        _proto23.get = function get(v) {
          return this._names[v];
        };
        _proto23.set = function set(v, names) {
          this._names[v] = names;
        };
        return ResourceGraphNameMap;
      }());
      _export("ResourceGraphDescMap", ResourceGraphDescMap = /*#__PURE__*/function () {
        function ResourceGraphDescMap(descs) {
          this._descs = void 0;
          this.descs = descs;
          this._descs = descs;
        }
        var _proto24 = ResourceGraphDescMap.prototype;
        _proto24.get = function get(v) {
          return this._descs[v];
        };
        return ResourceGraphDescMap;
      }());
      _export("ResourceGraphTraitsMap", ResourceGraphTraitsMap = /*#__PURE__*/function () {
        function ResourceGraphTraitsMap(traits) {
          this._traits = void 0;
          this.traits = traits;
          this._traits = traits;
        }
        var _proto25 = ResourceGraphTraitsMap.prototype;
        _proto25.get = function get(v) {
          return this._traits[v];
        };
        return ResourceGraphTraitsMap;
      }());
      _export("ResourceGraphStatesMap", ResourceGraphStatesMap = /*#__PURE__*/function () {
        function ResourceGraphStatesMap(states) {
          this._states = void 0;
          this.states = states;
          this._states = states;
        }
        var _proto26 = ResourceGraphStatesMap.prototype;
        _proto26.get = function get(v) {
          return this._states[v];
        };
        return ResourceGraphStatesMap;
      }());
      _export("ResourceGraphSamplerMap", ResourceGraphSamplerMap = /*#__PURE__*/function () {
        function ResourceGraphSamplerMap(samplerInfo) {
          this._samplerInfo = void 0;
          this.samplerInfo = samplerInfo;
          this._samplerInfo = samplerInfo;
        }
        var _proto27 = ResourceGraphSamplerMap.prototype;
        _proto27.get = function get(v) {
          return this._samplerInfo[v];
        };
        return ResourceGraphSamplerMap;
      }()); //-----------------------------------------------------------------
      // ComponentGraph Concept
      _export("ResourceGraphComponent", ResourceGraphComponent = {
        Name: 0,
        Desc: 1,
        Traits: 2,
        States: 3,
        Sampler: 4
      });
      //-----------------------------------------------------------------
      // ResourceGraph Implementation
      _export("ResourceGraph", ResourceGraph = /*#__PURE__*/function () {
        function ResourceGraph() {
          // type edge_descriptor = ED;
          this.directed_category = directional.bidirectional;
          this.edge_parallel_category = parallel.allow;
          this.traversal_category = traversal.incidence | traversal.bidirectional | traversal.adjacency | traversal.vertex_list;
          this.components = ['Name', 'Desc', 'Traits', 'States', 'Sampler'];
          this._vertices = [];
          this._names = [];
          this._descs = [];
          this._traits = [];
          this._states = [];
          this._samplerInfo = [];
          this._valueIndex = new Map();
          this.renderPasses = new Map();
          this.nextFenceValue = 0;
          this.version = 0;
        }
        var _proto28 = ResourceGraph.prototype;
        //-----------------------------------------------------------------
        // Graph
        // type vertex_descriptor = number;
        _proto28.nullVertex = function nullVertex() {
          return 0xFFFFFFFF;
        };
        //-----------------------------------------------------------------
        // IncidenceGraph
        // type out_edge_iterator = OutEI;
        // type degree_size_type = number;
        _proto28.edge = function edge(u, v) {
          for (var _iterator5 = _createForOfIteratorHelperLoose(this._vertices[u]._outEdges), _step5; !(_step5 = _iterator5()).done;) {
            var oe = _step5.value;
            if (v === oe.target) {
              return true;
            }
          }
          return false;
        };
        _proto28.source = function source(e) {
          return e.source;
        };
        _proto28.target = function target(e) {
          return e.target;
        };
        _proto28.outEdges = function outEdges(v) {
          return new OutEI(this._vertices[v]._outEdges.values(), v);
        };
        _proto28.outDegree = function outDegree(v) {
          return this._vertices[v]._outEdges.length;
        }
        //-----------------------------------------------------------------
        // BidirectionalGraph
        // type in_edge_iterator = InEI;
        ;
        _proto28.inEdges = function inEdges(v) {
          return new InEI(this._vertices[v]._inEdges.values(), v);
        };
        _proto28.inDegree = function inDegree(v) {
          return this._vertices[v]._inEdges.length;
        };
        _proto28.degree = function degree(v) {
          return this.outDegree(v) + this.inDegree(v);
        }
        //-----------------------------------------------------------------
        // AdjacencyGraph
        // type adjacency_iterator = AdjI;
        ;
        _proto28.adjacentVertices = function adjacentVertices(v) {
          return new AdjI(this, this.outEdges(v));
        }
        //-----------------------------------------------------------------
        // VertexListGraph
        ;
        _proto28.vertices = function vertices() {
          return this._vertices.keys();
        };
        _proto28.numVertices = function numVertices() {
          return this._vertices.length;
        }
        //-----------------------------------------------------------------
        // EdgeListGraph
        ;
        _proto28.numEdges = function numEdges() {
          var numEdges = 0;
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.vertices()), _step6; !(_step6 = _iterator6()).done;) {
            var v = _step6.value;
            numEdges += this.outDegree(v);
          }
          return numEdges;
        }
        //-----------------------------------------------------------------
        // MutableGraph
        ;
        _proto28.clear = function clear() {
          // Members
          this.renderPasses.clear();
          this.nextFenceValue = 0;
          this.version = 0;
          // UuidGraph
          this._valueIndex.clear();
          // ComponentGraph
          this._names.length = 0;
          this._descs.length = 0;
          this._traits.length = 0;
          this._states.length = 0;
          this._samplerInfo.length = 0;
          // Graph Vertices
          this._vertices.length = 0;
        };
        _proto28.addVertex = function addVertex(id, object, name, desc, traits, states, sampler, u) {
          if (u === void 0) {
            u = 0xFFFFFFFF;
          }
          var vert = new ResourceGraphVertex(id, object);
          var v = this._vertices.length;
          this._vertices.push(vert);
          this._names.push(name);
          this._descs.push(desc);
          this._traits.push(traits);
          this._states.push(states);
          this._samplerInfo.push(sampler);
          // UuidGraph
          this._valueIndex.set(name, v);

          // ReferenceGraph
          if (u !== 0xFFFFFFFF) {
            this.addEdge(u, v);
          }
          return v;
        };
        _proto28.clearVertex = function clearVertex(v) {
          // ReferenceGraph(Alias)
          var vert = this._vertices[v];
          // clear out edges
          for (var _iterator7 = _createForOfIteratorHelperLoose(vert._outEdges), _step7; !(_step7 = _iterator7()).done;) {
            var oe = _step7.value;
            var target = this._vertices[oe.target];
            for (var i = 0; i !== target._inEdges.length;) {
              // remove all edges
              if (target._inEdges[i].target === v) {
                target._inEdges.splice(i, 1);
              } else {
                ++i;
              }
            }
          }
          vert._outEdges.length = 0;

          // clear in edges
          for (var _iterator8 = _createForOfIteratorHelperLoose(vert._inEdges), _step8; !(_step8 = _iterator8()).done;) {
            var ie = _step8.value;
            var source = this._vertices[ie.target];
            for (var _i4 = 0; _i4 !== source._outEdges.length;) {
              // remove all edges
              if (source._outEdges[_i4].target === v) {
                source._outEdges.splice(_i4, 1);
              } else {
                ++_i4;
              }
            }
          }
          vert._inEdges.length = 0;
        };
        _proto28.removeVertex = function removeVertex(u) {
          {
            // UuidGraph
            var key = this._names[u];
            this._valueIndex["delete"](key);
            this._valueIndex.forEach(function (v) {
              if (v > u) {
                --v;
              }
            });
          }
          this._vertices.splice(u, 1);
          this._names.splice(u, 1);
          this._descs.splice(u, 1);
          this._traits.splice(u, 1);
          this._states.splice(u, 1);
          this._samplerInfo.splice(u, 1);
          var sz = this._vertices.length;
          if (u === sz) {
            return;
          }
          for (var v = 0; v !== sz; ++v) {
            var vert = this._vertices[v];
            reindexEdgeList(vert._outEdges, u);
            reindexEdgeList(vert._inEdges, u);
          }
        };
        _proto28.addEdge = function addEdge(u, v) {
          // update in/out edge list
          this._vertices[u]._outEdges.push(new OutE(v));
          this._vertices[v]._inEdges.push(new OutE(u));
          return new ED(u, v);
        };
        _proto28.removeEdges = function removeEdges(u, v) {
          var source = this._vertices[u];
          // remove out edges of u
          for (var i = 0; i !== source._outEdges.length;) {
            // remove all edges
            if (source._outEdges[i].target === v) {
              source._outEdges.splice(i, 1);
            } else {
              ++i;
            }
          }
          // remove in edges of v
          var target = this._vertices[v];
          for (var _i5 = 0; _i5 !== target._inEdges.length;) {
            // remove all edges
            if (target._inEdges[_i5].target === u) {
              target._inEdges.splice(_i5, 1);
            } else {
              ++_i5;
            }
          }
        };
        _proto28.removeEdge = function removeEdge(e) {
          var u = e.source;
          var v = e.target;
          var source = this._vertices[u];
          for (var i = 0; i !== source._outEdges.length;) {
            if (source._outEdges[i].target === v) {
              source._outEdges.splice(i, 1);
              break; // remove one edge
            } else {
              ++i;
            }
          }
          var target = this._vertices[v];
          for (var _i6 = 0; _i6 !== target._inEdges.length;) {
            if (target._inEdges[_i6].target === u) {
              target._inEdges.splice(_i6, 1);
              break; // remove one edge
            } else {
              ++_i6;
            }
          }
        }
        //-----------------------------------------------------------------
        // NamedGraph
        ;
        _proto28.vertexName = function vertexName(v) {
          return this._names[v];
        };
        _proto28.vertexNameMap = function vertexNameMap() {
          return new ResourceGraphNameMap(this._names);
        }
        //-----------------------------------------------------------------
        // PropertyGraph
        ;
        _proto28.get = function get(tag) {
          switch (tag) {
            // Components
            case 'Name':
              return new ResourceGraphNameMap(this._names);
            case 'Desc':
              return new ResourceGraphDescMap(this._descs);
            case 'Traits':
              return new ResourceGraphTraitsMap(this._traits);
            case 'States':
              return new ResourceGraphStatesMap(this._states);
            case 'Sampler':
              return new ResourceGraphSamplerMap(this._samplerInfo);
            default:
              throw Error('property map not found');
          }
        }
        //-----------------------------------------------------------------
        // ComponentGraph
        ;
        _proto28.component = function component(id, v) {
          switch (id) {
            case ResourceGraphComponent.Name:
              return this._names[v];
            case ResourceGraphComponent.Desc:
              return this._descs[v];
            case ResourceGraphComponent.Traits:
              return this._traits[v];
            case ResourceGraphComponent.States:
              return this._states[v];
            case ResourceGraphComponent.Sampler:
              return this._samplerInfo[v];
            default:
              throw Error('component not found');
          }
        };
        _proto28.componentMap = function componentMap(id) {
          switch (id) {
            case ResourceGraphComponent.Name:
              return new ResourceGraphNameMap(this._names);
            case ResourceGraphComponent.Desc:
              return new ResourceGraphDescMap(this._descs);
            case ResourceGraphComponent.Traits:
              return new ResourceGraphTraitsMap(this._traits);
            case ResourceGraphComponent.States:
              return new ResourceGraphStatesMap(this._states);
            case ResourceGraphComponent.Sampler:
              return new ResourceGraphSamplerMap(this._samplerInfo);
            default:
              throw Error('component map not found');
          }
        };
        _proto28.getName = function getName(v) {
          return this._names[v];
        };
        _proto28.setName = function setName(v, value) {
          this._names[v] = value;
        };
        _proto28.getDesc = function getDesc(v) {
          return this._descs[v];
        };
        _proto28.getTraits = function getTraits(v) {
          return this._traits[v];
        };
        _proto28.getStates = function getStates(v) {
          return this._states[v];
        };
        _proto28.getSampler = function getSampler(v) {
          return this._samplerInfo[v];
        }
        //-----------------------------------------------------------------
        // PolymorphicGraph
        ;
        _proto28.holds = function holds(id, v) {
          return this._vertices[v]._id === id;
        };
        _proto28.id = function id(v) {
          return this._vertices[v]._id;
        };
        _proto28.object = function object(v) {
          return this._vertices[v]._object;
        };
        _proto28.value = function value(id, v) {
          if (this._vertices[v]._id === id) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto28.tryValue = function tryValue(id, v) {
          if (this._vertices[v]._id === id) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto28.visitVertex = function visitVertex(visitor, v) {
          var vert = this._vertices[v];
          switch (vert._id) {
            case ResourceGraphValue.Managed:
              return visitor.managed(vert._object);
            case ResourceGraphValue.ManagedBuffer:
              return visitor.managedBuffer(vert._object);
            case ResourceGraphValue.ManagedTexture:
              return visitor.managedTexture(vert._object);
            case ResourceGraphValue.PersistentBuffer:
              return visitor.persistentBuffer(vert._object);
            case ResourceGraphValue.PersistentTexture:
              return visitor.persistentTexture(vert._object);
            case ResourceGraphValue.Framebuffer:
              return visitor.framebuffer(vert._object);
            case ResourceGraphValue.Swapchain:
              return visitor.swapchain(vert._object);
            case ResourceGraphValue.FormatView:
              return visitor.formatView(vert._object);
            case ResourceGraphValue.SubresourceView:
              return visitor.subresourceView(vert._object);
            default:
              throw Error('polymorphic type not found');
          }
        };
        _proto28.getManaged = function getManaged(v) {
          if (this._vertices[v]._id === ResourceGraphValue.Managed) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto28.getManagedBuffer = function getManagedBuffer(v) {
          if (this._vertices[v]._id === ResourceGraphValue.ManagedBuffer) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto28.getManagedTexture = function getManagedTexture(v) {
          if (this._vertices[v]._id === ResourceGraphValue.ManagedTexture) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto28.getPersistentBuffer = function getPersistentBuffer(v) {
          if (this._vertices[v]._id === ResourceGraphValue.PersistentBuffer) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto28.getPersistentTexture = function getPersistentTexture(v) {
          if (this._vertices[v]._id === ResourceGraphValue.PersistentTexture) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto28.getFramebuffer = function getFramebuffer(v) {
          if (this._vertices[v]._id === ResourceGraphValue.Framebuffer) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto28.getSwapchain = function getSwapchain(v) {
          if (this._vertices[v]._id === ResourceGraphValue.Swapchain) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto28.getFormatView = function getFormatView(v) {
          if (this._vertices[v]._id === ResourceGraphValue.FormatView) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto28.getSubresourceView = function getSubresourceView(v) {
          if (this._vertices[v]._id === ResourceGraphValue.SubresourceView) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto28.tryGetManaged = function tryGetManaged(v) {
          if (this._vertices[v]._id === ResourceGraphValue.Managed) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto28.tryGetManagedBuffer = function tryGetManagedBuffer(v) {
          if (this._vertices[v]._id === ResourceGraphValue.ManagedBuffer) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto28.tryGetManagedTexture = function tryGetManagedTexture(v) {
          if (this._vertices[v]._id === ResourceGraphValue.ManagedTexture) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto28.tryGetPersistentBuffer = function tryGetPersistentBuffer(v) {
          if (this._vertices[v]._id === ResourceGraphValue.PersistentBuffer) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto28.tryGetPersistentTexture = function tryGetPersistentTexture(v) {
          if (this._vertices[v]._id === ResourceGraphValue.PersistentTexture) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto28.tryGetFramebuffer = function tryGetFramebuffer(v) {
          if (this._vertices[v]._id === ResourceGraphValue.Framebuffer) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto28.tryGetSwapchain = function tryGetSwapchain(v) {
          if (this._vertices[v]._id === ResourceGraphValue.Swapchain) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto28.tryGetFormatView = function tryGetFormatView(v) {
          if (this._vertices[v]._id === ResourceGraphValue.FormatView) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto28.tryGetSubresourceView = function tryGetSubresourceView(v) {
          if (this._vertices[v]._id === ResourceGraphValue.SubresourceView) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        //-----------------------------------------------------------------
        // ReferenceGraph
        // type reference_descriptor = ED;
        // type child_iterator = OutEI;
        // type parent_iterator = InEI;
        ;
        _proto28.reference = function reference(u, v) {
          for (var _iterator9 = _createForOfIteratorHelperLoose(this._vertices[u]._outEdges), _step9; !(_step9 = _iterator9()).done;) {
            var oe = _step9.value;
            if (v === oe.target) {
              return true;
            }
          }
          return false;
        };
        _proto28.parent = function parent(e) {
          return e.source;
        };
        _proto28.child = function child(e) {
          return e.target;
        };
        _proto28.parents = function parents(v) {
          return new InEI(this._vertices[v]._inEdges.values(), v);
        };
        _proto28.children = function children(v) {
          return new OutEI(this._vertices[v]._outEdges.values(), v);
        };
        _proto28.numParents = function numParents(v) {
          return this._vertices[v]._inEdges.length;
        };
        _proto28.numChildren = function numChildren(v) {
          return this._vertices[v]._outEdges.length;
        };
        _proto28.getParent = function getParent(v) {
          if (v === 0xFFFFFFFF) {
            return 0xFFFFFFFF;
          }
          var list = this._vertices[v]._inEdges;
          if (list.length === 0) {
            return 0xFFFFFFFF;
          } else {
            return list[0].target;
          }
        };
        _proto28.isAncestor = function isAncestor(ancestor, descendent) {
          var pseudo = 0xFFFFFFFF;
          if (ancestor === descendent) {
            // when ancestor === descendent, is_ancestor is defined as false
            return false;
          }
          if (ancestor === pseudo) {
            // special case: pseudo root is always ancestor
            return true;
          }
          if (descendent === pseudo) {
            // special case: pseudo root is never descendent
            return false;
          }
          for (var parent = this.getParent(descendent); parent !== pseudo;) {
            if (ancestor === parent) {
              return true;
            }
            parent = this.getParent(parent);
          }
          return false;
        }
        //-----------------------------------------------------------------
        // MutableReferenceGraph
        ;
        _proto28.addReference = function addReference(u, v) {
          return this.addEdge(u, v);
        };
        _proto28.removeReference = function removeReference(e) {
          return this.removeEdge(e);
        };
        _proto28.removeReferences = function removeReferences(u, v) {
          return this.removeEdges(u, v);
        }
        //-----------------------------------------------------------------
        // UuidGraph
        ;
        _proto28.contains = function contains(key) {
          return this._valueIndex.has(key);
        };
        _proto28.vertex = function vertex(key) {
          return this._valueIndex.get(key);
        };
        _proto28.find = function find(key) {
          var v = this._valueIndex.get(key);
          if (v === undefined) return 0xFFFFFFFF;
          return v;
        };
        return ResourceGraph;
      }());
      _export("ComputePass", ComputePass = /*#__PURE__*/function () {
        function ComputePass() {
          this.computeViews = new Map();
          this.textures = new Map();
        }
        var _proto29 = ComputePass.prototype;
        _proto29.reset = function reset() {
          this.computeViews.clear();
          this.textures.clear();
        };
        return ComputePass;
      }());
      _export("ResolvePass", ResolvePass = /*#__PURE__*/function () {
        function ResolvePass() {
          this.resolvePairs = [];
        }
        var _proto30 = ResolvePass.prototype;
        _proto30.reset = function reset() {
          this.resolvePairs.length = 0;
        };
        return ResolvePass;
      }());
      _export("CopyPass", CopyPass = /*#__PURE__*/function () {
        function CopyPass() {
          this.copyPairs = [];
          this.uploadPairs = [];
        }
        var _proto31 = CopyPass.prototype;
        _proto31.reset = function reset() {
          this.copyPairs.length = 0;
          this.uploadPairs.length = 0;
        };
        return CopyPass;
      }());
      _export("MovePass", MovePass = /*#__PURE__*/function () {
        function MovePass() {
          this.movePairs = [];
        }
        var _proto32 = MovePass.prototype;
        _proto32.reset = function reset() {
          this.movePairs.length = 0;
        };
        return MovePass;
      }());
      _export("RaytracePass", RaytracePass = /*#__PURE__*/function () {
        function RaytracePass() {
          this.computeViews = new Map();
        }
        var _proto33 = RaytracePass.prototype;
        _proto33.reset = function reset() {
          this.computeViews.clear();
        };
        return RaytracePass;
      }());
      _export("ClearView", ClearView = /*#__PURE__*/function () {
        function ClearView(slotName, clearFlags, clearColor) {
          if (slotName === void 0) {
            slotName = '';
          }
          if (clearFlags === void 0) {
            clearFlags = ClearFlagBit.ALL;
          }
          if (clearColor === void 0) {
            clearColor = new Color();
          }
          this.slotName = void 0;
          this.clearFlags = void 0;
          this.clearColor = void 0;
          this.slotName = slotName;
          this.clearFlags = clearFlags;
          this.clearColor = clearColor;
        }
        var _proto34 = ClearView.prototype;
        _proto34.reset = function reset(slotName, clearFlags) {
          if (slotName === void 0) {
            slotName = '';
          }
          if (clearFlags === void 0) {
            clearFlags = ClearFlagBit.ALL;
          }
          this.slotName = slotName;
          this.clearFlags = clearFlags;
          this.clearColor.reset();
        };
        return ClearView;
      }());
      _export("RenderQueue", RenderQueue = /*#__PURE__*/function () {
        function RenderQueue(hint, phaseID) {
          if (hint === void 0) {
            hint = QueueHint.RENDER_OPAQUE;
          }
          if (phaseID === void 0) {
            phaseID = 0xFFFFFFFF;
          }
          this.hint = void 0;
          this.phaseID = void 0;
          this.viewport = null;
          this.hint = hint;
          this.phaseID = phaseID;
        }
        var _proto35 = RenderQueue.prototype;
        _proto35.reset = function reset(hint, phaseID) {
          if (hint === void 0) {
            hint = QueueHint.RENDER_OPAQUE;
          }
          if (phaseID === void 0) {
            phaseID = 0xFFFFFFFF;
          }
          this.hint = hint;
          this.phaseID = phaseID;
          this.viewport = null;
        };
        return RenderQueue;
      }());
      (function (CullingFlags) {
        CullingFlags[CullingFlags["NONE"] = 0] = "NONE";
        CullingFlags[CullingFlags["CAMERA_FRUSTUM"] = 1] = "CAMERA_FRUSTUM";
        CullingFlags[CullingFlags["LIGHT_FRUSTUM"] = 2] = "LIGHT_FRUSTUM";
        CullingFlags[CullingFlags["LIGHT_BOUNDS"] = 4] = "LIGHT_BOUNDS";
      })(CullingFlags || _export("CullingFlags", CullingFlags = {}));
      _export("SceneData", SceneData = /*#__PURE__*/function () {
        function SceneData(scene, camera, flags, light, cullingFlags, shadingLight) {
          if (scene === void 0) {
            scene = null;
          }
          if (camera === void 0) {
            camera = null;
          }
          if (flags === void 0) {
            flags = SceneFlags.NONE;
          }
          if (light === void 0) {
            light = new LightInfo();
          }
          if (cullingFlags === void 0) {
            cullingFlags = CullingFlags.CAMERA_FRUSTUM;
          }
          if (shadingLight === void 0) {
            shadingLight = null;
          }
          /*pointer*/
          this.scene = void 0;
          /*pointer*/
          this.camera = void 0;
          this.light = void 0;
          this.flags = void 0;
          this.cullingFlags = void 0;
          /*refcount*/
          this.shadingLight = void 0;
          this.scene = scene;
          this.camera = camera;
          this.light = light;
          this.flags = flags;
          this.cullingFlags = cullingFlags;
          this.shadingLight = shadingLight;
        }
        var _proto36 = SceneData.prototype;
        _proto36.reset = function reset(scene, camera, flags, cullingFlags, shadingLight) {
          if (scene === void 0) {
            scene = null;
          }
          if (camera === void 0) {
            camera = null;
          }
          if (flags === void 0) {
            flags = SceneFlags.NONE;
          }
          if (cullingFlags === void 0) {
            cullingFlags = CullingFlags.CAMERA_FRUSTUM;
          }
          if (shadingLight === void 0) {
            shadingLight = null;
          }
          this.scene = scene;
          this.camera = camera;
          this.light.reset();
          this.flags = flags;
          this.cullingFlags = cullingFlags;
          this.shadingLight = shadingLight;
        };
        return SceneData;
      }());
      _export("Dispatch", Dispatch = /*#__PURE__*/function () {
        function Dispatch(material, passID, threadGroupCountX, threadGroupCountY, threadGroupCountZ) {
          if (material === void 0) {
            material = null;
          }
          if (passID === void 0) {
            passID = 0;
          }
          if (threadGroupCountX === void 0) {
            threadGroupCountX = 0;
          }
          if (threadGroupCountY === void 0) {
            threadGroupCountY = 0;
          }
          if (threadGroupCountZ === void 0) {
            threadGroupCountZ = 0;
          }
          /*refcount*/
          this.material = void 0;
          this.passID = void 0;
          this.threadGroupCountX = void 0;
          this.threadGroupCountY = void 0;
          this.threadGroupCountZ = void 0;
          this.material = material;
          this.passID = passID;
          this.threadGroupCountX = threadGroupCountX;
          this.threadGroupCountY = threadGroupCountY;
          this.threadGroupCountZ = threadGroupCountZ;
        }
        var _proto37 = Dispatch.prototype;
        _proto37.reset = function reset(material, passID, threadGroupCountX, threadGroupCountY, threadGroupCountZ) {
          if (material === void 0) {
            material = null;
          }
          if (passID === void 0) {
            passID = 0;
          }
          if (threadGroupCountX === void 0) {
            threadGroupCountX = 0;
          }
          if (threadGroupCountY === void 0) {
            threadGroupCountY = 0;
          }
          if (threadGroupCountZ === void 0) {
            threadGroupCountZ = 0;
          }
          this.material = material;
          this.passID = passID;
          this.threadGroupCountX = threadGroupCountX;
          this.threadGroupCountY = threadGroupCountY;
          this.threadGroupCountZ = threadGroupCountZ;
        };
        return Dispatch;
      }());
      _export("Blit", Blit = /*#__PURE__*/function () {
        function Blit(material, passID, sceneFlags, camera) {
          if (material === void 0) {
            material = null;
          }
          if (passID === void 0) {
            passID = 0;
          }
          if (sceneFlags === void 0) {
            sceneFlags = SceneFlags.NONE;
          }
          if (camera === void 0) {
            camera = null;
          }
          /*refcount*/
          this.material = void 0;
          this.passID = void 0;
          this.sceneFlags = void 0;
          /*pointer*/
          this.camera = void 0;
          this.material = material;
          this.passID = passID;
          this.sceneFlags = sceneFlags;
          this.camera = camera;
        }
        var _proto38 = Blit.prototype;
        _proto38.reset = function reset(material, passID, sceneFlags, camera) {
          if (material === void 0) {
            material = null;
          }
          if (passID === void 0) {
            passID = 0;
          }
          if (sceneFlags === void 0) {
            sceneFlags = SceneFlags.NONE;
          }
          if (camera === void 0) {
            camera = null;
          }
          this.material = material;
          this.passID = passID;
          this.sceneFlags = sceneFlags;
          this.camera = camera;
        };
        return Blit;
      }());
      _export("RenderData", RenderData = /*#__PURE__*/function () {
        function RenderData() {
          this.constants = new Map();
          this.buffers = new Map();
          this.textures = new Map();
          this.samplers = new Map();
          this.custom = '';
        }
        var _proto39 = RenderData.prototype;
        _proto39.reset = function reset() {
          this.constants.clear();
          this.buffers.clear();
          this.textures.clear();
          this.samplers.clear();
          this.custom = '';
        };
        return RenderData;
      }()); //=================================================================
      // RenderGraph
      //=================================================================
      // PolymorphicGraph Concept
      _export("RenderGraphValue", RenderGraphValue = {
        RasterPass: 0,
        RasterSubpass: 1,
        ComputeSubpass: 2,
        Compute: 3,
        Resolve: 4,
        Copy: 5,
        Move: 6,
        Raytrace: 7,
        Queue: 8,
        Scene: 9,
        Blit: 10,
        Dispatch: 11,
        Clear: 12,
        Viewport: 13
      });
      //-----------------------------------------------------------------
      // Graph Concept
      _export("RenderGraphVertex", RenderGraphVertex = function RenderGraphVertex(id, object) {
        this._outEdges = [];
        this._inEdges = [];
        this._children = [];
        this._parents = [];
        this._id = void 0;
        this._object = void 0;
        this.id = id;
        this.object = object;
        this._id = id;
        this._object = object;
      }); //-----------------------------------------------------------------
      // PropertyGraph Concept
      _export("RenderGraphNameMap", RenderGraphNameMap = /*#__PURE__*/function () {
        function RenderGraphNameMap(names) {
          this._names = void 0;
          this.names = names;
          this._names = names;
        }
        var _proto40 = RenderGraphNameMap.prototype;
        _proto40.get = function get(v) {
          return this._names[v];
        };
        _proto40.set = function set(v, names) {
          this._names[v] = names;
        };
        return RenderGraphNameMap;
      }());
      _export("RenderGraphLayoutMap", RenderGraphLayoutMap = /*#__PURE__*/function () {
        function RenderGraphLayoutMap(layoutNodes) {
          this._layoutNodes = void 0;
          this.layoutNodes = layoutNodes;
          this._layoutNodes = layoutNodes;
        }
        var _proto41 = RenderGraphLayoutMap.prototype;
        _proto41.get = function get(v) {
          return this._layoutNodes[v];
        };
        _proto41.set = function set(v, layoutNodes) {
          this._layoutNodes[v] = layoutNodes;
        };
        return RenderGraphLayoutMap;
      }());
      _export("RenderGraphDataMap", RenderGraphDataMap = /*#__PURE__*/function () {
        function RenderGraphDataMap(data) {
          this._data = void 0;
          this.data = data;
          this._data = data;
        }
        var _proto42 = RenderGraphDataMap.prototype;
        _proto42.get = function get(v) {
          return this._data[v];
        };
        return RenderGraphDataMap;
      }());
      _export("RenderGraphValidMap", RenderGraphValidMap = /*#__PURE__*/function () {
        function RenderGraphValidMap(valid) {
          this._valid = void 0;
          this.valid = valid;
          this._valid = valid;
        }
        var _proto43 = RenderGraphValidMap.prototype;
        _proto43.get = function get(v) {
          return this._valid[v];
        };
        _proto43.set = function set(v, valid) {
          this._valid[v] = valid;
        };
        return RenderGraphValidMap;
      }()); //-----------------------------------------------------------------
      // ComponentGraph Concept
      _export("RenderGraphComponent", RenderGraphComponent = {
        Name: 0,
        Layout: 1,
        Data: 2,
        Valid: 3
      });
      //-----------------------------------------------------------------
      // RenderGraph Implementation
      _export("RenderGraph", RenderGraph = /*#__PURE__*/function () {
        function RenderGraph() {
          // type edge_descriptor = ED;
          this.directed_category = directional.bidirectional;
          this.edge_parallel_category = parallel.allow;
          this.traversal_category = traversal.incidence | traversal.bidirectional | traversal.adjacency | traversal.vertex_list;
          this.components = ['Name', 'Layout', 'Data', 'Valid'];
          this._vertices = [];
          this._names = [];
          this._layoutNodes = [];
          this._data = [];
          this._valid = [];
          this.index = new Map();
          this.sortedVertices = [];
        }
        var _proto44 = RenderGraph.prototype;
        //-----------------------------------------------------------------
        // Graph
        // type vertex_descriptor = number;
        _proto44.nullVertex = function nullVertex() {
          return 0xFFFFFFFF;
        };
        //-----------------------------------------------------------------
        // IncidenceGraph
        // type out_edge_iterator = OutEI;
        // type degree_size_type = number;
        _proto44.edge = function edge(u, v) {
          for (var _iterator10 = _createForOfIteratorHelperLoose(this._vertices[u]._outEdges), _step10; !(_step10 = _iterator10()).done;) {
            var oe = _step10.value;
            if (v === oe.target) {
              return true;
            }
          }
          return false;
        };
        _proto44.source = function source(e) {
          return e.source;
        };
        _proto44.target = function target(e) {
          return e.target;
        };
        _proto44.outEdges = function outEdges(v) {
          return new OutEI(this._vertices[v]._outEdges.values(), v);
        };
        _proto44.outDegree = function outDegree(v) {
          return this._vertices[v]._outEdges.length;
        }
        //-----------------------------------------------------------------
        // BidirectionalGraph
        // type in_edge_iterator = InEI;
        ;
        _proto44.inEdges = function inEdges(v) {
          return new InEI(this._vertices[v]._inEdges.values(), v);
        };
        _proto44.inDegree = function inDegree(v) {
          return this._vertices[v]._inEdges.length;
        };
        _proto44.degree = function degree(v) {
          return this.outDegree(v) + this.inDegree(v);
        }
        //-----------------------------------------------------------------
        // AdjacencyGraph
        // type adjacency_iterator = AdjI;
        ;
        _proto44.adjacentVertices = function adjacentVertices(v) {
          return new AdjI(this, this.outEdges(v));
        }
        //-----------------------------------------------------------------
        // VertexListGraph
        ;
        _proto44.vertices = function vertices() {
          return this._vertices.keys();
        };
        _proto44.numVertices = function numVertices() {
          return this._vertices.length;
        }
        //-----------------------------------------------------------------
        // EdgeListGraph
        ;
        _proto44.numEdges = function numEdges() {
          var numEdges = 0;
          for (var _iterator11 = _createForOfIteratorHelperLoose(this.vertices()), _step11; !(_step11 = _iterator11()).done;) {
            var v = _step11.value;
            numEdges += this.outDegree(v);
          }
          return numEdges;
        }
        //-----------------------------------------------------------------
        // MutableGraph
        ;
        _proto44.clear = function clear() {
          // Members
          this.index.clear();
          this.sortedVertices.length = 0;
          // ComponentGraph
          this._names.length = 0;
          this._layoutNodes.length = 0;
          this._data.length = 0;
          this._valid.length = 0;
          // Graph Vertices
          this._vertices.length = 0;
        };
        _proto44.addVertex = function addVertex(id, object, name, layout, data, valid, u) {
          if (u === void 0) {
            u = 0xFFFFFFFF;
          }
          var vert = new RenderGraphVertex(id, object);
          var v = this._vertices.length;
          this._vertices.push(vert);
          this._names.push(name);
          this._layoutNodes.push(layout);
          this._data.push(data);
          this._valid.push(valid);

          // ReferenceGraph
          if (u !== 0xFFFFFFFF) {
            this._vertices[u]._children.push(new OutE(v));
            vert._parents.push(new OutE(u));
          }
          return v;
        };
        _proto44.clearVertex = function clearVertex(v) {
          // ReferenceGraph(Separated)
          var vert = this._vertices[v];
          // clear out edges
          for (var _iterator12 = _createForOfIteratorHelperLoose(vert._outEdges), _step12; !(_step12 = _iterator12()).done;) {
            var oe = _step12.value;
            var target = this._vertices[oe.target];
            for (var i = 0; i !== target._inEdges.length;) {
              // remove all edges
              if (target._inEdges[i].target === v) {
                target._inEdges.splice(i, 1);
              } else {
                ++i;
              }
            }
          }
          vert._outEdges.length = 0;

          // clear in edges
          for (var _iterator13 = _createForOfIteratorHelperLoose(vert._inEdges), _step13; !(_step13 = _iterator13()).done;) {
            var ie = _step13.value;
            var source = this._vertices[ie.target];
            for (var _i7 = 0; _i7 !== source._outEdges.length;) {
              // remove all edges
              if (source._outEdges[_i7].target === v) {
                source._outEdges.splice(_i7, 1);
              } else {
                ++_i7;
              }
            }
          }
          vert._inEdges.length = 0;

          // clear child edges
          for (var _iterator14 = _createForOfIteratorHelperLoose(vert._children), _step14; !(_step14 = _iterator14()).done;) {
            var _oe = _step14.value;
            var _target = this._vertices[_oe.target];
            for (var _i8 = 0; _i8 !== _target._parents.length;) {
              // remove all edges
              if (_target._parents[_i8].target === v) {
                _target._parents.splice(_i8, 1);
              } else {
                ++_i8;
              }
            }
          }
          vert._children.length = 0;

          // clear parent edges
          for (var _iterator15 = _createForOfIteratorHelperLoose(vert._parents), _step15; !(_step15 = _iterator15()).done;) {
            var _ie = _step15.value;
            var _source = this._vertices[_ie.target];
            for (var _i9 = 0; _i9 !== _source._children.length;) {
              // remove all edges
              if (_source._children[_i9].target === v) {
                _source._children.splice(_i9, 1);
              } else {
                ++_i9;
              }
            }
          }
          vert._parents.length = 0;
        };
        _proto44.removeVertex = function removeVertex(u) {
          this._vertices.splice(u, 1);
          this._names.splice(u, 1);
          this._layoutNodes.splice(u, 1);
          this._data.splice(u, 1);
          this._valid.splice(u, 1);
          var sz = this._vertices.length;
          if (u === sz) {
            return;
          }
          for (var v = 0; v !== sz; ++v) {
            var vert = this._vertices[v];
            reindexEdgeList(vert._outEdges, u);
            reindexEdgeList(vert._inEdges, u);
            // ReferenceGraph (Separated)
            reindexEdgeList(vert._children, u);
            reindexEdgeList(vert._parents, u);
          }
        };
        _proto44.addEdge = function addEdge(u, v) {
          // update in/out edge list
          this._vertices[u]._outEdges.push(new OutE(v));
          this._vertices[v]._inEdges.push(new OutE(u));
          return new ED(u, v);
        };
        _proto44.removeEdges = function removeEdges(u, v) {
          var source = this._vertices[u];
          // remove out edges of u
          for (var i = 0; i !== source._outEdges.length;) {
            // remove all edges
            if (source._outEdges[i].target === v) {
              source._outEdges.splice(i, 1);
            } else {
              ++i;
            }
          }
          // remove in edges of v
          var target = this._vertices[v];
          for (var _i10 = 0; _i10 !== target._inEdges.length;) {
            // remove all edges
            if (target._inEdges[_i10].target === u) {
              target._inEdges.splice(_i10, 1);
            } else {
              ++_i10;
            }
          }
        };
        _proto44.removeEdge = function removeEdge(e) {
          var u = e.source;
          var v = e.target;
          var source = this._vertices[u];
          for (var i = 0; i !== source._outEdges.length;) {
            if (source._outEdges[i].target === v) {
              source._outEdges.splice(i, 1);
              break; // remove one edge
            } else {
              ++i;
            }
          }
          var target = this._vertices[v];
          for (var _i11 = 0; _i11 !== target._inEdges.length;) {
            if (target._inEdges[_i11].target === u) {
              target._inEdges.splice(_i11, 1);
              break; // remove one edge
            } else {
              ++_i11;
            }
          }
        }
        //-----------------------------------------------------------------
        // NamedGraph
        ;
        _proto44.vertexName = function vertexName(v) {
          return this._names[v];
        };
        _proto44.vertexNameMap = function vertexNameMap() {
          return new RenderGraphNameMap(this._names);
        }
        //-----------------------------------------------------------------
        // PropertyGraph
        ;
        _proto44.get = function get(tag) {
          switch (tag) {
            // Components
            case 'Name':
              return new RenderGraphNameMap(this._names);
            case 'Layout':
              return new RenderGraphLayoutMap(this._layoutNodes);
            case 'Data':
              return new RenderGraphDataMap(this._data);
            case 'Valid':
              return new RenderGraphValidMap(this._valid);
            default:
              throw Error('property map not found');
          }
        }
        //-----------------------------------------------------------------
        // ComponentGraph
        ;
        _proto44.component = function component(id, v) {
          switch (id) {
            case RenderGraphComponent.Name:
              return this._names[v];
            case RenderGraphComponent.Layout:
              return this._layoutNodes[v];
            case RenderGraphComponent.Data:
              return this._data[v];
            case RenderGraphComponent.Valid:
              return this._valid[v];
            default:
              throw Error('component not found');
          }
        };
        _proto44.componentMap = function componentMap(id) {
          switch (id) {
            case RenderGraphComponent.Name:
              return new RenderGraphNameMap(this._names);
            case RenderGraphComponent.Layout:
              return new RenderGraphLayoutMap(this._layoutNodes);
            case RenderGraphComponent.Data:
              return new RenderGraphDataMap(this._data);
            case RenderGraphComponent.Valid:
              return new RenderGraphValidMap(this._valid);
            default:
              throw Error('component map not found');
          }
        };
        _proto44.getName = function getName(v) {
          return this._names[v];
        };
        _proto44.setName = function setName(v, value) {
          this._names[v] = value;
        };
        _proto44.getLayout = function getLayout(v) {
          return this._layoutNodes[v];
        };
        _proto44.setLayout = function setLayout(v, value) {
          this._layoutNodes[v] = value;
        };
        _proto44.getData = function getData(v) {
          return this._data[v];
        };
        _proto44.getValid = function getValid(v) {
          return this._valid[v];
        };
        _proto44.setValid = function setValid(v, value) {
          this._valid[v] = value;
        }
        //-----------------------------------------------------------------
        // PolymorphicGraph
        ;
        _proto44.holds = function holds(id, v) {
          return this._vertices[v]._id === id;
        };
        _proto44.id = function id(v) {
          return this._vertices[v]._id;
        };
        _proto44.object = function object(v) {
          return this._vertices[v]._object;
        };
        _proto44.value = function value(id, v) {
          if (this._vertices[v]._id === id) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto44.tryValue = function tryValue(id, v) {
          if (this._vertices[v]._id === id) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto44.visitVertex = function visitVertex(visitor, v) {
          var vert = this._vertices[v];
          switch (vert._id) {
            case RenderGraphValue.RasterPass:
              return visitor.rasterPass(vert._object);
            case RenderGraphValue.RasterSubpass:
              return visitor.rasterSubpass(vert._object);
            case RenderGraphValue.ComputeSubpass:
              return visitor.computeSubpass(vert._object);
            case RenderGraphValue.Compute:
              return visitor.compute(vert._object);
            case RenderGraphValue.Resolve:
              return visitor.resolve(vert._object);
            case RenderGraphValue.Copy:
              return visitor.copy(vert._object);
            case RenderGraphValue.Move:
              return visitor.move(vert._object);
            case RenderGraphValue.Raytrace:
              return visitor.raytrace(vert._object);
            case RenderGraphValue.Queue:
              return visitor.queue(vert._object);
            case RenderGraphValue.Scene:
              return visitor.scene(vert._object);
            case RenderGraphValue.Blit:
              return visitor.blit(vert._object);
            case RenderGraphValue.Dispatch:
              return visitor.dispatch(vert._object);
            case RenderGraphValue.Clear:
              return visitor.clear(vert._object);
            case RenderGraphValue.Viewport:
              return visitor.viewport(vert._object);
            default:
              throw Error('polymorphic type not found');
          }
        };
        _proto44.getRasterPass = function getRasterPass(v) {
          if (this._vertices[v]._id === RenderGraphValue.RasterPass) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto44.getRasterSubpass = function getRasterSubpass(v) {
          if (this._vertices[v]._id === RenderGraphValue.RasterSubpass) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto44.getComputeSubpass = function getComputeSubpass(v) {
          if (this._vertices[v]._id === RenderGraphValue.ComputeSubpass) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto44.getCompute = function getCompute(v) {
          if (this._vertices[v]._id === RenderGraphValue.Compute) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto44.getResolve = function getResolve(v) {
          if (this._vertices[v]._id === RenderGraphValue.Resolve) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto44.getCopy = function getCopy(v) {
          if (this._vertices[v]._id === RenderGraphValue.Copy) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto44.getMove = function getMove(v) {
          if (this._vertices[v]._id === RenderGraphValue.Move) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto44.getRaytrace = function getRaytrace(v) {
          if (this._vertices[v]._id === RenderGraphValue.Raytrace) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto44.getQueue = function getQueue(v) {
          if (this._vertices[v]._id === RenderGraphValue.Queue) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto44.getScene = function getScene(v) {
          if (this._vertices[v]._id === RenderGraphValue.Scene) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto44.getBlit = function getBlit(v) {
          if (this._vertices[v]._id === RenderGraphValue.Blit) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto44.getDispatch = function getDispatch(v) {
          if (this._vertices[v]._id === RenderGraphValue.Dispatch) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto44.getClear = function getClear(v) {
          if (this._vertices[v]._id === RenderGraphValue.Clear) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto44.getViewport = function getViewport(v) {
          if (this._vertices[v]._id === RenderGraphValue.Viewport) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto44.tryGetRasterPass = function tryGetRasterPass(v) {
          if (this._vertices[v]._id === RenderGraphValue.RasterPass) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto44.tryGetRasterSubpass = function tryGetRasterSubpass(v) {
          if (this._vertices[v]._id === RenderGraphValue.RasterSubpass) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto44.tryGetComputeSubpass = function tryGetComputeSubpass(v) {
          if (this._vertices[v]._id === RenderGraphValue.ComputeSubpass) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto44.tryGetCompute = function tryGetCompute(v) {
          if (this._vertices[v]._id === RenderGraphValue.Compute) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto44.tryGetResolve = function tryGetResolve(v) {
          if (this._vertices[v]._id === RenderGraphValue.Resolve) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto44.tryGetCopy = function tryGetCopy(v) {
          if (this._vertices[v]._id === RenderGraphValue.Copy) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto44.tryGetMove = function tryGetMove(v) {
          if (this._vertices[v]._id === RenderGraphValue.Move) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto44.tryGetRaytrace = function tryGetRaytrace(v) {
          if (this._vertices[v]._id === RenderGraphValue.Raytrace) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto44.tryGetQueue = function tryGetQueue(v) {
          if (this._vertices[v]._id === RenderGraphValue.Queue) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto44.tryGetScene = function tryGetScene(v) {
          if (this._vertices[v]._id === RenderGraphValue.Scene) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto44.tryGetBlit = function tryGetBlit(v) {
          if (this._vertices[v]._id === RenderGraphValue.Blit) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto44.tryGetDispatch = function tryGetDispatch(v) {
          if (this._vertices[v]._id === RenderGraphValue.Dispatch) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto44.tryGetClear = function tryGetClear(v) {
          if (this._vertices[v]._id === RenderGraphValue.Clear) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto44.tryGetViewport = function tryGetViewport(v) {
          if (this._vertices[v]._id === RenderGraphValue.Viewport) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        //-----------------------------------------------------------------
        // ReferenceGraph
        // type reference_descriptor = ED;
        // type child_iterator = OutEI;
        // type parent_iterator = InEI;
        ;
        _proto44.reference = function reference(u, v) {
          for (var _iterator16 = _createForOfIteratorHelperLoose(this._vertices[u]._children), _step16; !(_step16 = _iterator16()).done;) {
            var oe = _step16.value;
            if (v === oe.target) {
              return true;
            }
          }
          return false;
        };
        _proto44.parent = function parent(e) {
          return e.source;
        };
        _proto44.child = function child(e) {
          return e.target;
        };
        _proto44.parents = function parents(v) {
          return new InEI(this._vertices[v]._parents.values(), v);
        };
        _proto44.children = function children(v) {
          return new OutEI(this._vertices[v]._children.values(), v);
        };
        _proto44.numParents = function numParents(v) {
          return this._vertices[v]._parents.length;
        };
        _proto44.numChildren = function numChildren(v) {
          return this._vertices[v]._children.length;
        };
        _proto44.getParent = function getParent(v) {
          if (v === 0xFFFFFFFF) {
            return 0xFFFFFFFF;
          }
          var list = this._vertices[v]._parents;
          if (list.length === 0) {
            return 0xFFFFFFFF;
          } else {
            return list[0].target;
          }
        };
        _proto44.isAncestor = function isAncestor(ancestor, descendent) {
          var pseudo = 0xFFFFFFFF;
          if (ancestor === descendent) {
            // when ancestor === descendent, is_ancestor is defined as false
            return false;
          }
          if (ancestor === pseudo) {
            // special case: pseudo root is always ancestor
            return true;
          }
          if (descendent === pseudo) {
            // special case: pseudo root is never descendent
            return false;
          }
          for (var parent = this.getParent(descendent); parent !== pseudo;) {
            if (ancestor === parent) {
              return true;
            }
            parent = this.getParent(parent);
          }
          return false;
        }
        //-----------------------------------------------------------------
        // MutableReferenceGraph
        ;
        _proto44.addReference = function addReference(u, v) {
          // update in/out edge list
          this._vertices[u]._children.push(new OutE(v));
          this._vertices[v]._parents.push(new OutE(u));
          return new ED(u, v);
        };
        _proto44.removeReference = function removeReference(e) {
          var u = e.source;
          var v = e.target;
          var source = this._vertices[u];
          for (var i = 0; i !== source._children.length;) {
            if (source._children[i].target === v) {
              source._children.splice(i, 1);
              break; // remove one edge
            } else {
              ++i;
            }
          }
          var target = this._vertices[v];
          for (var _i12 = 0; _i12 !== target._parents.length;) {
            if (target._parents[_i12].target === u) {
              target._parents.splice(_i12, 1);
              break; // remove one edge
            } else {
              ++_i12;
            }
          }
        };
        _proto44.removeReferences = function removeReferences(u, v) {
          var source = this._vertices[u];
          // remove out edges of u
          for (var i = 0; i !== source._children.length;) {
            // remove all edges
            if (source._children[i].target === v) {
              source._children.splice(i, 1);
            } else {
              ++i;
            }
          }
          // remove in edges of v
          var target = this._vertices[v];
          for (var _i13 = 0; _i13 !== target._parents.length;) {
            // remove all edges
            if (target._parents[_i13].target === u) {
              target._parents.splice(_i13, 1);
            } else {
              ++_i13;
            }
          }
        };
        return RenderGraph;
      }());
      _export("RenderGraphObjectPoolSettings", RenderGraphObjectPoolSettings = function RenderGraphObjectPoolSettings(batchSize) {
        this.clearValueBatchSize = 16;
        this.rasterViewBatchSize = 16;
        this.computeViewBatchSize = 16;
        this.resourceDescBatchSize = 16;
        this.resourceTraitsBatchSize = 16;
        this.renderSwapchainBatchSize = 16;
        this.resourceStatesBatchSize = 16;
        this.managedBufferBatchSize = 16;
        this.persistentBufferBatchSize = 16;
        this.managedTextureBatchSize = 16;
        this.persistentTextureBatchSize = 16;
        this.managedResourceBatchSize = 16;
        this.subpassBatchSize = 16;
        this.subpassGraphBatchSize = 16;
        this.rasterSubpassBatchSize = 16;
        this.computeSubpassBatchSize = 16;
        this.rasterPassBatchSize = 16;
        this.persistentRenderPassAndFramebufferBatchSize = 16;
        this.formatViewBatchSize = 16;
        this.subresourceViewBatchSize = 16;
        this.resourceGraphBatchSize = 16;
        this.computePassBatchSize = 16;
        this.resolvePassBatchSize = 16;
        this.copyPassBatchSize = 16;
        this.movePassBatchSize = 16;
        this.raytracePassBatchSize = 16;
        this.clearViewBatchSize = 16;
        this.renderQueueBatchSize = 16;
        this.sceneDataBatchSize = 16;
        this.dispatchBatchSize = 16;
        this.blitBatchSize = 16;
        this.renderDataBatchSize = 16;
        this.renderGraphBatchSize = 16;
        this.clearValueBatchSize = batchSize;
        this.rasterViewBatchSize = batchSize;
        this.computeViewBatchSize = batchSize;
        this.resourceDescBatchSize = batchSize;
        this.resourceTraitsBatchSize = batchSize;
        this.renderSwapchainBatchSize = batchSize;
        this.resourceStatesBatchSize = batchSize;
        this.managedBufferBatchSize = batchSize;
        this.persistentBufferBatchSize = batchSize;
        this.managedTextureBatchSize = batchSize;
        this.persistentTextureBatchSize = batchSize;
        this.managedResourceBatchSize = batchSize;
        this.subpassBatchSize = batchSize;
        this.subpassGraphBatchSize = batchSize;
        this.rasterSubpassBatchSize = batchSize;
        this.computeSubpassBatchSize = batchSize;
        this.rasterPassBatchSize = batchSize;
        this.persistentRenderPassAndFramebufferBatchSize = batchSize;
        this.formatViewBatchSize = batchSize;
        this.subresourceViewBatchSize = batchSize;
        this.resourceGraphBatchSize = batchSize;
        this.computePassBatchSize = batchSize;
        this.resolvePassBatchSize = batchSize;
        this.copyPassBatchSize = batchSize;
        this.movePassBatchSize = batchSize;
        this.raytracePassBatchSize = batchSize;
        this.clearViewBatchSize = batchSize;
        this.renderQueueBatchSize = batchSize;
        this.sceneDataBatchSize = batchSize;
        this.dispatchBatchSize = batchSize;
        this.blitBatchSize = batchSize;
        this.renderDataBatchSize = batchSize;
        this.renderGraphBatchSize = batchSize;
      });
      _export("RenderGraphObjectPool", RenderGraphObjectPool = /*#__PURE__*/function () {
        function RenderGraphObjectPool(settings, renderCommon) {
          this.renderCommon = void 0;
          this._clearValue = void 0;
          this._rasterView = void 0;
          this._computeView = void 0;
          this._resourceDesc = void 0;
          this._resourceTraits = void 0;
          this._renderSwapchain = void 0;
          this._resourceStates = void 0;
          this._managedBuffer = void 0;
          this._persistentBuffer = void 0;
          this._managedTexture = void 0;
          this._persistentTexture = void 0;
          this._managedResource = void 0;
          this._subpass = void 0;
          this._subpassGraph = void 0;
          this._rasterSubpass = void 0;
          this._computeSubpass = void 0;
          this._rasterPass = void 0;
          this._persistentRenderPassAndFramebuffer = void 0;
          this._formatView = void 0;
          this._subresourceView = void 0;
          this._resourceGraph = void 0;
          this._computePass = void 0;
          this._resolvePass = void 0;
          this._copyPass = void 0;
          this._movePass = void 0;
          this._raytracePass = void 0;
          this._clearView = void 0;
          this._renderQueue = void 0;
          this._sceneData = void 0;
          this._dispatch = void 0;
          this._blit = void 0;
          this._renderData = void 0;
          this._renderGraph = void 0;
          this.renderCommon = renderCommon;
          this._clearValue = new RecyclePool(function () {
            return new ClearValue();
          }, settings.clearValueBatchSize);
          this._rasterView = new RecyclePool(function () {
            return new RasterView();
          }, settings.rasterViewBatchSize);
          this._computeView = new RecyclePool(function () {
            return new ComputeView();
          }, settings.computeViewBatchSize);
          this._resourceDesc = new RecyclePool(function () {
            return new ResourceDesc();
          }, settings.resourceDescBatchSize);
          this._resourceTraits = new RecyclePool(function () {
            return new ResourceTraits();
          }, settings.resourceTraitsBatchSize);
          this._renderSwapchain = new RecyclePool(function () {
            return new RenderSwapchain();
          }, settings.renderSwapchainBatchSize);
          this._resourceStates = new RecyclePool(function () {
            return new ResourceStates();
          }, settings.resourceStatesBatchSize);
          this._managedBuffer = new RecyclePool(function () {
            return new ManagedBuffer();
          }, settings.managedBufferBatchSize);
          this._persistentBuffer = new RecyclePool(function () {
            return new PersistentBuffer();
          }, settings.persistentBufferBatchSize);
          this._managedTexture = new RecyclePool(function () {
            return new ManagedTexture();
          }, settings.managedTextureBatchSize);
          this._persistentTexture = new RecyclePool(function () {
            return new PersistentTexture();
          }, settings.persistentTextureBatchSize);
          this._managedResource = new RecyclePool(function () {
            return new ManagedResource();
          }, settings.managedResourceBatchSize);
          this._subpass = new RecyclePool(function () {
            return new Subpass();
          }, settings.subpassBatchSize);
          this._subpassGraph = new RecyclePool(function () {
            return new SubpassGraph();
          }, settings.subpassGraphBatchSize);
          this._rasterSubpass = new RecyclePool(function () {
            return new RasterSubpass();
          }, settings.rasterSubpassBatchSize);
          this._computeSubpass = new RecyclePool(function () {
            return new ComputeSubpass();
          }, settings.computeSubpassBatchSize);
          this._rasterPass = new RecyclePool(function () {
            return new RasterPass();
          }, settings.rasterPassBatchSize);
          this._persistentRenderPassAndFramebuffer = new RecyclePool(function () {
            return new PersistentRenderPassAndFramebuffer();
          }, settings.persistentRenderPassAndFramebufferBatchSize);
          this._formatView = new RecyclePool(function () {
            return new FormatView();
          }, settings.formatViewBatchSize);
          this._subresourceView = new RecyclePool(function () {
            return new SubresourceView();
          }, settings.subresourceViewBatchSize);
          this._resourceGraph = new RecyclePool(function () {
            return new ResourceGraph();
          }, settings.resourceGraphBatchSize);
          this._computePass = new RecyclePool(function () {
            return new ComputePass();
          }, settings.computePassBatchSize);
          this._resolvePass = new RecyclePool(function () {
            return new ResolvePass();
          }, settings.resolvePassBatchSize);
          this._copyPass = new RecyclePool(function () {
            return new CopyPass();
          }, settings.copyPassBatchSize);
          this._movePass = new RecyclePool(function () {
            return new MovePass();
          }, settings.movePassBatchSize);
          this._raytracePass = new RecyclePool(function () {
            return new RaytracePass();
          }, settings.raytracePassBatchSize);
          this._clearView = new RecyclePool(function () {
            return new ClearView();
          }, settings.clearViewBatchSize);
          this._renderQueue = new RecyclePool(function () {
            return new RenderQueue();
          }, settings.renderQueueBatchSize);
          this._sceneData = new RecyclePool(function () {
            return new SceneData();
          }, settings.sceneDataBatchSize);
          this._dispatch = new RecyclePool(function () {
            return new Dispatch();
          }, settings.dispatchBatchSize);
          this._blit = new RecyclePool(function () {
            return new Blit();
          }, settings.blitBatchSize);
          this._renderData = new RecyclePool(function () {
            return new RenderData();
          }, settings.renderDataBatchSize);
          this._renderGraph = new RecyclePool(function () {
            return new RenderGraph();
          }, settings.renderGraphBatchSize);
        }
        var _proto45 = RenderGraphObjectPool.prototype;
        _proto45.reset = function reset() {
          this._clearValue.reset();
          this._rasterView.reset();
          this._computeView.reset();
          this._resourceDesc.reset();
          this._resourceTraits.reset();
          this._renderSwapchain.reset();
          this._resourceStates.reset();
          this._managedBuffer.reset();
          this._persistentBuffer.reset();
          this._managedTexture.reset();
          this._persistentTexture.reset();
          this._managedResource.reset();
          this._subpass.reset();
          this._subpassGraph.reset();
          this._rasterSubpass.reset();
          this._computeSubpass.reset();
          this._rasterPass.reset();
          this._persistentRenderPassAndFramebuffer.reset();
          this._formatView.reset();
          this._subresourceView.reset();
          this._resourceGraph.reset();
          this._computePass.reset();
          this._resolvePass.reset();
          this._copyPass.reset();
          this._movePass.reset();
          this._raytracePass.reset();
          this._clearView.reset();
          this._renderQueue.reset();
          this._sceneData.reset();
          this._dispatch.reset();
          this._blit.reset();
          this._renderData.reset();
          this._renderGraph.reset();
        };
        _proto45.createClearValue = function createClearValue(x, y, z, w) {
          if (x === void 0) {
            x = 0;
          }
          if (y === void 0) {
            y = 0;
          }
          if (z === void 0) {
            z = 0;
          }
          if (w === void 0) {
            w = 0;
          }
          var v = this._clearValue.add();
          v.reset(x, y, z, w);
          return v;
        };
        _proto45.createRasterView = function createRasterView(slotName, accessType, attachmentType, loadOp, storeOp, clearFlags, shaderStageFlags) {
          if (slotName === void 0) {
            slotName = '';
          }
          if (accessType === void 0) {
            accessType = AccessType.WRITE;
          }
          if (attachmentType === void 0) {
            attachmentType = AttachmentType.RENDER_TARGET;
          }
          if (loadOp === void 0) {
            loadOp = LoadOp.LOAD;
          }
          if (storeOp === void 0) {
            storeOp = StoreOp.STORE;
          }
          if (clearFlags === void 0) {
            clearFlags = ClearFlagBit.ALL;
          }
          if (shaderStageFlags === void 0) {
            shaderStageFlags = ShaderStageFlagBit.NONE;
          }
          var v = this._rasterView.add();
          v.reset(slotName, accessType, attachmentType, loadOp, storeOp, clearFlags, shaderStageFlags);
          return v;
        };
        _proto45.createComputeView = function createComputeView(name, accessType, clearFlags, clearValueType, shaderStageFlags) {
          if (name === void 0) {
            name = '';
          }
          if (accessType === void 0) {
            accessType = AccessType.READ;
          }
          if (clearFlags === void 0) {
            clearFlags = ClearFlagBit.NONE;
          }
          if (clearValueType === void 0) {
            clearValueType = ClearValueType.NONE;
          }
          if (shaderStageFlags === void 0) {
            shaderStageFlags = ShaderStageFlagBit.NONE;
          }
          var v = this._computeView.add();
          v.reset(name, accessType, clearFlags, clearValueType, shaderStageFlags);
          return v;
        };
        _proto45.createResourceDesc = function createResourceDesc() {
          var v = this._resourceDesc.add();
          v.reset();
          return v;
        };
        _proto45.createResourceTraits = function createResourceTraits(residency) {
          if (residency === void 0) {
            residency = ResourceResidency.MANAGED;
          }
          var v = this._resourceTraits.add();
          v.reset(residency);
          return v;
        };
        _proto45.createRenderSwapchain = function createRenderSwapchain(swapchain) {
          if (swapchain === void 0) {
            swapchain = null;
          }
          var v = this._renderSwapchain.add();
          v.reset(swapchain);
          return v;
        };
        _proto45.createResourceStates = function createResourceStates() {
          var v = this._resourceStates.add();
          v.reset();
          return v;
        };
        _proto45.createManagedBuffer = function createManagedBuffer(buffer) {
          if (buffer === void 0) {
            buffer = null;
          }
          var v = this._managedBuffer.add();
          v.reset(buffer);
          return v;
        };
        _proto45.createPersistentBuffer = function createPersistentBuffer(buffer) {
          if (buffer === void 0) {
            buffer = null;
          }
          var v = this._persistentBuffer.add();
          v.reset(buffer);
          return v;
        };
        _proto45.createManagedTexture = function createManagedTexture(texture) {
          if (texture === void 0) {
            texture = null;
          }
          var v = this._managedTexture.add();
          v.reset(texture);
          return v;
        };
        _proto45.createPersistentTexture = function createPersistentTexture(texture) {
          if (texture === void 0) {
            texture = null;
          }
          var v = this._persistentTexture.add();
          v.reset(texture);
          return v;
        };
        _proto45.createManagedResource = function createManagedResource() {
          var v = this._managedResource.add();
          v.reset();
          return v;
        };
        _proto45.createSubpass = function createSubpass() {
          var v = this._subpass.add();
          v.reset();
          return v;
        };
        _proto45.createSubpassGraph = function createSubpassGraph() {
          var v = this._subpassGraph.add();
          v.clear();
          return v;
        };
        _proto45.createRasterSubpass = function createRasterSubpass(subpassID, count, quality) {
          if (subpassID === void 0) {
            subpassID = 0xFFFFFFFF;
          }
          if (count === void 0) {
            count = 1;
          }
          if (quality === void 0) {
            quality = 0;
          }
          var v = this._rasterSubpass.add();
          v.reset(subpassID, count, quality);
          return v;
        };
        _proto45.createComputeSubpass = function createComputeSubpass(subpassID) {
          if (subpassID === void 0) {
            subpassID = 0xFFFFFFFF;
          }
          var v = this._computeSubpass.add();
          v.reset(subpassID);
          return v;
        };
        _proto45.createRasterPass = function createRasterPass() {
          var v = this._rasterPass.add();
          v.reset();
          return v;
        };
        _proto45.createPersistentRenderPassAndFramebuffer = function createPersistentRenderPassAndFramebuffer(renderPass, framebuffer) {
          if (renderPass === void 0) {
            renderPass = null;
          }
          if (framebuffer === void 0) {
            framebuffer = null;
          }
          var v = this._persistentRenderPassAndFramebuffer.add();
          v.reset(renderPass, framebuffer);
          return v;
        };
        _proto45.createFormatView = function createFormatView() {
          var v = this._formatView.add();
          v.reset();
          return v;
        };
        _proto45.createSubresourceView = function createSubresourceView() {
          var v = this._subresourceView.add();
          v.reset();
          return v;
        };
        _proto45.createResourceGraph = function createResourceGraph() {
          var v = this._resourceGraph.add();
          v.clear();
          return v;
        };
        _proto45.createComputePass = function createComputePass() {
          var v = this._computePass.add();
          v.reset();
          return v;
        };
        _proto45.createResolvePass = function createResolvePass() {
          var v = this._resolvePass.add();
          v.reset();
          return v;
        };
        _proto45.createCopyPass = function createCopyPass() {
          var v = this._copyPass.add();
          v.reset();
          return v;
        };
        _proto45.createMovePass = function createMovePass() {
          var v = this._movePass.add();
          v.reset();
          return v;
        };
        _proto45.createRaytracePass = function createRaytracePass() {
          var v = this._raytracePass.add();
          v.reset();
          return v;
        };
        _proto45.createClearView = function createClearView(slotName, clearFlags) {
          if (slotName === void 0) {
            slotName = '';
          }
          if (clearFlags === void 0) {
            clearFlags = ClearFlagBit.ALL;
          }
          var v = this._clearView.add();
          v.reset(slotName, clearFlags);
          return v;
        };
        _proto45.createRenderQueue = function createRenderQueue(hint, phaseID) {
          if (hint === void 0) {
            hint = QueueHint.RENDER_OPAQUE;
          }
          if (phaseID === void 0) {
            phaseID = 0xFFFFFFFF;
          }
          var v = this._renderQueue.add();
          v.reset(hint, phaseID);
          return v;
        };
        _proto45.createSceneData = function createSceneData(scene, camera, flags, cullingFlags, shadingLight) {
          if (scene === void 0) {
            scene = null;
          }
          if (camera === void 0) {
            camera = null;
          }
          if (flags === void 0) {
            flags = SceneFlags.NONE;
          }
          if (cullingFlags === void 0) {
            cullingFlags = CullingFlags.CAMERA_FRUSTUM;
          }
          if (shadingLight === void 0) {
            shadingLight = null;
          }
          var v = this._sceneData.add();
          v.reset(scene, camera, flags, cullingFlags, shadingLight);
          return v;
        };
        _proto45.createDispatch = function createDispatch(material, passID, threadGroupCountX, threadGroupCountY, threadGroupCountZ) {
          if (material === void 0) {
            material = null;
          }
          if (passID === void 0) {
            passID = 0;
          }
          if (threadGroupCountX === void 0) {
            threadGroupCountX = 0;
          }
          if (threadGroupCountY === void 0) {
            threadGroupCountY = 0;
          }
          if (threadGroupCountZ === void 0) {
            threadGroupCountZ = 0;
          }
          var v = this._dispatch.add();
          v.reset(material, passID, threadGroupCountX, threadGroupCountY, threadGroupCountZ);
          return v;
        };
        _proto45.createBlit = function createBlit(material, passID, sceneFlags, camera) {
          if (material === void 0) {
            material = null;
          }
          if (passID === void 0) {
            passID = 0;
          }
          if (sceneFlags === void 0) {
            sceneFlags = SceneFlags.NONE;
          }
          if (camera === void 0) {
            camera = null;
          }
          var v = this._blit.add();
          v.reset(material, passID, sceneFlags, camera);
          return v;
        };
        _proto45.createRenderData = function createRenderData() {
          var v = this._renderData.add();
          v.reset();
          return v;
        };
        _proto45.createRenderGraph = function createRenderGraph() {
          var v = this._renderGraph.add();
          v.clear();
          return v;
        };
        return RenderGraphObjectPool;
      }());
    }
  };
});