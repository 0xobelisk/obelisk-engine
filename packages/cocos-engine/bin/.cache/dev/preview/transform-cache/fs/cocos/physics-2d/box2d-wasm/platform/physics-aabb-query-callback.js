System.register("q-bundled:///fs/cocos/physics-2d/box2d-wasm/platform/physics-aabb-query-callback.js", ["../instantiated.js"], function (_export, _context) {
  "use strict";

  var B2, _class, PhysicsAABBQueryCallback;
  return {
    setters: [function (_instantiatedJs) {
      B2 = _instantiatedJs.B2;
    }],
    execute: function () {
      _export("PhysicsAABBQueryCallback", PhysicsAABBQueryCallback = /*#__PURE__*/function () {
        function PhysicsAABBQueryCallback() {}
        //B2.Fixture ptr
        PhysicsAABBQueryCallback.init = function init(point) {
          if (point) {
            this._isPoint = true;
            this._point.x = point.x;
            this._point.y = point.y;
          } else {
            this._isPoint = false;
          }
          this._fixtures.length = 0;
        };
        PhysicsAABBQueryCallback.ReportFixture = function ReportFixture(fixture) {
          if (this._isPoint) {
            if (B2.FixtureTestPoint(fixture, this._point)) {
              this._fixtures.push(fixture);
            }
          } else {
            this._fixtures.push(fixture);
          }

          // True to continue the query, false to terminate the query.
          return true;
        };
        PhysicsAABBQueryCallback.getFixture = function getFixture() {
          return this._fixtures[0];
        };
        PhysicsAABBQueryCallback.getFixtures = function getFixtures() {
          return this._fixtures;
        };
        return PhysicsAABBQueryCallback;
      }());
      _class = PhysicsAABBQueryCallback;
      PhysicsAABBQueryCallback._point = {
        x: 0,
        y: 0
      };
      PhysicsAABBQueryCallback._isPoint = false;
      PhysicsAABBQueryCallback._fixtures = [];
      PhysicsAABBQueryCallback.callback = {
        ReportFixture: function ReportFixture(fixture) {
          return _class.ReportFixture(fixture);
        }
      };
    }
  };
});