System.register(['./index-ce98320e.js', './builtin-res-mgr.jsb-c9e8e53a.js', './node-event-18d96a1b.js'], (function (exports) {
    'use strict';
    var CCObject, legacyCC, getError, warn, isCCObject, updateChildrenForDeserialize, isDomNode, value, isCCClassOrFastDefined, ValueType, Node, Component;
    return {
        setters: [function (module) {
            CCObject = module.as;
            legacyCC = module.l;
            getError = module.aI;
            warn = module.w;
            isCCObject = module.bl;
            updateChildrenForDeserialize = module.b$;
            isDomNode = module.cn;
            value = module.bH;
            isCCClassOrFastDefined = module.ar;
            ValueType = module.ac;
        }, function (module) {
            Node = module.Q;
        }, function (module) {
            Component = module.C;
        }],
        execute: (function () {

            exports('i', instantiate);

            const Destroyed = CCObject.Flags.Destroyed;
            const PersistentMask = CCObject.Flags.PersistentMask;
            const objsToClearTmpVar = [];
            function hasImplementedInstantiate(original) {
              return typeof original._instantiate === 'function';
            }
            function instantiate(original, internalForce) {
              if (!internalForce) {
                {
                  if (typeof original !== 'object' || Array.isArray(original)) {
                    throw new TypeError(getError(6900));
                  }
                  if (!original) {
                    throw new TypeError(getError(6901));
                  }
                  if (!legacyCC.isValid(original)) {
                    throw new TypeError(getError(6901));
                  }
                  if (original instanceof Component) {
                    warn('Should not instantiate a single cc.Component directly, you must instantiate the entire node.');
                  }
                }
              }
              let clone;
              if (isCCObject(original)) {
                if (hasImplementedInstantiate(original)) {
                  legacyCC.game._isCloning = true;
                  clone = original._instantiate(null, true);
                  legacyCC.game._isCloning = false;
                  {
                    updateChildrenForDeserialize(clone);
                  }
                  return clone;
                } else if (original instanceof legacyCC.Asset) {
                  throw new TypeError(getError(6903));
                }
              }
              legacyCC.game._isCloning = true;
              clone = doInstantiate(original);
              legacyCC.game._isCloning = false;
              {
                updateChildrenForDeserialize(clone);
              }
              return clone;
            }
            function doInstantiate(obj, parent) {
              {
                if (Array.isArray(obj)) {
                  throw new TypeError(getError(6904));
                }
                if (isDomNode(obj)) {
                  throw new TypeError(getError(6905));
                }
              }
              let clone;
              if (obj._iN$t) {
                clone = obj._iN$t;
              } else if (obj.constructor) {
                const Klass = obj.constructor;
                clone = new Klass();
              } else {
                clone = Object.create(null);
              }
              enumerateObject(obj, clone, parent);
              for (let i = 0, len = objsToClearTmpVar.length; i < len; ++i) {
                objsToClearTmpVar[i]._iN$t = null;
              }
              objsToClearTmpVar.length = 0;
              return clone;
            }
            function enumerateCCClass(klass, obj, clone, parent) {
              const props = klass.__values__;
              for (let p = 0; p < props.length; p++) {
                const key = props[p];
                const value = obj[key];
                if (typeof value === 'object' && value) {
                  const initValue = clone[key];
                  if (initValue instanceof ValueType && initValue.constructor === value.constructor) {
                    initValue.set(value);
                  } else {
                    clone[key] = value._iN$t || instantiateObj(value, parent);
                  }
                } else {
                  clone[key] = value;
                }
              }
            }
            function enumerateObject(obj, clone, parent) {
              value(obj, '_iN$t', clone, true);
              objsToClearTmpVar.push(obj);
              const klass = obj.constructor;
              if (isCCClassOrFastDefined(klass)) {
                enumerateCCClass(klass, obj, clone, parent);
              } else {
                for (const key in obj) {
                  if (!obj.hasOwnProperty(key) || key.charCodeAt(0) === 95 && key.charCodeAt(1) === 95 && key !== '__type__' && key !== '__prefab') {
                    continue;
                  }
                  const value = obj[key];
                  if (typeof value === 'object' && value) {
                    if (value === clone) {
                      continue;
                    }
                    clone[key] = value._iN$t || instantiateObj(value, parent);
                  } else {
                    clone[key] = value;
                  }
                }
              }
              if (isCCObject(obj)) {
                clone._objFlags &= PersistentMask;
              }
            }
            function instantiateObj(obj, parent) {
              if (obj instanceof ValueType) {
                return obj.clone();
              }
              if (obj instanceof legacyCC.Asset) {
                return obj;
              }
              let clone;
              if (ArrayBuffer.isView(obj)) {
                const len = obj.length;
                clone = new obj.constructor(len);
                obj._iN$t = clone;
                objsToClearTmpVar.push(obj);
                for (let i = 0; i < len; ++i) {
                  clone[i] = obj[i];
                }
                return clone;
              }
              if (Array.isArray(obj)) {
                const len = obj.length;
                clone = new Array(len);
                obj._iN$t = clone;
                objsToClearTmpVar.push(obj);
                for (let i = 0; i < len; ++i) {
                  const value = obj[i];
                  if (typeof value === 'object' && value) {
                    clone[i] = value._iN$t || instantiateObj(value, parent);
                  } else {
                    clone[i] = value;
                  }
                }
                return clone;
              } else if (obj._objFlags & Destroyed) {
                return null;
              }
              const ctor = obj.constructor;
              if (isCCClassOrFastDefined(ctor)) {
                if (parent) {
                  if (parent instanceof Component) {
                    if (obj instanceof Node || obj instanceof Component) {
                      return obj;
                    }
                  } else if (parent instanceof Node) {
                    if (obj instanceof Node) {
                      if (!obj.isChildOf(parent)) {
                        return obj;
                      }
                    } else if (obj instanceof Component) {
                      if (obj.node && !obj.node.isChildOf(parent)) {
                        return obj;
                      }
                    }
                  }
                }
                clone = new ctor();
              } else if (ctor === Object) {
                clone = {};
              } else if (!ctor) {
                clone = Object.create(null);
              } else {
                return obj;
              }
              enumerateObject(obj, clone, parent);
              return clone;
            }
            instantiate._clone = doInstantiate;
            legacyCC.instantiate = instantiate;

        })
    };
}));
