import React, { useState, useEffect, useCallback, useRef } from "react";
import "./InputTime.scss";
import Input from "../Input/Input";

interface InputTimeProps {
  label: string;
  placeholder: string;
  disabled?: boolean;
  error?: boolean;
  textError?: string;
  onChange: (value: string) => void;
  value?: string;
}

const InputTime: React.FC<InputTimeProps> = ({
  label,
  placeholder,
  disabled,
  error,
  textError,
  onChange,
  value: controlledValue,
  ...rest
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (controlledValue) {
      const [hour, minute] = controlledValue.split(":");
      setSelectedHour(hour);
      setSelectedMinute(minute);
    }
  }, [controlledValue]);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    let newValue = event.target.value;

    newValue = newValue.replace(/[^\d:]/g, "");

    if (newValue.length > 5) {
      newValue = newValue.substring(0, 5);
    }

    event.target.value = newValue;

    onChange(newValue);
  };

  const renderButtons = useCallback(
    (maxValue: number, isHour: boolean) => {
      const buttons = [];
      for (let i = 0; i <= maxValue; i++) {
        const formattedValue = i < 10 ? `0${i}` : `${i}`;
        buttons.push(
          <button
            key={formattedValue}
            className="input-time-buttons"
            onClick={() => {
              if (isHour) {
                setSelectedHour(formattedValue);
                onChange(`${formattedValue}:${selectedMinute}`);
              } else {
                setSelectedMinute(formattedValue);
                onChange(`${selectedHour}:${formattedValue}`);
              }
            }}
            aria-label={formattedValue}
          >
            {formattedValue}
          </button>
        );
      }
      return buttons;
    },
    [onChange, selectedHour, selectedMinute]
  );

  return (
    <div className="input-time">
      <Input
        label={label}
        type="text"
        value={
          controlledValue !== undefined && controlledValue !== null
            ? controlledValue
            : selectedHour && selectedMinute
            ? `${selectedHour}:${selectedMinute}`
            : ""
        }
        placeholder={placeholder}
        typeIcon="schedule"
        disabled={disabled}
        onClick={openModal}
        onChange={handleInputChange}
        error={error}
        textError={textError}
        inputMode="numeric"
        pattern="[0-9]*"
        {...rest}
      />
      {isModalOpen && (
        <div className="input-time-modal" ref={modalRef}>
          <div className="modal-section">{renderButtons(23, true)}</div>
          <div className="modal-section">{renderButtons(59, false)}</div>
        </div>
      )}
    </div>
  );
};

export default InputTime;
