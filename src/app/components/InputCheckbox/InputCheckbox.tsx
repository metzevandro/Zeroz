import React, { useState, useEffect, useMemo } from "react";
import "./InputCheckbox.scss";

interface CheckboxProps {
  modelValue?: any;
  value?: any;
  label?: string;
  id?: string;
  name?: string;
  required?: boolean;
  indeterminate?: boolean;
  noEvents?: boolean;
  disabled?: boolean;
  onUpdate?: (val: any) => void;
}

const InputCheckbox: React.FC<CheckboxProps> = ({
  modelValue,
  value,
  label,
  id,
  name,
  required,
  indeterminate,
  noEvents,
  disabled,
  onUpdate,
}) => {
  const [checked, setChecked] = useState(modelValue ?? false);

  const uid = useMemo(
    () => id ?? `ui-form-checkbox-${Math.random().toString(36).substr(2, 9)}`,
    [id],
  );

  useEffect(() => {
    if (modelValue !== checked) {
      setChecked(modelValue);
    }
  }, [modelValue]);

  const classList = useMemo(
    () => [disabled ? "-disabled" : "", noEvents ? "-no-events" : ""].join(" "),
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
      tabIndex={0}
      className={`ui-form-checkbox ${classList}`}
      htmlFor={uid}
      onKeyDown={handleKeyDown}
    >
      <input
        type="checkbox"
        id={uid}
        value={value}
        required={required}
        ref={(el) => {
          if (el) el.indeterminate = indeterminate ?? false;
        }}
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
        tabIndex={-1}
      />
      <span className="ui-form-checkbox-checkmark"></span>
      {label && <div className="ui-form-checkbox-text">{label}</div>}
    </label>
  );
};

export default InputCheckbox;
