"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterModal = exports.ContentModal = void 0;
require("./Modal.scss");
var ButtonIcon_1 = __importDefault(require("../ButtonIcon/ButtonIcon"));
var react_1 = __importDefault(require("react"));
var Modal = function (_a) {
    var title = _a.title, description = _a.description, content = _a.content, hideModal = _a.hideModal, isOpen = _a.isOpen, footer = _a.footer, dismissible = _a.dismissible;
    var modalClass = isOpen ? "modal-root visible" : "modal-root";
    var ghostClass = isOpen ? "modal-ghost visible" : "modal-ghost";
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: modalClass },
            react_1.default.createElement("div", { className: "modal-header" },
                react_1.default.createElement("div", { className: "modal-title" },
                    react_1.default.createElement("div", null, title),
                    dismissible && (react_1.default.createElement(ButtonIcon_1.default, { variant: "primary", size: "md", typeIcon: "close", buttonType: "plain", onClick: hideModal }))),
                react_1.default.createElement("div", { className: "modal-description" }, description)),
            content,
            footer),
        react_1.default.createElement("div", { className: ghostClass, onClick: (dismissible
                ? hideModal
                : undefined) })));
};
var ContentModal = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: "modal-content" }, children);
};
exports.ContentModal = ContentModal;
var FooterModal = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: "modal-footer" }, children);
};
exports.FooterModal = FooterModal;
exports.default = Modal;
exports.ContentModal;
exports.FooterModal;
