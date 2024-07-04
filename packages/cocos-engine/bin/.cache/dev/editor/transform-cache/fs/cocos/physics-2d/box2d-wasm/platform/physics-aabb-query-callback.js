System.register("q-bundled:///fs/cocos/physics-2d/box2d-wasm/platform/physics-aabb-query-callback.js", ["../instantiated.js"], function (_export, _context) {
  "use strict";

  var B2, PhysicsAABBQueryCallback, _class;
  _export("PhysicsAABBQueryCallback", void 0);
  return {
    setters: [function (_instantiatedJs) {
      B2 = _instantiatedJs.B2;
    }],
    execute: function () {
      _export("PhysicsAABBQueryCallback", PhysicsAABBQueryCallback = class PhysicsAABBQueryCallback {
        //B2.Fixture ptr

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

          // True to continue the query, false to terminate the query.
          return true;
        }
        static getFixture() {
          return this._fixtures[0];
        }
        static getFixtures() {
          return this._fixtures;
        }
      });
      _class = PhysicsAABBQueryCallback;
      PhysicsAABBQueryCallback._point = {
        x: 0,
        y: 0
      };
      PhysicsAABBQueryCallback._isPoint = false;
      PhysicsAABBQueryCallback._fixtures = [];
      PhysicsAABBQueryCallback.callback = {
        ReportFixture(fixture) {
          return _class.ReportFixture(fixture);
        }
      };
    }
  };
});