'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Input = require('./Input-a2RZGh4A.js');
var ButtonIcon = require('./ButtonIcon-D_zBPQVl.js');
var Button = require('./Button-CzlgwZOQ.js');

/** Full month names indexed 0–11. */
const MONTH_NAMES = [
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
];
/** Abbreviated weekday labels used as column headers in the calendar grid. */
const WEEKDAY_LABELS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
/** Total number of cells rendered in the calendar grid (6 rows × 7 columns). */
const CALENDAR_GRID_SIZE = 42;
/** Range of years available in the year picker, relative to the current year. */
const YEAR_RANGE = { past: 70, future: 25 };
/**
 * Formats a `Date` object as `DD/MM/YYYY`.
 */
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
/**
 * Parses a `DD/MM/YYYY` string into a `Date` object.
 * Returns `null` if the string is not a valid date.
 */
function parseDate(value) {
    const parts = value.split("/").map((part) => parseInt(part, 10));
    if (parts.length !== 3 || parts.some(isNaN))
        return null;
    const [day, month, year] = parts;
    const date = new Date(year, month - 1, day);
    const isValid = date.getDate() === day &&
        date.getMonth() === month - 1 &&
        date.getFullYear() === year;
    return isValid ? date : null;
}
/**
 * Applies a raw digit string into a masked `DD/MM/YYYY` string.
 * Inserts slashes automatically at positions 2 and 4.
 */
function applyDateMask(digits) {
    const d = digits.slice(0, 8);
    if (d.length > 4)
        return `${d.slice(0, 2)}/${d.slice(2, 4)}/${d.slice(4)}`;
    if (d.length > 2)
        return `${d.slice(0, 2)}/${d.slice(2)}`;
    return d;
}
/**
 * Builds the full 42-cell grid for a given month/year,
 * padding with days from the previous and next months as needed.
 */
function buildCalendarDays(year, month) {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const days = [];
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
function clampDayToMonth(year, month, day) {
    const daysInNewMonth = new Date(year, month + 1, 0).getDate();
    const clampedDay = Math.min(day, daysInNewMonth);
    return new Date(year, month, clampedDay);
}
/**
 * Generates the list of years available in the year picker.
 * Range spans from `currentYear - past` to `currentYear + future`.
 */
function buildYearRange(currentYear) {
    return Array.from({ length: YEAR_RANGE.past + YEAR_RANGE.future + 1 }, (_, i) => currentYear - YEAR_RANGE.past + i);
}

/**
 * Manages the text input state for the DatePicker, including:
 * - Auto-masking as the user types (DD/MM/YYYY)
 * - Backspace handling with mask awareness
 * - Inline date validation with error feedback
 * - Syncing the input value from an externally selected date
 */
function useDateInput({ value, onChange, onDateChange, }) {
    const [inputValue, setInputValue] = React.useState(value || formatDate(new Date()));
    const [error, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    React.useEffect(() => {
        const next = value || formatDate(new Date());
        setInputValue(next);
        const parsed = parseDate(next);
        if (parsed)
            onDateChange(parsed);
    }, [value]);
    const clearError = () => {
        setError(false);
        setErrorMessage("");
    };
    const applyAndValidate = (formatted) => {
        setInputValue(formatted);
        onChange(formatted);
        if (formatted.length < 10) {
            clearError();
            return;
        }
        const parsed = parseDate(formatted);
        if (parsed) {
            onDateChange(parsed);
            clearError();
        }
        else {
            setError(true);
            setErrorMessage("Invalid date");
        }
    };
    const handleInputChange = (e) => {
        const digits = e.target.value.replace(/[^\d]/g, "");
        const formatted = applyDateMask(digits);
        applyAndValidate(formatted);
    };
    const handleKeyDown = (e) => {
        if (e.key !== "Backspace")
            return;
        e.preventDefault();
        const digits = inputValue.replace(/[^\d]/g, "").slice(0, -1);
        const formatted = applyDateMask(digits);
        applyAndValidate(formatted);
    };
    const syncFromDate = (date) => {
        const formatted = formatDate(date);
        setInputValue(formatted);
        clearError();
    };
    return {
        inputValue,
        error,
        errorMessage,
        handleInputChange,
        handleKeyDown,
        syncFromDate,
    };
}

function useDatePickerCalendar({ selectedDate, onSelectDate, }) {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [internalSelectedDate, setInternalSelectedDate] = React.useState(null);
    const [isMonthYearPickerOpen, setIsMonthYearPickerOpen] = React.useState(false);
    const monthRefs = React.useRef([]);
    const yearRefs = React.useRef([]);
    const currentRealYear = new Date().getFullYear();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const scrollToSelected = (date) => {
        requestAnimationFrame(() => {
            monthRefs.current[date.getMonth()]?.scrollIntoView({
                block: "center",
                behavior: "smooth",
            });
            yearRefs.current[date.getFullYear() - (currentRealYear - YEAR_RANGE.past)]?.scrollIntoView({
                block: "center",
                behavior: "smooth",
            });
        });
    };
    React.useEffect(() => {
        if (!isMonthYearPickerOpen)
            return;
        const date = selectedDate ?? currentDate;
        scrollToSelected(date);
    }, [isMonthYearPickerOpen, selectedDate, currentDate]);
    React.useEffect(() => {
        if (selectedDate) {
            setCurrentDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1));
            setInternalSelectedDate(selectedDate);
        }
    }, [selectedDate]);
    const commit = (date) => {
        setCurrentDate(new Date(date.getFullYear(), date.getMonth(), 1));
        setInternalSelectedDate(date);
        onSelectDate(date);
    };
    const toggleMonthYearPicker = () => setIsMonthYearPickerOpen((prev) => !prev);
    const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
    const handleSelectDay = (day, type) => {
        let newDate;
        if (type === "other") {
            const targetMonth = day > 15 ? month - 1 : month + 1;
            newDate = new Date(year, targetMonth, day);
        }
        else {
            newDate = new Date(year, month, day);
        }
        commit(newDate);
    };
    const handleSelectMonth = (newMonth) => {
        const currentDay = internalSelectedDate?.getDate() ?? 1;
        const newDate = clampDayToMonth(year, newMonth, currentDay);
        commit(newDate);
        monthRefs.current[newMonth]?.scrollIntoView({
            block: "center",
            behavior: "smooth",
        });
    };
    const handleSelectYear = (newYear) => {
        const currentDay = internalSelectedDate?.getDate() ?? 1;
        const newDate = clampDayToMonth(newYear, month, currentDay);
        commit(newDate);
        yearRefs.current[newYear - (currentRealYear - YEAR_RANGE.past)]?.scrollIntoView({
            block: "center",
            behavior: "smooth",
        });
    };
    return {
        currentDate,
        internalSelectedDate,
        isMonthYearPickerOpen,
        monthRefs,
        yearRefs,
        currentRealYear,
        toggleMonthYearPicker,
        handlePrevMonth,
        handleNextMonth,
        handleSelectDay,
        handleSelectMonth,
        handleSelectYear,
    };
}

/**
 * Renders a single day cell in the calendar grid.
 * Days from adjacent months receive the `other-month` class and are visually dimmed.
 */
function DatePickerDay({ day, type, isSelected, onSelect, }) {
    return (jsxRuntime.jsx("button", { className: [
            "data-picker-day",
            type === "other" ? "other-month" : "",
            isSelected ? "selected" : "",
        ]
            .filter(Boolean)
            .join(" "), onClick: () => onSelect(day, type), children: day }));
}

/**
 * Full calendar panel rendered inside the DatePicker dropdown.
 * Includes month/year navigation, a day grid, and a month+year picker panel.
 */
function DatePickerCalendar({ selectedDate, onSelectDate, onClose, onRevert, }) {
    const { currentDate, isMonthYearPickerOpen, monthRefs, yearRefs, currentRealYear, toggleMonthYearPicker, handlePrevMonth, handleNextMonth, handleSelectDay, handleSelectMonth, handleSelectYear, } = useDatePickerCalendar({ selectedDate, onSelectDate });
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const calendarDays = buildCalendarDays(year, month);
    const yearRange = buildYearRange(currentRealYear);
    return (jsxRuntime.jsxs("div", { className: "data-picker-calendar", children: [jsxRuntime.jsxs("div", { className: "data-picker-header", children: [jsxRuntime.jsxs("div", { onClick: toggleMonthYearPicker, className: `data-picker-header-date ${isMonthYearPickerOpen ? "open" : ""}`, children: [`${MONTH_NAMES[month]} ${year}`, jsxRuntime.jsx(ButtonIcon.ButtonIcon, { appearance: "plain", variant: "secondary", icon: "keyboard_arrow_right", size: "sm" })] }), jsxRuntime.jsxs("div", { className: `data-picker-header-buttons ${isMonthYearPickerOpen ? "hidden" : ""}`, children: [jsxRuntime.jsx(ButtonIcon.ButtonIcon, { variant: "secondary", size: "sm", icon: "keyboard_arrow_left", appearance: "plain", onClick: handlePrevMonth }), jsxRuntime.jsx(ButtonIcon.ButtonIcon, { variant: "secondary", appearance: "plain", size: "sm", icon: "keyboard_arrow_right", onClick: handleNextMonth })] })] }), jsxRuntime.jsxs("div", { className: "data-picker-body-container", children: [jsxRuntime.jsxs("div", { className: `data-picker-body-months-years ${isMonthYearPickerOpen ? "" : "hidden"}`, children: [jsxRuntime.jsx("div", { className: "data-picker-months", children: MONTH_NAMES.map((monthName, index) => (jsxRuntime.jsx("button", { ref: (el) => {
                                        monthRefs.current[index] = el;
                                    }, className: `months ${month === index ? "selected" : ""}`, onClick: () => handleSelectMonth(index), children: monthName }, monthName))) }), jsxRuntime.jsx("div", { className: "data-picker-years", children: yearRange.map((yearValue, index) => (jsxRuntime.jsx("button", { ref: (el) => {
                                        yearRefs.current[index] = el;
                                    }, className: `years ${year === yearValue ? "selected" : ""}`, onClick: () => handleSelectYear(yearValue), children: yearValue }, yearValue))) })] }), jsxRuntime.jsxs("div", { className: `data-picker-body ${isMonthYearPickerOpen ? "hidden" : ""}`, children: [jsxRuntime.jsx("div", { className: "data-picker-weekdays", children: WEEKDAY_LABELS.map((label) => (jsxRuntime.jsx("div", { translate: "no", className: "data-picker-week-day", children: label[0] }, label))) }), jsxRuntime.jsx("div", { className: "data-picker-days", children: calendarDays.map((calendarDay, index) => (jsxRuntime.jsx(DatePickerDay, { day: calendarDay.day, type: calendarDay.type, onSelect: handleSelectDay, isSelected: selectedDate?.getDate() === calendarDay.day &&
                                        selectedDate?.getMonth() === month &&
                                        selectedDate?.getFullYear() === year &&
                                        calendarDay.type === "current" }, index))) })] })] }), jsxRuntime.jsxs("div", { className: "data-picker-footer", children: [jsxRuntime.jsx(Button.Button, { size: "sm", variant: "secondary", onClick: onRevert, children: "Reset" }), jsxRuntime.jsx(Button.Button, { size: "sm", variant: "primary", onClick: onClose, children: "Done" })] })] }));
}

/**
 * `DatePicker` is a date input field with an attached calendar dropdown.
 *
 * Users can type a date directly (auto-masked as `DD/MM/YYYY`) or select one
 * from the visual calendar. The calendar supports month/year navigation and
 * a dedicated month+year picker panel for faster navigation.
 *
 * @example
 * ```tsx
 * <DatePicker
 *   label="Birth date"
 *   value="15/06/1990"
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 */
function DatePicker({ value, onChange, label, disabled = false, skeleton = false, }) {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
    const { inputValue, error, errorMessage, handleInputChange, handleKeyDown, syncFromDate, } = useDateInput({
        value,
        onChange,
        onDateChange: setSelectedDate,
    });
    const handleSelectDate = (date) => {
        setSelectedDate(date);
        syncFromDate(date);
        onChange(formatDate(date));
    };
    const handleRevert = () => {
        handleSelectDate(new Date());
    };
    return (jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [jsxRuntime.jsx(Input.Input, { label: label, onClick: () => setIsCalendarOpen((prev) => !prev), error: error, textError: errorMessage, value: inputValue, onChange: handleInputChange, onKeyDown: handleKeyDown, icon: "calendar_month", fillIcon: true, disabled: disabled, skeleton: skeleton }), jsxRuntime.jsx("div", { className: `data-picker ${isCalendarOpen ? "open" : ""}`, children: jsxRuntime.jsx(DatePickerCalendar, { selectedDate: selectedDate, onSelectDate: handleSelectDate, onClose: () => setIsCalendarOpen(false), onRevert: handleRevert }) })] }));
}

exports.DatePicker = DatePicker;
