"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup/ButtonGroup"));
require("./SaveBar.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SaveBar = function SaveBar(_ref) {
  var onClickSave = _ref.onClickSave,
    onClickCancel = _ref.onClickCancel,
    label = _ref.label,
    labelSave = _ref.labelSave,
    labelCancel = _ref.labelCancel;
  var handleSaveClick = function handleSaveClick(e) {
    e.stopPropagation();
    onClickSave(e);
  };
  return <div className="save-bar">
      <div className="save-bar-content">
        <p className="save-bar-label">{label}</p>
        <div className="save-bar-buttons">
          <_ButtonGroup.default variantFirstButton="secondary" variantSecondButton="success" direction="row" contentFirstButton={labelCancel} contentSecondButton={labelSave} onClickFirstButton={onClickCancel} onClickSecondButton={handleSaveClick} />
        </div>
      </div>
    </div>;
};
var _default = exports["default"] = SaveBar;