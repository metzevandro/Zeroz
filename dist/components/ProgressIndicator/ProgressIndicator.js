"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Icon_1 = __importDefault(require("../Icon/Icon"));
require("./ProgressIndicator.scss");
var stateNames = {
    default: "circle",
    current: "trip_origin",
    error: "error",
    completed: "check_circle",
    disable: "circle",
};
var ProgressIndicator = function (_a) {
    var step = _a.step, description = _a.description, state = _a.state, direction = _a.direction, onClick = _a.onClick, widthFull = _a.widthFull;
    var displayName = stateNames[state] || state;
    var customizeWidthFull = function (widthFull) {
        if (widthFull === void 0) { widthFull = false; }
        if (widthFull) {
            return {
                width: "100%",
            };
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "progress-indicator  ".concat(direction, " ").concat(state), onClick: onClick, style: customizeWidthFull(widthFull) },
            react_1.default.createElement("div", { className: "header" },
                react_1.default.createElement("div", { className: state },
                    react_1.default.createElement(Icon_1.default, { icon: displayName, size: "sm", fill: displayName === "check_circle" || displayName === "error"
                            ? true
                            : false })),
                react_1.default.createElement("h1", null, step)),
            react_1.default.createElement("p", null, description))));
};
exports.default = ProgressIndicator;
