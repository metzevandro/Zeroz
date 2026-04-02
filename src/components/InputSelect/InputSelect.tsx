import "./InputSelect.scss";
import React from "react";
import Icon from "../Icon/Icon";
import { InputSelectProps } from "./InputSelect.types";
import { useInputSelect } from "./hooks/useInputSelect";
import { getTriggerClass } from "./utils/inputSelect.utils";
import { SelectDropdown } from "./subcomponents/SelectDropdown";

/**
 * `InputSelect` is a fully custom select field with a styled dropdown panel.
 *
 * Unlike a native `<select>`, this component renders its own option list,
 * giving you full visual control on both desktop and mobile — no OS picker,
 * no unstyled native dropdown.
 *
 * Supports controlled usage via `value` + `onChange`, error and disabled states,
 * keyboard navigation (Enter/Space to open, Escape to close), and accessible
 * label association via `aria-labelledby`.
 *
 * @example
 * ```tsx
 * <InputSelect
 *   label="Country"
 *   options={["Brazil", "USA", "Portugal"]}
 *   value={country}
 *   onChange={setCountry}
 * />
 * ```
 */
const InputSelect: React.FC<InputSelectProps> = ({
  options,
  label,
  error = false,
  errorMessage,
  disabled = false,
  onChange,
  value,
}) => {
  const {
    uid,
    isOpen,
    selectedOption,
    dropdownRef,
    triggerRef,
    open,
    close,
    selectOption,
    handleKeyDown,
  } = useInputSelect({ value, disabled, error, onChange });

  const labelId = label ? `${uid}-label` : undefined;

  return (
    <div className="input-select-root" ref={dropdownRef}>
      {label && (
        <label id={labelId} className="input-select-label" htmlFor={uid}>
          {label}
        </label>
      )}

      <div className="input-select">
        <button
          id={uid}
          ref={triggerRef}
          type="button"
          className={getTriggerClass(!!selectedOption, error, disabled)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={labelId}
          disabled={disabled || error}
          onClick={isOpen ? close : open}
          onKeyDown={handleKeyDown}
        >
          <span className={selectedOption ? "" : "input-select-placeholder"}>
            {selectedOption ?? label ?? "Select an option"}
          </span>
          <Icon
            icon="keyboard_arrow_down"
            size="sm"
          />
        </button>

        {isOpen && (
          <SelectDropdown
            options={options}
            selected={selectedOption}
            onSelect={selectOption}
          />
        )}
      </div>

      {error && errorMessage && (
        <p className="input-select-error-message">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputSelect;