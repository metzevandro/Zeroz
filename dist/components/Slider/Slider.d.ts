import "./Slider.scss";
import React from "react";
import { SliderProps } from "./Slider.types";
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
declare const Slider: React.FC<SliderProps>;
export default Slider;
