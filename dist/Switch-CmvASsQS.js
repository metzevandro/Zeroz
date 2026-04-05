'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

/**
 * Manages the internal state and interaction logic for `Switch`:
 * - Syncs internal checked state when `modelValue` changes externally
 * - Generates a stable unique `id` via `useId()` when none is provided
 * - Handles toggle on change and on Enter key press
 * - Guards `handleChange` against disabled state
 */
function useSwitch({ modelValue, id, disabled, onUpdate, }) {
    const [checked, setChecked] = React.useState(modelValue ?? false);
    const generatedId = React.useId();
    const uid = id ?? `ui-form-switch-${generatedId}`;
    React.useEffect(() => {
        if (modelValue !== undefined && modelValue !== checked) {
            setChecked(modelValue);
        }
    }, [modelValue]);
    const handleChange = () => {
        if (disabled)
            return;
        const newValue = !checked;
        setChecked(newValue);
        onUpdate?.(newValue);
    };
    const handleKeyDown = (event) => {
        if (event.key === "Enter")
            handleChange();
    };
    return { uid, checked, handleChange, handleKeyDown };
}

/**
 * Builds the CSS class string for the switch wrapper,
 * applying state-based modifier classes when needed.
 */
function getSwitchClassList(disabled, noEvents) {
    return [
        "ui-form-switch",
        "-switch",
        disabled && "-disabled",
        noEvents && "-no-events",
    ]
        .filter(Boolean)
        .join(" ");
}

/**
 * `Switch` is an accessible toggle control rendered as a styled checkbox.
 *
 * It supports controlled usage via `modelValue` + `onUpdate`, disabled and
 * no-events modifiers, Enter key toggling, and auto-generated accessible ids.
 *
 * @example
 * ```tsx
 * // Uncontrolled
 * <Switch label="Enable notifications" onUpdate={setEnabled} />
 *
 * // Controlled
 * <Switch label="Dark mode" modelValue={isDark} onUpdate={setIsDark} />
 *
 * // Disabled
 * <Switch label="Feature unavailable" disabled />
 * ```
 */
const Switch = ({ modelValue, value, label, id, name, required = false, noEvents = false, disabled = false, onUpdate, }) => {
    const { uid, checked, handleChange, handleKeyDown } = useSwitch({
        modelValue,
        id,
        disabled,
        onUpdate,
    });
    return (jsxRuntime.jsxs("label", { className: getSwitchClassList(disabled, noEvents), htmlFor: uid, children: [jsxRuntime.jsx("input", { type: "checkbox", id: uid, value: value, name: name, required: required, disabled: disabled, checked: checked, onChange: handleChange, onKeyDown: handleKeyDown }), jsxRuntime.jsx("span", { className: "ui-form-checkbox-checkmark" }), label && jsxRuntime.jsx("div", { className: "ui-form-checkbox-text", children: label })] }));
};

exports.Switch = Switch;
