import React, { useState, useEffect, useMemo } from "react";
import "./Switch.scss";

interface SwitchProps {
  modelValue?: any;
  value?: any;
  label?: string;
  id?: string;
  name?: string;
  required?: boolean;
  noEvents?: boolean;
  disabled?: boolean;
  onUpdate?: (val: any) => void;
}

const Switch: React.FC<SwitchProps> = ({
  modelValue,
  value,
  label,
  id,
  name,
  required,
  noEvents,
  disabled,
  onUpdate,
}) => {
  const [checked, setChecked] = useState(modelValue ?? false);

  const uid = useMemo(
    () => id ?? `ui-form-switch-${Math.random().toString(36).substr(2, 9)}`,
    [id],
  );

  useEffect(() => {
    if (modelValue !== checked) {
      setChecked(modelValue);
    }
  }, [modelValue]);

  const classList = useMemo(
    () =>
      [
        "ui-form-switch",
        "-switch",
        disabled ? "-disabled" : "",
        noEvents ? "-no-events" : "",
      ].join(" "),
    [disabled, noEvents],
  );

  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    onUpdate?.(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLabelElement>) => {
    if (event.key === "Enter") {
      if (disabled === false) {
        handleChange();
      }
    }
  };

  return (
    <label
      className={classList}
      htmlFor={uid}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <input
        type="checkbox"
        id={uid}
        value={value}
        required={required}
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
      />
      <span className="ui-form-checkbox-checkmark"></span>
      {label && <div className="ui-form-checkbox-text">{label}</div>}
    </label>
  );
};

export default Switch;
