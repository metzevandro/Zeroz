import "./DataPicker.scss";
import { DatePickerProps } from "./DatePicker.types";
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
declare function DatePicker({ value, onChange, label, disabled, skeleton, }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
export default DatePicker;
