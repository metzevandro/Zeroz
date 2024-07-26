"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./Link.scss");
var _react = _interopRequireDefault(require("react"));
var _excluded = ["content", "disabled"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var Link = function Link(_ref) {
  var content = _ref.content,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);
  return <>
      <a className={"link ".concat(disabled ? "disabled" : "")} {...rest}>
        {content}
      </a>
    </>;
};
var _default = exports["default"] = Link;