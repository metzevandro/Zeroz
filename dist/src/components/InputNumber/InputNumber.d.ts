import React from "react";
import "./InputNumber.scss";
interface InputNumberProps {
    max?: number;
    min?: number;
    placeholder?: string;
    disabled?: boolean;
    label?: string;
    onChange?: (value: string) => void;
    error?: boolean;
    textError?: string;
    value?: string;
}
declare const InputNumber: React.FC<InputNumberProps>;
export default InputNumber;
