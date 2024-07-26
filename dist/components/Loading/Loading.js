"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Icon_1 = __importDefault(require("../Icon/Icon"));
require("./Loading.scss");
var react_1 = __importDefault(require("react"));
var Loading = function (_a) {
    var variant = _a.variant, message = _a.message;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        variant === "default" && (react_1.default.createElement("div", { className: "loading-with-message" },
            react_1.default.createElement("span", { className: "loading" },
                react_1.default.createElement(Icon_1.default, { size: "sm", icon: "progress_activity" })),
            message && react_1.default.createElement("p", { className: "loading-message" }, message))),
        variant === "large" && (react_1.default.createElement("span", { className: "loading" },
            react_1.default.createElement(Icon_1.default, { size: "lg", icon: "progress_activity" }))),
        variant === "success" && (react_1.default.createElement("div", { className: "loading-with-message" },
            react_1.default.createElement("span", { className: "success" },
                react_1.default.createElement(Icon_1.default, { size: "sm", icon: "check_circle" })),
            message && react_1.default.createElement("p", { className: "loading-message" }, message),
            " ")),
        variant === "warning" && (react_1.default.createElement("div", { className: "loading-with-message" },
            react_1.default.createElement("span", { className: "warning" },
                react_1.default.createElement(Icon_1.default, { size: "sm", icon: "error_outline" })),
            message && react_1.default.createElement("p", { className: "loading-message" }, message),
            " "))));
};
exports.default = Loading;
