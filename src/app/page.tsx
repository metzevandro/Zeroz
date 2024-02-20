"use client";

import { useState } from "react";
import ColorPicker from "./components/ColorPicker/ColorPicker";
type FormValuesType = {
  [key: string]:
    | string
    | boolean
    | number
    | File[]
    | FileList
    | null
    | undefined;
};
export default function Home() {
  const [formValues, setFormValues] = useState<FormValuesType>({
    Input: "",
    "Input Select": "Option 1",
    "Input Number": "0",
    ImageUploader: null,
    FileUploader: null,
    Checkbox: false,
    Switch: false,
    "Radio Button": false,
    "Input do DataPicker": "",
    ColorPicker: "#FFFFFF",
    Slider: "0",
    "Input Time": "",
    "Text Area": "",
  });
  const handleColorChange = (color: string) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      ColorPicker: color,
    }));
  };
  return (
    <ColorPicker
      label="Color Picker"
      value={String(formValues.ColorPicker)}
      onChange={handleColorChange}
    />
  );
}
