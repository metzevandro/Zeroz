"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
require("./Loading.scss");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Loading = function Loading(_ref) {
  var variant = _ref.variant,
    message = _ref.message;
  return <>
      {variant === "default" && <div className="loading-with-message">
          <span className="loading">
            <_Icon.default size="sm" icon="progress_activity" />
          </span>
          {message && <p className="loading-message">{message}</p>}
        </div>}
      {variant === "large" && <span className="loading">
          <_Icon.default size="lg" icon="progress_activity" />
        </span>}
      {variant === "success" && <div className="loading-with-message">
          <span className="success">
            <_Icon.default size="sm" icon="check_circle" />
          </span>
          {message && <p className="loading-message">{message}</p>}{" "}
        </div>}
      {variant === "warning" && <div className="loading-with-message">
          <span className="warning">
            <_Icon.default size="sm" icon="error_outline" />
          </span>
          {message && <p className="loading-message">{message}</p>}{" "}
        </div>}
    </>;
};
var _default = exports["default"] = Loading;