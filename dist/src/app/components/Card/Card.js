"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = Card;
exports.CardImage = CardImage;
exports.CardHeader = CardHeader;
exports.CardContent = CardContent;
exports.CardFooter = CardFooter;
var react_1 = __importDefault(require("react"));
require("./Card.scss");
function Card(props) {
    return (react_1.default.createElement("div", { className: "card-root" },
        react_1.default.createElement("div", null, props.image),
        react_1.default.createElement("div", null, props.header),
        react_1.default.createElement("div", null, props.content),
        react_1.default.createElement("div", null, props.footer)));
}
function CardImage(props) {
    return react_1.default.createElement("div", { className: "card-image" }, props.children);
}
function CardHeader(props) {
    return (react_1.default.createElement("div", { className: "card-header" },
        react_1.default.createElement("h1", null, props.title),
        react_1.default.createElement("p", null, props.description)));
}
function CardContent(props) {
    return react_1.default.createElement("div", { className: "card-content" }, props.children);
}
function CardFooter(props) {
    return react_1.default.createElement("div", { className: "card-footer" }, props.children);
}
exports.default = Card;
