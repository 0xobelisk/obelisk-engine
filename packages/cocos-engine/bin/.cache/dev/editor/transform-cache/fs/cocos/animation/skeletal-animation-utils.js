System.register("q-bundled:///fs/cocos/animation/skeletal-animation-utils.js", ["../core/index.js"], function (_export, _context) {
  "use strict";

  var Mat4, stack, pool;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  function getWorldMatrix(transform, stamp) {
    let i = 0;
    let res = Mat4.IDENTITY;
    while (transform) {
      if (transform.stamp === stamp || transform.stamp + 1 === stamp && !transform.node.hasChangedFlags) {
        res = transform.world;
        transform.stamp = stamp;
        break;
      }
      transform.stamp = stamp;
      stack[i++] = transform;
      transform = transform.parent;
    }
    while (i > 0) {
      transform = stack[--i];
      stack[i] = null;
      const node = transform.node;
      Mat4.fromRTS(transform.local, node.rotation, node.position, node.scale);
      res = Mat4.multiply(transform.world, res, transform.local);
    }
    return res;
  }
  function getTransform(node, root) {
    let joint = null;
    let i = 0;
    while (node !== root) {
      const id = node.uuid;
      if (pool.has(id)) {
        joint = pool.get(id);
        break;
      } else {
        // TODO: object reuse
        joint = {
          node,
          local: new Mat4(),
          world: new Mat4(),
          stamp: -1,
          parent: null
        };
        pool.set(id, joint);
      }
      stack[i++] = joint;
      node = node.parent;
      joint = null;
    }
    let child;
    while (i > 0) {
      child = stack[--i];
      stack[i] = null;
      child.parent = joint;
      joint = child;
    }
    return joint;
  }
  function deleteTransform(node) {
    let transform = pool.get(node.uuid) || null;
    while (transform) {
      pool.delete(transform.node.uuid);
      transform = transform.parent;
    }
  }
  _export({
    getWorldMatrix: getWorldMatrix,
    getTransform: getTransform,
    deleteTransform: deleteTransform
  });
  return {
    setters: [function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
    }],
    execute: function () {
      stack = [];
      pool = new Map();
    }
  };
});