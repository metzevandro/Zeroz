import React from "react";
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
declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
