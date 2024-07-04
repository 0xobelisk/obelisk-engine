System.register("q-bundled:///fs/cocos/rendering/custom/layout-graph-utils.js", ["../../core/index.js", "../../gfx/index.js", "../define.js", "./graph.js", "./layout-graph.js", "./types.js"], function (_export, _context) {
  "use strict";

  var assert, error, warn, DescriptorSetInfo, DescriptorSetLayoutBinding, DescriptorSetLayoutInfo, DescriptorType, Feature, Format, FormatFeatureBit, GetTypeSize, PipelineLayoutInfo, ShaderStageFlagBit, Type, Uniform, UniformBlock, UBOForwardLight, UBOSkinning, DefaultVisitor, depthFirstSearch, DescriptorBlockData, DescriptorData, DescriptorDB, DescriptorSetData, DescriptorSetLayoutData, LayoutGraph, LayoutGraphDataValue, LayoutGraphValue, PipelineLayoutData, RenderPassType, RenderPhase, RenderPhaseData, RenderStageData, ShaderProgramData, UpdateFrequency, getUpdateFrequencyName, getDescriptorTypeOrderName, Descriptor, DescriptorBlock, DescriptorBlockFlattened, DescriptorBlockIndex, DescriptorTypeOrder, ParameterType, INVALID_ID, ENABLE_SUBPASS, PrintVisitor, DescriptorCounter, LayoutGraphPrintVisitor, VisibilityIndex, VisibilityBlock, VisibilityDB, VisibilityPass, DEFAULT_UNIFORM_COUNTS, DYNAMIC_UNIFORM_BLOCK, VisibilityGraph, VectorGraphColorMap, LayoutGraphInfo, LayoutGraphBuilder2, _emptyDescriptorSetLayout, _emptyPipelineLayout;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /****************************************************************************
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
                                                                                                                                                                                                           ****************************************************************************/ /* eslint-disable max-len */
  // get name of gfx.Type
  function getGfxTypeName(type) {
    switch (type) {
      case Type.UNKNOWN:
        return 'Unknown';
      case Type.BOOL:
        return 'Bool';
      case Type.BOOL2:
        return 'Bool2';
      case Type.BOOL3:
        return 'Bool3';
      case Type.BOOL4:
        return 'Bool4';
      case Type.INT:
        return 'Int';
      case Type.INT2:
        return 'Int2';
      case Type.INT3:
        return 'Int3';
      case Type.INT4:
        return 'Int4';
      case Type.UINT:
        return 'Uint';
      case Type.UINT2:
        return 'Uint2';
      case Type.UINT3:
        return 'Uint3';
      case Type.UINT4:
        return 'Uint4';
      case Type.FLOAT:
        return 'Float';
      case Type.FLOAT2:
        return 'Float2';
      case Type.FLOAT3:
        return 'Float3';
      case Type.FLOAT4:
        return 'Float4';
      case Type.MAT2:
        return 'Mat2';
      case Type.MAT2X3:
        return 'Mat2x3';
      case Type.MAT2X4:
        return 'Mat2x4';
      case Type.MAT3X2:
        return 'Mat3x2';
      case Type.MAT3:
        return 'Mat3';
      case Type.MAT3X4:
        return 'Mat3x4';
      case Type.MAT4X2:
        return 'Mat4x2';
      case Type.MAT4X3:
        return 'Mat4x3';
      case Type.MAT4:
        return 'Mat4';
      case Type.SAMPLER1D:
        return 'Sampler1D';
      case Type.SAMPLER1D_ARRAY:
        return 'Sampler1DArray';
      case Type.SAMPLER2D:
        return 'Sampler2D';
      case Type.SAMPLER2D_ARRAY:
        return 'Sampler2DArray';
      case Type.SAMPLER3D:
        return 'Sampler3D';
      case Type.SAMPLER_CUBE:
        return 'SamplerCube';
      case Type.SAMPLER:
        return 'Sampler';
      case Type.TEXTURE1D:
        return 'Texture1D';
      case Type.TEXTURE1D_ARRAY:
        return 'Texture1DArray';
      case Type.TEXTURE2D:
        return 'Texture2D';
      case Type.TEXTURE2D_ARRAY:
        return 'Texture2DArray';
      case Type.TEXTURE3D:
        return 'Texture3D';
      case Type.TEXTURE_CUBE:
        return 'TextureCube';
      case Type.IMAGE1D:
        return 'Image1D';
      case Type.IMAGE1D_ARRAY:
        return 'Image1DArray';
      case Type.IMAGE2D:
        return 'Image2D';
      case Type.IMAGE2D_ARRAY:
        return 'Image2DArray';
      case Type.IMAGE3D:
        return 'Image3D';
      case Type.IMAGE_CUBE:
        return 'ImageCube';
      case Type.SUBPASS_INPUT:
        return 'SubpassInput';
      case Type.COUNT:
        return 'Count';
      default:
        return 'Unknown';
    }
  }

  // get DescriptorType from DescriptorTypeOrder
  function getGfxDescriptorType(type) {
    switch (type) {
      case DescriptorTypeOrder.UNIFORM_BUFFER:
        return DescriptorType.UNIFORM_BUFFER;
      case DescriptorTypeOrder.DYNAMIC_UNIFORM_BUFFER:
        return DescriptorType.DYNAMIC_UNIFORM_BUFFER;
      case DescriptorTypeOrder.SAMPLER_TEXTURE:
        return DescriptorType.SAMPLER_TEXTURE;
      case DescriptorTypeOrder.SAMPLER:
        return DescriptorType.SAMPLER;
      case DescriptorTypeOrder.TEXTURE:
        return DescriptorType.TEXTURE;
      case DescriptorTypeOrder.STORAGE_BUFFER:
        return DescriptorType.STORAGE_BUFFER;
      case DescriptorTypeOrder.DYNAMIC_STORAGE_BUFFER:
        return DescriptorType.DYNAMIC_STORAGE_BUFFER;
      case DescriptorTypeOrder.STORAGE_IMAGE:
        return DescriptorType.STORAGE_IMAGE;
      case DescriptorTypeOrder.INPUT_ATTACHMENT:
        return DescriptorType.INPUT_ATTACHMENT;
      default:
        error('DescriptorType not found');
        return DescriptorType.INPUT_ATTACHMENT;
    }
  }

  // get DescriptorTypeOrder from DescriptorType
  function getDescriptorTypeOrder(type) {
    switch (type) {
      case DescriptorType.UNIFORM_BUFFER:
        return DescriptorTypeOrder.UNIFORM_BUFFER;
      case DescriptorType.DYNAMIC_UNIFORM_BUFFER:
        return DescriptorTypeOrder.DYNAMIC_UNIFORM_BUFFER;
      case DescriptorType.SAMPLER_TEXTURE:
        return DescriptorTypeOrder.SAMPLER_TEXTURE;
      case DescriptorType.SAMPLER:
        return DescriptorTypeOrder.SAMPLER;
      case DescriptorType.TEXTURE:
        return DescriptorTypeOrder.TEXTURE;
      case DescriptorType.STORAGE_BUFFER:
        return DescriptorTypeOrder.STORAGE_BUFFER;
      case DescriptorType.DYNAMIC_STORAGE_BUFFER:
        return DescriptorTypeOrder.DYNAMIC_STORAGE_BUFFER;
      case DescriptorType.STORAGE_IMAGE:
        return DescriptorTypeOrder.STORAGE_IMAGE;
      case DescriptorType.INPUT_ATTACHMENT:
        return DescriptorTypeOrder.INPUT_ATTACHMENT;
      case DescriptorType.UNKNOWN:
      default:
        error('DescriptorTypeOrder not found');
        return DescriptorTypeOrder.INPUT_ATTACHMENT;
    }
  }

  // find passID using name
  function getCustomPassID(lg, name) {
    return lg.locateChild(lg.nullVertex(), name || 'default');
  }

  // find subpassID using name
  function getCustomSubpassID(lg, passID, name) {
    return lg.locateChild(passID, name);
  }

  // find phaseID using subpassOrPassID and phase name
  function getCustomPhaseID(lg, subpassOrPassID, name) {
    if (name === undefined) {
      return lg.locateChild(subpassOrPassID, 'default');
    }
    if (typeof name === 'number') {
      return lg.locateChild(subpassOrPassID, name.toString());
    }
    return lg.locateChild(subpassOrPassID, name);
  }

  // check ShaderStageFlagBit has certain bits
  function hasFlag(flags, flagToTest) {
    return (flags & flagToTest) !== 0;
  }

  // get name of visibility
  function getVisibilityName(stage) {
    var count = 0;
    var str = '';
    if (hasFlag(stage, ShaderStageFlagBit.VERTEX)) {
      if (count++) {
        str += ' | ';
      }
      str += 'Vertex';
    }
    if (hasFlag(stage, ShaderStageFlagBit.CONTROL)) {
      if (count++) {
        str += ' | ';
      }
      str += 'Control';
    }
    if (hasFlag(stage, ShaderStageFlagBit.EVALUATION)) {
      if (count++) {
        str += ' | ';
      }
      str += 'Evaluation';
    }
    if (hasFlag(stage, ShaderStageFlagBit.GEOMETRY)) {
      if (count++) {
        str += ' | ';
      }
      str += 'Geometry';
    }
    if (hasFlag(stage, ShaderStageFlagBit.FRAGMENT)) {
      if (count++) {
        str += ' | ';
      }
      str += 'Fragment';
    }
    if (hasFlag(stage, ShaderStageFlagBit.COMPUTE)) {
      if (count++) {
        str += ' | ';
      }
      str += 'Compute';
    }
    if (stage === ShaderStageFlagBit.ALL) {
      if (count++) {
        str += ' | ';
      }
      str += 'All';
    }
    return str;
  }

  // print LayoutGraphData

  // text tools, indent 4 spaces
  function indent(space) {
    return space + "    ";
  }

  // text tools, unindent 4 spaces
  function unindent(space) {
    return space.substring(0, space.length > 4 ? space.length - 4 : 0);
  }

  // flatten DescriptorBlock to DescriptorBlockFlattened
  function convertDescriptorBlock(block) {
    var flattened = new DescriptorBlockFlattened();

    // sort descriptors by name
    var descriptors = Array.from(block.descriptors).sort(function (a, b) {
      return String(a[0]).localeCompare(b[0]);
    });

    // flatten descriptors
    descriptors.forEach(function (v) {
      var name = v[0];
      var d = v[1];
      flattened.descriptorNames.push(name);
      flattened.descriptors.push(d);
    });

    // sort uniforms by name
    var uniformBlocks = Array.from(block.uniformBlocks).sort(function (a, b) {
      return String(a[0]).localeCompare(b[0]);
    });

    // flatten uniforms
    uniformBlocks.forEach(function (v) {
      var name = v[0];
      var uniformBlock = v[1];
      flattened.uniformBlockNames.push(name);
      flattened.uniformBlocks.push(uniformBlock);
    });

    // calculate count and capacity
    flattened.count = block.count;
    flattened.capacity = block.capacity;
    return flattened;
  }

  // cache of descriptor blocks

  // get pass name from effect
  function getPassName(pass) {
    if (pass.pass === undefined) {
      return 'default';
    }
    return pass.pass;
  }

  // get phase name from effect
  function getPhaseName(pass) {
    if (pass.phase === undefined) {
      return 'default';
    }
    if (typeof pass.phase === 'number') {
      return pass.phase.toString();
    }
    return pass.phase;
  }

  // key of Visibility

  function getUniformBlockSize(blockMembers) {
    var prevSize = 0;
    for (var _iterator2 = _createForOfIteratorHelperLoose(blockMembers), _step2; !(_step2 = _iterator2()).done;) {
      var m = _step2.value;
      if (m.count) {
        prevSize += GetTypeSize(m.type) * m.count;
        continue;
      }
      var iter = DEFAULT_UNIFORM_COUNTS.get(m.name);
      if (iter !== undefined) {
        prevSize += GetTypeSize(m.type) * iter;
        continue;
      }
      if (m.name === 'cc_joints') {
        var sz = GetTypeSize(m.type) * UBOSkinning.LAYOUT.members[0].count;
        assert(sz !== UBOSkinning.SIZE);
        prevSize += sz;
        continue;
      }
      error("Invalid uniform count: " + m.name);
    }
    assert(!!prevSize);
    return prevSize;
  }
  // sort descriptorBlocks using DescriptorBlockIndex
  function sortDescriptorBlocks(lhs, rhs) {
    var lhsIndex = JSON.parse(lhs[0]);
    var rhsIndex = JSON.parse(rhs[0]);
    var lhsValue = lhsIndex.updateFrequency * 10000 + lhsIndex.parameterType * 1000 + lhsIndex.descriptorType * 100 + lhsIndex.visibility;
    var rhsValue = rhsIndex.updateFrequency * 10000 + rhsIndex.parameterType * 1000 + rhsIndex.descriptorType * 100 + rhsIndex.visibility;
    return lhsValue - rhsValue;
  }

  // build LayoutGraphData
  function buildLayoutGraphDataImpl(graph, builder) {
    var _loop2 = function _loop2() {
      var v = _step29.value;
      var db = graph.getDescriptors(v);
      var minLevel = UpdateFrequency.PER_INSTANCE;
      var maxLevel = UpdateFrequency.PER_PASS;
      var isRenderPass = false;
      switch (graph.id(v)) {
        case LayoutGraphValue.RenderStage:
          {
            var type = graph.getRenderStage(v);
            var parentID = graph.getParent(v);
            if (type === RenderPassType.RENDER_SUBPASS) {
              assert(parentID !== graph.nullVertex());
            } else {
              assert(parentID === graph.nullVertex());
            }
            if (type === RenderPassType.RENDER_PASS) {
              isRenderPass = true;
            }
            var vertID = builder.addRenderStage(graph.getName(v), parentID);
            if (vertID !== v) {
              error('vertex id mismatch');
            }
            minLevel = UpdateFrequency.PER_PASS;
            maxLevel = UpdateFrequency.PER_PASS;
            break;
          }
        case LayoutGraphValue.RenderPhase:
          {
            var _parentID2 = graph.getParent(v);
            var parentType = graph.getRenderStage(_parentID2);
            assert(parentType === RenderPassType.RENDER_SUBPASS || parentType === RenderPassType.SINGLE_RENDER_PASS);
            var _vertID = builder.addRenderPhase(graph.getName(v), _parentID2);
            if (_vertID !== v) {
              error('vertex id mismatch');
            }
            var phase = graph.getRenderPhase(v);
            for (var _iterator30 = _createForOfIteratorHelperLoose(phase.shaders), _step30; !(_step30 = _iterator30()).done;) {
              var shaderName = _step30.value;
              builder.addShader(shaderName, v);
            }
            minLevel = UpdateFrequency.PER_INSTANCE;
            maxLevel = UpdateFrequency.PER_PHASE;
            break;
          }
        default:
          error('unknown vertex type');
          minLevel = UpdateFrequency.PER_INSTANCE;
          minLevel = UpdateFrequency.PER_PASS;
          break;
      }
      if (isRenderPass) {
        assert(db.blocks.size === 0);
        return 1; // continue
      }
      var flattenedBlocks = Array.from(db.blocks).sort(sortDescriptorBlocks);
      flattenedBlocks.forEach(function (value) {
        var key = value[0];
        var block = value[1];
        var index = JSON.parse(key);
        if (index.updateFrequency > maxLevel || index.updateFrequency < minLevel) {
          return;
        }
        var flattened = convertDescriptorBlock(block);
        if (block.capacity === 0) {
          error('block capacity is 0');
          return;
        }
        if (index.updateFrequency > UpdateFrequency.PER_BATCH) {
          builder.addDescriptorBlock(v, index, flattened);
          for (var i = 0; i < flattened.uniformBlockNames.length; ++i) {
            builder.addUniformBlock(v, index, flattened.uniformBlockNames[i], flattened.uniformBlocks[i]);
          }
        } else {
          builder.reserveDescriptorBlock(v, index, flattened);
        }
      });
    };
    for (var _iterator29 = _createForOfIteratorHelperLoose(graph.vertices()), _step29; !(_step29 = _iterator29()).done;) {
      if (_loop2()) continue;
    }
  }

  // get descriptor nameID from name
  function getOrCreateDescriptorID(lg, name) {
    var nameID = lg.attributeIndex.get(name);
    if (nameID === undefined) {
      var newID = lg.valueNames.length;
      lg.attributeIndex.set(name, newID);
      lg.valueNames.push(name);
      return newID;
    }
    return nameID;
  }
  function getOrCreateConstantID(lg, name) {
    var nameID = lg.constantIndex.get(name);
    if (nameID === undefined) {
      var newID = lg.valueNames.length;
      lg.constantIndex.set(name, newID);
      lg.valueNames.push(name);
      return newID;
    }
    return nameID;
  }

  // LayoutGraphData builder

  function buildLayoutGraphData(lg, lgData) {
    var builder = new LayoutGraphBuilder2(lgData);
    buildLayoutGraphDataImpl(lg, builder);
    builder.compile();
  }
  function createDescriptorInfo(layoutData, info) {
    for (var i = 0; i < layoutData.descriptorBlocks.length; ++i) {
      var block = layoutData.descriptorBlocks[i];
      var slot = block.offset;
      for (var j = 0; j < block.descriptors.length; ++j) {
        var d = block.descriptors[j];
        var binding = new DescriptorSetLayoutBinding();
        binding.binding = slot;
        binding.descriptorType = getGfxDescriptorType(block.type);
        binding.count = d.count;
        binding.stageFlags = block.visibility;
        binding.immutableSamplers = [];
        info.bindings.push(binding);
        slot += d.count;
      }
    }
  }
  function createDescriptorSetLayout(device, layoutData) {
    var info = new DescriptorSetLayoutInfo();
    createDescriptorInfo(layoutData, info);
    if (device) {
      return device.createDescriptorSetLayout(info);
    } else {
      return null;
    }
  }
  function createGfxDescriptorSetsAndPipelines(device, g) {
    for (var i = 0; i < g._layouts.length; ++i) {
      var ppl = g.getLayout(i);
      ppl.descriptorSets.forEach(function (value, key) {
        var level = value;
        var layoutData = level.descriptorSetLayoutData;
        if (device) {
          var layout = createDescriptorSetLayout(device, layoutData);
          if (layout) {
            level.descriptorSetLayout = layout;
            level.descriptorSet = device.createDescriptorSet(new DescriptorSetInfo(layout));
          }
        } else {
          createDescriptorInfo(layoutData, level.descriptorSetLayoutInfo);
        }
      });
    }
  }
  function printLayoutGraphData(g) {
    var visitor = new PrintVisitor();
    var colorMap = new VectorGraphColorMap(g.numVertices());
    depthFirstSearch(g, visitor, colorMap);
    return visitor.oss;
  }

  // lookup DescriptorBlockData from Map
  function getDescriptorBlockData(map, index) {
    var key = JSON.stringify(index);
    var block = map.get(key);
    if (block) {
      return block;
    }
    var newBlock = new DescriptorBlockData(index.descriptorType, index.visibility, 0);
    map.set(key, newBlock);
    return newBlock;
  }

  // make DescriptorSetLayoutData from effect directly
  function makeDescriptorSetLayoutData(lg, rate, set, descriptors) {
    var map = new Map();
    var uniformBlocks = new Map();
    for (var i = 0; i < descriptors.blocks.length; i++) {
      var cb = descriptors.blocks[i];
      var block = getDescriptorBlockData(map, {
        updateFrequency: rate,
        parameterType: ParameterType.TABLE,
        descriptorType: DescriptorTypeOrder.UNIFORM_BUFFER,
        visibility: cb.stageFlags
      });
      var nameID = getOrCreateDescriptorID(lg, cb.name);
      block.descriptors.push(new DescriptorData(nameID, Type.UNKNOWN, 1));
      // add uniform buffer
      uniformBlocks.set(nameID, new UniformBlock(set, 0xFFFFFFFF, cb.name, cb.members, 1));
    }
    for (var _i = 0; _i < descriptors.samplerTextures.length; _i++) {
      var samplerTexture = descriptors.samplerTextures[_i];
      var _block2 = getDescriptorBlockData(map, {
        updateFrequency: rate,
        parameterType: ParameterType.TABLE,
        descriptorType: DescriptorTypeOrder.SAMPLER_TEXTURE,
        visibility: samplerTexture.stageFlags
      });
      var _nameID = getOrCreateDescriptorID(lg, samplerTexture.name);
      _block2.descriptors.push(new DescriptorData(_nameID, samplerTexture.type, samplerTexture.count));
    }
    for (var _i2 = 0; _i2 < descriptors.samplers.length; _i2++) {
      var sampler = descriptors.samplers[_i2];
      var _block3 = getDescriptorBlockData(map, {
        updateFrequency: rate,
        parameterType: ParameterType.TABLE,
        descriptorType: DescriptorTypeOrder.SAMPLER,
        visibility: sampler.stageFlags
      });
      var _nameID2 = getOrCreateDescriptorID(lg, sampler.name);
      _block3.descriptors.push(new DescriptorData(_nameID2, Type.SAMPLER, sampler.count));
    }
    for (var _i3 = 0; _i3 < descriptors.textures.length; _i3++) {
      var texture = descriptors.textures[_i3];
      var _block4 = getDescriptorBlockData(map, {
        updateFrequency: rate,
        parameterType: ParameterType.TABLE,
        descriptorType: DescriptorTypeOrder.TEXTURE,
        visibility: texture.stageFlags
      });
      var _nameID3 = getOrCreateDescriptorID(lg, texture.name);
      _block4.descriptors.push(new DescriptorData(_nameID3, texture.type, texture.count));
    }
    for (var _i4 = 0; _i4 < descriptors.buffers.length; _i4++) {
      var buffer = descriptors.buffers[_i4];
      var _block5 = getDescriptorBlockData(map, {
        updateFrequency: rate,
        parameterType: ParameterType.TABLE,
        descriptorType: DescriptorTypeOrder.STORAGE_BUFFER,
        visibility: buffer.stageFlags
      });
      var _nameID4 = getOrCreateDescriptorID(lg, buffer.name);
      _block5.descriptors.push(new DescriptorData(_nameID4, Type.UNKNOWN, 1));
    }
    for (var _i5 = 0; _i5 < descriptors.images.length; _i5++) {
      var image = descriptors.images[_i5];
      var _block6 = getDescriptorBlockData(map, {
        updateFrequency: rate,
        parameterType: ParameterType.TABLE,
        descriptorType: DescriptorTypeOrder.STORAGE_IMAGE,
        visibility: image.stageFlags
      });
      var _nameID5 = getOrCreateDescriptorID(lg, image.name);
      _block6.descriptors.push(new DescriptorData(_nameID5, image.type, image.count));
    }
    for (var _i6 = 0; _i6 < descriptors.subpassInputs.length; _i6++) {
      var subpassInput = descriptors.subpassInputs[_i6];
      var _block7 = getDescriptorBlockData(map, {
        updateFrequency: rate,
        parameterType: ParameterType.TABLE,
        descriptorType: DescriptorTypeOrder.INPUT_ATTACHMENT,
        visibility: subpassInput.stageFlags
      });
      var _nameID6 = getOrCreateDescriptorID(lg, subpassInput.name);
      _block7.descriptors.push(new DescriptorData(_nameID6, Type.UNKNOWN, subpassInput.count));
    }

    // sort blocks
    var flattenedBlocks = Array.from(map).sort(sortDescriptorBlocks);
    var data = new DescriptorSetLayoutData(set, 0);
    // calculate bindings
    var capacity = 0;
    for (var _iterator32 = _createForOfIteratorHelperLoose(flattenedBlocks), _step32; !(_step32 = _iterator32()).done;) {
      var _step32$value = _step32.value,
        key = _step32$value[0],
        _block8 = _step32$value[1];
      var index = JSON.parse(key);
      _block8.offset = capacity;
      for (var _iterator33 = _createForOfIteratorHelperLoose(_block8.descriptors), _step33; !(_step33 = _iterator33()).done;) {
        var d = _step33.value;
        if (index.descriptorType === DescriptorTypeOrder.UNIFORM_BUFFER) {
          // update uniform buffer binding
          var ub = uniformBlocks.get(d.descriptorID);
          if (!ub) {
            error("Uniform block not found for " + d.descriptorID);
            continue;
          }
          assert(ub.binding === 0xFFFFFFFF);
          ub.binding = _block8.capacity;
          // add uniform buffer to output
          data.uniformBlocks.set(d.descriptorID, ub);
        }
        // update block capacity
        var binding = data.bindingMap.get(d.descriptorID);
        if (binding !== undefined) {
          error("Duplicated descriptor " + d.descriptorID);
        }
        data.bindingMap.set(d.descriptorID, _block8.offset + _block8.capacity);
        _block8.capacity += d.count;
      }
      // increate total capacity
      capacity += _block8.capacity;
      data.capacity += _block8.capacity;
      if (index.descriptorType === DescriptorTypeOrder.UNIFORM_BUFFER || index.descriptorType === DescriptorTypeOrder.DYNAMIC_UNIFORM_BUFFER) {
        data.uniformBlockCapacity += _block8.capacity;
      } else if (index.descriptorType === DescriptorTypeOrder.SAMPLER_TEXTURE) {
        data.samplerTextureCapacity += _block8.capacity;
      }
      data.descriptorBlocks.push(_block8);
    }
    return data;
  }

  // fill DescriptorSetLayoutInfo from DescriptorSetLayoutData
  function initializeDescriptorSetLayoutInfo(layoutData, info) {
    for (var i = 0; i < layoutData.descriptorBlocks.length; ++i) {
      var block = layoutData.descriptorBlocks[i];
      var slot = block.offset;
      for (var j = 0; j < block.descriptors.length; ++j) {
        var d = block.descriptors[j];
        var binding = new DescriptorSetLayoutBinding();
        binding.binding = slot;
        binding.descriptorType = getGfxDescriptorType(block.type);
        binding.count = d.count;
        binding.stageFlags = block.visibility;
        binding.immutableSamplers = [];
        info.bindings.push(binding);
        slot += d.count;
      }
    }
  }
  function populatePipelineLayoutInfo(layout, rate, info) {
    var set = layout.descriptorSets.get(rate);
    if (set && set.descriptorSetLayout) {
      info.setLayouts.push(set.descriptorSetLayout);
    } else {
      info.setLayouts.push(_emptyDescriptorSetLayout);
    }
  }
  function generateConstantMacros(device, constantMacros) {
    constantMacros = "\n  #define CC_DEVICE_SUPPORT_FLOAT_TEXTURE " + (device.getFormatFeatures(Format.RGBA32F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE) ? '1' : '0') + "\n  #define CC_DEVICE_MAX_VERTEX_UNIFORM_VECTORS " + device.capabilities.maxVertexUniformVectors + "\n  #define CC_DEVICE_MAX_FRAGMENT_UNIFORM_VECTORS " + device.capabilities.maxFragmentUniformVectors + "\n  #define CC_DEVICE_CAN_BENEFIT_FROM_INPUT_ATTACHMENT " + (device.hasFeature(Feature.INPUT_ATTACHMENT_BENEFIT) ? '1' : '0') + "\n  #define CC_PLATFORM_ANDROID_AND_WEBGL 0\n  #define CC_ENABLE_WEBGL_HIGHP_STRUCT_VALUES 0\n  #define CC_JOINT_UNIFORM_CAPACITY " + UBOSkinning.JOINT_UNIFORM_CAPACITY;
  }

  // initialize layout graph module
  function initializeLayoutGraphData(device, lg) {
    // create descriptor sets
    _emptyDescriptorSetLayout = device.createDescriptorSetLayout(new DescriptorSetLayoutInfo());
    _emptyPipelineLayout = device.createPipelineLayout(new PipelineLayoutInfo());
    for (var _iterator34 = _createForOfIteratorHelperLoose(lg.vertices()), _step34; !(_step34 = _iterator34()).done;) {
      var v = _step34.value;
      var layoutData = lg.getLayout(v);
      for (var _iterator36 = _createForOfIteratorHelperLoose(layoutData.descriptorSets), _step36; !(_step36 = _iterator36()).done;) {
        var _step36$value = _step36.value,
          _ = _step36$value[0],
          set = _step36$value[1];
        if (set.descriptorSetLayout !== null) {
          warn('descriptor set layout already initialized. It will be overwritten');
        }
        initializeDescriptorSetLayoutInfo(set.descriptorSetLayoutData, set.descriptorSetLayoutInfo);
        set.descriptorSetLayout = device.createDescriptorSetLayout(set.descriptorSetLayoutInfo);
      }
    }
    // create pipeline layouts
    for (var _iterator35 = _createForOfIteratorHelperLoose(lg.vertices()), _step35; !(_step35 = _iterator35()).done;) {
      var _v2 = _step35.value;
      if (!lg.holds(LayoutGraphDataValue.RenderPhase, _v2)) {
        continue;
      }
      var subpassOrPassID = lg.getParent(_v2);
      var phaseID = _v2;
      var passLayout = lg.getLayout(subpassOrPassID);
      var phaseLayout = lg.getLayout(phaseID);
      var info = new PipelineLayoutInfo();
      populatePipelineLayoutInfo(passLayout, UpdateFrequency.PER_PASS, info);
      populatePipelineLayoutInfo(phaseLayout, UpdateFrequency.PER_PHASE, info);
      populatePipelineLayoutInfo(phaseLayout, UpdateFrequency.PER_BATCH, info);
      populatePipelineLayoutInfo(phaseLayout, UpdateFrequency.PER_INSTANCE, info);
      var phase = lg.getRenderPhase(phaseID);
      phase.pipelineLayout = device.createPipelineLayout(info);
    }
  }

  // terminate layout graph module
  function terminateLayoutGraphData(lg) {
    for (var _iterator37 = _createForOfIteratorHelperLoose(lg.vertices()), _step37; !(_step37 = _iterator37()).done;) {
      var v = _step37.value;
      var layoutData = lg.getLayout(v);
      for (var _iterator38 = _createForOfIteratorHelperLoose(layoutData.descriptorSets), _step38; !(_step38 = _iterator38()).done;) {
        var _step38$value = _step38.value,
          _ = _step38$value[0],
          set = _step38$value[1];
        if (set.descriptorSetLayout !== null) {
          set.descriptorSetLayout.destroy();
        }
      }
    }
    _emptyPipelineLayout.destroy();
    _emptyDescriptorSetLayout.destroy();
  }

  // get empty descriptor set layout
  function getEmptyDescriptorSetLayout() {
    return _emptyDescriptorSetLayout;
  }

  // get empty pipeline layout
  function getEmptyPipelineLayout() {
    return _emptyPipelineLayout;
  }

  // get descriptor set from LayoutGraphData (not from ProgramData)
  function getOrCreateDescriptorSetLayout(lg, subpassOrPassID, phaseID, rate) {
    if (rate < UpdateFrequency.PER_PASS) {
      var phaseData = lg.getLayout(phaseID);
      var _data = phaseData.descriptorSets.get(rate);
      if (_data) {
        if (!_data.descriptorSetLayout) {
          error('descriptor set layout not initialized');
          return _emptyDescriptorSetLayout;
        }
        return _data.descriptorSetLayout;
      }
      return _emptyDescriptorSetLayout;
    }
    assert(rate === UpdateFrequency.PER_PASS);
    assert(subpassOrPassID === lg.getParent(phaseID));
    var passData = lg.getLayout(subpassOrPassID);
    var data = passData.descriptorSets.get(rate);
    if (data) {
      if (!data.descriptorSetLayout) {
        error('descriptor set layout not initialized');
        return _emptyDescriptorSetLayout;
      }
      return data.descriptorSetLayout;
    }
    return _emptyDescriptorSetLayout;
  }

  // getDescriptorSetLayout from LayoutGraphData
  function getDescriptorSetLayout(lg, subpassOrPassID, phaseID, rate) {
    if (rate < UpdateFrequency.PER_PASS) {
      var phaseData = lg.getLayout(phaseID);
      var _data2 = phaseData.descriptorSets.get(rate);
      if (_data2) {
        if (!_data2.descriptorSetLayout) {
          error('descriptor set layout not initialized');
          return null;
        }
        return _data2.descriptorSetLayout;
      }
      return null;
    }
    assert(rate === UpdateFrequency.PER_PASS);
    assert(subpassOrPassID === lg.getParent(phaseID));
    var passData = lg.getLayout(subpassOrPassID);
    var data = passData.descriptorSets.get(rate);
    if (data) {
      if (!data.descriptorSetLayout) {
        error('descriptor set layout not initialized');
        return null;
      }
      return data.descriptorSetLayout;
    }
    return null;
  }

  // get or create DescriptorBlockData from DescriptorSetLayoutData
  function getOrCreateDescriptorBlockData(data, type, vis) {
    var order = getDescriptorTypeOrder(type);
    for (var _iterator39 = _createForOfIteratorHelperLoose(data.descriptorBlocks), _step39; !(_step39 = _iterator39()).done;) {
      var _block9 = _step39.value;
      if (_block9.type === order && _block9.visibility === vis) {
        return _block9;
      }
    }
    var block = new DescriptorBlockData(order, vis);
    data.descriptorBlocks.push(block);
    return block;
  }
  function getProgramID(lg, phaseID, programName) {
    assert(phaseID !== lg.nullVertex());
    var phase = lg.getRenderPhase(phaseID);
    var programID = phase.shaderIndex.get(programName);
    if (programID === undefined) {
      return INVALID_ID;
    }
    return programID;
  }
  function getDescriptorNameID(lg, name) {
    var nameID = lg.attributeIndex.get(name);
    if (nameID === undefined) {
      return INVALID_ID;
    }
    return nameID;
  }
  function getDescriptorName(lg, nameID) {
    if (nameID >= lg.valueNames.length) {
      return '';
    }
    return lg.valueNames[nameID];
  }
  function getPerPassDescriptorSetLayoutData(lg, subpassOrPassID) {
    assert(subpassOrPassID !== lg.nullVertex());
    var node = lg.getLayout(subpassOrPassID);
    var set = node.descriptorSets.get(UpdateFrequency.PER_PASS);
    if (set === undefined) {
      return null;
    }
    return set.descriptorSetLayoutData;
  }
  function getPerPhaseDescriptorSetLayoutData(lg, phaseID) {
    assert(phaseID !== lg.nullVertex());
    var node = lg.getLayout(phaseID);
    var set = node.descriptorSets.get(UpdateFrequency.PER_PHASE);
    if (set === undefined) {
      return null;
    }
    return set.descriptorSetLayoutData;
  }
  function getPerBatchDescriptorSetLayoutData(lg, phaseID, programID) {
    assert(phaseID !== lg.nullVertex());
    var phase = lg.getRenderPhase(phaseID);
    assert(programID < phase.shaderPrograms.length);
    var program = phase.shaderPrograms[programID];
    var set = program.layout.descriptorSets.get(UpdateFrequency.PER_BATCH);
    if (set === undefined) {
      return null;
    }
    return set.descriptorSetLayoutData;
  }
  function getPerInstanceDescriptorSetLayoutData(lg, phaseID, programID) {
    assert(phaseID !== lg.nullVertex());
    var phase = lg.getRenderPhase(phaseID);
    assert(programID < phase.shaderPrograms.length);
    var program = phase.shaderPrograms[programID];
    var set = program.layout.descriptorSets.get(UpdateFrequency.PER_INSTANCE);
    if (set === undefined) {
      return null;
    }
    return set.descriptorSetLayoutData;
  }
  function getBinding(layout, nameID) {
    var binding = layout.bindingMap.get(nameID);
    if (binding === undefined) {
      return 0xFFFFFFFF;
    }
    return binding;
  }
  _export({
    getGfxDescriptorType: getGfxDescriptorType,
    getDescriptorTypeOrder: getDescriptorTypeOrder,
    getCustomPassID: getCustomPassID,
    getCustomSubpassID: getCustomSubpassID,
    getCustomPhaseID: getCustomPhaseID,
    getUniformBlockSize: getUniformBlockSize,
    getOrCreateDescriptorID: getOrCreateDescriptorID,
    getOrCreateConstantID: getOrCreateConstantID,
    buildLayoutGraphData: buildLayoutGraphData,
    createGfxDescriptorSetsAndPipelines: createGfxDescriptorSetsAndPipelines,
    printLayoutGraphData: printLayoutGraphData,
    makeDescriptorSetLayoutData: makeDescriptorSetLayoutData,
    initializeDescriptorSetLayoutInfo: initializeDescriptorSetLayoutInfo,
    populatePipelineLayoutInfo: populatePipelineLayoutInfo,
    generateConstantMacros: generateConstantMacros,
    initializeLayoutGraphData: initializeLayoutGraphData,
    terminateLayoutGraphData: terminateLayoutGraphData,
    getEmptyDescriptorSetLayout: getEmptyDescriptorSetLayout,
    getEmptyPipelineLayout: getEmptyPipelineLayout,
    getOrCreateDescriptorSetLayout: getOrCreateDescriptorSetLayout,
    getDescriptorSetLayout: getDescriptorSetLayout,
    getOrCreateDescriptorBlockData: getOrCreateDescriptorBlockData,
    getProgramID: getProgramID,
    getDescriptorNameID: getDescriptorNameID,
    getDescriptorName: getDescriptorName,
    getPerPassDescriptorSetLayoutData: getPerPassDescriptorSetLayoutData,
    getPerPhaseDescriptorSetLayoutData: getPerPhaseDescriptorSetLayoutData,
    getPerBatchDescriptorSetLayoutData: getPerBatchDescriptorSetLayoutData,
    getPerInstanceDescriptorSetLayoutData: getPerInstanceDescriptorSetLayoutData,
    getBinding: getBinding
  });
  return {
    setters: [function (_coreIndexJs) {
      assert = _coreIndexJs.assert;
      error = _coreIndexJs.error;
      warn = _coreIndexJs.warn;
    }, function (_gfxIndexJs) {
      DescriptorSetInfo = _gfxIndexJs.DescriptorSetInfo;
      DescriptorSetLayoutBinding = _gfxIndexJs.DescriptorSetLayoutBinding;
      DescriptorSetLayoutInfo = _gfxIndexJs.DescriptorSetLayoutInfo;
      DescriptorType = _gfxIndexJs.DescriptorType;
      Feature = _gfxIndexJs.Feature;
      Format = _gfxIndexJs.Format;
      FormatFeatureBit = _gfxIndexJs.FormatFeatureBit;
      GetTypeSize = _gfxIndexJs.GetTypeSize;
      PipelineLayoutInfo = _gfxIndexJs.PipelineLayoutInfo;
      ShaderStageFlagBit = _gfxIndexJs.ShaderStageFlagBit;
      Type = _gfxIndexJs.Type;
      Uniform = _gfxIndexJs.Uniform;
      UniformBlock = _gfxIndexJs.UniformBlock;
    }, function (_defineJs) {
      UBOForwardLight = _defineJs.UBOForwardLight;
      UBOSkinning = _defineJs.UBOSkinning;
    }, function (_graphJs) {
      DefaultVisitor = _graphJs.DefaultVisitor;
      depthFirstSearch = _graphJs.depthFirstSearch;
    }, function (_layoutGraphJs) {
      DescriptorBlockData = _layoutGraphJs.DescriptorBlockData;
      DescriptorData = _layoutGraphJs.DescriptorData;
      DescriptorDB = _layoutGraphJs.DescriptorDB;
      DescriptorSetData = _layoutGraphJs.DescriptorSetData;
      DescriptorSetLayoutData = _layoutGraphJs.DescriptorSetLayoutData;
      LayoutGraph = _layoutGraphJs.LayoutGraph;
      LayoutGraphDataValue = _layoutGraphJs.LayoutGraphDataValue;
      LayoutGraphValue = _layoutGraphJs.LayoutGraphValue;
      PipelineLayoutData = _layoutGraphJs.PipelineLayoutData;
      RenderPassType = _layoutGraphJs.RenderPassType;
      RenderPhase = _layoutGraphJs.RenderPhase;
      RenderPhaseData = _layoutGraphJs.RenderPhaseData;
      RenderStageData = _layoutGraphJs.RenderStageData;
      ShaderProgramData = _layoutGraphJs.ShaderProgramData;
    }, function (_typesJs) {
      UpdateFrequency = _typesJs.UpdateFrequency;
      getUpdateFrequencyName = _typesJs.getUpdateFrequencyName;
      getDescriptorTypeOrderName = _typesJs.getDescriptorTypeOrderName;
      Descriptor = _typesJs.Descriptor;
      DescriptorBlock = _typesJs.DescriptorBlock;
      DescriptorBlockFlattened = _typesJs.DescriptorBlockFlattened;
      DescriptorBlockIndex = _typesJs.DescriptorBlockIndex;
      DescriptorTypeOrder = _typesJs.DescriptorTypeOrder;
      ParameterType = _typesJs.ParameterType;
    }],
    execute: function () {
      _export("INVALID_ID", INVALID_ID = 0xFFFFFFFF);
      _export("ENABLE_SUBPASS", ENABLE_SUBPASS = true);
      _export("PrintVisitor", PrintVisitor = /*#__PURE__*/function (_DefaultVisitor) {
        _inheritsLoose(PrintVisitor, _DefaultVisitor);
        function PrintVisitor() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _DefaultVisitor.call.apply(_DefaultVisitor, [this].concat(args)) || this;
          _this.space = '';
          _this.oss = '';
          return _this;
        }
        var _proto = PrintVisitor.prototype;
        _proto.discoverVertex = function discoverVertex(u, g) {
          var _this2 = this;
          var ppl = g.getLayout(u);
          var name = g._names[u];
          var freq = g._updateFrequencies[u];
          this.oss += this.space + "\"" + name + "\": ";
          if (g.holds(LayoutGraphDataValue.RenderStage, u)) {
            this.oss += "RenderStage {\n";
          } else {
            this.oss += "RenderPhase {\n";
          }
          this.space = indent(this.space);

          // eslint-disable-next-line no-loop-func
          ppl.descriptorSets.forEach(function (value, key) {
            _this2.oss += _this2.space + "DescriptorSet<" + getUpdateFrequencyName(key) + "> {\n";
            _this2.space = indent(_this2.space);
            var uniformBlocks = value.descriptorSetLayoutData.uniformBlocks;
            uniformBlocks.forEach(function (uniformBlock, attrNameID) {
              var name = g.valueNames[attrNameID];
              _this2.oss += _this2.space + "UniformBlock \"" + name + "\" {\n";
              for (var _iterator = _createForOfIteratorHelperLoose(uniformBlock.members), _step; !(_step = _iterator()).done;) {
                var _u = _step.value;
                if (_u.count > 1) {
                  _this2.oss += _this2.space + "    " + _u.name + "[" + _u.count + "]: " + getGfxTypeName(_u.type) + "\n";
                } else {
                  _this2.oss += _this2.space + "    " + _u.name + ": " + getGfxTypeName(_u.type) + "\n";
                }
              }
              _this2.oss += _this2.space + "}\n";
            });
            var blocks = value.descriptorSetLayoutData.descriptorBlocks;
            for (var j = 0; j < blocks.length; ++j) {
              var block = blocks[j];
              _this2.oss += _this2.space + "Block<" + getDescriptorTypeOrderName(block.type) + ", " + getVisibilityName(block.visibility) + "> {\n";
              _this2.oss += _this2.space + "    offset: " + block.offset + "\n";
              _this2.oss += _this2.space + "    capacity: " + block.capacity + "\n";
              _this2.oss += _this2.space + "    count: " + block.descriptors.length + "\n";
              if (block.descriptors.length > 0) {
                _this2.oss += _this2.space + "    Descriptors{ \n";
                var count = 0;
                for (var k = 0; k < block.descriptors.length; ++k) {
                  var d = block.descriptors[k];
                  // if (count++) {
                  _this2.oss += _this2.space;
                  _this2.oss += '        ';
                  var n = g.valueNames[d.descriptorID];
                  _this2.oss += "\"" + n;
                  if (d.count !== 1) {
                    _this2.oss += "[" + d.count + "]";
                  }
                  _this2.oss += '"';
                  // }
                  _this2.oss += '\n';
                }
                _this2.oss += _this2.space + "    }\n";
              }
              _this2.oss += _this2.space + "}\n";
            }
            _this2.space = unindent(_this2.space);
            _this2.oss += _this2.space + "}\n";
          });
        };
        _proto.finishVertex = function finishVertex(v, g) {
          this.space = unindent(this.space);
          this.oss += this.space + "}\n";
        };
        return PrintVisitor;
      }(DefaultVisitor));
      DescriptorCounter = /*#__PURE__*/function () {
        function DescriptorCounter() {
          // counter is the num of descriptors in each block
          this.counter = new Map();
          this.inspector = new Map();
        }
        var _proto2 = DescriptorCounter.prototype;
        _proto2.addDescriptor = function addDescriptor(key, name, count) {
          var _this$inspector$get;
          // key is DescriptorBlockIndex
          // name is Descriptor name
          // count is Descriptor count
          var v = this.counter.get(key);
          if (v === undefined) {
            this.counter.set(key, count);
            this.inspector.set(key, [name]);
            return;
          }
          this.counter.set(key, v + count);
          (_this$inspector$get = this.inspector.get(key)) === null || _this$inspector$get === void 0 ? void 0 : _this$inspector$get.push(name);
        };
        return DescriptorCounter;
      }(); // print LayoutGraph (not LayoutGraphData)
      LayoutGraphPrintVisitor = /*#__PURE__*/function (_DefaultVisitor2) {
        _inheritsLoose(LayoutGraphPrintVisitor, _DefaultVisitor2);
        function LayoutGraphPrintVisitor() {
          var _this3;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this3 = _DefaultVisitor2.call.apply(_DefaultVisitor2, [this].concat(args)) || this;
          _this3.space = '';
          _this3.oss = '';
          return _this3;
        }
        var _proto3 = LayoutGraphPrintVisitor.prototype;
        _proto3.discoverVertex = function discoverVertex(v, g) {
          var _this4 = this;
          var info = g.getDescriptors(v);
          var name = g.getName(v);
          this.oss += this.space + "\"" + name + "\": ";
          switch (g.id(v)) {
            case LayoutGraphValue.RenderStage:
              this.oss += "RenderStage {\n";
              break;
            case LayoutGraphValue.RenderPhase:
              this.oss += "RenderPhase {\n";
              break;
            default:
              this.oss += "unknown LayoutGraphValue {\n";
              break;
          }
          this.space = indent(this.space);
          var sortedMap = new Map(Array.from(info.blocks).sort(function (a, b) {
            return String(a[0]).localeCompare(b[0]);
          }));
          sortedMap.forEach(function (block, key) {
            var index = JSON.parse(key);
            var flat = convertDescriptorBlock(block);
            _this4.oss += _this4.space + "DescriptorBlock {\n";
            _this4.space = indent(_this4.space);
            _this4.oss += _this4.space + "updateRate: " + getUpdateFrequencyName(index.updateFrequency) + "\n";
            _this4.oss += _this4.space + "type: " + getDescriptorTypeOrderName(index.descriptorType) + "\n";
            _this4.oss += _this4.space + "visibility: " + getVisibilityName(index.visibility) + "\n";
            _this4.oss += _this4.space + "descriptors: [" + flat.descriptorNames.join(', ') + "]\n";
            _this4.oss += _this4.space + "uniformBlocks: [";
            for (var i = 0; i < flat.uniformBlocks.length; ++i) {
              if (i) {
                _this4.oss += ', ';
              }
              _this4.oss += "" + flat.uniformBlocks[i].name;
            }
            _this4.oss += "]\n";
            _this4.oss += _this4.space + "count: " + flat.count + "\n";
            _this4.oss += _this4.space + "capacity: " + flat.capacity + "\n";
            _this4.space = unindent(_this4.space);
            _this4.oss += _this4.space + "}\n";
          });
        };
        _proto3.finishVertex = function finishVertex(v, g) {
          this.space = unindent(this.space);
          this.oss += this.space + "}\n";
        };
        return LayoutGraphPrintVisitor;
      }(DefaultVisitor);
      _export("VisibilityIndex", VisibilityIndex = function VisibilityIndex(updateFrequency, parameterType, descriptorType) {
        if (updateFrequency === void 0) {
          updateFrequency = UpdateFrequency.PER_INSTANCE;
        }
        if (parameterType === void 0) {
          parameterType = ParameterType.TABLE;
        }
        if (descriptorType === void 0) {
          descriptorType = DescriptorTypeOrder.UNIFORM_BUFFER;
        }
        this.updateFrequency = void 0;
        this.parameterType = void 0;
        this.descriptorType = void 0;
        this.updateFrequency = updateFrequency;
        this.parameterType = parameterType;
        this.descriptorType = descriptorType;
      }); // descriptors of same visibility
      _export("VisibilityBlock", VisibilityBlock = /*#__PURE__*/function () {
        function VisibilityBlock() {
          this.descriptors = new Map();
        }
        var _proto4 = VisibilityBlock.prototype;
        _proto4.mergeVisibility = function mergeVisibility(name, vis) {
          // for each descriptor, merge visibility
          // rate must >= PER_PHASE
          var v0 = this.descriptors.get(name);
          if (v0 === undefined) {
            this.descriptors.set(name, vis);
          } else {
            this.descriptors.set(name, v0 | vis);
          }
        };
        _proto4.getVisibility = function getVisibility(name) {
          var v = this.descriptors.get(name);
          if (v === undefined) {
            error("Can't find visibility for descriptor: " + name);
            return ShaderStageFlagBit.NONE;
          }
          return v;
        };
        return VisibilityBlock;
      }()); // visibility database of phase
      _export("VisibilityDB", VisibilityDB = /*#__PURE__*/function () {
        function VisibilityDB() {
          this.blocks = new Map();
        }
        var _proto5 = VisibilityDB.prototype;
        _proto5.getBlock = function getBlock(index) {
          var key = JSON.stringify(index);
          var block = this.blocks.get(key);
          if (block === undefined) {
            block = new VisibilityBlock();
            this.blocks.set(key, block);
          }
          return block;
        };
        return VisibilityDB;
      }()); // visibility database of pass
      _export("VisibilityPass", VisibilityPass = /*#__PURE__*/function () {
        function VisibilityPass() {
          this.phases = new Map();
        }
        var _proto6 = VisibilityPass.prototype;
        _proto6.getPhase = function getPhase(phaseName) {
          var phase = this.phases.get(phaseName);
          if (phase === undefined) {
            var newPhase = new VisibilityDB();
            this.phases.set(phaseName, newPhase);
            return newPhase;
          }
          return phase;
        };
        return VisibilityPass;
      }());
      _export("DEFAULT_UNIFORM_COUNTS", DEFAULT_UNIFORM_COUNTS = new Map([['cc_lightPos', UBOForwardLight.LIGHTS_PER_PASS], ['cc_lightColor', UBOForwardLight.LIGHTS_PER_PASS], ['cc_lightSizeRangeAngle', UBOForwardLight.LIGHTS_PER_PASS], ['cc_lightDir', UBOForwardLight.LIGHTS_PER_PASS], ['cc_lightBoundingSizeVS', UBOForwardLight.LIGHTS_PER_PASS]]));
      _export("DYNAMIC_UNIFORM_BLOCK", DYNAMIC_UNIFORM_BLOCK = new Set(['CCCamera', 'CCForwardLight', 'CCUILocal']));
      _export("VisibilityGraph", VisibilityGraph = /*#__PURE__*/function () {
        function VisibilityGraph() {
          this.passes = new Map();
        }
        var _proto7 = VisibilityGraph.prototype;
        _proto7.getPass = function getPass(passName) {
          var pass = this.passes.get(passName);
          if (pass === undefined) {
            var newPass = new VisibilityPass();
            this.passes.set(passName, newPass);
            return newPass;
          }
          return pass;
        };
        _proto7.merge = function merge(rate, order, infoArray, db) {
          var blockIndex = new VisibilityIndex(rate, ParameterType.TABLE, order);
          var block = db.getBlock(blockIndex);
          for (var _iterator3 = _createForOfIteratorHelperLoose(infoArray), _step3; !(_step3 = _iterator3()).done;) {
            var info = _step3.value;
            block.mergeVisibility(info.name, info.stageFlags);
          }
        };
        _proto7.mergeEffect = function mergeEffect(asset) {
          for (var _iterator4 = _createForOfIteratorHelperLoose(asset.techniques), _step4; !(_step4 = _iterator4()).done;) {
            var tech = _step4.value;
            for (var _iterator5 = _createForOfIteratorHelperLoose(tech.passes), _step5; !(_step5 = _iterator5()).done;) {
              var pass = _step5.value;
              var programName = pass.program;
              var shader = null;
              for (var _iterator6 = _createForOfIteratorHelperLoose(asset.shaders), _step6; !(_step6 = _iterator6()).done;) {
                var shaderInfo = _step6.value;
                if (shaderInfo.name === programName) {
                  shader = shaderInfo;
                }
              }
              if (!shader) {
                continue;
              }
              if (shader.descriptors === undefined) {
                warn("No descriptors in shader: " + programName + ", please reimport ALL effects");
                continue;
              }
              var passName = getPassName(pass);
              var passData = this.getPass(passName);
              var phaseName = getPhaseName(pass);
              var phaseData = passData.getPhase(phaseName);
              for (var _iterator7 = _createForOfIteratorHelperLoose(shader.descriptors), _step7; !(_step7 = _iterator7()).done;) {
                var list = _step7.value;
                if (list.rate < UpdateFrequency.PER_PHASE) {
                  // do not merger PER_BATCH, PER_INSTANCE descriptors
                  continue;
                }
                this.merge(list.rate, DescriptorTypeOrder.UNIFORM_BUFFER, list.blocks, phaseData);
                this.merge(list.rate, DescriptorTypeOrder.STORAGE_BUFFER, list.buffers, phaseData);
                this.merge(list.rate, DescriptorTypeOrder.TEXTURE, list.textures, phaseData);
                this.merge(list.rate, DescriptorTypeOrder.SAMPLER_TEXTURE, list.samplerTextures, phaseData);
                this.merge(list.rate, DescriptorTypeOrder.SAMPLER, list.samplers, phaseData);
                this.merge(list.rate, DescriptorTypeOrder.STORAGE_IMAGE, list.images, phaseData);
                this.merge(list.rate, DescriptorTypeOrder.INPUT_ATTACHMENT, list.subpassInputs, phaseData);
              }
            }
          }
        };
        return VisibilityGraph;
      }()); // graph coloring help class
      VectorGraphColorMap = /*#__PURE__*/function () {
        function VectorGraphColorMap(sz) {
          this.colors = void 0;
          this.colors = new Array(sz);
        }
        var _proto8 = VectorGraphColorMap.prototype;
        _proto8.get = function get(u) {
          return this.colors[u];
        };
        _proto8.put = function put(u, value) {
          this.colors[u] = value;
        };
        return VectorGraphColorMap;
      }(); // class to layout all descriptors
      _export("LayoutGraphInfo", LayoutGraphInfo = /*#__PURE__*/function () {
        function LayoutGraphInfo(visg) {
          this.lg = new LayoutGraph();
          this.visg = void 0;
          this.enableDebug = false;
          this.visg = visg;
        }
        var _proto9 = LayoutGraphInfo.prototype;
        _proto9.getPassID = function getPassID(passName, type) {
          var lg = this.lg;
          var passID = lg.locateChild(lg.nullVertex(), passName);
          if (passID === lg.nullVertex()) {
            passID = lg.addVertex(LayoutGraphValue.RenderStage, type, passName, new DescriptorDB(), lg.nullVertex());
          }
          assert(passID !== lg.nullVertex());
          return passID;
        };
        _proto9.getSubpassID = function getSubpassID(subpassName, passID) {
          var lg = this.lg;
          var subpassID = lg.locateChild(passID, subpassName);
          if (subpassID === lg.nullVertex()) {
            subpassID = lg.addVertex(LayoutGraphValue.RenderStage, RenderPassType.RENDER_SUBPASS, subpassName, new DescriptorDB(), passID);
          }
          assert(subpassID !== lg.nullVertex());
          return subpassID;
        };
        _proto9.getPhaseID = function getPhaseID(phaseName, subpassOrPassID) {
          var lg = this.lg;
          var phaseID = lg.locateChild(subpassOrPassID, phaseName);
          if (phaseID === lg.nullVertex()) {
            phaseID = lg.addVertex(LayoutGraphValue.RenderPhase, new RenderPhase(), phaseName, new DescriptorDB(), subpassOrPassID);
          }
          assert(phaseID !== lg.nullVertex());
          return phaseID;
        };
        _proto9.getDescriptorBlock = function getDescriptorBlock(key, descriptorDB) {
          var value = descriptorDB.blocks.get(key);
          if (value === undefined) {
            var uniformBlock = new DescriptorBlock();
            descriptorDB.blocks.set(key, uniformBlock);
            return uniformBlock;
          }
          return value;
        };
        _proto9.checkConsistency = function checkConsistency(lhs, rhs) {
          if (lhs.count !== 1) {
            return false;
          }
          if (lhs.members.length !== rhs.members.length) {
            return false;
          }
          for (var i = 0; i < lhs.members.length; ++i) {
            if (lhs.members[i].name !== rhs.members[i].name) {
              return false;
            }
            if (lhs.members[i].type !== rhs.members[i].type) {
              return false;
            }
            if (lhs.members[i].count !== rhs.members[i].count) {
              return false;
            }
          }
          return true;
        };
        _proto9.makeUniformBlock = function makeUniformBlock(info) {
          var uniformBlock = new UniformBlock(0, 0, info.name);
          uniformBlock.count = 1;
          for (var _iterator8 = _createForOfIteratorHelperLoose(info.members), _step8; !(_step8 = _iterator8()).done;) {
            var member = _step8.value;
            uniformBlock.members.push(new Uniform(member.name, member.type, member.count));
          }
          return uniformBlock;
        };
        _proto9.addDescriptor = function addDescriptor(block, name, type) {
          if (type === void 0) {
            type = Type.UNKNOWN;
          }
          var value = block.descriptors.get(name);
          if (value === undefined) {
            block.descriptors.set(name, new Descriptor(type));
            ++block.capacity;
            ++block.count;
            return;
          }
          if (value.type !== type) {
            warn("Type mismatch for descriptor " + name);
          }
        };
        _proto9.addUniformBlock = function addUniformBlock(block, name, gfxBlock) {
          var value = block.uniformBlocks.get(name);
          if (value === undefined) {
            block.uniformBlocks.set(name, gfxBlock);
            return;
          }
          if (!this.checkConsistency(value, gfxBlock)) {
            warn("Uniform block " + name + " is inconsistent in the same block");
          }
        };
        _proto9.buildBlocks = function buildBlocks(visDB, rate, blocks, db, counter) {
          var visBlock = visDB.getBlock({
            updateFrequency: rate,
            parameterType: ParameterType.TABLE,
            descriptorType: DescriptorTypeOrder.UNIFORM_BUFFER
          });
          for (var _iterator9 = _createForOfIteratorHelperLoose(blocks), _step9; !(_step9 = _iterator9()).done;) {
            var info = _step9.value;
            var blockIndex = new DescriptorBlockIndex(rate, ParameterType.TABLE, DescriptorTypeOrder.UNIFORM_BUFFER, rate >= UpdateFrequency.PER_PHASE ? visBlock.getVisibility(info.name) : info.stageFlags);
            var key = JSON.stringify(blockIndex);
            var block = this.getDescriptorBlock(key, db);
            if (blockIndex.updateFrequency > UpdateFrequency.PER_BATCH) {
              this.addDescriptor(block, info.name);
              this.addUniformBlock(block, info.name, this.makeUniformBlock(info));
            } else {
              counter.addDescriptor(key, info.name, 1);
            }
          }
        };
        _proto9.buildBuffers = function buildBuffers(visDB, rate, infoArray, type, db, counter) {
          var visBlock = visDB.getBlock({
            updateFrequency: rate,
            parameterType: ParameterType.TABLE,
            descriptorType: DescriptorTypeOrder.STORAGE_BUFFER
          });
          for (var _iterator10 = _createForOfIteratorHelperLoose(infoArray), _step10; !(_step10 = _iterator10()).done;) {
            var info = _step10.value;
            var blockIndex = new DescriptorBlockIndex(rate, ParameterType.TABLE, DescriptorTypeOrder.STORAGE_BUFFER, rate >= UpdateFrequency.PER_PHASE ? visBlock.getVisibility(info.name) : info.stageFlags);
            var key = JSON.stringify(blockIndex);
            var block = this.getDescriptorBlock(key, db);
            if (blockIndex.updateFrequency > UpdateFrequency.PER_BATCH) {
              this.addDescriptor(block, info.name, type);
            } else {
              counter.addDescriptor(key, info.name, 1);
            }
          }
        };
        _proto9.buildNonTextures = function buildNonTextures(visDB, rate, order, infoArray, type, db, counter) {
          var visBlock = visDB.getBlock({
            updateFrequency: rate,
            parameterType: ParameterType.TABLE,
            descriptorType: order
          });
          for (var _iterator11 = _createForOfIteratorHelperLoose(infoArray), _step11; !(_step11 = _iterator11()).done;) {
            var info = _step11.value;
            var blockIndex = new DescriptorBlockIndex(rate, ParameterType.TABLE, order, rate >= UpdateFrequency.PER_PHASE ? visBlock.getVisibility(info.name) : info.stageFlags);
            var key = JSON.stringify(blockIndex);
            var block = this.getDescriptorBlock(key, db);
            if (blockIndex.updateFrequency > UpdateFrequency.PER_BATCH) {
              this.addDescriptor(block, info.name, type);
            } else {
              counter.addDescriptor(key, info.name, info.count);
            }
          }
        };
        _proto9.buildTextures = function buildTextures(visDB, rate, order, infoArray, db, counter) {
          var visBlock = visDB.getBlock({
            updateFrequency: rate,
            parameterType: ParameterType.TABLE,
            descriptorType: order
          });
          for (var _iterator12 = _createForOfIteratorHelperLoose(infoArray), _step12; !(_step12 = _iterator12()).done;) {
            var info = _step12.value;
            var blockIndex = new DescriptorBlockIndex(rate, ParameterType.TABLE, order, rate >= UpdateFrequency.PER_PHASE ? visBlock.getVisibility(info.name) : info.stageFlags);
            var key = JSON.stringify(blockIndex);
            var block = this.getDescriptorBlock(key, db);
            if (blockIndex.updateFrequency > UpdateFrequency.PER_BATCH) {
              this.addDescriptor(block, info.name, info.type);
            } else {
              counter.addDescriptor(key, info.name, info.count);
            }
          }
        };
        _proto9.addEffect = function addEffect(asset) {
          var _this5 = this;
          var lg = this.lg;
          for (var _iterator13 = _createForOfIteratorHelperLoose(asset.techniques), _step13; !(_step13 = _iterator13()).done;) {
            var tech = _step13.value;
            var _loop = function _loop() {
                var pass = _step14.value;
                var programName = pass.program;
                var shader = null;
                for (var _iterator15 = _createForOfIteratorHelperLoose(asset.shaders), _step15; !(_step15 = _iterator15()).done;) {
                  var shaderInfo = _step15.value;
                  if (shaderInfo.name === programName) {
                    shader = shaderInfo;
                  }
                }
                if (!shader) {
                  warn("program: " + programName + " not found");
                  return 0; // continue
                }
                if (shader.descriptors === undefined) {
                  warn("No descriptors in shader: " + programName + ", please reimport ALL effects");
                  return 0; // continue
                }
                // get database
                var passName = getPassName(pass);
                var phaseName = getPhaseName(pass);
                var enableSubpass = pass.subpass && pass.subpass !== '' && ENABLE_SUBPASS;
                var passID = _this5.getPassID(passName, enableSubpass ? RenderPassType.RENDER_PASS : RenderPassType.SINGLE_RENDER_PASS);
                var subpassID = enableSubpass ? _this5.getSubpassID(pass.subpass, passID) : undefined;
                var phaseID = _this5.getPhaseID(phaseName, subpassID || passID);
                var passVis = _this5.visg.getPass(passName);
                var visDB = passVis.getPhase(phaseName);
                var db = lg.getDescriptors(phaseID);
                var counter = new DescriptorCounter();

                // merge descriptors and reserve capacity
                for (var _iterator16 = _createForOfIteratorHelperLoose(shader.descriptors), _step16; !(_step16 = _iterator16()).done;) {
                  var list = _step16.value;
                  _this5.buildBlocks(visDB, list.rate, list.blocks, db, counter);
                  _this5.buildBuffers(visDB, list.rate, list.buffers, Type.UNKNOWN, db, counter);
                  _this5.buildNonTextures(visDB, list.rate, DescriptorTypeOrder.SAMPLER, list.samplers, Type.SAMPLER, db, counter);
                  _this5.buildNonTextures(visDB, list.rate, DescriptorTypeOrder.INPUT_ATTACHMENT, list.subpassInputs, Type.SAMPLER, db, counter);
                  _this5.buildTextures(visDB, list.rate, DescriptorTypeOrder.TEXTURE, list.textures, db, counter);
                  _this5.buildTextures(visDB, list.rate, DescriptorTypeOrder.SAMPLER_TEXTURE, list.samplerTextures, db, counter);
                  _this5.buildTextures(visDB, list.rate, DescriptorTypeOrder.STORAGE_IMAGE, list.images, db, counter);
                }

                // update max capacity and debug info
                counter.counter.forEach(function (v, key) {
                  var block = _this5.getDescriptorBlock(key, db);
                  if (v > block.capacity) {
                    block.capacity = Math.max(block.capacity, v);
                    if (_this5.enableDebug) {
                      var names = counter.inspector.get(key);
                      if (names === undefined) {
                        return;
                      }
                      block.descriptors.clear();
                      for (var _iterator17 = _createForOfIteratorHelperLoose(names), _step17; !(_step17 = _iterator17()).done;) {
                        var name = _step17.value;
                        block.descriptors.set(name, new Descriptor());
                      }
                    }
                  }
                });
              },
              _ret;
            for (var _iterator14 = _createForOfIteratorHelperLoose(tech.passes), _step14; !(_step14 = _iterator14()).done;) {
              _ret = _loop();
              if (_ret === 0) continue;
            }
          }
        };
        _proto9.build = function build() {
          var lg = this.lg;
          var visMap = new Map();
          // merge phase to pass
          for (var _iterator18 = _createForOfIteratorHelperLoose(lg.vertices()), _step18; !(_step18 = _iterator18()).done;) {
            var v = _step18.value;
            if (lg.id(v) === LayoutGraphValue.RenderStage) {
              // create visibility database
              visMap.set(v, new VisibilityDB());
              continue;
            }
            var phaseID = v;
            var parentID = lg.getParent(phaseID);
            if (lg.id(parentID) !== LayoutGraphValue.RenderStage) {
              error("phase: " + lg.getName(phaseID) + " has no parent stage");
              return 1;
            }
            var phaseDB = lg.getDescriptors(phaseID);
            var passVisDB = visMap.get(parentID);
            if (!passVisDB) {
              error("pass: " + lg.getName(parentID) + " has no visibility database");
              return 1;
            }
            // merge phase visibility to pass visibility
            for (var _iterator21 = _createForOfIteratorHelperLoose(phaseDB.blocks), _step21; !(_step21 = _iterator21()).done;) {
              var _step21$value = _step21.value,
                key = _step21$value[0],
                block = _step21$value[1];
              var index = JSON.parse(key);
              if (index.updateFrequency <= UpdateFrequency.PER_PHASE) {
                continue;
              }
              var visIndex = new VisibilityIndex(index.updateFrequency, index.parameterType, index.descriptorType);
              var passVisBlock = passVisDB.getBlock(visIndex);
              for (var _iterator22 = _createForOfIteratorHelperLoose(block.descriptors), _step22; !(_step22 = _iterator22()).done;) {
                var _step22$value = _step22.value,
                  name = _step22$value[0],
                  d = _step22$value[1];
                passVisBlock.mergeVisibility(name, index.visibility);
              }
            }
          }
          // build phase decriptors
          for (var _iterator19 = _createForOfIteratorHelperLoose(lg.vertices()), _step19; !(_step19 = _iterator19()).done;) {
            var _v = _step19.value;
            if (lg.id(_v) === LayoutGraphValue.RenderStage) {
              continue;
            }
            var _phaseID = _v;
            var _parentID = lg.getParent(_phaseID);
            if (lg.id(_parentID) !== LayoutGraphValue.RenderStage) {
              error("phase: " + lg.getName(_phaseID) + " has no parent stage");
              return 1;
            }
            var passDB = lg.getDescriptors(_parentID);
            var _phaseDB = lg.getDescriptors(_phaseID);
            var _passVisDB = visMap.get(_parentID);
            if (_passVisDB === undefined) {
              error("pass: " + lg.getName(_parentID) + " has no visibility database");
              return 1;
            }
            for (var _iterator23 = _createForOfIteratorHelperLoose(_phaseDB.blocks), _step23; !(_step23 = _iterator23()).done;) {
              var _step23$value = _step23.value,
                key0 = _step23$value[0],
                _block = _step23$value[1];
              var index0 = JSON.parse(key0);
              if (index0.updateFrequency <= UpdateFrequency.PER_PHASE) {
                continue;
              }
              var _visIndex = new VisibilityIndex(index0.updateFrequency, index0.parameterType, index0.descriptorType);
              var _passVisBlock = _passVisDB.getBlock(_visIndex);
              for (var _iterator24 = _createForOfIteratorHelperLoose(_block.descriptors), _step24; !(_step24 = _iterator24()).done;) {
                var _step24$value = _step24.value,
                  _name = _step24$value[0],
                  _d = _step24$value[1];
                var vis = _passVisBlock.getVisibility(_name);
                var passBlock = void 0;
                if (vis === index0.visibility) {
                  passBlock = this.getDescriptorBlock(key0, passDB);
                } else {
                  var _index = new DescriptorBlockIndex(index0.updateFrequency, index0.parameterType, index0.descriptorType, vis);
                  var _key3 = JSON.stringify(_index);
                  passBlock = this.getDescriptorBlock(_key3, passDB);
                }
                this.addDescriptor(passBlock, _name, _d.type);
                if (index0.descriptorType !== DescriptorTypeOrder.UNIFORM_BUFFER) {
                  continue;
                }
                var b = _block.uniformBlocks.get(_name);
                if (!b) {
                  error("uniform block: " + _name + " not found");
                  return 1;
                }
                this.addUniformBlock(passBlock, _name, b);
              }
            }
          }
          // update pass
          for (var _iterator20 = _createForOfIteratorHelperLoose(lg.vertices()), _step20; !(_step20 = _iterator20()).done;) {
            var passID = _step20.value;
            // skip RenderPhase
            if (lg.id(passID) !== LayoutGraphValue.RenderStage) {
              continue;
            }
            // skip RENDER_PASS
            if (lg.getRenderStage(passID) === RenderPassType.RENDER_PASS) {
              continue;
            }
            // build SINGLE_RENDER_PASS or RENDER_SUBPASS
            assert(lg.getRenderStage(passID) === RenderPassType.SINGLE_RENDER_PASS || lg.getRenderStage(passID) === RenderPassType.RENDER_SUBPASS);
            var _passDB = lg.getDescriptors(passID);
            // update children phases
            for (var _iterator25 = _createForOfIteratorHelperLoose(lg.children(passID)), _step25; !(_step25 = _iterator25()).done;) {
              var e = _step25.value;
              var _phaseID2 = lg.child(e);
              if (lg.id(_phaseID2) !== LayoutGraphValue.RenderPhase) {
                error("pass: " + lg.getName(passID) + " is not single_render_pass or render_subpass");
                return 1;
              }
              var _phaseDB2 = lg.getDescriptors(_phaseID2);
              for (var _iterator26 = _createForOfIteratorHelperLoose(_passDB.blocks), _step26; !(_step26 = _iterator26()).done;) {
                var _step26$value = _step26.value,
                  _key4 = _step26$value[0],
                  _passBlock = _step26$value[1];
                var _index2 = JSON.parse(_key4);
                if (_index2.updateFrequency !== UpdateFrequency.PER_PASS) {
                  error("phase: " + lg.getName(_phaseID2) + " update frequency is not PER_PASS");
                  return 1;
                }
                if (_passBlock.count === 0) {
                  error("pass: " + lg.getName(passID) + " count is 0");
                  return 1;
                }
                if (_passBlock.capacity !== _passBlock.count) {
                  error("pass: " + lg.getName(passID) + " capacity does not equal count");
                  return 1;
                }
                var phaseBlock = this.getDescriptorBlock(_key4, _phaseDB2);
                phaseBlock.descriptors.clear();
                phaseBlock.uniformBlocks.clear();
                phaseBlock.capacity = _passBlock.capacity;
                phaseBlock.count = _passBlock.count;
                for (var _iterator27 = _createForOfIteratorHelperLoose(_passBlock.descriptors), _step27; !(_step27 = _iterator27()).done;) {
                  var _step27$value = _step27.value,
                    _name2 = _step27$value[0],
                    _d2 = _step27$value[1];
                  phaseBlock.descriptors.set(_name2, _d2);
                }
                for (var _iterator28 = _createForOfIteratorHelperLoose(_passBlock.uniformBlocks), _step28; !(_step28 = _iterator28()).done;) {
                  var _step28$value = _step28.value,
                    _name3 = _step28$value[0],
                    _b = _step28$value[1];
                  phaseBlock.uniformBlocks.set(_name3, _b);
                }
              }
            }
          }
          // console.debug(this.print());
          return 0;
        };
        _proto9.print = function print() {
          var print = new LayoutGraphPrintVisitor();
          var colorMap = new VectorGraphColorMap(this.lg.numVertices());
          depthFirstSearch(this.lg, print, colorMap);
          return print.oss;
        };
        return LayoutGraphInfo;
      }());
      LayoutGraphBuilder2 = /*#__PURE__*/function () {
        function LayoutGraphBuilder2(lg) {
          this.lg = void 0;
          this.lg = lg;
        }
        var _proto10 = LayoutGraphBuilder2.prototype;
        _proto10.clear = function clear() {
          this.lg.clear();
        };
        _proto10.addRenderStage = function addRenderStage(name, parentID) {
          return this.lg.addVertex(LayoutGraphDataValue.RenderStage, new RenderStageData(), name, UpdateFrequency.PER_PASS, new PipelineLayoutData(), parentID);
        };
        _proto10.addRenderPhase = function addRenderPhase(name, parentID) {
          return this.lg.addVertex(LayoutGraphDataValue.RenderPhase, new RenderPhaseData(), name, UpdateFrequency.PER_PHASE, new PipelineLayoutData(), parentID);
        };
        _proto10.addShader = function addShader(name, parentPhaseID) {
          var lg = this.lg;
          var phaseData = lg.getRenderPhase(parentPhaseID);
          // 填充shaderData数据
          var shaderData = new ShaderProgramData();
          var id = phaseData.shaderPrograms.length;
          phaseData.shaderPrograms.push(shaderData);
          phaseData.shaderIndex.set(name, id);
          // 注册shader所在的phase的ID
          lg.shaderLayoutIndex.set(name, parentPhaseID);
        };
        _proto10.getDescriptorSetData = function getDescriptorSetData(ppl, rate) {
          var data = ppl.descriptorSets.get(rate);
          if (data === undefined) {
            var newData = new DescriptorSetData();
            ppl.descriptorSets.set(rate, newData);
            return newData;
          }
          return data;
        };
        _proto10.addDescriptorBlock = function addDescriptorBlock(nodeID, index, block) {
          if (block.capacity <= 0) {
            error('empty block');
            return;
          }
          if (block.descriptorNames.length !== block.descriptors.length) {
            error('error descriptor');
            return;
          }
          if (block.uniformBlockNames.length !== block.uniformBlocks.length) {
            error('error uniform');
            return;
          }
          if (!(index.updateFrequency >= UpdateFrequency.PER_INSTANCE && index.updateFrequency <= UpdateFrequency.PER_PASS)) {
            error('invalid update frequency');
            return;
          }
          var lg = this.lg;
          var ppl = lg.getLayout(nodeID);
          var setData = this.getDescriptorSetData(ppl, index.updateFrequency);
          var layout = setData.descriptorSetLayoutData;
          var dstBlock = new DescriptorBlockData(index.descriptorType, index.visibility, block.capacity);
          dstBlock.offset = layout.capacity;
          layout.descriptorBlocks.push(dstBlock);
          for (var j = 0; j < block.descriptors.length; ++j) {
            var name = block.descriptorNames[j];
            var d = block.descriptors[j];
            var nameID = getOrCreateDescriptorID(lg, name);
            var data = new DescriptorData(nameID, d.type, d.count);
            dstBlock.descriptors.push(data);
          }
          layout.capacity += block.capacity;
          if (index.descriptorType === DescriptorTypeOrder.UNIFORM_BUFFER || index.descriptorType === DescriptorTypeOrder.DYNAMIC_UNIFORM_BUFFER) {
            layout.uniformBlockCapacity += block.capacity;
          } else if (index.descriptorType === DescriptorTypeOrder.SAMPLER_TEXTURE) {
            layout.samplerTextureCapacity += block.capacity;
          }
        };
        _proto10.addUniformBlock = function addUniformBlock(nodeID, index, name, uniformBlock) {
          var g = this.lg;
          var ppl = g.getLayout(nodeID);
          var setData = this.getDescriptorSetData(ppl, index.updateFrequency);
          var layout = setData.descriptorSetLayoutData;
          var nameID = getOrCreateDescriptorID(g, name);
          layout.uniformBlocks.set(nameID, uniformBlock);
          // register constant names
          for (var _iterator31 = _createForOfIteratorHelperLoose(uniformBlock.members), _step31; !(_step31 = _iterator31()).done;) {
            var member = _step31.value;
            getOrCreateConstantID(g, member.name);
          }
        };
        _proto10.reserveDescriptorBlock = function reserveDescriptorBlock(nodeID, index, block) {
          if (block.capacity <= 0) {
            error('empty block');
            return;
          }
          var g = this.lg;
          var ppl = g.getLayout(nodeID);
          var setData = this.getDescriptorSetData(ppl, index.updateFrequency);
          var layout = setData.descriptorSetLayoutData;
          var dstBlock = new DescriptorBlockData(index.descriptorType, index.visibility, block.capacity);
          dstBlock.offset = layout.capacity;
          layout.descriptorBlocks.push(dstBlock);
          layout.capacity += block.capacity;
          if (index.descriptorType === DescriptorTypeOrder.UNIFORM_BUFFER || index.descriptorType === DescriptorTypeOrder.DYNAMIC_UNIFORM_BUFFER) {
            layout.uniformBlockCapacity += block.capacity;
          } else if (index.descriptorType === DescriptorTypeOrder.SAMPLER_TEXTURE) {
            layout.samplerTextureCapacity += block.capacity;
          }
        };
        _proto10.compile = function compile() {
          // console.debug(this.print());
          return 0;
        };
        _proto10.print = function print() {
          var g = this.lg;
          var visitor = new PrintVisitor();
          var colorMap = new VectorGraphColorMap(g.numVertices());
          depthFirstSearch(g, visitor, colorMap);
          return visitor.oss;
        };
        return LayoutGraphBuilder2;
      }();
    }
  };
});