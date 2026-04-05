import React, { useMemo } from "react";
import { TimeColumnProps } from "../InputTime.types";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import {
  ITEM_HEIGHT,
  REPEAT_COUNT,
  VISIBLE_ITEMS,
} from "../utils/inputTime.utils";

/**
 * A single infinite-scroll drum-roll column for the time picker.
 *
 * Renders `values` repeated many times and uses `useInfiniteScroll`
 * to implement snap-to-item behavior with seamless looping.
 * A fixed highlight overlay indicates the selected (center) item.
 */
export function TimeColumn({ values, selected, onSelect }: TimeColumnProps) {
  const { scrollRef } = useInfiniteScroll({ values, selected, onSelect });

  const repeatedValues = useMemo(
    () => Array.from({ length: REPEAT_COUNT }, () => values).flat(),
    [values],
  );

  const columnHeight = VISIBLE_ITEMS * ITEM_HEIGHT;

  return (
    <div
      className="time-column"
      style={{ height: columnHeight, position: "relative" }}
    >
      {/* Selection highlight overlay */}
      <div
        className="time-column-highlight"
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: ITEM_HEIGHT,
          transform: "translateY(-50%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        ref={scrollRef}
        className="time-column-scroll"
        style={{
          height: "100%",
          overflowY: "scroll",
          scrollbarWidth: "none",
        }}
      >
        {/* Top padding so first item can be centered */}
        <div style={{ height: Math.floor(VISIBLE_ITEMS / 2) * ITEM_HEIGHT }} />

        {repeatedValues.map((value, index) => (
          <button
            key={index}
            className={`input-time-buttons ${value === selected ? "selected" : ""}`}
            style={{
              height: ITEM_HEIGHT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
            onClick={() => onSelect(value)}
            aria-label={value}
            tabIndex={value === selected ? 0 : -1}
          >
            {value}
          </button>
        ))}

        {/* Bottom padding so last item can be centered */}
        <div style={{ height: Math.floor(VISIBLE_ITEMS / 2) * ITEM_HEIGHT }} />
      </div>
    </div>
  );
}
