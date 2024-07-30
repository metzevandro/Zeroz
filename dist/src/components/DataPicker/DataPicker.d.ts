import React from "react";
import "./DataPicker.scss";
interface DataPickerProps {
  label: string;
  placeholder: string;
  disabled?: boolean;
  onDateChange: (date: Date) => void;
  date: string;
}
declare const DataPicker: React.FC<DataPickerProps>;
export default DataPicker;
