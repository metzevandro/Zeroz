import "./InputNumber.scss";
import React, { useState } from "react";
import Icon from "../Icon/Icon";
import { InputNumberProps } from "./InputNumber.types";
import { useInputNumber } from "./hooks/useInputNumber";

/**
 * `InputNumber` is a numeric stepper input with increment and decrement buttons.
 *
 * Values are clamped within the `[min, max]` range on every interaction.
 * The component works in both controlled (`value` + `onChange`) and
 * uncontrolled modes. In uncontrolled mode, `min` is used as the initial value.
 *
 * The label is associated with the input via `htmlFor` / `id` (WCAG 2.1 SC 1.3.1).
 *
 * @example
 * ```tsx
 * // Uncontrolled with bounds
 * <InputNumber label="Quantity" min={1} max={10} onChange={console.log} />
 *
 * // Controlled
 * <InputNumber label="Quantity" value={qty} min={0} onChange={(v) => setQty(v)} />
 *
 * // Error state
 * <InputNumber label="Age" error textError="Value is required" />
 * ```
 */
const InputNumber: React.FC<InputNumberProps> = ({
  max,
  min,
  placeholder,
  disabled = false,
  label,
  onChange,
  error = false,
  textError,
  value,
}) => {
  const [isAddHover, setIsAddHover] = useState(false);
  const { uid, numero, increment, decrement, handleInputChange } =
    useInputNumber({
      min,
      max,
      value,
      onChange,
    });

  return (
    <div className="input-number-root">
      {label && (
        <label className="input-number-label" htmlFor={uid}>
          {label}
        </label>
      )}

      <div className={`input-number ${disabled ? "disabled" : ""}`}>
        <button disabled={disabled} className="subtract" onClick={decrement}>
          <Icon size="md" icon="remove" />
        </button>

        <input
          id={uid}
          className={`input ${error ? "error" : ""}`}
          type="number"
          inputMode="numeric"
          placeholder={placeholder}
          value={numero !== undefined ? numero : ""}
          max={max}
          min={min}
          disabled={disabled}
          onChange={handleInputChange}
          style={{
            borderRight: isAddHover
              ? "var(--s-border-width-hairline) solid var(--s-color-border-default-hover)"
              : "",
          }}
        />

        <button
          disabled={disabled}
          className="add"
          onClick={increment}
          onMouseEnter={() => setIsAddHover(true)}
          onMouseLeave={() => setIsAddHover(false)}
        >
          <Icon size="md" icon="add" />
        </button>
      </div>

      {error && <div className="textError">{textError}</div>}
    </div>
  );
};

export default InputNumber;
