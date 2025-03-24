import React, { InputHTMLAttributes, useRef, useEffect, useState } from "react";
import "./Input.scss";
import Icon from "../Icon/Icon";
import Skeleton from "../Skeleton/Skeleton";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  typeIcon?: string;
  fillIcon?: boolean;
  label?: string;
  error?: boolean;
  disabled?: boolean;
  textError?: string;
  value?: string;
  ref?: any;
  skeleton?: boolean;
}

const Input: React.FC<InputProps> = ({
  typeIcon,
  fillIcon,
  label,
  error,
  disabled,
  textError,
  value,
  ref,
  skeleton,
  ...rest
}) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (inputRef.current) {
      const { offsetWidth, offsetHeight } = inputRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [inputRef.current]);

  const handleDivClick = () => {
    if (inputRef.current) {
      const inputElement = inputRef.current.querySelector("input");
      if (inputElement) {
        inputElement.focus();
      }
    }
  };

  return (
    <>
      <div className="input-root">
        {label && (
          <div className="input-header">
            <label>{label}</label>
          </div>
        )}
        {skeleton ? (
          <Skeleton
            height={`${dimensions.height}`}
            width={`${dimensions.width}`}
          />
        ) : (
          <div ref={inputRef}>
            <div
              className={`input-content ${disabled ? "disabled" : ""} ${
                error ? "error" : ""
              }`}
              onClick={handleDivClick}
            >
              <input
                size={0}
                {...rest}
                value={value}
                disabled={disabled}
                ref={ref}
              />
              <Icon icon={typeIcon} size="md" fill={fillIcon} />
            </div>
            {error && <div className="input-error">{textError}</div>}
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
