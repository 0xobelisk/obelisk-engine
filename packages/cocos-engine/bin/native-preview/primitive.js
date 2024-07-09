System.register(['./find-7a03d1cc.js', './device-90bc7390.js', './capsule-3c7095c4.js', './index-ce98320e.js', './create-mesh.jsb-8af9d27e.js', './buffer-9511d9f4.js', './mesh.jsb-cea8fe4b.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './decorators-b63b63a2.js'], (function (exports) {
    'use strict';
    var PrimitiveMode, cylinder, applyDefaultGeometryOptions, box, plane, capsule, Vec3, ccenum, ccclass, type, applyDecoratedInitializer, legacyCC, serializable, createMesh, Mesh;
    return {
        setters: [function () {}, function (module) {
            PrimitiveMode = module.u;
        }, function (module) {
            cylinder = module.c;
            applyDefaultGeometryOptions = module.a;
            box = module.b;
            plane = module.p;
            capsule = module.d;
        }, function (module) {
            Vec3 = module.n;
            ccenum = module.ab;
            ccclass = module.by;
            type = module.bw;
            applyDecoratedInitializer = module.bx;
            legacyCC = module.l;
            serializable = module.bf;
        }, function (module) {
            createMesh = module.c;
        }, function () {}, function (module) {
            Mesh = module.M;
        }, function () {}, function () {}],
        execute: (function () {

            function wireframe(indices) {
              const offsets = [[0, 1], [1, 2], [2, 0]];
              const lines = [];
              const lineIDs = {};
              for (let i = 0; i < indices.length; i += 3) {
                for (let k = 0; k < 3; ++k) {
                  const i1 = indices[i + offsets[k][0]];
                  const i2 = indices[i + offsets[k][1]];
                  const id = i1 > i2 ? i2 << 16 | i1 : i1 << 16 | i2;
                  if (lineIDs[id] === undefined) {
                    lineIDs[id] = 0;
                    lines.push(i1, i2);
                  }
                }
              }
              return lines;
            }
            function invWinding(indices) {
              const newIB = [];
              for (let i = 0; i < indices.length; i += 3) {
                newIB.push(indices[i], indices[i + 2], indices[i + 1]);
              }
              return newIB;
            }
            function toWavefrontOBJ(primitive, scale = 1) {
              if (!primitive.indices || !primitive.uvs || !primitive.normals || primitive.primitiveMode !== undefined && primitive.primitiveMode !== PrimitiveMode.TRIANGLE_LIST) {
                return '';
              }
              const v = primitive.positions;
              const t = primitive.uvs;
              const n = primitive.normals;
              const IB = primitive.indices;
              const V = i => `${IB[i] + 1}/${IB[i] + 1}/${IB[i] + 1}`;
              let content = '';
              for (let i = 0; i < v.length; i += 3) {
                content += `v ${v[i] * scale} ${v[i + 1] * scale} ${v[i + 2] * scale}\n`;
              }
              for (let i = 0; i < t.length; i += 2) {
                content += `vt ${t[i]} ${t[i + 1]}\n`;
              }
              for (let i = 0; i < n.length; i += 3) {
                content += `vn ${n[i]} ${n[i + 1]} ${n[i + 2]}\n`;
              }
              for (let i = 0; i < IB.length; i += 3) {
                content += `f ${V(i)} ${V(i + 1)} ${V(i + 2)}\n`;
              }
              return content;
            }
            function normals(positions, nms, length = 1) {
              const verts = new Array(2 * positions.length);
              for (let i = 0; i < positions.length / 3; ++i) {
                const i3 = 3 * i;
                const i6 = 6 * i;
                verts[i6 + 0] = positions[i3 + 0];
                verts[i6 + 1] = positions[i3 + 1];
                verts[i6 + 2] = positions[i3 + 2];
                verts[i6 + 3] = positions[i3 + 0] + nms[i3 + 0] * length;
                verts[i6 + 4] = positions[i3 + 1] + nms[i3 + 1] * length;
                verts[i6 + 5] = positions[i3 + 2] + nms[i3 + 2] * length;
              }
              return verts;
            }

            function cone(radius = 0.5, height = 1, opts = {}) {
              return cylinder(0, radius, height, opts);
            }

            function quad(options) {
              const normalizedOptions = applyDefaultGeometryOptions(options);
              const result = {
                positions: [-0.5, -0.5, 0, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0],
                indices: [0, 3, 1, 3, 2, 1],
                minPos: {
                  x: -0.5,
                  y: -0.5,
                  z: 0
                },
                maxPos: {
                  x: 0.5,
                  y: 0.5,
                  z: 0
                },
                boundingRadius: Math.sqrt(0.5 * 0.5 + 0.5 * 0.5)
              };
              if (normalizedOptions.includeNormal !== false) {
                result.normals = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
              }
              if (normalizedOptions.includeUV !== false) {
                result.uvs = [0, 0, 0, 1, 1, 1, 1, 0];
              }
              return result;
            }

            function sphere(radius = 0.5, opts = {}) {
              const segments = opts.segments !== undefined ? opts.segments : 32;
              const positions = [];
              const normals = [];
              const uvs = [];
              const indices = [];
              const minPos = new Vec3(-radius, -radius, -radius);
              const maxPos = new Vec3(radius, radius, radius);
              const boundingRadius = radius;
              for (let lat = 0; lat <= segments; ++lat) {
                const theta = lat * Math.PI / segments;
                const sinTheta = Math.sin(theta);
                const cosTheta = -Math.cos(theta);
                for (let lon = 0; lon <= segments; ++lon) {
                  const phi = lon * 2 * Math.PI / segments - Math.PI / 2.0;
                  const sinPhi = Math.sin(phi);
                  const cosPhi = Math.cos(phi);
                  const x = sinPhi * sinTheta;
                  const y = cosTheta;
                  const z = cosPhi * sinTheta;
                  const u = lon / segments;
                  const v = lat / segments;
                  positions.push(x * radius, y * radius, z * radius);
                  normals.push(x, y, z);
                  uvs.push(u, v);
                  if (lat < segments && lon < segments) {
                    const seg1 = segments + 1;
                    const a = seg1 * lat + lon;
                    const b = seg1 * (lat + 1) + lon;
                    const c = seg1 * (lat + 1) + lon + 1;
                    const d = seg1 * lat + lon + 1;
                    indices.push(a, d, b);
                    indices.push(d, c, b);
                  }
                }
              }
              return {
                positions,
                indices,
                normals,
                uvs,
                minPos,
                maxPos,
                boundingRadius
              };
            }

            function torus(radius = 0.4, tube = 0.1, opts = {}) {
              const radialSegments = opts.radialSegments || 32;
              const tubularSegments = opts.tubularSegments || 32;
              const arc = opts.arc || 2.0 * Math.PI;
              const positions = [];
              const normals = [];
              const uvs = [];
              const indices = [];
              const minPos = new Vec3(-radius - tube, -tube, -radius - tube);
              const maxPos = new Vec3(radius + tube, tube, radius + tube);
              const boundingRadius = radius + tube;
              for (let j = 0; j <= radialSegments; j++) {
                for (let i = 0; i <= tubularSegments; i++) {
                  const u = i / tubularSegments;
                  const v = j / radialSegments;
                  const u1 = u * arc;
                  const v1 = v * Math.PI * 2;
                  const x = (radius + tube * Math.cos(v1)) * Math.sin(u1);
                  const y = tube * Math.sin(v1);
                  const z = (radius + tube * Math.cos(v1)) * Math.cos(u1);
                  const nx = Math.sin(u1) * Math.cos(v1);
                  const ny = Math.sin(v1);
                  const nz = Math.cos(u1) * Math.cos(v1);
                  positions.push(x, y, z);
                  normals.push(nx, ny, nz);
                  uvs.push(u, v);
                  if (i < tubularSegments && j < radialSegments) {
                    const seg1 = tubularSegments + 1;
                    const a = seg1 * j + i;
                    const b = seg1 * (j + 1) + i;
                    const c = seg1 * (j + 1) + i + 1;
                    const d = seg1 * j + i + 1;
                    indices.push(a, d, b);
                    indices.push(d, c, b);
                  }
                }
              }
              return {
                positions,
                normals,
                uvs,
                indices,
                minPos,
                maxPos,
                boundingRadius
              };
            }

            function applyDefaultCircleOptions(options) {
              options = applyDefaultGeometryOptions(options);
              options.segments = 64;
              return options;
            }
            function circle(options) {
              const normalizedOptions = applyDefaultCircleOptions(options);
              const segments = normalizedOptions.segments;
              const positions = new Array(3 * (segments + 1));
              positions[0] = 0;
              positions[1] = 0;
              positions[2] = 0;
              const indices = new Array(1 + segments * 2);
              indices[0] = 0;
              const step = Math.PI * 2 / segments;
              for (let iSegment = 0; iSegment < segments; ++iSegment) {
                const angle = step * iSegment;
                const x = Math.cos(angle);
                const y = Math.sin(angle);
                const p = (iSegment + 1) * 3;
                positions[p + 0] = x;
                positions[p + 1] = y;
                positions[p + 2] = 0;
                const i = iSegment * 2;
                indices[1 + i] = iSegment + 1;
                indices[1 + (i + 1)] = iSegment + 2;
              }
              if (segments > 0) {
                indices[indices.length - 1] = 1;
              }
              const result = {
                positions,
                indices,
                minPos: {
                  x: 1,
                  y: 1,
                  z: 0
                },
                maxPos: {
                  x: -1,
                  y: -1,
                  z: 0
                },
                boundingRadius: 1,
                primitiveMode: PrimitiveMode.TRIANGLE_FAN
              };
              return result;
            }

            function translate(geometry, offset) {
              const x = offset.x || 0;
              const y = offset.y || 0;
              const z = offset.z || 0;
              const nVertex = Math.floor(geometry.positions.length / 3);
              for (let iVertex = 0; iVertex < nVertex; ++iVertex) {
                const iX = iVertex * 3;
                const iY = iVertex * 3 + 1;
                const iZ = iVertex * 3 + 2;
                geometry.positions[iX] += x;
                geometry.positions[iY] += y;
                geometry.positions[iZ] += z;
              }
              if (geometry.minPos) {
                geometry.minPos.x += x;
                geometry.minPos.y += y;
                geometry.minPos.z += z;
              }
              if (geometry.maxPos) {
                geometry.maxPos.x += x;
                geometry.maxPos.y += y;
                geometry.maxPos.z += z;
              }
              return geometry;
            }
            function scale(geometry, value) {
              var _value$x, _value$y, _value$z;
              const x = (_value$x = value.x) !== null && _value$x !== void 0 ? _value$x : 1.0;
              const y = (_value$y = value.y) !== null && _value$y !== void 0 ? _value$y : 1.0;
              const z = (_value$z = value.z) !== null && _value$z !== void 0 ? _value$z : 1.0;
              const nVertex = Math.floor(geometry.positions.length / 3);
              for (let iVertex = 0; iVertex < nVertex; ++iVertex) {
                const iX = iVertex * 3;
                const iY = iVertex * 3 + 1;
                const iZ = iVertex * 3 + 2;
                geometry.positions[iX] *= x;
                geometry.positions[iY] *= y;
                geometry.positions[iZ] *= z;
              }
              const {
                minPos,
                maxPos
              } = geometry;
              if (minPos) {
                minPos.x *= x;
                minPos.y *= y;
                minPos.z *= z;
              }
              if (maxPos) {
                maxPos.x *= x;
                maxPos.y *= y;
                maxPos.z *= z;
              }
              if (minPos && maxPos) {
                if (x < 0) {
                  const tmp = minPos.x;
                  minPos.x = maxPos.x;
                  maxPos.x = tmp;
                }
                if (y < 0) {
                  const tmp = minPos.y;
                  minPos.y = maxPos.y;
                  maxPos.y = tmp;
                }
                if (z < 0) {
                  const tmp = minPos.z;
                  minPos.z = maxPos.z;
                  maxPos.z = tmp;
                }
              }
              if (typeof geometry.boundingRadius !== 'undefined') {
                geometry.boundingRadius *= Math.max(Math.max(Math.abs(x), Math.abs(y)), Math.abs(z));
              }
              return geometry;
            }
            function wireframed(geometry) {
              const {
                indices
              } = geometry;
              if (!indices) {
                return geometry;
              }
              if (geometry.primitiveMode && geometry.primitiveMode !== PrimitiveMode.TRIANGLE_LIST) {
                return geometry;
              }
              const offsets = [[0, 1], [1, 2], [2, 0]];
              const lines = [];
              const lineIDs = {};
              for (let i = 0; i < indices.length; i += 3) {
                for (let k = 0; k < 3; ++k) {
                  const i1 = indices[i + offsets[k][0]];
                  const i2 = indices[i + offsets[k][1]];
                  const id = i1 > i2 ? i2 << 16 | i1 : i1 << 16 | i2;
                  if (lineIDs[id] === undefined) {
                    lineIDs[id] = 0;
                    lines.push(i1, i2);
                  }
                }
              }
              geometry.indices = lines;
              geometry.primitiveMode = PrimitiveMode.LINE_LIST;
              return geometry;
            }

            var primitives = /*#__PURE__*/Object.freeze({
                __proto__: null,
                box: box,
                cone: cone,
                cylinder: cylinder,
                plane: plane,
                quad: quad,
                sphere: sphere,
                torus: torus,
                capsule: capsule,
                circle: circle,
                translate: translate,
                scale: scale,
                wireframed: wireframed,
                wireframe: wireframe,
                invWinding: invWinding,
                toWavefrontOBJ: toWavefrontOBJ,
                normals: normals,
                applyDefaultGeometryOptions: applyDefaultGeometryOptions
            });
            exports('primitives', primitives);

            var _dec, _dec2, _class, _class2, _initializer, _initializer2, _class3;
            var PrimitiveType;
            (function (PrimitiveType) {
              PrimitiveType[PrimitiveType["BOX"] = 0] = "BOX";
              PrimitiveType[PrimitiveType["SPHERE"] = 1] = "SPHERE";
              PrimitiveType[PrimitiveType["CYLINDER"] = 2] = "CYLINDER";
              PrimitiveType[PrimitiveType["CONE"] = 3] = "CONE";
              PrimitiveType[PrimitiveType["CAPSULE"] = 4] = "CAPSULE";
              PrimitiveType[PrimitiveType["TORUS"] = 5] = "TORUS";
              PrimitiveType[PrimitiveType["PLANE"] = 6] = "PLANE";
              PrimitiveType[PrimitiveType["QUAD"] = 7] = "QUAD";
            })(PrimitiveType || (PrimitiveType = {}));
            ccenum(PrimitiveType);
            let Primitive = exports('Primitive', (_dec = ccclass('cc.Primitive'), _dec2 = type(PrimitiveType), _dec(_class = (_class2 = (_class3 = class Primitive extends Mesh {
              constructor(type = PrimitiveType.BOX) {
                super();
                this.type = _initializer && _initializer();
                this.info = _initializer2 && _initializer2();
                this.type = type;
              }
              onLoaded() {
                createMesh(primitives[PrimitiveType[this.type].toLowerCase()](this.info), this);
              }
            }, _class3.PrimitiveType = PrimitiveType, _class3), (_initializer = applyDecoratedInitializer(_class2.prototype, "type", [_dec2], function () {
              return PrimitiveType.BOX;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "info", [serializable], function () {
              return {};
            })), _class2)) || _class));
            legacyCC.Primitive = Primitive;

            legacyCC.primitives = primitives;

        })
    };
}));
