'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

/**
 * Manages the internal state and interaction logic of `Checkbox`:
 * - Syncs internal checked state when `modelValue` changes externally
 * - Generates a stable unique `id` when none is provided
 * - Handles toggle on change and on Enter key press
 */
function useCheckbox({ modelValue, id, disabled, onUpdate, }) {
    const [checked, setChecked] = React.useState(modelValue ?? false);
    const generatedId = React.useId();
    const uid = id ?? `ui-form-checkbox-${generatedId}`;
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
        if (event.key === "Enter") {
            handleChange();
        }
    };
    return { checked, uid, handleChange, handleKeyDown };
}

/**
 * Builds the CSS modifier class string for the checkbox wrapper.
 * Returns an empty string when no modifiers are active.
 */
function getCheckboxClassList(disabled, noEvents) {
    return [disabled && "-disabled", noEvents && "-no-events"]
        .filter(Boolean)
        .join(" ");
}

/**
 * `Checkbox` is an accessible, controlled checkbox input.
 *
 * It supports indeterminate state, disabled and no-events modifiers,
 * Enter key toggling via keyboard, and sync with an external `modelValue`.
 * A unique `id` is auto-generated via `useId()` when none is provided,
 * ensuring the `<label>` and `<input>` are always properly associated.
 *
 * @example
 * ```tsx
 * // Basic
 * <Checkbox label="Accept terms" onUpdate={setAccepted} />
 *
 * // Controlled
 * <Checkbox label="Subscribe" modelValue={isSubscribed} onUpdate={setSubscribed} />
 *
 * // Indeterminate (select-all pattern)
 * <Checkbox label="Select all" indeterminate={someChecked} modelValue={allChecked} onUpdate={toggleAll} />
 *
 * // Disabled
 * <Checkbox label="Unavailable option" disabled />
 * ```
 */
const Checkbox = ({ modelValue, value, label, id, name, required = false, indeterminate = false, noEvents = false, disabled = false, onUpdate, }) => {
    const { checked, uid, handleChange, handleKeyDown } = useCheckbox({
        modelValue,
        id,
        disabled,
        onUpdate,
    });
    const classList = getCheckboxClassList(disabled, noEvents);
    return (jsxRuntime.jsxs("label", { tabIndex: 0, className: `ui-form-checkbox ${classList}`, htmlFor: uid, onKeyDown: handleKeyDown, children: [jsxRuntime.jsx("input", { type: "checkbox", id: uid, value: value, name: name, required: required, disabled: disabled, checked: checked, onChange: handleChange, tabIndex: -1, ref: (el) => {
                    if (el)
                        el.indeterminate = indeterminate;
                } }), jsxRuntime.jsx("span", { className: "ui-form-checkbox-checkmark" }), label && jsxRuntime.jsx("div", { className: "ui-form-checkbox-text", children: label })] }));
};

exports.Checkbox = Checkbox;
