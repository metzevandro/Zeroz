interface UseInfiniteScrollOptions {
    values: string[];
    selected: string;
    onSelect: (value: string) => void;
}
interface UseInfiniteScrollReturn {
    scrollRef: React.RefObject<HTMLDivElement>;
}
/**
 * Implements an infinite drum-roll scroll column (iOS-style picker).
 *
 * Strategy:
 * - Renders `values` repeated `REPEAT_COUNT` times (kept intentionally small).
 * - Always starts scrolled to the middle repetition so the user has equal
 *   room in both directions.
 * - On scroll end, snaps to the nearest item and fires `onSelect`.
 * - Whenever the user leaves the middle third of the list, silently resets
 *   the scroll position back to the middle repetition (same visual value,
 *   different scroll offset) — creating the infinite loop illusion with
 *   minimal DOM nodes.
 */
export declare function useInfiniteScroll({ values, selected, onSelect, }: UseInfiniteScrollOptions): UseInfiniteScrollReturn;
export {};
