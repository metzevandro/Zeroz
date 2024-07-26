"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Button = _interopRequireDefault(require("../Button/Button"));
require("./ButtonGroup.scss");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ButtonGroup = function ButtonGroup(_ref) {
  var direction = _ref.direction,
    onClickSecondButton = _ref.onClickSecondButton,
    typeIconSecondButton = _ref.typeIconSecondButton,
    contentSecondButton = _ref.contentSecondButton,
    variantSecondButton = _ref.variantSecondButton,
    disableSecondButton = _ref.disableSecondButton,
    disableFirstButton = _ref.disableFirstButton,
    onClickFirstButton = _ref.onClickFirstButton,
    contentFirstButton = _ref.contentFirstButton,
    typeIconFirstButton = _ref.typeIconFirstButton,
    variantFirstButton = _ref.variantFirstButton,
    skeletonFirstButton = _ref.skeletonFirstButton,
    skeletonSecondButton = _ref.skeletonSecondButton;
  return <>
      <div className={"button-group ".concat(direction)}>
        <_Button.default size="md" disabled={disableFirstButton} onClick={onClickFirstButton} label={contentFirstButton} typeIcon={typeIconFirstButton} variant={variantFirstButton} skeleton={skeletonFirstButton} />
        <_Button.default size="md" disabled={disableSecondButton} onClick={onClickSecondButton} label={contentSecondButton} typeIcon={typeIconSecondButton} variant={variantSecondButton} skeleton={skeletonSecondButton} />
      </div>
    </>;
};
var _default = exports["default"] = ButtonGroup;