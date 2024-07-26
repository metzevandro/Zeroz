"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
require("./InputNumber.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var InputNumber = function InputNumber(_ref) {
  var max = _ref.max,
    min = _ref.min,
    placeholder = _ref.placeholder,
    disabled = _ref.disabled,
    label = _ref.label,
    onChange = _ref.onChange,
    error = _ref.error,
    textError = _ref.textError,
    propValue = _ref.value;
  var _useState = (0, _react.useState)(function () {
      if (min !== undefined) {
        return min;
      }
      return undefined;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    numero = _useState2[0],
    setNumero = _useState2[1];
  (0, _react.useEffect)(function () {
    if (propValue !== undefined) {
      var parsedValue = parseInt(propValue, 10);
      if (!isNaN(parsedValue)) {
        setNumero(parsedValue);
      }
    }
  }, [propValue]);
  var addNum = function addNum() {
    setNumero(function (prevNumero) {
      if (prevNumero === undefined) return min !== undefined ? min : 1;
      var newNum = prevNumero + 1;
      if (max !== undefined && newNum > max) {
        return prevNumero;
      }
      if (onChange) {
        onChange(newNum.toString());
      }
      return newNum;
    });
  };
  var subtractNum = function subtractNum() {
    setNumero(function (prevNumero) {
      if (prevNumero === undefined) return min !== undefined ? min : -1;
      var newNum = prevNumero - 1;
      if (min !== undefined && newNum < min) {
        return prevNumero;
      }
      if (onChange) {
        onChange(newNum.toString());
      }
      return newNum;
    });
  };
  var handleInputChange = function handleInputChange(event) {
    var inputValue = event.target.value;
    var newNum;
    if (inputValue === "") {
      // Se o input estiver vazio, defina como undefined
      newNum = undefined;
    } else {
      newNum = parseInt(inputValue, 10);
      if (!isNaN(newNum)) {
        if (max !== undefined && newNum > max) {
          newNum = max;
        } else if (min !== undefined && newNum < min) {
          newNum = min;
        }
      } else {
        newNum = min !== undefined ? min : undefined;
      }
    }
    setNumero(newNum);
    if (onChange) {
      onChange(newNum !== undefined ? newNum.toString() : "");
    }
  };
  return <div className="input-number-root">
      {label && <label className="input-number-label">{label}</label>}
      <div className={"input-number ".concat(disabled ? "disabled" : "")}>
        <button disabled={disabled} className="subtract" onClick={subtractNum}>
          <_Icon.default size="md" icon="remove" />
        </button>
        <input className={"input ".concat(error ? "error" : "")} type="number" placeholder={placeholder} onChange={handleInputChange} value={numero !== undefined ? numero : ""} max={max} min={min} disabled={disabled} inputMode="numeric" />
        <button disabled={disabled} className="add" onClick={addNum}>
          <_Icon.default size="md" icon="add" />
        </button>
      </div>
      {error && <div className="textError">{textError}</div>}
    </div>;
};
var _default = exports["default"] = InputNumber;