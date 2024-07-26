"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DropdownTitle = exports.DropdownItem = void 0;
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
require("./Dropdown.scss");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
    dropdown = _ref.dropdown;
  return <>
      {dropdown === true && <div className="dropdown-menu-root">
          <div className="dropdown-menu">{children}</div>
        </div>}
    </>;
};
var DropdownTitle = exports.DropdownTitle = function DropdownTitle(_ref2) {
  var content = _ref2.content;
  return <>
      <div className="dropdown-menu-title">{content}</div>
    </>;
};
var DropdownItem = exports.DropdownItem = function DropdownItem(_ref3) {
  var typeIcon = _ref3.typeIcon,
    content = _ref3.content,
    onClick = _ref3.onClick;
  return <>
      <button className="dropdown-menu-item" onClick={onClick}>
        {typeIcon && <_Icon.default size="sm" icon={typeIcon} />}
        {content}
      </button>
    </>;
};
var _default = exports["default"] = Dropdown;