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
var ButtonIcon_1 = __importDefault(require("../ButtonIcon/ButtonIcon"));
require("./Tag.scss");
function Tag(props) {
    var _a = (0, react_1.useState)(false), closed = _a[0], setClosed = _a[1];
    var handleCloseTag = function () {
        setClosed(true);
        if (props.onClose) {
            props.onClose();
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, !closed && (react_1.default.createElement("div", { className: "tag-root ".concat(props.variant) },
        props.content,
        react_1.default.createElement("span", null,
            react_1.default.createElement(ButtonIcon_1.default, { buttonType: "plain", size: "sm", typeIcon: "close", variant: props.variant === "secondary" ? "primary" : "on-color", onClick: handleCloseTag }))))));
}
exports.default = Tag;
