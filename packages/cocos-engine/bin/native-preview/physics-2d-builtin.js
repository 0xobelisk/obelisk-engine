System.register(['./index-8814617f.js', './index-ce98320e.js', './intersection-2d-54b56d15.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './node-event-18d96a1b.js', './deprecated-f8df8d32.js', './director-dc238483.js', './collision-matrix-13be3bef.js', './physics-enum-187e99c4.js', './device-90bc7390.js', './touch-af62e326.js', './decorators-b63b63a2.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './scene-asset.jsb-0d4c6201.js'], (function () {
    'use strict';
    var PhysicsSystem2D, Contact2DType, EPhysics2DDrawFlags, selector, Rect, Vec2, Mat4, error, fastRemoveAt, Color, CCObject, Vec3, Intersection2D, Node, find, game, Game, director;
    return {
        setters: [function (module) {
            PhysicsSystem2D = module.g;
            Contact2DType = module.C;
            EPhysics2DDrawFlags = module.e;
            selector = module.s;
        }, function (module) {
            Rect = module.R;
            Vec2 = module.V;
            Mat4 = module.s;
            error = module.e;
            fastRemoveAt = module.bz;
            Color = module.C;
            CCObject = module.as;
            Vec3 = module.n;
        }, function (module) {
            Intersection2D = module.I;
        }, function (module) {
            Node = module.Q;
        }, function (module) {
            find = module.j;
        }, function () {}, function (module) {
            game = module.g;
            Game = module.G;
        }, function (module) {
            director = module.n;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            class BuiltinShape2D {
              constructor() {
                this._collider = null;
                this._worldAabb = new Rect();
                this._contacts = [];
              }
              get impl() {
                return null;
              }
              get collider() {
                return this._collider;
              }
              apply() {}
              initialize(comp) {
                this._collider = comp;
              }
              onLoad() {}
              onEnable() {
                PhysicsSystem2D.instance.physicsWorld.addShape(this);
              }
              onDisable() {
                PhysicsSystem2D.instance.physicsWorld.removeShape(this);
              }
              start() {}
              update() {}
              get worldAABB() {
                return this._worldAabb;
              }
              containsPoint(p) {
                if (!this.worldAABB.contains(p)) {
                  return false;
                }
                return true;
              }
              intersectsRect(rect) {
                if (!this.worldAABB.intersects(rect)) {
                  return false;
                }
                return true;
              }
              onGroupChanged() {
                PhysicsSystem2D.instance.physicsWorld.updateShapeGroup(this);
              }
            }

            class BuiltinBoxShape extends BuiltinShape2D {
              constructor(...args) {
                super(...args);
                this._worldPoints = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];
              }
              get worldPoints() {
                return this._worldPoints;
              }
              update() {
                const aabb = this._worldAabb;
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
                const minx = Math.min(wp0.x, wp1.x, wp2.x, wp3.x);
                const miny = Math.min(wp0.y, wp1.y, wp2.y, wp3.y);
                const maxx = Math.max(wp0.x, wp1.x, wp2.x, wp3.x);
                const maxy = Math.max(wp0.y, wp1.y, wp2.y, wp3.y);
                aabb.x = minx;
                aabb.y = miny;
                aabb.width = maxx - minx;
                aabb.height = maxy - miny;
              }
              containsPoint(p) {
                if (!this.worldAABB.contains(p)) {
                  return false;
                }
                return Intersection2D.pointInPolygon(p, this.worldPoints);
              }
              intersectsRect(rect) {
                if (!this.worldAABB.intersects(rect)) {
                  return false;
                }
                return Intersection2D.rectPolygon(rect, this.worldPoints);
              }
            }

            const tempVec2$1 = new Vec2();
            const tempMat4 = new Mat4();
            class BuiltinCircleShape extends BuiltinShape2D {
              constructor(...args) {
                super(...args);
                this._worldPosition = new Vec2();
                this._worldRadius = 0;
              }
              get worldPosition() {
                return this._worldPosition;
              }
              get worldRadius() {
                return this._worldRadius;
              }
              update() {
                const aabb = this._worldAabb;
                const collider = this.collider;
                const worldMatrix = collider.node.getWorldMatrix(tempMat4);
                Vec2.transformMat4(tempVec2$1, collider.offset, worldMatrix);
                const worldPos = this._worldPosition;
                worldPos.x = tempVec2$1.x;
                worldPos.y = tempVec2$1.y;
                worldMatrix.m12 = worldMatrix.m13 = 0;
                tempVec2$1.x = collider.radius;
                tempVec2$1.y = 0;
                Vec2.transformMat4(tempVec2$1, tempVec2$1, worldMatrix);
                const d = this._worldRadius = tempVec2$1.length();
                aabb.x = worldPos.x - d;
                aabb.y = worldPos.y - d;
                aabb.width = d * 2;
                aabb.height = d * 2;
              }
              containsPoint(p) {
                if (!this.worldAABB.contains(p)) {
                  return false;
                }
                const dist = Vec2.subtract(tempVec2$1, p, this.worldPosition).length();
                return dist < this.worldRadius;
              }
              intersectsRect(rect) {
                if (!this.worldAABB.intersects(rect)) {
                  return false;
                }
                return Intersection2D.rectCircle(rect, this.worldPosition, this.worldRadius);
              }
            }

            const tempVec2 = new Vec2();
            class BuiltinPolygonShape extends BuiltinShape2D {
              constructor(...args) {
                super(...args);
                this._worldPoints = [];
              }
              get worldPoints() {
                return this._worldPoints;
              }
              update() {
                const aabb = this._worldAabb;
                const collider = this.collider;
                const points = collider.points;
                const offset = collider.offset;
                const worldMatrix = collider.node.worldMatrix;
                const worldPoints = this._worldPoints;
                worldPoints.length = points.length;
                let minx = 1e6;
                let miny = 1e6;
                let maxx = -1e6;
                let maxy = -1e6;
                for (let i = 0, l = points.length; i < l; i++) {
                  if (!worldPoints[i]) {
                    worldPoints[i] = new Vec2();
                  }
                  tempVec2.x = points[i].x + offset.x;
                  tempVec2.y = points[i].y + offset.y;
                  Vec2.transformMat4(tempVec2, tempVec2, worldMatrix);
                  const x = tempVec2.x;
                  const y = tempVec2.y;
                  worldPoints[i].x = x;
                  worldPoints[i].y = y;
                  if (x > maxx) maxx = x;
                  if (x < minx) minx = x;
                  if (y > maxy) maxy = y;
                  if (y < miny) miny = y;
                }
                aabb.x = minx;
                aabb.y = miny;
                aabb.width = maxx - minx;
                aabb.height = maxy - miny;
              }
              containsPoint(p) {
                if (!this.worldAABB.contains(p)) {
                  return false;
                }
                return Intersection2D.pointInPolygon(p, this.worldPoints);
              }
              intersectsRect(rect) {
                if (!this.worldAABB.intersects(rect)) {
                  return false;
                }
                return Intersection2D.rectPolygon(rect, this.worldPoints);
              }
            }

            class BuiltinContact {
              constructor(shape1, shape2) {
                this.shape1 = void 0;
                this.shape2 = void 0;
                this.testFunc = void 0;
                this.touching = false;
                this.type = Contact2DType.None;
                this.shape1 = shape1;
                this.shape2 = shape2;
                this.touching = false;
                const isShape1Polygon = shape1 instanceof BuiltinBoxShape || shape1 instanceof BuiltinPolygonShape;
                const isShape2Polygon = shape2 instanceof BuiltinBoxShape || shape2 instanceof BuiltinPolygonShape;
                const isShape1Circle = shape1 instanceof BuiltinCircleShape;
                const isShape2Circle = shape2 instanceof BuiltinCircleShape;
                if (isShape1Polygon && isShape2Polygon) {
                  this.testFunc = Intersection2D.polygonPolygon;
                } else if (isShape1Circle && isShape2Circle) {
                  this.testFunc = Intersection2D.circleCircle;
                } else if (isShape1Polygon && isShape2Circle) {
                  this.testFunc = Intersection2D.polygonCircle;
                } else if (isShape1Circle && isShape2Polygon) {
                  this.testFunc = Intersection2D.polygonCircle;
                  this.shape1 = shape2;
                  this.shape2 = shape1;
                } else {
                  error(`Can not find contact for builtin shape: ${shape1.constructor.name}, ${shape2.constructor.name}`);
                }
              }
              test() {
                const s1 = this.shape1;
                const s2 = this.shape2;
                if (!s1.worldAABB.intersects(s2.worldAABB)) {
                  return false;
                }
                if (this.testFunc === Intersection2D.polygonPolygon) {
                  return Intersection2D.polygonPolygon(s1.worldPoints, s2.worldPoints);
                } else if (this.testFunc === Intersection2D.circleCircle) {
                  return Intersection2D.circleCircle(s1.worldPosition, s1.worldRadius, s2.worldPosition, s2.worldRadius);
                } else if (this.testFunc === Intersection2D.polygonCircle) {
                  return Intersection2D.polygonCircle(s1.worldPoints, s2.worldPosition, s2.worldRadius);
                }
                return false;
              }
              updateState() {
                const result = this.test();
                let type = Contact2DType.None;
                if (result && !this.touching) {
                  this.touching = true;
                  type = Contact2DType.BEGIN_CONTACT;
                } else if (!result && this.touching) {
                  this.touching = false;
                  type = Contact2DType.END_CONTACT;
                }
                this.type = type;
                return type;
              }
            }

            const contactResults = [];
            const testIntersectResults = [];
            class BuiltinPhysicsWorld {
              constructor() {
                this._contacts = [];
                this._shapes = [];
                this._debugGraphics = null;
                this._debugDrawFlags = 0;
              }
              get debugDrawFlags() {
                return this._debugDrawFlags;
              }
              set debugDrawFlags(v) {
                this._debugDrawFlags = v;
              }
              shouldCollide(c1, c2) {
                const collider1 = c1.collider;
                const collider2 = c2.collider;
                const collisionMatrix = PhysicsSystem2D.instance.collisionMatrix;
                return collider1 !== collider2 && collider1.node !== collider2.node && collisionMatrix[collider1.group] & collider2.group && collisionMatrix[collider2.group] & collider1.group;
              }
              addShape(shape) {
                const shapes = this._shapes;
                const index = shapes.indexOf(shape);
                if (index === -1) {
                  for (let i = 0, l = shapes.length; i < l; i++) {
                    const other = shapes[i];
                    if (this.shouldCollide(shape, other)) {
                      const contact = new BuiltinContact(shape, other);
                      this._contacts.push(contact);
                      if (shape._contacts.indexOf(contact) === -1) {
                        shape._contacts.push(contact);
                      }
                      if (other._contacts.indexOf(contact) === -1) {
                        other._contacts.push(contact);
                      }
                    }
                  }
                  shapes.push(shape);
                }
              }
              removeShape(shape) {
                const shapes = this._shapes;
                const index = shapes.indexOf(shape);
                if (index >= 0) {
                  fastRemoveAt(shapes, index);
                  const contacts = this._contacts;
                  for (let i = contacts.length - 1; i >= 0; i--) {
                    const contact = contacts[i];
                    if (contact.shape1 === shape || contact.shape2 === shape) {
                      if (contact.touching) {
                        this._emitCollide(contact, Contact2DType.END_CONTACT);
                      }
                      fastRemoveAt(contacts, i);
                      const other = contact.shape1 === shape ? contact.shape2 : contact.shape1;
                      const contactIndex = other._contacts.indexOf(contact);
                      if (contactIndex >= 0) {
                        fastRemoveAt(other._contacts, contactIndex);
                      }
                    }
                  }
                }
                shape._contacts.length = 0;
              }
              updateShapeGroup(shape) {
                this.removeShape(shape);
                if (shape.collider.enabledInHierarchy) {
                  this.addShape(shape);
                }
              }
              step(deltaTime, velocityIterations = 10, positionIterations = 10) {
                const shapes = this._shapes;
                for (let i = 0, l = shapes.length; i < l; i++) {
                  shapes[i].update();
                }
                const contacts = this._contacts;
                contactResults.length = 0;
                for (let i = 0, l = contacts.length; i < l; i++) {
                  const collisionType = contacts[i].updateState();
                  if (collisionType === Contact2DType.None) {
                    continue;
                  }
                  contactResults.push(contacts[i]);
                }
                for (let i = 0, l = contactResults.length; i < l; i++) {
                  const result = contactResults[i];
                  this._emitCollide(result);
                }
              }
              drawDebug() {
                if (!this._debugDrawFlags) {
                  return;
                }
                this._checkDebugDrawValid();
                const debugDrawer = this._debugGraphics;
                if (!debugDrawer) {
                  return;
                }
                debugDrawer.clear();
                debugDrawer.lineWidth = 3;
                const shapes = this._shapes;
                for (let i = 0, l = shapes.length; i < l; i++) {
                  const shape = shapes[i];
                  debugDrawer.strokeColor = Color.WHITE;
                  if (shape instanceof BuiltinBoxShape || shape instanceof BuiltinPolygonShape) {
                    const ps = shape.worldPoints;
                    if (ps.length > 0) {
                      debugDrawer.moveTo(ps[0].x, ps[0].y);
                      for (let j = 1; j < ps.length; j++) {
                        debugDrawer.lineTo(ps[j].x, ps[j].y);
                      }
                      debugDrawer.close();
                      debugDrawer.stroke();
                    }
                  } else if (shape instanceof BuiltinCircleShape) {
                    debugDrawer.circle(shape.worldPosition.x, shape.worldPosition.y, shape.worldRadius);
                    debugDrawer.stroke();
                  }
                  if (this._debugDrawFlags & EPhysics2DDrawFlags.Aabb) {
                    const aabb = shape.worldAABB;
                    debugDrawer.strokeColor = Color.BLUE;
                    debugDrawer.moveTo(aabb.xMin, aabb.yMin);
                    debugDrawer.lineTo(aabb.xMin, aabb.yMax);
                    debugDrawer.lineTo(aabb.xMax, aabb.yMax);
                    debugDrawer.lineTo(aabb.xMax, aabb.yMin);
                    debugDrawer.close();
                    debugDrawer.stroke();
                  }
                }
              }
              _emitCollide(contact, collisionType) {
                collisionType = collisionType || contact.type;
                const c1 = contact.shape1.collider;
                const c2 = contact.shape2.collider;
                PhysicsSystem2D.instance.emit(collisionType, c1, c2);
                c1.emit(collisionType, c1, c2);
                c2.emit(collisionType, c2, c1);
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
                    canvas.addComponent('cc.Canvas');
                    canvas.parent = scene;
                  }
                  const node = new Node('PHYSICS_2D_DEBUG_DRAW');
                  node.hideFlags |= CCObject.Flags.DontSave;
                  node.parent = canvas;
                  node.worldPosition = Vec3.ZERO;
                  this._debugGraphics = node.addComponent('cc.Graphics');
                  this._debugGraphics.lineWidth = 2;
                }
                const parent = this._debugGraphics.node.parent;
                this._debugGraphics.node.setSiblingIndex(parent.children.length - 1);
              }
              testPoint(p) {
                const shapes = this._shapes;
                testIntersectResults.length = 0;
                for (let i = 0; i < shapes.length; i++) {
                  const shape = shapes[i];
                  if (!shape.containsPoint(p)) {
                    continue;
                  }
                  testIntersectResults.push(shape.collider);
                }
                return testIntersectResults;
              }
              testAABB(rect) {
                const shapes = this._shapes;
                testIntersectResults.length = 0;
                for (let i = 0; i < shapes.length; i++) {
                  const shape = shapes[i];
                  if (!shape.intersectsRect(rect)) {
                    continue;
                  }
                  testIntersectResults.push(shape.collider);
                }
                return testIntersectResults;
              }
              impl() {
                return null;
              }
              setGravity() {}
              setAllowSleep() {}
              syncPhysicsToScene() {}
              syncSceneToPhysics() {}
              raycast(p1, p2, type) {
                return [];
              }
            }

            game.once(Game.EVENT_PRE_SUBSYSTEM_INIT, () => {
              selector.register('builtin', {
                PhysicsWorld: BuiltinPhysicsWorld,
                RigidBody: null,
                BoxShape: BuiltinBoxShape,
                CircleShape: BuiltinCircleShape,
                PolygonShape: BuiltinPolygonShape,
                MouseJoint: null,
                DistanceJoint: null,
                SpringJoint: null,
                RelativeJoint: null,
                SliderJoint: null,
                FixedJoint: null,
                WheelJoint: null,
                HingeJoint: null
              });
            });

        })
    };
}));
