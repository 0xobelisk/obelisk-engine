System.register("q-bundled:///fs/cocos/rendering/custom/web-layout-exporter.js", ["../../gfx/index.js", "./layout-graph.js", "./types.js"], function (_export, _context) {
  "use strict";

  var ShaderStageFlagBit, EffectData, ShaderBindingData, ShaderLayoutData, TechniqueData, DescriptorTypeOrder, UpdateFrequency, isArr, deepClone, WebLayoutExporter;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable @typescript-eslint/restrict-plus-operands */ /****************************************************************************
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
  return {
    setters: [function (_gfxIndexJs) {
      ShaderStageFlagBit = _gfxIndexJs.ShaderStageFlagBit;
    }, function (_layoutGraphJs) {
      EffectData = _layoutGraphJs.EffectData;
      ShaderBindingData = _layoutGraphJs.ShaderBindingData;
      ShaderLayoutData = _layoutGraphJs.ShaderLayoutData;
      TechniqueData = _layoutGraphJs.TechniqueData;
    }, function (_typesJs) {
      DescriptorTypeOrder = _typesJs.DescriptorTypeOrder;
      UpdateFrequency = _typesJs.UpdateFrequency;
    }],
    execute: function () {
      isArr = function isArr(origin) {
        var str = '[object Array]';
        return Object.prototype.toString.call(origin) === str;
      };
      deepClone = function deepClone(origin, target) {
        var tar = target || {};
        for (var key in origin) {
          if (Object.prototype.hasOwnProperty.call(origin, key)) {
            if (typeof origin[key] === 'object' && origin[key] !== null) {
              tar[key] = isArr(origin[key]) ? [] : {};
              deepClone(origin[key], tar[key]);
            } else {
              tar[key] = origin[key];
            }
          }
        }
        return tar;
      };
      _export("WebLayoutExporter", WebLayoutExporter = /*#__PURE__*/function () {
        function WebLayoutExporter(graph) {
          this.layoutGraph = void 0;
          this.layoutGraph = graph;
        }
        var _proto = WebLayoutExporter.prototype;
        _proto.addBinding = function addBinding(storedMap, freq, flag, type) {
          var key = freq.toString() + "|" + flag.toString() + "|" + type.toString();
          var stored = storedMap.get(key);
          if (stored === undefined) {
            storedMap.set(key, 0);
            stored = storedMap.get(key);
          } else {
            stored += 1;
            storedMap.set(key, stored);
          }
          return stored;
        };
        _proto.setBinding = function setBinding(bindingData, name, binding) {
          var shaderKey = this.layoutGraph.data.attributeIndex.get(name);
          if (shaderKey && binding !== undefined) {
            bindingData.descriptorBindings.set(shaderKey, binding);
          }
        };
        _proto.exportEffect = function exportEffect(effect) {
          var parent = '';
          if (effect.name.indexOf('bloom') !== -1 || effect.name.indexOf('post-process') !== -1 || effect.name.indexOf('smaa') !== -1 || effect.name.indexOf('toonmap') !== -1) {
            parent = 'post';
          } else if (effect.name.indexOf('deferred') !== -1) {
            parent = 'deferred';
          } else {
            parent = 'default';
          }
          var effectData = this.layoutGraph.data.effects.get(effect.name);
          if (effectData === undefined) {
            effectData = new EffectData();
            this.layoutGraph.data.effects.set(effect.name, effectData);
          }
          for (var i = 0; i < effect.techniques.length; ++i) {
            var tech = effect.techniques[i];
            var techName = tech.name ? tech.name : i.toString();
            var techData = effectData.techniques.get(techName);
            if (techData === undefined) {
              techData = new TechniqueData();
              effectData.techniques.set(techName, techData);
            }
            techData.passes.splice(0, techData.passes.length);
            for (var j = 0; j < tech.passes.length; ++j) {
              var shaderData = new ShaderLayoutData();
              techData.passes.push(shaderData);
              var pass = tech.passes[j];
              var passPhase = pass.phase;
              var phaseName = '';
              if (passPhase) {
                phaseName = passPhase.toString();
              } else {
                phaseName = parent + "_";
              }
              var shaderName = pass.program;
              var passShader = void 0;
              for (var s = 0; s < effect.shaders.length; ++s) {
                var shader = effect.shaders[s];
                var name = shader.name;
                if (name === shaderName) {
                  passShader = {};
                  deepClone(shader, passShader);
                  break;
                }
              }
              if (passShader) {
                pass.shader = passShader;
                var _shader = pass.shader;
                if (_shader === undefined) {
                  continue;
                }
                var storedMap = new Map();
                var vid = this.layoutGraph.data.locate("/" + parent + "/" + phaseName);
                var layout = this.layoutGraph.data.getLayout(vid);
                var dss = layout.descriptorSets.get(UpdateFrequency.PER_BATCH);
                if (dss) {
                  var dsData = dss.descriptorSetLayoutData.descriptorBlocks;
                  var bindingData = new ShaderBindingData();
                  shaderData.layoutData.set(UpdateFrequency.PER_BATCH, dss.descriptorSetLayoutData);
                  shaderData.bindingData.set(UpdateFrequency.PER_BATCH, bindingData);
                  for (var t = 0; t < _shader.samplerTextures.length; ++t) {
                    var samplerTexInfo = _shader.samplerTextures[t];
                    var flag = samplerTexInfo.stageFlags;
                    var type = DescriptorTypeOrder.SAMPLER_TEXTURE;
                    for (var d = 0; d < dsData.length; ++d) {
                      var ds = dsData[d];
                      if (ds.visibility === flag && ds.type === type) {
                        var stored = this.addBinding(storedMap, UpdateFrequency.PER_BATCH, flag, type);
                        if (stored !== undefined) {
                          samplerTexInfo.binding = ds.offset + stored;
                        } else {
                          samplerTexInfo.binding = ds.offset;
                        }
                        this.setBinding(bindingData, samplerTexInfo.name, samplerTexInfo.binding);
                        break;
                      }
                    }
                  }
                  for (var _s = 0; _s < _shader.samplers.length; ++_s) {
                    var samplerInfo = _shader.samplers[_s];
                    var _flag = samplerInfo.stageFlags;
                    var _type = DescriptorTypeOrder.SAMPLER;
                    for (var _d = 0; _d < dsData.length; ++_d) {
                      var _ds = dsData[_d];
                      if (_ds.visibility === _flag && _ds.type === _type) {
                        var _stored = this.addBinding(storedMap, UpdateFrequency.PER_BATCH, _flag, _type);
                        if (_stored !== undefined) {
                          samplerInfo.binding = _ds.offset + _stored;
                        } else {
                          samplerInfo.binding = _ds.offset;
                        }
                        this.setBinding(bindingData, samplerInfo.name, samplerInfo.binding);
                        break;
                      }
                    }
                  }
                  for (var _t = 0; _t < _shader.textures.length; ++_t) {
                    var texInfo = _shader.textures[_t];
                    var _flag2 = texInfo.stageFlags;
                    var _type2 = DescriptorTypeOrder.TEXTURE;
                    for (var _d2 = 0; _d2 < dsData.length; ++_d2) {
                      var _ds2 = dsData[_d2];
                      if (_ds2.visibility === _flag2 && _ds2.type === _type2) {
                        var _stored2 = this.addBinding(storedMap, UpdateFrequency.PER_BATCH, _flag2, _type2);
                        if (_stored2 !== undefined) {
                          texInfo.binding = _ds2.offset + _stored2;
                        } else {
                          texInfo.binding = _ds2.offset;
                        }
                        this.setBinding(bindingData, texInfo.name, texInfo.binding);
                        break;
                      }
                    }
                  }
                  for (var b = 0; b < _shader.buffers.length; ++b) {
                    var bufferInfo = _shader.buffers[b];
                    var _flag3 = bufferInfo.stageFlags;
                    var _type3 = DescriptorTypeOrder.STORAGE_BUFFER;
                    for (var _d3 = 0; _d3 < dsData.length; ++_d3) {
                      var _ds3 = dsData[_d3];
                      if (_ds3.visibility === _flag3 && _ds3.type === _type3) {
                        var _stored3 = this.addBinding(storedMap, UpdateFrequency.PER_BATCH, _flag3, _type3);
                        if (_stored3 !== undefined) {
                          bufferInfo.binding = _ds3.offset + _stored3;
                        } else {
                          bufferInfo.binding = _ds3.offset;
                        }
                        this.setBinding(bindingData, bufferInfo.name, bufferInfo.binding);
                        break;
                      }
                    }
                  }
                  for (var m = 0; m < _shader.images.length; +m) {
                    var imageInfo = _shader.images[m];
                    var _flag4 = imageInfo.stageFlags;
                    var _type4 = DescriptorTypeOrder.STORAGE_IMAGE;
                    for (var _d4 = 0; _d4 < dsData.length; ++_d4) {
                      var _ds4 = dsData[_d4];
                      if (_ds4.visibility === _flag4 && _ds4.type === _type4) {
                        var _stored4 = this.addBinding(storedMap, UpdateFrequency.PER_BATCH, _flag4, _type4);
                        if (_stored4 !== undefined) {
                          imageInfo.binding = _ds4.offset + _stored4;
                        } else {
                          imageInfo.binding = _ds4.offset;
                        }
                        this.setBinding(bindingData, imageInfo.name, imageInfo.binding);
                        break;
                      }
                    }
                  }
                  for (var si = 0; si < _shader.subpassInputs.length; ++si) {
                    var subpassInfo = _shader.subpassInputs[si];
                    var _flag5 = subpassInfo.stageFlags;
                    var _type5 = DescriptorTypeOrder.INPUT_ATTACHMENT;
                    for (var _d5 = 0; _d5 < dsData.length; ++_d5) {
                      var _ds5 = dsData[_d5];
                      if (_ds5.visibility === _flag5 && _ds5.type === _type5) {
                        var _stored5 = this.addBinding(storedMap, UpdateFrequency.PER_BATCH, _flag5, _type5);
                        if (_stored5 !== undefined) {
                          subpassInfo.binding = _ds5.offset + _stored5;
                        } else {
                          subpassInfo.binding = _ds5.offset;
                        }
                        this.setBinding(bindingData, subpassInfo.name, subpassInfo.binding);
                        break;
                      }
                    }
                  }

                  // builtin
                  for (var k = 0; k < _shader.builtins.locals.samplerTextures.length; ++k) {
                    var descriptor = _shader.builtins.locals.samplerTextures[k];
                    var _type6 = DescriptorTypeOrder.SAMPLER_TEXTURE;
                    for (var _d6 = 0; _d6 < dsData.length; ++_d6) {
                      var _ds6 = dsData[_d6];
                      var _flag6 = ShaderStageFlagBit.VERTEX;
                      if (descriptor.name === 'cc_jointTexture' || descriptor.name === 'cc_PositionDisplacements' || descriptor.name === 'cc_realtimeJoint' || descriptor.name === 'cc_NormalDisplacements' || descriptor.name === 'cc_TangentDisplacements') {
                        _flag6 = ShaderStageFlagBit.VERTEX;
                      } else {
                        _flag6 = ShaderStageFlagBit.FRAGMENT;
                      }
                      if (_ds6.visibility === _flag6 && _ds6.type === _type6) {
                        var _stored6 = this.addBinding(storedMap, UpdateFrequency.PER_BATCH, _flag6, _type6);
                        if (_stored6 !== undefined) {
                          descriptor.binding = _ds6.offset + _stored6;
                        } else {
                          descriptor.binding = _ds6.offset;
                        }
                        this.setBinding(bindingData, descriptor.name, descriptor.binding);
                      }
                    }
                  }
                  for (var _k = 0; _k < _shader.builtins.locals.images.length; ++_k) {
                    var _descriptor = _shader.builtins.locals.images[_k];
                    var _flag7 = ShaderStageFlagBit.COMPUTE;
                    var _type7 = DescriptorTypeOrder.SAMPLER_TEXTURE;
                    for (var _d7 = 0; _d7 < dsData.length; ++_d7) {
                      var _ds7 = dsData[_d7];
                      if (_ds7.visibility === _flag7 && _ds7.type === _type7) {
                        var _stored7 = this.addBinding(storedMap, UpdateFrequency.PER_BATCH, _flag7, _type7);
                        if (_stored7 !== undefined) {
                          _descriptor.binding = _ds7.offset + _stored7;
                        } else {
                          _descriptor.binding = _ds7.offset;
                        }
                        this.setBinding(bindingData, _descriptor.name, _descriptor.binding);
                      }
                    }
                  }
                }
                var pid = this.layoutGraph.data.locate("/" + parent);
                var pLayout = this.layoutGraph.data.getLayout(pid);
                var pss = pLayout.descriptorSets.get(UpdateFrequency.PER_PASS);
                if (pss) {
                  var _dsData = pss.descriptorSetLayoutData.descriptorBlocks;
                  var _bindingData = new ShaderBindingData();
                  shaderData.layoutData.set(UpdateFrequency.PER_PASS, pss.descriptorSetLayoutData);
                  shaderData.bindingData.set(UpdateFrequency.PER_PASS, _bindingData);
                  for (var g = 0; g < _shader.builtins.globals.samplerTextures.length; ++g) {
                    var _descriptor2 = _shader.builtins.globals.samplerTextures[g];
                    var _flag8 = ShaderStageFlagBit.FRAGMENT;
                    var _type8 = DescriptorTypeOrder.SAMPLER_TEXTURE;
                    for (var _d8 = 0; _d8 < _dsData.length; ++_d8) {
                      var _ds8 = _dsData[_d8];
                      if (_ds8.visibility === _flag8 && _ds8.type === _type8) {
                        var _stored8 = this.addBinding(storedMap, UpdateFrequency.PER_PASS, _flag8, _type8);
                        if (_stored8 !== undefined) {
                          _descriptor2.binding = _ds8.offset + _stored8;
                        } else {
                          _descriptor2.binding = _ds8.offset;
                        }
                        this.setBinding(_bindingData, _descriptor2.name, _descriptor2.binding);
                      }
                    }
                  }
                }
              }
            }
          }
        };
        return WebLayoutExporter;
      }());
    }
  };
});