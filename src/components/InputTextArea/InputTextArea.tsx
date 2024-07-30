import React, { useRef, useState, useEffect } from "react";
import "./InputTextArea.scss";

interface TextAreaProps {
  placeholder: string;
  label: string;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  onChange?: (value: string) => void;
  value?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  label,
  disabled,
  error,
  errorText,
  onChange,
  value = "",
}) => {
  const [internalValue, setInternalValue] = useState<string>(value);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleButtonClick = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event,
  ) => {
    const newValue = event.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="text-area-root">
      <label className="text-area-label">{label}</label>
      <div
        tabIndex={0}
        className={`text-area ${disabled && "disabled"} ${
          error && !disabled ? "error" : ""
        }`}
        onClick={handleButtonClick}
      >
        <textarea
          ref={textareaRef}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleInputChange}
          value={internalValue}
        />
      </div>
      {error && <p className="description">{errorText}</p>}
    </div>
  );
};

export default TextArea;
