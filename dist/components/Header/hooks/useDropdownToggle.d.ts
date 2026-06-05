interface UseDropdownToggleReturn {
    isOpen: boolean;
    dropdownRef: React.RefObject<HTMLDivElement>;
    toggle: () => void;
}
/**
 * Manages the open/close state of the HeaderProfile dropdown:
 * - Toggle on trigger click
 * - Click-outside detection to auto-close
 *
 * Height animation is now delegated to the `Dropdown` component
 * via the `visible` prop injected by `HeaderProfile`.
 */
export declare function useDropdownToggle(): UseDropdownToggleReturn;
export {};
