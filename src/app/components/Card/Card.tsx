// Card.tsx
import React from "react";
import "./Card.scss";

interface CardProps {
  children?: React.ReactNode;
}

export function Card(props: CardProps) {
  return <div className="card-root">{props.children}</div>;
}

export function CardImage(props: { children: React.ReactNode }) {
  return <div className="card-image">{props.children}</div>;
}

interface CardHeaderProps {
  title: string;
  description: string;
}

export function CardHeader(
  props: CardHeaderProps & { children?: React.ReactNode }
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
