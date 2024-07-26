"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ButtonGroup_1 = __importDefault(require("../ButtonGroup/ButtonGroup"));
require("./SaveBar.scss");
var SaveBar = function (_a) {
    var onClickSave = _a.onClickSave, onClickCancel = _a.onClickCancel, label = _a.label, labelSave = _a.labelSave, labelCancel = _a.labelCancel;
    var handleSaveClick = function (e) {
        e.stopPropagation();
        onClickSave(e);
    };
    return (react_1.default.createElement("div", { className: "save-bar" },
        react_1.default.createElement("div", { className: "save-bar-content" },
            react_1.default.createElement("p", { className: "save-bar-label" }, label),
            react_1.default.createElement("div", { className: "save-bar-buttons" },
                react_1.default.createElement(ButtonGroup_1.default, { variantFirstButton: "secondary", variantSecondButton: "success", direction: "row", contentFirstButton: labelCancel, contentSecondButton: labelSave, onClickFirstButton: onClickCancel, onClickSecondButton: handleSaveClick })))));
};
exports.default = SaveBar;
