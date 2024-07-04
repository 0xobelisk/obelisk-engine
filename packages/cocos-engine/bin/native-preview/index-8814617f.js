System.register(['./index-ce98320e.js', './collision-matrix-13be3bef.js', './deprecated-f8df8d32.js', './director-dc238483.js', './node-event-18d96a1b.js', './physics-enum-187e99c4.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js'], (function (exports) {
    'use strict';
    var Vec2, Enum, EDITOR, log, errorID, legacyCC, Eventify, settings, Settings, System, CCBoolean, CCFloat, applyDecoratedInitializer, _decorator, serializable, Rect, type$3, Size, Vec3, Quat, toDegree, CollisionMatrix, director, Director, _applyDecoratedDescriptor, Component, PhysicsGroup$1;
    return {
        setters: [function (module) {
            Vec2 = module.V;
            Enum = module.aa;
            EDITOR = module.bB;
            log = module.a;
            errorID = module.f;
            legacyCC = module.l;
            Eventify = module.aE;
            settings = module.a_;
            Settings = module.aZ;
            System = module.a$;
            CCBoolean = module.av;
            CCFloat = module.au;
            applyDecoratedInitializer = module.bx;
            _decorator = module.ap;
            serializable = module.bf;
            Rect = module.R;
            type$3 = module.bw;
            Size = module.S;
            Vec3 = module.n;
            Quat = module.Q;
            toDegree = module.K;
        }, function (module) {
            CollisionMatrix = module.C;
        }, function () {}, function (module) {
            director = module.n;
            Director = module.m;
        }, function (module) {
            _applyDecoratedDescriptor = module.H;
            Component = module.C;
        }, function (module) {
            PhysicsGroup$1 = module.P;
        }, function () {}, function () {}],
        execute: (function () {

            exports('n', ConvexPartition);

            function At(i, vertices) {
              const s = vertices.length;
              return vertices[i < 0 ? s - -i % s : i % s];
            }
            function Copy(i, j, vertices) {
              const p = [];
              while (j < i) j += vertices.length;
              for (; i <= j; ++i) {
                p.push(At(i, vertices));
              }
              return p;
            }
            function ConvexPartition$1(vertices) {
              ForceCounterClockWise$1(vertices);
              let list = [];
              let d;
              let lowerDist;
              let upperDist;
              let p;
              let lowerInt = new Vec2();
              let upperInt = new Vec2();
              let lowerIndex = 0;
              let upperIndex = 0;
              let lowerPoly;
              let upperPoly;
              for (let i = 0; i < vertices.length; ++i) {
                if (Reflex(i, vertices)) {
                  lowerDist = upperDist = 10e7;
                  for (let j = 0; j < vertices.length; ++j) {
                    if (Left(At(i - 1, vertices), At(i, vertices), At(j, vertices)) && RightOn(At(i - 1, vertices), At(i, vertices), At(j - 1, vertices))) {
                      p = LineIntersect(At(i - 1, vertices), At(i, vertices), At(j, vertices), At(j - 1, vertices));
                      if (Right(At(i + 1, vertices), At(i, vertices), p)) {
                        d = SquareDist(At(i, vertices), p);
                        if (d < lowerDist) {
                          lowerDist = d;
                          lowerInt = p;
                          lowerIndex = j;
                        }
                      }
                    }
                    if (Left(At(i + 1, vertices), At(i, vertices), At(j + 1, vertices)) && RightOn(At(i + 1, vertices), At(i, vertices), At(j, vertices))) {
                      p = LineIntersect(At(i + 1, vertices), At(i, vertices), At(j, vertices), At(j + 1, vertices));
                      if (Left(At(i - 1, vertices), At(i, vertices), p)) {
                        d = SquareDist(At(i, vertices), p);
                        if (d < upperDist) {
                          upperDist = d;
                          upperIndex = j;
                          upperInt = p;
                        }
                      }
                    }
                  }
                  if (lowerIndex == (upperIndex + 1) % vertices.length) {
                    const sp = lowerInt.add(upperInt).multiplyScalar(1 / 2);
                    lowerPoly = Copy(i, upperIndex, vertices);
                    lowerPoly.push(sp);
                    upperPoly = Copy(lowerIndex, i, vertices);
                    upperPoly.push(sp);
                  } else {
                    let highestScore = 0;
                    let bestIndex = lowerIndex;
                    while (upperIndex < lowerIndex) {
                      upperIndex += vertices.length;
                    }
                    for (let j = lowerIndex; j <= upperIndex; ++j) {
                      if (CanSee(i, j, vertices)) {
                        let score = 1 / (SquareDist(At(i, vertices), At(j, vertices)) + 1);
                        if (Reflex(j, vertices)) {
                          if (RightOn(At(j - 1, vertices), At(j, vertices), At(i, vertices)) && LeftOn(At(j + 1, vertices), At(j, vertices), At(i, vertices))) {
                            score += 3;
                          } else {
                            score += 2;
                          }
                        } else {
                          score += 1;
                        }
                        if (score > highestScore) {
                          bestIndex = j;
                          highestScore = score;
                        }
                      }
                    }
                    lowerPoly = Copy(i, bestIndex, vertices);
                    upperPoly = Copy(bestIndex, i, vertices);
                  }
                  list = list.concat(ConvexPartition$1(lowerPoly));
                  list = list.concat(ConvexPartition$1(upperPoly));
                  return list;
                }
              }
              list.push(vertices);
              for (let i = list.length - 1; i >= 0; i--) {
                if (list[i].length == 0) list.splice(i, 0);
              }
              return list;
            }
            function CanSee(i, j, vertices) {
              if (Reflex(i, vertices)) {
                if (LeftOn(At(i, vertices), At(i - 1, vertices), At(j, vertices)) && RightOn(At(i, vertices), At(i + 1, vertices), At(j, vertices))) return false;
              } else if (RightOn(At(i, vertices), At(i + 1, vertices), At(j, vertices)) || LeftOn(At(i, vertices), At(i - 1, vertices), At(j, vertices))) return false;
              if (Reflex(j, vertices)) {
                if (LeftOn(At(j, vertices), At(j - 1, vertices), At(i, vertices)) && RightOn(At(j, vertices), At(j + 1, vertices), At(i, vertices))) return false;
              } else if (RightOn(At(j, vertices), At(j + 1, vertices), At(i, vertices)) || LeftOn(At(j, vertices), At(j - 1, vertices), At(i, vertices))) return false;
              for (let k = 0; k < vertices.length; ++k) {
                if ((k + 1) % vertices.length == i || k == i || (k + 1) % vertices.length == j || k == j) {
                  continue;
                }
                const intersectionPoint = new Vec2();
                if (LineIntersect2(At(i, vertices), At(j, vertices), At(k, vertices), At(k + 1, vertices), intersectionPoint)) {
                  return false;
                }
              }
              return true;
            }
            function Reflex(i, vertices) {
              return Right(i, vertices);
            }
            function Right(a, b, c) {
              if (typeof c === 'undefined') {
                const i = a;
                const vertices = b;
                a = At(i - 1, vertices);
                b = At(i, vertices);
                c = At(i + 1, vertices);
                if (typeof a === 'undefined') {
                  a = b;
                }
                if (typeof c === 'undefined') {
                  c = b;
                }
              }
              return Area(a, b, c) < 0;
            }
            function Left(a, b, c) {
              return Area(a, b, c) > 0;
            }
            function LeftOn(a, b, c) {
              return Area(a, b, c) >= 0;
            }
            function RightOn(a, b, c) {
              return Area(a, b, c) <= 0;
            }
            function SquareDist(a, b) {
              const dx = b.x - a.x;
              const dy = b.y - a.y;
              return dx * dx + dy * dy;
            }
            function ForceCounterClockWise$1(vertices) {
              if (!IsCounterClockWise(vertices)) {
                vertices.reverse();
              }
            }
            function IsCounterClockWise(vertices) {
              if (vertices.length < 3) return true;
              return GetSignedArea(vertices) > 0;
            }
            function GetSignedArea(vertices) {
              let i;
              let area = 0;
              for (i = 0; i < vertices.length; i++) {
                const j = (i + 1) % vertices.length;
                area += vertices[i].x * vertices[j].y;
                area -= vertices[i].y * vertices[j].x;
              }
              area /= 2;
              return area;
            }
            function LineIntersect(p1, p2, q1, q2) {
              const i = new Vec2();
              const a1 = p2.y - p1.y;
              const b1 = p1.x - p2.x;
              const c1 = a1 * p1.x + b1 * p1.y;
              const a2 = q2.y - q1.y;
              const b2 = q1.x - q2.x;
              const c2 = a2 * q1.x + b2 * q1.y;
              const det = a1 * b2 - a2 * b1;
              if (!FloatEquals(det, 0)) {
                i.x = (b2 * c1 - b1 * c2) / det;
                i.y = (a1 * c2 - a2 * c1) / det;
              }
              return i;
            }
            function LineIntersect2(a0, a1, b0, b1, intersectionPoint) {
              if (a0 == b0 || a0 == b1 || a1 == b0 || a1 == b1) return false;
              const x1 = a0.x;
              const y1 = a0.y;
              const x2 = a1.x;
              const y2 = a1.y;
              const x3 = b0.x;
              const y3 = b0.y;
              const x4 = b1.x;
              const y4 = b1.y;
              if (Math.max(x1, x2) < Math.min(x3, x4) || Math.max(x3, x4) < Math.min(x1, x2)) return false;
              if (Math.max(y1, y2) < Math.min(y3, y4) || Math.max(y3, y4) < Math.min(y1, y2)) return false;
              let ua = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
              let ub = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
              const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
              if (Math.abs(denom) < 10e-7) {
                return false;
              }
              ua /= denom;
              ub /= denom;
              if (ua > 0 && ua < 1 && ub > 0 && ub < 1) {
                intersectionPoint.x = x1 + ua * (x2 - x1);
                intersectionPoint.y = y1 + ua * (y2 - y1);
                return true;
              }
              return false;
            }
            function FloatEquals(value1, value2) {
              return Math.abs(value1 - value2) <= 10e-7;
            }
            function Area(a, b, c) {
              return a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y);
            }

            var PolygonSeparator = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ConvexPartition: ConvexPartition$1,
                ForceCounterClockWise: ForceCounterClockWise$1,
                IsCounterClockWise: IsCounterClockWise
            });

            function ConvexPartition(polygon) {
              ForceCounterClockWise(polygon);
              let convex = true;
              for (let i = 0, len = polygon.length; i < len; ++i) {
                if (!isConvex(polygon[(i + len - 1) % len], polygon[i], polygon[(i + 1) % len])) {
                  convex = false;
                  break;
                }
              }
              if (convex) {
                return [polygon];
              }
              const ret = [];
              const triangles = Triangulate(polygon);
              if (!triangles) return null;
              for (; triangles.length;) {
                let poly = triangles.splice(0, 1)[0];
                for (let iPoly = 0, polyLen = poly.length; iPoly < polyLen; ++iPoly) {
                  const diag1 = poly[iPoly];
                  const diag2 = poly[(iPoly + 1) % polyLen];
                  let tri3 = null;
                  let iTri2 = 0;
                  for (; iTri2 < triangles.length; ++iTri2) {
                    const triangle = triangles[iTri2];
                    for (let i = 0; i < 3; ++i) {
                      const tri1 = triangle[i];
                      const tri2 = triangle[(i + 1) % 3];
                      if (equals(diag1, tri2) && equals(diag2, tri1)) {
                        tri3 = triangle[(i + 2) % 3];
                        break;
                      }
                    }
                    if (tri3) {
                      break;
                    }
                  }
                  if (!tri3) {
                    continue;
                  }
                  if (area(poly[(iPoly + polyLen - 1) % polyLen], diag1, tri3) > 0) {
                    continue;
                  }
                  if (area(tri3, diag2, poly[(iPoly + 2) % polyLen]) > 0) {
                    continue;
                  }
                  const newPoly = [];
                  for (let i = (iPoly + 1) % polyLen; i !== iPoly; i = (i + 1) % polyLen) {
                    newPoly.push(poly[i]);
                  }
                  newPoly.push(diag1, tri3);
                  poly = newPoly;
                  polyLen = newPoly.length;
                  iPoly = -1;
                  triangles.splice(iTri2, 1);
                }
                ret.push(poly);
              }
              return ret;
            }
            class Vertex {
              constructor() {
                this.isActive = false;
                this.isConvex = false;
                this.isEar = false;
                this.point = null;
                this.angleCos = 0;
                this.shouldUpdate = false;
                this.index = 0;
                this.prev = null;
                this.next = null;
              }
            }
            function area(a, b, c) {
              return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y);
            }
            function isConvex(p1, p2, p3) {
              return area(p1, p2, p3) < 0;
            }
            function equals(a, b) {
              return a.x === b.x && a.y === b.y;
            }
            function isClockwise(polygon) {
              let sum = 0;
              for (let i = 0, len = polygon.length; i < len; ++i) {
                const p1 = polygon[i];
                const p2 = polygon[(i + 1) % len];
                sum += (p2.x - p1.x) * (p2.y + p1.y);
              }
              return sum > 0;
            }
            function ForceCounterClockWise(vertices) {
              if (isClockwise(vertices)) {
                vertices.reverse();
              }
            }
            function updateVertex(vertex, vertices) {
              if (!vertex.shouldUpdate) {
                return;
              }
              vertex.shouldUpdate = false;
              const v1 = vertex.prev.point;
              const v2 = vertex.point;
              const v3 = vertex.next.point;
              vertex.isConvex = isConvex(v1, v2, v3);
              let v1x = v1.x - v2.x;
              let v1y = v1.y - v2.y;
              const v1Len = Math.sqrt(v1x * v1x + v1y * v1y);
              v1x /= v1Len;
              v1y /= v1Len;
              let v3x = v3.x - v2.x;
              let v3y = v3.y - v2.y;
              const v3Len = Math.sqrt(v3x * v3x + v3y * v3y);
              v3x /= v3Len;
              v3y /= v3Len;
              vertex.angleCos = v1x * v3x + v1y * v3y;
              if (vertex.isConvex) {
                vertex.isEar = true;
                for (let i = 0, len = vertices.length; i < len; ++i) {
                  const curr = vertices[i];
                  if (!curr.isActive || curr === vertex) {
                    continue;
                  }
                  const currentPoint = curr.point;
                  if (equals(v1, currentPoint) || equals(v2, currentPoint) || equals(v3, currentPoint)) {
                    continue;
                  }
                  const areaA = area(v1, currentPoint, v2);
                  const areaB = area(v2, currentPoint, v3);
                  const areaC = area(v3, currentPoint, v1);
                  if (areaA > 0 && areaB > 0 && areaC > 0) {
                    vertex.isEar = false;
                    break;
                  }
                  if (areaA === 0 && areaB >= 0 && areaC >= 0) {
                    if (area(v1, curr.prev.point, v2) > 0 || area(v1, curr.next.point, v2) > 0) {
                      vertex.isEar = false;
                      break;
                    }
                  }
                  if (areaB === 0 && areaA >= 0 && areaC >= 0) {
                    if (area(v2, curr.prev.point, v3) > 0 || area(v2, curr.next.point, v3) > 0) {
                      vertex.isEar = false;
                      break;
                    }
                  }
                  if (areaC === 0 && areaA >= 0 && areaB >= 0) {
                    if (area(v3, curr.prev.point, v1) > 0 || area(v3, curr.next.point, v1) > 0) {
                      vertex.isEar = false;
                      break;
                    }
                  }
                }
              } else {
                vertex.isEar = false;
              }
            }
            function removeCollinearOrDuplicate(start) {
              for (let curr = start, end = start;;) {
                if (equals(curr.point, curr.next.point) || area(curr.prev.point, curr.point, curr.next.point) === 0) {
                  curr.prev.next = curr.next;
                  curr.next.prev = curr.prev;
                  curr.prev.shouldUpdate = true;
                  curr.next.shouldUpdate = true;
                  if (curr === curr.next) {
                    break;
                  }
                  end = curr.prev;
                  curr = curr.next;
                  continue;
                }
                curr = curr.next;
                if (curr === end) {
                  break;
                }
              }
            }
            function Triangulate(polygon) {
              ForceCounterClockWise(polygon);
              if (polygon.length < 4) {
                return [polygon];
              }
              const len = polygon.length;
              const vertices = [];
              const triangles = [];
              for (let i = 0; i < len; ++i) {
                const v = new Vertex();
                v.isActive = true;
                v.isConvex = false;
                v.isEar = false;
                v.point = polygon[i];
                v.angleCos = 0;
                v.shouldUpdate = true;
                v.index = i;
                vertices.push(v);
              }
              for (let i = 0; i < len; ++i) {
                const vertex = vertices[i];
                vertex.prev = vertices[(i + len - 1) % len];
                vertex.next = vertices[(i + 1) % len];
              }
              vertices.forEach(vertex => updateVertex(vertex, vertices));
              for (let i = 0; i < len - 3; ++i) {
                let ear;
                for (let j = 0; j < len; ++j) {
                  const vertex = vertices[j];
                  if (!vertex.isActive || !vertex.isEar) {
                    continue;
                  }
                  if (!ear) {
                    ear = vertex;
                  } else if (vertex.angleCos > ear.angleCos) {
                    ear = vertex;
                  }
                }
                if (!ear) {
                  for (let i_1 = 0; i_1 < len; ++i_1) {
                    const vertex = vertices[i_1];
                    if (vertex.isActive) {
                      const p1 = vertex.prev.point;
                      const p2 = vertex.point;
                      const p3 = vertex.next.point;
                      if (Math.abs(area(p1, p2, p3)) > 1e-5) {
                        console.log('Failed to find ear. There might be self-intersection in the polygon.');
                        return null;
                      }
                    }
                  }
                  break;
                }
                triangles.push([ear.prev.point, ear.point, ear.next.point]);
                ear.isActive = false;
                ear.prev.next = ear.next;
                ear.next.prev = ear.prev;
                ear.prev.shouldUpdate = true;
                ear.next.shouldUpdate = true;
                removeCollinearOrDuplicate(ear.next);
                if (i === len - 4) {
                  break;
                }
                for (let i_2 = 0; i_2 < len; ++i_2) {
                  updateVertex(vertices[i_2], vertices);
                }
              }
              for (let i = 0; i < len; ++i) {
                const vertex = vertices[i];
                if (vertex.isActive) {
                  vertex.prev.isActive = false;
                  vertex.next.isActive = false;
                  const p1 = vertex.prev.point;
                  const p2 = vertex.point;
                  const p3 = vertex.next.point;
                  if (Math.abs(area(p1, p2, p3)) > 1e-5) {
                    triangles.push([p1, p2, p3]);
                  }
                }
              }
              return triangles;
            }

            var PolygonPartition = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ConvexPartition: ConvexPartition
            });

            let ERigidBody2DType; exports('E', ERigidBody2DType);
            (function (ERigidBody2DType) {
              ERigidBody2DType[ERigidBody2DType["Static"] = 0] = "Static";
              ERigidBody2DType[ERigidBody2DType["Kinematic"] = 1] = "Kinematic";
              ERigidBody2DType[ERigidBody2DType["Dynamic"] = 2] = "Dynamic";
              ERigidBody2DType[ERigidBody2DType["Animated"] = 3] = "Animated";
            })(ERigidBody2DType || (exports('E', ERigidBody2DType = {})));
            Enum(ERigidBody2DType);
            let ECollider2DType; exports('a', ECollider2DType);
            (function (ECollider2DType) {
              ECollider2DType[ECollider2DType["None"] = 0] = "None";
              ECollider2DType[ECollider2DType["BOX"] = 1] = "BOX";
              ECollider2DType[ECollider2DType["CIRCLE"] = 2] = "CIRCLE";
              ECollider2DType[ECollider2DType["POLYGON"] = 3] = "POLYGON";
            })(ECollider2DType || (exports('a', ECollider2DType = {})));
            Enum(ECollider2DType);
            let EJoint2DType; exports('b', EJoint2DType);
            (function (EJoint2DType) {
              EJoint2DType[EJoint2DType["None"] = 0] = "None";
              EJoint2DType[EJoint2DType["DISTANCE"] = 1] = "DISTANCE";
              EJoint2DType[EJoint2DType["SPRING"] = 2] = "SPRING";
              EJoint2DType[EJoint2DType["WHEEL"] = 3] = "WHEEL";
              EJoint2DType[EJoint2DType["MOUSE"] = 4] = "MOUSE";
              EJoint2DType[EJoint2DType["FIXED"] = 5] = "FIXED";
              EJoint2DType[EJoint2DType["SLIDER"] = 6] = "SLIDER";
              EJoint2DType[EJoint2DType["RELATIVE"] = 7] = "RELATIVE";
              EJoint2DType[EJoint2DType["HINGE"] = 8] = "HINGE";
            })(EJoint2DType || (exports('b', EJoint2DType = {})));
            Enum(EJoint2DType);
            let PhysicsGroup; exports('c', PhysicsGroup);
            (function (PhysicsGroup) {
              PhysicsGroup[PhysicsGroup["DEFAULT"] = 1] = "DEFAULT";
            })(PhysicsGroup || (exports('c', PhysicsGroup = {})));
            Enum(PhysicsGroup);
            let ERaycast2DType; exports('d', ERaycast2DType);
            (function (ERaycast2DType) {
              ERaycast2DType[ERaycast2DType["Closest"] = 0] = "Closest";
              ERaycast2DType[ERaycast2DType["Any"] = 1] = "Any";
              ERaycast2DType[ERaycast2DType["AllClosest"] = 2] = "AllClosest";
              ERaycast2DType[ERaycast2DType["All"] = 3] = "All";
            })(ERaycast2DType || (exports('d', ERaycast2DType = {})));
            const Contact2DType = exports('C', {
              None: 'none-contact',
              BEGIN_CONTACT: 'begin-contact',
              END_CONTACT: 'end-contact',
              PRE_SOLVE: 'pre-solve',
              POST_SOLVE: 'post-solve'
            });
            let EPhysics2DDrawFlags; exports('e', EPhysics2DDrawFlags);
            (function (EPhysics2DDrawFlags) {
              EPhysics2DDrawFlags[EPhysics2DDrawFlags["None"] = 0] = "None";
              EPhysics2DDrawFlags[EPhysics2DDrawFlags["Shape"] = 1] = "Shape";
              EPhysics2DDrawFlags[EPhysics2DDrawFlags["Joint"] = 2] = "Joint";
              EPhysics2DDrawFlags[EPhysics2DDrawFlags["Aabb"] = 4] = "Aabb";
              EPhysics2DDrawFlags[EPhysics2DDrawFlags["Pair"] = 8] = "Pair";
              EPhysics2DDrawFlags[EPhysics2DDrawFlags["CenterOfMass"] = 16] = "CenterOfMass";
              EPhysics2DDrawFlags[EPhysics2DDrawFlags["Particle"] = 32] = "Particle";
              EPhysics2DDrawFlags[EPhysics2DDrawFlags["Controller"] = 64] = "Controller";
              EPhysics2DDrawFlags[EPhysics2DDrawFlags["All"] = 63] = "All";
            })(EPhysics2DDrawFlags || (exports('e', EPhysics2DDrawFlags = {})));
            const PHYSICS_2D_PTM_RATIO = exports('f', 32);

            function register(id, wrapper) {
              log(`[PHYSICS2D]: register ${id}.`);
              selector.backend[id] = wrapper;
              if (!selector.physicsWorld || selector.id === id) {
                const mutableSelector = selector;
                mutableSelector.id = id;
                mutableSelector.wrapper = wrapper;
              }
            }
            function switchTo(id) {
              const mutableSelector = selector;
              if (selector.physicsWorld && id !== selector.id && selector.backend[id] != null) {
                log(`[PHYSICS2D]: switch from ${selector.id} to ${id}.`);
                mutableSelector.id = id;
                mutableSelector.wrapper = selector.backend[id];
                mutableSelector.physicsWorld = createPhysicsWorld();
              } else {
                log(`[PHYSICS2D]: using ${mutableSelector.id}.`);
                mutableSelector.physicsWorld = createPhysicsWorld();
              }
            }
            const selector = exports('s', {
              id: '',
              switchTo,
              register,
              wrapper: {},
              backend: {},
              physicsWorld: null,
              runInEditor: !EDITOR
            });
            const FUNC = (...v) => 0;
            const ENTIRE_WORLD = {
              impl: null,
              debugDrawFlags: 0,
              setGravity: FUNC,
              setAllowSleep: FUNC,
              step: FUNC,
              syncPhysicsToScene: FUNC,
              syncSceneToPhysics: FUNC,
              raycast: FUNC,
              testPoint: FUNC,
              testAABB: FUNC,
              drawDebug: FUNC
            };
            function checkPhysicsModule(obj) {
              if (obj == null) {
                errorID(9600);
                return true;
              }
              return false;
            }
            function createPhysicsWorld() {
              if (checkPhysicsModule(selector.wrapper.PhysicsWorld)) {
                return ENTIRE_WORLD;
              }
              return new selector.wrapper.PhysicsWorld();
            }
            const EntireBody = {
              impl: null,
              rigidBody: null,
              isAwake: false,
              isSleeping: false,
              initialize: FUNC,
              setType: FUNC,
              setLinearDamping: FUNC,
              setAngularDamping: FUNC,
              setGravityScale: FUNC,
              setFixedRotation: FUNC,
              setAllowSleep: FUNC,
              isActive: FUNC,
              setActive: FUNC,
              wakeUp: FUNC,
              sleep: FUNC,
              getMass: FUNC,
              getInertia: FUNC,
              getLinearVelocity: FUNC,
              setLinearVelocity: FUNC,
              getLinearVelocityFromWorldPoint: FUNC,
              getAngularVelocity: FUNC,
              setAngularVelocity: FUNC,
              getLocalVector: FUNC,
              getWorldVector: FUNC,
              getLocalPoint: FUNC,
              getWorldPoint: FUNC,
              getLocalCenter: FUNC,
              getWorldCenter: FUNC,
              applyForce: FUNC,
              applyForceToCenter: FUNC,
              applyTorque: FUNC,
              applyLinearImpulse: FUNC,
              applyLinearImpulseToCenter: FUNC,
              applyAngularImpulse: FUNC,
              onEnable: FUNC,
              onDisable: FUNC,
              onDestroy: FUNC
            };
            function createRigidBody() {
              const PHYSICS_2D_BUILTIN = selector.id === 'builtin';
              if (PHYSICS_2D_BUILTIN) {
                return EntireBody;
              } else {
                if (checkPhysicsModule(selector.wrapper.RigidBody)) {
                  return EntireBody;
                }
                return new selector.wrapper.RigidBody();
              }
            }
            const CREATE_COLLIDER_PROXY = {
              INITED: false
            };
            const ENTIRE_SHAPE = {
              impl: null,
              collider: null,
              worldAABB: null,
              worldPoints: null,
              worldPosition: null,
              worldRadius: null,
              initialize: FUNC,
              apply: FUNC,
              onLoad: FUNC,
              onEnable: FUNC,
              onDisable: FUNC,
              onDestroy: FUNC,
              onGroupChanged: FUNC
            };
            function createShape(type) {
              initColliderProxy();
              return CREATE_COLLIDER_PROXY[type]();
            }
            function initColliderProxy() {
              if (CREATE_COLLIDER_PROXY.INITED) return;
              CREATE_COLLIDER_PROXY.INITED = true;
              CREATE_COLLIDER_PROXY[ECollider2DType.BOX] = function createBoxShape() {
                if (checkPhysicsModule(selector.wrapper.BoxShape)) {
                  return ENTIRE_SHAPE;
                }
                return new selector.wrapper.BoxShape();
              };
              CREATE_COLLIDER_PROXY[ECollider2DType.CIRCLE] = function createCircleShape() {
                if (checkPhysicsModule(selector.wrapper.CircleShape)) {
                  return ENTIRE_SHAPE;
                }
                return new selector.wrapper.CircleShape();
              };
              CREATE_COLLIDER_PROXY[ECollider2DType.POLYGON] = function createPolygonShape() {
                if (checkPhysicsModule(selector.wrapper.PolygonShape)) {
                  return ENTIRE_SHAPE;
                }
                return new selector.wrapper.PolygonShape();
              };
            }
            const CREATE_JOINT_PROXY = {
              INITED: false
            };
            const ENTIRE_JOINT = {
              impl: null,
              initialize: FUNC,
              apply: FUNC,
              setDampingRatio: FUNC,
              setFrequency: FUNC,
              setMaxForce: FUNC,
              setTarget: FUNC,
              setDistance: FUNC,
              setAngularOffset: FUNC,
              setCorrectionFactor: FUNC,
              setLinearOffset: FUNC,
              setMaxLength: FUNC,
              setMaxTorque: FUNC,
              setLowerLimit: FUNC,
              setUpperLimit: FUNC,
              setMaxMotorForce: FUNC,
              setMaxMotorTorque: FUNC,
              setMotorSpeed: FUNC,
              enableLimit: FUNC,
              enableMotor: FUNC,
              setLowerAngle: FUNC,
              setUpperAngle: FUNC
            };
            function createJoint(type) {
              initJointProxy();
              return CREATE_JOINT_PROXY[type]();
            }
            function initJointProxy() {
              if (CREATE_JOINT_PROXY.INITED) return;
              CREATE_JOINT_PROXY.INITED = true;
              const PHYSICS_2D_BUILTIN = selector.id === 'builtin';
              CREATE_JOINT_PROXY[EJoint2DType.SPRING] = function createSpringJoint() {
                if (PHYSICS_2D_BUILTIN) {
                  return ENTIRE_JOINT;
                } else {
                  if (checkPhysicsModule(selector.wrapper.SpringJoint)) {
                    return ENTIRE_JOINT;
                  }
                  return new selector.wrapper.SpringJoint();
                }
              };
              CREATE_JOINT_PROXY[EJoint2DType.DISTANCE] = function createDistanceJoint() {
                if (PHYSICS_2D_BUILTIN) {
                  return ENTIRE_JOINT;
                } else {
                  if (checkPhysicsModule(selector.wrapper.DistanceJoint)) {
                    return ENTIRE_JOINT;
                  }
                  return new selector.wrapper.DistanceJoint();
                }
              };
              CREATE_JOINT_PROXY[EJoint2DType.FIXED] = function createFixedJoint() {
                if (PHYSICS_2D_BUILTIN) {
                  return ENTIRE_JOINT;
                } else {
                  if (checkPhysicsModule(selector.wrapper.FixedJoint)) {
                    return ENTIRE_JOINT;
                  }
                  return new selector.wrapper.FixedJoint();
                }
              };
              CREATE_JOINT_PROXY[EJoint2DType.MOUSE] = function createMouseJoint() {
                if (PHYSICS_2D_BUILTIN) {
                  return ENTIRE_JOINT;
                } else {
                  if (checkPhysicsModule(selector.wrapper.MouseJoint)) {
                    return ENTIRE_JOINT;
                  }
                  return new selector.wrapper.MouseJoint();
                }
              };
              CREATE_JOINT_PROXY[EJoint2DType.RELATIVE] = function createRelativeJoint() {
                if (PHYSICS_2D_BUILTIN) {
                  return ENTIRE_JOINT;
                } else {
                  if (checkPhysicsModule(selector.wrapper.RelativeJoint)) {
                    return ENTIRE_JOINT;
                  }
                  return new selector.wrapper.RelativeJoint();
                }
              };
              CREATE_JOINT_PROXY[EJoint2DType.SLIDER] = function createSliderJoint() {
                if (PHYSICS_2D_BUILTIN) {
                  return ENTIRE_JOINT;
                } else {
                  if (checkPhysicsModule(selector.wrapper.SliderJoint)) {
                    return ENTIRE_JOINT;
                  }
                  return new selector.wrapper.SliderJoint();
                }
              };
              CREATE_JOINT_PROXY[EJoint2DType.WHEEL] = function createWheelJoint() {
                if (PHYSICS_2D_BUILTIN) {
                  return ENTIRE_JOINT;
                } else {
                  if (checkPhysicsModule(selector.wrapper.WheelJoint)) {
                    return ENTIRE_JOINT;
                  }
                  return new selector.wrapper.WheelJoint();
                }
              };
              CREATE_JOINT_PROXY[EJoint2DType.HINGE] = function createHingeJoint() {
                if (PHYSICS_2D_BUILTIN) {
                  return ENTIRE_JOINT;
                } else {
                  if (checkPhysicsModule(selector.wrapper.HingeJoint)) {
                    return ENTIRE_JOINT;
                  }
                  return new selector.wrapper.HingeJoint();
                }
              };
            }

            let instance = null;
            legacyCC.internal.PhysicsGroup2D = PhysicsGroup;
            class PhysicsSystem2D extends Eventify(System) {
              get enable() {
                return this._enable;
              }
              set enable(value) {
                this._enable = value;
              }
              get allowSleep() {
                return this._allowSleep;
              }
              set allowSleep(v) {
                this._allowSleep = v;
                {
                  this.physicsWorld.setAllowSleep(v);
                }
              }
              get gravity() {
                return this._gravity;
              }
              set gravity(gravity) {
                this._gravity.set(gravity);
                {
                  this.physicsWorld.setGravity(new Vec2(gravity.x / PHYSICS_2D_PTM_RATIO, gravity.y / PHYSICS_2D_PTM_RATIO));
                }
              }
              get maxSubSteps() {
                return this._maxSubSteps;
              }
              set maxSubSteps(value) {
                this._maxSubSteps = value;
              }
              get fixedTimeStep() {
                return this._fixedTimeStep;
              }
              set fixedTimeStep(value) {
                this._fixedTimeStep = value;
              }
              get autoSimulation() {
                return this._autoSimulation;
              }
              set autoSimulation(value) {
                this._autoSimulation = value;
              }
              get debugDrawFlags() {
                return this.physicsWorld.debugDrawFlags;
              }
              set debugDrawFlags(v) {
                this.physicsWorld.debugDrawFlags = v;
              }
              get physicsWorld() {
                return selector.physicsWorld;
              }
              static get PHYSICS_NONE() {
                return !selector.id;
              }
              static get PHYSICS_BUILTIN() {
                return selector.id === 'builtin';
              }
              static get PHYSICS_BOX2D() {
                return selector.id === 'box2d';
              }
              static get PHYSICS_BOX2D_WASM() {
                return selector.id === 'box2d-wasm';
              }
              static get PhysicsGroup() {
                return PhysicsGroup;
              }
              static get instance() {
                if (!instance) {
                  instance = new PhysicsSystem2D();
                }
                return instance;
              }
              get stepping() {
                return this._steping;
              }
              constructor() {
                var _settings$querySettin, _settings$querySettin2, _settings$querySettin3, _settings$querySettin4;
                super();
                this.velocityIterations = 10;
                this.positionIterations = 10;
                this.collisionMatrix = new CollisionMatrix();
                this._enable = true;
                this._allowSleep = true;
                this._maxSubSteps = 1;
                this._fixedTimeStep = 1.0 / 60.0;
                this._autoSimulation = true;
                this._accumulator = 0;
                this._steping = false;
                this._gravity = new Vec2(0, -10 * PHYSICS_2D_PTM_RATIO);
                this._delayEvents = [];
                const gravity = settings.querySettings(Settings.Category.PHYSICS, 'gravity');
                if (gravity) {
                  Vec2.copy(this._gravity, gravity);
                  this._gravity.multiplyScalar(PHYSICS_2D_PTM_RATIO);
                }
                this._allowSleep = (_settings$querySettin = settings.querySettings(Settings.Category.PHYSICS, 'allowSleep')) !== null && _settings$querySettin !== void 0 ? _settings$querySettin : this._allowSleep;
                this._fixedTimeStep = (_settings$querySettin2 = settings.querySettings(Settings.Category.PHYSICS, 'fixedTimeStep')) !== null && _settings$querySettin2 !== void 0 ? _settings$querySettin2 : this._fixedTimeStep;
                this._maxSubSteps = (_settings$querySettin3 = settings.querySettings(Settings.Category.PHYSICS, 'maxSubSteps')) !== null && _settings$querySettin3 !== void 0 ? _settings$querySettin3 : this._maxSubSteps;
                this._autoSimulation = (_settings$querySettin4 = settings.querySettings(Settings.Category.PHYSICS, 'autoSimulation')) !== null && _settings$querySettin4 !== void 0 ? _settings$querySettin4 : this._autoSimulation;
                const collisionMatrix = settings.querySettings(Settings.Category.PHYSICS, 'collisionMatrix');
                if (collisionMatrix) {
                  for (const i in collisionMatrix) {
                    const bit = parseInt(i);
                    const value = 1 << parseInt(i);
                    this.collisionMatrix[`${value}`] = collisionMatrix[bit];
                  }
                }
                const collisionGroups = settings.querySettings(Settings.Category.PHYSICS, 'collisionGroups');
                if (collisionGroups) {
                  const cg = collisionGroups;
                  if (cg instanceof Array) {
                    cg.forEach(v => {
                      PhysicsGroup[v.name] = 1 << v.index;
                    });
                    Enum.update(PhysicsGroup);
                  }
                }
                const mutableSelector = selector;
                mutableSelector.physicsWorld = createPhysicsWorld();
                this.gravity = this._gravity;
                this.allowSleep = this._allowSleep;
              }
              postUpdate(deltaTime) {
                if (!this._enable) {
                  return;
                }
                if (!this._autoSimulation) {
                  return;
                }
                director.emit(Director.EVENT_BEFORE_PHYSICS);
                this.physicsWorld.syncSceneToPhysics();
                this._steping = true;
                const fixedTimeStep = this._fixedTimeStep;
                const velocityIterations = this.velocityIterations;
                const positionIterations = this.positionIterations;
                this._accumulator += deltaTime;
                let substepIndex = 0;
                while (substepIndex++ < this._maxSubSteps && this._accumulator > fixedTimeStep) {
                  this.physicsWorld.step(fixedTimeStep, velocityIterations, positionIterations);
                  this._accumulator -= fixedTimeStep;
                }
                const events = this._delayEvents;
                for (let i = 0, l = events.length; i < l; i++) {
                  const event = events[i];
                  event.func.call(event.target);
                }
                events.length = 0;
                this.physicsWorld.syncPhysicsToScene();
                if (this.debugDrawFlags) {
                  this.physicsWorld.drawDebug();
                }
                this._steping = false;
                director.emit(Director.EVENT_AFTER_PHYSICS);
              }
              _callAfterStep(target, func) {
                if (this._steping) {
                  this._delayEvents.push({
                    target,
                    func
                  });
                } else {
                  func.call(target);
                }
              }
              resetAccumulator(time = 0) {
                this._accumulator = time;
              }
              step(fixedTimeStep) {
                this.physicsWorld.step(fixedTimeStep, this.velocityIterations, this.positionIterations);
              }
              raycast(p1, p2, type = ERaycast2DType.Closest, mask = 0xffffffff) {
                return this.physicsWorld.raycast(p1, p2, type, mask);
              }
              testPoint(p) {
                return this.physicsWorld.testPoint(p);
              }
              testAABB(rect) {
                return this.physicsWorld.testAABB(rect);
              }
              static constructAndRegister() {
                director.registerSystem(PhysicsSystem2D.ID, PhysicsSystem2D.instance, System.Priority.LOW);
              }
            } exports('g', PhysicsSystem2D);
            PhysicsSystem2D.ID = 'PHYSICS_2D';
            director.once(Director.EVENT_INIT, () => {
              PhysicsSystem2D.constructAndRegister();
            });

            let Physics2DManifoldType; exports('h', Physics2DManifoldType);
            (function (Physics2DManifoldType) {
              Physics2DManifoldType[Physics2DManifoldType["Circles"] = 0] = "Circles";
              Physics2DManifoldType[Physics2DManifoldType["FaceA"] = 1] = "FaceA";
              Physics2DManifoldType[Physics2DManifoldType["FaceB"] = 2] = "FaceB";
            })(Physics2DManifoldType || (exports('h', Physics2DManifoldType = {})));

            var _dec$d, _dec2$d, _dec3$a, _dec4$7, _dec5$6, _dec6$5, _dec7$5, _dec8$2, _dec9$1, _dec10, _class$d, _class2$d, _initializer$d, _initializer2$b, _initializer3$8, _initializer4$7, _initializer5$5, _initializer6$5, _initializer7$2, _initializer8$1, _initializer9, _initializer10, _initializer11, _initializer12;
            const {
              property: property$d,
              type: type$2,
              menu: menu$b,
              ccclass: ccclass$d
            } = _decorator;
            let RigidBody2D = exports('R', (_dec$d = ccclass$d('cc.RigidBody2D'), _dec2$d = type$2(PhysicsGroup$1), _dec3$a = type$2(ERigidBody2DType), _dec4$7 = type$2(CCBoolean), _dec5$6 = type$2(CCFloat), _dec6$5 = type$2(CCFloat), _dec7$5 = type$2(CCFloat), _dec8$2 = type$2(Vec2), _dec9$1 = type$2(CCFloat), _dec10 = type$2(CCBoolean), _dec$d(_class$d = (_class2$d = class RigidBody2D extends Component {
              constructor(...args) {
                super(...args);
                this.enabledContactListener = _initializer$d && _initializer$d();
                this.bullet = _initializer2$b && _initializer2$b();
                this.awakeOnLoad = _initializer3$8 && _initializer3$8();
                this._body = null;
                this._group = _initializer4$7 && _initializer4$7();
                this._type = _initializer5$5 && _initializer5$5();
                this._allowSleep = _initializer6$5 && _initializer6$5();
                this._gravityScale = _initializer7$2 && _initializer7$2();
                this._linearDamping = _initializer8$1 && _initializer8$1();
                this._angularDamping = _initializer9 && _initializer9();
                this._linearVelocity = _initializer10 && _initializer10();
                this._angularVelocity = _initializer11 && _initializer11();
                this._fixedRotation = _initializer12 && _initializer12();
              }
              get group() {
                return this._group;
              }
              set group(v) {
                this._group = v;
              }
              get type() {
                return this._type;
              }
              set type(v) {
                this._type = v;
                if (this._body) {
                  if (v === ERigidBody2DType.Animated) {
                    this._body.setType(ERigidBody2DType.Kinematic);
                  } else {
                    this._body.setType(v);
                  }
                }
              }
              get allowSleep() {
                return this._allowSleep;
              }
              set allowSleep(v) {
                this._allowSleep = v;
                if (this._body) {
                  this._body.setAllowSleep(v);
                }
              }
              get gravityScale() {
                return this._gravityScale;
              }
              set gravityScale(v) {
                this._gravityScale = v;
                if (this._body) {
                  this._body.setGravityScale(v);
                }
              }
              get linearDamping() {
                return this._linearDamping;
              }
              set linearDamping(v) {
                this._linearDamping = v;
                if (this._body) {
                  this._body.setLinearDamping(v);
                }
              }
              get angularDamping() {
                return this._angularDamping;
              }
              set angularDamping(v) {
                this._angularDamping = v;
                if (this._body) {
                  this._body.setAngularDamping(v);
                }
              }
              get linearVelocity() {
                if (this._body) {
                  this._body.getLinearVelocity(this._linearVelocity);
                }
                return this._linearVelocity;
              }
              set linearVelocity(v) {
                this._linearVelocity = v;
                if (this._body) {
                  this._body.setLinearVelocity(v);
                }
              }
              get angularVelocity() {
                if (this._body) {
                  this._angularVelocity = this._body.getAngularVelocity();
                }
                return this._angularVelocity;
              }
              set angularVelocity(v) {
                this._angularVelocity = v;
                if (this._body) {
                  this._body.setAngularVelocity(v);
                }
              }
              get fixedRotation() {
                return this._fixedRotation;
              }
              set fixedRotation(v) {
                this._fixedRotation = v;
                if (this._body) {
                  this._body.setFixedRotation(v);
                }
              }
              isAwake() {
                if (this._body) {
                  return this._body.isAwake;
                }
                return false;
              }
              wakeUp() {
                if (this._body) {
                  this._body.wakeUp();
                }
              }
              sleep() {
                if (this._body) {
                  this._body.sleep();
                }
              }
              getMass() {
                if (this._body) {
                  return this._body.getMass();
                }
                return 0;
              }
              applyForce(force, point, wake) {
                if (this._body) {
                  this._body.applyForce(force, point, wake);
                }
              }
              applyForceToCenter(force, wake) {
                if (this._body) {
                  this._body.applyForceToCenter(force, wake);
                }
              }
              applyTorque(torque, wake) {
                if (this._body) {
                  this._body.applyTorque(torque, wake);
                }
              }
              applyLinearImpulse(impulse, point, wake) {
                if (this._body) {
                  this._body.applyLinearImpulse(impulse, point, wake);
                }
              }
              applyLinearImpulseToCenter(impulse, wake) {
                if (this._body) {
                  this._body.applyLinearImpulseToCenter(impulse, wake);
                }
              }
              applyAngularImpulse(impulse, wake) {
                if (this._body) {
                  this._body.applyAngularImpulse(impulse, wake);
                }
              }
              getLinearVelocityFromWorldPoint(worldPoint, out) {
                if (this._body) {
                  return this._body.getLinearVelocityFromWorldPoint(worldPoint, out);
                }
                return out;
              }
              getLocalVector(worldVector, out) {
                if (this._body) {
                  return this._body.getLocalVector(worldVector, out);
                }
                return out;
              }
              getWorldVector(localVector, out) {
                if (this._body) {
                  return this._body.getWorldVector(localVector, out);
                }
                return out;
              }
              getLocalPoint(worldPoint, out) {
                if (this._body) {
                  return this._body.getLocalPoint(worldPoint, out);
                }
                return out;
              }
              getWorldPoint(localPoint, out) {
                if (this._body) {
                  return this._body.getWorldPoint(localPoint, out);
                }
                return out;
              }
              getLocalCenter(out) {
                if (this._body) {
                  return this._body.getLocalCenter(out);
                }
                return out;
              }
              getWorldCenter(out) {
                if (this._body) {
                  return this._body.getWorldCenter(out);
                }
                return out;
              }
              getInertia() {
                if (this._body) {
                  return this._body.getInertia();
                }
                return 0;
              }
              onLoad() {
                {
                  this._body = createRigidBody();
                  this._body.initialize(this);
                }
              }
              onEnable() {
                if (this._body) {
                  this._body.onEnable();
                }
              }
              onDisable() {
                if (this._body) {
                  this._body.onDisable();
                }
              }
              onDestroy() {
                if (this._body) {
                  this._body.onDestroy();
                }
              }
              get impl() {
                return this._body;
              }
            }, (_applyDecoratedDescriptor(_class2$d.prototype, "group", [_dec2$d], Object.getOwnPropertyDescriptor(_class2$d.prototype, "group"), _class2$d.prototype), _initializer$d = applyDecoratedInitializer(_class2$d.prototype, "enabledContactListener", [serializable], function () {
              return false;
            }), _initializer2$b = applyDecoratedInitializer(_class2$d.prototype, "bullet", [serializable], function () {
              return false;
            }), _applyDecoratedDescriptor(_class2$d.prototype, "type", [_dec3$a], Object.getOwnPropertyDescriptor(_class2$d.prototype, "type"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "allowSleep", [_dec4$7], Object.getOwnPropertyDescriptor(_class2$d.prototype, "allowSleep"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "gravityScale", [_dec5$6], Object.getOwnPropertyDescriptor(_class2$d.prototype, "gravityScale"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "linearDamping", [_dec6$5], Object.getOwnPropertyDescriptor(_class2$d.prototype, "linearDamping"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "angularDamping", [_dec7$5], Object.getOwnPropertyDescriptor(_class2$d.prototype, "angularDamping"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "linearVelocity", [_dec8$2], Object.getOwnPropertyDescriptor(_class2$d.prototype, "linearVelocity"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "angularVelocity", [_dec9$1], Object.getOwnPropertyDescriptor(_class2$d.prototype, "angularVelocity"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "fixedRotation", [_dec10], Object.getOwnPropertyDescriptor(_class2$d.prototype, "fixedRotation"), _class2$d.prototype), _initializer3$8 = applyDecoratedInitializer(_class2$d.prototype, "awakeOnLoad", [serializable], function () {
              return true;
            }), _initializer4$7 = applyDecoratedInitializer(_class2$d.prototype, "_group", [serializable], function () {
              return PhysicsGroup$1.DEFAULT;
            }), _initializer5$5 = applyDecoratedInitializer(_class2$d.prototype, "_type", [serializable], function () {
              return ERigidBody2DType.Dynamic;
            }), _initializer6$5 = applyDecoratedInitializer(_class2$d.prototype, "_allowSleep", [serializable], function () {
              return true;
            }), _initializer7$2 = applyDecoratedInitializer(_class2$d.prototype, "_gravityScale", [serializable], function () {
              return 1;
            }), _initializer8$1 = applyDecoratedInitializer(_class2$d.prototype, "_linearDamping", [serializable], function () {
              return 0;
            }), _initializer9 = applyDecoratedInitializer(_class2$d.prototype, "_angularDamping", [serializable], function () {
              return 0;
            }), _initializer10 = applyDecoratedInitializer(_class2$d.prototype, "_linearVelocity", [serializable], function () {
              return new Vec2();
            }), _initializer11 = applyDecoratedInitializer(_class2$d.prototype, "_angularVelocity", [serializable], function () {
              return 0;
            }), _initializer12 = applyDecoratedInitializer(_class2$d.prototype, "_fixedRotation", [serializable], function () {
              return false;
            })), _class2$d)) || _class$d));

            var _dec$c, _dec2$c, _dec3$9, _dec4$6, _dec5$5, _dec6$4, _dec7$4, _dec8$1, _class$c, _class2$c, _initializer$c, _initializer2$a, _initializer3$7, _initializer4$6, _initializer5$4, _initializer6$4, _initializer7$1;
            const {
              ccclass: ccclass$c,
              editable,
              property: property$c,
              type: type$1
            } = _decorator;
            let Collider2D = exports('i', (_dec$c = ccclass$c('cc.Collider2D'), _dec2$c = type$1(CCFloat), _dec3$9 = type$1(PhysicsGroup$1), _dec4$6 = type$1(CCFloat), _dec5$5 = type$1(CCBoolean), _dec6$4 = type$1(CCFloat), _dec7$4 = type$1(CCFloat), _dec8$1 = type$1(Vec2), _dec$c(_class$c = (_class2$c = class Collider2D extends Eventify(Component) {
              constructor(...args) {
                super(...args);
                this.editing = false;
                this.tag = _initializer$c && _initializer$c();
                this.TYPE = ECollider2DType.None;
                this._shape = null;
                this._body = null;
                this._group = _initializer2$a && _initializer2$a();
                this._density = _initializer3$7 && _initializer3$7();
                this._sensor = _initializer4$6 && _initializer4$6();
                this._friction = _initializer5$4 && _initializer5$4();
                this._restitution = _initializer6$4 && _initializer6$4();
                this._offset = _initializer7$1 && _initializer7$1();
              }
              get group() {
                return this._group;
              }
              set group(v) {
                this._group = v;
                if (this._shape && this._shape.onGroupChanged) {
                  this._shape.onGroupChanged();
                }
              }
              get density() {
                return this._density;
              }
              set density(v) {
                this._density = v;
              }
              get sensor() {
                return this._sensor;
              }
              set sensor(v) {
                this._sensor = v;
              }
              get friction() {
                return this._friction;
              }
              set friction(v) {
                this._friction = v;
              }
              get restitution() {
                return this._restitution;
              }
              set restitution(v) {
                this._restitution = v;
              }
              get offset() {
                return this._offset;
              }
              set offset(v) {
                this._offset = v;
              }
              get body() {
                return this._body;
              }
              get impl() {
                return this._shape;
              }
              onLoad() {
                {
                  this._shape = createShape(this.TYPE);
                  this._shape.initialize(this);
                  if (this._shape.onLoad) {
                    this._shape.onLoad();
                  }
                  this._body = this.getComponent(RigidBody2D);
                }
              }
              onEnable() {
                if (this._shape) {
                  this._shape.onEnable();
                }
              }
              onDisable() {
                if (this._shape && this._shape.onDisable) {
                  this._shape.onDisable();
                }
              }
              onDestroy() {
                if (this._shape && this._shape.onDestroy) {
                  this._shape.onDestroy();
                }
              }
              apply() {
                if (this._shape && this._shape.apply) {
                  this._shape.apply();
                }
              }
              get worldAABB() {
                if (this._shape) {
                  return this._shape.worldAABB;
                }
                return new Rect();
              }
            }, (_initializer$c = applyDecoratedInitializer(_class2$c.prototype, "tag", [_dec2$c, serializable], function () {
              return 0;
            }), _applyDecoratedDescriptor(_class2$c.prototype, "group", [_dec3$9], Object.getOwnPropertyDescriptor(_class2$c.prototype, "group"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "density", [_dec4$6], Object.getOwnPropertyDescriptor(_class2$c.prototype, "density"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "sensor", [_dec5$5], Object.getOwnPropertyDescriptor(_class2$c.prototype, "sensor"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "friction", [_dec6$4], Object.getOwnPropertyDescriptor(_class2$c.prototype, "friction"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "restitution", [_dec7$4], Object.getOwnPropertyDescriptor(_class2$c.prototype, "restitution"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "offset", [_dec8$1], Object.getOwnPropertyDescriptor(_class2$c.prototype, "offset"), _class2$c.prototype), _initializer2$a = applyDecoratedInitializer(_class2$c.prototype, "_group", [serializable], function () {
              return PhysicsGroup$1.DEFAULT;
            }), _initializer3$7 = applyDecoratedInitializer(_class2$c.prototype, "_density", [serializable], function () {
              return 1.0;
            }), _initializer4$6 = applyDecoratedInitializer(_class2$c.prototype, "_sensor", [serializable], function () {
              return false;
            }), _initializer5$4 = applyDecoratedInitializer(_class2$c.prototype, "_friction", [serializable], function () {
              return 0.2;
            }), _initializer6$4 = applyDecoratedInitializer(_class2$c.prototype, "_restitution", [serializable], function () {
              return 0;
            }), _initializer7$1 = applyDecoratedInitializer(_class2$c.prototype, "_offset", [serializable], function () {
              return new Vec2();
            })), _class2$c)) || _class$c));

            var _dec$b, _dec2$b, _class$b, _class2$b, _initializer$b;
            const {
              ccclass: ccclass$b,
              menu: menu$a,
              property: property$b
            } = _decorator;
            let BoxCollider2D = exports('B', (_dec$b = ccclass$b('cc.BoxCollider2D'), _dec2$b = type$3(Size), _dec$b(_class$b = (_class2$b = class BoxCollider2D extends Collider2D {
              constructor(...args) {
                super(...args);
                this._size = _initializer$b && _initializer$b();
                this.TYPE = ECollider2DType.BOX;
              }
              get size() {
                return this._size;
              }
              set size(v) {
                this._size = v;
              }
              get worldPoints() {
                if (this._shape) {
                  return this._shape.worldPoints;
                }
                return [];
              }
            }, (_initializer$b = applyDecoratedInitializer(_class2$b.prototype, "_size", [serializable], function () {
              return new Size(1, 1);
            }), _applyDecoratedDescriptor(_class2$b.prototype, "size", [_dec2$b], Object.getOwnPropertyDescriptor(_class2$b.prototype, "size"), _class2$b.prototype)), _class2$b)) || _class$b));

            var _dec$a, _dec2$a, _class$a, _class2$a, _initializer$a;
            const {
              ccclass: ccclass$a,
              menu: menu$9,
              property: property$a
            } = _decorator;
            let CircleCollider2D = exports('j', (_dec$a = ccclass$a('cc.CircleCollider2D'), _dec2$a = type$3(CCFloat), _dec$a(_class$a = (_class2$a = class CircleCollider2D extends Collider2D {
              constructor(...args) {
                super(...args);
                this._radius = _initializer$a && _initializer$a();
                this.TYPE = ECollider2DType.CIRCLE;
              }
              get radius() {
                return this._radius;
              }
              set radius(v) {
                this._radius = v < 0 ? 0 : v;
              }
              get worldPosition() {
                if (this._shape) {
                  return this._shape.worldPosition;
                }
                return new Vec2();
              }
              get worldRadius() {
                if (this._shape) {
                  return this._shape.worldRadius;
                }
                return 0;
              }
            }, (_initializer$a = applyDecoratedInitializer(_class2$a.prototype, "_radius", [serializable], function () {
              return 1;
            }), _applyDecoratedDescriptor(_class2$a.prototype, "radius", [_dec2$a], Object.getOwnPropertyDescriptor(_class2$a.prototype, "radius"), _class2$a.prototype)), _class2$a)) || _class$a));

            var _dec$9, _dec2$9, _dec3$8, _class$9, _class2$9, _initializer$9, _initializer2$9;
            const {
              ccclass: ccclass$9,
              menu: menu$8,
              property: property$9
            } = _decorator;
            let PolygonCollider2D = exports('k', (_dec$9 = ccclass$9('cc.PolygonCollider2D'), _dec2$9 = type$3(CCFloat), _dec3$8 = type$3([Vec2]), _dec$9(_class$9 = (_class2$9 = class PolygonCollider2D extends Collider2D {
              constructor(...args) {
                super(...args);
                this.threshold = _initializer$9 && _initializer$9();
                this._points = _initializer2$9 && _initializer2$9();
                this.TYPE = ECollider2DType.POLYGON;
              }
              get points() {
                return this._points;
              }
              set points(v) {
                this._points = v;
              }
              get worldPoints() {
                if (this._shape) {
                  return this._shape.worldPoints;
                }
                return [];
              }
            }, (_initializer$9 = applyDecoratedInitializer(_class2$9.prototype, "threshold", [_dec2$9], function () {
              return 1;
            }), _initializer2$9 = applyDecoratedInitializer(_class2$9.prototype, "_points", [serializable], function () {
              return [new Vec2(-1, -1), new Vec2(1, -1), new Vec2(1, 1), new Vec2(-1, 1)];
            }), _applyDecoratedDescriptor(_class2$9.prototype, "points", [_dec3$8], Object.getOwnPropertyDescriptor(_class2$9.prototype, "points"), _class2$9.prototype)), _class2$9)) || _class$9));

            var _dec$8, _dec2$8, _class$8, _class2$8, _initializer$8, _initializer2$8, _initializer3$6, _initializer4$5;
            const {
              ccclass: ccclass$8,
              type,
              property: property$8
            } = _decorator;
            let Joint2D = exports('J', (_dec$8 = ccclass$8('cc.Joint2D'), _dec2$8 = type(RigidBody2D), _dec$8(_class$8 = (_class2$8 = class Joint2D extends Component {
              constructor(...args) {
                super(...args);
                this.anchor = _initializer$8 && _initializer$8();
                this.connectedAnchor = _initializer2$8 && _initializer2$8();
                this.collideConnected = _initializer3$6 && _initializer3$6();
                this.connectedBody = _initializer4$5 && _initializer4$5();
                this._body = null;
                this._joint = null;
                this.TYPE = EJoint2DType.None;
              }
              get body() {
                return this._body;
              }
              get impl() {
                return this._joint;
              }
              onLoad() {
                {
                  this._joint = createJoint(this.TYPE);
                  this._joint.initialize(this);
                  this._body = this.getComponent(RigidBody2D);
                }
              }
              onEnable() {
                if (this._joint && this._joint.onEnable) {
                  this._joint.onEnable();
                }
              }
              onDisable() {
                if (this._joint && this._joint.onDisable) {
                  this._joint.onDisable();
                }
              }
              start() {
                if (this._joint && this._joint.start) {
                  this._joint.start();
                }
              }
              onDestroy() {
                if (this._joint && this._joint.onDestroy) {
                  this._joint.onDestroy();
                }
              }
              apply() {
                if (this._joint && this._joint.apply) {
                  this._joint.apply();
                }
              }
            }, (_initializer$8 = applyDecoratedInitializer(_class2$8.prototype, "anchor", [serializable], function () {
              return new Vec2();
            }), _initializer2$8 = applyDecoratedInitializer(_class2$8.prototype, "connectedAnchor", [serializable], function () {
              return new Vec2();
            }), _initializer3$6 = applyDecoratedInitializer(_class2$8.prototype, "collideConnected", [serializable], function () {
              return false;
            }), _initializer4$5 = applyDecoratedInitializer(_class2$8.prototype, "connectedBody", [_dec2$8, serializable], function () {
              return null;
            })), _class2$8)) || _class$8));

            var _dec$7, _dec2$7, _dec3$7, _class$7, _class2$7, _initializer$7, _initializer2$7;
            const {
              ccclass: ccclass$7,
              menu: menu$7,
              property: property$7
            } = _decorator;
            let DistanceJoint2D = exports('D', (_dec$7 = ccclass$7('cc.DistanceJoint2D'), _dec2$7 = type$3(CCFloat), _dec3$7 = type$3(CCBoolean), _dec$7(_class$7 = (_class2$7 = class DistanceJoint2D extends Joint2D {
              constructor(...args) {
                super(...args);
                this.TYPE = EJoint2DType.DISTANCE;
                this._maxLength = _initializer$7 && _initializer$7();
                this._autoCalcDistance = _initializer2$7 && _initializer2$7();
              }
              get maxLength() {
                if (this._autoCalcDistance) {
                  if (this.connectedBody) {
                    return Vec3.distance(this.node.worldPosition, this.connectedBody.node.worldPosition);
                  } else {
                    return Vec3.len(this.node.worldPosition);
                  }
                }
                return this._maxLength;
              }
              set maxLength(v) {
                this._maxLength = v;
                if (this._joint) {
                  this._joint.setMaxLength(v);
                }
              }
              get autoCalcDistance() {
                return this._autoCalcDistance;
              }
              set autoCalcDistance(v) {
                this._autoCalcDistance = v;
              }
            }, (_applyDecoratedDescriptor(_class2$7.prototype, "maxLength", [_dec2$7], Object.getOwnPropertyDescriptor(_class2$7.prototype, "maxLength"), _class2$7.prototype), _applyDecoratedDescriptor(_class2$7.prototype, "autoCalcDistance", [_dec3$7], Object.getOwnPropertyDescriptor(_class2$7.prototype, "autoCalcDistance"), _class2$7.prototype), _initializer$7 = applyDecoratedInitializer(_class2$7.prototype, "_maxLength", [serializable], function () {
              return 5;
            }), _initializer2$7 = applyDecoratedInitializer(_class2$7.prototype, "_autoCalcDistance", [serializable], function () {
              return true;
            })), _class2$7)) || _class$7));

            var _dec$6, _dec2$6, _dec3$6, _dec4$5, _dec5$4, _class$6, _class2$6, _initializer$6, _initializer2$6, _initializer3$5, _initializer4$4;
            const {
              ccclass: ccclass$6,
              property: property$6,
              menu: menu$6
            } = _decorator;
            let SpringJoint2D = exports('S', (_dec$6 = ccclass$6('cc.SpringJoint2D'), _dec2$6 = type$3(CCFloat), _dec3$6 = type$3(CCFloat), _dec4$5 = type$3(CCFloat), _dec5$4 = type$3(CCBoolean), _dec$6(_class$6 = (_class2$6 = class SpringJoint2D extends Joint2D {
              constructor(...args) {
                super(...args);
                this.TYPE = EJoint2DType.SPRING;
                this._frequency = _initializer$6 && _initializer$6();
                this._dampingRatio = _initializer2$6 && _initializer2$6();
                this._distance = _initializer3$5 && _initializer3$5();
                this._autoCalcDistance = _initializer4$4 && _initializer4$4();
              }
              get frequency() {
                return this._frequency;
              }
              set frequency(v) {
                this._frequency = v;
                if (this._joint) {
                  this._joint.setFrequency(v);
                }
              }
              get dampingRatio() {
                return this._dampingRatio;
              }
              set dampingRatio(v) {
                this._dampingRatio = v;
                if (this._joint) {
                  this._joint.setDampingRatio(v);
                }
              }
              get distance() {
                if (this._autoCalcDistance) {
                  if (this.connectedBody) {
                    return Vec3.distance(this.node.worldPosition, this.connectedBody.node.worldPosition);
                  } else {
                    return Vec3.len(this.node.worldPosition);
                  }
                }
                return this._distance;
              }
              set distance(v) {
                this._distance = v;
                if (this._joint) {
                  this._joint.setDistance(v);
                }
              }
              get autoCalcDistance() {
                return this._autoCalcDistance;
              }
              set autoCalcDistance(v) {
                this._autoCalcDistance = v;
              }
            }, (_applyDecoratedDescriptor(_class2$6.prototype, "frequency", [_dec2$6], Object.getOwnPropertyDescriptor(_class2$6.prototype, "frequency"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "dampingRatio", [_dec3$6], Object.getOwnPropertyDescriptor(_class2$6.prototype, "dampingRatio"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "distance", [_dec4$5], Object.getOwnPropertyDescriptor(_class2$6.prototype, "distance"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "autoCalcDistance", [_dec5$4], Object.getOwnPropertyDescriptor(_class2$6.prototype, "autoCalcDistance"), _class2$6.prototype), _initializer$6 = applyDecoratedInitializer(_class2$6.prototype, "_frequency", [serializable], function () {
              return 5;
            }), _initializer2$6 = applyDecoratedInitializer(_class2$6.prototype, "_dampingRatio", [serializable], function () {
              return 0.7;
            }), _initializer3$5 = applyDecoratedInitializer(_class2$6.prototype, "_distance", [serializable], function () {
              return 10;
            }), _initializer4$4 = applyDecoratedInitializer(_class2$6.prototype, "_autoCalcDistance", [serializable], function () {
              return true;
            })), _class2$6)) || _class$6));

            var _dec$5, _dec2$5, _dec3$5, _dec4$4, _class$5, _class2$5, _initializer$5, _initializer2$5, _initializer3$4;
            const {
              ccclass: ccclass$5,
              menu: menu$5,
              property: property$5
            } = _decorator;
            let MouseJoint2D = exports('M', (_dec$5 = ccclass$5('cc.MouseJoint2D'), _dec2$5 = type$3(CCFloat), _dec3$5 = type$3(CCFloat), _dec4$4 = type$3(CCFloat), _dec$5(_class$5 = (_class2$5 = class MouseJoint2D extends Joint2D {
              constructor(...args) {
                super(...args);
                this.TYPE = EJoint2DType.MOUSE;
                this._maxForce = _initializer$5 && _initializer$5();
                this._dampingRatio = _initializer2$5 && _initializer2$5();
                this._frequency = _initializer3$4 && _initializer3$4();
                this._target = new Vec2();
              }
              get target() {
                return this._target;
              }
              set target(v) {
                this._target = v;
                if (this._joint) {
                  this._joint.setTarget(v);
                }
              }
              get frequency() {
                return this._frequency;
              }
              set frequency(v) {
                this._frequency = v;
                if (this._joint) {
                  this._joint.setFrequency(v);
                }
              }
              get dampingRatio() {
                return this._dampingRatio;
              }
              set dampingRatio(v) {
                this._dampingRatio = v;
                if (this._joint) {
                  this._joint.setDampingRatio(v);
                }
              }
              get maxForce() {
                return this._maxForce;
              }
              set maxForce(v) {
                this._maxForce = v;
                if (this._joint) {
                  this._joint.setMaxForce(v);
                }
              }
              update(dt) {
                this._joint.update(dt);
              }
            }, (_applyDecoratedDescriptor(_class2$5.prototype, "frequency", [_dec2$5], Object.getOwnPropertyDescriptor(_class2$5.prototype, "frequency"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "dampingRatio", [_dec3$5], Object.getOwnPropertyDescriptor(_class2$5.prototype, "dampingRatio"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "maxForce", [_dec4$4], Object.getOwnPropertyDescriptor(_class2$5.prototype, "maxForce"), _class2$5.prototype), _initializer$5 = applyDecoratedInitializer(_class2$5.prototype, "_maxForce", [serializable], function () {
              return 1000;
            }), _initializer2$5 = applyDecoratedInitializer(_class2$5.prototype, "_dampingRatio", [serializable], function () {
              return 0.7;
            }), _initializer3$4 = applyDecoratedInitializer(_class2$5.prototype, "_frequency", [serializable], function () {
              return 5;
            })), _class2$5)) || _class$5));

            var _dec$4, _dec2$4, _dec3$4, _dec4$3, _dec5$3, _dec6$3, _dec7$3, _class$4, _class2$4, _initializer$4, _initializer2$4, _initializer3$3, _initializer4$3, _initializer5$3, _initializer6$3;
            const tempVec3_1 = new Vec3();
            const tempVec3_2 = new Vec3();
            const {
              ccclass: ccclass$4,
              menu: menu$4,
              property: property$4
            } = _decorator;
            let RelativeJoint2D = exports('l', (_dec$4 = ccclass$4('cc.RelativeJoint2D'), _dec2$4 = type$3(CCFloat), _dec3$4 = type$3(CCFloat), _dec4$3 = type$3(CCFloat), _dec5$3 = type$3(Vec2), _dec6$3 = type$3(CCFloat), _dec7$3 = type$3(CCBoolean), _dec$4(_class$4 = (_class2$4 = class RelativeJoint2D extends Joint2D {
              constructor(...args) {
                super(...args);
                this.TYPE = EJoint2DType.RELATIVE;
                this._maxForce = _initializer$4 && _initializer$4();
                this._maxTorque = _initializer2$4 && _initializer2$4();
                this._correctionFactor = _initializer3$3 && _initializer3$3();
                this._angularOffset = _initializer4$3 && _initializer4$3();
                this._linearOffset = _initializer5$3 && _initializer5$3();
                this._autoCalcOffset = _initializer6$3 && _initializer6$3();
              }
              get maxForce() {
                return this._maxForce;
              }
              set maxForce(v) {
                this._maxForce = v;
                if (this._joint) {
                  this._joint.setMaxForce(v);
                }
              }
              get maxTorque() {
                return this._maxTorque;
              }
              set maxTorque(v) {
                this._maxTorque = v;
                if (this._joint) {
                  this._joint.setMaxTorque(v);
                }
              }
              get correctionFactor() {
                return this._correctionFactor;
              }
              set correctionFactor(v) {
                this._correctionFactor = v;
                if (this._joint) {
                  this._joint.setCorrectionFactor(v);
                }
              }
              get linearOffset() {
                if (this._autoCalcOffset) {
                  if (this.connectedBody) {
                    return Vec2.subtract(this._linearOffset, this.connectedBody.node.worldPosition, this.node.worldPosition);
                  } else {
                    return Vec2.subtract(this._linearOffset, new Vec2(0, 0), this.node.worldPosition);
                  }
                }
                return this._linearOffset;
              }
              set linearOffset(v) {
                this._linearOffset.set(v);
                if (this._joint) {
                  this._joint.setLinearOffset(v);
                }
              }
              get angularOffset() {
                if (this._autoCalcOffset) {
                  Quat.toEuler(tempVec3_1, this.node.worldRotation);
                  if (this.connectedBody) {
                    Quat.toEuler(tempVec3_2, this.connectedBody.node.worldRotation);
                  } else {
                    Quat.toEuler(tempVec3_2, new Quat());
                  }
                  this._angularOffset = tempVec3_2.z - tempVec3_1.z;
                }
                return this._angularOffset;
              }
              set angularOffset(v) {
                this._angularOffset = v;
                if (this._joint) {
                  this._joint.setAngularOffset(v);
                }
              }
              get autoCalcOffset() {
                return this._autoCalcOffset;
              }
              set autoCalcOffset(v) {
                this._autoCalcOffset = v;
              }
            }, (_applyDecoratedDescriptor(_class2$4.prototype, "maxForce", [_dec2$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "maxForce"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "maxTorque", [_dec3$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "maxTorque"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "correctionFactor", [_dec4$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "correctionFactor"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "linearOffset", [_dec5$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "linearOffset"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "angularOffset", [_dec6$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "angularOffset"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "autoCalcOffset", [_dec7$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "autoCalcOffset"), _class2$4.prototype), _initializer$4 = applyDecoratedInitializer(_class2$4.prototype, "_maxForce", [serializable], function () {
              return 5;
            }), _initializer2$4 = applyDecoratedInitializer(_class2$4.prototype, "_maxTorque", [serializable], function () {
              return 0.7;
            }), _initializer3$3 = applyDecoratedInitializer(_class2$4.prototype, "_correctionFactor", [serializable], function () {
              return 0.3;
            }), _initializer4$3 = applyDecoratedInitializer(_class2$4.prototype, "_angularOffset", [serializable], function () {
              return 0;
            }), _initializer5$3 = applyDecoratedInitializer(_class2$4.prototype, "_linearOffset", [serializable], function () {
              return new Vec2();
            }), _initializer6$3 = applyDecoratedInitializer(_class2$4.prototype, "_autoCalcOffset", [serializable], function () {
              return true;
            })), _class2$4)) || _class$4));

            var _dec$3, _dec2$3, _dec3$3, _dec4$2, _dec5$2, _dec6$2, _dec7$2, _dec8, _dec9, _class$3, _class2$3, _initializer$3, _initializer2$3, _initializer3$2, _initializer4$2, _initializer5$2, _initializer6$2, _initializer7, _initializer8;
            const tempVec2 = new Vec2();
            const {
              ccclass: ccclass$3,
              menu: menu$3,
              property: property$3
            } = _decorator;
            let SliderJoint2D = exports('m', (_dec$3 = ccclass$3('cc.SliderJoint2D'), _dec2$3 = type$3(CCFloat), _dec3$3 = type$3(CCBoolean), _dec4$2 = type$3(CCBoolean), _dec5$2 = type$3(CCFloat), _dec6$2 = type$3(CCFloat), _dec7$2 = type$3(CCBoolean), _dec8 = type$3(CCFloat), _dec9 = type$3(CCFloat), _dec$3(_class$3 = (_class2$3 = class SliderJoint2D extends Joint2D {
              constructor(...args) {
                super(...args);
                this.TYPE = EJoint2DType.SLIDER;
                this._angle = _initializer$3 && _initializer$3();
                this._autoCalcAngle = _initializer2$3 && _initializer2$3();
                this._enableMotor = _initializer3$2 && _initializer3$2();
                this._maxMotorForce = _initializer4$2 && _initializer4$2();
                this._motorSpeed = _initializer5$2 && _initializer5$2();
                this._enableLimit = _initializer6$2 && _initializer6$2();
                this._lowerLimit = _initializer7 && _initializer7();
                this._upperLimit = _initializer8 && _initializer8();
              }
              get angle() {
                if (this._autoCalcAngle) {
                  if (this.connectedBody) {
                    Vec2.subtract(tempVec2, this.connectedBody.node.worldPosition, this.node.worldPosition);
                  } else {
                    Vec2.subtract(tempVec2, new Vec2(0, 0), this.node.worldPosition);
                  }
                  this._angle = toDegree(Math.atan2(tempVec2.y, tempVec2.x));
                }
                return this._angle;
              }
              set angle(v) {
                this._angle = v;
              }
              get autoCalcAngle() {
                return this._autoCalcAngle;
              }
              set autoCalcAngle(v) {
                this._autoCalcAngle = v;
              }
              get enableMotor() {
                return this._enableMotor;
              }
              set enableMotor(v) {
                this._enableMotor = v;
              }
              get maxMotorForce() {
                return this._maxMotorForce;
              }
              set maxMotorForce(v) {
                this._maxMotorForce = v;
                if (this._joint) {
                  this._joint.setMaxMotorForce(v);
                }
              }
              get motorSpeed() {
                return this._motorSpeed;
              }
              set motorSpeed(v) {
                this._motorSpeed = v;
                if (this._joint) {
                  this._joint.setMotorSpeed(v);
                }
              }
              get enableLimit() {
                return this._enableLimit;
              }
              set enableLimit(v) {
                this._enableLimit = v;
              }
              get lowerLimit() {
                return this._lowerLimit;
              }
              set lowerLimit(v) {
                this._lowerLimit = v;
                if (this._joint) {
                  this._joint.setLowerLimit(v);
                }
              }
              get upperLimit() {
                return this._upperLimit;
              }
              set upperLimit(v) {
                this._upperLimit = v;
                if (this._joint) {
                  this._joint.setUpperLimit(v);
                }
              }
            }, (_applyDecoratedDescriptor(_class2$3.prototype, "angle", [_dec2$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "angle"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "autoCalcAngle", [_dec3$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "autoCalcAngle"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "enableMotor", [_dec4$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "enableMotor"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "maxMotorForce", [_dec5$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "maxMotorForce"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "motorSpeed", [_dec6$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "motorSpeed"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "enableLimit", [_dec7$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "enableLimit"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "lowerLimit", [_dec8], Object.getOwnPropertyDescriptor(_class2$3.prototype, "lowerLimit"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "upperLimit", [_dec9], Object.getOwnPropertyDescriptor(_class2$3.prototype, "upperLimit"), _class2$3.prototype), _initializer$3 = applyDecoratedInitializer(_class2$3.prototype, "_angle", [serializable], function () {
              return 0;
            }), _initializer2$3 = applyDecoratedInitializer(_class2$3.prototype, "_autoCalcAngle", [serializable], function () {
              return true;
            }), _initializer3$2 = applyDecoratedInitializer(_class2$3.prototype, "_enableMotor", [serializable], function () {
              return false;
            }), _initializer4$2 = applyDecoratedInitializer(_class2$3.prototype, "_maxMotorForce", [serializable], function () {
              return 1000;
            }), _initializer5$2 = applyDecoratedInitializer(_class2$3.prototype, "_motorSpeed", [serializable], function () {
              return 1000;
            }), _initializer6$2 = applyDecoratedInitializer(_class2$3.prototype, "_enableLimit", [serializable], function () {
              return false;
            }), _initializer7 = applyDecoratedInitializer(_class2$3.prototype, "_lowerLimit", [serializable], function () {
              return 0;
            }), _initializer8 = applyDecoratedInitializer(_class2$3.prototype, "_upperLimit", [serializable], function () {
              return 0;
            })), _class2$3)) || _class$3));

            var _dec$2, _dec2$2, _dec3$2, _class$2, _class2$2, _initializer$2, _initializer2$2;
            const {
              ccclass: ccclass$2,
              menu: menu$2,
              property: property$2
            } = _decorator;
            let FixedJoint2D = exports('F', (_dec$2 = ccclass$2('cc.FixedJoint2D'), _dec2$2 = type$3(CCFloat), _dec3$2 = type$3(CCFloat), _dec$2(_class$2 = (_class2$2 = class FixedJoint2D extends Joint2D {
              constructor(...args) {
                super(...args);
                this.TYPE = EJoint2DType.FIXED;
                this._frequency = _initializer$2 && _initializer$2();
                this._dampingRatio = _initializer2$2 && _initializer2$2();
              }
              get frequency() {
                return this._frequency;
              }
              set frequency(v) {
                this._frequency = v;
                if (this._joint) {
                  this._joint.setFrequency(v);
                }
              }
              get dampingRatio() {
                return this._dampingRatio;
              }
              set dampingRatio(v) {
                this._dampingRatio = v;
                if (this._joint) {
                  this._joint.setDampingRatio(v);
                }
              }
            }, (_applyDecoratedDescriptor(_class2$2.prototype, "frequency", [_dec2$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "frequency"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "dampingRatio", [_dec3$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "dampingRatio"), _class2$2.prototype), _initializer$2 = applyDecoratedInitializer(_class2$2.prototype, "_frequency", [serializable], function () {
              return 0.7;
            }), _initializer2$2 = applyDecoratedInitializer(_class2$2.prototype, "_dampingRatio", [serializable], function () {
              return 0.5;
            })), _class2$2)) || _class$2));

            var _dec$1, _dec2$1, _dec3$1, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _class$1, _class2$1, _initializer$1, _initializer2$1, _initializer3$1, _initializer4$1, _initializer5$1, _initializer6$1;
            const {
              ccclass: ccclass$1,
              menu: menu$1,
              property: property$1
            } = _decorator;
            let WheelJoint2D = exports('W', (_dec$1 = ccclass$1('cc.WheelJoint2D'), _dec2$1 = type$3(CCFloat), _dec3$1 = type$3(CCBoolean), _dec4$1 = type$3(CCFloat), _dec5$1 = type$3(CCFloat), _dec6$1 = type$3(CCFloat), _dec7$1 = type$3(CCFloat), _dec$1(_class$1 = (_class2$1 = class WheelJoint2D extends Joint2D {
              constructor(...args) {
                super(...args);
                this.TYPE = EJoint2DType.WHEEL;
                this._angle = _initializer$1 && _initializer$1();
                this._enableMotor = _initializer2$1 && _initializer2$1();
                this._maxMotorTorque = _initializer3$1 && _initializer3$1();
                this._motorSpeed = _initializer4$1 && _initializer4$1();
                this._frequency = _initializer5$1 && _initializer5$1();
                this._dampingRatio = _initializer6$1 && _initializer6$1();
              }
              get angle() {
                return this._angle;
              }
              set angle(v) {
                this._angle = v;
              }
              get enableMotor() {
                return this._enableMotor;
              }
              set enableMotor(v) {
                this._enableMotor = v;
                if (this._joint) {
                  this._joint.enableMotor(v);
                }
              }
              get maxMotorTorque() {
                return this._maxMotorTorque;
              }
              set maxMotorTorque(v) {
                this._maxMotorTorque = v;
                if (this._joint) {
                  this._joint.setMaxMotorTorque(v);
                }
              }
              get motorSpeed() {
                return this._motorSpeed;
              }
              set motorSpeed(v) {
                this._motorSpeed = v;
                if (this._joint) {
                  this._joint.setMotorSpeed(v);
                }
              }
              get frequency() {
                return this._frequency;
              }
              set frequency(v) {
                this._frequency = v;
                if (this._joint) {
                  this._joint.setFrequency(v);
                }
              }
              get dampingRatio() {
                return this._dampingRatio;
              }
              set dampingRatio(v) {
                this._dampingRatio = v;
                if (this._joint) {
                  this._joint.setDampingRatio(v);
                }
              }
            }, (_applyDecoratedDescriptor(_class2$1.prototype, "angle", [_dec2$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "angle"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "enableMotor", [_dec3$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "enableMotor"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "maxMotorTorque", [_dec4$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "maxMotorTorque"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "motorSpeed", [_dec5$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "motorSpeed"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "frequency", [_dec6$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "frequency"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "dampingRatio", [_dec7$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "dampingRatio"), _class2$1.prototype), _initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "_angle", [serializable], function () {
              return 90;
            }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "_enableMotor", [serializable], function () {
              return false;
            }), _initializer3$1 = applyDecoratedInitializer(_class2$1.prototype, "_maxMotorTorque", [serializable], function () {
              return 1000;
            }), _initializer4$1 = applyDecoratedInitializer(_class2$1.prototype, "_motorSpeed", [serializable], function () {
              return 0;
            }), _initializer5$1 = applyDecoratedInitializer(_class2$1.prototype, "_frequency", [serializable], function () {
              return 5;
            }), _initializer6$1 = applyDecoratedInitializer(_class2$1.prototype, "_dampingRatio", [serializable], function () {
              return 0.7;
            })), _class2$1)) || _class$1));

            var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6;
            const {
              ccclass,
              menu,
              property
            } = _decorator;
            let HingeJoint2D = exports('H', (_dec = ccclass('cc.HingeJoint2D'), _dec2 = type$3(CCBoolean), _dec3 = type$3(CCFloat), _dec4 = type$3(CCFloat), _dec5 = type$3(CCBoolean), _dec6 = type$3(CCFloat), _dec7 = type$3(CCFloat), _dec(_class = (_class2 = class HingeJoint2D extends Joint2D {
              constructor(...args) {
                super(...args);
                this.TYPE = EJoint2DType.HINGE;
                this._enableLimit = _initializer && _initializer();
                this._lowerAngle = _initializer2 && _initializer2();
                this._upperAngle = _initializer3 && _initializer3();
                this._enableMotor = _initializer4 && _initializer4();
                this._maxMotorTorque = _initializer5 && _initializer5();
                this._motorSpeed = _initializer6 && _initializer6();
              }
              get enableLimit() {
                return this._enableLimit;
              }
              set enableLimit(v) {
                this._enableLimit = v;
              }
              get lowerAngle() {
                return this._lowerAngle;
              }
              set lowerAngle(v) {
                this._lowerAngle = v;
                if (this._joint) {
                  this._joint.setLowerAngle(v);
                }
              }
              get upperAngle() {
                return this._upperAngle;
              }
              set upperAngle(v) {
                this._upperAngle = v;
                if (this._joint) {
                  this._joint.setUpperAngle(v);
                }
              }
              get enableMotor() {
                return this._enableMotor;
              }
              set enableMotor(v) {
                this._enableMotor = v;
                if (this._joint) {
                  this._joint.enableMotor(v);
                }
              }
              get maxMotorTorque() {
                return this._maxMotorTorque;
              }
              set maxMotorTorque(v) {
                this._maxMotorTorque = v;
                if (this._joint) {
                  this._joint.setMaxMotorTorque(v);
                }
              }
              get motorSpeed() {
                return this._motorSpeed;
              }
              set motorSpeed(v) {
                this._motorSpeed = v;
                if (this._joint) {
                  this._joint.setMotorSpeed(v);
                }
              }
            }, (_applyDecoratedDescriptor(_class2.prototype, "enableLimit", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "enableLimit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "lowerAngle", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "lowerAngle"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "upperAngle", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "upperAngle"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "enableMotor", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "enableMotor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxMotorTorque", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "maxMotorTorque"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "motorSpeed", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "motorSpeed"), _class2.prototype), _initializer = applyDecoratedInitializer(_class2.prototype, "_enableLimit", [serializable], function () {
              return false;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "_lowerAngle", [serializable], function () {
              return 0;
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "_upperAngle", [serializable], function () {
              return 0;
            }), _initializer4 = applyDecoratedInitializer(_class2.prototype, "_enableMotor", [serializable], function () {
              return false;
            }), _initializer5 = applyDecoratedInitializer(_class2.prototype, "_maxMotorTorque", [serializable], function () {
              return 1000;
            }), _initializer6 = applyDecoratedInitializer(_class2.prototype, "_motorSpeed", [serializable], function () {
              return 0;
            })), _class2)) || _class));

            const Physics2DUtils = exports('P', {
              PolygonSeparator,
              PolygonPartition
            });
            legacyCC.internal.physics2d = {
              selector
            };

        })
    };
}));
