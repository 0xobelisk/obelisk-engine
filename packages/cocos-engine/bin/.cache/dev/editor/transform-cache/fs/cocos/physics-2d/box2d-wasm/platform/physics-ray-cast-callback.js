System.register("q-bundled:///fs/cocos/physics-2d/box2d-wasm/platform/physics-ray-cast-callback.js", ["../instantiated.js", "../../../core/index.js", "../../framework/index.js"], function (_export, _context) {
  "use strict";

  var B2, Vec2, ERaycast2DType, PhysicsRayCastCallback, _class;
  _export("PhysicsRayCastCallback", void 0);
  return {
    setters: [function (_instantiatedJs) {
      B2 = _instantiatedJs.B2;
    }, function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
    }, function (_frameworkIndexJs) {
      ERaycast2DType = _frameworkIndexJs.ERaycast2DType;
    }],
    execute: function () {
      _export("PhysicsRayCastCallback", PhysicsRayCastCallback = class PhysicsRayCastCallback {
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
      });
      _class = PhysicsRayCastCallback;
      // extends B2.RayCastCallback {
      PhysicsRayCastCallback._type = ERaycast2DType.Closest;
      PhysicsRayCastCallback._fixtures = [];
      //B2.Fixture ptr
      PhysicsRayCastCallback._points = [];
      PhysicsRayCastCallback._normals = [];
      PhysicsRayCastCallback._fractions = [];
      PhysicsRayCastCallback._mask = 0xffffffff;
      PhysicsRayCastCallback.callback = {
        ReportFixture(fixture, point, normal, fraction) {
          return _class.ReportFixture(fixture, point, normal, fraction);
        }
      };
    }
  };
});