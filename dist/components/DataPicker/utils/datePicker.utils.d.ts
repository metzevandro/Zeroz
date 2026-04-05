import { CalendarDay } from "../DatePicker.types";
/** Full month names indexed 0–11. */
export declare const MONTH_NAMES: readonly ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/** Abbreviated weekday labels used as column headers in the calendar grid. */
export declare const WEEKDAY_LABELS: readonly ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
/** Range of years available in the year picker, relative to the current year. */
export declare const YEAR_RANGE: {
    readonly past: 70;
    readonly future: 25;
};
/**
 * Formats a `Date` object as `DD/MM/YYYY`.
 */
export declare function formatDate(date: Date): string;
/**
 * Parses a `DD/MM/YYYY` string into a `Date` object.
 * Returns `null` if the string is not a valid date.
 */
export declare function parseDate(value: string): Date | null;
/**
 * Applies a raw digit string into a masked `DD/MM/YYYY` string.
 * Inserts slashes automatically at positions 2 and 4.
 */
export declare function applyDateMask(digits: string): string;
/**
 * Builds the full 42-cell grid for a given month/year,
 * padding with days from the previous and next months as needed.
 */
export declare function buildCalendarDays(year: number, month: number): CalendarDay[];
/**
 * Clamps a day value so it stays valid after a month/year change.
 * Returns a new `Date` adjusted to the last day of the month if needed.
 */
export declare function clampDayToMonth(year: number, month: number, day: number): Date;
/**
 * Generates the list of years available in the year picker.
 * Range spans from `currentYear - past` to `currentYear + future`.
 */
export declare function buildYearRange(currentYear: number): number[];
