'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Icon = require('./Icon-BUoiqqF-.js');

/**
 * Clamps a number between optional `min` and `max` bounds.
 * Returns the value unchanged when no bounds are defined.
 */
function clamp(value, min, max) {
    if (max !== undefined && value > max)
        return max;
    if (min !== undefined && value < min)
        return min;
    return value;
}
/**
 * Parses a string into a number.
 * Returns `undefined` when the string is empty or not a valid integer.
 */
function parseNumber(raw) {
    if (raw === "")
        return undefined;
    const parsed = parseInt(raw, 10);
    return isNaN(parsed) ? undefined : parsed;
}
/**
 * Returns the initial numeric value for the stepper.
 * Uses `min` as the starting point when defined, otherwise `undefined`.
 */
function resolveInitialValue(min) {
    return min !== undefined ? min : undefined;
}

/**
 * Manages the numeric state and interaction logic for `InputNumber`:
 * - Initializes from `min` or `undefined`
 * - Syncs internal state when the controlled `value` prop changes
 * - Clamps typed and stepped values within `[min, max]`
 * - Fires `onChange` only when the value actually changes
 * - Generates a stable accessible `id` for the label/input association
 */
function useInputNumber({ min, max, value, onChange, }) {
    const generatedId = React.useId();
    const uid = `input-number-${generatedId}`;
    const [numero, setNumero] = React.useState(() => resolveInitialValue(min));
    // Sync controlled value from outside
    React.useEffect(() => {
        if (value === undefined)
            return;
        setNumero(value);
    }, [value]);
    const emit = (next) => onChange?.(next);
    const increment = () => {
        setNumero((prev) => {
            const base = prev ?? min ?? 0;
            const next = clamp(base + 1, min, max);
            if (next === prev)
                return prev;
            emit(next);
            return next;
        });
    };
    const decrement = () => {
        setNumero((prev) => {
            const base = prev ?? min ?? 0;
            const next = clamp(base - 1, min, max);
            if (next === prev)
                return prev;
            emit(next);
            return next;
        });
    };
    const handleInputChange = (event) => {
        const raw = event.target.value;
        let next;
        if (raw === "") {
            next = undefined;
        }
        else {
            const parsed = parseNumber(raw);
            next =
                parsed !== undefined ? clamp(parsed, min, max) : (min ?? undefined);
        }
        setNumero(next);
        emit(next);
    };
    return { uid, numero, increment, decrement, handleInputChange };
}

/**
 * `InputNumber` is a numeric stepper input with increment and decrement buttons.
 *
 * Values are clamped within the `[min, max]` range on every interaction.
 * The component works in both controlled (`value` + `onChange`) and
 * uncontrolled modes. In uncontrolled mode, `min` is used as the initial value.
 *
 * The label is associated with the input via `htmlFor` / `id` (WCAG 2.1 SC 1.3.1).
 *
 * @example
 * ```tsx
 * // Uncontrolled with bounds
 * <InputNumber label="Quantity" min={1} max={10} onChange={console.log} />
 *
 * // Controlled
 * <InputNumber label="Quantity" value={qty} min={0} onChange={(v) => setQty(v)} />
 *
 * // Error state
 * <InputNumber label="Age" error textError="Value is required" />
 * ```
 */
const InputNumber = ({ max, min, placeholder, disabled = false, label, onChange, error = false, textError, value, }) => {
    const [isAddHover, setIsAddHover] = React.useState(false);
    const { uid, numero, increment, decrement, handleInputChange } = useInputNumber({
        min,
        max,
        value,
        onChange,
    });
    return (jsxRuntime.jsxs("div", { className: "input-number-root", children: [label && (jsxRuntime.jsx("label", { className: "input-number-label", htmlFor: uid, children: label })), jsxRuntime.jsxs("div", { className: `input-number ${disabled ? "disabled" : ""}`, children: [jsxRuntime.jsx("button", { disabled: disabled, className: "subtract", onClick: decrement, children: jsxRuntime.jsx(Icon.Icon, { size: "md", icon: "remove" }) }), jsxRuntime.jsx("input", { id: uid, className: `input ${error ? "error" : ""}`, type: "number", inputMode: "numeric", placeholder: placeholder, value: numero !== undefined ? numero : "", max: max, min: min, disabled: disabled, onChange: handleInputChange, style: {
                            borderRight: isAddHover
                                ? "var(--s-border-width-hairline) solid var(--s-color-border-default-hover)"
                                : "",
                        } }), jsxRuntime.jsx("button", { disabled: disabled, className: "add", onClick: increment, onMouseEnter: () => setIsAddHover(true), onMouseLeave: () => setIsAddHover(false), children: jsxRuntime.jsx(Icon.Icon, { size: "md", icon: "add" }) })] }), error && jsxRuntime.jsx("div", { className: "textError", children: textError })] }));
};

exports.InputNumber = InputNumber;
