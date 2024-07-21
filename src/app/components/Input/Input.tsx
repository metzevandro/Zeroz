import React, { InputHTMLAttributes, useRef } from "react";
import "./Input.scss";
import Icon from "../Icon/Icon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  typeIcon?: string;
  fillIcon?: boolean;
  label?: string;
  error?: boolean;
  disabled?: boolean;
  textError?: string;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  typeIcon,
  fillIcon,
  label,
  error,
  disabled,
  textError,
  value,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="input-root">
      {label && (
        <div className="input-header">
          <label>{label}</label>
        </div>
      )}
      <div>
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
          />
          <Icon icon={typeIcon} size="md" fill={fillIcon} />
        </div>
        {error && <div className="input-error">{textError}</div>}
      </div>
    </div>
  );
};

export default Input;
