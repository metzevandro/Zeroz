"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Input.scss");
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
var _excluded = ["typeIcon", "fillIcon", "label", "error", "disabled", "textError", "value"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var Input = function Input(_ref) {
  var typeIcon = _ref.typeIcon,
    fillIcon = _ref.fillIcon,
    label = _ref.label,
    error = _ref.error,
    disabled = _ref.disabled,
    textError = _ref.textError,
    value = _ref.value,
    rest = _objectWithoutProperties(_ref, _excluded);
  var inputRef = (0, _react.useRef)(null);
  var handleDivClick = function handleDivClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return <div className="input-root">
      {label && <div className="input-header">
          <label>{label}</label>
        </div>}
      <div>
        <div className={"input-content ".concat(disabled ? "disabled" : "", " ").concat(error ? "error" : "")} onClick={handleDivClick}>
          <input size={0} {...rest} value={value} disabled={disabled} ref={inputRef} />
          <_Icon.default icon={typeIcon} size="md" fill={fillIcon} />
        </div>
        {error && <div className="input-error">{textError}</div>}
      </div>
    </div>;
};
var _default = exports["default"] = Input;