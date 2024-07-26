"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./EmptyState.scss");
var Button_1 = __importDefault(require("../Button/Button"));
var Icon_1 = __importDefault(require("../Icon/Icon"));
// Declaração
var EmptyState = function (_a) {
    var title = _a.title, description = _a.description, icon = _a.icon, buttonContentPrimary = _a.buttonContentPrimary, buttonContentSecondary = _a.buttonContentSecondary, onClickActionPrimary = _a.onClickActionPrimary, onClickActionSecondary = _a.onClickActionSecondary;
    return (react_1.default.createElement("div", { className: "empty-state-root" },
        react_1.default.createElement(Icon_1.default, { icon: icon, size: "lg" }),
        react_1.default.createElement("div", { className: "empty-state-content" },
            react_1.default.createElement("h3", null, title),
            react_1.default.createElement("p", null, description)),
        react_1.default.createElement("div", { className: "empty-state-footer" },
            buttonContentPrimary && (react_1.default.createElement(Button_1.default, { size: "md", variant: "primary", label: buttonContentPrimary, onClick: onClickActionPrimary })),
            buttonContentSecondary && (react_1.default.createElement(Button_1.default, { size: "md", variant: "secondary", label: buttonContentSecondary, onClick: onClickActionSecondary })))));
};
// Exportação
exports.default = EmptyState;
