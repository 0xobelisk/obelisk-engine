System.register(['./index-ce98320e.js', './mesh.jsb-cea8fe4b.js', './find-7a03d1cc.js', './capsule-3c7095c4.js', './murmurhash2_gc-2108d723.js'], (function (exports) {
    'use strict';
    var replaceProperty, removeProperty, Vec3, Mesh, cylinder, murmurhash2_32_gc;
    return {
        setters: [function (module) {
            replaceProperty = module.ag;
            removeProperty = module.ah;
            Vec3 = module.n;
        }, function (module) {
            Mesh = module.M;
        }, function () {}, function (module) {
            cylinder = module.c;
        }, function (module) {
            murmurhash2_32_gc = module.m;
        }],
        execute: (function () {

            exports({
                a: absolute,
                g: getWrap,
                m: maxComponent,
                s: setWrap
            });

            replaceProperty(Mesh.prototype, 'Mesh.prototype', [{
              name: 'renderingMesh',
              newName: 'renderingSubMeshes'
            }]);
            removeProperty(Mesh.prototype, 'Mesh.prototype', [{
              name: 'hasFlatBuffers'
            }, {
              name: 'destroyFlatBuffers'
            }]);

            function setWrap(object, wrapper) {
              object.__cc_wrapper__ = wrapper;
            }
            function getWrap(object) {
              return object.__cc_wrapper__;
            }
            function maxComponent(v) {
              return Math.max(v.x, Math.max(v.y, v.z));
            }
            const VEC3_0 = exports('V', new Vec3());
            const TriggerEventObject = {
              type: 'onTriggerEnter',
              selfCollider: null,
              otherCollider: null,
              impl: null
            };
            const CharacterTriggerEventObject = {
              type: 'onControllerTriggerEnter',
              collider: null,
              characterController: null,
              impl: null
            };
            const CollisionEventObject = {
              type: 'onCollisionEnter',
              selfCollider: null,
              otherCollider: null,
              contacts: [],
              impl: null
            };
            function shrinkPositions(buffer) {
              const pos = [];
              const posHashMap = {};
              if (buffer.length >= 3) {
                pos[0] = buffer[0];
                pos[1] = buffer[1];
                pos[2] = buffer[2];
                const len = buffer.length;
                for (let i = 3; i < len; i += 3) {
                  const p0 = buffer[i];
                  const p1 = buffer[i + 1];
                  const p2 = buffer[i + 2];
                  const str = String(p0) + String(p1) + String(p2);
                  const hash = murmurhash2_32_gc(str, 666);
                  if (posHashMap[hash] !== str) {
                    posHashMap[hash] = str;
                    pos.push(p0);
                    pos.push(p1);
                    pos.push(p2);
                  }
                }
              }
              return pos;
            }
            function absolute(v) {
              v.x = Math.abs(v.x);
              v.y = Math.abs(v.y);
              v.z = Math.abs(v.z);
              return v;
            }

            var util = /*#__PURE__*/Object.freeze({
                __proto__: null,
                setWrap: setWrap,
                getWrap: getWrap,
                maxComponent: maxComponent,
                VEC3_0: VEC3_0,
                TriggerEventObject: TriggerEventObject,
                CharacterTriggerEventObject: CharacterTriggerEventObject,
                CollisionEventObject: CollisionEventObject,
                shrinkPositions: shrinkPositions,
                absolute: absolute,
                cylinder: cylinder
            });
            exports('u', util);

        })
    };
}));
