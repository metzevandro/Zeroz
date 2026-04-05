interface UseSidebarItemOptions {
    isActive?: boolean;
    hasChildren: boolean;
    onClick?: () => void;
}
interface UseSidebarItemReturn {
    contentHeight: number;
    contentRef: React.RefObject<HTMLDivElement>;
    handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}
/**
 * Manages the expand/collapse animation for a `SidebarItem` with sub-items.
 * Calculates the content height for the smooth max-height transition,
 * and handles Enter key activation.
 */
export declare function useSidebarItem({ isActive, hasChildren, onClick, }: UseSidebarItemOptions): UseSidebarItemReturn;
export {};
