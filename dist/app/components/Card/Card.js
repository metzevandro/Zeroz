"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardImage = CardImage;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Card.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Card(props) {
  return <div className="card-root">
      <div>{props.image}</div>
      <div>{props.header}</div>
      <div>{props.content}</div>
      <div>{props.footer}</div>
    </div>;
}
function CardImage(props) {
  return <div className="card-image">{props.children}</div>;
}
function CardHeader(props) {
  return <div className="card-header">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>;
}
function CardContent(props) {
  return <div className="card-content">{props.children}</div>;
}
function CardFooter(props) {
  return <div className="card-footer">{props.children}</div>;
}
var _default = exports["default"] = Card;