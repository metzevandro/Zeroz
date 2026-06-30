import { CalendarDay } from "../DatePicker.types";
export declare const MONTH_NAMES: readonly ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export declare const WEEKDAY_LABELS: readonly ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export declare const YEAR_RANGE: {
    readonly past: 70;
    readonly future: 25;
};
export declare function formatDate(date: Date): string;
export declare function parseDate(value: string): Date | null;
export declare function applyDateMask(digits: string): string;
export declare function buildCalendarDays(year: number, month: number): CalendarDay[];
export declare function clampDayToMonth(year: number, month: number, day: number): Date;
export declare function buildYearRange(currentYear: number): number[];
