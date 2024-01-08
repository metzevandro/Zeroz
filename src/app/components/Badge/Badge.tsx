import React from "react";
import "./Badge.scss";

interface BadgeProps {
  label: string;
  type:
    | "default"
    | "primary"
    | "warning"
    | "success"
    | "primary-light"
    | "warning-light"
    | "success-light";
}

const Badge: React.FC<BadgeProps> = ({ label, type }) => (
  <div className={`badge ${type}`}>
    <p>{label}</p>
  </div>
);

export default Badge;
