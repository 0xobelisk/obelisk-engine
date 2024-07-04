System.register("q-bundled:///fs/cocos/2d/assembler/sprite/mesh.js", [], function (_export, _context) {
  "use strict";

  var mesh;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [],
    execute: function () {
      /*
       Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.
      
       https://www.cocos.com/
      
       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.
      
       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.
      
       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      mesh = {
        useModel: false,
        createData: function createData(sprite) {
          return sprite.requestRenderData();
        },
        updateRenderData: function updateRenderData(sprite) {
          var frame = sprite.spriteFrame;

          // TODO: Material API design and export from editor could affect the material activation process
          // need to update the logic here
          // if (frame) {
          //     if (!frame._original && dynamicAtlasManager) {
          //         dynamicAtlasManager.insertSpriteFrame(frame);
          //     }
          //     if (sprite._material._texture !== frame._texture) {
          //         sprite._activateMaterial();
          //     }
          // }

          var renderData = sprite._renderData;
          if (renderData && frame) {
            var vertices = frame.vertices;
            if (vertices) {
              if (renderData.vertexCount !== vertices.x.length) {
                renderData.vertexCount = vertices.x.length;

                // 1 for world vertices, 2 for local vertices
                renderData.dataLength = renderData.vertexCount * 2;
                renderData.uvDirty = renderData.vertDirty = true;
              }
              renderData.indiceCount = vertices.triangles.length;
              if (renderData.uvDirty) {
                this.updateUVs(sprite);
              }
              var vertDirty = renderData.vertDirty;
              if (vertDirty) {
                this.updateVerts(sprite);
                this.updateWorldVerts(sprite);
              }
            }
          }
        },
        updateUVs: function updateUVs(sprite) {
          var vertices = sprite.spriteFrame.vertices,
            u = vertices.nu,
            v = vertices.nv;
          var renderData = sprite._renderData;
          var data = renderData._data;
          for (var i = 0, l = u.length; i < l; i++) {
            var vertice = data[i];
            vertice.u = u[i];
            vertice.v = v[i];
          }
          renderData.uvDirty = false;
        },
        updateVerts: function updateVerts(sprite) {
          var node = sprite.node,
            contentWidth = Math.abs(node.width),
            contentHeight = Math.abs(node.height),
            appx = node.anchorX * contentWidth,
            appy = node.anchorY * contentHeight;
          var frame = sprite.spriteFrame,
            vertices = frame.vertices,
            x = vertices.x,
            y = vertices.y,
            originalWidth = frame._originalSize.width,
            originalHeight = frame._originalSize.height,
            rectWidth = frame._rect.width,
            rectHeight = frame._rect.height,
            offsetX = frame._offset.x,
            offsetY = frame._offset.y,
            trimX = offsetX + (originalWidth - rectWidth) / 2,
            trimY = offsetY + (originalHeight - rectHeight) / 2;
          var scaleX = contentWidth / (sprite.trim ? rectWidth : originalWidth),
            scaleY = contentHeight / (sprite.trim ? rectHeight : originalHeight);
          var renderData = sprite._renderData;
          var data = renderData._data;
          if (!sprite.trim) {
            for (var i = 0, l = x.length; i < l; i++) {
              var vertice = data[i + l];
              vertice.x = x[i] * scaleX - appx;
              vertice.y = (originalHeight - y[i]) * scaleY - appy;
            }
          } else {
            for (var _i = 0, _l = x.length; _i < _l; _i++) {
              var _vertice = data[_i + _l];
              _vertice.x = (x[_i] - trimX) * scaleX - appx;
              _vertice.y = (originalHeight - y[_i] - trimY) * scaleY - appy;
            }
          }
          renderData.vertDirty = false;
        },
        updateWorldVerts: function updateWorldVerts(sprite) {
          var node = sprite.node,
            renderData = sprite._renderData,
            data = renderData._data;
          node._updateWorldMatrix();
          var matrix = node._worldMatrix;
          for (var i = 0, l = renderData.vertexCount; i < l; i++) {
            var local = data[i + l];
            var world = data[i];
            vec3.set(vec3_temp, local.x, local.y, 0);
            vec3.transformMat4(world, vec3_temp, matrix);
          }
        },
        fillBuffers: function fillBuffers(sprite, /*renderer*/buffer) {
          var vertices = sprite.spriteFrame.vertices;
          if (!vertices) {
            return;
          }

          // update world verts
          // if (renderer.worldMatDirty) {
          this.updateWorldVerts(sprite);
          // }

          // buffer
          var /*buffer = renderer._meshBuffer3D,*/
            indiceOffset = buffer.indiceOffset,
            vertexId = buffer.vertexOffset;
          var node = sprite.node;
          fillVerticesWithoutCalc3D(node, buffer, sprite._renderData, sprite._color._val);

          // buffer data may be realloc, need get reference after request.
          var ibuf = buffer._iData;
          var triangles = vertices.triangles;
          for (var i = 0, l = triangles.length; i < l; i++) {
            ibuf[indiceOffset++] = vertexId + triangles[i];
          }
        }
      };
      _export("default", mesh);
    }
  };
});