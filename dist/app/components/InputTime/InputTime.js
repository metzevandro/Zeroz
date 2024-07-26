"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./InputTime.scss");
var _Input = _interopRequireDefault(require("../Input/Input"));
var _excluded = ["label", "placeholder", "disabled", "error", "textError", "onChange", "value"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var InputTime = function InputTime(_ref) {
  var label = _ref.label,
    placeholder = _ref.placeholder,
    disabled = _ref.disabled,
    error = _ref.error,
    textError = _ref.textError,
    onChange = _ref.onChange,
    controlledValue = _ref.value,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isModalOpen = _useState2[0],
    setIsModalOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedHour = _useState4[0],
    setSelectedHour = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedMinute = _useState6[0],
    setSelectedMinute = _useState6[1];
  var modalRef = (0, _react.useRef)(null);
  var openModal = function openModal() {
    setIsModalOpen(!isModalOpen);
  };
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (controlledValue !== undefined) {
      var _controlledValue$spli = controlledValue.split(":"),
        _controlledValue$spli2 = _slicedToArray(_controlledValue$spli, 2),
        hour = _controlledValue$spli2[0],
        minute = _controlledValue$spli2[1];
      setSelectedHour(hour || "");
      setSelectedMinute(minute || "");
    } else {
      setSelectedHour("");
      setSelectedMinute("");
    }
  }, [controlledValue]);
  var handleInputChange = function handleInputChange(event) {
    var newValue = event.target.value;
    newValue = newValue.replace(/[^\d:]/g, "");
    if (newValue.length > 5) {
      newValue = newValue.substring(0, 5);
    }
    if (newValue.length === 2 && newValue.charAt(2) !== ":") {
      newValue = newValue.slice(0, 2) + ":" + newValue.slice(2);
    }
    event.target.value = newValue;
    onChange(newValue);
  };
  var renderButtons = (0, _react.useCallback)(function (maxValue, isHour) {
    var buttons = [];
    var _loop = function _loop() {
      var formattedValue = i < 10 ? "0".concat(i) : "".concat(i);
      buttons.push(<button key={formattedValue} className="input-time-buttons" onClick={function () {
        if (isHour) {
          setSelectedHour(formattedValue);
          onChange("".concat(formattedValue, ":").concat(selectedMinute));
        } else {
          setSelectedMinute(formattedValue);
          onChange("".concat(selectedHour, ":").concat(formattedValue));
        }
      }} aria-label={formattedValue}>
            {formattedValue}
          </button>);
    };
    for (var i = 0; i <= maxValue; i++) {
      _loop();
    }
    return buttons;
  }, [onChange, selectedHour, selectedMinute]);
  return <div className="input-time">
      <_Input.default label={label} type="text" value={controlledValue !== undefined && controlledValue !== null ? controlledValue : selectedHour && selectedMinute ? "".concat(selectedHour, ":").concat(selectedMinute) : ""} placeholder={placeholder} typeIcon="schedule" disabled={disabled} onClick={openModal} onChange={handleInputChange} error={error} textError={textError} inputMode="numeric" pattern="[0-9]*" {...rest} />
      {isModalOpen && <div className="input-time-modal" ref={modalRef}>
          <div className="modal-section">{renderButtons(23, true)}</div>
          <div className="modal-section">{renderButtons(59, false)}</div>
        </div>}
    </div>;
};
var _default = exports["default"] = InputTime;