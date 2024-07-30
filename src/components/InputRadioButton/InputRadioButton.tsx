import React, { useState, useEffect } from "react";
import "./InputRadioButton.scss";

interface InputRadioButtonProps {
  label?: string;
  disabled?: boolean;
  onChange?: (isChecked: boolean) => void;
  checked?: boolean;
}

const InputRadioButton: React.FC<InputRadioButtonProps> = ({
  disabled,
  label,
  onChange,
  checked: controlledChecked,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(
    controlledChecked || false,
  );

  useEffect(() => {
    if (controlledChecked !== undefined) {
      setIsChecked(controlledChecked);
    }
  }, [controlledChecked]);

  const toggleRadioButton = () => {
    if (disabled) {
      return;
    } else {
      const newValue = !isChecked;
      setIsChecked(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      toggleRadioButton();
    }
  };

  return (
    <div className={`radio-button-root  ${disabled ? "disable" : ""}`}>
      <div
        className={`radio-button ${disabled ? "disable" : ""} ${
          isChecked ? "checked" : ""
        }`}
        onClick={toggleRadioButton}
        onKeyDown={handleKeyPress}
        role="radio"
        aria-checked={isChecked}
        tabIndex={0}
      >
        <span className={`radio-circle ${isChecked ? "checked-circle" : ""}`} />
      </div>
      <label
        onClick={toggleRadioButton}
        className={`radio-button-label ${disabled ? "disabled" : ""}`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputRadioButton;
