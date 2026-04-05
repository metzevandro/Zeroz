interface UseCardDropdownReturn {
    isOpen: boolean;
    contentHeight: number;
    contentRef: React.RefObject<HTMLDivElement>;
    toggle: () => void;
}
/**
 * Manages the open/close state of the CardDropdown,
 * including dynamic height calculation for the expand/collapse animation.
 */
export declare function useCardDropdown(): UseCardDropdownReturn;
export {};
