"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./InputRadioButton.scss");
var InputRadioButton = function (_a) {
    var disabled = _a.disabled, label = _a.label, onChange = _a.onChange, controlledChecked = _a.checked;
    var _b = (0, react_1.useState)(controlledChecked || false), isChecked = _b[0], setIsChecked = _b[1];
    (0, react_1.useEffect)(function () {
        if (controlledChecked !== undefined) {
            setIsChecked(controlledChecked);
        }
    }, [controlledChecked]);
    var toggleRadioButton = function () {
        if (disabled) {
            return;
        }
        else {
            var newValue = !isChecked;
            setIsChecked(newValue);
            if (onChange) {
                onChange(newValue);
            }
        }
    };
    var handleKeyPress = function (e) {
        if (e.key === "Enter") {
            toggleRadioButton();
        }
    };
    return (react_1.default.createElement("div", { className: "radio-button-root  ".concat(disabled ? "disable" : "") },
        react_1.default.createElement("div", { className: "radio-button ".concat(disabled ? "disable" : "", " ").concat(isChecked ? "checked" : ""), onClick: toggleRadioButton, onKeyDown: handleKeyPress, role: "radio", "aria-checked": isChecked, tabIndex: 0 },
            react_1.default.createElement("span", { className: "radio-circle ".concat(isChecked ? "checked-circle" : "") })),
        react_1.default.createElement("label", { onClick: toggleRadioButton, className: "radio-button-label ".concat(disabled ? "disabled" : "") }, label)));
};
exports.default = InputRadioButton;
