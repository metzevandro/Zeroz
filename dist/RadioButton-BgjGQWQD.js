'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

/**
 * Manages the state and interaction logic for `RadioButton`:
 * - Syncs internal state when the controlled `checked` prop changes
 * - Guards toggle against disabled state
 * - Handles Enter key activation
 * - Generates a stable accessible `id` for label association
 */
function useRadioButton({ checked, disabled = false, onChange, }) {
    const [isChecked, setIsChecked] = React.useState(checked ?? false);
    const generatedId = React.useId();
    const uid = `radio-button-${generatedId}`;
    React.useEffect(() => {
        if (checked !== undefined)
            setIsChecked(checked);
    }, [checked]);
    const toggle = React.useCallback(() => {
        if (disabled)
            return;
        const next = !isChecked;
        setIsChecked(next);
        onChange?.(next);
    }, [disabled, isChecked, onChange]);
    const handleKeyDown = React.useCallback((e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
        }
    }, [toggle]);
    return { uid, isChecked, toggle, handleKeyDown };
}

/**
 * Builds the CSS class string for the radio button circle element.
 */
function getRadioButtonClass(disabled, checked) {
    return ["radio-button", disabled && "disable", checked && "checked"]
        .filter(Boolean)
        .join(" ");
}
/**
 * Builds the CSS class string for the radio button label.
 */
function getLabelClass(disabled) {
    return ["radio-button-label", disabled && "disabled"]
        .filter(Boolean)
        .join(" ");
}

/**
 * `RadioButton` is an accessible radio input with optional label.
 *
 * Supports controlled usage via `checked` + `onChange`, disabled state,
 * and keyboard activation via Enter and Space.
 *
 * The `<label>` is associated with the radio via `htmlFor` / `id`
 * for full accessibility compliance (WCAG 2.1 SC 1.3.1).
 *
 * > **Note:** For mutually exclusive options, use multiple `RadioButton`
 * > components and manage the selected value externally — only one
 * > should be `checked` at a time.
 *
 * @example
 * ```tsx
 * // Controlled group
 * <RadioButton label="Option A" checked={selected === "a"} onChange={() => setSelected("a")} />
 * <RadioButton label="Option B" checked={selected === "b"} onChange={() => setSelected("b")} />
 *
 * // Disabled
 * <RadioButton label="Unavailable" disabled />
 * ```
 */
const RadioButton = ({ label, disabled = false, checked, onChange, }) => {
    const { uid, isChecked, toggle, handleKeyDown } = useRadioButton({
        checked,
        disabled,
        onChange,
    });
    return (jsxRuntime.jsxs("div", { className: `radio-button-root ${disabled ? "disable" : ""}`, children: [jsxRuntime.jsx("div", { id: uid, className: getRadioButtonClass(disabled, isChecked), onClick: toggle, onKeyDown: handleKeyDown, role: "radio", "aria-checked": isChecked, "aria-labelledby": label ? `${uid}-label` : undefined, tabIndex: disabled ? -1 : 0, children: jsxRuntime.jsx("span", { className: `radio-circle ${isChecked ? "checked-circle" : ""}` }) }), label && (jsxRuntime.jsx("label", { id: `${uid}-label`, htmlFor: uid, className: getLabelClass(disabled), onClick: toggle, children: label }))] }));
};

exports.RadioButton = RadioButton;
