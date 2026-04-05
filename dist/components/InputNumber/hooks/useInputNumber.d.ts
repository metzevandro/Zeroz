interface UseInputNumberOptions {
    min?: number;
    max?: number;
    value?: number;
    onChange?: (value: number | undefined) => void;
}
interface UseInputNumberReturn {
    uid: string;
    numero: number | undefined;
    increment: () => void;
    decrement: () => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
/**
 * Manages the numeric state and interaction logic for `InputNumber`:
 * - Initializes from `min` or `undefined`
 * - Syncs internal state when the controlled `value` prop changes
 * - Clamps typed and stepped values within `[min, max]`
 * - Fires `onChange` only when the value actually changes
 * - Generates a stable accessible `id` for the label/input association
 */
export declare function useInputNumber({ min, max, value, onChange, }: UseInputNumberOptions): UseInputNumberReturn;
export {};
