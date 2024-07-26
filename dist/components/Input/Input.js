"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./Input.scss");
var Icon_1 = __importDefault(require("../Icon/Icon"));
var Input = function (_a) {
    var typeIcon = _a.typeIcon, fillIcon = _a.fillIcon, label = _a.label, error = _a.error, disabled = _a.disabled, textError = _a.textError, value = _a.value, rest = __rest(_a, ["typeIcon", "fillIcon", "label", "error", "disabled", "textError", "value"]);
    var inputRef = (0, react_1.useRef)(null);
    var handleDivClick = function () {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (react_1.default.createElement("div", { className: "input-root" },
        label && (react_1.default.createElement("div", { className: "input-header" },
            react_1.default.createElement("label", null, label))),
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "input-content ".concat(disabled ? "disabled" : "", " ").concat(error ? "error" : ""), onClick: handleDivClick },
                react_1.default.createElement("input", __assign({ size: 0 }, rest, { value: value, disabled: disabled, ref: inputRef })),
                react_1.default.createElement(Icon_1.default, { icon: typeIcon, size: "md", fill: fillIcon })),
            error && react_1.default.createElement("div", { className: "input-error" }, textError))));
};
exports.default = Input;
