System.register("q-bundled:///fs/cocos/physics-2d/box2d-wasm/joints/mouse-joint.js", ["../instantiated.js", "./joint-2d.js", "../../framework/index.js", "../../framework/physics-types.js", "../../../core/index.js", "../../../scene-graph/node-event.js", "../../../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var B2, B2Joint, PhysicsSystem2D, PHYSICS_2D_PTM_RATIO, Vec2, NodeEventType, find, B2MouseJoint, tempB2Vec2;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
                                                                                                                                                                                                                                                                                                                                                                                            */
  _export("B2MouseJoint", void 0);
  return {
    setters: [function (_instantiatedJs) {
      B2 = _instantiatedJs.B2;
    }, function (_joint2dJs) {
      B2Joint = _joint2dJs.B2Joint;
    }, function (_frameworkIndexJs) {
      PhysicsSystem2D = _frameworkIndexJs.PhysicsSystem2D;
    }, function (_frameworkPhysicsTypesJs) {
      PHYSICS_2D_PTM_RATIO = _frameworkPhysicsTypesJs.PHYSICS_2D_PTM_RATIO;
    }, function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
    }, function (_sceneGraphNodeEventJs) {
      NodeEventType = _sceneGraphNodeEventJs.NodeEventType;
    }, function (_sceneGraphIndexJs) {
      find = _sceneGraphIndexJs.find;
    }],
    execute: function () {
      tempB2Vec2 = {
        x: 0,
        y: 0
      }; //new b2.Vec2();
      _export("B2MouseJoint", B2MouseJoint = class B2MouseJoint extends B2Joint {
        constructor(...args) {
          super(...args);
          this._touchPoint = new Vec2();
          this._isTouched = false;
        }
        setTarget(v) {
          if (this._b2joint) {
            tempB2Vec2.x = v.x / PHYSICS_2D_PTM_RATIO;
            tempB2Vec2.y = v.y / PHYSICS_2D_PTM_RATIO;
            this._b2joint.SetTarget(tempB2Vec2);
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
        onEnable() {
          //empty
        }
        start() {
          //empty
        }
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

          // let camera = cc.Camera.findCamera(this.node);
          // if (camera) {
          //     this.target = camera.getScreenToWorldPoint(this._touchPoint);
          // }
          // else {
          this.setTarget(this._touchPoint);
          // }
        }
      });
    }
  };
});