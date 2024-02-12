import React, { useRef } from "react";
import "./InputTextArea.scss";

interface TextAreaProps {
  placeholder: string;
  label: string;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  onChange?: (value: string) => void; // Adicionando a prop onChange
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  label,
  disabled,
  error,
  errorText,
  onChange, // Recebendo a prop onChange
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleButtonClick = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const newValue = event.target.value;
    if (onChange) {
      onChange(newValue); // Chamando a função onChange passando o novo valor
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
          disabled={disabled || error}
          onChange={handleInputChange}
        />
      </div>
      {error && <p className="description">{errorText}</p>}
    </div>
  );
};

export default TextArea;
