System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/pose-nodes/ik/menu.js", ["../menu-common.js"], function (_export, _context) {
  "use strict";

  var POSE_GRAPH_NODE_MENU_PREFIX_POSE, POSE_GRAPH_NODE_MENU_PREFIX_IK;
  return {
    setters: [function (_menuCommonJs) {
      POSE_GRAPH_NODE_MENU_PREFIX_POSE = _menuCommonJs.POSE_GRAPH_NODE_MENU_PREFIX_POSE;
    }],
    execute: function () {
      _export("POSE_GRAPH_NODE_MENU_PREFIX_IK", POSE_GRAPH_NODE_MENU_PREFIX_IK = `${POSE_GRAPH_NODE_MENU_PREFIX_POSE}/` + `i18n:ENGINE.animation_graph.pose_graph_node_sub_categories.pose_nodes_ik/`);
    }
  };
});