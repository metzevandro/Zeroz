import React from "react";
import "./Skeleton.scss";

interface SkeletonProps {
  width: string;
  height: string;
  circle?: boolean;
}

export default function Skeleton(props: SkeletonProps) {
  return (
    <div
      className={`skeleton ${props.circle === true ? "circle" : "no-circle"}`}
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        borderRadius: props.circle ? "var(--s-border-radius-pill)" : "",
        backgroundSize: `${props.width}px`,
      }}
    ></div>
  );
}
