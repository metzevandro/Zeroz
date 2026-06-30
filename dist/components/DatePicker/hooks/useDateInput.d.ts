interface UseDateInputOptions {
    value?: string;
    onChange: (value: string) => void;
    onDateChange: (date: Date) => void;
}
interface UseDateInputReturn {
    inputValue: string;
    error: boolean;
    errorMessage: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    syncFromDate: (date: Date) => void;
}
/**
 * Manages the text input state for the DatePicker, including:
 * - Auto-masking as the user types (DD/MM/YYYY)
 * - Backspace handling with mask awareness
 * - Inline date validation with error feedback
 * - Syncing the input value from an externally selected date
 */
export declare function useDateInput({ value, onChange, onDateChange, }: UseDateInputOptions): UseDateInputReturn;
export {};
