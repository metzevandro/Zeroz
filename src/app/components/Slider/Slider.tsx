import React, { useState, useRef, useEffect } from "react";
import "./Slider.scss";

interface SliderProps {
  step: number;
  min: number;
  max: number;
  value: number;
  label?: string;
}

const Slider: React.FC<SliderProps> = ({ step, min, max, value, label }) => {
  const percentage = ((value - min) / (max - min)) * 100;
  const [progress, setProgress] = useState(percentage);
  const numberRef = useRef<HTMLDivElement>(null);
  const [editingValue, setEditingValue] = useState("");
  const [currentValue, setCurrentValue] = useState(value);
  const buttonRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  const handleArrowKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();

      const change = e.key === "ArrowLeft" ? -step : step;
      let newValue = currentValue + change;

      const alignedValue = Math.round(newValue / step) * step;

      newValue = Math.min(Math.max(alignedValue, min), max);

      updateProgress(newValue);

      setCurrentValue(newValue);
    }
  };

  const updateProgress = (newValue: number) => {
    const clampedValue = Math.min(Math.max(newValue, min), max);
    setProgress(((clampedValue - min) / (max - min)) * 100);

    if (numberRef.current) {
      numberRef.current.innerText = String(clampedValue);
    }
  };

  const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleDragStart(e);
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);

    handleDragMove(e);
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

          const steps = Math.round((calculatedValue - min) / step);
          const newValue = steps * step + min;

          updateProgress(newValue);
        }
      }
    }
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    window.removeEventListener("mousemove", handleDragMove);
    window.removeEventListener("mouseup", handleDragEnd);
  };

  const handleNumberInput = () => {
    if (numberRef.current) {
      let enteredValue = numberRef.current.innerText;
      const numericValue = enteredValue.replace(/[^0-9]/g, "");

      const parsedNumericValue = parseInt(numericValue);

      const clampedValue = isNaN(parsedNumericValue)
        ? min
        : Math.min(Math.max(parsedNumericValue, min), max);

      setEditingValue(String(clampedValue));
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateProgress(parseInt(editingValue));
      numberRef.current && (numberRef.current.innerText = editingValue);
    }
  };

  const handleInputBlur = () => {
    updateProgress(parseInt(editingValue));
    numberRef.current && (numberRef.current.innerText = editingValue);
  };

  return (
    <div className="slider">
      <label className="slider-label" htmlFor="sliderInput">
        {label}
      </label>
      <div className="slider-container">
        <div className="slider-max-min">{min}</div>
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
        <div className="slider-max-min">{max}</div>
        <div
          onBlur={handleInputBlur}
          onInput={handleNumberInput}
          className="slider-input"
          onKeyDown={handleInputKeyDown}
          contentEditable
          ref={numberRef}
          id="sliderInput"
        >
          {Math.round((progress / 100) * (max - min) + min)}
        </div>
      </div>
    </div>
  );
};

export default Slider;
