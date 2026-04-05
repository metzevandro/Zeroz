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
export declare function useInputSearch({ value, debounceMs, onChange, onDebouncedChange, }: UseInputSearchOptions): UseInputSearchReturn;
export {};
