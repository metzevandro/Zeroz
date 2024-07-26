"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsideFooter = exports.AsideContent = void 0;
var react_1 = __importDefault(require("react"));
var ButtonIcon_1 = __importDefault(require("../ButtonIcon/ButtonIcon"));
require("./Aside.scss");
var Aside = function (_a) {
    var title = _a.title, isOpen = _a.isOpen, description = _a.description, toggleAside = _a.toggleAside, footer = _a.footer, content = _a.content;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "aside-overlay ".concat(isOpen ? "open" : "hidden"), onClick: toggleAside }),
        react_1.default.createElement("div", { className: "aside-root ".concat(isOpen ? "open" : "") },
            react_1.default.createElement("div", { className: "aside" },
                react_1.default.createElement("header", { className: "aside-header" },
                    react_1.default.createElement("div", { className: "aside-title" },
                        react_1.default.createElement("div", null, title),
                        react_1.default.createElement(ButtonIcon_1.default, { buttonType: "plain", variant: "primary", typeIcon: "close", size: "md", onClick: toggleAside })),
                    react_1.default.createElement("div", { className: "aside-description" }, description)),
                react_1.default.createElement("main", { className: "aside-children" }, content),
                react_1.default.createElement("footer", { className: "aside-footer" }, footer)))));
};
exports.default = Aside;
var AsideContent = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: "aside-content" }, children);
};
exports.AsideContent = AsideContent;
var AsideFooter = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("div", null, children);
};
exports.AsideFooter = AsideFooter;
