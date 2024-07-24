import "./Header.scss";
import Avatar from "../Avatar/Avatar";
import Icon from "../Icon/Icon";
import { useEffect, useRef, useState } from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import React from "react";
import Skeleton from "../Skeleton/Skeleton";
var Header = function (_a) {
  var children = _a.children,
    onClick = _a.onClick,
    breadcrumb = _a.breadcrumb;
  return (
    <>
      <header className="header-root">
        <div>
          <div className="header-action">
            <ButtonIcon
              variant="primary"
              buttonType="plain"
              size="md"
              typeIcon="menu"
              onClick={onClick}
            />
          </div>
          <div className="header-breadcrumb">{breadcrumb}</div>
        </div>
        {children}
      </header>
    </>
  );
};
export var HeaderProfile = function (_a) {
  var name = _a.name,
    children = _a.children,
    avatar_src = _a.avatar_src,
    skeleton = _a.skeleton,
    letter = _a.letter;
  var _b = useState(false),
    isDropDownOpen = _b[0],
    setIsDropDownOpen = _b[1];
  var dropdownRef = useRef(null);
  var toggleDropDown = function () {
    setIsDropDownOpen(!isDropDownOpen);
  };
  var handleClickOutside = function (event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropDownOpen(false);
    }
  };
  useEffect(function () {
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div ref={dropdownRef} className="profile-root">
        <div className="profile" tabIndex={0} onClick={toggleDropDown}>
          <div className="avatar">
            <Avatar
              skeleton={skeleton}
              size="md"
              src={avatar_src}
              letter={letter}
            />
          </div>
          {skeleton ? (
            <>
              <Skeleton height="24" width="70" />
            </>
          ) : (
            <>
              <h1 className="name">{name}</h1>
            </>
          )}

          <div className={"icon ".concat(isDropDownOpen ? "open" : "close")}>
            <Icon size="sm" icon="keyboard_arrow_down" />
          </div>
        </div>
        <div className={"dropdown ".concat(isDropDownOpen ? "open" : "close")}>
          {children}
        </div>
      </div>
    </>
  );
};
export default Header;
