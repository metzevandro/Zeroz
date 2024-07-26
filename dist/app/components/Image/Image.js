"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Skeleton = _interopRequireDefault(require("../Skeleton/Skeleton"));
require("./Image.scss");
var _react = _interopRequireDefault(require("react"));
var _excluded = ["src", "alt", "width", "height", "skeleton"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var Image = function Image(_ref) {
  var src = _ref.src,
    alt = _ref.alt,
    width = _ref.width,
    height = _ref.height,
    skeleton = _ref.skeleton,
    props = _objectWithoutProperties(_ref, _excluded);
  return <>
      {skeleton ? <_Skeleton.default width={"".concat(width)} height={"".concat(height)} /> : <img className="image-root" width={width} height={height} src={src} alt={alt} {...props} />}
    </>;
};
var _default = exports["default"] = Image;