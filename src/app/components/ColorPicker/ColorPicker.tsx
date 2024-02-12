import React, { useEffect, useState, useRef } from "react";
import "./ColorPicker.scss";
import Pickr from "@simonwep/pickr";
import "@simonwep/pickr/dist/themes/monolith.min.css";
import Input from "../Input/Input";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

interface ColorPickerProps {
  label: string;
  disabled?: boolean;
  onChange?: (color: string) => void;
  value?: string;
}

function ColorPicker(props: ColorPickerProps) {
  const [pickr, setPickr] = useState<Pickr | null>(null);
  const [currentColor, setCurrentColor] = useState<string>(props.value || "");
  const [inputValue, setInputValue] = useState<string>(props.value || "");
  const [inputClass, setInputClass] = useState<string>(
    props.value ? "color-defined" : ""
  );
  const previousValueRef = useRef<string | undefined>();

  useEffect(() => {
    if (previousValueRef.current !== props.value) {
      setCurrentColor(props.value || "");
      setInputValue(props.value || "");
      setInputClass(props.value ? "color-defined" : "");
      if (pickr && props.value) {
        pickr.setColor(props.value);
      }
      previousValueRef.current = props.value;
    }
  }, [props.value]);

  useEffect(() => {
    let pickrInstance: Pickr | null = null;

    const initColorPicker = () => {
      pickrInstance = Pickr.create({
        el: ".pickr",
        padding: 8,
        theme: "monolith",
        position: "bottom-start",
        default: props.value,
        disabled: props.disabled,
        components: {
          preview: true,
          opacity: true,
          hue: true,
          interaction: {
            input: true,
            save: true,
          },
        },
        i18n: {
          "btn:save": "Aplicar",
        },
      });

      pickrInstance.on("change", (color: Pickr.HSVaColor) => {
        const hexColor = color.toHEXA().toString();
        setCurrentColor(hexColor);
        setInputClass(hexColor ? "color-defined" : "");
      });

      pickrInstance.on("save", () => {
        if (pickrInstance) {
          const hexColor = pickrInstance.getColor().toHEXA().toString();
          setCurrentColor(hexColor);
          setInputValue(hexColor);
          setInputClass(hexColor ? "color-defined" : "");
          if (props.onChange) {
            props.onChange(hexColor);
          }
          if (pickrInstance.isOpen()) {
            pickrInstance.hide();
          }
        }
      });

      setPickr(pickrInstance);
    };

    if (document.readyState === "complete") {
      initColorPicker();
    } else {
      window.addEventListener("load", initColorPicker);
    }

    return () => {
      if (pickrInstance) {
        if (pickrInstance.isOpen()) {
          pickrInstance.hide();
        }
        pickrInstance.destroyAndRemove();
      }
      window.removeEventListener("load", initColorPicker);
    };
  }, []);

  const handleInputClick = () => {
    if (pickr) {
      pickr.show();
    }
  };

  return (
    <div className="color-picker">
      <div className="color-picker-label">{props.label}</div>
      <div className="color-picker-content">
        <div className={`pickr ${props.disabled ? "disabled" : ""}`}></div>
        <div
          className={`color-picker-button-icon ${
            props.disabled ? "" : "disabled"
          }`}
        >
          <ButtonIcon
            variant="primary"
            size="md"
            typeIcon="add"
            type="default"
            disable={props.disabled}
          />
        </div>
        <div className="color-picker-input">
          <Input
            disabled={props.disabled}
            type="text"
            value={inputValue}
            readOnly
            onClick={handleInputClick}
            className={inputClass}
            placeholder="#000000"
          />
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
