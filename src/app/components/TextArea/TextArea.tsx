import React, { useRef } from "react";
import "./TextArea.scss";

interface TextAreaProps {
  placeholder: string;
  label: string;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  label,
  disabled,
  error,
  errorText,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleButtonClick = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
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
        />
      </div>
      {error && <p className="description">{errorText}</p>}
    </div>
  );
};

export default TextArea;
