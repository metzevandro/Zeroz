import "./Switch.scss";
import React from "react";
import { SwitchProps } from "./Switch.types";
import { useSwitch } from "./hooks/useSwitch";
import { getSwitchClassList } from "./utils/switch.utils";

/**
 * `Switch` is an accessible toggle control rendered as a styled checkbox.
 *
 * It supports controlled usage via `modelValue` + `onUpdate`, disabled and
 * no-events modifiers, Enter key toggling, and auto-generated accessible ids.
 *
 * @example
 * ```tsx
 * // Uncontrolled
 * <Switch label="Enable notifications" onUpdate={setEnabled} />
 *
 * // Controlled
 * <Switch label="Dark mode" modelValue={isDark} onUpdate={setIsDark} />
 *
 * // Disabled
 * <Switch label="Feature unavailable" disabled />
 * ```
 */
const Switch: React.FC<SwitchProps> = ({
  modelValue,
  value,
  label,
  id,
  name,
  required = false,
  noEvents = false,
  disabled = false,
  onUpdate,
}) => {
  const { uid, checked, handleChange, handleKeyDown } = useSwitch({
    modelValue,
    id,
    disabled,
    onUpdate,
  });

  return (
    <label className={getSwitchClassList(disabled, noEvents)} htmlFor={uid}>
      <input
        type="checkbox"
        id={uid}
        value={value}
        name={name}
        required={required}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <span className="ui-form-checkbox-checkmark" />
      {label && <div className="ui-form-checkbox-text">{label}</div>}
    </label>
  );
};

export default Switch;
