import React, { useEffect, useState, useRef } from "react";
import { ChromePicker, ColorResult } from "react-color";
import "./ColorPicker.scss";
import Button from "../Button/Button";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

interface ColorPickerProps {
  onChange: (color: string) => void;
  value: string;
  label: string;
  buttonLabel?: string;
  disabled?: boolean;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  onChange,
  value,
  label,
  buttonLabel,
  disabled,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    value.toUpperCase()
  );
  const [tempColor, setTempColor] = useState<string>(value.toUpperCase());
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedColor(value.toUpperCase());
    setTempColor(value.toUpperCase());
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node)
      ) {
        setOpenColorPicker(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleColorChange = (colorResult: ColorResult) => {
    const newColor = colorResult.hex.toUpperCase();
    setSelectedColor(newColor);
  };

  const handleApplyColor = () => {
    setTempColor(selectedColor);
    setOpenColorPicker(false);
    onChange(selectedColor);
  };

  const toggleColorPicker = () => {
    if (disabled) {
      return;
    } else {
      setOpenColorPicker(!openColorPicker);
    }
  };

  return (
    <div className="color-picker-root">
      <div className="color-picker-label">{label}</div>
      <div className="color-picker-input">
        {disabled ? (
          <ButtonIcon
            variant="secondary"
            disable={true}
            type="default"
            size="md"
            typeIcon="add"
          />
        ) : (
          <div
            className="color-preview"
            onClick={toggleColorPicker}
            style={{ backgroundColor: tempColor }}
          />
        )}
        <input
          disabled={disabled}
          size={0}
          onClick={toggleColorPicker}
          value={tempColor}
        />
      </div>
      {openColorPicker && (
        <div ref={colorPickerRef} className="color-picker">
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
