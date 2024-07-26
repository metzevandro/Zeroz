"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarSubItem = exports.SidebarItem = exports.SidebarTitle = void 0;
require("./Sidebar.scss");
var Brand_1 = __importDefault(require("../Brand/Brand"));
var Icon_1 = __importDefault(require("../Icon/Icon"));
var ButtonIcon_1 = __importDefault(require("../ButtonIcon/ButtonIcon"));
var react_1 = __importStar(require("react"));
var Sidebar = function (_a) {
    var brand = _a.brand, brandSize = _a.brandSize, children = _a.children, toggle = _a.toggle, setToggleSidebar = _a.setToggleSidebar;
    var _b = (0, react_1.useState)(null), activeItem = _b[0], setActiveItem = _b[1];
    var closeSidebar = function () {
        setToggleSidebar(false);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "Sidebar ".concat(toggle ? "open" : "close") },
            react_1.default.createElement("div", { className: "brand" },
                react_1.default.createElement(Brand_1.default, { alt: "Logo-marca", src: brand, size: brandSize })),
            react_1.default.createElement("div", { className: "Sidebar-list" }, react_1.default.Children.map(children, function (child, index) {
                return react_1.default.isValidElement(child) &&
                    child.type === exports.SidebarItem &&
                    child.props.children
                    ? react_1.default.cloneElement(child, {
                        isActive: activeItem === String(index),
                        onClick: function () {
                            return setActiveItem(activeItem === String(index) ? null : String(index));
                        },
                    })
                    : child;
            }))),
        react_1.default.createElement("div", { onClick: closeSidebar, className: "Sidebar-overlay ".concat(toggle ? "open" : "close") },
            react_1.default.createElement(ButtonIcon_1.default, { variant: "secondary", onClick: closeSidebar, buttonType: "default", size: "md", typeIcon: "close" }))));
};
var SidebarTitle = function (_a) {
    var title = _a.title;
    return react_1.default.createElement("h1", { className: "Sidebar-list-title" }, title);
};
exports.SidebarTitle = SidebarTitle;
var SidebarItem = function (_a) {
    var title = _a.title, icon = _a.icon, fillIcon = _a.fillIcon, children = _a.children, onClick = _a.onClick, isActive = _a.isActive;
    var handleKeyPress = function (event) {
        if (event.key === "Enter" && children) {
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "Sidebar-item ".concat(children ? "with-sub-item" : "", " ").concat(children ? "" : isActive ? "active" : ""), onClick: onClick, tabIndex: 0, onKeyDown: handleKeyPress },
            react_1.default.createElement("div", { className: "Sidebar-item-header" },
                react_1.default.createElement(Icon_1.default, { size: "sm", icon: icon, fill: fillIcon }),
                react_1.default.createElement("div", null, title)),
            children && (react_1.default.createElement("div", { onKeyDown: handleKeyPress, onClick: onClick, className: "".concat(isActive
                    ? "Sidebar-item-with-action-open"
                    : "Sidebar-item-with-action-close") },
                react_1.default.createElement(Icon_1.default, { size: "sm", icon: "keyboard_arrow_down" })))),
        isActive && react_1.default.createElement("div", null, children)));
};
exports.SidebarItem = SidebarItem;
var SidebarSubItem = function (_a) {
    var title = _a.title, onClick = _a.onClick, active = _a.active;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "Sidebar-sub-item ".concat(active && "active"), tabIndex: 0, onClick: onClick },
            react_1.default.createElement("div", { style: active === true ? { opacity: 1 } : undefined },
                react_1.default.createElement(Icon_1.default, { size: "sm", icon: "subdirectory_arrow_right", fill: true })),
            react_1.default.createElement("div", null, title))));
};
exports.SidebarSubItem = SidebarSubItem;
exports.default = Sidebar;
