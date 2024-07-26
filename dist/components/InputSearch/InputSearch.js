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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Icon_1 = __importDefault(require("../Icon/Icon"));
require("./InputSearch.scss");
var ButtonIcon_1 = __importDefault(require("../ButtonIcon/ButtonIcon"));
var InputSearch = function (props) {
    var _a = (0, react_1.useState)(""), inputValue = _a[0], setInputValue = _a[1];
    var _b = (0, react_1.useState)(false), isActive = _b[0], setIsActive = _b[1];
    var inputRef = (0, react_1.useRef)(null);
    var handleChange = function (event) {
        var value = event.target.value;
        setInputValue(value);
        if (props.onChange) {
            props.onChange(value);
        }
    };
    var handleInputClick = function () {
        setIsActive(true);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    var handleInputBlur = function () {
        setIsActive(false);
    };
    var handleClearClick = function () {
        setInputValue("");
        if (props.onChange) {
            props.onChange("");
        }
    };
    return (react_1.default.createElement("div", { className: "input-search-root ".concat(props.disabled ? "disabled" : ""), onClick: handleInputClick },
        react_1.default.createElement("div", { className: "input-search" },
            react_1.default.createElement(Icon_1.default, { size: "md", icon: "search" }),
            react_1.default.createElement("input", { disabled: props.disabled, size: 1000, type: "text", placeholder: props.placeholder, value: inputValue, onChange: handleChange, onBlur: handleInputBlur, ref: inputRef }),
            inputValue && (react_1.default.createElement("button", { className: "input-search-button-close ".concat(inputValue && "visible"), onClick: handleClearClick },
                react_1.default.createElement(ButtonIcon_1.default, { variant: "primary", typeIcon: "close", buttonType: "plain", size: "sm" }))))));
};
exports.default = InputSearch;
