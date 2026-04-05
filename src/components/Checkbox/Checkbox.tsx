import "./Checkbox.scss";
import React from "react";
import { CheckboxProps } from "./Checkbox.types";
import { useCheckbox } from "./hooks/useCheckbox";
import { getCheckboxClassList } from "./utils/checkbox.utils";

/**
 * `Checkbox` is an accessible, controlled checkbox input.
 *
 * It supports indeterminate state, disabled and no-events modifiers,
 * Enter key toggling via keyboard, and sync with an external `modelValue`.
 * A unique `id` is auto-generated via `useId()` when none is provided,
 * ensuring the `<label>` and `<input>` are always properly associated.
 *
 * @example
 * ```tsx
 * // Basic
 * <Checkbox label="Accept terms" onUpdate={setAccepted} />
 *
 * // Controlled
 * <Checkbox label="Subscribe" modelValue={isSubscribed} onUpdate={setSubscribed} />
 *
 * // Indeterminate (select-all pattern)
 * <Checkbox label="Select all" indeterminate={someChecked} modelValue={allChecked} onUpdate={toggleAll} />
 *
 * // Disabled
 * <Checkbox label="Unavailable option" disabled />
 * ```
 */
const Checkbox: React.FC<CheckboxProps> = ({
  modelValue,
  value,
  label,
  id,
  name,
  required = false,
  indeterminate = false,
  noEvents = false,
  disabled = false,
  onUpdate,
}) => {
  const { checked, uid, handleChange, handleKeyDown } = useCheckbox({
    modelValue,
    id,
    disabled,
    onUpdate,
  });

  const classList = getCheckboxClassList(disabled, noEvents);

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
        name={name}
        required={required}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
        tabIndex={-1}
        ref={(el) => {
          if (el) el.indeterminate = indeterminate;
        }}
      />
      <span className="ui-form-checkbox-checkmark" />
      {label && <div className="ui-form-checkbox-text">{label}</div>}
    </label>
  );
};

export default Checkbox;
