interface UseInputTimeOptions {
    value?: string;
    onChange: (value: string) => void;
}
interface UseInputTimeReturn {
    isOpen: boolean;
    selectedHour: string;
    selectedMinute: string;
    displayValue: string;
    togglePicker: () => void;
    closePicker: () => void;
    handleHourSelect: (hour: string) => void;
    handleMinuteSelect: (minute: string) => void;
    handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
}
/**
 * Manages all state and interaction logic for `InputTime`:
 * - Syncs internal hour/minute state from the controlled `value` prop
 * - Handles typed input with auto-masking (`HH:MM`)
 * - Coordinates picker open/close state
 * - Fires `onChange` on every mutation
 */
export declare function useInputTime({ value, onChange, }: UseInputTimeOptions): UseInputTimeReturn;
export {};
