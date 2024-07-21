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
  label?: string;
  size: "sm" | "md";
  variant: "primary" | "secondary" | "success" | "warning" | "is-loading";
  typeIcon?: string;
  skeleton?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  label,
  variant,
  typeIcon,
  size,
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
  }, [label, size, variant]);

  const buttonClass = `button ${variant} ${size}`;

  return (
    <>
      {skeleton && dimensions ? (
        <Skeleton
          height={`${dimensions.height}`}
          width={`${dimensions.width}`}
        />
      ) : (
        label && (
          <button
            {...rest}
            ref={buttonRef}
            className={buttonClass}
            disabled={disabled}
          >
            {variant === "is-loading" && <Loading variant="default" />}
            {typeIcon && <Icon icon={typeIcon} size="sm" />}
            {label}
          </button>
        )
      )}
    </>
  );
};

export default Button;
