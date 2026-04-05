import "./InputSearch.scss";
import React from "react";
import { InputSearchProps } from "./InputSearch.types";
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
declare const InputSearch: React.FC<InputSearchProps>;
export default InputSearch;
