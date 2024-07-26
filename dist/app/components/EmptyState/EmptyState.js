"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./EmptyState.scss");
var _Button = _interopRequireDefault(require("../Button/Button"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Props

// Declaração
var EmptyState = function EmptyState(_ref) {
  var title = _ref.title,
    description = _ref.description,
    icon = _ref.icon,
    buttonContentPrimary = _ref.buttonContentPrimary,
    buttonContentSecondary = _ref.buttonContentSecondary,
    onClickActionPrimary = _ref.onClickActionPrimary,
    onClickActionSecondary = _ref.onClickActionSecondary;
  return <div className="empty-state-root">
      <_Icon.default icon={icon} size="lg" />
      <div className="empty-state-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="empty-state-footer">
        {buttonContentPrimary && <_Button.default size="md" variant="primary" label={buttonContentPrimary} onClick={onClickActionPrimary} />}
        {buttonContentSecondary && <_Button.default size="md" variant="secondary" label={buttonContentSecondary} onClick={onClickActionSecondary} />}
      </div>
    </div>;
};

// Exportação
var _default = exports["default"] = EmptyState;