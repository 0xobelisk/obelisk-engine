System.register("q-bundled:///fs/cocos/rendering/custom/layout-graph.js", ["./graph.js", "../../gfx/index.js", "./types.js", "./serialization.js", "../../core/memop/index.js"], function (_export, _context) {
  "use strict";

  var AdjI, ED, InEI, OutE, OutEI, directional, findRelative, getPath, parallel, reindexEdgeList, traversal, DescriptorSetLayoutInfo, ShaderStageFlagBit, Type, UniformBlock, DescriptorBlock, saveDescriptorBlock, loadDescriptorBlock, DescriptorBlockIndex, saveDescriptorBlockIndex, loadDescriptorBlockIndex, DescriptorTypeOrder, saveUniformBlock, loadUniformBlock, saveDescriptorSetLayoutInfo, loadDescriptorSetLayoutInfo, RecyclePool, DescriptorDB, RenderPhase, LayoutGraphVertex, LayoutGraphNameMap, LayoutGraphDescriptorsMap, LayoutGraph, UniformData, UniformBlockData, DescriptorData, DescriptorBlockData, DescriptorSetLayoutData, DescriptorSetData, PipelineLayoutData, ShaderBindingData, ShaderLayoutData, TechniqueData, EffectData, ShaderProgramData, RenderStageData, RenderPhaseData, LayoutGraphDataVertex, LayoutGraphDataNameMap, LayoutGraphDataUpdateMap, LayoutGraphDataLayoutMap, LayoutGraphData, LayoutGraphObjectPoolSettings, LayoutGraphObjectPool, RenderPassType, LayoutGraphValue, LayoutGraphComponent, LayoutGraphDataValue, LayoutGraphDataComponent;
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
  function getRenderPassTypeName(e) {
    switch (e) {
      case RenderPassType.SINGLE_RENDER_PASS:
        return 'SINGLE_RENDER_PASS';
      case RenderPassType.RENDER_PASS:
        return 'RENDER_PASS';
      case RenderPassType.RENDER_SUBPASS:
        return 'RENDER_SUBPASS';
      default:
        return '';
    }
  }

  //=================================================================
  // LayoutGraph
  //=================================================================
  // PolymorphicGraph Concept

  function getLayoutGraphValueName(e) {
    switch (e) {
      case LayoutGraphValue.RenderStage:
        return 'RenderStage';
      case LayoutGraphValue.RenderPhase:
        return 'RenderPhase';
      default:
        return '';
    }
  }
  function getLayoutGraphDataValueName(e) {
    switch (e) {
      case LayoutGraphDataValue.RenderStage:
        return 'RenderStage';
      case LayoutGraphDataValue.RenderPhase:
        return 'RenderPhase';
      default:
        return '';
    }
  }
  function saveDescriptorDB(ar, v) {
    ar.writeNumber(v.blocks.size); // Map<string, DescriptorBlock>
    for (const [k1, v1] of v.blocks) {
      saveDescriptorBlockIndex(ar, JSON.parse(k1));
      saveDescriptorBlock(ar, v1);
    }
  }
  function loadDescriptorDB(ar, v) {
    let sz = 0;
    sz = ar.readNumber(); // Map<string, DescriptorBlock>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = new DescriptorBlockIndex();
      loadDescriptorBlockIndex(ar, k1);
      const v1 = new DescriptorBlock();
      loadDescriptorBlock(ar, v1);
      v.blocks.set(JSON.stringify(k1), v1);
    }
  }
  function saveRenderPhase(ar, v) {
    ar.writeNumber(v.shaders.size); // Set<string>
    for (const v1 of v.shaders) {
      ar.writeString(v1);
    }
  }
  function loadRenderPhase(ar, v) {
    let sz = 0;
    sz = ar.readNumber(); // Set<string>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const v1 = ar.readString();
      v.shaders.add(v1);
    }
  }
  function saveLayoutGraph(ar, g) {
    const numVertices = g.numVertices();
    const numEdges = g.numEdges();
    ar.writeNumber(numVertices);
    ar.writeNumber(numEdges);
    let numStages = 0;
    let numPhases = 0;
    for (const v of g.vertices()) {
      switch (g.id(v)) {
        case LayoutGraphValue.RenderStage:
          numStages += 1;
          break;
        case LayoutGraphValue.RenderPhase:
          numPhases += 1;
          break;
        default:
          break;
      }
    }
    ar.writeNumber(numStages);
    ar.writeNumber(numPhases);
    for (const v of g.vertices()) {
      ar.writeNumber(g.id(v));
      ar.writeNumber(g.getParent(v));
      ar.writeString(g.getName(v));
      saveDescriptorDB(ar, g.getDescriptors(v));
      switch (g.id(v)) {
        case LayoutGraphValue.RenderStage:
          ar.writeNumber(g.getRenderStage(v));
          break;
        case LayoutGraphValue.RenderPhase:
          saveRenderPhase(ar, g.getRenderPhase(v));
          break;
        default:
          break;
      }
    }
  }
  function loadLayoutGraph(ar, g) {
    const numVertices = ar.readNumber();
    const numEdges = ar.readNumber();
    const numStages = ar.readNumber();
    const numPhases = ar.readNumber();
    for (let v = 0; v !== numVertices; ++v) {
      const id = ar.readNumber();
      const u = ar.readNumber();
      const name = ar.readString();
      const descriptors = new DescriptorDB();
      loadDescriptorDB(ar, descriptors);
      switch (id) {
        case LayoutGraphValue.RenderStage:
          {
            const renderStage = ar.readNumber();
            g.addVertex(LayoutGraphValue.RenderStage, renderStage, name, descriptors, u);
            break;
          }
        case LayoutGraphValue.RenderPhase:
          {
            const renderPhase = new RenderPhase();
            loadRenderPhase(ar, renderPhase);
            g.addVertex(LayoutGraphValue.RenderPhase, renderPhase, name, descriptors, u);
            break;
          }
        default:
          break;
      }
    }
  }
  function saveUniformData(ar, v) {
    ar.writeNumber(v.uniformID);
    ar.writeNumber(v.uniformType);
    ar.writeNumber(v.offset);
    ar.writeNumber(v.size);
  }
  function loadUniformData(ar, v) {
    v.uniformID = ar.readNumber();
    v.uniformType = ar.readNumber();
    v.offset = ar.readNumber();
    v.size = ar.readNumber();
  }
  function saveUniformBlockData(ar, v) {
    ar.writeNumber(v.bufferSize);
    ar.writeNumber(v.uniforms.length); // UniformData[]
    for (const v1 of v.uniforms) {
      saveUniformData(ar, v1);
    }
  }
  function loadUniformBlockData(ar, v) {
    v.bufferSize = ar.readNumber();
    let sz = 0;
    sz = ar.readNumber(); // UniformData[]
    v.uniforms.length = sz;
    for (let i1 = 0; i1 !== sz; ++i1) {
      const v1 = new UniformData();
      loadUniformData(ar, v1);
      v.uniforms[i1] = v1;
    }
  }
  function saveDescriptorData(ar, v) {
    ar.writeNumber(v.descriptorID);
    ar.writeNumber(v.type);
    ar.writeNumber(v.count);
  }
  function loadDescriptorData(ar, v) {
    v.descriptorID = ar.readNumber();
    v.type = ar.readNumber();
    v.count = ar.readNumber();
  }
  function saveDescriptorBlockData(ar, v) {
    ar.writeNumber(v.type);
    ar.writeNumber(v.visibility);
    ar.writeNumber(v.offset);
    ar.writeNumber(v.capacity);
    ar.writeNumber(v.descriptors.length); // DescriptorData[]
    for (const v1 of v.descriptors) {
      saveDescriptorData(ar, v1);
    }
  }
  function loadDescriptorBlockData(ar, v) {
    v.type = ar.readNumber();
    v.visibility = ar.readNumber();
    v.offset = ar.readNumber();
    v.capacity = ar.readNumber();
    let sz = 0;
    sz = ar.readNumber(); // DescriptorData[]
    v.descriptors.length = sz;
    for (let i1 = 0; i1 !== sz; ++i1) {
      const v1 = new DescriptorData();
      loadDescriptorData(ar, v1);
      v.descriptors[i1] = v1;
    }
  }
  function saveDescriptorSetLayoutData(ar, v) {
    ar.writeNumber(v.slot);
    ar.writeNumber(v.capacity);
    ar.writeNumber(v.uniformBlockCapacity);
    ar.writeNumber(v.samplerTextureCapacity);
    ar.writeNumber(v.descriptorBlocks.length); // DescriptorBlockData[]
    for (const v1 of v.descriptorBlocks) {
      saveDescriptorBlockData(ar, v1);
    }
    ar.writeNumber(v.uniformBlocks.size); // Map<number, UniformBlock>
    for (const [k1, v1] of v.uniformBlocks) {
      ar.writeNumber(k1);
      saveUniformBlock(ar, v1);
    }
    ar.writeNumber(v.bindingMap.size); // Map<number, number>
    for (const [k1, v1] of v.bindingMap) {
      ar.writeNumber(k1);
      ar.writeNumber(v1);
    }
  }
  function loadDescriptorSetLayoutData(ar, v) {
    v.slot = ar.readNumber();
    v.capacity = ar.readNumber();
    v.uniformBlockCapacity = ar.readNumber();
    v.samplerTextureCapacity = ar.readNumber();
    let sz = 0;
    sz = ar.readNumber(); // DescriptorBlockData[]
    v.descriptorBlocks.length = sz;
    for (let i1 = 0; i1 !== sz; ++i1) {
      const v1 = new DescriptorBlockData();
      loadDescriptorBlockData(ar, v1);
      v.descriptorBlocks[i1] = v1;
    }
    sz = ar.readNumber(); // Map<number, UniformBlock>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = ar.readNumber();
      const v1 = new UniformBlock();
      loadUniformBlock(ar, v1);
      v.uniformBlocks.set(k1, v1);
    }
    sz = ar.readNumber(); // Map<number, number>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = ar.readNumber();
      const v1 = ar.readNumber();
      v.bindingMap.set(k1, v1);
    }
  }
  function saveDescriptorSetData(ar, v) {
    saveDescriptorSetLayoutData(ar, v.descriptorSetLayoutData);
    saveDescriptorSetLayoutInfo(ar, v.descriptorSetLayoutInfo);
    // skip, v.descriptorSetLayout: DescriptorSetLayout
    // skip, v.descriptorSet: DescriptorSet
  }

  function loadDescriptorSetData(ar, v) {
    loadDescriptorSetLayoutData(ar, v.descriptorSetLayoutData);
    loadDescriptorSetLayoutInfo(ar, v.descriptorSetLayoutInfo);
    // skip, v.descriptorSetLayout: DescriptorSetLayout
    // skip, v.descriptorSet: DescriptorSet
  }

  function savePipelineLayoutData(ar, v) {
    ar.writeNumber(v.descriptorSets.size); // Map<UpdateFrequency, DescriptorSetData>
    for (const [k1, v1] of v.descriptorSets) {
      ar.writeNumber(k1);
      saveDescriptorSetData(ar, v1);
    }
  }
  function loadPipelineLayoutData(ar, v) {
    let sz = 0;
    sz = ar.readNumber(); // Map<UpdateFrequency, DescriptorSetData>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = ar.readNumber();
      const v1 = new DescriptorSetData();
      loadDescriptorSetData(ar, v1);
      v.descriptorSets.set(k1, v1);
    }
  }
  function saveShaderBindingData(ar, v) {
    ar.writeNumber(v.descriptorBindings.size); // Map<number, number>
    for (const [k1, v1] of v.descriptorBindings) {
      ar.writeNumber(k1);
      ar.writeNumber(v1);
    }
  }
  function loadShaderBindingData(ar, v) {
    let sz = 0;
    sz = ar.readNumber(); // Map<number, number>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = ar.readNumber();
      const v1 = ar.readNumber();
      v.descriptorBindings.set(k1, v1);
    }
  }
  function saveShaderLayoutData(ar, v) {
    ar.writeNumber(v.layoutData.size); // Map<UpdateFrequency, DescriptorSetLayoutData>
    for (const [k1, v1] of v.layoutData) {
      ar.writeNumber(k1);
      saveDescriptorSetLayoutData(ar, v1);
    }
    ar.writeNumber(v.bindingData.size); // Map<UpdateFrequency, ShaderBindingData>
    for (const [k1, v1] of v.bindingData) {
      ar.writeNumber(k1);
      saveShaderBindingData(ar, v1);
    }
  }
  function loadShaderLayoutData(ar, v) {
    let sz = 0;
    sz = ar.readNumber(); // Map<UpdateFrequency, DescriptorSetLayoutData>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = ar.readNumber();
      const v1 = new DescriptorSetLayoutData();
      loadDescriptorSetLayoutData(ar, v1);
      v.layoutData.set(k1, v1);
    }
    sz = ar.readNumber(); // Map<UpdateFrequency, ShaderBindingData>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = ar.readNumber();
      const v1 = new ShaderBindingData();
      loadShaderBindingData(ar, v1);
      v.bindingData.set(k1, v1);
    }
  }
  function saveTechniqueData(ar, v) {
    ar.writeNumber(v.passes.length); // ShaderLayoutData[]
    for (const v1 of v.passes) {
      saveShaderLayoutData(ar, v1);
    }
  }
  function loadTechniqueData(ar, v) {
    let sz = 0;
    sz = ar.readNumber(); // ShaderLayoutData[]
    v.passes.length = sz;
    for (let i1 = 0; i1 !== sz; ++i1) {
      const v1 = new ShaderLayoutData();
      loadShaderLayoutData(ar, v1);
      v.passes[i1] = v1;
    }
  }
  function saveEffectData(ar, v) {
    ar.writeNumber(v.techniques.size); // Map<string, TechniqueData>
    for (const [k1, v1] of v.techniques) {
      ar.writeString(k1);
      saveTechniqueData(ar, v1);
    }
  }
  function loadEffectData(ar, v) {
    let sz = 0;
    sz = ar.readNumber(); // Map<string, TechniqueData>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = ar.readString();
      const v1 = new TechniqueData();
      loadTechniqueData(ar, v1);
      v.techniques.set(k1, v1);
    }
  }
  function saveShaderProgramData(ar, v) {
    savePipelineLayoutData(ar, v.layout);
    // skip, v.pipelineLayout: PipelineLayout
  }

  function loadShaderProgramData(ar, v) {
    loadPipelineLayoutData(ar, v.layout);
    // skip, v.pipelineLayout: PipelineLayout
  }

  function saveRenderStageData(ar, v) {
    ar.writeNumber(v.descriptorVisibility.size); // Map<number, ShaderStageFlagBit>
    for (const [k1, v1] of v.descriptorVisibility) {
      ar.writeNumber(k1);
      ar.writeNumber(v1);
    }
  }
  function loadRenderStageData(ar, v) {
    let sz = 0;
    sz = ar.readNumber(); // Map<number, ShaderStageFlagBit>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = ar.readNumber();
      const v1 = ar.readNumber();
      v.descriptorVisibility.set(k1, v1);
    }
  }
  function saveRenderPhaseData(ar, v) {
    ar.writeString(v.rootSignature);
    ar.writeNumber(v.shaderPrograms.length); // ShaderProgramData[]
    for (const v1 of v.shaderPrograms) {
      saveShaderProgramData(ar, v1);
    }
    ar.writeNumber(v.shaderIndex.size); // Map<string, number>
    for (const [k1, v1] of v.shaderIndex) {
      ar.writeString(k1);
      ar.writeNumber(v1);
    }
    // skip, v.pipelineLayout: PipelineLayout
  }

  function loadRenderPhaseData(ar, v) {
    v.rootSignature = ar.readString();
    let sz = 0;
    sz = ar.readNumber(); // ShaderProgramData[]
    v.shaderPrograms.length = sz;
    for (let i1 = 0; i1 !== sz; ++i1) {
      const v1 = new ShaderProgramData();
      loadShaderProgramData(ar, v1);
      v.shaderPrograms[i1] = v1;
    }
    sz = ar.readNumber(); // Map<string, number>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = ar.readString();
      const v1 = ar.readNumber();
      v.shaderIndex.set(k1, v1);
    }
    // skip, v.pipelineLayout: PipelineLayout
  }

  function saveLayoutGraphData(ar, g) {
    const numVertices = g.numVertices();
    const numEdges = g.numEdges();
    ar.writeNumber(numVertices);
    ar.writeNumber(numEdges);
    let numStages = 0;
    let numPhases = 0;
    for (const v of g.vertices()) {
      switch (g.id(v)) {
        case LayoutGraphDataValue.RenderStage:
          numStages += 1;
          break;
        case LayoutGraphDataValue.RenderPhase:
          numPhases += 1;
          break;
        default:
          break;
      }
    }
    ar.writeNumber(numStages);
    ar.writeNumber(numPhases);
    for (const v of g.vertices()) {
      ar.writeNumber(g.id(v));
      ar.writeNumber(g.getParent(v));
      ar.writeString(g.getName(v));
      ar.writeNumber(g.getUpdate(v));
      savePipelineLayoutData(ar, g.getLayout(v));
      switch (g.id(v)) {
        case LayoutGraphDataValue.RenderStage:
          saveRenderStageData(ar, g.getRenderStage(v));
          break;
        case LayoutGraphDataValue.RenderPhase:
          saveRenderPhaseData(ar, g.getRenderPhase(v));
          break;
        default:
          break;
      }
    }
    ar.writeNumber(g.valueNames.length); // string[]
    for (const v1 of g.valueNames) {
      ar.writeString(v1);
    }
    ar.writeNumber(g.attributeIndex.size); // Map<string, number>
    for (const [k1, v1] of g.attributeIndex) {
      ar.writeString(k1);
      ar.writeNumber(v1);
    }
    ar.writeNumber(g.constantIndex.size); // Map<string, number>
    for (const [k1, v1] of g.constantIndex) {
      ar.writeString(k1);
      ar.writeNumber(v1);
    }
    ar.writeNumber(g.shaderLayoutIndex.size); // Map<string, number>
    for (const [k1, v1] of g.shaderLayoutIndex) {
      ar.writeString(k1);
      ar.writeNumber(v1);
    }
    ar.writeNumber(g.effects.size); // Map<string, EffectData>
    for (const [k1, v1] of g.effects) {
      ar.writeString(k1);
      saveEffectData(ar, v1);
    }
  }
  function loadLayoutGraphData(ar, g) {
    const numVertices = ar.readNumber();
    const numEdges = ar.readNumber();
    const numStages = ar.readNumber();
    const numPhases = ar.readNumber();
    for (let v = 0; v !== numVertices; ++v) {
      const id = ar.readNumber();
      const u = ar.readNumber();
      const name = ar.readString();
      const update = ar.readNumber();
      const layout = new PipelineLayoutData();
      loadPipelineLayoutData(ar, layout);
      switch (id) {
        case LayoutGraphDataValue.RenderStage:
          {
            const renderStage = new RenderStageData();
            loadRenderStageData(ar, renderStage);
            g.addVertex(LayoutGraphDataValue.RenderStage, renderStage, name, update, layout, u);
            break;
          }
        case LayoutGraphDataValue.RenderPhase:
          {
            const renderPhase = new RenderPhaseData();
            loadRenderPhaseData(ar, renderPhase);
            g.addVertex(LayoutGraphDataValue.RenderPhase, renderPhase, name, update, layout, u);
            break;
          }
        default:
          break;
      }
    }
    let sz = 0;
    sz = ar.readNumber(); // string[]
    g.valueNames.length = sz;
    for (let i1 = 0; i1 !== sz; ++i1) {
      g.valueNames[i1] = ar.readString();
    }
    sz = ar.readNumber(); // Map<string, number>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = ar.readString();
      const v1 = ar.readNumber();
      g.attributeIndex.set(k1, v1);
    }
    sz = ar.readNumber(); // Map<string, number>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = ar.readString();
      const v1 = ar.readNumber();
      g.constantIndex.set(k1, v1);
    }
    sz = ar.readNumber(); // Map<string, number>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = ar.readString();
      const v1 = ar.readNumber();
      g.shaderLayoutIndex.set(k1, v1);
    }
    sz = ar.readNumber(); // Map<string, EffectData>
    for (let i1 = 0; i1 !== sz; ++i1) {
      const k1 = ar.readString();
      const v1 = new EffectData();
      loadEffectData(ar, v1);
      g.effects.set(k1, v1);
    }
  }
  _export({
    DescriptorDB: void 0,
    RenderPhase: void 0,
    getRenderPassTypeName: getRenderPassTypeName,
    getLayoutGraphValueName: getLayoutGraphValueName,
    LayoutGraphVertex: void 0,
    LayoutGraphNameMap: void 0,
    LayoutGraphDescriptorsMap: void 0,
    LayoutGraph: void 0,
    UniformData: void 0,
    UniformBlockData: void 0,
    DescriptorData: void 0,
    DescriptorBlockData: void 0,
    DescriptorSetLayoutData: void 0,
    DescriptorSetData: void 0,
    PipelineLayoutData: void 0,
    ShaderBindingData: void 0,
    ShaderLayoutData: void 0,
    TechniqueData: void 0,
    EffectData: void 0,
    ShaderProgramData: void 0,
    RenderStageData: void 0,
    RenderPhaseData: void 0,
    getLayoutGraphDataValueName: getLayoutGraphDataValueName,
    LayoutGraphDataVertex: void 0,
    LayoutGraphDataNameMap: void 0,
    LayoutGraphDataUpdateMap: void 0,
    LayoutGraphDataLayoutMap: void 0,
    LayoutGraphData: void 0,
    LayoutGraphObjectPoolSettings: void 0,
    LayoutGraphObjectPool: void 0,
    saveDescriptorDB: saveDescriptorDB,
    loadDescriptorDB: loadDescriptorDB,
    saveRenderPhase: saveRenderPhase,
    loadRenderPhase: loadRenderPhase,
    saveLayoutGraph: saveLayoutGraph,
    loadLayoutGraph: loadLayoutGraph,
    saveUniformData: saveUniformData,
    loadUniformData: loadUniformData,
    saveUniformBlockData: saveUniformBlockData,
    loadUniformBlockData: loadUniformBlockData,
    saveDescriptorData: saveDescriptorData,
    loadDescriptorData: loadDescriptorData,
    saveDescriptorBlockData: saveDescriptorBlockData,
    loadDescriptorBlockData: loadDescriptorBlockData,
    saveDescriptorSetLayoutData: saveDescriptorSetLayoutData,
    loadDescriptorSetLayoutData: loadDescriptorSetLayoutData,
    saveDescriptorSetData: saveDescriptorSetData,
    loadDescriptorSetData: loadDescriptorSetData,
    savePipelineLayoutData: savePipelineLayoutData,
    loadPipelineLayoutData: loadPipelineLayoutData,
    saveShaderBindingData: saveShaderBindingData,
    loadShaderBindingData: loadShaderBindingData,
    saveShaderLayoutData: saveShaderLayoutData,
    loadShaderLayoutData: loadShaderLayoutData,
    saveTechniqueData: saveTechniqueData,
    loadTechniqueData: loadTechniqueData,
    saveEffectData: saveEffectData,
    loadEffectData: loadEffectData,
    saveShaderProgramData: saveShaderProgramData,
    loadShaderProgramData: loadShaderProgramData,
    saveRenderStageData: saveRenderStageData,
    loadRenderStageData: loadRenderStageData,
    saveRenderPhaseData: saveRenderPhaseData,
    loadRenderPhaseData: loadRenderPhaseData,
    saveLayoutGraphData: saveLayoutGraphData,
    loadLayoutGraphData: loadLayoutGraphData,
    RenderPassType: void 0
  });
  return {
    setters: [function (_graphJs) {
      AdjI = _graphJs.AdjI;
      ED = _graphJs.ED;
      InEI = _graphJs.InEI;
      OutE = _graphJs.OutE;
      OutEI = _graphJs.OutEI;
      directional = _graphJs.directional;
      findRelative = _graphJs.findRelative;
      getPath = _graphJs.getPath;
      parallel = _graphJs.parallel;
      reindexEdgeList = _graphJs.reindexEdgeList;
      traversal = _graphJs.traversal;
    }, function (_gfxIndexJs) {
      DescriptorSetLayoutInfo = _gfxIndexJs.DescriptorSetLayoutInfo;
      ShaderStageFlagBit = _gfxIndexJs.ShaderStageFlagBit;
      Type = _gfxIndexJs.Type;
      UniformBlock = _gfxIndexJs.UniformBlock;
    }, function (_typesJs) {
      DescriptorBlock = _typesJs.DescriptorBlock;
      saveDescriptorBlock = _typesJs.saveDescriptorBlock;
      loadDescriptorBlock = _typesJs.loadDescriptorBlock;
      DescriptorBlockIndex = _typesJs.DescriptorBlockIndex;
      saveDescriptorBlockIndex = _typesJs.saveDescriptorBlockIndex;
      loadDescriptorBlockIndex = _typesJs.loadDescriptorBlockIndex;
      DescriptorTypeOrder = _typesJs.DescriptorTypeOrder;
    }, function (_serializationJs) {
      saveUniformBlock = _serializationJs.saveUniformBlock;
      loadUniformBlock = _serializationJs.loadUniformBlock;
      saveDescriptorSetLayoutInfo = _serializationJs.saveDescriptorSetLayoutInfo;
      loadDescriptorSetLayoutInfo = _serializationJs.loadDescriptorSetLayoutInfo;
    }, function (_coreMemopIndexJs) {
      RecyclePool = _coreMemopIndexJs.RecyclePool;
    }],
    execute: function () {
      _export("DescriptorDB", DescriptorDB = class DescriptorDB {
        constructor() {
          this.blocks = new Map();
        }
        reset() {
          this.blocks.clear();
        }
      });
      _export("RenderPhase", RenderPhase = class RenderPhase {
        constructor() {
          this.shaders = new Set();
        }
        reset() {
          this.shaders.clear();
        }
      });
      (function (RenderPassType) {
        RenderPassType[RenderPassType["SINGLE_RENDER_PASS"] = 0] = "SINGLE_RENDER_PASS";
        RenderPassType[RenderPassType["RENDER_PASS"] = 1] = "RENDER_PASS";
        RenderPassType[RenderPassType["RENDER_SUBPASS"] = 2] = "RENDER_SUBPASS";
      })(RenderPassType || _export("RenderPassType", RenderPassType = {}));
      _export("LayoutGraphValue", LayoutGraphValue = {
        RenderStage: 0,
        RenderPhase: 1
      });
      //-----------------------------------------------------------------
      // Graph Concept
      _export("LayoutGraphVertex", LayoutGraphVertex = class LayoutGraphVertex {
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
      _export("LayoutGraphNameMap", LayoutGraphNameMap = class LayoutGraphNameMap {
        constructor(names) {
          // skip set, name is constant in AddressableGraph
          this._names = void 0;
          this.names = names;
          this._names = names;
        }
        get(v) {
          return this._names[v];
        }
      });
      _export("LayoutGraphDescriptorsMap", LayoutGraphDescriptorsMap = class LayoutGraphDescriptorsMap {
        constructor(descriptors) {
          this._descriptors = void 0;
          this.descriptors = descriptors;
          this._descriptors = descriptors;
        }
        get(v) {
          return this._descriptors[v];
        }
      }); //-----------------------------------------------------------------
      // ComponentGraph Concept
      _export("LayoutGraphComponent", LayoutGraphComponent = {
        Name: 0,
        Descriptors: 1
      });
      //-----------------------------------------------------------------
      // LayoutGraph Implementation
      _export("LayoutGraph", LayoutGraph = class LayoutGraph {
        constructor() {
          // type edge_descriptor = ED;
          this.directed_category = directional.bidirectional;
          this.edge_parallel_category = parallel.allow;
          this.traversal_category = traversal.incidence | traversal.bidirectional | traversal.adjacency | traversal.vertex_list;
          this.components = ['Name', 'Descriptors'];
          this._vertices = [];
          this._names = [];
          this._descriptors = [];
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
          this._descriptors.length = 0;
          // Graph Vertices
          this._vertices.length = 0;
        }
        addVertex(id, object, name, descriptors, u = 0xFFFFFFFF) {
          const vert = new LayoutGraphVertex(id, object);
          const v = this._vertices.length;
          this._vertices.push(vert);
          this._names.push(name);
          this._descriptors.push(descriptors);

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
          this._vertices.splice(u, 1);
          this._names.splice(u, 1);
          this._descriptors.splice(u, 1);
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
          return new LayoutGraphNameMap(this._names);
        }
        //-----------------------------------------------------------------
        // PropertyGraph
        get(tag) {
          switch (tag) {
            // Components
            case 'Name':
              return new LayoutGraphNameMap(this._names);
            case 'Descriptors':
              return new LayoutGraphDescriptorsMap(this._descriptors);
            default:
              throw Error('property map not found');
          }
        }
        //-----------------------------------------------------------------
        // ComponentGraph
        component(id, v) {
          switch (id) {
            case LayoutGraphComponent.Name:
              return this._names[v];
            case LayoutGraphComponent.Descriptors:
              return this._descriptors[v];
            default:
              throw Error('component not found');
          }
        }
        componentMap(id) {
          switch (id) {
            case LayoutGraphComponent.Name:
              return new LayoutGraphNameMap(this._names);
            case LayoutGraphComponent.Descriptors:
              return new LayoutGraphDescriptorsMap(this._descriptors);
            default:
              throw Error('component map not found');
          }
        }
        // skip setName, Name is constant in AddressableGraph
        getName(v) {
          return this._names[v];
        }
        getDescriptors(v) {
          return this._descriptors[v];
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
            case LayoutGraphValue.RenderStage:
              return visitor.renderStage(vert._object);
            case LayoutGraphValue.RenderPhase:
              return visitor.renderPhase(vert._object);
            default:
              throw Error('polymorphic type not found');
          }
        }
        getRenderStage(v) {
          if (this._vertices[v]._id === LayoutGraphValue.RenderStage) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getRenderPhase(v) {
          if (this._vertices[v]._id === LayoutGraphValue.RenderPhase) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        tryGetRenderStage(v) {
          if (this._vertices[v]._id === LayoutGraphValue.RenderStage) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetRenderPhase(v) {
          if (this._vertices[v]._id === LayoutGraphValue.RenderPhase) {
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
        // ParentGraph
        locateChild(u, name) {
          if (u === 0xFFFFFFFF) {
            for (const v of this._vertices.keys()) {
              const vert = this._vertices[v];
              if (vert._inEdges.length === 0 && this._names[v] === name) {
                return v;
              }
            }
            return 0xFFFFFFFF;
          }
          for (const oe of this._vertices[u]._outEdges) {
            const child = oe.target;
            if (name === this._names[child]) {
              return child;
            }
          }
          return 0xFFFFFFFF;
        }
        //-----------------------------------------------------------------
        // AddressableGraph
        addressable(absPath) {
          return findRelative(this, 0xFFFFFFFF, absPath) !== 0xFFFFFFFF;
        }
        locate(absPath) {
          return findRelative(this, 0xFFFFFFFF, absPath);
        }
        locateRelative(path, start = 0xFFFFFFFF) {
          return findRelative(this, start, path);
        }
        path(v) {
          return getPath(this, v);
        }
      });
      _export("UniformData", UniformData = class UniformData {
        constructor(uniformID = 0xFFFFFFFF, uniformType = Type.UNKNOWN, offset = 0) {
          this.uniformID = void 0;
          this.uniformType = void 0;
          this.offset = void 0;
          this.size = 0;
          this.uniformID = uniformID;
          this.uniformType = uniformType;
          this.offset = offset;
        }
        reset(uniformID = 0xFFFFFFFF, uniformType = Type.UNKNOWN, offset = 0) {
          this.uniformID = uniformID;
          this.uniformType = uniformType;
          this.offset = offset;
          this.size = 0;
        }
      });
      _export("UniformBlockData", UniformBlockData = class UniformBlockData {
        constructor() {
          this.bufferSize = 0;
          this.uniforms = [];
        }
        reset() {
          this.bufferSize = 0;
          this.uniforms.length = 0;
        }
      });
      _export("DescriptorData", DescriptorData = class DescriptorData {
        constructor(descriptorID = 0, type = Type.UNKNOWN, count = 1) {
          this.descriptorID = void 0;
          this.type = void 0;
          this.count = void 0;
          this.descriptorID = descriptorID;
          this.type = type;
          this.count = count;
        }
        reset(descriptorID = 0, type = Type.UNKNOWN, count = 1) {
          this.descriptorID = descriptorID;
          this.type = type;
          this.count = count;
        }
      });
      _export("DescriptorBlockData", DescriptorBlockData = class DescriptorBlockData {
        constructor(type = DescriptorTypeOrder.UNIFORM_BUFFER, visibility = ShaderStageFlagBit.NONE, capacity = 0) {
          this.type = void 0;
          this.visibility = void 0;
          this.offset = 0;
          this.capacity = void 0;
          this.descriptors = [];
          this.type = type;
          this.visibility = visibility;
          this.capacity = capacity;
        }
        reset(type = DescriptorTypeOrder.UNIFORM_BUFFER, visibility = ShaderStageFlagBit.NONE, capacity = 0) {
          this.type = type;
          this.visibility = visibility;
          this.offset = 0;
          this.capacity = capacity;
          this.descriptors.length = 0;
        }
      });
      _export("DescriptorSetLayoutData", DescriptorSetLayoutData = class DescriptorSetLayoutData {
        constructor(slot = 0xFFFFFFFF, capacity = 0, descriptorBlocks = [], uniformBlocks = new Map(), bindingMap = new Map()) {
          this.slot = void 0;
          this.capacity = void 0;
          this.uniformBlockCapacity = 0;
          this.samplerTextureCapacity = 0;
          this.descriptorBlocks = void 0;
          this.uniformBlocks = void 0;
          this.bindingMap = void 0;
          this.slot = slot;
          this.capacity = capacity;
          this.descriptorBlocks = descriptorBlocks;
          this.uniformBlocks = uniformBlocks;
          this.bindingMap = bindingMap;
        }
        reset(slot = 0xFFFFFFFF, capacity = 0) {
          this.slot = slot;
          this.capacity = capacity;
          this.uniformBlockCapacity = 0;
          this.samplerTextureCapacity = 0;
          this.descriptorBlocks.length = 0;
          this.uniformBlocks.clear();
          this.bindingMap.clear();
        }
      });
      _export("DescriptorSetData", DescriptorSetData = class DescriptorSetData {
        constructor(descriptorSetLayoutData = new DescriptorSetLayoutData(), descriptorSetLayout = null, descriptorSet = null) {
          this.descriptorSetLayoutData = void 0;
          this.descriptorSetLayoutInfo = new DescriptorSetLayoutInfo();
          /*refcount*/
          this.descriptorSetLayout = void 0;
          /*refcount*/
          this.descriptorSet = void 0;
          this.descriptorSetLayoutData = descriptorSetLayoutData;
          this.descriptorSetLayout = descriptorSetLayout;
          this.descriptorSet = descriptorSet;
        }
        reset(descriptorSetLayout = null, descriptorSet = null) {
          this.descriptorSetLayoutData.reset();
          this.descriptorSetLayoutInfo.reset();
          this.descriptorSetLayout = descriptorSetLayout;
          this.descriptorSet = descriptorSet;
        }
      });
      _export("PipelineLayoutData", PipelineLayoutData = class PipelineLayoutData {
        constructor() {
          this.descriptorSets = new Map();
        }
        reset() {
          this.descriptorSets.clear();
        }
      });
      _export("ShaderBindingData", ShaderBindingData = class ShaderBindingData {
        constructor() {
          this.descriptorBindings = new Map();
        }
        reset() {
          this.descriptorBindings.clear();
        }
      });
      _export("ShaderLayoutData", ShaderLayoutData = class ShaderLayoutData {
        constructor() {
          this.layoutData = new Map();
          this.bindingData = new Map();
        }
        reset() {
          this.layoutData.clear();
          this.bindingData.clear();
        }
      });
      _export("TechniqueData", TechniqueData = class TechniqueData {
        constructor() {
          this.passes = [];
        }
        reset() {
          this.passes.length = 0;
        }
      });
      _export("EffectData", EffectData = class EffectData {
        constructor() {
          this.techniques = new Map();
        }
        reset() {
          this.techniques.clear();
        }
      });
      _export("ShaderProgramData", ShaderProgramData = class ShaderProgramData {
        constructor() {
          this.layout = new PipelineLayoutData();
          /*refcount*/
          this.pipelineLayout = null;
        }
        reset() {
          this.layout.reset();
          this.pipelineLayout = null;
        }
      });
      _export("RenderStageData", RenderStageData = class RenderStageData {
        constructor() {
          this.descriptorVisibility = new Map();
        }
        reset() {
          this.descriptorVisibility.clear();
        }
      });
      _export("RenderPhaseData", RenderPhaseData = class RenderPhaseData {
        constructor() {
          this.rootSignature = '';
          this.shaderPrograms = [];
          this.shaderIndex = new Map();
          /*refcount*/
          this.pipelineLayout = null;
        }
        reset() {
          this.rootSignature = '';
          this.shaderPrograms.length = 0;
          this.shaderIndex.clear();
          this.pipelineLayout = null;
        }
      }); //=================================================================
      // LayoutGraphData
      //=================================================================
      // PolymorphicGraph Concept
      _export("LayoutGraphDataValue", LayoutGraphDataValue = {
        RenderStage: 0,
        RenderPhase: 1
      });
      //-----------------------------------------------------------------
      // Graph Concept
      _export("LayoutGraphDataVertex", LayoutGraphDataVertex = class LayoutGraphDataVertex {
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
      _export("LayoutGraphDataNameMap", LayoutGraphDataNameMap = class LayoutGraphDataNameMap {
        constructor(names) {
          // skip set, name is constant in AddressableGraph
          this._names = void 0;
          this.names = names;
          this._names = names;
        }
        get(v) {
          return this._names[v];
        }
      });
      _export("LayoutGraphDataUpdateMap", LayoutGraphDataUpdateMap = class LayoutGraphDataUpdateMap {
        constructor(updateFrequencies) {
          this._updateFrequencies = void 0;
          this.updateFrequencies = updateFrequencies;
          this._updateFrequencies = updateFrequencies;
        }
        get(v) {
          return this._updateFrequencies[v];
        }
        set(v, updateFrequencies) {
          this._updateFrequencies[v] = updateFrequencies;
        }
      });
      _export("LayoutGraphDataLayoutMap", LayoutGraphDataLayoutMap = class LayoutGraphDataLayoutMap {
        constructor(layouts) {
          this._layouts = void 0;
          this.layouts = layouts;
          this._layouts = layouts;
        }
        get(v) {
          return this._layouts[v];
        }
      }); //-----------------------------------------------------------------
      // ComponentGraph Concept
      _export("LayoutGraphDataComponent", LayoutGraphDataComponent = {
        Name: 0,
        Update: 1,
        Layout: 2
      });
      //-----------------------------------------------------------------
      // LayoutGraphData Implementation
      _export("LayoutGraphData", LayoutGraphData = class LayoutGraphData {
        constructor() {
          // type edge_descriptor = ED;
          this.directed_category = directional.bidirectional;
          this.edge_parallel_category = parallel.allow;
          this.traversal_category = traversal.incidence | traversal.bidirectional | traversal.adjacency | traversal.vertex_list;
          this.components = ['Name', 'Update', 'Layout'];
          this._vertices = [];
          this._names = [];
          this._updateFrequencies = [];
          this._layouts = [];
          this.valueNames = [];
          this.attributeIndex = new Map();
          this.constantIndex = new Map();
          this.shaderLayoutIndex = new Map();
          this.effects = new Map();
          this.constantMacros = '';
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
          this.valueNames.length = 0;
          this.attributeIndex.clear();
          this.constantIndex.clear();
          this.shaderLayoutIndex.clear();
          this.effects.clear();
          this.constantMacros = '';
          // ComponentGraph
          this._names.length = 0;
          this._updateFrequencies.length = 0;
          this._layouts.length = 0;
          // Graph Vertices
          this._vertices.length = 0;
        }
        addVertex(id, object, name, update, layout, u = 0xFFFFFFFF) {
          const vert = new LayoutGraphDataVertex(id, object);
          const v = this._vertices.length;
          this._vertices.push(vert);
          this._names.push(name);
          this._updateFrequencies.push(update);
          this._layouts.push(layout);

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
          this._vertices.splice(u, 1);
          this._names.splice(u, 1);
          this._updateFrequencies.splice(u, 1);
          this._layouts.splice(u, 1);
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
          return new LayoutGraphDataNameMap(this._names);
        }
        //-----------------------------------------------------------------
        // PropertyGraph
        get(tag) {
          switch (tag) {
            // Components
            case 'Name':
              return new LayoutGraphDataNameMap(this._names);
            case 'Update':
              return new LayoutGraphDataUpdateMap(this._updateFrequencies);
            case 'Layout':
              return new LayoutGraphDataLayoutMap(this._layouts);
            default:
              throw Error('property map not found');
          }
        }
        //-----------------------------------------------------------------
        // ComponentGraph
        component(id, v) {
          switch (id) {
            case LayoutGraphDataComponent.Name:
              return this._names[v];
            case LayoutGraphDataComponent.Update:
              return this._updateFrequencies[v];
            case LayoutGraphDataComponent.Layout:
              return this._layouts[v];
            default:
              throw Error('component not found');
          }
        }
        componentMap(id) {
          switch (id) {
            case LayoutGraphDataComponent.Name:
              return new LayoutGraphDataNameMap(this._names);
            case LayoutGraphDataComponent.Update:
              return new LayoutGraphDataUpdateMap(this._updateFrequencies);
            case LayoutGraphDataComponent.Layout:
              return new LayoutGraphDataLayoutMap(this._layouts);
            default:
              throw Error('component map not found');
          }
        }
        // skip setName, Name is constant in AddressableGraph
        getName(v) {
          return this._names[v];
        }
        getUpdate(v) {
          return this._updateFrequencies[v];
        }
        setUpdate(v, value) {
          this._updateFrequencies[v] = value;
        }
        getLayout(v) {
          return this._layouts[v];
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
            case LayoutGraphDataValue.RenderStage:
              return visitor.renderStage(vert._object);
            case LayoutGraphDataValue.RenderPhase:
              return visitor.renderPhase(vert._object);
            default:
              throw Error('polymorphic type not found');
          }
        }
        getRenderStage(v) {
          if (this._vertices[v]._id === LayoutGraphDataValue.RenderStage) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        getRenderPhase(v) {
          if (this._vertices[v]._id === LayoutGraphDataValue.RenderPhase) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        }
        tryGetRenderStage(v) {
          if (this._vertices[v]._id === LayoutGraphDataValue.RenderStage) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        }
        tryGetRenderPhase(v) {
          if (this._vertices[v]._id === LayoutGraphDataValue.RenderPhase) {
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
        // ParentGraph
        locateChild(u, name) {
          if (u === 0xFFFFFFFF) {
            for (const v of this._vertices.keys()) {
              const vert = this._vertices[v];
              if (vert._inEdges.length === 0 && this._names[v] === name) {
                return v;
              }
            }
            return 0xFFFFFFFF;
          }
          for (const oe of this._vertices[u]._outEdges) {
            const child = oe.target;
            if (name === this._names[child]) {
              return child;
            }
          }
          return 0xFFFFFFFF;
        }
        //-----------------------------------------------------------------
        // AddressableGraph
        addressable(absPath) {
          return findRelative(this, 0xFFFFFFFF, absPath) !== 0xFFFFFFFF;
        }
        locate(absPath) {
          return findRelative(this, 0xFFFFFFFF, absPath);
        }
        locateRelative(path, start = 0xFFFFFFFF) {
          return findRelative(this, start, path);
        }
        path(v) {
          return getPath(this, v);
        }
      });
      _export("LayoutGraphObjectPoolSettings", LayoutGraphObjectPoolSettings = class LayoutGraphObjectPoolSettings {
        constructor(batchSize) {
          this.descriptorDBBatchSize = 16;
          this.renderPhaseBatchSize = 16;
          this.layoutGraphBatchSize = 16;
          this.uniformDataBatchSize = 16;
          this.uniformBlockDataBatchSize = 16;
          this.descriptorDataBatchSize = 16;
          this.descriptorBlockDataBatchSize = 16;
          this.descriptorSetLayoutDataBatchSize = 16;
          this.descriptorSetDataBatchSize = 16;
          this.pipelineLayoutDataBatchSize = 16;
          this.shaderBindingDataBatchSize = 16;
          this.shaderLayoutDataBatchSize = 16;
          this.techniqueDataBatchSize = 16;
          this.effectDataBatchSize = 16;
          this.shaderProgramDataBatchSize = 16;
          this.renderStageDataBatchSize = 16;
          this.renderPhaseDataBatchSize = 16;
          this.layoutGraphDataBatchSize = 16;
          this.descriptorDBBatchSize = batchSize;
          this.renderPhaseBatchSize = batchSize;
          this.layoutGraphBatchSize = batchSize;
          this.uniformDataBatchSize = batchSize;
          this.uniformBlockDataBatchSize = batchSize;
          this.descriptorDataBatchSize = batchSize;
          this.descriptorBlockDataBatchSize = batchSize;
          this.descriptorSetLayoutDataBatchSize = batchSize;
          this.descriptorSetDataBatchSize = batchSize;
          this.pipelineLayoutDataBatchSize = batchSize;
          this.shaderBindingDataBatchSize = batchSize;
          this.shaderLayoutDataBatchSize = batchSize;
          this.techniqueDataBatchSize = batchSize;
          this.effectDataBatchSize = batchSize;
          this.shaderProgramDataBatchSize = batchSize;
          this.renderStageDataBatchSize = batchSize;
          this.renderPhaseDataBatchSize = batchSize;
          this.layoutGraphDataBatchSize = batchSize;
        }
      });
      _export("LayoutGraphObjectPool", LayoutGraphObjectPool = class LayoutGraphObjectPool {
        constructor(settings, renderCommon) {
          this.renderCommon = void 0;
          this._descriptorDB = void 0;
          this._renderPhase = void 0;
          this._layoutGraph = void 0;
          this._uniformData = void 0;
          this._uniformBlockData = void 0;
          this._descriptorData = void 0;
          this._descriptorBlockData = void 0;
          this._descriptorSetLayoutData = void 0;
          this._descriptorSetData = void 0;
          this._pipelineLayoutData = void 0;
          this._shaderBindingData = void 0;
          this._shaderLayoutData = void 0;
          this._techniqueData = void 0;
          this._effectData = void 0;
          this._shaderProgramData = void 0;
          this._renderStageData = void 0;
          this._renderPhaseData = void 0;
          this._layoutGraphData = void 0;
          this.renderCommon = renderCommon;
          this._descriptorDB = new RecyclePool(() => new DescriptorDB(), settings.descriptorDBBatchSize);
          this._renderPhase = new RecyclePool(() => new RenderPhase(), settings.renderPhaseBatchSize);
          this._layoutGraph = new RecyclePool(() => new LayoutGraph(), settings.layoutGraphBatchSize);
          this._uniformData = new RecyclePool(() => new UniformData(), settings.uniformDataBatchSize);
          this._uniformBlockData = new RecyclePool(() => new UniformBlockData(), settings.uniformBlockDataBatchSize);
          this._descriptorData = new RecyclePool(() => new DescriptorData(), settings.descriptorDataBatchSize);
          this._descriptorBlockData = new RecyclePool(() => new DescriptorBlockData(), settings.descriptorBlockDataBatchSize);
          this._descriptorSetLayoutData = new RecyclePool(() => new DescriptorSetLayoutData(), settings.descriptorSetLayoutDataBatchSize);
          this._descriptorSetData = new RecyclePool(() => new DescriptorSetData(), settings.descriptorSetDataBatchSize);
          this._pipelineLayoutData = new RecyclePool(() => new PipelineLayoutData(), settings.pipelineLayoutDataBatchSize);
          this._shaderBindingData = new RecyclePool(() => new ShaderBindingData(), settings.shaderBindingDataBatchSize);
          this._shaderLayoutData = new RecyclePool(() => new ShaderLayoutData(), settings.shaderLayoutDataBatchSize);
          this._techniqueData = new RecyclePool(() => new TechniqueData(), settings.techniqueDataBatchSize);
          this._effectData = new RecyclePool(() => new EffectData(), settings.effectDataBatchSize);
          this._shaderProgramData = new RecyclePool(() => new ShaderProgramData(), settings.shaderProgramDataBatchSize);
          this._renderStageData = new RecyclePool(() => new RenderStageData(), settings.renderStageDataBatchSize);
          this._renderPhaseData = new RecyclePool(() => new RenderPhaseData(), settings.renderPhaseDataBatchSize);
          this._layoutGraphData = new RecyclePool(() => new LayoutGraphData(), settings.layoutGraphDataBatchSize);
        }
        reset() {
          this._descriptorDB.reset();
          this._renderPhase.reset();
          this._layoutGraph.reset();
          this._uniformData.reset();
          this._uniformBlockData.reset();
          this._descriptorData.reset();
          this._descriptorBlockData.reset();
          this._descriptorSetLayoutData.reset();
          this._descriptorSetData.reset();
          this._pipelineLayoutData.reset();
          this._shaderBindingData.reset();
          this._shaderLayoutData.reset();
          this._techniqueData.reset();
          this._effectData.reset();
          this._shaderProgramData.reset();
          this._renderStageData.reset();
          this._renderPhaseData.reset();
          this._layoutGraphData.reset();
        }
        createDescriptorDB() {
          const v = this._descriptorDB.add();
          v.reset();
          return v;
        }
        createRenderPhase() {
          const v = this._renderPhase.add();
          v.reset();
          return v;
        }
        createLayoutGraph() {
          const v = this._layoutGraph.add();
          v.clear();
          return v;
        }
        createUniformData(uniformID = 0xFFFFFFFF, uniformType = Type.UNKNOWN, offset = 0) {
          const v = this._uniformData.add();
          v.reset(uniformID, uniformType, offset);
          return v;
        }
        createUniformBlockData() {
          const v = this._uniformBlockData.add();
          v.reset();
          return v;
        }
        createDescriptorData(descriptorID = 0, type = Type.UNKNOWN, count = 1) {
          const v = this._descriptorData.add();
          v.reset(descriptorID, type, count);
          return v;
        }
        createDescriptorBlockData(type = DescriptorTypeOrder.UNIFORM_BUFFER, visibility = ShaderStageFlagBit.NONE, capacity = 0) {
          const v = this._descriptorBlockData.add();
          v.reset(type, visibility, capacity);
          return v;
        }
        createDescriptorSetLayoutData(slot = 0xFFFFFFFF, capacity = 0) {
          const v = this._descriptorSetLayoutData.add();
          v.reset(slot, capacity);
          return v;
        }
        createDescriptorSetData(descriptorSetLayout = null, descriptorSet = null) {
          const v = this._descriptorSetData.add();
          v.reset(descriptorSetLayout, descriptorSet);
          return v;
        }
        createPipelineLayoutData() {
          const v = this._pipelineLayoutData.add();
          v.reset();
          return v;
        }
        createShaderBindingData() {
          const v = this._shaderBindingData.add();
          v.reset();
          return v;
        }
        createShaderLayoutData() {
          const v = this._shaderLayoutData.add();
          v.reset();
          return v;
        }
        createTechniqueData() {
          const v = this._techniqueData.add();
          v.reset();
          return v;
        }
        createEffectData() {
          const v = this._effectData.add();
          v.reset();
          return v;
        }
        createShaderProgramData() {
          const v = this._shaderProgramData.add();
          v.reset();
          return v;
        }
        createRenderStageData() {
          const v = this._renderStageData.add();
          v.reset();
          return v;
        }
        createRenderPhaseData() {
          const v = this._renderPhaseData.add();
          v.reset();
          return v;
        }
        createLayoutGraphData() {
          const v = this._layoutGraphData.add();
          v.clear();
          return v;
        }
      });
    }
  };
});