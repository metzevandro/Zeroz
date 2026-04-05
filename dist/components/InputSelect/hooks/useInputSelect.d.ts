interface UseInputSelectOptions {
    value?: string;
    disabled?: boolean;
    error?: boolean;
    onChange: (value: string) => void;
}
interface UseInputSelectReturn {
    uid: string;
    isOpen: boolean;
    selectedOption: string | undefined;
    dropdownRef: React.RefObject<HTMLDivElement>;
    triggerRef: React.RefObject<HTMLButtonElement>;
    open: () => void;
    close: () => void;
    selectOption: (option: string) => void;
    handleKeyDown: (e: React.KeyboardEvent) => void;
}
/**
 * Manages all state and interaction logic for `InputSelect`:
 * - Controlled value sync
 * - Open/close dropdown panel
 * - Click-outside detection
 * - Option selection
 * - Keyboard navigation (Enter/Space to open, Escape to close, arrows to navigate)
 */
export declare function useInputSelect({ value, disabled, error, onChange, }: UseInputSelectOptions): UseInputSelectReturn;
export {};
