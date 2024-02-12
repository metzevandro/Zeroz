import React, { useState, useRef, useEffect } from "react";
import "./Slider.scss";

interface SliderProps {
  step: number;
  min: number;
  max: number;
  value: string;
  label?: string;
  onChange?: (value: string) => void;
}

const Slider: React.FC<SliderProps> = ({
  step,
  min,
  max,
  value,
  label,
  onChange,
}) => {
  const [progress, setProgress] = useState<number>(
    ((parseInt(value) - min) / (max - min)) * 100
  );
  const [currentValue, setCurrentValue] = useState<string>(value);
  const buttonRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const newValue = parseInt(value);
    setCurrentValue(value);
    setProgress(((newValue - min) / (max - min)) * 100);
  }, [value, min, max]);

  const handleArrowKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();

      const change = e.key === "ArrowLeft" ? -step : step;
      let newValue = parseInt(currentValue) + change;

      const alignedValue = Math.round(newValue / step) * step;
      newValue = Math.min(Math.max(alignedValue, min), max);

      updateProgress(newValue);
    }
  };

  const updateProgress = (newValue: number) => {
    const clampedValue = Math.min(Math.max(newValue, min), max);
    setProgress(((clampedValue - min) / (max - min)) * 100);
    setCurrentValue(String(clampedValue));

    if (onChange) {
      onChange(String(clampedValue));
    }
  };

  const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleDragStart(e);
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);

    handleDragMove(e.nativeEvent);
  };

  const handleDragMove = (e: MouseEvent) => {
    if (isDragging.current) {
      const slider = document.getElementById("slider-background");
      if (slider) {
        const rect = slider.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        let rawPercentage = (mouseX / rect.width) * 100;

        if (rawPercentage > 100) {
          rawPercentage = 100;
        } else if (rawPercentage < 0) {
          rawPercentage = 0;
        }

        const calculatedStep = Math.round(rawPercentage / step) * step;

        if (calculatedStep >= 0 && calculatedStep <= 100) {
          const calculatedValue = (calculatedStep / 100) * (max - min) + min;
          const alignedValue = Math.round(calculatedValue / step) * step;
          updateProgress(alignedValue);
        }
      }
    }
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    window.removeEventListener("mousemove", handleDragMove);
    window.removeEventListener("mouseup", handleDragEnd);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    updateProgress(newValue);
  };

  return (
    <div className="slider">
      <label className="slider-label" htmlFor="sliderInput">
        {label}
      </label>
      <div className="slider-container">
        <div className="slider-max-min">{min}</div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            cursor: "grabbing",
          }}
        >
          <div
            id="slider-background"
            className="slider-background"
            onMouseDown={(e) => handleSliderClick(e)}
          >
            <div
              className="slider-progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
            <div
              className="slider-button"
              tabIndex={0}
              style={{ left: `calc(${progress}% - 10px)` }}
              ref={buttonRef}
              onKeyDown={handleArrowKeyPress}
            ></div>
          </div>
        </div>

        <div className="slider-max-min">{max}</div>
        <input
          className="slider-input"
          type="number"
          min={min}
          max={max}
          value={currentValue}
          onChange={handleInputChange}
          id="sliderInput"
        />
      </div>
    </div>
  );
};

export default Slider;
