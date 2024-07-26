"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./Pagination.scss");
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PaginationItem = function PaginationItem(_ref) {
  var arrow = _ref.arrow,
    disabled = _ref.disabled,
    click = _ref.click;
  return <>
      {arrow === "left" ? <button className="arrow_back" disabled={disabled} onClick={click}>
          <_Icon.default icon="arrow_back" size="sm" />
        </button> : arrow === "right" ? <button className="arrow_forward" disabled={disabled} onClick={click}>
          <_Icon.default icon="arrow_forward" size="sm" />
        </button> : "error"}
    </>;
};
var Pagination = function Pagination(_ref2) {
  var disabledRight = _ref2.disabledRight,
    disabledLeft = _ref2.disabledLeft,
    variant = _ref2.variant,
    onClickRight = _ref2.onClickRight,
    onClickLeft = _ref2.onClickLeft,
    label = _ref2.label;
  return <div className="Pagination">
      {variant === "noLabel" ? <div className="noLabel">
          <PaginationItem arrow="left" disabled={disabledLeft} click={onClickLeft} />
          <PaginationItem arrow="right" disabled={disabledRight} click={onClickRight} />
        </div> : variant === "leftLabel" ? <div className="leftLabel">
          <p>{label}</p>
          <div style={{
        display: "flex"
      }}>
            <PaginationItem arrow="left" disabled={disabledLeft} click={onClickLeft} />
            <PaginationItem arrow="right" disabled={disabledRight} click={onClickRight} />
          </div>
        </div> : variant === "centerLabel" ? <div className="centerLabel">
          <PaginationItem arrow="left" disabled={disabledLeft} click={onClickLeft} />
          <p>{label}</p>
          <PaginationItem arrow="right" disabled={disabledRight} click={onClickRight} />
        </div> : "error"}
    </div>;
};
var _default = exports["default"] = Pagination;