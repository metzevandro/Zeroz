"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AppShell = void 0;
var _react = _interopRequireDefault(require("react"));
require("./AppShell.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var AppShellContainer = function AppShellContainer(_ref) {
  var children = _ref.children;
  return <div className="app-shell">{children}</div>;
};
var AppShell = exports.AppShell = _react["default"].memo(AppShellContainer);
var _default = exports["default"] = AppShell;