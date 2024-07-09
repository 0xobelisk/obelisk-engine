System.register(['./index-8814617f.js', './index-ce98320e.js', './wasm-native-08118220.js', './deprecated-f8df8d32.js', './director-dc238483.js', './sprite-renderer-9a6a919d.js', './sprite-5c924512.js', './deprecated-cd3500e0.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './node-event-18d96a1b.js', './physics-enum-187e99c4.js', './collision-matrix-13be3bef.js', './impl-9c038f77.js', './device-90bc7390.js', './scene-asset.jsb-0d4c6201.js', './decorators-b63b63a2.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './rendering-sub-mesh.jsb-25043997.js', './murmurhash2_gc-2108d723.js', './deprecated-fcfb90f6.js', './camera-component-b329f870.js', './model-renderer-f8d2f66d.js', './renderer-3bf7a012.js', './create-mesh.jsb-8af9d27e.js', './buffer-9511d9f4.js', './deprecated-80961f27.js', './touch-af62e326.js'], (function (exports, module) {
    'use strict';
    var ERaycast2DType, PHYSICS_2D_PTM_RATIO, Contact2DType, PhysicsSystem2D, ERigidBody2DType, Collider2D, RigidBody2D, ConvexPartition, selector, log, error, Vec2, Color, Vec3, CCObject, toDegree, Quat, remove, TWO_PI, HALF_PI, toRadian, Rect, warn, ensureWasmModuleReady, instantiateWasm, game, Game, director, Canvas, Graphics, Node, Layers, find, NodeEventType, PhysicsGroup;
    return {
        setters: [function (module) {
            ERaycast2DType = module.d;
            PHYSICS_2D_PTM_RATIO = module.f;
            Contact2DType = module.C;
            PhysicsSystem2D = module.g;
            ERigidBody2DType = module.E;
            Collider2D = module.i;
            RigidBody2D = module.R;
            ConvexPartition = module.n;
            selector = module.s;
        }, function (module) {
            log = module.a;
            error = module.e;
            Vec2 = module.V;
            Color = module.C;
            Vec3 = module.n;
            CCObject = module.as;
            toDegree = module.K;
            Quat = module.Q;
            remove = module.cu;
            TWO_PI = module.T;
            HALF_PI = module.H;
            toRadian = module.J;
            Rect = module.R;
            warn = module.w;
        }, function (module) {
            ensureWasmModuleReady = module.e;
            instantiateWasm = module.i;
        }, function (module) {
            game = module.g;
            Game = module.G;
        }, function (module) {
            director = module.n;
        }, function (module) {
            Canvas = module.C;
        }, function () {}, function (module) {
            Graphics = module.G;
        }, function (module) {
            Node = module.Q;
            Layers = module.V;
        }, function (module) {
            find = module.j;
        }, function (module) {
            NodeEventType = module.N;
        }, function (module) {
            PhysicsGroup = module.P;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            let B2 = {};
            function getImplPtr(wasmObject) {
              if (!wasmObject) return 0;
              return wasmObject.$$.ptr;
            }
            const B2ObjectType = {
              Fixture: 0,
              Body: 1,
              Contact: 2,
              Joint: 3
            };
            const WASM_OBJECT_PTR_2_TS_OBJECT = new Map();
            function addImplPtrReference(Type, TSObject, implPtr) {
              if (implPtr) {
                let map = WASM_OBJECT_PTR_2_TS_OBJECT.get(Type);
                if (!map) {
                  map = new Map();
                  WASM_OBJECT_PTR_2_TS_OBJECT.set(Type, map);
                }
                map.set(implPtr, TSObject);
              }
            }
            function removeImplPtrReference(Type, implPtr) {
              if (implPtr) {
                const map = WASM_OBJECT_PTR_2_TS_OBJECT.get(Type);
                if (map && map.has(implPtr)) {
                  map.delete(implPtr);
                  if (map.size === 0) {
                    WASM_OBJECT_PTR_2_TS_OBJECT.delete(Type);
                  }
                }
              }
            }
            function getTSObjectFromWASMObjectPtr(Type, implPtr) {
              const map = WASM_OBJECT_PTR_2_TS_OBJECT.get(Type);
              return map === null || map === void 0 ? void 0 : map.get(implPtr);
            }
            const WASM_OBJECT_PTR_2_WASM_OBJECT = new Map();
            function addImplPtrReferenceWASM(Type, WASMObject, implPtr) {
              if (implPtr) {
                let map = WASM_OBJECT_PTR_2_WASM_OBJECT.get(Type);
                if (!map) {
                  map = new Map();
                  WASM_OBJECT_PTR_2_WASM_OBJECT.set(Type, map);
                }
                map.set(implPtr, WASMObject);
              }
            }
            function removeImplPtrReferenceWASM(Type, implPtr) {
              if (implPtr) {
                const map = WASM_OBJECT_PTR_2_WASM_OBJECT.get(Type);
                if (map && map.has(implPtr)) {
                  map.delete(implPtr);
                  if (map.size === 0) {
                    WASM_OBJECT_PTR_2_WASM_OBJECT.delete(Type);
                  }
                }
              }
            }
            function b2Mul(T, v, out) {
              out.x = T.q.c * v.x - T.q.s * v.y + T.p.x;
              out.y = T.q.s * v.x + T.q.c * v.y + T.p.y;
            }
            function initWasm(wasmFactory, wasmUrl) {
              return new Promise((resolve, reject) => {
                const errorMessage = err => `[box2d]: box2d wasm lib load failed: ${err}`;
                wasmFactory({
                  instantiateWasm(importObject, receiveInstance) {
                    instantiateWasm(wasmUrl, importObject).then(result => {
                      receiveInstance(result.instance, result.module);
                    }).catch(err => reject(errorMessage(err)));
                  }
                }).then(Instance => {
                  log('[box2d]:box2d wasm lib loaded.');
                  B2 = Instance;
                }).then(resolve).catch(err => reject(errorMessage(err)));
              });
            }
            function initAsm(asmFactory) {
              return new Promise((resolve, reject) => {
                const errorMessage = err => `[box2d]: box2d asm lib load failed: ${err}`;
                asmFactory().then(instance => {
                  log('[box2d]:box2d asm lib loaded.');
                  B2 = instance;
                }).then(resolve).catch(err => reject(errorMessage(err)));
              });
            }
            function shouldUseWasmModule() {
              {
                return false;
              }
            }
            function waitForBox2dWasmInstantiation() {
              const errorReport = msg => {
                error(msg);
              };
              return ensureWasmModuleReady().then(() => {
                if (shouldUseWasmModule()) {
                  return Promise.all([module.import('./box2d.release.wasm-847b00bc.js'), module.import('./box2d.release.wasm-8dbec876.js')]).then(([{
                    default: wasmFactory
                  }, {
                    default: wasmUrl
                  }]) => initWasm(wasmFactory, wasmUrl));
                } else {
                  return module.import('./box2d.release.asm-1b284544.js').then(({
                    default: asmFactory
                  }) => initAsm(asmFactory));
                }
              }).catch(errorReport);
            }
            game.onPostInfrastructureInitDelegate.add(waitForBox2dWasmInstantiation);

            var _class$3;
            class PhysicsContactListener {
              static BeginContact(contact) {
                if (this._BeginContact) {
                  this._BeginContact(contact);
                }
              }
              static EndContact(contact) {
                if (this._EndContact) {
                  this._EndContact(contact);
                }
              }
              static PreSolve(contact, oldManifold) {
                if (this._PreSolve) {
                  this._PreSolve(contact, oldManifold);
                }
              }
              static PostSolve(contact, impulse) {
                if (this._PostSolve) {
                  this._PostSolve(contact, impulse);
                }
              }
            }
            _class$3 = PhysicsContactListener;
            PhysicsContactListener._BeginContact = null;
            PhysicsContactListener._EndContact = null;
            PhysicsContactListener._PreSolve = null;
            PhysicsContactListener._PostSolve = null;
            PhysicsContactListener.callback = {
              BeginContact(contact) {
                _class$3.BeginContact(contact);
              },
              EndContact(contact) {
                _class$3.EndContact(contact);
              },
              PreSolve(contact, oldManifold) {
                _class$3.PreSolve(contact, oldManifold);
              },
              PostSolve(contact, impulse) {
                _class$3.PostSolve(contact, impulse);
              }
            };

            var _class$2;
            class PhysicsAABBQueryCallback {
              static init(point) {
                if (point) {
                  this._isPoint = true;
                  this._point.x = point.x;
                  this._point.y = point.y;
                } else {
                  this._isPoint = false;
                }
                this._fixtures.length = 0;
              }
              static ReportFixture(fixture) {
                if (this._isPoint) {
                  if (B2.FixtureTestPoint(fixture, this._point)) {
                    this._fixtures.push(fixture);
                  }
                } else {
                  this._fixtures.push(fixture);
                }
                return true;
              }
              static getFixture() {
                return this._fixtures[0];
              }
              static getFixtures() {
                return this._fixtures;
              }
            }
            _class$2 = PhysicsAABBQueryCallback;
            PhysicsAABBQueryCallback._point = {
              x: 0,
              y: 0
            };
            PhysicsAABBQueryCallback._isPoint = false;
            PhysicsAABBQueryCallback._fixtures = [];
            PhysicsAABBQueryCallback.callback = {
              ReportFixture(fixture) {
                return _class$2.ReportFixture(fixture);
              }
            };

            var _class$1;
            class PhysicsRayCastCallback {
              static init(type, mask) {
                PhysicsRayCastCallback._type = type;
                PhysicsRayCastCallback._mask = mask;
                PhysicsRayCastCallback._fixtures.length = 0;
                PhysicsRayCastCallback._points.length = 0;
                PhysicsRayCastCallback._normals.length = 0;
                PhysicsRayCastCallback._fractions.length = 0;
              }
              static ReportFixture(fixture, point, normal, fraction) {
                if ((B2.FixtureGetFilterData(fixture).categoryBits & PhysicsRayCastCallback._mask) === 0) {
                  return 0;
                }
                if (PhysicsRayCastCallback._type === ERaycast2DType.Closest) {
                  PhysicsRayCastCallback._fixtures[0] = fixture;
                  PhysicsRayCastCallback._points[0] = point;
                  PhysicsRayCastCallback._normals[0] = normal;
                  PhysicsRayCastCallback._fractions[0] = fraction;
                  return fraction;
                }
                PhysicsRayCastCallback._fixtures.push(fixture);
                PhysicsRayCastCallback._points.push(new Vec2(point.x, point.y));
                PhysicsRayCastCallback._normals.push(new Vec2(normal.x, normal.y));
                PhysicsRayCastCallback._fractions.push(fraction);
                if (PhysicsRayCastCallback._type === ERaycast2DType.Any) {
                  return 0;
                } else if (PhysicsRayCastCallback._type >= ERaycast2DType.All) {
                  return 1;
                }
                return fraction;
              }
              static getFixtures() {
                return PhysicsRayCastCallback._fixtures;
              }
              static getPoints() {
                return PhysicsRayCastCallback._points;
              }
              static getNormals() {
                return PhysicsRayCastCallback._normals;
              }
              static getFractions() {
                return PhysicsRayCastCallback._fractions;
              }
            }
            _class$1 = PhysicsRayCastCallback;
            PhysicsRayCastCallback._type = ERaycast2DType.Closest;
            PhysicsRayCastCallback._fixtures = [];
            PhysicsRayCastCallback._points = [];
            PhysicsRayCastCallback._normals = [];
            PhysicsRayCastCallback._fractions = [];
            PhysicsRayCastCallback._mask = 0xffffffff;
            PhysicsRayCastCallback.callback = {
              ReportFixture(fixture, point, normal, fraction) {
                return _class$1.ReportFixture(fixture, point, normal, fraction);
              }
            };

            const pools = [];
            const pointCache = [new Vec2(), new Vec2()];
            const worldmanifold = {
              points: [],
              separations: [],
              normal: new Vec2()
            };
            class ManifoldPoint {
              constructor() {
                this.localPoint = new Vec2();
                this.normalImpulse = 0;
                this.tangentImpulse = 0;
              }
            }
            const manifoldPointCache = [new ManifoldPoint(), new ManifoldPoint()];
            const manifold = {
              type: 0,
              localPoint: new Vec2(),
              localNormal: new Vec2(),
              points: []
            };
            const impulse = {
              normalImpulses: [],
              tangentImpulses: []
            };
            class PhysicsContact {
              constructor() {
                this.colliderA = null;
                this.colliderB = null;
                this.disabled = false;
                this.disabledOnce = false;
                this._impulsePtr = 0;
                this._inverted = false;
                this._implPtr = 0;
                this._b2WorldmanifoldPtr = 0;
              }
              static get(b2contact) {
                let c = pools.pop();
                if (!c) {
                  c = new PhysicsContact();
                }
                c.init(b2contact);
                return c;
              }
              static put(b2contact) {
                const c = getTSObjectFromWASMObjectPtr(B2ObjectType.Contact, b2contact);
                if (!c) return;
                pools.push(c);
                c.reset();
              }
              _setImpulse(impulse) {
                this._impulsePtr = impulse;
              }
              init(b2contact) {
                const ab = B2.ContactGetFixture(b2contact);
                this.colliderA = getTSObjectFromWASMObjectPtr(B2ObjectType.Fixture, ab.x).collider;
                this.colliderB = getTSObjectFromWASMObjectPtr(B2ObjectType.Fixture, ab.y).collider;
                this.disabled = false;
                this.disabledOnce = false;
                this._impulsePtr = 0;
                this._inverted = false;
                this._implPtr = b2contact;
                addImplPtrReference(B2ObjectType.Contact, this, this._implPtr);
                this._b2WorldmanifoldPtr = B2.WorldManifoldNew();
              }
              reset() {
                this.setTangentSpeed(0);
                this.resetFriction();
                this.resetRestitution();
                this.colliderA = null;
                this.colliderB = null;
                this.disabled = false;
                this._impulsePtr = 0;
                removeImplPtrReference(B2ObjectType.Contact, this._implPtr);
                this._implPtr = 0;
                B2.WorldManifoldDelete(this._b2WorldmanifoldPtr);
                this._b2WorldmanifoldPtr = 0;
              }
              getWorldManifold() {
                const points = worldmanifold.points;
                const separations = worldmanifold.separations;
                const normal = worldmanifold.normal;
                B2.ContactGetWorldManifold(this._implPtr, this._b2WorldmanifoldPtr);
                const b2Manifold = B2.ContactGetManifold(this._implPtr);
                const count = B2.ManifoldGetPointCount(b2Manifold);
                points.length = separations.length = count;
                for (let i = 0; i < count; i++) {
                  const p = pointCache[i];
                  p.x = B2.WorldManifoldGetPointValueX(this._b2WorldmanifoldPtr, i) * PHYSICS_2D_PTM_RATIO;
                  p.y = B2.WorldManifoldGetPointValueY(this._b2WorldmanifoldPtr, i) * PHYSICS_2D_PTM_RATIO;
                  points[i] = p;
                  separations[i] = B2.WorldManifoldGetSeparationValue(this._b2WorldmanifoldPtr, i) * PHYSICS_2D_PTM_RATIO;
                }
                normal.x = B2.WorldManifoldGetNormalValueX(this._b2WorldmanifoldPtr);
                normal.y = B2.WorldManifoldGetNormalValueY(this._b2WorldmanifoldPtr);
                if (this._inverted) {
                  normal.x *= -1;
                  normal.y *= -1;
                }
                return worldmanifold;
              }
              getManifold() {
                const points = manifold.points;
                const localNormal = manifold.localNormal;
                const localPoint = manifold.localPoint;
                const b2Manifold = B2.ContactGetManifold(this._implPtr);
                const count = points.length = B2.ManifoldGetPointCount(b2Manifold);
                for (let i = 0; i < count; i++) {
                  const p = manifoldPointCache[i];
                  const b2p = B2.ManifoldGetManifoldPointPtr(b2Manifold, i);
                  p.localPoint.x = B2.ManifoldPointGetLocalPointX(b2p) * PHYSICS_2D_PTM_RATIO;
                  p.localPoint.y = B2.ManifoldPointGetLocalPointY(b2p) * PHYSICS_2D_PTM_RATIO;
                  p.normalImpulse = B2.ManifoldPointGetNormalImpulse(b2p) * PHYSICS_2D_PTM_RATIO;
                  p.tangentImpulse = B2.ManifoldPointGetTangentImpulse(b2p);
                  points[i] = p;
                }
                localPoint.x = B2.ManifoldGetLocalPointValueX(b2Manifold) * PHYSICS_2D_PTM_RATIO;
                localPoint.y = B2.ManifoldGetLocalPointValueY(b2Manifold) * PHYSICS_2D_PTM_RATIO;
                localNormal.x = B2.ManifoldGetLocalNormalValueX(b2Manifold);
                localNormal.y = B2.ManifoldGetLocalNormalValueY(b2Manifold);
                manifold.type = B2.ManifoldGetType(b2Manifold);
                if (this._inverted) {
                  localNormal.x *= -1;
                  localNormal.y *= -1;
                }
                return manifold;
              }
              getImpulse() {
                const b2impulse = this._impulsePtr;
                if (!b2impulse) return null;
                const normalImpulses = impulse.normalImpulses;
                const tangentImpulses = impulse.tangentImpulses;
                const count = B2.ContactImpulseGetCount(b2impulse);
                for (let i = 0; i < count; i++) {
                  normalImpulses[i] = B2.ContactImpulseGetNormalImpulse(b2impulse, i) * PHYSICS_2D_PTM_RATIO;
                  tangentImpulses[i] = B2.ContactImpulseGetTangentImpulse(b2impulse, i);
                }
                tangentImpulses.length = normalImpulses.length = count;
                return impulse;
              }
              emit(contactType) {
                switch (contactType) {
                  case Contact2DType.BEGIN_CONTACT:
                    break;
                  case Contact2DType.END_CONTACT:
                    break;
                  case Contact2DType.PRE_SOLVE:
                    break;
                  case Contact2DType.POST_SOLVE:
                    break;
                }
                const colliderA = this.colliderA;
                const colliderB = this.colliderB;
                const bodyA = colliderA.body;
                const bodyB = colliderB.body;
                if (bodyA.enabledContactListener) {
                  colliderA === null || colliderA === void 0 ? void 0 : colliderA.emit(contactType, colliderA, colliderB, this);
                }
                if (bodyB.enabledContactListener) {
                  colliderB === null || colliderB === void 0 ? void 0 : colliderB.emit(contactType, colliderB, colliderA, this);
                }
                if (bodyA.enabledContactListener || bodyB.enabledContactListener) {
                  PhysicsSystem2D.instance.emit(contactType, colliderA, colliderB, this);
                }
                if (this.disabled || this.disabledOnce) {
                  this.setEnabled(false);
                  this.disabledOnce = false;
                }
              }
              setEnabled(value) {
                B2.ContactSetEnabled(this._implPtr, value);
              }
              isTouching() {
                return B2.ContactIsTouching(this._implPtr);
              }
              setTangentSpeed(value) {
                B2.ContactSetTangentSpeed(this._implPtr, value);
              }
              getTangentSpeed() {
                return B2.ContactGetTangentSpeed(this._implPtr);
              }
              setFriction(value) {
                B2.ContactSetFriction(this._implPtr, value);
              }
              getFriction() {
                return B2.ContactGetFriction(this._implPtr);
              }
              resetFriction() {
                B2.ContactResetFriction(this._implPtr);
              }
              setRestitution(value) {
                B2.ContactSetRestitution(this._implPtr, value);
              }
              getRestitution() {
                return B2.ContactGetRestitution(this._implPtr);
              }
              resetRestitution() {
                B2.ContactResetRestitution(this._implPtr);
              }
            }

            var _class;
            const _tmp_vec2 = {
              x: 0,
              y: 0
            };
            const _tmp_vec3 = {
              x: 0,
              y: 0
            };
            const _tmp_color = new Color();
            const GREEN_COLOR = Color.GREEN;
            const RED_COLOR = Color.RED;
            class PhysicsDebugDraw {
              static _DrawPolygon(vertices, vertexCount) {
                const drawer = PhysicsDebugDraw._drawer;
                const rawVertexBuffer = B2.HEAPF32.subarray(vertices / 4, vertices / 4 + vertexCount * 2);
                for (let i = 0; i < vertexCount; i++) {
                  _tmp_vec2.x = rawVertexBuffer[i * 2 + 0];
                  _tmp_vec2.y = rawVertexBuffer[i * 2 + 1];
                  b2Mul(PhysicsDebugDraw._xf, _tmp_vec2, _tmp_vec3);
                  const x = _tmp_vec3.x * PHYSICS_2D_PTM_RATIO;
                  const y = _tmp_vec3.y * PHYSICS_2D_PTM_RATIO;
                  if (i === 0) drawer.moveTo(x, y);else {
                    drawer.lineTo(x, y);
                  }
                }
                drawer.close();
              }
              static DrawPolygon(vertices, vertexCount, color) {
                PhysicsDebugDraw._applyStrokeColor(color);
                PhysicsDebugDraw._DrawPolygon(vertices, vertexCount);
                PhysicsDebugDraw._drawer.stroke();
              }
              static DrawSolidPolygon(vertices, vertexCount, color) {
                PhysicsDebugDraw._applyFillColor(color);
                PhysicsDebugDraw._DrawPolygon(vertices, vertexCount);
                PhysicsDebugDraw._drawer.fill();
                PhysicsDebugDraw._drawer.stroke();
              }
              static _DrawCircle(center, radius) {
                b2Mul(PhysicsDebugDraw._xf, center, _tmp_vec3);
                PhysicsDebugDraw._drawer.circle(_tmp_vec3.x * PHYSICS_2D_PTM_RATIO, _tmp_vec3.y * PHYSICS_2D_PTM_RATIO, radius * PHYSICS_2D_PTM_RATIO);
              }
              static DrawCircle(center, radius, color) {
                PhysicsDebugDraw._applyStrokeColor(color);
                PhysicsDebugDraw._DrawCircle(center, radius);
                PhysicsDebugDraw._drawer.stroke();
              }
              static DrawSolidCircle(center, radius, axis, color) {
                PhysicsDebugDraw._applyFillColor(color);
                PhysicsDebugDraw._DrawCircle(center, radius);
                PhysicsDebugDraw._drawer.fill();
              }
              static DrawSegment(p1, p2, color) {
                const drawer = PhysicsDebugDraw._drawer;
                if (p1.x === p2.x && p1.y === p2.y) {
                  PhysicsDebugDraw._applyFillColor(color);
                  PhysicsDebugDraw._DrawCircle(p1, 2 / PHYSICS_2D_PTM_RATIO);
                  drawer.fill();
                  return;
                }
                PhysicsDebugDraw._applyStrokeColor(color);
                b2Mul(PhysicsDebugDraw._xf, p1, _tmp_vec2);
                drawer.moveTo(_tmp_vec2.x * PHYSICS_2D_PTM_RATIO, _tmp_vec2.y * PHYSICS_2D_PTM_RATIO);
                b2Mul(PhysicsDebugDraw._xf, p2, _tmp_vec2);
                drawer.lineTo(_tmp_vec2.x * PHYSICS_2D_PTM_RATIO, _tmp_vec2.y * PHYSICS_2D_PTM_RATIO);
                drawer.stroke();
              }
              static DrawTransform(xf) {
                const drawer = PhysicsDebugDraw._drawer;
                drawer.strokeColor = RED_COLOR;
                _tmp_vec2.x = _tmp_vec2.y = 0;
                b2Mul(xf, _tmp_vec2, _tmp_vec3);
                drawer.moveTo(_tmp_vec3.x * PHYSICS_2D_PTM_RATIO, _tmp_vec3.y * PHYSICS_2D_PTM_RATIO);
                _tmp_vec2.x = 1;
                _tmp_vec2.y = 0;
                b2Mul(xf, _tmp_vec2, _tmp_vec3);
                drawer.lineTo(_tmp_vec3.x * PHYSICS_2D_PTM_RATIO, _tmp_vec3.y * PHYSICS_2D_PTM_RATIO);
                drawer.stroke();
                drawer.strokeColor = GREEN_COLOR;
                _tmp_vec2.x = _tmp_vec2.y = 0;
                b2Mul(xf, _tmp_vec2, _tmp_vec3);
                drawer.moveTo(_tmp_vec3.x * PHYSICS_2D_PTM_RATIO, _tmp_vec3.y * PHYSICS_2D_PTM_RATIO);
                _tmp_vec2.x = 0;
                _tmp_vec2.y = 1;
                b2Mul(xf, _tmp_vec2, _tmp_vec3);
                drawer.lineTo(_tmp_vec3.x * PHYSICS_2D_PTM_RATIO, _tmp_vec3.y * PHYSICS_2D_PTM_RATIO);
                drawer.stroke();
              }
              static DrawPoint(center, size, color) {}
              static DrawParticles() {}
              static _applyStrokeColor(color) {
                PhysicsDebugDraw._drawer.strokeColor = _tmp_color.set(color.r * 255, color.g * 255, color.b * 255, 150);
              }
              static _applyFillColor(color) {
                PhysicsDebugDraw._drawer.fillColor = _tmp_color.set(color.r * 255, color.g * 255, color.b * 255, 150);
              }
              PushTransform(xf) {
                PhysicsDebugDraw._xf = xf;
              }
              PopTransform() {
                PhysicsDebugDraw._xf = PhysicsDebugDraw._dxf;
              }
            }
            _class = PhysicsDebugDraw;
            PhysicsDebugDraw.callback = {
              DrawPolygon(vertices, vertexCount, color) {
                _class.DrawPolygon(vertices, vertexCount, color);
              },
              DrawSolidPolygon(vertices, vertexCount, color) {
                _class.DrawSolidPolygon(vertices, vertexCount, color);
              },
              DrawCircle(center, radius, color) {
                _class.DrawCircle(center, radius, color);
              },
              DrawSolidCircle(center, radius, axis, color) {
                _class.DrawSolidCircle(center, radius, axis, color);
              },
              DrawSegment(p1, p2, color) {
                _class.DrawSegment(p1, p2, color);
              },
              DrawTransform(xf) {
                _class.DrawTransform(xf);
              },
              DrawPoint(center, size, color) {
                _class.DrawPoint(center, size, color);
              }
            };
            PhysicsDebugDraw._drawer = null;
            PhysicsDebugDraw._xf = {
              p: {
                x: 0,
                y: 0
              },
              q: {
                s: 0,
                c: 1
              }
            };
            PhysicsDebugDraw._dxf = {
              p: {
                x: 0,
                y: 0
              },
              q: {
                s: 0,
                c: 1
              }
            };

            const tempVec3$1 = new Vec3();
            const tempVec2_1$1 = new Vec2();
            const tempVec2_2$1 = new Vec2();
            const testResults = [];
            class B2PhysicsWorld {
              get impl() {
                return this._world;
              }
              get groundBodyImpl() {
                return this._physicsGroundBody;
              }
              constructor() {
                this._world = void 0;
                this._bodies = [];
                this._animatedBodies = [];
                this._rotationAxis = new Vec3();
                this._physicsGroundBody = void 0;
                this._contactListener = void 0;
                this._aabbQueryCallback = void 0;
                this._raycastQueryCallback = void 0;
                this._temoBodyDef = void 0;
                this._tempB2AABB = void 0;
                this.tempB2FixtureDefPtr = void 0;
                this._debugGraphics = null;
                this._b2DebugDrawer = null;
                this._debugDrawFlags = 0;
                this._world = new B2.World({
                  x: 0,
                  y: -10
                });
                this._physicsGroundBody = this._world.CreateBody(new B2.BodyDef());
                PhysicsContactListener._BeginContact = this._onBeginContact;
                PhysicsContactListener._EndContact = this._onEndContact;
                PhysicsContactListener._PreSolve = this._onPreSolve;
                PhysicsContactListener._PostSolve = this._onPostSolve;
                this._contactListener = B2.ContactListener.implement(PhysicsContactListener.callback);
                this._world.SetContactListener(this._contactListener);
                this._aabbQueryCallback = B2.QueryCallback.implement(PhysicsAABBQueryCallback.callback);
                this._raycastQueryCallback = B2.RayCastCallback.implement(PhysicsRayCastCallback.callback);
                this._temoBodyDef = new B2.BodyDef();
                this._tempB2AABB = new B2.AABB();
                this.tempB2FixtureDefPtr = B2.FixtureDefNew();
              }
              get debugDrawFlags() {
                return this._debugDrawFlags;
              }
              set debugDrawFlags(v) {
                if (!v) {
                  if (this._debugGraphics) {
                    this._debugGraphics.node.parent = null;
                  }
                }
                this._debugDrawFlags = v;
              }
              _checkDebugDrawValid() {
                if (!this._debugGraphics || !this._debugGraphics.isValid) {
                  let canvas = find('Canvas');
                  if (!canvas) {
                    const scene = director.getScene();
                    if (!scene) {
                      return;
                    }
                    canvas = new Node('Canvas');
                    canvas.addComponent(Canvas);
                    canvas.parent = scene;
                  }
                  const node = new Node('PHYSICS_2D_DEBUG_DRAW');
                  node.hideFlags |= CCObject.Flags.DontSave;
                  node.parent = canvas;
                  node.worldPosition = Vec3.ZERO;
                  node.layer = Layers.Enum.UI_2D;
                  this._debugGraphics = node.addComponent(Graphics);
                  this._debugGraphics.lineWidth = 3;
                  PhysicsDebugDraw._drawer = this._debugGraphics;
                  const debugDraw = B2.Draw.implement(PhysicsDebugDraw.callback);
                  this._b2DebugDrawer = debugDraw;
                  this._world.SetDebugDraw(debugDraw);
                }
                const parent = this._debugGraphics.node.parent;
                this._debugGraphics.node.setSiblingIndex(parent.children.length - 1);
                if (this._b2DebugDrawer) {
                  this._b2DebugDrawer.SetFlags(this.debugDrawFlags);
                }
              }
              setGravity(v) {
                this._world.SetGravity(v);
              }
              setAllowSleep(v) {
                this._world.SetAllowSleeping(true);
              }
              step(deltaTime, velocityIterations = 10, positionIterations = 10) {
                const animatedBodies = this._animatedBodies;
                for (let i = 0, l = animatedBodies.length; i < l; i++) {
                  animatedBodies[i].animate(deltaTime);
                }
                this._world.Step(deltaTime, velocityIterations, positionIterations);
              }
              raycast(p1, p2, type, mask) {
                if (p1.equals(p2)) {
                  return [];
                }
                type = type || ERaycast2DType.Closest;
                tempVec2_1$1.x = p1.x / PHYSICS_2D_PTM_RATIO;
                tempVec2_1$1.y = p1.y / PHYSICS_2D_PTM_RATIO;
                tempVec2_2$1.x = p2.x / PHYSICS_2D_PTM_RATIO;
                tempVec2_2$1.y = p2.y / PHYSICS_2D_PTM_RATIO;
                PhysicsRayCastCallback.init(type, mask);
                this._world.RayCast(this._raycastQueryCallback, tempVec2_1$1, tempVec2_2$1);
                const fixtures = PhysicsRayCastCallback.getFixtures();
                if (fixtures.length > 0) {
                  const points = PhysicsRayCastCallback.getPoints();
                  const normals = PhysicsRayCastCallback.getNormals();
                  const fractions = PhysicsRayCastCallback.getFractions();
                  const results = [];
                  for (let i = 0, l = fixtures.length; i < l; i++) {
                    const fixture = fixtures[i];
                    const shape = getTSObjectFromWASMObjectPtr(B2ObjectType.Fixture, fixture);
                    const collider = shape.collider;
                    if (type === ERaycast2DType.AllClosest) {
                      let result;
                      for (let j = 0; j < results.length; j++) {
                        if (results[j].collider === collider) {
                          result = results[j];
                        }
                      }
                      if (result) {
                        if (fractions[i] < result.fraction) {
                          result.fixtureIndex = shape.getFixtureIndex(fixture);
                          result.point.x = points[i].x * PHYSICS_2D_PTM_RATIO;
                          result.point.y = points[i].y * PHYSICS_2D_PTM_RATIO;
                          result.normal.x = normals[i].x;
                          result.normal.y = normals[i].y;
                          result.fraction = fractions[i];
                        }
                        continue;
                      }
                    }
                    results.push({
                      collider,
                      fixtureIndex: shape.getFixtureIndex(fixture),
                      point: new Vec2(points[i].x * PHYSICS_2D_PTM_RATIO, points[i].y * PHYSICS_2D_PTM_RATIO),
                      normal: new Vec2(normals[i].x, normals[i].y),
                      fraction: fractions[i]
                    });
                  }
                  return results;
                }
                return [];
              }
              syncPhysicsToScene() {
                const bodies = this._bodies;
                for (let i = 0, l = bodies.length; i < l; i++) {
                  const body = bodies[i];
                  const bodyComp = body.rigidBody;
                  if (bodyComp.type === ERigidBody2DType.Animated) {
                    body.resetVelocity();
                    continue;
                  }
                  const node = bodyComp.node;
                  const b2body = body.impl;
                  const pos = b2body.GetPosition();
                  tempVec3$1.x = pos.x * PHYSICS_2D_PTM_RATIO;
                  tempVec3$1.y = pos.y * PHYSICS_2D_PTM_RATIO;
                  tempVec3$1.z = 0;
                  node.worldPosition = tempVec3$1;
                  const angle = toDegree(b2body.GetAngle());
                  node.setWorldRotationFromEuler(0, 0, angle);
                }
              }
              syncSceneToPhysics() {
                const bodies = this._bodies;
                for (let i = 0; i < bodies.length; i++) {
                  bodies[i].syncSceneToPhysics();
                }
              }
              addBody(body) {
                const bodies = this._bodies;
                if (bodies.includes(body)) {
                  return;
                }
                const bodyDef = this._temoBodyDef;
                const comp = body.rigidBody;
                bodyDef.allowSleep = comp.allowSleep;
                bodyDef.gravityScale = comp.gravityScale;
                bodyDef.linearDamping = comp.linearDamping;
                bodyDef.angularDamping = comp.angularDamping;
                bodyDef.fixedRotation = comp.fixedRotation;
                bodyDef.bullet = comp.bullet;
                const node = comp.node;
                const pos = node.worldPosition;
                bodyDef.position = {
                  x: pos.x / PHYSICS_2D_PTM_RATIO,
                  y: pos.y / PHYSICS_2D_PTM_RATIO
                };
                tempVec3$1.z = Quat.getAxisAngle(this._rotationAxis, node.worldRotation);
                if (this._rotationAxis.z < 0.0) {
                  tempVec3$1.z = Math.PI * 2 - tempVec3$1.z;
                }
                bodyDef.angle = tempVec3$1.z;
                bodyDef.awake = comp.awakeOnLoad;
                if (comp.type === ERigidBody2DType.Animated) {
                  bodyDef.type = B2.BodyType.b2_kinematicBody;
                  this._animatedBodies.push(body);
                  body._animatedPos.set(bodyDef.position.x, bodyDef.position.y);
                  body._animatedAngle = bodyDef.angle;
                } else {
                  switch (comp.type) {
                    case ERigidBody2DType.Dynamic:
                      bodyDef.type = B2.BodyType.b2_dynamicBody;
                      break;
                    case ERigidBody2DType.Static:
                      bodyDef.type = B2.BodyType.b2_staticBody;
                      break;
                    case ERigidBody2DType.Kinematic:
                      bodyDef.type = B2.BodyType.b2_kinematicBody;
                      break;
                    default:
                      bodyDef.type = B2.BodyType.b2_staticBody;
                      break;
                  }
                }
                const compPrivate = comp;
                const linearVelocity = compPrivate._linearVelocity;
                bodyDef.linearVelocity = {
                  x: linearVelocity.x,
                  y: linearVelocity.y
                };
                bodyDef.angularVelocity = compPrivate._angularVelocity;
                const b2Body = this._world.CreateBody(bodyDef);
                addImplPtrReference(B2ObjectType.Body, body, getImplPtr(b2Body));
                addImplPtrReferenceWASM(B2ObjectType.Body, b2Body, getImplPtr(b2Body));
                body._imp = b2Body;
                this._bodies.push(body);
              }
              removeBody(body) {
                if (!this._bodies.includes(body)) {
                  return;
                }
                if (body.impl) {
                  removeImplPtrReference(B2ObjectType.Body, getImplPtr(body.impl));
                  removeImplPtrReferenceWASM(B2ObjectType.Body, getImplPtr(body.impl));
                  this._world.DestroyBody(body.impl);
                  body._imp = null;
                }
                remove(this._bodies, body);
                const comp = body.rigidBody;
                if (comp.type === ERigidBody2DType.Animated) {
                  remove(this._animatedBodies, body);
                }
              }
              registerContactFixture(fixture) {
                this._contactListener.registerContactFixture(fixture);
              }
              unregisterContactFixture(fixture) {
                this._contactListener.unregisterContactFixture(fixture);
              }
              testPoint(point) {
                const x = tempVec2_1$1.x = point.x / PHYSICS_2D_PTM_RATIO;
                const y = tempVec2_1$1.y = point.y / PHYSICS_2D_PTM_RATIO;
                const d = 0.2 / PHYSICS_2D_PTM_RATIO;
                this._tempB2AABB.lowerBound = {
                  x: x - d,
                  y: y - d
                };
                this._tempB2AABB.upperBound = {
                  x: x + d,
                  y: y + d
                };
                const callback = this._aabbQueryCallback;
                PhysicsAABBQueryCallback.init(tempVec2_1$1);
                this._world.QueryAABB(callback, this._tempB2AABB);
                const fixtures = PhysicsAABBQueryCallback.getFixtures();
                testResults.length = 0;
                for (let i = 0; i < fixtures.length; i++) {
                  const collider = getTSObjectFromWASMObjectPtr(B2ObjectType.Fixture, fixtures[i]).collider;
                  if (!testResults.includes(collider)) {
                    testResults.push(collider);
                  }
                }
                return testResults;
              }
              testAABB(rect) {
                this._tempB2AABB.lowerBound = {
                  x: rect.xMin / PHYSICS_2D_PTM_RATIO,
                  y: rect.yMin / PHYSICS_2D_PTM_RATIO
                };
                this._tempB2AABB.upperBound = {
                  x: rect.xMax / PHYSICS_2D_PTM_RATIO,
                  y: rect.yMax / PHYSICS_2D_PTM_RATIO
                };
                const callback = this._aabbQueryCallback;
                PhysicsAABBQueryCallback.init();
                this._world.QueryAABB(callback, this._tempB2AABB);
                const fixtures = PhysicsAABBQueryCallback.getFixtures();
                testResults.length = 0;
                for (let i = 0; i < fixtures.length; i++) {
                  const collider = getTSObjectFromWASMObjectPtr(B2ObjectType.Fixture, fixtures[i]).collider;
                  if (!testResults.includes(collider)) {
                    testResults.push(collider);
                  }
                }
                return testResults;
              }
              drawDebug() {
                this._checkDebugDrawValid();
                if (!this._debugGraphics) {
                  return;
                }
                this._debugGraphics.clear();
                this._world.DebugDraw();
              }
              _onBeginContact(b2contact) {
                const c = PhysicsContact.get(b2contact);
                c.emit(Contact2DType.BEGIN_CONTACT);
              }
              _onEndContact(b2contact) {
                const c = getTSObjectFromWASMObjectPtr(B2ObjectType.Contact, b2contact);
                if (!c) {
                  return;
                }
                c.emit(Contact2DType.END_CONTACT);
                PhysicsContact.put(b2contact);
              }
              _onPreSolve(b2contact) {
                const c = getTSObjectFromWASMObjectPtr(B2ObjectType.Contact, b2contact);
                if (!c) {
                  return;
                }
                c.emit(Contact2DType.PRE_SOLVE);
              }
              _onPostSolve(b2contact, impulse) {
                const c = getTSObjectFromWASMObjectPtr(B2ObjectType.Contact, b2contact);
                if (!c) {
                  return;
                }
                c._setImpulse(impulse);
                c.emit(Contact2DType.POST_SOLVE);
                c._setImpulse(0);
              }
            }

            const tempVec3 = new Vec3();
            const tempVec2_1 = {
              x: 0,
              y: 0
            };
            const tempVec2_2 = {
              x: 0,
              y: 0
            };
            class B2RigidBody2D {
              constructor() {
                this._animatedPos = new Vec2();
                this._animatedAngle = 0;
                this._body = null;
                this._rigidBody = void 0;
                this._inited = false;
              }
              get impl() {
                return this._body;
              }
              set _imp(v) {
                this._body = v;
              }
              get rigidBody() {
                return this._rigidBody;
              }
              get isAwake() {
                return this._body.IsAwake();
              }
              get isSleeping() {
                return !this._body.IsAwake();
              }
              initialize(com) {
                this._rigidBody = com;
                PhysicsSystem2D.instance._callAfterStep(this, this._init);
              }
              onDestroy() {
                PhysicsSystem2D.instance._callAfterStep(this, this._destroy);
              }
              onEnable() {
                this.setActive(true);
              }
              onDisable() {
                this.setActive(false);
              }
              nodeTransformChanged(type) {
                if (PhysicsSystem2D.instance.stepping) {
                  return;
                }
                if (type & Node.TransformBit.SCALE) {
                  const colliders = this.rigidBody.getComponents(Collider2D);
                  for (let i = 0; i < colliders.length; i++) {
                    colliders[i].apply();
                  }
                }
                if (type & Node.TransformBit.POSITION) {
                  this.syncPositionToPhysics(true);
                }
                if (type & Node.TransformBit.ROTATION) {
                  this.syncRotationToPhysics(true);
                }
              }
              _init() {
                if (this._inited) {
                  return;
                }
                PhysicsSystem2D.instance.physicsWorld.addBody(this);
                this.setActive(false);
                this._inited = true;
              }
              _destroy() {
                var _this$impl, _this$impl2;
                if (!this._inited) return;
                const fixtureList = (_this$impl = this.impl) === null || _this$impl === void 0 ? void 0 : _this$impl.GetFixtureList();
                if (fixtureList) {
                  let shapeTSObj = getTSObjectFromWASMObjectPtr(B2ObjectType.Fixture, fixtureList);
                  while (shapeTSObj && shapeTSObj.impl) {
                    shapeTSObj.destroy();
                    const nextFixture = B2.FixtureGetNext(fixtureList);
                    shapeTSObj = getTSObjectFromWASMObjectPtr(B2ObjectType.Fixture, nextFixture);
                  }
                }
                const jointListPtr = (_this$impl2 = this.impl) === null || _this$impl2 === void 0 ? void 0 : _this$impl2.GetJointList();
                if (jointListPtr) {
                  let jointWASMPtr = B2.JointEdgeGetJoint(jointListPtr);
                  let jointTSObj = getTSObjectFromWASMObjectPtr(B2ObjectType.Fixture, jointWASMPtr);
                  while (jointTSObj) {
                    jointTSObj.destroy();
                    jointWASMPtr = B2.JointEdgeGetNext(jointListPtr);
                    jointTSObj = getTSObjectFromWASMObjectPtr(B2ObjectType.Fixture, jointWASMPtr);
                  }
                }
                PhysicsSystem2D.instance.physicsWorld.removeBody(this);
                this._inited = false;
              }
              animate(dt) {
                const b2body = this._body;
                if (!b2body) return;
                const b2Pos = b2body.GetPosition();
                b2body.SetAwake(true);
                const timeStep = 1 / dt;
                tempVec2_1.x = (this._animatedPos.x - b2Pos.x) * timeStep;
                tempVec2_1.y = (this._animatedPos.y - b2Pos.y) * timeStep;
                b2body.SetLinearVelocity(tempVec2_1);
                let b2Rotation = b2body.GetAngle() % TWO_PI;
                if (b2Rotation > Math.PI) {
                  b2Rotation -= TWO_PI;
                }
                let angularVelocity = (this._animatedAngle - b2Rotation) * timeStep;
                if (this._animatedAngle < -HALF_PI && b2Rotation > HALF_PI) {
                  angularVelocity = (this._animatedAngle + TWO_PI - b2Rotation) * timeStep;
                }
                if (this._animatedAngle > HALF_PI && b2Rotation < -HALF_PI) {
                  angularVelocity = (this._animatedAngle - TWO_PI - b2Rotation) * timeStep;
                }
                b2body.SetAngularVelocity(angularVelocity);
              }
              syncSceneToPhysics() {
                const dirty = this._rigidBody.node.hasChangedFlags;
                if (dirty) {
                  this.nodeTransformChanged(dirty);
                }
              }
              syncPositionToPhysics(enableAnimated = false) {
                const b2body = this._body;
                if (!b2body) return;
                const pos = this._rigidBody.node.worldPosition;
                tempVec2_2.x = pos.x / PHYSICS_2D_PTM_RATIO;
                tempVec2_2.y = pos.y / PHYSICS_2D_PTM_RATIO;
                if (this._rigidBody.type === ERigidBody2DType.Animated && enableAnimated) {
                  this._animatedPos.set(tempVec2_2.x, tempVec2_2.y);
                } else {
                  b2body.SetTransform(tempVec2_2, b2body.GetAngle());
                }
              }
              syncRotationToPhysics(enableAnimated = false) {
                const b2body = this._body;
                if (!b2body) return;
                const rot = this._rigidBody.node.worldRotation;
                const euler = tempVec3;
                Quat.toEulerInYXZOrder(euler, rot);
                const rotation = toRadian(euler.z);
                const bodyType = this._rigidBody.type;
                if (bodyType === ERigidBody2DType.Animated && enableAnimated) {
                  this._animatedAngle = rotation;
                } else {
                  b2body.SetTransform(b2body.GetPosition(), rotation);
                }
              }
              resetVelocity() {
                const b2body = this._body;
                if (!b2body) return;
                tempVec2_1.x = 0;
                tempVec2_1.y = 0;
                b2body.SetLinearVelocity(tempVec2_1);
                b2body.SetAngularVelocity(0);
              }
              setType(v) {
                if (v === ERigidBody2DType.Dynamic) {
                  this._body.SetType(B2.BodyType.b2_dynamicBody);
                } else if (v === ERigidBody2DType.Kinematic) {
                  this._body.SetType(B2.BodyType.b2_kinematicBody);
                } else if (v === ERigidBody2DType.Static) {
                  this._body.SetType(B2.BodyType.b2_staticBody);
                }
              }
              setLinearDamping(v) {
                this._body.SetLinearDamping(v);
              }
              setAngularDamping(v) {
                this._body.SetAngularDamping(v);
              }
              setGravityScale(v) {
                this._body.SetGravityScale(v);
              }
              setFixedRotation(v) {
                this._body.SetFixedRotation(v);
              }
              setAllowSleep(v) {
                this._body.SetSleepingAllowed(v);
              }
              isActive() {
                return this._body.IsEnabled();
              }
              setActive(v) {
                this._body.SetEnabled(v);
              }
              wakeUp() {
                this._body.SetAwake(true);
              }
              sleep() {
                this._body.SetAwake(false);
              }
              getMass() {
                return this._body.GetMass();
              }
              setLinearVelocity(v) {
                this._body.SetLinearVelocity(v);
              }
              getLinearVelocity(out) {
                const velocity = this._body.GetLinearVelocity();
                out.x = velocity.x;
                out.y = velocity.y;
                return out;
              }
              getLinearVelocityFromWorldPoint(worldPoint, out) {
                out = out || new Vec2();
                tempVec2_1.x = worldPoint.x / PHYSICS_2D_PTM_RATIO;
                tempVec2_1.y = worldPoint.y / PHYSICS_2D_PTM_RATIO;
                const temp = this._body.GetLinearVelocityFromWorldPoint(tempVec2_1);
                out.x = temp.x * PHYSICS_2D_PTM_RATIO;
                out.y = temp.y * PHYSICS_2D_PTM_RATIO;
                return out;
              }
              setAngularVelocity(v) {
                this._body.SetAngularVelocity(v);
              }
              getAngularVelocity() {
                return this._body.GetAngularVelocity();
              }
              getLocalVector(worldVector, out) {
                out = out || new Vec2();
                tempVec2_1.x = worldVector.x / PHYSICS_2D_PTM_RATIO;
                tempVec2_1.y = worldVector.y / PHYSICS_2D_PTM_RATIO;
                const temp = this._body.GetLocalVector(tempVec2_1);
                out.x = temp.x * PHYSICS_2D_PTM_RATIO;
                out.y = temp.y * PHYSICS_2D_PTM_RATIO;
                return out;
              }
              getWorldVector(localVector, out) {
                tempVec2_1.x = localVector.x / PHYSICS_2D_PTM_RATIO;
                tempVec2_1.y = localVector.y / PHYSICS_2D_PTM_RATIO;
                const temp = this._body.GetWorldVector(tempVec2_1);
                out.x = temp.x * PHYSICS_2D_PTM_RATIO;
                out.y = temp.y * PHYSICS_2D_PTM_RATIO;
                return out;
              }
              getLocalPoint(worldPoint, out) {
                out = out || new Vec2();
                tempVec2_1.x = worldPoint.x / PHYSICS_2D_PTM_RATIO;
                tempVec2_1.y = worldPoint.y / PHYSICS_2D_PTM_RATIO;
                const temp = this._body.GetLocalPoint(tempVec2_1);
                out.x = temp.x * PHYSICS_2D_PTM_RATIO;
                out.y = temp.y * PHYSICS_2D_PTM_RATIO;
                return out;
              }
              getWorldPoint(localPoint, out) {
                out = out || new Vec2();
                tempVec2_1.x = localPoint.x / PHYSICS_2D_PTM_RATIO;
                tempVec2_1.y = localPoint.y / PHYSICS_2D_PTM_RATIO;
                const temp = this._body.GetWorldPoint(tempVec2_1);
                out.x = temp.x * PHYSICS_2D_PTM_RATIO;
                out.y = temp.y * PHYSICS_2D_PTM_RATIO;
                return out;
              }
              getLocalCenter(out) {
                out = out || new Vec2();
                const pos = this._body.GetLocalCenter();
                out.x = pos.x * PHYSICS_2D_PTM_RATIO;
                out.y = pos.y * PHYSICS_2D_PTM_RATIO;
                return out;
              }
              getWorldCenter(out) {
                out = out || new Vec2();
                const pos = this._body.GetWorldCenter();
                out.x = pos.x * PHYSICS_2D_PTM_RATIO;
                out.y = pos.y * PHYSICS_2D_PTM_RATIO;
                return out;
              }
              getInertia() {
                return this._body.GetInertia();
              }
              applyForce(force, point, wake) {
                if (this._body) {
                  tempVec2_1.x = point.x / PHYSICS_2D_PTM_RATIO;
                  tempVec2_1.y = point.y / PHYSICS_2D_PTM_RATIO;
                  this._body.ApplyForce(force, tempVec2_1, wake);
                }
              }
              applyForceToCenter(force, wake) {
                if (this._body) {
                  this._body.ApplyForceToCenter(force, wake);
                }
              }
              applyTorque(torque, wake) {
                if (this._body) {
                  this._body.ApplyTorque(torque, wake);
                }
              }
              applyLinearImpulse(impulse, point, wake) {
                if (this._body) {
                  tempVec2_1.x = point.x / PHYSICS_2D_PTM_RATIO;
                  tempVec2_1.y = point.y / PHYSICS_2D_PTM_RATIO;
                  this._body.ApplyLinearImpulse(impulse, tempVec2_1, wake);
                }
              }
              applyLinearImpulseToCenter(impulse, wake) {
                if (this._body) {
                  this._body.ApplyLinearImpulse(impulse, this._body.GetPosition(), wake);
                }
              }
              applyAngularImpulse(impulse, wake) {
                if (this._body) {
                  this._body.ApplyAngularImpulse(impulse, wake);
                }
              }
            }

            const tempFilter = {
              categoryBits: 0,
              maskBits: 0,
              groupIndex: 0
            };
            const lowerBound = {
              x: 0,
              y: 0
            };
            const upperBound = {
              x: 0,
              y: 0
            };
            function getFilter(shape) {
              const comp = shape.collider;
              if (comp.body) {
                tempFilter.categoryBits = comp.group === PhysicsGroup.DEFAULT ? comp.body.group : comp.group;
              } else {
                tempFilter.categoryBits = comp.group;
              }
              tempFilter.maskBits = PhysicsSystem2D.instance.collisionMatrix[tempFilter.categoryBits];
              return tempFilter;
            }
            class B2Shape2D {
              constructor() {
                this._shapes = [];
                this._fixtures = [];
                this._collider = null;
                this._body = null;
                this._inited = false;
                this._rect = new Rect();
              }
              get impl() {
                return this._shapes;
              }
              get collider() {
                return this._collider;
              }
              initialize(comp) {
                this._collider = comp;
              }
              onLoad() {}
              onEnable() {
                PhysicsSystem2D.instance._callAfterStep(this, this._init);
              }
              onDisable() {
                PhysicsSystem2D.instance._callAfterStep(this, this.destroy);
              }
              start() {}
              onGroupChanged() {
                const filter = getFilter(this);
                this._fixtures.forEach(f => {
                  B2.FixtureSetFilterData(f, filter);
                });
              }
              apply() {
                this.destroy();
                if (this.collider.enabledInHierarchy) {
                  this._init();
                }
              }
              get worldAABB() {
                const MAX = 10e6;
                let minX = MAX;
                let minY = MAX;
                let maxX = -MAX;
                let maxY = -MAX;
                const fixtures = this._fixtures;
                for (let i = 0; i < fixtures.length; i++) {
                  const fixture = fixtures[i];
                  const shape = B2.FixtureGetShape(fixture);
                  const count = B2.ShapeGetChildCount(shape);
                  for (let j = 0; j < count; j++) {
                    const aabb = B2.FixtureGetAABB(fixture, j);
                    lowerBound.x = aabb.lowerBound.x;
                    lowerBound.y = aabb.lowerBound.y;
                    upperBound.x = aabb.upperBound.x;
                    upperBound.y = aabb.upperBound.y;
                    if (B2.ShapeGetType(shape) === 2) {
                      const skinWidth = B2.ShapeGetRadius(shape);
                      lowerBound.x += skinWidth;
                      lowerBound.y += skinWidth;
                      upperBound.x += skinWidth;
                      upperBound.y += skinWidth;
                    }
                    if (lowerBound.x < minX) minX = lowerBound.x;
                    if (lowerBound.y < minY) minY = lowerBound.y;
                    if (upperBound.x > maxX) maxX = upperBound.x;
                    if (upperBound.y > maxY) maxY = upperBound.y;
                  }
                }
                minX *= PHYSICS_2D_PTM_RATIO;
                minY *= PHYSICS_2D_PTM_RATIO;
                maxX *= PHYSICS_2D_PTM_RATIO;
                maxY *= PHYSICS_2D_PTM_RATIO;
                const r = this._rect;
                r.x = minX;
                r.y = minY;
                r.width = maxX - minX;
                r.height = maxY - minY;
                return r;
              }
              getFixtureIndex(fixture) {
                return this._fixtures.indexOf(fixture);
              }
              _createShapes(scaleX, scaleY, relativePositionX, relativePositionY) {
                return [];
              }
              _init() {
                if (this._inited) return;
                const comp = this.collider;
                const scale = comp.node.worldScale;
                let relativePosition = Vec3.ZERO;
                const body = comp.getComponent(RigidBody2D);
                if (body && body.impl && body.impl.impl) {
                  this._body = body.impl.impl;
                } else {
                  this._body = PhysicsSystem2D.instance.physicsWorld.groundBodyImpl;
                  relativePosition = comp.node.worldPosition;
                }
                const shapes = scale.x === 0 && scale.y === 0 ? [] : this._createShapes(scale.x, scale.y, relativePosition.x, relativePosition.y);
                const filter = getFilter(this);
                for (let i = 0; i < shapes.length; i++) {
                  const shape = shapes[i];
                  const fixDef = PhysicsSystem2D.instance.physicsWorld.tempB2FixtureDefPtr;
                  B2.FixtureDefSetAll(fixDef, shape, 0, comp.friction, comp.restitution, comp.density, comp.sensor, filter.categoryBits, filter.maskBits, filter.groupIndex);
                  const fixture = B2.BodyCreateFixture(getImplPtr(this._body), fixDef);
                  addImplPtrReference(B2ObjectType.Fixture, this, fixture);
                  addImplPtrReferenceWASM(B2ObjectType.Fixture, fixture, fixture);
                  if (body !== null && body !== void 0 && body.enabledContactListener) {
                    PhysicsSystem2D.instance.physicsWorld.registerContactFixture(fixture);
                  }
                  this._shapes.push(shape);
                  this._fixtures.push(fixture);
                }
                this._inited = true;
              }
              destroy() {
                if (!this._inited) return;
                const fixtures = this._fixtures;
                const body = this._body;
                for (let i = fixtures.length - 1; i >= 0; i--) {
                  const fixture = fixtures[i];
                  removeImplPtrReference(B2ObjectType.Fixture, fixture);
                  removeImplPtrReferenceWASM(B2ObjectType.Fixture, fixture);
                  PhysicsSystem2D.instance.physicsWorld.unregisterContactFixture(fixture);
                  if (body) {
                    B2.BodyDestroyFixture(getImplPtr(body), fixture);
                  }
                }
                this._body = null;
                this._fixtures.length = 0;
                this._shapes.length = 0;
                this._inited = false;
              }
            }

            const tempAabb = new Rect();
            class B2BoxShape extends B2Shape2D {
              constructor(...args) {
                super(...args);
                this._worldPoints = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];
              }
              get worldPoints() {
                const aabb = tempAabb;
                const collider = this.collider;
                const size = collider.size;
                const offset = collider.offset;
                aabb.x = offset.x - size.width / 2;
                aabb.y = offset.y - size.height / 2;
                aabb.width = size.width;
                aabb.height = size.height;
                const wps = this._worldPoints;
                const wp0 = wps[0];
                const wp1 = wps[1];
                const wp2 = wps[2];
                const wp3 = wps[3];
                aabb.transformMat4ToPoints(collider.node.worldMatrix, wp0, wp1, wp2, wp3);
                return wps;
              }
              _createShapes(scaleX, scaleY, relativePositionX, relativePositionY) {
                scaleX = Math.abs(scaleX);
                scaleY = Math.abs(scaleY);
                const comp = this.collider;
                const width = comp.size.width / 2 / PHYSICS_2D_PTM_RATIO * scaleX;
                const height = comp.size.height / 2 / PHYSICS_2D_PTM_RATIO * scaleY;
                const offsetX = (relativePositionX + comp.offset.x * scaleX) / PHYSICS_2D_PTM_RATIO;
                const offsetY = (relativePositionY + comp.offset.y * scaleY) / PHYSICS_2D_PTM_RATIO;
                const shape = B2.PolygonShapeNew();
                B2.PolygonShapeSetAsBoxWithCenterAndAngle(shape, width, height, offsetX, offsetY, 0);
                return [shape];
              }
            }

            class B2CircleShape extends B2Shape2D {
              constructor(...args) {
                super(...args);
                this._worldPosition = new Vec2();
              }
              get worldRadius() {
                return B2.CircleShapeGetRadius(this._shapes[0]) * PHYSICS_2D_PTM_RATIO;
              }
              get worldPosition() {
                const p = B2.CircleShapeGetPosition(this._shapes[0]);
                return this._worldPosition.set(p.x * PHYSICS_2D_PTM_RATIO, p.y * PHYSICS_2D_PTM_RATIO);
              }
              _createShapes(scaleX, scaleY, relativePositionX, relativePositionY) {
                scaleX = Math.abs(scaleX);
                scaleY = Math.abs(scaleY);
                const comp = this.collider;
                const offsetX = (relativePositionX + comp.offset.x * scaleX) / PHYSICS_2D_PTM_RATIO;
                const offsetY = (relativePositionY + comp.offset.y * scaleY) / PHYSICS_2D_PTM_RATIO;
                const shape = B2.CircleShapeNew();
                B2.ShapeSetRadius(shape, comp.radius / PHYSICS_2D_PTM_RATIO * scaleX);
                B2.CircleShapeSetPosition(shape, offsetX, offsetY);
                return [shape];
              }
            }

            class B2PolygonShape extends B2Shape2D {
              constructor(...args) {
                super(...args);
                this._worldPoints = [];
              }
              get worldPoints() {
                const comp = this.collider;
                const points = comp.points;
                const worldPoints = this._worldPoints;
                const m = comp.node.worldMatrix;
                for (let i = 0; i < points.length; i++) {
                  if (!worldPoints[i]) {
                    worldPoints[i] = new Vec2();
                  }
                  Vec2.transformMat4(worldPoints[i], points[i], m);
                }
                worldPoints.length = points.length;
                return this._worldPoints;
              }
              _createShapes(scaleX, scaleY, relativePositionX, relativePositionY) {
                const shapes = [];
                const comp = this.collider;
                const points = comp.points;
                if (points.length > 0 && points[0].equals(points[points.length - 1])) {
                  points.length -= 1;
                }
                const polys = ConvexPartition(points);
                if (!polys) {
                  warn('[Physics2D] b2PolygonShape failed to decompose polygon into convex polygons, node name: ', comp.node.name);
                  return shapes;
                }
                const offset = comp.offset;
                for (let i = 0; i < polys.length; i++) {
                  const poly = polys[i];
                  let shape = 0;
                  const vertices = B2.Vec2VectorNew();
                  let firstVertice = null;
                  for (let j = 0, l = poly.length; j < l; j++) {
                    if (!shape) {
                      shape = B2.PolygonShapeNew();
                    }
                    const p = poly[j];
                    const x = (relativePositionX + (p.x + offset.x) * scaleX) / PHYSICS_2D_PTM_RATIO;
                    const y = (relativePositionY + (p.y + offset.y) * scaleY) / PHYSICS_2D_PTM_RATIO;
                    const v = {
                      x,
                      y
                    };
                    B2.Vec2VectorPush(vertices, x, y);
                    if (!firstVertice) {
                      firstVertice = v;
                    }
                    if (B2.Vec2VectorSize(vertices) === B2.maxPolygonVertices) {
                      B2.PolygonShapeSet(shape, B2.Vec2VectorGetPtr(vertices), B2.Vec2VectorSize(vertices));
                      shapes.push(shape);
                      shape = 0;
                      if (j < l - 1) {
                        const temp = B2.Vec2VectorGet(vertices, B2.Vec2VectorSize(vertices) - 1);
                        B2.Vec2VectorResize(vertices, 0, 0, 0);
                        B2.Vec2VectorPush(vertices, firstVertice.x, firstVertice.y);
                        B2.Vec2VectorPush(vertices, temp.x, temp.y);
                      }
                    }
                  }
                  if (shape) {
                    B2.PolygonShapeSet(shape, B2.Vec2VectorGetPtr(vertices), B2.Vec2VectorSize(vertices));
                    shapes.push(shape);
                  }
                  B2.Vec2VectorDelete(vertices);
                }
                return shapes;
              }
            }

            class B2Joint {
              constructor() {
                this._b2joint = null;
                this._jointComp = null;
                this._body = null;
                this._inited = false;
              }
              get impl() {
                return this._b2joint;
              }
              get comp() {
                return this._jointComp;
              }
              get body() {
                return this._body;
              }
              initialize(comp) {
                this._jointComp = comp;
              }
              onEnable() {
                PhysicsSystem2D.instance._callAfterStep(this, this._init);
              }
              onDisable() {
                PhysicsSystem2D.instance._callAfterStep(this, this.destroy);
              }
              start() {
                PhysicsSystem2D.instance._callAfterStep(this, this._init);
              }
              apply() {
                PhysicsSystem2D.instance._callAfterStep(this, this.destroy);
                if (this.comp.enabledInHierarchy) {
                  PhysicsSystem2D.instance._callAfterStep(this, this._init);
                }
              }
              _init() {
                if (this._inited) return;
                const comp = this._jointComp;
                if (!comp.isValid) {
                  return;
                }
                this._body = comp.getComponent(RigidBody2D);
                if (!this._body) {
                  warn(`Joint2D: Body is not found, can not create joint. Node Name: ${comp.node.name}`);
                  return;
                }
                const def = this._createJointDef();
                if (!def) {
                  return;
                }
                def.SetBodyA(this._body.impl.impl);
                const connectedBody = comp.connectedBody;
                if (connectedBody && !connectedBody.enabledInHierarchy) {
                  return;
                }
                if (!connectedBody) {
                  def.SetBodyB(PhysicsSystem2D.instance.physicsWorld.groundBodyImpl);
                } else {
                  def.SetBodyB(connectedBody.impl.impl);
                }
                def.collideConnected = comp.collideConnected;
                this._b2joint = PhysicsSystem2D.instance.physicsWorld.impl.CreateJoint(def);
                addImplPtrReference(B2ObjectType.Joint, this, getImplPtr(this._b2joint));
                addImplPtrReferenceWASM(B2ObjectType.Joint, this._b2joint, getImplPtr(this._b2joint));
                this._inited = true;
              }
              destroy() {
                if (!this._inited) return;
                removeImplPtrReference(B2ObjectType.Joint, getImplPtr(this._b2joint));
                removeImplPtrReferenceWASM(B2ObjectType.Joint, getImplPtr(this._b2joint));
                PhysicsSystem2D.instance.physicsWorld.impl.DestroyJoint(this._b2joint);
                this._b2joint = null;
                this._inited = false;
              }
              _createJointDef() {
                return null;
              }
              isValid() {
                return this._b2joint && this._body && this._body.impl && this._jointComp;
              }
            }

            const tempB2Vec2$1 = {
              x: 0,
              y: 0
            };
            class B2MouseJoint extends B2Joint {
              constructor(...args) {
                super(...args);
                this._touchPoint = new Vec2();
                this._isTouched = false;
              }
              setTarget(v) {
                if (this._b2joint) {
                  tempB2Vec2$1.x = v.x / PHYSICS_2D_PTM_RATIO;
                  tempB2Vec2$1.y = v.y / PHYSICS_2D_PTM_RATIO;
                  this._b2joint.SetTarget(tempB2Vec2$1);
                }
              }
              setFrequency(v) {
                if (this._b2joint) {
                  this._b2joint.SetFrequency(v);
                }
              }
              setDampingRatio(v) {
                if (this._b2joint) {
                  this._b2joint.SetDampingRatio(v);
                }
              }
              setMaxForce(v) {
                if (this._b2joint) {
                  this._b2joint.SetMaxForce(v);
                }
              }
              _createJointDef() {
                const def = new B2.MouseJointDef();
                const comp = this._jointComp;
                def.target = {
                  x: this._touchPoint.x / PHYSICS_2D_PTM_RATIO,
                  y: this._touchPoint.y / PHYSICS_2D_PTM_RATIO
                };
                def.maxForce = comp.maxForce;
                def.dampingRatio = comp.dampingRatio;
                def.frequencyHz = comp.frequency;
                return def;
              }
              initialize(comp) {
                super.initialize(comp);
                const canvas = find('Canvas');
                if (canvas) {
                  canvas.on(NodeEventType.TOUCH_START, this.onTouchBegan, this);
                  canvas.on(NodeEventType.TOUCH_MOVE, this.onTouchMove, this);
                  canvas.on(NodeEventType.TOUCH_END, this.onTouchEnd, this);
                  canvas.on(NodeEventType.TOUCH_CANCEL, this.onTouchEnd, this);
                }
              }
              onEnable() {}
              start() {}
              onTouchBegan(event) {
                this._isTouched = true;
                const target = this._touchPoint.set(event.getUILocation());
                const world = PhysicsSystem2D.instance.physicsWorld;
                const colliders = world.testPoint(target);
                if (colliders.length <= 0) return;
                const body = colliders[0].body;
                body.wakeUp();
                const comp = this._jointComp;
                comp.connectedBody = body;
                this._init();
                this.setMaxForce(comp.maxForce * body.getMass());
                this.setTarget(target);
              }
              onTouchMove(event) {
                this._touchPoint = event.getUILocation();
              }
              onTouchEnd(event) {
                this.destroy();
                this._isTouched = false;
              }
              update() {
                if (!this._isTouched || !this.isValid()) {
                  return;
                }
                this.setTarget(this._touchPoint);
              }
            }

            class B2DistanceJoint extends B2Joint {
              setMaxLength(v) {
                if (this._b2joint) {
                  this._b2joint.SetMaxLength(v);
                }
              }
              _createJointDef() {
                const comp = this._jointComp;
                const def = new B2.RopeJointDef();
                def.localAnchorA = {
                  x: comp.anchor.x / PHYSICS_2D_PTM_RATIO,
                  y: comp.anchor.y / PHYSICS_2D_PTM_RATIO
                };
                def.localAnchorB = {
                  x: comp.connectedAnchor.x / PHYSICS_2D_PTM_RATIO,
                  y: comp.connectedAnchor.y / PHYSICS_2D_PTM_RATIO
                };
                def.maxLength = comp.maxLength / PHYSICS_2D_PTM_RATIO;
                return def;
              }
            }

            class B2SpringJoint extends B2Joint {
              setFrequency(v) {
                if (this._b2joint) {
                  this._b2joint.SetFrequency(v);
                }
              }
              setDampingRatio(v) {
                if (this._b2joint) {
                  this._b2joint.SetDampingRatio(v);
                }
              }
              setDistance(v) {
                if (this._b2joint) {
                  this._b2joint.SetLength(v);
                }
              }
              _createJointDef() {
                const comp = this._jointComp;
                const def = new B2.DistanceJointDef();
                def.localAnchorA = {
                  x: comp.anchor.x / PHYSICS_2D_PTM_RATIO,
                  y: comp.anchor.y / PHYSICS_2D_PTM_RATIO
                };
                def.localAnchorB = {
                  x: comp.connectedAnchor.x / PHYSICS_2D_PTM_RATIO,
                  y: comp.connectedAnchor.y / PHYSICS_2D_PTM_RATIO
                };
                def.length = comp.distance / PHYSICS_2D_PTM_RATIO;
                def.dampingRatio = comp.dampingRatio;
                def.frequencyHz = comp.frequency;
                return def;
              }
            }

            const tempB2Vec2 = {
              x: 0,
              y: 0
            };
            class B2RelativeJoint extends B2Joint {
              setMaxForce(v) {
                if (this._b2joint) {
                  this._b2joint.SetMaxForce(v);
                }
              }
              setAngularOffset(v) {
                if (this._b2joint) {
                  this._b2joint.SetAngularOffset(toRadian(v));
                }
              }
              setLinearOffset(v) {
                if (this._b2joint) {
                  tempB2Vec2.x = v.x / PHYSICS_2D_PTM_RATIO;
                  tempB2Vec2.y = v.y / PHYSICS_2D_PTM_RATIO;
                  this._b2joint.SetLinearOffset(tempB2Vec2);
                }
              }
              setCorrectionFactor(v) {
                if (this._b2joint) {
                  this._b2joint.SetCorrectionFactor(v);
                }
              }
              setMaxTorque(v) {
                if (this._b2joint) {
                  this._b2joint.SetMaxTorque(v);
                }
              }
              _createJointDef() {
                const comp = this._jointComp;
                const def = new B2.MotorJointDef();
                def.linearOffset = {
                  x: comp.linearOffset.x / PHYSICS_2D_PTM_RATIO,
                  y: comp.linearOffset.y / PHYSICS_2D_PTM_RATIO
                };
                def.angularOffset = toRadian(comp.angularOffset);
                def.maxForce = comp.maxForce;
                def.maxTorque = comp.maxTorque;
                def.correctionFactor = comp.correctionFactor;
                return def;
              }
            }

            class B2SliderJoint extends B2Joint {
              enableLimit(v) {
                if (this._b2joint) {
                  this._b2joint.EnableLimit(v);
                }
              }
              setLowerLimit(v) {
                this.updateLimits();
              }
              setUpperLimit(v) {
                this.updateLimits();
              }
              updateLimits() {
                if (this._b2joint) {
                  const comp = this._jointComp;
                  this._b2joint.SetLimits(comp.lowerLimit / PHYSICS_2D_PTM_RATIO, comp.upperLimit / PHYSICS_2D_PTM_RATIO);
                }
              }
              enableMotor(v) {
                if (this._b2joint) {
                  this._b2joint.EnableMotor(v);
                }
              }
              setMaxMotorForce(v) {
                if (this._b2joint) {
                  this._b2joint.SetMaxMotorForce(v);
                }
              }
              setMotorSpeed(v) {
                if (this._b2joint) {
                  this._b2joint.SetMotorSpeed(v);
                }
              }
              _createJointDef() {
                const comp = this._jointComp;
                const def = new B2.PrismaticJointDef();
                def.localAnchorA = {
                  x: comp.anchor.x / PHYSICS_2D_PTM_RATIO,
                  y: comp.anchor.y / PHYSICS_2D_PTM_RATIO
                };
                def.localAnchorB = {
                  x: comp.connectedAnchor.x / PHYSICS_2D_PTM_RATIO,
                  y: comp.connectedAnchor.y / PHYSICS_2D_PTM_RATIO
                };
                const angle = toRadian(comp.angle);
                def.localAxisA = {
                  x: Math.cos(angle),
                  y: Math.sin(angle)
                };
                def.referenceAngle = 0;
                def.enableLimit = comp.enableLimit;
                def.lowerTranslation = comp.lowerLimit / PHYSICS_2D_PTM_RATIO;
                def.upperTranslation = comp.upperLimit / PHYSICS_2D_PTM_RATIO;
                def.enableMotor = comp.enableMotor;
                def.maxMotorForce = comp.maxMotorForce;
                def.motorSpeed = comp.motorSpeed;
                return def;
              }
            }

            class B2FixedJoint extends B2Joint {
              setFrequency(v) {
                if (this._b2joint) {
                  this._b2joint.SetFrequency(v);
                }
              }
              setDampingRatio(v) {
                if (this._b2joint) {
                  this._b2joint.SetDampingRatio(v);
                }
              }
              _createJointDef() {
                const comp = this._jointComp;
                const def = new B2.WeldJointDef();
                def.localAnchorA = {
                  x: comp.anchor.x / PHYSICS_2D_PTM_RATIO,
                  y: comp.anchor.y / PHYSICS_2D_PTM_RATIO
                };
                def.localAnchorB = {
                  x: comp.connectedAnchor.x / PHYSICS_2D_PTM_RATIO,
                  y: comp.connectedAnchor.y / PHYSICS_2D_PTM_RATIO
                };
                def.referenceAngle = 0;
                def.dampingRatio = comp.dampingRatio;
                def.frequencyHz = comp.frequency;
                return def;
              }
            }

            class B2WheelJoint extends B2Joint {
              setFrequency(v) {
                if (this._b2joint) {
                  this._b2joint.SetSpringFrequencyHz(v);
                }
              }
              setDampingRatio(v) {
                if (this._b2joint) {
                  this._b2joint.SetSpringDampingRatio(v);
                }
              }
              enableMotor(v) {
                if (this._b2joint) {
                  this._b2joint.EnableMotor(v);
                }
              }
              setMaxMotorTorque(v) {
                if (this._b2joint) {
                  this._b2joint.SetMaxMotorTorque(v);
                }
              }
              setMotorSpeed(v) {
                if (this._b2joint) {
                  this._b2joint.SetMotorSpeed(v);
                }
              }
              _createJointDef() {
                const comp = this._jointComp;
                const def = new B2.WheelJointDef();
                def.localAnchorA = {
                  x: comp.anchor.x / PHYSICS_2D_PTM_RATIO,
                  y: comp.anchor.y / PHYSICS_2D_PTM_RATIO
                };
                def.localAnchorB = {
                  x: comp.connectedAnchor.x / PHYSICS_2D_PTM_RATIO,
                  y: comp.connectedAnchor.y / PHYSICS_2D_PTM_RATIO
                };
                const angle = toRadian(comp.angle);
                def.localAxisA = {
                  x: Math.cos(angle),
                  y: Math.sin(angle)
                };
                def.maxMotorTorque = comp.maxMotorTorque;
                def.motorSpeed = toRadian(comp.motorSpeed);
                def.enableMotor = comp.enableMotor;
                def.dampingRatio = comp.dampingRatio;
                def.frequencyHz = comp.frequency;
                return def;
              }
            }

            class B2HingeJoint extends B2Joint {
              enableLimit(v) {
                if (this._b2joint) {
                  this._b2joint.EnableLimit(v);
                }
              }
              setLowerAngle(v) {
                this.updateLimits();
              }
              setUpperAngle(v) {
                this.updateLimits();
              }
              updateLimits() {
                if (this._b2joint) {
                  const comp = this._jointComp;
                  this._b2joint.SetLimits(toRadian(comp.lowerAngle), toRadian(comp.upperAngle));
                }
              }
              enableMotor(v) {
                if (this._b2joint) {
                  this._b2joint.EnableMotor(v);
                }
              }
              setMaxMotorTorque(v) {
                if (this._b2joint) {
                  this._b2joint.SetMaxMotorTorque(v);
                }
              }
              setMotorSpeed(v) {
                if (this._b2joint) {
                  this._b2joint.SetMotorSpeed(v);
                }
              }
              _createJointDef() {
                const comp = this._jointComp;
                const def = new B2.RevoluteJointDef();
                def.localAnchorA = {
                  x: comp.anchor.x / PHYSICS_2D_PTM_RATIO,
                  y: comp.anchor.y / PHYSICS_2D_PTM_RATIO
                };
                def.localAnchorB = {
                  x: comp.connectedAnchor.x / PHYSICS_2D_PTM_RATIO,
                  y: comp.connectedAnchor.y / PHYSICS_2D_PTM_RATIO
                };
                def.enableMotor = comp.enableMotor;
                def.maxMotorTorque = comp.maxMotorTorque;
                def.motorSpeed = toRadian(comp.motorSpeed);
                def.enableLimit = comp.enableLimit;
                def.lowerAngle = toRadian(comp.lowerAngle);
                def.upperAngle = toRadian(comp.upperAngle);
                return def;
              }
            }

            game.once(Game.EVENT_PRE_SUBSYSTEM_INIT, () => {
              selector.register('box2d-wasm', {
                PhysicsWorld: B2PhysicsWorld,
                RigidBody: B2RigidBody2D,
                BoxShape: B2BoxShape,
                CircleShape: B2CircleShape,
                PolygonShape: B2PolygonShape,
                MouseJoint: B2MouseJoint,
                DistanceJoint: B2DistanceJoint,
                SpringJoint: B2SpringJoint,
                RelativeJoint: B2RelativeJoint,
                SliderJoint: B2SliderJoint,
                FixedJoint: B2FixedJoint,
                WheelJoint: B2WheelJoint,
                HingeJoint: B2HingeJoint
              });
            });

        })
    };
}));
