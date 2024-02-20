"use client";
import { useState } from "react";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import "../scss/tokens/tokens.scss";
export default function Home() {
  const [selectedColor, setSelectedColor] = useState<string>("#ffffff");

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };
  return (
    <ColorPicker disabled={true} label="label" onChange={handleColorChange} value="#ffffff" />
  );
}
