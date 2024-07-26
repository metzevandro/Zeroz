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
var Icon_1 = __importDefault(require("../Icon/Icon"));
require("./ButtonIcon.scss");
var Skeleton_1 = __importDefault(require("../Skeleton/Skeleton"));
var ButtonIcon = function (_a) {
    var size = _a.size, buttonType = _a.buttonType, typeIcon = _a.typeIcon, variant = _a.variant, disabled = _a.disabled, skeleton = _a.skeleton, rest = __rest(_a, ["size", "buttonType", "typeIcon", "variant", "disabled", "skeleton"]);
    var buttonRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(null), dimensions = _b[0], setDimensions = _b[1];
    (0, react_1.useEffect)(function () {
        if (buttonRef.current) {
            var _a = buttonRef.current, height = _a.offsetHeight, width = _a.offsetWidth;
            setDimensions({ height: height, width: width });
        }
    }, [size, variant]);
    return (react_1.default.createElement(react_1.default.Fragment, null, skeleton && dimensions ? (react_1.default.createElement(Skeleton_1.default, { height: "".concat(dimensions.height), width: "".concat(dimensions.width) })) : (react_1.default.createElement("button", __assign({}, rest, { ref: buttonRef, disabled: disabled, className: "button-icon ".concat(variant, " ").concat(size, " ").concat(buttonType) }), typeIcon && (react_1.default.createElement(Icon_1.default, { icon: typeIcon, size: buttonType === "default" ? "md" : size }))))));
};
exports.default = ButtonIcon;
