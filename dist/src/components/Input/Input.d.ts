import React, { InputHTMLAttributes } from "react";
import "./Input.scss";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    typeIcon?: string;
    fillIcon?: boolean;
    label?: string;
    error?: boolean;
    disabled?: boolean;
    textError?: string;
    value?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    skeleton?: boolean;
}
declare const Input: React.FC<InputProps>;
export default Input;
