"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Slider.scss");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Slider = function Slider(_ref) {
  var step = _ref.step,
    min = _ref.min,
    max = _ref.max,
    value = _ref.value,
    label = _ref.label,
    onChange = _ref.onChange;
  var _useState = (0, _react.useState)((parseInt(value) - min) / (max - min) * 100),
    _useState2 = _slicedToArray(_useState, 2),
    progress = _useState2[0],
    setProgress = _useState2[1];
  var _useState3 = (0, _react.useState)(value),
    _useState4 = _slicedToArray(_useState3, 2),
    currentValue = _useState4[0],
    setCurrentValue = _useState4[1];
  var isDragging = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    var newValue = parseInt(value);
    setCurrentValue(value);
    setProgress((newValue - min) / (max - min) * 100);
  }, [value, min, max]);
  var handleArrowKeyPress = function handleArrowKeyPress(e) {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      var change = e.key === "ArrowLeft" ? -step : step;
      var newValue = parseInt(currentValue) + change;
      var alignedValue = Math.round(newValue / step) * step;
      newValue = Math.min(Math.max(alignedValue, min), max);
      updateProgress(newValue);
    }
  };
  var updateProgress = function updateProgress(newValue) {
    var clampedValue = Math.min(Math.max(newValue, min), max);
    setProgress((clampedValue - min) / (max - min) * 100);
    setCurrentValue(String(clampedValue));
    if (onChange) {
      onChange(String(clampedValue));
    }
  };
  var handleDragStart = function handleDragStart(e) {
    isDragging.current = true;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseup", _handleDragEnd);
    window.addEventListener("touchend", _handleDragEnd);
    if (e instanceof MouseEvent) {
      handleMouseMove(e);
    } else if (e instanceof TouchEvent) {
      handleTouchMove(e);
    }
  };
  var handleSliderClick = function handleSliderClick(e) {
    handleDragStart(e);
  };
  var handleMouseMove = function handleMouseMove(e) {
    if (e.clientX !== undefined) {
      handleDragMove(e.clientX);
    }
  };
  var handleTouchMove = function handleTouchMove(e) {
    if (e.touches.length > 0) {
      var _e$touches$0$clientX, _e$touches$;
      handleDragMove((_e$touches$0$clientX = (_e$touches$ = e.touches[0]) === null || _e$touches$ === void 0 ? void 0 : _e$touches$.clientX) !== null && _e$touches$0$clientX !== void 0 ? _e$touches$0$clientX : 0);
    }
  };
  var handleDragMove = function handleDragMove(clientX) {
    if (isDragging.current) {
      var slider = document.getElementById("slider-background");
      if (slider) {
        var rect = slider.getBoundingClientRect();
        var mouseX = clientX - rect.left;
        var rawPercentage = mouseX / rect.width * 100;
        if (rawPercentage > 100) {
          rawPercentage = 100;
        } else if (rawPercentage < 0) {
          rawPercentage = 0;
        }
        var calculatedValue = rawPercentage / 100 * (max - min) + min;
        var alignedValue = Math.round(calculatedValue / step) * step;
        updateProgress(alignedValue);
      }
    }
  };
  var _handleDragEnd = function handleDragEnd() {
    isDragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("mouseup", _handleDragEnd);
    window.removeEventListener("touchend", _handleDragEnd);
  };
  var handleInputChange = function handleInputChange(e) {
    var newValue = parseInt(e.target.value);
    updateProgress(newValue);
  };
  return <div className="slider">
      <label className="slider-label" htmlFor="sliderInput">
        {label}
      </label>
      <div className="slider-container">
        <div className="slider-max-min">{min}</div>
        <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        cursor: "grabbing"
      }}>
          <div id="slider-background" className="slider-background" onMouseDown={function (e) {
          return handleSliderClick(e);
        }}>
            <div className="slider-progress-bar" style={{
            width: "".concat(progress, "%")
          }}></div>
            <div className="slider-button" tabIndex={0} style={{
            left: "calc(".concat(progress, "% - 10px)")
          }} onKeyDown={handleArrowKeyPress}></div>
          </div>
        </div>

        <div className="slider-max-min">{max}</div>
        <input inputMode="numeric" className="slider-input" type="number" min={min} max={max} step={step} value={currentValue} onChange={handleInputChange} id="sliderInput" />
      </div>
    </div>;
};
var _default = exports["default"] = Slider;