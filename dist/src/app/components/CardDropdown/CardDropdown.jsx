import "./CardDropdown.scss";
import { useState } from "react";
import Icon from "../Icon/Icon";
import React from "react";
var CardDropdown = function (_a) {
  var title = _a.title,
    content = _a.content,
    footer = _a.footer,
    description = _a.description;
  var _b = useState(false),
    isOpen = _b[0],
    setIsOpen = _b[1];
  var toggleDropDown = function () {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="card-dropdown">
        <div className="card-dropdown-header" onClick={toggleDropDown}>
          <div className="card-dropdown-title">
            <div>{title}</div>
            <div
              className={"card-dropdown-button ".concat(
                isOpen ? "open" : "close",
              )}
            >
              <Icon size="md" icon="keyboard_arrow_down" />
            </div>
          </div>
          <div>{description && <p>{description}</p>}</div>
        </div>
        {content && (
          <div
            className={"card-dropdown-content ".concat(
              isOpen ? "open" : "close",
            )}
          >
            {content}
          </div>
        )}
        {footer && (
          <div
            className={"card-dropdown-footer ".concat(
              isOpen ? "open" : "close",
            )}
          >
            {footer}
          </div>
        )}
      </div>
    </>
  );
};
export default CardDropdown;
