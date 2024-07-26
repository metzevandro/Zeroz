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
// Tooltip.tsx
var react_1 = __importStar(require("react"));
require("./Tooltip.scss");
var Tooltip = function (_a) {
    var text = _a.text, children = _a.children, direction = _a.direction;
    var _b = (0, react_1.useState)(false), isVisible = _b[0], setIsVisible = _b[1];
    var handleMouseEnter = function () {
        setIsVisible(true);
    };
    var handleMouseLeave = function () {
        setIsVisible(false);
    };
    return (react_1.default.createElement("div", { className: "tooltip-root ".concat(direction), onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        children,
        isVisible && (react_1.default.createElement("div", { className: "tooltip-container ".concat(direction) },
            react_1.default.createElement("div", { className: "tooltip-icon ".concat(direction) }),
            react_1.default.createElement("p", null, text)))));
};
exports.default = Tooltip;
