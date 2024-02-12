import React, { useState, useEffect } from "react";
import Icon from "../Icon/Icon";
import "./Switch.scss";

interface SwitchProps {
  label: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({
  label,
  disabled,
  checked: controlledChecked,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(
    controlledChecked || false
  );

  useEffect(() => {
    if (controlledChecked !== undefined) {
      setIsChecked(controlledChecked);
    }
  }, [controlledChecked]);

  const isDisabled = disabled;

  const toggleCheckbox = () => {
    if (isDisabled === true) {
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
      toggleCheckbox();
    }
  };

  return (
    <div className="switch-root">
      <div
        className={`switch ${isChecked ? "checked" : ""} ${
          disabled ? "disabled" : ""
        }`}
        onClick={toggleCheckbox}
        tabIndex={0}
        onKeyDown={handleKeyPress}
        role="checkbox"
        aria-checked={isChecked}
      >
        {isChecked ? (
          <span className="checked">
            <Icon size="md" icon="toggle_on" />
          </span>
        ) : (
          <span className="unchecked">
            <Icon size="md" icon="toggle_off" />
          </span>
        )}
      </div>
      <label
        className={`label ${disabled && "disabled"}`}
        onClick={toggleCheckbox}
      >
        {label}
      </label>
    </div>
  );
};

export default Switch;
