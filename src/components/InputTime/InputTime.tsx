import "./InputTime.scss";
import React, { useRef } from "react";
import Input from "../Input/Input";
import { InputTimeProps } from "./InputTime.types";
import { useInputTime } from "./hooks/useInputTime";
import { useClickOutside } from "./hooks/useClickOutside";
import { TimeColumn } from "./subcomponents/TimeColumn";
import { buildRange } from "./utils/inputTime.utils";

const HOURS = buildRange(23);
const MINUTES = buildRange(59);

/**
 * `InputTime` is a time selection field with a drum-roll picker dropdown.
 *
 * The picker uses an infinite scroll column (iOS-style) for both hours and
 * minutes — the list loops seamlessly so the user can scroll in either
 * direction without hitting a boundary. Items snap to the center on scroll end.
 *
 * The input also supports direct typing with auto-masking (`HH:MM`).
 *
 * @example
 * ```tsx
 * // Uncontrolled
 * <InputTime label="Start time" placeholder="HH:MM" onChange={console.log} />
 *
 * // Controlled
 * <InputTime label="Meeting time" placeholder="HH:MM" value={time} onChange={setTime} />
 * ```
 */
const InputTime: React.FC<InputTimeProps> = ({
  label,
  placeholder,
  disabled = false,
  error = false,
  textError,
  onChange,
  value,
  ...rest
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const {
    isOpen,
    selectedHour,
    selectedMinute,
    displayValue,
    togglePicker,
    closePicker,
    handleHourSelect,
    handleMinuteSelect,
    handleInputChange,
  } = useInputTime({ value, onChange });

  useClickOutside(modalRef, closePicker);

  return (
    <div className="input-time" ref={modalRef}>
      <Input
        label={label}
        type="text"
        value={displayValue}
        placeholder={placeholder}
        icon="schedule"
        disabled={disabled}
        onClick={togglePicker}
        onChange={handleInputChange}
        error={error}
        textError={textError}
        inputMode="numeric"
        pattern="[0-9]*"
        {...rest}
      />

      {isOpen && (
        <div className="input-time-modal">
          <div className="modal-section">
            <TimeColumn
              values={HOURS}
              selected={selectedHour}
              onSelect={handleHourSelect}
            />
          </div>
          <div className="modal-section">
            <TimeColumn
              values={MINUTES}
              selected={selectedMinute}
              onSelect={handleMinuteSelect}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InputTime;
