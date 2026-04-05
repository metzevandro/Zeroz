import { useState, useEffect, useRef, useCallback } from "react";
import { debounce } from "../utils/inputSearch.utils";

interface UseInputSearchOptions {
  value?: string;
  debounceMs: number;
  onChange?: (value: string) => void;
  onDebouncedChange?: (value: string) => void;
}

interface UseInputSearchReturn {
  inputValue: string;
  isActive: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
  handleBlur: () => void;
  handleClear: () => void;
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
export function useInputSearch({
  value,
  debounceMs,
  onChange,
  onDebouncedChange,
}: UseInputSearchOptions): UseInputSearchReturn {
  const [inputValue, setInputValue] = useState(value ?? "");
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync from controlled value (e.g. browser back/forward, URL init)
  useEffect(() => {
    if (value !== undefined) setInputValue(value);
  }, [value]);

  // Stable debounced callback — recreated only when deps change
  const debouncedEmit = useRef(
    debounce((val: string) => onDebouncedChange?.(val), debounceMs),
  );

  useEffect(() => {
    debouncedEmit.current = debounce(
      (val: string) => onDebouncedChange?.(val),
      debounceMs,
    );
  }, [onDebouncedChange, debounceMs]);

  const emit = useCallback(
    (val: string) => {
      onChange?.(val);
      debouncedEmit.current(val);
    },
    [onChange],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
