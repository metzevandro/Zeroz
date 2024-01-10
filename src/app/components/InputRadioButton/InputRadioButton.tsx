"use client";
import React, { useState } from "react";
import Icon from "../Icon/Icon";
import "./InputRadioButton.scss";

interface InputRadioButtonProps {
  label: string;
  disabled?: boolean;
}

const InputRadioButton: React.FC<InputRadioButtonProps> = ({
  disabled,
  label,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const isDisabled = disabled;

  const toggleCheckbox = () => {
    if (isDisabled === true) {
      return;
    } else {
      setIsChecked(!isChecked);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      toggleCheckbox();
    }
  };
  return (
    <div className="radio-button-root">
      <div
        className={`radio-button ${disabled ? "disabled" : ""}`}
        onClick={toggleCheckbox}
        tabIndex={0}
        onKeyDown={handleKeyPress}
        role="checkbox"
        aria-checked={isChecked}
      >
        {isChecked ? (
          <span className="checked">
            <Icon size="medium" icon="radio_button_checked" />
          </span>
        ) : (
          <span className="unchecked">
            <Icon size="medium" icon="radio_button_unchecked" />
          </span>
        )}
      </div>
      <label
        onClick={toggleCheckbox}
        className={`radio-button-label ${disabled && "disabled"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputRadioButton;
