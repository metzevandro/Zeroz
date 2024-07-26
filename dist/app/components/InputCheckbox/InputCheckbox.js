"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./InputCheckbox.scss");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var InputCheckbox = function InputCheckbox(_ref) {
  var modelValue = _ref.modelValue,
    value = _ref.value,
    label = _ref.label,
    id = _ref.id,
    name = _ref.name,
    required = _ref.required,
    indeterminate = _ref.indeterminate,
    noEvents = _ref.noEvents,
    disabled = _ref.disabled,
    onUpdate = _ref.onUpdate;
  var _useState = (0, _react.useState)(modelValue !== null && modelValue !== void 0 ? modelValue : false),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];
  var uid = (0, _react.useMemo)(function () {
    return id !== null && id !== void 0 ? id : "ui-form-checkbox-".concat(Math.random().toString(36).substr(2, 9));
  }, [id]);
  (0, _react.useEffect)(function () {
    if (modelValue !== checked) {
      setChecked(modelValue);
    }
  }, [modelValue]);
  var classList = (0, _react.useMemo)(function () {
    return [disabled ? "-disabled" : "", noEvents ? "-no-events" : ""].join(" ");
  }, [disabled, noEvents]);
  var handleChange = function handleChange() {
    var newValue = !checked;
    setChecked(newValue);
    onUpdate === null || onUpdate === void 0 || onUpdate(newValue);
  };
  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === "Enter") {
      if (disabled === false) {
        handleChange();
      }
    }
  };
  return <label tabIndex={0} className={"ui-form-checkbox ".concat(classList)} htmlFor={uid} onKeyDown={handleKeyDown}>
      <input type="checkbox" id={uid} value={value} required={required} ref={function (el) {
      if (el) el.indeterminate = indeterminate !== null && indeterminate !== void 0 ? indeterminate : false;
    }} name={name} disabled={disabled} checked={checked} onChange={handleChange} tabIndex={-1} />
      <span className="ui-form-checkbox-checkmark"></span>
      {label && <div className="ui-form-checkbox-text">{label}</div>}
    </label>;
};
var _default = exports["default"] = InputCheckbox;