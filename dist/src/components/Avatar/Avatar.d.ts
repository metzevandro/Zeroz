import "./Avatar.scss";
import React from "react";
type IconSize = "sm" | "md" | "lg";
interface AvatarProps {
    size: IconSize;
    src?: string;
    skeleton?: boolean;
    letter?: string;
}
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
