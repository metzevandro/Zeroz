interface UseCheckboxOptions {
    modelValue?: boolean;
    id?: string;
    disabled?: boolean;
    onUpdate?: (value: boolean) => void;
}
interface UseCheckboxReturn {
    checked: boolean;
    uid: string;
    handleChange: () => void;
    handleKeyDown: (event: React.KeyboardEvent<HTMLLabelElement>) => void;
}
/**
 * Manages the internal state and interaction logic of `Checkbox`:
 * - Syncs internal checked state when `modelValue` changes externally
 * - Generates a stable unique `id` when none is provided
 * - Handles toggle on change and on Enter key press
 */
export declare function useCheckbox({ modelValue, id, disabled, onUpdate, }: UseCheckboxOptions): UseCheckboxReturn;
export {};
