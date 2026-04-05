'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

/**
 * Clamps `value` within `[min, max]`.
 */
function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}
/**
 * Snaps `value` to the nearest multiple of `step`, then clamps within `[min, max]`.
 */
function snapToStep(value, step, min, max) {
    const snapped = Math.round(value / step) * step;
    return clamp(snapped, min, max);
}
/**
 * Converts a slider value to a CSS fill percentage (0–100).
 */
function toPercent(value, min, max) {
    if (max === min)
        return 0;
    return ((value - min) / (max - min)) * 100;
}
/**
 * Converts a raw pixel offset within the track rect to a snapped slider value.
 */
function pixelToValue(clientX, rect, step, min, max) {
    const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
    const raw = ratio * (max - min) + min;
    return snapToStep(raw, step, min, max);
}

/**
 * Manages all interaction logic for `Slider`:
 * - Mouse drag (mousedown → mousemove → mouseup on `window`)
 * - Touch drag (touchstart → touchmove → touchend on `window`)
 * - Track click (resolves position instantly)
 * - Arrow key navigation (Left / Right with step)
 * - Direct numeric input
 *
 * Uses a single `trackRef` to measure the track rect — avoids the
 * brittle `document.getElementById("slider-background")` lookup from the original.
 */
function useSlider({ value, step, min, max, onChange, }) {
    const trackRef = React.useRef(null);
    const isDragging = React.useRef(false);
    const uid = `slider-${React.useId()}`;
    const emit = (newValue) => onChange?.(newValue);
    const updateFromClientX = (clientX) => {
        if (!trackRef.current)
            return;
        const next = pixelToValue(clientX, trackRef.current.getBoundingClientRect(), step, min, max);
        emit(next);
    };
    const handleMouseMove = (e) => updateFromClientX(e.clientX);
    const handleTouchMove = (e) => {
        if (e.touches.length > 0)
            updateFromClientX(e.touches[0].clientX);
    };
    const handleDragEnd = () => {
        isDragging.current = false;
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("mouseup", handleDragEnd);
        window.removeEventListener("touchend", handleDragEnd);
    };
    const startDrag = (clientX) => {
        isDragging.current = true;
        updateFromClientX(clientX);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("mouseup", handleDragEnd);
        window.addEventListener("touchend", handleDragEnd);
    };
    const handleTrackInteraction = (e) => {
        startDrag(e.clientX);
    };
    const handleKeyDown = (e) => {
        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight")
            return;
        e.preventDefault();
        const delta = e.key === "ArrowLeft" ? -step : step;
        const next = snapToStep(value + delta, step, min, max);
        emit(next);
    };
    const handleInputChange = (e) => {
        const parsed = parseFloat(e.target.value);
        if (!isNaN(parsed))
            emit(snapToStep(parsed, step, min, max));
    };
    return {
        uid,
        trackRef,
        handleTrackInteraction,
        handleKeyDown,
        handleInputChange,
    };
}

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
const Slider = ({ min, max, step, value, label, onChange, }) => {
    const { uid, trackRef, handleTrackInteraction, handleKeyDown, handleInputChange, } = useSlider({ value, step, min, max, onChange });
    const percent = toPercent(value, min, max);
    // The label element id is used by aria-labelledby on the slider handle
    // so screen readers announce e.g. "Volume, slider, 50" instead of just "slider, 50".
    // When no label is provided, aria-label falls back to "Slider".
    const labelId = label ? `${uid}-label` : undefined;
    return (jsxRuntime.jsxs("div", { className: "slider", children: [label && (jsxRuntime.jsx("label", { id: labelId, className: "slider-label", htmlFor: uid, children: label })), jsxRuntime.jsxs("div", { className: "slider-container", children: [jsxRuntime.jsx("span", { className: "slider-max-min", children: min }), jsxRuntime.jsx("div", { className: "slider-track-wrapper", children: jsxRuntime.jsxs("div", { ref: trackRef, className: "slider-background", onMouseDown: handleTrackInteraction, children: [jsxRuntime.jsx("div", { className: "slider-progress-bar", style: { width: `${percent}%` } }), jsxRuntime.jsx("div", { className: "slider-button", role: "slider", tabIndex: 0, "aria-valuenow": value, "aria-valuemin": min, "aria-valuemax": max, "aria-labelledby": labelId, "aria-label": labelId ? undefined : "Slider", style: { left: `calc(${percent}% - 8px)` }, onKeyDown: handleKeyDown })] }) }), jsxRuntime.jsx("span", { className: "slider-max-min", children: max }), jsxRuntime.jsx("input", { id: uid, className: "slider-input", type: "number", inputMode: "numeric", min: min, max: max, step: step, value: value, onChange: handleInputChange })] })] }));
};

exports.Slider = Slider;
