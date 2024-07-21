import React, {
  ButtonHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import Icon from "../Icon/Icon";
import "./ButtonIcon.scss";
import Skeleton from "../Skeleton/Skeleton";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "success" | "warning" | "on-color";
  disabled?: boolean;
  buttonType: "plain" | "default";
  size: "sm" | "md";
  typeIcon: string;
  skeleton?: boolean;
}

const ButtonIcon: React.FC<ButtonProps> = ({
  size,
  buttonType,
  typeIcon,
  variant,
  disabled,
  skeleton,
  ...rest
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
          {...rest}
          ref={buttonRef}
          disabled={disabled}
          className={`button-icon ${variant} ${size} ${buttonType}`}
        >
          {typeIcon && (
            <Icon
              icon={typeIcon}
              size={buttonType === "default" ? "md" : size}
            />
          )}
        </button>
      )}
    </>
  );
};

export default ButtonIcon;
