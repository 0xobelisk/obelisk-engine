System.register("q-bundled:///fs/cocos/tiledmap/tiled-utils.js", ["../core/index.js"], function (_export, _context) {
  "use strict";

  var Rect;
  /*
   Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
  
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

  function fillTextureGrids(tileset, texGrids, spFrame) {
    var spf = spFrame || tileset.sourceImage;
    var tex = spf.texture;
    var collection = tileset.collection;
    if (!tileset.imageSize.width || !tileset.imageSize.height) {
      var sourceImage = tileset.sourceImage;
      tileset.imageSize.width = sourceImage.width;
      tileset.imageSize.height = sourceImage.height;
    }
    var imageWidth = tileset.imageSize.width;
    var imageHeight = tileset.imageSize.height;
    var tw = tileset._tileSize.width;
    var th = tileset._tileSize.height;
    var texWidth = spf.width;
    var texHeight = spf.height;
    var spacing = tileset.spacing;
    var margin = tileset.margin;
    var count = 1;
    if (!collection) {
      var cols = Math.floor((imageWidth - margin * 2 + spacing) / (tw + spacing));
      var rows = Math.floor((imageHeight - margin * 2 + spacing) / (th + spacing));
      count = Math.max(1, rows * cols);
    }
    var firstGid = tileset.firstGid;
    var grid = null;
    var override = !!texGrids.get(firstGid);

    // Tiledmap may not be partitioned into blocks, resulting in a count value of 0

    var maxGid = tileset.firstGid + count;
    var gid = firstGid;
    for (; gid < maxGid; ++gid) {
      // Avoid overlapping
      if (override && !texGrids.get(gid)) {
        override = false;
      }
      if (!override && texGrids.get(gid)) {
        break;
      }
      grid = {
        tileset: tileset,
        x: 0,
        y: 0,
        width: tw,
        height: th,
        t: 0,
        l: 0,
        r: 0,
        b: 0,
        cx: 0,
        cy: 0,
        offsetX: 0,
        offsetY: 0,
        rotated: false,
        gid: gid,
        spriteFrame: spf,
        texture: tex
      };
      tileset.rectForGID(gid, grid);
      if (!spFrame || count > 1 || tileset.imageOffset) {
        if (spFrame) {
          grid._name = spFrame.name;
          var lm = spFrame.unbiasUV[0];
          var bm = spFrame.rotated ? spFrame.unbiasUV[1] : spFrame.unbiasUV[5];
          grid.l = lm + (grid.x + 0.5) / texWidth;
          grid.t = bm + (grid.y + 0.5) / texHeight;
          grid.r = lm + (grid.x + grid.width - 0.5) / texWidth;
          grid.b = bm + (grid.y + grid.height - 0.5) / texHeight;
          grid._rect = new Rect(grid.x, grid.y, grid.width, grid.height);
        } else {
          grid.l = grid.x / texWidth;
          grid.t = grid.y / texHeight;
          grid.r = (grid.x + grid.width) / texWidth;
          grid.b = (grid.y + grid.height) / texHeight;
          grid._rect = new Rect(grid.x, grid.y, grid.width, grid.height);
        }
      } else if (spFrame.rotated) {
        grid._rotated = true;
        grid._name = spFrame.name;
        grid._rect = spFrame.getRect();
        grid.l = spFrame.unbiasUV[0];
        grid.t = spFrame.unbiasUV[1];
        grid.r = spFrame.unbiasUV[4];
        grid.b = spFrame.unbiasUV[3];
      } else {
        grid._name = spFrame.name;
        grid._rect = spFrame.getRect();
        grid.l = spFrame.unbiasUV[0];
        grid.t = spFrame.unbiasUV[5];
        grid.r = spFrame.unbiasUV[2];
        grid.b = spFrame.unbiasUV[1];
      }
      grid.cx = (grid.l + grid.r) / 2;
      grid.cy = (grid.t + grid.b) / 2;
      texGrids.set(gid, grid);
    }
  }
  _export("fillTextureGrids", fillTextureGrids);
  return {
    setters: [function (_coreIndexJs) {
      Rect = _coreIndexJs.Rect;
    }],
    execute: function () {}
  };
});