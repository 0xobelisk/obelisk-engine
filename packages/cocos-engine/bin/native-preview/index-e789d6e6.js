System.register(['./index-ce98320e.js', './find-7a03d1cc.js', './device-90bc7390.js', './sprite-5c924512.js', './deprecated-cd3500e0.js', './sprite-renderer-9a6a919d.js', './builtin-res-mgr.jsb-c9e8e53a.js', './touch-af62e326.js', './deprecated-80961f27.js', './renderer-3bf7a012.js', './director-dc238483.js', './rendering-sub-mesh.jsb-25043997.js', './node-event-18d96a1b.js', './scene-asset.jsb-0d4c6201.js', './cached-array-9b18d763.js'], (function (exports) {
    'use strict';
    var Mat4, clamp$1, Color, Vec3, Rect, logID, Vec2, legacyCC, log, warn, addon, mixin, approx, errorID, error, remove, removeAt, Pool, assert, assertIsTrue, EPSILON$1, markAsWarning, replaceProperty, removeProperty, warnID, deviceManager, FormatInfos, DescriptorSetInfo, BufferInfo, BufferUsageBit, MemoryUsageBit, PrimitiveMode, CanvasPool, Overflow$1, BASELINE_RATIO, safeMeasureText, fragmentText, HorizontalTextAlignment, VerticalTextAlignment, getSymbolLength, getSymbolAt, shareLabelInfo, isUnicodeSpace, getSymbolCodeAt, isUnicodeCJK, getBaselineOffset, LetterAtlas, FontAtlas, CacheMode, computeHash, Label, BitmapFont, Sprite, LineJoin, LineCap, Point, PointFlags, Graphics, DrawBatch2D, SpriteFrame, view, dynamicAtlasManager, StencilManager, vfmtPosUvColor, getAttributeStride, StaticVBAccessor, Stage, vfmt, MeshBuffer, MeshRenderData, RenderData, WrapMode, Input, EventDispatcherPriority, input, NodeEventProcessor, DispatcherEventType, Material, builtinResMgr, Model, ModelLocalBindings, UBOLocal, InputEventType, EventTouch, RenderingSubMesh, CachedArray;
    return {
        setters: [function (module) {
            Mat4 = module.s;
            clamp$1 = module.F;
            Color = module.C;
            Vec3 = module.n;
            Rect = module.R;
            logID = module.c;
            Vec2 = module.V;
            legacyCC = module.l;
            log = module.a;
            warn = module.w;
            addon = module.c9;
            mixin = module.bT;
            approx = module.D;
            errorID = module.f;
            error = module.e;
            remove = module.cu;
            removeAt = module.c1;
            Pool = module.P;
            assert = module.b;
            assertIsTrue = module.bu;
            EPSILON$1 = module.E;
            markAsWarning = module.ai;
            replaceProperty = module.ag;
            removeProperty = module.ah;
            warnID = module.d;
        }, function (module) {
            deviceManager = module.d;
        }, function (module) {
            FormatInfos = module.aO;
            DescriptorSetInfo = module.aC;
            BufferInfo = module.a7;
            BufferUsageBit = module.B;
            MemoryUsageBit = module.e;
            PrimitiveMode = module.u;
        }, function (module) {
            CanvasPool = module.p;
            Overflow$1 = module.O;
            BASELINE_RATIO = module.c;
            safeMeasureText = module.s;
            fragmentText = module.o;
            HorizontalTextAlignment = module.H;
            VerticalTextAlignment = module.V;
            getSymbolLength = module.f;
            getSymbolAt = module.h;
            shareLabelInfo = module.q;
            isUnicodeSpace = module.e;
            getSymbolCodeAt = module.j;
            isUnicodeCJK = module.i;
            getBaselineOffset = module.g;
            LetterAtlas = module.r;
            FontAtlas = module.t;
            CacheMode = module.C;
            computeHash = module.u;
            Label = module.b;
            BitmapFont = module.B;
            Sprite = module.a;
        }, function (module) {
            LineJoin = module.d;
            LineCap = module.e;
            Point = module.P;
            PointFlags = module.f;
            Graphics = module.G;
            DrawBatch2D = module.D;
        }, function (module) {
            SpriteFrame = module.a;
            view = module.h;
            dynamicAtlasManager = module.g;
            StencilManager = module.S;
            vfmtPosUvColor = module.i;
            getAttributeStride = module.j;
            StaticVBAccessor = module.k;
            Stage = module.l;
            vfmt = module.m;
            MeshBuffer = module.M;
            MeshRenderData = module.f;
            RenderData = module.e;
        }, function (module) {
            WrapMode = module.aT;
            Input = module.aA;
            EventDispatcherPriority = module.aW;
            input = module.az;
            NodeEventProcessor = module.aX;
            DispatcherEventType = module.aY;
            Material = module.ap;
            builtinResMgr = module.at;
            Model = module.a;
            ModelLocalBindings = module.aZ;
            UBOLocal = module.a_;
        }, function (module) {
            InputEventType = module.I;
            EventTouch = module.d;
        }, function () {}, function () {}, function () {}, function (module) {
            RenderingSubMesh = module.R;
        }, function () {}, function () {}, function (module) {
            CachedArray = module.C;
        }],
        execute: (function () {

            const m$4 = new Mat4();
            function fillMeshVertices3D(node, renderer, renderData, color) {
              const chunk = renderData.chunk;
              const dataList = renderData.data;
              const vData = chunk.vb;
              const vertexCount = renderData.vertexCount;
              node.getWorldMatrix(m$4);
              let vertexOffset = 0;
              for (let i = 0; i < vertexCount; i++) {
                const vert = dataList[i];
                const x = vert.x;
                const y = vert.y;
                let rhw = m$4.m03 * x + m$4.m07 * y + m$4.m15;
                rhw = rhw ? 1 / rhw : 1;
                vData[vertexOffset + 0] = (m$4.m00 * x + m$4.m04 * y + m$4.m12) * rhw;
                vData[vertexOffset + 1] = (m$4.m01 * x + m$4.m05 * y + m$4.m13) * rhw;
                vData[vertexOffset + 2] = (m$4.m02 * x + m$4.m06 * y + m$4.m14) * rhw;
                Color.toArray(vData, color, vertexOffset + 5);
                vertexOffset += 9;
              }
              chunk.bufferId;
              const vid = chunk.vertexOffset;
              const meshBuffer = chunk.meshBuffer;
              const ib = chunk.meshBuffer.iData;
              let indexOffset = meshBuffer.indexOffset;
              for (let i = 0, count = vertexCount / 4; i < count; i++) {
                const start = vid + i * 4;
                ib[indexOffset++] = start;
                ib[indexOffset++] = start + 1;
                ib[indexOffset++] = start + 2;
                ib[indexOffset++] = start + 1;
                ib[indexOffset++] = start + 3;
                ib[indexOffset++] = start + 2;
              }
              meshBuffer.indexOffset += renderData.indexCount;
              meshBuffer.setDirty();
            }
            function updateOpacity(renderData, opacity) {
              const vfmt = renderData.vertexFormat;
              const vb = renderData.chunk.vb;
              let attr;
              let format;
              let stride;
              let offset = 0;
              for (let i = 0; i < vfmt.length; ++i) {
                attr = vfmt[i];
                format = FormatInfos[attr.format];
                if (format.hasAlpha) {
                  stride = renderData.floatStride;
                  if (format.size / format.count === 1) {
                    const alpha = ~~clamp$1(Math.round(opacity * 255), 0, 255);
                    for (let color = offset; color < vb.length; color += stride) {
                      vb[color] = (vb[color] & 0xffffff00 | alpha) >>> 0;
                    }
                  } else if (format.size / format.count === 4) {
                    for (let alpha = offset + 3; alpha < vb.length; alpha += stride) {
                      vb[alpha] = opacity;
                    }
                  }
                }
                offset += format.size >> 2;
              }
            }

            class Aim {
              constructor(i, x, y) {
                this.i = void 0;
                this.x = void 0;
                this.y = void 0;
                this.prev = null;
                this.next = null;
                this.z = null;
                this.prevZ = null;
                this.nextZ = null;
                this.steiner = false;
                this.i = i;
                this.x = x;
                this.y = y;
              }
            }
            function linkedList(datas, start, end, dim, clockwise) {
              let i = 0;
              let last = null;
              if (clockwise === signedArea(datas, start, end, dim) > 0) {
                for (i = start; i < end; i += dim) {
                  last = insertNode(i, datas[i], datas[i + 1], last);
                }
              } else {
                for (i = end - dim; i >= start; i -= dim) {
                  last = insertNode(i, datas[i], datas[i + 1], last);
                }
              }
              if (last && equals(last, last.next)) {
                removeNode(last);
                last = last.next;
              }
              return last;
            }
            function filterPoints(start, end = null) {
              if (!start) {
                return start;
              }
              if (!end) {
                end = start;
              }
              let p = start;
              let again = false;
              do {
                again = false;
                if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
                  removeNode(p);
                  p = end = p.prev;
                  if (p === p.next) {
                    return null;
                  }
                  again = true;
                } else {
                  p = p.next;
                }
              } while (again || p !== end);
              return end;
            }
            function earcutLinked(ear, triangles, dim, minX, minY, size, pass = 0) {
              if (!ear) {
                return;
              }
              if (!pass && size) {
                indexCurve(ear, minX, minY, size);
              }
              let stop = ear;
              let prev = null;
              let next = null;
              while (ear.prev !== ear.next) {
                prev = ear.prev;
                next = ear.next;
                if (size ? isEarHashed(ear, minX, minY, size) : isEar(ear)) {
                  triangles.push(prev.i / dim);
                  triangles.push(ear.i / dim);
                  triangles.push(next.i / dim);
                  removeNode(ear);
                  ear = next.next;
                  stop = next.next;
                  continue;
                }
                ear = next;
                if (ear === stop) {
                  if (!pass) {
                    earcutLinked(filterPoints(ear), triangles, dim, minX, minY, size, 1);
                  } else if (pass === 1) {
                    ear = cureLocalIntersections(ear, triangles, dim);
                    earcutLinked(ear, triangles, dim, minX, minY, size, 2);
                  } else if (pass === 2) {
                    splitEarcut(ear, triangles, dim, minX, minY, size);
                  }
                  break;
                }
              }
            }
            function isEar(ear) {
              const a = ear.prev;
              const b = ear;
              const c = ear.next;
              if (area(a, b, c) >= 0) {
                return false;
              }
              let p = ear.next.next;
              while (p !== ear.prev) {
                if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) {
                  return false;
                }
                p = p.next;
              }
              return true;
            }
            function isEarHashed(ear, minX, minY, size) {
              const a = ear.prev;
              const b = ear;
              const c = ear.next;
              if (area(a, b, c) >= 0) {
                return false;
              }
              const minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x;
              const minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y;
              const maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x;
              const maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y;
              const minZ = zOrder(minTX, minTY, minX, minY, size);
              const maxZ = zOrder(maxTX, maxTY, minX, minY, size);
              let p = ear.nextZ;
              while (p && p.z <= maxZ) {
                if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) {
                  return false;
                }
                p = p.nextZ;
              }
              p = ear.prevZ;
              while (p && p.z >= minZ) {
                if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) {
                  return false;
                }
                p = p.prevZ;
              }
              return true;
            }
            function cureLocalIntersections(start, triangles, dim) {
              let p = start;
              do {
                const a = p.prev;
                const b = p.next.next;
                if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
                  triangles.push(a.i / dim);
                  triangles.push(p.i / dim);
                  triangles.push(b.i / dim);
                  removeNode(p);
                  removeNode(p.next);
                  p = start = b;
                }
                p = p.next;
              } while (p !== start);
              return p;
            }
            function splitEarcut(start, triangles, dim, minX, minY, size) {
              let a = start;
              do {
                let b = a.next.next;
                while (b !== a.prev) {
                  if (a.i !== b.i && isValidDiagonal(a, b)) {
                    let c = splitPolygon(a, b);
                    a = filterPoints(a, a.next);
                    c = filterPoints(c, c.next);
                    earcutLinked(a, triangles, dim, minX, minY, size);
                    earcutLinked(c, triangles, dim, minX, minY, size);
                    return;
                  }
                  b = b.next;
                }
                a = a.next;
              } while (a !== start);
            }
            function eliminateHoles(datas, holeIndices, outerNode, dim) {
              const queue = [];
              let i = 0;
              let len = 0;
              let start = 0;
              let end = 0;
              let list = null;
              for (i = 0, len = holeIndices.length; i < len; i++) {
                start = holeIndices[i] * dim;
                end = i < len - 1 ? holeIndices[i + 1] * dim : datas.length;
                list = linkedList(datas, start, end, dim, false);
                if (!list) {
                  continue;
                }
                if (list === list.next) {
                  list.steiner = true;
                }
                queue.push(getLeftmost(list));
              }
              queue.sort(compareX);
              if (!outerNode) {
                return outerNode;
              }
              for (i = 0; i < queue.length; i++) {
                eliminateHole(queue[i], outerNode);
                outerNode = filterPoints(outerNode, outerNode.next);
              }
              return outerNode;
            }
            function compareX(a, b) {
              return a.x - b.x;
            }
            function eliminateHole(hole, outerNode) {
              outerNode = findHoleBridge(hole, outerNode);
              if (outerNode) {
                const b = splitPolygon(outerNode, hole);
                filterPoints(b, b.next);
              }
            }
            function findHoleBridge(hole, outerNode) {
              let p = outerNode;
              const hx = hole.x;
              const hy = hole.y;
              let qx = -Infinity;
              let m = null;
              do {
                if (hy <= p.y && hy >= p.next.y) {
                  const x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
                  if (x <= hx && x > qx) {
                    qx = x;
                    if (x === hx) {
                      if (hy === p.y) {
                        return p;
                      }
                      if (hy === p.next.y) {
                        return p.next;
                      }
                    }
                    m = p.x < p.next.x ? p : p.next;
                  }
                }
                p = p.next;
              } while (p !== outerNode);
              if (!m) {
                return null;
              }
              if (hx === qx) {
                return m.prev;
              }
              const stop = m;
              const mx = m.x;
              const my = m.y;
              let tanMin = Infinity;
              let tan;
              p = m.next;
              while (p !== stop) {
                if (hx >= p.x && p.x >= mx && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
                  tan = Math.abs(hy - p.y) / (hx - p.x);
                  if ((tan < tanMin || tan === tanMin && p.x > m.x) && locallyInside(p, hole)) {
                    m = p;
                    tanMin = tan;
                  }
                }
                p = p.next;
              }
              return m;
            }
            function indexCurve(start, minX, minY, size) {
              let p = start;
              do {
                if (p.z === null) {
                  p.z = zOrder(p.x, p.y, minX, minY, size);
                }
                p.prevZ = p.prev;
                p.nextZ = p.next;
                p = p.next;
              } while (p !== start);
              p.prevZ.nextZ = null;
              p.prevZ = null;
              sortLinked(p);
            }
            function sortLinked(list) {
              let i = 0;
              let p = null;
              let q = null;
              let e = null;
              let tail = null;
              let numMerges = 0;
              let pSize = 0;
              let qSize = 0;
              let inSize = 1;
              do {
                p = list;
                list = null;
                tail = null;
                numMerges = 0;
                while (p) {
                  numMerges++;
                  q = p;
                  pSize = 0;
                  for (i = 0; i < inSize; i++) {
                    pSize++;
                    q = q.nextZ;
                    if (!q) {
                      break;
                    }
                  }
                  qSize = inSize;
                  while (pSize > 0 || qSize > 0 && q) {
                    if (pSize === 0) {
                      e = q;
                      q = q.nextZ;
                      qSize--;
                    } else if (qSize === 0 || !q) {
                      e = p;
                      p = p.nextZ;
                      pSize--;
                    } else if (p.z <= q.z) {
                      e = p;
                      p = p.nextZ;
                      pSize--;
                    } else {
                      e = q;
                      q = q.nextZ;
                      qSize--;
                    }
                    if (tail) {
                      tail.nextZ = e;
                    } else {
                      list = e;
                    }
                    e.prevZ = tail;
                    tail = e;
                  }
                  p = q;
                }
                tail.nextZ = null;
                inSize *= 2;
              } while (numMerges > 1);
              return list;
            }
            function zOrder(x, y, minX, minY, size) {
              x = 32767 * (x - minX) / size;
              y = 32767 * (y - minY) / size;
              x = (x | x << 8) & 0x00FF00FF;
              x = (x | x << 4) & 0x0F0F0F0F;
              x = (x | x << 2) & 0x33333333;
              x = (x | x << 1) & 0x55555555;
              y = (y | y << 8) & 0x00FF00FF;
              y = (y | y << 4) & 0x0F0F0F0F;
              y = (y | y << 2) & 0x33333333;
              y = (y | y << 1) & 0x55555555;
              return x | y << 1;
            }
            function getLeftmost(start) {
              let p = start;
              let leftmost = start;
              do {
                if (p.x < leftmost.x) {
                  leftmost = p;
                }
                p = p.next;
              } while (p !== start);
              return leftmost;
            }
            function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
              return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 && (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 && (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
            }
            function isValidDiagonal(a, b) {
              return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
            }
            function area(p, q, r) {
              return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
            }
            function equals(p1, p2) {
              return p1.x === p2.x && p1.y === p2.y;
            }
            function intersects(p1, q1, p2, q2) {
              if (equals(p1, q1) && equals(p2, q2) || equals(p1, q2) && equals(p2, q1)) {
                return true;
              }
              return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 && area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
            }
            function intersectsPolygon(a, b) {
              let p = a;
              do {
                if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b)) {
                  return true;
                }
                p = p.next;
              } while (p !== a);
              return false;
            }
            function locallyInside(a, b) {
              return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
            }
            function middleInside(a, b) {
              let p = a;
              let inside = false;
              const px = (a.x + b.x) / 2;
              const py = (a.y + b.y) / 2;
              do {
                if (p.y > py !== p.next.y > py && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x) {
                  inside = !inside;
                }
                p = p.next;
              } while (p !== a);
              return inside;
            }
            function splitPolygon(a, b) {
              const a2 = new Aim(a.i, a.x, a.y);
              const b2 = new Aim(b.i, b.x, b.y);
              const an = a.next;
              const bp = b.prev;
              a.next = b;
              b.prev = a;
              a2.next = an;
              an.prev = a2;
              b2.next = a2;
              a2.prev = b2;
              bp.next = b2;
              b2.prev = bp;
              return b2;
            }
            function insertNode(i, x, y, last) {
              const p = new Aim(i, x, y);
              if (!last) {
                p.prev = p;
                p.next = p;
              } else {
                p.next = last.next;
                p.prev = last;
                last.next.prev = p;
                last.next = p;
              }
              return p;
            }
            function removeNode(p) {
              p.next.prev = p.prev;
              p.prev.next = p.next;
              if (p.prevZ) {
                p.prevZ.nextZ = p.nextZ;
              }
              if (p.nextZ) {
                p.nextZ.prevZ = p.prevZ;
              }
            }
            function signedArea(datas, start, end, dim) {
              let sum = 0;
              for (let i = start, j = end - dim; i < end; i += dim) {
                sum += (datas[j] - datas[i]) * (datas[i + 1] + datas[j + 1]);
                j = i;
              }
              return sum;
            }
            function earcut(datas, holeIndices, dim) {
              dim = dim || 3;
              const hasHoles = holeIndices ? holeIndices.length : 0;
              const outerLen = hasHoles ? holeIndices[0] * dim : datas.length;
              let outerNode = linkedList(datas, 0, outerLen, dim, true);
              const triangles = [];
              if (!outerNode) {
                return triangles;
              }
              let minX = 0;
              let minY = 0;
              let maxX = 0;
              let maxY = 0;
              let x = 0;
              let y = 0;
              let size = 0;
              if (hasHoles) {
                outerNode = eliminateHoles(datas, holeIndices, outerNode, dim);
              }
              if (datas.length > 80 * dim) {
                minX = maxX = datas[0];
                minY = maxY = datas[1];
                for (let i = dim; i < outerLen; i += dim) {
                  x = datas[i];
                  y = datas[i + 1];
                  if (x < minX) {
                    minX = x;
                  }
                  if (y < minY) {
                    minY = y;
                  }
                  if (x > maxX) {
                    maxX = x;
                  }
                  if (y > maxY) {
                    maxY = y;
                  }
                }
                size = Math.max(maxX - minX, maxY - minY);
              }
              earcutLinked(outerNode, triangles, dim, minX, minY, size);
              return triangles;
            }

            const MAX_VERTEX = 65535;
            const MAX_INDICES = MAX_VERTEX * 2;
            const PI = Math.PI;
            const min = Math.min;
            const max = Math.max;
            const ceil = Math.ceil;
            const acos = Math.acos;
            const cos = Math.cos;
            const sin = Math.sin;
            const atan2 = Math.atan2;
            const attrBytes = 8;
            let _renderData = null;
            let _impl = null;
            const _curColor = new Color();
            const vec3_temps = [];
            for (let i = 0; i < 4; i++) {
              vec3_temps.push(new Vec3());
            }
            function curveDivs(r, arc, tol) {
              const da = acos(r / (r + tol)) * 2.0;
              return max(2, ceil(arc / da));
            }
            function clamp(v, minNum, maxNum) {
              if (v < minNum) {
                return minNum;
              } else if (v > maxNum) {
                return maxNum;
              }
              return v;
            }
            const graphicsAssembler = {
              useModel: true,
              updateRenderData(graphics) {
                {
                  if (graphics.renderData) {
                    graphics.renderData.material = graphics.getMaterialInstance(0);
                  }
                }
              },
              fillBuffers(graphics, renderer) {},
              renderIA(graphics, renderer) {},
              getRenderData(graphics, vertexCount) {
                if (!_impl) {
                  return null;
                }
                const renderDataList = _impl.getRenderDataList();
                let renderData = renderDataList[_impl.dataOffset];
                if (!renderData) {
                  return null;
                }
                let meshBuffer = renderData;
                const maxVertexCount = meshBuffer ? meshBuffer.vertexStart + vertexCount : 0;
                if (maxVertexCount > MAX_VERTEX || maxVertexCount * 3 > MAX_INDICES) {
                  ++_impl.dataOffset;
                  if (_impl.dataOffset < renderDataList.length) {
                    renderData = renderDataList[_impl.dataOffset];
                  } else {
                    renderData = _impl.requestRenderData();
                    renderDataList[_impl.dataOffset] = renderData;
                  }
                  meshBuffer = renderData;
                }
                if (meshBuffer && meshBuffer.vertexCount < maxVertexCount) {
                  meshBuffer.request(vertexCount, vertexCount * 3);
                }
                return renderData;
              },
              stroke(graphics) {
                Color.copy(_curColor, graphics.strokeColor);
                if (!graphics.impl) {
                  return;
                }
                this._flattenPaths(graphics.impl);
                this._expandStroke(graphics);
                graphics.impl.updatePathOffset = true;
                this.end(graphics);
              },
              fill(graphics) {
                Color.copy(_curColor, graphics.fillColor);
                this._expandFill(graphics);
                if (graphics.impl) {
                  graphics.impl.updatePathOffset = true;
                }
                this.end(graphics);
              },
              end(graphics) {
                graphics.markForUpdateRenderData();
              },
              _expandStroke(graphics) {
                const w = graphics.lineWidth * 0.5;
                const lineCap = graphics.lineCap;
                const lineJoin = graphics.lineJoin;
                const miterLimit = graphics.miterLimit;
                _impl = graphics.impl;
                if (!_impl) {
                  return;
                }
                const nCap = curveDivs(w, PI, _impl.tessTol);
                this._calculateJoins(_impl, w, lineJoin, miterLimit);
                const paths = _impl.paths;
                let vertexCount = 0;
                for (let i = _impl.pathOffset, l = _impl.pathLength; i < l; i++) {
                  const path = paths[i];
                  const pointsLength = path.points.length;
                  if (lineJoin === LineJoin.ROUND) {
                    vertexCount += (pointsLength + path.bevel * (nCap + 2) + 1) * 2;
                  } else {
                    vertexCount += (pointsLength + path.bevel * 5 + 1) * 2;
                  }
                  if (!path.closed) {
                    if (lineCap === LineCap.ROUND) {
                      vertexCount += (nCap * 2 + 2) * 2;
                    } else {
                      vertexCount += (3 + 3) * 2;
                    }
                  }
                }
                const meshBuffer = _renderData = this.getRenderData(graphics, vertexCount);
                if (!meshBuffer) {
                  return;
                }
                const vData = meshBuffer.vData;
                const iData = meshBuffer.iData;
                for (let i = _impl.pathOffset, l = _impl.pathLength; i < l; i++) {
                  const path = paths[i];
                  const pts = path.points;
                  const pointsLength = pts.length;
                  const offset = meshBuffer.vertexStart;
                  let p0;
                  let p1;
                  let start = 0;
                  let end = 0;
                  const loop = path.closed;
                  if (loop) {
                    p0 = pts[pointsLength - 1];
                    p1 = pts[0];
                    start = 0;
                    end = pointsLength;
                  } else {
                    p0 = pts[0];
                    p1 = pts[1];
                    start = 1;
                    end = pointsLength - 1;
                  }
                  p1 = p1 || p0;
                  if (!loop) {
                    const dPos = new Point(p1.x, p1.y);
                    dPos.subtract(p0);
                    dPos.normalize();
                    const dx = dPos.x;
                    const dy = dPos.y;
                    if (lineCap === LineCap.BUTT) {
                      this._buttCapStart(p0, dx, dy, w, 0);
                    } else if (lineCap === LineCap.SQUARE) {
                      this._buttCapStart(p0, dx, dy, w, w);
                    } else if (lineCap === LineCap.ROUND) {
                      this._roundCapStart(p0, dx, dy, w, nCap);
                    }
                  }
                  for (let j = start; j < end; ++j) {
                    if (lineJoin === LineJoin.ROUND) {
                      this._roundJoin(p0, p1, w, w, nCap);
                    } else if ((p1.flags & (PointFlags.PT_BEVEL | PointFlags.PT_INNERBEVEL)) !== 0) {
                      this._bevelJoin(p0, p1, w, w);
                    } else {
                      this._vSet(p1.x + p1.dmx * w, p1.y + p1.dmy * w, 1);
                      this._vSet(p1.x - p1.dmx * w, p1.y - p1.dmy * w, -1);
                    }
                    p0 = p1;
                    p1 = pts[j + 1];
                  }
                  if (loop) {
                    const vDataOffset = offset * attrBytes;
                    this._vSet(vData[vDataOffset], vData[vDataOffset + 1], 1);
                    this._vSet(vData[vDataOffset + attrBytes], vData[vDataOffset + attrBytes + 1], -1);
                  } else {
                    const dPos = new Point(p1.x, p1.y);
                    dPos.subtract(p0);
                    dPos.normalize();
                    const dx = dPos.x;
                    const dy = dPos.y;
                    if (lineCap === LineCap.BUTT) {
                      this._buttCapEnd(p1, dx, dy, w, 0);
                    } else if (lineCap === LineCap.SQUARE) {
                      this._buttCapEnd(p1, dx, dy, w, w);
                    } else if (lineCap === LineCap.ROUND) {
                      this._roundCapEnd(p1, dx, dy, w, nCap);
                    }
                  }
                  let indicesOffset = meshBuffer.indexStart;
                  for (let begin = offset + 2, over = meshBuffer.vertexStart; begin < over; begin++) {
                    iData[indicesOffset++] = begin - 2;
                    iData[indicesOffset++] = begin - 1;
                    iData[indicesOffset++] = begin;
                  }
                  meshBuffer.indexStart = indicesOffset;
                }
                _renderData = null;
                _impl = null;
              },
              _expandFill(graphics) {
                _impl = graphics.impl;
                if (!_impl) {
                  return;
                }
                const paths = _impl.paths;
                let vertexCount = 0;
                for (let i = _impl.pathOffset, l = _impl.pathLength; i < l; i++) {
                  const path = paths[i];
                  const pointsLength = path.points.length;
                  vertexCount += pointsLength;
                }
                const renderData = _renderData = this.getRenderData(graphics, vertexCount);
                if (!renderData) {
                  return;
                }
                const meshBuffer = renderData;
                const vData = meshBuffer.vData;
                const iData = meshBuffer.iData;
                for (let i = _impl.pathOffset, l = _impl.pathLength; i < l; i++) {
                  const path = paths[i];
                  const pts = path.points;
                  const pointsLength = pts.length;
                  if (pointsLength === 0) {
                    continue;
                  }
                  const vertexOffset = renderData.vertexStart;
                  for (let j = 0; j < pointsLength; ++j) {
                    this._vSet(pts[j].x, pts[j].y);
                  }
                  let indicesOffset = renderData.indexStart;
                  if (path.complex) {
                    const earcutData = [];
                    for (let j = vertexOffset, end = renderData.vertexStart; j < end; j++) {
                      let vDataOffset = j * attrBytes;
                      earcutData.push(vData[vDataOffset++]);
                      earcutData.push(vData[vDataOffset++]);
                      earcutData.push(vData[vDataOffset++]);
                    }
                    const newIndices = earcut(earcutData, null, 3);
                    if (!newIndices || newIndices.length === 0) {
                      continue;
                    }
                    for (let j = 0, nIndices = newIndices.length; j < nIndices; j++) {
                      iData[indicesOffset++] = newIndices[j] + vertexOffset;
                    }
                  } else {
                    const first = vertexOffset;
                    for (let start = vertexOffset + 2, end = meshBuffer.vertexStart; start < end; start++) {
                      iData[indicesOffset++] = first;
                      iData[indicesOffset++] = start - 1;
                      iData[indicesOffset++] = start;
                    }
                  }
                  meshBuffer.indexStart = indicesOffset;
                }
                _renderData = null;
                _impl = null;
              },
              _calculateJoins(impl, w, lineJoin, miterLimit) {
                let iw = 0.0;
                if (w > 0.0) {
                  iw = 1 / w;
                }
                const paths = impl.paths;
                for (let i = impl.pathOffset, l = impl.pathLength; i < l; i++) {
                  const path = paths[i];
                  const pts = path.points;
                  const ptsLength = pts.length;
                  let p0 = pts[ptsLength - 1];
                  let p1 = pts[0];
                  path.bevel = 0;
                  for (let j = 0; j < ptsLength; j++) {
                    let dmr2 = 0;
                    let cross = 0;
                    let limit = 0;
                    const dlx0 = p0.dy;
                    const dly0 = -p0.dx;
                    const dlx1 = p1.dy;
                    const dly1 = -p1.dx;
                    p1.dmx = (dlx0 + dlx1) * 0.5;
                    p1.dmy = (dly0 + dly1) * 0.5;
                    dmr2 = p1.dmx * p1.dmx + p1.dmy * p1.dmy;
                    if (dmr2 > 0.000001) {
                      let scale = 1 / dmr2;
                      if (scale > 600) {
                        scale = 600;
                      }
                      p1.dmx *= scale;
                      p1.dmy *= scale;
                    }
                    cross = p1.dx * p0.dy - p0.dx * p1.dy;
                    if (cross > 0) {
                      p1.flags |= PointFlags.PT_LEFT;
                    }
                    limit = max(11, min(p0.len, p1.len) * iw);
                    if (dmr2 * limit * limit < 1) {
                      p1.flags |= PointFlags.PT_INNERBEVEL;
                    }
                    if (p1.flags & PointFlags.PT_CORNER) {
                      if (dmr2 * miterLimit * miterLimit < 1 || lineJoin === LineJoin.BEVEL || lineJoin === LineJoin.ROUND) {
                        p1.flags |= PointFlags.PT_BEVEL;
                      }
                    }
                    if ((p1.flags & (PointFlags.PT_BEVEL | PointFlags.PT_INNERBEVEL)) !== 0) {
                      path.bevel++;
                    }
                    p0 = p1;
                    p1 = pts[j + 1];
                  }
                }
              },
              _flattenPaths(impl) {
                const paths = impl.paths;
                for (let i = impl.pathOffset, l = impl.pathLength; i < l; i++) {
                  const path = paths[i];
                  const pts = path.points;
                  let p0 = pts[pts.length - 1];
                  let p1 = pts[0];
                  if (pts.length > 2 && p0.equals(p1)) {
                    path.closed = true;
                    pts.pop();
                    p0 = pts[pts.length - 1];
                  }
                  for (let j = 0, size = pts.length; j < size; j++) {
                    const dPos = new Point(p1.x, p1.y);
                    dPos.subtract(p0);
                    p0.len = dPos.length();
                    if (dPos.x || dPos.y) {
                      dPos.normalize();
                    }
                    p0.dx = dPos.x;
                    p0.dy = dPos.y;
                    p0 = p1;
                    p1 = pts[j + 1];
                  }
                }
              },
              _chooseBevel(bevel, p0, p1, w) {
                const x = p1.x;
                const y = p1.y;
                let x0 = 0;
                let y0 = 0;
                let x1 = 0;
                let y1 = 0;
                if (bevel !== 0) {
                  x0 = x + p0.dy * w;
                  y0 = y - p0.dx * w;
                  x1 = x + p1.dy * w;
                  y1 = y - p1.dx * w;
                } else {
                  x0 = x1 = x + p1.dmx * w;
                  y0 = y1 = y + p1.dmy * w;
                }
                return [x0, y0, x1, y1];
              },
              _buttCapStart(p, dx, dy, w, d) {
                const px = p.x - dx * d;
                const py = p.y - dy * d;
                const dlx = dy;
                const dly = -dx;
                this._vSet(px + dlx * w, py + dly * w, 1);
                this._vSet(px - dlx * w, py - dly * w, -1);
              },
              _buttCapEnd(p, dx, dy, w, d) {
                const px = p.x + dx * d;
                const py = p.y + dy * d;
                const dlx = dy;
                const dly = -dx;
                this._vSet(px + dlx * w, py + dly * w, 1);
                this._vSet(px - dlx * w, py - dly * w, -1);
              },
              _roundCapStart(p, dx, dy, w, nCap) {
                const px = p.x;
                const py = p.y;
                const dlx = dy;
                const dly = -dx;
                for (let i = 0; i < nCap; i++) {
                  const a = i / (nCap - 1) * PI;
                  const ax = cos(a) * w;
                  const ay = sin(a) * w;
                  this._vSet(px - dlx * ax - dx * ay, py - dly * ax - dy * ay, 1);
                  this._vSet(px, py, 0);
                }
                this._vSet(px + dlx * w, py + dly * w, 1);
                this._vSet(px - dlx * w, py - dly * w, -1);
              },
              _roundCapEnd(p, dx, dy, w, nCap) {
                const px = p.x;
                const py = p.y;
                const dlx = dy;
                const dly = -dx;
                this._vSet(px + dlx * w, py + dly * w, 1);
                this._vSet(px - dlx * w, py - dly * w, -1);
                for (let i = 0; i < nCap; i++) {
                  const a = i / (nCap - 1) * PI;
                  const ax = cos(a) * w;
                  const ay = sin(a) * w;
                  this._vSet(px, py, 0);
                  this._vSet(px - dlx * ax + dx * ay, py - dly * ax + dy * ay, 1);
                }
              },
              _roundJoin(p0, p1, lw, rw, nCap) {
                const dlx0 = p0.dy;
                const dly0 = -p0.dx;
                const dlx1 = p1.dy;
                const dly1 = -p1.dx;
                const p1x = p1.x;
                const p1y = p1.y;
                if ((p1.flags & PointFlags.PT_LEFT) !== 0) {
                  const out = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, lw);
                  const lx0 = out[0];
                  const ly0 = out[1];
                  const lx1 = out[2];
                  const ly1 = out[3];
                  const a0 = atan2(-dly0, -dlx0);
                  let a1 = atan2(-dly1, -dlx1);
                  if (a1 > a0) {
                    a1 -= PI * 2;
                  }
                  this._vSet(lx0, ly0, 1);
                  this._vSet(p1x - dlx0 * rw, p1.y - dly0 * rw, -1);
                  const n = clamp(ceil((a0 - a1) / PI) * nCap, 2, nCap);
                  for (let i = 0; i < n; i++) {
                    const u = i / (n - 1);
                    const a = a0 + u * (a1 - a0);
                    const rx = p1x + cos(a) * rw;
                    const ry = p1y + sin(a) * rw;
                    this._vSet(p1x, p1y, 0);
                    this._vSet(rx, ry, -1);
                  }
                  this._vSet(lx1, ly1, 1);
                  this._vSet(p1x - dlx1 * rw, p1y - dly1 * rw, -1);
                } else {
                  const out = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, -rw);
                  const rx0 = out[0];
                  const ry0 = out[1];
                  const rx1 = out[2];
                  const ry1 = out[3];
                  const a0 = atan2(dly0, dlx0);
                  let a1 = atan2(dly1, dlx1);
                  if (a1 < a0) {
                    a1 += PI * 2;
                  }
                  this._vSet(p1x + dlx0 * rw, p1y + dly0 * rw, 1);
                  this._vSet(rx0, ry0, -1);
                  const n = clamp(ceil((a1 - a0) / PI) * nCap, 2, nCap);
                  for (let i = 0; i < n; i++) {
                    const u = i / (n - 1);
                    const a = a0 + u * (a1 - a0);
                    const lx = p1x + cos(a) * lw;
                    const ly = p1y + sin(a) * lw;
                    this._vSet(lx, ly, 1);
                    this._vSet(p1x, p1y, 0);
                  }
                  this._vSet(p1x + dlx1 * rw, p1y + dly1 * rw, 1);
                  this._vSet(rx1, ry1, -1);
                }
              },
              _bevelJoin(p0, p1, lw, rw) {
                let rx0 = 0;
                let ry0 = 0;
                let rx1 = 0;
                let ry1 = 0;
                let lx0 = 0;
                let ly0 = 0;
                let lx1 = 0;
                let ly1 = 0;
                const dlx0 = p0.dy;
                const dly0 = -p0.dx;
                const dlx1 = p1.dy;
                const dly1 = -p1.dx;
                if (p1.flags & PointFlags.PT_LEFT) {
                  const out = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, lw);
                  lx0 = out[0];
                  ly0 = out[1];
                  lx1 = out[2];
                  ly1 = out[3];
                  this._vSet(lx0, ly0, 1);
                  this._vSet(p1.x - dlx0 * rw, p1.y - dly0 * rw, -1);
                  this._vSet(lx1, ly1, 1);
                  this._vSet(p1.x - dlx1 * rw, p1.y - dly1 * rw, -1);
                } else {
                  const out = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, -rw);
                  rx0 = out[0];
                  ry0 = out[1];
                  rx1 = out[2];
                  ry1 = out[3];
                  this._vSet(p1.x + dlx0 * lw, p1.y + dly0 * lw, 1);
                  this._vSet(rx0, ry0, -1);
                  this._vSet(p1.x + dlx1 * lw, p1.y + dly1 * lw, 1);
                  this._vSet(rx1, ry1, -1);
                }
              },
              _vSet(x, y, distance = 0) {
                if (!_renderData) {
                  return;
                }
                const meshBuffer = _renderData;
                let dataOffset = meshBuffer.vertexStart * attrBytes;
                const vData = meshBuffer.vData;
                vData[dataOffset++] = x;
                vData[dataOffset++] = y;
                vData[dataOffset++] = 0;
                Color.toArray(vData, _curColor, dataOffset);
                dataOffset += 4;
                vData[dataOffset++] = distance;
                meshBuffer.vertexStart++;
              }
            };

            const graphicsAssemblerManager = exports('g', {
              getAssembler(sprite) {
                return graphicsAssembler;
              }
            });
            Graphics.Assembler = graphicsAssemblerManager;

            const Alignment = ['left', 'center', 'right'];
            const MAX_SIZE = 2048;
            const _BASELINE_OFFSET = getBaselineOffset();
            const _invisibleAlpha = (1 / 255).toFixed(3);
            const MAX_CALCULATION_NUM = 3;
            class LetterInfo {
              constructor() {
                this.char = '';
                this.valid = true;
                this.x = 0;
                this.y = 0;
                this.line = 0;
                this.hash = '';
              }
            }
            class TextProcessing {
              constructor() {
                this._context = null;
                this._canvas = null;
                this._canvasData = null;
                this._lettersInfo = [];
                this._tmpRect = new Rect();
                this._maxFontSize = 100;
                this._fontScale = 1;
                this._canvasData = CanvasPool.getInstance().get();
                this._canvas = this._canvasData.canvas;
                this._context = this._canvasData.context;
              }
              destroy() {
                CanvasPool.getInstance().put(this._canvasData);
                this._lettersInfo.length = 0;
              }
              processingString(isBmFont, style, layout, outputLayoutData, inputString, out) {
                if (!isBmFont) {
                  let loopTime = 0;
                  this._fontScale = this._getStyleFontScale(style.fontSize, style.fontScale);
                  this._updatePaddingRect(style, outputLayoutData);
                  this._calculateLabelFont(style, layout, outputLayoutData, inputString);
                  while ((outputLayoutData.canvasSize.width > MAX_SIZE || outputLayoutData.canvasSize.height > MAX_SIZE) && loopTime <= MAX_CALCULATION_NUM) {
                    loopTime++;
                    if (loopTime > MAX_CALCULATION_NUM) {
                      this._fontScale = 1;
                    } else {
                      const maxValue = Math.max(outputLayoutData.canvasSize.width, outputLayoutData.canvasSize.height);
                      const canvasScaleToMaxSizeRatio = MAX_SIZE / maxValue;
                      this._fontScale *= canvasScaleToMaxSizeRatio;
                      this._fontScale = Math.max(1, this._fontScale);
                    }
                    this._updatePaddingRect(style, outputLayoutData);
                    this._calculateLabelFont(style, layout, outputLayoutData, inputString);
                  }
                } else {
                  if (!style.fntConfig) {
                    this._fontScale = this._getStyleFontScale(style.originFontSize, style.fontScale);
                  } else {
                    this._fontScale = 1;
                  }
                  shareLabelInfo.fontScale = this._fontScale;
                  this._setupBMFontOverflowMetrics(layout, outputLayoutData);
                  this._updateFontScale(style);
                  this._computeHorizontalKerningForText(style, layout, inputString);
                  this._alignText(style, layout, outputLayoutData, inputString);
                }
                if (out) {
                  out = outputLayoutData.parsedString;
                }
              }
              generateRenderInfo(isBmFont, style, layout, outputLayoutData, outputRenderData, inputString, callback) {
                if (!isBmFont) {
                  this._updateLabelDimensions(style, layout, outputLayoutData);
                  this._updateTexture(style, layout, outputLayoutData, outputRenderData);
                  this.generateVertexData(isBmFont, style, layout, outputLayoutData, outputRenderData, inputString, callback);
                } else {
                  this._computeAlignmentOffset(style, layout, outputLayoutData);
                  this.generateVertexData(isBmFont, style, layout, outputLayoutData, outputRenderData, inputString, callback);
                }
              }
              setCanvasUsed(canvas, content) {
                this._canvas = canvas;
                this._context = content;
              }
              _getStyleFontScale(fontSize, fontScale) {
                let scale = fontScale;
                if (scale * fontSize > this._maxFontSize && fontSize < this._maxFontSize) {
                  scale = this._maxFontSize / fontSize;
                }
                if (scale < 1) {
                  scale = 1;
                }
                return scale;
              }
              _calculateLabelFont(style, layout, outputLayoutData, inputString) {
                if (!this._context) {
                  return;
                }
                style.actualFontSize = style.fontSize * this._fontScale;
                const paragraphedStrings = inputString.split('\n');
                const _splitStrings = outputLayoutData.parsedString = paragraphedStrings;
                const _fontDesc = this._getFontDesc(style.actualFontSize, style.fontFamily, style.isBold, style.isItalic);
                this._context.font = style.fontDesc = _fontDesc;
                switch (layout.overFlow) {
                  case Overflow$1.NONE:
                    {
                      let canvasSizeX = 0;
                      let canvasSizeY = 0;
                      for (let i = 0; i < paragraphedStrings.length; ++i) {
                        const paraLength = safeMeasureText(this._context, paragraphedStrings[i], _fontDesc);
                        canvasSizeX = canvasSizeX > paraLength ? canvasSizeX : paraLength;
                      }
                      canvasSizeY = (_splitStrings.length + BASELINE_RATIO) * this._getLineHeight(layout.lineHeight, style.actualFontSize, style.fontSize);
                      const rawWidth = canvasSizeX;
                      const rawHeight = canvasSizeY;
                      outputLayoutData.canvasSize.width = rawWidth + outputLayoutData.canvasPadding.width * this._fontScale;
                      outputLayoutData.canvasSize.height = rawHeight + outputLayoutData.canvasPadding.height * this._fontScale;
                      outputLayoutData.nodeContentSize.width = (rawWidth + outputLayoutData.contentSizeExtend.width * this._fontScale) / this._fontScale;
                      outputLayoutData.nodeContentSize.height = (rawHeight + outputLayoutData.contentSizeExtend.height * this._fontScale) / this._fontScale;
                      break;
                    }
                  case Overflow$1.SHRINK:
                    {
                      this._calculateShrinkFont(paragraphedStrings, style, layout, outputLayoutData);
                      this._calculateWrapText(paragraphedStrings, style, layout, outputLayoutData);
                      outputLayoutData.canvasSize.width = outputLayoutData.nodeContentSize.width * this._fontScale;
                      outputLayoutData.canvasSize.height = outputLayoutData.nodeContentSize.height * this._fontScale;
                      break;
                    }
                  case Overflow$1.CLAMP:
                    {
                      this._calculateWrapText(paragraphedStrings, style, layout, outputLayoutData);
                      outputLayoutData.canvasSize.width = outputLayoutData.nodeContentSize.width * this._fontScale;
                      outputLayoutData.canvasSize.height = outputLayoutData.nodeContentSize.height * this._fontScale;
                      break;
                    }
                  case Overflow$1.RESIZE_HEIGHT:
                    {
                      this._calculateWrapText(paragraphedStrings, style, layout, outputLayoutData);
                      const rawHeight = (outputLayoutData.parsedString.length + BASELINE_RATIO) * this._getLineHeight(layout.lineHeight, style.actualFontSize, style.fontSize);
                      outputLayoutData.canvasSize.width = outputLayoutData.nodeContentSize.width * this._fontScale;
                      outputLayoutData.canvasSize.height = rawHeight + outputLayoutData.canvasPadding.height * this._fontScale;
                      outputLayoutData.nodeContentSize.height = (rawHeight + outputLayoutData.contentSizeExtend.height * this._fontScale) / this._fontScale;
                      break;
                    }
                }
              }
              _getFontDesc(fontSize, fontFamily, isBold, isItalic) {
                let fontDesc = `${fontSize.toString()}px `;
                fontDesc += fontFamily;
                if (isBold) {
                  fontDesc = `bold ${fontDesc}`;
                }
                if (isItalic) {
                  fontDesc = `italic ${fontDesc}`;
                }
                return fontDesc;
              }
              _getLineHeight(lineHeight, fontSize, drawFontsize) {
                let nodeSpacingY = lineHeight;
                if (nodeSpacingY === 0) {
                  nodeSpacingY = fontSize;
                } else {
                  nodeSpacingY = nodeSpacingY * fontSize / drawFontsize;
                }
                return nodeSpacingY;
              }
              _calculateShrinkFont(paragraphedStrings, style, layout, outputLayoutData) {
                if (!this._context) return;
                let _fontDesc = this._getFontDesc(style.actualFontSize, style.fontFamily, style.isBold, style.isItalic);
                this._context.font = _fontDesc;
                const paragraphLength = this._calculateParagraphLength(paragraphedStrings, this._context, _fontDesc);
                let i = 0;
                let totalHeight = 0;
                let maxLength = 0;
                let _fontSize = style.actualFontSize;
                if (layout.wrapping) {
                  const canvasWidthNoMargin = outputLayoutData.nodeContentSize.width * this._fontScale;
                  const canvasHeightNoMargin = outputLayoutData.nodeContentSize.height * this._fontScale;
                  if (canvasWidthNoMargin < 0 || canvasHeightNoMargin < 0) {
                    return;
                  }
                  totalHeight = canvasHeightNoMargin + 1;
                  const actualFontSize = style.actualFontSize + 1;
                  let textFragment = [];
                  let left = 0;
                  let right = actualFontSize | 0;
                  let mid = 0;
                  while (left < right) {
                    mid = left + right + 1 >> 1;
                    if (mid <= 0) {
                      logID(4003);
                      break;
                    }
                    _fontSize = mid;
                    _fontDesc = this._getFontDesc(_fontSize, style.fontFamily, style.isBold, style.isItalic);
                    this._context.font = _fontDesc;
                    const lineHeight = this._getLineHeight(layout.lineHeight, _fontSize, style.fontSize);
                    totalHeight = 0;
                    for (i = 0; i < paragraphedStrings.length; ++i) {
                      const allWidth = safeMeasureText(this._context, paragraphedStrings[i], _fontDesc);
                      textFragment = fragmentText(paragraphedStrings[i], allWidth, canvasWidthNoMargin, this._measureText(this._context, _fontDesc));
                      totalHeight += textFragment.length * lineHeight;
                    }
                    if (totalHeight > canvasHeightNoMargin) {
                      right = mid - 1;
                    } else {
                      left = mid;
                    }
                  }
                  if (left === 0) {
                    logID(4003);
                  } else {
                    _fontSize = left;
                    _fontDesc = this._getFontDesc(_fontSize, style.fontFamily, style.isBold, style.isItalic);
                    this._context.font = _fontDesc;
                  }
                } else {
                  totalHeight = paragraphedStrings.length * this._getLineHeight(layout.lineHeight, _fontSize, style.fontSize);
                  for (i = 0; i < paragraphedStrings.length; ++i) {
                    if (maxLength < paragraphLength[i]) {
                      maxLength = paragraphLength[i];
                    }
                  }
                  const scaleX = (outputLayoutData.canvasSize.width - outputLayoutData.canvasPadding.width) * this._fontScale / maxLength;
                  const scaleY = outputLayoutData.canvasSize.height * this._fontScale / totalHeight;
                  _fontSize = style.actualFontSize * Math.min(1, scaleX, scaleY) | 0;
                  _fontDesc = this._getFontDesc(_fontSize, style.fontFamily, style.isBold, style.isItalic);
                  this._context.font = _fontDesc;
                }
                style.actualFontSize = _fontSize;
                style.fontDesc = _fontDesc;
              }
              _calculateWrapText(paragraphedStrings, style, layout, outputLayoutData) {
                if (!layout.wrapping || !this._context) return;
                let _splitStrings = [];
                const canvasWidthNoMargin = outputLayoutData.nodeContentSize.width * this._fontScale;
                const _fontDesc = this._getFontDesc(style.actualFontSize, style.fontFamily, style.isBold, style.isItalic);
                this._context.font = _fontDesc;
                for (let i = 0; i < paragraphedStrings.length; ++i) {
                  const allWidth = safeMeasureText(this._context, paragraphedStrings[i], _fontDesc);
                  const textFragment = fragmentText(paragraphedStrings[i], allWidth, canvasWidthNoMargin, this._measureText(this._context, _fontDesc));
                  _splitStrings = _splitStrings.concat(textFragment);
                }
                outputLayoutData.parsedString = _splitStrings;
                style.fontDesc = _fontDesc;
              }
              _measureText(ctx, fontDesc) {
                return str => safeMeasureText(ctx, str, fontDesc);
              }
              _calculateParagraphLength(paragraphedStrings, ctx, fontDesc) {
                const paragraphLength = [];
                for (const para of paragraphedStrings) {
                  const width = safeMeasureText(ctx, para, fontDesc);
                  paragraphLength.push(width);
                }
                return paragraphLength;
              }
              _updatePaddingRect(style, outputLayoutData) {
                let top = 0;
                let bottom = 0;
                let left = 0;
                let right = 0;
                let outlineWidth = 0;
                outputLayoutData.contentSizeExtend.width = outputLayoutData.contentSizeExtend.height = 0;
                if (style.isOutlined) {
                  outlineWidth = style.outlineWidth;
                  top = bottom = left = right = outlineWidth;
                  outputLayoutData.contentSizeExtend.width = outputLayoutData.contentSizeExtend.height = outlineWidth * 2;
                }
                if (style.hasShadow) {
                  const shadowWidth = style.shadowBlur + outlineWidth;
                  const offsetX = style.shadowOffsetX;
                  const offsetY = style.shadowOffsetY;
                  left = Math.max(left, -offsetX + shadowWidth);
                  right = Math.max(right, offsetX + shadowWidth);
                  top = Math.max(top, offsetY + shadowWidth);
                  bottom = Math.max(bottom, -offsetY + shadowWidth);
                }
                if (style.isItalic) {
                  const offset = style.fontSize * Math.tan(12 * 0.0174532925);
                  right += offset;
                  outputLayoutData.contentSizeExtend.width += offset;
                }
                outputLayoutData.canvasPadding.x = left;
                outputLayoutData.canvasPadding.y = top;
                outputLayoutData.canvasPadding.width = left + right;
                outputLayoutData.canvasPadding.height = top + bottom;
              }
              _updateLabelDimensions(style, layout, outputLayoutData) {
                outputLayoutData.canvasSize.width = Math.min(outputLayoutData.canvasSize.width, MAX_SIZE);
                outputLayoutData.canvasSize.height = Math.min(outputLayoutData.canvasSize.height, MAX_SIZE);
                this._canvas.width = outputLayoutData.canvasSize.width;
                this._canvas.height = outputLayoutData.canvasSize.height;
                this._context.font = style.fontDesc;
                this._context.textAlign = Alignment[layout.horizontalAlign];
                this._context.textBaseline = 'alphabetic';
              }
              _calculateFillTextStartPosition(style, layout, outputLayoutData) {
                let labelX = 0;
                if (layout.horizontalAlign === HorizontalTextAlignment.RIGHT) {
                  labelX = outputLayoutData.canvasSize.width - outputLayoutData.canvasPadding.width;
                } else if (layout.horizontalAlign === HorizontalTextAlignment.CENTER) {
                  labelX = (outputLayoutData.canvasSize.width - outputLayoutData.canvasPadding.width) / 2;
                }
                const lineHeight = this._getLineHeight(layout.lineHeight, style.actualFontSize, style.fontSize);
                const drawStartY = lineHeight * (outputLayoutData.parsedString.length - 1);
                let firstLinelabelY = style.actualFontSize * (1 - BASELINE_RATIO / 2);
                if (layout.verticalAlign !== VerticalTextAlignment.TOP) {
                  let blank = drawStartY + outputLayoutData.canvasPadding.height + style.actualFontSize - outputLayoutData.canvasSize.height;
                  if (layout.verticalAlign === VerticalTextAlignment.BOTTOM) {
                    blank += BASELINE_RATIO / 2 * style.actualFontSize;
                    firstLinelabelY -= blank;
                  } else {
                    firstLinelabelY -= blank / 2;
                  }
                }
                firstLinelabelY += _BASELINE_OFFSET * style.actualFontSize;
                outputLayoutData.startPosition.set(labelX + outputLayoutData.canvasPadding.x, firstLinelabelY + outputLayoutData.canvasPadding.y);
              }
              _updateTexture(style, layout, outputLayoutData, outputRenderData) {
                if (!this._context || !this._canvas) {
                  return;
                }
                this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
                this._context.font = style.fontDesc;
                this._calculateFillTextStartPosition(style, layout, outputLayoutData);
                const lineHeight = this._getLineHeight(layout.lineHeight, style.actualFontSize, style.fontSize);
                this._context.lineJoin = 'round';
                if (style.isOutlined) {
                  this._context.fillStyle = `rgba(${style.outlineColor.r}, ${style.outlineColor.g}, ${style.outlineColor.b}, ${_invisibleAlpha})`;
                  this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
                } else {
                  this._context.fillStyle = `rgba(${style.color.r}, ${style.color.g}, ${style.color.b}, ${_invisibleAlpha})`;
                  this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
                }
                this._context.fillStyle = `rgb(${style.color.r}, ${style.color.g}, ${style.color.b})`;
                const tempPos = new Vec2(outputLayoutData.startPosition.x, outputLayoutData.startPosition.y);
                const drawTextPosX = tempPos.x;
                let drawTextPosY = 0;
                this._drawTextEffect(tempPos, lineHeight, style, layout, outputLayoutData);
                for (let i = 0; i < outputLayoutData.parsedString.length; ++i) {
                  drawTextPosY = tempPos.y + i * lineHeight;
                  if (style.hasShadow) {
                    this._setupShadow(style);
                    this._context.fillText(outputLayoutData.parsedString[i], drawTextPosX, drawTextPosY);
                  }
                  if (style.isOutlined) {
                    this._setupOutline(style);
                    this._context.strokeText(outputLayoutData.parsedString[i], drawTextPosX, drawTextPosY);
                  }
                  if (!style.hasShadow || style.isOutlined) {
                    this._context.fillText(outputLayoutData.parsedString[i], drawTextPosX, drawTextPosY);
                  }
                }
                if (style.hasShadow) {
                  this._context.shadowColor = 'transparent';
                }
                this._uploadTexture(outputRenderData);
              }
              _uploadTexture(outputRenderData) {
                if (outputRenderData.texture && this._canvas) {
                  let tex;
                  if (outputRenderData.texture instanceof SpriteFrame) {
                    tex = outputRenderData.texture.texture;
                  } else {
                    tex = outputRenderData.texture;
                  }
                  const uploadAgain = this._canvas.width !== 0 && this._canvas.height !== 0;
                  if (uploadAgain) {
                    tex.reset({
                      width: this._canvas.width,
                      height: this._canvas.height,
                      mipmapLevel: 1
                    });
                    tex.uploadData(this._canvas);
                    tex.setWrapMode(WrapMode.CLAMP_TO_EDGE, WrapMode.CLAMP_TO_EDGE);
                    if (outputRenderData.texture instanceof SpriteFrame) {
                      outputRenderData.texture.rect = new Rect(0, 0, this._canvas.width, this._canvas.height);
                      outputRenderData.texture._calculateUV();
                    }
                    if (legacyCC.director.root && legacyCC.director.root.batcher2D) {
                      {
                        legacyCC.director.root.batcher2D._releaseDescriptorSetCache(tex.getGFXTexture(), tex.getGFXSampler());
                      }
                    }
                  }
                }
              }
              _drawTextEffect(startPosition, lineHeight, style, layout, outputLayoutData) {
                if (!style.hasShadow && !style.isOutlined && !style.isUnderline) return;
                const isMultiple = outputLayoutData.parsedString.length > 1 && style.hasShadow;
                const measureText = this._measureText(this._context, style.fontDesc);
                let drawTextPosX = 0;
                let drawTextPosY = 0;
                for (let i = 0; i < outputLayoutData.parsedString.length; ++i) {
                  drawTextPosX = startPosition.x;
                  drawTextPosY = startPosition.y + i * lineHeight;
                  if (isMultiple) {
                    if (style.hasShadow) {
                      this._setupShadow(style);
                      this._context.fillText(outputLayoutData.parsedString[i], drawTextPosX, drawTextPosY);
                    }
                    if (style.isOutlined) {
                      this._setupOutline(style);
                      this._context.strokeText(outputLayoutData.parsedString[i], drawTextPosX, drawTextPosY);
                    }
                    if (!style.hasShadow || style.isOutlined) {
                      this._context.fillText(outputLayoutData.parsedString[i], drawTextPosX, drawTextPosY);
                    }
                  }
                  if (style.isUnderline) {
                    const _drawUnderlineWidth = measureText(outputLayoutData.parsedString[i]);
                    const _drawUnderlinePos = new Vec2();
                    if (layout.horizontalAlign === HorizontalTextAlignment.RIGHT) {
                      _drawUnderlinePos.x = startPosition.x - _drawUnderlineWidth;
                    } else if (layout.horizontalAlign === HorizontalTextAlignment.CENTER) {
                      _drawUnderlinePos.x = startPosition.x - _drawUnderlineWidth / 2;
                    } else {
                      _drawUnderlinePos.x = startPosition.x;
                    }
                    _drawUnderlinePos.y = drawTextPosY + style.actualFontSize / 8;
                    this._context.fillRect(_drawUnderlinePos.x, _drawUnderlinePos.y, _drawUnderlineWidth, style.underlineHeight * this._fontScale);
                  }
                }
                if (isMultiple) {
                  this._context.shadowColor = 'transparent';
                }
              }
              _setupOutline(style) {
                this._context.shadowBlur = 0;
                this._context.shadowOffsetX = 0;
                this._context.shadowOffsetY = 0;
                this._context.strokeStyle = `rgba(${style.outlineColor.r}, ${style.outlineColor.g}, ${style.outlineColor.b}, ${style.outlineColor.a / 255})`;
                this._context.lineWidth = style.outlineWidth * 2 * this._fontScale;
              }
              _setupShadow(style) {
                const fontScale = this._fontScale;
                this._context.shadowColor = `rgba(${style.shadowColor.r}, ${style.shadowColor.g}, ${style.shadowColor.b}, ${style.shadowColor.a / 255})`;
                this._context.shadowBlur = style.shadowBlur * fontScale;
                this._context.shadowOffsetX = style.shadowOffsetX * fontScale;
                this._context.shadowOffsetY = -style.shadowOffsetY * fontScale;
              }
              generateVertexData(isBmFont, style, layout, outputLayoutData, outputRenderData, inputString, callback) {
                if (!isBmFont) {
                  this.updateQuatCount(outputRenderData);
                  callback(style, outputLayoutData, outputRenderData);
                } else {
                  this._updateQuads(style, layout, outputLayoutData, outputRenderData, inputString, callback);
                }
              }
              updateQuatCount(outputRenderData) {
                const data = outputRenderData.vertexBuffer;
                const count = outputRenderData.quadCount;
                if (data.length !== count) {
                  for (let i = data.length; i < count; i++) {
                    data.push({
                      x: 0,
                      y: 0,
                      z: 0,
                      u: 0,
                      v: 0,
                      color: Color.WHITE.clone()
                    });
                  }
                  data.length = count;
                }
              }
              _setupBMFontOverflowMetrics(layout, outputLayoutData) {
                let newWidth = outputLayoutData.nodeContentSize.width;
                let newHeight = outputLayoutData.nodeContentSize.height;
                if (layout.overFlow === Overflow$1.RESIZE_HEIGHT) {
                  newHeight = 0;
                }
                if (layout.overFlow === Overflow$1.NONE) {
                  newWidth = 0;
                  newHeight = 0;
                }
                layout.textWidthTemp = newWidth;
                layout.textHeightTemp = newHeight;
                layout.textDimensions.width = newWidth;
                layout.textDimensions.height = newHeight;
                layout.maxLineWidth = newWidth;
              }
              _updateFontScale(style) {
                style.bmfontScale = style.actualFontSize / (style.originFontSize * this._fontScale);
              }
              _computeHorizontalKerningForText(style, layout, inputString) {
                const string = inputString;
                const stringLen = string.length;
                if (!style.fntConfig) return;
                const kerningDict = style.fntConfig.kerningDict;
                const horizontalKerning = layout.horizontalKerning;
                if (!kerningDict || kerningDict.length === 0) {
                  return;
                }
                let prev = -1;
                for (let i = 0; i < stringLen; ++i) {
                  const key = string.charCodeAt(i);
                  const kerningAmount = kerningDict[prev << 16 | key & 0xffff] || 0;
                  if (i < stringLen - 1) {
                    horizontalKerning[i] = kerningAmount;
                  } else {
                    horizontalKerning[i] = 0;
                  }
                  prev = key;
                }
              }
              _alignText(style, layout, outputLayoutData, inputString) {
                this._multilineTextWrap(style, layout, outputLayoutData, inputString, this._getFirstWordLen);
                if (layout.overFlow === Overflow$1.SHRINK) {
                  if (style.fontSize > 0 && this._isVerticalClamp(style, layout, outputLayoutData, inputString, this)) {
                    this._shrinkLabelToContentSize(style, layout, outputLayoutData, inputString, this._isVerticalClamp);
                  }
                  if (style.fontSize > 0 && this._isHorizontalNeedShrink(layout, outputLayoutData)) {
                    this._shrinkLabelToContentSize(style, layout, outputLayoutData, inputString, this._isHorizontalClamp);
                  }
                }
                this._parsedString(outputLayoutData, inputString);
              }
              _parsedString(outputLayoutData, inputString) {
                let _splitStrings = [];
                let textFragment = '';
                const length = getSymbolLength(inputString);
                for (let i = 0, line = 0, l = length; i < l; ++i) {
                  const letterInfo = this._lettersInfo[i];
                  if (!letterInfo.valid) {
                    continue;
                  }
                  if (line === letterInfo.line) {
                    textFragment += letterInfo.char;
                  } else {
                    _splitStrings = _splitStrings.concat(textFragment);
                    line = letterInfo.line;
                    textFragment = '';
                  }
                }
                _splitStrings = _splitStrings.concat(textFragment);
                outputLayoutData.parsedString = _splitStrings;
              }
              _multilineTextWrap(style, layout, outputLayoutData, inputString, nextTokenFunc) {
                layout.linesWidth.length = 0;
                const _string = inputString;
                const textLen = _string.length;
                let lineIndex = 0;
                let nextTokenX = 0;
                let nextTokenY = 0;
                let longestLine = 0;
                let letterRight = 0;
                let highestY = 0;
                let lowestY = 0;
                let letterDef = null;
                const _lineSpacing = 0;
                for (let index = 0; index < textLen;) {
                  let character = getSymbolAt(_string, index);
                  if (character === '\n') {
                    layout.linesWidth.push(letterRight);
                    letterRight = 0;
                    lineIndex++;
                    nextTokenX = 0;
                    nextTokenY -= layout.lineHeight * this._getFontScale(style, layout) + _lineSpacing;
                    this._recordPlaceholderInfo(index, character);
                    index++;
                    continue;
                  }
                  const tokenLen = nextTokenFunc(style, layout, _string, index, textLen);
                  let tokenHighestY = highestY;
                  let tokenLowestY = lowestY;
                  let tokenRight = letterRight;
                  let nextLetterX = nextTokenX;
                  let newLine = false;
                  const letterPosition = new Vec2();
                  for (let tmp = 0; tmp < tokenLen; ++tmp) {
                    const letterIndex = index + tmp;
                    character = getSymbolAt(_string, letterIndex);
                    if (character === '\r') {
                      this._recordPlaceholderInfo(letterIndex, character);
                      continue;
                    }
                    letterDef = shareLabelInfo.fontAtlas.getLetterDefinitionForChar(character, shareLabelInfo);
                    if (!letterDef) {
                      this._recordPlaceholderInfo(letterIndex, character);
                      if (style.fntConfig != null) {
                        log(`Can't find letter definition in texture atlas ${style.fntConfig.atlasName} for letter:${character}`);
                      } else {
                        log(`Can't find letter definition in font family ${style.fontFamily} for letter:${character}`);
                      }
                      continue;
                    }
                    const letterX = nextLetterX + letterDef.offsetX * style.bmfontScale - shareLabelInfo.margin;
                    if (layout.wrapping && layout.maxLineWidth > 0 && nextTokenX > 0 && letterX + letterDef.w * style.bmfontScale > layout.maxLineWidth && !isUnicodeSpace(character)) {
                      layout.linesWidth.push(letterRight);
                      letterRight = 0;
                      lineIndex++;
                      nextTokenX = 0;
                      nextTokenY -= layout.lineHeight * this._getFontScale(style, layout) + _lineSpacing;
                      newLine = true;
                      break;
                    } else {
                      letterPosition.x = letterX;
                    }
                    letterPosition.y = nextTokenY - letterDef.offsetY * style.bmfontScale;
                    this._recordLetterInfo(letterPosition, character, letterIndex, lineIndex);
                    if (letterIndex + 1 < layout.horizontalKerning.length && letterIndex < textLen - 1) {
                      nextLetterX += layout.horizontalKerning[letterIndex + 1] * style.bmfontScale;
                    }
                    nextLetterX += letterDef.xAdvance * style.bmfontScale + layout.spacingX;
                    tokenRight = letterPosition.x + letterDef.w * style.bmfontScale;
                    if (tokenHighestY < letterPosition.y) {
                      tokenHighestY = letterPosition.y;
                    }
                    if (tokenLowestY > letterPosition.y - letterDef.h * style.bmfontScale) {
                      tokenLowestY = letterPosition.y - letterDef.h * style.bmfontScale;
                    }
                  }
                  if (newLine) {
                    continue;
                  }
                  nextTokenX = nextLetterX;
                  letterRight = tokenRight;
                  if (highestY < tokenHighestY) {
                    highestY = tokenHighestY;
                  }
                  if (lowestY > tokenLowestY) {
                    lowestY = tokenLowestY;
                  }
                  if (longestLine < letterRight) {
                    longestLine = letterRight;
                  }
                  index += tokenLen;
                }
                layout.linesWidth.push(letterRight);
                layout.numberOfLines = lineIndex + 1;
                layout.textDesiredHeight = layout.numberOfLines * layout.lineHeight * this._getFontScale(style, layout);
                if (layout.numberOfLines > 1) {
                  layout.textDesiredHeight += (layout.numberOfLines - 1) * _lineSpacing;
                }
                outputLayoutData.nodeContentSize.width = layout.textWidthTemp;
                outputLayoutData.nodeContentSize.height = layout.textHeightTemp;
                if (layout.textWidthTemp <= 0) {
                  outputLayoutData.nodeContentSize.width = parseFloat(longestLine.toFixed(2)) + shareLabelInfo.margin * 2;
                }
                if (layout.textHeightTemp <= 0) {
                  outputLayoutData.nodeContentSize.height = parseFloat(layout.textDesiredHeight.toFixed(2)) + shareLabelInfo.margin * 2;
                }
                layout.tailoredTopY = outputLayoutData.nodeContentSize.height;
                layout.tailoredBottomY = 0;
                if (highestY > 0) {
                  layout.tailoredTopY = outputLayoutData.nodeContentSize.height + highestY;
                }
                if (lowestY < -layout.textDesiredHeight) {
                  layout.tailoredBottomY = layout.textDesiredHeight + lowestY;
                }
                return true;
              }
              _recordPlaceholderInfo(letterIndex, char) {
                if (letterIndex >= this._lettersInfo.length) {
                  const tmpInfo = new LetterInfo();
                  this._lettersInfo.push(tmpInfo);
                }
                this._lettersInfo[letterIndex].char = char;
                this._lettersInfo[letterIndex].hash = `${getSymbolCodeAt(char, 0)}${shareLabelInfo.hash}`;
                this._lettersInfo[letterIndex].valid = false;
              }
              _recordLetterInfo(letterPosition, character, letterIndex, lineIndex) {
                if (letterIndex >= this._lettersInfo.length) {
                  const tmpInfo = new LetterInfo();
                  this._lettersInfo.push(tmpInfo);
                }
                const char = getSymbolCodeAt(character, 0);
                const key = `${char}${shareLabelInfo.hash}`;
                this._lettersInfo[letterIndex].line = lineIndex;
                this._lettersInfo[letterIndex].char = character;
                this._lettersInfo[letterIndex].hash = key;
                this._lettersInfo[letterIndex].valid = shareLabelInfo.fontAtlas.getLetter(key).valid;
                this._lettersInfo[letterIndex].x = letterPosition.x;
                this._lettersInfo[letterIndex].y = letterPosition.y;
              }
              _getFirstWordLen(style, layout, text, startIndex, textLen) {
                let character = getSymbolAt(text, startIndex);
                if (isUnicodeCJK(character) || character === '\n' || isUnicodeSpace(character)) {
                  return 1;
                }
                let len = 1;
                let letterDef = shareLabelInfo.fontAtlas.getLetterDefinitionForChar(character, shareLabelInfo);
                if (!letterDef) {
                  return len;
                }
                let nextLetterX = letterDef.xAdvance * style.bmfontScale + layout.spacingX;
                let letterX = 0;
                for (let index = startIndex + 1; index < textLen; ++index) {
                  character = getSymbolAt(text, index);
                  letterDef = shareLabelInfo.fontAtlas.getLetterDefinitionForChar(character, shareLabelInfo);
                  if (!letterDef) {
                    break;
                  }
                  letterX = nextLetterX + letterDef.offsetX * style.bmfontScale;
                  if (letterX + letterDef.w * style.bmfontScale > layout.maxLineWidth && !isUnicodeSpace(character) && layout.maxLineWidth > 0) {
                    return len;
                  }
                  nextLetterX += letterDef.xAdvance * style.bmfontScale + layout.spacingX;
                  if (character === '\n' || isUnicodeSpace(character) || isUnicodeCJK(character)) {
                    break;
                  }
                  len++;
                }
                return len;
              }
              _computeAlignmentOffset(style, layout, outputLayoutData) {
                layout.linesOffsetX.length = 0;
                layout.letterOffsetY = 0;
                switch (layout.horizontalAlign) {
                  case HorizontalTextAlignment.LEFT:
                    for (let i = 0; i < layout.numberOfLines; ++i) {
                      layout.linesOffsetX.push(0);
                    }
                    break;
                  case HorizontalTextAlignment.CENTER:
                    for (let i = 0, l = layout.linesWidth.length; i < l; i++) {
                      layout.linesOffsetX.push((outputLayoutData.nodeContentSize.width - layout.linesWidth[i]) / 2);
                    }
                    break;
                  case HorizontalTextAlignment.RIGHT:
                    for (let i = 0, l = layout.linesWidth.length; i < l; i++) {
                      layout.linesOffsetX.push(outputLayoutData.nodeContentSize.width - layout.linesWidth[i]);
                    }
                    break;
                }
                layout.letterOffsetY = outputLayoutData.nodeContentSize.height;
                if (layout.verticalAlign !== VerticalTextAlignment.TOP) {
                  const blank = outputLayoutData.nodeContentSize.height - layout.textDesiredHeight + layout.lineHeight * this._getFontScale(style, layout) - style.originFontSize * this._fontScale * style.bmfontScale;
                  if (layout.verticalAlign === VerticalTextAlignment.BOTTOM) {
                    layout.letterOffsetY -= blank;
                  } else {
                    layout.letterOffsetY -= blank / 2;
                  }
                }
              }
              _getFontScale(style, layout) {
                return layout.overFlow === Overflow$1.SHRINK ? style.bmfontScale : 1;
              }
              _isVerticalClamp(style, layout, outputLayoutData, inputString, process) {
                if (layout.textDesiredHeight > outputLayoutData.nodeContentSize.height) {
                  return true;
                } else {
                  return false;
                }
              }
              _isHorizontalClamp(style, layout, outputLayoutData, inputString, process) {
                let letterClamp = false;
                const _string = inputString;
                const _length = getSymbolLength(_string);
                for (let ctr = 0, l = _length; ctr < l; ++ctr) {
                  const letterInfo = process._lettersInfo[ctr];
                  if (letterInfo.valid) {
                    const letterDef = shareLabelInfo.fontAtlas.getLetterDefinitionForChar(letterInfo.char, shareLabelInfo);
                    if (!letterDef) {
                      continue;
                    }
                    const px = letterInfo.x + letterDef.w * style.bmfontScale;
                    const lineIndex = letterInfo.line;
                    if (layout.textWidthTemp > 0) {
                      if (!layout.wrapping) {
                        if (px > outputLayoutData.nodeContentSize.width) {
                          letterClamp = true;
                          break;
                        }
                      } else {
                        const wordWidth = layout.linesWidth[lineIndex];
                        if (wordWidth > outputLayoutData.nodeContentSize.width && (px > outputLayoutData.nodeContentSize.width || px < 0)) {
                          letterClamp = true;
                          break;
                        }
                      }
                    }
                  }
                }
                return letterClamp;
              }
              _isHorizontalNeedShrink(layout, outputLayoutData) {
                let wordWidth = 0;
                for (let ctr = 0, l = layout.linesWidth.length; ctr < l; ++ctr) {
                  wordWidth = layout.linesWidth[ctr];
                  if (wordWidth > outputLayoutData.nodeContentSize.width) return true;
                }
                return false;
              }
              _shrinkLabelToContentSize(style, layout, outputLayoutData, inputString, lambda) {
                const fontSize = style.actualFontSize;
                let left = 0;
                let right = fontSize | 0;
                let mid = 0;
                while (left < right) {
                  mid = left + right + 1 >> 1;
                  const newFontSize = mid;
                  if (newFontSize <= 0) {
                    break;
                  }
                  style.bmfontScale = newFontSize / (style.originFontSize * this._fontScale);
                  this._multilineTextWrap(style, layout, outputLayoutData, inputString, this._getFirstWordLen);
                  this._computeAlignmentOffset(style, layout, outputLayoutData);
                  if (lambda(style, layout, outputLayoutData, inputString, this)) {
                    right = mid - 1;
                  } else {
                    left = mid;
                  }
                }
                if (left >= 0) {
                  this._scaleFontSizeDown(style, layout, outputLayoutData, inputString, left);
                }
              }
              _scaleFontSizeDown(style, layout, outputLayoutData, inputString, fontSize) {
                let shouldUpdateContent = true;
                if (!fontSize) {
                  fontSize = 0.1;
                  shouldUpdateContent = false;
                }
                style.actualFontSize = fontSize;
                if (shouldUpdateContent) {
                  this._updateFontScale(style);
                  this._multilineTextWrap(style, layout, outputLayoutData, inputString, this._getFirstWordLen);
                }
              }
              _updateQuads(style, layout, outputLayoutData, outputRenderData, inputString, callback) {
                const texture = style.spriteFrame ? style.spriteFrame.texture : shareLabelInfo.fontAtlas.getTexture();
                const appX = outputRenderData.uiTransAnchorX * outputLayoutData.nodeContentSize.width;
                const appY = outputRenderData.uiTransAnchorY * outputLayoutData.nodeContentSize.height;
                const ret = true;
                const _length = getSymbolLength(inputString);
                for (let ctr = 0, l = _length; ctr < l; ++ctr) {
                  const letterInfo = this._lettersInfo[ctr];
                  if (!letterInfo.valid) {
                    continue;
                  }
                  const letterDef = shareLabelInfo.fontAtlas.getLetter(letterInfo.hash);
                  if (!letterDef) {
                    warn('Can\'t find letter in this bitmap-font');
                    continue;
                  }
                  this._tmpRect.height = letterDef.h;
                  this._tmpRect.width = letterDef.w;
                  this._tmpRect.x = letterDef.u;
                  this._tmpRect.y = letterDef.v;
                  let py = letterInfo.y + layout.letterOffsetY;
                  if (layout.textHeightTemp > 0) {
                    if (py > layout.tailoredTopY) {
                      const clipTop = py - layout.tailoredTopY;
                      this._tmpRect.y += clipTop;
                      this._tmpRect.height -= clipTop;
                      py -= clipTop;
                    }
                    if (py - this._tmpRect.height * style.bmfontScale < layout.tailoredBottomY && layout.overFlow === Overflow$1.CLAMP) {
                      this._tmpRect.height = py < layout.tailoredBottomY ? 0 : (py - layout.tailoredBottomY) / style.bmfontScale;
                    }
                  }
                  const lineIndex = letterInfo.line;
                  const px = letterInfo.x + letterDef.w / 2 * style.bmfontScale + layout.linesOffsetX[lineIndex];
                  if (layout.textWidthTemp > 0) {
                    if (this._isHorizontalClamped(layout, outputLayoutData, px, lineIndex)) {
                      if (layout.overFlow === Overflow$1.CLAMP) {
                        this._tmpRect.width = 0;
                      }
                    }
                  }
                  if (this._tmpRect.height > 0 && this._tmpRect.width > 0) {
                    const isRotated = this._determineRect(style);
                    const letterPositionX = letterInfo.x + layout.linesOffsetX[letterInfo.line];
                    const offset = outputRenderData.quadCount;
                    outputRenderData.quadCount += 4;
                    this.updateQuatCount(outputRenderData);
                    callback(style, outputLayoutData, outputRenderData, offset, texture, this._tmpRect, isRotated, letterPositionX - appX, py - appY);
                  }
                }
                return ret;
              }
              _isHorizontalClamped(layout, outputLayoutData, px, lineIndex) {
                const wordWidth = layout.linesWidth[lineIndex];
                const letterOverClamp = px > outputLayoutData.nodeContentSize.width || px < 0;
                if (!layout.wrapping) {
                  return letterOverClamp;
                } else {
                  return wordWidth > outputLayoutData.nodeContentSize.width && letterOverClamp;
                }
              }
              _determineRect(style) {
                const _spriteFrame = style.spriteFrame;
                if (!_spriteFrame) return false;
                const isRotated = _spriteFrame.isRotated();
                const originalSize = _spriteFrame.getOriginalSize();
                const rect = _spriteFrame.getRect();
                const offset = _spriteFrame.getOffset();
                const trimmedLeft = offset.x + (originalSize.width - rect.width) / 2;
                const trimmedTop = offset.y - (originalSize.height - rect.height) / 2;
                if (!isRotated) {
                  this._tmpRect.x += rect.x - trimmedLeft;
                  this._tmpRect.y += rect.y + trimmedTop;
                } else {
                  const originalX = this._tmpRect.x;
                  this._tmpRect.x = rect.x + rect.height - this._tmpRect.y - this._tmpRect.height - trimmedTop;
                  this._tmpRect.y = originalX + rect.y - trimmedLeft;
                  if (this._tmpRect.y < 0) {
                    this._tmpRect.height += trimmedTop;
                  }
                }
                return isRotated;
              }
            }
            TextProcessing.instance = void 0;
            TextProcessing.instance = new TextProcessing();

            const _defaultLetterAtlas = new LetterAtlas(64, 64);
            const _defaultFontAtlas = new FontAtlas(null);
            let _comp = null;
            let _uiTrans = null;
            let _fntConfig = null;
            let _spriteFrame = null;
            let QUAD_INDICES$5;
            const bmfontUtils = {
              updateProcessingData(style, layout, outputLayoutData, outputRenderData, comp, trans) {
                style.fontSize = comp.fontSize;
                style.actualFontSize = comp.fontSize;
                style.originFontSize = _fntConfig ? _fntConfig.fontSize : comp.fontSize;
                layout.horizontalAlign = comp.horizontalAlign;
                layout.verticalAlign = comp.verticalAlign;
                layout.spacingX = comp.spacingX;
                const overflow = comp.overflow;
                layout.overFlow = overflow;
                layout.lineHeight = comp.lineHeight;
                outputLayoutData.nodeContentSize.width = trans.width;
                outputLayoutData.nodeContentSize.height = trans.height;
                if (overflow === Overflow$1.NONE) {
                  layout.wrapping = false;
                  outputLayoutData.nodeContentSize.width += shareLabelInfo.margin * 2;
                  outputLayoutData.nodeContentSize.height += shareLabelInfo.margin * 2;
                } else if (overflow === Overflow$1.RESIZE_HEIGHT) {
                  layout.wrapping = true;
                  outputLayoutData.nodeContentSize.height += shareLabelInfo.margin * 2;
                } else {
                  layout.wrapping = comp.enableWrapText;
                }
                outputRenderData.uiTransAnchorX = trans.anchorX;
                outputRenderData.uiTransAnchorY = trans.anchorY;
                shareLabelInfo.lineHeight = comp.lineHeight;
                shareLabelInfo.fontSize = comp.fontSize;
                style.spriteFrame = _spriteFrame;
                style.fntConfig = _fntConfig;
                style.fontFamily = shareLabelInfo.fontFamily;
                style.color.set(comp.color);
              },
              updateRenderData(comp) {
                if (!comp.renderData) {
                  return;
                }
                if (_comp === comp) {
                  return;
                }
                if (comp.renderData.vertDirty) {
                  _comp = comp;
                  _uiTrans = _comp.node._uiProps.uiTransformComp;
                  const renderData = comp.renderData;
                  const processing = TextProcessing.instance;
                  const style = comp.textStyle;
                  const layout = comp.textLayout;
                  const outputLayoutData = comp.textLayoutData;
                  const outputRenderData = comp.textRenderData;
                  style.fontScale = view.getScaleX();
                  this._updateFontFamily(comp);
                  this.updateProcessingData(style, layout, outputLayoutData, outputRenderData, comp, _uiTrans);
                  this._updateLabelInfo(comp);
                  style.fontDesc = shareLabelInfo.fontDesc;
                  processing.processingString(true, style, layout, outputLayoutData, comp.string);
                  outputRenderData.quadCount = 0;
                  processing.generateRenderInfo(true, style, layout, outputLayoutData, outputRenderData, comp.string, this.generateVertexData);
                  let isResized = false;
                  if (renderData.dataLength !== outputRenderData.quadCount) {
                    this.resetRenderData(comp);
                    renderData.dataLength = outputRenderData.quadCount;
                    renderData.resize(renderData.dataLength, renderData.dataLength / 2 * 3);
                    isResized = true;
                  }
                  const datalist = renderData.data;
                  for (let i = 0, l = outputRenderData.quadCount; i < l; i++) {
                    datalist[i] = outputRenderData.vertexBuffer[i];
                  }
                  const indexCount = renderData.indexCount;
                  this.createQuadIndices(indexCount);
                  renderData.chunk.setIndexBuffer(QUAD_INDICES$5);
                  _comp.actualFontSize = style.actualFontSize;
                  _uiTrans.setContentSize(outputLayoutData.nodeContentSize);
                  this.updateUVs(comp);
                  if (_comp.renderEntity.colorDirty || isResized) {
                    this.updateColor(comp);
                    _comp.node._uiProps.colorDirty = false;
                  }
                  renderData.vertDirty = false;
                  _comp = null;
                  this._resetProperties();
                }
                if (comp.spriteFrame) {
                  const renderData = comp.renderData;
                  renderData.updateRenderData(comp, comp.spriteFrame);
                }
              },
              updateUVs(label) {
                const renderData = label.renderData;
                const vData = renderData.chunk.vb;
                const vertexCount = renderData.vertexCount;
                const dataList = renderData.data;
                let vertexOffset = 3;
                for (let i = 0; i < vertexCount; i++) {
                  const vert = dataList[i];
                  vData[vertexOffset] = vert.u;
                  vData[vertexOffset + 1] = vert.v;
                  vertexOffset += 9;
                }
              },
              updateColor(label) {
                {
                  const renderData = label.renderData;
                  const vertexCount = renderData.vertexCount;
                  if (vertexCount === 0) return;
                  const vData = renderData.chunk.vb;
                  const stride = renderData.floatStride;
                  let colorOffset = 5;
                  const color = label.color;
                  const colorR = color.r / 255;
                  const colorG = color.g / 255;
                  const colorB = color.b / 255;
                  const colorA = color.a / 255;
                  for (let i = 0; i < vertexCount; i++) {
                    vData[colorOffset] = colorR;
                    vData[colorOffset + 1] = colorG;
                    vData[colorOffset + 2] = colorB;
                    vData[colorOffset + 3] = colorA;
                    colorOffset += stride;
                  }
                }
              },
              resetRenderData(comp) {
                const renderData = comp.renderData;
                renderData.dataLength = 0;
                renderData.resize(0, 0);
              },
              generateVertexData(style, outputLayoutData, outputRenderData, offset, spriteFrame, rect, rotated, x, y) {
                const dataOffset = offset;
                const scale = style.bmfontScale;
                const dataList = outputRenderData.vertexBuffer;
                const texW = spriteFrame.width;
                const texH = spriteFrame.height;
                const rectWidth = rect.width;
                const rectHeight = rect.height;
                let l = 0;
                let b = 0;
                let t = 0;
                let r = 0;
                if (!rotated) {
                  l = rect.x / texW;
                  r = (rect.x + rectWidth) / texW;
                  b = (rect.y + rectHeight) / texH;
                  t = rect.y / texH;
                  dataList[dataOffset].u = l;
                  dataList[dataOffset].v = b;
                  dataList[dataOffset + 1].u = r;
                  dataList[dataOffset + 1].v = b;
                  dataList[dataOffset + 2].u = l;
                  dataList[dataOffset + 2].v = t;
                  dataList[dataOffset + 3].u = r;
                  dataList[dataOffset + 3].v = t;
                } else {
                  l = rect.x / texW;
                  r = (rect.x + rectHeight) / texW;
                  b = (rect.y + rectWidth) / texH;
                  t = rect.y / texH;
                  dataList[dataOffset].u = l;
                  dataList[dataOffset].v = t;
                  dataList[dataOffset + 1].u = l;
                  dataList[dataOffset + 1].v = b;
                  dataList[dataOffset + 2].u = r;
                  dataList[dataOffset + 2].v = t;
                  dataList[dataOffset + 3].u = r;
                  dataList[dataOffset + 3].v = b;
                }
                dataList[dataOffset].x = x;
                dataList[dataOffset].y = y - rectHeight * scale;
                dataList[dataOffset + 1].x = x + rectWidth * scale;
                dataList[dataOffset + 1].y = y - rectHeight * scale;
                dataList[dataOffset + 2].x = x;
                dataList[dataOffset + 2].y = y;
                dataList[dataOffset + 3].x = x + rectWidth * scale;
                dataList[dataOffset + 3].y = y;
              },
              _updateFontFamily(comp) {
                const fontAsset = comp.font;
                _spriteFrame = fontAsset.spriteFrame;
                _fntConfig = fontAsset.fntConfig;
                shareLabelInfo.fontAtlas = fontAsset.fontDefDictionary;
                if (!shareLabelInfo.fontAtlas) {
                  if (comp.cacheMode === CacheMode.CHAR) {
                    shareLabelInfo.fontAtlas = _defaultLetterAtlas;
                  } else {
                    shareLabelInfo.fontAtlas = _defaultFontAtlas;
                  }
                }
                dynamicAtlasManager.packToDynamicAtlas(comp, _spriteFrame);
              },
              _updateLabelInfo(comp) {
                shareLabelInfo.hash = '';
                shareLabelInfo.margin = 0;
              },
              _resetProperties() {
                _fntConfig = null;
                _spriteFrame = null;
                shareLabelInfo.hash = '';
                shareLabelInfo.margin = 0;
              },
              createQuadIndices(indexCount) {
                if (indexCount % 6 !== 0) {
                  console.error('illegal index count!');
                  return;
                }
                const quadCount = indexCount / 6;
                QUAD_INDICES$5 = null;
                QUAD_INDICES$5 = new Uint16Array(indexCount);
                let offset = 0;
                for (let i = 0; i < quadCount; i++) {
                  QUAD_INDICES$5[offset++] = 0 + i * 4;
                  QUAD_INDICES$5[offset++] = 1 + i * 4;
                  QUAD_INDICES$5[offset++] = 2 + i * 4;
                  QUAD_INDICES$5[offset++] = 1 + i * 4;
                  QUAD_INDICES$5[offset++] = 3 + i * 4;
                  QUAD_INDICES$5[offset++] = 2 + i * 4;
                }
              }
            };

            const tempColor$1 = new Color(255, 255, 255, 255);
            const bmfont = {
              createData(comp) {
                const renderData = comp.requestRenderData();
                renderData.resize(0, 0);
                return renderData;
              },
              fillBuffers(comp, renderer) {
                const node = comp.node;
                tempColor$1.set(comp.color);
                tempColor$1.a = node._uiProps.opacity * 255;
                fillMeshVertices3D(node, renderer, comp.renderData, tempColor$1);
              },
              appendQuad(comp, spriteFrame, rect, rotated, x, y, scale) {
                const renderData = comp.renderData;
                if (!renderData) {
                  return;
                }
                const dataOffset = renderData.dataLength;
                renderData.dataLength += 4;
                renderData.resize(renderData.dataLength, renderData.dataLength / 2 * 3);
                const dataList = renderData.data;
                const texW = spriteFrame.width;
                const texH = spriteFrame.height;
                const rectWidth = rect.width;
                const rectHeight = rect.height;
                let l = 0;
                let b = 0;
                let t = 0;
                let r = 0;
                if (!rotated) {
                  l = rect.x / texW;
                  r = (rect.x + rectWidth) / texW;
                  b = (rect.y + rectHeight) / texH;
                  t = rect.y / texH;
                  dataList[dataOffset].u = l;
                  dataList[dataOffset].v = b;
                  dataList[dataOffset + 1].u = r;
                  dataList[dataOffset + 1].v = b;
                  dataList[dataOffset + 2].u = l;
                  dataList[dataOffset + 2].v = t;
                  dataList[dataOffset + 3].u = r;
                  dataList[dataOffset + 3].v = t;
                } else {
                  l = rect.x / texW;
                  r = (rect.x + rectHeight) / texW;
                  b = (rect.y + rectWidth) / texH;
                  t = rect.y / texH;
                  dataList[dataOffset].u = l;
                  dataList[dataOffset].v = t;
                  dataList[dataOffset + 1].u = l;
                  dataList[dataOffset + 1].v = b;
                  dataList[dataOffset + 2].u = r;
                  dataList[dataOffset + 2].v = t;
                  dataList[dataOffset + 3].u = r;
                  dataList[dataOffset + 3].v = b;
                }
                dataList[dataOffset].x = x;
                dataList[dataOffset].y = y - rectHeight * scale;
                dataList[dataOffset + 1].x = x + rectWidth * scale;
                dataList[dataOffset + 1].y = y - rectHeight * scale;
                dataList[dataOffset + 2].x = x;
                dataList[dataOffset + 2].y = y;
                dataList[dataOffset + 3].x = x + rectWidth * scale;
                dataList[dataOffset + 3].y = y;
              }
            };
            addon(bmfont, bmfontUtils);

            const _atlasWidth = 1024;
            const _atlasHeight = 1024;
            let _shareAtlas = null;
            const letterFont = mixin(bmfontUtils, {
              getAssemblerData() {
                if (!_shareAtlas) {
                  _shareAtlas = new LetterAtlas(_atlasWidth, _atlasHeight);
                }
                return _shareAtlas.getTexture();
              },
              _updateFontFamily(comp) {
                shareLabelInfo.fontAtlas = _shareAtlas;
                shareLabelInfo.fontFamily = this._getFontFamily(comp);
                const isOutlined = comp.enableOutline && comp.outlineWidth > 0;
                if (isOutlined) {
                  shareLabelInfo.isOutlined = true;
                  shareLabelInfo.margin = comp.outlineWidth;
                  shareLabelInfo.out = comp.outlineColor.clone();
                  shareLabelInfo.out.a = comp.outlineColor.a * comp.color.a / 255.0;
                } else {
                  shareLabelInfo.isOutlined = false;
                  shareLabelInfo.margin = 0;
                }
              },
              _getFontFamily(comp) {
                let fontFamily = 'Arial';
                if (!comp.useSystemFont) {
                  if (comp.font) {
                    fontFamily = comp.font._nativeAsset || 'Arial';
                  }
                } else {
                  fontFamily = comp.fontFamily || 'Arial';
                }
                return fontFamily;
              },
              _updateLabelInfo(comp) {
                shareLabelInfo.fontDesc = this._getFontDesc();
                shareLabelInfo.color = comp.color;
                shareLabelInfo.hash = computeHash(shareLabelInfo);
              },
              _getFontDesc() {
                let fontDesc = `${shareLabelInfo.fontSize.toString()}px `;
                fontDesc += shareLabelInfo.fontFamily;
                return fontDesc;
              }
            });

            const tempColor = new Color(255, 255, 255, 255);
            const letter = {
              createData(comp) {
                const renderData = comp.requestRenderData();
                renderData.resize(0, 0);
                return renderData;
              },
              fillBuffers(comp, renderer) {
                if (!comp.renderData) {
                  return;
                }
                const node = comp.node;
                tempColor.a = node._uiProps.opacity * 255;
                fillMeshVertices3D(node, renderer, comp.renderData, tempColor);
              },
              updateColor(label) {
                {
                  const renderData = label.renderData;
                  const vertexCount = renderData.vertexCount;
                  if (vertexCount === 0) return;
                  const vData = renderData.chunk.vb;
                  const stride = renderData.floatStride;
                  let colorOffset = 5;
                  for (let i = 0; i < vertexCount; i++) {
                    vData[colorOffset] = 1;
                    vData[colorOffset + 1] = 1;
                    vData[colorOffset + 2] = 1;
                    vData[colorOffset + 3] = 1;
                    colorOffset += stride;
                  }
                }
              }
            };
            addon(letter, letterFont);

            const Overflow = Label.Overflow;
            const ttfUtils = {
              updateProcessingData(style, layout, outputLayoutData, outputRenderData, comp, trans) {
                style.isSystemFontUsed = comp.useSystemFont;
                style.fontSize = comp.fontSize;
                outputLayoutData.nodeContentSize.width = outputLayoutData.canvasSize.width = trans.width;
                outputLayoutData.nodeContentSize.height = outputLayoutData.canvasSize.height = trans.height;
                layout.lineHeight = comp.lineHeight;
                layout.overFlow = comp.overflow;
                if (comp.overflow === Overflow.NONE) {
                  layout.wrapping = false;
                } else if (comp.overflow === Overflow.RESIZE_HEIGHT) {
                  layout.wrapping = true;
                } else {
                  layout.wrapping = comp.enableWrapText;
                }
                style.isBold = comp.isBold;
                style.isItalic = comp.isItalic;
                style.isUnderline = comp.isUnderline;
                style.underlineHeight = comp.underlineHeight;
                const isOutlined = comp.enableOutline && comp.outlineWidth > 0;
                if (isOutlined) {
                  style.isOutlined = true;
                  style.outlineColor.set(comp.outlineColor);
                  style.outlineWidth = comp.outlineWidth;
                } else {
                  style.isOutlined = false;
                }
                const isShadow = comp.enableShadow && (comp.shadowBlur > 0 || !approx(comp.shadowOffset.x, 0) || !approx(comp.shadowOffset.y, 0));
                if (isShadow) {
                  style.hasShadow = true;
                  style.shadowColor.set(comp.shadowColor);
                  style.shadowBlur = comp.shadowBlur;
                  style.shadowOffsetX = comp.shadowOffset.x;
                  style.shadowOffsetY = comp.shadowOffset.y;
                } else {
                  style.hasShadow = false;
                }
                style.color.set(comp.color);
                outputRenderData.texture = comp.spriteFrame;
                outputRenderData.uiTransAnchorX = trans.anchorX;
                outputRenderData.uiTransAnchorY = trans.anchorY;
                layout.horizontalAlign = comp.horizontalAlign;
                layout.verticalAlign = comp.verticalAlign;
              },
              getAssemblerData() {
                const sharedLabelData = Label._canvasPool.get();
                sharedLabelData.canvas.width = sharedLabelData.canvas.height = 1;
                return sharedLabelData;
              },
              resetAssemblerData(assemblerData) {
                if (assemblerData) {
                  Label._canvasPool.put(assemblerData);
                }
              },
              updateRenderData(comp) {
                if (!comp.renderData) {
                  return;
                }
                if (comp.renderData.vertDirty) {
                  const trans = comp.node._uiProps.uiTransformComp;
                  const processing = TextProcessing.instance;
                  const style = comp.textStyle;
                  const layout = comp.textLayout;
                  const outputLayoutData = comp.textLayoutData;
                  const outputRenderData = comp.textRenderData;
                  style.fontScale = view.getScaleX();
                  this.updateProcessingData(style, layout, outputLayoutData, outputRenderData, comp, trans);
                  processing.setCanvasUsed(comp.assemblerData.canvas, comp.assemblerData.context);
                  style.fontFamily = this._updateFontFamily(comp);
                  this._resetDynamicAtlas(comp);
                  processing.processingString(false, style, layout, outputLayoutData, comp.string);
                  processing.generateRenderInfo(false, style, layout, outputLayoutData, outputRenderData, comp.string, this.generateVertexData);
                  const renderData = comp.renderData;
                  renderData.textureDirty = true;
                  this._calDynamicAtlas(comp, outputLayoutData);
                  comp.actualFontSize = style.actualFontSize;
                  trans.setContentSize(outputLayoutData.nodeContentSize);
                  const datalist = renderData.data;
                  datalist[0] = outputRenderData.vertexBuffer[0];
                  datalist[1] = outputRenderData.vertexBuffer[1];
                  datalist[2] = outputRenderData.vertexBuffer[2];
                  datalist[3] = outputRenderData.vertexBuffer[3];
                  this.updateUVs(comp);
                  comp.renderData.vertDirty = false;
                  comp.contentWidth = outputLayoutData.nodeContentSize.width;
                }
                if (comp.spriteFrame) {
                  const renderData = comp.renderData;
                  renderData.updateRenderData(comp, comp.spriteFrame);
                }
              },
              generateVertexData(style, outputLayoutData, outputRenderData) {
                const data = outputRenderData.vertexBuffer;
                const width = outputLayoutData.nodeContentSize.width;
                const height = outputLayoutData.nodeContentSize.height;
                const appX = outputRenderData.uiTransAnchorX * width;
                const appY = outputRenderData.uiTransAnchorY * height;
                data[0].x = -appX;
                data[0].y = -appY;
                data[1].x = width - appX;
                data[1].y = -appY;
                data[2].x = -appX;
                data[2].y = height - appY;
                data[3].x = width - appX;
                data[3].y = height - appY;
              },
              updateVertexData(comp) {},
              updateUVs(comp) {},
              _updateFontFamily(comp) {
                let _fontFamily = '';
                if (!comp.useSystemFont) {
                  if (comp.font) {
                    _fontFamily = comp.font._nativeAsset || 'Arial';
                  } else {
                    _fontFamily = 'Arial';
                  }
                } else {
                  _fontFamily = comp.fontFamily || 'Arial';
                }
                return _fontFamily;
              },
              _calDynamicAtlas(comp, outputLayoutData) {
                if (comp.cacheMode !== Label.CacheMode.BITMAP || outputLayoutData.canvasSize.width <= 0 || outputLayoutData.canvasSize.height <= 0) return;
                const frame = comp.ttfSpriteFrame;
                dynamicAtlasManager.packToDynamicAtlas(comp, frame);
              },
              _resetDynamicAtlas(comp) {
                if (comp.cacheMode !== Label.CacheMode.BITMAP) return;
                const frame = comp.ttfSpriteFrame;
                dynamicAtlasManager.deleteAtlasSpriteFrame(frame);
                frame._resetDynamicAtlasFrame();
              }
            };

            const WHITE = Color.WHITE.clone();
            const QUAD_INDICES$4 = Uint16Array.from([0, 1, 2, 1, 3, 2]);
            const ttf = {
              createData(comp) {
                const renderData = comp.requestRenderData();
                renderData.dataLength = 4;
                renderData.resize(4, 6);
                comp.textRenderData.quadCount = 4;
                const vData = renderData.chunk.vb;
                vData[3] = vData[21] = vData[22] = vData[31] = 0;
                vData[4] = vData[12] = vData[13] = vData[30] = 1;
                let offset = 5;
                for (let i = 0; i < 4; i++) {
                  Color.toArray(vData, WHITE, offset);
                  offset += 9;
                }
                renderData.chunk.setIndexBuffer(QUAD_INDICES$4);
                return renderData;
              },
              fillBuffers(comp, renderer) {
                const renderData = comp.renderData;
                const chunk = renderData.chunk;
                const dataList = renderData.data;
                const node = comp.node;
                const vData = chunk.vb;
                const m = node.worldMatrix;
                const stride = renderData.floatStride;
                let offset = 0;
                const length = dataList.length;
                for (let i = 0; i < length; i++) {
                  const curData = dataList[i];
                  const x = curData.x;
                  const y = curData.y;
                  let rhw = m.m03 * x + m.m07 * y + m.m15;
                  rhw = rhw ? 1 / rhw : 1;
                  offset = i * stride;
                  vData[offset + 0] = (m.m00 * x + m.m04 * y + m.m12) * rhw;
                  vData[offset + 1] = (m.m01 * x + m.m05 * y + m.m13) * rhw;
                  vData[offset + 2] = (m.m02 * x + m.m06 * y + m.m14) * rhw;
                }
                const vid = chunk.vertexOffset;
                const meshBuffer = chunk.meshBuffer;
                const ib = chunk.meshBuffer.iData;
                let indexOffset = meshBuffer.indexOffset;
                ib[indexOffset++] = vid;
                ib[indexOffset++] = vid + 1;
                ib[indexOffset++] = vid + 2;
                ib[indexOffset++] = vid + 2;
                ib[indexOffset++] = vid + 1;
                ib[indexOffset++] = vid + 3;
                meshBuffer.indexOffset += 6;
              },
              updateVertexData(comp) {
                const renderData = comp.renderData;
                if (!renderData) {
                  return;
                }
                const uiTrans = comp.node._uiProps.uiTransformComp;
                const width = uiTrans.width;
                const height = uiTrans.height;
                const appX = uiTrans.anchorX * width;
                const appY = uiTrans.anchorY * height;
                const data = renderData.data;
                data[0].x = -appX;
                data[0].y = -appY;
                data[1].x = width - appX;
                data[1].y = -appY;
                data[2].x = -appX;
                data[2].y = height - appY;
                data[3].x = width - appX;
                data[3].y = height - appY;
              },
              updateUVs(comp) {
                const renderData = comp.renderData;
                if (!renderData || !comp.ttfSpriteFrame) {
                  return;
                }
                const vData = renderData.chunk.vb;
                const uv = comp.ttfSpriteFrame.uv;
                vData[3] = uv[0];
                vData[4] = uv[1];
                vData[12] = uv[2];
                vData[13] = uv[3];
                vData[21] = uv[4];
                vData[22] = uv[5];
                vData[30] = uv[6];
                vData[31] = uv[7];
              },
              updateColor(comp) {}
            };
            addon(ttf, ttfUtils);

            const labelAssembler = exports('l', {
              getAssembler(comp) {
                let assembler = ttf;
                if (comp.font instanceof BitmapFont) {
                  assembler = bmfont;
                } else if (comp.cacheMode === Label.CacheMode.CHAR) {
                  assembler = letter;
                }
                return assembler;
              }
            });
            Label.Assembler = labelAssembler;

            const FillType$1 = Sprite.FillType;
            const m$3 = new Mat4();
            const QUAD_INDICES$3 = Uint16Array.from([0, 1, 2, 1, 3, 2]);
            const barFilled = {
              updateRenderData(sprite) {
                const frame = sprite.spriteFrame;
                dynamicAtlasManager.packToDynamicAtlas(sprite, frame);
                const renderData = sprite.renderData;
                if (renderData && frame) {
                  const vertDirty = renderData.vertDirty;
                  if (!vertDirty) {
                    return;
                  }
                  let fillStart = sprite.fillStart;
                  let fillRange = sprite.fillRange;
                  if (fillRange < 0) {
                    fillStart += fillRange;
                    fillRange = -fillRange;
                  }
                  fillRange = fillStart + fillRange;
                  fillStart = fillStart > 1.0 ? 1.0 : fillStart;
                  fillStart = fillStart < 0.0 ? 0.0 : fillStart;
                  fillRange = fillRange > 1.0 ? 1.0 : fillRange;
                  fillRange = fillRange < 0.0 ? 0.0 : fillRange;
                  fillRange -= fillStart;
                  fillRange = fillRange < 0 ? 0 : fillRange;
                  let fillEnd = fillStart + fillRange;
                  fillEnd = fillEnd > 1 ? 1 : fillEnd;
                  this.updateUVs(sprite, fillStart, fillEnd);
                  this.updateVertexData(sprite, fillStart, fillEnd);
                  renderData.updateRenderData(sprite, frame);
                }
              },
              updateUVs(sprite, fillStart, fillEnd) {
                const spriteFrame = sprite.spriteFrame;
                const renderData = sprite.renderData;
                const vData = renderData.chunk.vb;
                const atlasWidth = spriteFrame.width;
                const atlasHeight = spriteFrame.height;
                const textureRect = spriteFrame.rect;
                let ul = 0;
                let vb = 0;
                let ur = 0;
                let vt = 0;
                let quadUV0 = 0;
                let quadUV1 = 0;
                let quadUV2 = 0;
                let quadUV3 = 0;
                let quadUV4 = 0;
                let quadUV5 = 0;
                let quadUV6 = 0;
                let quadUV7 = 0;
                if (spriteFrame.isRotated()) {
                  ul = textureRect.x / atlasWidth;
                  vb = (textureRect.y + textureRect.width) / atlasHeight;
                  ur = (textureRect.x + textureRect.height) / atlasWidth;
                  vt = textureRect.y / atlasHeight;
                  quadUV0 = quadUV2 = ul;
                  quadUV4 = quadUV6 = ur;
                  quadUV3 = quadUV7 = vb;
                  quadUV1 = quadUV5 = vt;
                } else {
                  ul = textureRect.x / atlasWidth;
                  vb = (textureRect.y + textureRect.height) / atlasHeight;
                  ur = (textureRect.x + textureRect.width) / atlasWidth;
                  vt = textureRect.y / atlasHeight;
                  quadUV0 = quadUV4 = ul;
                  quadUV2 = quadUV6 = ur;
                  quadUV1 = quadUV3 = vb;
                  quadUV5 = quadUV7 = vt;
                }
                switch (sprite.fillType) {
                  case FillType$1.HORIZONTAL:
                    vData[3] = quadUV0 + (quadUV2 - quadUV0) * fillStart;
                    vData[4] = quadUV1 + (quadUV3 - quadUV1) * fillStart;
                    vData[12] = quadUV0 + (quadUV2 - quadUV0) * fillEnd;
                    vData[13] = quadUV1 + (quadUV3 - quadUV1) * fillEnd;
                    vData[21] = quadUV4 + (quadUV6 - quadUV4) * fillStart;
                    vData[22] = quadUV5 + (quadUV7 - quadUV5) * fillStart;
                    vData[30] = quadUV4 + (quadUV6 - quadUV4) * fillEnd;
                    vData[31] = quadUV5 + (quadUV7 - quadUV5) * fillEnd;
                    break;
                  case FillType$1.VERTICAL:
                    vData[3] = quadUV0 + (quadUV4 - quadUV0) * fillStart;
                    vData[4] = quadUV1 + (quadUV5 - quadUV1) * fillStart;
                    vData[12] = quadUV2 + (quadUV6 - quadUV2) * fillStart;
                    vData[13] = quadUV3 + (quadUV7 - quadUV3) * fillStart;
                    vData[21] = quadUV0 + (quadUV4 - quadUV0) * fillEnd;
                    vData[22] = quadUV1 + (quadUV5 - quadUV1) * fillEnd;
                    vData[30] = quadUV2 + (quadUV6 - quadUV2) * fillEnd;
                    vData[31] = quadUV3 + (quadUV7 - quadUV3) * fillEnd;
                    break;
                  default:
                    errorID(2626);
                    break;
                }
              },
              updateVertexData(sprite, fillStart, fillEnd) {
                const renderData = sprite.renderData;
                const dataList = renderData.data;
                const uiTrans = sprite.node._uiProps.uiTransformComp;
                const width = uiTrans.width;
                const height = uiTrans.height;
                const appX = uiTrans.anchorX * width;
                const appY = uiTrans.anchorY * height;
                let l = -appX;
                let b = -appY;
                let r = width - appX;
                let t = height - appY;
                let progressStart = 0;
                let progressEnd = 0;
                switch (sprite.fillType) {
                  case FillType$1.HORIZONTAL:
                    progressStart = l + (r - l) * fillStart;
                    progressEnd = l + (r - l) * fillEnd;
                    l = progressStart;
                    r = progressEnd;
                    break;
                  case FillType$1.VERTICAL:
                    progressStart = b + (t - b) * fillStart;
                    progressEnd = b + (t - b) * fillEnd;
                    b = progressStart;
                    t = progressEnd;
                    break;
                  default:
                    errorID(2626);
                    break;
                }
                dataList[0].x = l;
                dataList[0].y = b;
                dataList[1].x = r;
                dataList[1].y = b;
                dataList[2].x = l;
                dataList[2].y = t;
                dataList[3].x = r;
                dataList[3].y = t;
              },
              createData(sprite) {
                const renderData = sprite.requestRenderData();
                renderData.dataLength = 4;
                renderData.resize(4, 6);
                renderData.chunk.setIndexBuffer(QUAD_INDICES$3);
                const dataList = renderData.data;
                for (const data of dataList) {
                  data.z = 0;
                }
                return renderData;
              },
              updateWorldVertexData(sprite, chunk) {
                const node = sprite.node;
                node.getWorldMatrix(m$3);
                const renderData = sprite.renderData;
                const stride = renderData.floatStride;
                const dataList = sprite.renderData.data;
                const vData = chunk.vb;
                let offset = 0;
                for (let i = 0; i < 4; i++) {
                  const local = dataList[i];
                  const x = local.x;
                  const y = local.y;
                  let rhw = m$3.m03 * x + m$3.m07 * y + m$3.m15;
                  rhw = rhw ? 1 / rhw : 1;
                  offset = i * stride;
                  vData[offset] = (m$3.m00 * x + m$3.m04 * y + m$3.m12) * rhw;
                  vData[offset + 1] = (m$3.m01 * x + m$3.m05 * y + m$3.m13) * rhw;
                  vData[offset + 2] = (m$3.m02 * x + m$3.m06 * y + m$3.m14) * rhw;
                }
              },
              fillBuffers(sprite, renderer) {
                const renderData = sprite.renderData;
                const chunk = renderData.chunk;
                if (sprite._flagChangedVersion !== sprite.node.flagChangedVersion || renderData.vertDirty) {
                  this.updateWorldVertexData(sprite, chunk);
                  renderData.vertDirty = false;
                  sprite._flagChangedVersion = sprite.node.flagChangedVersion;
                }
                chunk.bufferId;
                const vid = chunk.vertexOffset;
                const meshBuffer = chunk.meshBuffer;
                const ib = chunk.meshBuffer.iData;
                let indexOffset = meshBuffer.indexOffset;
                ib[indexOffset++] = vid;
                ib[indexOffset++] = vid + 1;
                ib[indexOffset++] = vid + 2;
                ib[indexOffset++] = vid + 2;
                ib[indexOffset++] = vid + 1;
                ib[indexOffset++] = vid + 3;
                meshBuffer.indexOffset += 6;
              },
              updateColor(sprite) {
                const renderData = sprite.renderData;
                const vData = renderData.chunk.vb;
                const stride = renderData.floatStride;
                let colorOffset = 5;
                const color = sprite.color;
                const colorR = color.r / 255;
                const colorG = color.g / 255;
                const colorB = color.b / 255;
                const colorA = sprite.node._uiProps.opacity;
                for (let i = 0; i < 4; i++) {
                  vData[colorOffset] = colorR;
                  vData[colorOffset + 1] = colorG;
                  vData[colorOffset + 2] = colorB;
                  vData[colorOffset + 3] = colorA;
                  colorOffset += stride;
                }
              }
            };

            const PI_2 = Math.PI * 2;
            const EPSILON = 1e-6;
            const m$2 = new Mat4();
            const _vertPos = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];
            const _vertices = new Array(4);
            const _uvs = new Array(8);
            const _intersectPoint_1 = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];
            const _intersectPoint_2 = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];
            const _center = new Vec2();
            const _triangles = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];
            let QUAD_INDICES$2 = null;
            function _calcIntersectedPoints(left, right, bottom, top, center, angle, intersectPoints) {
              let sinAngle = Math.sin(angle);
              sinAngle = Math.abs(sinAngle) > EPSILON ? sinAngle : 0;
              let cosAngle = Math.cos(angle);
              cosAngle = Math.abs(cosAngle) > EPSILON ? cosAngle : 0;
              let tanAngle = 0;
              let cotAngle = 0;
              if (cosAngle !== 0) {
                tanAngle = sinAngle / cosAngle;
                if ((left - center.x) * cosAngle > 0) {
                  const yLeft = center.y + tanAngle * (left - center.x);
                  intersectPoints[0].x = left;
                  intersectPoints[0].y = yLeft;
                }
                if ((right - center.x) * cosAngle > 0) {
                  const yRight = center.y + tanAngle * (right - center.x);
                  intersectPoints[2].x = right;
                  intersectPoints[2].y = yRight;
                }
              }
              if (sinAngle !== 0) {
                cotAngle = cosAngle / sinAngle;
                if ((top - center.y) * sinAngle > 0) {
                  const xTop = center.x + cotAngle * (top - center.y);
                  intersectPoints[3].x = xTop;
                  intersectPoints[3].y = top;
                }
                if ((bottom - center.y) * sinAngle > 0) {
                  const xBottom = center.x + cotAngle * (bottom - center.y);
                  intersectPoints[1].x = xBottom;
                  intersectPoints[1].y = bottom;
                }
              }
            }
            function _calculateVertices(sprite) {
              const uiTrans = sprite.node._uiProps.uiTransformComp;
              const width = uiTrans.width;
              const height = uiTrans.height;
              const appX = uiTrans.anchorX * width;
              const appY = uiTrans.anchorY * height;
              const l = -appX;
              const b = -appY;
              const r = width - appX;
              const t = height - appY;
              const vertices = _vertices;
              vertices[0] = l;
              vertices[1] = b;
              vertices[2] = r;
              vertices[3] = t;
              const fillCenter = sprite.fillCenter;
              const cx = _center.x = Math.min(Math.max(0, fillCenter.x), 1) * (r - l) + l;
              const cy = _center.y = Math.min(Math.max(0, fillCenter.y), 1) * (t - b) + b;
              _vertPos[0].x = _vertPos[3].x = l;
              _vertPos[1].x = _vertPos[2].x = r;
              _vertPos[0].y = _vertPos[1].y = b;
              _vertPos[2].y = _vertPos[3].y = t;
              for (const num of _triangles) {
                Vec2.set(num, 0, 0);
              }
              if (cx !== vertices[0]) {
                Vec2.set(_triangles[0], 3, 0);
              }
              if (cx !== vertices[2]) {
                Vec2.set(_triangles[2], 1, 2);
              }
              if (cy !== vertices[1]) {
                Vec2.set(_triangles[1], 0, 1);
              }
              if (cy !== vertices[3]) {
                Vec2.set(_triangles[3], 2, 3);
              }
            }
            function _calculateUVs(spriteFrame) {
              const atlasWidth = spriteFrame.width;
              const atlasHeight = spriteFrame.height;
              const textureRect = spriteFrame.getRect();
              let u0 = 0;
              let u1 = 0;
              let v0 = 0;
              let v1 = 0;
              const uvs = _uvs;
              if (spriteFrame.isRotated()) {
                u0 = textureRect.x / atlasWidth;
                u1 = (textureRect.x + textureRect.height) / atlasWidth;
                v0 = textureRect.y / atlasHeight;
                v1 = (textureRect.y + textureRect.width) / atlasHeight;
                uvs[0] = uvs[2] = u0;
                uvs[4] = uvs[6] = u1;
                uvs[3] = uvs[7] = v1;
                uvs[1] = uvs[5] = v0;
              } else {
                u0 = textureRect.x / atlasWidth;
                u1 = (textureRect.x + textureRect.width) / atlasWidth;
                v0 = textureRect.y / atlasHeight;
                v1 = (textureRect.y + textureRect.height) / atlasHeight;
                uvs[0] = uvs[4] = u0;
                uvs[2] = uvs[6] = u1;
                uvs[1] = uvs[3] = v1;
                uvs[5] = uvs[7] = v0;
              }
            }
            function _getVertAngle(start, end) {
              const placementX = end.x - start.x;
              const placementY = end.y - start.y;
              if (placementX === 0 && placementY === 0) {
                return 0;
              } else if (placementX === 0) {
                if (placementY > 0) {
                  return Math.PI * 0.5;
                } else {
                  return Math.PI * 1.5;
                }
              } else {
                let angle = Math.atan(placementY / placementX);
                if (placementX < 0) {
                  angle += Math.PI;
                }
                return angle;
              }
            }
            function _generateTriangle(dataList, offset, vert0, vert1, vert2) {
              const vertices = _vertices;
              const v0x = vertices[0];
              const v0y = vertices[1];
              const v1x = vertices[2];
              const v1y = vertices[3];
              dataList[offset].x = vert0.x;
              dataList[offset].y = vert0.y;
              dataList[offset + 1].x = vert1.x;
              dataList[offset + 1].y = vert1.y;
              dataList[offset + 2].x = vert2.x;
              dataList[offset + 2].y = vert2.y;
              let progressX = 0;
              let progressY = 0;
              progressX = (vert0.x - v0x) / (v1x - v0x);
              progressY = (vert0.y - v0y) / (v1y - v0y);
              _generateUV(progressX, progressY, dataList, offset);
              progressX = (vert1.x - v0x) / (v1x - v0x);
              progressY = (vert1.y - v0y) / (v1y - v0y);
              _generateUV(progressX, progressY, dataList, offset + 1);
              progressX = (vert2.x - v0x) / (v1x - v0x);
              progressY = (vert2.y - v0y) / (v1y - v0y);
              _generateUV(progressX, progressY, dataList, offset + 2);
            }
            function _generateUV(progressX, progressY, data, offset) {
              const uvs = _uvs;
              const px1 = uvs[0] + (uvs[2] - uvs[0]) * progressX;
              const px2 = uvs[4] + (uvs[6] - uvs[4]) * progressX;
              const py1 = uvs[1] + (uvs[3] - uvs[1]) * progressX;
              const py2 = uvs[5] + (uvs[7] - uvs[5]) * progressX;
              const uv = data[offset];
              uv.u = px1 + (px2 - px1) * progressY;
              uv.v = py1 + (py2 - py1) * progressY;
            }
            const radialFilled = {
              useModel: false,
              createData(sprite) {
                return sprite.requestRenderData();
              },
              updateRenderData(sprite) {
                const frame = sprite.spriteFrame;
                dynamicAtlasManager.packToDynamicAtlas(sprite, frame);
                this.updateUVs(sprite);
                const renderData = sprite.renderData;
                if (renderData && frame) {
                  if (!renderData.vertDirty) {
                    return;
                  }
                  const dataList = renderData.data;
                  let fillStart = sprite.fillStart;
                  let fillRange = sprite.fillRange;
                  if (fillRange < 0) {
                    fillStart += fillRange;
                    fillRange = -fillRange;
                  }
                  while (fillStart >= 1.0) {
                    fillStart -= 1.0;
                  }
                  while (fillStart < 0.0) {
                    fillStart += 1.0;
                  }
                  fillStart *= PI_2;
                  fillRange *= PI_2;
                  const fillEnd = fillStart + fillRange;
                  _calculateVertices(sprite);
                  _calculateUVs(frame);
                  _calcIntersectedPoints(_vertices[0], _vertices[2], _vertices[1], _vertices[3], _center, fillStart, _intersectPoint_1);
                  _calcIntersectedPoints(_vertices[0], _vertices[2], _vertices[1], _vertices[3], _center, fillStart + fillRange, _intersectPoint_2);
                  let offset = 0;
                  for (let triangleIndex = 0; triangleIndex < 4; ++triangleIndex) {
                    const triangle = _triangles[triangleIndex];
                    if (!triangle) {
                      continue;
                    }
                    if (fillRange >= PI_2) {
                      renderData.dataLength = offset + 3;
                      _generateTriangle(dataList, offset, _center, _vertPos[triangle.x], _vertPos[triangle.y]);
                      offset += 3;
                      continue;
                    }
                    let startAngle = _getVertAngle(_center, _vertPos[triangle.x]);
                    let endAngle = _getVertAngle(_center, _vertPos[triangle.y]);
                    if (endAngle < startAngle) {
                      endAngle += PI_2;
                    }
                    startAngle -= PI_2;
                    endAngle -= PI_2;
                    for (let testIndex = 0; testIndex < 3; ++testIndex) {
                      if (startAngle >= fillEnd) ; else if (startAngle >= fillStart) {
                        renderData.dataLength = offset + 3;
                        if (endAngle >= fillEnd) {
                          _generateTriangle(dataList, offset, _center, _vertPos[triangle.x], _intersectPoint_2[triangleIndex]);
                        } else {
                          _generateTriangle(dataList, offset, _center, _vertPos[triangle.x], _vertPos[triangle.y]);
                        }
                        offset += 3;
                      } else if (endAngle > fillStart) {
                        if (endAngle <= fillEnd) {
                          renderData.dataLength = offset + 3;
                          _generateTriangle(dataList, offset, _center, _intersectPoint_1[triangleIndex], _vertPos[triangle.y]);
                          offset += 3;
                        } else {
                          renderData.dataLength = offset + 3;
                          _generateTriangle(dataList, offset, _center, _intersectPoint_1[triangleIndex], _intersectPoint_2[triangleIndex]);
                          offset += 3;
                        }
                      }
                      startAngle += PI_2;
                      endAngle += PI_2;
                    }
                  }
                  if (offset === 0) {
                    renderData.dataLength = 0;
                  }
                  renderData.resize(offset, offset);
                  {
                    const indexCount = renderData.indexCount;
                    this.createQuadIndices(indexCount);
                    renderData.chunk.setIndexBuffer(QUAD_INDICES$2);
                    this.updateWorldUVData(sprite);
                    sprite.renderEntity.colorDirty = true;
                  }
                  renderData.updateRenderData(sprite, frame);
                }
              },
              createQuadIndices(indexCount) {
                QUAD_INDICES$2 = null;
                QUAD_INDICES$2 = new Uint16Array(indexCount);
                let offset = 0;
                for (let i = 0; i < indexCount; i++) {
                  QUAD_INDICES$2[offset++] = i;
                }
              },
              fillBuffers(comp, renderer) {
                const node = comp.node;
                const renderData = comp.renderData;
                const chunk = renderData.chunk;
                if (comp._flagChangedVersion !== node.flagChangedVersion || renderData.vertDirty) {
                  this.updateWorldVertexAndUVData(comp, chunk);
                  renderData.vertDirty = false;
                  comp._flagChangedVersion = node.flagChangedVersion;
                }
                this.updateColorLate(comp);
                chunk.bufferId;
                const vid = chunk.vertexOffset;
                const meshBuffer = chunk.meshBuffer;
                const ib = chunk.meshBuffer.iData;
                const indexOffset = meshBuffer.indexOffset;
                for (let i = 0; i < renderData.indexCount; i++) {
                  ib[indexOffset + i] = vid + i;
                }
                meshBuffer.indexOffset += renderData.indexCount;
                meshBuffer.setDirty();
              },
              updateWorldUVData(sprite, chunk) {
                const renderData = sprite.renderData;
                const stride = renderData.floatStride;
                const dataList = renderData.data;
                const vData = renderData.chunk.vb;
                for (let i = 0; i < dataList.length; i++) {
                  const offset = i * stride;
                  vData[offset + 3] = dataList[i].u;
                  vData[offset + 4] = dataList[i].v;
                }
              },
              updateWorldVertexAndUVData(sprite, chunk) {
                const node = sprite.node;
                node.getWorldMatrix(m$2);
                const renderData = sprite.renderData;
                const stride = renderData.floatStride;
                const dataList = sprite.renderData.data;
                const vData = chunk.vb;
                const vertexCount = renderData.vertexCount;
                let vertexOffset = 0;
                for (let i = 0; i < vertexCount; i++) {
                  const vert = dataList[i];
                  const x = vert.x;
                  const y = vert.y;
                  let rhw = m$2.m03 * x + m$2.m07 * y + m$2.m15;
                  rhw = rhw ? 1 / rhw : 1;
                  vData[vertexOffset + 0] = (m$2.m00 * x + m$2.m04 * y + m$2.m12) * rhw;
                  vData[vertexOffset + 1] = (m$2.m01 * x + m$2.m05 * y + m$2.m13) * rhw;
                  vData[vertexOffset + 2] = (m$2.m02 * x + m$2.m06 * y + m$2.m14) * rhw;
                  vData[vertexOffset + 3] = vert.u;
                  vData[vertexOffset + 4] = vert.v;
                  vertexOffset += stride;
                }
              },
              updateUVs(sprite) {
                const renderData = sprite.renderData;
                renderData.vertDirty = true;
                sprite.markForUpdateRenderData();
              },
              updateColorLate(sprite) {
                const renderData = sprite.renderData;
                const vData = renderData.chunk.vb;
                const stride = renderData.floatStride;
                const vertexCount = renderData.vertexCount;
                let colorOffset = 5;
                const color = sprite.color;
                const colorR = color.r / 255;
                const colorG = color.g / 255;
                const colorB = color.b / 255;
                const colorA = sprite.node._uiProps.opacity;
                for (let i = 0; i < vertexCount; i++) {
                  vData[colorOffset] = colorR;
                  vData[colorOffset + 1] = colorG;
                  vData[colorOffset + 2] = colorB;
                  vData[colorOffset + 3] = colorA;
                  colorOffset += stride;
                }
              },
              updateColor(sprite) {}
            };

            const QUAD_INDICES$1 = Uint16Array.from([0, 1, 2, 1, 3, 2]);
            const simple = {
              createData(sprite) {
                const renderData = sprite.requestRenderData();
                renderData.dataLength = 4;
                renderData.resize(4, 6);
                renderData.chunk.setIndexBuffer(QUAD_INDICES$1);
                return renderData;
              },
              updateRenderData(sprite) {
                const frame = sprite.spriteFrame;
                dynamicAtlasManager.packToDynamicAtlas(sprite, frame);
                this.updateUVs(sprite);
                const renderData = sprite.renderData;
                if (renderData && frame) {
                  if (renderData.vertDirty) {
                    this.updateVertexData(sprite);
                  }
                  renderData.updateRenderData(sprite, frame);
                }
              },
              updateWorldVerts(sprite, chunk) {
                const renderData = sprite.renderData;
                const vData = chunk.vb;
                const dataList = renderData.data;
                const node = sprite.node;
                const m = node.worldMatrix;
                const stride = renderData.floatStride;
                let offset = 0;
                const length = dataList.length;
                for (let i = 0; i < length; i++) {
                  const curData = dataList[i];
                  const x = curData.x;
                  const y = curData.y;
                  let rhw = m.m03 * x + m.m07 * y + m.m15;
                  rhw = rhw ? 1 / rhw : 1;
                  offset = i * stride;
                  vData[offset + 0] = (m.m00 * x + m.m04 * y + m.m12) * rhw;
                  vData[offset + 1] = (m.m01 * x + m.m05 * y + m.m13) * rhw;
                  vData[offset + 2] = (m.m02 * x + m.m06 * y + m.m14) * rhw;
                }
              },
              fillBuffers(sprite, renderer) {
                if (sprite === null) {
                  return;
                }
                const renderData = sprite.renderData;
                const chunk = renderData.chunk;
                if (sprite._flagChangedVersion !== sprite.node.flagChangedVersion || renderData.vertDirty) {
                  this.updateWorldVerts(sprite, chunk);
                  renderData.vertDirty = false;
                  sprite._flagChangedVersion = sprite.node.flagChangedVersion;
                }
                const vidOrigin = chunk.vertexOffset;
                const meshBuffer = chunk.meshBuffer;
                const ib = chunk.meshBuffer.iData;
                let indexOffset = meshBuffer.indexOffset;
                const vid = vidOrigin;
                ib[indexOffset++] = vid;
                ib[indexOffset++] = vid + 1;
                ib[indexOffset++] = vid + 2;
                ib[indexOffset++] = vid + 1;
                ib[indexOffset++] = vid + 3;
                ib[indexOffset++] = vid + 2;
                meshBuffer.indexOffset += 6;
              },
              updateVertexData(sprite) {
                const renderData = sprite.renderData;
                if (!renderData) {
                  return;
                }
                const uiTrans = sprite.node._uiProps.uiTransformComp;
                const dataList = renderData.data;
                const cw = uiTrans.width;
                const ch = uiTrans.height;
                const appX = uiTrans.anchorX * cw;
                const appY = uiTrans.anchorY * ch;
                let l = 0;
                let b = 0;
                let r = 0;
                let t = 0;
                if (sprite.trim) {
                  l = -appX;
                  b = -appY;
                  r = cw - appX;
                  t = ch - appY;
                } else {
                  const frame = sprite.spriteFrame;
                  const originSize = frame.originalSize;
                  const ow = originSize.width;
                  const oh = originSize.height;
                  const scaleX = cw / ow;
                  const scaleY = ch / oh;
                  const trimmedBorder = frame.trimmedBorder;
                  l = trimmedBorder.x * scaleX - appX;
                  b = trimmedBorder.z * scaleY - appY;
                  r = cw + trimmedBorder.y * scaleX - appX;
                  t = ch + trimmedBorder.w * scaleY - appY;
                }
                dataList[0].x = l;
                dataList[0].y = b;
                dataList[1].x = r;
                dataList[1].y = b;
                dataList[2].x = l;
                dataList[2].y = t;
                dataList[3].x = r;
                dataList[3].y = t;
                renderData.vertDirty = true;
              },
              updateUVs(sprite) {
                if (!sprite.spriteFrame) return;
                const renderData = sprite.renderData;
                const vData = renderData.chunk.vb;
                const uv = sprite.spriteFrame.uv;
                vData[3] = uv[0];
                vData[4] = uv[1];
                vData[12] = uv[2];
                vData[13] = uv[3];
                vData[21] = uv[4];
                vData[22] = uv[5];
                vData[30] = uv[6];
                vData[31] = uv[7];
              },
              updateColor(sprite) {
                const renderData = sprite.renderData;
                const vData = renderData.chunk.vb;
                let colorOffset = 5;
                const color = sprite.color;
                const colorR = color.r / 255;
                const colorG = color.g / 255;
                const colorB = color.b / 255;
                const colorA = color.a / 255;
                for (let i = 0; i < 4; i++, colorOffset += renderData.floatStride) {
                  vData[colorOffset] = colorR;
                  vData[colorOffset + 1] = colorG;
                  vData[colorOffset + 2] = colorB;
                  vData[colorOffset + 3] = colorA;
                }
              }
            };

            const m$1 = new Mat4();
            const tempRenderData$1 = [];
            for (let i = 0; i < 4; i++) {
              tempRenderData$1.push({
                x: 0,
                y: 0,
                z: 0,
                u: 0,
                v: 0,
                color: new Color()
              });
            }
            const sliced = {
              createData(sprite) {
                const renderData = sprite.requestRenderData();
                renderData.dataLength = 16;
                renderData.resize(16, 54);
                this.QUAD_INDICES = new Uint16Array(54);
                this.createQuadIndices(4, 4);
                renderData.chunk.setIndexBuffer(this.QUAD_INDICES);
                return renderData;
              },
              createQuadIndices(vertexRow, vertexCol) {
                let offset = 0;
                for (let curRow = 0; curRow < vertexRow - 1; curRow++) {
                  for (let curCol = 0; curCol < vertexCol - 1; curCol++) {
                    const vid = curRow * vertexCol + curCol;
                    this.QUAD_INDICES[offset++] = vid;
                    this.QUAD_INDICES[offset++] = vid + 1;
                    this.QUAD_INDICES[offset++] = vid + vertexCol;
                    this.QUAD_INDICES[offset++] = vid + 1;
                    this.QUAD_INDICES[offset++] = vid + 1 + vertexCol;
                    this.QUAD_INDICES[offset++] = vid + vertexCol;
                  }
                }
              },
              updateRenderData(sprite) {
                const frame = sprite.spriteFrame;
                dynamicAtlasManager.packToDynamicAtlas(sprite, frame);
                this.updateUVs(sprite);
                const renderData = sprite.renderData;
                if (renderData && frame) {
                  const vertDirty = renderData.vertDirty;
                  if (vertDirty) {
                    this.updateVertexData(sprite);
                  }
                  renderData.updateRenderData(sprite, frame);
                }
              },
              updateVertexData(sprite) {
                const renderData = sprite.renderData;
                const dataList = renderData.data;
                const uiTrans = sprite.node._uiProps.uiTransformComp;
                const width = uiTrans.width;
                const height = uiTrans.height;
                const appX = uiTrans.anchorX * width;
                const appY = uiTrans.anchorY * height;
                const frame = sprite.spriteFrame;
                const leftWidth = frame.insetLeft;
                const rightWidth = frame.insetRight;
                const topHeight = frame.insetTop;
                const bottomHeight = frame.insetBottom;
                let sizableWidth = width - leftWidth - rightWidth;
                let sizableHeight = height - topHeight - bottomHeight;
                let xScale = width / (leftWidth + rightWidth);
                let yScale = height / (topHeight + bottomHeight);
                xScale = Number.isNaN(xScale) || xScale > 1 ? 1 : xScale;
                yScale = Number.isNaN(yScale) || yScale > 1 ? 1 : yScale;
                sizableWidth = sizableWidth < 0 ? 0 : sizableWidth;
                sizableHeight = sizableHeight < 0 ? 0 : sizableHeight;
                tempRenderData$1[0].x = -appX;
                tempRenderData$1[0].y = -appY;
                tempRenderData$1[1].x = leftWidth * xScale - appX;
                tempRenderData$1[1].y = bottomHeight * yScale - appY;
                tempRenderData$1[2].x = tempRenderData$1[1].x + sizableWidth;
                tempRenderData$1[2].y = tempRenderData$1[1].y + sizableHeight;
                tempRenderData$1[3].x = width - appX;
                tempRenderData$1[3].y = height - appY;
                for (let curRow = 0; curRow < 4; curRow++) {
                  for (let curCol = 0; curCol < 4; curCol++) {
                    const curIndex = curRow * 4 + curCol;
                    if (curIndex < renderData.dataLength && curRow < tempRenderData$1.length && curCol < tempRenderData$1.length) {
                      dataList[curIndex].x = tempRenderData$1[curCol].x;
                      dataList[curIndex].y = tempRenderData$1[curRow].y;
                    }
                  }
                }
              },
              fillBuffers(sprite, renderer) {
                const renderData = sprite.renderData;
                const chunk = renderData.chunk;
                if (sprite._flagChangedVersion !== sprite.node.flagChangedVersion || renderData.vertDirty) {
                  this.updateWorldVertexData(sprite, chunk);
                  renderData.vertDirty = false;
                  sprite._flagChangedVersion = sprite.node.flagChangedVersion;
                }
                chunk.bufferId;
                const vid = chunk.vertexOffset;
                const meshBuffer = chunk.meshBuffer;
                const ib = chunk.meshBuffer.iData;
                let indexOffset = meshBuffer.indexOffset;
                for (let r = 0; r < 3; ++r) {
                  for (let c = 0; c < 3; ++c) {
                    const start = vid + r * 4 + c;
                    ib[indexOffset++] = start;
                    ib[indexOffset++] = start + 1;
                    ib[indexOffset++] = start + 4;
                    ib[indexOffset++] = start + 1;
                    ib[indexOffset++] = start + 5;
                    ib[indexOffset++] = start + 4;
                  }
                }
                meshBuffer.indexOffset = indexOffset;
              },
              updateWorldVertexData(sprite, chunk) {
                const node = sprite.node;
                node.getWorldMatrix(m$1);
                const renderData = sprite.renderData;
                const stride = renderData.floatStride;
                const dataList = renderData.data;
                const vData = chunk.vb;
                let offset = 0;
                for (let row = 0; row < 4; ++row) {
                  const rowD = dataList[row * 4];
                  for (let col = 0; col < 4; ++col) {
                    const colD = dataList[col];
                    const x = colD.x;
                    const y = rowD.y;
                    let rhw = m$1.m03 * x + m$1.m07 * y + m$1.m15;
                    rhw = rhw ? 1 / rhw : 1;
                    offset = (row * 4 + col) * stride;
                    vData[offset + 0] = (m$1.m00 * x + m$1.m04 * y + m$1.m12) * rhw;
                    vData[offset + 1] = (m$1.m01 * x + m$1.m05 * y + m$1.m13) * rhw;
                    vData[offset + 2] = (m$1.m02 * x + m$1.m06 * y + m$1.m14) * rhw;
                  }
                }
              },
              updateUVs(sprite) {
                if (!sprite.spriteFrame) return;
                const renderData = sprite.renderData;
                const vData = renderData.chunk.vb;
                const stride = renderData.floatStride;
                const uv = sprite.spriteFrame.uvSliced;
                let uvOffset = 3;
                for (let i = 0; i < 16; i++) {
                  vData[uvOffset] = uv[i].u;
                  vData[uvOffset + 1] = uv[i].v;
                  uvOffset += stride;
                }
              },
              updateColor(sprite) {
                const renderData = sprite.renderData;
                const vData = renderData.chunk.vb;
                const stride = renderData.floatStride;
                let colorOffset = 5;
                const color = sprite.color;
                const colorR = color.r / 255;
                const colorG = color.g / 255;
                const colorB = color.b / 255;
                const colorA = sprite.node._uiProps.opacity;
                for (let i = 0; i < 16; i++) {
                  vData[colorOffset] = colorR;
                  vData[colorOffset + 1] = colorG;
                  vData[colorOffset + 2] = colorB;
                  vData[colorOffset + 3] = colorA;
                  colorOffset += stride;
                }
              }
            };

            const m = new Mat4();
            let origin;
            let leftInner;
            let rightInner;
            let rightOuter;
            let bottomInner;
            let topInner;
            let topOuter;
            let tempRenderDataLength = 0;
            const tempRenderData = [];
            let QUAD_INDICES = null;
            function has9SlicedOffsetVertexCount(spriteFrame) {
              if (spriteFrame) {
                if (spriteFrame.insetTop > 0 || spriteFrame.insetBottom > 0 || spriteFrame.insetLeft > 0 || spriteFrame.insetRight > 0) {
                  return 2;
                }
              }
              return 0;
            }
            const tiled = {
              createData(sprite) {
                return sprite.requestRenderData();
              },
              updateRenderData(sprite) {
                const renderData = sprite.renderData;
                const frame = sprite.spriteFrame;
                if (!frame || !renderData) {
                  return;
                }
                if (!renderData.vertDirty) {
                  return;
                }
                const uiTrans = sprite.node._uiProps.uiTransformComp;
                const contentWidth = Math.abs(uiTrans.width);
                const contentHeight = Math.abs(uiTrans.height);
                const rect = frame.getRect();
                const leftWidth = frame.insetLeft;
                const rightWidth = frame.insetRight;
                const centerWidth = rect.width - leftWidth - rightWidth;
                const topHeight = frame.insetTop;
                const bottomHeight = frame.insetBottom;
                const centerHeight = rect.height - topHeight - bottomHeight;
                let sizableWidth = contentWidth - leftWidth - rightWidth;
                let sizableHeight = contentHeight - topHeight - bottomHeight;
                sizableWidth = sizableWidth > 0 ? sizableWidth : 0;
                sizableHeight = sizableHeight > 0 ? sizableHeight : 0;
                const hRepeat = centerWidth === 0 ? sizableWidth : sizableWidth / centerWidth;
                const vRepeat = centerHeight === 0 ? sizableHeight : sizableHeight / centerHeight;
                const offsetVertexCount = has9SlicedOffsetVertexCount(frame);
                const row = Math.ceil(vRepeat + offsetVertexCount);
                const col = Math.ceil(hRepeat + offsetVertexCount);
                renderData.dataLength = row * 2 * (col * 2);
                this.updateVerts(sprite, sizableWidth, sizableHeight, row, col);
                if (renderData.vertexCount !== row * col * 4) {
                  sprite.renderEntity.colorDirty = true;
                }
                renderData.resize(row * col * 4, row * col * 6);
                {
                  const indexCount = renderData.indexCount;
                  this.createQuadIndices(indexCount);
                  renderData.chunk.setIndexBuffer(QUAD_INDICES);
                  this.updateWorldUVData(sprite);
                }
                renderData.updateRenderData(sprite, frame);
              },
              createQuadIndices(indexCount) {
                if (indexCount % 6 !== 0) {
                  error('illegal index count!');
                  return;
                }
                const quadCount = indexCount / 6;
                QUAD_INDICES = null;
                QUAD_INDICES = new Uint16Array(indexCount);
                let offset = 0;
                for (let i = 0; i < quadCount; i++) {
                  QUAD_INDICES[offset++] = 0 + i * 4;
                  QUAD_INDICES[offset++] = 1 + i * 4;
                  QUAD_INDICES[offset++] = 2 + i * 4;
                  QUAD_INDICES[offset++] = 1 + i * 4;
                  QUAD_INDICES[offset++] = 3 + i * 4;
                  QUAD_INDICES[offset++] = 2 + i * 4;
                }
              },
              updateUVs(sprite) {
                const renderData = sprite.renderData;
                renderData.vertDirty = true;
                sprite.markForUpdateRenderData();
              },
              fillBuffers(sprite, renderer) {
                const node = sprite.node;
                const renderData = sprite.renderData;
                const chunk = renderData.chunk;
                if (chunk === null) {
                  return;
                }
                if (sprite._flagChangedVersion !== node.flagChangedVersion || renderData.vertDirty) {
                  this.updateWorldVertexAndUVData(sprite, chunk);
                  renderData.vertDirty = false;
                  sprite._flagChangedVersion = node.flagChangedVersion;
                }
                this.updateColorLate(sprite);
                chunk.bufferId;
                let vid = chunk.vertexOffset;
                const meshBuffer = chunk.meshBuffer;
                const ib = chunk.meshBuffer.iData;
                let indexOffset = meshBuffer.indexOffset;
                for (let i = 0; i < renderData.indexCount; i += 6) {
                  ib[indexOffset++] = vid;
                  ib[indexOffset++] = vid + 1;
                  ib[indexOffset++] = vid + 2;
                  ib[indexOffset++] = vid + 1;
                  ib[indexOffset++] = vid + 3;
                  ib[indexOffset++] = vid + 2;
                  vid += 4;
                  meshBuffer.indexOffset += 6;
                }
                meshBuffer.setDirty();
              },
              updateWorldUVData(sprite) {
                const renderData = sprite.renderData;
                const stride = renderData.floatStride;
                const dataList = renderData.data;
                const vData = renderData.chunk.vb;
                for (let i = 0; i < dataList.length; i++) {
                  const offset = i * stride;
                  vData[offset + 3] = dataList[i].u;
                  vData[offset + 4] = dataList[i].v;
                }
              },
              updateWorldVertexAndUVData(sprite, chunk) {
                const node = sprite.node;
                node.getWorldMatrix(m);
                const renderData = sprite.renderData;
                const stride = renderData.floatStride;
                const dataList = renderData.data;
                const vData = chunk.vb;
                const length = dataList.length;
                for (let i = 0; i < length; i++) {
                  const x = dataList[i].x;
                  const y = dataList[i].y;
                  const z = dataList[i].z;
                  let rhw = m.m03 * x + m.m07 * y + m.m11 * z + m.m15;
                  rhw = rhw ? 1 / rhw : 1;
                  const offset = i * stride;
                  vData[offset] = (m.m00 * x + m.m04 * y + m.m08 * z + m.m12) * rhw;
                  vData[offset + 1] = (m.m01 * x + m.m05 * y + m.m09 * z + m.m13) * rhw;
                  vData[offset + 2] = (m.m02 * x + m.m06 * y + m.m10 * z + m.m14) * rhw;
                }
                this.updateWorldUVData(sprite);
              },
              updateVerts(sprite, sizableWidth, sizableHeight, row, col) {
                const uiTrans = sprite.node._uiProps.uiTransformComp;
                const renderData = sprite.renderData;
                const dataList = renderData.data;
                const frame = sprite.spriteFrame;
                const rect = frame.rect;
                const contentWidth = Math.abs(uiTrans.width);
                const contentHeight = Math.abs(uiTrans.height);
                const appx = uiTrans.anchorX * contentWidth;
                const appy = uiTrans.anchorY * contentHeight;
                const leftWidth = frame.insetLeft;
                const rightWidth = frame.insetRight;
                const centerWidth = rect.width - leftWidth - rightWidth;
                const topHeight = frame.insetTop;
                const bottomHeight = frame.insetBottom;
                const centerHeight = rect.height - topHeight - bottomHeight;
                const xScale = uiTrans.width / (leftWidth + rightWidth) > 1 ? 1 : uiTrans.width / (leftWidth + rightWidth);
                const yScale = uiTrans.height / (topHeight + bottomHeight) > 1 ? 1 : uiTrans.height / (topHeight + bottomHeight);
                let offsetWidth = 0;
                let offsetHeight = 0;
                if (centerWidth > 0) {
                  offsetWidth = Math.floor(sizableWidth * 1000) / 1000 % centerWidth === 0 ? centerWidth : sizableWidth % centerWidth;
                } else {
                  offsetWidth = sizableWidth;
                }
                if (centerHeight > 0) {
                  offsetHeight = Math.floor(sizableHeight * 1000) / 1000 % centerHeight === 0 ? centerHeight : sizableHeight % centerHeight;
                } else {
                  offsetHeight = sizableHeight;
                }
                tempRenderData.length = 0;
                tempRenderDataLength = Math.max(row + 1, col + 1);
                for (let i = 0; i < tempRenderDataLength; i++) {
                  tempRenderData.push({
                    x: 0,
                    y: 0,
                    z: 0,
                    u: 0,
                    v: 0,
                    color: new Color()
                  });
                }
                const offsetVertexCount = has9SlicedOffsetVertexCount(frame);
                if (offsetVertexCount === 0) {
                  for (let i = 0; i < tempRenderDataLength; i++) {
                    if (i >= col) {
                      tempRenderData[i].x = contentWidth - appx;
                    } else {
                      tempRenderData[i].x = -appx + i * centerWidth;
                    }
                    if (i >= row) {
                      tempRenderData[i].y = contentHeight - appy;
                    } else {
                      tempRenderData[i].y = -appy + i * centerHeight;
                    }
                  }
                } else {
                  for (let i = 0; i < tempRenderDataLength; i++) {
                    if (i === 0) {
                      tempRenderData[i].x = -appx;
                    } else if (i === 1) {
                      tempRenderData[i].x = -appx + leftWidth * xScale;
                    } else if (i > 1 && i < col - 1) {
                      if (centerWidth > 0) {
                        tempRenderData[i].x = -appx + leftWidth * xScale + centerWidth * (i - 1);
                      } else {
                        tempRenderData[i].x = leftWidth + sizableWidth - appx;
                      }
                    } else if (i === col - 1) {
                      tempRenderData[i].x = -appx + leftWidth * xScale + offsetWidth + centerWidth * (i - 2);
                    } else if (i >= col) {
                      tempRenderData[i].x = Math.min(leftWidth + sizableWidth + rightWidth, contentWidth) - appx;
                    }
                    if (i === 0) {
                      tempRenderData[i].y = -appy;
                    } else if (i === 1) {
                      tempRenderData[i].y = -appy + bottomHeight * yScale;
                    } else if (i > 1 && i < row - 1) {
                      if (centerHeight > 0) {
                        tempRenderData[i].y = -appy + bottomHeight * yScale + centerHeight * (i - 1);
                      } else {
                        tempRenderData[i].y = bottomHeight + sizableHeight - appy;
                      }
                    } else if (i === row - 1) {
                      tempRenderData[i].y = -appy + bottomHeight * yScale + offsetHeight + centerHeight * (i - 2);
                    } else if (i >= row) {
                      tempRenderData[i].y = Math.min(bottomHeight + sizableHeight + topHeight, contentHeight) - appy;
                    }
                  }
                }
                let x = 0;
                let x1 = 0;
                let y = 0;
                let y1 = 0;
                for (let yIndex = 0; yIndex < row; ++yIndex) {
                  y = tempRenderData[yIndex].y;
                  y1 = tempRenderData[yIndex + 1].y;
                  for (let xIndex = 0; xIndex < col; ++xIndex) {
                    x = tempRenderData[xIndex].x;
                    x1 = tempRenderData[xIndex + 1].x;
                    const curIndex = 4 * (yIndex * col + xIndex);
                    dataList[curIndex].x = x;
                    dataList[curIndex].y = y;
                    dataList[curIndex + 1].x = x1;
                    dataList[curIndex + 1].y = y;
                    dataList[curIndex + 2].x = x;
                    dataList[curIndex + 2].y = y1;
                    dataList[curIndex + 3].x = x1;
                    dataList[curIndex + 3].y = y1;
                  }
                }
                const rotated = frame.rotated;
                frame.uv;
                const uvSliced = frame.uvSliced;
                origin = uvSliced[0];
                leftInner = uvSliced[1];
                rightInner = uvSliced[2];
                rightOuter = uvSliced[3];
                bottomInner = uvSliced[4];
                topInner = uvSliced[8];
                topOuter = uvSliced[12];
                let coefU = 0;
                let coefV = 0;
                const hRepeat = centerWidth === 0 ? sizableWidth : sizableWidth / centerWidth;
                const vRepeat = centerHeight === 0 ? sizableHeight : sizableHeight / centerHeight;
                const tempXVerts = [];
                const tempYVerts = [];
                for (let yIndexUV = 0; yIndexUV < row; ++yIndexUV) {
                  if (sizableHeight > centerHeight) {
                    const curYRectCount = offsetVertexCount > 0 ? yIndexUV : yIndexUV + 1;
                    if (sizableHeight >= curYRectCount * centerHeight) {
                      coefV = 1;
                    } else {
                      coefV = vRepeat % 1;
                    }
                  } else {
                    coefV = vRepeat;
                  }
                  for (let xIndexUV = 0; xIndexUV < col; ++xIndexUV) {
                    if (sizableWidth > centerWidth) {
                      const curXRectCount = offsetVertexCount > 0 ? xIndexUV : xIndexUV + 1;
                      if (sizableWidth >= curXRectCount * centerWidth) {
                        coefU = 1;
                      } else {
                        coefU = hRepeat % 1;
                      }
                    } else {
                      coefU = hRepeat;
                    }
                    if (rotated) {
                      if (offsetVertexCount === 0) {
                        tempXVerts[0] = bottomInner.u;
                        tempXVerts[1] = bottomInner.u;
                        tempXVerts[2] = bottomInner.u + (topInner.u - bottomInner.u) * coefV;
                        tempYVerts[0] = leftInner.v;
                        tempYVerts[1] = leftInner.v + (rightInner.v - leftInner.v) * coefU;
                        tempYVerts[2] = leftInner.v;
                      } else {
                        if (yIndexUV === 0) {
                          tempXVerts[0] = origin.u;
                          tempXVerts[1] = origin.u;
                          tempXVerts[2] = bottomInner.u;
                        } else if (yIndexUV < row - 1) {
                          tempXVerts[0] = bottomInner.u;
                          tempXVerts[1] = bottomInner.u;
                          tempXVerts[2] = bottomInner.u + (topInner.u - bottomInner.u) * coefV;
                        } else if (yIndexUV === row - 1) {
                          tempXVerts[0] = topInner.u;
                          tempXVerts[1] = topInner.u;
                          tempXVerts[2] = topOuter.u;
                        }
                        if (xIndexUV === 0) {
                          tempYVerts[0] = origin.v;
                          tempYVerts[1] = leftInner.v;
                          tempYVerts[2] = origin.v;
                        } else if (xIndexUV < col - 1) {
                          tempYVerts[0] = leftInner.v;
                          tempYVerts[1] = leftInner.v + (rightInner.v - leftInner.v) * coefU;
                          tempYVerts[2] = leftInner.v;
                        } else if (xIndexUV === col - 1) {
                          tempYVerts[0] = rightInner.v;
                          tempYVerts[1] = rightOuter.v;
                          tempYVerts[2] = rightInner.v;
                        }
                      }
                      tempXVerts[3] = tempXVerts[2];
                      tempYVerts[3] = tempYVerts[1];
                    } else {
                      if (offsetVertexCount === 0) {
                        tempXVerts[0] = leftInner.u;
                        tempXVerts[1] = leftInner.u + (rightInner.u - leftInner.u) * coefU;
                        tempXVerts[2] = leftInner.u;
                        tempYVerts[0] = bottomInner.v;
                        tempYVerts[1] = bottomInner.v;
                        tempYVerts[2] = bottomInner.v + (topInner.v - bottomInner.v) * coefV;
                      } else {
                        if (xIndexUV === 0) {
                          tempXVerts[0] = origin.u;
                          tempXVerts[1] = leftInner.u;
                          tempXVerts[2] = origin.u;
                        } else if (xIndexUV < col - 1) {
                          tempXVerts[0] = leftInner.u;
                          tempXVerts[1] = leftInner.u + (rightInner.u - leftInner.u) * coefU;
                          tempXVerts[2] = leftInner.u;
                        } else if (xIndexUV === col - 1) {
                          tempXVerts[0] = rightInner.u;
                          tempXVerts[1] = rightOuter.u;
                          tempXVerts[2] = rightInner.u;
                        }
                        if (yIndexUV === 0) {
                          tempYVerts[0] = origin.v;
                          tempYVerts[1] = origin.v;
                          tempYVerts[2] = bottomInner.v;
                        } else if (yIndexUV < row - 1) {
                          tempYVerts[0] = bottomInner.v;
                          tempYVerts[1] = bottomInner.v;
                          tempYVerts[2] = bottomInner.v + (topInner.v - bottomInner.v) * coefV;
                        } else if (yIndexUV === row - 1) {
                          tempYVerts[0] = topInner.v;
                          tempYVerts[1] = topInner.v;
                          tempYVerts[2] = topOuter.v;
                        }
                      }
                      tempXVerts[3] = tempXVerts[1];
                      tempYVerts[3] = tempYVerts[2];
                    }
                    const curIndex = 4 * (yIndexUV * col + xIndexUV);
                    dataList[curIndex].u = tempXVerts[0];
                    dataList[curIndex].v = tempYVerts[0];
                    dataList[curIndex + 1].u = tempXVerts[1];
                    dataList[curIndex + 1].v = tempYVerts[1];
                    dataList[curIndex + 2].u = tempXVerts[2];
                    dataList[curIndex + 2].v = tempYVerts[2];
                    dataList[curIndex + 3].u = tempXVerts[3];
                    dataList[curIndex + 3].v = tempYVerts[3];
                  }
                }
              },
              updateColorLate(sprite) {
                const renderData = sprite.renderData;
                const vData = renderData.chunk.vb;
                const stride = renderData.floatStride;
                const vertexCount = renderData.vertexCount;
                let colorOffset = 5;
                const color = sprite.color;
                const colorR = color.r / 255;
                const colorG = color.g / 255;
                const colorB = color.b / 255;
                const colorA = sprite.node._uiProps.opacity;
                for (let i = 0; i < vertexCount; i++) {
                  vData[colorOffset] = colorR;
                  vData[colorOffset + 1] = colorG;
                  vData[colorOffset + 2] = colorB;
                  vData[colorOffset + 3] = colorA;
                  colorOffset += stride;
                }
              },
              updateColor(sprite) {}
            };

            const SpriteType = Sprite.Type;
            const FillType = Sprite.FillType;
            const spriteAssembler = exports('s', {
              getAssembler(spriteComp) {
                let util = simple;
                const comp = spriteComp;
                switch (comp.type) {
                  case SpriteType.SLICED:
                    util = sliced;
                    break;
                  case SpriteType.TILED:
                    util = tiled;
                    break;
                  case SpriteType.FILLED:
                    if (comp.fillType === FillType.RADIAL) {
                      util = radialFilled;
                    } else {
                      util = barFilled;
                    }
                    break;
                }
                return util;
              }
            });
            Sprite.Assembler = spriteAssembler;

            const mouseEvents = [Input.EventType.MOUSE_DOWN, Input.EventType.MOUSE_MOVE, Input.EventType.MOUSE_UP, Input.EventType.MOUSE_WHEEL];
            const touchEvents = [Input.EventType.TOUCH_START, Input.EventType.TOUCH_MOVE, Input.EventType.TOUCH_END, Input.EventType.TOUCH_CANCEL];
            class PointerEventDispatcher {
              constructor() {
                this.priority = EventDispatcherPriority.UI;
                this._isListDirty = false;
                this._inDispatchCount = 0;
                this._pointerEventProcessorList = [];
                this._processorListToAdd = [];
                this._processorListToRemove = [];
                input._registerEventDispatcher(this);
                NodeEventProcessor.callbacksInvoker.on(DispatcherEventType.ADD_POINTER_EVENT_PROCESSOR, this.addPointerEventProcessor, this);
                NodeEventProcessor.callbacksInvoker.on(DispatcherEventType.REMOVE_POINTER_EVENT_PROCESSOR, this.removePointerEventProcessor, this);
                NodeEventProcessor.callbacksInvoker.on(DispatcherEventType.MARK_LIST_DIRTY, this._markListDirty, this);
              }
              dispatchEvent(event) {
                const eventType = event.type;
                if (touchEvents.includes(eventType)) {
                  return this.dispatchEventTouch(event);
                } else if (mouseEvents.includes(eventType)) {
                  return this.dispatchEventMouse(event);
                }
                return true;
              }
              addPointerEventProcessor(pointerEventProcessor) {
                if (this._inDispatchCount === 0) {
                  if (!this._pointerEventProcessorList.includes(pointerEventProcessor)) {
                    this._pointerEventProcessorList.push(pointerEventProcessor);
                    this._isListDirty = true;
                  }
                } else if (!this._processorListToAdd.includes(pointerEventProcessor)) {
                  this._processorListToAdd.push(pointerEventProcessor);
                }
                remove(this._processorListToRemove, pointerEventProcessor);
              }
              removePointerEventProcessor(pointerEventProcessor) {
                if (this._inDispatchCount === 0) {
                  remove(this._pointerEventProcessorList, pointerEventProcessor);
                  this._isListDirty = true;
                } else if (!this._processorListToRemove.includes(pointerEventProcessor)) {
                  this._processorListToRemove.push(pointerEventProcessor);
                }
                remove(this._processorListToAdd, pointerEventProcessor);
              }
              dispatchEventMouse(eventMouse) {
                this._inDispatchCount++;
                this._sortPointerEventProcessorList();
                const pointerEventProcessorList = this._pointerEventProcessorList;
                const length = pointerEventProcessorList.length;
                let dispatchToNextEventDispatcher = true;
                for (let i = 0; i < length; ++i) {
                  const pointerEventProcessor = pointerEventProcessorList[i];
                  if (pointerEventProcessor.isEnabled && pointerEventProcessor.shouldHandleEventMouse && pointerEventProcessor._handleEventMouse(eventMouse)) {
                    dispatchToNextEventDispatcher = false;
                    if (!eventMouse.preventSwallow) {
                      break;
                    } else {
                      eventMouse.preventSwallow = false;
                    }
                  }
                }
                if (--this._inDispatchCount <= 0) {
                  this._updatePointerEventProcessorList();
                }
                return dispatchToNextEventDispatcher;
              }
              dispatchEventTouch(eventTouch) {
                this._inDispatchCount++;
                this._sortPointerEventProcessorList();
                const pointerEventProcessorList = this._pointerEventProcessorList;
                const length = pointerEventProcessorList.length;
                const touch = eventTouch.touch;
                let dispatchToNextEventDispatcher = true;
                for (let i = 0; i < length; ++i) {
                  const pointerEventProcessor = pointerEventProcessorList[i];
                  if (pointerEventProcessor.isEnabled && pointerEventProcessor.shouldHandleEventTouch) {
                    if (eventTouch.type === InputEventType.TOUCH_START) {
                      if (pointerEventProcessor._handleEventTouch(eventTouch)) {
                        if (pointerEventProcessor.isEnabled) {
                          pointerEventProcessor.claimedTouchIdList.push(touch.getID());
                        } else {
                          const cancelEvent = new EventTouch([eventTouch.touch], true, InputEventType.TOUCH_CANCEL);
                          cancelEvent.touch = eventTouch.touch;
                          pointerEventProcessor.dispatchEvent(cancelEvent);
                          pointerEventProcessor.claimedTouchIdList.length = 0;
                        }
                        dispatchToNextEventDispatcher = false;
                        if (!eventTouch.preventSwallow) {
                          break;
                        } else {
                          eventTouch.preventSwallow = false;
                        }
                      }
                    } else if (pointerEventProcessor.claimedTouchIdList.length > 0) {
                      const index = pointerEventProcessor.claimedTouchIdList.indexOf(touch.getID());
                      if (index !== -1) {
                        pointerEventProcessor._handleEventTouch(eventTouch);
                        if (eventTouch.type === InputEventType.TOUCH_END || eventTouch.type === InputEventType.TOUCH_CANCEL) {
                          removeAt(pointerEventProcessor.claimedTouchIdList, index);
                        }
                        dispatchToNextEventDispatcher = false;
                        if (!eventTouch.preventSwallow) {
                          break;
                        } else {
                          eventTouch.preventSwallow = false;
                        }
                      }
                    }
                  }
                }
                if (--this._inDispatchCount <= 0) {
                  this._updatePointerEventProcessorList();
                }
                return dispatchToNextEventDispatcher;
              }
              _updatePointerEventProcessorList() {
                const listToAdd = this._processorListToAdd;
                const addLength = listToAdd.length;
                for (let i = 0; i < addLength; ++i) {
                  this.addPointerEventProcessor(listToAdd[i]);
                }
                listToAdd.length = 0;
                const listToRemove = this._processorListToRemove;
                const removeLength = listToRemove.length;
                for (let i = 0; i < removeLength; ++i) {
                  this.removePointerEventProcessor(listToRemove[i]);
                }
                listToRemove.length = 0;
              }
              _sortPointerEventProcessorList() {
                if (!this._isListDirty) {
                  return;
                }
                const pointerEventProcessorList = this._pointerEventProcessorList;
                const length = pointerEventProcessorList.length;
                for (let i = 0; i < length; ++i) {
                  const pointerEventProcessor = pointerEventProcessorList[i];
                  const node = pointerEventProcessor.node;
                  if (node._uiProps) {
                    const trans = node._uiProps.uiTransformComp;
                    pointerEventProcessor.cachedCameraPriority = trans.cameraPriority;
                  }
                }
                pointerEventProcessorList.sort(this._sortByPriority);
                this._isListDirty = false;
              }
              _sortByPriority(p1, p2) {
                const node1 = p1.node;
                const node2 = p2.node;
                if (!p2 || !node2 || !node2.activeInHierarchy || !node2._uiProps.uiTransformComp) {
                  return -1;
                } else if (!p1 || !node1 || !node1.activeInHierarchy || !node1._uiProps.uiTransformComp) {
                  return 1;
                }
                if (p1.cachedCameraPriority !== p2.cachedCameraPriority) {
                  return p2.cachedCameraPriority - p1.cachedCameraPriority;
                }
                let n1 = node1;
                let n2 = node2;
                let ex = false;
                while (((_parent = n1.parent) === null || _parent === void 0 ? void 0 : _parent.uuid) !== ((_parent2 = n2.parent) === null || _parent2 === void 0 ? void 0 : _parent2.uuid)) {
                  var _parent, _parent2, _n, _n$parent, _n2, _n2$parent;
                  n1 = ((_n = n1) === null || _n === void 0 ? void 0 : (_n$parent = _n.parent) === null || _n$parent === void 0 ? void 0 : _n$parent.parent) === null ? (ex = true) && node2 : n1 && n1.parent;
                  n2 = ((_n2 = n2) === null || _n2 === void 0 ? void 0 : (_n2$parent = _n2.parent) === null || _n2$parent === void 0 ? void 0 : _n2$parent.parent) === null ? (ex = true) && node1 : n2 && n2.parent;
                }
                if (n1.uuid === n2.uuid) {
                  if (n1.uuid === node2.uuid) {
                    return -1;
                  }
                  if (n1.uuid === node1.uuid) {
                    return 1;
                  }
                }
                const priority1 = n1 ? n1.getSiblingIndex() : 0;
                const priority2 = n2 ? n2.getSiblingIndex() : 0;
                return ex ? priority1 - priority2 : priority2 - priority1;
              }
              _markListDirty() {
                this._isListDirty = true;
              }
            }
            new PointerEventDispatcher();

            const _dsInfo = new DescriptorSetInfo(null);
            const m4_1 = new Mat4();
            class Batcher2D {
              get nativeObj() {
                return this._nativeObj;
              }
              get currBufferAccessor() {
                if (this._staticVBBuffer) return this._staticVBBuffer;
                this._staticVBBuffer = this.switchBufferAccessor();
                return this._staticVBBuffer;
              }
              get batches() {
                return this._batches;
              }
              set currStaticRoot(value) {
                this._currStaticRoot = value;
              }
              set currIsStatic(value) {
                this._currIsStatic = value;
              }
              constructor(_root) {
                this.device = void 0;
                this._screens = [];
                this._staticVBBuffer = null;
                this._bufferAccessors = new Map();
                this._drawBatchPool = void 0;
                this._batches = void 0;
                this._currBID = -1;
                this._indexStart = 0;
                this._emptyMaterial = new Material();
                this._currRenderData = null;
                this._currMaterial = this._emptyMaterial;
                this._currTexture = null;
                this._currSampler = null;
                this._currStaticRoot = null;
                this._currComponent = null;
                this._currTransform = null;
                this._currTextureHash = 0;
                this._currSamplerHash = 0;
                this._currLayer = 0;
                this._currDepthStencilStateStage = null;
                this._currIsStatic = false;
                this._currHash = 0;
                this._currIsMiddleware = false;
                this._middlewareEnableBatch = false;
                this._middlewareBuffer = null;
                this._middlewareIndexStart = 0;
                this._middlewareIndexCount = 0;
                this._pOpacity = 1;
                this._opacityDirty = 0;
                this._descriptorSetCache = new DescriptorSetCache();
                this._meshDataArray = [];
                this._maskClearModel = null;
                this._maskClearMtl = null;
                this._maskModelMesh = null;
                this._root = _root;
                this.device = _root.device;
                this._batches = new CachedArray(64);
                this._drawBatchPool = new Pool(() => new DrawBatch2D(), 128, obj => obj.destroy(this));
              }
              initialize() {
                return true;
              }
              destroy() {
                for (let i = 0; i < this._batches.length; i++) {
                  if (this._batches.array[i]) {
                    this._batches.array[i].destroy(this);
                  }
                }
                this._batches.destroy();
                for (const accessor of this._bufferAccessors.values()) {
                  accessor.destroy();
                }
                this._bufferAccessors.clear();
                if (this._drawBatchPool) {
                  this._drawBatchPool.destroy();
                }
                this._descriptorSetCache.destroy();
                StencilManager.sharedManager.destroy();
                if (this._maskClearModel && this._maskModelMesh) {
                  legacyCC.director.root.destroyModel(this._maskClearModel);
                  this._maskModelMesh.destroy();
                }
                if (this._maskClearMtl) {
                  this._maskClearMtl.destroy();
                }
              }
              syncRootNodesToNative() {
                {
                  const rootNodes = [];
                  for (const screen of this._screens) {
                    rootNodes.push(screen.node);
                  }
                  this._nativeObj.syncRootNodesToNative(rootNodes);
                }
              }
              addScreen(comp) {
                this._screens.push(comp);
                this._screens.sort(this._screenSort);
                {
                  this.syncRootNodesToNative();
                }
              }
              removeScreen(comp) {
                const idx = this._screens.indexOf(comp);
                if (idx === -1) {
                  return;
                }
                this._screens.splice(idx, 1);
                {
                  this.syncRootNodesToNative();
                }
              }
              sortScreens() {
                this._screens.sort(this._screenSort);
                {
                  this.syncRootNodesToNative();
                }
              }
              getFirstRenderCamera(node) {
                if (node.scene && node.scene.renderScene) {
                  const cameras = node.scene.renderScene.cameras;
                  for (let i = 0; i < cameras.length; i++) {
                    const camera = cameras[i];
                    if (camera.visibility & node.layer) {
                      return camera;
                    }
                  }
                }
                return null;
              }
              update() {
                {
                  return;
                }
              }
              uploadBuffers() {
                {
                  this._nativeObj.uploadBuffers();
                }
              }
              reset() {
                {
                  this._nativeObj.reset();
                }
              }
              switchBufferAccessor(attributes = vfmtPosUvColor) {
                const strideBytes = attributes === vfmtPosUvColor ? 36 : getAttributeStride(attributes);
                if (!this._staticVBBuffer || this._staticVBBuffer.vertexFormatBytes !== strideBytes) {
                  let accessor = this._bufferAccessors.get(strideBytes);
                  if (!accessor) {
                    accessor = new StaticVBAccessor(this.device, attributes);
                    this._bufferAccessors.set(strideBytes, accessor);
                  }
                  this._staticVBBuffer = accessor;
                  this._currBID = -1;
                }
                return this._staticVBBuffer;
              }
              registerBufferAccessor(key, accessor) {
                this._bufferAccessors.set(key, accessor);
              }
              updateBuffer(attributes, bid) {
                const accessor = this.switchBufferAccessor(attributes);
                if (this._currBID !== bid) {
                  this._currBID = bid;
                  this._indexStart = accessor.getMeshBuffer(bid).indexOffset;
                }
              }
              commitComp(comp, renderData, frame, assembler, transform) {
                let dataHash = 0;
                let mat;
                let bufferID = -1;
                if (renderData && renderData.chunk) {
                  if (!renderData.isValid()) return;
                  dataHash = renderData.dataHash;
                  mat = renderData.material;
                  bufferID = renderData.chunk.bufferId;
                }
                if (comp.stencilStage === Stage.ENTER_LEVEL || comp.stencilStage === Stage.ENTER_LEVEL_INVERTED) {
                  this._insertMaskBatch(comp);
                } else {
                  comp.stencilStage = StencilManager.sharedManager.stage;
                }
                const depthStencilStateStage = comp.stencilStage;
                if (this._currHash !== dataHash || dataHash === 0 || this._currMaterial !== mat || this._currDepthStencilStateStage !== depthStencilStateStage) {
                  this.autoMergeBatches(this._currComponent);
                  if (renderData && !renderData._isMeshBuffer) {
                    this.updateBuffer(renderData.vertexFormat, bufferID);
                  }
                  this._currRenderData = renderData;
                  this._currHash = renderData ? renderData.dataHash : 0;
                  this._currComponent = comp;
                  this._currTransform = transform;
                  this._currMaterial = comp.getRenderMaterial(0);
                  this._currDepthStencilStateStage = depthStencilStateStage;
                  this._currLayer = comp.node.layer;
                  if (frame) {
                    {
                      assert(frame.isValid, 'frame should not be invalid, it may have been released');
                    }
                    this._currTexture = frame.getGFXTexture();
                    this._currSampler = frame.getGFXSampler();
                    this._currTextureHash = frame.getHash();
                    this._currSamplerHash = this._currSampler.hash;
                  } else {
                    this._currTexture = null;
                    this._currSampler = null;
                    this._currTextureHash = 0;
                    this._currSamplerHash = 0;
                  }
                }
                assembler.fillBuffers(comp, this);
              }
              commitIA(renderComp, ia, tex, mat, transform) {
                if (this._currMaterial !== this._emptyMaterial) {
                  this.autoMergeBatches(this._currComponent);
                  this.resetRenderStates();
                }
                let depthStencil;
                let dssHash = 0;
                if (renderComp) {
                  renderComp.stencilStage = StencilManager.sharedManager.stage;
                  if (renderComp.customMaterial !== null) {
                    depthStencil = StencilManager.sharedManager.getStencilStage(renderComp.stencilStage, mat);
                  } else {
                    depthStencil = StencilManager.sharedManager.getStencilStage(renderComp.stencilStage);
                  }
                  dssHash = StencilManager.sharedManager.getStencilHash(renderComp.stencilStage);
                }
                const curDrawBatch = this._currStaticRoot ? this._currStaticRoot._requireDrawBatch() : this._drawBatchPool.alloc();
                curDrawBatch.visFlags = renderComp.node.layer;
                curDrawBatch.inputAssembler = ia;
                curDrawBatch.useLocalData = transform || null;
                if (tex) {
                  curDrawBatch.texture = tex.getGFXTexture();
                  curDrawBatch.sampler = tex.getGFXSampler();
                  curDrawBatch.textureHash = tex.getHash();
                  curDrawBatch.samplerHash = curDrawBatch.sampler.hash;
                }
                curDrawBatch.fillPasses(mat || null, depthStencil, dssHash, null);
                this._batches.push(curDrawBatch);
              }
              commitMiddleware(comp, meshBuffer, indexOffset, indexCount, tex, mat, enableBatch) {
                const texture = tex.getGFXTexture();
                if (enableBatch && this._middlewareEnableBatch && this._middlewareBuffer === meshBuffer && this._currTexture === texture && this._currMaterial.hash === mat.hash && this._middlewareIndexStart + this._middlewareIndexCount === indexOffset && this._currLayer === comp.node.layer) {
                  this._middlewareIndexCount += indexCount;
                } else {
                  this.autoMergeBatches(this._currComponent);
                  this.resetRenderStates();
                  this._currComponent = comp;
                  this._currTexture = texture;
                  this._currSampler = tex.getGFXSampler();
                  this._currTextureHash = tex.getHash();
                  this._currLayer = comp.node.layer;
                  this._currSamplerHash = this._currSampler.hash;
                  this._currHash = 0;
                  this._currTransform = enableBatch ? null : comp.node;
                  this._middlewareEnableBatch = enableBatch;
                  this._middlewareBuffer = meshBuffer;
                  this._currMaterial = mat;
                  this._middlewareIndexStart = indexOffset;
                  this._middlewareIndexCount = indexCount;
                }
                this._currIsMiddleware = true;
              }
              commitModel(comp, model, mat) {
                if (this._currMaterial !== this._emptyMaterial) {
                  this.autoMergeBatches(this._currComponent);
                  this.resetRenderStates();
                }
                let depthStencil;
                let dssHash = 0;
                if (mat) {
                  if (comp.stencilStage === Stage.ENTER_LEVEL || comp.stencilStage === Stage.ENTER_LEVEL_INVERTED) {
                    this._insertMaskBatch(comp);
                  } else {
                    comp.stencilStage = StencilManager.sharedManager.stage;
                  }
                  depthStencil = StencilManager.sharedManager.getStencilStage(comp.stencilStage, mat);
                  dssHash = StencilManager.sharedManager.getStencilHash(comp.stencilStage);
                }
                const stamp = legacyCC.director.getTotalFrames();
                if (model) {
                  model.updateTransform(stamp);
                  model.updateUBOs(stamp);
                }
                for (let i = 0; i < model.subModels.length; i++) {
                  const curDrawBatch = this._drawBatchPool.alloc();
                  const subModel = model.subModels[i];
                  curDrawBatch.visFlags = comp.node.layer;
                  curDrawBatch.model = model;
                  curDrawBatch.texture = null;
                  curDrawBatch.sampler = null;
                  curDrawBatch.useLocalData = null;
                  if (!depthStencil) {
                    depthStencil = null;
                  }
                  curDrawBatch.fillPasses(mat, depthStencil, dssHash, subModel.patches);
                  curDrawBatch.inputAssembler = subModel.inputAssembler;
                  curDrawBatch.model.visFlags = curDrawBatch.visFlags;
                  curDrawBatch.descriptorSet = subModel.descriptorSet;
                  this._batches.push(curDrawBatch);
                }
              }
              setupStaticBatch(staticComp, bufferAccessor) {
                this.finishMergeBatches();
                this._staticVBBuffer = bufferAccessor;
                this.currStaticRoot = staticComp;
              }
              endStaticBatch() {
                this.finishMergeBatches();
                this.currStaticRoot = null;
                this._staticVBBuffer = null;
                this.switchBufferAccessor();
              }
              commitStaticBatch(comp) {
                this._batches.concat(comp.drawBatchList);
                this.finishMergeBatches();
              }
              autoMergeBatches(renderComp) {
                if (this._currIsMiddleware) {
                  this.mergeBatchesForMiddleware(renderComp);
                  return;
                }
                const mat = this._currMaterial;
                if (!mat) {
                  return;
                }
                let ia;
                const rd = this._currRenderData;
                const accessor = this._staticVBBuffer;
                if (rd && rd._isMeshBuffer) {
                  ia = rd.requestIA(this.device);
                  if (this._meshDataArray.indexOf(rd) === -1) {
                    this._meshDataArray.push(rd);
                  }
                } else if (accessor) {
                  const bid = this._currBID;
                  const buf = accessor.getMeshBuffer(bid);
                  if (!buf) {
                    return;
                  }
                  const indexCount = buf.indexOffset - this._indexStart;
                  if (indexCount <= 0) return;
                  assertIsTrue(this._indexStart < buf.indexOffset);
                  buf.setDirty();
                  ia = buf.requireFreeIA(this.device);
                  ia.firstIndex = this._indexStart;
                  ia.indexCount = indexCount;
                  this._indexStart = buf.indexOffset;
                }
                this._currBID = -1;
                if (!ia || !this._currTexture) {
                  return;
                }
                let depthStencil;
                let dssHash = 0;
                if (renderComp) {
                  if (renderComp.customMaterial !== null) {
                    depthStencil = StencilManager.sharedManager.getStencilStage(renderComp.stencilStage, mat);
                  } else {
                    depthStencil = StencilManager.sharedManager.getStencilStage(renderComp.stencilStage);
                  }
                  dssHash = StencilManager.sharedManager.getStencilHash(renderComp.stencilStage);
                }
                const curDrawBatch = this._currStaticRoot ? this._currStaticRoot._requireDrawBatch() : this._drawBatchPool.alloc();
                curDrawBatch.visFlags = this._currLayer;
                curDrawBatch.texture = this._currTexture;
                curDrawBatch.sampler = this._currSampler;
                curDrawBatch.inputAssembler = ia;
                curDrawBatch.useLocalData = this._currTransform;
                curDrawBatch.textureHash = this._currTextureHash;
                curDrawBatch.samplerHash = this._currSamplerHash;
                curDrawBatch.fillPasses(mat, depthStencil, dssHash, null);
                this._batches.push(curDrawBatch);
              }
              mergeBatchesForMiddleware(renderComp) {
                let depthStencil;
                let dssHash = 0;
                renderComp.stencilStage = StencilManager.sharedManager.stage;
                if (renderComp.customMaterial !== null) {
                  depthStencil = StencilManager.sharedManager.getStencilStage(renderComp.stencilStage, this._currMaterial);
                } else {
                  depthStencil = StencilManager.sharedManager.getStencilStage(renderComp.stencilStage);
                }
                dssHash = StencilManager.sharedManager.getStencilHash(renderComp.stencilStage);
                const curDrawBatch = this._currStaticRoot ? this._currStaticRoot._requireDrawBatch() : this._drawBatchPool.alloc();
                curDrawBatch.visFlags = renderComp.node.layer;
                const ia = this._middlewareBuffer.requireFreeIA(this.device);
                ia.firstIndex = this._middlewareIndexStart;
                ia.indexCount = this._middlewareIndexCount;
                curDrawBatch.inputAssembler = ia;
                curDrawBatch.useLocalData = this._currTransform;
                curDrawBatch.texture = this._currTexture;
                curDrawBatch.sampler = this._currSampler;
                curDrawBatch.textureHash = this._currTextureHash;
                curDrawBatch.samplerHash = this._currSamplerHash;
                curDrawBatch.fillPasses(this._currMaterial || null, depthStencil, dssHash, null);
                this._batches.push(curDrawBatch);
                this._currIsMiddleware = false;
                this._middlewareBuffer = null;
              }
              forceMergeBatches(material, frame, renderComp) {
                this._currMaterial = material;
                if (frame) {
                  this._currTexture = frame.getGFXTexture();
                  this._currSampler = frame.getGFXSampler();
                  this._currTextureHash = frame.getHash();
                  this._currSamplerHash = this._currSampler.hash;
                } else {
                  this._currTexture = this._currSampler = null;
                  this._currTextureHash = this._currSamplerHash = 0;
                }
                this._currLayer = renderComp.node.layer;
                this.autoMergeBatches(renderComp);
              }
              resetRenderStates() {
                this._currMaterial = this._emptyMaterial;
                this._currRenderData = null;
                this._currTexture = null;
                this._currComponent = null;
                this._currTransform = null;
                this._currTextureHash = 0;
                this._currSamplerHash = 0;
                this._currLayer = 0;
              }
              finishMergeBatches() {
                this.autoMergeBatches();
                this.resetRenderStates();
              }
              flushMaterial(mat) {
                this._currMaterial = mat;
              }
              walk(node, level = 0) {
                if (!node.activeInHierarchy) {
                  return;
                }
                const children = node.children;
                const uiProps = node._uiProps;
                const render = uiProps.uiComp;
                const parentOpacity = this._pOpacity;
                let opacity = parentOpacity;
                const selfOpacity = render && render.color ? render.color.a / 255 : 1;
                this._pOpacity = opacity *= selfOpacity * uiProps.localOpacity;
                uiProps.setOpacity(opacity);
                if (!approx(opacity, 0, EPSILON$1)) {
                  if (uiProps.colorDirty) {
                    this._opacityDirty++;
                  }
                  if (render && render.enabledInHierarchy) {
                    render.fillBuffers(this);
                  }
                  if (this._opacityDirty && render && !render.useVertexOpacity && render.renderData && render.renderData.vertexCount > 0) {
                    updateOpacity(render.renderData, opacity);
                    const buffer = render.renderData.getMeshBuffer();
                    if (buffer) {
                      buffer.setDirty();
                    }
                  }
                  if (children.length > 0 && !node._static) {
                    for (let i = 0; i < children.length; ++i) {
                      const child = children[i];
                      this.walk(child, level);
                    }
                  }
                  if (uiProps.colorDirty) {
                    this._opacityDirty--;
                    uiProps.colorDirty = false;
                  }
                }
                this._pOpacity = parentOpacity;
                if (render && render.enabledInHierarchy) {
                  render.postUpdateAssembler(this);
                  if ((render.stencilStage === Stage.ENTER_LEVEL || render.stencilStage === Stage.ENTER_LEVEL_INVERTED) && StencilManager.sharedManager.getMaskStackSize() > 0) {
                    this.autoMergeBatches(this._currComponent);
                    this.resetRenderStates();
                    StencilManager.sharedManager.exitMask();
                  }
                }
                level += 1;
              }
              _screenSort(a, b) {
                return a.node.getSiblingIndex() - b.node.getSiblingIndex();
              }
              _releaseDescriptorSetCache(textureHash, sampler = null) {
                {
                  this._nativeObj.releaseDescriptorSetCache(textureHash, sampler);
                }
              }
              _createClearModel() {
                if (!this._maskClearModel) {
                  this._maskClearMtl = builtinResMgr.get('default-clear-stencil');
                  this._maskClearModel = legacyCC.director.root.createModel(Model);
                  const stride = getAttributeStride(vfmt);
                  const gfxDevice = deviceManager.gfxDevice;
                  const vertexBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, 4 * stride, stride));
                  const vb = new Float32Array([-1, -1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0]);
                  vertexBuffer.update(vb);
                  const indexBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, 6 * Uint16Array.BYTES_PER_ELEMENT, Uint16Array.BYTES_PER_ELEMENT));
                  const ib = new Uint16Array([0, 1, 2, 2, 1, 3]);
                  indexBuffer.update(ib);
                  this._maskModelMesh = new RenderingSubMesh([vertexBuffer], vfmt, PrimitiveMode.TRIANGLE_LIST, indexBuffer);
                  this._maskModelMesh.subMeshIdx = 0;
                  this._maskClearModel.initSubModel(0, this._maskModelMesh, this._maskClearMtl);
                }
              }
              _insertMaskBatch(comp) {
                this.autoMergeBatches(this._currComponent);
                this.resetRenderStates();
                this._createClearModel();
                this._maskClearModel.node = this._maskClearModel.transform = comp.node;
                const _stencilManager = StencilManager.sharedManager;
                _stencilManager.pushMask(1);
                const stage = _stencilManager.clear(comp);
                let depthStencil;
                let dssHash = 0;
                const mat = this._maskClearMtl;
                if (mat) {
                  depthStencil = _stencilManager.getStencilStage(stage, mat);
                  dssHash = _stencilManager.getStencilHash(stage);
                }
                const model = this._maskClearModel;
                const stamp = legacyCC.director.getTotalFrames();
                if (model) {
                  model.updateTransform(stamp);
                  model.updateUBOs(stamp);
                }
                for (let i = 0; i < model.subModels.length; i++) {
                  const curDrawBatch = this._drawBatchPool.alloc();
                  const subModel = model.subModels[i];
                  curDrawBatch.visFlags = comp.node.layer;
                  curDrawBatch.model = model;
                  curDrawBatch.texture = null;
                  curDrawBatch.sampler = null;
                  curDrawBatch.useLocalData = null;
                  if (!depthStencil) {
                    depthStencil = null;
                  }
                  curDrawBatch.fillPasses(mat, depthStencil, dssHash, subModel.patches);
                  curDrawBatch.inputAssembler = subModel.inputAssembler;
                  curDrawBatch.model.visFlags = curDrawBatch.visFlags;
                  curDrawBatch.descriptorSet = subModel.descriptorSet;
                  this._batches.push(curDrawBatch);
                }
                _stencilManager.enableMask();
              }
              syncMeshBuffersToNative(accId, buffers) {
                {
                  const nativeBuffers = buffers.map(buf => buf.nativeObj);
                  this._nativeObj.syncMeshBuffersToNative(accId, nativeBuffers);
                }
              }
            } exports('B', Batcher2D);
            class LocalDescriptorSet {
              get descriptorSet() {
                return this._descriptorSet;
              }
              constructor() {
                this._descriptorSet = null;
                this._transform = null;
                this._textureHash = 0;
                this._samplerHash = 0;
                this._localBuffer = null;
                this._transformUpdate = true;
                const device = deviceManager.gfxDevice;
                this._localData = new Float32Array(UBOLocal.COUNT);
                this._localBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOLocal.SIZE, UBOLocal.SIZE));
              }
              initialize(batch) {
                const device = deviceManager.gfxDevice;
                this._transform = batch.useLocalData;
                this._textureHash = batch.textureHash;
                this._samplerHash = batch.samplerHash;
                _dsInfo.layout = batch.passes[0].localSetLayout;
                this._descriptorSet = device.createDescriptorSet(_dsInfo);
                this._descriptorSet.bindBuffer(UBOLocal.BINDING, this._localBuffer);
                const binding = ModelLocalBindings.SAMPLER_SPRITE;
                this._descriptorSet.bindTexture(binding, batch.texture);
                this._descriptorSet.bindSampler(binding, batch.sampler);
                this._descriptorSet.update();
                this._transformUpdate = true;
              }
              updateTransform(transform) {
                if (transform === this._transform) return;
                this._transform = transform;
                this._transformUpdate = true;
                this.uploadLocalData();
              }
              equals(transform, textureHash, samplerHash) {
                return this._transform === transform && this._textureHash === textureHash && this._samplerHash === samplerHash;
              }
              reset() {
                this._transform = null;
                this._textureHash = 0;
                this._samplerHash = 0;
              }
              destroy() {
                if (this._localBuffer) {
                  this._localBuffer.destroy();
                  this._localBuffer = null;
                }
                if (this._descriptorSet) {
                  this._descriptorSet.destroy();
                  this._descriptorSet = null;
                }
                this._localData = null;
              }
              isValid() {
                return this._transform && this._transform.isValid;
              }
              uploadLocalData() {
                const node = this._transform;
                if (node.hasChangedFlags || node.isTransformDirty()) {
                  node.updateWorldTransform();
                  this._transformUpdate = true;
                }
                if (this._transformUpdate) {
                  const worldMatrix = node.worldMatrix;
                  Mat4.toArray(this._localData, worldMatrix, UBOLocal.MAT_WORLD_OFFSET);
                  Mat4.invert(m4_1, worldMatrix);
                  Mat4.transpose(m4_1, m4_1);
                  Mat4.toArray(this._localData, m4_1, UBOLocal.MAT_WORLD_IT_OFFSET);
                  this._localBuffer.update(this._localData);
                  this._transformUpdate = false;
                }
              }
            }
            class DescriptorSetCache {
              constructor() {
                this._descriptorSetCache = new Map();
                this._dsCacheHashByTexture = new Map();
                this._localDescriptorSetCache = [];
                this._localCachePool = void 0;
                this._localCachePool = new Pool(() => new LocalDescriptorSet(), 16, obj => obj.destroy());
              }
              getDescriptorSet(batch) {
                legacyCC.director.root;
                let hash;
                if (batch.useLocalData) {
                  const caches = this._localDescriptorSetCache;
                  for (let i = 0, len = caches.length; i < len; i++) {
                    const cache = caches[i];
                    if (cache.equals(batch.useLocalData, batch.textureHash, batch.samplerHash)) {
                      return cache.descriptorSet;
                    }
                  }
                  const localDs = this._localCachePool.alloc();
                  localDs.initialize(batch);
                  this._localDescriptorSetCache.push(localDs);
                  return localDs.descriptorSet;
                } else {
                  hash = batch.textureHash ^ batch.samplerHash;
                  if (this._descriptorSetCache.has(hash)) {
                    return this._descriptorSetCache.get(hash);
                  } else {
                    _dsInfo.layout = batch.passes[0].localSetLayout;
                    const descriptorSet = deviceManager.gfxDevice.createDescriptorSet(_dsInfo);
                    const binding = ModelLocalBindings.SAMPLER_SPRITE;
                    descriptorSet.bindTexture(binding, batch.texture);
                    descriptorSet.bindSampler(binding, batch.sampler);
                    descriptorSet.update();
                    this._descriptorSetCache.set(hash, descriptorSet);
                    this._dsCacheHashByTexture.set(batch.textureHash, hash);
                    return descriptorSet;
                  }
                }
              }
              update() {
                const caches = this._localDescriptorSetCache;
                const length = caches.length;
                if (length === 0) {
                  return;
                }
                const uselessArray = [];
                for (let i = 0; i < length; i++) {
                  const value = caches[i];
                  if (value.isValid()) {
                    value.uploadLocalData();
                  } else {
                    value.reset();
                    const pos = caches.indexOf(value);
                    uselessArray.push(pos);
                  }
                }
                for (let i = uselessArray.length - 1; i >= 0; i--) {
                  const index = uselessArray[i];
                  const localDs = caches[index];
                  caches.splice(index, 1);
                  this._localCachePool.free(localDs);
                }
              }
              reset() {
                const caches = this._localDescriptorSetCache;
                const length = caches.length;
                for (let i = 0; i < length; i++) {
                  const value = caches[i];
                  this._localCachePool.free(value);
                }
                this._localDescriptorSetCache.length = 0;
              }
              releaseDescriptorSetCache(textureHash) {
                const key = this._dsCacheHashByTexture.get(textureHash);
                if (key && this._descriptorSetCache.has(key)) {
                  this._descriptorSetCache.get(key).destroy();
                  this._descriptorSetCache.delete(key);
                  this._dsCacheHashByTexture.delete(textureHash);
                }
              }
              destroy() {
                for (const value of this._descriptorSetCache.values()) {
                  value.destroy();
                }
                this._descriptorSetCache.clear();
                this._dsCacheHashByTexture.clear();
                this._localDescriptorSetCache.length = 0;
                this._localCachePool.destroy();
              }
            }
            legacyCC.internal.Batcher2D = Batcher2D;

            class UIDrawBatch extends DrawBatch2D {} exports('U', UIDrawBatch);
            markAsWarning(MeshBuffer.prototype, 'MeshBuffer', ['byteStart', 'vertexStart', 'indicesStart', 'request'].map(item => ({
              name: item,
              suggest: `please use meshBuffer.accessor.${item} instead`
            })));
            replaceProperty(MeshBuffer.prototype, 'MeshBuffer', [{
              name: 'indicesOffset',
              newName: 'indexOffset'
            }]);
            removeProperty(MeshBuffer.prototype, 'MeshBuffer', [{
              name: 'vertexBuffers'
            }, {
              name: 'indexBuffer'
            }]);
            replaceProperty(Batcher2D.prototype, 'Batcher2D', [{
              name: 'currBufferBatch',
              newName: 'currBufferAccessor'
            }, {
              name: 'acquireBufferBatch',
              newName: 'switchBufferAccessor'
            }]);
            removeProperty(MeshRenderData.prototype, 'MeshRenderData', [{
              name: 'formatByte'
            }, {
              name: 'byteStart'
            }, {
              name: 'byteCount'
            }]);
            replaceProperty(MeshRenderData.prototype, 'MeshRenderData', [{
              name: 'indicesStart',
              newName: 'indexStart'
            }]);
            class QuadRenderData extends MeshRenderData {
              constructor(vertexFormat) {
                super(vertexFormat);
                warnID(9006);
              }
            } exports('Q', QuadRenderData);

            legacyCC.UI = {
              MeshBuffer,
              spriteAssembler,
              graphicsAssembler: graphicsAssemblerManager,
              labelAssembler,
              RenderData,
              MeshRenderData
            };

        })
    };
}));
