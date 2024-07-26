"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./Pagination.scss");
var Icon_1 = __importDefault(require("../Icon/Icon"));
var react_1 = __importDefault(require("react"));
var PaginationItem = function (_a) {
    var arrow = _a.arrow, disabled = _a.disabled, click = _a.click;
    return (react_1.default.createElement(react_1.default.Fragment, null, arrow === "left" ? (react_1.default.createElement("button", { className: "arrow_back", disabled: disabled, onClick: click },
        react_1.default.createElement(Icon_1.default, { icon: "arrow_back", size: "sm" }))) : arrow === "right" ? (react_1.default.createElement("button", { className: "arrow_forward", disabled: disabled, onClick: click },
        react_1.default.createElement(Icon_1.default, { icon: "arrow_forward", size: "sm" }))) : ("error")));
};
var Pagination = function (_a) {
    var disabledRight = _a.disabledRight, disabledLeft = _a.disabledLeft, variant = _a.variant, onClickRight = _a.onClickRight, onClickLeft = _a.onClickLeft, label = _a.label;
    return (react_1.default.createElement("div", { className: "Pagination" }, variant === "noLabel" ? (react_1.default.createElement("div", { className: "noLabel" },
        react_1.default.createElement(PaginationItem, { arrow: "left", disabled: disabledLeft, click: onClickLeft }),
        react_1.default.createElement(PaginationItem, { arrow: "right", disabled: disabledRight, click: onClickRight }))) : variant === "leftLabel" ? (react_1.default.createElement("div", { className: "leftLabel" },
        react_1.default.createElement("p", null, label),
        react_1.default.createElement("div", { style: { display: "flex" } },
            react_1.default.createElement(PaginationItem, { arrow: "left", disabled: disabledLeft, click: onClickLeft }),
            react_1.default.createElement(PaginationItem, { arrow: "right", disabled: disabledRight, click: onClickRight })))) : variant === "centerLabel" ? (react_1.default.createElement("div", { className: "centerLabel" },
        react_1.default.createElement(PaginationItem, { arrow: "left", disabled: disabledLeft, click: onClickLeft }),
        react_1.default.createElement("p", null, label),
        react_1.default.createElement(PaginationItem, { arrow: "right", disabled: disabledRight, click: onClickRight }))) : ("error")));
};
exports.default = Pagination;
