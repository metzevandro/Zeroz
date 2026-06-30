import { CalendarDay } from "../DatePicker.types";

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

export const WEEKDAY_LABELS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const CALENDAR_GRID_SIZE = 42;

export const YEAR_RANGE = { past: 70, future: 25 } as const;

export function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

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

export function applyDateMask(digits: string): string {
  const d = digits.slice(0, 8);
  if (d.length > 4) return `${d.slice(0, 2)}/${d.slice(2, 4)}/${d.slice(4)}`;
  if (d.length > 2) return `${d.slice(0, 2)}/${d.slice(2)}`;
  return d;
}

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

export function clampDayToMonth(
  year: number,
  month: number,
  day: number,
): Date {
  const daysInNewMonth = new Date(year, month + 1, 0).getDate();
  const clampedDay = Math.min(day, daysInNewMonth);
  return new Date(year, month, clampedDay);
}

export function buildYearRange(currentYear: number): number[] {
  return Array.from(
    { length: YEAR_RANGE.past + YEAR_RANGE.future + 1 },
    (_, i) => currentYear - YEAR_RANGE.past + i,
  );
}
