import React, { ButtonHTMLAttributes } from "react";
import "./Button.scss";
import Icon from "../Icon/Icon";
import Loading from "../Loading/Loading";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  label?: string;
  size: "sm" | "md";
  variant: "primary" | "secondary" | "success" | "warning" | "is-loading";
  typeIcon?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  label,
  variant,
  typeIcon,
  onClick,
  size,
  ...rest
}) => {
  const buttonClass = `button ${variant} ${size}`;

  return (
    <>
      {label && (
        <button
          {...rest}
          className={buttonClass}
          onClick={onClick}
          disabled={disabled}
        >
          {variant === "is-loading" && <Loading variant="default" />}
          {typeIcon && <Icon icon={typeIcon} size="sm" />}
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
