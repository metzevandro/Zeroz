import React, { InputHTMLAttributes, useRef, useEffect, useState } from "react";
import "./Input.scss";
import Icon from "../Icon/Icon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  typeIcon?: string;
  fillIcon?: 1 | 0;
  label?: string;
  error?: boolean;
  disabled?: boolean;
  textError?: string;
}

const Input: React.FC<InputProps> = ({
  typeIcon,
  fillIcon,
  label,
  error,
  disabled,
  textError,
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
            disabled={disabled || error}
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
