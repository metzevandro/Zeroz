'use strict';

var jsxRuntime = require('react/jsx-runtime');
var Icon = require('./Icon-BUoiqqF-.js');
var ButtonIcon = require('./ButtonIcon-D_zBPQVl.js');
var React = require('react');

/**
 * Returns a debounced version of `fn` that delays invocation
 * until `delay` milliseconds have passed since the last call.
 *
 * Used internally to throttle `onDebouncedChange` so API calls
 * are not made on every keystroke.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

/**
 * Manages all state and interaction logic for `InputSearch`:
 * - Syncs internal value from the controlled `value` prop (e.g. from URL)
 * - Fires `onChange` on every keystroke
 * - Fires `onDebouncedChange` after the user stops typing (for API/URL calls)
 * - Tracks focus state for active styling
 * - Exposes a clear handler that resets both callbacks
 *
 * The debounced callback is recreated only when `debounceMs` or
 * `onDebouncedChange` change, preventing stale closures.
 */
function useInputSearch({ value, debounceMs, onChange, onDebouncedChange, }) {
    const [inputValue, setInputValue] = React.useState(value ?? "");
    const [isActive, setIsActive] = React.useState(false);
    const inputRef = React.useRef(null);
    // Sync from controlled value (e.g. browser back/forward, URL init)
    React.useEffect(() => {
        if (value !== undefined)
            setInputValue(value);
    }, [value]);
    // Stable debounced callback — recreated only when deps change
    const debouncedEmit = React.useRef(debounce((val) => onDebouncedChange?.(val), debounceMs));
    React.useEffect(() => {
        debouncedEmit.current = debounce((val) => onDebouncedChange?.(val), debounceMs);
    }, [onDebouncedChange, debounceMs]);
    const emit = React.useCallback((val) => {
        onChange?.(val);
        debouncedEmit.current(val);
    }, [onChange]);
    const handleChange = (e) => {
        const val = e.target.value;
        setInputValue(val);
        emit(val);
    };
    const handleFocus = () => {
        setIsActive(true);
        inputRef.current?.focus();
    };
    const handleBlur = () => setIsActive(false);
    const handleClear = () => {
        setInputValue("");
        emit("");
        inputRef.current?.focus();
    };
    return {
        inputValue,
        isActive,
        inputRef,
        handleChange,
        handleFocus,
        handleBlur,
        handleClear,
    };
}

/**
 * `InputSearch` is a search input with a clear button and built-in debounce support.
 *
 * It exposes two complementary callbacks:
 * - `onChange` — fires on every keystroke (for local filtering)
 * - `onDebouncedChange` — fires after the user stops typing (for API calls / URL sync)
 *
 * The `value` prop allows initializing the field from an external source
 * such as a URL query parameter, and keeps the input in sync when that
 * source changes (e.g. browser back/forward navigation).
 *
 * @example
 * ```tsx
 * // Local filter (no debounce needed)
 * <InputSearch
 *   placeholder="Filter items..."
 *   onChange={(q) => setFilter(q)}
 * />
 *
 * // URL + API search
 * const [params, setParams] = useSearchParams();
 * const q = params.get("q") ?? "";
 *
 * <InputSearch
 *   placeholder="Search users..."
 *   value={q}
 *   debounceMs={400}
 *   onDebouncedChange={(val) => {
 *     setParams({ q: val });   // sync URL
 *     fetchUsers(val);          // call API
 *   }}
 * />
 * ```
 */
const InputSearch = ({ placeholder, disabled = false, onChange, onDebouncedChange, debounceMs = 300, value, ...rest }) => {
    const { inputValue, inputRef, handleChange, handleFocus, handleBlur, handleClear, } = useInputSearch({ value, debounceMs, onChange, onDebouncedChange });
    return (jsxRuntime.jsx("div", { className: `input-search-root ${disabled ? "disabled" : ""}`, onClick: handleFocus, children: jsxRuntime.jsxs("div", { className: "input-search", children: [jsxRuntime.jsx(Icon.Icon, { size: "md", icon: "search" }), jsxRuntime.jsx("input", { ...rest, ref: inputRef, type: "text", size: 1000, placeholder: placeholder, value: inputValue, disabled: disabled, onChange: handleChange, onBlur: handleBlur }), inputValue && (jsxRuntime.jsx("button", { className: "input-search-button-close visible", onClick: handleClear, children: jsxRuntime.jsx(ButtonIcon.ButtonIcon, { variant: "primary", icon: "close", appearance: "plain", size: "sm" }) }))] }) }));
};

exports.InputSearch = InputSearch;
