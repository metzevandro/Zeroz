import { jsx, jsxs } from 'react/jsx-runtime';
import { I as Icon } from './Icon-93G3RH-i.js';
import { useId, useState, useRef, useEffect, useCallback } from 'react';

/**
 * Manages all state and interaction logic for `InputSelect`:
 * - Controlled value sync
 * - Open/close dropdown panel
 * - Click-outside detection
 * - Option selection
 * - Keyboard navigation (Enter/Space to open, Escape to close, arrows to navigate)
 */
function useInputSelect({ value, disabled, error, onChange, }) {
    const generatedId = useId();
    const uid = `input-select-${generatedId}`;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value);
    const dropdownRef = useRef(null);
    const triggerRef = useRef(null);
    useEffect(() => {
        setSelectedOption(value || undefined);
    }, [value]);
    const open = useCallback(() => {
        if (disabled || error)
            return;
        setIsOpen(true);
    }, [disabled, error]);
    const close = useCallback(() => setIsOpen(false), []);
    const selectOption = useCallback((option) => {
        setSelectedOption(option);
        onChange(option);
        close();
        triggerRef.current?.focus();
    }, [onChange, close]);
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(e.target)) {
                close();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [close]);
    const handleKeyDown = useCallback((e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            isOpen ? close() : open();
        }
        if (e.key === "Escape")
            close();
    }, [isOpen, open, close]);
    return {
        uid,
        isOpen,
        selectedOption,
        dropdownRef,
        triggerRef,
        open,
        close,
        selectOption,
        handleKeyDown,
    };
}

/**
 * Builds the CSS class string for the trigger button,
 * applying state-based modifier classes.
 */
function getTriggerClass(hasValue, error, disabled) {
    return [
        "input-select-button",
        hasValue && "option",
        error && "error",
        disabled && "disabled",
    ]
        .filter(Boolean)
        .join(" ");
}

/**
 * The custom dropdown option list — rendered as an absolutely-positioned panel.
 * Each option is a `<button>` for full keyboard and pointer accessibility.
 */
function SelectDropdown({ options, selected, onSelect, }) {
    return (jsx("ul", { className: "input-select-dropdown", role: "listbox", children: options.map((option) => (jsx("li", { role: "option", "aria-selected": option === selected, children: jsx("button", { className: `input-select-option ${option === selected ? "selected" : ""}`, onClick: () => onSelect(option), type: "button", children: option }) }, option))) }));
}

/**
 * `InputSelect` is a fully custom select field with a styled dropdown panel.
 *
 * Unlike a native `<select>`, this component renders its own option list,
 * giving you full visual control on both desktop and mobile — no OS picker,
 * no unstyled native dropdown.
 *
 * Supports controlled usage via `value` + `onChange`, error and disabled states,
 * keyboard navigation (Enter/Space to open, Escape to close), and accessible
 * label association via `aria-labelledby`.
 *
 * @example
 * ```tsx
 * <InputSelect
 *   label="Country"
 *   options={["Brazil", "USA", "Portugal"]}
 *   value={country}
 *   onChange={setCountry}
 * />
 * ```
 */
const InputSelect = ({ options, label, error = false, errorMessage, disabled = false, onChange, value, }) => {
    const { uid, isOpen, selectedOption, dropdownRef, triggerRef, open, close, selectOption, handleKeyDown, } = useInputSelect({ value, disabled, error, onChange });
    const labelId = label ? `${uid}-label` : undefined;
    return (jsxs("div", { className: "input-select-root", ref: dropdownRef, children: [label && (jsx("label", { id: labelId, className: "input-select-label", htmlFor: uid, children: label })), jsxs("div", { className: "input-select", children: [jsxs("button", { id: uid, ref: triggerRef, type: "button", className: getTriggerClass(!!selectedOption, error, disabled), "aria-haspopup": "listbox", "aria-expanded": isOpen, "aria-labelledby": labelId, disabled: disabled || error, onClick: isOpen ? close : open, onKeyDown: handleKeyDown, children: [jsx("span", { className: selectedOption ? "" : "input-select-placeholder", children: selectedOption ?? label ?? "Select an option" }), jsx(Icon, { icon: "keyboard_arrow_down", size: "sm" })] }), isOpen && (jsx(SelectDropdown, { options: options, selected: selectedOption, onSelect: selectOption }))] }), error && errorMessage && (jsx("p", { className: "input-select-error-message", children: errorMessage }))] }));
};

export { InputSelect as I };
