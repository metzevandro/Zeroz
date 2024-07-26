"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Layout.scss");
var _excluded = ["children", "columns"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var Layout = function Layout(_ref) {
  var children = _ref.children,
    columns = _ref.columns,
    rest = _objectWithoutProperties(_ref, _excluded);
  var columnClassNames = {
    "1": "one-column",
    "2 - Symmetric": "two-column-symmetric",
    "2 - Asymmetric": "two-column-asymmetric",
    "3 - Symmetric": "three-column-symmetric"
  };
  var columnClassName = columnClassNames[columns];
  return <div {...rest} className={"layout ".concat(columnClassName)}>
      {children}
    </div>;
};
var _default = exports["default"] = Layout;