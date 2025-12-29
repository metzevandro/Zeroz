import "./DataPicker.scss";
declare function DataPicker({ value, onChange, label, disabled, skeleton, }: {
    value?: string;
    onChange: (value: string) => void;
    label: string;
    disabled?: boolean;
    skeleton?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export default DataPicker;
