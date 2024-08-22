import React, { ButtonHTMLAttributes } from "react";
import "./ButtonIcon.scss";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "success" | "warning" | "on-color";
    disabled?: boolean;
    buttonType: "plain" | "default";
    size: "sm" | "md";
    typeIcon: string;
    skeleton?: boolean;
}
declare const ButtonIcon: React.FC<ButtonProps>;
export default ButtonIcon;
