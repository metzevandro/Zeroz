import { useRef, useEffect, useCallback } from "react";
import {
  ITEM_HEIGHT,
  VISIBLE_ITEMS,
  REPEAT_COUNT,
} from "../utils/inputTime.utils";

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
export function useInfiniteScroll({
  values,
  selected,
  onSelect,
}: UseInfiniteScrollOptions): UseInfiniteScrollReturn {
  const scrollRef = useRef<HTMLDivElement>(null);
  const snapTimer = useRef<ReturnType<typeof setTimeout>>();

  const totalItems = values.length * REPEAT_COUNT;
  const midOffset = Math.floor(REPEAT_COUNT / 2) * values.length;
  const paddingItems = Math.floor(VISIBLE_ITEMS / 2);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const el = scrollRef.current;
      if (!el) return;
      el.scrollTo({
        top:
          (index + paddingItems) * ITEM_HEIGHT -
          el.clientHeight / 2 +
          ITEM_HEIGHT / 2,
        behavior,
      });
    },
    [paddingItems],
  );

  const getIndexForValue = useCallback(
    (val: string, offset = midOffset): number => {
      const localIndex = values.indexOf(val);
      return localIndex === -1 ? offset : offset + localIndex;
    },
    [values, midOffset],
  );

  // Scroll to selected on mount and when it changes externally
  useEffect(() => {
    if (!selected) return;
    scrollToIndex(getIndexForValue(selected), "instant");
  }, [selected]);

  const snapToNearest = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const centerOffset = el.clientHeight / 2 - ITEM_HEIGHT / 2;
    const rawIndex = (el.scrollTop + centerOffset) / ITEM_HEIGHT - paddingItems;
    const snappedIndex = Math.max(
      0,
      Math.min(Math.round(rawIndex), totalItems - 1),
    );
    const value = values[snappedIndex % values.length];

    scrollToIndex(snappedIndex, "smooth");

    // Reset to the middle third when the user leaves it.
    // Threshold: outside the middle third of the total list.
    const third = Math.floor(totalItems / 3);
    if (snappedIndex < third || snappedIndex > totalItems - third) {
      setTimeout(() => scrollToIndex(getIndexForValue(value), "instant"), 300);
    }

    onSelect(value);
  }, [
    values,
    totalItems,
    paddingItems,
    scrollToIndex,
    getIndexForValue,
    onSelect,
  ]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      clearTimeout(snapTimer.current);
      snapTimer.current = setTimeout(() => snapToNearest(), 150);
    };

    const handleScrollEnd = () => {
      clearTimeout(snapTimer.current);
      snapToNearest();
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    el.addEventListener("scrollend", handleScrollEnd, { passive: true });
    return () => {
      el.removeEventListener("scroll", handleScroll);
      el.removeEventListener("scrollend", handleScrollEnd);
      clearTimeout(snapTimer.current);
    };
  }, [snapToNearest]);

  return { scrollRef };
}
