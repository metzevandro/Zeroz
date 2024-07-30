import React from "react";
import "./InputRadioButton.scss";
interface InputRadioButtonProps {
    label?: string;
    disabled?: boolean;
    onChange?: (isChecked: boolean) => void;
    checked?: boolean;
}
declare const InputRadioButton: React.FC<InputRadioButtonProps>;
export default InputRadioButton;
