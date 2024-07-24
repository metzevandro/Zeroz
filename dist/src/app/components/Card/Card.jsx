import React from "react";
import "./Card.scss";
export function Card(props) {
    return (<div className="card-root">
      <div>{props.image}</div>
      <div>{props.header}</div>
      <div>{props.content}</div>
      <div>{props.footer}</div>
    </div>);
}
export function CardImage(props) {
    return <div className="card-image">{props.children}</div>;
}
export function CardHeader(props) {
    return (<div className="card-header">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>);
}
export function CardContent(props) {
    return <div className="card-content">{props.children}</div>;
}
export function CardFooter(props) {
    return <div className="card-footer">{props.children}</div>;
}
export default Card;
