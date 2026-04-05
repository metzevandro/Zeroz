import "./InputSearch.scss";
import React from "react";
import Icon from "../Icon/Icon";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { InputSearchProps } from "./InputSearch.types";
import { useInputSearch } from "./hooks/useInputSearch";

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

const InputSearch: React.FC<InputSearchProps> = ({
  placeholder,
  disabled = false,
  onChange,
  onDebouncedChange,
  debounceMs = 300,
  value,
  ...rest
}) => {
  const {
    inputValue,
    inputRef,
    handleChange,
    handleFocus,
    handleBlur,
    handleClear,
  } = useInputSearch({ value, debounceMs, onChange, onDebouncedChange });

  return (
    <div
      className={`input-search-root ${disabled ? "disabled" : ""}`}
      onClick={handleFocus}
    >
      <div className="input-search">
        <Icon size="md" icon="search" />
        <input
          {...rest}
          ref={inputRef}
          type="text"
          size={1000}
          placeholder={placeholder}
          value={inputValue}
          disabled={disabled}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {inputValue && (
          <button
            className="input-search-button-close visible"
            onClick={handleClear}
          >
            <ButtonIcon
              variant="primary"
              icon="close"
              appearance="plain"
              size="sm"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputSearch;
