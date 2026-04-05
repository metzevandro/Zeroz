import React from "react";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";
import Button from "../../Button/Button";
import { DatePickerCalendarProps } from "../DatePicker.types";
import { useDatePickerCalendar } from "../hooks/useDatePickerCalendar";
import { DatePickerDay } from "./DatePickerDay";
import {
  MONTH_NAMES,
  WEEKDAY_LABELS,
  buildCalendarDays,
  buildYearRange,
  YEAR_RANGE,
} from "../utils/datePicker.utils";

/**
 * Full calendar panel rendered inside the DatePicker dropdown.
 * Includes month/year navigation, a day grid, and a month+year picker panel.
 */
export function DatePickerCalendar({
  selectedDate,
  onSelectDate,
  onClose,
  onRevert,
}: DatePickerCalendarProps) {
  const {
    currentDate,
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
  } = useDatePickerCalendar({ selectedDate, onSelectDate });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const calendarDays = buildCalendarDays(year, month);
  const yearRange = buildYearRange(currentRealYear);

  return (
    <div className="data-picker-calendar">
      {/* ── Header ── */}
      <div className="data-picker-header">
        <div
          onClick={toggleMonthYearPicker}
          className={`data-picker-header-date ${isMonthYearPickerOpen ? "open" : ""}`}
        >
          {`${MONTH_NAMES[month]} ${year}`}
          <ButtonIcon
            appearance="plain"
            variant="secondary"
            icon="keyboard_arrow_right"
            size="sm"
          />
        </div>
        <div
          className={`data-picker-header-buttons ${isMonthYearPickerOpen ? "hidden" : ""}`}
        >
          <ButtonIcon
            variant="secondary"
            size="sm"
            icon="keyboard_arrow_left"
            appearance="plain"
            onClick={handlePrevMonth}
          />
          <ButtonIcon
            variant="secondary"
            appearance="plain"
            size="sm"
            icon="keyboard_arrow_right"
            onClick={handleNextMonth}
          />
        </div>
      </div>

      {/* ── Body ── */}
      <div className="data-picker-body-container">
        {/* Month & Year picker panel */}
        <div
          className={`data-picker-body-months-years ${isMonthYearPickerOpen ? "" : "hidden"}`}
        >
          <div className="data-picker-months">
            {MONTH_NAMES.map((monthName, index) => (
              <button
                key={monthName}
                ref={(el) => {
                  monthRefs.current[index] = el;
                }}
                className={`months ${month === index ? "selected" : ""}`}
                onClick={() => handleSelectMonth(index)}
              >
                {monthName}
              </button>
            ))}
          </div>
          <div className="data-picker-years">
            {yearRange.map((yearValue, index) => (
              <button
                key={yearValue}
                ref={(el) => {
                  yearRefs.current[index] = el;
                }}
                className={`years ${year === yearValue ? "selected" : ""}`}
                onClick={() => handleSelectYear(yearValue)}
              >
                {yearValue}
              </button>
            ))}
          </div>
        </div>

        {/* Day grid */}
        <div
          className={`data-picker-body ${isMonthYearPickerOpen ? "hidden" : ""}`}
        >
          <div className="data-picker-weekdays">
            {WEEKDAY_LABELS.map((label) => (
              <div translate="no" key={label} className="data-picker-week-day">
                {label[0]}
              </div>
            ))}
          </div>
          <div className="data-picker-days">
            {calendarDays.map((calendarDay, index) => (
              <DatePickerDay
                key={index}
                day={calendarDay.day}
                type={calendarDay.type}
                onSelect={handleSelectDay}
                isSelected={
                  selectedDate?.getDate() === calendarDay.day &&
                  selectedDate?.getMonth() === month &&
                  selectedDate?.getFullYear() === year &&
                  calendarDay.type === "current"
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="data-picker-footer">
        <Button size="sm" variant="secondary" onClick={onRevert}>
          Reset
        </Button>
        <Button size="sm" variant="primary" onClick={onClose}>
          Done
        </Button>
      </div>
    </div>
  );
}
