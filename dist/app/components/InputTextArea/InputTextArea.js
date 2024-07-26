"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./InputTextArea.scss");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var TextArea = function TextArea(_ref) {
  var placeholder = _ref.placeholder,
    label = _ref.label,
    disabled = _ref.disabled,
    error = _ref.error,
    errorText = _ref.errorText,
    onChange = _ref.onChange,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? "" : _ref$value;
  var _useState = (0, _react.useState)(value),
    _useState2 = _slicedToArray(_useState, 2),
    internalValue = _useState2[0],
    setInternalValue = _useState2[1];
  var textareaRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    setInternalValue(value);
  }, [value]);
  var handleButtonClick = function handleButtonClick() {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };
  var handleInputChange = function handleInputChange(event) {
    var newValue = event.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  return <div className="text-area-root">
      <label className="text-area-label">{label}</label>
      <div tabIndex={0} className={"text-area ".concat(disabled && "disabled", " ").concat(error && !disabled ? "error" : "")} onClick={handleButtonClick}>
        <textarea ref={textareaRef} placeholder={placeholder} disabled={disabled} onChange={handleInputChange} value={internalValue} />
      </div>
      {error && <p className="description">{errorText}</p>}
    </div>;
};
var _default = exports["default"] = TextArea;