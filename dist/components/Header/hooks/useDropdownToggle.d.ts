interface UseDropdownToggleReturn {
    isOpen: boolean;
    dropdownHeight: number;
    dropdownRef: React.RefObject<HTMLDivElement>;
    contentRef: React.RefObject<HTMLDivElement>;
    toggle: () => void;
}
/**
 * Manages the open/close state of a dropdown panel, including:
 * - Toggle on trigger click
 * - Click-outside detection to auto-close
 * - Dynamic max-height calculation for the expand/collapse animation
 */
export declare function useDropdownToggle(): UseDropdownToggleReturn;
export {};
