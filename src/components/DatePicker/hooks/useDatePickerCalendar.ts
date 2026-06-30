import { useState, useRef, useEffect } from "react";
import { clampDayToMonth, YEAR_RANGE } from "../utils/datePicker.utils";

interface UseDatePickerCalendarOptions {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

interface UseDatePickerCalendarReturn {
  currentDate: Date;
  internalSelectedDate: Date | null;
  isMonthYearPickerOpen: boolean;
  monthRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  yearRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  currentRealYear: number;
  toggleMonthYearPicker: () => void;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  handleSelectDay: (day: number, type: "current" | "other") => void;
  handleSelectMonth: (month: number) => void;
  handleSelectYear: (year: number) => void;
}

export function useDatePickerCalendar({
  selectedDate,
  onSelectDate,
}: UseDatePickerCalendarOptions): UseDatePickerCalendarReturn {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [internalSelectedDate, setInternalSelectedDate] = useState<Date | null>(
    null,
  );
  const [isMonthYearPickerOpen, setIsMonthYearPickerOpen] = useState(false);

  const monthRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const yearRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const currentRealYear = new Date().getFullYear();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const scrollToSelected = (date: Date) => {
    requestAnimationFrame(() => {
      monthRefs.current[date.getMonth()]?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });

      yearRefs.current[
        date.getFullYear() - (currentRealYear - YEAR_RANGE.past)
      ]?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    });
  };

  useEffect(() => {
    if (!isMonthYearPickerOpen) return;

    const date = selectedDate ?? currentDate;
    scrollToSelected(date);
  }, [isMonthYearPickerOpen, selectedDate, currentDate]);

  useEffect(() => {
    if (selectedDate) {
      setCurrentDate(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1),
      );
      setInternalSelectedDate(selectedDate);
    }
  }, [selectedDate]);

  const commit = (date: Date) => {
    setCurrentDate(new Date(date.getFullYear(), date.getMonth(), 1));
    setInternalSelectedDate(date);
    onSelectDate(date);
  };

  const toggleMonthYearPicker = () => setIsMonthYearPickerOpen((prev) => !prev);

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));

  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleSelectDay = (day: number, type: "current" | "other") => {
    let newDate: Date;

    if (type === "other") {
      const targetMonth = day > 15 ? month - 1 : month + 1;
      newDate = new Date(year, targetMonth, day);
    } else {
      newDate = new Date(year, month, day);
    }

    commit(newDate);
  };

  const handleSelectMonth = (newMonth: number) => {
    const currentDay = internalSelectedDate?.getDate() ?? 1;
    const newDate = clampDayToMonth(year, newMonth, currentDay);

    commit(newDate);

    monthRefs.current[newMonth]?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  const handleSelectYear = (newYear: number) => {
    const currentDay = internalSelectedDate?.getDate() ?? 1;
    const newDate = clampDayToMonth(newYear, month, currentDay);

    commit(newDate);

    yearRefs.current[
      newYear - (currentRealYear - YEAR_RANGE.past)
    ]?.scrollIntoView({
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
