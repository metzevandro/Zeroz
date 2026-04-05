import { useState } from "react";

const TOTAL_MS = 500;
const TICK_MS = 50;
const INCREMENT = 100 / (TOTAL_MS / TICK_MS);
const RESET_DELAY_MS = 400;

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
export function useSaveProgress(): UseSaveProgressReturn {
  const [saving, setSaving] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  const resetSave = () => {
    setSaving(false);
    setProgressValue(0);
  };

  const startSave = (onComplete: () => void) => {
    setSaving(true);
    let current = 0;
    let called = false;

    const id = setInterval(() => {
      current += INCREMENT;
      setProgressValue(Math.min(current, 100));

      if (current >= 100) {
        clearInterval(id);
        if (!called) {
          called = true;
          onComplete();
        }
        setTimeout(resetSave, RESET_DELAY_MS);
      }
    }, TICK_MS);
  };

  return { saving, progressValue, startSave, resetSave };
}
