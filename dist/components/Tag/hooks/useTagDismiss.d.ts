interface UseTagDismissOptions {
    animationDuration?: number;
    onClose?: () => void;
}
interface UseTagDismissReturn {
    isDismissed: boolean;
    isClosing: boolean;
    handleClose: () => void;
}
/**
 * Manages the tag dismiss lifecycle:
 * 1. `handleClose` is called → `isClosing` becomes `true` (CSS animation starts)
 * 2. After `animationDuration` ms → `isDismissed` becomes `true` (tag removed)
 * 3. `onClose` is fired after the animation completes, not before
 */
export declare function useTagDismiss({ animationDuration, onClose, }: UseTagDismissOptions): UseTagDismissReturn;
export {};
