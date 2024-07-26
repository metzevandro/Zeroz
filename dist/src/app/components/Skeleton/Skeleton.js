"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Skeleton;
var react_1 = __importDefault(require("react"));
require("./Skeleton.scss");
function Skeleton(props) {
    return (react_1.default.createElement("div", { className: "skeleton ".concat(props.circle === true ? "circle" : "no-circle"), style: {
            width: "".concat(props.width, "px"),
            height: "".concat(props.height, "px"),
            borderRadius: props.circle ? "var(--s-border-radius-pill)" : "",
            backgroundSize: "".concat(props.width, "px"),
        } }));
}
