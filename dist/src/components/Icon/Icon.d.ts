import "./Icon.scss";
import React from "react";
interface IconProps {
    size: "sm" | "md" | "lg";
    icon: string | undefined;
    fill?: boolean;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
