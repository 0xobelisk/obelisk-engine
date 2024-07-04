System.register("q-bundled:///fs/cocos/physics-2d/box2d-wasm/platform/physics-ray-cast-callback.js", ["../instantiated.js", "../../../core/index.js", "../../framework/index.js"], function (_export, _context) {
  "use strict";

  var B2, Vec2, ERaycast2DType, _class, PhysicsRayCastCallback;
  return {
    setters: [function (_instantiatedJs) {
      B2 = _instantiatedJs.B2;
    }, function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
    }, function (_frameworkIndexJs) {
      ERaycast2DType = _frameworkIndexJs.ERaycast2DType;
    }],
    execute: function () {
      _export("PhysicsRayCastCallback", PhysicsRayCastCallback = /*#__PURE__*/function () {
        function PhysicsRayCastCallback() {}
        PhysicsRayCastCallback.init = function init(type, mask) {
          PhysicsRayCastCallback._type = type;
          PhysicsRayCastCallback._mask = mask;
          PhysicsRayCastCallback._fixtures.length = 0;
          PhysicsRayCastCallback._points.length = 0;
          PhysicsRayCastCallback._normals.length = 0;
          PhysicsRayCastCallback._fractions.length = 0;
        };
        PhysicsRayCastCallback.ReportFixture = function ReportFixture(fixture, point, normal, fraction) {
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
        };
        PhysicsRayCastCallback.getFixtures = function getFixtures() {
          return PhysicsRayCastCallback._fixtures;
        };
        PhysicsRayCastCallback.getPoints = function getPoints() {
          return PhysicsRayCastCallback._points;
        };
        PhysicsRayCastCallback.getNormals = function getNormals() {
          return PhysicsRayCastCallback._normals;
        };
        PhysicsRayCastCallback.getFractions = function getFractions() {
          return PhysicsRayCastCallback._fractions;
        };
        return PhysicsRayCastCallback;
      }());
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
        ReportFixture: function ReportFixture(fixture, point, normal, fraction) {
          return _class.ReportFixture(fixture, point, normal, fraction);
        }
      };
    }
  };
});