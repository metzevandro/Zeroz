interface UseRadioButtonOptions {
    checked?: boolean;
    disabled?: boolean;
    onChange?: (isChecked: boolean) => void;
}
interface UseRadioButtonReturn {
    uid: string;
    isChecked: boolean;
    toggle: () => void;
    handleKeyDown: (e: React.KeyboardEvent) => void;
}
/**
 * Manages the state and interaction logic for `RadioButton`:
 * - Syncs internal state when the controlled `checked` prop changes
 * - Guards toggle against disabled state
 * - Handles Enter key activation
 * - Generates a stable accessible `id` for label association
 */
export declare function useRadioButton({ checked, disabled, onChange, }: UseRadioButtonOptions): UseRadioButtonReturn;
export {};
