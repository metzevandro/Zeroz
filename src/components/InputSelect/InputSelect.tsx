import React, { useState, useRef, useEffect } from "react";
import "./InputSelect.scss";

interface InputSelectProps {
  options: string[];
  disabled?: boolean;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  onChange: (value: string) => void;
  value?: string;
}

const InputSelect: React.FC<InputSelectProps> = ({
  options,
  label,
  error,
  errorMessage,
  disabled,
  onChange,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    value || undefined,
  ); // Defina o valor inicial com a propriedade value

  useEffect(() => {
    // Atualiza o estado selectedOption quando a propriedade value mudar
    setSelectedOption(value || undefined);
  }, [value]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    onChange(newValue);
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      isOpen &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
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
            value={selectedOption || ""}
            onChange={handleOptionChange}
            disabled={disabled || error}
          >
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
