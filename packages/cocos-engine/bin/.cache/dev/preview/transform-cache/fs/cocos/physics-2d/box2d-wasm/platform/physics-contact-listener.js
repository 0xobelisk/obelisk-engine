System.register("q-bundled:///fs/cocos/physics-2d/box2d-wasm/platform/physics-contact-listener.js", [], function (_export, _context) {
  "use strict";

  var _class, PhysicsContactListener;
  return {
    setters: [],
    execute: function () {
      /*
       Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
      
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
      _export("PhysicsContactListener", PhysicsContactListener = /*#__PURE__*/function () {
        function PhysicsContactListener() {}
        PhysicsContactListener.BeginContact = function BeginContact(contact) {
          if (this._BeginContact) {
            this._BeginContact(contact);
          }
        };
        PhysicsContactListener.EndContact = function EndContact(contact) {
          if (this._EndContact) {
            this._EndContact(contact);
          }
        };
        PhysicsContactListener.PreSolve = function PreSolve(contact, oldManifold) {
          if (this._PreSolve) {
            this._PreSolve(contact, oldManifold);
          }
        };
        PhysicsContactListener.PostSolve = function PostSolve(contact, impulse) {
          if (this._PostSolve) {
            this._PostSolve(contact, impulse);
          }
        };
        return PhysicsContactListener;
      }());
      _class = PhysicsContactListener;
      PhysicsContactListener._BeginContact = null;
      PhysicsContactListener._EndContact = null;
      PhysicsContactListener._PreSolve = null;
      PhysicsContactListener._PostSolve = null;
      PhysicsContactListener.callback = {
        BeginContact: function BeginContact(contact) {
          _class.BeginContact(contact);
        },
        EndContact: function EndContact(contact) {
          _class.EndContact(contact);
        },
        PreSolve: function PreSolve(contact, oldManifold) {
          _class.PreSolve(contact, oldManifold);
        },
        PostSolve: function PostSolve(contact, impulse) {
          _class.PostSolve(contact, impulse);
        }
      };
    }
  };
});