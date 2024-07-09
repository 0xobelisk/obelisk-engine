System.register("q-bundled:///fs/cocos/physics-2d/builtin/intersection-2d.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var Vec2, tempR1, tempR2, tempR3, tempR4, Intersection2D;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  /**
   * @en Test line and line
   * @zh 测试线段与线段是否相交
   */
  function lineLine(a1, a2, b1, b2) {
    // jshint camelcase:false

    var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
    var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
    var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
    if (u_b !== 0) {
      var ua = ua_t / u_b;
      var ub = ub_t / u_b;
      if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
        return true;
      }
    }
    return false;
  }
  /**
   * @en Test line and rect
   * @zh 测试线段与矩形是否相交
   */
  function lineRect(a1, a2, b) {
    var r0 = tempR1.set(b.x, b.y);
    var r1 = tempR2.set(b.x, b.yMax);
    var r2 = tempR3.set(b.xMax, b.yMax);
    var r3 = tempR4.set(b.xMax, b.y);
    if (lineLine(a1, a2, r0, r1)) return true;
    if (lineLine(a1, a2, r1, r2)) return true;
    if (lineLine(a1, a2, r2, r3)) return true;
    if (lineLine(a1, a2, r3, r0)) return true;
    return false;
  }

  /**
   * @en Test line and polygon
   * @zh 测试线段与多边形是否相交
   */
  function linePolygon(a1, a2, b) {
    var length = b.length;
    for (var i = 0; i < length; ++i) {
      var b1 = b[i];
      var b2 = b[(i + 1) % length];
      if (lineLine(a1, a2, b1, b2)) return true;
    }
    return false;
  }

  /**
   * @en Test rect and rect
   * @zh 测试矩形与矩形是否相交
   */
  function rectRect(a, b) {
    // jshint camelcase:false

    var a_min_x = a.x;
    var a_min_y = a.y;
    var a_max_x = a.x + a.width;
    var a_max_y = a.y + a.height;
    var b_min_x = b.x;
    var b_min_y = b.y;
    var b_max_x = b.x + b.width;
    var b_max_y = b.y + b.height;
    return a_min_x <= b_max_x && a_max_x >= b_min_x && a_min_y <= b_max_y && a_max_y >= b_min_y;
  }

  /**
   * @en Test rect and polygon
   * @zh 测试矩形与多边形是否相交
   */
  function rectPolygon(a, b) {
    var r0 = tempR1.set(a.x, a.y);
    var r1 = tempR2.set(a.x, a.yMax);
    var r2 = tempR3.set(a.xMax, a.yMax);
    var r3 = tempR4.set(a.xMax, a.y);

    // intersection check
    if (linePolygon(r0, r1, b)) return true;
    if (linePolygon(r1, r2, b)) return true;
    if (linePolygon(r2, r3, b)) return true;
    if (linePolygon(r3, r0, b)) return true;

    // check if a contains b
    for (var i = 0, l = b.length; i < l; ++i) {
      if (a.contains(b[i])) return true;
    }

    // check if b contains a
    if (pointInPolygon(r0, b)) return true;
    if (pointInPolygon(r1, b)) return true;
    if (pointInPolygon(r2, b)) return true;
    if (pointInPolygon(r3, b)) return true;
    return false;
  }

  /**
   * @en Test polygon and polygon
   * @zh 测试多边形与多边形是否相交
   */
  function polygonPolygon(a, b) {
    var i;
    var l;

    // check if a intersects b
    for (i = 0, l = a.length; i < l; ++i) {
      var a1 = a[i];
      var a2 = a[(i + 1) % l];
      if (linePolygon(a1, a2, b)) return true;
    }

    // check if a contains b
    for (i = 0, l = b.length; i < l; ++i) {
      if (pointInPolygon(b[i], a)) return true;
    }

    // check if b contains a
    for (i = 0, l = a.length; i < l; ++i) {
      if (pointInPolygon(a[i], b)) return true;
    }
    return false;
  }

  /**
   * @en Test circle and circle
   * @zh 测试圆形与圆形是否相交
   */
  function circleCircle(c1p, c1r, c2p, c2r) {
    var distance = Vec2.distance(c1p, c2p);
    return distance < c1r + c2r;
  }

  /**
   * @en Test polygon and circle
   * @zh 测试多边形与圆形是否相交
   */
  function polygonCircle(polygon, cp, cr) {
    var position = cp;
    if (pointInPolygon(position, polygon)) {
      return true;
    }
    for (var i = 0, l = polygon.length; i < l; i++) {
      var start = i === 0 ? polygon[polygon.length - 1] : polygon[i - 1];
      var end = polygon[i];
      if (pointLineDistance(position, start, end, true) < cr) {
        return true;
      }
    }
    return false;
  }

  /**
   * @en Test rect and circle
   * @zh 测试矩形与圆形是否相交
   */
  function rectCircle(rect, cp, cr) {
    var cx = cp.x;
    var cy = cp.y;
    var rx = rect.x;
    var ry = rect.y;
    var rw = rect.width;
    var rh = rect.height;

    // temporary variables to set edges for testing
    var testX = cx;
    var testY = cy;

    // which edge is closest?
    if (cx < rx) testX = rx; // test left edge
    else if (cx > rx + rw) testX = rx + rw; // right edge
    if (cy < ry) testY = ry; // top edge
    else if (cy > ry + rh) testY = ry + rh; // bottom edge

    // get distance from closest edges
    var distX = cx - testX;
    var distY = cy - testY;
    var distance = Math.sqrt(distX * distX + distY * distY);

    // if the distance is less than the radius, collision!
    if (distance <= cr) {
      return true;
    }
    return false;
  }

  /**
   * @en Test whether the point is in the polygon
   * @zh 测试一个点是否在一个多边形中
   */
  function pointInPolygon(point, polygon) {
    var inside = false;
    var x = point.x;
    var y = point.y;

    // use some raycasting to test hits
    // https://github.com/substack/point-in-polygon/blob/master/index.js
    var length = polygon.length;
    for (var i = 0, j = length - 1; i < length; j = i++) {
      var xi = polygon[i].x;
      var yi = polygon[i].y;
      var xj = polygon[j].x;
      var yj = polygon[j].y;
      var intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  }

  /**
   * @en Calculate the distance of point to line.
   * @zh 计算点到直线的距离。如果这是一条线段并且垂足不在线段内，则会计算点到线段端点的距离。
   */
  function pointLineDistance(point, start, end, isSegment) {
    var dx = end.x - start.x;
    var dy = end.y - start.y;
    var d = dx * dx + dy * dy;
    var t = ((point.x - start.x) * dx + (point.y - start.y) * dy) / d;
    var p;
    if (!isSegment) {
      p = tempR1.set(start.x + t * dx, start.y + t * dy);
    } else if (d) {
      if (t < 0) p = start;else if (t > 1) p = end;else p = tempR1.set(start.x + t * dx, start.y + t * dy);
    } else {
      p = start;
    }
    dx = point.x - p.x;
    dy = point.y - p.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * @en Intersection2D helper class
   * @zh 辅助类，用于测试形状与形状是否相交
   * @class Intersection2D
   */
  return {
    setters: [function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
    }],
    execute: function () {
      tempR1 = new Vec2();
      tempR2 = new Vec2();
      tempR3 = new Vec2();
      tempR4 = new Vec2();
      _export("default", Intersection2D = function Intersection2D() {});
      Intersection2D.lineLine = lineLine;
      Intersection2D.lineRect = lineRect;
      Intersection2D.linePolygon = linePolygon;
      Intersection2D.rectRect = rectRect;
      Intersection2D.rectPolygon = rectPolygon;
      Intersection2D.rectCircle = rectCircle;
      Intersection2D.polygonPolygon = polygonPolygon;
      Intersection2D.circleCircle = circleCircle;
      Intersection2D.polygonCircle = polygonCircle;
      Intersection2D.pointInPolygon = pointInPolygon;
      Intersection2D.pointLineDistance = pointLineDistance;
    }
  };
});