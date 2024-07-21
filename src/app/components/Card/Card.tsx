import React from "react";
import "./Card.scss";

interface CardProps {
  content: React.ReactNode;
  footer?: React.ReactNode;
  image?: React.ReactNode;
  header?: React.ReactNode;
}

export function Card(props: CardProps) {
  return (
    <div className="card-root">
      <div>{props.image}</div>
      <div>{props.header}</div>
      <div>{props.content}</div>
      <div>{props.footer}</div>
    </div>
  );
}

export function CardImage(props: { children: React.ReactNode }) {
  return <div className="card-image">{props.children}</div>;
}

interface CardHeaderProps {
  title: string;
  description: string;
}

export function CardHeader(
  props: CardHeaderProps & { children?: React.ReactNode },
) {
  return (
    <div className="card-header">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export function CardContent(props: { children: React.ReactNode }) {
  return <div className="card-content">{props.children}</div>;
}

export function CardFooter(props: { children: React.ReactNode }) {
  return <div className="card-footer">{props.children}</div>;
}

export default Card;
