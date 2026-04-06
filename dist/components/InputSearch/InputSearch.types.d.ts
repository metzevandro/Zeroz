export interface InputSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Placeholder text shown inside the input when empty.
     */
    placeholder: string;
    /**
     * Disables the search input.
     * @default false
     */
    disabled?: boolean;
    /**
     * Callback fired on every keystroke with the current input value.
     * Use this for immediate (unthrottled) reactions like filtering a local list.
     */
    onChange?: () => void;
    /**
     * Callback fired after the user stops typing for `debounceMs` milliseconds.
     * Use this for API calls or URL sync to avoid flooding requests.
     *
     * @example
     * ```tsx
     * <InputSearch
     *   placeholder="Search users..."
     *   onDebouncedChange={(q) => router.push(`?q=${q}`)}
     *   debounceMs={400}
     * />
     * ```
     */
    onDebouncedChange?: (value: string) => void;
    /**
     * Debounce delay in milliseconds for `onDebouncedChange`.
     * @default 300
     */
    debounceMs?: number;
    /**
     * Controlled value. When provided, the component syncs its internal
     * state to this value — useful when initializing from a URL query param.
     *
     * @example
     * ```tsx
     * // Initialize from URL: ?q=react
     * const q = new URLSearchParams(location.search).get("q") ?? "";
     * <InputSearch placeholder="Search..." value={q} onDebouncedChange={setQuery} />
     * ```
     */
    value?: string;
    /**
     * Shows a skeleton placeholder instead of the input field.
     * Useful when the search is part of a loading state.
     */
    isSkeleton?: boolean;
}
