System.register("q-bundled:///fs/cocos/physics/bullet/instantiate.js", ["../../game/index.js", "../framework/physics-selector.js", "./bullet-rigid-body.js", "./bullet-world.js", "./shapes/bullet-box-shape.js", "./shapes/bullet-sphere-shape.js", "./shapes/bullet-capsule-shape.js", "./shapes/bullet-trimesh-shape.js", "./shapes/bullet-cylinder-shape.js", "./shapes/bullet-cone-shape.js", "./shapes/bullet-terrain-shape.js", "./shapes/bullet-simplex-shape.js", "./shapes/bullet-plane-shape.js", "./constraints/bullet-p2p-constraint.js", "./constraints/bullet-fixed-constraint.js", "./constraints/bullet-hinge-constraint.js", "./constraints/bullet-configurable-constraint.js", "./character-controllers/bullet-capsule-character-controller.js", "./character-controllers/bullet-box-character-controller.js"], function (_export, _context) {
  "use strict";

  var Game, game, selector, BulletRigidBody, BulletWorld, BulletBoxShape, BulletSphereShape, BulletCapsuleShape, BulletTrimeshShape, BulletCylinderShape, BulletConeShape, BulletTerrainShape, BulletSimplexShape, BulletPlaneShape, BulletP2PConstraint, BulletFixedConstraint, BulletHingeConstraint, BulletConfigurableConstraint, BulletCapsuleCharacterController, BulletBoxCharacterController;
  return {
    setters: [function (_gameIndexJs) {
      Game = _gameIndexJs.Game;
      game = _gameIndexJs.game;
    }, function (_frameworkPhysicsSelectorJs) {
      selector = _frameworkPhysicsSelectorJs.selector;
    }, function (_bulletRigidBodyJs) {
      BulletRigidBody = _bulletRigidBodyJs.BulletRigidBody;
    }, function (_bulletWorldJs) {
      BulletWorld = _bulletWorldJs.BulletWorld;
    }, function (_shapesBulletBoxShapeJs) {
      BulletBoxShape = _shapesBulletBoxShapeJs.BulletBoxShape;
    }, function (_shapesBulletSphereShapeJs) {
      BulletSphereShape = _shapesBulletSphereShapeJs.BulletSphereShape;
    }, function (_shapesBulletCapsuleShapeJs) {
      BulletCapsuleShape = _shapesBulletCapsuleShapeJs.BulletCapsuleShape;
    }, function (_shapesBulletTrimeshShapeJs) {
      BulletTrimeshShape = _shapesBulletTrimeshShapeJs.BulletTrimeshShape;
    }, function (_shapesBulletCylinderShapeJs) {
      BulletCylinderShape = _shapesBulletCylinderShapeJs.BulletCylinderShape;
    }, function (_shapesBulletConeShapeJs) {
      BulletConeShape = _shapesBulletConeShapeJs.BulletConeShape;
    }, function (_shapesBulletTerrainShapeJs) {
      BulletTerrainShape = _shapesBulletTerrainShapeJs.BulletTerrainShape;
    }, function (_shapesBulletSimplexShapeJs) {
      BulletSimplexShape = _shapesBulletSimplexShapeJs.BulletSimplexShape;
    }, function (_shapesBulletPlaneShapeJs) {
      BulletPlaneShape = _shapesBulletPlaneShapeJs.BulletPlaneShape;
    }, function (_constraintsBulletP2pConstraintJs) {
      BulletP2PConstraint = _constraintsBulletP2pConstraintJs.BulletP2PConstraint;
    }, function (_constraintsBulletFixedConstraintJs) {
      BulletFixedConstraint = _constraintsBulletFixedConstraintJs.BulletFixedConstraint;
    }, function (_constraintsBulletHingeConstraintJs) {
      BulletHingeConstraint = _constraintsBulletHingeConstraintJs.BulletHingeConstraint;
    }, function (_constraintsBulletConfigurableConstraintJs) {
      BulletConfigurableConstraint = _constraintsBulletConfigurableConstraintJs.BulletConfigurableConstraint;
    }, function (_characterControllersBulletCapsuleCharacterControllerJs) {
      BulletCapsuleCharacterController = _characterControllersBulletCapsuleCharacterControllerJs.BulletCapsuleCharacterController;
    }, function (_characterControllersBulletBoxCharacterControllerJs) {
      BulletBoxCharacterController = _characterControllersBulletBoxCharacterControllerJs.BulletBoxCharacterController;
    }],
    execute: function () {
      /*
       Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
      
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
        selector.register('bullet', {
          PhysicsWorld: BulletWorld,
          RigidBody: BulletRigidBody,
          BoxShape: BulletBoxShape,
          SphereShape: BulletSphereShape,
          CapsuleShape: BulletCapsuleShape,
          TrimeshShape: BulletTrimeshShape,
          CylinderShape: BulletCylinderShape,
          ConeShape: BulletConeShape,
          TerrainShape: BulletTerrainShape,
          SimplexShape: BulletSimplexShape,
          PlaneShape: BulletPlaneShape,
          PointToPointConstraint: BulletP2PConstraint,
          HingeConstraint: BulletHingeConstraint,
          FixedConstraint: BulletFixedConstraint,
          ConfigurableConstraint: BulletConfigurableConstraint,
          BoxCharacterController: BulletBoxCharacterController,
          CapsuleCharacterController: BulletCapsuleCharacterController
        });
      });
    }
  };
});