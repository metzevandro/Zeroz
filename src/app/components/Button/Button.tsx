import React from "react";
import "./Button.scss";
import Icon from "../Icon/Icon";

interface ButtonProps {
  disable?: boolean;
  label?: string;
  size: "sm" | "md";
  variant: "primary" | "secondary" | "success" | "warning";
  typeIcon?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  disable,
  label,
  variant,
  typeIcon,
  onClick,
  size,
}) => {
  const buttonClass = `button ${variant} ${size}`;

  return (
    <>
      {label && (
        <button className={buttonClass} onClick={onClick} disabled={disable}>
          {typeIcon && <Icon icon={typeIcon} size="sm" />}
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
