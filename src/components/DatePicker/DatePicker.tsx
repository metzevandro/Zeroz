import "./DatePicker.scss";
import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import { DatePickerProps } from "./DatePicker.types";
import { useDateInput } from "./hooks/useDateInput";
import { formatDate } from "./utils/datePicker.utils";
import { DatePickerCalendar } from "./subcomponents/DatePickerCalendar";

/**
 * `DatePicker` is a date input field with an attached calendar dropdown.
 *
 * Users can type a date directly (auto-masked as `DD/MM/YYYY`) or select one
 * from the visual calendar. The calendar supports month/year navigation and
 * a dedicated month+year picker panel for faster navigation.
 *
 * On mobile screens (< 425px), the calendar opens as a bottom sheet with a
 * slide-up animation and full viewport width.
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
function DatePicker({
  value,
  onChange,
  label,
  disabled = false,
  skeleton = false,
}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const {
    inputValue,
    error,
    errorMessage,
    handleInputChange,
    handleKeyDown,
    syncFromDate,
  } = useDateInput({
    value,
    onChange,
    onDateChange: setSelectedDate,
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth < 425);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    syncFromDate(date);
    onChange(formatDate(date));
  };

  const handleRevert = () => {
    handleSelectDate(new Date());
  };

  const handleCloseModal = () => {
    setIsCalendarOpen(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Input
        label={label}
        onClick={() => setIsCalendarOpen((prev) => !prev)}
        error={error}
        textError={errorMessage}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        icon="calendar_month"
        fillIcon
        disabled={disabled}
        skeleton={skeleton}
      />

      {!isMobileScreen && (
        <div className={`data-picker ${isCalendarOpen ? "open" : ""}`}>
          <DatePickerCalendar
            selectedDate={selectedDate}
            onSelectDate={handleSelectDate}
            onClose={() => setIsCalendarOpen(false)}
            onRevert={handleRevert}
          />
        </div>
      )}

      {isMobileScreen && (
        <>
          {isCalendarOpen && (
            <div className="data-picker-modal-overlay" onClick={handleCloseModal} />
          )}
          <div className={`data-picker-modal ${isCalendarOpen ? "open" : ""}`}>
            <div className="data-picker-modal-content">
              <DatePickerCalendar
                selectedDate={selectedDate}
                onSelectDate={handleSelectDate}
                onClose={handleCloseModal}
                onRevert={handleRevert}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DatePicker;