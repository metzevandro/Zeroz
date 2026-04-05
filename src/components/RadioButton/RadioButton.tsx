import "./RadioButton.scss";
import React from "react";
import { RadioButtonProps } from "./RadioButton.types";
import { useRadioButton } from "./hooks/useRadioButton";
import { getRadioButtonClass, getLabelClass } from "./utils/radioButton.utils";

/**
 * `RadioButton` is an accessible radio input with optional label.
 *
 * Supports controlled usage via `checked` + `onChange`, disabled state,
 * and keyboard activation via Enter and Space.
 *
 * The `<label>` is associated with the radio via `htmlFor` / `id`
 * for full accessibility compliance (WCAG 2.1 SC 1.3.1).
 *
 * > **Note:** For mutually exclusive options, use multiple `RadioButton`
 * > components and manage the selected value externally — only one
 * > should be `checked` at a time.
 *
 * @example
 * ```tsx
 * // Controlled group
 * <RadioButton label="Option A" checked={selected === "a"} onChange={() => setSelected("a")} />
 * <RadioButton label="Option B" checked={selected === "b"} onChange={() => setSelected("b")} />
 *
 * // Disabled
 * <RadioButton label="Unavailable" disabled />
 * ```
 */
const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  disabled = false,
  checked,
  onChange,
}) => {
  const { uid, isChecked, toggle, handleKeyDown } = useRadioButton({
    checked,
    disabled,
    onChange,
  });

  return (
    <div className={`radio-button-root ${disabled ? "disable" : ""}`}>
      <div
        id={uid}
        className={getRadioButtonClass(disabled, isChecked)}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        role="radio"
        aria-checked={isChecked}
        aria-labelledby={label ? `${uid}-label` : undefined}
        tabIndex={disabled ? -1 : 0}
      >
        <span className={`radio-circle ${isChecked ? "checked-circle" : ""}`} />
      </div>

      {label && (
        <label
          id={`${uid}-label`}
          htmlFor={uid}
          className={getLabelClass(disabled)}
          onClick={toggle}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default RadioButton;
