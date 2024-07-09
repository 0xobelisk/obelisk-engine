System.register("q-bundled:///fs/cocos/physics-2d/box2d-wasm/instantiate.js", ["../framework/physics-selector.js", "./physics-world.js", "./rigid-body.js", "./shapes/box-shape-2d.js", "./shapes/circle-shape-2d.js", "./shapes/polygon-shape-2d.js", "./joints/mouse-joint.js", "./joints/distance-joint.js", "./joints/spring-joint.js", "./joints/relative-joint.js", "./joints/slider-joint.js", "./joints/fixed-joint.js", "./joints/wheel-joint.js", "./joints/hinge-joint.js", "../../game/index.js"], function (_export, _context) {
  "use strict";

  var selector, B2PhysicsWorld, B2RigidBody2D, B2BoxShape, B2CircleShape, B2PolygonShape, B2MouseJoint, B2DistanceJoint, B2SpringJoint, B2RelativeJoint, B2SliderJoint, B2FixedJoint, B2WheelJoint, B2HingeJoint, Game, game;
  return {
    setters: [function (_frameworkPhysicsSelectorJs) {
      selector = _frameworkPhysicsSelectorJs.selector;
    }, function (_physicsWorldJs) {
      B2PhysicsWorld = _physicsWorldJs.B2PhysicsWorld;
    }, function (_rigidBodyJs) {
      B2RigidBody2D = _rigidBodyJs.B2RigidBody2D;
    }, function (_shapesBoxShape2dJs) {
      B2BoxShape = _shapesBoxShape2dJs.B2BoxShape;
    }, function (_shapesCircleShape2dJs) {
      B2CircleShape = _shapesCircleShape2dJs.B2CircleShape;
    }, function (_shapesPolygonShape2dJs) {
      B2PolygonShape = _shapesPolygonShape2dJs.B2PolygonShape;
    }, function (_jointsMouseJointJs) {
      B2MouseJoint = _jointsMouseJointJs.B2MouseJoint;
    }, function (_jointsDistanceJointJs) {
      B2DistanceJoint = _jointsDistanceJointJs.B2DistanceJoint;
    }, function (_jointsSpringJointJs) {
      B2SpringJoint = _jointsSpringJointJs.B2SpringJoint;
    }, function (_jointsRelativeJointJs) {
      B2RelativeJoint = _jointsRelativeJointJs.B2RelativeJoint;
    }, function (_jointsSliderJointJs) {
      B2SliderJoint = _jointsSliderJointJs.B2SliderJoint;
    }, function (_jointsFixedJointJs) {
      B2FixedJoint = _jointsFixedJointJs.B2FixedJoint;
    }, function (_jointsWheelJointJs) {
      B2WheelJoint = _jointsWheelJointJs.B2WheelJoint;
    }, function (_jointsHingeJointJs) {
      B2HingeJoint = _jointsHingeJointJs.B2HingeJoint;
    }, function (_gameIndexJs) {
      Game = _gameIndexJs.Game;
      game = _gameIndexJs.game;
    }],
    execute: function () {
      /*
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

      game.once(Game.EVENT_PRE_SUBSYSTEM_INIT, function () {
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
    }
  };
});