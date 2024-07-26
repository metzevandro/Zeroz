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
require("./InputSelect.scss");
var InputSelect = function (_a) {
    var options = _a.options, label = _a.label, error = _a.error, errorMessage = _a.errorMessage, disabled = _a.disabled, onChange = _a.onChange, value = _a.value;
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = (0, react_1.useState)(value || undefined), selectedOption = _c[0], setSelectedOption = _c[1]; // Defina o valor inicial com a propriedade value
    (0, react_1.useEffect)(function () {
        // Atualiza o estado selectedOption quando a propriedade value mudar
        setSelectedOption(value || undefined);
    }, [value]);
    var handleOptionChange = function (event) {
        var newValue = event.target.value;
        setSelectedOption(newValue);
        onChange(newValue);
    };
    var dropdownRef = (0, react_1.useRef)(null);
    var handleClickOutside = function (event) {
        if (isOpen &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    (0, react_1.useEffect)(function () {
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    return (react_1.default.createElement("div", { className: "input-select-root" },
        react_1.default.createElement("div", { className: "input-select-label" }, label),
        react_1.default.createElement("div", { className: "input-select" },
            react_1.default.createElement("div", { className: "input-select-button ".concat(selectedOption && "option", " ").concat(error && "error", " ").concat(disabled && "disabled") },
                react_1.default.createElement("select", { className: "".concat(error && "select-error"), value: selectedOption || "", onChange: handleOptionChange, disabled: disabled || error }, options.map(function (option, index) { return (react_1.default.createElement("option", { key: index, value: option }, option)); })))),
        error && react_1.default.createElement("p", { className: "input-select-error-message" }, errorMessage)));
};
exports.default = InputSelect;
