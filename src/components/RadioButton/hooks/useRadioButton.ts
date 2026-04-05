import { useState, useEffect, useId, useCallback } from "react";

interface UseRadioButtonOptions {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (isChecked: boolean) => void;
}

interface UseRadioButtonReturn {
  uid: string;
  isChecked: boolean;
  toggle: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
}

/**
 * Manages the state and interaction logic for `RadioButton`:
 * - Syncs internal state when the controlled `checked` prop changes
 * - Guards toggle against disabled state
 * - Handles Enter key activation
 * - Generates a stable accessible `id` for label association
 */
export function useRadioButton({
  checked,
  disabled = false,
  onChange,
}: UseRadioButtonOptions): UseRadioButtonReturn {
  const [isChecked, setIsChecked] = useState(checked ?? false);
  const generatedId = useId();
  const uid = `radio-button-${generatedId}`;

  useEffect(() => {
    if (checked !== undefined) setIsChecked(checked);
  }, [checked]);

  const toggle = useCallback(() => {
    if (disabled) return;
    const next = !isChecked;
    setIsChecked(next);
    onChange?.(next);
  }, [disabled, isChecked, onChange]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    },
    [toggle],
  );

  return { uid, isChecked, toggle, handleKeyDown };
}
