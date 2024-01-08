import React, { useState, useEffect } from "react";
import "./InputTime.scss";
import Input from "../Input/Input";

interface InputTimerProps {
  label: string;
  placeholder: string;
  disabled?: boolean;
}

const InputTime: React.FC<InputTimerProps> = ({
  label,
  placeholder,
  disabled,
  ...rest
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState("00");
  const [selectedMinute, setSelectedMinute] = useState("00");

  const [totalTime, setTotalTime] = useState<string>("00:00");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const newValue = event.target.value;
    const [newHour, newMinute] = newValue.split(":");
    setSelectedHour(newHour);
    setSelectedMinute(newMinute);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (isModalOpen && !target.closest(".input-time")) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

  useEffect(() => {
    setTotalTime(`${selectedHour}:${selectedMinute}`);
  }, [selectedHour, selectedMinute]);

  const renderButtons = (maxValue: number, isHour: boolean) => {
    const buttons = [];
    for (let i = 0; i <= maxValue; i++) {
      const formattedValue = i < 10 ? `0${i}` : `${i}`;
      buttons.push(
        <button
          key={formattedValue}
          className="input-time-buttons"
          onClick={() => handleButtonClick(formattedValue, isHour)}
        >
          {formattedValue}
        </button>
      );
    }
    return buttons;
  };

  const handleButtonClick = (value: string, isHour: boolean) => {
    if (isHour) {
      setSelectedHour(value);
    } else {
      setSelectedMinute(value);
    }
  };

  return (
    <div className="input-time">
      <Input
        label={label}
        type="text"
        value={totalTime}
        placeholder={placeholder}
        typeIcon="schedule"
        disabled={disabled}
        onClick={openModal}
        onChange={handleInputChange}
        {...rest}
      />
      {isModalOpen && (
        <div className="input-time-modal">
          <div className="modal-section">{renderButtons(24, true)}</div>
          <div className="modal-section">{renderButtons(60, false)}</div>
        </div>
      )}
    </div>
  );
};

export default InputTime;
