import React, { useState, useRef, useEffect } from "react";
import "./Slider.scss";
var Slider = function (_a) {
  var step = _a.step,
    min = _a.min,
    max = _a.max,
    value = _a.value,
    label = _a.label,
    onChange = _a.onChange;
  var _b = useState(((parseInt(value) - min) / (max - min)) * 100),
    progress = _b[0],
    setProgress = _b[1];
  var _c = useState(value),
    currentValue = _c[0],
    setCurrentValue = _c[1];
  var isDragging = useRef(false);
  useEffect(
    function () {
      var newValue = parseInt(value);
      setCurrentValue(value);
      setProgress(((newValue - min) / (max - min)) * 100);
    },
    [value, min, max],
  );
  var handleArrowKeyPress = function (e) {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      var change = e.key === "ArrowLeft" ? -step : step;
      var newValue = parseInt(currentValue) + change;
      var alignedValue = Math.round(newValue / step) * step;
      newValue = Math.min(Math.max(alignedValue, min), max);
      updateProgress(newValue);
    }
  };
  var updateProgress = function (newValue) {
    var clampedValue = Math.min(Math.max(newValue, min), max);
    setProgress(((clampedValue - min) / (max - min)) * 100);
    setCurrentValue(String(clampedValue));
    if (onChange) {
      onChange(String(clampedValue));
    }
  };
  var handleDragStart = function (e) {
    isDragging.current = true;
    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("touchmove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchend", handleDragEnd);
    if (e instanceof MouseEvent) {
      var clientX = e.clientX,
        clientY = e.clientY;
      handleDragMove({ clientX: clientX, clientY: clientY });
    } else if (e instanceof TouchEvent) {
      var touches = e.touches;
      if (touches.length > 0) {
        var _a = touches[0],
          clientX = _a.clientX,
          clientY = _a.clientY;
        handleDragMove({ clientX: clientX, clientY: clientY });
      }
    }
  };
  var handleSliderClick = function (e) {
    handleDragStart(e);
  };
  var handleDragMove = function (e) {
    var clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
    var clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
    if (isDragging.current) {
      var slider = document.getElementById("slider-background");
      if (slider) {
        var rect = slider.getBoundingClientRect();
        var mouseX = clientX - rect.left;
        var rawPercentage = (mouseX / rect.width) * 100;
        if (rawPercentage > 100) {
          rawPercentage = 100;
        } else if (rawPercentage < 0) {
          rawPercentage = 0;
        }
        var calculatedValue = (rawPercentage / 100) * (max - min) + min;
        var alignedValue = Math.round(calculatedValue / step) * step;
        updateProgress(alignedValue);
      }
    }
  };
  var handleDragEnd = function () {
    isDragging.current = false;
    window.removeEventListener("mousemove", handleDragMove);
    window.removeEventListener("touchmove", handleDragMove);
    window.removeEventListener("mouseup", handleDragEnd);
    window.removeEventListener("touchend", handleDragEnd);
  };
  var handleInputChange = function (e) {
    var newValue = parseInt(e.target.value);
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
            onMouseDown={function (e) {
              return handleSliderClick(e);
            }}
          >
            <div
              className="slider-progress-bar"
              style={{ width: "".concat(progress, "%") }}
            ></div>
            <div
              className="slider-button"
              tabIndex={0}
              style={{ left: "calc(".concat(progress, "% - 10px)") }}
              onKeyDown={handleArrowKeyPress}
            ></div>
          </div>
        </div>

        <div className="slider-max-min">{max}</div>
        <input
          inputMode="numeric"
          className="slider-input"
          type="number"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          onChange={handleInputChange}
          id="sliderInput"
        />
      </div>
    </div>
  );
};
export default Slider;
