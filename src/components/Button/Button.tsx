import React, {
  useRef,
  useEffect,
  useState,
  ButtonHTMLAttributes,
} from "react";
import "./Button.scss";
import Icon from "../Icon/Icon";
import Loading from "../Loading/Loading";
import Skeleton from "../Skeleton/Skeleton";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  size: "sm" | "md";
  variant: "primary" | "secondary" | "success" | "warning" | "is-loading";
  typeIcon?: string;
  skeleton?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  variant,
  typeIcon,
  size,
  skeleton,
  children,
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

  const buttonClass = `button ${variant} ${size}`;

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
          className={buttonClass}
          disabled={disabled}
        >
          {children}
          {variant === "is-loading" && <Loading variant="default" />}
          {typeIcon && <Icon icon={typeIcon} size="sm" />}
        </button>
      )}
    </>
  );
};

export default Button;
