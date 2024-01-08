import React, { useEffect } from "react";
import "./ColorPicker.scss";
import Pickr from "@simonwep/pickr";
import "@simonwep/pickr/dist/themes/monolith.min.css";
import Input from "../Input/Input";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

interface ColorPickerProps {
  label: string;
  disabled?: boolean;
}

function ColorPicker(props: ColorPickerProps) {
  const [pickr, setPickr] = React.useState<Pickr | null>(null);
  const [currentColor, setCurrentColor] = React.useState<string>("");
  const [inputClass, setInputClass] = React.useState<string>("");

  useEffect(() => {
    let pickrInstance: Pickr | null = null;

    const initColorPicker = () => {
      const pickrInstance = Pickr.create({
        el: ".pickr",
        padding: 8,
        default: "default",
        theme: "monolith",
        position: "bottom-start",
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
        setCurrentColor(color.toHEXA().toString());
        setInputClass(color ? "color-defined" : "");
      });

      pickrInstance.on("save", () => {
        if (pickrInstance) {
          pickrInstance.setColor(currentColor || "");
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
            variant=""
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
            value={currentColor}
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
