import React, { useState, useRef, useEffect } from "react";
import "./InputSelect.scss";

interface InputSelectProps {
  options: string[];
  placeholder: string;
  disabled?: boolean;
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

const InputSelect: React.FC<InputSelectProps> = ({
  options,
  label,
  error,
  errorMessage,
  disabled,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      isOpen &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="input-select-root">
      <div className="input-select-label">{label}</div>
      <div className="input-select">
        <div
          className={`input-select-button ${selectedOption && "option"} ${
            error && "error"
          } ${disabled && "disabled"}`}
        >
          <select
            className={`${error && "select-error"}`}
            placeholder="Escolha"
            onChange={handleOptionChange}
            disabled={disabled || error}
          >
            <option value="" disabled selected>
              {placeholder}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      {error && <p className="input-select-error-message">{errorMessage}</p>}
    </div>
  );
};

export default InputSelect;
