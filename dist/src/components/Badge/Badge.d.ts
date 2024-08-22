import React from "react";
import "./Badge.scss";
interface BadgeProps {
    label: string;
    type: "default" | "light";
    variant: "default" | "primary" | "success" | "warning";
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
