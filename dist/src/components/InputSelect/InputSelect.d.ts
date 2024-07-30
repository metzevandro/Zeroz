import React from "react";
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
declare const InputSelect: React.FC<InputSelectProps>;
export default InputSelect;
