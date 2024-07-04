System.register("q-bundled:///fs/cocos/physics-2d/builtin/builtin-world.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "./shapes/box-shape-2d.js", "./shapes/circle-shape-2d.js", "./shapes/polygon-shape-2d.js", "../framework/physics-types.js", "../framework/index.js", "./builtin-contact.js", "../../scene-graph/index.js", "../../game/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, TEST, CCObject, Vec3, Color, js, BuiltinBoxShape, BuiltinCircleShape, BuiltinPolygonShape, EPhysics2DDrawFlags, Contact2DType, PhysicsSystem2D, BuiltinContact, Node, find, director, contactResults, testIntersectResults, BuiltinPhysicsWorld;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
                                                                                                                                                                                                                                                                                                                                                                                            */ // import { Graphics } from '../../2d';
  // import { Canvas } from '../../2d/framework';
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_coreIndexJs) {
      CCObject = _coreIndexJs.CCObject;
      Vec3 = _coreIndexJs.Vec3;
      Color = _coreIndexJs.Color;
      js = _coreIndexJs.js;
    }, function (_shapesBoxShape2dJs) {
      BuiltinBoxShape = _shapesBoxShape2dJs.BuiltinBoxShape;
    }, function (_shapesCircleShape2dJs) {
      BuiltinCircleShape = _shapesCircleShape2dJs.BuiltinCircleShape;
    }, function (_shapesPolygonShape2dJs) {
      BuiltinPolygonShape = _shapesPolygonShape2dJs.BuiltinPolygonShape;
    }, function (_frameworkPhysicsTypesJs) {
      EPhysics2DDrawFlags = _frameworkPhysicsTypesJs.EPhysics2DDrawFlags;
      Contact2DType = _frameworkPhysicsTypesJs.Contact2DType;
    }, function (_frameworkIndexJs) {
      PhysicsSystem2D = _frameworkIndexJs.PhysicsSystem2D;
    }, function (_builtinContactJs) {
      BuiltinContact = _builtinContactJs.BuiltinContact;
    }, function (_sceneGraphIndexJs) {
      Node = _sceneGraphIndexJs.Node;
      find = _sceneGraphIndexJs.find;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
    }],
    execute: function () {
      contactResults = [];
      testIntersectResults = [];
      _export("BuiltinPhysicsWorld", BuiltinPhysicsWorld = /*#__PURE__*/function () {
        function BuiltinPhysicsWorld() {
          this._contacts = [];
          this._shapes = [];
          this._debugGraphics = null;
          this._debugDrawFlags = 0;
        }
        var _proto = BuiltinPhysicsWorld.prototype;
        _proto.shouldCollide = function shouldCollide(c1, c2) {
          var collider1 = c1.collider;
          var collider2 = c2.collider;
          var collisionMatrix = PhysicsSystem2D.instance.collisionMatrix;
          return collider1 !== collider2 && collider1.node !== collider2.node && collisionMatrix[collider1.group] & collider2.group && collisionMatrix[collider2.group] & collider1.group;
        };
        _proto.addShape = function addShape(shape) {
          var shapes = this._shapes;
          var index = shapes.indexOf(shape);
          if (index === -1) {
            for (var i = 0, l = shapes.length; i < l; i++) {
              var other = shapes[i];
              if (this.shouldCollide(shape, other)) {
                var contact = new BuiltinContact(shape, other);
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
        };
        _proto.removeShape = function removeShape(shape) {
          var shapes = this._shapes;
          var index = shapes.indexOf(shape);
          if (index >= 0) {
            js.array.fastRemoveAt(shapes, index);
            var contacts = this._contacts;
            for (var i = contacts.length - 1; i >= 0; i--) {
              var contact = contacts[i];
              if (contact.shape1 === shape || contact.shape2 === shape) {
                if (contact.touching) {
                  this._emitCollide(contact, Contact2DType.END_CONTACT);
                }
                js.array.fastRemoveAt(contacts, i);
                var other = contact.shape1 === shape ? contact.shape2 : contact.shape1;
                var contactIndex = other._contacts.indexOf(contact);
                if (contactIndex >= 0) {
                  js.array.fastRemoveAt(other._contacts, contactIndex);
                }
              }
            }
          }
          shape._contacts.length = 0;
        };
        _proto.updateShapeGroup = function updateShapeGroup(shape) {
          this.removeShape(shape);
          if (shape.collider.enabledInHierarchy) {
            this.addShape(shape);
          }
        };
        _proto.step = function step(deltaTime, velocityIterations, positionIterations) {
          if (velocityIterations === void 0) {
            velocityIterations = 10;
          }
          if (positionIterations === void 0) {
            positionIterations = 10;
          }
          // update collider
          var shapes = this._shapes;
          for (var i = 0, l = shapes.length; i < l; i++) {
            shapes[i].update();
          }

          // do collide
          var contacts = this._contacts;
          contactResults.length = 0;
          for (var _i = 0, _l = contacts.length; _i < _l; _i++) {
            var collisionType = contacts[_i].updateState();
            if (collisionType === Contact2DType.None) {
              continue;
            }
            contactResults.push(contacts[_i]);
          }

          // handle collide results, emit message
          for (var _i2 = 0, _l2 = contactResults.length; _i2 < _l2; _i2++) {
            var result = contactResults[_i2];
            this._emitCollide(result);
          }
        };
        _proto.drawDebug = function drawDebug() {
          if (TEST) return;
          if (!this._debugDrawFlags) {
            return;
          }
          this._checkDebugDrawValid();
          var debugDrawer = this._debugGraphics;
          if (!debugDrawer) {
            return;
          }
          debugDrawer.clear();
          debugDrawer.lineWidth = 3;
          var shapes = this._shapes;
          for (var i = 0, l = shapes.length; i < l; i++) {
            var shape = shapes[i];
            debugDrawer.strokeColor = Color.WHITE;
            if (shape instanceof BuiltinBoxShape || shape instanceof BuiltinPolygonShape) {
              var ps = shape.worldPoints;
              if (ps.length > 0) {
                debugDrawer.moveTo(ps[0].x, ps[0].y);
                for (var j = 1; j < ps.length; j++) {
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
              var aabb = shape.worldAABB;
              debugDrawer.strokeColor = Color.BLUE;
              debugDrawer.moveTo(aabb.xMin, aabb.yMin);
              debugDrawer.lineTo(aabb.xMin, aabb.yMax);
              debugDrawer.lineTo(aabb.xMax, aabb.yMax);
              debugDrawer.lineTo(aabb.xMax, aabb.yMin);
              debugDrawer.close();
              debugDrawer.stroke();
            }
          }
        };
        _proto._emitCollide = function _emitCollide(contact, collisionType) {
          collisionType = collisionType || contact.type;
          var c1 = contact.shape1.collider;
          var c2 = contact.shape2.collider;
          PhysicsSystem2D.instance.emit(collisionType, c1, c2);
          c1.emit(collisionType, c1, c2);
          c2.emit(collisionType, c2, c1);
        };
        _proto._checkDebugDrawValid = function _checkDebugDrawValid() {
          if (EDITOR_NOT_IN_PREVIEW) return;
          if (!this._debugGraphics || !this._debugGraphics.isValid) {
            var canvas = find('Canvas');
            if (!canvas) {
              var scene = director.getScene();
              if (!scene) {
                return;
              }
              canvas = new Node('Canvas');
              canvas.addComponent('cc.Canvas');
              canvas.parent = scene;
            }
            var node = new Node('PHYSICS_2D_DEBUG_DRAW');
            // node.zIndex = cc.macro.MAX_ZINDEX;
            node.hideFlags |= CCObject.Flags.DontSave;
            node.parent = canvas;
            node.worldPosition = Vec3.ZERO;
            this._debugGraphics = node.addComponent('cc.Graphics');
            this._debugGraphics.lineWidth = 2;
          }
          var parent = this._debugGraphics.node.parent;
          this._debugGraphics.node.setSiblingIndex(parent.children.length - 1);
        };
        _proto.testPoint = function testPoint(p) {
          var shapes = this._shapes;
          testIntersectResults.length = 0;
          for (var i = 0; i < shapes.length; i++) {
            var shape = shapes[i];
            if (!shape.containsPoint(p)) {
              continue;
            }
            testIntersectResults.push(shape.collider);
          }
          return testIntersectResults;
        };
        _proto.testAABB = function testAABB(rect) {
          var shapes = this._shapes;
          testIntersectResults.length = 0;
          for (var i = 0; i < shapes.length; i++) {
            var shape = shapes[i];
            if (!shape.intersectsRect(rect)) {
              continue;
            }
            testIntersectResults.push(shape.collider);
          }
          return testIntersectResults;
        }

        // empty implements
        ;
        _proto.impl = function impl() {
          return null;
        };
        _proto.setGravity = function setGravity() {
          //empty
        };
        _proto.setAllowSleep = function setAllowSleep() {
          //empty
        };
        _proto.syncPhysicsToScene = function syncPhysicsToScene() {
          //empty
        };
        _proto.syncSceneToPhysics = function syncSceneToPhysics() {
          //empty
        };
        _proto.raycast = function raycast(p1, p2, type) {
          return [];
        };
        _createClass(BuiltinPhysicsWorld, [{
          key: "debugDrawFlags",
          get: function get() {
            return this._debugDrawFlags;
          },
          set: function set(v) {
            this._debugDrawFlags = v;
          }
        }]);
        return BuiltinPhysicsWorld;
      }());
    }
  };
});