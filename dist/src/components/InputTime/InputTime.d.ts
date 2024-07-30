import React from "react";
import "./InputTime.scss";
interface InputTimeProps {
  label: string;
  placeholder: string;
  disabled?: boolean;
  error?: boolean;
  textError?: string;
  onChange: (value: string) => void;
  value?: string;
}
declare const InputTime: React.FC<InputTimeProps>;
export default InputTime;
