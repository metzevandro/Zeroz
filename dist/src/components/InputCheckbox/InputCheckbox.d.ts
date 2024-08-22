import React from "react";
import "./InputCheckbox.scss";
interface CheckboxProps {
    modelValue?: any;
    value?: any;
    label?: string;
    id?: string;
    name?: string;
    required?: boolean;
    indeterminate?: boolean;
    noEvents?: boolean;
    disabled?: boolean;
    onUpdate?: (val: any) => void;
}
declare const InputCheckbox: React.FC<CheckboxProps>;
export default InputCheckbox;
