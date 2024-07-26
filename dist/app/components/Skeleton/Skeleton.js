"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Skeleton;
var _react = _interopRequireDefault(require("react"));
require("./Skeleton.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Skeleton(props) {
  return <div className={"skeleton ".concat(props.circle === true ? "circle" : "no-circle")} style={{
    width: "".concat(props.width, "px"),
    height: "".concat(props.height, "px"),
    borderRadius: props.circle ? "var(--s-border-radius-pill)" : "",
    backgroundSize: "".concat(props.width, "px")
  }}></div>;
}