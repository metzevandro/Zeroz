import React, { useRef, useState, useEffect } from "react";
import "./InputTextArea.scss";

interface TextAreaProps {
  placeholder: string;
  label: string;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  label,
  disabled = false,
  error = false,
  errorText = "",
  onChange,
  value = "",
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInternalValue(newValue);
    onChange?.(event); 
  };

  const handleFocusClick = () => {
    textareaRef.current?.focus();
  };

  return (
    <div className="text-area-root">
      <label className="text-area-label">{label}</label>

      <div
        tabIndex={0}
        className={`text-area ${disabled ? "disabled" : ""} ${
          error && !disabled ? "error" : ""
        }`}
        onClick={handleFocusClick}
      >
        <textarea
          ref={textareaRef}
          placeholder={placeholder}
          disabled={disabled}
          value={internalValue}
          onChange={handleInputChange}
        />
      </div>

      {error && <p className="description">{errorText}</p>}
    </div>
  );
};

export default TextArea;
