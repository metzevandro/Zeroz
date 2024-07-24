import "./Sidebar.scss";
import Brand from "../Brand/Brand";
import Icon from "../Icon/Icon";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import React, { useState } from "react";
var Sidebar = function (_a) {
    var brand = _a.brand, brandSize = _a.brandSize, children = _a.children, toggle = _a.toggle, setToggleSidebar = _a.setToggleSidebar;
    var _b = useState(null), activeItem = _b[0], setActiveItem = _b[1];
    var closeSidebar = function () {
        setToggleSidebar(false);
    };
    return (<>
      <div className={"Sidebar ".concat(toggle ? "open" : "close")}>
        <div className="brand">
          <Brand alt="Logo-marca" src={brand} size={brandSize}/>
        </div>
        <div className="Sidebar-list">
          {React.Children.map(children, function (child, index) {
            return React.isValidElement(child) &&
                child.type === SidebarItem &&
                child.props.children
                ? React.cloneElement(child, {
                    isActive: activeItem === String(index),
                    onClick: function () {
                        return setActiveItem(activeItem === String(index) ? null : String(index));
                    },
                })
                : child;
        })}
        </div>
      </div>
      <div onClick={closeSidebar} className={"Sidebar-overlay ".concat(toggle ? "open" : "close")}>
        <ButtonIcon variant="secondary" onClick={closeSidebar} buttonType="default" size="md" typeIcon="close"/>
      </div>
    </>);
};
export var SidebarTitle = function (_a) {
    var title = _a.title;
    return <h1 className="Sidebar-list-title">{title}</h1>;
};
export var SidebarItem = function (_a) {
    var title = _a.title, icon = _a.icon, fillIcon = _a.fillIcon, children = _a.children, onClick = _a.onClick, isActive = _a.isActive;
    var handleKeyPress = function (event) {
        if (event.key === "Enter" && children) {
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }
    };
    return (<>
      <div className={"Sidebar-item ".concat(children ? "with-sub-item" : "", " ").concat(children ? "" : isActive ? "active" : "")} onClick={onClick} tabIndex={0} onKeyDown={handleKeyPress}>
        <div className="Sidebar-item-header">
          <Icon size="sm" icon={icon} fill={fillIcon}/>
          <div>{title}</div>
        </div>
        {children && (<div onKeyDown={handleKeyPress} onClick={onClick} className={"".concat(isActive
                ? "Sidebar-item-with-action-open"
                : "Sidebar-item-with-action-close")}>
            <Icon size="sm" icon="keyboard_arrow_down"/>
          </div>)}
      </div>
      {isActive && <div>{children}</div>}
    </>);
};
export var SidebarSubItem = function (_a) {
    var title = _a.title, onClick = _a.onClick, active = _a.active;
    return (<>
      <div className={"Sidebar-sub-item ".concat(active && "active")} tabIndex={0} onClick={onClick}>
        <div style={active === true ? { opacity: 1 } : undefined}>
          <Icon size="sm" icon="subdirectory_arrow_right" fill={true}/>
        </div>
        <div>{title}</div>
      </div>
    </>);
};
export default Sidebar;
