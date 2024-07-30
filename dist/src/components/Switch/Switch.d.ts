import React from "react";
import "./Switch.scss";
interface SwitchProps {
    modelValue?: any;
    value?: any;
    label?: string;
    id?: string;
    name?: string;
    required?: boolean;
    noEvents?: boolean;
    disabled?: boolean;
    onUpdate?: (val: any) => void;
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;
