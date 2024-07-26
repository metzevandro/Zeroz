"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderProfile = void 0;
require("./Header.scss");
var Avatar_1 = __importDefault(require("../Avatar/Avatar"));
var Icon_1 = __importDefault(require("../Icon/Icon"));
var react_1 = require("react");
var ButtonIcon_1 = __importDefault(require("../ButtonIcon/ButtonIcon"));
var react_2 = __importDefault(require("react"));
var Skeleton_1 = __importDefault(require("../Skeleton/Skeleton"));
var Header = function (_a) {
    var children = _a.children, onClick = _a.onClick, breadcrumb = _a.breadcrumb;
    return (react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement("header", { className: "header-root" },
            react_2.default.createElement("div", null,
                react_2.default.createElement("div", { className: "header-action" },
                    react_2.default.createElement(ButtonIcon_1.default, { variant: "primary", buttonType: "plain", size: "md", typeIcon: "menu", onClick: onClick })),
                react_2.default.createElement("div", { className: "header-breadcrumb" }, breadcrumb)),
            children)));
};
var HeaderProfile = function (_a) {
    var name = _a.name, children = _a.children, avatar_src = _a.avatar_src, skeleton = _a.skeleton, letter = _a.letter;
    var _b = (0, react_1.useState)(false), isDropDownOpen = _b[0], setIsDropDownOpen = _b[1];
    var dropdownRef = (0, react_1.useRef)(null);
    var toggleDropDown = function () {
        setIsDropDownOpen(!isDropDownOpen);
    };
    var handleClickOutside = function (event) {
        if (dropdownRef.current &&
            !dropdownRef.current.contains(event.target)) {
            setIsDropDownOpen(false);
        }
    };
    (0, react_1.useEffect)(function () {
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement("div", { ref: dropdownRef, className: "profile-root" },
            react_2.default.createElement("div", { className: "profile", tabIndex: 0, onClick: toggleDropDown },
                react_2.default.createElement("div", { className: "avatar" },
                    react_2.default.createElement(Avatar_1.default, { skeleton: skeleton, size: "md", src: avatar_src, letter: letter })),
                skeleton ? (react_2.default.createElement(react_2.default.Fragment, null,
                    react_2.default.createElement(Skeleton_1.default, { height: "24", width: "70" }))) : (react_2.default.createElement(react_2.default.Fragment, null,
                    react_2.default.createElement("h1", { className: "name" }, name))),
                react_2.default.createElement("div", { className: "icon ".concat(isDropDownOpen ? "open" : "close") },
                    react_2.default.createElement(Icon_1.default, { size: "sm", icon: "keyboard_arrow_down" }))),
            react_2.default.createElement("div", { className: "dropdown ".concat(isDropDownOpen ? "open" : "close") }, children))));
};
exports.HeaderProfile = HeaderProfile;
exports.default = Header;
