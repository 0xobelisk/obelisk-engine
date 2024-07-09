System.register("q-bundled:///fs/cocos/tween/index.js", ["./tween-system.js", "./tween.js", "./export-api.js", "./tween-action.js"], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_tweenSystemJs) {
      _export("TweenSystem", _tweenSystemJs.TweenSystem);
    }, function (_tweenJs) {
      _export({
        tween: _tweenJs.tween,
        tweenUtil: _tweenJs.tweenUtil,
        Tween: _tweenJs.Tween
      });
    }, function (_exportApiJs) {
      var _exportObj = {};
      for (var _key in _exportApiJs) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _exportApiJs[_key];
      }
      _export(_exportObj);
    }, function (_tweenActionJs) {
      _export("TweenAction", _tweenActionJs.TweenAction);
    }],
    execute: function () {}
  };
});