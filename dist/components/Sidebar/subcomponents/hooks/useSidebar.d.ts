interface UseSidebarReturn {
    activeItem: string | null;
    toggleItem: (index: string) => void;
}
/**
 * Manages the accordion state for the sidebar's top-level items.
 * Only one item can be expanded at a time — clicking an open item collapses it.
 */
export declare function useSidebar(): UseSidebarReturn;
export {};
