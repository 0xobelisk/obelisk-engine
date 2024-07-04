System.register("q-bundled:///fs/cocos/rendering/custom/layout-graph.js", ["./graph.js", "../../gfx/index.js", "./types.js", "./serialization.js", "../../core/memop/index.js"], function (_export, _context) {
  "use strict";

  var AdjI, ED, InEI, OutE, OutEI, directional, findRelative, getPath, parallel, reindexEdgeList, traversal, DescriptorSetLayoutInfo, ShaderStageFlagBit, Type, UniformBlock, DescriptorBlock, saveDescriptorBlock, loadDescriptorBlock, DescriptorBlockIndex, saveDescriptorBlockIndex, loadDescriptorBlockIndex, DescriptorTypeOrder, saveUniformBlock, loadUniformBlock, saveDescriptorSetLayoutInfo, loadDescriptorSetLayoutInfo, RecyclePool, DescriptorDB, RenderPhase, RenderPassType, LayoutGraphValue, LayoutGraphVertex, LayoutGraphNameMap, LayoutGraphDescriptorsMap, LayoutGraphComponent, LayoutGraph, UniformData, UniformBlockData, DescriptorData, DescriptorBlockData, DescriptorSetLayoutData, DescriptorSetData, PipelineLayoutData, ShaderBindingData, ShaderLayoutData, TechniqueData, EffectData, ShaderProgramData, RenderStageData, RenderPhaseData, LayoutGraphDataValue, LayoutGraphDataVertex, LayoutGraphDataNameMap, LayoutGraphDataUpdateMap, LayoutGraphDataLayoutMap, LayoutGraphDataComponent, LayoutGraphData, LayoutGraphObjectPoolSettings, LayoutGraphObjectPool;
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
    for (var _iterator15 = _createForOfIteratorHelperLoose(v.blocks), _step15; !(_step15 = _iterator15()).done;) {
      var _step15$value = _step15.value,
        k1 = _step15$value[0],
        v1 = _step15$value[1];
      saveDescriptorBlockIndex(ar, JSON.parse(k1));
      saveDescriptorBlock(ar, v1);
    }
  }
  function loadDescriptorDB(ar, v) {
    var sz = 0;
    sz = ar.readNumber(); // Map<string, DescriptorBlock>
    for (var i1 = 0; i1 !== sz; ++i1) {
      var k1 = new DescriptorBlockIndex();
      loadDescriptorBlockIndex(ar, k1);
      var v1 = new DescriptorBlock();
      loadDescriptorBlock(ar, v1);
      v.blocks.set(JSON.stringify(k1), v1);
    }
  }
  function saveRenderPhase(ar, v) {
    ar.writeNumber(v.shaders.size); // Set<string>
    for (var _iterator16 = _createForOfIteratorHelperLoose(v.shaders), _step16; !(_step16 = _iterator16()).done;) {
      var v1 = _step16.value;
      ar.writeString(v1);
    }
  }
  function loadRenderPhase(ar, v) {
    var sz = 0;
    sz = ar.readNumber(); // Set<string>
    for (var i1 = 0; i1 !== sz; ++i1) {
      var v1 = ar.readString();
      v.shaders.add(v1);
    }
  }
  function saveLayoutGraph(ar, g) {
    var numVertices = g.numVertices();
    var numEdges = g.numEdges();
    ar.writeNumber(numVertices);
    ar.writeNumber(numEdges);
    var numStages = 0;
    var numPhases = 0;
    for (var _iterator17 = _createForOfIteratorHelperLoose(g.vertices()), _step17; !(_step17 = _iterator17()).done;) {
      var v = _step17.value;
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
    for (var _iterator18 = _createForOfIteratorHelperLoose(g.vertices()), _step18; !(_step18 = _iterator18()).done;) {
      var _v = _step18.value;
      ar.writeNumber(g.id(_v));
      ar.writeNumber(g.getParent(_v));
      ar.writeString(g.getName(_v));
      saveDescriptorDB(ar, g.getDescriptors(_v));
      switch (g.id(_v)) {
        case LayoutGraphValue.RenderStage:
          ar.writeNumber(g.getRenderStage(_v));
          break;
        case LayoutGraphValue.RenderPhase:
          saveRenderPhase(ar, g.getRenderPhase(_v));
          break;
        default:
          break;
      }
    }
  }
  function loadLayoutGraph(ar, g) {
    var numVertices = ar.readNumber();
    var numEdges = ar.readNumber();
    var numStages = ar.readNumber();
    var numPhases = ar.readNumber();
    for (var v = 0; v !== numVertices; ++v) {
      var _id = ar.readNumber();
      var u = ar.readNumber();
      var name = ar.readString();
      var _descriptors = new DescriptorDB();
      loadDescriptorDB(ar, _descriptors);
      switch (_id) {
        case LayoutGraphValue.RenderStage:
          {
            var _renderStage = ar.readNumber();
            g.addVertex(LayoutGraphValue.RenderStage, _renderStage, name, _descriptors, u);
            break;
          }
        case LayoutGraphValue.RenderPhase:
          {
            var _renderPhase = new RenderPhase();
            loadRenderPhase(ar, _renderPhase);
            g.addVertex(LayoutGraphValue.RenderPhase, _renderPhase, name, _descriptors, u);
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
    for (var _iterator19 = _createForOfIteratorHelperLoose(v.uniforms), _step19; !(_step19 = _iterator19()).done;) {
      var v1 = _step19.value;
      saveUniformData(ar, v1);
    }
  }
  function loadUniformBlockData(ar, v) {
    v.bufferSize = ar.readNumber();
    var sz = 0;
    sz = ar.readNumber(); // UniformData[]
    v.uniforms.length = sz;
    for (var i1 = 0; i1 !== sz; ++i1) {
      var v1 = new UniformData();
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
    for (var _iterator20 = _createForOfIteratorHelperLoose(v.descriptors), _step20; !(_step20 = _iterator20()).done;) {
      var v1 = _step20.value;
      saveDescriptorData(ar, v1);
    }
  }
  function loadDescriptorBlockData(ar, v) {
    v.type = ar.readNumber();
    v.visibility = ar.readNumber();
    v.offset = ar.readNumber();
    v.capacity = ar.readNumber();
    var sz = 0;
    sz = ar.readNumber(); // DescriptorData[]
    v.descriptors.length = sz;
    for (var i1 = 0; i1 !== sz; ++i1) {
      var v1 = new DescriptorData();
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
    for (var _iterator21 = _createForOfIteratorHelperLoose(v.descriptorBlocks), _step21; !(_step21 = _iterator21()).done;) {
      var v1 = _step21.value;
      saveDescriptorBlockData(ar, v1);
    }
    ar.writeNumber(v.uniformBlocks.size); // Map<number, UniformBlock>
    for (var _iterator22 = _createForOfIteratorHelperLoose(v.uniformBlocks), _step22; !(_step22 = _iterator22()).done;) {
      var _step22$value = _step22.value,
        k1 = _step22$value[0],
        _v2 = _step22$value[1];
      ar.writeNumber(k1);
      saveUniformBlock(ar, _v2);
    }
    ar.writeNumber(v.bindingMap.size); // Map<number, number>
    for (var _iterator23 = _createForOfIteratorHelperLoose(v.bindingMap), _step23; !(_step23 = _iterator23()).done;) {
      var _step23$value = _step23.value,
        _k = _step23$value[0],
        _v3 = _step23$value[1];
      ar.writeNumber(_k);
      ar.writeNumber(_v3);
    }
  }
  function loadDescriptorSetLayoutData(ar, v) {
    v.slot = ar.readNumber();
    v.capacity = ar.readNumber();
    v.uniformBlockCapacity = ar.readNumber();
    v.samplerTextureCapacity = ar.readNumber();
    var sz = 0;
    sz = ar.readNumber(); // DescriptorBlockData[]
    v.descriptorBlocks.length = sz;
    for (var i1 = 0; i1 !== sz; ++i1) {
      var v1 = new DescriptorBlockData();
      loadDescriptorBlockData(ar, v1);
      v.descriptorBlocks[i1] = v1;
    }
    sz = ar.readNumber(); // Map<number, UniformBlock>
    for (var _i7 = 0; _i7 !== sz; ++_i7) {
      var k1 = ar.readNumber();
      var _v4 = new UniformBlock();
      loadUniformBlock(ar, _v4);
      v.uniformBlocks.set(k1, _v4);
    }
    sz = ar.readNumber(); // Map<number, number>
    for (var _i8 = 0; _i8 !== sz; ++_i8) {
      var _k2 = ar.readNumber();
      var _v5 = ar.readNumber();
      v.bindingMap.set(_k2, _v5);
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
    for (var _iterator24 = _createForOfIteratorHelperLoose(v.descriptorSets), _step24; !(_step24 = _iterator24()).done;) {
      var _step24$value = _step24.value,
        k1 = _step24$value[0],
        v1 = _step24$value[1];
      ar.writeNumber(k1);
      saveDescriptorSetData(ar, v1);
    }
  }
  function loadPipelineLayoutData(ar, v) {
    var sz = 0;
    sz = ar.readNumber(); // Map<UpdateFrequency, DescriptorSetData>
    for (var i1 = 0; i1 !== sz; ++i1) {
      var k1 = ar.readNumber();
      var v1 = new DescriptorSetData();
      loadDescriptorSetData(ar, v1);
      v.descriptorSets.set(k1, v1);
    }
  }
  function saveShaderBindingData(ar, v) {
    ar.writeNumber(v.descriptorBindings.size); // Map<number, number>
    for (var _iterator25 = _createForOfIteratorHelperLoose(v.descriptorBindings), _step25; !(_step25 = _iterator25()).done;) {
      var _step25$value = _step25.value,
        k1 = _step25$value[0],
        v1 = _step25$value[1];
      ar.writeNumber(k1);
      ar.writeNumber(v1);
    }
  }
  function loadShaderBindingData(ar, v) {
    var sz = 0;
    sz = ar.readNumber(); // Map<number, number>
    for (var i1 = 0; i1 !== sz; ++i1) {
      var k1 = ar.readNumber();
      var v1 = ar.readNumber();
      v.descriptorBindings.set(k1, v1);
    }
  }
  function saveShaderLayoutData(ar, v) {
    ar.writeNumber(v.layoutData.size); // Map<UpdateFrequency, DescriptorSetLayoutData>
    for (var _iterator26 = _createForOfIteratorHelperLoose(v.layoutData), _step26; !(_step26 = _iterator26()).done;) {
      var _step26$value = _step26.value,
        k1 = _step26$value[0],
        v1 = _step26$value[1];
      ar.writeNumber(k1);
      saveDescriptorSetLayoutData(ar, v1);
    }
    ar.writeNumber(v.bindingData.size); // Map<UpdateFrequency, ShaderBindingData>
    for (var _iterator27 = _createForOfIteratorHelperLoose(v.bindingData), _step27; !(_step27 = _iterator27()).done;) {
      var _step27$value = _step27.value,
        _k3 = _step27$value[0],
        _v6 = _step27$value[1];
      ar.writeNumber(_k3);
      saveShaderBindingData(ar, _v6);
    }
  }
  function loadShaderLayoutData(ar, v) {
    var sz = 0;
    sz = ar.readNumber(); // Map<UpdateFrequency, DescriptorSetLayoutData>
    for (var i1 = 0; i1 !== sz; ++i1) {
      var k1 = ar.readNumber();
      var v1 = new DescriptorSetLayoutData();
      loadDescriptorSetLayoutData(ar, v1);
      v.layoutData.set(k1, v1);
    }
    sz = ar.readNumber(); // Map<UpdateFrequency, ShaderBindingData>
    for (var _i9 = 0; _i9 !== sz; ++_i9) {
      var _k4 = ar.readNumber();
      var _v7 = new ShaderBindingData();
      loadShaderBindingData(ar, _v7);
      v.bindingData.set(_k4, _v7);
    }
  }
  function saveTechniqueData(ar, v) {
    ar.writeNumber(v.passes.length); // ShaderLayoutData[]
    for (var _iterator28 = _createForOfIteratorHelperLoose(v.passes), _step28; !(_step28 = _iterator28()).done;) {
      var v1 = _step28.value;
      saveShaderLayoutData(ar, v1);
    }
  }
  function loadTechniqueData(ar, v) {
    var sz = 0;
    sz = ar.readNumber(); // ShaderLayoutData[]
    v.passes.length = sz;
    for (var i1 = 0; i1 !== sz; ++i1) {
      var v1 = new ShaderLayoutData();
      loadShaderLayoutData(ar, v1);
      v.passes[i1] = v1;
    }
  }
  function saveEffectData(ar, v) {
    ar.writeNumber(v.techniques.size); // Map<string, TechniqueData>
    for (var _iterator29 = _createForOfIteratorHelperLoose(v.techniques), _step29; !(_step29 = _iterator29()).done;) {
      var _step29$value = _step29.value,
        k1 = _step29$value[0],
        v1 = _step29$value[1];
      ar.writeString(k1);
      saveTechniqueData(ar, v1);
    }
  }
  function loadEffectData(ar, v) {
    var sz = 0;
    sz = ar.readNumber(); // Map<string, TechniqueData>
    for (var i1 = 0; i1 !== sz; ++i1) {
      var k1 = ar.readString();
      var v1 = new TechniqueData();
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
    for (var _iterator30 = _createForOfIteratorHelperLoose(v.descriptorVisibility), _step30; !(_step30 = _iterator30()).done;) {
      var _step30$value = _step30.value,
        k1 = _step30$value[0],
        v1 = _step30$value[1];
      ar.writeNumber(k1);
      ar.writeNumber(v1);
    }
  }
  function loadRenderStageData(ar, v) {
    var sz = 0;
    sz = ar.readNumber(); // Map<number, ShaderStageFlagBit>
    for (var i1 = 0; i1 !== sz; ++i1) {
      var k1 = ar.readNumber();
      var v1 = ar.readNumber();
      v.descriptorVisibility.set(k1, v1);
    }
  }
  function saveRenderPhaseData(ar, v) {
    ar.writeString(v.rootSignature);
    ar.writeNumber(v.shaderPrograms.length); // ShaderProgramData[]
    for (var _iterator31 = _createForOfIteratorHelperLoose(v.shaderPrograms), _step31; !(_step31 = _iterator31()).done;) {
      var v1 = _step31.value;
      saveShaderProgramData(ar, v1);
    }
    ar.writeNumber(v.shaderIndex.size); // Map<string, number>
    for (var _iterator32 = _createForOfIteratorHelperLoose(v.shaderIndex), _step32; !(_step32 = _iterator32()).done;) {
      var _step32$value = _step32.value,
        k1 = _step32$value[0],
        _v8 = _step32$value[1];
      ar.writeString(k1);
      ar.writeNumber(_v8);
    }
    // skip, v.pipelineLayout: PipelineLayout
  }

  function loadRenderPhaseData(ar, v) {
    v.rootSignature = ar.readString();
    var sz = 0;
    sz = ar.readNumber(); // ShaderProgramData[]
    v.shaderPrograms.length = sz;
    for (var i1 = 0; i1 !== sz; ++i1) {
      var v1 = new ShaderProgramData();
      loadShaderProgramData(ar, v1);
      v.shaderPrograms[i1] = v1;
    }
    sz = ar.readNumber(); // Map<string, number>
    for (var _i10 = 0; _i10 !== sz; ++_i10) {
      var k1 = ar.readString();
      var _v9 = ar.readNumber();
      v.shaderIndex.set(k1, _v9);
    }
    // skip, v.pipelineLayout: PipelineLayout
  }

  function saveLayoutGraphData(ar, g) {
    var numVertices = g.numVertices();
    var numEdges = g.numEdges();
    ar.writeNumber(numVertices);
    ar.writeNumber(numEdges);
    var numStages = 0;
    var numPhases = 0;
    for (var _iterator33 = _createForOfIteratorHelperLoose(g.vertices()), _step33; !(_step33 = _iterator33()).done;) {
      var v = _step33.value;
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
    for (var _iterator34 = _createForOfIteratorHelperLoose(g.vertices()), _step34; !(_step34 = _iterator34()).done;) {
      var _v10 = _step34.value;
      ar.writeNumber(g.id(_v10));
      ar.writeNumber(g.getParent(_v10));
      ar.writeString(g.getName(_v10));
      ar.writeNumber(g.getUpdate(_v10));
      savePipelineLayoutData(ar, g.getLayout(_v10));
      switch (g.id(_v10)) {
        case LayoutGraphDataValue.RenderStage:
          saveRenderStageData(ar, g.getRenderStage(_v10));
          break;
        case LayoutGraphDataValue.RenderPhase:
          saveRenderPhaseData(ar, g.getRenderPhase(_v10));
          break;
        default:
          break;
      }
    }
    ar.writeNumber(g.valueNames.length); // string[]
    for (var _iterator35 = _createForOfIteratorHelperLoose(g.valueNames), _step35; !(_step35 = _iterator35()).done;) {
      var v1 = _step35.value;
      ar.writeString(v1);
    }
    ar.writeNumber(g.attributeIndex.size); // Map<string, number>
    for (var _iterator36 = _createForOfIteratorHelperLoose(g.attributeIndex), _step36; !(_step36 = _iterator36()).done;) {
      var _step36$value = _step36.value,
        k1 = _step36$value[0],
        _v11 = _step36$value[1];
      ar.writeString(k1);
      ar.writeNumber(_v11);
    }
    ar.writeNumber(g.constantIndex.size); // Map<string, number>
    for (var _iterator37 = _createForOfIteratorHelperLoose(g.constantIndex), _step37; !(_step37 = _iterator37()).done;) {
      var _step37$value = _step37.value,
        _k5 = _step37$value[0],
        _v12 = _step37$value[1];
      ar.writeString(_k5);
      ar.writeNumber(_v12);
    }
    ar.writeNumber(g.shaderLayoutIndex.size); // Map<string, number>
    for (var _iterator38 = _createForOfIteratorHelperLoose(g.shaderLayoutIndex), _step38; !(_step38 = _iterator38()).done;) {
      var _step38$value = _step38.value,
        _k6 = _step38$value[0],
        _v13 = _step38$value[1];
      ar.writeString(_k6);
      ar.writeNumber(_v13);
    }
    ar.writeNumber(g.effects.size); // Map<string, EffectData>
    for (var _iterator39 = _createForOfIteratorHelperLoose(g.effects), _step39; !(_step39 = _iterator39()).done;) {
      var _step39$value = _step39.value,
        _k7 = _step39$value[0],
        _v14 = _step39$value[1];
      ar.writeString(_k7);
      saveEffectData(ar, _v14);
    }
  }
  function loadLayoutGraphData(ar, g) {
    var numVertices = ar.readNumber();
    var numEdges = ar.readNumber();
    var numStages = ar.readNumber();
    var numPhases = ar.readNumber();
    for (var v = 0; v !== numVertices; ++v) {
      var _id2 = ar.readNumber();
      var u = ar.readNumber();
      var name = ar.readString();
      var update = ar.readNumber();
      var layout = new PipelineLayoutData();
      loadPipelineLayoutData(ar, layout);
      switch (_id2) {
        case LayoutGraphDataValue.RenderStage:
          {
            var _renderStage2 = new RenderStageData();
            loadRenderStageData(ar, _renderStage2);
            g.addVertex(LayoutGraphDataValue.RenderStage, _renderStage2, name, update, layout, u);
            break;
          }
        case LayoutGraphDataValue.RenderPhase:
          {
            var _renderPhase2 = new RenderPhaseData();
            loadRenderPhaseData(ar, _renderPhase2);
            g.addVertex(LayoutGraphDataValue.RenderPhase, _renderPhase2, name, update, layout, u);
            break;
          }
        default:
          break;
      }
    }
    var sz = 0;
    sz = ar.readNumber(); // string[]
    g.valueNames.length = sz;
    for (var i1 = 0; i1 !== sz; ++i1) {
      g.valueNames[i1] = ar.readString();
    }
    sz = ar.readNumber(); // Map<string, number>
    for (var _i11 = 0; _i11 !== sz; ++_i11) {
      var k1 = ar.readString();
      var v1 = ar.readNumber();
      g.attributeIndex.set(k1, v1);
    }
    sz = ar.readNumber(); // Map<string, number>
    for (var _i12 = 0; _i12 !== sz; ++_i12) {
      var _k8 = ar.readString();
      var _v15 = ar.readNumber();
      g.constantIndex.set(_k8, _v15);
    }
    sz = ar.readNumber(); // Map<string, number>
    for (var _i13 = 0; _i13 !== sz; ++_i13) {
      var _k9 = ar.readString();
      var _v16 = ar.readNumber();
      g.shaderLayoutIndex.set(_k9, _v16);
    }
    sz = ar.readNumber(); // Map<string, EffectData>
    for (var _i14 = 0; _i14 !== sz; ++_i14) {
      var _k10 = ar.readString();
      var _v17 = new EffectData();
      loadEffectData(ar, _v17);
      g.effects.set(_k10, _v17);
    }
  }
  _export({
    getRenderPassTypeName: getRenderPassTypeName,
    getLayoutGraphValueName: getLayoutGraphValueName,
    getLayoutGraphDataValueName: getLayoutGraphDataValueName,
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
      _export("DescriptorDB", DescriptorDB = /*#__PURE__*/function () {
        function DescriptorDB() {
          this.blocks = new Map();
        }
        var _proto = DescriptorDB.prototype;
        _proto.reset = function reset() {
          this.blocks.clear();
        };
        return DescriptorDB;
      }());
      _export("RenderPhase", RenderPhase = /*#__PURE__*/function () {
        function RenderPhase() {
          this.shaders = new Set();
        }
        var _proto2 = RenderPhase.prototype;
        _proto2.reset = function reset() {
          this.shaders.clear();
        };
        return RenderPhase;
      }());
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
      _export("LayoutGraphVertex", LayoutGraphVertex = function LayoutGraphVertex(id, object) {
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
      _export("LayoutGraphNameMap", LayoutGraphNameMap = /*#__PURE__*/function () {
        function LayoutGraphNameMap(names) {
          // skip set, name is constant in AddressableGraph
          this._names = void 0;
          this.names = names;
          this._names = names;
        }
        var _proto3 = LayoutGraphNameMap.prototype;
        _proto3.get = function get(v) {
          return this._names[v];
        };
        return LayoutGraphNameMap;
      }());
      _export("LayoutGraphDescriptorsMap", LayoutGraphDescriptorsMap = /*#__PURE__*/function () {
        function LayoutGraphDescriptorsMap(descriptors) {
          this._descriptors = void 0;
          this.descriptors = descriptors;
          this._descriptors = descriptors;
        }
        var _proto4 = LayoutGraphDescriptorsMap.prototype;
        _proto4.get = function get(v) {
          return this._descriptors[v];
        };
        return LayoutGraphDescriptorsMap;
      }()); //-----------------------------------------------------------------
      // ComponentGraph Concept
      _export("LayoutGraphComponent", LayoutGraphComponent = {
        Name: 0,
        Descriptors: 1
      });
      //-----------------------------------------------------------------
      // LayoutGraph Implementation
      _export("LayoutGraph", LayoutGraph = /*#__PURE__*/function () {
        function LayoutGraph() {
          // type edge_descriptor = ED;
          this.directed_category = directional.bidirectional;
          this.edge_parallel_category = parallel.allow;
          this.traversal_category = traversal.incidence | traversal.bidirectional | traversal.adjacency | traversal.vertex_list;
          this.components = ['Name', 'Descriptors'];
          this._vertices = [];
          this._names = [];
          this._descriptors = [];
        }
        var _proto5 = LayoutGraph.prototype;
        //-----------------------------------------------------------------
        // Graph
        // type vertex_descriptor = number;
        _proto5.nullVertex = function nullVertex() {
          return 0xFFFFFFFF;
        };
        //-----------------------------------------------------------------
        // IncidenceGraph
        // type out_edge_iterator = OutEI;
        // type degree_size_type = number;
        _proto5.edge = function edge(u, v) {
          for (var _iterator = _createForOfIteratorHelperLoose(this._vertices[u]._outEdges), _step; !(_step = _iterator()).done;) {
            var oe = _step.value;
            if (v === oe.target) {
              return true;
            }
          }
          return false;
        };
        _proto5.source = function source(e) {
          return e.source;
        };
        _proto5.target = function target(e) {
          return e.target;
        };
        _proto5.outEdges = function outEdges(v) {
          return new OutEI(this._vertices[v]._outEdges.values(), v);
        };
        _proto5.outDegree = function outDegree(v) {
          return this._vertices[v]._outEdges.length;
        }
        //-----------------------------------------------------------------
        // BidirectionalGraph
        // type in_edge_iterator = InEI;
        ;
        _proto5.inEdges = function inEdges(v) {
          return new InEI(this._vertices[v]._inEdges.values(), v);
        };
        _proto5.inDegree = function inDegree(v) {
          return this._vertices[v]._inEdges.length;
        };
        _proto5.degree = function degree(v) {
          return this.outDegree(v) + this.inDegree(v);
        }
        //-----------------------------------------------------------------
        // AdjacencyGraph
        // type adjacency_iterator = AdjI;
        ;
        _proto5.adjacentVertices = function adjacentVertices(v) {
          return new AdjI(this, this.outEdges(v));
        }
        //-----------------------------------------------------------------
        // VertexListGraph
        ;
        _proto5.vertices = function vertices() {
          return this._vertices.keys();
        };
        _proto5.numVertices = function numVertices() {
          return this._vertices.length;
        }
        //-----------------------------------------------------------------
        // EdgeListGraph
        ;
        _proto5.numEdges = function numEdges() {
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
        _proto5.clear = function clear() {
          // ComponentGraph
          this._names.length = 0;
          this._descriptors.length = 0;
          // Graph Vertices
          this._vertices.length = 0;
        };
        _proto5.addVertex = function addVertex(id, object, name, descriptors, u) {
          if (u === void 0) {
            u = 0xFFFFFFFF;
          }
          var vert = new LayoutGraphVertex(id, object);
          var v = this._vertices.length;
          this._vertices.push(vert);
          this._names.push(name);
          this._descriptors.push(descriptors);

          // ReferenceGraph
          if (u !== 0xFFFFFFFF) {
            this.addEdge(u, v);
          }
          return v;
        };
        _proto5.clearVertex = function clearVertex(v) {
          // ReferenceGraph(Alias)
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
        _proto5.removeVertex = function removeVertex(u) {
          this._vertices.splice(u, 1);
          this._names.splice(u, 1);
          this._descriptors.splice(u, 1);
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
        _proto5.addEdge = function addEdge(u, v) {
          // update in/out edge list
          this._vertices[u]._outEdges.push(new OutE(v));
          this._vertices[v]._inEdges.push(new OutE(u));
          return new ED(u, v);
        };
        _proto5.removeEdges = function removeEdges(u, v) {
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
        _proto5.removeEdge = function removeEdge(e) {
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
        _proto5.vertexName = function vertexName(v) {
          return this._names[v];
        };
        _proto5.vertexNameMap = function vertexNameMap() {
          return new LayoutGraphNameMap(this._names);
        }
        //-----------------------------------------------------------------
        // PropertyGraph
        ;
        _proto5.get = function get(tag) {
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
        ;
        _proto5.component = function component(id, v) {
          switch (id) {
            case LayoutGraphComponent.Name:
              return this._names[v];
            case LayoutGraphComponent.Descriptors:
              return this._descriptors[v];
            default:
              throw Error('component not found');
          }
        };
        _proto5.componentMap = function componentMap(id) {
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
        ;
        _proto5.getName = function getName(v) {
          return this._names[v];
        };
        _proto5.getDescriptors = function getDescriptors(v) {
          return this._descriptors[v];
        }
        //-----------------------------------------------------------------
        // PolymorphicGraph
        ;
        _proto5.holds = function holds(id, v) {
          return this._vertices[v]._id === id;
        };
        _proto5.id = function id(v) {
          return this._vertices[v]._id;
        };
        _proto5.object = function object(v) {
          return this._vertices[v]._object;
        };
        _proto5.value = function value(id, v) {
          if (this._vertices[v]._id === id) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto5.tryValue = function tryValue(id, v) {
          if (this._vertices[v]._id === id) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto5.visitVertex = function visitVertex(visitor, v) {
          var vert = this._vertices[v];
          switch (vert._id) {
            case LayoutGraphValue.RenderStage:
              return visitor.renderStage(vert._object);
            case LayoutGraphValue.RenderPhase:
              return visitor.renderPhase(vert._object);
            default:
              throw Error('polymorphic type not found');
          }
        };
        _proto5.getRenderStage = function getRenderStage(v) {
          if (this._vertices[v]._id === LayoutGraphValue.RenderStage) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto5.getRenderPhase = function getRenderPhase(v) {
          if (this._vertices[v]._id === LayoutGraphValue.RenderPhase) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto5.tryGetRenderStage = function tryGetRenderStage(v) {
          if (this._vertices[v]._id === LayoutGraphValue.RenderStage) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto5.tryGetRenderPhase = function tryGetRenderPhase(v) {
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
        ;
        _proto5.reference = function reference(u, v) {
          for (var _iterator5 = _createForOfIteratorHelperLoose(this._vertices[u]._outEdges), _step5; !(_step5 = _iterator5()).done;) {
            var oe = _step5.value;
            if (v === oe.target) {
              return true;
            }
          }
          return false;
        };
        _proto5.parent = function parent(e) {
          return e.source;
        };
        _proto5.child = function child(e) {
          return e.target;
        };
        _proto5.parents = function parents(v) {
          return new InEI(this._vertices[v]._inEdges.values(), v);
        };
        _proto5.children = function children(v) {
          return new OutEI(this._vertices[v]._outEdges.values(), v);
        };
        _proto5.numParents = function numParents(v) {
          return this._vertices[v]._inEdges.length;
        };
        _proto5.numChildren = function numChildren(v) {
          return this._vertices[v]._outEdges.length;
        };
        _proto5.getParent = function getParent(v) {
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
        _proto5.isAncestor = function isAncestor(ancestor, descendent) {
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
        _proto5.addReference = function addReference(u, v) {
          return this.addEdge(u, v);
        };
        _proto5.removeReference = function removeReference(e) {
          return this.removeEdge(e);
        };
        _proto5.removeReferences = function removeReferences(u, v) {
          return this.removeEdges(u, v);
        }
        //-----------------------------------------------------------------
        // ParentGraph
        ;
        _proto5.locateChild = function locateChild(u, name) {
          if (u === 0xFFFFFFFF) {
            for (var _iterator6 = _createForOfIteratorHelperLoose(this._vertices.keys()), _step6; !(_step6 = _iterator6()).done;) {
              var v = _step6.value;
              var vert = this._vertices[v];
              if (vert._inEdges.length === 0 && this._names[v] === name) {
                return v;
              }
            }
            return 0xFFFFFFFF;
          }
          for (var _iterator7 = _createForOfIteratorHelperLoose(this._vertices[u]._outEdges), _step7; !(_step7 = _iterator7()).done;) {
            var oe = _step7.value;
            var child = oe.target;
            if (name === this._names[child]) {
              return child;
            }
          }
          return 0xFFFFFFFF;
        }
        //-----------------------------------------------------------------
        // AddressableGraph
        ;
        _proto5.addressable = function addressable(absPath) {
          return findRelative(this, 0xFFFFFFFF, absPath) !== 0xFFFFFFFF;
        };
        _proto5.locate = function locate(absPath) {
          return findRelative(this, 0xFFFFFFFF, absPath);
        };
        _proto5.locateRelative = function locateRelative(path, start) {
          if (start === void 0) {
            start = 0xFFFFFFFF;
          }
          return findRelative(this, start, path);
        };
        _proto5.path = function path(v) {
          return getPath(this, v);
        };
        return LayoutGraph;
      }());
      _export("UniformData", UniformData = /*#__PURE__*/function () {
        function UniformData(uniformID, uniformType, offset) {
          if (uniformID === void 0) {
            uniformID = 0xFFFFFFFF;
          }
          if (uniformType === void 0) {
            uniformType = Type.UNKNOWN;
          }
          if (offset === void 0) {
            offset = 0;
          }
          this.uniformID = void 0;
          this.uniformType = void 0;
          this.offset = void 0;
          this.size = 0;
          this.uniformID = uniformID;
          this.uniformType = uniformType;
          this.offset = offset;
        }
        var _proto6 = UniformData.prototype;
        _proto6.reset = function reset(uniformID, uniformType, offset) {
          if (uniformID === void 0) {
            uniformID = 0xFFFFFFFF;
          }
          if (uniformType === void 0) {
            uniformType = Type.UNKNOWN;
          }
          if (offset === void 0) {
            offset = 0;
          }
          this.uniformID = uniformID;
          this.uniformType = uniformType;
          this.offset = offset;
          this.size = 0;
        };
        return UniformData;
      }());
      _export("UniformBlockData", UniformBlockData = /*#__PURE__*/function () {
        function UniformBlockData() {
          this.bufferSize = 0;
          this.uniforms = [];
        }
        var _proto7 = UniformBlockData.prototype;
        _proto7.reset = function reset() {
          this.bufferSize = 0;
          this.uniforms.length = 0;
        };
        return UniformBlockData;
      }());
      _export("DescriptorData", DescriptorData = /*#__PURE__*/function () {
        function DescriptorData(descriptorID, type, count) {
          if (descriptorID === void 0) {
            descriptorID = 0;
          }
          if (type === void 0) {
            type = Type.UNKNOWN;
          }
          if (count === void 0) {
            count = 1;
          }
          this.descriptorID = void 0;
          this.type = void 0;
          this.count = void 0;
          this.descriptorID = descriptorID;
          this.type = type;
          this.count = count;
        }
        var _proto8 = DescriptorData.prototype;
        _proto8.reset = function reset(descriptorID, type, count) {
          if (descriptorID === void 0) {
            descriptorID = 0;
          }
          if (type === void 0) {
            type = Type.UNKNOWN;
          }
          if (count === void 0) {
            count = 1;
          }
          this.descriptorID = descriptorID;
          this.type = type;
          this.count = count;
        };
        return DescriptorData;
      }());
      _export("DescriptorBlockData", DescriptorBlockData = /*#__PURE__*/function () {
        function DescriptorBlockData(type, visibility, capacity) {
          if (type === void 0) {
            type = DescriptorTypeOrder.UNIFORM_BUFFER;
          }
          if (visibility === void 0) {
            visibility = ShaderStageFlagBit.NONE;
          }
          if (capacity === void 0) {
            capacity = 0;
          }
          this.type = void 0;
          this.visibility = void 0;
          this.offset = 0;
          this.capacity = void 0;
          this.descriptors = [];
          this.type = type;
          this.visibility = visibility;
          this.capacity = capacity;
        }
        var _proto9 = DescriptorBlockData.prototype;
        _proto9.reset = function reset(type, visibility, capacity) {
          if (type === void 0) {
            type = DescriptorTypeOrder.UNIFORM_BUFFER;
          }
          if (visibility === void 0) {
            visibility = ShaderStageFlagBit.NONE;
          }
          if (capacity === void 0) {
            capacity = 0;
          }
          this.type = type;
          this.visibility = visibility;
          this.offset = 0;
          this.capacity = capacity;
          this.descriptors.length = 0;
        };
        return DescriptorBlockData;
      }());
      _export("DescriptorSetLayoutData", DescriptorSetLayoutData = /*#__PURE__*/function () {
        function DescriptorSetLayoutData(slot, capacity, descriptorBlocks, uniformBlocks, bindingMap) {
          if (slot === void 0) {
            slot = 0xFFFFFFFF;
          }
          if (capacity === void 0) {
            capacity = 0;
          }
          if (descriptorBlocks === void 0) {
            descriptorBlocks = [];
          }
          if (uniformBlocks === void 0) {
            uniformBlocks = new Map();
          }
          if (bindingMap === void 0) {
            bindingMap = new Map();
          }
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
        var _proto10 = DescriptorSetLayoutData.prototype;
        _proto10.reset = function reset(slot, capacity) {
          if (slot === void 0) {
            slot = 0xFFFFFFFF;
          }
          if (capacity === void 0) {
            capacity = 0;
          }
          this.slot = slot;
          this.capacity = capacity;
          this.uniformBlockCapacity = 0;
          this.samplerTextureCapacity = 0;
          this.descriptorBlocks.length = 0;
          this.uniformBlocks.clear();
          this.bindingMap.clear();
        };
        return DescriptorSetLayoutData;
      }());
      _export("DescriptorSetData", DescriptorSetData = /*#__PURE__*/function () {
        function DescriptorSetData(descriptorSetLayoutData, descriptorSetLayout, descriptorSet) {
          if (descriptorSetLayoutData === void 0) {
            descriptorSetLayoutData = new DescriptorSetLayoutData();
          }
          if (descriptorSetLayout === void 0) {
            descriptorSetLayout = null;
          }
          if (descriptorSet === void 0) {
            descriptorSet = null;
          }
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
        var _proto11 = DescriptorSetData.prototype;
        _proto11.reset = function reset(descriptorSetLayout, descriptorSet) {
          if (descriptorSetLayout === void 0) {
            descriptorSetLayout = null;
          }
          if (descriptorSet === void 0) {
            descriptorSet = null;
          }
          this.descriptorSetLayoutData.reset();
          this.descriptorSetLayoutInfo.reset();
          this.descriptorSetLayout = descriptorSetLayout;
          this.descriptorSet = descriptorSet;
        };
        return DescriptorSetData;
      }());
      _export("PipelineLayoutData", PipelineLayoutData = /*#__PURE__*/function () {
        function PipelineLayoutData() {
          this.descriptorSets = new Map();
        }
        var _proto12 = PipelineLayoutData.prototype;
        _proto12.reset = function reset() {
          this.descriptorSets.clear();
        };
        return PipelineLayoutData;
      }());
      _export("ShaderBindingData", ShaderBindingData = /*#__PURE__*/function () {
        function ShaderBindingData() {
          this.descriptorBindings = new Map();
        }
        var _proto13 = ShaderBindingData.prototype;
        _proto13.reset = function reset() {
          this.descriptorBindings.clear();
        };
        return ShaderBindingData;
      }());
      _export("ShaderLayoutData", ShaderLayoutData = /*#__PURE__*/function () {
        function ShaderLayoutData() {
          this.layoutData = new Map();
          this.bindingData = new Map();
        }
        var _proto14 = ShaderLayoutData.prototype;
        _proto14.reset = function reset() {
          this.layoutData.clear();
          this.bindingData.clear();
        };
        return ShaderLayoutData;
      }());
      _export("TechniqueData", TechniqueData = /*#__PURE__*/function () {
        function TechniqueData() {
          this.passes = [];
        }
        var _proto15 = TechniqueData.prototype;
        _proto15.reset = function reset() {
          this.passes.length = 0;
        };
        return TechniqueData;
      }());
      _export("EffectData", EffectData = /*#__PURE__*/function () {
        function EffectData() {
          this.techniques = new Map();
        }
        var _proto16 = EffectData.prototype;
        _proto16.reset = function reset() {
          this.techniques.clear();
        };
        return EffectData;
      }());
      _export("ShaderProgramData", ShaderProgramData = /*#__PURE__*/function () {
        function ShaderProgramData() {
          this.layout = new PipelineLayoutData();
          /*refcount*/
          this.pipelineLayout = null;
        }
        var _proto17 = ShaderProgramData.prototype;
        _proto17.reset = function reset() {
          this.layout.reset();
          this.pipelineLayout = null;
        };
        return ShaderProgramData;
      }());
      _export("RenderStageData", RenderStageData = /*#__PURE__*/function () {
        function RenderStageData() {
          this.descriptorVisibility = new Map();
        }
        var _proto18 = RenderStageData.prototype;
        _proto18.reset = function reset() {
          this.descriptorVisibility.clear();
        };
        return RenderStageData;
      }());
      _export("RenderPhaseData", RenderPhaseData = /*#__PURE__*/function () {
        function RenderPhaseData() {
          this.rootSignature = '';
          this.shaderPrograms = [];
          this.shaderIndex = new Map();
          /*refcount*/
          this.pipelineLayout = null;
        }
        var _proto19 = RenderPhaseData.prototype;
        _proto19.reset = function reset() {
          this.rootSignature = '';
          this.shaderPrograms.length = 0;
          this.shaderIndex.clear();
          this.pipelineLayout = null;
        };
        return RenderPhaseData;
      }()); //=================================================================
      // LayoutGraphData
      //=================================================================
      // PolymorphicGraph Concept
      _export("LayoutGraphDataValue", LayoutGraphDataValue = {
        RenderStage: 0,
        RenderPhase: 1
      });
      //-----------------------------------------------------------------
      // Graph Concept
      _export("LayoutGraphDataVertex", LayoutGraphDataVertex = function LayoutGraphDataVertex(id, object) {
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
      _export("LayoutGraphDataNameMap", LayoutGraphDataNameMap = /*#__PURE__*/function () {
        function LayoutGraphDataNameMap(names) {
          // skip set, name is constant in AddressableGraph
          this._names = void 0;
          this.names = names;
          this._names = names;
        }
        var _proto20 = LayoutGraphDataNameMap.prototype;
        _proto20.get = function get(v) {
          return this._names[v];
        };
        return LayoutGraphDataNameMap;
      }());
      _export("LayoutGraphDataUpdateMap", LayoutGraphDataUpdateMap = /*#__PURE__*/function () {
        function LayoutGraphDataUpdateMap(updateFrequencies) {
          this._updateFrequencies = void 0;
          this.updateFrequencies = updateFrequencies;
          this._updateFrequencies = updateFrequencies;
        }
        var _proto21 = LayoutGraphDataUpdateMap.prototype;
        _proto21.get = function get(v) {
          return this._updateFrequencies[v];
        };
        _proto21.set = function set(v, updateFrequencies) {
          this._updateFrequencies[v] = updateFrequencies;
        };
        return LayoutGraphDataUpdateMap;
      }());
      _export("LayoutGraphDataLayoutMap", LayoutGraphDataLayoutMap = /*#__PURE__*/function () {
        function LayoutGraphDataLayoutMap(layouts) {
          this._layouts = void 0;
          this.layouts = layouts;
          this._layouts = layouts;
        }
        var _proto22 = LayoutGraphDataLayoutMap.prototype;
        _proto22.get = function get(v) {
          return this._layouts[v];
        };
        return LayoutGraphDataLayoutMap;
      }()); //-----------------------------------------------------------------
      // ComponentGraph Concept
      _export("LayoutGraphDataComponent", LayoutGraphDataComponent = {
        Name: 0,
        Update: 1,
        Layout: 2
      });
      //-----------------------------------------------------------------
      // LayoutGraphData Implementation
      _export("LayoutGraphData", LayoutGraphData = /*#__PURE__*/function () {
        function LayoutGraphData() {
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
        var _proto23 = LayoutGraphData.prototype;
        //-----------------------------------------------------------------
        // Graph
        // type vertex_descriptor = number;
        _proto23.nullVertex = function nullVertex() {
          return 0xFFFFFFFF;
        };
        //-----------------------------------------------------------------
        // IncidenceGraph
        // type out_edge_iterator = OutEI;
        // type degree_size_type = number;
        _proto23.edge = function edge(u, v) {
          for (var _iterator8 = _createForOfIteratorHelperLoose(this._vertices[u]._outEdges), _step8; !(_step8 = _iterator8()).done;) {
            var oe = _step8.value;
            if (v === oe.target) {
              return true;
            }
          }
          return false;
        };
        _proto23.source = function source(e) {
          return e.source;
        };
        _proto23.target = function target(e) {
          return e.target;
        };
        _proto23.outEdges = function outEdges(v) {
          return new OutEI(this._vertices[v]._outEdges.values(), v);
        };
        _proto23.outDegree = function outDegree(v) {
          return this._vertices[v]._outEdges.length;
        }
        //-----------------------------------------------------------------
        // BidirectionalGraph
        // type in_edge_iterator = InEI;
        ;
        _proto23.inEdges = function inEdges(v) {
          return new InEI(this._vertices[v]._inEdges.values(), v);
        };
        _proto23.inDegree = function inDegree(v) {
          return this._vertices[v]._inEdges.length;
        };
        _proto23.degree = function degree(v) {
          return this.outDegree(v) + this.inDegree(v);
        }
        //-----------------------------------------------------------------
        // AdjacencyGraph
        // type adjacency_iterator = AdjI;
        ;
        _proto23.adjacentVertices = function adjacentVertices(v) {
          return new AdjI(this, this.outEdges(v));
        }
        //-----------------------------------------------------------------
        // VertexListGraph
        ;
        _proto23.vertices = function vertices() {
          return this._vertices.keys();
        };
        _proto23.numVertices = function numVertices() {
          return this._vertices.length;
        }
        //-----------------------------------------------------------------
        // EdgeListGraph
        ;
        _proto23.numEdges = function numEdges() {
          var numEdges = 0;
          for (var _iterator9 = _createForOfIteratorHelperLoose(this.vertices()), _step9; !(_step9 = _iterator9()).done;) {
            var v = _step9.value;
            numEdges += this.outDegree(v);
          }
          return numEdges;
        }
        //-----------------------------------------------------------------
        // MutableGraph
        ;
        _proto23.clear = function clear() {
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
        };
        _proto23.addVertex = function addVertex(id, object, name, update, layout, u) {
          if (u === void 0) {
            u = 0xFFFFFFFF;
          }
          var vert = new LayoutGraphDataVertex(id, object);
          var v = this._vertices.length;
          this._vertices.push(vert);
          this._names.push(name);
          this._updateFrequencies.push(update);
          this._layouts.push(layout);

          // ReferenceGraph
          if (u !== 0xFFFFFFFF) {
            this.addEdge(u, v);
          }
          return v;
        };
        _proto23.clearVertex = function clearVertex(v) {
          // ReferenceGraph(Alias)
          var vert = this._vertices[v];
          // clear out edges
          for (var _iterator10 = _createForOfIteratorHelperLoose(vert._outEdges), _step10; !(_step10 = _iterator10()).done;) {
            var oe = _step10.value;
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
          for (var _iterator11 = _createForOfIteratorHelperLoose(vert._inEdges), _step11; !(_step11 = _iterator11()).done;) {
            var ie = _step11.value;
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
        _proto23.removeVertex = function removeVertex(u) {
          this._vertices.splice(u, 1);
          this._names.splice(u, 1);
          this._updateFrequencies.splice(u, 1);
          this._layouts.splice(u, 1);
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
        _proto23.addEdge = function addEdge(u, v) {
          // update in/out edge list
          this._vertices[u]._outEdges.push(new OutE(v));
          this._vertices[v]._inEdges.push(new OutE(u));
          return new ED(u, v);
        };
        _proto23.removeEdges = function removeEdges(u, v) {
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
        _proto23.removeEdge = function removeEdge(e) {
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
        _proto23.vertexName = function vertexName(v) {
          return this._names[v];
        };
        _proto23.vertexNameMap = function vertexNameMap() {
          return new LayoutGraphDataNameMap(this._names);
        }
        //-----------------------------------------------------------------
        // PropertyGraph
        ;
        _proto23.get = function get(tag) {
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
        ;
        _proto23.component = function component(id, v) {
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
        };
        _proto23.componentMap = function componentMap(id) {
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
        ;
        _proto23.getName = function getName(v) {
          return this._names[v];
        };
        _proto23.getUpdate = function getUpdate(v) {
          return this._updateFrequencies[v];
        };
        _proto23.setUpdate = function setUpdate(v, value) {
          this._updateFrequencies[v] = value;
        };
        _proto23.getLayout = function getLayout(v) {
          return this._layouts[v];
        }
        //-----------------------------------------------------------------
        // PolymorphicGraph
        ;
        _proto23.holds = function holds(id, v) {
          return this._vertices[v]._id === id;
        };
        _proto23.id = function id(v) {
          return this._vertices[v]._id;
        };
        _proto23.object = function object(v) {
          return this._vertices[v]._object;
        };
        _proto23.value = function value(id, v) {
          if (this._vertices[v]._id === id) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto23.tryValue = function tryValue(id, v) {
          if (this._vertices[v]._id === id) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto23.visitVertex = function visitVertex(visitor, v) {
          var vert = this._vertices[v];
          switch (vert._id) {
            case LayoutGraphDataValue.RenderStage:
              return visitor.renderStage(vert._object);
            case LayoutGraphDataValue.RenderPhase:
              return visitor.renderPhase(vert._object);
            default:
              throw Error('polymorphic type not found');
          }
        };
        _proto23.getRenderStage = function getRenderStage(v) {
          if (this._vertices[v]._id === LayoutGraphDataValue.RenderStage) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto23.getRenderPhase = function getRenderPhase(v) {
          if (this._vertices[v]._id === LayoutGraphDataValue.RenderPhase) {
            return this._vertices[v]._object;
          } else {
            throw Error('value id not match');
          }
        };
        _proto23.tryGetRenderStage = function tryGetRenderStage(v) {
          if (this._vertices[v]._id === LayoutGraphDataValue.RenderStage) {
            return this._vertices[v]._object;
          } else {
            return null;
          }
        };
        _proto23.tryGetRenderPhase = function tryGetRenderPhase(v) {
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
        ;
        _proto23.reference = function reference(u, v) {
          for (var _iterator12 = _createForOfIteratorHelperLoose(this._vertices[u]._outEdges), _step12; !(_step12 = _iterator12()).done;) {
            var oe = _step12.value;
            if (v === oe.target) {
              return true;
            }
          }
          return false;
        };
        _proto23.parent = function parent(e) {
          return e.source;
        };
        _proto23.child = function child(e) {
          return e.target;
        };
        _proto23.parents = function parents(v) {
          return new InEI(this._vertices[v]._inEdges.values(), v);
        };
        _proto23.children = function children(v) {
          return new OutEI(this._vertices[v]._outEdges.values(), v);
        };
        _proto23.numParents = function numParents(v) {
          return this._vertices[v]._inEdges.length;
        };
        _proto23.numChildren = function numChildren(v) {
          return this._vertices[v]._outEdges.length;
        };
        _proto23.getParent = function getParent(v) {
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
        _proto23.isAncestor = function isAncestor(ancestor, descendent) {
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
        _proto23.addReference = function addReference(u, v) {
          return this.addEdge(u, v);
        };
        _proto23.removeReference = function removeReference(e) {
          return this.removeEdge(e);
        };
        _proto23.removeReferences = function removeReferences(u, v) {
          return this.removeEdges(u, v);
        }
        //-----------------------------------------------------------------
        // ParentGraph
        ;
        _proto23.locateChild = function locateChild(u, name) {
          if (u === 0xFFFFFFFF) {
            for (var _iterator13 = _createForOfIteratorHelperLoose(this._vertices.keys()), _step13; !(_step13 = _iterator13()).done;) {
              var v = _step13.value;
              var vert = this._vertices[v];
              if (vert._inEdges.length === 0 && this._names[v] === name) {
                return v;
              }
            }
            return 0xFFFFFFFF;
          }
          for (var _iterator14 = _createForOfIteratorHelperLoose(this._vertices[u]._outEdges), _step14; !(_step14 = _iterator14()).done;) {
            var oe = _step14.value;
            var child = oe.target;
            if (name === this._names[child]) {
              return child;
            }
          }
          return 0xFFFFFFFF;
        }
        //-----------------------------------------------------------------
        // AddressableGraph
        ;
        _proto23.addressable = function addressable(absPath) {
          return findRelative(this, 0xFFFFFFFF, absPath) !== 0xFFFFFFFF;
        };
        _proto23.locate = function locate(absPath) {
          return findRelative(this, 0xFFFFFFFF, absPath);
        };
        _proto23.locateRelative = function locateRelative(path, start) {
          if (start === void 0) {
            start = 0xFFFFFFFF;
          }
          return findRelative(this, start, path);
        };
        _proto23.path = function path(v) {
          return getPath(this, v);
        };
        return LayoutGraphData;
      }());
      _export("LayoutGraphObjectPoolSettings", LayoutGraphObjectPoolSettings = function LayoutGraphObjectPoolSettings(batchSize) {
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
      });
      _export("LayoutGraphObjectPool", LayoutGraphObjectPool = /*#__PURE__*/function () {
        function LayoutGraphObjectPool(settings, renderCommon) {
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
          this._descriptorDB = new RecyclePool(function () {
            return new DescriptorDB();
          }, settings.descriptorDBBatchSize);
          this._renderPhase = new RecyclePool(function () {
            return new RenderPhase();
          }, settings.renderPhaseBatchSize);
          this._layoutGraph = new RecyclePool(function () {
            return new LayoutGraph();
          }, settings.layoutGraphBatchSize);
          this._uniformData = new RecyclePool(function () {
            return new UniformData();
          }, settings.uniformDataBatchSize);
          this._uniformBlockData = new RecyclePool(function () {
            return new UniformBlockData();
          }, settings.uniformBlockDataBatchSize);
          this._descriptorData = new RecyclePool(function () {
            return new DescriptorData();
          }, settings.descriptorDataBatchSize);
          this._descriptorBlockData = new RecyclePool(function () {
            return new DescriptorBlockData();
          }, settings.descriptorBlockDataBatchSize);
          this._descriptorSetLayoutData = new RecyclePool(function () {
            return new DescriptorSetLayoutData();
          }, settings.descriptorSetLayoutDataBatchSize);
          this._descriptorSetData = new RecyclePool(function () {
            return new DescriptorSetData();
          }, settings.descriptorSetDataBatchSize);
          this._pipelineLayoutData = new RecyclePool(function () {
            return new PipelineLayoutData();
          }, settings.pipelineLayoutDataBatchSize);
          this._shaderBindingData = new RecyclePool(function () {
            return new ShaderBindingData();
          }, settings.shaderBindingDataBatchSize);
          this._shaderLayoutData = new RecyclePool(function () {
            return new ShaderLayoutData();
          }, settings.shaderLayoutDataBatchSize);
          this._techniqueData = new RecyclePool(function () {
            return new TechniqueData();
          }, settings.techniqueDataBatchSize);
          this._effectData = new RecyclePool(function () {
            return new EffectData();
          }, settings.effectDataBatchSize);
          this._shaderProgramData = new RecyclePool(function () {
            return new ShaderProgramData();
          }, settings.shaderProgramDataBatchSize);
          this._renderStageData = new RecyclePool(function () {
            return new RenderStageData();
          }, settings.renderStageDataBatchSize);
          this._renderPhaseData = new RecyclePool(function () {
            return new RenderPhaseData();
          }, settings.renderPhaseDataBatchSize);
          this._layoutGraphData = new RecyclePool(function () {
            return new LayoutGraphData();
          }, settings.layoutGraphDataBatchSize);
        }
        var _proto24 = LayoutGraphObjectPool.prototype;
        _proto24.reset = function reset() {
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
        };
        _proto24.createDescriptorDB = function createDescriptorDB() {
          var v = this._descriptorDB.add();
          v.reset();
          return v;
        };
        _proto24.createRenderPhase = function createRenderPhase() {
          var v = this._renderPhase.add();
          v.reset();
          return v;
        };
        _proto24.createLayoutGraph = function createLayoutGraph() {
          var v = this._layoutGraph.add();
          v.clear();
          return v;
        };
        _proto24.createUniformData = function createUniformData(uniformID, uniformType, offset) {
          if (uniformID === void 0) {
            uniformID = 0xFFFFFFFF;
          }
          if (uniformType === void 0) {
            uniformType = Type.UNKNOWN;
          }
          if (offset === void 0) {
            offset = 0;
          }
          var v = this._uniformData.add();
          v.reset(uniformID, uniformType, offset);
          return v;
        };
        _proto24.createUniformBlockData = function createUniformBlockData() {
          var v = this._uniformBlockData.add();
          v.reset();
          return v;
        };
        _proto24.createDescriptorData = function createDescriptorData(descriptorID, type, count) {
          if (descriptorID === void 0) {
            descriptorID = 0;
          }
          if (type === void 0) {
            type = Type.UNKNOWN;
          }
          if (count === void 0) {
            count = 1;
          }
          var v = this._descriptorData.add();
          v.reset(descriptorID, type, count);
          return v;
        };
        _proto24.createDescriptorBlockData = function createDescriptorBlockData(type, visibility, capacity) {
          if (type === void 0) {
            type = DescriptorTypeOrder.UNIFORM_BUFFER;
          }
          if (visibility === void 0) {
            visibility = ShaderStageFlagBit.NONE;
          }
          if (capacity === void 0) {
            capacity = 0;
          }
          var v = this._descriptorBlockData.add();
          v.reset(type, visibility, capacity);
          return v;
        };
        _proto24.createDescriptorSetLayoutData = function createDescriptorSetLayoutData(slot, capacity) {
          if (slot === void 0) {
            slot = 0xFFFFFFFF;
          }
          if (capacity === void 0) {
            capacity = 0;
          }
          var v = this._descriptorSetLayoutData.add();
          v.reset(slot, capacity);
          return v;
        };
        _proto24.createDescriptorSetData = function createDescriptorSetData(descriptorSetLayout, descriptorSet) {
          if (descriptorSetLayout === void 0) {
            descriptorSetLayout = null;
          }
          if (descriptorSet === void 0) {
            descriptorSet = null;
          }
          var v = this._descriptorSetData.add();
          v.reset(descriptorSetLayout, descriptorSet);
          return v;
        };
        _proto24.createPipelineLayoutData = function createPipelineLayoutData() {
          var v = this._pipelineLayoutData.add();
          v.reset();
          return v;
        };
        _proto24.createShaderBindingData = function createShaderBindingData() {
          var v = this._shaderBindingData.add();
          v.reset();
          return v;
        };
        _proto24.createShaderLayoutData = function createShaderLayoutData() {
          var v = this._shaderLayoutData.add();
          v.reset();
          return v;
        };
        _proto24.createTechniqueData = function createTechniqueData() {
          var v = this._techniqueData.add();
          v.reset();
          return v;
        };
        _proto24.createEffectData = function createEffectData() {
          var v = this._effectData.add();
          v.reset();
          return v;
        };
        _proto24.createShaderProgramData = function createShaderProgramData() {
          var v = this._shaderProgramData.add();
          v.reset();
          return v;
        };
        _proto24.createRenderStageData = function createRenderStageData() {
          var v = this._renderStageData.add();
          v.reset();
          return v;
        };
        _proto24.createRenderPhaseData = function createRenderPhaseData() {
          var v = this._renderPhaseData.add();
          v.reset();
          return v;
        };
        _proto24.createLayoutGraphData = function createLayoutGraphData() {
          var v = this._layoutGraphData.add();
          v.clear();
          return v;
        };
        return LayoutGraphObjectPool;
      }());
    }
  };
});