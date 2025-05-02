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
  inputRef?: React.Ref<HTMLInputElement>;
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
  inputRef,
  skeleton,
  type,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [containerRef.current]);

  const handleDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest(".toggle-password")) {
      return;
    }

    if (containerRef.current) {
      const inputElement = containerRef.current.querySelector("input");
      if (inputElement) {
        if (event.detail === 2) {
          inputElement.focus();
          inputElement.select();
        } else {
          const currentCursorPosition = inputElement.selectionStart;
          setTimeout(() => {
            inputElement.focus();
            if (currentCursorPosition !== null) {
              inputElement.setSelectionRange(currentCursorPosition, currentCursorPosition);
            }
          }, 0);
        }
      }
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
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
          <div ref={containerRef}>
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
                ref={inputRef}
                type={type === "password" && isPasswordVisible ? "text" : type}
              />
              {type === "password" ? (
                <div
                  onClick={togglePasswordVisibility}
                  className="toggle-password"
                >
                  <span className="icon-transition">
                    <Icon
                      icon={isPasswordVisible ? "visibility" : "visibility_off"}
                      size="md"
                      fill={fillIcon}
                    />
                  </span>
                </div>
              ) : (
                <span className="icon-transition">
                  <Icon icon={typeIcon} size="md" fill={fillIcon} />
                </span>
              )}
            </div>
            {error && <div className="input-error">{textError}</div>}
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
