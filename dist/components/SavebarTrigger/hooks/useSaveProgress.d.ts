interface UseSaveProgressReturn {
    saving: boolean;
    progressValue: number;
    startSave: (onComplete: () => void) => void;
    resetSave: () => void;
}
/**
 * Manages the animated progress bar shown during a save operation.
 * Increments from 0 → 100 over `TOTAL_MS`, then calls `onComplete`
 * and resets after a short delay.
 */
export declare function useSaveProgress(): UseSaveProgressReturn;
export {};
