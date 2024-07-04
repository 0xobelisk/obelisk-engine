System.register("q-bundled:///fs/cocos/rendering/custom/debug.js", ["../../core/index.js", "./graph.js", "./render-graph.js", "./types.js"], function (_export, _context) {
  "use strict";

  var assert, DefaultVisitor, getRenderGraphValueName, getQueueHintName, PrePrintVisitor, PostPrintVisitor, RenderGraphPrintVisitor, enableDebug, oss, space;
  _export("RenderGraphPrintVisitor", void 0);
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
      /*
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
      */
      /* eslint-disable max-len */
      _export("enableDebug", enableDebug = true);
      oss = '';
      space = '';
      PrePrintVisitor = class PrePrintVisitor {
        constructor(g) {
          this.g = void 0;
          this.g = g;
        }
        clear(value) {
          // do nothing
        }
        viewport(value) {
          // do nothing
        }
        rasterPass(value) {
          oss += `${space}width = ${value.width}\n`;
          oss += `${space}height = ${value.height}\n`;
          for (const rasterView of value.rasterViews) {
            oss += `${space}"${rasterView[0]}": RasterView\n`;
          }
          for (const computeView of value.computeViews) {
            oss += `${space}"${computeView[0]}": ComputeView[]\n`;
          }
        }
        rasterSubpass(value) {}
        computeSubpass(value) {}
        compute(value) {
          for (const computeView of value.computeViews) {
            oss += `${space}"${computeView[0]}": ComputeView[]\n`;
          }
        }
        copy(value) {
          if (value.copyPairs.length === 1) {
            const pair = value.copyPairs[0];
            oss += `${space}source = "${pair.source}"\n`;
            oss += `${space}target = "${pair.target}"\n`;
          } else {
            let i = 0;
            oss += `${space}sources = [`;
            for (const pair of value.copyPairs) {
              if (i++) {
                oss += ', ';
              }
              oss += `"${pair.source}"`;
            }
            oss += ']\n';
            oss += `${space}targets = [`;
            for (const pair of value.copyPairs) {
              if (i++) {
                oss += ', ';
              }
              oss += `"${pair.target}"`;
            }
            oss += ']\n';
          }
        }
        move(value) {
          if (value.movePairs.length === 1) {
            const pair = value.movePairs[0];
            oss += `${space}source = "${pair.source}"\n`;
            oss += `${space}target = "${pair.target}"\n`;
          } else {
            let i = 0;
            oss += `${space}sources = [`;
            for (const pair of value.movePairs) {
              if (i++) {
                oss += ', ';
              }
              oss += `"${pair.source}"`;
            }
            oss += ']\n';
            oss += `${space}targets = [`;
            for (const pair of value.movePairs) {
              if (i++) {
                oss += ', ';
              }
              oss += `"${pair.target}"`;
            }
            oss += ']\n';
          }
        }
        raytrace(value) {
          for (const computeView of value.computeViews) {
            oss += `${space}"${computeView[0]}": ComputeView[]\n`;
          }
        }
        queue(value) {
          oss += `${space}hint = ${getQueueHintName(value.hint)}\n`;
        }
        scene(value) {
          oss += `${space}scenes = [`;
          let i = 0;
          for (const scene of value.scenes) {
            if (i++) {
              oss += ', ';
            }
            oss += `"${scene}"`;
          }
          oss += ']\n';
        }
        blit(value) {}
        dispatch(value) {
          var _value$material;
          oss += `${space}material = "${(_value$material = value.material) === null || _value$material === void 0 ? void 0 : _value$material.name}"\n`;
          oss += `${space}passID = "${value.passID}"\n`;
          oss += `${space}groupX = ${value.threadGroupCountX}\n`;
          oss += `${space}groupY = ${value.threadGroupCountY}\n`;
          oss += `${space}groupZ = ${value.threadGroupCountZ}\n`;
        }
      };
      PostPrintVisitor = class PostPrintVisitor {
        constructor(g) {
          this.g = void 0;
          this.g = g;
        }
        clear(value) {
          // do nothing
        }
        viewport(value) {
          // do nothing
        }
        rasterPass(value) {
          // post raster pass
        }
        rasterSubpass(value) {}
        computeSubpass(value) {}
        compute(value) {}
        copy(value) {}
        move(value) {}
        raytrace(value) {}
        queue(value) {
          // collect scene results
        }
        scene(value) {
          // scene command list finished
        }
        blit(value) {}
        dispatch(value) {}
      };
      _export("RenderGraphPrintVisitor", RenderGraphPrintVisitor = class RenderGraphPrintVisitor extends DefaultVisitor {
        constructor(g) {
          super();
          this.preVertexVisitor = void 0;
          this.postVertexVisitor = void 0;
          this.preVertexVisitor = new PrePrintVisitor(g);
          this.postVertexVisitor = new PostPrintVisitor(g);
        }
        initializeVertex(v, gv) {
          // initialization
        }
        startVertex(v, gv) {
          const g = gv.g;
          // passes begin
          // assert(g.holds(RenderGraphValue.RasterPass, v)
          //     || g.holds(RenderGraphValue.Compute, v)
          //     || g.holds(RenderGraphValue.Copy, v)
          //     || g.holds(RenderGraphValue.Move, v)
          //     || g.holds(RenderGraphValue.Raytrace, v));
        }

        discoverVertex(v, gv) {
          const g = gv.g;
          oss += `${space}"${g.getName(v)}": ${getRenderGraphValueName(g.id(v))} {\n`;
          space += '    ';
          g.visitVertex(this.preVertexVisitor, v);
        }
        backEdge(e, gv) {
          assert(false);
        }
        forwardOrCrossEdge(e, gv) {
          assert(false);
        }
        finishEdge(e, gv) {
          const g = gv.g;
        }
        finishVertex(v, gv) {
          const g = gv.g;
          g.visitVertex(this.postVertexVisitor, v);
          space = space.substring(0, space.length - 4);
          oss += `${space}}\n`;
        }
        print() {
          return oss;
        }
      });
    }
  };
});