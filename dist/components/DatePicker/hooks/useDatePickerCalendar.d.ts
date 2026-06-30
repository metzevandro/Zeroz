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
export declare function useDatePickerCalendar({ selectedDate, onSelectDate, }: UseDatePickerCalendarOptions): UseDatePickerCalendarReturn;
export {};
