"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = __importDefault(require("../Button/Button"));
require("./ButtonGroup.scss");
var react_1 = __importDefault(require("react"));
var ButtonGroup = function (_a) {
    var direction = _a.direction, onClickSecondButton = _a.onClickSecondButton, typeIconSecondButton = _a.typeIconSecondButton, contentSecondButton = _a.contentSecondButton, variantSecondButton = _a.variantSecondButton, disableSecondButton = _a.disableSecondButton, disableFirstButton = _a.disableFirstButton, onClickFirstButton = _a.onClickFirstButton, contentFirstButton = _a.contentFirstButton, typeIconFirstButton = _a.typeIconFirstButton, variantFirstButton = _a.variantFirstButton, skeletonFirstButton = _a.skeletonFirstButton, skeletonSecondButton = _a.skeletonSecondButton;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "button-group ".concat(direction) },
            react_1.default.createElement(Button_1.default, { size: "md", disabled: disableFirstButton, onClick: onClickFirstButton, label: contentFirstButton, typeIcon: typeIconFirstButton, variant: variantFirstButton, skeleton: skeletonFirstButton }),
            react_1.default.createElement(Button_1.default, { size: "md", disabled: disableSecondButton, onClick: onClickSecondButton, label: contentSecondButton, typeIcon: typeIconSecondButton, variant: variantSecondButton, skeleton: skeletonSecondButton }))));
};
exports.default = ButtonGroup;
