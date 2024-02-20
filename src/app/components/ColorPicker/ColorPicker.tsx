import React, { useEffect, useState } from "react";
import { ChromePicker, ColorResult } from "react-color";
import "./ColorPicker.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

interface ColorPickerProps {
  onChange: (color: string) => void;
  value: string;
  label: string;
  buttonLabel?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  onChange,
  value,
  label,
  buttonLabel,
}) => {
  const [color, setColor] = useState<string>(value.toUpperCase());
  const [selectedColor, setSelectedColor] = useState<string>(
    value.toUpperCase()
  );

  useEffect(() => {
    setColor(value.toUpperCase());
    setSelectedColor(value.toUpperCase());
  }, [value]);

  const handleColorChange = (colorResult: ColorResult) => {
    const newColor = colorResult.hex.toUpperCase();
    setSelectedColor(newColor);
  };

  const handleApplyColor = () => {
    setColor(selectedColor);
    onChange(selectedColor);
    setOpenColorPicker(false);
  };

  const [openColorPicker, setOpenColorPicker] = useState(false);

  const toggleColorPicker = () => {
    setOpenColorPicker(!openColorPicker);
  };

  return (
    <div className="color-picker-root">
      <Input onClick={toggleColorPicker} label={label} value={color}></Input>
      {openColorPicker && (
        <div className="color-picker">
          <ChromePicker
            color={selectedColor}
            onChange={handleColorChange}
            disableAlpha={true}
          />
          <Button
            size="md"
            variant="primary"
            label={buttonLabel || "Apply"}
            onClick={handleApplyColor}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
