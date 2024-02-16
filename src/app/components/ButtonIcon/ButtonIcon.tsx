import React from "react";
import Icon from "../Icon/Icon";
import "./ButtonIcon.scss";

interface ButtonProps {
  variant: "primary" | "secondary" | "success" | "warning" | "on-color";
  disable?: boolean;
  type: "plain" | "default";
  size: "sm" | "md";
  typeIcon: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonIcon: React.FC<ButtonProps> = ({
  size,
  type,
  typeIcon,
  variant,
  onClick,
  disable,
}) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      className={`button-icon ${variant} ${size} ${type}`}
    >
      {typeIcon && <Icon icon={typeIcon} size={size} />}
    </button>
  );
};

export default ButtonIcon;
