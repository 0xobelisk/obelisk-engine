System.register("q-bundled:///fs/cocos/rendering/custom/render-graph.js", ["./graph.js", "../../gfx/index.js", "./types.js", "../../core/memop/index.js"], function (_export, _context) {
  "use strict";

  var AdjI, ED, InEI, OutE, OutEI, directional, parallel, reindexEdgeList, traversal, AccessFlagBit, ClearFlagBit, Color, Format, LoadOp, SampleCount, ShaderStageFlagBit, StoreOp, TextureFlagBit, TextureType, Viewport, AccessType, AttachmentType, ClearValueType, LightInfo, QueueHint, ResourceDimension, ResourceFlags, ResourceResidency, SceneFlags, RecyclePool, ClearValue, RasterView, ComputeView, ResourceDesc, ResourceTraits, RenderSwapchain, ResourceStates, ManagedBuffer, PersistentBuffer, ManagedTexture, PersistentTexture, ManagedResource, Subpass, SubpassGraphVertex, SubpassGraphNameMap, SubpassGraphSubpassMap, SubpassGraph, RasterSubpass, ComputeSubpass, RasterPass, PersistentRenderPassAndFramebuffer, FormatView, SubresourceView, ResourceGraphVertex, ResourceGraphNameMap, ResourceGraphDescMap, ResourceGraphTraitsMap, ResourceGraphStatesMap, ResourceGraphSamplerMap, ResourceGraph, ComputePass, ResolvePass, CopyPass, MovePass, RaytracePass, ClearView, RenderQueue, SceneData, Dispatch, Blit, RenderData, RenderGraphVertex, RenderGraphNameMap, RenderGraphLayoutMap, RenderGraphDataMap, RenderGraphValidMap, RenderGraph, RenderGraphObjectPoolSettings, RenderGraphObjectPool, SubpassGraphComponent, ResourceGraphValue, ResourceGraphComponent, CullingFlags, RenderGraphValue, RenderGraphComponent;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /****************************************************************************
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
    ClearValue: void 0,
    RasterView: void 0,
    ComputeView: void 0,
    ResourceDesc: void 0,
    ResourceTraits: void 0,
    RenderSwapchain: void 0,
    ResourceStates: void 0,
    ManagedBuffer: void 0,
    PersistentBuffer: void 0,
    ManagedTexture: void 0,
    PersistentTexture: void 0,
    ManagedResource: void 0,
    Subpass: void 0,
    SubpassGraphVertex: void 0,
    SubpassGraphNameMap: void 0,
    SubpassGraphSubpassMap: void 0,
    SubpassGraph: void 0,
    RasterSubpass: void 0,
    ComputeSubpass: void 0,
    RasterPass: void 0,
    PersistentRenderPassAndFramebuffer: void 0,
    FormatView: void 0,
    SubresourceView: void 0,
    getResourceGraphValueName: getResourceGraphValueName,
    ResourceGraphVertex: void 0,
    ResourceGraphNameMap: void 0,
    ResourceGraphDescMap: void 0,
    ResourceGraphTraitsMap: void 0,
    ResourceGraphStatesMap: void 0,
    ResourceGraphSamplerMap: void 0,
    ResourceGraph: void 0,
    ComputePass: void 0,
    ResolvePass: void 0,
    CopyPass: void 0,
    MovePass: void 0,
    RaytracePass: void 0,
    ClearView: void 0,
    RenderQueue: void 0,
    SceneData: void 0,
    Dispatch: void 0,
    Blit: void 0,
    RenderData: void 0,
    getRenderGraphValueName: getRenderGraphValueName,
    RenderGraphVertex: void 0,
    RenderGraphNameMap: void 0,
    RenderGraphLayoutMap: void 0,
    RenderGraphDataMap: void 0,
    RenderGraphValidMap: void 0,
    RenderGraph: void 0,
    RenderGraphObjectPoolSettings: void 0,
    RenderGraphObjectPool: void 0,
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
      _export("ClearValue", ClearValue = class ClearValue {
        constructor(x = 0, y = 0, z = 0, w = 0) {
          this.x = void 0;
          this.y = void 0;
          this.z = void 0;
          this.w = void 0;
          this.x = x;
          this.y = y;
          this.z = z;
          this.w = w;
        }
        reset(x = 0, y = 0, z = 0, w = 0) {
          this.x = x;
          this.y = y;
          this.z = z;
          this.w = w;
        }
      });
      _export("RasterView", RasterView = class RasterView {
        constructor(slotName = '', accessType = AccessType.WRITE, attachmentType = AttachmentType.RENDER_TARGET, loadOp = LoadOp.LOAD, storeOp = StoreOp.STORE, clearFlags = ClearFlagBit.ALL, clearColor = new Color(), shaderStageFlags = ShaderStageFlagBit.NONE) {
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
        reset(slotName = '', accessType = AccessType.WRITE, attachmentType = AttachmentType.RENDER_TARGET, loadOp = LoadOp.LOAD, storeOp = StoreOp.STORE, clearFlags = ClearFlagBit.ALL, shaderStageFlags = ShaderStageFlagBit.NONE) {
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
        }
      });
      _export("ComputeView", ComputeView = class ComputeView {
        constructor(name = '', accessType = AccessType.READ, clearFlags = ClearFlagBit.NONE, clearValueType = ClearValueType.NONE, clearValue = new ClearValue(), shaderStageFlags = ShaderStageFlagBit.NONE) {
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
        reset(name = '', accessType = AccessType.READ, clearFlags = ClearFlagBit.NONE, clearValueType = ClearValueType.NONE, shaderStageFlags = ShaderStageFlagBit.NONE) {
          this.name = name;
          this.accessType = accessType;
          this.plane = 0;
          this.clearFlags = clearFlags;
          this.clearValueType = clearValueType;
          this.clearValue.reset();
          this.shaderStageFlags = shaderStageFlags;
        }
      });
      _export("ResourceDesc", ResourceDesc = class ResourceDesc {
        constructor() {
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
        reset() {
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
      });
      _export("ResourceTraits", ResourceTraits = class ResourceTraits {
        constructor(residency = ResourceResidency.MANAGED) {
          this.residency = void 0;
          this.residency = residency;
        }
        reset(residency = ResourceResidency.MANAGED) {
          this.residency = residency;
        }
      });
      _export("RenderSwapchain", RenderSwapchain = class RenderSwapchain {
        constructor(swapchain = null) {
          /*pointer*/
          this.swapchain = void 0;
          /*pointer*/
          this.renderWindow = null;
          this.currentID = 0;
          this.numBackBuffers = 0;
          this.generation = 0xFFFFFFFF;
          this.swapchain = swapchain;
        }
        reset(swapchain = null) {
          this.swapchain = swapchain;
          this.renderWindow = null;
          this.currentID = 0;
          this.numBackBuffers = 0;
          this.generation = 0xFFFFFFFF;
        }
      });
      _export("ResourceStates", ResourceStates = class ResourceStates {
        constructor() {
          this.states = AccessFlagBit.NONE;
        }
        reset() {
          this.states = AccessFlagBit.NONE;
        }
      });
      _export("ManagedBuffer", ManagedBuffer = class ManagedBuffer {
        constructor(buffer = null) {
          /*refcount*/
          this.buffer = void 0;
          this.fenceValue = 0;
          this.buffer = buffer;
        }
        reset(buffer = null) {
          this.buffer = buffer;
          this.fenceValue = 0;
        }
      });
      _export("PersistentBuffer", PersistentBuffer = class PersistentBuffer {
        constructor(buffer = null) {
          /*refcount*/
          this.buffer = void 0;
          this.fenceValue = 0;
          this.buffer = buffer;
        }
        reset(buffer = null) {
          this.buffer = buffer;
          this.fenceValue = 0;
        }
      });
      _export("ManagedTexture", ManagedTexture = class ManagedTexture {
        constructor(texture = null) {
          /*refcount*/
          this.texture = void 0;
          this.fenceValue = 0;
          this.texture = texture;
        }
        reset(texture = null) {
          this.texture = texture;
          this.fenceValue = 0;
        }
      });
      _export("PersistentTexture", PersistentTexture = class PersistentTexture {
        constructor(texture = null) {
          /*refcount*/
          this.texture = void 0;
          this.fenceValue = 0;
          this.texture = texture;
        }
        reset(texture = null) {
          this.texture = texture;
          this.fenceValue = 0;
        }
      });
      _export("ManagedResource", ManagedResource = class ManagedResource {
        constructor() {
          this.unused = 0;
        }
        reset() {
          this.unused = 0;
        }
      });
      _export("Subpass", Subpass = class Subpass {
        constructor() {
          this.rasterViews = new Map();
          this.computeViews = new Map();
          this.resolvePairs = [];
        }
        reset() {
          this.rasterViews.clear();
          this.computeViews.clear();
          this.resolvePairs.length = 0;
        }
      }); //=================================================================
      // SubpassGraph
      //=================================================================
      // Graph Concept
      _export("SubpassGraphVertex", SubpassGraphVertex = class SubpassGraphVertex {
        constructor() {
          this._outEdges = [];
          this._inEdges = [];
        }
      }); //-----------------------------------------------------------------
      // PropertyGraph Concept
      _export("SubpassGraphNameMap", SubpassGraphNameMap = class SubpassGraphNameMap {
        constructor(names) {
          this._names = void 0;
          this.names = names;
          this._names = names;
        }
        get(v) {
          return this._names[v];
        }
        set(v, names) {
          this._names[v] = names;
        }
      });
      _export("SubpassGraphSubpassMap", SubpassGraphSubpassMap = class SubpassGraphSubpassMap {
        constructor(subpasses) {
          this._subpasses = void 0;
          this.subpasses = subpasses;
          this._subpasses = subpasses;
        }
        get(v) {
          return this._subpasses[v];
        }
      }); //-----------------------------------------------------------------
      // ComponentGraph Concept
      _export("SubpassGraphComponent", SubpassGraphComponent = {
        Name: 0,
        Subpass: 1
      });
      //-----------------------------------------------------------------
      // SubpassGraph Implementation
      _export("SubpassGraph", SubpassGraph = class SubpassGraph {
        constructor() {
          // type edge_descriptor = ED;
          this.directed_category = directional.bidirectional;
          this.edge_parallel_category = parallel.allow;
          this.traversal_category = traversal.incidence | traversal.bidirectional | traversal.adjacency | traversal.vertex_list;
          this.components = ['Name', 'Subpass'];
          this._vertices = [];
          this._names = [];
          this._subpasses = [];
        }
        //-----------------------------------------------------------------
        // Graph
        // type vertex_descriptor = number;
        nullVertex() {
          return 0xFFFFFFFF;
        }
        //-----------------------------------------------------------------
        // IncidenceGraph
        // type out_edge_iterator = OutEI;
        // type degree_size_type = number;
        edge(u, v) {
          for (const oe of this._vertices[u]._outEdges) {
            if (v === oe.target) {
              return true;
            }
          }
          return false;
        }
        source(e) {
          return e.source;
        }
        target(e) {
          return e.target;
        }
        outEdges(v) {
          return new OutEI(this._vertices[v]._outEdges.values(), v);
        }
        outDegree(v) {
          return this._vertices[v]._outEdges.length;
        }
        //-----------------------------------------------------------------
        // BidirectionalGraph
        // type in_edge_iterator = InEI;
        inEdges(v) {
          return new InEI(this._vertices[v]._inEdges.values(), v);
        }
        inDegree(v) {
          return this._vertices[v]._inEdges.length;
        }
        degree(v) {
          return this.outDegree(v) + this.inDegree(v);
        }
        //-----------------------------------------------------------------
        // AdjacencyGraph
        // type adjacency_iterator = AdjI;
        adjacentVertices(v) {
          return new AdjI(this, this.outEdges(v));
        }
        //-----------------------------------------------------------------
        // VertexListGraph
        vertices() {
          return this._vertices.keys();
        }
        numVertices() {
          return this._vertices.length;
        }
        //-----------------------------------------------------------------
        // EdgeListGraph
        numEdges() {
          let numEdges = 0;
          for (const v of this.vertices()) {
            numEdges += this.outDegree(v);
          }
          return numEdges;
        }
        //-----------------------------------------------------------------
        // MutableGraph
        clear() {
          // ComponentGraph
          this._names.length = 0;
          this._subpasses.length = 0;
          // Graph Vertices
          this._vertices.length = 0;
        }
        addVertex(name, subpass) {
          const vert = new SubpassGraphVertex();
          const v = this._vertices.length;
          this._vertices.push(vert);
          this._names.push(name);
          this._subpasses.push(subpass);
          return v;
        }
        clearVertex(v) {
          const vert = this._vertices[v];
          // clear out edges
          for (const oe of vert._outEdges) {
            const target = this._vertices[oe.target];
            for (let i = 0; i !== target._inEdges.length;) {
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
          for (const ie of vert._inEdges) {
            const source = this._vertices[ie.target];
            for (let i = 0; i !== source._outEdges.length;) {
              // remove all edges
              if (source._outEdges[i].target === v) {
                source._outEdges.splice(i, 1);
              } else {
                ++i;
              }
            }
          }
          vert._inEdges.length = 0;
        }
        removeVertex(u) {
          this._vertices.splice(u, 1);
          this._names.splice(u, 1);
          this._subpasses.splice(u, 1);
          const sz = this._vertices.length;
          if (u === sz) {
            return;
          }
          for (let v = 0; v !== sz; ++v) {
            const vert = this._vertices[v];
            reindexEdgeList(vert._outEdges, u);
            reindexEdgeList(vert._inEdges, u);
          }
        }
        addEdge(u, v) {
          // update in/out edge list
          this._vertices[u]._outEdges.push(new OutE(v));
          this._vertices[v]._inEdges.push(new OutE(u));
          return new ED(u, v);
        }
        removeEdges(u, v) {
          const source = this._vertices[u];
          // remove out edges of u
          for (let i = 0; i !== source._outEdges.length;) {
            // remove all edges
            if (source._outEdges[i].target === v) {
              source._outEdges.splice(i, 1);
            } else {
              ++i;
            }
          }
          // remove in edges of v
          const target = this._vertices[v];
          for (let i = 0; i !== target._inEdges.length;) {
            // remove all edges
            if (target._inEdges[i].target === u) {
              target._inEdges.splice(i, 1);
            } else {
              ++i;
            }
          }
        }
        removeEdge(e) {
          const u = e.source;
          const v = e.target;
          const source = this._vertices[u];
          for (let i = 0; i !== source._outEdges.length;) {
            if (source._outEdges[i].target === v) {
              source._outEdges.splice(i, 1);
              break; // remove one edge
            } else {
              ++i;
            }
          }
          const target = this._vertices[v];
          for (let i = 0; i !== target._inEdges.length;) {
            if (target._inEdges[i].target === u) {
              target._inEdges.splice(i, 1);
              break; // remove one edge
            } else {
              ++i;
            }
          }
        }
        //-----------------------------------------------------------------
        // NamedGraph
        vertexName(v) {
          return this._names[v];
        }
        vertexNameMap() {
          return new SubpassGraphNameMap(this._names);
        }
        //-----------------------------------------------------------------
        // PropertyGraph
        get(tag) {
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
        component(id, v) {
          switch (id) {
            case SubpassGraphComponent.Name:
              return this._names[v];
            case SubpassGraphComponent.Subpass:
              return this._subpasses[v];
            default:
              throw Error('component not found');
          }
        }
        componentMap(id) {
          switch (id) {
            case SubpassGraphComponent.Name:
              return new SubpassGraphNameMap(this._names);
            case SubpassGraphComponent.Subpass:
              return new SubpassGraphSubpassMap(this._subpasses);
            default:
              throw Error('component map not found');
          }
        }
        getName(v) {
          return this._names[v];
        }
        setName(v, value) {
          this._names[v] = value;
        }
        getSubpass(v) {
          return this._subpasses[v];
        }
      });
      _export("RasterSubpass", RasterSubpass = class RasterSubpass {
        constructor(subpassID = 0xFFFFFFFF, count = 1, quality = 0) {
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
        reset(subpassID = 0xFFFFFFFF, count = 1, quality = 0) {
          this.rasterViews.clear();
          this.computeViews.clear();
          this.resolvePairs.length = 0;
          this.viewport.reset();
          this.subpassID = subpassID;
          this.count = count;
          this.quality = quality;
          this.showStatistics = false;
        }
      });
      _export("ComputeSubpass", ComputeSubpass = class ComputeSubpass {
        constructor(subpassID = 0xFFFFFFFF) {
          this.rasterViews = new Map();
          this.computeViews = new Map();
          this.subpassID = void 0;
          this.subpassID = subpassID;
        }
        reset(subpassID = 0xFFFFFFFF) {
          this.rasterViews.clear();
          this.computeViews.clear();
          this.subpassID = subpassID;
        }
      });
      _export("RasterPass", RasterPass = class RasterPass {
        constructor() {
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
        reset() {
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
        }
      });
      _export("PersistentRenderPassAndFramebuffer", PersistentRenderPassAndFramebuffer = class PersistentRenderPassAndFramebuffer {
        constructor(renderPass = null, framebuffer = null) {
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
        reset(renderPass = null, framebuffer = null) {
          this.renderPass = renderPass;
          this.framebuffer = framebuffer;
          this.clearColors.length = 0;
          this.clearDepth = 0;
          this.clearStencil = 0;
        }
      });
      _export("FormatView", FormatView = class FormatView {
        constructor() {
          this.format = Format.UNKNOWN;
        }
        reset() {
          this.format = Format.UNKNOWN;
        }
      });
      _export("SubresourceView", SubresourceView = class SubresourceView {
        constructor() {
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
        reset() {
          this.textureView = null;
          this.format = Format.UNKNOWN;
          this.indexOrFirstMipLevel = 0;
          this.numMipLevels = 0;
          this.firstArraySlice = 0;
          this.numArraySlices = 0;
          this.firstPlane = 0;
          this.numPlanes = 0;
        }
      }); //=================================================================
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
      _export("ResourceGraphVertex", ResourceGraphVertex = class ResourceGraphVertex {
        constructor(id, object) {
          this._outEdges = [];
          this._inEdges = [];
          this._id = void 0;
          this._object = void 0;
          this.id = id;
          this.object = object;
          this._id = id;
          this._object = object;
        }
      }); //-----------------------------------------------------------------
      // PropertyGraph Concept
      _export("ResourceGraphNameMap", ResourceGraphNameMap = class ResourceGraphNameMap {
        constructor(names) {
          this._names = void 0;
          this.names = names;
          this._names = names;
        }
        get(v) {
          return this._names[v];
        }
        set(v, names) {
          this._names[v] = names;
        }
      });
      _export("ResourceGraphDescMap", ResourceGraphDescMap = class ResourceGraphDescMap {
        constructor(descs) {
          this._descs = void 0;
          this.descs = descs;
          this._descs = descs;
        }
        get(v) {
          return this._descs[v];
        }
      });
      _export("ResourceGraphTraitsMap", ResourceGraphTraitsMap = class ResourceGraphTraitsMap {
        constructor(traits) {
          this._traits = void 0;
          this.traits = traits;
          this._traits = traits;
        }
        get(v) {
          return this._traits[v];
        }
      });
      _export("ResourceGraphStatesMap", ResourceGraphStatesMap = class ResourceGraphStatesMap {
        constructor(states) {
          this._states = void 0;
          this.states = states;
          this._states = states;
        }
        get(v) {
          return this._states[v];
        }
      });
      _export("ResourceGraphSamplerMap", ResourceGraphSamplerMap = class ResourceGraphSamplerMap {
        constructor(samplerInfo) {
          this._samplerInfo = void 0;
          this.samplerInfo = samplerInfo;
          this._samplerInfo = samplerInfo;
        }
        get(v) {
          return this._samplerInfo[v];
        }
      }); //-----------------------------------------------------------------
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
      _export("ResourceGraph", ResourceGraph = class ResourceGraph {
        constructor() {
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
        //-----------------------------------------------------------------
        // Graph
        // type vertex_descriptor = number;
        nullVertex() {
          return 0xFFFFFFFF;
        }
        //-----------------------------------------------------------------
        // IncidenceGraph
        // type out_edge_iterator = OutEI;
        // type degree_size_type = number;
        edge(u, v) {
          for (const oe of this._vertices[u]._outEdges) {
            if (v === oe.target) {
              return true;
            }
          }
          return false;
        }
        source(e) {
          return e.source;
        }
        target(e) {
          return e.target;
        }
        outEdges(v) {
          return new OutEI(this._vertices[v]._outEdges.values(), v);
        }
        outDegree(v) {
          return this._vertices[v]._outEdges.length;
        }
        //-----------------------------------------------------------------
        // BidirectionalGraph
        // type in_edge_iterator = InEI;
        inEdges(v) {
          return new InEI(this._vertices[v]._inEdges.values(), v);
        }
        inDegree(v) {
          return this._vertices[v]._inEdges.length;
        }
        degree(v) {
          return this.outDegree(v) + this.inDegree(v);
        }
        //-----------------------------------------------------------------
        // AdjacencyGraph
        // type adjacency_iterator = AdjI;
        adjacentVertices(v) {
          return new AdjI(this, this.outEdges(v));
        }
        //-----------------------------------------------------------------
        // VertexListGraph
        vertices() {
          return this._vertices.keys();
        }
        numVertices() {
          return this._vertices.length;
        }
        //-----------------------------------------------------------------
        // EdgeListGraph
        numEdges() {
          let numEdges = 0;
          for (const v of this.vertices()) {
            numEdges += this.outDegree(v);
          }
          return numEdges;
        }
        //-----------------------------------------------------------------
        // MutableGraph
        clear() {
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
        }
        addVertex(id, object, name, desc, traits, states, sampler, u = 0xFFFFFFFF) {
          const vert = new ResourceGraphVertex(id, object);
          const v = this._vertices.length;
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
        }
        clearVertex(v) {
          // ReferenceGraph(Alias)
          const vert = this._vertices[v];
          // clear out edges
          for (const oe of vert._outEdges) {
            const target = this._vertices[oe.target];
            for (let i = 0; i !== target._inEdges.length;) {
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
          for (const ie of vert._inEdges) {
            const source = this._vertices[ie.target];
            for (let i = 0; i !== source._outEdges.length;) {
              // remove all edges
              if (source._outEdges[i].target === v) {
                source._outEdges.splice(i, 1);
              } else {
                ++i;
              }
            }
          }
          vert._inEdges.length = 0;
        }
        removeVertex(u) {
          {
            // UuidGraph
            const key = this._names[u];
            this._valueIndex.delete(key);
            this._valueIndex.forEach(v => {
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
          const sz = this._vertices.length;
          if (u === sz) {
            return;
          }
          for (let v = 0; v !== sz; ++v) {
            const vert = this._vertices[v];
            reindexEdgeList(vert._outEdges, u);
            reindexEdgeList(vert._inEdges, u);
          }
        }
        addEdge(u, v) {
          // update in/out edge list
          this._vertices[u]._outEdges.push(new OutE(v));
          this._vertices[v]._inEdges.push(new OutE(u));
          return new ED(u, v);
        }
        removeEdges(u, v) {
          const source = this._vertices[u];
          // remove out edges of u
          for (let i = 0; i !== source._outEdges.length;) {
            // remove all edges
            if (source._outEdges[i].target === v) {
              source._outEdges.splice(i, 1);
            } else {
              ++i;
            }
          }
          // remove in edges of v
          const target = this._vertices[v];
          for (let i = 0; i !== target._inEdges.length;) {
            // remove all edges
            if (target._inEdges[i].target === u) {
              target._inEdges.splice(i, 1);
            } else {
              ++i;
            }
          }
        }
        removeEdge(e) {
          const u = e.source;
          const v = e.target;
          const source = this._vertices[u];
          for (let i = 0; i !== source._outEdges.length;) {
            if (source._outEdges[i].target === v) {
              source._outEdges.splice(i, 1);
              break; // remove one edge
            } else {
              ++i;
            }
          }
          const target = this._vertices[v];
          for (let i = 0; i !== target._inEdges.length;) {
            if (target._inEdges[i].target === u) {
              target._inEdges.splice(i, 1);
              break; // remove one edge
            } else {
              ++i;
            }
          }
        }
        //-----------------------------------------------------------------
        // NamedGraph
        vertexName(v) {
          return this._names[v];
        }
        vertexNameMap() {
          return new ResourceGraphNameMap(this._names);
        }
        //-----------------------------------------------------------------
        // PropertyGraph
        get(tag) {
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
        component(id, v) {
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
        }
        componentMap(id) {
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
        }
        getName(v) {
          return this._names[v];
        }
        setName(v, value) {
          this._names[v] = value;
        }
        getDesc(v) {
          return this._descs[v];
        }
        getTraits(v) {
          return this._traits[v];
        }
        getStates(v) {
          return this._states[v];
        }
        getSampler(v) {
          return this._samplerInfo[v];
        }
        //-----------------------------------------------------------------
        // PolymorphicGraph
        holds(id, v) {
          return this._vertices[v]._id === id;
        }
        id(v) {
          return this._vertices[v]._id;
        }
        object(v) {
          return this._vertices[v]._object;
        }
        value(id, v) {
          if (this._vertices[v]._id === id) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        tryValue(id, v) {
          if (this._vertices[v]._id === id) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        visitVertex(visitor, v) {
          const vert = this._vertices[v];
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
        }
        getManaged(v) {
          if (this._vertices[v]._id === ResourceGraphValue.Managed) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getManagedBuffer(v) {
          if (this._vertices[v]._id === ResourceGraphValue.ManagedBuffer) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getManagedTexture(v) {
          if (this._vertices[v]._id === ResourceGraphValue.ManagedTexture) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getPersistentBuffer(v) {
          if (this._vertices[v]._id === ResourceGraphValue.PersistentBuffer) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getPersistentTexture(v) {
          if (this._vertices[v]._id === ResourceGraphValue.PersistentTexture) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getFramebuffer(v) {
          if (this._vertices[v]._id === ResourceGraphValue.Framebuffer) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getSwapchain(v) {
          if (this._vertices[v]._id === ResourceGraphValue.Swapchain) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getFormatView(v) {
          if (this._vertices[v]._id === ResourceGraphValue.FormatView) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getSubresourceView(v) {
          if (this._vertices[v]._id === ResourceGraphValue.SubresourceView) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        tryGetManaged(v) {
          if (this._vertices[v]._id === ResourceGraphValue.Managed) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetManagedBuffer(v) {
          if (this._vertices[v]._id === ResourceGraphValue.ManagedBuffer) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetManagedTexture(v) {
          if (this._vertices[v]._id === ResourceGraphValue.ManagedTexture) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetPersistentBuffer(v) {
          if (this._vertices[v]._id === ResourceGraphValue.PersistentBuffer) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetPersistentTexture(v) {
          if (this._vertices[v]._id === ResourceGraphValue.PersistentTexture) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetFramebuffer(v) {
          if (this._vertices[v]._id === ResourceGraphValue.Framebuffer) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetSwapchain(v) {
          if (this._vertices[v]._id === ResourceGraphValue.Swapchain) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetFormatView(v) {
          if (this._vertices[v]._id === ResourceGraphValue.FormatView) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetSubresourceView(v) {
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
        reference(u, v) {
          for (const oe of this._vertices[u]._outEdges) {
            if (v === oe.target) {
              return true;
            }
          }
          return false;
        }
        parent(e) {
          return e.source;
        }
        child(e) {
          return e.target;
        }
        parents(v) {
          return new InEI(this._vertices[v]._inEdges.values(), v);
        }
        children(v) {
          return new OutEI(this._vertices[v]._outEdges.values(), v);
        }
        numParents(v) {
          return this._vertices[v]._inEdges.length;
        }
        numChildren(v) {
          return this._vertices[v]._outEdges.length;
        }
        getParent(v) {
          if (v === 0xFFFFFFFF) {
            return 0xFFFFFFFF;
          }
          const list = this._vertices[v]._inEdges;
          if (list.length === 0) {
            return 0xFFFFFFFF;
          } else {
            return list[0].target;
          }
        }
        isAncestor(ancestor, descendent) {
          const pseudo = 0xFFFFFFFF;
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
          for (let parent = this.getParent(descendent); parent !== pseudo;) {
            if (ancestor === parent) {
              return true;
            }
            parent = this.getParent(parent);
          }
          return false;
        }
        //-----------------------------------------------------------------
        // MutableReferenceGraph
        addReference(u, v) {
          return this.addEdge(u, v);
        }
        removeReference(e) {
          return this.removeEdge(e);
        }
        removeReferences(u, v) {
          return this.removeEdges(u, v);
        }
        //-----------------------------------------------------------------
        // UuidGraph
        contains(key) {
          return this._valueIndex.has(key);
        }
        vertex(key) {
          return this._valueIndex.get(key);
        }
        find(key) {
          const v = this._valueIndex.get(key);
          if (v === undefined) return 0xFFFFFFFF;
          return v;
        }
      });
      _export("ComputePass", ComputePass = class ComputePass {
        constructor() {
          this.computeViews = new Map();
          this.textures = new Map();
        }
        reset() {
          this.computeViews.clear();
          this.textures.clear();
        }
      });
      _export("ResolvePass", ResolvePass = class ResolvePass {
        constructor() {
          this.resolvePairs = [];
        }
        reset() {
          this.resolvePairs.length = 0;
        }
      });
      _export("CopyPass", CopyPass = class CopyPass {
        constructor() {
          this.copyPairs = [];
          this.uploadPairs = [];
        }
        reset() {
          this.copyPairs.length = 0;
          this.uploadPairs.length = 0;
        }
      });
      _export("MovePass", MovePass = class MovePass {
        constructor() {
          this.movePairs = [];
        }
        reset() {
          this.movePairs.length = 0;
        }
      });
      _export("RaytracePass", RaytracePass = class RaytracePass {
        constructor() {
          this.computeViews = new Map();
        }
        reset() {
          this.computeViews.clear();
        }
      });
      _export("ClearView", ClearView = class ClearView {
        constructor(slotName = '', clearFlags = ClearFlagBit.ALL, clearColor = new Color()) {
          this.slotName = void 0;
          this.clearFlags = void 0;
          this.clearColor = void 0;
          this.slotName = slotName;
          this.clearFlags = clearFlags;
          this.clearColor = clearColor;
        }
        reset(slotName = '', clearFlags = ClearFlagBit.ALL) {
          this.slotName = slotName;
          this.clearFlags = clearFlags;
          this.clearColor.reset();
        }
      });
      _export("RenderQueue", RenderQueue = class RenderQueue {
        constructor(hint = QueueHint.RENDER_OPAQUE, phaseID = 0xFFFFFFFF) {
          this.hint = void 0;
          this.phaseID = void 0;
          this.viewport = null;
          this.hint = hint;
          this.phaseID = phaseID;
        }
        reset(hint = QueueHint.RENDER_OPAQUE, phaseID = 0xFFFFFFFF) {
          this.hint = hint;
          this.phaseID = phaseID;
          this.viewport = null;
        }
      });
      (function (CullingFlags) {
        CullingFlags[CullingFlags["NONE"] = 0] = "NONE";
        CullingFlags[CullingFlags["CAMERA_FRUSTUM"] = 1] = "CAMERA_FRUSTUM";
        CullingFlags[CullingFlags["LIGHT_FRUSTUM"] = 2] = "LIGHT_FRUSTUM";
        CullingFlags[CullingFlags["LIGHT_BOUNDS"] = 4] = "LIGHT_BOUNDS";
      })(CullingFlags || _export("CullingFlags", CullingFlags = {}));
      _export("SceneData", SceneData = class SceneData {
        constructor(scene = null, camera = null, flags = SceneFlags.NONE, light = new LightInfo(), cullingFlags = CullingFlags.CAMERA_FRUSTUM, shadingLight = null) {
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
        reset(scene = null, camera = null, flags = SceneFlags.NONE, cullingFlags = CullingFlags.CAMERA_FRUSTUM, shadingLight = null) {
          this.scene = scene;
          this.camera = camera;
          this.light.reset();
          this.flags = flags;
          this.cullingFlags = cullingFlags;
          this.shadingLight = shadingLight;
        }
      });
      _export("Dispatch", Dispatch = class Dispatch {
        constructor(material = null, passID = 0, threadGroupCountX = 0, threadGroupCountY = 0, threadGroupCountZ = 0) {
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
        reset(material = null, passID = 0, threadGroupCountX = 0, threadGroupCountY = 0, threadGroupCountZ = 0) {
          this.material = material;
          this.passID = passID;
          this.threadGroupCountX = threadGroupCountX;
          this.threadGroupCountY = threadGroupCountY;
          this.threadGroupCountZ = threadGroupCountZ;
        }
      });
      _export("Blit", Blit = class Blit {
        constructor(material = null, passID = 0, sceneFlags = SceneFlags.NONE, camera = null) {
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
        reset(material = null, passID = 0, sceneFlags = SceneFlags.NONE, camera = null) {
          this.material = material;
          this.passID = passID;
          this.sceneFlags = sceneFlags;
          this.camera = camera;
        }
      });
      _export("RenderData", RenderData = class RenderData {
        constructor() {
          this.constants = new Map();
          this.buffers = new Map();
          this.textures = new Map();
          this.samplers = new Map();
          this.custom = '';
        }
        reset() {
          this.constants.clear();
          this.buffers.clear();
          this.textures.clear();
          this.samplers.clear();
          this.custom = '';
        }
      }); //=================================================================
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
      _export("RenderGraphVertex", RenderGraphVertex = class RenderGraphVertex {
        constructor(id, object) {
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
        }
      }); //-----------------------------------------------------------------
      // PropertyGraph Concept
      _export("RenderGraphNameMap", RenderGraphNameMap = class RenderGraphNameMap {
        constructor(names) {
          this._names = void 0;
          this.names = names;
          this._names = names;
        }
        get(v) {
          return this._names[v];
        }
        set(v, names) {
          this._names[v] = names;
        }
      });
      _export("RenderGraphLayoutMap", RenderGraphLayoutMap = class RenderGraphLayoutMap {
        constructor(layoutNodes) {
          this._layoutNodes = void 0;
          this.layoutNodes = layoutNodes;
          this._layoutNodes = layoutNodes;
        }
        get(v) {
          return this._layoutNodes[v];
        }
        set(v, layoutNodes) {
          this._layoutNodes[v] = layoutNodes;
        }
      });
      _export("RenderGraphDataMap", RenderGraphDataMap = class RenderGraphDataMap {
        constructor(data) {
          this._data = void 0;
          this.data = data;
          this._data = data;
        }
        get(v) {
          return this._data[v];
        }
      });
      _export("RenderGraphValidMap", RenderGraphValidMap = class RenderGraphValidMap {
        constructor(valid) {
          this._valid = void 0;
          this.valid = valid;
          this._valid = valid;
        }
        get(v) {
          return this._valid[v];
        }
        set(v, valid) {
          this._valid[v] = valid;
        }
      }); //-----------------------------------------------------------------
      // ComponentGraph Concept
      _export("RenderGraphComponent", RenderGraphComponent = {
        Name: 0,
        Layout: 1,
        Data: 2,
        Valid: 3
      });
      //-----------------------------------------------------------------
      // RenderGraph Implementation
      _export("RenderGraph", RenderGraph = class RenderGraph {
        constructor() {
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
        //-----------------------------------------------------------------
        // Graph
        // type vertex_descriptor = number;
        nullVertex() {
          return 0xFFFFFFFF;
        }
        //-----------------------------------------------------------------
        // IncidenceGraph
        // type out_edge_iterator = OutEI;
        // type degree_size_type = number;
        edge(u, v) {
          for (const oe of this._vertices[u]._outEdges) {
            if (v === oe.target) {
              return true;
            }
          }
          return false;
        }
        source(e) {
          return e.source;
        }
        target(e) {
          return e.target;
        }
        outEdges(v) {
          return new OutEI(this._vertices[v]._outEdges.values(), v);
        }
        outDegree(v) {
          return this._vertices[v]._outEdges.length;
        }
        //-----------------------------------------------------------------
        // BidirectionalGraph
        // type in_edge_iterator = InEI;
        inEdges(v) {
          return new InEI(this._vertices[v]._inEdges.values(), v);
        }
        inDegree(v) {
          return this._vertices[v]._inEdges.length;
        }
        degree(v) {
          return this.outDegree(v) + this.inDegree(v);
        }
        //-----------------------------------------------------------------
        // AdjacencyGraph
        // type adjacency_iterator = AdjI;
        adjacentVertices(v) {
          return new AdjI(this, this.outEdges(v));
        }
        //-----------------------------------------------------------------
        // VertexListGraph
        vertices() {
          return this._vertices.keys();
        }
        numVertices() {
          return this._vertices.length;
        }
        //-----------------------------------------------------------------
        // EdgeListGraph
        numEdges() {
          let numEdges = 0;
          for (const v of this.vertices()) {
            numEdges += this.outDegree(v);
          }
          return numEdges;
        }
        //-----------------------------------------------------------------
        // MutableGraph
        clear() {
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
        }
        addVertex(id, object, name, layout, data, valid, u = 0xFFFFFFFF) {
          const vert = new RenderGraphVertex(id, object);
          const v = this._vertices.length;
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
        }
        clearVertex(v) {
          // ReferenceGraph(Separated)
          const vert = this._vertices[v];
          // clear out edges
          for (const oe of vert._outEdges) {
            const target = this._vertices[oe.target];
            for (let i = 0; i !== target._inEdges.length;) {
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
          for (const ie of vert._inEdges) {
            const source = this._vertices[ie.target];
            for (let i = 0; i !== source._outEdges.length;) {
              // remove all edges
              if (source._outEdges[i].target === v) {
                source._outEdges.splice(i, 1);
              } else {
                ++i;
              }
            }
          }
          vert._inEdges.length = 0;

          // clear child edges
          for (const oe of vert._children) {
            const target = this._vertices[oe.target];
            for (let i = 0; i !== target._parents.length;) {
              // remove all edges
              if (target._parents[i].target === v) {
                target._parents.splice(i, 1);
              } else {
                ++i;
              }
            }
          }
          vert._children.length = 0;

          // clear parent edges
          for (const ie of vert._parents) {
            const source = this._vertices[ie.target];
            for (let i = 0; i !== source._children.length;) {
              // remove all edges
              if (source._children[i].target === v) {
                source._children.splice(i, 1);
              } else {
                ++i;
              }
            }
          }
          vert._parents.length = 0;
        }
        removeVertex(u) {
          this._vertices.splice(u, 1);
          this._names.splice(u, 1);
          this._layoutNodes.splice(u, 1);
          this._data.splice(u, 1);
          this._valid.splice(u, 1);
          const sz = this._vertices.length;
          if (u === sz) {
            return;
          }
          for (let v = 0; v !== sz; ++v) {
            const vert = this._vertices[v];
            reindexEdgeList(vert._outEdges, u);
            reindexEdgeList(vert._inEdges, u);
            // ReferenceGraph (Separated)
            reindexEdgeList(vert._children, u);
            reindexEdgeList(vert._parents, u);
          }
        }
        addEdge(u, v) {
          // update in/out edge list
          this._vertices[u]._outEdges.push(new OutE(v));
          this._vertices[v]._inEdges.push(new OutE(u));
          return new ED(u, v);
        }
        removeEdges(u, v) {
          const source = this._vertices[u];
          // remove out edges of u
          for (let i = 0; i !== source._outEdges.length;) {
            // remove all edges
            if (source._outEdges[i].target === v) {
              source._outEdges.splice(i, 1);
            } else {
              ++i;
            }
          }
          // remove in edges of v
          const target = this._vertices[v];
          for (let i = 0; i !== target._inEdges.length;) {
            // remove all edges
            if (target._inEdges[i].target === u) {
              target._inEdges.splice(i, 1);
            } else {
              ++i;
            }
          }
        }
        removeEdge(e) {
          const u = e.source;
          const v = e.target;
          const source = this._vertices[u];
          for (let i = 0; i !== source._outEdges.length;) {
            if (source._outEdges[i].target === v) {
              source._outEdges.splice(i, 1);
              break; // remove one edge
            } else {
              ++i;
            }
          }
          const target = this._vertices[v];
          for (let i = 0; i !== target._inEdges.length;) {
            if (target._inEdges[i].target === u) {
              target._inEdges.splice(i, 1);
              break; // remove one edge
            } else {
              ++i;
            }
          }
        }
        //-----------------------------------------------------------------
        // NamedGraph
        vertexName(v) {
          return this._names[v];
        }
        vertexNameMap() {
          return new RenderGraphNameMap(this._names);
        }
        //-----------------------------------------------------------------
        // PropertyGraph
        get(tag) {
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
        component(id, v) {
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
        }
        componentMap(id) {
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
        }
        getName(v) {
          return this._names[v];
        }
        setName(v, value) {
          this._names[v] = value;
        }
        getLayout(v) {
          return this._layoutNodes[v];
        }
        setLayout(v, value) {
          this._layoutNodes[v] = value;
        }
        getData(v) {
          return this._data[v];
        }
        getValid(v) {
          return this._valid[v];
        }
        setValid(v, value) {
          this._valid[v] = value;
        }
        //-----------------------------------------------------------------
        // PolymorphicGraph
        holds(id, v) {
          return this._vertices[v]._id === id;
        }
        id(v) {
          return this._vertices[v]._id;
        }
        object(v) {
          return this._vertices[v]._object;
        }
        value(id, v) {
          if (this._vertices[v]._id === id) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        tryValue(id, v) {
          if (this._vertices[v]._id === id) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        visitVertex(visitor, v) {
          const vert = this._vertices[v];
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
        }
        getRasterPass(v) {
          if (this._vertices[v]._id === RenderGraphValue.RasterPass) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getRasterSubpass(v) {
          if (this._vertices[v]._id === RenderGraphValue.RasterSubpass) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getComputeSubpass(v) {
          if (this._vertices[v]._id === RenderGraphValue.ComputeSubpass) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getCompute(v) {
          if (this._vertices[v]._id === RenderGraphValue.Compute) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getResolve(v) {
          if (this._vertices[v]._id === RenderGraphValue.Resolve) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getCopy(v) {
          if (this._vertices[v]._id === RenderGraphValue.Copy) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getMove(v) {
          if (this._vertices[v]._id === RenderGraphValue.Move) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getRaytrace(v) {
          if (this._vertices[v]._id === RenderGraphValue.Raytrace) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getQueue(v) {
          if (this._vertices[v]._id === RenderGraphValue.Queue) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getScene(v) {
          if (this._vertices[v]._id === RenderGraphValue.Scene) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getBlit(v) {
          if (this._vertices[v]._id === RenderGraphValue.Blit) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getDispatch(v) {
          if (this._vertices[v]._id === RenderGraphValue.Dispatch) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getClear(v) {
          if (this._vertices[v]._id === RenderGraphValue.Clear) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getViewport(v) {
          if (this._vertices[v]._id === RenderGraphValue.Viewport) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        tryGetRasterPass(v) {
          if (this._vertices[v]._id === RenderGraphValue.RasterPass) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetRasterSubpass(v) {
          if (this._vertices[v]._id === RenderGraphValue.RasterSubpass) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetComputeSubpass(v) {
          if (this._vertices[v]._id === RenderGraphValue.ComputeSubpass) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetCompute(v) {
          if (this._vertices[v]._id === RenderGraphValue.Compute) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetResolve(v) {
          if (this._vertices[v]._id === RenderGraphValue.Resolve) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetCopy(v) {
          if (this._vertices[v]._id === RenderGraphValue.Copy) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetMove(v) {
          if (this._vertices[v]._id === RenderGraphValue.Move) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetRaytrace(v) {
          if (this._vertices[v]._id === RenderGraphValue.Raytrace) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetQueue(v) {
          if (this._vertices[v]._id === RenderGraphValue.Queue) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetScene(v) {
          if (this._vertices[v]._id === RenderGraphValue.Scene) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetBlit(v) {
          if (this._vertices[v]._id === RenderGraphValue.Blit) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetDispatch(v) {
          if (this._vertices[v]._id === RenderGraphValue.Dispatch) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetClear(v) {
          if (this._vertices[v]._id === RenderGraphValue.Clear) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetViewport(v) {
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
        reference(u, v) {
          for (const oe of this._vertices[u]._children) {
            if (v === oe.target) {
              return true;
            }
          }
          return false;
        }
        parent(e) {
          return e.source;
        }
        child(e) {
          return e.target;
        }
        parents(v) {
          return new InEI(this._vertices[v]._parents.values(), v);
        }
        children(v) {
          return new OutEI(this._vertices[v]._children.values(), v);
        }
        numParents(v) {
          return this._vertices[v]._parents.length;
        }
        numChildren(v) {
          return this._vertices[v]._children.length;
        }
        getParent(v) {
          if (v === 0xFFFFFFFF) {
            return 0xFFFFFFFF;
          }
          const list = this._vertices[v]._parents;
          if (list.length === 0) {
            return 0xFFFFFFFF;
          } else {
            return list[0].target;
          }
        }
        isAncestor(ancestor, descendent) {
          const pseudo = 0xFFFFFFFF;
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
          for (let parent = this.getParent(descendent); parent !== pseudo;) {
            if (ancestor === parent) {
              return true;
            }
            parent = this.getParent(parent);
          }
          return false;
        }
        //-----------------------------------------------------------------
        // MutableReferenceGraph
        addReference(u, v) {
          // update in/out edge list
          this._vertices[u]._children.push(new OutE(v));
          this._vertices[v]._parents.push(new OutE(u));
          return new ED(u, v);
        }
        removeReference(e) {
          const u = e.source;
          const v = e.target;
          const source = this._vertices[u];
          for (let i = 0; i !== source._children.length;) {
            if (source._children[i].target === v) {
              source._children.splice(i, 1);
              break; // remove one edge
            } else {
              ++i;
            }
          }
          const target = this._vertices[v];
          for (let i = 0; i !== target._parents.length;) {
            if (target._parents[i].target === u) {
              target._parents.splice(i, 1);
              break; // remove one edge
            } else {
              ++i;
            }
          }
        }
        removeReferences(u, v) {
          const source = this._vertices[u];
          // remove out edges of u
          for (let i = 0; i !== source._children.length;) {
            // remove all edges
            if (source._children[i].target === v) {
              source._children.splice(i, 1);
            } else {
              ++i;
            }
          }
          // remove in edges of v
          const target = this._vertices[v];
          for (let i = 0; i !== target._parents.length;) {
            // remove all edges
            if (target._parents[i].target === u) {
              target._parents.splice(i, 1);
            } else {
              ++i;
            }
          }
        }
      });
      _export("RenderGraphObjectPoolSettings", RenderGraphObjectPoolSettings = class RenderGraphObjectPoolSettings {
        constructor(batchSize) {
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
        }
      });
      _export("RenderGraphObjectPool", RenderGraphObjectPool = class RenderGraphObjectPool {
        constructor(settings, renderCommon) {
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
          this._clearValue = new RecyclePool(() => new ClearValue(), settings.clearValueBatchSize);
          this._rasterView = new RecyclePool(() => new RasterView(), settings.rasterViewBatchSize);
          this._computeView = new RecyclePool(() => new ComputeView(), settings.computeViewBatchSize);
          this._resourceDesc = new RecyclePool(() => new ResourceDesc(), settings.resourceDescBatchSize);
          this._resourceTraits = new RecyclePool(() => new ResourceTraits(), settings.resourceTraitsBatchSize);
          this._renderSwapchain = new RecyclePool(() => new RenderSwapchain(), settings.renderSwapchainBatchSize);
          this._resourceStates = new RecyclePool(() => new ResourceStates(), settings.resourceStatesBatchSize);
          this._managedBuffer = new RecyclePool(() => new ManagedBuffer(), settings.managedBufferBatchSize);
          this._persistentBuffer = new RecyclePool(() => new PersistentBuffer(), settings.persistentBufferBatchSize);
          this._managedTexture = new RecyclePool(() => new ManagedTexture(), settings.managedTextureBatchSize);
          this._persistentTexture = new RecyclePool(() => new PersistentTexture(), settings.persistentTextureBatchSize);
          this._managedResource = new RecyclePool(() => new ManagedResource(), settings.managedResourceBatchSize);
          this._subpass = new RecyclePool(() => new Subpass(), settings.subpassBatchSize);
          this._subpassGraph = new RecyclePool(() => new SubpassGraph(), settings.subpassGraphBatchSize);
          this._rasterSubpass = new RecyclePool(() => new RasterSubpass(), settings.rasterSubpassBatchSize);
          this._computeSubpass = new RecyclePool(() => new ComputeSubpass(), settings.computeSubpassBatchSize);
          this._rasterPass = new RecyclePool(() => new RasterPass(), settings.rasterPassBatchSize);
          this._persistentRenderPassAndFramebuffer = new RecyclePool(() => new PersistentRenderPassAndFramebuffer(), settings.persistentRenderPassAndFramebufferBatchSize);
          this._formatView = new RecyclePool(() => new FormatView(), settings.formatViewBatchSize);
          this._subresourceView = new RecyclePool(() => new SubresourceView(), settings.subresourceViewBatchSize);
          this._resourceGraph = new RecyclePool(() => new ResourceGraph(), settings.resourceGraphBatchSize);
          this._computePass = new RecyclePool(() => new ComputePass(), settings.computePassBatchSize);
          this._resolvePass = new RecyclePool(() => new ResolvePass(), settings.resolvePassBatchSize);
          this._copyPass = new RecyclePool(() => new CopyPass(), settings.copyPassBatchSize);
          this._movePass = new RecyclePool(() => new MovePass(), settings.movePassBatchSize);
          this._raytracePass = new RecyclePool(() => new RaytracePass(), settings.raytracePassBatchSize);
          this._clearView = new RecyclePool(() => new ClearView(), settings.clearViewBatchSize);
          this._renderQueue = new RecyclePool(() => new RenderQueue(), settings.renderQueueBatchSize);
          this._sceneData = new RecyclePool(() => new SceneData(), settings.sceneDataBatchSize);
          this._dispatch = new RecyclePool(() => new Dispatch(), settings.dispatchBatchSize);
          this._blit = new RecyclePool(() => new Blit(), settings.blitBatchSize);
          this._renderData = new RecyclePool(() => new RenderData(), settings.renderDataBatchSize);
          this._renderGraph = new RecyclePool(() => new RenderGraph(), settings.renderGraphBatchSize);
        }
        reset() {
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
        }
        createClearValue(x = 0, y = 0, z = 0, w = 0) {
          const v = this._clearValue.add();
          v.reset(x, y, z, w);
          return v;
        }
        createRasterView(slotName = '', accessType = AccessType.WRITE, attachmentType = AttachmentType.RENDER_TARGET, loadOp = LoadOp.LOAD, storeOp = StoreOp.STORE, clearFlags = ClearFlagBit.ALL, shaderStageFlags = ShaderStageFlagBit.NONE) {
          const v = this._rasterView.add();
          v.reset(slotName, accessType, attachmentType, loadOp, storeOp, clearFlags, shaderStageFlags);
          return v;
        }
        createComputeView(name = '', accessType = AccessType.READ, clearFlags = ClearFlagBit.NONE, clearValueType = ClearValueType.NONE, shaderStageFlags = ShaderStageFlagBit.NONE) {
          const v = this._computeView.add();
          v.reset(name, accessType, clearFlags, clearValueType, shaderStageFlags);
          return v;
        }
        createResourceDesc() {
          const v = this._resourceDesc.add();
          v.reset();
          return v;
        }
        createResourceTraits(residency = ResourceResidency.MANAGED) {
          const v = this._resourceTraits.add();
          v.reset(residency);
          return v;
        }
        createRenderSwapchain(swapchain = null) {
          const v = this._renderSwapchain.add();
          v.reset(swapchain);
          return v;
        }
        createResourceStates() {
          const v = this._resourceStates.add();
          v.reset();
          return v;
        }
        createManagedBuffer(buffer = null) {
          const v = this._managedBuffer.add();
          v.reset(buffer);
          return v;
        }
        createPersistentBuffer(buffer = null) {
          const v = this._persistentBuffer.add();
          v.reset(buffer);
          return v;
        }
        createManagedTexture(texture = null) {
          const v = this._managedTexture.add();
          v.reset(texture);
          return v;
        }
        createPersistentTexture(texture = null) {
          const v = this._persistentTexture.add();
          v.reset(texture);
          return v;
        }
        createManagedResource() {
          const v = this._managedResource.add();
          v.reset();
          return v;
        }
        createSubpass() {
          const v = this._subpass.add();
          v.reset();
          return v;
        }
        createSubpassGraph() {
          const v = this._subpassGraph.add();
          v.clear();
          return v;
        }
        createRasterSubpass(subpassID = 0xFFFFFFFF, count = 1, quality = 0) {
          const v = this._rasterSubpass.add();
          v.reset(subpassID, count, quality);
          return v;
        }
        createComputeSubpass(subpassID = 0xFFFFFFFF) {
          const v = this._computeSubpass.add();
          v.reset(subpassID);
          return v;
        }
        createRasterPass() {
          const v = this._rasterPass.add();
          v.reset();
          return v;
        }
        createPersistentRenderPassAndFramebuffer(renderPass = null, framebuffer = null) {
          const v = this._persistentRenderPassAndFramebuffer.add();
          v.reset(renderPass, framebuffer);
          return v;
        }
        createFormatView() {
          const v = this._formatView.add();
          v.reset();
          return v;
        }
        createSubresourceView() {
          const v = this._subresourceView.add();
          v.reset();
          return v;
        }
        createResourceGraph() {
          const v = this._resourceGraph.add();
          v.clear();
          return v;
        }
        createComputePass() {
          const v = this._computePass.add();
          v.reset();
          return v;
        }
        createResolvePass() {
          const v = this._resolvePass.add();
          v.reset();
          return v;
        }
        createCopyPass() {
          const v = this._copyPass.add();
          v.reset();
          return v;
        }
        createMovePass() {
          const v = this._movePass.add();
          v.reset();
          return v;
        }
        createRaytracePass() {
          const v = this._raytracePass.add();
          v.reset();
          return v;
        }
        createClearView(slotName = '', clearFlags = ClearFlagBit.ALL) {
          const v = this._clearView.add();
          v.reset(slotName, clearFlags);
          return v;
        }
        createRenderQueue(hint = QueueHint.RENDER_OPAQUE, phaseID = 0xFFFFFFFF) {
          const v = this._renderQueue.add();
          v.reset(hint, phaseID);
          return v;
        }
        createSceneData(scene = null, camera = null, flags = SceneFlags.NONE, cullingFlags = CullingFlags.CAMERA_FRUSTUM, shadingLight = null) {
          const v = this._sceneData.add();
          v.reset(scene, camera, flags, cullingFlags, shadingLight);
          return v;
        }
        createDispatch(material = null, passID = 0, threadGroupCountX = 0, threadGroupCountY = 0, threadGroupCountZ = 0) {
          const v = this._dispatch.add();
          v.reset(material, passID, threadGroupCountX, threadGroupCountY, threadGroupCountZ);
          return v;
        }
        createBlit(material = null, passID = 0, sceneFlags = SceneFlags.NONE, camera = null) {
          const v = this._blit.add();
          v.reset(material, passID, sceneFlags, camera);
          return v;
        }
        createRenderData() {
          const v = this._renderData.add();
          v.reset();
          return v;
        }
        createRenderGraph() {
          const v = this._renderGraph.add();
          v.clear();
          return v;
        }
      });
    }
  };
});