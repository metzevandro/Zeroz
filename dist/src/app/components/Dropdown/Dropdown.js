"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownItem = exports.DropdownTitle = void 0;
var Icon_1 = __importDefault(require("../Icon/Icon"));
require("./Dropdown.scss");
var react_1 = __importDefault(require("react"));
var Dropdown = function (_a) {
    var children = _a.children, dropdown = _a.dropdown;
    return (react_1.default.createElement(react_1.default.Fragment, null, dropdown === true && (react_1.default.createElement("div", { className: "dropdown-menu-root" },
        react_1.default.createElement("div", { className: "dropdown-menu" }, children)))));
};
var DropdownTitle = function (_a) {
    var content = _a.content;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "dropdown-menu-title" }, content)));
};
exports.DropdownTitle = DropdownTitle;
var DropdownItem = function (_a) {
    var typeIcon = _a.typeIcon, content = _a.content, onClick = _a.onClick;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { className: "dropdown-menu-item", onClick: onClick },
            typeIcon && react_1.default.createElement(Icon_1.default, { size: "sm", icon: typeIcon }),
            content)));
};
exports.DropdownItem = DropdownItem;
exports.default = Dropdown;
