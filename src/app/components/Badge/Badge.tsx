import React from "react";
import "./Badge.scss";

interface BadgeProps {
  label: string;
  type: "default" | "light";
  variant: "default" | "primary" | "success" | "warning";
}

const Badge: React.FC<BadgeProps> = ({ label, type, variant }) => (
  <div className={`badge ${type} ${variant}`}>
    <p>{label}</p>
  </div>
);

export default Badge;
