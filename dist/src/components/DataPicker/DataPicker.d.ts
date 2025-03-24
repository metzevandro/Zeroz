import React from "react";
import "./DataPicker.scss";
declare function DataPicker({ value, onChange, label, disabled, skeleton, }: {
    value?: string;
    onChange: (value: string) => void;
    label: string;
    disabled?: boolean;
    skeleton?: boolean;
}): React.JSX.Element;
export default DataPicker;
