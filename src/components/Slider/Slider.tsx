import "./Slider.scss";
import React from "react";
import { SliderProps } from "./Slider.types";
import { useSlider } from "./hooks/useSlider";
import { toPercent } from "./utils/slider.utils";

/**
 * `Slider` is a range input with a custom drag handle, track fill,
 * min/max labels, and a companion numeric input.
 *
 * Interaction is supported via mouse drag, touch drag, arrow keys,
 * and direct numeric input. All values are snapped to `step` and
 * clamped within `[min, max]`.
 *
 * `value` and `onChange` use `number` — no string parsing needed on
 * the consumer side.
 *
 * @example
 * ```tsx
 * const [volume, setVolume] = useState(50);
 *
 * <Slider
 *   label="Volume"
 *   min={0}
 *   max={100}
 *   step={1}
 *   value={volume}
 *   onChange={setVolume}
 * />
 * ```
 */
const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step,
  value,
  label,
  onChange,
}) => {
  const {
    uid,
    trackRef,
    handleTrackInteraction,
    handleKeyDown,
    handleInputChange,
  } = useSlider({ value, step, min, max, onChange });

  const percent = toPercent(value, min, max);

  // The label element id is used by aria-labelledby on the slider handle
  // so screen readers announce e.g. "Volume, slider, 50" instead of just "slider, 50".
  // When no label is provided, aria-label falls back to "Slider".
  const labelId = label ? `${uid}-label` : undefined;

  return (
    <div className="slider">
      {label && (
        <label id={labelId} className="slider-label" htmlFor={uid}>
          {label}
        </label>
      )}

      <div className="slider-container">
        <span className="slider-max-min">{min}</span>

        <div className="slider-track-wrapper">
          <div
            ref={trackRef}
            className="slider-background"
            onMouseDown={handleTrackInteraction}
          >
            <div
              className="slider-progress-bar"
              style={{ width: `${percent}%` }}
            />
            <div
              className="slider-button"
              role="slider"
              tabIndex={0}
              aria-valuenow={value}
              aria-valuemin={min}
              aria-valuemax={max}
              aria-labelledby={labelId}
              aria-label={labelId ? undefined : "Slider"}
              style={{ left: `calc(${percent}% - 8px)` }}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>

        <span className="slider-max-min">{max}</span>

        <input
          id={uid}
          className="slider-input"
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Slider;
