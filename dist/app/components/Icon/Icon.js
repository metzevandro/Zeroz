"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./Icon.scss");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Icon = function Icon(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    icon = _ref.icon;
  var sizeClass = size;
  var fillStyle = "'FILL' ".concat(fill ? 1 : 0, ",\n    'GRAD' 0,\n    'opsz' 24");
  return <>
      <span style={{
      fontVariationSettings: fillStyle
    }} className={"material-symbols-outlined ".concat(sizeClass)}>
        {icon}
      </span>
    </>;
};
var _default = exports["default"] = Icon;