import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useState, useEffect, useId } from 'react';
import { S as Skeleton } from './Skeleton-CvObjom8.js';
import { I as Icon } from './Icon-93G3RH-i.js';

/**
 * Measures the input container's dimensions after mount.
 * Used to size the `<Skeleton>` placeholder to match the real input exactly.
 */
function useInputDimensions() {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        if (containerRef.current) {
            const { offsetWidth, offsetHeight } = containerRef.current;
            setDimensions({ width: offsetWidth, height: offsetHeight });
        }
    }, []);
    return { containerRef, dimensions };
}

/**
 * Manages the show/hide toggle state for password inputs.
 * Returns the effective `type` attribute value to apply to the `<input>`.
 */
function usePasswordVisibility(type) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);
    const resolvedType = type === "password" && isPasswordVisible ? "text" : type;
    return { isPasswordVisible, togglePasswordVisibility, resolvedType };
}

/**
 * Returns a click handler for the input wrapper `<div>`.
 *
 * Handles two cases:
 * - Double-click → focuses the input and selects all text.
 * - Single-click → focuses the input while preserving the cursor position.
 *
 * Clicks originating from the password toggle button are ignored
 * so they don't interfere with the visibility state.
 */
function useInputFocus(containerRef) {
    const handleDivClick = (event) => {
        if (event.target.closest(".toggle-password"))
            return;
        const inputElement = containerRef.current?.querySelector("input");
        if (!inputElement)
            return;
        if (event.detail === 2) {
            inputElement.focus();
            inputElement.select();
        }
        else {
            const cursorPosition = inputElement.selectionStart;
            setTimeout(() => {
                inputElement.focus();
                if (cursorPosition !== null) {
                    inputElement.setSelectionRange(cursorPosition, cursorPosition);
                }
            }, 0);
        }
    };
    return { handleDivClick };
}

/**
 * Builds the CSS class string for the input content wrapper,
 * applying state-based modifier classes when needed.
 */
function getInputContentClass(disabled, error) {
    return ["input-content", disabled && "disabled", error && "error"]
        .filter(Boolean)
        .join(" ");
}

/**
 * Renders the trailing icon for non-password inputs.
 * Renders nothing if no `typeIcon` is provided.
 */
function InputIcon({ icon, fillIcon }) {
    return (jsx("span", { className: "icon-transition", children: jsx(Icon, { icon: icon, size: "md", fill: fillIcon }) }));
}
/**
 * Renders the show/hide password toggle button.
 * Uses the `visibility` / `visibility_off` Material Symbol icons.
 */
function PasswordToggle({ isVisible, fillIcon, onToggle, }) {
    return (jsx("div", { onClick: onToggle, className: "toggle-password", children: jsx("span", { className: "icon-transition", children: jsx(Icon, { icon: isVisible ? "visibility" : "visibility_off", size: "md", fill: fillIcon }) }) }));
}

/**
 * `Input` is a flexible text input field that supports icons, password toggling,
 * inline validation feedback, skeleton loading state, and full accessibility.
 *
 * The `label` prop is automatically associated with the underlying `<input>`
 * via `htmlFor` / `id`, satisfying WCAG 2.1 SC 1.3.1 (Form Labels).
 *
 * @example
 * ```tsx
 * // Standard input with icon
 * <Input label="Email" icon="mail" onChange={handleChange} />
 *
 * // Password input
 * <Input label="Password" type="password" />
 *
 * // Error state
 * <Input label="Username" error textError="Username is already taken" />
 *
 * // Skeleton loading
 * <Input label="Name" skeleton />
 * ```
 */
const Input = ({ icon, fillIcon, label, error = false, disabled = false, textError, value, inputRef, skeleton = false, type, ...rest }) => {
    // Generates a stable, unique id to associate <label> with <input>.
    // useId() is React 18+; for older versions, replace with a uuid utility.
    const generatedId = useId();
    const { containerRef, dimensions } = useInputDimensions();
    const { isPasswordVisible, togglePasswordVisibility, resolvedType } = usePasswordVisibility(type);
    const { handleDivClick } = useInputFocus(containerRef);
    const isPasswordType = type === "password";
    return (jsxs("div", { className: "input-root", children: [label && (jsx("div", { className: "input-header", children: jsx("label", { htmlFor: generatedId, children: label }) })), skeleton ? (jsx(Skeleton, { height: `${dimensions.height}`, width: `${dimensions.width}` })) : (jsxs("div", { ref: containerRef, children: [jsxs("div", { className: getInputContentClass(disabled, error), onClick: handleDivClick, children: [jsx("input", { id: generatedId, size: 0, ...rest, value: value, disabled: disabled, ref: inputRef, type: resolvedType }), isPasswordType ? (jsx(PasswordToggle, { isVisible: isPasswordVisible, fillIcon: fillIcon, onToggle: togglePasswordVisibility })) : (jsx(InputIcon, { icon: icon, fillIcon: fillIcon }))] }), error && jsx("div", { className: "input-error", children: textError })] }))] }));
};

export { Input as I };
