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
require("./InputTextArea.scss");
var TextArea = function (_a) {
    var placeholder = _a.placeholder, label = _a.label, disabled = _a.disabled, error = _a.error, errorText = _a.errorText, onChange = _a.onChange, _b = _a.value, value = _b === void 0 ? "" : _b;
    var _c = (0, react_1.useState)(value), internalValue = _c[0], setInternalValue = _c[1];
    var textareaRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        setInternalValue(value);
    }, [value]);
    var handleButtonClick = function () {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };
    var handleInputChange = function (event) {
        var newValue = event.target.value;
        setInternalValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };
    return (react_1.default.createElement("div", { className: "text-area-root" },
        react_1.default.createElement("label", { className: "text-area-label" }, label),
        react_1.default.createElement("div", { tabIndex: 0, className: "text-area ".concat(disabled && "disabled", " ").concat(error && !disabled ? "error" : ""), onClick: handleButtonClick },
            react_1.default.createElement("textarea", { ref: textareaRef, placeholder: placeholder, disabled: disabled, onChange: handleInputChange, value: internalValue })),
        error && react_1.default.createElement("p", { className: "description" }, errorText)));
};
exports.default = TextArea;
