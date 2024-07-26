"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Badge.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Badge = function Badge(_ref) {
  var label = _ref.label,
    type = _ref.type,
    variant = _ref.variant;
  return <div className={"badge ".concat(type, " ").concat(variant)}>
    <p>{label}</p>
  </div>;
};
var _default = exports["default"] = Badge;