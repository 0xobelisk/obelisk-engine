System.register(['./index-ce98320e.js', './find-7a03d1cc.js', './device-90bc7390.js', './node-event-18d96a1b.js', './builtin-res-mgr.jsb-c9e8e53a.js', './camera-component-b329f870.js', './model-renderer-f8d2f66d.js', './renderer-3bf7a012.js'], (function (exports) {
    'use strict';
    var ScalableContainer, Triangle, ERaycastMode, Ray, Mat4, intersect, Vec3, applyDecoratedInitializer, _decorator, replaceProperty, markAsWarning, legacyCC, setClassAlias, PrimitiveMode, Component, Prefab, Camera, ModelRenderer, Renderer;
    return {
        setters: [function (module) {
            ScalableContainer = module.cf;
            Triangle = module.cg;
            ERaycastMode = module.ch;
            Ray = module.ci;
            Mat4 = module.s;
            intersect = module.bG;
            Vec3 = module.n;
            applyDecoratedInitializer = module.bx;
            _decorator = module.ap;
            replaceProperty = module.ag;
            markAsWarning = module.ai;
            legacyCC = module.l;
            setClassAlias = module.cj;
        }, function () {}, function (module) {
            PrimitiveMode = module.u;
        }, function (module) {
            Component = module.C;
        }, function (module) {
            Prefab = module.X;
        }, function (module) {
            Camera = module.C;
        }, function (module) {
            ModelRenderer = module.M;
        }, function (module) {
            Renderer = module.R;
        }],
        execute: (function () {

            class RecyclePool extends ScalableContainer {
              constructor(fn, size, dtor) {
                super();
                this._fn = void 0;
                this._dtor = null;
                this._count = 0;
                this._data = void 0;
                this._initSize = 0;
                this._fn = fn;
                this._dtor = dtor || null;
                this._data = new Array(size);
                this._initSize = size;
                for (let i = 0; i < size; ++i) {
                  this._data[i] = fn();
                }
              }
              get length() {
                return this._count;
              }
              get data() {
                return this._data;
              }
              reset() {
                this._count = 0;
              }
              resize(size) {
                if (size > this._data.length) {
                  for (let i = this._data.length; i < size; ++i) {
                    this._data[i] = this._fn();
                  }
                }
              }
              add() {
                if (this._count >= this._data.length) {
                  this.resize(this._data.length << 1);
                }
                return this._data[this._count++];
              }
              destroy() {
                if (this._dtor) {
                  for (let i = 0; i < this._data.length; i++) {
                    this._dtor(this._data[i]);
                  }
                }
                this._data.length = 0;
                this._count = 0;
                super.destroy();
              }
              tryShrink() {
                if (this._data.length >> 2 > this._count) {
                  const length = Math.max(this._initSize, this._data.length >> 1);
                  if (this._dtor) {
                    for (let i = length; i < this._data.length; i++) {
                      this._dtor(this._data[i]);
                    }
                  }
                  this._data.length = length;
                }
              }
              removeAt(idx) {
                if (idx >= this._count) {
                  return;
                }
                const last = this._count - 1;
                const tmp = this._data[idx];
                this._data[idx] = this._data[last];
                this._data[last] = tmp;
                this._count -= 1;
              }
            } exports('R', RecyclePool);

            function rayAABB2(ray, min, max) {
              const o = ray.o;
              const d = ray.d;
              const ix = 1 / d.x;
              const iy = 1 / d.y;
              const iz = 1 / d.z;
              const t1 = (min.x - o.x) * ix;
              const t2 = (max.x - o.x) * ix;
              const t3 = (min.y - o.y) * iy;
              const t4 = (max.y - o.y) * iy;
              const t5 = (min.z - o.z) * iz;
              const t6 = (max.z - o.z) * iz;
              const tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)), Math.min(t5, t6));
              const tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)), Math.max(t5, t6));
              if (tmax < 0 || tmin > tmax) {
                return 0;
              }
              return tmin > 0 ? tmin : tmax;
            }
            const raySubMesh = function () {
              const tri = Triangle.create();
              const deOpt = {
                distance: Infinity,
                doubleSided: false,
                mode: ERaycastMode.ANY
              };
              let minDis = 0;
              const fillResult = (m, d, i0, i1, i2, r) => {
                if (m === ERaycastMode.CLOSEST) {
                  if (minDis > d || minDis === 0) {
                    minDis = d;
                    if (r) {
                      if (r.length === 0) {
                        r.push({
                          distance: d,
                          vertexIndex0: i0 / 3,
                          vertexIndex1: i1 / 3,
                          vertexIndex2: i2 / 3
                        });
                      } else {
                        r[0].distance = d;
                        r[0].vertexIndex0 = i0 / 3;
                        r[0].vertexIndex1 = i1 / 3;
                        r[0].vertexIndex2 = i2 / 3;
                      }
                    }
                  }
                } else {
                  minDis = d;
                  if (r) r.push({
                    distance: d,
                    vertexIndex0: i0 / 3,
                    vertexIndex1: i1 / 3,
                    vertexIndex2: i2 / 3
                  });
                }
              };
              const narrowphase = (vb, ib, pm, ray, opt) => {
                if (pm === PrimitiveMode.TRIANGLE_LIST) {
                  const cnt = ib.length;
                  for (let j = 0; j < cnt; j += 3) {
                    const i0 = ib[j] * 3;
                    const i1 = ib[j + 1] * 3;
                    const i2 = ib[j + 2] * 3;
                    Vec3.set(tri.a, vb[i0], vb[i0 + 1], vb[i0 + 2]);
                    Vec3.set(tri.b, vb[i1], vb[i1 + 1], vb[i1 + 2]);
                    Vec3.set(tri.c, vb[i2], vb[i2 + 1], vb[i2 + 2]);
                    const dist = intersect.rayTriangle(ray, tri, opt.doubleSided);
                    if (dist === 0 || dist > opt.distance) continue;
                    fillResult(opt.mode, dist, i0, i1, i2, opt.result);
                    if (opt.mode === ERaycastMode.ANY) return dist;
                  }
                } else if (pm === PrimitiveMode.TRIANGLE_STRIP) {
                  const cnt = ib.length - 2;
                  let rev = 0;
                  for (let j = 0; j < cnt; j += 1) {
                    const i0 = ib[j - rev] * 3;
                    const i1 = ib[j + rev + 1] * 3;
                    const i2 = ib[j + 2] * 3;
                    Vec3.set(tri.a, vb[i0], vb[i0 + 1], vb[i0 + 2]);
                    Vec3.set(tri.b, vb[i1], vb[i1 + 1], vb[i1 + 2]);
                    Vec3.set(tri.c, vb[i2], vb[i2 + 1], vb[i2 + 2]);
                    rev = ~rev;
                    const dist = intersect.rayTriangle(ray, tri, opt.doubleSided);
                    if (dist === 0 || dist > opt.distance) continue;
                    fillResult(opt.mode, dist, i0, i1, i2, opt.result);
                    if (opt.mode === ERaycastMode.ANY) return dist;
                  }
                } else if (pm === PrimitiveMode.TRIANGLE_FAN) {
                  const cnt = ib.length - 1;
                  const i0 = ib[0] * 3;
                  Vec3.set(tri.a, vb[i0], vb[i0 + 1], vb[i0 + 2]);
                  for (let j = 1; j < cnt; j += 1) {
                    const i1 = ib[j] * 3;
                    const i2 = ib[j + 1] * 3;
                    Vec3.set(tri.b, vb[i1], vb[i1 + 1], vb[i1 + 2]);
                    Vec3.set(tri.c, vb[i2], vb[i2 + 1], vb[i2 + 2]);
                    const dist = intersect.rayTriangle(ray, tri, opt.doubleSided);
                    if (dist === 0 || dist > opt.distance) continue;
                    fillResult(opt.mode, dist, i0, i1, i2, opt.result);
                    if (opt.mode === ERaycastMode.ANY) return dist;
                  }
                }
                return minDis;
              };
              return function (ray, submesh, options) {
                minDis = 0;
                if (submesh.geometricInfo.positions.length === 0) return minDis;
                const opt = options === undefined ? deOpt : options;
                const min = submesh.geometricInfo.boundingBox.min;
                const max = submesh.geometricInfo.boundingBox.max;
                if (rayAABB2(ray, min, max)) {
                  const pm = submesh.primitiveMode;
                  const {
                    positions: vb,
                    indices: ib
                  } = submesh.geometricInfo;
                  narrowphase(vb, ib, pm, ray, opt);
                }
                return minDis;
              };
            }();
            const rayMesh = function () {
              let minDis = 0;
              const deOpt = {
                distance: Infinity,
                doubleSided: false,
                mode: ERaycastMode.ANY
              };
              return function (ray, mesh, options) {
                minDis = 0;
                const opt = options === undefined ? deOpt : options;
                const length = mesh.renderingSubMeshes.length;
                const min = mesh.struct.minPosition;
                const max = mesh.struct.maxPosition;
                if (min && max && !rayAABB2(ray, min, max)) return minDis;
                for (let i = 0; i < length; i++) {
                  const sm = mesh.renderingSubMeshes[i];
                  const dis = raySubMesh(ray, sm, opt);
                  if (dis) {
                    if (opt.mode === ERaycastMode.CLOSEST) {
                      if (minDis === 0 || minDis > dis) {
                        minDis = dis;
                        if (opt.subIndices) opt.subIndices[0] = i;
                      }
                    } else {
                      minDis = dis;
                      if (opt.subIndices) opt.subIndices.push(i);
                      if (opt.mode === ERaycastMode.ANY) {
                        return dis;
                      }
                    }
                  }
                }
                if (minDis && opt.mode === ERaycastMode.CLOSEST) {
                  if (opt.result) {
                    opt.result[0].distance = minDis;
                    opt.result.length = 1;
                  }
                  if (opt.subIndices) opt.subIndices.length = 1;
                }
                return minDis;
              };
            }();
            const rayModel = function () {
              let minDis = 0;
              const deOpt = {
                distance: Infinity,
                doubleSided: false,
                mode: ERaycastMode.ANY
              };
              const modelRay = new Ray();
              const m4 = new Mat4();
              return function (r, model, options) {
                minDis = 0;
                const opt = options === undefined ? deOpt : options;
                const wb = model.worldBounds;
                if (wb && !intersect.rayAABB(r, wb)) return minDis;
                Ray.copy(modelRay, r);
                if (model.node) {
                  Mat4.invert(m4, model.node.getWorldMatrix(m4));
                  Vec3.transformMat4(modelRay.o, r.o, m4);
                  Vec3.transformMat4Normal(modelRay.d, r.d, m4);
                }
                const subModels = model.subModels;
                for (let i = 0; i < subModels.length; i++) {
                  const subMesh = subModels[i].subMesh;
                  const dis = raySubMesh(modelRay, subMesh, opt);
                  if (dis) {
                    if (opt.mode === ERaycastMode.CLOSEST) {
                      if (minDis === 0 || minDis > dis) {
                        minDis = dis;
                        if (opt.subIndices) opt.subIndices[0] = i;
                      }
                    } else {
                      minDis = dis;
                      if (opt.subIndices) opt.subIndices.push(i);
                      if (opt.mode === ERaycastMode.ANY) {
                        return dis;
                      }
                    }
                  }
                }
                if (minDis && opt.mode === ERaycastMode.CLOSEST) {
                  if (opt.result) {
                    opt.result[0].distance = minDis;
                    opt.result.length = 1;
                  }
                  if (opt.subIndices) opt.subIndices.length = 1;
                }
                return minDis;
              };
            }();
            intersect.rayModel = rayModel;
            intersect.raySubMesh = raySubMesh;
            intersect.rayMesh = rayMesh;

            var _dec, _dec2, _class, _class2, _initializer;
            const {
              ccclass,
              serializable,
              type,
              visible
            } = _decorator;
            let PrefabLink = exports('P', (_dec = ccclass('cc.PrefabLink'), _dec2 = type(Prefab), _dec(_class = (_class2 = class PrefabLink extends Component {
              constructor(...args) {
                super(...args);
                this.prefab = _initializer && _initializer();
              }
            }, (_initializer = applyDecoratedInitializer(_class2.prototype, "prefab", [_dec2, serializable], function () {
              return null;
            })), _class2)) || _class));

            replaceProperty(Camera, 'Camera', [{
              name: 'CameraClearFlag',
              newName: 'ClearFlag'
            }]);
            replaceProperty(Camera.prototype, 'Camera.prototype', [{
              name: 'color',
              newName: 'clearColor'
            }, {
              name: 'depth',
              newName: 'clearDepth'
            }, {
              name: 'stencil',
              newName: 'clearStencil'
            }]);
            markAsWarning(Renderer.prototype, 'Renderer.prototype', [{
              name: 'getMaterial',
              suggest: 'please use renderer.getSharedMaterial instead.'
            }]);
            legacyCC.CameraComponent = Camera;
            setClassAlias(Camera, 'cc.CameraComponent');
            legacyCC.RenderableComponent = ModelRenderer;
            setClassAlias(ModelRenderer, 'cc.RenderableComponent');

        })
    };
}));
