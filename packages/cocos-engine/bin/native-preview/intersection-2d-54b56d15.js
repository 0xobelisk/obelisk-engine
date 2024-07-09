System.register(['./index-ce98320e.js'], (function (exports) {
    'use strict';
    var Vec2;
    return {
        setters: [function (module) {
            Vec2 = module.V;
        }],
        execute: (function () {

            function lineLine(a1, a2, b1, b2) {
              const ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
              const ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
              const u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
              if (u_b !== 0) {
                const ua = ua_t / u_b;
                const ub = ub_t / u_b;
                if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
                  return true;
                }
              }
              return false;
            }
            const tempR1 = new Vec2();
            const tempR2 = new Vec2();
            const tempR3 = new Vec2();
            const tempR4 = new Vec2();
            function lineRect(a1, a2, b) {
              const r0 = tempR1.set(b.x, b.y);
              const r1 = tempR2.set(b.x, b.yMax);
              const r2 = tempR3.set(b.xMax, b.yMax);
              const r3 = tempR4.set(b.xMax, b.y);
              if (lineLine(a1, a2, r0, r1)) return true;
              if (lineLine(a1, a2, r1, r2)) return true;
              if (lineLine(a1, a2, r2, r3)) return true;
              if (lineLine(a1, a2, r3, r0)) return true;
              return false;
            }
            function linePolygon(a1, a2, b) {
              const length = b.length;
              for (let i = 0; i < length; ++i) {
                const b1 = b[i];
                const b2 = b[(i + 1) % length];
                if (lineLine(a1, a2, b1, b2)) return true;
              }
              return false;
            }
            function rectRect(a, b) {
              const a_min_x = a.x;
              const a_min_y = a.y;
              const a_max_x = a.x + a.width;
              const a_max_y = a.y + a.height;
              const b_min_x = b.x;
              const b_min_y = b.y;
              const b_max_x = b.x + b.width;
              const b_max_y = b.y + b.height;
              return a_min_x <= b_max_x && a_max_x >= b_min_x && a_min_y <= b_max_y && a_max_y >= b_min_y;
            }
            function rectPolygon(a, b) {
              const r0 = tempR1.set(a.x, a.y);
              const r1 = tempR2.set(a.x, a.yMax);
              const r2 = tempR3.set(a.xMax, a.yMax);
              const r3 = tempR4.set(a.xMax, a.y);
              if (linePolygon(r0, r1, b)) return true;
              if (linePolygon(r1, r2, b)) return true;
              if (linePolygon(r2, r3, b)) return true;
              if (linePolygon(r3, r0, b)) return true;
              for (let i = 0, l = b.length; i < l; ++i) {
                if (a.contains(b[i])) return true;
              }
              if (pointInPolygon(r0, b)) return true;
              if (pointInPolygon(r1, b)) return true;
              if (pointInPolygon(r2, b)) return true;
              if (pointInPolygon(r3, b)) return true;
              return false;
            }
            function polygonPolygon(a, b) {
              let i;
              let l;
              for (i = 0, l = a.length; i < l; ++i) {
                const a1 = a[i];
                const a2 = a[(i + 1) % l];
                if (linePolygon(a1, a2, b)) return true;
              }
              for (i = 0, l = b.length; i < l; ++i) {
                if (pointInPolygon(b[i], a)) return true;
              }
              for (i = 0, l = a.length; i < l; ++i) {
                if (pointInPolygon(a[i], b)) return true;
              }
              return false;
            }
            function circleCircle(c1p, c1r, c2p, c2r) {
              const distance = Vec2.distance(c1p, c2p);
              return distance < c1r + c2r;
            }
            function polygonCircle(polygon, cp, cr) {
              const position = cp;
              if (pointInPolygon(position, polygon)) {
                return true;
              }
              for (let i = 0, l = polygon.length; i < l; i++) {
                const start = i === 0 ? polygon[polygon.length - 1] : polygon[i - 1];
                const end = polygon[i];
                if (pointLineDistance(position, start, end, true) < cr) {
                  return true;
                }
              }
              return false;
            }
            function rectCircle(rect, cp, cr) {
              const cx = cp.x;
              const cy = cp.y;
              const rx = rect.x;
              const ry = rect.y;
              const rw = rect.width;
              const rh = rect.height;
              let testX = cx;
              let testY = cy;
              if (cx < rx) testX = rx;else if (cx > rx + rw) testX = rx + rw;
              if (cy < ry) testY = ry;else if (cy > ry + rh) testY = ry + rh;
              const distX = cx - testX;
              const distY = cy - testY;
              const distance = Math.sqrt(distX * distX + distY * distY);
              if (distance <= cr) {
                return true;
              }
              return false;
            }
            function pointInPolygon(point, polygon) {
              let inside = false;
              const x = point.x;
              const y = point.y;
              const length = polygon.length;
              for (let i = 0, j = length - 1; i < length; j = i++) {
                const xi = polygon[i].x;
                const yi = polygon[i].y;
                const xj = polygon[j].x;
                const yj = polygon[j].y;
                const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
                if (intersect) inside = !inside;
              }
              return inside;
            }
            function pointLineDistance(point, start, end, isSegment) {
              let dx = end.x - start.x;
              let dy = end.y - start.y;
              const d = dx * dx + dy * dy;
              const t = ((point.x - start.x) * dx + (point.y - start.y) * dy) / d;
              let p;
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
            class Intersection2D {} exports('I', Intersection2D);
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

        })
    };
}));
