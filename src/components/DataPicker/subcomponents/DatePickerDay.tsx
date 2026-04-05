import React from "react";
import { DatePickerDayProps } from "../DatePicker.types";

/**
 * Renders a single day cell in the calendar grid.
 * Days from adjacent months receive the `other-month` class and are visually dimmed.
 */
export function DatePickerDay({
  day,
  type,
  isSelected,
  onSelect,
}: DatePickerDayProps) {
  return (
    <button
      className={[
        "data-picker-day",
        type === "other" ? "other-month" : "",
        isSelected ? "selected" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={() => onSelect(day, type)}
    >
      {day}
    </button>
  );
}
