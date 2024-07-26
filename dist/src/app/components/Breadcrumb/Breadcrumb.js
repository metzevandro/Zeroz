"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumb = void 0;
require("./Breadcrumb.scss");
var Link_1 = __importDefault(require("../Link/Link"));
var Icon_1 = __importDefault(require("../Icon/Icon"));
var react_1 = __importDefault(require("react"));
var Breadcrumb = function (_a) {
    var items = _a.items;
    return (react_1.default.createElement("div", { className: "breadcrumb" }, items.map(function (item, index) { return (react_1.default.createElement(react_1.default.Fragment, { key: index },
        react_1.default.createElement(Link_1.default, { content: item.pageName, href: item.href }),
        index < items.length - 1 && (react_1.default.createElement(Icon_1.default, { icon: "keyboard_arrow_right", size: "sm" })))); })));
};
exports.Breadcrumb = Breadcrumb;
exports.default = exports.Breadcrumb;
