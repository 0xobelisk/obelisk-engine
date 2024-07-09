System.register(['./index-ce98320e.js'], (function (exports) {
    'use strict';
    var Vec3;
    return {
        setters: [function (module) {
            Vec3 = module.n;
        }],
        execute: (function () {

            exports({
                a: applyDefaultGeometryOptions,
                b: box,
                c: cylinder,
                d: capsule,
                p: plane
            });

            function applyDefaultGeometryOptions(options) {
              options = options || {};
              if (options.includeNormal === undefined) {
                options.includeNormal = true;
              }
              if (options.includeUV === undefined) {
                options.includeUV = true;
              }
              return options;
            }

            function box(options) {
              options = options || {};
              const ws = options.widthSegments || 1;
              const hs = options.heightSegments || 1;
              const ls = options.lengthSegments || 1;
              const hw = (options.width || 1) / 2;
              const hh = (options.height || 1) / 2;
              const hl = (options.length || 1) / 2;
              const corners = [Vec3.set(c0, -hw, -hh, hl), Vec3.set(c1, hw, -hh, hl), Vec3.set(c2, hw, hh, hl), Vec3.set(c3, -hw, hh, hl), Vec3.set(c4, hw, -hh, -hl), Vec3.set(c5, -hw, -hh, -hl), Vec3.set(c6, -hw, hh, -hl), Vec3.set(c7, hw, hh, -hl)];
              const faceAxes = [[2, 3, 1], [4, 5, 7], [7, 6, 2], [1, 0, 4], [1, 4, 2], [5, 0, 6]];
              const faceNormals = [[0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0]];
              const faceTangents = [[-1, 0, 0, 1], [-1, 0, 0, 1], [-1, 0, 0, 1], [-1, 0, 0, 1], [0, 0, -1, 1], [0, 0, 1, 1]];
              const positions = [];
              const normals = [];
              const uvs = [];
              const tangents = [];
              const indices = [];
              const minPos = new Vec3(-hw, -hh, -hl);
              const maxPos = new Vec3(hw, hh, hl);
              const boundingRadius = Math.sqrt(hw * hw + hh * hh + hl * hl);
              function _buildPlane(side, uSegments, vSegments) {
                let u;
                let v;
                let ix;
                let iy;
                const offset = positions.length / 3;
                const faceAxe = faceAxes[side];
                const faceNormal = faceNormals[side];
                const faceTangent = faceTangents[side];
                for (iy = 0; iy <= vSegments; iy++) {
                  for (ix = 0; ix <= uSegments; ix++) {
                    u = ix / uSegments;
                    v = iy / vSegments;
                    Vec3.lerp(temp1$3, corners[faceAxe[0]], corners[faceAxe[1]], u);
                    Vec3.lerp(temp2$3, corners[faceAxe[0]], corners[faceAxe[2]], v);
                    Vec3.subtract(temp3$1, temp2$3, corners[faceAxe[0]]);
                    Vec3.add(r$1, temp1$3, temp3$1);
                    positions.push(r$1.x, r$1.y, r$1.z);
                    normals.push(faceNormal[0], faceNormal[1], faceNormal[2]);
                    uvs.push(u, v);
                    tangents.push(faceTangent[0], faceTangent[1], faceTangent[2], faceTangent[3]);
                    if (ix < uSegments && iy < vSegments) {
                      const useg1 = uSegments + 1;
                      const a = ix + iy * useg1;
                      const b = ix + (iy + 1) * useg1;
                      const c = ix + 1 + (iy + 1) * useg1;
                      const d = ix + 1 + iy * useg1;
                      indices.push(offset + a, offset + d, offset + b);
                      indices.push(offset + b, offset + d, offset + c);
                    }
                  }
                }
              }
              _buildPlane(0, ws, hs);
              _buildPlane(4, ls, hs);
              _buildPlane(1, ws, hs);
              _buildPlane(5, ls, hs);
              _buildPlane(3, ws, ls);
              _buildPlane(2, ws, ls);
              return {
                positions,
                normals,
                uvs,
                tangents,
                indices,
                minPos,
                maxPos,
                boundingRadius
              };
            }
            const temp1$3 = new Vec3();
            const temp2$3 = new Vec3();
            const temp3$1 = new Vec3();
            const r$1 = new Vec3();
            const c0 = new Vec3();
            const c1 = new Vec3();
            const c2 = new Vec3();
            const c3 = new Vec3();
            const c4 = new Vec3();
            const c5 = new Vec3();
            const c6 = new Vec3();
            const c7 = new Vec3();

            const temp1$2 = new Vec3(0, 0, 0);
            const temp2$2 = new Vec3(0, 0, 0);
            function cylinder(radiusTop = 0.5, radiusBottom = 0.5, height = 2, opts = {}) {
              const halfHeight = height * 0.5;
              const radialSegments = opts.radialSegments || 32;
              const heightSegments = opts.heightSegments || 1;
              const capped = opts.capped !== undefined ? opts.capped : true;
              const arc = opts.arc || 2.0 * Math.PI;
              let cntCap = 0;
              if (capped) {
                if (radiusTop > 0) {
                  cntCap++;
                }
                if (radiusBottom > 0) {
                  cntCap++;
                }
              }
              let vertCount = (radialSegments + 1) * (heightSegments + 1);
              if (capped) {
                vertCount += (radialSegments + 1) * cntCap + radialSegments * cntCap;
              }
              let indexCount = radialSegments * heightSegments * 2 * 3;
              if (capped) {
                indexCount += radialSegments * cntCap * 3;
              }
              const indices = new Array(indexCount);
              const positions = new Array(vertCount * 3);
              const normals = new Array(vertCount * 3);
              const uvs = new Array(vertCount * 2);
              const maxRadius = Math.max(radiusTop, radiusBottom);
              const minPos = new Vec3(-maxRadius, -halfHeight, -maxRadius);
              const maxPos = new Vec3(maxRadius, halfHeight, maxRadius);
              const boundingRadius = Math.sqrt(maxRadius * maxRadius + halfHeight * halfHeight);
              let index = 0;
              let indexOffset = 0;
              generateTorso();
              if (capped) {
                if (radiusBottom > 0) {
                  generateCap(false);
                }
                if (radiusTop > 0) {
                  generateCap(true);
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
              function generateTorso() {
                const indexArray = [];
                const r = radiusTop - radiusBottom;
                const slope = r * r / height * Math.sign(r);
                for (let y = 0; y <= heightSegments; y++) {
                  const indexRow = [];
                  const v = y / heightSegments;
                  const radius = v * r + radiusBottom;
                  for (let x = 0; x <= radialSegments; ++x) {
                    const u = x / radialSegments;
                    const theta = u * arc;
                    const sinTheta = Math.sin(theta);
                    const cosTheta = Math.cos(theta);
                    positions[3 * index] = radius * sinTheta;
                    positions[3 * index + 1] = v * height - halfHeight;
                    positions[3 * index + 2] = radius * cosTheta;
                    Vec3.normalize(temp1$2, Vec3.set(temp2$2, sinTheta, -slope, cosTheta));
                    normals[3 * index] = temp1$2.x;
                    normals[3 * index + 1] = temp1$2.y;
                    normals[3 * index + 2] = temp1$2.z;
                    uvs[2 * index] = (1 - u) * 2 % 1;
                    uvs[2 * index + 1] = v;
                    indexRow.push(index);
                    ++index;
                  }
                  indexArray.push(indexRow);
                }
                for (let y = 0; y < heightSegments; ++y) {
                  for (let x = 0; x < radialSegments; ++x) {
                    const i1 = indexArray[y][x];
                    const i2 = indexArray[y + 1][x];
                    const i3 = indexArray[y + 1][x + 1];
                    const i4 = indexArray[y][x + 1];
                    indices[indexOffset] = i1;
                    ++indexOffset;
                    indices[indexOffset] = i4;
                    ++indexOffset;
                    indices[indexOffset] = i2;
                    ++indexOffset;
                    indices[indexOffset] = i4;
                    ++indexOffset;
                    indices[indexOffset] = i3;
                    ++indexOffset;
                    indices[indexOffset] = i2;
                    ++indexOffset;
                  }
                }
              }
              function generateCap(top) {
                const radius = top ? radiusTop : radiusBottom;
                const sign = top ? 1 : -1;
                const centerIndexStart = index;
                for (let x = 1; x <= radialSegments; ++x) {
                  positions[3 * index] = 0;
                  positions[3 * index + 1] = halfHeight * sign;
                  positions[3 * index + 2] = 0;
                  normals[3 * index] = 0;
                  normals[3 * index + 1] = sign;
                  normals[3 * index + 2] = 0;
                  uvs[2 * index] = 0.5;
                  uvs[2 * index + 1] = 0.5;
                  ++index;
                }
                const centerIndexEnd = index;
                for (let x = 0; x <= radialSegments; ++x) {
                  const u = x / radialSegments;
                  const theta = u * arc;
                  const cosTheta = Math.cos(theta);
                  const sinTheta = Math.sin(theta);
                  positions[3 * index] = radius * sinTheta;
                  positions[3 * index + 1] = halfHeight * sign;
                  positions[3 * index + 2] = radius * cosTheta;
                  normals[3 * index] = 0;
                  normals[3 * index + 1] = sign;
                  normals[3 * index + 2] = 0;
                  uvs[2 * index] = 0.5 - sinTheta * 0.5 * sign;
                  uvs[2 * index + 1] = 0.5 + cosTheta * 0.5;
                  ++index;
                }
                for (let x = 0; x < radialSegments; ++x) {
                  const c = centerIndexStart + x;
                  const i = centerIndexEnd + x;
                  if (top) {
                    indices[indexOffset] = i + 1;
                    ++indexOffset;
                    indices[indexOffset] = c;
                    ++indexOffset;
                    indices[indexOffset] = i;
                    ++indexOffset;
                  } else {
                    indices[indexOffset] = c;
                    ++indexOffset;
                    indices[indexOffset] = i + 1;
                    ++indexOffset;
                    indices[indexOffset] = i;
                    ++indexOffset;
                  }
                }
              }
            }

            function applyDefaultPlaneOptions(options) {
              options = applyDefaultGeometryOptions(options);
              options.width = options.width || 10;
              options.length = options.length || 10;
              options.widthSegments = options.widthSegments || 10;
              options.lengthSegments = options.lengthSegments || 10;
              return options;
            }
            const temp1$1 = new Vec3(0, 0, 0);
            const temp2$1 = new Vec3(0, 0, 0);
            const temp3 = new Vec3(0, 0, 0);
            const r = new Vec3(0, 0, 0);
            const c00 = new Vec3(0, 0, 0);
            const c10 = new Vec3(0, 0, 0);
            const c01 = new Vec3(0, 0, 0);
            function plane(options) {
              const normalizedOptions = applyDefaultPlaneOptions(options);
              const {
                width,
                length,
                widthSegments: uSegments,
                lengthSegments: vSegments
              } = normalizedOptions;
              const hw = width * 0.5;
              const hl = length * 0.5;
              const positions = [];
              const uvs = [];
              const indices = [];
              const minPos = new Vec3(-hw, 0, -hl);
              const maxPos = new Vec3(hw, 0, hl);
              const boundingRadius = Math.sqrt(width * width + length * length);
              Vec3.set(c00, -hw, 0, hl);
              Vec3.set(c10, hw, 0, hl);
              Vec3.set(c01, -hw, 0, -hl);
              for (let y = 0; y <= vSegments; y++) {
                for (let x = 0; x <= uSegments; x++) {
                  const u = x / uSegments;
                  const v = y / vSegments;
                  Vec3.lerp(temp1$1, c00, c10, u);
                  Vec3.lerp(temp2$1, c00, c01, v);
                  Vec3.subtract(temp3, temp2$1, c00);
                  Vec3.add(r, temp1$1, temp3);
                  positions.push(r.x, r.y, r.z);
                  if (normalizedOptions.includeUV) {
                    uvs.push(u, v);
                  }
                  if (x < uSegments && y < vSegments) {
                    const useg1 = uSegments + 1;
                    const a = x + y * useg1;
                    const b = x + (y + 1) * useg1;
                    const c = x + 1 + (y + 1) * useg1;
                    const d = x + 1 + y * useg1;
                    indices.push(a, d, b);
                    indices.push(d, c, b);
                  }
                }
              }
              const result = {
                positions,
                indices,
                minPos,
                maxPos,
                boundingRadius
              };
              if (normalizedOptions.includeNormal) {
                const nVertex = (vSegments + 1) * (uSegments + 1);
                const normals = new Array(3 * nVertex);
                result.normals = normals;
                for (let i = 0; i < nVertex; ++i) {
                  normals[i * 3 + 0] = 0;
                  normals[i * 3 + 1] = 1;
                  normals[i * 3 + 2] = 0;
                }
              }
              if (normalizedOptions.includeUV) {
                result.uvs = uvs;
              }
              return result;
            }

            const temp1 = new Vec3(0, 0, 0);
            const temp2 = new Vec3(0, 0, 0);
            function capsule(radiusTop = 0.5, radiusBottom = 0.5, height = 2, opts = {}) {
              const torsoHeight = height - radiusTop - radiusBottom;
              const sides = opts.sides || 32;
              const heightSegments = opts.heightSegments || 32;
              const bottomProp = radiusBottom / height;
              const torProp = torsoHeight / height;
              const topProp = radiusTop / height;
              const bottomSegments = Math.floor(heightSegments * bottomProp);
              const topSegments = Math.floor(heightSegments * topProp);
              const torSegments = Math.floor(heightSegments * torProp);
              const topOffset = torsoHeight + radiusBottom - height / 2;
              const torOffset = radiusBottom - height / 2;
              const bottomOffset = radiusBottom - height / 2;
              const arc = opts.arc || 2.0 * Math.PI;
              const positions = [];
              const normals = [];
              const uvs = [];
              const indices = [];
              const maxRadius = Math.max(radiusTop, radiusBottom);
              const minPos = new Vec3(-maxRadius, -height / 2, -maxRadius);
              const maxPos = new Vec3(maxRadius, height / 2, maxRadius);
              const boundingRadius = height / 2;
              let index = 0;
              const indexArray = [];
              generateBottom();
              generateTorso();
              generateTop();
              return {
                positions,
                normals,
                uvs,
                indices,
                minPos,
                maxPos,
                boundingRadius
              };
              function generateTorso() {
                const slope = (radiusTop - radiusBottom) / torsoHeight;
                for (let y = 0; y <= torSegments; y++) {
                  const indexRow = [];
                  const lat = y / torSegments;
                  const radius = lat * (radiusTop - radiusBottom) + radiusBottom;
                  for (let x = 0; x <= sides; ++x) {
                    const u = x / sides;
                    const v = lat * torProp + bottomProp;
                    const theta = u * arc - arc / 4;
                    const sinTheta = Math.sin(theta);
                    const cosTheta = Math.cos(theta);
                    positions.push(radius * sinTheta);
                    positions.push(lat * torsoHeight + torOffset);
                    positions.push(radius * cosTheta);
                    Vec3.normalize(temp1, Vec3.set(temp2, sinTheta, -slope, cosTheta));
                    normals.push(temp1.x);
                    normals.push(temp1.y);
                    normals.push(temp1.z);
                    uvs.push(u, v);
                    indexRow.push(index);
                    ++index;
                  }
                  indexArray.push(indexRow);
                }
                for (let y = 0; y < torSegments; ++y) {
                  for (let x = 0; x < sides; ++x) {
                    const i1 = indexArray[y][x];
                    const i2 = indexArray[y + 1][x];
                    const i3 = indexArray[y + 1][x + 1];
                    const i4 = indexArray[y][x + 1];
                    indices.push(i1);
                    indices.push(i4);
                    indices.push(i2);
                    indices.push(i4);
                    indices.push(i3);
                    indices.push(i2);
                  }
                }
              }
              function generateBottom() {
                for (let lat = 0; lat <= bottomSegments; ++lat) {
                  const theta = lat * Math.PI / bottomSegments / 2;
                  const sinTheta = Math.sin(theta);
                  const cosTheta = -Math.cos(theta);
                  for (let lon = 0; lon <= sides; ++lon) {
                    const phi = lon * 2 * Math.PI / sides - Math.PI / 2.0;
                    const sinPhi = Math.sin(phi);
                    const cosPhi = Math.cos(phi);
                    const x = sinPhi * sinTheta;
                    const y = cosTheta;
                    const z = cosPhi * sinTheta;
                    const u = lon / sides;
                    const v = lat / heightSegments;
                    positions.push(x * radiusBottom, y * radiusBottom + bottomOffset, z * radiusBottom);
                    normals.push(x, y, z);
                    uvs.push(u, v);
                    if (lat < bottomSegments && lon < sides) {
                      const seg1 = sides + 1;
                      const a = seg1 * lat + lon;
                      const b = seg1 * (lat + 1) + lon;
                      const c = seg1 * (lat + 1) + lon + 1;
                      const d = seg1 * lat + lon + 1;
                      indices.push(a, d, b);
                      indices.push(d, c, b);
                    }
                    ++index;
                  }
                }
              }
              function generateTop() {
                for (let lat = 0; lat <= topSegments; ++lat) {
                  const theta = lat * Math.PI / topSegments / 2 + Math.PI / 2;
                  const sinTheta = Math.sin(theta);
                  const cosTheta = -Math.cos(theta);
                  for (let lon = 0; lon <= sides; ++lon) {
                    const phi = lon * 2 * Math.PI / sides - Math.PI / 2.0;
                    const sinPhi = Math.sin(phi);
                    const cosPhi = Math.cos(phi);
                    const x = sinPhi * sinTheta;
                    const y = cosTheta;
                    const z = cosPhi * sinTheta;
                    const u = lon / sides;
                    const v = lat / heightSegments + (1 - topProp);
                    positions.push(x * radiusTop, y * radiusTop + topOffset, z * radiusTop);
                    normals.push(x, y, z);
                    uvs.push(u, v);
                    if (lat < topSegments && lon < sides) {
                      const seg1 = sides + 1;
                      const a = seg1 * lat + lon + indexArray[torSegments][sides] + 1;
                      const b = seg1 * (lat + 1) + lon + indexArray[torSegments][sides] + 1;
                      const c = seg1 * (lat + 1) + lon + 1 + indexArray[torSegments][sides] + 1;
                      const d = seg1 * lat + lon + 1 + indexArray[torSegments][sides] + 1;
                      indices.push(a, d, b);
                      indices.push(d, c, b);
                    }
                  }
                }
              }
            }

        })
    };
}));
