System.register("q-bundled:///fs/cocos/physics-2d/spec/i-physics-contact.js", [], function (_export, _context) {
  "use strict";

  var Physics2DManifoldType;
  _export("Physics2DManifoldType", void 0);
  return {
    setters: [],
    execute: function () {
      (function (Physics2DManifoldType) {
        Physics2DManifoldType[Physics2DManifoldType["Circles"] = 0] = "Circles";
        Physics2DManifoldType[Physics2DManifoldType["FaceA"] = 1] = "FaceA";
        Physics2DManifoldType[Physics2DManifoldType["FaceB"] = 2] = "FaceB";
      })(Physics2DManifoldType || _export("Physics2DManifoldType", Physics2DManifoldType = {}));
      /**
      * @en
      * A manifold point is a contact point belonging to a contact manifold.
      * It holds details related to the geometry and dynamics of the contact points.
      * Note: the impulses are used for internal caching and may not
      * provide reliable contact forces, especially for high speed collisions.
      * @zh
      * ManifoldPoint 是接触信息中的接触点信息。它拥有关于几何和接触点的详细信息。
      * 注意：信息中的冲量用于系统内部缓存，提供的接触力可能不是很准确，特别是高速移动中的碰撞信息。
      */
      /**
       * @en Manifold.
       * @zh 流形。
       */
      /**
       * @en
       * PhysicsContact will be generated during begin and end collision as a parameter of the collision callback.
       * Note that contacts will be reused for speed up cpu time, so do not cache anything in the contact.
       * @zh
       * 物理接触会在开始和结束碰撞之间生成，并作为参数传入到碰撞回调函数中。
       * 注意：传入的物理接触会被系统进行重用，所以不要在使用中缓存里面的任何信息。
       */
    }
  };
});