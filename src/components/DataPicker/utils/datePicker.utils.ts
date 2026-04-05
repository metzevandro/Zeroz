import { CalendarDay } from "../DatePicker.types";

/** Full month names indexed 0–11. */
export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

/** Abbreviated weekday labels used as column headers in the calendar grid. */
export const WEEKDAY_LABELS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

/** Total number of cells rendered in the calendar grid (6 rows × 7 columns). */
const CALENDAR_GRID_SIZE = 42;

/** Range of years available in the year picker, relative to the current year. */
export const YEAR_RANGE = { past: 70, future: 25 } as const;

/**
 * Formats a `Date` object as `DD/MM/YYYY`.
 */
export function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Parses a `DD/MM/YYYY` string into a `Date` object.
 * Returns `null` if the string is not a valid date.
 */
export function parseDate(value: string): Date | null {
  const parts = value.split("/").map((part) => parseInt(part, 10));
  if (parts.length !== 3 || parts.some(isNaN)) return null;

  const [day, month, year] = parts;
  const date = new Date(year, month - 1, day);

  const isValid =
    date.getDate() === day &&
    date.getMonth() === month - 1 &&
    date.getFullYear() === year;

  return isValid ? date : null;
}

/**
 * Applies a raw digit string into a masked `DD/MM/YYYY` string.
 * Inserts slashes automatically at positions 2 and 4.
 */
export function applyDateMask(digits: string): string {
  const d = digits.slice(0, 8);
  if (d.length > 4) return `${d.slice(0, 2)}/${d.slice(2, 4)}/${d.slice(4)}`;
  if (d.length > 2) return `${d.slice(0, 2)}/${d.slice(2)}`;
  return d;
}

/**
 * Builds the full 42-cell grid for a given month/year,
 * padding with days from the previous and next months as needed.
 */
export function buildCalendarDays(year: number, month: number): CalendarDay[] {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const days: CalendarDay[] = [];

  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({ day: daysInPrevMonth - i, type: "other" });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, type: "current" });
  }
  const remaining = CALENDAR_GRID_SIZE - days.length;
  for (let i = 1; i <= remaining; i++) {
    days.push({ day: i, type: "other" });
  }

  return days;
}

/**
 * Clamps a day value so it stays valid after a month/year change.
 * Returns a new `Date` adjusted to the last day of the month if needed.
 */
export function clampDayToMonth(
  year: number,
  month: number,
  day: number,
): Date {
  const daysInNewMonth = new Date(year, month + 1, 0).getDate();
  const clampedDay = Math.min(day, daysInNewMonth);
  return new Date(year, month, clampedDay);
}

/**
 * Generates the list of years available in the year picker.
 * Range spans from `currentYear - past` to `currentYear + future`.
 */
export function buildYearRange(currentYear: number): number[] {
  return Array.from(
    { length: YEAR_RANGE.past + YEAR_RANGE.future + 1 },
    (_, i) => currentYear - YEAR_RANGE.past + i,
  );
}
