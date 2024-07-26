"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
require("./ProgressIndicator.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var stateNames = {
  "default": "circle",
  current: "trip_origin",
  error: "error",
  completed: "check_circle",
  disable: "circle"
};
var ProgressIndicator = function ProgressIndicator(_ref) {
  var step = _ref.step,
    description = _ref.description,
    state = _ref.state,
    direction = _ref.direction,
    onClick = _ref.onClick,
    widthFull = _ref.widthFull;
  var displayName = stateNames[state] || state;
  var customizeWidthFull = function customizeWidthFull() {
    var widthFull = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (widthFull) {
      return {
        width: "100%"
      };
    }
  };
  return <>
      <div className={"progress-indicator  ".concat(direction, " ").concat(state)} onClick={onClick} style={customizeWidthFull(widthFull)}>
        <div className="header">
          <div className={state}>
            <_Icon.default icon={displayName} size="sm" fill={displayName === "check_circle" || displayName === "error" ? true : false} />
          </div>
          <h1>{step}</h1>
        </div>
        <p>{description}</p>
      </div>
    </>;
};
var _default = exports["default"] = ProgressIndicator;