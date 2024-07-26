"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Page.scss");
var ButtonIcon_1 = __importDefault(require("../ButtonIcon/ButtonIcon"));
var Button_1 = __importDefault(require("../Button/Button"));
// Declaração
var Page = function (_a) {
    var children = _a.children, namePage = _a.namePage, withBackButton = _a.withBackButton, withActionPrimary = _a.withActionPrimary, withActionSecondary = _a.withActionSecondary, buttonContentPrimary = _a.buttonContentPrimary, buttonContentSecondary = _a.buttonContentSecondary, onClickActionPrimary = _a.onClickActionPrimary, onClickActionSecondary = _a.onClickActionSecondary, onClickBackButton = _a.onClickBackButton, iconButtonPrimary = _a.iconButtonPrimary, iconButtonSecondary = _a.iconButtonSecondary, skeletonButtonPrimary = _a.skeletonButtonPrimary, skeletonButtonSecondary = _a.skeletonButtonSecondary, description = _a.description;
    return (react_1.default.createElement("div", { style: {
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            background: "var(--s-color-background-default);",
            overflowX: "hidden",
        } },
        react_1.default.createElement("div", { className: "page-root" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "page-header" },
                    withBackButton && (react_1.default.createElement(ButtonIcon_1.default, { onClick: onClickBackButton, size: "md", buttonType: "default", typeIcon: "arrow_back", variant: "secondary" })),
                    react_1.default.createElement("div", { className: "page-header-title" },
                        react_1.default.createElement("h1", null, namePage)),
                    react_1.default.createElement("div", { className: "page-header-actions" },
                        withActionSecondary && (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("div", { className: "button-icon-actions" },
                                react_1.default.createElement(ButtonIcon_1.default, { buttonType: "default", size: "md", typeIcon: "".concat(iconButtonSecondary || "more_vert"), variant: "secondary", onClick: onClickActionSecondary, skeleton: skeletonButtonSecondary })),
                            react_1.default.createElement("div", { className: "button-actions" },
                                react_1.default.createElement(Button_1.default, { size: "md", variant: "secondary", label: buttonContentSecondary, onClick: onClickActionSecondary, typeIcon: iconButtonSecondary, skeleton: skeletonButtonSecondary })))),
                        withActionPrimary && (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("div", { className: "button-icon-actions" },
                                react_1.default.createElement(ButtonIcon_1.default, { buttonType: "default", size: "md", typeIcon: "".concat(iconButtonPrimary || "add"), variant: "primary", onClick: onClickActionPrimary, skeleton: skeletonButtonPrimary })),
                            react_1.default.createElement("div", { className: "button-actions" },
                                react_1.default.createElement(Button_1.default, { size: "md", variant: "primary", skeleton: skeletonButtonPrimary, typeIcon: iconButtonPrimary, label: buttonContentPrimary, onClick: onClickActionPrimary })))))),
                react_1.default.createElement("p", { className: "page-description ".concat(withBackButton ? "with-back-button" : "") }, description)),
            children)));
};
// Exportação
exports.default = Page;
