import React, { ButtonHTMLAttributes } from "react";
import "./Button.scss";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    size: "sm" | "md";
    variant: "primary" | "secondary" | "success" | "warning" | "is-loading";
    typeIcon?: string;
    skeleton?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
