System.register("q-bundled:///fs/cocos/physics-2d/box2d-wasm/platform/physics-debug-draw.js", ["../instantiated.js", "../../../core/index.js", "../../framework/index.js"], function (_export, _context) {
  "use strict";

  var B2, b2Mul, Color, PHYSICS_2D_PTM_RATIO, PhysicsDebugDraw, _class, _tmp_vec2, _tmp_vec3, _tmp_color, GREEN_COLOR, RED_COLOR;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  _export("PhysicsDebugDraw", void 0);
  return {
    setters: [function (_instantiatedJs) {
      B2 = _instantiatedJs.B2;
      b2Mul = _instantiatedJs.b2Mul;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
    }, function (_frameworkIndexJs) {
      PHYSICS_2D_PTM_RATIO = _frameworkIndexJs.PHYSICS_2D_PTM_RATIO;
    }],
    execute: function () {
      _tmp_vec2 = {
        x: 0,
        y: 0
      };
      _tmp_vec3 = {
        x: 0,
        y: 0
      };
      _tmp_color = new Color();
      GREEN_COLOR = Color.GREEN;
      RED_COLOR = Color.RED;
      _export("PhysicsDebugDraw", PhysicsDebugDraw = class PhysicsDebugDraw {
        //new B2.Transform();

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
          //scale?
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
        static DrawPoint(center, size, color) {
          // TODO
        }
        static DrawParticles() {
          // TODO
        }
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
      });
      _class = PhysicsDebugDraw;
      // extends B2.Draw {
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
      //new B2.Transform();
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
    }
  };
});