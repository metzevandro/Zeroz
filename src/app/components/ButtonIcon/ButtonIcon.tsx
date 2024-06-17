import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon/Icon";
import "./ButtonIcon.scss";
import Skeleton from "../Skeleton/Skeleton";

interface ButtonProps {
  variant: "primary" | "secondary" | "success" | "warning" | "on-color";
  disable?: boolean;
  type: "plain" | "default";
  size: "sm" | "md";
  typeIcon: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  skeleton?: boolean;
}

const ButtonIcon: React.FC<ButtonProps> = ({
  size,
  type,
  typeIcon,
  variant,
  onClick,
  disable,
  skeleton,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dimensions, setDimensions] = useState<{
    height: number;
    width: number;
  } | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const { offsetHeight: height, offsetWidth: width } = buttonRef.current;
      setDimensions({ height, width });
    }
  }, [size, variant]);

  return (
    <>
      {skeleton && dimensions ? (
        <Skeleton
          height={`${dimensions.height}`}
          width={`${dimensions.width}`}
        />
      ) : (
        <button
          ref={buttonRef}
          disabled={disable}
          onClick={onClick}
          className={`button-icon ${variant} ${size} ${type}`}
        >
          {typeIcon && <Icon icon={typeIcon} size={size} />}
        </button>
      )}
    </>
  );
};

export default ButtonIcon;
