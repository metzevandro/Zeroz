import Icon from "../Icon/Icon";
import "./Dropdown.scss";
import React from "react";
var Dropdown = function (_a) {
  var children = _a.children,
    dropdown = _a.dropdown;
  return (
    <>
      {dropdown === true && (
        <div className="dropdown-menu-root">
          <div className="dropdown-menu">{children}</div>
        </div>
      )}
    </>
  );
};
export var DropdownTitle = function (_a) {
  var content = _a.content;
  return (
    <>
      <div className="dropdown-menu-title">{content}</div>
    </>
  );
};
export var DropdownItem = function (_a) {
  var typeIcon = _a.typeIcon,
    content = _a.content,
    onClick = _a.onClick;
  return (
    <>
      <button className="dropdown-menu-item" onClick={onClick}>
        {typeIcon && <Icon size="sm" icon={typeIcon} />}
        {content}
      </button>
    </>
  );
};
export default Dropdown;
