"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./DescriptionList.scss");
var react_1 = __importDefault(require("react"));
var DescriptionList = function (_a) {
    var items = _a.items, direction = _a.direction;
    return (react_1.default.createElement(react_1.default.Fragment, null, items.map(function (item, index) { return (react_1.default.createElement(react_1.default.Fragment, { key: index },
        react_1.default.createElement("div", { className: "description-list-root ".concat(direction), style: index < items.length - 1
                ? {
                    borderBottom: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
                }
                : undefined },
            react_1.default.createElement("div", { className: "title" }, item.title),
            react_1.default.createElement("div", { className: "description" }, item.description)))); })));
};
exports.default = DescriptionList;
