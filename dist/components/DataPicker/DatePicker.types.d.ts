export interface DatePickerProps {
    /**
     * Controlled date value in `DD/MM/YYYY` format.
     * When provided, the component uses this as the initial input value.
     */
    value?: string;
    /**
     * Callback fired whenever the selected date changes,
     * either via the calendar or direct input typing.
     * Receives the formatted date string `DD/MM/YYYY`.
     */
    onChange: (value: string) => void;
    /**
     * Label displayed above the date input field.
     */
    label: string;
    /**
     * When `true`, disables the input and prevents calendar interaction.
     * @default false
     */
    disabled?: boolean;
    /**
     * When `true`, renders the input in skeleton/loading state.
     * @default false
     */
    skeleton?: boolean;
}
export interface DatePickerCalendarProps {
    /** Currently selected date, or `null` if none is selected. */
    selectedDate: Date | null;
    /** Callback fired when the user selects a day in the calendar. */
    onSelectDate: (date: Date) => void;
    /** Callback fired when the user confirms the selection ("Done" button). */
    onClose: () => void;
    /** Callback fired when the user resets to today's date ("Reset" button). */
    onRevert: () => void;
}
export interface DatePickerDayProps {
    /** Day number to display. */
    day: number;
    /**
     * Indicates whether the day belongs to the current month or an adjacent one.
     * `"current"` → belongs to the displayed month.
     * `"other"`   → belongs to the previous or next month.
     */
    type: "current" | "other";
    /** Whether this day cell is the currently selected date. */
    isSelected: boolean;
    /** Callback fired when the user clicks a day cell. */
    onSelect: (day: number, type: "current" | "other") => void;
}
/** Raw day entry used internally to build the calendar grid. */
export interface CalendarDay {
    day: number;
    type: "current" | "other";
}
