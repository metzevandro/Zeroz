"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./CardDropdown.scss");
var react_1 = require("react");
var Icon_1 = __importDefault(require("../Icon/Icon"));
var react_2 = __importDefault(require("react"));
var CardDropdown = function (_a) {
    var title = _a.title, content = _a.content, footer = _a.footer, description = _a.description;
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var toggleDropDown = function () {
        setIsOpen(!isOpen);
    };
    return (react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement("div", { className: "card-dropdown" },
            react_2.default.createElement("div", { className: "card-dropdown-header", onClick: toggleDropDown },
                react_2.default.createElement("div", { className: "card-dropdown-title" },
                    react_2.default.createElement("div", null, title),
                    react_2.default.createElement("div", { className: "card-dropdown-button ".concat(isOpen ? "open" : "close") },
                        react_2.default.createElement(Icon_1.default, { size: "md", icon: "keyboard_arrow_down" }))),
                react_2.default.createElement("div", null, description && react_2.default.createElement("p", null, description))),
            content && (react_2.default.createElement("div", { className: "card-dropdown-content ".concat(isOpen ? "open" : "close") }, content)),
            footer && (react_2.default.createElement("div", { className: "card-dropdown-footer ".concat(isOpen ? "open" : "close") }, footer)))));
};
exports.default = CardDropdown;
