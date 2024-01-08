import React, { useState } from "react";
import Icon from "../Icon/Icon";
import "./Switch.scss";

interface SwitchProps {
  label: string;
  disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({ label, disabled }) => {
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
            <Icon size="medium" icon="toggle_on" />
          </span>
        ) : (
          <span className="unchecked">
            <Icon size="medium" icon="toggle_off" />
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
